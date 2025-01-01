import Footer from "./components/footer";
import { About, Hero, Projects, Contact } from "./components/sections";
import Header from "./components/Header";
const Home = () => {
  return (
    <>
      <Header />
      <Hero />
      <About />
      <Projects />
      <Contact />
      <Footer />
    </>
  );
};

export default Home;
