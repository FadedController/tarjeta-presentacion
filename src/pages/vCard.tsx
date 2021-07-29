import React, { useContext, useEffect } from "react";
import ContentSection from "../components/ContentSection";
import ESData from "../lang/ui.es.json";
import ENData from "../lang/ui.en.json";
import ENUser from "../lang/data.en.json";
import ESUser from "../lang/data.es.json";
import { LanguageContext } from "../components/Pages";

// https://www.qr-code-generator.com/solutions/vcard-qr-code/
// https://vcardmaker.com/

const VCard: React.FC = () => {
  const [language] = useContext(LanguageContext);
  const pageUrl = window.location.origin;
  const {
    pages: { vcard },
  } = language === "es" ? ESData : ENData;
  const {
    personalInformation: { name },
  } = language === "es" ? ESUser : ENUser;

  const downloadVcard = () => {
    const a = document.createElement("a");
    a.href = `${pageUrl}/vcard.vcf`;
    console.log(a.href);
    a.setAttribute("download", "vcard.vcf");
    a.click();
  };

  useEffect(() => {
    document.title = `${name} - ${vcard.h1}`;
  });
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
};

export default VCard;
