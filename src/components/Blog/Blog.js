import React from "react";
import "./Blog.scss";
import Banner from "../assets/illustration-article.svg";
import author from "../assets/image-avatar.webp";
const Blog = () => {
  return (
    <div className="Blog">
      <div className="Blog__card">
        <div className="Blog__card__image">
          <img src={Banner} alt="" />
        </div>
        <div className="Blog__card__info">
          <h4>Learning</h4>
          <p className="date">Published 21 Dec 2023</p>
          <h2>HTML & CSS foundations</h2>
          <p className="statement">
            These languages are backbone of every website, defining structure,
            content, and presentation
          </p>
        </div>
        <div className="Blog__card__author">
          <img src={author} alt="" />
          <h4>Greg Hopper</h4>
        </div>
      </div>
    </div>
  );
};

export default Blog;
