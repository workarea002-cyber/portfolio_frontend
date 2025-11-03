import { NavigationDots, SocialMedia } from "@/components";
import React from "react";

const SectionWrapper = <T extends object>(
  Component: React.ComponentType<T>,
  idName: string,
  classNames = ""
) => {
  const currentYear = new Date().getFullYear();
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

        {idName !== "home" && (
          <div className="w-full p-8 sm:pt-8 flex-end flex-col">
            <p className="p-text uppercase text-black">@{currentYear} Vedang</p>
            <p className="p-text uppercase text-black">All rights reserved</p>
          </div>
        )}
      </div>
      <NavigationDots active={idName} />
    </section>
  );
  return HOC;
};

export default SectionWrapper;
