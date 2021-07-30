import React, { useContext, useEffect } from "react";
import ContentSection from "../components/ContentSection";
import { DataContext, UIContext } from "../components/Pages";

const Location: React.FC = () => {
  const uiJSON = useContext(UIContext);
  const dataJSON = useContext(DataContext);

  useEffect(() => {
    if (dataJSON !== null && uiJSON !== null) {
      const { location } = uiJSON.pages;
      const { name } = dataJSON.personalInformation;
      document.title = `${name} - ${location.h1}`;
    }
  });

  if (dataJSON !== null && uiJSON !== null) {
    const { location: userLocation } = dataJSON.personalInformation;
    const { location } = uiJSON.pages;

    return (
      <ContentSection
        maxW="max-w-2xl"
        className="flex flex-col space-y-4 items-center justify-center pt-4 px-2 mb-24"
      >
        <h1 className="text-3xl font-semibold text-gray-800">{location.h1}</h1>
        <div className="flex flex-col items-center justify-center">
          {userLocation.map(
            (
              text:
                | boolean
                | React.ReactChild
                | React.ReactFragment
                | React.ReactPortal
                | null
                | undefined,
              idx: React.Key | null | undefined
            ) => (
              <p className="font-light text-gray-700 text-center" key={idx}>
                {text}
              </p>
            )
          )}
        </div>
        <div className="rounded-lg overflow-hidden w-full bg-gray-300 shadow-xl relative">
          <div className="absolute flex items-center justify-center top-0 bottom-0 right-0 left-0">
            <p className="animate-bounce text-2xl font-semibold">
              {location.loading}
            </p>
          </div>
          <iframe
            src={location["iframe-src"]}
            height="400"
            allowFullScreen
            title="Map"
            className="w-full relative rounded-lg"
            loading="eager"
          ></iframe>
        </div>
      </ContentSection>
    );
  }

  return <></>;
};

export default Location;
