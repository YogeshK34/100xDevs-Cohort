import { useState } from 'react'
import './App.css'


// todo app
// state would be
//

function App() {
  const [todos, setTodos] = useState([{
    title: "Do Coding",
    description: "Solve DSA",
    completed: false
  }, {
    title: "Do Yoga",
    description: "Do Suryanamaskar",
    completed: true
  }
  ])

  return (
    <div>
     {/* <Todo title={todos[0].title}
       description = {todos[0].description}></Todo> */}
       {todos.map(function(todo){
        return  <Todo title={todos[0].title}
        description = {todos[0].description} />
       })}
    </div>
  )
}

// this is a component
function Todo(props){
  return <div>
    <h1>{props.title}</h1>
    <h1>{props.description}</h1>
  </div>
}
export default App
