import sandakada from "/src/assets/images/sandakada-app.png";
import synova from "/src/assets/images/synova.png";
import weatherly from "/src/assets/images/weatherly.png";
import homeService from "/src/assets/images/home service.png";
import pigGame from "/src/assets/images/pig-game.png";
import greenify from "/src/assets/images/greenify1.png";
import personal from "/src/assets/images/PERSONAL.png";
import Projects from "../ui/Projects";
import Heading from "../ui/Heading";

export default function Works({ forwardedRef }) {
  return (
    <section
      ref={forwardedRef}
      id="works"
      className="nav-change my-[10%] overflow-hidden"
    >
      <Heading title="Projects" />
      <div className="mt-10 grid grid-cols-1 gap-16 gap-y-10 md:grid-cols-12">
        {/* Project Synova */}
        <div className=" col-span-1 md:col-span-12">
          <Projects
            link="https://synova.lk/"
            img={synova}
            alt="Synova Global"
            name="Synova Global"
            type="Frontend Development"
            year="2026"
            tools="React • Vite • Tailwind • Framer Motion"
          />
        </div>
        {/* Project #1 */}
        <div className=" col-span-1 md:col-span-12">
          <Projects
            link="https://harshana-lk.github.io/weatherly/#/current-location"
            img={weatherly}
            alt="Weatherly Landing Page"
            name="weatherly Landing Page"
            type="Web Design • Frontend Development"
            year="2023"
            tools="ReactJS • GSAP • JavaScript • Figma"
          />
        </div>
        {/* Project #2 */}
        <div className="col-span-1 pt-0 md:col-span-6 md:pt-16">
          <Projects
            link="#"
            img={homeService}
            alt="home service mobile app"
            name="home service mobile app"
            type="Frontend Development"
            year="2023"
            tools="React Native • Expo "
          />
        </div>
        {/* Project Sandakada */}
        <div className="col-span-1 pt-0 md:col-span-6 md:pt-16">
          <Projects
            link="#"
            img={sandakada}
            alt="Sandakada Smart App"
            name="Sandakada Smart App"
            type="Mobile App Development"
            year="2025"
            tools="React Native • EXPO"
          />
        </div>
        {/* Project Pig Game */}
        <div className="col-span-1 pt-0 md:col-span-12">
          <Projects
            link="https://harshana-lk.github.io/Pig-Game/"
            img={pigGame}
            alt="javascript pig game"
            name="javascript pig game"
            type="Web Design • Frontend Development"
            year="2022"
            tools="HTML • CSS • JavaScript"
          />
        </div>
        {/* Project Greenify */}
        <div className="col-span-1 h-fit pt-0 md:col-span-8 md:pt-20">
          <Projects
            link="https://harshana-lk.github.io/Greenify/"
            img={greenify}
            alt="greenify"
            name="GREENIFY PARALLAX LANDING PAGE"
            type="Frontend Development"
            year="2023"
            tools="HTML • CSS • JavaScript"
          />
        </div>
        <div className="col-span-1 h-fit md:col-span-4">
          <Projects
            link="https://harshu.me"
            img={personal}
            alt="personal portfolio"
            name="PERSONAL PORTFOLIO"
            type="Frontend Development"
            year="2022"
            tools="HTML • CSS • JavaScript"
          />
        </div>
      </div>
    </section>
  );
}
