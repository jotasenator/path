import { I18nextProvider } from "react-i18next";
import i18next from "i18next";
import global_es from "./es/global.json";
import global_en from "./en/global.json";
import global_pt from "./pt/global.json";


i18next.init( {
    interpolation: { escapeValue: false },
    lng: "en",
    resources: {
        //iso 639-1
        es: {
            global: global_es,
        },
        en: {
            global: global_en,
        },
        pt: {
            global: global_pt,
        },
    },
} );

const I18nCustomProvider = ( { children } ) => {
    return <I18nextProvider i18n={ i18next }>{ children }</I18nextProvider>;
};

export default I18nCustomProvider






