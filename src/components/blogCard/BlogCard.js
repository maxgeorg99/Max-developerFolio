import React from "react";
import {Link} from "react-router-dom";
import "./BlogCard.scss";

export default function BlogCard({blog, isDark}) {
  function openUrlInNewTab(url, name) {
    if (!url) {
      console.log(`URL for ${name} not found`);
      return;
    }
    var win = window.open(url, "_blank");
    win.focus();
  }

  // If blog has an id, it's an internal post - use Link
  if (blog.id) {
    return (
      <Link to={`/blog/${blog.id}`} style={{textDecoration: 'none', color: 'inherit'}}>
        <div className={isDark ? "blog-container dark-mode" : "blog-container"}>
          <div
            className={
              isDark ? "dark-mode blog-card blog-card-shadow" : "blog-card"
            }
          >
            <h3 className={isDark ? "small-dark blog-title" : "blog-title"}>
              {blog.title}
            </h3>
            <p className={isDark ? "small-dark small" : "small"}>
              {blog.description}
            </p>
            <div className="go-corner">
              <div className="go-arrow">→</div>
            </div>
          </div>
        </div>
      </Link>
    );
  }

  // If blog has a url, it's an external post - use onClick
  return (
    <div onClick={() => openUrlInNewTab(blog.url, blog.title)}>
      <div className={isDark ? "blog-container dark-mode" : "blog-container"}>
        <div
          className={
            isDark ? "dark-mode blog-card blog-card-shadow" : "blog-card"
          }
        >
          <h3 className={isDark ? "small-dark blog-title" : "blog-title"}>
            {blog.title}
          </h3>
          <p className={isDark ? "small-dark small" : "small"}>
            {blog.description}
          </p>
          <div className="go-corner">
            <div className="go-arrow">→</div>
          </div>
        </div>
      </div>
    </div>
  );
}
