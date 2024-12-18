import i18n from "i18next";
import { initReactI18next } from "react-i18next";

const resources = {
  en: {
    translation: {
      welcome: "Welcome to Carpool",
      news: "Latest News",
      rightsReserved: "© 2024 All rights reserved.",
      facebook: "Facebook",
      twitter: "X",
      instagram: "Instagram",
      linkedin: "LinkedIn",
      
    },
  },
  sv: {
    translation: {
      welcome: "Välkommen till Samåkning",
      news: "Senaste Nyheter",
      rightsReserved: "© 2024 Alla rättigheter förbehålls.",
      facebook: "Facebook",
      twitter: "X",
      instagram: "Instagram",
      linkedin: "LinkedIn",
    },
  },
};

i18n
  .use(initReactI18next)
  .init({
    resources,
    lng: "en", // Default language
    fallbackLng: "en",
    interpolation: {
      escapeValue: false,
    },
  });

export default i18n;
