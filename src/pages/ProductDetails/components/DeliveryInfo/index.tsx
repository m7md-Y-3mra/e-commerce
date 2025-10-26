import { type FC } from "react";
import { cn } from "@/lib/utils";
import { DELIVERY_INFO } from "../../constants";
import type { DeliveryInfoProps } from "./types";
import DeliveryIcon from "../../assets/delivery-icon.svg";
import ReturnIcon from "../../assets/return-icon.svg";

const DeliveryInfo: FC<DeliveryInfoProps> = ({ className }) => {
  return (
    <div className={cn("flex flex-col border border-gray-300 rounded-md", className)}>
      {/* Free Delivery */}
      <div className="flex items-center gap-4 p-6 border-b border-gray-300">
        <img src={DeliveryIcon} alt="Delivery" className="w-10 h-10" />
        <div className="flex flex-col gap-2">
          <h3 className="font-medium">{DELIVERY_INFO.freeDelivery.title}</h3>
          <p className="text-xs underline">
            {DELIVERY_INFO.freeDelivery.description}
          </p>
        </div>
      </div>

      {/* Return Delivery */}
      <div className="flex items-center gap-4 p-6">
        <img src={ReturnIcon} alt="Return" className="w-10 h-10" />
        <div className="flex flex-col gap-2">
          <h3 className="font-medium">{DELIVERY_INFO.returnDelivery.title}</h3>
          <p className="text-xs">
            {DELIVERY_INFO.returnDelivery.description}{" "}
            <span className="underline font-medium">
              {DELIVERY_INFO.returnDelivery.link}
            </span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default DeliveryInfo;
