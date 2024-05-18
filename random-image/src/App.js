import { useState } from "react";
import "./styles.css";

export default function App() {
  const [text, setText] = useState("");
  const [emj, setEmj] = useState(15);
  const [img, setİmg] = useState([]);

  const handleClick = () => {
    const id = crypto.randomUUID();
    setİmg([...img, `https://picsum.photos/200/300?random=${id}`]);
  };

  const handleİmg = (index) => {
    if (text === index) {
      setEmj((pre) => pre + 5);
    } else {
      setText(index);
      setEmj(15);
    }
  };

  return (
    <div className="App">
      <h1>Random İmage</h1>
      <button onClick={handleClick}>Ekle</button>
      <div>
        {img.map((image, index) => (
          <div className="image" key={index}>
            <img onClick={() => handleİmg(index)} src={image} />
            <span style={{ fontSize: text === index ? emj : setEmj }}>👍</span>
          </div>
        ))}
      </div>
    </div>
  );
}
