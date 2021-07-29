import React, { useContext, useEffect } from "react";
import ContentSection from "../components/ContentSection";
import { LanguageContext } from "../components/Pages";
import ESData from "../lang/ui.es.json";
import ENData from "../lang/ui.en.json";
import ENUser from "../lang/data.en.json";
import ESUser from "../lang/data.es.json";

const Posts: React.FC = () => {
  const [language] = useContext(LanguageContext);
  const {
    pages: { posts },
  } = language === "es" ? ESData : ENData;
  const {
    personalInformation: { name, about },
  } = language === "es" ? ESUser : ENUser;
  useEffect(() => {
    document.title = `${name} - ${posts.h1}`;
  });
  return (
    <ContentSection
      maxW="max-w-2xl"
      className="flex flex-col space-y-4 items-center justify-center pt-4 px-2 mb-24"
    >
      <h1 className="text-3xl font-semibold text-gray-800">{posts.h1}</h1>
      <div className="flex flex-col items-center justify-center">
        <p className="font-light text-gray-700 text-center">{posts.p}</p>
      </div>
      <div className="flex flex-col space-y-6">
        {about.cards.map((card, idx) => {
          return (
            <div
              key={idx}
              className="bg-gray-200 rounded-lg shadow-lg flex flex-col sm:flex-row overflow-hidden transform transition-transform hover:scale-105"
            >
              <img
                src={card["img-src"]}
                className="w-full opacity-80"
                alt={card.title}
              ></img>
              <div
                style={{ flexFlow: "row wrap" }}
                className="flex flex-col justify-start space-y-2 p-4"
              >
                <h3 className="text-2xl font-semibold text-gray-800">
                  {card.title}
                </h3>
                <p>{card.description}</p>
                <a
                  rel="noreferrer"
                  href={card.cta[1]}
                  target="_blank"
                  className="px-3 py-2 font-semibold text-gray-50 text-lg bg-secondary-0 transition-opacity hover:opacity-90 cursor-pointer opacity-70 rounded-lg"
                >
                  {card.cta[0]}
                </a>
              </div>
            </div>
          );
        })}
      </div>
    </ContentSection>
  );
};

export default Posts;
