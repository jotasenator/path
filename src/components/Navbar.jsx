import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { navLinks } from "../constants";
import { menu, close, jotasLogo } from "../assets";
import { styles } from "../styles";

import { useTranslation } from "react-i18next";
import { ButtonI18n } from "./Buttons";

const Navbar = () => {
  const [ active, setActive ] = useState( "" );
  const [ toggle, setToggle ] = useState( false );
  const [ scrolled, setScrolled ] = useState( false );

  const { t } = useTranslation( "global" );

  useEffect( () => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      if ( scrollTop > 100 )
      {
        setScrolled( true );
      } else
      {
        setScrolled( false );
      }
    };

    window.addEventListener( "scroll", handleScroll );

    return () => window.removeEventListener( "scroll", handleScroll );
  }, [] );


  return (
    <nav
      className={ `${ styles.paddingX
        } w-full flex items-center py-5 fixed top-0 z-20 ${ scrolled ? "bg-primary" : "bg-transparent"
        }` }
    >
      <div className='w-full flex justify-between items-center max-w-7xl mx-auto'>
        <Link
          to='/'
          className='flex items-center gap-2'
          onClick={ () => {
            setActive( "" );
            window.scrollTo( 0, 0 );
          } }
        >
          <img src={ jotasLogo } alt='logo' className='w-14 h-18 object-contain rounded-full' />

        </Link>

        <ul className=" flex gap-1 scale-150">
          <ButtonI18n flagIcon={ <i>🇬🇧</i> } iso639_1={ "en" } />
          <ButtonI18n flagIcon={ <i>🇵🇹</i> } iso639_1={ "pt" } />
          <ButtonI18n flagIcon={ <i>🇪🇸</i> } iso639_1={ "es" } />
        </ul>

        <ul className='list-none hidden sm:flex flex-row gap-10'>
          { navLinks.map( ( { id, title } ) => (
            <li
              key={ id }
              className={ `${ active === title ? "text-white" : "text-secondary"
                } hover:text-white text-[18px] font-medium cursor-pointer` }
              onClick={ () => setActive( title ) }
            >
              <a href={ `#${ id }` }>{ t( title ) }</a>
            </li>
          ) ) }
        </ul>

        <div className='sm:hidden flex justify-end items-center'>
          <img
            src={ toggle ? close : menu }
            key={ toggle ? close : menu }
            alt='menu'
            className='w-[28px] h-[28px] object-contain'
            onClick={ () => setToggle( !toggle ) }
          />

          <div
            className={ `${ !toggle ? "hidden" : "flex"
              } p-6 black-gradient absolute top-20 right-0 mx-4 my-2 min-w-[140px] z-10 rounded-xl` }
          >
            <ul className='list-none flex justify-end items-start flex-1 flex-col gap-4'>
              { navLinks.map( ( { id, title } ) => (
                <li
                  key={ id }
                  className={ `font-poppins font-medium cursor-pointer text-[16px] ${ active === title ? "text-white" : "text-secondary"
                    }` }
                  onClick={ () => {
                    setToggle( !toggle );
                    setActive( title );
                  } }
                >
                  <a href={ `#${ id }` }>{ title }</a>
                </li>
              ) ) }
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;