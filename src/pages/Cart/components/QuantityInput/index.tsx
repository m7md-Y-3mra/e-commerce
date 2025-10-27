import { type FC } from "react";
import { ChevronUp, ChevronDown } from "lucide-react";
import { cn } from "@/lib/utils";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { useQuantityInput } from "./useQuantityInput";
import type { QuantityInputProps } from "./types";

const QuantityInput: FC<QuantityInputProps> = ({ value, min, max, onChange, className }) => {
  const {
    formattedValue,
    handleIncrement,
    handleDecrement,
    handleInputChange,
    canIncrement,
    canDecrement,
  } = useQuantityInput({ value, min, max, onChange });

  return (
    <div className={cn("flex items-center border rounded-md w-fit", className)}>
      <Input
        type="text"
        value={formattedValue}
        onChange={(e) => handleInputChange(e.target.value)}
        className="w-16 text-center border-0 shadow-none focus-visible:ring-0 focus-visible:ring-offset-0"
        readOnly
      />
      <div className="flex flex-col border-l">
        <Button
          variant="ghost"
          size="icon"
          className="h-5 w-8 rounded-none border-b p-0 hover:bg-gray-100"
          onClick={handleIncrement}
          disabled={!canIncrement}
        >
          <ChevronUp className="h-3 w-3" />
        </Button>
        <Button
          variant="ghost"
          size="icon"
          className="h-5 w-8 rounded-none p-0 hover:bg-gray-100"
          onClick={handleDecrement}
          disabled={!canDecrement}
        >
          <ChevronDown className="h-3 w-3" />
        </Button>
      </div>
    </div>
  );
};

export default QuantityInput;
