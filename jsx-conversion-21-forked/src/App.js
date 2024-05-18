import React from "react";
import "./styles.css";

function App() {
  return (
    <div className="wrapper">
      <textarea
        readOnly={true}
        maxLength={3}
        spellCheck={true}
        style={{ backgroundColor: "gray" }}
      />
    </div>
  );
}

export default App;
