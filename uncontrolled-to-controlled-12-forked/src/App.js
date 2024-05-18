import { useState } from "react";

function App() {
  const [email, setEmail] = useState("");

  return (
    <form>
      <label htmlFor="email-input">Email adresi</label>
      <input
        id="email-input"
        type="email"
        value={email}
        onChange={(event) => setEmail(event.target.value)}
      />
    </form>
  );
}

export default App;
