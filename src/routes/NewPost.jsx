import React from "react";
import { Link, Form, redirect } from "react-router-dom";
import Modal from "../Components/Modal";
import styles from "./NewPost.module.css";

function NewPost() {
  // setEnteredBody tiene el set porque modifica la variable enteredBody
  // se pone handler cuando es una función que se va asignar a algún evento
  // con event.target.value se registra el valor introducido por el usuario

  return (
    <Modal>
      <Form method="post" className={`${styles["form"]}`}>
        <div className={`${styles["icon-container"]}`}>
          <Link to="/">
            <svg
              className={`${styles["svg"]}`}
              width="40px"
              height="40px"
              viewBox="0 0 1024 1024"
              fill="#e50b0b"
              // class="icon"
              version="1.1"
              xmlns="http://www.w3.org/2000/svg"
              stroke="#e50b0b"
            >
              <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
              <g
                id="SVGRepo_tracerCarrier"
                strokeLinecap="round"
                strokeLinejoin="round"
              ></g>
              <g id="SVGRepo_iconCarrier">
                <path
                  d="M512 897.6c-108 0-209.6-42.4-285.6-118.4-76-76-118.4-177.6-118.4-285.6 0-108 42.4-209.6 118.4-285.6 76-76 177.6-118.4 285.6-118.4 108 0 209.6 42.4 285.6 118.4 157.6 157.6 157.6 413.6 0 571.2-76 76-177.6 118.4-285.6 118.4z m0-760c-95.2 0-184.8 36.8-252 104-67.2 67.2-104 156.8-104 252s36.8 184.8 104 252c67.2 67.2 156.8 104 252 104 95.2 0 184.8-36.8 252-104 139.2-139.2 139.2-364.8 0-504-67.2-67.2-156.8-104-252-104z"
                  fill=""
                ></path>
                <path
                  d="M707.872 329.392L348.096 689.16l-31.68-31.68 359.776-359.768z"
                  fill=""
                ></path>
                <path d="M328 340.8l32-31.2 348 348-32 32z" fill=""></path>
              </g>
            </svg>
          </Link>
        </div>
        <p>
          <label htmlFor="body">Text</label>
          <textarea id="body" name="body" required rows={3} />
        </p>
        <p>
          <label htmlFor="name">Your name</label>
          <input type="text" id="name" name="author" required />
        </p>
        <p className={`${styles["actions"]}`}>
          {/* Por defecto, el tipo del button es submit y envía información al formulario */}
          {/* si creara un botón para cancelar, tendría que cambiar el type */}
          <button>Submit</button>
        </p>
      </Form>
    </Modal>
  );
}

export default NewPost;

export async function action({ request }) {
  const formData = await request.formData();
  const postData = Object.fromEntries(formData); // {body: "...", author: "..."}
  await fetch("http://localhost:8080/posts", {
    method: "POST",
    body: JSON.stringify(postData),
    headers: {
      "Content-Type": "application/json",
    },
  });

  return redirect("/");
}
