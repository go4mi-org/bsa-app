import React from "react";
import Instructor from "../../assets/instructor3.jpeg";
import Container from "../Container";
import { AiOutlineStar } from "react-icons/ai";

const Facilitator = () => {
  return (
    <div className="pt-24">
      <Container>
        <div className="w-full flex items-center">
          <div className="flex flex-wrap mx-auto justify-between gap-16">
            <div className="flex gap-8 flex-col h-80 justify-center px-8">
              <h1 className="text-3xl lg:text-4xl text-green-600 font-bold">
                Meet Your
                <br /> Class Facilitator
              </h1>

              <div className="flex flex-col justify-center">
                <h2 className="text-3xl font-bold text-slate-900">
                  David Ikazoboh
                </h2>
                <span className=" text-slate-600">Mentor/Coach</span>
              </div>
              <ul className="flex flex-col gap-2 text-slate-500">
                <li className="flex gap-2">
                  <AiOutlineStar className="text-green-600" /> Senior Business
                  Analysts/Product Manager
                </li>
                <li className="flex gap-2">
                  <AiOutlineStar className="text-green-600" />
                  Scrum Trainer
                </li>
                <li className="flex gap-2">
                  <AiOutlineStar className="text-green-600" />
                  Over Ten (10) years of Experience
                </li>
              </ul>
            </div>
            <div className="min-h-80 w-full lg:w-max">
              <img
                className="w-full h-full object-cover"
                src={Instructor}
                alt="Instructor"
              />
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Facilitator;
