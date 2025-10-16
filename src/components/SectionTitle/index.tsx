import type { FC } from "react";

const SectionTitle: FC<{ sectionTitle: string }> = ({ sectionTitle }) => {
  return <h2 className="text-3xl font-bold">{sectionTitle}</h2>;
};

export default SectionTitle;
