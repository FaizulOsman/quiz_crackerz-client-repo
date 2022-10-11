import { faCircleDot, faEye } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { div, NavLink } from "react-router-dom";
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

  const showCorrectAnwer = (correctAnswer) => {
    toast(`Correct Answer: ${correctAnswer}`);
  };

  return (
    <div className="">
      <div className="card bg-base-100 border shadow-xl">
        <div className="card-body">
          <div className="flex justify-between">
            <h2 className="card-title text-center mb-4">Quiz : {question}</h2>
            <button
              onClick={() => showCorrectAnwer(correctAnswer)}
              className="btn bg-base-100 border-none"
            >
              <FontAwesomeIcon icon={faEye} />
            </button>
          </div>
          <div className="grid grid-cols-2 gap-2">
            <div
              onClick={() => handleSelectedAnswer(options[0])}
              className="border border-primary rounded-md flex items-center h-full py-4"
            >
              <input
                type="radio"
                name="radio-6"
                className="radio checked:bg-blue-500 mx-1 sm:mx-5"
              />
              {options[0]}
            </div>
            <div
              onClick={() => handleSelectedAnswer(options[1])}
              className="border border-primary rounded-md flex items-center h-full py-4"
            >
              <input
                type="radio"
                name="radio-6"
                className="radio checked:bg-blue-500 mx-5"
              />
              {options[1]}
            </div>
            <div
              onClick={() => handleSelectedAnswer(options[2])}
              className="border border-primary rounded-md flex items-center h-full py-4"
            >
              <input
                type="radio"
                name="radio-6"
                className="radio checked:bg-blue-500 mx-5"
              />
              {options[2]}
            </div>
            <div
              onClick={() => handleSelectedAnswer(options[3])}
              className="border border-primary rounded-md flex items-center h-full py-4"
            >
              <input
                type="radio"
                name="radio-6"
                className="radio checked:bg-blue-500 mx-5"
              />
              {options[3]}
            </div>
            {/* <div
              onClick={() => handleSelectedAnswer(options[1])}
              className="btn btn-outline btn-primary h-full py-4"
            >
              <input
                type="radio"
                name="radio-6"
                className="radio checked:bg-blue-500"
              />
              {options[1]}
            </div>
            <div
              onClick={() => handleSelectedAnswer(options[2])}
              className="btn btn-outline btn-primary h-full py-4"
            >
              <input
                type="radio"
                name="radio-6"
                className="radio checked:bg-blue-500"
              />
              {options[2]}
            </div>
            <div
              onClick={() => handleSelectedAnswer(options[3])}
              className="btn btn-outline btn-primary h-full py-4"
            >
              <input
                type="radio"
                name="radio-6"
                className="radio checked:bg-blue-500"
              />
              {options[3]}
            </div> */}
          </div>
        </div>
      </div>
      <ToastContainer />
    </div>
  );
};

export default SingleQuiz;
