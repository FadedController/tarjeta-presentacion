import React from "react";
import ContentSection from "../components/ContentSection";

const Location: React.FC = () => {
  return (
    <ContentSection
      maxW="max-w-lg"
      className="flex flex-col space-y-4 items-center justify-center pt-4 px-2 mb-24"
    >
      <h1 className="text-3xl font-semibold text-gray-800">Ubicacion</h1>
      <div className="flex flex-col items-center justify-center">
        <p className="font-light text-gray-700 text-center">Eiffel Tower</p>
        <p className="font-light text-gray-700 text-center">Paris</p>
        <p className="font-light text-gray-700 text-center">France</p>
      </div>
      <div className="rounded-md overflow-hidden w-full bg-gray-200 shadow-xl relative">
        <div className="absolute flex items-center justify-center top-0 bottom-0 right-0 left-0">
          <p className="animate-bounce text-2xl font-semibold">
            Loading map...
          </p>
        </div>
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d21001.792634182162!2d2.2825966!3d48.8539373!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47e6701f7e8337b5%3A0xa2cb58dd28914524!2sEiffel%20Tower%2C%20Paris%2C%20France!5e0!3m2!1sen!2smx!4v1627149365887!5m2!1sen!2smx"
          height="300"
          allowFullScreen
          title="Map"
          className="w-full relative"
          loading="eager"
        ></iframe>
      </div>
    </ContentSection>
  );
};

export default Location;
