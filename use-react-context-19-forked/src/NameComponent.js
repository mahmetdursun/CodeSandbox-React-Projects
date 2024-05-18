import React, { useContext } from "react";
import UserContext from "./UserContext";

// Bu bileşen contex'ten ismi görüntüler
const RandomComponent = () => {
  const { name } = useContext(UserContext);

  return (
    <div style={{ marginTop: "30px" }}>
      <h2 className="is-size-4">
        {/* İsmi context'ten buraya iletin */}
        <strong>Name</strong>: {name}
      </h2>
    </div>
  );
};

export default RandomComponent;
