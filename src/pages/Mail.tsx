import React from "react";
import ContentSection from "../components/ContentSection";
import SendEmail from "../components/SendEmail";

const Mail: React.FC = () => {
  return (
    <ContentSection
      maxW="max-w-lg"
      className="flex flex-col space-y-4 items-center justify-center pt-4 px-2"
    >
      <h1 className="text-3xl font-semibold text-gray-800">
        Compartir por correo
      </h1>
      <div className="flex flex-col items-center justify-center">
        <p className="font-light text-gray-700 text-center">
          Envia esta tarjeta a cualquier direccion valida de correo electrónico
        </p>
      </div>
      <SendEmail />
    </ContentSection>
  );
};

export default Mail;
