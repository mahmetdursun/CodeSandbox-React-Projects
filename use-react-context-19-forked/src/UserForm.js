import React, { useContext } from "react";
import UserContext from "./UserContext";

const Form = () => {
  const { handleName, handleLocation } = useContext(UserContext);

  return (
    <div className="user-form">
      {/* Context'te kullanıcının adını değiştir */}
      <div className="input-item">
        <label className="label">İsmi Güncelle: </label>
        <input onChange={handleName} className="input" />
      </div>

      {/* Context'te kullanıcının konumunu değiştir */}
      <div className="input-item">
        <label className="label">Konumu Güncelle: </label>
        <input onChange={handleLocation} className="input" />
      </div>
    </div>
  );
};

export default Form;
