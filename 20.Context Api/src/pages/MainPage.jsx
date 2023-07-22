import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import { languageDictionary, useLanguageContext } from '../contexts/languageContext';

const MainPage = () => {
  const {language } = useLanguageContext()
    const [userList, setUserList] = useState([]);
  
  const fetchUserList = () => {
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
        date: user.date,
        task: user.task,
        id: user._uuid
      }
    })))
    .catch(err => console.log(err))
  }  

  useEffect(() => {
    fetchUserList();
  }, []);



  const onDelete = (userId) => {
    fetch(`/api/v1/users/${userId}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
        "Authorization": `Bearer ${process.env.REACT_APP_API_KEY}`,
      },      
    }).then(fetchUserList()) 
      .catch(err => console.log(err))
  }


  return (
    <div className="App">
           
      <h3>{languageDictionary[language].todoText}</h3>
      {userList.map((user) => <div key={user.id}>
        <p>{user.firstName}</p>
        <p>{user.lastName}</p>
        <p>{user.date}</p>
        <p>{user.task} </p>
        <Link to={`/update/${user.id}`}>{languageDictionary[language].textEdit}</Link>
        <button onClick={() => onDelete(user.id)}>{languageDictionary[language].textDelete}</button>
      </div> )}
    </div>
  )
}

export default MainPage