import React  from 'react';

const DoneItem = React.memo(({ item, handleMoveToToDo, handleDeleteToDo }) => {
  console.log("DoneItem")
  return (
    <li>
      {item.text}
      <button onClick={() => handleMoveToToDo(item.id)}>Move to To Do</button>
      <button onClick={() => handleDeleteToDo(item.id)}>Delete</button>
    </li>
  );
});
  
  export default DoneItem;