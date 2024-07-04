import { useState } from "react";
import Input from "./components/Input/Input";
import List from "./components/List/List";

import "./App.css";

export interface ITodo {
  id: number;
  title: string;
  isChecked: boolean;
  open: boolean;
}

const App = () => {
  const [text, setText] = useState("");
  const [todo, setTodo] = useState<ITodo[]>([]);

  return (
    <div className="app">
      <Input text={text} setText={setText} setTodo={setTodo} />
      <List todo={todo} setTodo={setTodo} />
    </div>
  );
};

export default App;
