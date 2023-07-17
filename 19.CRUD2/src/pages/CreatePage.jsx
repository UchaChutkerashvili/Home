import React, { useState } from 'react'
import UserForm from '../components/UserForm'
import { useNavigate } from 'react-router-dom';

const CreatePage = () => {
  const [loading, setLoading] = useState(false)
  const navigate = useNavigate()
  const onFormSubmit = (date, name, lastname,task) => {
    setLoading(true)
    fetch("/api/v1/todos", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        'Authorization': `Bearer _UZ_jot69Rmy4A8F9E467LqHoEhJh1TptuL1mKq69zIsy4iCuw`,
      },
      body: JSON.stringify([{ date, name, lastname, task }]),
    })
      .then((res) => {
        if (!res.ok) throw new Error("Response failed");
        return res.json();
      })
      .then(() => navigate('/'))
      .catch(err => console.log(err))
      setLoading(false)
  };
  if(loading) return <p>Loading ..</p>
  return <UserForm onFormSubmit={onFormSubmit} /> 
}

export default CreatePage