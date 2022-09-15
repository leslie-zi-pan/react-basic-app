import React, { useState } from "react";
import { isDefaultClause } from "typescript";
import "./App.css";
import InputField from "./components/InputField";
import ToDoList from "./components/ToDoList";
import { Todo } from "./model";

const App: React.FC = () => {
  const [todo, setTodo] = useState<string>("");
  const [todos, setTodos] = useState<Todo[]>([]);

  const handleAdd = (e: React.FormEvent) => {
    e.preventDefault();

    if (todo) {
      setTodos([...todos, { id: Date.now(), todo, isDone: false }]);
      setTodo("");
      console.log(todos);
    }
  };

  return (
    <div className="App">
      <span className="heading">Taskify</span>
      <InputField
        todo={todo}
        setTodo={setTodo}
        handleAdd={handleAdd}
      ></InputField>
      <ToDoList todos={todos} setTodos={setTodos}></ToDoList>
    </div>
  );
};

export default App;
