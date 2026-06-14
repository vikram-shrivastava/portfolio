import About from "./About.jsx";
import Footer from "./Footer.jsx";
import Hero from "./Hero.jsx";
import Projects from "./Projects.jsx";
import Header from "./Header.jsx";
import Contact from "./Contact.jsx";
import Skills from "./skills.jsx";
import { useState } from "react";

function Page() {
  const [isHeroInView, setHeroInView] = useState(true);
  
  return (
    <div className="bg-zinc-50 dark:bg-[#09090b] text-zinc-950 dark:text-zinc-50 transition-colors duration-700 font-sans selection:bg-zinc-800 selection:text-white">
      <Header />
      <main>
        <Hero setHeroInView={setHeroInView}/>
        <About />
        <Skills />
        <Projects />
        <Contact />
      </main>
      <Footer showScrollToTop={!isHeroInView}/>
    </div>
  );no
}

export default Page;