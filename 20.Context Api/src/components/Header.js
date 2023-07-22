import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { languageDictionary, useLanguageContext } from '../contexts/languageContext'

const Header = () => {
    const {language, toggleLanguage} = useLanguageContext()
  return (
    <header >
        <button onClick={toggleLanguage} >{language}</button>
        <Link to={'/'} >{languageDictionary[language].MainPageText}</Link>
        <Link to={'create'} >{languageDictionary[language].CreatePageText}</Link>
         
    </header>
  )
}

export default Header