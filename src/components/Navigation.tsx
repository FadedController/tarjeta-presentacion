import React from "react";
import { Link } from "react-router-dom";
import ContentSection from "./ContentSection";

const Navigation: React.FC = () => {
  return (
    <ContentSection className="fixed bottom-0 flex h-16 w-full bg-primary-1 cursor-pointer overflow-hidden rounded-t-md text-gray-50">
      <Link
        to="/contact"
        className="flex-1 flex lg:space-x-2 items-center justify-center bg-primary-0 hover:bg-transparent hover:-translate-y-1 transform hover:bg-primary-1 transition-all"
      >
        <span className="material-icons text-4xl">person</span>
        <p className="hidden lg:block">Contactar</p>
      </Link>
      <Link
        to="/location"
        className="flex-1 flex lg:space-x-2 items-center justify-center bg-primary-0 hover:bg-transparent hover:-translate-y-1 transform hover:bg-primary-1 transition-all"
      >
        <span className="material-icons text-4xl">place</span>
        <p className="hidden lg:block">Ubicacion</p>
      </Link>
      <Link
        to="/posts"
        className="flex-1 flex lg:space-x-2 items-center justify-center bg-primary-0 hover:bg-transparent hover:-translate-y-1 transform hover:bg-primary-1 transition-all"
      >
        <span className="material-icons text-4xl">library_books</span>
        <p className="hidden lg:block">Publicaciones</p>
      </Link>
      <Link
        to="/video"
        className="flex-1 flex lg:space-x-2 items-center justify-center bg-primary-0 hover:bg-transparent hover:-translate-y-1 transform hover:bg-primary-1 transition-all"
      >
        <span className="material-icons text-4xl">videocam</span>
        <p className="hidden lg:block">Video</p>
      </Link>
      <Link
        to="/share"
        className="flex-1 flex lg:space-x-2 items-center justify-center bg-primary-0 hover:bg-transparent hover:-translate-y-1 transform hover:bg-primary-1 transition-all"
      >
        <span className="material-icons text-4xl">share</span>
        <p className="hidden lg:block">Compartir</p>
      </Link>
    </ContentSection>
  );
};

export default Navigation;
