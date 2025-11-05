"use client";
import { client } from "@/sanity/client";
import { MotionWrap, SectionWrapper } from "@/wrapper";
import Image from "next/image";
import { useState } from "react";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [isFormSubmitted, setIsFormSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const { name, email, message } = formData;

  const handleChangeInput = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };
  const handleSubmit = () => {
    setLoading(true);

    const contact = {
      _type: "contact",
      name: formData.name,
      email: formData.email,
      message: formData.message,
    };

    client
      .create(contact)
      .then(() => {
        setLoading(false);
        setIsFormSubmitted(true);
      })
      .catch((err) => console.log(err));
  };

  return (
    <>
      <h2 className="head-text">Chat with me</h2>

      {/* app__footer-cards */}
      <div className="w-full lg:w-3/5 flex-center mt-16 mb-8">
        {/* app__footer-card */}
        <div className="min-w-2xs flex-center flex-row my-4 p-4 rounded-lg cursor-pointer bg-[#fef4f5] transition-all duration-300 ease-in-out hover:custom-shadow shadow-black/5 w-full">
          <Image
            src="/assets/email.png"
            alt="email"
            width={40}
            height={40}
            className="mx-3"
          />
          <a href="mailto:hello@micael.com" className="p-text font-medium">
            hello@micael.com
          </a>
        </div>
      </div>

      {/* app__footer-form app__flex */}
      <form
        action=""
        className="flex-center w-full lg:w-3/5 flex-col my-4 mx-8"
      >
        <div className="flex-center w-full my-3 rounded-lg cursor-pointer bg-white transition-all duration-300 ease-in-out hover:custom-shadow shadow-black/5">
          <input
            className="p-text w-full p-3.5 rounded-lg bg-white text-secondary"
            type="text"
            name="name"
            id=""
            placeholder="Your Name"
            value={name}
            onChange={handleChangeInput}
          />
        </div>

        <div className="flex-center w-full my-3 rounded-lg cursor-pointer bg-white transition-all duration-300 ease-in-out hover:custom-shadow shadow-black/5">
          <input
            className="p-text w-full p-3.5 rounded-lg bg-white text-secondary"
            type="email"
            name="email"
            id=""
            placeholder="Your Email"
            value={email}
            onChange={handleChangeInput}
          />
        </div>

        <div className=" w-full my-3 rounded-lg cursor-pointer bg-white transition-all duration-300 ease-in-out hover:custom-shadow shadow-black/5">
          <textarea
            className="p-text w-full p-3.5 rounded-lg bg-white text-secondary h-44"
            rows={10}
            name="message"
            placeholder="Your Message"
            value={message}
            onChange={handleChangeInput}
          />
        </div>
        <button
          type="button"
          className="p-text py-4 px-8 rounded-lg bg-secondary font-medium text-white mt-8 transition ease-[cubic-bezier(0.55, 0.085, 0.68, 0.53)] cursor-pointer hover:bg-[#2430af] w-full my-4 text-center"
          onClick={handleSubmit}
        >
          {!loading ? "Send Message" : "Sending..."}
        </button>
      </form>
    </>
  );
};

export default SectionWrapper(MotionWrap(Contact, "w-full"), "contact");
