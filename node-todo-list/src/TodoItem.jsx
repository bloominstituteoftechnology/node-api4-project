import React, { useState, useRef } from 'react'
import axios from 'axios'

export default function TodoItem({todo, isEditing, setIsEditing}) {
    const [updatedTodo, setUpdatedTodo] = useState({
        task: '',
        completed: false
    })
    const handleCompleted = e => {
        axios
            .put(`https://ez-pz-app.herokuapp.com/api/todos/${todo.id}`, {...todo, completed: !todo.completed})        
            .catch(console.error)
    }

    const handleEdit = e => {
        setIsEditing(true)
    }

    const handleDelete = e => {
        axios
            .delete(`https://ez-pz-app.herokuapp.com/api/todos/${todo.id}`)
            .catch(console.error)
    }

    const handleChanges = e => {
        if (e.target.name === "completed") {
            setUpdatedTodo({...updatedTodo, completed: e.target.checked})
        } else {
            setUpdatedTodo({...updatedTodo, [e.target.name]: e.target.value})
        }
    }

    const handleSubmit = e => {
        e.preventDefault()
        axios
            .put(`https://ez-pz-app.herokuapp.com/api/todos/${todo.id}`, updatedTodo )
            .catch(console.error)
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