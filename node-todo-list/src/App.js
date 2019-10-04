import React, { useState, useEffect } from 'react';
import axios from 'axios'
import TodoItem from './TodoItem'
import logo from './logo.svg';
import './App.css';

function App() {
  const [todos, setTodos] = useState([])
  const [isEditing, setIsEditing] = useState(false)
  const [newTodo, setNewTodo] = useState({
    task: '',
    completed: ''
  })

  useEffect(() => {
    if (isEditing) return
    axios.get("https://ez-pz-app.herokuapp.com/api/todos")
    // axios.get("http:localhost:5000/api/todos")
      .then(todos => {
        setTodos(todos)
      })
      .catch(console.error)
  }, [todos, isEditing])
  
  const handleSubmit = e => {
    e.preventDefault()
    axiosWithCors.post("https://ez-pz-app.herokuapp.com/api/todos", newTodo)
  }

  const handleChanges = e => {
    setNewTodo({...newTodo, [e.target.name]: e.target.value})
  }
  
  return (
    <div className="App">
      <h2>Yet another Todo App</h2>
      <form onSubmit={handleSubmit}>
        <label htmlFor="task">
          Add Todo
          <input type="text" name="task" value={newTodo.task} onChange={handleChanges}/>
        </label>
        
        <button type="submit">Add</button>
      </form>
      {todos.map(todo => (
        <TodoItem todo={todo} isEditing={isEditing} setIsEditing={setIsEditing} />
      ))}
    </div>
  );
}

export default App;
