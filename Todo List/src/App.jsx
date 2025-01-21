import { useState } from 'react'
import './App.css'
import Navbar from './components/Navbar'
// import { v4 as uuidv4 } from 'uuid';

function App() {
  const [count, setCount] = useState(1);
  const [todo, setTodo] = useState('');
  const [todos, setTodos] = useState([]);
  const todoAdd = () => {
    if (todo.length == 0) {
      alert("please add any value");
    } else {
      setCount(count + 1)
      setTodos([...todos, { id: count, title: todo, isComplete: false }])
      // console.log("this is todo", todo) // debuging
      setTodo("")
    }
  }

  const handleCheck = (e) => {
    let id = e.target.name;
    let index = todos.findIndex(item => {
      return item.id == id;
    })
    // console.log(index) // debuging
    let newTodos = [...todos];
    // console.log("I am new todo ", newTodos) // debuging
    newTodos[index].isComplete = !newTodos[index].isComplete;
    setTodos(newTodos)
  }

  const handleEdit = (e) => {
    let id = e.target.name;
    let index = todos.findIndex(item => {
      return item.id == id;
    })
    let newTodos = [...todos];
    // console.log(newTodos[index].title); // debuging
    let con = confirm(`Do You want to change this value "${newTodos[index].title}"`);
    if (con) {
      let newtitle = prompt("Enter New todo ");
      newTodos[index].title = newtitle;
      setTodos(newTodos)
    }
  }

  const handleDelete = (e) => {
    let id = e.target.name;
    let index = todos.findIndex(item => {
      return item.id == id;
    })
    let newTodos = [...todos];
    
    console.log("i am delete new todo" , newTodos[index].title);
    let con = confirm(`Do you want to delete this value "${newTodos[index].title}"`);
    if(con){
      let newTodos = todos.filter(
        items => {
          return items.id != id;
        }
      );
      setTodos(newTodos);
    }

    // NOTE :- aa approch work kare che means delete thay che pan error bhi che ke ene id line sir na malvana karane jayre new add karishu delete karaya pachi to ene id propar na hova na karne e kasu add na kari sake atle error aavse. 
    // let newTodos = [...todos];
    // console.log("i am delete new todo" , newTodos[index].title);
    // let con = confirm(`Do you want to delete this value "${newTodos[index].title}"`);
    // if(con){
    //   delete newTodos[index];
    //   console.log(newTodos);
    //   alert("Yeah you delete successfully");
    //   setTodos(newTodos);
    // }

  }

  return (
    <>
      <Navbar />
      <div className='container'>
        <div className='form-todo'>
          <label htmlFor="Todo">Todo</label>
          <input type="text" id='Todo' value={todo} onChange={(e) => setTodo(e.target.value)} />
          <button onClick={todoAdd} className='btn'>Add</button>
        </div>

        <div className="todo">
          {todos.map(items => {
            // console.log(items.title) // Debuging use
            return (
              <div key={items.id} className='todo-list'>
                <div className="left-todo">
                  <input name={items.id} type="checkbox" checked={items.iscomplete} id="" onChange={handleCheck} />
                  <p className={items.isComplete ? "line-strike" : ""}>
                    {items.title}
                  </p>
                </div>
                <div className="right-todo">
                  <button className="Edit btn" name={items.id} onClick={handleEdit}>Edit</button>
                  <button className="Delete btn" name={items.id} onClick={handleDelete}>Delete</button>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </>
  )
}
export default App
