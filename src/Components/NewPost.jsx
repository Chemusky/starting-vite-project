import React from "react";
import styles from "./NewPost.module.css";

function NewPost() {
  return (
    <form className={`${styles["form"]}`}>
      <p>
        <label htmlFor="body">Text</label>
        <textarea name="" id="body" required rows={3}></textarea>
      </p>
      <p>
        <label htmlFor="name">Your name</label>
        <input type="text" id="name" required />
      </p>
    </form>
  );
}

export default NewPost;
