import { useEffect, useState } from "react";
import "./styles.css";

export default function App() {
  const [text, setText] = useState([]);
  const url = "https://jsonplaceholder.typicode.com/users/";

  const user = async () => {
    fetch(url)
      .then((res) => res.json())
      .then((data) => setText(data));
  };
  useEffect(() => {
    user();
  }, []);
  const handleDelete = () => {
    setText((prevText) => [
      prevText.filter((text) => {
        text.name !== text.id;
      })
    ]);
  };
  return (
    <div className="App">
      {text.map((menu, index) => {
        return (
          <div key={index}>
            <h1>{menu.name}</h1>
            <button onClick={handleDelete}>sil</button>
          </div>
        );
      })}

      <h2></h2>
    </div>
  );
}
