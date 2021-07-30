import React, { useEffect } from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import ContentSection from "../components/ContentSection";
import { DataContext, UIContext } from "../components/Pages";
import { useContext } from "react";
import { Linkedin, Twitter, WhatsApp } from "../icons";

const Share: React.FC = () => {
  const [copied, setCopied] = useState(false);

  const pageUrl = window.location.origin;

  const copyToClipboard = async () => {
    setCopied(true);
    navigator.clipboard.writeText("https://tarjeta-presentacion.vercel.app/");
  };

  const uiJSON = useContext(UIContext);
  const dataJSON = useContext(DataContext);

  useEffect(() => {
    if (uiJSON !== null && dataJSON !== null) {
      const { name } = dataJSON.personalInformation;
      const { share } = uiJSON.pages;
      document.title = `${name} - ${share.h1}`;
    }
  });

  if (uiJSON) {
    const { share } = uiJSON.pages;

    const whatsappString = `whatsapp://send?text=${encodeURI(
      `${share["share-strings"].whatsapp}${pageUrl}`
    )}`;

    const twitterString = `https://twitter.com/intent/tweet?text=${encodeURI(
      share["share-strings"].twitter
    )}&url=${encodeURI(pageUrl)}`;

    const linkedinString = `https://www.linkedin.com/sharing/share-offsite/?url=${pageUrl}`;

    const facebookString = `https://www.facebook.com/sharer.php?u=${pageUrl}`;

    const smsString = `sms:?&body=${encodeURI(
      `${share["share-strings"].sms}${pageUrl}`
    )}`;

    return (
      <ContentSection
        maxW="max-w-2xl"
        className="flex flex-col space-y-4 items-center justify-center pt-4 px-2 mb-24"
      >
        <h1 className="text-3xl font-semibold text-gray-800">{share.h1}</h1>
        <div className="flex flex-col items-center justify-center">
          <p className="font-light text-gray-700 text-center">{share.p}</p>
        </div>
        <div className="w-full grid grid-cols-3 gap-2 px-2">
          <Link
            to="qr-code"
            className="border shadow-md rounded-lg overflow-hidden transform transition-transform hover:scale-105"
          >
            <div className="bg-tertiary-0 flex items-center justify-center h-12">
              <span className="material-icons text-3xl text-white">
                qr_code
              </span>
            </div>
            <div>
              <p className="h-10 flex justify-center items-center">
                {share.buttons["btn-1"]}
              </p>
            </div>
          </Link>
          <Link
            to="vcard"
            className="border shadow-md rounded-lg overflow-hidden transform transition-transform hover:scale-105"
          >
            <div className="bg-tertiary-0 flex items-center justify-center h-12">
              <span className="material-icons text-3xl text-white">
                contact_mail
              </span>
            </div>
            <div>
              <p className="h-10 flex justify-center items-center">
                {share.buttons["btn-4"]}
              </p>
            </div>
          </Link>
          <Link
            to="mail"
            className="border shadow-md rounded-lg overflow-hidden transform transition-transform hover:scale-105"
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
            className="border shadow-md rounded-lg overflow-hidden transform transition-transform hover:scale-105"
          >
            <div className="bg-tertiary-0 flex items-center justify-center h-12">
              <span className="material-icons text-3xl text-white">
                content_copy
              </span>
            </div>
            <div>
              <p className="h-10 flex justify-center items-center">
                {!copied
                  ? share.buttons["btn-3"][0]
                  : share.buttons["btn-3"][1]}
              </p>
            </div>
          </button>
          <a
            href={smsString}
            target="_blank"
            rel="noreferrer"
            className="border shadow-md rounded-lg overflow-hidden transform transition-transform hover:scale-105"
          >
            <div className="bg-tertiary-0 flex items-center justify-center h-12">
              <span className="material-icons text-3xl text-white">sms</span>
            </div>
            <div>
              <p className="h-10 flex justify-center items-center">SMS</p>
            </div>
          </a>
        </div>
        <h2 className="text-2xl font-semibold text-gray-800">{share.h2}</h2>
        <div className="w-full grid grid-cols-3 gap-2 px-2">
          <a
            href={facebookString}
            target="_blank"
            rel="noreferrer"
            className="border shadow-md rounded-lg overflow-hidden transform transition-transform hover:scale-105"
          >
            <div className="bg-facebook flex items-center justify-center h-12">
              <span className="material-icons text-3xl text-white">
                facebook
              </span>
            </div>
            <div>
              <p className="h-10 flex justify-center items-center">Facebook</p>
            </div>
          </a>
          <a
            href={twitterString}
            rel="noreferrer"
            target="_blank"
            className="border shadow-md rounded-lg overflow-hidden transform transition-transform hover:scale-105"
          >
            <div className="bg-twitter flex items-center justify-center h-12">
              <Twitter className="h-6 w-6 fill-current text-white" />
            </div>
            <div>
              <p className="h-10 flex justify-center items-center">Twitter</p>
            </div>
          </a>
          <a
            href={linkedinString}
            rel="noreferrer"
            target="_blank"
            className="border shadow-md rounded-lg overflow-hidden transform transition-transform hover:scale-105"
          >
            <div className="bg-linkedin flex items-center justify-center h-12">
              <Linkedin className="h-6 w-6 fill-current text-white" />
            </div>
            <div>
              <p className="h-10 flex justify-center items-center">Linkedin</p>
            </div>
          </a>

          <a
            rel="noreferrer"
            target="_blank"
            href={whatsappString}
            data-action="share/whatsapp/share"
            className="border shadow-md rounded-lg overflow-hidden transform transition-transform hover:scale-105"
          >
            <div className="bg-whatsapp flex items-center justify-center h-12">
              <WhatsApp className="h-6 w-6 fill-current text-white" />
            </div>
            <div>
              <p className="h-10 flex justify-center items-center">Whatsapp</p>
            </div>
          </a>
        </div>
      </ContentSection>
    );
  }

  return <></>;
};

export default Share;
