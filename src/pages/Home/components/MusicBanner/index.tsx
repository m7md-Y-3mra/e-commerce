import { Button } from "@/components/ui/button";
import BoomBox from "./assets/boom-box.png";
import { CTA_TEXT, MAIN_TITLE, SECTION_LABEL } from "./constants";
import type { MusicBannerProps } from "./types";
import { useMusicBanner } from "./useMusicBanner";

export default function MusicBanner({ className = "" }: MusicBannerProps) {
  const { countdown, handleBuyNow } = useMusicBanner();

  return (
    <section className={`container mx-auto px-4 py-12 ${className}`}>
      <div className="relative bg-black text-white rounded-lg p-6 sm:p-8 md:p-12 lg:p-16 flex flex-col lg:flex-row items-center justify-between gap-8 lg:gap-12 overflow-hidden">
        {/* White ellipse glow effect */}
        {/*  */}
        <div className="absolute top-3/4 right-1/3 lg:top-1/2 lg:right-1/6 w-[200px] h-[200px] sm:w-[300px] sm:h-[300px] lg:w-[400px] lg:h-[400px] -translate-y-1/2 translate-x-1/4 pointer-events-none">
          <div className="absolute inset-0 bg-white/5 rounded-full blur-3xl"></div>
          <div className="absolute inset-[-10%] bg-white/10 rounded-full blur-2xl"></div>
          <div className="absolute inset-[-20%] bg-white/5 rounded-full blur-xl"></div>
        </div>

        <div className="relative z-10 w-full lg:max-w-md">
          <h3 className="text-green-400 font-semibold mb-4 sm:mb-6 lg:mb-8 text-sm sm:text-base">
            {SECTION_LABEL}
          </h3>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6 sm:mb-8 leading-tight whitespace-pre-line font-inter">
            {MAIN_TITLE}
          </h2>

          {/* Countdown Timer */}
          <div className="flex gap-3 sm:gap-4 lg:gap-6 mb-6 sm:mb-8 lg:mb-10">
            <div className="bg-white text-black rounded-full w-14 h-14 sm:w-16 sm:h-16 flex flex-col items-center justify-center">
              <div className="text-xs sm:text-sm font-semibold">
                {String(countdown.hours).padStart(2, "0")}
              </div>
              <div className="text-[10px] sm:text-xs">Hours</div>
            </div>
            <div className="bg-white text-black rounded-full w-14 h-14 sm:w-16 sm:h-16 flex flex-col items-center justify-center">
              <div className="text-xs sm:text-sm font-semibold">
                {String(countdown.days).padStart(2, "0")}
              </div>
              <div className="text-[10px] sm:text-xs">Days</div>
            </div>
            <div className="bg-white text-black rounded-full w-14 h-14 sm:w-16 sm:h-16 flex flex-col items-center justify-center">
              <div className="text-xs sm:text-sm font-semibold">
                {String(countdown.minutes).padStart(2, "0")}
              </div>
              <div className="text-[10px] sm:text-xs">Minutes</div>
            </div>
            <div className="bg-white text-black rounded-full w-14 h-14 sm:w-16 sm:h-16 flex flex-col items-center justify-center">
              <div className="text-xs sm:text-sm font-semibold">
                {String(countdown.seconds).padStart(2, "0")}
              </div>
              <div className="text-[10px] sm:text-xs">Seconds</div>
            </div>
          </div>

          <Button
            onClick={handleBuyNow}
            className="bg-[#00FF66] hover:bg-[#00FF66] hover:opacity-90 text-white px-8 sm:px-10 lg:px-12 py-4 sm:py-5 lg:py-6 text-base sm:text-lg w-full sm:w-auto"
          >
            {CTA_TEXT}
          </Button>
        </div>

        {/* Product Image */}
        <div className="relative z-10 w-full lg:w-auto flex-shrink-0">
          <div className="flex items-center justify-center">
            <img
              src={BoomBox}
              alt="boom-box"
              className="w-full max-w-[280px] sm:max-w-[350px] md:max-w-[450px] lg:max-w-lg object-contain drop-shadow-2xl"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
