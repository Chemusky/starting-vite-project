import React from "react";
import ReactDOM from "react-dom/client";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Posts, { loader as postsLoader } from "./routes/Posts";
import PostDetails, { loader as PostDetailsLoader } from "./routes/PostDetails";
import RootLayout from "./routes/RootLayout";
import "./index.css";
import NewPost, { action as NewPostAction } from "./routes/NewPost";

const router = createBrowserRouter([
  // se establece la ruta(path) y el elemente(elemento) a renderizar (se puede renderizar etiquetas html también)
  // se han añadido rutas de diseño (rutas que anidan otras rutas dentro de ellas)
  {
    path: "/",
    element: <RootLayout />,
    children: [
      {
        path: "/",
        element: <Posts />,
        loader: postsLoader,
        children: [
          { path: "/create-post", element: <NewPost />, action: NewPostAction },
          { path: "/:id", element: <PostDetails />, loader: PostDetailsLoader },
        ],
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
