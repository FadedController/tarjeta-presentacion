import React, { useContext, useEffect } from "react";
import ContentSection from "../components/ContentSection";
import { DataContext, UIContext } from "../components/Pages";

const Video: React.FC = () => {
  const uiJSON = useContext(UIContext);
  const dataJSON = useContext(DataContext);
  useEffect(() => {
    if (uiJSON !== null && dataJSON !== null) {
      const { name } = dataJSON.personalInformation;
      const { video } = uiJSON.pages;
      document.title = `${name} - ${video.h1}`;
    }
  });
  const videoUrl = `${window.location.origin}/video/video.mp4`;

  if (uiJSON) {
    const { video } = uiJSON.pages;
    return (
      <ContentSection
        maxW="max-w-2xl"
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
  }

  return <></>;
};

export default Video;
