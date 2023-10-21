import React, { useRef, useState } from "react";
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";

import { styles } from "../styles";
import { EarthCanvas } from "./canvas";
import { SectionWrapper } from "../hoc";
import { slideIn } from "../utils/motion";

import { github, linkedin } from "../assets";
import { links } from "../constants";

const Contact = () => {
  const formRef = useRef();
  const [ form, setForm ] = useState( {
    name: "",
    email: "",
    message: "",
  } );

  const [ loading, setLoading ] = useState( false );

  const handleChange = ( e ) => {
    const { target } = e;
    const { name, value } = target;

    setForm( {
      ...form,
      [ name ]: value,
    } );
  };

  const handleSubmit = ( e ) => {
    e.preventDefault();
    setLoading( true );

    emailjs
      .send(
        import.meta.env.VITE_APP_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_APP_EMAILJS_TEMPLATE_ID,
        {
          from_name: form.name,
          to_name: "jotas",
          from_email: form.email,
          to_email: "jotasenator@gmail.com",
          message: form.message,
        },
        import.meta.env.VITE_APP_EMAILJS_PUBLIC_KEY
      )
      .then(
        () => {
          setLoading( false );
          alert( "Thank you. I will get back to you as soon as possible." );

          setForm( {
            name: "",
            email: "",
            message: "",
          } );
        },
        ( error ) => {
          setLoading( false );
          console.error( error );

          alert( "Ahh, something went wrong. Please try again." );
        }
      );
  };

  const { github_link, linkedin_link } = links;

  const handleLinkClick = ( url ) => {
    let newTab = window.open();
    newTab.opener = null;
    newTab.location = url;
  };


  return (
    <div
      className={ `xl:mt-12 flex xl:flex-row flex-col-reverse gap-10 overflow-hidden` }
    >
      <motion.div
        variants={ slideIn( "left", "tween", 0.2, 1 ) }
        className='flex-[0.75] bg-black-100 p-8 rounded-2xl'
      >
        <div className='absolute inset-0 flex gap-1 justify-end m-3 card-img_hover'>
          <div
            onClick={ () => handleLinkClick( github_link ) }
            className='bg-black w-10 h-10 rounded-full flex justify-center items-center cursor-pointer'
          >
            <img
              src={ github }
              alt='github'
              className='w-1/2 h-1/2 object-contain'
            />
          </div>
          <div
            onClick={ () => handleLinkClick( linkedin_link ) }
            className='bg-white w-10 h-10 rounded-full flex justify-center items-center cursor-pointer'
          >
            <img
              src={ linkedin }
              alt='linkedin'
              className='w-1/2 h-1/2 object-contain'
            />
          </div>
        </div>
        <p className={ styles.sectionSubText }>Get in touch</p>
        <h3 className={ styles.sectionHeadText }>Contact.</h3>

        <form
          ref={ formRef }
          onSubmit={ handleSubmit }
          className='mt-12 flex flex-col gap-8'
        >
          <label className='flex flex-col'>
            <span className='text-white font-medium mb-4'>Your Name</span>
            <input
              type='text'
              name='name'
              value={ form.name }
              onChange={ handleChange }
              placeholder="What is your name?"
              className='bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium'
            />
          </label>
          <label className='flex flex-col'>
            <span className='text-white font-medium mb-4'>Your Email</span>
            <input
              type='email'
              name='email'
              value={ form.email }
              onChange={ handleChange }
              placeholder="username@gmail.com?"
              className='bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium'
            />
          </label>
          <label className='flex flex-col'>
            <span className='text-white font-medium mb-4'>Your Message</span>
            <textarea
              rows={ 7 }
              name='message'
              value={ form.message }
              onChange={ handleChange }
              placeholder='I wonder...?'
              className='bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium'
            />
          </label>

          <button
            type='submit'
            className='bg-tertiary py-3 px-8 rounded-xl outline-none w-fit text-white font-bold shadow-md shadow-primary'
          >
            { loading ? "Sending..." : "Send" }
          </button>
        </form>
      </motion.div>

      <motion.div
        variants={ slideIn( "right", "tween", 0.2, 1 ) }
        className='xl:flex-1 xl:h-auto md:h-[550px] h-[350px]'
      >
        <EarthCanvas />
      </motion.div>
    </div>
  );
};

export default SectionWrapper( Contact, "contact" );
