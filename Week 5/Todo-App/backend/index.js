// express boilerplate code 
const express = require("express");
const { createTodo, updateTodo } = require("./types");
const cors = require("cors")
const { todo } = require("./db");
const app = express(); // Correct initialization

app.use(express.json());
app.use(cors());

// body {
// title: string
// description: string
// }

// to upload/ create a todo
app.post("/todo", async function (req, res) {
    const createPayload = req.body;
    const parsedPayload = createTodo.safeParse(createPayload);
    if (!parsedPayload.success) {
        res.status(411).json({
            msg: "You sent the wrong input!",
        });
        return;
    }
    // put it in MongoDB database
    await todo.create({
        title: createPayload.title,
        description: createPayload.description,
        completed: false,
    });

    res.json({
        msg: "Todo Created!"
    });
});

// to get all the todos
app.get("/todos", async function (req, res) {
    const todos = await todo.find({});
    res.json({
        todos
    });
});

// to mark a todo as completed
app.put("/completed", async function (req, res) {
    const updatePayload = req.body;
    const parsedPayload = updateTodo.safeParse(updatePayload);
    if (!parsedPayload.success) {
        res.status(411).json({
            msg: "You sent the wrong inputs!",
        });
        return;
    }
    await todo.updateOne({
        _id: req.body.id
    }, {
        completed: true,
    });
    res.json({
        msg: "Todo marked as completed!"
    });
});

app.listen(3000, () => {
    console.log("Server is running on port 3000");
});




// echo "# 100xDevs-Cohort" >> README.md
// git init
// git add README.md
// git commit -m "first commit"
// git branch -M main
// git remote add origin https://github.com/YogeshK34/100xDevs-Cohort.git
// git push -u origin main