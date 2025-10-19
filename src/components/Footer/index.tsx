import AppStore from "./assets/app-store-logo.png";
import GooglePlay from "./assets/google-play-store-logo.png";
import Facebook from "./assets/Icon-Facebook.svg";
import Instagram from "./assets/icon-instagram.svg";
import Linkedin from "./assets/Icon-Linkedin.svg";
import Send from "./assets/icon-send.svg";
import Twitter from "./assets/Icon-Twitter.svg";
import QRCode from "./assets/Qr Code.png";
import {
  ACCOUNT_LINKS,
  APP_DOWNLOAD_TEXT,
  COPYRIGHT_TEXT,
  EMAIL_PLACEHOLDER,
  QUICK_LINKS,
  SUBSCRIBE_TEXT,
  SUBSCRIBE_TITLE,
  SUPPORT_SECTION,
} from "./constants";
import type { FooterProps } from "./types";
import { useFooter } from "./useFooter";

export default function Footer({ className = "" }: FooterProps) {
  const { email, setEmail, handleSubscribe } = useFooter();

  return (
    <footer className={`bg-black text-white mt-16 ${className}`}>
      {/* Footer Links */}
      <div className="container mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-8 lg:gap-6 px-4 sm:px-6 lg:px-4 py-12 sm:py-16">
          {/* Exclusive */}
          <div className="sm:col-span-2 lg:col-span-1">
            <h3 className="text-xl sm:text-2xl font-bold mb-3 sm:mb-4">Exclusive</h3>
            <h4 className="font-semibold mb-3 sm:mb-4 text-sm sm:text-base">{SUBSCRIBE_TITLE}</h4>
            <p className="text-xs sm:text-sm mb-3 sm:mb-4">{SUBSCRIBE_TEXT}</p>
            <form onSubmit={handleSubscribe} className="relative">
              <input
                type="email"
                placeholder={EMAIL_PLACEHOLDER}
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="bg-transparent border border-white rounded px-3 sm:px-4 py-2 pr-10 w-full text-xs sm:text-sm"
                required
              />
              <button type="submit" className="absolute top-1/2 transform -translate-y-1/2 right-3">
                <img
                  src={Send || "/placeholder.svg"}
                  alt="send-icon"
                  className="w-4 h-4 sm:w-5 sm:h-5"
                />
              </button>
            </form>
          </div>

          {/* Support */}
          <div>
            <h3 className="font-semibold mb-3 sm:mb-4 text-base sm:text-lg">
              {SUPPORT_SECTION.title}
            </h3>
            <div className="space-y-2 sm:space-y-3 text-xs sm:text-sm">
              <p>{SUPPORT_SECTION.address}</p>
              <p>{SUPPORT_SECTION.email}</p>
              <p>{SUPPORT_SECTION.phone}</p>
            </div>
          </div>

          {/* Account */}
          <div>
            <h3 className="font-semibold mb-3 sm:mb-4 text-base sm:text-lg">
              {ACCOUNT_LINKS.title}
            </h3>
            <nav className="space-y-2 sm:space-y-3 text-xs sm:text-sm">
              {ACCOUNT_LINKS.links.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  className="block hover:underline transition-all"
                >
                  {link.label}
                </a>
              ))}
            </nav>
          </div>

          {/* Quick Link */}
          <div>
            <h3 className="font-semibold mb-3 sm:mb-4 text-base sm:text-lg">{QUICK_LINKS.title}</h3>
            <nav className="space-y-2 sm:space-y-3 text-xs sm:text-sm">
              {QUICK_LINKS.links.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  className="block hover:underline transition-all"
                >
                  {link.label}
                </a>
              ))}
            </nav>
          </div>

          {/* Download App */}
          <div className="sm:col-span-2 lg:col-span-1">
            <h3 className="font-semibold mb-3 sm:mb-4 text-base sm:text-lg">Download App</h3>
            <p className="text-xs text-gray-400 mb-3">{APP_DOWNLOAD_TEXT}</p>
            <div className="flex flex-col sm:flex-row gap-3 mb-4">
              <div className="flex items-center gap-2">
                <img className="w-16 h-16 sm:w-20 sm:h-20" src={QRCode} alt="QR-code" />
                <div className="flex flex-col gap-2 sm:hidden">
                  <img src={GooglePlay} alt="google-play-icon" className="h-8" />
                  <img src={AppStore} alt="app-store-icon" className="h-8" />
                </div>
              </div>
              <div className="hidden sm:flex lg:flex flex-col gap-2">
                <img src={GooglePlay} alt="google-play-icon" className="h-9 sm:h-10" />
                <img src={AppStore} alt="app-store-icon" className="h-9 sm:h-10" />
              </div>
            </div>
            <div className="flex gap-4 sm:gap-5 lg:gap-4">
              <a href="#" className="hover:text-gray-400 transition-colors">
                <img src={Facebook} alt="facebook-icon" className="w-5 h-5 sm:w-6 sm:h-6" />
              </a>
              <a href="#" className="hover:text-gray-400 transition-colors">
                <img src={Twitter} alt="twitter-icon" className="w-5 h-5 sm:w-6 sm:h-6" />
              </a>
              <a href="#" className="hover:text-gray-400 transition-colors">
                <img src={Instagram} alt="instagram-icon" className="w-5 h-5 sm:w-6 sm:h-6" />
              </a>
              <a href="#" className="hover:text-gray-400 transition-colors">
                <img src={Linkedin} alt="linkedin-icon" className="w-5 h-5 sm:w-6 sm:h-6" />
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Copyright */}
      <div className="text-center py-3 sm:py-4 px-4 border-t border-[rgba(255,255,255,0.1)] text-[rgba(255,255,255,0.2)] text-xs sm:text-sm">
        {COPYRIGHT_TEXT}
      </div>
    </footer>
  );
}
