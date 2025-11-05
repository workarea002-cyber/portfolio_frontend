import MotionWrap from "@/wrapper/MotionWrap";
import SectionWrapper from "@/wrapper/SectionWrapper";

const About = () => {
  return <div>About</div>;
};

export default SectionWrapper(MotionWrap(About), "about", "bg-white");
