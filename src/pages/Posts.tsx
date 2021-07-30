import React, { useContext, useEffect } from "react";
import ContentSection from "../components/ContentSection";
import { DataContext, UIContext } from "../components/Pages";

const Posts: React.FC = () => {
  const uiJSON = useContext(UIContext);
  const dataJSON = useContext(DataContext);

  useEffect(() => {
    if (uiJSON !== null && dataJSON !== null) {
      const { posts } = uiJSON.pages;
      const { name } = dataJSON.personalInformation;
      document.title = `${name} - ${posts.h1}`;
    }
  });

  if (uiJSON !== null && dataJSON !== null) {
    const { posts } = uiJSON.pages;
    const { about } = dataJSON.personalInformation;
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
          {about.cards.map(
            (
              card: {
                "img-src": string;
                title: string;
                description: string;
                cta: [string, string];
              },
              idx: number
            ) => {
              return (
                <div
                  key={idx}
                  className="bg-gray-200 rounded-lg mx-4 shadow-lg flex flex-col sm:flex-row overflow-hidden transform transition-transform hover:scale-95"
                >
                  <div className="flex w-full sm:w-2/6">
                    <img
                      src={card["img-src"]}
                      className="w-full opacity-80"
                      alt={card.title}
                    ></img>
                  </div>
                  <div className="flex flex-1 flex-col justify-start space-y-4 p-4">
                    <h3 className="text-2xl font-semibold text-gray-800">
                      {card.title}
                    </h3>
                    <p>{card.description}</p>
                    <div className="flex h-full flex-col items-start justify-end">
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
                </div>
              );
            }
          )}
        </div>
      </ContentSection>
    );
  }
  return <></>;
};

export default Posts;
