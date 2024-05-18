import React, { useContext } from "react";
import UserContext from "./UserContext";

// Bu bileşen contex'ten  konumunu görüntüler
const Location = () => {
  const { location } = useContext(UserContext);

  return (
    <div>
      {/* Context'ten kullanıcının konumunu göster */}
      <h2 className="is-size-4">
        <strong>Location</strong>: {location}
      </h2>
    </div>
  );
};

export default Location;
