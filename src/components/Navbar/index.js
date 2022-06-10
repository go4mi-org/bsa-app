import React, { useState } from "react";
import Container from "../Container";
import LinkWrapper from "../Link";
import { RiContactsLine } from "react-icons/ri";
import { CgMenuGridR } from "react-icons/cg";

const Navbar = () => {
  const [openNavBar, setOpenNavbar] = useState(false);

  const handleNavBarToggle = () => {
    setOpenNavbar(!openNavBar);
  };

  const handleCloseNavBar = () => {
    setOpenNavbar(false);
  };

  const toggleNavbarOpenStyle =
    "flex gap-8 py-24 right-0 transition-all top-0 items-center justify-between absolute w-full bg-slate-900 flex-col md:flex-row md:relative md:py-0 md:w-[70%]";
  const toggleNavbarCloseStyle =
    "flex gap-8 py-24 -right-[100%] transition-all top-0 items-center justify-between absolute w-full bg-slate-900 flex-col md:right-0 md:flex-row md:relative md:py-0 md:w-[70%]";

  return (
    <div className="w-full fixed py-2 bg-slate-900 opacity-90 top-0 left-0 z-50">
      <Container>
        <div className="w-full py-2 text-slate-300">
          <div className="flex justify-between items-center">
            <a className="text-xl text-slate-300 font-bold z-50" href="#logo">
              JS Joda Solutions
            </a>
            <div
              className={
                !openNavBar ? toggleNavbarCloseStyle : toggleNavbarOpenStyle
              }
            >
              <ul className="flex flex-col md:flex-row items-center border-slate-300 gap-8">
                <li className="max-w-48 hover:border-b-4 hover:border-slate-200">
                  <a
                    className="text-slate-200 border-slate-500 px-4 w-full"
                    href="#def"
                    onClick={handleCloseNavBar}
                  >
                    Definition(s)
                  </a>
                </li>
                <li className="max-w-48 hover:border-b-4 hover:border-slate-200">
                  <a
                    className="text-slate-200 border-slate-500 px-4 w-full"
                    href="#roadmap"
                    onClick={handleCloseNavBar}
                  >
                    Road Map
                  </a>
                </li>
                <li className="max-w-48 hover:border-b-4 hover:border-slate-200">
                  <a
                    className="text-slate-200 border-slate-500 px-4 w-full"
                    href="#obj"
                    onClick={handleCloseNavBar}
                  >
                    Learning Objectives
                  </a>
                </li>
                <li className="max-w-48 hover:border-b-4 hover:border-slate-200">
                  <a
                    className="text-slate-200 "
                    href="#cert"
                    onClick={handleCloseNavBar}
                  >
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
              className="text-2xl z-50 md:hidden"
            />
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Navbar;
