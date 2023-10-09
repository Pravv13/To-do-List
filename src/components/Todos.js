import React, { useState } from 'react'
import { AiFillDelete } from 'react-icons/ai' 
import { BsBookmarkCheck } from 'react-icons/bs'

function Todos() {
const [todos, setTodos] = useState([])
const [inputTodo, setInputTodo] = useState('')
const handleAddTodo = () => {
    if (inputTodo.trim() !== ''){
        setTodos([...todos, {text: inputTodo, completed: false}])
        setInputTodo('')
    }
}
const handleDeleteTodo = (index) => {
    const newTodos = [...todos];
    newTodos.splice(index, 1);
    setTodos(newTodos);
}
const handleCompleteTodo = (index) => {
    const newTodos = [...todos];
    newTodos[index].completed = !newTodos[index].completed;
    setTodos(newTodos);
}
  return (
    <div>
        <h1>My Todo List</h1>
      <input 
      type='text' 
      value={inputTodo}
      onChange={(e) => setInputTodo(e.target.value)}
      placeholder='Tambahkan Tugas'
      /> 
      <button 
      onClick={handleAddTodo}
      >Tambah</button>
      <h1>Your List:</h1><br></br>
      <p>
        {todos.map((todo, index) => (
            <div>
                <li key={index} style={{ marginBottom: '8px', textDecoration: todo.completed ? 'line-through' : 'none'}}>
                    <span>{todo.text}</span>
                    <button onClick={() => handleCompleteTodo(index)}>
                        <BsBookmarkCheck />
                        {todo.completed ? 'batalkan selesai' : 'selesai'}
                    </button>
                    <button onClick={() => handleDeleteTodo(index)}>
                        <AiFillDelete />  
                    </button>
                </li> 
            </div>
            ))}
      </p>
    </div>
  )
}

export default Todos
