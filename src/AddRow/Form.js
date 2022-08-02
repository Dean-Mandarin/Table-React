import React from 'react';

const Form = () => {
  return (
    <form>
      <h2>Новая строка</h2>
      <input type="text" placeholder="Имя..."/><br/>
      <input type="text" placeholder="Фамилия..."/><br/>
      <input type="text" placeholder="Дата рождения..."/><br/>
      <button type="submit">Добавить</button>
    </form>
  );
};

export default Form;