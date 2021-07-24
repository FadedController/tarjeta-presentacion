import React from "react";
import { init, send } from "emailjs-com";
import { useEffect } from "react";

const SendEmail: React.FC = () => {
  useEffect(() => {
    init("user_ODoJ10S57aCFQ44Y6KbSo");
  });

  const sendEmail = () => {
    console.log("email fx");
    send("default_service", "template_ui1sjix", {
      user_email: "adpadillar25@gmail.com",
    })
      .then((e) => console.log(e))
      .catch((e) => console.error(e));
  };

  return (
    <div>
      <h1 onClick={sendEmail}>Send Email</h1>
    </div>
  );
};

export default SendEmail;
