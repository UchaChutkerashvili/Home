import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { addToDone } from '../store/done/done.slice'
import { deleteTodo } from '../store/todo/todo.slice'
import { getTodos } from '../store/todo/todos.thunk'

const TodoList = () => {
  const {todoList} = useSelector((state) => state.todo)
  const dispatch = useDispatch();
   
  useEffect(()=> {
    dispatch(getTodos())
  },[])
 
  


  const onDelete = (id) => {
    
    dispatch(deleteTodo({ id }))
  };

  const onDone = (id, text) => {
    
    dispatch(addToDone({id, text}))
    dispatch(deleteTodo({ id }))
  };
console.log(todoList)
  return (
    <div>
      <h2>Todo List</h2>
      {todoList.map((item) => <div key={item._uuid}>
            {item.name}
            <button onClick={() => onDelete(item.id)}>Delete</button>
            <button onClick={() => onDone(item.id, item.text)} >Done</button>
         </div>  )}
      <Link to={'/create'}>Create Page</Link>
      <Link to={'/donelist'}>DoneTodos Page</Link>
    </div>
  )
}

export default TodoList