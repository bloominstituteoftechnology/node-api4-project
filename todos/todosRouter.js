const express = require('express');
const router = express.Router();
const Todos = require('./db');

//Get route
router.get('/', (req, res) => {
    Todos.find().then(todosResults => {
        const todos = todosResults.map(todo => {
            return {...todo, completed: Boolean(todo.completed)}
        })
        res.status(200).json(todos)
    })
})

router.get('/:id', async (req, res) => {
    const id = req.params.id;
    const todoItem = req.body;

    try {
        const [todo] = await Todos.findById(id)
        const fixedTodo = {...todo, completed: Boolean(todo.completed) }
        console.log(todo)
        res.status(200).json(fixedTodo)
    } catch (error) {
        res.status(400).json({ message: "user with ID could not be found" })
    }
})

//Post route
router.post('/', (req, res) => {
    const todoItem = req.body;
    Todos.insert(todoItem).then(todo => {
        res.status(201).json(todo)
    })
})

//Update route

router.put('/:id', (req, res) => {
    const id = req.params.id;
    const todoItem = req.body;
    Todos.findById(id).then(([oldTodo]) => {
        console.log(id, todoItem)
        Todos.update(id, todoItem).then(todo => {
            res.status(200).json({ updatedTo: todo, was: oldTodo })
        })
    })

    // const [err, [oldTodo]] = await withCatch(Todos.findById(id))
    // const [err2, updatedTodo] = await withCatch(Todos.update(id, todoItem))
    // if (err) res.status(500).json({error: "Error while finding the specified todo"})
    // if (err2) res.status(500).json({error: "Error while updating your todo item"})
    // res.status(200).json({updatedTo: updatedTodo, was: oldTodo})
})

function withCatch(promise) {
    return promise
        .then(data => [null, data])
        .catch(err => [err])
}


//Delete route

router.delete('/:id', async (req, res) => {
   const id = req.params.id;
   
    try {
        const [deleted] = await Todos.findById(id)
        await Todos.remove(id)
        res.status(200).json({...deleted, completed: Boolean(deleted.completed)})
    } catch (error) {
        res.status(400).json({ message: 'todo could not be deleted'})
    }
})

module.exports = router;