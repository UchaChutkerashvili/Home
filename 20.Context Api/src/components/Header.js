import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { useLanguageContext } from '../contexts/languageContext'

const Header = () => {
    const {language, toggleLanguage} = useLanguageContext()
  return (
    <header>
        <button onClick={toggleLanguage} >{language}</button>
        <Link to={'/'} >Main Page</Link>
        <Link to={'/create'} >Create Page</Link>
         
    </header>
  )
}

export default Header