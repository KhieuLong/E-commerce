import React from "react";
import { Link } from "react-router-dom";

const BlogCard = () => {
  return (
    <div className="col-3">
      <div className="blog- card">
        <div className="card-image">
          <img src="images/blog-1.jpg" className="img-fluid" alt="" />
        </div>
        <div className="blog-content">
          <p className="date">1 Desc, 2023</p>
          <h5 className="title">New Day in the Morning</h5>
          <p className="desc">
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Reprehenderit, laboriosam. Iste doloribus, culpa hic consequatur
            nemo reprehenderit voluptatibus earum sed? Ipsa odio beatae quod
            recusandae earum quisquam sequi dicta repellat.
          </p>
          <Link className="button" to="">
            Read More
          </Link>
        </div>
      </div>
    </div>
  );
};

export default BlogCard;
