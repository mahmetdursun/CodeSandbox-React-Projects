import React from "react";
import "./styles.css";

function App() {
  const clickHandler = () => {
    console.log("Tıklandı!");
  };

  return (
    <div>
      {/* <h2>logged in</h2>
      <p>Kullanıcı profiline hoş geldiniz</p> */}
      <button onClick={clickHandler}>Tıklayın</button>
    </div>
  );
}
export default App;
