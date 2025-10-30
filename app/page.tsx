import { About, Footer, Hero, Navbar, Skills, Work } from "@/components";

const Home = () => {
  return (
    <div className="app">
      <Navbar />
      <Hero />
      <About />
      <Work />
      <Skills />
      <Footer />
    </div>
  );
};

export default Home;
