import { type ComponentType } from "react";
import { cn } from "@/lib/utils";

interface WithCenteredLayoutProps {
  className?: string;
}

/**
 * Higher-Order Component that centers content vertically and horizontally
 * Excludes header/nav height from calculations using min-h-[calc(100vh-theme(spacing.16))]
 * Adjust the spacing value based on your header height
 */
export function withCenteredLayout<P extends object>(
  Component: ComponentType<P>,
) {
  return function CenteredComponent(props: P & WithCenteredLayoutProps) {
    const { className, ...rest } = props;

    return (
      <div
        className={cn(
          "flex items-center justify-center min-h-[calc(100vh-theme(spacing.20))]",
          className,
        )}
      >
        <Component {...(rest as P)} />
      </div>
    );
  };
}
