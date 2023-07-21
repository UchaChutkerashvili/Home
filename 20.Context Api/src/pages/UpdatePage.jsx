import React, { useState } from "react";
import UserForm from "../components/UserForm";
import { useNavigate, useParams } from "react-router-dom";
import useFetch from "../hooks/useFetch";
import useRequest from "../hooks/useRequest";

const UpdatePage = () => {
  const navigate = useNavigate();
  const { userId } = useParams();
  const { response, loading, error } = useFetch({
    url: `/api/v1/users/${userId}`,
    method: "GET",
  })


console.log(response)

  const onSubmit = (firstName, lastName) => {
    fetch(`/api/v1/users/${userId}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
        "Authorization": `Bearer ${process.env.REACT_APP_API_KEY}`,
      },
      body: JSON.stringify({ firstName, lastName }),
    })
      .then((res) => {
        if (!res.ok) throw new Error("Response failed");
        return res.json();
      })
      .then(() => navigate('/'))
      .catch(err => console.log(err))
  }

  if (loading && !response) return <p>Loading..</p>;
  if (error || !response) return <p>Something went wrong</p>;
  return (
    <UserForm
      onFormSubmit={onSubmit}
      firstNamei={response.firstName}
      lastNamei={response.lastName}
    />
  );
};

export default UpdatePage;
