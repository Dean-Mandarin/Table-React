import React, {useState} from 'react';
import './style.css';
import InputMask from 'react-input-mask';

const initialValues = {
  name: "",
  surname: "",
  dateOfBirth: "",
  number: "",
  iin: ""
}

const Form = (props) => {
  const [userData, setUserData] = useState(initialValues);
  // console.log(userData)

  const {setRows, rows, inputs, buttons} = props;
  const addRow = (e) => {
    e.preventDefault();
    setRows([...rows, userData]);
    setUserData(initialValues);
  }

  const setData = (e) => setUserData({...userData, [e.target.name]: e.target.value})

  return (
    <form>
      <div className="formHead">
        <h2>Новая строка</h2>
      </div>
      {
        inputs.map((item, index) => {
          if (["text", "date", "number"].includes(item.type)) {
            return (
              <React.Fragment key={index}>
                <label>{item?.validate && item?.validate(userData[item.field])}</label>
                <input
                  value={userData[item.field] || ""}
                  type={item.type}
                  placeholder={item.placeholder}
                  onChange={setData}
                  name={item.field}
                />
              </React.Fragment>
            )
          }else if(item.type==="mask"){
            return(
              <InputMask
                value={userData[item.field] || ""}
                mask={item?.mask}
                maskChar="-"
                key={index}
                placeholder={item?.placeholder}
                onChange={setData}
                name={item.field}
              />
            )
          }
        })
      }

      {/*кнопки*/}
      <div className="buttons">
        {
          buttons.map((item, index) => {
            if (["reset"].includes(item.type)) {
              return (
                <button
                  key={index}
                  type={item.type}
                  onClick={() => setUserData(initialValues)}
                >
                  {item.text}
                </button>
              )
            }else if(item.type==="submit"){
              return (
                <button
                  key={index}
                  type={item.type}
                  onClick={addRow}
                >
                  {item.text}
                </button>
              )
            }
          })
        }
      </div>
    </form>
  );
};

export default Form;