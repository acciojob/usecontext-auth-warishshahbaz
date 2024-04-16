import React, { useState, useContext } from "react";

// Step 1: Define AuthContext
const AuthContext = React.createContext();

// Step 2: Create AuthProvider component
const AuthProvider = ({ children }) => {
  const [authenticated, setAuthenticated] = useState(false);

  return (
    <AuthContext.Provider value={{ authenticated, setAuthenticated }}>
      {children}
    </AuthContext.Provider>
  );
};

// Step 3: Create Auth component
const Auth = () => {
  // Step 4: Consume AuthContext
  const { authenticated, setAuthenticated } = useContext(AuthContext);

  const handleCheckboxChange = () => {
    // Simulate captcha verification
    setAuthenticated((prevAuth) => !prevAuth);
  };

  return (
    <div>
      <p>
        Authentication Status:{" "}
        {authenticated
          ? "You are now authenticated, you can proceed"
          : "you are not authenticated"}
      </p>
      <label>
        <input
          type="checkbox"
          className="authText"
          onChange={handleCheckboxChange}
          checked={authenticated}
        />
        I'm not a robot
      </label>
    </div>
  );
};

// Step 5: Wrap your application with AuthProvider
const App = () => {
  return (
    <AuthProvider>
      <div>
        <h1>Mock Authentication System</h1>
        <Auth />
      </div>
    </AuthProvider>
  );
};

export default App;
