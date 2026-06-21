import { useState } from "react";

interface Todo {
  id: string;
  text: string;
  isCompleted: boolean;
}

const useTodo = () => {
  const [todos, setTodos] = useState<Todo[]>([]);

  const addTodo = (text: string) => {
    console.log("add");
    setTodos((prev) => [
      ...prev,
      { id: Date.now().toString(), text, isCompleted: false },
    ]);
  };

  const removeTodo = (id: string) => {
    console.log("remove");
    setTodos((prev) => prev.filter((todo) => todo.id !== id));
  };

  const toggleTodo = (id: string) => {
    console.log("toggle");
    setTodos((prev) =>
      prev.map((todo) =>
        todo.id === id ? { ...todo, isCompleted: !todo.isCompleted } : todo,
      ),
    );
  };

  return { addTodo, removeTodo, toggleTodo, todos };
};

export default useTodo;
