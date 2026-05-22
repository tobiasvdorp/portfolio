"use client";

import AboutMe from "./AboutMe";
import CallToAction from "./CallToAction";
import Contact from "./Contact";
import Navbar from "./Navbar";
import OutdatedToast from "./OutdatedToast";
import Projects from "./Projects";
import SettingsMenu from "./SettingsMenu";
import SkillFolder from "./SkillFolder";

const HomePage = () => (
  <>
    <Navbar />
    <SettingsMenu />
    <OutdatedToast />
    <div id="glitch">
      <main id="home">
        <CallToAction />
        <AboutMe />
        <Projects />
        <SkillFolder />
        <Contact />
      </main>
    </div>
  </>
);

export default HomePage;
