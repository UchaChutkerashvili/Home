import React, { useState, useCallback, useMemo } from 'react';
import ToDoItem from './components/ToDoItem';
import DoneItem from './components/DoneItem';

 
const App = () => {
  
  const [inputValue, setInputValue] = useState('');
  const [toDoList, setToDoList] = useState([]);
  const [doneList, setDoneList] = useState([]);

  const handleInputChange = useCallback((e) => {
    setInputValue(e.target.value);
  }, []);

  const handleAddToDo = useCallback(() => {
    if (inputValue !== '') {
      const newToDo = {
        id: Date.now(),
        text: inputValue
      };

      setToDoList(prevList => [...prevList, newToDo]);
      setInputValue('');
    }
  }, [inputValue]);

  const handleMarkDone = useCallback((id) => {
    setDoneList(prevList => {
      const doneWork = toDoList.find(item => item.id === id);
      return [...prevList, doneWork];
    });
    setToDoList(prevList => prevList.filter(item => item.id !== id));
  }, [toDoList]);

  const handleDeleteToDo = useCallback((id) => {
    setToDoList(prevList => prevList.filter(item => item.id !== id));
  }, []);

  const handleMoveToToDo = useCallback((id) => {
    setToDoList(prevList => {
      const toDoWork = doneList.find(item => item.id === id);
      return [...prevList, toDoWork];
    });
    setDoneList(prevList => prevList.filter(item => item.id !== id));
  }, [doneList]);

  const memoizedToDoList = useMemo(() => (
    toDoList.map(item => (
      <ToDoItem
        key={item.id}
        item={item}
        handleMarkDone={handleMarkDone}
        handleDeleteToDo={handleDeleteToDo}
      />
    ))
  ), [toDoList, handleMarkDone, handleDeleteToDo]);

  const memoizedDoneList = useMemo(() => (
    doneList.map(item => (
      <DoneItem
        key={item.id}
        item={item}
        handleMoveToToDo={handleMoveToToDo}
        handleDeleteToDo={handleDeleteToDo}
      />
    ))
  ), [doneList, handleMoveToToDo, handleDeleteToDo]);

  return (
    <div className="App">
      <div>
        <h2>To Do Works</h2>
        <input
          type="text"
          value={inputValue}
          onChange={handleInputChange}
          placeholder="Enter a work..."
        />
        <button onClick={handleAddToDo}>Add</button>
        <ul>
          {memoizedToDoList}
        </ul>
      </div>
      <div>
        <h2>Done Works</h2>
        <ul>
          {memoizedDoneList}
        </ul>
      </div>
    </div>
  );
};

export default App;
