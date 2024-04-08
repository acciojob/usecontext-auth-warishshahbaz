import React, { useContext, useState } from "react";

// Create the AuthContext
const AuthContext = React.createContext();

// AuthProvider component to manage authentication state
const AuthProvider = ({ children }) => {
  const [authenticated, setAuthenticated] = useState(false);

  const toggleAuthenticated = () => {
    setAuthenticated((prevAuth) => !prevAuth);
  };

  return (
    <AuthContext.Provider value={{ authenticated, toggleAuthenticated }}>
      {children}
    </AuthContext.Provider>
  );
};

// Auth component to display authentication status and checkbox
const Auth = () => {
  const { authenticated, toggleAuthenticated } = useContext(AuthContext);

  return (
    <div>
      <h2>User Authentication</h2>
      <p>User is {authenticated ? "authenticated" : "not authenticated"}</p>
      <label>
        <input type="checkbox" onChange={toggleAuthenticated} />
        I'm not a robot
      </label>
    </div>
  );
};

// Main App component wrapped in AuthProvider
const App = () => {
  return (
    <AuthProvider>
      <div>
        <h1>React Authentication App</h1>
        <Auth />
      </div>
    </AuthProvider>
  );
};

export default App;
