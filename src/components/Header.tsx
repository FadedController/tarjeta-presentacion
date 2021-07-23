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

  console.log(location, isOnIndex(location.pathname));

  useEffect(() => {
    const expanded = isOnIndex(location.pathname);
    setIsExpanded(expanded);
  }, [location]);

  return (
    <div
      className={`${
        isExpanded ? "h-48 mb-20" : "h-24 mb-12"
      } transition-all bg-red-500 opacity-80 relative`}
    >
      <div className="absolute h-32 w-full -bottom-16 flex items-center justify-center">
        <Link to="/">
          <img
            className={`${
              isExpanded ? "h-36 w-36" : "h-24 w-24"
            } transition-all rounded-full shadow-xl`}
            src="https://d3cwdr4mx7w8ca.cloudfront.net/imgcdn/20210107132157/card/p1109photo.jpg"
          ></img>
        </Link>
      </div>
      <div
        className={`${
          isExpanded ? "w-16 pl-1" : "w-0 pl-0"
        } overflow-hidden transition-all bg-black opacity-70 absolute rounded-l-sm right-0 bottom-0 flex flex-col items-center space-y-2 justify-end py-4`}
      >
        <Link
          to="/"
          className="transform transition-transform hover:scale-110 hover:rotate-6"
        >
          <span className="material-icons text-white">home</span>
        </Link>
        <Link
          to="/share"
          className="transform transition-transform hover:scale-110 hover:rotate-6"
        >
          <span className="material-icons text-white">share</span>
        </Link>
        <Link
          className="transform transition-transform hover:scale-110 hover:rotate-6"
          to="/qr-code"
        >
          <span className="material-icons text-white">qr_code</span>
        </Link>
      </div>
    </div>
  );
};

export default Header;
