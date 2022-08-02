import React, {useState} from "react";
import "./App.css";

//data
import {HeaderTable, BodyTable} from "./dataTHead";

//components
import ViewTable from "./ViewTable";
import Modal from "./AddRow/Modal";
import Form from "./AddRow/Form";

function App() {
  const [rows, setRows] = useState(BodyTable);
  const [modalActive, setModalActive] = useState(false);

  return (
    <div className="App">
      <ViewTable
        fields={HeaderTable}
        rows={rows}
        setRows={setRows}
        numerable
        selectable
      />
      <button onClick={ () => setModalActive(true)}>+</button>
      <Modal
        active = {modalActive}
        setActive = {setModalActive}
        children = {<Form/>}
      >

      </Modal>
    </div>
  );
}

export default App;
