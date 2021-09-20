import React, { useState } from "react";
import { Todo } from "./todo.model";

import TodoList from "./components/TodoList";
import NewTodo from "./components/NewTodo";
import { v4 as uuid } from "uuid";

const App: React.FC = () => {
  const [todos, setTodos] = useState<Todo[]>([]);

  const todoAddHandler = (text: string) => {
    setTodos((prevTodos) => [...prevTodos, { id: uuid(), text }]);
  };
  return (
    <div className="App">
      <NewTodo onAddTodo={todoAddHandler} />
      <TodoList items={todos} />
    </div>
  );
};

export default App;
