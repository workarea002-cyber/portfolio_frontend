import * as motion from "motion/react-client";

const MotionWrap = <T extends object>(
  Component: React.ComponentType<T>,
  classNames = ""
) => {
  const HOC: React.FC<T> = (props) => (
    <motion.div
      whileInView={{ y: [100, 50, 0], opacity: [0, 0, 1] }}
      transition={{ duration: 0.5 }}
      className={`flex-center flex-col ${classNames}`}
    >
      <Component {...props} />
    </motion.div>
  );
  return HOC;
};

export default MotionWrap;
