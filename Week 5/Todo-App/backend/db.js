const mongoose = require("mongoose")

mongoose.connect("mongodb+srv://khutwadyogesh34:VblYaNNri2LzK8JV@cluster0.z28rmbf.mongodb.net/");

const todoSchema = mongoose.Schema({
    title: String,
    description: String,
    completed: Boolean
})

const todo = mongoose.model('todos', todoSchema)

module.exports = {
    todo
}