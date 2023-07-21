import React, { useState } from "react";

const useRequest = ({ url, method }) => {
  const [loading, setLoading] = useState(false)

  const sendRequest = async (body, custom) => {
    setLoading(true)
    const res = await fetch( url || custom, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
        "Authorization": `Bearer ${process.env.REACT_APP_API_KEY}`
      },
      body: JSON.stringify(body)
    })

    setLoading(false)
    const data = await res.json()

    return data
  };

  return {loading,sendRequest}
};

export default useRequest;
