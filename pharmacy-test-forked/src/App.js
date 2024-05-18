import axios from "axios";
import { useEffect, useState } from "react";
import "./data";

const App = () => {
  const [data, setData] = useState([]);

  const fetchData = async () => {
    try {
      const response = await axios.get(
        "https://api.collectapi.com/health/dutyPharmacy",
        {
          params: {
            ilce: "Kadıköy",
            il: "İstanbul"
          },
          headers: {
            "Content-Type": "application/json",
            Authorization:
              "apiasdasdasdkey 5W6WN6cyo1hlgtDeJjA0ZB:2V7ZUyNDuJ0jN2gfjkMGrL"
          }
        }
      );
      setData(response);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  useEffect(() => {
    fetchData();
    console.log(data);
  }, []);

  return (
    <ul>
      {data.data?.result.map((results) => (
        <ul key={results.name}>
          <li>{results.name}</li>
        </ul>
      ))}
    </ul>
  );
};

export default App;
