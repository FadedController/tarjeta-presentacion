import React from "react";
import ContentSection from "../components/ContentSection";

const Video: React.FC = () => {
  return (
    <ContentSection
      maxW="max-w-lg"
      className="flex flex-col space-y-4 items-center justify-center pt-4 px-2"
    >
      <h1 className="text-3xl font-semibold text-gray-800">Video</h1>
      <div className="flex flex-col items-center justify-center">
        <p className="font-light text-gray-700 text-center">
          Dale un vistazo a este video.
        </p>
      </div>
    </ContentSection>
  );
};

export default Video;
