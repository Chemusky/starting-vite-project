import React from "react";
import styles from "./Modal.module.css";

function Modal({ children, onClose }) {
  // por defecto open es siempre true
  return (
    <>
      <div className={`${styles["backdrop"]}`} onClick={onClose} />
      <dialog open className={`${styles["modal"]}`}>
        {children}
      </dialog>
    </>
  );
}

export default Modal;
