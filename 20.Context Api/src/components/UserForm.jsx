import React, { useRef, useState } from "react";

const UserForm = ({onFormSubmit, firstNamei, lastNamei }) => {
  const [firstName, setFirstName] = useState()
  const [lastName, setLastName] = useState()

  const onSubmit = (e) => {
    e.preventDefault()
    onFormSubmit(firstName, lastName)
  }

  return (
    <form onSubmit={onSubmit}>
      <input
        type="text"
        placeholder="firstName"
        onChange={e => setFirstName(e.target.value)}
        defaultValue={firstNamei}
      />
      <input
        type="text"
        placeholder="lastName"
        onChange={e => setLastName(e.target.value)}
        defaultValue={lastNamei}
      />
      <button>Submit</button>
    </form>
  );
};

export default UserForm;
