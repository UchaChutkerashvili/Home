import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { addTodoAction } from '../store/todo/todo.actions'
import { Link } from 'react-router-dom'

const CreateTodo = () => {
  const dispatch = useDispatch()
  const [value, setValue] = useState('')

  const onSubmit = (e) => {
    e.preventDefault()

    const id = Date.now().toString()

    dispatch(addTodoAction({id, text: value}))
      
    setValue('')
  }

  return <form onSubmit={onSubmit}>
    <input  type='text' value={value} onChange={e=> setValue(e.target.value)} />
    <button>Submit</button>
    <Link to={'/'}>Main page</Link>
  </form>
}

export default CreateTodo