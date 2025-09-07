import { initReactI18next } from "react-i18next";
import i18n from "i18next";
import Backend from "i18next-http-backend";
import FlagBRA from "../assets/img/flag-br.png";
import FlagUSA from "../assets/img/flag-usa.png";
import LanguageDetector from "i18next-browser-languagedetector";

/**
 * Change Application Language
 * --
 * @param lng Language code (e.g., 'en', 'pt')
 */
export const changeLanguage = (lng: string) => {
    i18n.changeLanguage(lng);
    localStorage.setItem("i18nextLng", lng);
};

/**
 * Get Flag Image by Current Language
 * --
 * @returns Flag image URL based on the current language
 */
export const getFlagByLanguage = (): string => {
    const lang = localStorage.getItem("i18nextLng") || "en";
    switch (lang) {
        case "pt": return FlagUSA;
        case "en": default: return FlagBRA;
    }
};

/**
 * i18n Configuration
 * @see https://www.i18next.com/overview/configuration-options
 */

i18n.use(Backend)
    .use(initReactI18next)
    .use(LanguageDetector)
    .init({
        backend: {
            loadPath: "/locales/{{lng}}/{{ns}}.json",
        },
        cache: {
            enabled: true,
            prefix: 'i18next_res_',
            expirationTime: 24 * 60 * 60 * 1000,
            versions: {
                en: "1.0",
                pt: "1.0",
            }
        },
        debug: true,
        defaultNS: "",
        detection: {
            order: [
                "navigator", "querystring", "cookie", "localStorage",
            ],
            caches: [
                "localStorage", "cookie"
            ],
        },
        fallbackLng: "pt",
        interpolation: {
            escapeValue: true,
            formatSeparator: ",",
        },
        keySeparator: ".",
        lng: localStorage.getItem("i18nextLng") || "en",
        nonExplicitSupportedLngs: false,
        ns: [],
        react: { useSuspense: true },
        supportedLngs: ["en", "pt",],
    });

export default i18n;
