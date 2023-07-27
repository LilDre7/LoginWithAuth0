import React from "react";
import { useAuth0 } from "@auth0/auth0-react";

const LogountButton = () => {
  const { logout } = useAuth0();

  return (
    <div>
      <h1>Logount</h1>
      <button onClick={() => logout()}>Logout</button>
    </div>
  );
};

export default LogountButton;
