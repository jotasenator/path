import { I18nextProvider } from "react-i18next";
import i18next from "i18next";

import global_es from "./es/global.json";
import global_en from "./en/global.json";
import global_pt from "./pt/global.json";
import global_de from "./de/global.json";

const browserLanguage = navigator.language.split( '-' )[ 0 ];


i18next
    .init( {
        interpolation: { escapeValue: false },
        lng: localStorage.getItem( 'language' ) || browserLanguage,
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
            de: {
                global: global_de,
            },
        },
        fallbackLng: 'en'

    } );

const I18nCustomProvider = ( { children } ) => {
    return <I18nextProvider i18n={ i18next }>{ children }</I18nextProvider>;
};

export default I18nCustomProvider






