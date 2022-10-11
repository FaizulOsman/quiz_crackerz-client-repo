import React, { useState } from "react";
import { useLoaderData } from "react-router-dom";
import SingleQuiz from "./SingleQuiz";

const Quiz = () => {
  const quizses = useLoaderData().data;
  const questions = quizses.questions;
  const [count, setCount] = useState(0);

  return (
    <div className="w-11/12 md:w-6/12 mx-auto my-14">
      <h2 className="text-4xl font-semibold text-center mb-10">
        Quiz of {quizses.name}
      </h2>
      <div className="grid grid-cols-1 gap-4">
        {questions.map((quiz, index) => (
          <SingleQuiz
            key={quiz.id}
            quiz={quiz}
            setCount={setCount}
            count={count}
            index={index}
          />
        ))}
      </div>
      <div className="text-center mt-4">
        <label htmlFor="my-modal-4" className="btn btn-primary modal-button">
          Show total marks
        </label>
        <input type="checkbox" id="my-modal-4" className="modal-toggle" />
        <label htmlFor="my-modal-4" className="modal cursor-pointer">
          <label className="modal-box relative py-10" htmlFor="">
            <h3 className="text-lg font-bold">Total Correct Answer: {count}</h3>
            <p className="py-4">Keep going!!!</p>
          </label>
        </label>
      </div>
    </div>
  );
};

export default Quiz;
