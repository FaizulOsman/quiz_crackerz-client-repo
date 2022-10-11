import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { Link } from "react-router-dom";

const QuizCard = ({ quiz }) => {
  const { id, logo, name, total } = quiz;

  return (
    <div className="card bg-base-100 shadow-xl border">
      <figure>
        <img src={logo} alt="Shoes" />
      </figure>
      <div className="card-body">
        <h2 className="card-title">
          {name}
          <div className="badge badge-secondary">Total {total}</div>
        </h2>
        <p>
          Any fool can write code that a computer can understand. Good
          programmers write code that humans can understand.
        </p>
        <div className="card-actions justify-end">
          <Link
            to={`/quiz/${id}`}
            className="badge badge-outline hover:bg-primary p-4"
          >
            <span className="mr-2">Start Practice</span>
            <FontAwesomeIcon icon={faArrowRight}></FontAwesomeIcon>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default QuizCard;
