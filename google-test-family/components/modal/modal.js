import { useState, useEffect } from "react";
import ReactDOM from "react-dom"
import classes from "./modal.module.scss";

function Modal({ children, open = true}) {

  const [ enabledDocument, setEnabledDocument ] = useState(false);

  useEffect(() => {
    setEnabledDocument(true)

    return setEnabledDocument(false)
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