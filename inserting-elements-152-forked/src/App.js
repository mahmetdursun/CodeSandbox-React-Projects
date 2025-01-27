import { useState } from "react";
import { Input } from "./Input";

function App() {
  const [colors, setColors] = useState([]);

  const addColorAtIndex = (newColor, index) => {
    // Yapılacaklar: Belirlenen 'index'teki 'colors'a 'newColor'i ekleyin
    // ve state'i güncelleyin
    const updatedColors = [
      ...colors.slice(0, index),
      newColor,
      ...colors.slice(index)
    ];
    console.log(updatedColors);
    setColors(updatedColors);
  };

  const renderedColors = colors.map((color, i) => {
    return <li key={i}>{color}</li>;
  });

  return (
    <div>
      <Input onSubmit={addColorAtIndex} max={colors.length} />
      <ul>{renderedColors}</ul>
    </div>
  );
}

export default App;
