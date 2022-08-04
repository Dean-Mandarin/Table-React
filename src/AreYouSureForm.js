import React from 'react';
import Modal from "./AddRow/Modal";

const AreYouSureForm = (props) => {
  const{active, setActive, action} = props;
  return (
    <Modal
      active={active}
      setActive={setActive}
    >
      <p>Вы уверены?</p>
      <button onClick={action}>Да</button>
      <button onClick={() => setActive(false)}>Нет</button>
    </Modal>
  );
};

export default AreYouSureForm;