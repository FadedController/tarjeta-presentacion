import React from "react";
import { init, send } from "emailjs-com";
import { useEffect } from "react";
import { useState } from "react";

interface SendEmailProps {
  input: {
    placeholder: string;
    "btn-1": string;
    loading: string;
  };
}

const SendEmail: React.FC<SendEmailProps> = ({ input }) => {
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    init("user_ODoJ10S57aCFQ44Y6KbSo");
  });

  const [params, setParams] = useState<any>({
    user_email: "",
    user_name: "John Doe",
    link: "https://tarjeta-presentacion.vercel.app/",
    first_position: "Sales manager",
    second_position: "Smart business representation",
    whatsapp: "https://web.whatsapp.com",
    phone: "331254568",
    email: "test@dev.com",
    photo_src:
      "https://d3cwdr4mx7w8ca.cloudfront.net/imgcdn/20210107132157/card/p1109photo.jpg",
  });

  const sendEmail = () => {
    if (!params.user_email || !params.user_email.includes("@")) return;
    setLoading(true);
    send("service_kpxst2l", "template_mfyymzi", params)
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
