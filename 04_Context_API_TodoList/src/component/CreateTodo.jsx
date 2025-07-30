import React, { useState } from "react";
import { useTodo } from "../contexts";

const CreateTodo = () => {
  const [todo, setTodo] = useState("");

  const { addTodo } = useTodo();

  const handleForm = (e) => {
    e.preventDefault();
    if (todo){
      addTodo({todoTitle: todo , completed: false})
    }
    setTodo("")
  };

  return (
    <>
      <div className="w-full">
        <form className="flex gap-3" onSubmit={handleForm}>
          <input
            type="text"
            className="border w-full rounded px-2 text-xl text-green-900"
            placeholder="Enter Todo "
            onChange={(e) => setTodo(e.target.value)}
            value={todo}
          />
          <button className="text-xl bg-green-400 py-1 px-2 rounded text-green-900 hover:bg-green-300 hover:text-gray-900 ">
            Submit
          </button>
        </form>
      </div>
    </>
  );
};

export default CreateTodo;
