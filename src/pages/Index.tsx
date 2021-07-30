import React, { useEffect } from "react";
import ContentSection from "../components/ContentSection";
import { WhatsApp } from "../icons";
import { useContext } from "react";
import { DataContext, LanguageContext, UIContext } from "../components/Pages";

const Index: React.FC = () => {
  const [language] = useContext(LanguageContext);
  const uiJSON = useContext(UIContext);
  const dataJSON = useContext(DataContext);

  useEffect(() => {
    if (dataJSON) {
      const { name } = dataJSON.personalInformation;
      document.title = `${name} - ${language === "en" ? "Home" : "Inicio"}`;
    }
  });

  if (dataJSON !== null && uiJSON !== null) {
    const { index } = uiJSON.pages;
    const { contact, name, position } = dataJSON.personalInformation;

    return (
      <ContentSection
        maxW="max-w-2xl"
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
  }

  return <></>;
};

export default Index;
