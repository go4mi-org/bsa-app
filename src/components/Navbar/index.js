import React, { useState } from "react";
import Container from "../Container";
import LinkWrapper from "../Link";
import { RiContactsLine } from "react-icons/ri";
import { CgMenuGridR } from "react-icons/cg";
import Joda from "../../assets/joda-logo.png";

const Navbar = () => {
  const [openNavBar, setOpenNavbar] = useState(false);

  const handleNavBarToggle = () => {
    setOpenNavbar(!openNavBar);
  };

  const handleCloseNavBar = () => {
    setOpenNavbar(false);
  };

  const toggleNavbarOpenStyle =
    "flex gap-8 py-24 right-0 transition-all top-0 items-center justify-between bg-white absolute w-full flex-col lg:flex-row lg:relative lg:py-0 lg:w-[70%]";
  const toggleNavbarCloseStyle =
    "flex gap-8 py-24 -right-[100%] transition-all top-0 items-center justify-between absolute w-full flex-col lg:right-0 lg:flex-row lg:relative lg:py-0 lg:w-[70%]";

  return (
    <div className="w-full fixed bg-white top-0 left-0 z-50">
      <Container>
        <div className="w-full py-2 text-slate-900 font-[500]">
          <div className="flex justify-between items-center">
            <a className="text-xl font-bold z-50" href="#logo">
              <img
                className="-translate-x-[76px] adjust  scale-[0.6]"
                src={Joda}
                alt="Joda"
              />
            </a>
            <div
              className={
                !openNavBar ? toggleNavbarCloseStyle : toggleNavbarOpenStyle
              }
            >
              <ul className="flex font-[500] flex-col gap-8 lg:gap-0 lg:flex-row font-normal justify-between items-center border-slate-300">
                <li className="max-w-48 hover:text-blue-600 hover:font-[600]">
                  <a
                    className="border-slate-500 px-4 w-full"
                    href="#def"
                    onClick={handleCloseNavBar}
                  >
                    Definition(s)
                  </a>
                </li>
                <li className="max-w-48 hover:text-blue-600 hover:font-[600]">
                  <a
                    className="border-slate-500 px-4 w-full"
                    href="#roadmap"
                    onClick={handleCloseNavBar}
                  >
                    Road Map
                  </a>
                </li>
                <li className="max-w-48 hover:text-blue-600 hover:font-[600]">
                  <a
                    className="border-slate-500 px-4 w-full"
                    href="#obj"
                    onClick={handleCloseNavBar}
                  >
                    Learning Objectives
                  </a>
                </li>
                <li className="max-w-48 hover:text-blue-600 hover:font-[600]">
                  <a href="#cert" onClick={handleCloseNavBar}>
                    Certification
                  </a>
                </li>
              </ul>
              <LinkWrapper
                handleCloseNavBar={handleCloseNavBar}
                reference={"#contact"}
              >
                Contact <RiContactsLine />
              </LinkWrapper>
            </div>
            <CgMenuGridR
              onClick={handleNavBarToggle}
              className="text-2xl z-50 lg:hidden"
            />
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Navbar;
