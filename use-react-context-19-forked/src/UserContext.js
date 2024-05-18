import { createContext, useState } from "react";

const UserContext = createContext();

function Provider({ children }) {
  const [name, setName] = useState("Oğuzcan");
  const [location, setLocation] = useState("Moon");

  const handleName = (e) => setName(e.target.value);
  const handleLocation = (e) => setLocation(e.target.value);

  const funcsToShare = {
    handleName,
    handleLocation,
    name,
    location
  };

  return (
    <UserContext.Provider value={funcsToShare}>{children}</UserContext.Provider>
  );
}

export { Provider };
export default UserContext;
