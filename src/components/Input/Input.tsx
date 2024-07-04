import React from "react";
import { ITodo } from "../../App";
import "./Input.css";

interface IInputProps {
  text: string;
  setText: React.Dispatch<React.SetStateAction<string>>;
  setTodo: React.Dispatch<React.SetStateAction<ITodo[]>>;
}

const Input = (props: IInputProps) => {
  
  function add(): void {
    if (props.text) {
      props.setTodo((prev: ITodo[]) => [
        ...prev,
        { id: Date.now(), title: props.text, isChecked: false, open: false },
      ]);
      props.setText("");
    }
  }

  return (
    <div className="input">
      <input
        type="text"
        value={props.text}
        onChange={(e) => props.setText(e.target.value)}
      />
      <button onClick={add}>Add</button>
    </div>
  );
};

export default Input;
