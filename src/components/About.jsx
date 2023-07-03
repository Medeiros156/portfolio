import React from "react";
// import Tilt from "react-tilt";
import { motion } from "framer-motion";

import { styles } from "../styles";
import { AboutWrapper } from "../hoc";
import { fadeIn, textVariant } from "../utils/motion";

import Tech from "./canvas/Square";





const About = () => {
  return (
    <>
      <div className="flex flex-row sm:gap-16 relative">
        <div className="sm:flex-1 flex items-center justify-center">
          <div className="absolute left-0 sm:-left-56 sm:w-3/4 -z-10 h-screen w-full overflow-visible">
            <Tech />

          </div>
        </div>
        <div className="flex-1">
          <motion.div variants={textVariant()}>
            <h2 className={styles.sectionHeadText}>Sobre Mim</h2>
          </motion.div>

          <motion.p
            variants={fadeIn("", "", 0.1, 1)}
            className="mt-4 text-left text-secondary text-[17px] leading-[30px]"
          >
            Olá, meu nome é Pedro Medeiros e sou um desenvolvedor web. Estou atualmente em busca do meu primeiro emprego na área de tecnologia.

            Tenho experiência com desenvolvimento de projetos web em Javascript, Typescript, Php, Python e frameworks como React, Laravel, NextJs, TailwindCss e Sass. Além disso, tenho experiência no desenvolvimento de APIs REST utilizando Node.js, banco de dados SQL e NoSQL, e integração de microsserviços utilizando conteinerização com Docker.

            Além disso, estou sempre estudando novas frameworks e fortalecendo meus conhecimentos no desenvolvimento de aplicativos seguindo as boas práticas e buscando acompanhar as mudanças constantes no mundo da tecnologia, estar sempre atualizado com as novas tendências de mercado e novas ferramentas a serem utilizadas.

            Estou animado com as possibilidades de crescimento em minha carreira de desenvolvedor e estou em busca de uma empresa que me permita aplicar meus conhecimentos e desenvolver novas habilidades. Sou um profissional dedicado, comprometido e que trabalha bem em equipe.

            Agradeço desde já pela oportunidade de apresentar um pouco sobre mim e estou disponível para esclarecer qualquer dúvida ou para participar de processos seletivos.
          </motion.p>
        </div>
      </div>
    </>
  );
};

export default AboutWrapper(About, "about");
