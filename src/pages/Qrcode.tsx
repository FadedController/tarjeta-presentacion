import React from "react";
import ContentSection from "../components/ContentSection";

const Qrcode: React.FC = () => {
  return (
    <ContentSection className="flex flex-col space-y-6 items-center justify-center pt-4 px-2">
      <h1 className="text-3xl font-semibold text-gray-800">Codigo QR</h1>
      <div className="flex flex-col items-center justify-center">
        <p className="font-light text-gray-700 text-center">
          Usa la cámara de tu smartphone o un lector de QR para acceder a la
          tarjeta digital.
        </p>
        <img src="img/frame.png" alt="QR code" />
      </div>
    </ContentSection>
  );
};

export default Qrcode;
