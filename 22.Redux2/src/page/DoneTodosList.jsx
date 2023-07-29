import React from 'react'
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

const DoneTodosList = () => {
    const { doneList } = useSelector((state) => state.done);
    console.log(doneList)
    return (
    <div>
    <h2>Done List</h2>
    {doneList.map((item) => (
      <div key={item.id}>{item.text}</div>
    ))}
    <Link to={'/'}>Main page</Link>
  </div>
  )
}

export default DoneTodosList