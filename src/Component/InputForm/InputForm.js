import { useState } from 'react';
import s from './InputForm.module.css';
const InputForm = ({ onSubmit }) => {
  const [value, setValue] = useState('');
  const handleInputChange = event => {
    setValue(event.target.value);
  };

  const handleSubmit = event => {
    event.preventDefault();
    onSubmit(value);
  };
  return (
    <>
      <form onSubmit={handleSubmit}>
        <label>
          <input
            className={s.Input}
            type="text"
            value={value}
            onChange={handleInputChange}
            placeholder="Input film name"
          />
          <button className={s.InputButton} type="submit">
            Search
          </button>
        </label>
      </form>
    </>
  );
};

export default InputForm;
