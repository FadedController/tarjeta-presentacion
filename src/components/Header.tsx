import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { Link, useLocation } from "react-router-dom";

const Header: React.FC = () => {
  const [isExpanded, setIsExpanded] = useState(true);
  const location = useLocation();

  const isOnIndex = (path: string) => {
    if (path === "/") return true;
    return false;
  };

  useEffect(() => {
    const expanded = isOnIndex(location.pathname);
    setIsExpanded(expanded);
  }, [location]);

  return (
    <div
      className={`${
        isExpanded ? "h-48 mb-20" : "h-24 mb-12"
      } transition-all bg-img opacity-80 relative`}
    >
      <div className="absolute h-32 w-full -bottom-16 flex items-center justify-center">
        <Link to="/">
          <img
            className={`${
              isExpanded ? "h-36 w-36" : "h-24 w-24"
            } transition-all rounded-full shadow-xl`}
            alt="Fotografia de John Doe"
            src="https://d3cwdr4mx7w8ca.cloudfront.net/imgcdn/20210107132157/card/p1109photo.jpg"
          ></img>
        </Link>
      </div>
      <div
        className={`${
          isExpanded ? "w-16 lg:w-24 pl-1" : "w-0 pl-0"
        } overflow-hidden transition-all bg-secondary-0 opacity-90 absolute rounded-l-sm right-0 bottom-0 flex flex-col items-center space-y-4 justify-end py-4`}
      >
        <Link
          to="/share"
          className="flex flex-col items-center justify-center transform transition-transform hover:scale-110 hover:rotate-6"
        >
          <span className="material-icons text-white">share</span>
          <p className="hidden lg:block text-white">Compartir</p>
        </Link>
        <Link
          className="flex flex-col items-center justify-center transform transition-transform hover:scale-110 hover:rotate-6"
          to="/qr-code"
        >
          <span className="material-icons text-white">qr_code</span>
          <p className="hidden lg:block text-white">Código QR</p>
        </Link>
      </div>
      <div
        className={`${
          isExpanded ? "w-0 h-0 pl-0" : "w-16 lg:w-24 h-12 lg:h-20 pl-1"
        } flex flex-col items-center justify-center overflow-hidden bg-secondary-0 opacity-90 absolute -bottom-12 lg:-bottom-20 right-0 tranistion-all`}
      >
        <Link
          to="/"
          className="transform transition-transform hover:scale-110 hover:rotate-6 flex flex-col items-center justify-center"
        >
          <span className="material-icons text-white text-3xl">close</span>
          <p className="text-white hidden lg:block">Cerrar</p>
        </Link>
      </div>
    </div>
  );
};

export default Header;
