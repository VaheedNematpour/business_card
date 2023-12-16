import { useState } from "react";
import Card from "./components/Card";

const App = () => {
  const [dark, setDark] = useState(true);
  return (
    <div
      className={`px-6 py-10 min-h-screen ${
        dark ? "bg-slate-800" : "bg-slate-100"
      }`}
    >
      <main>
        <Card dark={dark} />
      </main>
    </div>
  );
};

export default App;
