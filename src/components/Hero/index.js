import React from "react";
import Container from "../Container";
import LinkWrapper from "../Link";
import { FaRegEdit } from "react-icons/fa";
import HeroBg from "../../assets/heroBg2.jpg";

const Hero = ({ handleRegistrationModal }) => {
  return (
    <div className="w-full mt-8 md:mt-0 py-12 lg:min-h-[70vh]">
      <Container>
        <div className="relative text-slate-700 flex flex-col-reverse lg:flex-row min-h-[70vh] items-center justify-center">
          <div className="flex scaler lg:flex-1 flex-col lg:scale-[1.1] lg:ml-16">
            <div className="flex flex-col mb-6">
              <h1 className="capitalize font-bold text-blue-900 mb-4 text-4xl">
                Business Systems Analysts
              </h1>
              <h3 className="capitalize text-slate-500 font-semibold text-2xl">
                Virtual Instructor-Led Training
              </h3>
              <p className="font-semibold text-lg md:text-xl text-slate-500">
                Business Requirement Analysts
              </p>
            </div>

            <div className="flex gap-2 mb-8">
              <span className="w-max text-slate-600 font-bold rounded-lg">
                Scrum Master Certified (SMC") Certification
              </span>
            </div>
            <LinkWrapper
              handleRegistrationModal={handleRegistrationModal}
              reference={"#reg"}
            >
              Register Here <FaRegEdit />
            </LinkWrapper>
          </div>
          <div className="flex-1">
            <img
              className="w-full h-full object-cover"
              src={HeroBg}
              alt="Hero"
            />
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Hero;
