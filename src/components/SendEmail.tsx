import React from "react";
import { init } from "emailjs-com";
import { useEffect } from "react";

const SendEmail: React.FC = () => {
  useEffect(() => {
    init("user_ODoJ10S57aCFQ44Y6KbSo");
  });

  // const sendEmail = () => {
  //   send("service_kpxst2l", "template_mfyymzi", {
  //     user_email: "adpadillar25@gmail.com",
  //     user_name: "Axel Padilla",
  //     link: "https://tarjeta-presentacion.vercel.app/",
  //     first_position: "Sales manager",
  //     second_position: "Smart business representation",
  //     whatsapp: "https://web.whatsapp.com",
  //     phone: "331254568",
  //     email: "test@dev.com",
  //     photo_src:
  //       "https://d3cwdr4mx7w8ca.cloudfront.net/imgcdn/20210107132157/card/p1109photo.jpg",
  //   })
  //     .then((e) => console.log(e))
  //     .catch((e) => console.error(e));
  // };

  return <div></div>;
};

export default SendEmail;
