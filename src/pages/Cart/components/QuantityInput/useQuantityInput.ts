import { useState, useEffect, useCallback } from "react";

interface UseQuantityInputProps {
  value: number;
  min?: number;
  max?: number;
  onChange: (value: number) => void;
}

export const useQuantityInput = ({ value, min = 1, max, onChange }: UseQuantityInputProps) => {
  const [localValue, setLocalValue] = useState(value);
  const [debounceTimer, setDebounceTimer] = useState<ReturnType<typeof setTimeout> | null>(null);

  // Update local value when prop changes
  useEffect(() => {
    setLocalValue(value);
  }, [value]);

  // Format number with leading zero (01, 02, etc.)
  const formatValue = (num: number): string => {
    return num.toString().padStart(2, "0");
  };

  // Validate and constrain value
  const validateValue = (num: number): number => {
    let validated = Math.max(min, num);
    if (max !== undefined) {
      validated = Math.min(max, validated);
    }
    return validated;
  };

  // Debounced onChange to prevent excessive updates
  const debouncedOnChange = useCallback(
    (newValue: number) => {
      if (debounceTimer) {
        clearTimeout(debounceTimer);
      }

      const timer = setTimeout(() => {
        onChange(newValue);
      }, 300);

      setDebounceTimer(timer);
    },
    [onChange, debounceTimer],
  );

  // Increment handler
  const handleIncrement = useCallback(() => {
    const newValue = validateValue(localValue + 1);
    setLocalValue(newValue);
    debouncedOnChange(newValue);
  }, [localValue, debouncedOnChange, validateValue]);

  // Decrement handler
  const handleDecrement = useCallback(() => {
    const newValue = validateValue(localValue - 1);
    setLocalValue(newValue);
    debouncedOnChange(newValue);
  }, [localValue, debouncedOnChange, validateValue]);

  // Direct input handler
  const handleInputChange = useCallback(
    (inputValue: string) => {
      const num = parseInt(inputValue, 10);
      if (!isNaN(num)) {
        const validated = validateValue(num);
        setLocalValue(validated);
        debouncedOnChange(validated);
      }
    },
    [debouncedOnChange, validateValue],
  );

  // Cleanup timer on unmount
  useEffect(() => {
    return () => {
      if (debounceTimer) {
        clearTimeout(debounceTimer);
      }
    };
  }, [debounceTimer]);

  const canIncrement = max === undefined || localValue < max;
  const canDecrement = localValue > min;

  return {
    localValue,
    formattedValue: formatValue(localValue),
    handleIncrement,
    handleDecrement,
    handleInputChange,
    canIncrement,
    canDecrement,
  };
};
