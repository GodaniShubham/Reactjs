import React, { useState } from "react";
import { useTodo } from "../contexts";

const TodoList = ({ todo }) => {
  const { deleteTodo, toggleCompleted, updateTodo } = useTodo();
  const [isEditable, setEditable] = useState(false);
  const [todoMsg, setTodoMsg] = useState(todo.todoTitle);

  const updatedTodo = () => {
    updateTodo(todo.id, {...todo, todoTitle: todoMsg})
    setEditable(false);
  };

  const toggleComplete = () => {
    toggleCompleted(todo.id);
  };

  return (
    <>
      <div
        className={`w-full bg-green-200 text-gray-700 my-3 rounded p-3 flex justify-between ${
          todo.completed ? "bg-[#89ffa1]" : ""
        }`}
      >
        <div className="flex gap-2 w-full">
          <input
            type="checkbox" 
            className="cursor-pointer"
            checked={todo.completed}
            onChange={toggleComplete}
          />
          <input
            type="text"
            className={`border outline-none w-full bg-transparent rounded-lg ${ isEditable ? "border-black/10 px-2": "border-transparent" } ${ todo.completed ? "line-through" : "" } `}
            value={todoMsg}
            onChange={(e) => setTodoMsg(e.target.value)}
            readOnly={!isEditable}
          />
          
        </div>
        <div className="flex gap-4">
          {isEditable ? (
            <button className="hover:bg-gray-100 rounded" onClick={updatedTodo}>
              💾
            </button>
          ) : (
            <button
              className="hover:bg-gray-100 rounded"
              onClick={() => {
                setEditable(true);
              }}>
              🖋️
            </button>
          )}
          <button
            className="hover:bg-gray-100 rounded"
            onClick={() => deleteTodo(todo.id)}
          >
            ❌
          </button>
        </div>
      </div>
    </>
  );
};

export default TodoList;
