import React, { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";

import { styles } from "../styles";
import { SectionWrapper } from "../hoc";
import { slideIn } from "../utils/motion";
import { emailjsConfig } from "../constants/index";
const Contact = () => {
  const formRef = useRef();
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [loading, setLoading] = useState(false);
  const [autoRotateSpeed, setAutoRotateSpeed] = useState(10);

  const handleChange = (e) => {
    const { target } = e;
    const { name, value } = target;
    setAutoRotateSpeed(100)
    setTimeout(() => {
      setAutoRotateSpeed(10)

    }, 500);
    setForm({
      ...form,
      [name]: value,
    });
  };


  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);

    emailjs
      .send(
        emailjsConfig.serviceId,
        emailjsConfig.templateId,
        {
          from_name: form.name,
          to_name: "Pedro Medeiros",
          from_email: form.email,
          to_email: "arroz108@gmail.com",
          message: form.message,
        },
        emailjsConfig.publicKey
      )
      .then(
        () => {
          setLoading(false);
          alert("Obrigado. Entrarei em contato assim que possível.");

          setForm({
            name: "",
            email: "",
            message: "",
          });
        },
        (error) => {
          setLoading(false);
          console.error(error);

          alert("Alguma coisa deu errado. Tente de novo.");
        }
      );
  };

  return (
    <div
      className={` xl:mt-12 flex xl:flex-row flex-col-reverse gap-14 overflow-hidden`}
    >
      <motion.div
        variants={slideIn("left", "tween", 0.1, 0.7)}
        className='flex-[0.75] bg-violet-900 p-8 rounded-2xl'
      >
        <p className={styles.sectionSubText}>Entre em contato</p>
        <h3 className={styles.sectionHeadText}>Contato.</h3>

        <form
          ref={formRef}
          onSubmit={handleSubmit}
          className='mt-12 flex flex-col gap-8'
        >
          <label className='flex flex-col'>
            <span className='text-white font-medium mb-4'>Seu nome</span>
            <input
              type='text'
              name='name'
              value={form.name}
              onChange={handleChange}
              placeholder="Qual é o seu nome?"
              className='bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium'
            />
          </label>
          <label className='flex flex-col'>
            <span className='text-white font-medium mb-4'>Seu e-mail</span>
            <input
              type='email'
              name='email'
              value={form.email}
              onChange={handleChange}
              placeholder="Qual é o seu endereço de e-mail?"
              className='bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium'
            />
          </label>
          <label className='flex flex-col'>
            <span className='text-white font-medium mb-4'>Sua mensagem</span>
            <textarea
              rows={4}
              name='message'
              value={form.message}
              onChange={handleChange}
              placeholder='O que você quer dizer?'
              className='bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium'
            />
          </label>

          <button
            type='submit'
            className='bg-tertiary py-3 px-8 rounded-xl outline-none w-fit text-white font-bold shadow-md shadow-primary'
          >
            {loading ? "Enviando..." : "Enviar"}
          </button>
        </form>
      </motion.div>

      <motion.div>
        <img src="./contact.png
" alt="" />
      </motion.div>

      {/* <motion.div
        // variants={slideIn("right", "tween", 0.2, 1)}
        className='relative xl:flex-1 xl:h-auto md:h-[550px] h-[350px]'
      >
        <CoolballCanvas autoRotateSpeed={autoRotateSpeed} />
        <StarsCanvas />
      </motion.div> */}
    </div>

  );
};

export default SectionWrapper(Contact, "contact");
