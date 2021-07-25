import React, { useEffect } from "react";
import { Switch, Route, BrowserRouter as Router } from "react-router-dom";
import Index from "../pages/Index";
import Share from "../pages/Share";
import Header from "./Header";
import { AnimatedSwitch } from "react-router-transition";
import Navigation from "./Navigation";
import Qrcode from "../pages/Qrcode";
import Location from "../pages/Location";
import Contact from "../pages/Contact";
import Video from "../pages/Video";
import Posts from "../pages/Posts";
import Mail from "../pages/Mail";
import { createContext } from "react";
import { useState } from "react";

export const LanguageContext = createContext<
  ["es" | "en", React.Dispatch<React.SetStateAction<"es" | "en">>] | [null]
>([null]);

const Pages: React.FC = () => {
  const [language, setLanguage] = useState<"es" | "en">("en");

  useEffect(() => {
    var language = window.navigator.language;
    if (language.includes("es")) {
      setLanguage("es");
    }
  }, []);

  return (
    <LanguageContext.Provider value={[language, setLanguage]}>
      <Router>
        <Header />
        <Switch>
          <AnimatedSwitch
            atEnter={{ opacity: 0 }}
            atLeave={{ opacity: 0 }}
            atActive={{ opacity: 1 }}
            className="switch-wrapper"
          >
            <Route path="/share" component={Share} />
            <Route path="/qr-code" component={Qrcode} />
            <Route path="/location" component={Location} />
            <Route path="/contact" component={Contact} />
            <Route path="/video" component={Video} />
            <Route path="/about" component={Posts} />
            <Route path="/mail" component={Mail} />
            <Route exact path="/" component={Index} />
            <Route path="*">Not Found</Route>
          </AnimatedSwitch>
        </Switch>
        <Navigation />
      </Router>
    </LanguageContext.Provider>
  );
};

export default Pages;
