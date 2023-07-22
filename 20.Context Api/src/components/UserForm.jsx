import React, { useRef, useState } from "react";
import { languageDictionary, useLanguageContext } from "../contexts/languageContext";

const UserForm = ({onFormSubmit, firstNamei, lastNamei, datei, taski }) => {
  const [firstName, setFirstName] = useState()
  const [lastName, setLastName] = useState()
  const [date, setDate] = useState()
  const [task, setTask] = useState()

  const { language } = useLanguageContext()

  const onSubmit = (e) => {
    e.preventDefault()
    onFormSubmit(firstName, lastName, date, task)
  }

  return (
    <form onSubmit={onSubmit}>
      <input
        type="text"
        placeholder= {languageDictionary[language].placeholderNameText}
        onChange={e => setFirstName(e.target.value)}
        defaultValue={firstNamei}
      />
      <input
        type="text"
        placeholder= {languageDictionary[language].placeholderLastNameText}
        onChange={e => setLastName(e.target.value)}
        defaultValue={lastNamei}
      />
      <input
        type="date"
        placeholder="date"
        onChange={e=> setDate(e.target.value)}
        defaultValue={datei}
      />
      <input
        type="text"
        placeholder= {languageDictionary[language].taskText}
        onChange={e=> setTask(e.target.value)}
        defaultValue={taski}
      />
      <button>{languageDictionary[language].submitText}</button>
    </form>
  );
};

export default UserForm;
