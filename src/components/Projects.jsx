import React from "react";
import { motion } from "framer-motion";

import { styles } from "../styles";
import { github } from "../assets";
import { SectionWrapper } from "../hoc";
import { projects } from "../constants";
import { fadeIn, textVariant } from "../utils/motion";

const ProjectCard = ({
  index,
  name,
  description,
  tags,
  image,
  source_code_link,
  project_link
}) => {
  return (
    <motion.div variants={fadeIn("up", "spring", index * 0.3, 0.75)}>
      <a href={project_link}>

        <div className="bg-tertiary p-4 rounded-2xl sm:w-[360px] w-full h-full flex flex-col hover:scale-102">
          <div className="relative flex-1">
            <img
              src={image}
              alt="project_image"
              className="w-full h-full object-cover rounded-2xl"
            />

            <div className="absolute inset-0 flex justify-end m-3">
              {/* <div
                onClick={() => window.open(source_code_link, "_blank")}
                className="hover:scale-125 black-gradient w-10 h-10 rounded-full flex justify-center items-center cursor-pointer"
              > */}
              <a className="hover:scale-110 black-gradient w-10 h-10 rounded-full flex justify-center items-center cursor-pointer" href={source_code_link}>

                <img
                  src={github}
                  alt="source code"
                  className="w-1/2 h-1/2 object-contain"
                />
              </a>
              {/* </div> */}
            </div>
          </div>

          <div className="flex flex-col flex-1">


            <h3 className="text-white font-bold text-[24px]">{name}</h3>

            <p className="mt-2 text-secondary text-[14px] flex-1">{description}</p>

            <div className="mt-4 flex flex-wrap gap-2">
              {tags.map((tag) => (
                <div
                  className={`${tag.color} rounded p-1`}
                  key={`${name}-${tag.name}`}
                >
                  <p className={`text-[10px] bg-${tag.color}`}>#{tag.name}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </a>
    </motion.div>
  );
};

const Projects = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <h2 className={`${styles.sectionHeadText}`}>Meus Projetos</h2>
      </motion.div>

      <div className="mt-20 flex gap-7 flex-wrap">
        {projects.map((project, index) => (
          <ProjectCard key={`project-${index}`} index={index} {...project} />
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(Projects, "projects");
