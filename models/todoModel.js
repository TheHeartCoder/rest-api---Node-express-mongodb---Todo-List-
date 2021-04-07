const mongoose = require('mongoose');

const todoSchema = mongoose.Schema({
    task: {
        type: String,
        required: true
    },
    active: {
        type: Boolean,
        default: true
    }
})

const Todo = mongoose.model('Todo', todoSchema)

module.exports = Todo