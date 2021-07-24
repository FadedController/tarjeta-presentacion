import React from "react";
import ContentSection from "../components/ContentSection";

const Contact: React.FC = () => {
  return (
    <ContentSection className="flex flex-col space-y-4 items-center justify-center pt-4 px-2">
      <h1 className="text-3xl font-semibold text-gray-800">Contacto</h1>
      <div className="flex flex-col items-center justify-center">
        <p className="font-light text-gray-700 text-center">
          Puedes contactar directamente pulsando el icono deseado.
        </p>
      </div>
    </ContentSection>
  );
};

export default Contact;
