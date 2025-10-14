import type { FC } from "react";
import type { HomeSectionHeaderProps } from "./types";

const HomeSectionHeader: FC<HomeSectionHeaderProps> = ({ sectionLabel }) => {
  return (
    <div className="flex items-center gap-4 mb-6">
      <div className="w-5 h-10 bg-primary rounded"></div>
      <h3 className="text-primary font-semibold">{sectionLabel}</h3>
    </div>
  )
}

export default HomeSectionHeader;