import { NavigationDots, SocialMedia } from "@/components";
import React from "react";

const SectionWrapper = <T extends object>(
  Component: React.ComponentType<T>,
  idName: string,
  classNames = ""
) => {
  const HOC: React.FC<T> = (props) => (
    <section
      id={idName}
      className={`w-full min-h-screen flex flex-row ${classNames}`}
    >
      <SocialMedia />

      <div
        className={`flex-center flex-1 w-full flex-col ${idName === "home" ? "p-0" : "py-16 px-8"}`}
      >
        <Component {...props} />
      </div>
      <NavigationDots active={idName} />
    </section>
  );
  return HOC;
};

export default SectionWrapper;
