import React, { useState } from "react";
import Post from "./Post";
import styles from "./PostsList.module.css";
import NewPost from "./NewPost";
import Modal from "./Modal";

function PostsList({ modalIsVisible, modalNotVisible }) {
  // setEnteredBody tiene el set porque modifica la variable enteredBody
  // se pone handler cuando es una función que se va asignar a algún evento
  // con event.target.value se registra el valor introducido por el usuario

  const [enteredBody, setEnteredBody] = useState("");
  const [enteredAuthor, setEnteredAuthor] = useState("");

  function bodyChangeHandler(event) {
    setEnteredBody(event.target.value);
  }
  function authorChangeHandler(event) {
    setEnteredAuthor(event.target.value);
  }

  return (
    <>
      {modalIsVisible && (
        <Modal onClose={modalNotVisible}>
          <NewPost
            onBodyChange={bodyChangeHandler}
            onAuthorChange={authorChangeHandler}
          />
        </Modal>
      )}

      <ul className={`${styles["posts"]}`}>
        <Post author={enteredAuthor} body={enteredBody} />
        <Post author="Emanuel" body="Web Developers are very abstemios" />
      </ul>
    </>
  );
}

export default PostsList;
