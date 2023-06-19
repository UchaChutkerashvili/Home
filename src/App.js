import React, { useState } from 'react';

function App() {
  const [inputValue, setInputValue] = useState('');
  const [toDoList, setToDoList] = useState([]);
  const [doneList, setDoneList] = useState([]);

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };

  const handleAddToDo = () => {
    if (inputValue !== '') {
      const newToDo = {
        id: Date.now(),
        text: inputValue
      };

      setToDoList([...toDoList, newToDo]);
      setInputValue('');
    }
  };

  const handleMarkDone = (id) => {
    const doneWork = toDoList.find(item => item.id === id);
    setDoneList([...doneList, doneWork]);
    setToDoList(toDoList.filter(item => item.id !== id));
  };

  const handleDeleteToDo = (id) => {
    setToDoList(toDoList.filter(item => item.id !== id));
  };
   const handleDeleteFinishedList = (id) => {
    setDoneList(doneList.filter(item => item.id !== id));
  };

  const handleMoveToToDo = (id) => {
    const toDoWork = doneList.find(item => item.id === id);
    setToDoList([...toDoList, toDoWork]);
    setDoneList(doneList.filter(item => item.id !== id));
  };

  return (
    <div className="App">
      <div>
        <h2>To Do Tasks</h2>
        <input
          type="text"
          value={inputValue}
          onChange={handleInputChange}
          placeholder="Enter a work..."
        />
        <button onClick={handleAddToDo}>Add</button>
        <ul>
          {toDoList.map(item => (
            <li key={item.id}>
              {item.text}
              <button onClick={() => handleMarkDone(item.id)}>Done</button>
              <button onClick={() => handleDeleteToDo(item.id)}>Delete</button>
            </li>
          ))}
        </ul>
      </div>
      <div>
        <h2>Finished Tasks</h2>
        <ul>
          {doneList.map(item => (
            <li key={item.id}>
              {item.text}
              <button onClick={() => handleMoveToToDo(item.id)}>Move to To Do</button>
              <button onClick={() => handleDeleteFinishedList(item.id)}>Delete</button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default App;
