import { type FC } from "react";
import { Link } from "react-router";
import { cn } from "@/lib/utils";
import type { BreadcrumbProps } from "./types";

const Breadcrumb: FC<BreadcrumbProps> = ({ items, className }) => {
  return (
    <nav className={cn("flex items-center gap-3 text-sm", className)}>
      {items.map((item, index) => {
        const isLast = index === items.length - 1;

        return (
          <div key={index} className="flex items-center gap-3">
            {item.path && !isLast ? (
              <Link
                to={item.path}
                className="text-gray-500 hover:text-gray-700 transition-colors"
              >
                {item.label}
              </Link>
            ) : (
              <span className={isLast ? "text-black font-medium" : "text-gray-500"}>
                {item.label}
              </span>
            )}
            {!isLast && <span className="text-gray-400">/</span>}
          </div>
        );
      })}
    </nav>
  );
};

export default Breadcrumb;
