import { Input } from "@/components/ui/input";
import type { FC } from "react";
import Search from "../../assets/images/search.svg";
import type { SearchBarProps } from "./types";

const SearchBar: FC<SearchBarProps> = ({ style }) => {
  return (
    <div className={`${style} items-center bg-gray-100 rounded px-3 py-2`}>
      <Input
        type="text"
        placeholder="What are you looking for?"
        className="bg-transparent border-none focus-visible:ring-0 focus-visible:ring-offset-0 text-sm p-0 h-auto"
      />
      <img src={Search} alt="search-icon" />
    </div>
  );
};

export default SearchBar;
