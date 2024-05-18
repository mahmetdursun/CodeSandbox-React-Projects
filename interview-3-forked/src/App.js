import React, { useEffect, useState } from "react";
import axios from "axios";
import "./styles.css";

function App() {
  return <GenerateList />;
}

const GenerateList = () => {
  const [list, setList] = useState([]);
  const url = "https://www.boredapi.com/api/activity";

  const fetchData = async () => {
    try {
      const response = await axios.get(url);
      const Activity = response.data;
      setList([...list, Activity]);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className="button-container">
      <button className="gbutton" onClick={fetchData}>
        Generate Activity
      </button>
      {list.map((activity) => (
        <ListItem key={activity.key} item={activity} />
      ))}
    </div>
  );
};

const ListItem = ({ item }) => {
  const [expanded, setExpanded] = useState("");

  return (
    <div>
      <button
        className="cbutton"
        onClick={() =>
          setExpanded((prevExpanded) => {
            if (prevExpanded) {
              return false;
            } else {
              return true;
            }
          })
        }
      >
        {expanded ? "Collapse" : "Expand"}
      </button>
      <li>{item.activity}</li>
      {expanded && (
        <div>
          <p>Type: {item.type}</p>
          <p>Participants: {item.participants}</p>
          <p>Price: {item.price}</p>
          <p>Link: {item.link}</p>
          <p>Accessibility: {item.accessibility}</p>
        </div>
      )}
    </div>
  );
};

export default App;
