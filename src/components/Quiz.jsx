import React from "react";
import { useLoaderData } from "react-router-dom";

const Quiz = () => {
  const quiz = useLoaderData().data.questions;

  return <div>Quiz</div>;
};

export default Quiz;
