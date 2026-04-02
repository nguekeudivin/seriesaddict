import { Route, Routes } from "react-router-dom";
import HomePage from "./pages/home";
import TermsConditions from "./pages/terms-conditions";
import PolitiqueConfidentialite from "./pages/politique-confidentialite";
import MentionsLegales from "./pages/mentions-legales";

function App() {
  return (
    <div className="min-h-screen">
      <main>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route
            path="/conditions-generales"
            element={<TermsConditions />}
          />
          <Route path="/terms-conditions" element={<TermsConditions />} />
          <Route
            path="/politique-confidentialite"
            element={<PolitiqueConfidentialite />}
          />
          <Route path="/mentions-legales" element={<MentionsLegales />} />
        </Routes>
      </main>
    </div>
  );
}

export default App;
