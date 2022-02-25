import i18n from "i18next";
import Backend from "i18next-http-backend";
import LanguageDetector from "i18next-browser-languagedetector";
import { initReactI18next } from "react-i18next";
import { en, tr } from "./locales";

const options = {
  resources: {
    en: {
      translations: en.en,
    },
    tr: {
      translations: tr.tr,
    },
  },
  ns: ["translations"],
  defaultNS: "translations",
  keySeparator: ".",
  fallbackLng: "en",
  lng: ["en", "tr"],
  interpolation: {
    escapeValue: false,
  },
};

i18n.use(Backend).use(LanguageDetector).use(initReactI18next).init(options);

export default i18n;
