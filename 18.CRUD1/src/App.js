import React, { useState, useCallback, useMemo } from "react";
import ToDoItem from "./components/ToDoItem";
import InProgressItem from "./components/InProgressItem";
import DoneItem from "./components/DoneItem";

import "./App.css";


const API_key = 'bs6jhRFj3qWsSiMQE1_0y3aoVn2_oWKod9e9_-LdtADG5E1VNQ' 

const App = () => {
  const [inputValue, setInputValue] = useState("");
  const [toDoList, setToDoList] = useState([]);
  const [inProgressList, setInProgressList] = useState([]);
  const [doneList, setDoneList] = useState([]);


  const handleInputChange = useCallback((e) => {
    setInputValue(e.target.value);
  }, []);

  const handleAddToDo = useCallback(() => {
    if (inputValue !== "") {
      const newToDo = {
        id: Date.now(),
        text: inputValue,
        isCompleted: false
      };

      // setToDoList((prevList) => [...prevList, newToDo]);
      fetch('/api/v1/todoList', {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Authorization": `Bearer ${API_key}`
        },
        body: JSON.stringify([{newToDo}])
      }).then(res => {
        if(!res.ok) throw new Error("Response Failed")
        return res.json()
      }).then(data => setToDoList((prevList) => [...prevList,  data.items[0].newToDo ]))
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
      if(!res.ok) throw new Error("Response Failed")
      return res.json()
    }).then(data => setToDoList(data.items.map((todo => {
      return {
        text: todo.newToDo.text,
        id: todo.newToDo.id,
      }
    }))  ))
    .catch(err => console.log(err))
  }

  const handleMarkDone = useCallback(
    (id) => {
      setDoneList((prevList) => {
        const doneWork = toDoList.find((item) => item.id === id);
        return [...prevList, doneWork];
      });
      setToDoList((prevList) => prevList.filter((item) => item.id !== id));
      setInProgressList((prevList) =>
        prevList.filter((item) => item.id !== id)
      );
    },
    [toDoList]
  );

  const handleDeleteToDo = useCallback((id) => {
    setToDoList((prevList) => prevList.filter((item) => item.id !== id));
    setInProgressList((prevList) => prevList.filter((item) => item.id !== id));
    setDoneList((prevList) => prevList.filter((item) => item.id !== id))
  }, []);

  const handleMoveToInProgress = useCallback(
    (id) => {
      setInProgressList((prevList) => {
        const inProgressWork = toDoList.find((item) => item.id === id);
        return [...prevList, inProgressWork];
      });
      setToDoList((prevList) => prevList.filter((item) => item.id !== id));
    },
    [toDoList]
  );
  const handleMoveToBackInProgress = useCallback((id) => {
    setInProgressList(prevList => {
      const inProgressWork = doneList.find(item => item.id === id);
      return [...prevList, inProgressWork];
    });
    setDoneList(prevList => prevList.filter(item => item.id !== id));
  }, [doneList]);

   

  const handleMoveToToDo = useCallback(
    (id) => {
      setToDoList((prevList) => {
        const toDoWork = inProgressList.find((item) => item.id === id);
        return [...prevList, toDoWork];
      });
      setInProgressList((prevList) =>
        prevList.filter((item) => item.id !== id)
      );
    },
    [inProgressList]
  );

  const handleMoveToDone = useCallback(
    (id) => {
      setDoneList((prevList) => {
        const doneWork = inProgressList.find((item) => item.id === id);
        return [...prevList, doneWork];
      });
      setInProgressList((prevList) =>
        prevList.filter((item) => item.id !== id)
      );
    },
    [inProgressList]
  );

  const memoizedToDoList = useMemo(
    () =>
      toDoList.map((item) => (
        <ToDoItem
          key={item.id}
          item={item}
          handleMoveToInProgress={handleMoveToInProgress}
          handleDeleteToDo={handleDeleteToDo}
        />
      )),
    [toDoList, handleMoveToInProgress, handleDeleteToDo]
  );

  const memoizedInProgressList = useMemo(
    () =>
      inProgressList.map((item) => (
        <InProgressItem
          key={item.id}
          item={item}
          handleMoveToToDo={handleMoveToToDo}
          handleMoveToDone={handleMoveToDone}
          handleDeleteToDo={handleDeleteToDo}
        />
      )),
    [inProgressList, handleMoveToToDo, handleMoveToDone, handleDeleteToDo]
  );

  const memoizedDoneList = useMemo(
    () =>
      doneList.map((item) => (
        <DoneItem
          key={item.id}
          item={item}
          handleMoveToBackInProgress={handleMoveToBackInProgress}
          handleDeleteToDo={handleDeleteToDo}
        />
      )),
    [doneList, handleMoveToBackInProgress, handleDeleteToDo]
  );

  return (
    <div className="App">
      <div className="item">
        <h2 style={{borderBottom: "2px solid rgb(153, 6, 6)"}} >Backlog | {toDoList.length}</h2>
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
        <h2 style={{borderBottom: "2px solid rgb(255, 230, 0)"}}>In Progress | {inProgressList.length}</h2>
        <ul>{memoizedInProgressList}</ul>
      </div>
      <div className="item">
        <h2 style={{borderBottom: "2px solid rgb(5, 207, 5)"}}>Done | {doneList.length}</h2>
        <ul>{memoizedDoneList}</ul>
      </div>
    </div>
  );
};

export default App;


