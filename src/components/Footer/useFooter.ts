import { useState } from "react";

export const useFooter = () => {
  const [email, setEmail] = useState("");

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Subscribe with email:", email);
    setEmail("");
  };

  return {
    email,
    setEmail,
    handleSubscribe,
  };
};
