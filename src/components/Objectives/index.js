import React from "react";
import Container from "../Container";
import { GiCheckMark } from "react-icons/gi";

const Objectives = () => {
  return (
    <div id="obj" className="w-full pt-24 flex flex-col justify-center">
      <h1 className="text-blue-900 text-center text-4xl font-bold mb-8">
        Learning Objectives
      </h1>
      <Container>
        <div className="flex flex-wrap w-full">
          <div className="flex-1 min-h-96 p-4">
            <ul className="text-slate-500 w-full gap-12 px-4 mb-8 flex justify-center flex-wrap">
              <li className="flex gap-4 bg-slate-100 relative p-4 min-w-[250px] lg:max-w-[300px]">
                <GiCheckMark className="absolute -left-6 top-0 text-xl text-green-600" />
                Understand and describe the role of a Business Analyst
              </li>
              <li className="flex gap-4 bg-slate-100 relative p-4 min-w-[250px] lg:max-w-[300px]">
                <GiCheckMark className="absolute -left-6 top-0 text-xl text-green-600" />
                Describe and demonstrate the framework for requirement analysis
                and software development processes
              </li>
              <li className="flex gap-4 bg-slate-100 relative p-4 min-w-[250px] lg:max-w-[300px]">
                <GiCheckMark className="absolute -left-6 top-0 text-xl text-green-600" />
                Identify errors in analysis, design, and development initiatives
              </li>
              <li className="flex gap-4 bg-slate-100 relative p-4 min-w-[250px] lg:max-w-[300px]">
                <GiCheckMark className="absolute -left-6 top-0 text-xl text-green-600" />
                Analyze and document requirement for products that meet the need
                of stakeholders
              </li>
              <li className="flex gap-4 bg-slate-100 relative p-4 min-w-[250px] lg:max-w-[300px]">
                <GiCheckMark className="absolute -left-6 top-0 text-xl text-green-600" />
                Apply various modeling techniques in validating and documenting
                functional requirements
              </li>
              <li className="flex gap-4 bg-slate-100 relative p-4 min-w-[250px] lg:max-w-[300px]">
                <GiCheckMark className="absolute -left-6 top-0 text-xl text-green-600" />
                Create and manage an effective change management process
              </li>

              <li className="flex gap-4 bg-slate-100 relative p-4 min-w-[250px] lg:max-w-[300px]">
                <GiCheckMark className="absolute -left-6 top-0 text-xl text-green-600" />{" "}
                Understand and describe the role of a Business Analyst
              </li>
              <li className="flex gap-4 bg-slate-100 relative p-4 min-w-[250px] lg:max-w-[300px]">
                <GiCheckMark className="absolute -left-6 top-0 text-xl text-green-600" />{" "}
                Describe and demonstrate the framework for requirement analysis
                and software development processes
              </li>
              <li className="flex gap-4 bg-slate-100 relative p-4 min-w-[250px] lg:max-w-[300px]">
                <GiCheckMark className="absolute -left-6 top-0 text-xl text-green-600" />{" "}
                Identify errors in analysis, design, and development initiatives
              </li>
              <li className="flex gap-4 bg-slate-100 relative p-4 min-w-[250px] lg:max-w-[300px]">
                <GiCheckMark className="absolute -left-6 top-0 text-xl text-green-600" />{" "}
                Analyze and document requirement for products that meet the need
                of stakeholders
              </li>
              <li className="flex gap-4 bg-slate-100 relative p-4 min-w-[250px] lg:max-w-[300px]">
                <GiCheckMark className="absolute -left-6 top-0 text-xl text-green-600" />{" "}
                Apply various modeling techniques in validating and documenting
                functional requirements
              </li>
              <li className="flex gap-4 bg-slate-100 relative p-4 min-w-[250px] lg:max-w-[300px]">
                <GiCheckMark className="absolute -left-6 top-0 text-xl text-green-600" />{" "}
                Create and manage an effective change management process
              </li>
            </ul>
          </div>
        </div>
        <div className="w-full text-center mt-16">
          <p className="text-slate-700 font-semibold mb-4 lg:mb-0">
            Business Systems Analysis is the discipline of controlling and
            supporting change in an organizational environment.
          </p>
          <p className="text-slate-700 font-semibold mb-4">
            A Business System Analyst is a person who facilitates these changes
            by:
          </p>

          <ul className="text-slate-500 w-full justify-center gap-12 px-4 mb-8 flex flex-wrap">
            <li className="flex gap-4 bg-slate-100 relative p-4 min-w-[250px] lg:max-w-[300px]">
              <GiCheckMark className="absolute -left-6 top-0 text-xl text-green-600" />{" "}
              Identifying the strategic goals/needs of the business
            </li>
            <li className="flex gap-4 bg-slate-100 relative p-4 min-w-[250px] lg:max-w-[300px]">
              <GiCheckMark className="absolute -left-6 top-0 text-xl text-green-600" />{" "}
              Recommending areas of improvement through technology
            </li>
            <li className="flex gap-4 bg-slate-100 relative p-4 min-w-[250px] lg:max-w-[300px]">
              <GiCheckMark className="absolute -left-6 top-0 text-xl text-green-600" />{" "}
              Documenting the recommended solutions
            </li>
            <li className="flex gap-4 bg-slate-100 relative p-4 min-w-[250px] lg:max-w-[300px]">
              <GiCheckMark className="absolute -left-6 top-0 text-xl text-green-600" />{" "}
              Managing the process of developing the documented solution
            </li>
            <li className="flex gap-4 bg-slate-100 relative p-4 min-w-[250px] lg:max-w-[300px]">
              <GiCheckMark className="absolute -left-6 top-0 text-xl text-green-600" />{" "}
              Finally, verifying the developed solutions to ensure they deliver
              the best value to stakeholders
            </li>
          </ul>
        </div>
      </Container>
    </div>
  );
};

export default Objectives;
