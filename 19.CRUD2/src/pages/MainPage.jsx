import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import useRequest from '../hooks/useRequest';

const MainPage = () => {
    const [userList, setUserList] = useState([]);
  
  useEffect(() => {
    fetch("/api/v1/todos", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: 'Bearer _UZ_jot69Rmy4A8F9E467LqHoEhJh1TptuL1mKq69zIsy4iCuw',
      }      
    })
    .then((res) => {
      if (!res.ok) throw new Error("Response failed");
      return res.json();
    })
    .then(data =>  setUserList(data.items.map(user => {
      return {
        date: user.date,
        name: user.name,
        lastname: user.lastname,
        task: user.task,
        id: user._uuid
      }
    })))
    .catch(err => console.log(err))
  },[])

  const {sendRequest} = useRequest({method: 'DELETE'})


  const onDelete = (userId) => {
    sendRequest(null, `/api/v1/todos${userId}`)
  }


  return (
    <div className="App">
           

      {userList.map((user) => <div key={user.id} className='todo-item'>
        <p className='date'>{user.date}</p>
        <p className='name'>{user.name}</p>
        <p className='name'>{user.lastname}</p>
        <p className='task'>{user.task}</p>
        <Link to={`/update/${user.id}`}>Edit</Link>
        <button onClick={() => onDelete(user.id)}>Delete</button>
      </div> )}
    </div>
  )
}

export default MainPage