import type { ReactNode } from "react";

const NavigationButton = ({ children }: { children: ReactNode }) => {
  return (
    <button className="p-2 rounded-full bg-gray-100 hover:bg-gray-200 transition-colors">
      {children}
    </button>
  );
};

export default NavigationButton;
