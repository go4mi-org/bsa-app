import React from "react";
import Rocket from "../../assets/rocket.png";
import Strategic from "../../assets/strategy.png";
import Fannie from "../../assets/fannie.png";
import Amazon from "../../assets/amazon.png";
import Container from "../Container";
import { AiOutlineStar } from "react-icons/ai";

const Facilitator = () => {
  return (
    <div className="pt-24">
      <Container>
        <div className="w-full flex items-center">
          <div className="flex flex-wrap mx-auto justify-between gap-8">
            <div className="flex min-w-[300px] center flex-1 gap-8 flex-col min-h-80 justify-center px-8">
              <h1 className="text-3xl text-center sm:text-left lg:text-4xl text-blue-600 font-bold">
                Meet Your
                <br /> Class Facilitator
              </h1>

              <div className="flex flex-col justify-center">
                <h2 className="text-3xl text-center sm:text-left font-bold text-slate-900">
                  David Ikazoboh
                </h2>
                <span className="text-center sm:text-left text-slate-600">
                  Mentor/Coach
                </span>
              </div>
              <ul className="flex flex-col gap-2 text-slate-500">
                <li className="flex gap-2  justify-start">
                  <AiOutlineStar className="text-green-600" /> Senior Business
                  Analysts/Product Manager
                </li>
                <li className="flex gap-2 justify-start">
                  <AiOutlineStar className="text-green-600" />
                  Scrum Trainer
                </li>
                <li className="flex gap-2 justify-start">
                  <AiOutlineStar className="text-green-600" />
                  Over Ten (10) years of Experience
                </li>
              </ul>
            </div>
            <div className="min-h-80 min-w-[300px] center flex flex-1 flex-col w-full">
              <p className="font-bold text-blue-600 text-center sm:text-left mb-4 text-xl">
                Has Led Business Systems Analysis in:
              </p>
              <div className="flex flex-wrap justify-center sm:justify-between items-center gap-8">
                <img
                  className="shadow-lg rounded-lg py-4 w-[250px] h-[100px] object-cover"
                  src={Fannie}
                  alt="Instructor"
                />
                <img
                  className="shadow-lg rounded-lg w-[250px] object-cover"
                  src={Rocket}
                  alt="Instructor"
                />
                <img
                  className="shadow-lg rounded-lg w-[250px] object-cover"
                  src={Amazon}
                  alt="Instructor"
                />
                <img
                  className="shadow-lg rounded-lg w-[250px] object-cover"
                  src={Strategic}
                  alt="Instructor"
                />
              </div>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Facilitator;
