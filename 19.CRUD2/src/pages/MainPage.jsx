import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import useRequest from '../hooks/useRequest';

const MainPage = () => {
    const [userList, setUserList] = useState([]);
  
  useEffect(() => {
    fetch("/api/v1/users", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        "Authorization": `Bearer ${process.env.REACT_APP_API_KEY}`,
      }      
    })
    .then((res) => {
      if (!res.ok) throw new Error("Response failed");
      return res.json();
    })
    .then(data =>  setUserList(data.items.map(user => {
      return {
        firstName: user.firstName,
        lastName: user.lastName,
        id: user._uuid
      }
    })))
    .catch(err => console.log(err))
  },[])

  const {sendRequest} = useRequest({method: 'DELETE'})


  const onDelete = (userId) => {
    sendRequest(null, `/api/v1/users${userId}`)
  }


  return (
    <div className="App">
           

      {userList.map((user) => <div key={user.id}>
        <p>{user.firstName}</p>
        <p>{user.lastName}</p>
        <Link to={`/update/${user.id}`}>Edit</Link>
        <button onClick={() => onDelete(user.id)}>Delete</button>
      </div> )}
    </div>
  )
}

export default MainPage