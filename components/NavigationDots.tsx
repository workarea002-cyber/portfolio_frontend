import { data } from "@/constants";

const NavigationDots = ({ active }) => {
  return (
    <div className="flex-center flex-col p-4">
      {data.navLinks.map(({ name }, index) => (
        <a
          key={name + index}
          className={`w-2.5 h-2.5 rounded-full bg-[#cbcbcb] m-2 transition-[background-color] duration-200 ease-in-out hover:bg-secondary ${active === name && "bg-secondary"}`}
          href={`#${name}`}
        />
      ))}
    </div>
  );
};

export default NavigationDots;
