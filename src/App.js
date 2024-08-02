import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Dosis from "./pages/Dosis";
import Home from "./pages/Home";
import WaktuInfus from "./pages/WaktuInfus";
import KecepatanInfus from "./pages/KecepatanInfus";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/dosis" element={<Dosis />} />
          <Route path="/waktu-infus" element={<WaktuInfus />} />
          <Route path="/kecepatan-infus" element={<KecepatanInfus />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
