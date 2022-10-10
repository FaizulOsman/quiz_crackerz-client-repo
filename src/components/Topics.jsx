import React from "react";
import { useLoaderData } from "react-router-dom";
import QuizCard from "./QuizCard";

const Topics = () => {
  const quizTopics = useLoaderData().data;

  return (
    <div className="w-11/12 mx-auto">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 my-24">
        {quizTopics.map((quiz) => (
          <QuizCard key={quiz.id} quiz={quiz} />
        ))}
      </div>
    </div>
  );
};

export default Topics;
