import React, {useContext, useEffect} from "react";
import {useParams, useHistory} from "react-router-dom";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import rehypeRaw from "rehype-raw";
import {getBlogPostById} from "../../blogPosts";
import Header from "../../components/header/Header";
import StyleContext from "../../contexts/StyleContext";
import DatabaseTimeline from "../../components/databaseTimeline/DatabaseTimeline";
import "./BlogPostPage.scss";

export default function BlogPostPage() {
  const {isDark} = useContext(StyleContext);
  const {postId} = useParams();
  const history = useHistory();
  const post = getBlogPostById(postId);

  // Custom components for markdown rendering
  const markdownComponents = {
    databasetimeline: () => {
      return <DatabaseTimeline />;
    },
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
    },
    h2: ({node, children, ...props}) => {
      // Add engine icons after each engine headline
      if (
        postId === "game-engine-comparison" ||
        postId === "jpa-comparison" ||
        postId === "server-side-rendering-comparison" ||
        postId === "multiplatform-frameworks-comparison" ||
        postId === "rust-stack"
      ) {
        const headlineText =
          typeof children === "string" ? children : children?.[0];
        let iconSrc = null;
        let darkIconSrc = null;
        let websiteUrl = null;

        if (headlineText === "Unity") {
          iconSrc = `${process.env.PUBLIC_URL}/unity.png`;
          darkIconSrc = `${process.env.PUBLIC_URL}/unity-dark.png`;
          websiteUrl = "https://unity.com";
        } else if (headlineText === "Unreal Engine") {
          iconSrc = `${process.env.PUBLIC_URL}/unreal.png`;
          websiteUrl = "https://www.unrealengine.com";
        } else if (headlineText === "Godot") {
          iconSrc = `${process.env.PUBLIC_URL}/godot.png`;
          websiteUrl = "https://godotengine.org";
        } else if (headlineText === "Bevy") {
          iconSrc = `${process.env.PUBLIC_URL}/bevy.png`;
          websiteUrl = "https://bevyengine.org";
        } else if (headlineText === "Phaser 2D") {
          iconSrc = `${process.env.PUBLIC_URL}/phaser.png`;
          websiteUrl = "https://phaser.io";
        } else if (headlineText === "Love2D") {
          iconSrc = `${process.env.PUBLIC_URL}/love2d.png`;
          websiteUrl = "https://love2d.org";
        } else if (headlineText === "Hibernate") {
          iconSrc = `${process.env.PUBLIC_URL}/hibernate.png`;
          websiteUrl = "https://hibernate.org/orm/";
        } else if (headlineText === "Spring Data JPA") {
          iconSrc = `${process.env.PUBLIC_URL}/spring-data-jpa.svg`;
          websiteUrl = "https://spring.io/projects/spring-data-jpa";
        } else if (headlineText === "MyBatis") {
          iconSrc = `${process.env.PUBLIC_URL}/mybatis.svg`;
          websiteUrl = "https://mybatis.org/mybatis-3/";
        } else if (headlineText === "jOOQ") {
          iconSrc = `${process.env.PUBLIC_URL}/jooq.png`;
          darkIconSrc = `${process.env.PUBLIC_URL}/jooq-dark.png`;
          websiteUrl = "https://www.jooq.org/";
        } else if (headlineText === "Ebean ORM") {
          iconSrc = `${process.env.PUBLIC_URL}/ebean.png`;
          websiteUrl = "https://ebean.io/";
        } else if (headlineText === "Eclipse Store") {
          iconSrc = `${process.env.PUBLIC_URL}/eclipse-store.png`;
          darkIconSrc = `${process.env.PUBLIC_URL}/eclipse-store-dark.png`;
          websiteUrl = "https://eclipsestore.io/";
        } else if (headlineText === "FreeMarker") {
          iconSrc = `${process.env.PUBLIC_URL}/freemarker.png`;
          websiteUrl = "https://freemarker.apache.org/";
        } else if (headlineText === "Thymeleaf") {
          iconSrc = `${process.env.PUBLIC_URL}/thymeleaf.png`;
          websiteUrl = "https://www.thymeleaf.org/";
        } else if (headlineText === "jte") {
          iconSrc = `${process.env.PUBLIC_URL}/jte.svg`;
          websiteUrl = "https://jte.gg/";
        } else if (headlineText === "Flutter") {
          iconSrc = `${process.env.PUBLIC_URL}/flutter.svg`;
          websiteUrl = "https://flutter.dev/";
        } else if (headlineText === "React Native") {
          iconSrc = `${process.env.PUBLIC_URL}/react-native.svg`;
          websiteUrl = "https://reactnative.dev/";
        } else if (headlineText === "Kotlin Multiplatform") {
          iconSrc = `${process.env.PUBLIC_URL}/kotlin.png`;
          websiteUrl = "https://www.jetbrains.com/kotlin-multiplatform/";
        } else if (headlineText === "Lynx") {
          iconSrc = `${process.env.PUBLIC_URL}/lynx.svg`;
          websiteUrl = "https://lynxjs.org/";
        } else if (headlineText === "Bevy Client") {
          iconSrc = `${process.env.PUBLIC_URL}/bevy.png`;
          websiteUrl = "https://bevyengine.org";
        } else if (headlineText === "Dioxus Subsecond") {
          iconSrc = `${process.env.PUBLIC_URL}/dioxus.png`;
          websiteUrl = "https://dioxuslabs.com";
        } else if (headlineText === "Ratatui") {
          iconSrc = `${process.env.PUBLIC_URL}/ratatui.png`;
          websiteUrl = "https://ratatui.rs";
        } else if (headlineText === "SpacetimeDB") {
          iconSrc = `${process.env.PUBLIC_URL}/spacetime.png`;
          darkIconSrc = `${process.env.PUBLIC_URL}/spacetime-dark.png`;
          websiteUrl = "https://spacetimedb.com";
        }

        if (iconSrc) {
          return (
            <h2 {...props} className="engine-headline">
              {children}
              {websiteUrl && (
                <a
                  href={websiteUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="engine-icon-link"
                >
                  {darkIconSrc ? (
                    <>
                      <img
                        src={iconSrc}
                        alt={headlineText}
                        className="engine-icon-inline light-mode-icon"
                      />
                      <img
                        src={darkIconSrc}
                        alt={headlineText}
                        className="engine-icon-inline dark-mode-icon"
                      />
                    </>
                  ) : (
                    <img
                      src={iconSrc}
                      alt={headlineText}
                      className="engine-icon-inline"
                    />
                  )}
                </a>
              )}
            </h2>
          );
        }
      }
      return <h2 {...props}>{children}</h2>;
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
              rehypePlugins={[rehypeRaw]}
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
