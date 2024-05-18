import "./styles.css";

import { useState } from "react";

const RobotList = () => {
  // KODUNUZ BURAYA GELECEK
  const [text, setText] = useState("");
  const [robot, setRobot] = useState([]);
  const [select, setSelect] = useState("");

  const handleChange = (e) => {
    setText(e.target.value);
  };

  const handleRobot = () => {
    if (robot.includes(text)) {
      setSelect("Robot Listede Var Başka girin");
    } else if (robot.includes("") || text.trim() === "") {
      setSelect("Giriş yapınız");
    } else {
      setRobot([...robot, text]);
      setSelect("");
    }
    setText("");
  };

  const removeRobot = (id) => {
    setRobot(robot.filter((rob) => rob !== id));
  };

  return (
    <>
      <input value={text} onChange={handleChange} />
      <button onClick={handleRobot}>Ekle</button>
      <p>{select}</p>
      <div>
        {robot.map((robot) => (
          <div key={robot} onClick={() => removeRobot(robot)}>
            <img src={`https://robohash.org/${robot}`} alt={robot} />
          </div>
        ))}
      </div>
    </>
  );
};
export default RobotList;
