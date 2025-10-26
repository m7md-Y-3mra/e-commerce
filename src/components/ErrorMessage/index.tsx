import { type FC } from "react";
import { Link } from "react-router";
import { AlertCircle, Home } from "lucide-react";
import { cn } from "@/lib/utils";
import { Button } from "../ui/button";
import type { ErrorMessageProps } from "./types";

const ErrorMessage: FC<ErrorMessageProps> = ({
  title = "Oops! Something went wrong",
  message = "We couldn't find what you were looking for. Please try again or return to the home page.",
  showButton = true,
  buttonText = "Return to Home",
  buttonLink = "/",
  className,
}) => {
  return (
    <div
      className={cn(
        "flex flex-col items-center justify-center p-8 rounded-lg bg-red-50 border border-red-200 max-w-md mx-auto",
        className,
      )}
    >
      {/* Error Icon */}
      <div className="mb-6">
        <AlertCircle className="w-16 h-16 text-primary" strokeWidth={1.5} />
      </div>

      {/* Error Title */}
      <h2 className="text-2xl font-bold text-gray-900 mb-3 text-center">
        {title}
      </h2>

      {/* Error Message */}
      <p className="text-base text-gray-600 text-center mb-6 leading-relaxed">
        {message}
      </p>

      {/* Button */}
      {showButton && (
        <Link to={buttonLink}>
          <Button size="lg" className="gap-2">
            <Home className="w-4 h-4" />
            {buttonText}
          </Button>
        </Link>
      )}
    </div>
  );
};

export default ErrorMessage;
