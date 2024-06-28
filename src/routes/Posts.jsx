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
