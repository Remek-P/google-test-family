import { useState, useEffect } from "react";
import ReactDOM from "react-dom"
import classes from "./modal.module.scss";

function Modal({ children, open = false}) {

  const [ enabledDocument, setEnabledDocument ] = useState(false);

  useEffect(() => {
    setEnabledDocument(true)
  }, []);

  if (!open) return null;

  return enabledDocument ? ReactDOM.createPortal(
      <div className={classes.modalOverlay}>
        { children }
      </div>,
      document.getElementById("portal")
  ) : null;
}

export default Modal;