import { getAbout, getExperience, getProjects, getSkills } from "@/sanity/api";
import { About, Contact, Hero, Skills, Work } from "@/sections";
export const revalidate = 3600;

const Home = async () => {
  const [abouts, projects, skills, experience] = await Promise.all([
    getAbout(),
    getProjects(),
    getSkills(),
    getExperience(),
  ]);

  return (
    <main>
      <div className="app">
        <Hero />
        <About abouts={abouts} />
        <Work projects={projects} />
        <Skills skills={skills} experience={experience} />
        <Contact />
      </div>
    </main>
  );
};

export default Home;
