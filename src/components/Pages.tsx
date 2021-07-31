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
import VCard from "../pages/vCard";
import axios from "axios";

type Language = "es" | "en";

export const LanguageContext = createContext<
  | [Language, React.Dispatch<React.SetStateAction<Language>>]
  | [null, () => void]
>([null, () => {}]);

export const DataContext = createContext<any>(null);
export const UIContext = createContext<any>(null);

const Pages: React.FC = () => {
  const [language, setLanguage] = useState<Language>("en");
  const [dataJSON, setDataJSON] = useState(null);
  const [uiJSON, setUiJSON] = useState(null);

  useEffect(() => {
    const pageUrl = window.location.origin;
    const dataFilename = language === "en" ? "data.en.json" : "data.es.json";
    const uiFilename = language === "en" ? "ui.en.json" : "ui.es.json";
    axios.get(`${pageUrl}/build/data/${dataFilename}`).then((dataRes) => {
      setDataJSON(dataRes.data);
    });
    axios.get(`${pageUrl}/build/data/${uiFilename}`).then((uiRes) => {
      setUiJSON(uiRes.data);
    });
  }, [language]);

  useEffect(() => {
    var language = window.navigator.language;
    if (language.includes("es")) {
      setLanguage("es");
    }
  }, []);

  return (
    <UIContext.Provider value={uiJSON}>
      <DataContext.Provider value={dataJSON}>
        <LanguageContext.Provider value={[language, setLanguage]}>
          <Router>
            <Header />
            <Switch>
              <Route path="/build/">
                <Switch>
                  <AnimatedSwitch
                    atEnter={{ opacity: 0 }}
                    atLeave={{ opacity: 0 }}
                    atActive={{ opacity: 1 }}
                    className="switch-wrapper"
                  >
                    <Route path="/build/share" component={Share} />
                    <Route path="/build/qr-code" component={Qrcode} />
                    <Route path="/build/location" component={Location} />
                    <Route path="/build/contact" component={Contact} />
                    <Route path="/build/video" component={Video} />
                    <Route path="/build/about" component={Posts} />
                    <Route path="/build/mail" component={Mail} />
                    <Route path="/build/vcard" component={VCard} />
                    <Route exact path="/build/" component={Index} />
                    <Route path="*">
                      {language === "en"
                        ? "This page could not be found"
                        : "No pudimos encontrar esta pagina"}
                    </Route>
                  </AnimatedSwitch>
                </Switch>
              </Route>
            </Switch>
            <Navigation />
          </Router>
        </LanguageContext.Provider>
      </DataContext.Provider>
    </UIContext.Provider>
  );
};

export default Pages;
