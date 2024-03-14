import "./App.css";
import Header from "./components/header/Header";
import Home from "./components/home/Home";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Clans from "./components/clans/Clans";
import Players from "./components/players/Players";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/players" element={<Players />} />
        <Route path="/clans" element={<Clans />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
