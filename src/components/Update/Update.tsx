import React, { useState } from "react";
import { ITodo } from "../../App";
import "./Update.css";

interface IProps {
  el: ITodo;
  todo: ITodo[];
  setTodo: React.Dispatch<React.SetStateAction<ITodo[]>>;
}

const Update = (props: IProps) => {
  const [listState, setListState] = useState("");

  function updateList(id: number) {
    props.setTodo(
      props.todo.map((el) =>
        el.id === id ? { ...el, title: listState, open: false } : el
      )
    );
  }
  
  return (
    <li key={props.el.id}>
      <input
        type="text"
        value={listState}
        onChange={(e) => setListState(e.target.value)}
      />
      <button onClick={() => updateList(props.el.id)}>Update</button>
    </li>
  );
}

export default Update;
