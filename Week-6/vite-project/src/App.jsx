import { useState, useEffect } from "react";

function App() {
  const [todos, setTodos] = useState([]);

  // fetch the todos from the backend using useEffect hook
  useEffect(() => {
    const interval = setInterval(() => {
      fetch("https://sum-server.100xdevs.com/todos")
        .then(async (res) => {
          const json = await res.json();
          console.log("Fetched todos:", json); // Log the response
          if (Array.isArray(json)) {
            setTodos(json);
          } else {
            console.error("Expected an array but got:", json);
          }
        })
        .catch((err) => console.error("Failed to fetch todos:", err));
    }, 5000);

    // Clean up the interval on component unmount
    return () => clearInterval(interval);
  }, []);

  return (
    <div>
      {todos.length}
      {todos.map((todo) => (
        <Todo key={todo.id} title={todo.title} description={todo.description} />
      ))}
    </div>
  );
}

function Todo({ title, description }) {
  return (
    <div>
      <h2>{title}</h2>
      <h5>{description}</h5>
    </div>
  );
}

export default App;
