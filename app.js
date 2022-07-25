const express = require('express');
const mongoose = require('mongoose');
const {indexRouter} = require('./routes/index');
const {toDoRouter} = require('./routes/todo');

const app = express();

mongoose.connect('mongodb://localhost/todo_express', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
});

app.use(express.urlencoded({ extended: true}));
app.use(express.static('public'));
app.set('view engine', 'ejs');

app.use('/', indexRouter);
app.use('/', toDoRouter);


app.listen(3000, () => console.log('Server is listening on port: 3000'));
