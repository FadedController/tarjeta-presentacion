import React, { useEffect } from "react";
import ContentSection from "../components/ContentSection";
import { WhatsApp } from "../icons";
import ESData from "../lang/ui.es.json";
import ENData from "../lang/ui.en.json";
import { useContext } from "react";
import { LanguageContext } from "../components/Pages";
import ENUser from "../lang/data.en.json";
import ESUser from "../lang/data.es.json";

const Index: React.FC = () => {
  const [language] = useContext(LanguageContext);
  const {
    pages: { index },
  } = language === "es" ? ESData : ENData;
  const {
    personalInformation: { contact, name, position },
  } = language === "es" ? ESUser : ENUser;

  useEffect(() => {
    document.title = `${name} - ${language === "en" ? "Home" : "Inicio"}`;
  });

  return (
    <ContentSection
      maxW="max-w-lg"
      className="flex flex-col space-y-3 items-center pt-4 mb-24"
    >
      <h1 className="text-3xl font-semibold text-gray-800">{name}</h1>
      <div className="flex flex-col items-center">
        <h2 className="font-light text-gray-700">
          {position["primary-title"]}
        </h2>
        <h2 className="font-light text-gray-700">
          {position["secondary-title"]}
        </h2>
      </div>
      <div className="flex space-x-8 pt-4 text-white">
        <div className="flex flex-col space-y-2">
          <a
            href={`tel:${contact.phone["mobile-phone"][1]}`}
            className="h-16 w-16 shadow-md rounded-full bg-primary-0 hover:bg-primary-1 flex items-center justify-center cursor-pointer hover:scale-105 hover:rotate-6 transform transition-all"
          >
            <span className="material-icons text-3xl">phone</span>
          </a>
          <p className="text-gray-600 font-light text-sm text-center">
            {index["btn-1"]}
          </p>
        </div>
        <div className="flex flex-col space-y-2">
          <a
            href={contact.whatsapp}
            className="h-16 w-16 shadow-md rounded-full bg-primary-0 hover:bg-primary-1 flex items-center justify-center cursor-pointer hover:scale-105 hover:rotate-6 transform transition-all"
          >
            <WhatsApp className="h-7 w-7 fill-current" />
          </a>
          <p className="text-gray-600 font-light text-sm text-center">
            {index["btn-2"]}
          </p>
        </div>
        <div className="flex flex-col space-y-2">
          <a
            href={`mailto:${contact.email}`}
            className="h-16 w-16 shadow-md rounded-full bg-primary-0 hover:bg-primary-1 flex items-center justify-center cursor-pointer hover:scale-105 hover:rotate-6 transform transition-all"
          >
            <span className="material-icons text-3xl">mail</span>
          </a>
          <p className="text-gray-600 font-light text-sm text-center">
            {index["btn-3"]}
          </p>
        </div>
      </div>
    </ContentSection>
  );
};

export default Index;
