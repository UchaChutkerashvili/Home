import React  from 'react';

const DoneItem = React.memo(({ item, handleMoveToBackInProgress, handleDeleteToDo }) => {
  console.log("DoneItem")
  return (
    <li style={{ borderColor: `#${((Math.random() * 0xfffff * 1000000).toString(16)).slice(0,6)}` }}>
      {item.text}
      <button onClick={() => handleMoveToBackInProgress(item.id)}>Move to InProgress</button>
      <button onClick={() => handleDeleteToDo(item.id)}>Delete</button>
    </li>
  );
});
  
  export default DoneItem;