import { useState } from "react";
import { cats } from "./data";
import orderBy from "lodash/orderBy";
import { AdoptCatForm } from "./adopt-form";

import styles from "./styles.module.scss";

export default function App() {
  const [activeCat, setActiveCat] = useState(cats[0]);
  const [sort, setSort] = useState("asc");

  const ListItem = ({ cat }) => {
    const [viewCount, setViewCount] = useState(0);

    const classNames = [
      styles.button,
      cat.name === activeCat?.name ? styles.buttonActive : ""
    ];

    const onCatSelect = () => {
      setActiveCat(cat);
      setViewCount((p) => p + 1);
    };

    return (
      <li>
        <button className={classNames.join(" ")} onClick={onCatSelect}>
          <img src={cat.src} width="100" alt={cat.name} />
          <p>
            {cat.name} <br />
            Görüntüleme: {viewCount}
          </p>
        </button>
      </li>
    );
  };

  return (
    <>
      <button onClick={() => setSort(sort === "desc" ? "asc" : "desc")}>
        Sıralamak için tıklayın: {sort}
      </button>
      <button onClick={() => setActiveCat(undefined)}>seçimi resetleyin</button>
      <div className={styles.container}>
        <ul className={styles.ul}>
          {orderBy(cats, "name", sort).map((cat, index) => (
            <ListItem cat={cat} key={index} />
          ))}
        </ul>
        <AdoptCatForm cat={activeCat} />
      </div>
    </>
  );
}
