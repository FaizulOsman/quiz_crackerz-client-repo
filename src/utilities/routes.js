import { createBrowserRouter } from "react-router-dom";
import Blog from "../components/Blog";
import ErrorPage from "../components/ErrorPage";
import Home from "../components/Home";
import Quiz from "../components/Quiz";
import Statistics from "../components/Statistics";
import Topics from "../components/Topics";
import Root from "../layouts/Root";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        loader: () => {
          return fetch("https://openapi.programming-hero.com/api/quiz");
        },
        element: <Home />,
      },
      {
        path: "/home",
        loader: () => {
          return fetch("https://openapi.programming-hero.com/api/quiz");
        },
        element: <Home />,
      },
      {
        path: "/topics",
        loader: () => {
          return fetch("https://openapi.programming-hero.com/api/quiz");
        },
        element: <Topics />,
      },
      {
        path: "/quiz/:quizId",
        loader: ({ params }) =>
          fetch(
            `https://openapi.programming-hero.com/api/quiz/${params.quizId}`
          ),
        element: <Quiz />,
      },
      {
        path: "/statistics",
        element: <Statistics />,
      },
      {
        path: "/blog",
        element: <Blog />,
      },
    ],
  },
]);
