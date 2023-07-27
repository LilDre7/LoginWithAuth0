import React from "react";
import { useAuth0 } from "@auth0/auth0-react";
import LoginButton from "./components/LoginButton";
import Profile from "./components/Profile";
import "./App.css";
import LogountButton from "./components/LogountButton";

const App = () => {
  const { loginWithRedirect } = useAuth0();

  return (
    <section className="app">
      <h1>Login & Auth</h1>
      <LoginButton />
      <Profile />
      <LogountButton />
    </section>
  );
};

export default App;
