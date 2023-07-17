import React, { useState } from "react";
import UserForm from "../components/UserForm";
import { useNavigate, useParams } from "react-router-dom";
import useFetch from "../hooks/useFetch";
import useRequest from "../hooks/useRequest";

const UpdatePage = () => {
  const navigate = useNavigate();
  const { userId } = useParams();
  const { response, loading, error } = useFetch({
    url: `/api/v1/todos/${userId}`,
    method: "GET",
  })




  const onSubmit = (date, name, task) => {
    fetch(`/api/v1/todos/${userId}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
        "Authorization": `Bearer _UZ_jot69Rmy4A8F9E467LqHoEhJh1TptuL1mKq69zIsy4iCuw`,
      },
      body: JSON.stringify([{ date, name, task }]),
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
      date={response.date}
      name={response.name}
    />
  );
};

export default UpdatePage;
