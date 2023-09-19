import { motion } from "framer-motion";

import { styles } from "../styles";
import { logo, linkedin } from "../assets";
const Hero = () => {
  return (
    <section className={`relative w-full h-screen mx-auto`}>
      <div
        className={`absolute inset-0 top-[120px]  max-w-7xl mx-auto ${styles.paddingX} flex flex-row items-start gap-14`}
      >
        {/* <div className='relative flex flex-col justify-center items-center mt-5'>
          <div className='w-10 sm:h-60 h-20 violet-gradient' />
          <span className='absolute bottom-7 z-0 w-16 h-16 bg-black opacity-50 rounded-full' />
          <img src={logo} alt='logo' className='w-14 h-14 object-contain -translate-y-6 z-10' />
        </div> */}

        <div>
          <div className='flex flex-row justify-center items-center gap-1'>

            <h1 className='font-black text-[#fafafa] lg:text-[80px] sm:text-[60px] xs:text-[50px] text-[40px] lg:leading-[98px] mt-2'>
              Olá, bem vindo
            </h1>
            <div className='pt-9 flex flex-col justify-center items-center'>
              <div className='w-4 sm:h-10 h-10 violet-gradient' />
              <span className='bottom-7 z-0 w-6 h-6  bg-black opacity-50 rounded-full' />
              <img src={logo} alt='logo' className='w-4 h-4 object-contain -translate-y-6 z-10' />
            </div>
          </div>
          <h2 className="sm:text-5xl text-2xl ">Eu sou <span className="text-[#6b2e9c]"> Pedro Medeiros </span></h2>
          <p className="font-medium lg:text-xl sm:text-lg xs:text-base text-sm lg:leading-[40px] mt-2 text-white-100">
            Desenvolvedor Web
          </p>
        </div>
      </div>

      <div className='absolute xs:bottom-10 bottom-32 w-full flex justify-center items-center'>
        <a href='#about'>
          <div className='w-[25px] h-[40px] rounded-3xl border-4 border-secondary flex justify-center items-start p-2'>
            <motion.div
              animate={{
                y: [0, 12, 0],
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                repeatType: "loop",
              }}
              className='w-1 h-1 bg-white mb-1'
            />
          </div>
        </a>
      </div>
      <div className='absolute bottom-10 w-full flex justify-center items-center sm:justify-end sm:bottom-36 sm:right-[15%] gap-16'>
        <a href="./Pedro_Medeiros_CV.pdf" download="Pedro-Medeiros-CV.pdf">
          <div className='rounded border-4 border-secondary flex justify-center items-center px-8 py-2 hover:scale-110'>
            Download CV
          </div>
        </a>
        <a href="https://www.linkedin.com/in/pedro-lima-medeiros/">
          <img src={linkedin} alt="" className="hover:scale-110 h-12 w-12" />
        </a>
      </div>
    </section>
  );
};

export default Hero;
