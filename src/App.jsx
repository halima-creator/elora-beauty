import Navbar from "./components/navbar";
import Hero from "./components/hero";
import Services from "./components/Services";
import About from "./components/About";
import Gallery from "./components/Gallery";
import Pricing from "./components/Pricing";
import Testimonials from "./components/Testimonials";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import WhatsAppButton from "./components/WhatsAppButton";
import "./App.css";

function App() {
  return (
    <>
      <Navbar />

      <Hero />

      <Services />

      <About />

      <Gallery />

      <Pricing />

      <Testimonials />

      <Contact />

      <WhatsAppButton />
      
      <Footer />
    </>
  );
}

export default App;