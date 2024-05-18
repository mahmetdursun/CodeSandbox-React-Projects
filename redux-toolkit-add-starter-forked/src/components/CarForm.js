import { useState } from "react";
import { useDispatch } from "react-redux";
import { updatedCars } from "../store/carsSlice";

function CarForm() {
  const [name, setName] = useState("");
  const [value, setValue] = useState("");
  const dispatch = useDispatch();

  const handleSubmit = (event) => {
    event.preventDefault();
    const car = { name, value, id: crypto.randomUUID() };
    if (name === "") {
      alert("Marka giriniz");
    }
    if (value === "") {
      alert("Fiyat giriniz");
    }
    if (name && value) {
      dispatch(updatedCars(car));
    }

    // Yapılacaklar: Arabayı store'a kaydet

    setName("");
    setValue("");
  };

  return (
    <div className="car-form panel">
      <h4 className="subtitle ">Araba Ekle</h4>
      <form onSubmit={handleSubmit}>
        <div className="field">
          <label className="label">Marka</label>
          <input
            className="input"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div className="field">
          <label className="label">Fiyat</label>
          <input
            className="input"
            type="number"
            value={value}
            onChange={(e) => setValue(e.target.value)}
          />
        </div>
        <div className="field">
          <button className="button is-link">Gönder</button>
        </div>
      </form>
    </div>
  );
}

export default CarForm;
