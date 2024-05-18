import React, { useState, useEffect } from "react";
import "./styles.css";

export default function App() {
  const [catImages, setCatImages] = useState([]);

  useEffect(() => {
    async function fetchCat() {
      try {
        const res = await fetch(
          "https://api.thecatapi.com/v1/images/search?limit=8&size=full&breed_id=beng&sub_id=demo-ca06d4"
        );
        const catData = await res.json();
        setCatImages(catData);
      } catch (error) {
        console.error("Error fetching cat images:", error);
      }
    }

    fetchCat();
  }, []); // boş dizi çünkü yalnızca bir kez çalıştırıyoruz

  return (
    <div className="App">
      <h1>Hello CodeSandbox</h1>
      {catImages.map((cat, index) => (
        <img key={index} src={cat.url} alt={`cat-${index}`} width="300px" />
      ))}
    </div>
  );
}
