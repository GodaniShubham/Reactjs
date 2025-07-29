import { useEffect, useState } from "react";
import "./App.css";
import CreateTodo from "./component/CreateTodo";
import TodoList from "./component/TodoList";
import { TodoProvider } from './contexts'

function App() {

  const [ todos , setTodos ] = useState([]);  
  
  const addTodo = (todo) =>{
    setTodos((prev) => [{id: Date.now(), ...todo}, ...prev])
  }

  const updateTodo = (id, todo) =>{
    setTodos((prev) => prev.map((prevTodo) => (prevTodo.id === id ? todo : prevTodo )))
  }

  const deleteTodo = (id) =>{
    setTodos((prev) => prev.filter((prevTodo) => prevTodo.id !== id)); 
  }

  const toggleCompleted = (id) => {
    setTodos((prev) => 
      prev.map((prevTodo) => 
        prevTodo.id === id ? { ...prevTodo, completed: !prevTodo.completed } : prevTodo)
    ); 
  };

  // getTodos 

  useEffect(() => {
    const todosFromStorage = JSON.parse(localStorage.getItem("todos"));
    if(todosFromStorage && todosFromStorage.length > 0){
      setTodos(todosFromStorage);
    } 
  }, [])

  useEffect(() => {
    localStorage.setItem("todos" , JSON.stringify(todos));
  }, [todos])
  

  return (
    <>
      <TodoProvider value={ { todos , addTodo , deleteTodo , updateTodo ,toggleCompleted } }>
        <div className="w-full bg-gray-900 text-white h-full min-h-screen justify-items-center px-6 py-4 font-winky-rough sm:px-20 md:px-32">
          <h1 className="text-2xl text-white pb-2 "> ✅ Create Your Todo List 😊</h1>
          <CreateTodo />


          {todos.map((elem) => (
            <TodoList key={elem.id} todo={elem}  />
          ))}
        </div>
      </TodoProvider>
    </>
  );
}

export default App;
