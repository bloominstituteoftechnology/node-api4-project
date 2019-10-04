import React, { useState, useRef } from 'react'
import axios from 'axios'

export default function TodoItem({todo, fetching, setFetching}) {
    const [updatedTodo, setUpdatedTodo] = useState({
        task: '',
        completed: false
    })
    const [isEditing, setIsEditing] = useState(false)

    const handleCompleted = e => {
        setFetching(true)
        axios
            // .put(`https://ez-pz-app.herokuapp.com/api/todos/${todo.id}`, {...todo, completed: !todo.completed})        
            .put(`http://localhost:5000/api/todos/${todo.id}`, {...todo, completed: !todo.completed})        
            .then(_ => setFetching(false))
            .catch(err => {
                setFetching(false)
                console.error(err)
            })
    }

    const handleEdit = e => {
        setIsEditing(true)
    }

    const handleDelete = e => {
        setFetching(true)
        axios
            // .delete(`https://ez-pz-app.herokuapp.com/api/todos/${todo.id}`)
            .delete(`http://localhost:5000/api/todos/${todo.id}`)
            .then(() => setFetching(false))
            .catch(err => {
                setFetching(false)
                console.error(err)
            })
    }

    const handleChanges = e => {
        if (e.target.name === "completed") {
            setUpdatedTodo({...updatedTodo, completed: e.target.checked})
        } else {
            setUpdatedTodo({...updatedTodo, [e.target.name]: e.target.value})
        }
    }

    const handleSubmit = e => {
        setFetching(true)
        e.preventDefault()
        axios
            // .put(`https://ez-pz-app.herokuapp.com/api/todos/${todo.id}`, updatedTodo )
            .put(`http://localhost:5000/api/todos/${todo.id}`, updatedTodo)
            .then(() => setFetching(false))
            .catch(err => {
                console.error(err)
                setFetching(false)
            })
        setIsEditing(false)
    }
    
    return (
        <>
        <div>
            <p>{todo.task}</p>
            <input type="checkbox" checked={todo.completed} onChange={handleCompleted} />
            <button onClick={handleEdit}>Edit</button>
            <button onClick={handleDelete}>Delete</button>
        </div>
        {
        isEditing && 
        <form onSubmit={handleSubmit}>
            <label htmlFor="task">
                Task
                <input onChange={handleChanges} type="text" name ="task" value={updatedTodo.task} />
            </label>
            <label htmlFor="completed">
                Completed
            <input onChange={handleChanges} type="checkbox" name="completed" />                
            </label>
            <button type="submit">Save Changes</button>
        </form>
        }
        </>
        
    )
}