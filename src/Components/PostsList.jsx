import React from "react";
import Post from "./Post";
import styles from "./PostsList.module.css";
import NewPost from "./NewPost";

function PostsList() {
  return (
    <>
      <NewPost />
      <ul className={`${styles["posts"]}`}>
        <li>
          <Post author="José Miguel" body="React Js is awesome" />
        </li>
        <li>
          <Post author="Emanuel" body="Web Developers are very abstemios" />
        </li>
      </ul>
    </>
  );
}

export default PostsList;
