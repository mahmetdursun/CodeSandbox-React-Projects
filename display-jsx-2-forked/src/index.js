import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

import "./styles.css";

const user = {
  name: "Namık Korona",
  location: "Las Vegas",
  foodType: "Kebap",
  age: 28,
  likes: "Araba Yarışı"
};

const pageDetails = {
  title: "React Tornado",
  desc: "React code challenge"
};

function App() {
  return (
    <div className="App">
      <h1>{pageDetails.title}</h1>
      <h1>{pageDetails.desc}</h1>
      <div className="page-deets" />
      <h3>{user.name}</h3>
      <p>{user.location}</p>
      <p>{user.foodType}</p>
      <p>{user.age}</p>
      <p>{user.likes}</p>
      <div className="user-deets" />
    </div>
  );
}

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(
  <StrictMode>
    <App />
  </StrictMode>
);
