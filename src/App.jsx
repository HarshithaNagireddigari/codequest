import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Levels from "./pages/Levels";
import Game from "./pages/Game";
import "./App.css";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/levels" element={<Levels />} />
      <Route path="/game/:id" element={<Game />} />
    </Routes>
  );
}

export default App;