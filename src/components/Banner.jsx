import React from "react";
import { Link } from "react-router-dom";

const Banner = () => {
  return (
    <div className="card lg:card-side bg-base-100 shadow-xl border mt-10">
      <figure>
        <img
          className="w-full"
          src="https://i.ibb.co/b61mQt6/quiz-banner.jpg"
          alt="Album"
        />
      </figure>
      <div className="card-body">
        <h2 className="card-title">
          Common Questions are added in the blog page!
        </h2>
        <p>
          Learning is not attained by chance, it must be sought for with ardor
          and attended to with diligence.
        </p>
        <div className="card-actions justify-end">
          <Link to="/blog" className="btn btn-primary">
            Quiz Blog
          </Link>
        </div>
      </div>
    </div>
  );
};

// https://i.ibb.co/b61mQt6/quiz-banner.jpg
// https://i.ibb.co/qYLVPV4/banner.webp
export default Banner;
