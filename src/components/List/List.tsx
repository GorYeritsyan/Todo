import Update from "../Update/Update";
import { ITodo } from "../../App";

import "./List.css";

interface IList {
  todo: ITodo[];
  setTodo: React.Dispatch<React.SetStateAction<ITodo[]>>;
}

const List = (props: IList) => {
    
  function remove(id: number): void {
    props.setTodo(props.todo.filter((el) => el.id !== id));
  }

  function change(id: number): void {
    props.setTodo(
      props.todo.map((el: ITodo) =>
        el.id === id ? { ...el, isChecked: !el.isChecked } : el
      )
    );
  }

  function update(id: number) {
    props.setTodo(
      props.todo.map((el) => (el.id === id ? { ...el, open: true } : el))
    );
  }
  return (
    <ul>
      {props.todo.map((el) =>
        el.open ? (
          <Update
            todo={props.todo}
            setTodo={props.setTodo}
            key={el.id}
            el={el}
          />
        ) : (
          <li key={el.id}>
            <input
              type="checkbox"
              checked={el.isChecked}
              onChange={() => change(el.id)}
            />
            <span onDoubleClick={() => update(el.id)}>{el.title}</span>
            <button onClick={() => remove(el.id)}>X</button>
          </li>
        )
      )}
    </ul>
  );
};

export default List;
