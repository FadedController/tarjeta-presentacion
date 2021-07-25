import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import ESData from "../lang/ui.es.json";
import ENData from "../lang/ui.en.json";
import ContentSection from "../components/ContentSection";
import { LanguageContext } from "../components/Pages";
import { useContext } from "react";

const Share: React.FC = () => {
  const [copied, setCopied] = useState(false);
  const copyToClipboard = async () => {
    setCopied(true);
    navigator.clipboard.writeText("https://tarjeta-presentacion.vercel.app/");
  };

  const [language] = useContext(LanguageContext);
  const {
    pages: { share },
  } = language === "es" ? ESData : ENData;

  return (
    <ContentSection
      maxW="max-w-lg"
      className="flex flex-col space-y-4 items-center justify-center pt-4 px-2"
    >
      <h1 className="text-3xl font-semibold text-gray-800">{share.h1}</h1>
      <div className="flex flex-col items-center justify-center">
        <p className="font-light text-gray-700 text-center">{share.p}</p>
      </div>
      <div className="w-full grid grid-cols-3 gap-2 px-2">
        <Link
          to="qr-code"
          className="border shadow-md rounded-sm overflow-hidden transform transition-transform hover:scale-105"
        >
          <div className="bg-tertiary-0 flex items-center justify-center h-12">
            <span className="material-icons text-3xl text-white">qr_code</span>
          </div>
          <div>
            <p className="h-10 flex justify-center items-center">
              {share.buttons["btn-1"]}
            </p>
          </div>
        </Link>
        <Link
          to="mail"
          className="border shadow-md rounded-sm overflow-hidden transform transition-transform hover:scale-105"
        >
          <div className="bg-tertiary-0 flex items-center justify-center h-12">
            <span className="material-icons text-3xl text-white">mail</span>
          </div>
          <div>
            <p className="h-10 flex justify-center items-center">
              {share.buttons["btn-2"]}
            </p>
          </div>
        </Link>
        <button
          onClick={copyToClipboard}
          className="border shadow-md rounded-sm overflow-hidden transform transition-transform hover:scale-105"
        >
          <div className="bg-tertiary-0 flex items-center justify-center h-12">
            <span className="material-icons text-3xl text-white">
              content_copy
            </span>
          </div>
          <div>
            <p className="h-10 flex justify-center items-center">
              {!copied ? share.buttons["btn-3"][0] : share.buttons["btn-3"][1]}
            </p>
          </div>
        </button>
      </div>
    </ContentSection>
  );
};

export default Share;
