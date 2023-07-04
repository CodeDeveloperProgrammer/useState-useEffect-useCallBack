import { useState } from "react";
import { useFetch } from "./hooks/useFetch";

const App = () => {
  const [counter, setCounter] = useState(0);
  console.log("Inicio App");

  const { data, loading, error } = useFetch(
    "https://jsonplaceholder.typicode.com/users"
  );

  if (!data) return (<div className="container">
    <img className="spinner" src="./assets/images/icons8-spinner" alt="spinner" />
  </div>);
  if (error) return <h2 className="error">{error}</h2> 

  return (
    <>
      <h1>UseEffect</h1>
      <button onClick={() => setCounter(counter + 1)}>
        Counter: {counter}
      </button>

      <ul>
        {data.map((user) => (
          <li key={user.id}>{user.name}</li>
        ))}
      </ul>
    </>
  );
};

export default App;
