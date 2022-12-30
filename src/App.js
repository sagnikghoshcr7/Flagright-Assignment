import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import Header from "./Components/Header"
import HeroArea from "./Components/HeroArea"
import CaseManagement from "./Components/CaseManagement";
import Rules from "./Components/Rules";
import RiskScoring from "./Components/Risk";
import Sanctions from "./Components/Sanctions";

import "./styles/header.css"
import "./styles/common.css";
import "./styles/heroArea.css";
import "./styles/responsive.css";

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<HeroArea />}>
          <Route path="/CaseManagement" element={<CaseManagement />} />
          <Route path="/" element={<CaseManagement />} />
          <Route path="/Rules" element={<Rules />} />
          <Route path="/Risk" element={<RiskScoring />} />
          <Route path="/Sanction" element={<Sanctions />} />
        </Route>
      </Routes>

    </Router>
  );
}

export default App;
