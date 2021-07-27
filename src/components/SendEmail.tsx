import React from "react";
import { init, send } from "emailjs-com";
import { useEffect } from "react";
import { useState } from "react";
import { userId, serviceId, templates } from "../email.config.json";
import { useContext } from "react";
import { LanguageContext } from "./Pages";
import ENUser from "../lang/data.en.json";
import ESUser from "../lang/data.es.json";

interface SendEmailProps {
  input: {
    placeholder: string;
    "btn-1": string;
    loading: string;
  };
}

const SendEmail: React.FC<SendEmailProps> = ({ input }) => {
  const [loading, setLoading] = useState(false);
  const [language] = useContext(LanguageContext);

  const deploymentLink = window.location.origin;
  const template = language === "en" ? templates.en : templates.es;
  const {
    personalInformation: { contact, name, position },
  } = language === "en" ? ENUser : ESUser;

  const defaultParams = {
    user_email: "",
    user_name: name,
    link: deploymentLink,
    first_position: position["primary-title"],
    second_position: position["secondary-title"],
    whatsapp: contact.whatsapp,
    phone: contact.phone["mobile-phone"][1],
    email: contact.email,
    photo_src: `${deploymentLink}/img/profile.jpg`,
  };

  useEffect(() => {
    init(userId);
  });

  const [params, setParams] = useState<any>(defaultParams);

  const sendEmail = () => {
    if (!params.user_email || !params.user_email.includes("@")) return;
    setLoading(true);
    send(serviceId, template, params)
      .then(() => {
        setParams({ ...params, user_email: "" });
        setLoading(false);
      })
      .catch((e) => {
        setLoading(false);
        console.error(e);
      });
  };

  return (
    <div className="w-full flex flex-col space-y-6">
      <div className="flex w-full">
        <input
          className="w-4/5 py-2 px-4 border border-tertiary-0"
          value={params.user_email}
          type="email"
          onChange={({ target }) => {
            setParams({ ...params, user_email: target.value });
          }}
          placeholder={input.placeholder}
        />
        <button
          className="w-1/5 bg-tertiary-0 text-white font-semibold"
          onClick={sendEmail}
        >
          {input["btn-1"]}
        </button>
      </div>
      {loading && (
        <div className="flex items-center justify-center">
          <p className="animate-bounce text-xl font-semibold text-secondary-0">
            {input.loading}
          </p>
        </div>
      )}
    </div>
  );
};

export default SendEmail;
