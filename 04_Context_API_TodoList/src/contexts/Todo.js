import { createContext, useContext } from "react";

export const Todo = createContext({
    todos: [{}],
    addTodo: (todo)=>{},
    updateTodo: (id,todo)=>{},
    deleteTodo: (id)=>{},
    toggleCompleted: (id)=>{}
});

export const TodoProvider = Todo.Provider;

export const useTodo = () => {
    return useContext(Todo)
}