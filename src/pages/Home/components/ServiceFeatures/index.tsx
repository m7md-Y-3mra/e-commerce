import { cn } from "@/lib/utils";
import type { FC } from "react";
import { SERVICES } from "./constant";
import type { ServiceFeaturesProps } from "./types";

const ServiceFeatures: FC<ServiceFeaturesProps> = ({ className }) => {
  return (
    <section className={cn("container mx-auto px-4 py-16", className)}>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {SERVICES.map((service) => (
          <div key={service.id} className="flex flex-col items-center text-center space-y-4">
            <div className="flex h-20 w-20 items-center justify-center rounded-full bg-[rgba(47,46,48,0.3)]">
              <div className="flex h-14 w-14 items-center justify-center rounded-full bg-foreground text-background">
                <img src={service.icon} alt={service.title} className="h-7 w-7" />
              </div>
            </div>
            <div className="space-y-2">
              <h3 className="font-semibold text-sm uppercase">{service.title}</h3>
              <p className="text-sm">{service.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ServiceFeatures;
