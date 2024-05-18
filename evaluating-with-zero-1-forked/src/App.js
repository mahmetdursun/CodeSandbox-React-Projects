import { useState } from "react";
import ShoppingList from "./ShoppingList";

function App() {
  const [items, setItems] = useState([]);

  return <div>{items.length > 0 && <ShoppingList items={items} />}</div>;
}

export default App;
