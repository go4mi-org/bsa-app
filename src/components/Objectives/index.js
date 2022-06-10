import React from "react";
import Container from "../Container";

const Objectives = () => {
  return (
    <div id="obj" className="w-full pt-24 flex flex-col justify-center">
      <h1 className="text-blue-900 text-center text-4xl font-bold mb-8">
        Learning Objectives
      </h1>
      <Container>
        <div className="flex flex-wrap w-full">
          <div className="flex-1 min-h-96 bg-slate-100 p-4">
            <ul className="text-slate-500 w-full pt-12 gap-4 px-4 mb-8 flex flex-wrap">
              <li className="flex gap-2 md:p-4 max-w-[400px]">
                <span className="text-2xl">01.</span>Understand and describe the
                role of a Business Analyst
              </li>
              <li className="flex gap-2 md:p-4 max-w-[400px]">
                <span className="text-2xl">02.</span>Describe and demonstrate
                the framework for requirement analysis and software development
                processes
              </li>
              <li className="flex gap-2 md:p-4 max-w-[400px]">
                <span className="text-2xl">03.</span>Identify errors in
                analysis, design, and development initiatives
              </li>
              <li className="flex gap-2 md:p-4 max-w-[400px]">
                <span className="text-2xl">04.</span>Analyze and document
                requirement for products that meet the need of stakeholders
              </li>
              <li className="flex gap-2 md:p-4 max-w-[400px]">
                <span className="text-2xl">05.</span>Apply various modeling
                techniques in validating and documenting functional requirements
              </li>
              <li className="flex gap-2 md:p-4 max-w-[400px]">
                <span className="text-2xl">06.</span>Create and manage an
                effective change management process
              </li>
            </ul>
          </div>
          <div className="flex-1 min-h-96 bg-blue-800 p-4">
            <ul className="text-slate-100 pt-12 w-full gap-4 px-4 mb-8 flex flex-wrap">
              <li className="flex gap-2 md:p-4 max-w-[400px]">
                <span className="text-2xl">07.</span>Understand and describe the
                role of a Business Analyst
              </li>
              <li className="flex gap-2 md:p-4 max-w-[400px]">
                <span className="text-2xl">08.</span>Describe and demonstrate
                the framework for requirement analysis and software development
                processes
              </li>
              <li className="flex gap-2 md:p-4 max-w-[400px]">
                <span className="text-2xl">09.</span>Identify errors in
                analysis, design, and development initiatives
              </li>
              <li className="flex gap-2 md:p-4 max-w-[400px]">
                <span className="text-2xl">10.</span>Analyze and document
                requirement for products that meet the need of stakeholders
              </li>
              <li className="flex gap-2 md:p-4 max-w-[400px]">
                <span className="text-2xl">11.</span>Apply various modeling
                techniques in validating and documenting functional requirements
              </li>
              <li className="flex gap-2 md:p-4 max-w-[400px]">
                <span className="text-2xl">12.</span>Create and manage an
                effective change management process
              </li>
            </ul>
          </div>
        </div>
        <div className="w-full mt-16">
          <p className="text-slate-700 font-semibold mb-4 lg:mb-0">
            Business Systems Analysts is the discipline of controlling and
            supporting change in an organizational environment.
          </p>
          <p className="text-slate-700 font-semibold mb-4">
            A Business System Analyst is a person who facilitates these changes
            by:
          </p>
          <ul className="list-[square] text-slate-500 flex flex-col gap-4 justify-center w-full px-4">
            <li className="bg-slate-100 p-4">
              Identifying the strategic goals/needs of the business
            </li>
            <li className="bg-slate-100 p-4">
              Recommending areas of improvement through technology
            </li>
            <li className="bg-slate-100 p-4">Documenting the recommended solutions</li>
            <li className="bg-slate-100 p-4">
              Managing the process of developing the documented solution
            </li>
            <li className="bg-slate-100 p-4">
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
