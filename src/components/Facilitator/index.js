import React from "react";
import Instructor from "../../assets/instructor3.jpeg";
import Container from "../Container";

const Facilitator = () => {
  return (
    <div className="py-24 bg-slate-100">
      <Container>
        <div className="w-full flex items-center">
          <div className="flex flex-wrap mx-auto justify-between gap-16">
            <div className="flex gap-8 flex-col h-80 justify-center px-8">
              <h1 className="text-4xl text-slate-500 font-bold">
                Meet Your
                <br /> Class Facilitator
              </h1>

              <div className="flex flex-col justify-center">
                <h2 className="text-3xl font-bold text-slate-900">
                  David Ikazoboh
                </h2>
                <span className=" text-slate-400">Mentor/Coach</span>
              </div>
              <ul className="list-[square] px-4 text-slate-500">
                <li>Senior Business Analysts/Product Manager</li>
                <li>Scrum Trainer</li>
                <li>Over Ten (10) years of Experience</li>
              </ul>
            </div>
            <div className="min-h-80">
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
