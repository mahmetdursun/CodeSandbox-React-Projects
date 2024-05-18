import { useState } from "react";
import "./styles.css";
import images from "./Data";

function Datas() {
  const [text, setText] = useState(0);
  function after() {
    setText(text === images.length - 1 ? 0 : text + 1);
  }
  function before() {
    setText(text === 0 ? images.length - 1 : text - 1);
  }
  return (
    <div>
      <div className="text">
        {images.map(
          (item, index) =>
            text === index && <div key={item.name}>{item.name}</div>
        )}
      </div>

      <div>
        {images.map(
          (item, index) =>
            text === index && (
              <div key={item.id}>
                <img src={item.url} alt={item.name} />
              </div>
            )
        )}
      </div>
      <button onClick={before} className="buton">
        Önceki
      </button>
      <button onClick={after} className="buton">
        Sonraki
      </button>
    </div>
  );
}
export default Datas;
