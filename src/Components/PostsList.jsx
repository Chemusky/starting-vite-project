import React, { useEffect, useState } from "react";
import Post from "./Post";
import styles from "./PostsList.module.css";
import { useLoaderData } from "react-router-dom";

function PostsList() {
  const posts = useLoaderData();
  const [isFetching, setIsFetching] = useState(false);

  useEffect(() => {
    async function fetchPosts() {
      setIsFetching(true);
      setPosts(data.posts);
      setIsFetching(false);
    }
    fetchPosts();
  }, []);

  // siempre que se usa .map() debe ponerse key para garantizar que es un elemento único
  // los estilos inline con el style no son recomendables pero en el vídeo se ha echo así
  return (
    <>
      {posts.length > 0 && (
        <ul className={`${styles["posts"]}`}>
          {posts.map((post) => (
            <Post
              key={post.id}
              id={post.id}
              author={post.author}
              body={post.body}
            />
          ))}
        </ul>
      )}
      {posts.length === 0 && (
        <div style={{ textAlign: "center", color: "white" }}>
          <h2>There are no posts yet.</h2>
          <p>Start adding some!!</p>
        </div>
      )}
    </>
  );
}

export default PostsList;
