import { useState } from "react";
import logo from "./logo.svg";
import "./App.css";
import Navbar from "./Componenets/Body/Navbar";
import Login from "./Componenets/Body/Login";
import LoginStatus from "./Componenets/Body/LoginStatus";
import { AuthContext } from "./Componenets/Contexts/AuthContext";
import { useContext } from "react";

function App() {
  const { isAuth } = useContext(AuthContext);
  return (
    <div className="App">
      <Navbar />
      {isAuth ? <LoginStatus /> : <Login />}
    </div>
  );
}

export default App;
