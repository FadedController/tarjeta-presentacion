import React, { useContext } from "react";
import { useEffect } from "react";
import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { LanguageContext, UIContext } from "./Pages";

const Header: React.FC = () => {
  const [isExpanded, setIsExpanded] = useState(true);
  const location = useLocation();

  const [language, setLanguage] = useContext(LanguageContext);

  const toggleLanguage = () => {
    if (language === "en") return setLanguage("es");
    return setLanguage("en");
  };

  const isOnIndex = (path: string) => {
    if (path === "/") return true;
    return false;
  };

  const pageUrl = window.location.origin;

  const downloadVcard = () => {
    const a = document.createElement("a");
    a.href = `${pageUrl}/vcard.vcf`;
    console.log(a.href);
    a.setAttribute("download", "vcard.vcf");
    a.click();
  };

  useEffect(() => {
    const expanded = isOnIndex(location.pathname);
    setIsExpanded(expanded);
  }, [location]);

  const data = useContext(UIContext);

  if (data) {
    const header = data.components.header;

    return (
      <div
        className={`${
          isExpanded ? "h-44 lg:h-56 mb-20" : "h-24 mb-12"
        } transition-all bg-img opacity-80 relative z-50`}
      >
        <div className="absolute h-32 w-full -bottom-16 flex items-center justify-center">
          <Link to="/">
            <img
              onClick={isExpanded ? downloadVcard : () => {}}
              className={`${
                isExpanded ? "h-36 w-36" : "h-24 w-24"
              } transition-all rounded-full shadow-xl`}
              alt={header["alt-img"]}
              src="img/profile.jpg"
            ></img>
          </Link>
        </div>
        <div
          className={`${
            isExpanded ? "w-16 lg:w-24 pl-1" : "w-0 pl-0"
          } overflow-hidden transition-all rounded-tl-lg bg-secondary-0 opacity-90 absolute right-0 bottom-0 flex flex-col items-center space-y-4 justify-end py-4`}
        >
          <button
            onClick={toggleLanguage}
            className="flex flex-col items-center justify-center transform transition-transform hover:scale-110 hover:rotate-6"
          >
            <span className="material-icons text-white">language</span>
            <p className="hidden lg:block text-white">{header["btn-4"]}</p>
          </button>
          <Link
            to="/share"
            className="flex flex-col items-center justify-center transform transition-transform hover:scale-110 hover:rotate-6"
          >
            <span className="material-icons text-white">share</span>
            <p className="hidden lg:block text-white">{header["btn-1"]}</p>
          </Link>
          <Link
            className="flex flex-col items-center justify-center transform transition-transform hover:scale-110 hover:rotate-6"
            to="/qr-code"
          >
            <span className="material-icons text-white">qr_code</span>
            <p className="hidden lg:block text-white">{header["btn-2"]}</p>
          </Link>
        </div>
        <div
          className={`${
            isExpanded ? "w-0 h-0 pl-0" : "w-16 lg:w-24 z-50 h-24 lg:h-36 pl-1"
          } flex flex-col space-y-4 items-center rounded-bl-lg justify-center overflow-hidden bg-secondary-0 opacity-90 absolute -bottom-24 lg:-bottom-36 right-0 tranistion-all`}
        >
          <Link
            to="/"
            className="transform transition-transform hover:scale-110 hover:rotate-6 flex flex-col items-center justify-center"
          >
            <span className="material-icons text-white text-3xl">close</span>
            <p className="text-white hidden lg:block">{header["btn-3"]}</p>
          </Link>
          <button
            onClick={toggleLanguage}
            className="flex flex-col items-center justify-center transform transition-transform hover:scale-110 hover:rotate-6"
          >
            <span className="material-icons text-white">language</span>
            <p className="hidden lg:block text-white">{header["btn-4"]}</p>
          </button>
        </div>
      </div>
    );
  }

  return <></>;
};

export default Header;
