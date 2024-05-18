import { useState } from "react";

export default function Panel({ children }) {
  const [open, setOpen] = useState(true);
  return (
    <section className="panel">
      <button onClick={() => setOpen((p) => !p)}>
        {open ? "Küçült" : "Genişlet"}
      </button>
      {open && children}
    </section>
  );
}
