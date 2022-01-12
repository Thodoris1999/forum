import logo from './logo.svg';
import './App.css';
import Home from './Home';
import Category from './Category';
import Thread from './Thread';
import Register from './Register';
import Login from './Login';
import Inbox from './Inbox';
import Outbox from './Outbox';
import React, { useState } from "react";

import {
  Routes,
  Route,
  useNavigate
} from "react-router-dom";

function App() {
  // credentials on frontend because
  const [loggedin, setLoggedIn] = useState(false);
  const [email, setEmail] = useState("");
  const navigate = useNavigate();
  console.log(loggedin);
  console.log(email);

  const handleLogin = (email) => {
    setLoggedIn(true);
    setEmail(email);
    console.log("User with email " + email + " logged in");
    //navigate("/inbox");
  }

  return (
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/register" element={<Register onUserRegister={handleLogin}/>} />
        <Route path="/login" element={<Login onUserLogin={handleLogin}/>} />
        <Route path="/inbox" element={<Inbox loggedin={loggedin} user_email={email}/>} />
        <Route path="/outbox" element={<Outbox loggedin={loggedin} user_email={email}/>} />
        <Route path="/category/:categoryid" element={<Category/>} />
        <Route path="/thread/:threadid" element={<Thread/>} />
      </Routes>
  );
}

export default App;
