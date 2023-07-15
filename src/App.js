import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import NavbarCom from "./components/NavbarCom";
import FooterCom from "./components/FooterCom";
import Home from "./pages/Home";
import About from "./pages/About";

function App() {
  return (
    <div className="App bg-slate-100">
      <BrowserRouter>
        <NavbarCom />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
        </Routes>
        <FooterCom />
      </BrowserRouter>
    </div>
  );
}

export default App;
