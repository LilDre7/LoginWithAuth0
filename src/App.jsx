import React from "react";
import { useAuth0 } from "@auth0/auth0-react";
import LoginButton from "./components/LoginButton";
import Profile from "./components/Profile";

const App = () => {
  const { loginWithRedirect } = useAuth0();
  return (
    <>
      <h1>Login & Auth</h1>
      <LoginButton />
      <Profile />
    </>
  );
};

export default App;
