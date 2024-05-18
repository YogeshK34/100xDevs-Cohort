import { useState } from "react";
import { useEffect } from "react";

function App() {
  const [selectedId, setSelectedID] = useState(1);

  return <div>
  <button onClick= {function(){
    setSelectedID(1);
  }}>1</button>
  <button onClick= {function(){
    setSelectedID(2);
  }}>2</button>
  <button onClick= {function(){
    setSelectedID(3);
  }}>3</button>
    <Todo id={selectedId} />
  </div>
}

function Todo({ id }) {
  const [todo, setTodo] = useState({});

  useEffect(() => {
    fetch("https://sum-server.100xdevs.com/todo?id=" + id)
      .then(async function (res) {
        const json = await res.json();
        setTodo(json.todo);
      })
  }, [id])

  return <div>
    Id: {id}
    <h1>
      {todo.title}
    </h1>
    <h4>
      {todo.description}
    </h4>
  </div>
}

export default App;