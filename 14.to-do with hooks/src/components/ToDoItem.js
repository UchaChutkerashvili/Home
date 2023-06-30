import React  from 'react';

const ToDoItem = ({ item, handleMarkDone, handleDeleteToDo }) => {
  console.log("ToDoItem")
  return (
    <li>
      {item.text}
      <button onClick={() => handleMarkDone(item.id)}>Done</button>
      <button onClick={() => handleDeleteToDo(item.id)}>Delete</button>
    </li>
  );
};

  export default React.memo(ToDoItem);