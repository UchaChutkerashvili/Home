import React, { useEffect, useState } from 'react'

const useFetch = ({url, method}) => {
    const [response, setResponse] = useState(null)
    const [error, setError] = useState(null)
    const [loading, setLoading] = useState(null)

    useEffect(() => {
        setLoading(true)
        fetch(url, {
            method,
            headers: {
              "Content-Type": "application/json",
              "Authorization": `Bearer _UZ_jot69Rmy4A8F9E467LqHoEhJh1TptuL1mKq69zIsy4iCuw`
            },
          
          })
          .then(res => {
            if(!res.ok) throw new Error("Response Failed")
            return res.json()
          })
          .then(data => setResponse(data))
          .catch(err => setError(err))
          .finally(() => setLoading(false))

          return () => {
            setResponse(null)
            setError(null)
            setLoading(false)
          }
    },[url, method])
  return {response, error, loading}
}

export default useFetch