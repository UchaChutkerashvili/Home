import React, { useRef, useState } from "react";
import { languageDictionary, useLanguageContext } from "../contexts/languageContext";

const UserForm = ({onFormSubmit, firstNamei, lastNamei }) => {
  const [firstName, setFirstName] = useState()
  const [lastName, setLastName] = useState()

  const { language } = useLanguageContext()

  const onSubmit = (e) => {
    e.preventDefault()
    onFormSubmit(firstName, lastName)
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
      <button>{languageDictionary[language].submitText}</button>
    </form>
  );
};

export default UserForm;
