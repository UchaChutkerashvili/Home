import React from 'react';

interface ToDoItemProps {
  item: {
    id: number;
    text: string;
  };
  handleMoveToInProgress: (id: number) => void;
  handleDeleteToDo: (id: number) => void;
}

const ToDoItem: React.FC<ToDoItemProps> = ({ item, handleMoveToInProgress, handleDeleteToDo }) => {
  console.log("ToDoItem");
  return (
    <li style={{ borderColor: `#${((Math.random() * 0xfffff * 1000000).toString(16)).slice(0, 6)}` }}>
      {item.text}
      <button onClick={() => handleMoveToInProgress(item.id)}>Done</button>
      <button onClick={() => handleDeleteToDo(item.id)}>Delete</button>
    </li>
  );
};

export default React.memo(ToDoItem);
