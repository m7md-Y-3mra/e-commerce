import { BrowserRouter, Route, Routes } from "react-router";
import Footer from "./components/Footer";
import Header from "./components/Header";
import { TopBanner } from "./components/TopBanner";
import Home from "./pages/Home";

function App() {
  return (
    <BrowserRouter>
      <TopBanner />
      {/* Navigation Links */}
      <Header />
      {/* Route Definitions */}
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
