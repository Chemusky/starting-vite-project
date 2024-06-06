import React, { useState } from "react";
import Post from "./Post";
import styles from "./PostsList.module.css";
import NewPost from "./NewPost";
import Modal from "./Modal";

function PostsList({ modalIsVisible, modalNotVisible }) {
  const [posts, setPosts] = useState([]);

  function addPostHandler(postData) {
    // se establece primero el nuevo mensaje, seguido de una copia de los anteriores mensajes
    // porque se ha usado el spread operator
    setPosts([postData, ...posts]);
  }

  return (
    <>
      {modalIsVisible && (
        <Modal onClose={modalNotVisible}>
          <NewPost onCancel={modalNotVisible} />
        </Modal>
      )}

      <ul className={`${styles["posts"]}`}>
        <Post author="Satans" body="Web Developers are very abstemios" />
      </ul>
    </>
  );
}

export default PostsList;
