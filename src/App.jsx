import { useState } from "react";
import "./App.css";
import CreateTodo from "./component/CreateTodo";
import TodoList from "./component/TodoList";

function App() {
  return (
    <>
      <div className="w-full bg-gray-900 text-white h-screen justify-items-center px-32 py-4 font-winky-rough">
        <h1 className="text-2xl text-white pb-2 "> ✅ Create Todo List</h1>
        <CreateTodo />
        <TodoList></TodoList>
      </div>
    </>
  );
}

export default App;
