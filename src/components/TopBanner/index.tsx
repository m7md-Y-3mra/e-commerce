import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { ChevronDown } from "lucide-react";

export function TopBanner() {
  return (
    <div className="bg-black text-white py-3">
      <div className="container mx-auto px-4 flex items-center justify-between text-sm">
        <div className="flex-1" />
        <p className="text-center">
          Summer Sale For All Swim Suits And Free Express Delivery - OFF 50%!{" "}
          <a href="#" className="font-semibold underline ml-2">
            ShopNow
          </a>
        </p>
        <div className="flex-1 flex justify-end">
          <DropdownMenu>
            <DropdownMenuTrigger className="flex items-center gap-1">
              English <ChevronDown className="h-4 w-4" />
            </DropdownMenuTrigger>
            <DropdownMenuContent>
              <DropdownMenuItem>English</DropdownMenuItem>
              <DropdownMenuItem>Arabic</DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </div>
    </div>
  );
}
