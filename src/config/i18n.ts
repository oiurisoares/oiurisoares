import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import Backend from "i18next-http-backend";
import LanguageDetector from "i18next-browser-languagedetector";

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
        defaultNS: "home",
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
        nonExplicitSupportedLngs: false,
        ns: ["home"],
        supportedLngs: ["en", "pt",],
    });

export default i18n;
