import { BrowserRouter } from "react-router-dom";

import { About, Contact, Hero, Navbar, Projects } from "./components";

const App = () => {
  return (
    <BrowserRouter>
      <div className='relative z-10 bg-black-100'>
        <div className='bg-hero-pattern bg-auto bg-no-repeat bg-left bg-fixed'>
          <Navbar />
          <Hero />
        </div>
        <About />
        <div className='bg-works-pattern bg-cover bg-no-repeat bg-top bg-fixed '>

          <Projects />
        </div>
        <div className='relative z-0'>
          <Contact />
        </div>
      </div>
    </BrowserRouter >
  );
}

export default App;
