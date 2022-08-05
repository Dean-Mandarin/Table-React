import React, {useEffect, useState} from "react";
import "./App.css";

//data
import {HeaderTable, BodyTable} from "./dataTHead";

//components
import ViewTable from "./ViewTable";
import Modal from "./AddRow/Modal";
import Form from "./AddRow/Form";
import moment from "moment";

const inputsArray = [
  {
    placeholder: "Имя...",
    field: "name",
    type: "text"
  },
  {
    placeholder: "Фамилия...",
    field: "surname",
    type: "text"
  },
  {
    placeholder: "Дата рождения...",
    field: "dateOfBirth",
    type: "date",
    validate: function(date) {
      if (date){
        const endDate = moment(date);
        return moment().diff(endDate, 'years') < 18 ? "18+" : "";
      }
      return "";
    },
  },
  {
    placeholder: "+7",
    field: "number",
    type: "mask",
    mask: "+7\ 999 999 99 99"
  },
  {
    placeholder: "ИИН...",
    field: "iin",
    type: "mask",
    mask: "999 999 999 999"
  }
]

const buttonsArray = [
  {
    type: "reset",
    text: "Сбросить"
  },
  {
    type: "submit",
    text: "Добавить"
  }
]

const editDelete = [
  {
    type: "submit",
    text: "Удалить"
  },
  {
    type: "edit",
    text: "Редактировать"
  }
]


function App() {
  const [rows, setRows] = useState(BodyTable);
  const [modalActive, setModalActive] = useState(false);


  const setRowsAndCloseModal = (arr) => {
    localStorage.setItem("rows", JSON.stringify(arr))
    setModalActive(false);
    setRows(arr);
  }

  useEffect( () => {
    const array = localStorage.getItem("rows")
    setRows(JSON.parse(array) || [])
  }, []);

  return (
    <div className="App">

      {/*таблица*/}
      <ViewTable
        fields={HeaderTable}
        rows={rows}
        setRows={setRows}
        numerable
        selectable
        buttons={editDelete}
      />

      {/*кнопка "добавить"*/}
      <button onClick={() => setModalActive(true)}>+</button>


      {/*модальное окно с формой*/}

      {/*{*/}
      {/*  modalActive && (*/}
          <Modal
            active={modalActive}
            setActive={setModalActive}
          >
            <Form
              rows={rows}
              setRows={setRowsAndCloseModal}
              inputs={inputsArray}
              buttons={buttonsArray}
            />
          </Modal>
      {/*  )*/}
      {/*}*/}

    </div>
  );
}

export default App;
