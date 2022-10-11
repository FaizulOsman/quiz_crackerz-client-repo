import React from "react";
import { NavLink } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const SingleQuiz = ({ quiz }) => {
  const { correctAnswer, id, options, question } = quiz;

  const handleSelectedAnswer = (option) => {
    if (option === correctAnswer) {
      toast.success("Answer is correct!", { autoClose: 700 });
    } else {
      toast.error("Ans is Wrong!", { autoClose: 700 });
    }
  };

  return (
    <div className="">
      <div className="card bg-base-100 border shadow-xl">
        <div className="card-body">
          <h2 className="card-title text-center mb-4">Quiz : {question}</h2>
          <div className="grid grid-cols-2 gap-2">
            <NavLink
              onClick={() => handleSelectedAnswer(options[0])}
              style={({ isActive }) =>
                isActive ? { backgroundColor: "aqua" } : undefined
              }
              className="btn btn-outline btn-primary h-full py-4"
            >
              {options[0]}
            </NavLink>
            <NavLink
              style={({ isActive }) =>
                !isActive ? { backgroundColor: "aqua" } : undefined
              }
              onClick={() => handleSelectedAnswer(options[1])}
              className="btn btn-outline btn-primary h-full py-4"
            >
              {options[1]}
            </NavLink>
            <NavLink
              onClick={() => handleSelectedAnswer(options[2])}
              className="btn btn-outline btn-primary h-full py-4"
            >
              {options[2]}
            </NavLink>
            <NavLink
              onClick={() => handleSelectedAnswer(options[3])}
              className="btn btn-outline btn-primary h-full py-4"
            >
              {options[3]}
            </NavLink>
          </div>
        </div>
      </div>
      <ToastContainer />
    </div>
  );
};

export default SingleQuiz;
