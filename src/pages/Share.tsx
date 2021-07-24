import React from "react";
import { Link } from "react-router-dom";
import ContentSection from "../components/ContentSection";
import SendEmail from "../components/SendEmail";

const Share: React.FC = () => {
  return (
    <ContentSection
      maxW="max-w-lg"
      className="flex flex-col space-y-4 items-center justify-center pt-4 px-2"
    >
      <h1 className="text-3xl font-semibold text-gray-800">Compartir</h1>
      <div className="flex flex-col items-center justify-center">
        <p className="font-light text-gray-700 text-center">
          Puedes compartir esta tarjeta fácilmente en cualquiera de los sistemas
          informados que tengas habilitados en tu dispositivo.
        </p>
      </div>
      <div className="w-full grid grid-cols-3 gap-2 px-2">
        <Link
          to="qr-code"
          className="border shadow-md rounded-sm overflow-hidden transform transition-transform hover:scale-105"
        >
          <div className="bg-tertiary-0 flex items-center justify-center h-12">
            <span className="material-icons text-3xl text-white">qr_code</span>
          </div>
          <div>
            <p className="h-10 flex justify-center items-center">QR Code</p>
          </div>
        </Link>
      </div>
      <SendEmail />
    </ContentSection>
  );
};

export default Share;
