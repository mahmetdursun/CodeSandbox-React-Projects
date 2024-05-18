import React, { useEffect, useState, useRef } from "react";
import "./styles.css"; // Bu dosyada modal ve stili tanımlayabilirsiniz.

function App() {
  const [inputText, setInputText] = useState("");
  const [list, setList] = useState([]);
  const [selectedItem, setSelectedItem] = useState(null);
  const modalRef = useRef();

  useEffect(() => {
    document.addEventListener("mousedown", handleOutsideClick);

    return () => {
      document.removeEventListener("mousedown", handleOutsideClick);
    };
  }, []);

  const handleOutsideClick = (e) => {
    if (modalRef.current && !modalRef.current.contains(e.target)) {
      setSelectedItem(null);
    }
  };

  const handleAddText = () => {
    if (inputText.trim() !== "") {
      setList((prevList) => [...prevList, inputText]);
      setInputText("");
    }
  };

  const handleItemClick = (item) => {
    setSelectedItem(item);
  };

  return (
    <div className="app-container">
      <div className="input-container">
        <input
          type="text"
          value={inputText}
          onChange={(e) => setInputText(e.target.value)}
        />
        <button onClick={handleAddText}>Ekle</button>
      </div>
      <ul className="text-list">
        {list.map((item, index) => (
          <p key={index} onClick={() => handleItemClick(item)}>
            {item.length >= 6 ? `${item.slice(0, 5)}...` : item}
          </p>
        ))}
      </ul>
      {selectedItem && (
        <div className="modal" ref={modalRef}>
          <div className="modal-content">
            <p>{selectedItem}</p>
          </div>
        </div>
      )}
    </div>
  );
}

export default App;
