import { BrowserRouter, Route, Routes } from "react-router";
import Footer from "./components/Footer";
import Header from "./components/Header";
import { TopBanner } from "./components/TopBanner";
import Home from "./pages/Home";
import ProductDetails from "./pages/ProductDetails";
import NotFound from "./pages/NotFound";

function App() {
  return (
    <BrowserRouter>
      <TopBanner />
      {/* Navigation Links */}
      <Header />
      {/* Route Definitions */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/product/:id" element={<ProductDetails />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
