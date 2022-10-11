import React from "react";
import { useLoaderData } from "react-router-dom";
import SingleQuiz from "./SingleQuiz";

const Quiz = () => {
  const quizses = useLoaderData().data;
  const questions = quizses.questions;

  const handleTotalMark = (count) => {
    console.log(count);
  };

  return (
    <div className="w-11/12 md:w-6/12 mx-auto my-14">
      <h2 className="text-4xl font-semibold text-center mb-10">
        Quiz of {quizses.name}
      </h2>
      <div className="grid grid-cols-1 gap-4">
        {questions.map((quiz) => (
          <SingleQuiz
            key={quiz.id}
            quiz={quiz}
            handleTotalMark={handleTotalMark}
          />
        ))}
      </div>
      <div className="text-center mt-4">
        <button onClick={handleTotalMark} className="btn btn-primary">
          Show total marks
        </button>

        {/* <label htmlFor="my-modal-4" className="btn modal-button">
          open modal
        </label>
        <input type="checkbox" id="my-modal-4" className="modal-toggle" />
        <label htmlFor="my-modal-4" className="modal cursor-pointer">
          <label className="modal-box relative" htmlFor="">
            <h3 className="text-lg font-bold">
              Congratulations random Internet user!
            </h3>
            <p className="py-4">
              You've been selected for a chance to get one year of subscription
              to use Wikipedia for free!
            </p>
          </label>
        </label> */}
      </div>
    </div>
  );
};

export default Quiz;
