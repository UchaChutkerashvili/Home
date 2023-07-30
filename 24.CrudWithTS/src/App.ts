import React, { useState, useCallback, useMemo } from "react";
import ToDoItem from "./components/ToDoItem";
import InProgressItem from "./components/InProgressItem";
import DoneItem from "./components/DoneItem";

import "./App.css";

interface ToDo {
  id: number;
  text: string;
  isCompleted: boolean;
}

const API_key = 'bs6jhRFj3qWsSiMQE1_0y3aoVn2_oWKod9e9_-LdtADG5E1VNQ';

const App: React.FC = () => {
  const [inputValue, setInputValue] = useState<string>("");
  const [toDoList, setToDoList] = useState<ToDo[]>([]);
  const [inProgressList, setInProgressList] = useState<ToDo[]>([]);
  const [doneList, setDoneList] = useState<ToDo[]>([]);

  const handleInputChange = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value);
  }, []);

  const handleAddToDo = useCallback(() => {
    if (inputValue !== "") {
      const newToDo: ToDo = {
        id: Date.now(),
        text: inputValue,
        isCompleted: false,
      };

      // setToDoList((prevList) => [...prevList, newToDo]);
      fetch('/api/v1/todoList', {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Authorization": `Bearer ${API_key}`
        },
        body: JSON.stringify([{ newToDo }])
      }).then(res => {
        if (!res.ok) throw new Error("Response Failed")
        return res.json()
      }).then(data => setToDoList((prevList) => [...prevList, data.items[0].newToDo]))
        .catch(err => console.log(err))
      setInputValue("");
    }
  }, [inputValue]);

  const getToDos = () => {
    fetch('/api/v1/todoList', {
      headers: {
        "Content-Type": "application/json",
        "Authorization": `Bearer ${API_key}`
      },
    }).then(res => {
      if (!res.ok) throw new Error("Response Failed")
      return res.json()
    }).then(data => setToDoList(data.items.map((todo: { newToDo: ToDo }) => {
      return {
        text: todo.newToDo.text,
        id: todo.newToDo.id,
        isCompleted: todo.newToDo.isCompleted,
      };
    })))
      .catch(err => console.log(err))
  }

 

  return (
    <div className="App">
      <div className="item">
        <h2 style={{ borderBottom: "2px solid rgb(153, 6, 6)" }}>Backlog | {toDoList.length}</h2>
        <input
          type="text"
          value={inputValue}
          onChange={handleInputChange}
          placeholder="Enter a work..."
        />
        <button onClick={handleAddToDo}>Add</button>
        <button onClick={getToDos}>Get todoList</button>
        <ul>{memoizedToDoList}</ul>
      </div>
      <div className="item">
        <h2 style={{ borderBottom: "2px solid rgb(255, 230, 0)" }}>In Progress | {inProgressList.length}</h2>
        <ul>{memoizedInProgressList}</ul>
      </div>
      <div className="item">
        <h2 style={{ borderBottom: "2px solid rgb(5, 207, 5)" }}>Done | {doneList.length}</h2>
        <ul>{memoizedDoneList}</ul>
      </div>
    </div>
  );
};

export default App;
