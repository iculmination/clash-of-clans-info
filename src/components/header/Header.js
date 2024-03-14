import { Search } from "lucide-react";
import { Input } from "../ui/input";
import { Button } from "../ui/button";
import { Link } from "react-router-dom";
import { useEffect, useRef } from "react";

const Header = () => {
  const header = useRef();

  useEffect(() => {
    const handleScroll = () => {
      var scrollPosition = window.scrollY;

      if (scrollPosition > 0) {
        header.current.classList.remove("opacity-0");
        header.current.classList.add("opacity-100");
      } else {
        header.current.classList.remove("opacity-100");
        header.current.classList.add("opacity-0");
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <header
      ref={header}
      className="opacity-0 bg-black fixed top-0 w-full z-50 transition duration-300"
    >
      <div className="container text-white pt-6 pb-6 flex">
        <img
          src="https://supercell.com/_next/static/media/supercell_logo.38ec5826.webp"
          alt=""
          className="w-16 mr-20"
        />
        <div className="w-full flex justify-between items-center">
          <nav className="">
            <ul className="flex gap-16 text-center items-center">
              <li className="cursor-pointer text-gray-400 hover:text-white transition duration-200 ">
                <Link to="/">Home</Link>
              </li>
              <li className="cursor-pointer text-gray-400 hover:text-white transition duration-200 ">
                <Link to="/players">Players</Link>
              </li>
              <li className="cursor-pointer text-gray-400 hover:text-white transition duration-200 ">
                <Link to="/clans">Clans</Link>
              </li>
              <li className="cursor-pointer text-gray-400 hover:text-white transition duration-200 ">
                <Link to="/about">About us</Link>
              </li>
            </ul>
          </nav>
          <div className="flex">
            <Input
              className="max-w-96 text-black placeholder:text-gray-300"
              placeHolder="Search..."
            ></Input>
            <Button className="rounded-l-none -ml-14 hover:bg-white group">
              <Search className="group-hover:text-black" />
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
