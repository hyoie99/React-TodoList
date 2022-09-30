import { useState } from "react";

function App() {
  const [toDo, setToDo] = useState("");
  const [toDos, setToDos] = useState([]);

  const inputTODO = (event) => {
    setToDo(event.target.value);
    // console.log(toDo);
  };
  const submitEvent = (event) => {
    event.preventDefault();
    // console.log(toDo);
    if (toDo === "") {
      return;
    } else {
      setToDos((currentList) => [...currentList, toDo]);
      setToDo("");
    }
  };

  return (
    <div className="App">
      <h1> ToDo List </h1>
      <form onSubmit={submitEvent}>
        <input
          value={toDo}
          onChange={inputTODO}
          type="text"
          placeholder="What to do?"
        />
        <button>Add To Do</button>
      </form>
      <hr />
      <ul>
        {toDos.map((item, key) => (
          <li key={key}>{item}</li>
        ))}
      </ul>
    </div>
  );
}

export default App;
