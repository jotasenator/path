import { useTranslation } from "react-i18next";

const ButtonI18n = ( { flagIcon, iso639_1 } ) => {
    const { i18n } = useTranslation( "global" );

    const handleAction = () => {
        i18n.changeLanguage( iso639_1 );
        localStorage.setItem( 'language', iso639_1 );
    };
    return (
        <button type="button" onClick={ handleAction } >
            { flagIcon }
        </button>
    );
};

export default ButtonI18n;
