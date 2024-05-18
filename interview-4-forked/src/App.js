import React, { createContext, useContext, useEffect, useState } from "react";

const UserContext = createContext();

function App() {
  const [userState, setUserState] = useState({
    Namık: true,
    Eda: true,
    Suzan: true,
    Engin: true,
    Samet: false
  });

  useEffect(() => {
    const intervalId = setInterval(() => {
      const randomUser = Object.keys(userState)[
        Math.floor(Math.random() * Object.keys(userState).length)
      ];

      setUserState((prevUserState) => ({
        ...prevUserState,
        [randomUser]: !prevUserState[randomUser]
      }));
    }, 2000);

    return () => clearInterval(intervalId);
  }, [userState]);

  return (
    <UserContext.Provider value={{ userState, setUserState }}>
      <UserList />
    </UserContext.Provider>
  );
}

const UserList = () => {
  const { userState } = useContext(UserContext);

  return (
    <div>
      <h2>User List</h2>
      {Object.entries(userState).map(([username, isOnline]) => (
        <div key={username}>
          {username} - {isOnline ? "🟢" : "🔴"}
        </div>
      ))}
    </div>
  );
};

export default App;
