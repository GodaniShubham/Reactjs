import React from "react";

const TodoList = () => {
  return (
    <>
      <div className="w-full bg-green-200 text-gray-700 my-3 rounded p-3 flex justify-between">
        <div className="flex gap-2">
          <input type="checkbox" name="" id="" />
          <h1 className="">Hii I am Todo List</h1>
        </div>
        <div className="flex gap-4">
            <button className="hover:bg-gray-100 rounded">📁</button>
            <button className="hover:bg-gray-100 rounded">❌</button>
        </div>
      </div>
    </>
  );
};

export default TodoList;
