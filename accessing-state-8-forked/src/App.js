import { useState } from "react";

function App() {
  const [count, setCount] = useState(0);

  function handleClick() {
    let newCount = count + 1;
    setCount(count + 1);

    console.log({ newCount });
  }

  return <button onClick={handleClick}>{count}</button>;
}

export default App;
