import React, { useContext, useEffect } from "react";
import ContentSection from "../components/ContentSection";
import { DataContext, UIContext } from "../components/Pages";

const Qrcode: React.FC = () => {
  const uiJSON = useContext(UIContext);
  const dataJSON = useContext(DataContext);

  useEffect(() => {
    if (uiJSON !== null && dataJSON !== null) {
      const { qrcode } = uiJSON.pages;
      const { name } = dataJSON.personalInformation;
      document.title = `${name} - ${qrcode.h1}`;
    }
  });

  if (uiJSON !== null) {
    const { qrcode } = uiJSON.pages;
    return (
      <ContentSection
        maxW="max-w-2xl"
        className="flex flex-col space-y-6 items-center justify-center pt-4 px-2 mb-24"
      >
        <h1 className="text-3xl font-semibold text-gray-800">{qrcode.h1}</h1>
        <div className="flex flex-col items-center justify-center">
          <p className="font-light text-gray-700 text-center">{qrcode.p}</p>
          <img src="img/qr_code.png" alt="QR code" />
        </div>
      </ContentSection>
    );
  }

  return <></>;
};

export default Qrcode;
