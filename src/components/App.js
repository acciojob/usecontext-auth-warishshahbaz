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
      <h2>Click on the checkbox to get authenticated</h2>
      <p>
        {authenticated
          ? "You are now authenticated, you can proceed"
          : "you are not authenticated"}
      </p>
      <div>
        <input
          type="checkbox"
          className="authText"
          onChange={toggleAuthenticated}
        />
        <span>I'm not a robot</span>
      </div>
    </div>
  );
};

// Main App component wrapped in AuthProvider
const App = () => {
  return (
    <AuthProvider>
      <div>
        <Auth />
      </div>
    </AuthProvider>
  );
};

export default App;
