import React, { useEffect, useState } from "react";
import UserForm from "./components/UserForm";
import "./App.css";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import routes from "./routes/routes";

const App = () => {
  
  return <RouterProvider router={createBrowserRouter(routes)} />
};

export default App;
