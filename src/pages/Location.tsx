import React, { useContext, useEffect } from "react";
import ContentSection from "../components/ContentSection";
import ESData from "../lang/ui.es.json";
import ENData from "../lang/ui.en.json";
import ENUser from "../lang/data.en.json";
import ESUser from "../lang/data.es.json";
import { LanguageContext } from "../components/Pages";

const Location: React.FC = () => {
  const [language] = useContext(LanguageContext);
  const {
    pages: { location },
  } = language === "es" ? ESData : ENData;
  const {
    personalInformation: { location: userLocation, name },
  } = language === "es" ? ESUser : ENUser;

  useEffect(() => {
    document.title = `${name} - ${location.h1}`;
  });

  return (
    <ContentSection
      maxW="max-w-lg"
      className="flex flex-col space-y-4 items-center justify-center pt-4 px-2 mb-24"
    >
      <h1 className="text-3xl font-semibold text-gray-800">{location.h1}</h1>
      <div className="flex flex-col items-center justify-center">
        {userLocation.map((text, idx) => (
          <p className="font-light text-gray-700 text-center" key={idx}>
            {text}
          </p>
        ))}
      </div>
      <div className="rounded-lg overflow-hidden w-full bg-gray-300 shadow-xl relative">
        <div className="absolute flex items-center justify-center top-0 bottom-0 right-0 left-0">
          <p className="animate-bounce text-2xl font-semibold">
            {location.loading}
          </p>
        </div>
        <iframe
          src={location["iframe-src"]}
          height="300"
          allowFullScreen
          title="Map"
          className="w-full relative rounded-lg"
          loading="eager"
        ></iframe>
      </div>
    </ContentSection>
  );
};

export default Location;
