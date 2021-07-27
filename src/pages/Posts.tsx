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
    personalInformation: { name },
  } = language === "es" ? ESUser : ENUser;
  useEffect(() => {
    document.title = `${name} - ${posts.h1}`;
  });
  return (
    <ContentSection
      maxW="max-w-lg"
      className="flex flex-col space-y-4 items-center justify-center pt-4 px-2"
    >
      <h1 className="text-3xl font-semibold text-gray-800">{posts.h1}</h1>
      <div className="flex flex-col items-center justify-center">
        <p className="font-light text-gray-700 text-center">{posts.p}</p>
      </div>
    </ContentSection>
  );
};

export default Posts;
