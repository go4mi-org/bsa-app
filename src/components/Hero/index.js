import React from "react";
import Container from "../Container";
import LinkWrapper from "../Link";
import { FaRegEdit } from "react-icons/fa";

const Hero = ({ handleRegistrationModal }) => {
  return (
    <div className="w-full py-12 md:min-h-[70vh] hero__background">
      <Container>
        <div className="relative text-slate-300 translate-y-4 flex flex-col min-h-[70vh] items-center justify-center">
          <h3 className="capitalize font-semibold text-center text-sm md:text-xl">
            Virtual Instructor-Led Training
          </h3>
          <div className="flex flex-col mb-6">
            <h1 className="capitalize text-slate-200 font-bold text-center text-2xl md:text-4xl">
              Business Systems Analysts
            </h1>
            <p className="text-center font-semibold">
              Business Requirement Analysts
            </p>
          </div>
          <LinkWrapper
            handleRegistrationModal={handleRegistrationModal}
            reference={"#reg"}
          >
            Register Here <FaRegEdit />
          </LinkWrapper>

          <div className="mt-16 flex flex-col text-center gap-2 items-center justify-center">
            <span className="font-bold">Comes With:</span>
            <span className="bg-slate-300 py-2 px-4 text-slate-600 rounded-lg">
              Scrum Master Certified (SMC") Certification
            </span>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Hero;
