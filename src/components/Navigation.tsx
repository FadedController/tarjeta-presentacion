import React, { useContext } from "react";
import { Link } from "react-router-dom";
import ContentSection from "./ContentSection";
import { UIContext } from "./Pages";

const Navigation: React.FC = () => {
  const UIData = useContext(UIContext);

  if (UIData) {
    const navigation = UIData.components.navigation;
    return (
      <ContentSection className="fixed bottom-0 flex h-16 w-full bg-primary-1 cursor-pointer overflow-hidden rounded-t-md text-gray-50">
        <Link
          to="/contact"
          className="flex-1 flex lg:space-x-2 items-center justify-center bg-primary-0 hover:bg-transparent hover:-translate-y-1 transform hover:bg-primary-1 transition-all"
        >
          <span className="material-icons text-4xl">person</span>
          <p className="hidden lg:block">{navigation["btn-1"]}</p>
        </Link>
        <Link
          to="/location"
          className="flex-1 flex lg:space-x-2 items-center justify-center bg-primary-0 hover:bg-transparent hover:-translate-y-1 transform hover:bg-primary-1 transition-all"
        >
          <span className="material-icons text-4xl">place</span>
          <p className="hidden lg:block">{navigation["btn-2"]}</p>
        </Link>
        <Link
          to="/about"
          className="flex-1 flex lg:space-x-2 items-center justify-center bg-primary-0 hover:bg-transparent hover:-translate-y-1 transform hover:bg-primary-1 transition-all"
        >
          <span className="material-icons text-4xl">library_books</span>
          <p className="hidden lg:block">{navigation["btn-3"]}</p>
        </Link>
        <Link
          to="/video"
          className="flex-1 flex lg:space-x-2 items-center justify-center bg-primary-0 hover:bg-transparent hover:-translate-y-1 transform hover:bg-primary-1 transition-all"
        >
          <span className="material-icons text-4xl">videocam</span>
          <p className="hidden lg:block">{navigation["btn-4"]}</p>
        </Link>
        <Link
          to="/share"
          className="flex-1 flex lg:space-x-2 items-center justify-center bg-primary-0 hover:bg-transparent hover:-translate-y-1 transform hover:bg-primary-1 transition-all"
        >
          <span className="material-icons text-4xl">share</span>
          <p className="hidden lg:block">{navigation["btn-5"]}</p>
        </Link>
      </ContentSection>
    );
  }
  return <></>;
};

export default Navigation;
