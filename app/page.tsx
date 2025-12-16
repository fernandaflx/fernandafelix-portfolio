
import About from "./components/About/page";
import Contact from "./components/Contact/page";
import Footer from "./components/Footer/page";
import Hero from "./components/Hero/page";
import Journey from "./components/Journey/page";
import NavBar from "./components/NavBar/page";
import Projects from "./components/Projects/page";

export default function Home() {
  return (
    <>
      <NavBar />
      <Hero />
      <About />
      <Journey />
      <Projects />
      <Contact />
      <Footer />
    </>
  );
}
