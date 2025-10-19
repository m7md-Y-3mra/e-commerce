import type { FC } from "react";

const SectionTitle: FC<{ sectionTitle: string; className?: string }> = ({
  sectionTitle,
  className,
}) => {
  return <h2 className={`text-3xl font-bold ${className}`}>{sectionTitle}</h2>;
};

export default SectionTitle;
