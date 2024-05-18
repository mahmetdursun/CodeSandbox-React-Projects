import { useState } from "react";

function ImageList({ images }) {
  const [selectedName, setSelectedName] = useState("");

  const handleClick = (name) => {
    setSelectedName(name);
  };

  const renderedImages = images.map((image) => {
    return (
      <img
        key={image.id}
        src={image.src}
        onClick={() => handleClick(image.name)}
        alt={image.name}
      />
    );
  });

  return (
    <div>
      <h1>Image ismi: {selectedName}</h1>
      <div>{renderedImages}</div>
    </div>
  );
}

export { ImageList };
