import "./styles.css";

const countries = [
  {
    id: 0,
    name: "Greece",
    continent: "Europe"
  },
  {
    id: 1,
    name: "Laos",
    continent: "Asia"
  },
  {
    id: 2,
    name: "Zambia",
    continent: "Africa"
  },
  {
    id: 3,
    name: "America",
    continent: "North America"
  }
];

const App = () => {
  function renderCountries(countries) {
    return (
      <ul>
        {countries.map((country) => (
          <li key={country.id}>
            {country.name}-{country.continent}
          </li>
        ))}
      </ul>
    );
  }
  return (
    <div>
      <h1 className="title">Seyahat Listem</h1>
      {renderCountries(countries)}
    </div>
  );
};

export default App;
