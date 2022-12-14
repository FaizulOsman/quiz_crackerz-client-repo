import React from "react";
import { Link, NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="bg-accent">
      <div className="navbar bg-accent w-11/12 mx-auto">
        <div className="navbar-start">
          <Link to="/" className="btn btn-ghost normal-case text-xl">
            QuizQween
          </Link>
        </div>

        <div className="navbar-end">
          <div className="dropdown dropdown-end">
            <div className="hidden md:block">
              <ul className="menu menu-horizontal p-0">
                <li>
                  <NavLink to="/home">Home</NavLink>
                </li>
                <li>
                  <NavLink to="/topics">Topics</NavLink>
                </li>
                <li>
                  <NavLink to="/statistics">Statistics</NavLink>
                </li>
                <li>
                  <NavLink to="/blog">Blog</NavLink>
                </li>
              </ul>
            </div>

            <div className="md:hidden">
              <label tabIndex={0} className="btn btn-ghost btn-circle">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h16M4 18h7"
                  />
                </svg>
              </label>
              <ul
                tabIndex={0}
                className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
              >
                <li>
                  <Link to="/">Home</Link>
                </li>
                <li>
                  <Link to="/topics">Topics</Link>
                </li>
                <li>
                  <Link to="/statistics">Statistics</Link>
                </li>
                <li>
                  <Link to="/blog">Blog</Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
