import React from "react";
import { useLoaderData } from "react-router-dom";
import Banner from "./Banner";
import QuizCard from "./QuizCard";

const Home = () => {
  const quizTopics = useLoaderData().data;

  return (
    <div className="w-11/12 mx-auto">
      <Banner />

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 my-32">
        {quizTopics.map((quiz) => (
          <QuizCard key={quiz.id} quiz={quiz} />
        ))}
      </div>
    </div>
  );
};

export default Home;
