import { Helmet } from "react-helmet-async";
import { Analytics } from "@vercel/analytics/react";

import Hero from "./sections/Hero";
import About from "./sections/About";
import Skills from "./sections/Skills";
import Experience from "./sections/Experience";
import Projects from "./sections/Projects";
import Contact from "./sections/Contact";

export default function App() {
  return (
    <>
      <Helmet>
        <title>Senior Full Stack Engineer | Vijaya Guru</title>
        <meta
          name="description"
          content="Full stack developer specializing in scalable systems, AI tools, and automation."
        />
      </Helmet>

      <Analytics />

      <div className="space-y-16 p-6 max-w-5xl mx-auto">
        <Hero />
        <About />
        <Skills />
        <Experience />
        <Projects />
        <Contact />
      </div>
    </>
  );
}