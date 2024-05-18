import "./styles.css";

export default function App() {
  const [shop, setShop] = useState([]);
  const [text, setText] = useState("");
  const handleClick = (e) => {
    e.preventDefault();
    setShop([...shop, { id, text }]);
    setText("");
  };
  return (
    <div className="App">
      <h1>Hello CodeSandbox</h1>
      <h2>Start editing to see some magic happen!</h2>
    </div>
  );
}
