import React, { useRef } from "react";

const UserForm = ({onFormSubmit, firstName, lastName}) => {
  const firstNameRef = useRef()
  const lastNameRef = useRef()

  const onSubmit = (e) => {
    e.preventDefault()
    onFormSubmit(firstNameRef, lastNameRef)
  }

  return (
    <form onSubmit={onSubmit}>
      <input
        type="text"
        placeholder="firstName"
        ref={firstNameRef}
        defaultValue={firstName}
      />
      <input
        type="text"
        placeholder="lastName"
        ref={lastNameRef}
        defaultValue={lastName}
      />
      <button>Submit</button>
    </form>
  );
};

export default UserForm;
