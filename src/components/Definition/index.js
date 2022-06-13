import React from "react";
import { FaRegEdit } from "react-icons/fa";
import Container from "../Container";

const Definition = ({ handleRegistrationModal }) => {
  return (
    <div id="def" className="w-full pt-24">
      <Container>
        <div className="w-full">
          <h1 className="text-blue-900 text-3xl lg:text-4xl mb-8 font-bold text-center">
            Who is a Business System Analyst?
          </h1>
          <div className="flex flex-col gap-4">
            <p className="text-slate-700 bg-slate-100 leading-loose p-4">
              Business Systems Analysts are information technology experts that
              collect and analyze data connected to business systems in order to
              identify areas for development. BSAs are tech-savvy strategists
              who operate as liaisons between the business side of a company and
              the technology and services used. They are specialists in both IT
              systems and understanding the needs of companies and are in great
              demand, with attractive pay, strong job growth in the next years,
              and a wide range of possibilities across all industries.
            </p>
            <p className="text-slate-700 bg-slate-100 leading-loose p-4">
              The average pay for a BSA in the United States is roughly $85,344,
              according to{" "}
              <a
                className="font-bold text-blue-600"
                target="_blank"
                rel="noreferrer"
                href="https://www.glassdoor.com/Salaries/business-systems-analyst-salary-SRCH_KO0,24.htm"
              >
                Glassdoor.com.
              </a>{" "}
              This graph demonstrates how the value of BSAs to businesses is
              reflected in their pay.
            </p>
            <p className="text-slate-700 bg-slate-100 leading-loose p-4">
              This BSA course is for those who want to work in companies that
              create the IT solutions you all see and use. There are no minimal
              entrance requirements for the BSA career path, except that you
              must master certain essential business systems analysis skills,
              which will be taught in this session. You will also receive
              training in agile project development methods and a Scrum Master
              Certification ticket to take the exam at your leisure.
            </p>
            <div className="">
              <div className="text-white flex flex-col py-4">
                <a
                  className="bg-blue-600 flex items-center gap-2 rounded-lg w-max px-8 py-1 mb-2 leading-loose"
                  href="#reg"
                  onClick={handleRegistrationModal}
                >
                  Register here <FaRegEdit />
                </a>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Definition;
