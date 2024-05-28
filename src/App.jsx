import { useState } from "react";
import MainHeader from "./Components/MainHeader";

import PostsList from "./Components/PostsList";

function App() {
  // los componentes se pueden poner también <Post> </Post>
  // por defecto se establece que el modal es no visible (false)

  const [modalIsVisible, setModalIsVisible] = useState(false);

  function showModalHandler() {
    setModalIsVisible(true);
  }

  function hideModalHandler() {
    // esta función se pasa al componente Modal
    setModalIsVisible(false);
  }

  return (
    <>
      <MainHeader onCreatePost={showModalHandler} />
      <main>
        <PostsList
          modalIsVisible={modalIsVisible}
          modalNotVisible={hideModalHandler}
        />
      </main>
    </>
  );
}

export default App;
