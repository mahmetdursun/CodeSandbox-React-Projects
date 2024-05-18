import React, { useState } from "react";
import "./App.css";

function ThemeTooglerButton() {
  const [language, setLanguage] = useState("English");

  const switchLanguage = () => {
    setLanguage((prevLanguage) =>
      prevLanguage === "English" ? "Türkçe" : "English"
    );
  };

  return (
    <div className="App">
      <div className="content">
        <h1 className="heading">
          {language === "English"
            ? "Welcome to English Learning App"
            : "İngilizce Öğrenme Uygulamasına Hoşgeldiniz"}
        </h1>
        <p className="text">
          {language === "English"
            ? "This app provides English content to support the use of English in the information technology industry."
            : "Bu uygulama, bilgi teknolojisi endüstrisinde İngilizce kullanımını desteklemek için İngilizce içerik sağlar."}
        </p>
        <button className="navbar-buttons" onClick={switchLanguage}>
          {language === "English" ? "Türkçe" : "English"}
        </button>
      </div>
    </div>
  );
}

export default ThemeTooglerButton;
