import React from 'react';
import "./style.css";

const Modal = (props) => {
  const {active, setActive, children} = props;
  return (
    <div className={active ? "modal active" : "modal"} onClick={() => setActive(false)}>
      <div className={active ? "modal-content active" : "modal-content"} onClick={e => e.stopPropagation()}>
        {
          children
        }
      </div>

    </div>
  );
};

export default Modal;