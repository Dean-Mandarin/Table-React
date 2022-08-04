import React, {useState, useEffect} from 'react';

//style
import "./style.css";
import "./AddRow/style.css"

//component
import Modal from "./AddRow/Modal";
import AreYouSureForm from "./AreYouSureForm";
import Form from "./AddRow/Form";


const ViewTable = (props) => {
  const {fields, rows, setRows, numerable, selectable} = props;

  const checkRow = i => {
    const copyArr = [...rows];
    copyArr[i].checked = !copyArr[i]?.checked;
    setRows(copyArr);
  }

  const selectAll = () => {
    const checked = rows.filter(item => item.checked).length === 0
    const copyArr = rows.map(item => {
      return {...item, checked}
    })
    setRows(copyArr)
  }

  //Modal
  const [modalActive, setModalActive] = useState(false);

  //Delete
  const remove = () => {
    const filtered = rows.filter(item => !item.checked);
    setRows(filtered);
    localStorage.setItem("rows", JSON.stringify(filtered));
    setModalActive(false);
  }


  return (
    <div className="container">
      <table>
        <thead>
        <tr>
          {
            rows?.length === 0 ? <th>Здесь пока ничего нет</th> : null
          }
          {
            selectable && rows?.length !== 0 ?
              <th onClick={selectAll} id="selectAll">
                {rows.filter(item => item.checked).length === 0 ? 'Выбр. все' : 'Убр. все'}
              </th> : null
          }
          {
            numerable && rows?.length !== 0 ? <th>№</th> : null
          }
          {
            rows?.length !== 0 ?
              fields.map(({field, title}) => (
                <th key={field}>
                  {title}
                </th>
              )) : null
          }
        </tr>
        </thead>

        <tbody>
        {
          rows.map((item, inx) => (
            <tr key={item.iin}>
              {
                selectable ?
                  <td>
                    <input
                      type="checkbox"
                      onChange={() => checkRow(inx)}
                      checked={item.checked || false}
                    />
                  </td> : null
              }

              { //нумерация
                numerable ? <td>{inx + 1}</td> : null
              }

              {
                fields.map((head, ind) => (
                  <td key={ind}>{item[head.field]}</td>
                ))
              }
            </tr>
          ))
        }
        </tbody>
      </table>
      {/*далить*/}
      <button className="delete" type="submit" onClick={() => setModalActive(true)}>Удалить</button>


      <AreYouSureForm
        active={modalActive}
        setActive={setModalActive}
        action={remove}
      />

    </div>
  );
};

export default ViewTable;