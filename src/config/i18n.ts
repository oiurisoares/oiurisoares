import { initReactI18next } from "react-i18next";
import i18n from "i18next";
import Backend from "i18next-http-backend";
import FlagBRA from "../assets/img/flag-br.png";
import FlagUSA from "../assets/img/flag-usa.png";
import LanguageDetector from "i18next-browser-languagedetector";

export const changeLanguage = (lng: string) => {
    i18n.changeLanguage(lng);
    localStorage.setItem("i18nextLng", lng);
};

export const getFlagByLanguage = (): string => {
    const lang = localStorage.getItem("i18nextLng") || "en";
    switch (lang) {
        case "pt": return FlagUSA;
        case "en": default: return FlagBRA;
    }
};

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
        defaultNS: "base-layout",
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
        ns: [
            "base-layout",
            "footer",
            "landing-page",
        ],
        react: { useSuspense: true },
        supportedLngs: ["en", "pt",],
    });

export default i18n;
