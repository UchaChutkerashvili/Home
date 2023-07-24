import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'

const TodoList = () => {
  const {todoList} = useSelector((state) => state.todo)
  const dispatch = useDispatch();
  console.log(todoList)
  const onDelete = (id) => {
    
    dispatch({ type: 'DELETE_TODO', payload: id });
  };

  const onDone = (id, text) => {
    dispatch({ type: 'ADD_TO_DONE', payload: { id, text } });
    dispatch({ type: 'DELETE_TODO', payload: id });
  };

  return (
    <div>
      <h2>Todo List</h2>
      {todoList.map((item) => <div key={item.id}>
            {item.text}
            <button onClick={() => onDelete(item.id)}>Delete</button>
            <button onClick={() => onDone(item.id, item.text)} >Done</button>
         </div>  )}
      <Link to={'/create'}>Create Page</Link>
      <Link to={'/donelist'}>DoneTodos Page</Link>
    </div>
  )
}

export default TodoList