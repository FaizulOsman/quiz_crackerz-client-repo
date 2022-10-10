import React from "react";
import { Link, useLoaderData } from "react-router-dom";
import QuizCard from "./QuizCard";

const Home = () => {
  const quizzes = useLoaderData().data;

  return (
    <div className="w-11/12 mx-auto">
      {/* https://i.ibb.co/b61mQt6/quiz-banner.jpg */}
      <div className="card lg:card-side bg-base-100 shadow-xl border mt-10">
        <figure>
          <img src="https://i.ibb.co/qYLVPV4/banner.webp" alt="Album" />
        </figure>
        <div className="card-body">
          <h2 className="card-title">New album is released!</h2>
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
    </div>
  );
};

export default Home;
