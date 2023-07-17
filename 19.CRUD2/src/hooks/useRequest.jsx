import React, { useState } from "react";

const useRequest = ({ url, method }) => {
  const [loading, setLoading] = useState(false)

  const sendRequest = async (body, custom) => {
    setLoading(true)
    const res = await fetch( url || custom, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
        "Authorization": `Bearer _UZ_jot69Rmy4A8F9E467LqHoEhJh1TptuL1mKq69zIsy4iCuw`
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
