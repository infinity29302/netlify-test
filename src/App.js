import "./App.css";
import About from "./About";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Header from "./pages/Header";

function App() {
  return (
    <div className="App">
      <Header/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </div>
  );
}

export default App;
