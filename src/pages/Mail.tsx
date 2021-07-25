import React, { useContext } from "react";
import ContentSection from "../components/ContentSection";
import SendEmail from "../components/SendEmail";
import ESData from "../lang/ui.es.json";
import ENData from "../lang/ui.en.json";
import { LanguageContext } from "../components/Pages";

const Mail: React.FC = () => {
  const [language] = useContext(LanguageContext);
  const {
    pages: { mail },
  } = language === "es" ? ESData : ENData;
  return (
    <ContentSection
      maxW="max-w-lg"
      className="flex flex-col space-y-4 items-center justify-center pt-4 px-2"
    >
      <h1 className="text-3xl font-semibold text-gray-800">{mail.h1}</h1>
      <div className="flex flex-col items-center justify-center">
        <p className="font-light text-gray-700 text-center">{mail.p}</p>
      </div>
      <SendEmail input={mail.input} />
    </ContentSection>
  );
};

export default Mail;
