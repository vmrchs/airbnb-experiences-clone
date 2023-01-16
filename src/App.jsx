import { useState } from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Card from "./components/Card";
import "./App.css";
import RodneyMullen from "./assets/rodney-mullen.png";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <Navbar />
      <Hero />
      <Card
        img={RodneyMullen}
        rating="5.0"
        reviewCount={6}
        country="USA"
        title="Life Lessons with R0dney Mullen"
        price={136}
      />
    </div>
  );
}

export default App;
