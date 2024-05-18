import React, { useState } from "react";
import ShoppingList from "./ShoppingList";
import NewItemForm from "./NewItemForm";

function App() {
  const [items, setItems] = useState([]);

  function handleAddItem(value) {
    const nextItems = [...items, { id: crypto.randomUUID(), value }];
    setItems(nextItems);
  }

  return (
    <div>
      {items.length > 0 && <ShoppingList items={items} />}
      <NewItemForm handleAddItem={handleAddItem} />
    </div>
  );
}

export default App;
