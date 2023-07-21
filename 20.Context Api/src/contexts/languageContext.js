import { createContext, useContext, useMemo, useState } from "react"

export const languageDictionary = {
    English: 'Current language is English',
    Georgian: 'Current language is Georgian'
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