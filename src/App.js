import { useState } from 'react';
import './App.css';

function App() {

    const[newItem, setNewItem] = useState("")
    const[todos, setTodos] = useState([])

    function handleSubmit(e) {
      e.preventDefault(); 

      setTodos(currentTodos => {
        return[
          ...currentTodos,
         {title:newItem,
          id: crypto.randomUUID,
          completed: false},
        ];
      });
      
      setNewItem("")
    }

    function toggleTodo(id, completed){
      setTodos(currentTodos => {
        return currentTodos.map(todo => {
          if(todo.id === id){
            return {...todo, completed}
          }

          return todo;
        })
      })
    }

  return (
    <>
    <div className='main'>
      <label htmlFor=""><h2>New Item</h2></label>
      <input  value={newItem}  
      onChange={e => setNewItem(e.target.value)} type="text" 
      id='item'
      className='InputBox' /><br /><br />
      <button onClick={handleSubmit} className='btn'>Add</button>
    </div>

    <div className='list'>
    <h2>Todo List</h2>
    <ul>
      {todos.map(todo => {
        return (<li key={todo.id}>
          <input type="checkbox" checked={todo.completed}
            onChange={e => toggleTodo(todo.id, e.target.checked)}
          />{todo.title}<button>Delete</button>
        </li>)
      })}
    </ul>
    </div>
    </>
  );
}

export default App;
