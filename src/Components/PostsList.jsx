import React, { useEffect, useState } from "react";
import Post from "./Post";
import styles from "./PostsList.module.css";
import NewPost from "./NewPost";
import Modal from "./Modal";

function PostsList({ modalIsVisible, modalNotVisible }) {
  const [posts, setPosts] = useState([]);
  const [isFetching, setIsFetching] = useState(false);

  useEffect(() => {
    async function fetchPosts() {
      setIsFetching(true);
      const response = await fetch("http://localhost:8080/posts");
      const data = await response.json();
      setPosts(data.posts);
      setIsFetching(false);
    }
    fetchPosts();
  }, []);

  // se establece primero el nuevo mensaje, seguido de una copia de los anteriores mensajes
  // porque se ha usado el spread operator
  // fetch() sirve para traer datos y para enviar datos también
  function addPostHandler(postData) {
    fetch("http://localhost:8080/posts", {
      method: "POST",
      body: JSON.stringify(postData),
      headers: {
        "Content-Type": "application/json",
      },
    });

    setPosts((existingPost) => [postData, ...existingPost]);
  }

  // siempre que se usa .map() debe ponerse key para garantizar que es un elemento único
  // los estilos inline con el style no son recomendables pero en el vídeo se ha echo así
  return (
    <>
      {modalIsVisible && (
        <Modal onClose={modalNotVisible}>
          <NewPost onCancel={modalNotVisible} onAddPost={addPostHandler} />
        </Modal>
      )}
      {!isFetching && posts.length > 0 && (
        <ul className={`${styles["posts"]}`}>
          {posts.map((post) => (
            <Post key={post.body} author={post.author} body={post.body} />
          ))}
        </ul>
      )}
      {!isFetching && posts.length === 0 && (
        <div style={{ textAlign: "center", color: "white" }}>
          <h2>There are no posts yet.</h2>
          <p>Start adding some!!</p>
        </div>
      )}
      {isFetching && (
        <div style={{ textAlign: "center", color: "white" }}>
          <p>Loading posts...</p>
        </div>
      )}
    </>
  );
}

export default PostsList;
