import React from "react";
import styles from "./Post.module.css"; /* se pone styles o cualquier otra palabra que sea descriptiva */

function Post(props) {
  const { author, body } = props;
  // const names = ["Jason Brody", "Vaas Montenegro"];
  // const chosenName = Math.random() > 0.5 ? names[0] : names[1];
  // la línea anterior con el operador ternario significa que si el valor es superior a 0.5, devuelva la posición 0 del array
  // Sintaxis operador ternario: condición ? valor verdadero : valor falso;

  return (
    <div className={`${styles["post"]}`}>
      <p className={`${styles["author"]}`}> Hello {author}</p>
      <p className={`${styles["text"]}`}>{body}</p>
    </div>
  );
}

export default Post;
