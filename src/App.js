import "./App.css";
import About from "./About";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      new changes
      <Routes>
        <Route path="/about" element={<About />} />
      </Routes>
      <About />
    </div>
  );
}

export default App;
