import React, { useContext } from "react";
import ESData from "../lang/ui.es.json";
import ENData from "../lang/ui.en.json";
import ContentSection from "../components/ContentSection";
import { LanguageContext } from "../components/Pages";
import { WhatsApp } from "../icons";
import ENUser from "../lang/data.en.json";
import ESUser from "../lang/data.es.json";

const Contact: React.FC = () => {
  const [language] = useContext(LanguageContext);
  const {
    pages: { contact },
  } = language === "es" ? ESData : ENData;
  const {
    personalInformation: { contact: userContact },
  } = language === "es" ? ESUser : ENUser;

  return (
    <ContentSection
      maxW="max-w-lg"
      className="flex flex-col space-y-4 items-center justify-center pt-4 px-2 mb-24"
    >
      <h1 className="text-3xl font-semibold text-gray-800">{contact.h1}</h1>
      <div className="flex flex-col items-center justify-center">
        <p className="font-light text-gray-700 text-center">{contact.p}</p>
      </div>
      <div className="w-full items-center justify-center flex flex-col space-y-4">
        <div className="flex w-full items-center justify-center flex-col space-y-1 font-light text-lg">
          <h2 className="text-xl font-semibold text-gray-800">
            {contact["phone-1"].title}
          </h2>
          <p className="font-light text-gray-700 text-center">
            {userContact.phone["central-phone"][0]}
          </p>
        </div>
        <div className="grid grid-cols-3 gap-2 w-full">
          <a
            className="flex shadow-md rounded-lg py-2 text-white flex-col items-center justify-center space-y-2 bg-secondary-0 opacity-80 transform hover:scale-105 transition-all"
            href={`tel:${userContact.phone["central-phone"][1]}`}
          >
            <span className="material-icons">phone</span>
            <span>{contact["phone-1"]["btn-1"]}</span>
          </a>
        </div>
        <div className="flex w-full items-center justify-center flex-col space-y-1 font-light text-lg">
          <h2 className="text-xl font-semibold text-gray-800">
            {contact["phone-2"].title}
          </h2>
          <p className="font-light text-gray-700 text-center">
            {userContact.phone["mobile-phone"][0]}
          </p>
        </div>
        <div className="grid grid-cols-3 gap-2 w-full">
          <a
            className="flex shadow-md rounded-lg py-2 text-white flex-col items-center justify-center space-y-2 bg-secondary-0 opacity-80 transform hover:scale-105 transition-all"
            href={`tel:${userContact.phone["mobile-phone"][1]}`}
          >
            <span className="material-icons">phone</span>
            <span>{contact["phone-2"]["btn-1"]}</span>
          </a>
          <a
            className="flex shadow-md rounded-lg py-2 text-white flex-col items-center justify-center space-y-2 bg-secondary-0 opacity-80 transform hover:scale-105 transition-all"
            href={userContact.whatsapp}
          >
            <WhatsApp className="h-6 w-6 fill-current" />
            <span>{contact["phone-2"]["btn-2"]}</span>
          </a>
          <a
            className="flex shadow-md rounded-lg py-2 text-white flex-col items-center justify-center space-y-2 bg-secondary-0 opacity-80 transform hover:scale-105 transition-all"
            href={`sms:${userContact.phone["mobile-phone"][1]}`}
          >
            <span className="material-icons">sms</span>
            <span>{contact["phone-2"]["btn-3"]}</span>
          </a>
        </div>
        <div className="flex w-full items-center justify-center flex-col space-y-1 font-light text-lg">
          <h2 className="text-xl font-semibold text-gray-800">
            {contact.email.title}
          </h2>
          <p className="font-light text-gray-700 text-center">
            {userContact.email}
          </p>
        </div>
        <div className="grid grid-cols-3 gap-2 w-full">
          <a
            className="flex shadow-md rounded-lg py-2 text-white flex-col items-center justify-center space-y-2 bg-secondary-0 opacity-80 transform hover:scale-105 transition-all"
            href={`mailto:${userContact.email}`}
          >
            <span className="material-icons">mail</span>
            <span>{contact.email["btn-1"]}</span>
          </a>
        </div>
      </div>
    </ContentSection>
  );
};

export default Contact;
