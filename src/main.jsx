import React from "react";
import ReactDOM from "react-dom/client";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Posts from "./routes/Posts";
import RootLayout from "./routes/RootLayout";
import "./index.css";
import NewPost from "./routes/NewPost";

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
        children: [{ path: "/create-post", element: <NewPost /> }],
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
