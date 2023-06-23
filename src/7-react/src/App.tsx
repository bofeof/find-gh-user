import React, { useEffect, useState } from "react";
import { nanoid } from "nanoid";
import "./App.css";

import TodoList from "./components/TodoList";

import NewTodoForm from "./components/NewTodoForm";

import { Todo } from "./types";

function App() {
  const [text, setText] = useState<string>("");
  const [todos, setTodos] = useState<Todo[]>([]);

  const handleInput = (evt: React.ChangeEvent<HTMLInputElement>) => {
    setText(evt.target.value);
  };

  const handleAddTodo = () => {
    const newTodo: Todo = {
      id: nanoid(),
      title: text,
      completed: false,
    };

    setTodos([newTodo, ...todos]);
    setText("");
  };

  const handleRemoveTodo = (todoIdRemoved: Todo["id"]) => {
    setTodos((oldTodos) =>
      oldTodos.filter((item) => item.id !== todoIdRemoved)
    );
  };

  const handleToggleTodo = (todoIdToggled: Todo["id"]) => {
    setTodos((oldTodos) =>
      oldTodos.map((todo) => {
        if (todo.id !== todoIdToggled) return todo;
        return {
          ...todo,
          completed: !todo.completed,
        };
      })
    );
  };

  useEffect(() => {
    fetch("mysite")
      .then((res) => res.json())
      .then((data: Todo[]) => setTodos(data))
      .catch((err) => console.log(err.message));
  }, []);

  return (
    <div className="App">
      <NewTodoForm
        value={text}
        onChange={handleInput}
        handleAddTodo={handleAddTodo}
      />
      <TodoList
        list={todos}
        removeTodo={handleRemoveTodo}
        toggleTodo={handleToggleTodo}
      />
    </div>
  );
}

export default App;
