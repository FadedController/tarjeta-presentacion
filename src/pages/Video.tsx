import React, { useContext, useEffect } from "react";
import ContentSection from "../components/ContentSection";
import ESData from "../lang/ui.es.json";
import ENData from "../lang/ui.en.json";
import ENUser from "../lang/data.en.json";
import ESUser from "../lang/data.es.json";
import { LanguageContext } from "../components/Pages";

const Video: React.FC = () => {
  const [language] = useContext(LanguageContext);
  const {
    pages: { video },
  } = language === "es" ? ESData : ENData;
  const {
    personalInformation: { name },
  } = language === "es" ? ESUser : ENUser;
  useEffect(() => {
    document.title = `${name} - ${video.h1}`;
  });
  const videoUrl = `${window.location.origin}/video/video.mp4`;

  return (
    <ContentSection
      maxW="max-w-lg"
      className="flex flex-col space-y-4 items-center justify-center pt-4 px-2 mb-24"
    >
      <h1 className="text-3xl font-semibold text-gray-800">{video.h1}</h1>
      <div className="flex flex-col space-y-4 items-center justify-center">
        <p className="font-light text-gray-700 text-center">{video.p}</p>
        <video className="w-full rounded-lg" height="300" controls>
          <source src={videoUrl} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>
    </ContentSection>
  );
};

export default Video;
