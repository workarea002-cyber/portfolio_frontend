import { BsGithub, BsLinkedin } from "react-icons/bs";

const SocialMedia = () => {
  return (
    <div className="flex justify-end items-center flex-col p-4">
      <div className="w-10 h-10 rounded-full bg-white my-1 border border-lightGray flex-center transition-all duration-300 ease-in-out hover:bg-secondary hover:border-secondary group">
        <BsGithub className="group-hover:text-white w-[15px] h-[15px] text-gray" />
      </div>
      <div className="w-10 h-10 rounded-full bg-white my-1 border border-lightGray flex-center transition-all duration-300 ease-in-out hover:bg-secondary hover:border-secondary group">
        <BsLinkedin className="group-hover:text-white w-[15px] h-[15px] text-gray" />
      </div>
    </div>
  );
};

export default SocialMedia;
