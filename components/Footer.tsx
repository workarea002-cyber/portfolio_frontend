const Footer = () => {
  const currentYear = new Date().getFullYear();
  return (
    <footer>
      <div className="w-full p-8 sm:pt-8 flex-center">
        <p className="p-text uppercase text-black">
          <span>2022 - {currentYear} Vedang</span> |{" "}
          <span>All rights reserved</span>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
