import React, { useRef, useState } from "react";

const UserForm = ({onFormSubmit}) => {
  const [date, setDate] = useState()
  const [name, setName] = useState()
  const [lastname, setLastname] = useState()
  const [task, setTask] = useState()

  const onSubmit = (e) => {
    e.preventDefault()
    onFormSubmit(date, name, task)
  }

  return (
    <form onSubmit={onSubmit}>
      <input
        type="date"
        placeholder="date"
        onChange={e=> setDate(e.target.value)}
        defaultValue={date}
      />
      <input
        type="text"
        placeholder="first name"
        onChange={e=> setName(e.target.value)}
        defaultValue={name}
      />
      <input
        type="text"
        placeholder="last name"
        onChange={e=> setLastname(e.target.value)}
        defaultValue={lastname}
      />
      <input
        type="text"
        placeholder="task"
        onChange={e=> setTask(e.target.value)}
        defaultValue={task}
      />
      <button>Submit</button>
    </form>
  );
};

export default UserForm;
