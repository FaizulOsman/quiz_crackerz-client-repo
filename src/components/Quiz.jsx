import React from "react";
import { useLoaderData } from "react-router-dom";
import SingleQuiz from "./SingleQuiz";

const Quiz = () => {
  const quizses = useLoaderData().data;
  const questions = quizses.questions;
  console.log(quizses);
  return (
    <div className="w-11/12 md:w-6/12 mx-auto my-14">
      <h2 className="text-4xl font-semibold text-center mb-10">
        Quiz of {quizses.name}
      </h2>
      <div className="grid grid-cols-1 gap-4">
        {questions.map((quiz) => (
          <SingleQuiz key={quiz.id} quiz={quiz} />
        ))}
      </div>
    </div>
  );
};

export default Quiz;
