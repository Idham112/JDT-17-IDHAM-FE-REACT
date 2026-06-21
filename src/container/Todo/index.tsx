import { useState } from "react";
import useTodo from "../../hooks/useTodo";

const Todo = () => {
  const { todos, addTodo, removeTodo, toggleTodo } = useTodo();
  const [textTodo, setTextTodo] = useState<string>("");

  const handleAdd = () => {
    addTodo(textTodo);
    setTextTodo("");
  };

  const handleRemove = (id: string) => {
    removeTodo(id);
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen">
      <div className="flex flex-col items-center gap-5 w-full">
        <input
          className="bg-white w-1/4"
          onChange={(e) => setTextTodo(e.target.value)}
        />
        <button
          className="w-24 h-10 bg-red-500 hover:bg-red-300 rounded-lg"
          onClick={handleAdd}
        />
      </div>

      {todos.map((item, key) => (
        <div key={key} className="flex flex-row items-center gap-5 mt-1">
          <button
            className="w-10 h-5 bg-blue-400 hover:bg-blue-300"
            onClick={() => toggleTodo(item.id)}
          />
          <p
            className={`text-amber-200 ${item.isCompleted ? "line-through opacity-50" : ""}`}
          >
            {item.text}
          </p>
          <button
            className="w-10 h-5 bg-green-400 hover:bg-green-300"
            onClick={() => handleRemove(item.id)}
          />
        </div>
      ))}
    </div>
  );
};
export default Todo;
