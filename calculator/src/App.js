import React, { useMemo, useState } from "react";
import "./styles.css";

export default function App() {
  const [kilo, setKilo] = useState(30);
  const [uzun, setUzun] = useState(130);
  const [bmi, setBmi] = useState("");

  const calculateBMI = (height, weight) => {
    const kiloMik = height / 100;
    const bmi = weight / (kiloMik * kiloMik);
    setBmi(bmi.toFixed(2));
  };

  const memoizedBMI = useMemo(() => {
    calculateBMI(uzun, kilo);
    return bmi;
  }, [uzun, kilo]);

  const handleHeight = (e) => {
    setUzun(Number(e.target.value));
  };

  const handleWeight = (e) => {
    setKilo(Number(e.target.value));
  };

  return (
    <div className="App">
      <h1>BMI CALCULATOR</h1>

      <label>
        Height {uzun}
        <input
          type="range"
          onChange={handleHeight}
          value={uzun}
          min="130"
          max="250"
        />
      </label>

      <label>
        Weight {kilo}
        <input
          type="range"
          onChange={handleWeight}
          value={kilo}
          min="30"
          max="300"
        />
      </label>
      <p>Your BMI: {memoizedBMI}</p>
    </div>
  );
}
