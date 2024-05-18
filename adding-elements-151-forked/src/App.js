import { useState } from "react";
import { Input } from "./Input";

function App() {
  const [colors, setColors] = useState([]);

  const addColor = (newColor) => {
    // Yapılacak: 'color'ın --sonuna-- 'newColor'i ekleyin
    // ve state'i güncelleyin
    const updatedColors = [...colors, newColor];

    setColors(updatedColors);
  };

  const renderedColors = colors.map((color, i) => {
    return <li key={i}>{color}</li>;
  });

  return (
    <div>
      <Input onSubmit={addColor} />
      <ul>{renderedColors}</ul>
    </div>
  );
}

export default App;
