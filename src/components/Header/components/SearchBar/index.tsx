import { Input } from "@/components/ui/input";
import { Search } from "lucide-react";
import type { FC } from "react";
import type { SearchBarProps } from "./types";

const SearchBar: FC<SearchBarProps> = ({ style }) => {
  return (
    <div className={`${style} items-center bg-gray-100 rounded px-3 py-2`}>
      <Input
        type="text"
        placeholder="What are you looking for?"
        className="bg-transparent border-none focus-visible:ring-0 focus-visible:ring-offset-0 text-sm p-0 h-auto"
      />
      <Search className="w-5 h-5 text-gray-600" />
    </div>
  );
};

export default SearchBar;
