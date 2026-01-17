import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ReactDOM from "react-dom/client";

// import Index from "./pages/Index.jsx";
import Lp01 from "./pages/Lp01.jsx";
import Politica from "./pages/Politica.jsx";

// Altere aqui para "LP" ou "site"
const mode = "LP"; // só muda isso e o resto se adapta

ReactDOM.createRoot(document.getElementById("root")).render(
  <Router>
    {mode === "LP" ? (
      <Routes>
        {/* <Route path="/" element={<Index mode={mode} />} /> */}
        <Route path="/" element={<Lp01 />} />
        <Route path="/privacidade" element={<Politica />} />
      </Routes>
    ) : (
      <Routes></Routes>
    )}
  </Router>
);
 