import React, { useState } from "react";

function App() {
  const [nestedObjected, setNestedObject] = useState({
    taxi: "Ücret karşılığında yolcu taşımak için lisanslı bir araç",
    food: {
      sushi:
        "Deniz ürünleri ve sebzelerle birlikte sunulan geleneksel bir Japon yemeği",
      apple: {
        Honeycrisp:
          "MAES Bahçe Araştırma Merkezi'nde geliştirilen bir elma çeşidi",
        Fuji:
          "Tohoku Araştırma İstasyonu'nda yetiştiriciler tarafından geliştirilen bir elma çeşidi"
      }
    }
  });

  return (
    <div style={{ margin: "auto", width: "70%", paddingTop: 40 }}>
      <DisplayNested nestedObjected={nestedObjected} />
    </div>
  );
}

const DisplayNested = ({ nestedObjected }) => {
  const renderNestedObject = (obj) => {
    return (
      <ul style={{ listStyleType: "none" }}>
        {Object.entries(obj).map(([key, value]) => (
          <li key={key}>
            <strong>{key}: </strong>
            {typeof value === "object" ? renderNestedObject(value) : value}
          </li>
        ))}
      </ul>
    );
  };

  return <div>{renderNestedObject(nestedObjected, 0)}</div>;
};

export default App;
