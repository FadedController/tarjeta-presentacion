import React from "react";
import ContentSection from "../components/ContentSection";
import { WhatsApp } from "../icons";

const Contact: React.FC = () => {
  return (
    <ContentSection
      maxW="max-w-lg"
      className="flex flex-col space-y-4 items-center justify-center pt-4 px-2 mb-24"
    >
      <h1 className="text-3xl font-semibold text-gray-800">Contacto</h1>
      <div className="flex flex-col items-center justify-center">
        <p className="font-light text-gray-700 text-center">
          Puedes contactar directamente pulsando el icono deseado.
        </p>
      </div>
      <div className="w-full items-center justify-center flex flex-col space-y-4">
        <div className="flex w-full items-center justify-center flex-col space-y-1 font-light text-lg">
          <h2 className="text-xl font-semibold text-gray-800">
            Telefono Central:
          </h2>
          <p className="font-light text-gray-700 text-center">(33) 4542 0848</p>
        </div>
        <div className="grid grid-cols-3 gap-2 w-full">
          <a
            className="flex shadow-md rounded-sm py-2 text-white flex-col items-center justify-center space-y-2 bg-gray-600 transform hover:scale-105 transition-all"
            href="tel:3345420848"
          >
            <span className="material-icons">phone</span>
            <span>Llamar</span>
          </a>
        </div>
        <div className="flex w-full items-center justify-center flex-col space-y-1 font-light text-lg">
          <h2 className="text-xl font-semibold text-gray-800">Móvil:</h2>
          <p className="font-light text-gray-700 text-center">(33) 4542 0848</p>
        </div>
        <div className="grid grid-cols-3 gap-2 w-full">
          <a
            className="flex shadow-md rounded-sm py-2 text-white flex-col items-center justify-center space-y-2 bg-gray-600 transform hover:scale-105 transition-all"
            href="tel:3345420848"
          >
            <span className="material-icons">phone</span>
            <span>Llamar</span>
          </a>
          <a
            className="flex shadow-md rounded-sm py-2 text-white flex-col items-center justify-center space-y-2 bg-gray-600 transform hover:scale-105 transition-all"
            href="https://web.whatsapp.com"
          >
            <WhatsApp className="h-6 w-6 fill-current" />
            <span>Whatsapp</span>
          </a>
          <a
            className="flex shadow-md rounded-sm py-2 text-white flex-col items-center justify-center space-y-2 bg-gray-600 transform hover:scale-105 transition-all"
            href="sms:3345420848"
          >
            <span className="material-icons">sms</span>
            <span>SMS</span>
          </a>
        </div>
        <div className="flex w-full items-center justify-center flex-col space-y-1 font-light text-lg">
          <h2 className="text-xl font-semibold text-gray-800">
            Correo electrónico:
          </h2>
          <p className="font-light text-gray-700 text-center">test@email.com</p>
        </div>
        <div className="grid grid-cols-3 gap-2 w-full">
          <a
            className="flex shadow-md rounded-sm py-2 text-white flex-col items-center justify-center space-y-2 bg-gray-600 transform hover:scale-105 transition-all"
            href="mailto:test@email.com"
          >
            <span className="material-icons">mail</span>
            <span>Email</span>
          </a>
        </div>
      </div>
    </ContentSection>
  );
};

export default Contact;
