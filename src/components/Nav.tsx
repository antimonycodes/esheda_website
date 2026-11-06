import { Link } from "react-router-dom";
import logo from "../assets/logonew.svg";

const Nav = () => {
  const links = [
    { name: "Product", link: "/" },
    { name: "Workflows", link: "/" },
    { name: "Showcase", link: "/" },
    { name: "Pricing", link: "/" },
  ];
  return (
    <div className="flex justify-between items-center gap-4">
      <div className="flex items-center">
        <img src={logo} alt="Logo" />
        <h1 className="text-2xl font-bold ml-2">Esheda</h1>
      </div>

      <div className="hidden md:flex space-x-4 text-[#A3A6A0] font-semibold">
        {links.map((link) => (
          <Link key={link.name} to={link.link}>
            {link.name}
          </Link>
        ))}
      </div>

      <div className="flex items-center gap-4">
        <h2 className="hidden sm:block">Sign In</h2>
        <Link
          to="/"
          className="px-4 py-2 rounded-3xl btn-gradient text-black font-semibold text-sm sm:text-base whitespace-nowrap"
        >
          Start creating
        </Link>
      </div>
    </div>
  );
};

export default Nav;
