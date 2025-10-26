import React, {useContext, useEffect} from "react";
import {useParams, useHistory} from "react-router-dom";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import {getBlogPostById} from "../../blogPosts";
import Header from "../../components/header/Header";
import StyleContext from "../../contexts/StyleContext";
import "./BlogPostPage.scss";

export default function BlogPostPage() {
  const {isDark} = useContext(StyleContext);
  const {postId} = useParams();
  const history = useHistory();
  const post = getBlogPostById(postId);

  // Custom components for markdown rendering
  const markdownComponents = {
    img: ({node, ...props}) => {
      // Check if this is a "featured" image (first image in content)
      const isFeatured = props.alt && props.alt.includes("Setup");

      if (isFeatured) {
        return (
          <img
            {...props}
            style={{
              float: "right",
              margin: "0 0 10px 20px",
              width: "300px",
              maxWidth: "100%",
              borderRadius: "12px",
              boxShadow: "0 4px 10px rgba(0,0,0,0.15)"
            }}
          />
        );
      }

      return <img {...props} style={{maxWidth: "100%", borderRadius: "8px"}} />;
    }
  };

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  if (!post) {
    return (
      <div className={isDark ? "dark-mode" : null}>
        <Header />
        <div className="blog-post-container">
          <div className="blog-post-content">
            <h1>Blog Post Not Found</h1>
            <p>Sorry, the blog post you're looking for doesn't exist.</p>
            <button
              onClick={() => history.push("/#blogs")}
              className="back-button"
            >
              Back to Blogs
            </button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className={isDark ? "dark-mode" : null}>
      <Header />
      <div className="blog-post-container">
        <div className="blog-post-content">
          <button
            onClick={() => history.push("/#blogs")}
            className="back-button"
          >
            ← Back to Blogs
          </button>
          <article
            className={isDark ? "markdown-body dark-mode" : "markdown-body"}
          >
            <ReactMarkdown
              remarkPlugins={[remarkGfm]}
              components={markdownComponents}
            >
              {post.content}
            </ReactMarkdown>
          </article>
          <div className="blog-post-footer">
            <p className="blog-post-date">
              Published on{" "}
              {new Date(post.date).toLocaleDateString("en-US", {
                year: "numeric",
                month: "long",
                day: "numeric"
              })}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
