import { Outlet } from "react-router-dom";
import PostsList from "../Components/PostsList";

function Posts() {
  // los componentes se pueden poner también <Post> </Post>
  // por defecto se establece que el modal es no visible (false)

  return (
    <>
      <Outlet />
      <main>
        <PostsList />
      </main>
    </>
  );
}

export default Posts;

export async function loader() {
  const response = await fetch("http://localhost:8080/posts");
  const data = await response.json();
  return data.posts;
}
