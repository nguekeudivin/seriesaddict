import { Route, Routes } from "react-router-dom";
import LandingPage1 from "./pages/LandingPage1";
import LandingPage2 from "./pages/LandingPage2";
import LandingPage7 from "./pages/LandingPage7";

function App() {
  return (
    <div className="min-h-screen">
      <main>
        <Routes>
          <Route path="/" element={<LandingPage1 />} />
          <Route path="/page-2" element={<LandingPage2 />} />
          <Route path="/page-7" element={<LandingPage7 />} />
        </Routes>
      </main>
    </div>
  );
}

export default App;
