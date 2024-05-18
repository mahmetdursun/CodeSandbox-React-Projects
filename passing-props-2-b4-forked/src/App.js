import "./styles.css";

const App = () => {
  const state = {
    partyType: "birthday",
    entertainment: "clowns",
    people: "Namık",
    venue: {
      name: "Polly's Party Palace",
      capacity: 120
    }
  };

  return (
    <div>
      <Party
        partyType={state.partyType}
        entertainment={state.entertainment}
        people={state.people}
        venue={state.venue}
      />
    </div>
  );
};

export default App;

const Party = (props) => {
  return (
    <div>
      <h3> Party Time </h3>
      <p>
        Bu {props.partyType} parti, maksimum {props.venue.capacity} kapasite ile{" "}
        {props.venue.name} 'da gerçekleştirilecektir.
      </p>
      <p>Öne çıkan eğlence: {props.entertainment} ! </p>
      <p>Bu partiye şeref veren güzel insan {props.people} </p>
    </div>
  );
};
