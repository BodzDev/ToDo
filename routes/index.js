const indexRouter = require('express').Router();
const Todo = require('../models/Todo');

indexRouter
    .get('/', async(req, res) => {
        const allTodo = await Todo.find();
        res.render('index', {todo: allTodo});
    });

module.exports = {
    indexRouter,
};