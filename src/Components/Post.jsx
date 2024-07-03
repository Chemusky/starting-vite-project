import React from "react";
import { Link } from "react-router-dom";
import styles from "./Post.module.css"; /* se pone styles o cualquier otra palabra que sea descriptiva */

function Post(props) {
  const { author, body, id } = props;
  // const names = ["Jason Brody", "Vaas Montenegro"];
  // const chosenName = Math.random() > 0.5 ? names[0] : names[1];
  // la línea anterior con el operador ternario significa que si el valor es superior a 0.5, devuelva la posición 0 del array
  // Sintaxis operador ternario: condición ? valor verdadero : valor falso;

  return (
    <li className={`${styles["post"]}`}>
      <Link to={id}>
        <p className={`${styles["author"]}`}> Hello {author}</p>
        <p className={`${styles["text"]}`}>{body}</p>
      </Link>
    </li>
  );
}

export default Post;
