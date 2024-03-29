import React from "react";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Login from "./Login";
import Browse from "./Browse";
import LoginHelp from "./LoginHelp";
import Error from "../Layout/Error";
import MovieInfo from "./MovieInfo";

const Body = () => {
  const appRouter = createBrowserRouter([
    {
      path: "/",
      element: <Login />,
    },
    {
      path: "/browse",
      element: <Browse />,
    },
    {
      path: "/LoginHelp",
      element: <LoginHelp />,
    },
    {
      path: "/error",
      element: <Error />,
    },
    {
      path: "/movieinfo/:id",
      element: <MovieInfo />,
    },
  ]);

  return (
    <div>
      <RouterProvider router={appRouter} />
    </div>
  );
};

export default Body;
