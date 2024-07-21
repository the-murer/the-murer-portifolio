import React, { useContext, useEffect, useRef, useState } from "react";
import { FlipWords } from "./components/words";
import NavBar from "./components/navbar";
import i18n from "i18next";
import { useTranslation, initReactI18next } from "react-i18next";
import GLOBE from "vanta/dist/vanta.globe.min.js";
import * as THREE from "three";

import * as resources from "./assets/translations.json"
import { ThemeContext } from "./context/theme_context";

i18n.use(initReactI18next).init({ resources, lng: "en", fallbackLng: "en", interpolation: { escapeValue: false } });

function App() {
  const { t, i18n } = useTranslation();
  const [ defaultLanguage, setLanguage ] = useState("en");
  const { darkTheme } = useContext(ThemeContext);
  const words = ["DESENVOLVEDOR FULLSTACK", "DESENVOLVEDOR MOBILE", "DESENVOLVEDOR AI"];

  const [vantaEffect, setVantaEffect] = useState(0);
  const vantaRef = useRef(null);
  
  useEffect(() => {
    if (vantaEffect) {
      vantaEffect.destroy();
    }
    setVantaEffect(
      GLOBE({
        el: vantaRef.current,
        THREE,
        mouseControls: true,
        touchControls: true,
        gyroControls: true,
        backgroundColor: darkTheme ? 0x000000 : 0x9c91ff,
        color: 'white',
        color2: 'white',
        minHeight: 200.00,
        minWidth: 200.00,
        scale: 1.00,
        scaleMobile: 1.00
      })
    );
  }, [darkTheme]);
  
  useEffect(() => {
    const language = localStorage.getItem("language") || "en";
    i18n.changeLanguage(language);
    setLanguage(language);
  }, [])

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
  };

  return (
    <div  className={darkTheme ? 'dark-theme' : 'light-theme'}>
      <NavBar t={t} changeLanguage={changeLanguage} defaultLanguage={defaultLanguage} />
      
      <div class="container">
        <div className="top-component"><FlipWords t={t} words={words} /></div>
        <div className="bottom-component">
          <main style={{ padding: '10rem 0', height: '100vh' }} ref={vantaRef}></main>
        </div>

      </div>
    </div>
  );
}

export default App