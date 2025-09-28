import { BrowserRouter, Routes, Route } from "react-router";
import Navbar from "./components/navbar";
import Home from "./pages/Home/Home";

function App() {
  return (
    <BrowserRouter>
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
