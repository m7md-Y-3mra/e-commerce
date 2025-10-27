import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.tsx";
import { CartProvider } from "./contexts/CartContext";
import { Toaster } from "./components/ui/sonner";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <CartProvider>
      <App />
      <Toaster />
    </CartProvider>
  </StrictMode>,
);
