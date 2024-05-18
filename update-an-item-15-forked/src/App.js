import { useState } from "react";

const initialProducts = [
  {
    id: 0,
    name: "Baklava",
    count: 1
  },
  {
    id: 1,
    name: "Peynir",
    count: 5
  },
  {
    id: 2,
    name: "Makarna",
    count: 2
  }
];

export default function ShoppingCart() {
  const [products, setProducts] = useState(initialProducts);
  function handleIncreaseClick(productId) {
    const updatedProducts = products.map((product) => {
      if (product.id === productId) {
        return { ...product, count: product.count + 1 };
      }
      return product;
    });
    setProducts(updatedProducts);
  }

  return (
    <ul>
      {products.map((product) => (
        <li key={product.id}>
          {product.name} (<b>{product.count}</b>)
          <button
            onClick={() => {
              handleIncreaseClick(product.id);
            }}
          >
            +
          </button>
        </li>
      ))}
    </ul>
  );
}
