import { About, Hero, Skills, Work } from "@/components";

const Home = () => {
  return (
    <div className="app">
      <Hero />
      <About />
      <Work />
      <Skills />
    </div>
  );
};

export default Home;
