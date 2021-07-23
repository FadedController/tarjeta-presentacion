import React from "react";

const Index: React.FC = () => {
  return (
    <div className="flex flex-col space-y-3 items-center pt-4">
      <h1 className="text-3xl font-semibold text-gray-800">John Doe</h1>
      <div className="flex flex-col items-center">
        <h2 className="font-light text-gray-700">Sales Manager</h2>
        <h2 className="font-light text-gray-700">
          Smart business representation
        </h2>
      </div>
      <div className="flex space-x-8 pt-4 text-white">
        <div className="flex flex-col space-y-2">
          <a
            href="tel:+3321752871"
            className="h-16 w-16 rounded-full bg-red-400 flex items-center justify-center cursor-pointer hover:scale-105 hover:rotate-6 transform transition-transform"
          >
            <span className="material-icons text-3xl">phone</span>
          </a>
          <p className="text-gray-500 font-light text-sm text-center">Llamar</p>
        </div>
        <div className="flex flex-col space-y-2">
          <a
            href="https://web.whatsapp.com"
            className="h-16 w-16 rounded-full bg-red-400 flex items-center justify-center cursor-pointer hover:scale-105 hover:rotate-6 transform transition-transform"
          >
            <span className="material-icons text-3xl">message</span>
          </a>
          <p className="text-gray-500 font-light text-sm text-center">
            Whatsapp
          </p>
        </div>
        <div className="flex flex-col space-y-2">
          <a
            href="mailto:adpadillar25@gmail.com"
            className="h-16 w-16 rounded-full bg-red-400 flex items-center justify-center cursor-pointer hover:scale-105 hover:rotate-6 transform transition-transform"
          >
            <span className="material-icons text-3xl">mail</span>
          </a>
          <p className="text-gray-500 font-light text-sm text-center">E-mail</p>
        </div>
      </div>
    </div>
  );
};

export default Index;
