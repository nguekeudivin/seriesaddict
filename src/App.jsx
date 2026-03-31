import { Route, Routes } from "react-router-dom";
import LandingPage1 from "./pages/LandingPage1";
import LandingPage2 from "./pages/LandingPage2";

function App() {
  return (
    <div className="min-h-screen">
      <main>
        <Routes>
          <Route path="/" element={<LandingPage1 />} />
          <Route path="/page-2" element={<LandingPage2 />} />
        </Routes>
      </main>
    </div>
  );
}

export default App;
