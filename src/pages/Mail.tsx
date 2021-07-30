import React, { useContext, useEffect } from "react";
import ContentSection from "../components/ContentSection";
import SendEmail from "../components/SendEmail";
import { DataContext, UIContext } from "../components/Pages";

const Mail: React.FC = () => {
  const uiJSON = useContext(UIContext);
  const dataJSON = useContext(DataContext);

  useEffect(() => {
    if (uiJSON !== null && dataJSON !== null) {
      const { name } = dataJSON.personalInformation;
      const { mail } = uiJSON.pages;
      document.title = `${name} - ${mail.h1}`;
    }
  });

  if (uiJSON) {
    const { mail } = uiJSON.pages;
    return (
      <ContentSection
        maxW="max-w-2xl"
        className="flex flex-col space-y-4 items-center justify-center pt-4 px-2 mb-24"
      >
        <h1 className="text-3xl font-semibold text-gray-800">{mail.h1}</h1>
        <div className="flex flex-col items-center justify-center">
          <p className="font-light text-gray-700 text-center">{mail.p}</p>
        </div>
        <SendEmail input={mail.input} />
      </ContentSection>
    );
  }

  return <></>;
};

export default Mail;
