import { createBrowserRouter } from "react-router-dom";
import ErrorPage from "../components/ErrorPage";
import Home from "../components/Home";
import Quiz from "../components/Quiz";
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
    ],
  },
]);
