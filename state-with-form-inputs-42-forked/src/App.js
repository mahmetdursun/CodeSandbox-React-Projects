import { useState } from "react";
import "./styles.css";

export default function App() {
  const [text, setText] = useState("");
  const handleInput = (e) => {
    console.log(e);
    if (e.target.value.trim().length < 3) {
      if (e.target.value.length === 0) {
        setText("");
      }
      setText("Geçersiz mesaj.");
    } else {
      setText("Mesajınız var.");
    }
  };
  return (
    <form>
      <label>Mesajınız</label>
      <input onChange={handleInput} type="text" />
      <p>{text}</p>
    </form>
  );
}
