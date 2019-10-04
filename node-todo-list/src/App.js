import React, { useState, useEffect } from 'react';
import axios from 'axios'
import TodoItem from './TodoItem'
import logo from './logo.svg';
import './App.css';

function App() {
  const [todos, setTodos] = useState([])
  const [newTodo, setNewTodo] = useState({
    task: '',
    completed: ''
  })
  const [fetching, setFetching] = useState(false)

  useEffect(() => {
    // axios.get("https://ez-pz-app.herokuapp.com/api/todos")
    axios.get("http://localhost:5000/api/todos")
    .then(todos => {
      console.log({todos})
      setTodos(todos.data)
    })
    .catch(console.error)
  }, [fetching])
  
  const handleSubmit = e => {
    setFetching(true)
    e.preventDefault()
    // axios.post("https://ez-pz-app.herokuapp.com/api/todos", newTodo)
    axios.post("http://localhost:5000/api/todos", newTodo)
    .then(_ => setFetching(false))
    .catch(err => {
      setFetching(false)
      console.error(err)
    })
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
        <TodoItem todo={todo} fetching={fetching} setFetching={setFetching} />
      ))}
    </div>
  );
}

export default App;
