import { useState } from "react";
import "./styles.css";

export default function App() {
  const [text, setText] = useState("");

  const click = () => {
    if (text) {
      setText("");
    } else {
      setText("active");
    }
  };

  return (
    <div>
      <p className={text}>Style ver</p>
      <button onClick={click}>Toggle style</button>
    </div>
  );
}
