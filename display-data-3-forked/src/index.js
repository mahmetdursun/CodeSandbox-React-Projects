import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

import "./styles.css";

/**
 * Data
 * ------------------------
 */
const user = {
  name: "Namık Korona",
  location: "Las Vegas",
  foodType: "Kebap",
  age: 28,
  likes: "Sabahın erken saatlerine kadar kodlama",
  twitterUsername: "namıkrock",
  avatar:
    "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEj7mtwyMUAZv43YS3akEeF-rFHFVZQlS5p9ukfJUWceh7tJyWSog3s8EwQYnEFQtdOexZ9MS-fKnhy61nyZzn4f0z5GeL0s9FWBbl3EPshFr0pE5uXs0YDKOxDNyRHOouS9X7VMdC0jOj16C5NMFIAygcch3U43OckU-dg319GsWQlmfJOo9lOZEsEBNw/s16000/SSS.jpg"
};

/**
 * Verileri göstermemiz gereken React bileşenimiz
 * ------------------------
 */
function App() {
  return (
    <div className="App">
      {/* Kullanıcı verilerini burada göster */}
      <div className="user-deets">
        <img src={user.avatar} />
        <h1>{user.name}</h1>
        <p>{user.location}</p>
        <p>{user.foodType}</p>
        <p>{user.age}</p>
        <p>{user.likes}</p>
        <p>{user.twitterUsername}</p>
        Kullanıcı bilgilerini burada gösterin. iyi kodlamalar!
      </div>
    </div>
  );
}

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(
  <StrictMode>
    <App />
  </StrictMode>
);
