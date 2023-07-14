import React from 'react';

const InProgressItem = ({ item, handleMoveToToDo, handleMoveToDone, handleDeleteToDo }) => {
  console.log("InProgressItem");
  return (
    <li style={{ borderColor: `#${((Math.random() * 0xfffff * 1000000).toString(16)).slice(0,6)}` }}>
      {item.text}
      <button onClick={() => handleMoveToToDo(item.id)}>Move to To Do</button>
      <button onClick={() => handleMoveToDone(item.id)}>Move to Done</button>
      <button onClick={() => handleDeleteToDo(item.id)}>Delete</button>
    </li>
  );
};

export default React.memo(InProgressItem);
