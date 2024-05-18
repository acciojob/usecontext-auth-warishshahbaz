import React, { useState } from "react";
import "./../styles/App.css";
import Auth from "./Auth";
import authContext from "./Authcontext";

const App = () => {
  //using the state to dynamicallly pass the values to the context

  const [authstatus, setauthstatus] = useState(false);
  const login = () => {
    setauthstatus(true);
    // ckncnvjekf
  };
  return (
    <React.Fragment>
      <authContext.Provider value={{ status: authstatus, login: login }}>
        <Auth />
      </authContext.Provider>
    </React.Fragment>
  );
};
export default App;
