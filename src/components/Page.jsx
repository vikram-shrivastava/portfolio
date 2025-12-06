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
    <div className="bg-gray-200 dark:bg-gray-900 text-gray-900 dark:text-white transition-colors duration-500">
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
  );
}

export default Page;
