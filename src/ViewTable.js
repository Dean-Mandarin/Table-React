import React, {useState, useEffect} from 'react';

//style
import "./style.css";


const ViewTable = (props) => {
  const {fields, rows, setRows, numerable, selectable} = props;

  const checkRow = i => {
    const copyArr = [...rows];
    copyArr[i].checked = !copyArr[i]?.checked;
    setRows(copyArr);
  }

  const selectAll = () => {
    const checked = rows.filter(item => item.checked).length === 0
    const copyArr = rows.map(item => { return {...item, checked }})
    setRows(copyArr)
  }


  return (
    <div className="container">
      <table>
        <thead>
        <tr>
          {
            selectable ?
              <th onClick={selectAll} id="selectAll">
                { rows.filter(item => item.checked).length === 0 ? 'Выбр. все' : 'Убр. все' }
              </th> : null
          }
          {
            numerable ? <th>№</th> : null
          }
          {
            fields.map(({field, title}) => (
              <th key={field}>
                {title}
              </th>
            ))
          }
        </tr>
        </thead>

        <tbody>
        {
          rows.map((item, inx) => (
            <tr key={item.id}>
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

    </div>
  );
};

export default ViewTable;