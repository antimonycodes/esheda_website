import logo from "../assets/logonew.svg";

const links = [
  { name: "Product", link: "/" },
  { name: "Workflows", link: "/" },
  { name: "Showcase", link: "/" },
  { name: "Pricing", link: "/" },
];

const socials = [
  { name: "Tiktok", link: "/" },
  { name: "Instagram", link: "/" },
  { name: "Facebook", link: "/" },
];

const Footer = () => {
  return (
    <footer className="border-t border-[#2A2A2A] py-8 px-6 sm:px-10 md:px-16 lg:px-24 xl:px-32">
      <div className="flex flex-col md:flex-row items-center justify-between gap-6 text-center md:text-left">
        <div className="flex items-center gap-2">
          <img src={logo} alt="Esheda" className="h-6 w-auto" />
          <span className="text-xl font-bold">Esheda</span>
        </div>

        <div className="flex flex-wrap justify-center gap-x-6 gap-y-2 text-sm font-semibold text-[#A3A6A0]">
          {links.map((link) => (
            <a key={link.name} href={link.link} className="hover:text-white">
              {link.name}
            </a>
          ))}
        </div>

        <div className="flex flex-wrap justify-center gap-x-6 gap-y-2 text-xs font-bold tracking-wide text-[#A3A6A0]">
          {socials.map((social) => (
            <a
              key={social.name}
              href={social.link}
              className="hover:text-white uppercase"
            >
              {social.name}
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
