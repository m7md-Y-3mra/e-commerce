import { ChevronLeft, ChevronRight } from "lucide-react";
import NavigationButton from "../NavigationButton";

const NavigationArrows = () => {
  return (
    <div className="flex gap-2">
      <NavigationButton>
        <ChevronLeft className="h-5 w-5" />
      </NavigationButton>
      <NavigationButton>
        <ChevronRight className="h-5 w-5" />
      </NavigationButton>
    </div>
  );
};

export default NavigationArrows;
