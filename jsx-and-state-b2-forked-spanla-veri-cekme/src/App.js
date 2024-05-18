import "./styles.css";

const state = {
  bootcamp: "BilgeAdam"
};

const course = "React";

const App = () => {
  return (
    <div>
      <span className="blue-box">{state.bootcamp}</span>
      <span className="orange-box">{course}</span>
    </div>
  );
};

export default App;
