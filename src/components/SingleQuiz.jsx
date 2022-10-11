import { faEye } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const SingleQuiz = ({ quiz, index, setCount, count }) => {
  const { id, correctAnswer, options, question } = quiz;

  const handleSelectedAnswer = (option) => {
    if (option === correctAnswer) {
      toast.success("Answer is correct!", { autoClose: 700 });
      setCount(count + 1);
    } else {
      toast.error("Ans is Wrong!", { autoClose: 700 });
    }
  };

  const showCorrectAnwer = (correctAnswer) => {
    toast.success(`Correct Answer: ${correctAnswer}`);
  };

  return (
    <div className="">
      <div className="card bg-base-100 border shadow-xl">
        <div className="card-body">
          <div className="flex justify-between">
            <h2 className="card-title text-center mb-4">
              Quiz {index + 1}: {question}
            </h2>
            <button
              onClick={() => showCorrectAnwer(correctAnswer)}
              className="btn bg-base-100 border-none"
              title="See correct answer"
            >
              <FontAwesomeIcon icon={faEye} />
            </button>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
            <div className="border border-primary rounded-md flex items-center h-full py-4">
              <label className="label cursor-pointer">
                <input
                  onClick={() => handleSelectedAnswer(options[0])}
                  type="radio"
                  name={`radio-${id}`}
                  className="radio checked:bg-blue-500 mx-5"
                />
                <span className="label-text">{options[0]}</span>
              </label>
            </div>
            <div className="border border-primary rounded-md flex items-center h-full py-4">
              <label className="label cursor-pointer">
                <input
                  onClick={() => handleSelectedAnswer(options[1])}
                  type="radio"
                  name={`radio-${id}`}
                  className="radio checked:bg-blue-500 mx-5"
                />
                <span className="label-text">{options[1]}</span>
              </label>
            </div>
            <div className="border border-primary rounded-md flex items-center h-full py-4">
              <label className="label cursor-pointer">
                <input
                  onClick={() => handleSelectedAnswer(options[2])}
                  type="radio"
                  name={`radio-${id}`}
                  className="radio checked:bg-blue-500 mx-5"
                />
                <span className="label-text">{options[2]}</span>
              </label>
            </div>
            <div className="border border-primary rounded-md flex items-center h-full py-4">
              <label className="label cursor-pointer">
                <input
                  onClick={() => handleSelectedAnswer(options[3])}
                  type="radio"
                  name={`radio-${id}`}
                  className="radio checked:bg-blue-500 mx-5"
                />
                <span className="label-text">{options[3]}</span>
              </label>
            </div>
          </div>
        </div>
      </div>
      <ToastContainer />
    </div>
  );
};

export default SingleQuiz;
