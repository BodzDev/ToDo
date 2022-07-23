const toDoRouter = require('express').Router();
const Todo = require('../models/Todo');

toDoRouter
    .post('/add/todo', (req, res) => {
        const {todo} = req.body;
        const newTodo = new Todo({todo});

        newTodo
            .save()
            .then(() => {
                console.log('Todo successfully added!');
                res.redirect('/');
            })
            .catch(err => console.log(err));
    })

    .get('/delete/todo/:_id', (req, res) => {
        const { _id } = req.params;
        Todo.deleteOne({_id})
            .then(() => {
                console.log('Todo successfully deleted');
                res.redirect('/');
            })
            .catch(err => console.log(err));
    });

    module.exports = {
        toDoRouter,
    };