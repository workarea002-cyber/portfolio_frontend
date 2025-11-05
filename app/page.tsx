import { getExperience, getProjects, getSkills } from "@/sanity/api";
import { About, Contact, Hero, Skills, Work } from "@/sections";
export const revalidate = 3600;

const Home = async () => {
  const projects = await getProjects();
  const [skills, experience] = await Promise.all([
    getSkills(),
    getExperience(),
  ]);

  return (
    <main>
      <div className="app">
        <Hero />
        <About />
        <Work projects={projects} />
        <Skills skills={skills} experience={experience} />
        <Contact />
      </div>
    </main>
  );
};

export default Home;
