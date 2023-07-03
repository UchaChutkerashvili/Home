import React, { useEffect, useState } from 'react'

const useLocalStorage = (key, fallback) => {
   const [value, setValue] = useState( localStorage.getItem(key) ?? fallback)

   useEffect(()=> {
        localStorage.setItem(key, value)
   },[key, value])

   return [value, setValue]
}

export default useLocalStorage