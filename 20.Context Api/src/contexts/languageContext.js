import { createContext, useContext, useMemo, useState } from "react"

export const languageDictionary = {
    English: {
        textEdit: 'Edit',
        textDelete: 'Delete',
        submitText: 'submit',
        MainPageText: 'Main Page',
        CreatePageText: 'Create Page',
        placeholderNameText: 'first Name',
        placeholderLastNameText: 'last Name',
        todoText: 'Todos',
        taskText: 'task'
      },
      Georgian: {
        textEdit: 'რედაქტირება',
        textDelete: 'წაშლა',
        submitText: 'გაგზავნა',
        MainPageText: 'მთავარი გვერდი',
        CreatePageText: 'დამატების გვერდი',
        placeholderNameText: 'სახელი',
        placeholderLastNameText: 'გვარი',
        todoText: 'შესასრულებელი დავალებები',
        taskText: 'შესასრულებელი დავალება'
      },
}

const LanguageContext = createContext(null)

const LanguageContextProvider = ({children}) => {
    const [isenglish, setIsEnglish] = useState(true)
    
    

    const contextValue = useMemo(() => ({
        language: isenglish ? 'English' : 'Georgian',
        toggleLanguage: () => setIsEnglish((prev) => !prev)
    }))

    return <LanguageContext.Provider value={contextValue}>
        {children}
    </LanguageContext.Provider>
}

export const useLanguageContext = () => {
    const contextValue = useContext(LanguageContext)
    if(!contextValue) throw new Error('Your component isnt inside UserContextPRovider')
    return contextValue
}

export default LanguageContextProvider