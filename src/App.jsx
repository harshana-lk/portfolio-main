import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useEffect, useRef } from "react";
// import { BrowserRouter, Routes, Route } from "react-router-dom";

import NavBar from "./components/ui/NavBar";
import Hero from "./components/homepage/Hero";
import Role from "./components/homepage/Role";
import About from "./components/homepage/About";
import Services from "./components/homepage/Services";
import Works from "./components/homepage/Works";
import Contact from "./components/homepage/Contact";
import Footer from "./components/ui/Footer";
import { Helmet } from "react-helmet";

const App = () => {
  gsap.registerPlugin(ScrollTrigger);

  const sectionRefs = useRef([]); // Creating a sectionRefs array

  // Scrub animation of section headings
  useEffect(() => {
    //TODO Learn useContext and useRef here
    const sectionHeadings = document.querySelectorAll(".section-heading");
    sectionHeadings.forEach((heading) => {
      const headings = heading.querySelectorAll(".heading");

      headings.forEach((individualHeading) => {
        ScrollTrigger.create({
          trigger: heading,
          start: "top 550px",
          end: "bottom 550px",
          animation: gsap.to(individualHeading, {
            opacity: 1,
            y: 0,
            ease: "power4.out",
            duration: 1,
          }),
          toggleActions: "play none none none",
        });
        ScrollTrigger.refresh();
      });
    });
  }, []);

  return (
    <div className="bg-secondary-100">
      <Helmet>
        <meta charset="UTF-8" />
        <link
          rel="icon"
          type="image/svg+xml"
          href="./src/assets/icons/finalfavicon.svg"
        />
        <link
          rel="preload"
          as="image"
          href="src/assets/images/profile-main.webp"
        />
        <link
          rel="preload"
          as="image"
          href="/src/assets/images/greenify1.png"
        />
        <link
          rel="preload"
          as="image"
          href="src/assets/images/home service.png"
        />
        <link rel="preload" as="image" href="src/assets/images/pig-game.png" />
        <link rel="preload" as="image" href="src/assets/images/PERSONAL.png" />
        <link rel="preload" as="image" href="src/assets/images/weatherly.png" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta property="og:url" content="https://harshu.me" />
        <meta property="og:image" content="src/assets/images/profile.webp" />
        <meta
          name="description"
          content="An independent frontend developer and designer specialized in empowering startups and small businesses. Find your space in the digital landscape."
        />
        <meta
          property="og:title"
          content="Harshana Jayaweera | Frontend Developer & Web Designer"
        />

        <meta
          property="og:description"
          content="I create elevating digital experiences that inspire and connect with people through design and development"
        />
        <meta property="og:type" content="website" />
        <title>harshu.dev — Frontend Developer & Designer</title>
      </Helmet>
      <NavBar sectionRefs={sectionRefs.current} />{" "}
      {/* passing sectionRefs props to give access to Navbar, Navbar can then access the props which have access to the array of sectionRef and loop over it */}
      <Hero />
      <main className="px-5 md:px-10 xl:px-20 2xl:px-28">
        <Role forwardedRef={(el) => (sectionRefs.current[0] = el)} />{" "}
        {/* forwardedRef props to pass into the child component to access the ref, then this will go into the useRef array  */}
        <About />
        <Services />
        <Works forwardedRef={(el) => (sectionRefs.current[1] = el)} />
        <Contact />
      </main>
      <Footer />
    </div>
  );
};

export default App;
