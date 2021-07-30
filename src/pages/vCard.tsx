import React, { useContext, useEffect } from "react";
import ContentSection from "../components/ContentSection";
import { DataContext, UIContext } from "../components/Pages";

// https://www.qr-code-generator.com/solutions/vcard-qr-code/
// https://vcardmaker.com/

const VCard: React.FC = () => {
  const uiJSON = useContext(UIContext);
  const dataJSON = useContext(DataContext);
  const pageUrl = window.location.origin;

  const downloadVcard = () => {
    const a = document.createElement("a");
    a.href = `${pageUrl}/vcard.vcf`;
    console.log(a.href);
    a.setAttribute("download", "vcard.vcf");
    a.click();
  };

  useEffect(() => {
    if (dataJSON !== null && uiJSON !== null) {
      const { name } = dataJSON.personalInformation;
      const { vcard } = uiJSON.pages;
      document.title = `${name} - ${vcard.h1}`;
    }
  });

  if (uiJSON) {
    const { vcard } = uiJSON.pages;

    return (
      <ContentSection
        maxW="max-w-2xl"
        className="flex flex-col space-y-6 items-center justify-center pt-4 px-2 mb-24"
      >
        <h1 className="text-3xl font-semibold text-gray-800">{vcard.h1}</h1>
        <div className="flex flex-col items-center justify-center">
          <p className="font-light text-gray-700 text-center">{vcard.p}</p>
          <img src="img/vcard.png" alt="QR code" onClick={downloadVcard} />
        </div>
      </ContentSection>
    );
  }
  return <></>;
};

export default VCard;
