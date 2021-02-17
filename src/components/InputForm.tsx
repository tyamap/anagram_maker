import React, { useState } from "react";
import { Query } from "../App";

type InputFormProps = {
  setQuery: React.Dispatch<React.SetStateAction<Query>>;
};
const InputForm: React.FC<InputFormProps> = (props) => {
  const [input, setInput] = useState("");
  const [number, setNumber] = useState(2);

  const handleInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInput(e.target.value);
  };
  const handleNumber = (e: React.ChangeEvent<HTMLInputElement>) => {
    setNumber(Number(e.target.value));
  };
  const submit = () => {
    props.setQuery({ word: input, number: number });
  };
  return (
    <>
      <form action="#">
        <input type="text" value={input} onChange={handleInput} required style={{width: 250}} />
        <input
          type="number"
          value={number}
          onChange={handleNumber}
          min={2}
          max={15}
          style={{ width: 30 }}
        />
        <input type="submit" onClick={submit} value="検索" />
      </form>
    </>
  );
};

export default InputForm;
