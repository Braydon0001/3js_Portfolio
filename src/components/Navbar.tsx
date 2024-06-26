import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { styles } from "../style";
import { logo, menu, close } from "../assets";
import { navLinks } from "../constants";
import { cn } from "@/lib/utils";
import LightGalleryWrapper from "./LightGalleryWrapper";

const Navbar = () => {
  const [active, setActive] = useState("");
  const [toggleBurger, setToggleBurger] = useState(false);
  const [isNavSticky, setIsNavSticky] = useState(false);

  useEffect(() => {
    const changeNav = () => {
      if (window.scrollY > 0) {
        setIsNavSticky(true);
      } else {
        setIsNavSticky(false);
      }
    };

    window.addEventListener("scroll", changeNav, { passive: true });
    return () => window.removeEventListener("scroll", changeNav);
  }, [isNavSticky]);

  return (
    <nav
      className={cn(
        `${styles.paddingX} transition-all duration-[0.5s] ease w-full flex items-center py-5 fixed top-0 z-50 bg-primary glass`,
        isNavSticky && "py-2"
      )}
    >
      <div className="w-full flex justify-between max-w-[1600px] mx-auto items-center">
        {/* <Link
          to="/"
          className=""
          onClick={() => {
            setActive("");
            window.scrollTo(0, 0);
          }}
        > */}
        <div className="flex items-center gap-4">
          <LightGalleryWrapper>
            <a
              className="text-[18px] text-white cursor-pointer hover:opacity-80"
              id={"braydon-profile-picture"}
              href="img/braydon-profile-picture.jpeg"
            >
              <img
                src={"img/braydon-profile-picture.jpeg"}
                alt="Braydon Padayachee"
                className={cn(
                  " transition-all duration-[0.5s] ease h-[50px] rounded-full",
                  isNavSticky && "h-[50px]"
                )}
              />
            </a>
          </LightGalleryWrapper>
          <a
            href="#home"
            className="text-white text-[21px] font-bold cursor-pointer flex hover:opacity-70"
          >
            Braydon Padayachee &nbsp;{" "}
            <span className="sm:block hidden">| &nbsp;Portfolio</span>
          </a>
        </div>
        <ul className="list-none hidden sm:flex flex-row gap-10">
          {navLinks.map((link, index) => (
            <li
              key={index}
              className={`${
                active === link.title ? "text-[#de4444]" : "text-white"
              } hover:text-[#de4444] text-[21px] font-medium cursor-pointer`}
              onClick={() => setActive(link.title)}
            >
              <a href={`#${link.id}`}>{link.title}</a>
            </li>
          ))}
        </ul>

        {/* mobile nav */}
        <div className="sm:hidden flex flex-1 justify-end items-center">
          <img
            src={toggleBurger ? close : menu}
            alt="Menu"
            className="w-7 h-7 object-contain cursor-pointer"
            onClick={() => setToggleBurger(!toggleBurger)}
          />
          <div
            className={`${
              !toggleBurger ? "hidden" : "flex"
            } p-6 black-gradient absolute top-20 right-0 mx-4 my-2 min-w-[140px] z-10 rounded-xl`}
          >
            <ul className="list-none flex justify-end items-start flex-col gap-4">
              {navLinks.map((link, index) => (
                <li
                  key={index}
                  className={`${
                    active === link.title ? "text-white" : "text-secondary"
                  } hover:text-white font-medium cursor-pointer text-[18px]`}
                  onClick={() => setActive(link.title)}
                >
                  <a href={`#${link.id}`}>{link.title}</a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
