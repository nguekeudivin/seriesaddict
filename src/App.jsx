import { Route, Routes } from "react-router-dom";
import LandingPage1 from "./pages/LandingPage1";
import LandingPage2 from "./pages/LandingPage2";
import LandingPage3 from "./pages/LandingPage3";
import LandingPage4 from "./pages/LandingPage4";

function App() {
  return (
    <div className="min-h-screen">
      <main>
        <Routes>
          <Route path="/" element={<LandingPage1 />} />
          <Route path="/page-2" element={<LandingPage2 />} />
          <Route path="/page-3" element={<LandingPage3 />} />
          <Route path="/page-4" element={<LandingPage4 />} />
        </Routes>
      </main>
    </div>
  );
}

export default App;
