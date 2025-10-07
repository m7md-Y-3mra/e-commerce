import { BrowserRouter, Routes, Route } from "react-router";
import Navbar from "./components/navbar";
import { TopBanner } from "./components/TopBanner";
import Home from "./pages/Home";

function App() {
  return (
    <BrowserRouter>
      <TopBanner />
      {/* Navigation Links */}
      <Navbar />
      {/* Route Definitions */}
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
