import React from "react";
import { GiCheckMark } from "react-icons/gi";
import Container from "../Container";
import SMC from "../../assets/smc-home.png";

const ScrumCert = () => {
  return (
    <div id="cert" className="w-full py-24">
      <Container>
        <h1 className="text-blue-900 text-center text-3xl lg:text-4xl font-bold">
          Scrum Master Certified{" "}
          <img className="inline h-8" src={SMC} alt="SMC Logo" />
        </h1>
        <div className="w-full min-h-[400px] gap-4 flex flex-wrap">
          <div className="flex">
            <ul className="text-slate-700 justify-between w-full pt-6 px-4 py-4 mb-4 gap-8 flex flex-wrap">
              <h1 className="text-2xl lg:text-3xl text-center md:text-left w-full text-slate-700 font-bold">
                Why Scrum Cert?
              </h1>
              <li className="flex leading-loose gap-4 relative bg-slate-100 p-4 min-w-[250px] lg:max-w-[600px]">
                <GiCheckMark className="absolute -left-6 top-0 text-xl text-green-600" />{" "}
                Like any other certification, the Scrum Master Certificate tells
                potential employers that you have learned, understand and can
                practice the core scrum principles. It also proves that you have
                an agile mindset, an attribute that your organization can
                leverage.
              </li>

              <li className="flex leading-loose gap-4 relative bg-slate-100 p-4 min-w-[250px] lg:max-w-[600px]">
                <GiCheckMark className="absolute -left-6 top-0 text-xl text-green-600" />{" "}
                A Scrum Master Certification from SCRUMstudy will significantly
                help improve your employability and help drive your career
                growth. The skills you will acquire from taking the classes
                associated with this certification will make you a formidable
                candidate in your career prospects and offer a higher salary as
                compared to your uncertified Access the online course and take
                the exam peers.
              </li>
            </ul>
          </div>
          <div className="flex">
            <ul className="text-slate-700 w-full gap-8 pt-12 px-4 py-4 mb-4 flex flex-wrap">
              <div className="w-full">
                <h1 className="text-2xl lg:text-3xl text-center lg:text-left w-full text-slate-600 font-bold">
                  The Scrum Cert Exam
                </h1>
                <p className="text-center md:text-left w-full  text-slate-600">
                  Can be completed 180 days from the day of registration
                </p>
              </div>
              <li className="flex flex-col leading-loose gap-4 relative bg-slate-100 p-4 min-w-[250px] lg:max-w-[600px]">
                <GiCheckMark className="absolute -left-6 top-0 text-xl text-green-600" />{" "}
                <h1 className="font-bold">
                  Successful candidates will be awarded the Scrum R Master
                  Certified (SMC ) Certification by SCRUMstudy
                </h1>
                <ul className="list-[square] flex flex-col gap-2 text-slate-500 w-full pl-8">
                  <li>Multiple choice</li>
                  <li>100 percent question per exam</li>
                  <li>No negative marks for wrong answers</li>
                  <li>120 minutes duration</li>
                  <li>Proctored online exam</li>
                  <li>Current pass rate: 95%</li>
                </ul>
              </li>

              <li className="flex flex-col leading-loose gap-4 relative bg-slate-100 p-4 min-w-[250px] lg:max-w-[600px]">
                <GiCheckMark className="absolute -left-6 top-0 text-xl text-green-600" />{" "}
                <h1 className="font-bold">
                  Access the online course and take the exam
                </h1>
                <ul className="list-[square] flex flex-col gap-2 text-slate-500 w-full pl-8">
                  <li>Access the online course on 'Scrum Master Certified'</li>
                  <li> Get a copy of the SBOK&reg; Guide online version</li>
                  <li>Schedule the 2 hours proctored exam</li>
                  <li>
                    SCRUMstudy&trade; verifies the application: confirms the
                    exam date and time
                  </li>
                  <li>Take the 2 hours Proctored exam online</li>
                </ul>
              </li>

              <li className="flex flex-col leading-loose gap-4 relative bg-slate-100 p-4 min-w-[250px] lg:max-w-[600px]">
                <GiCheckMark className="absolute -left-6 top-0 text-xl text-green-600" />{" "}
                <h1 className="font-bold">
                  Upon successful completion of the exam, get an online
                  certificate
                </h1>
                <ul className="list-[square] flex flex-col gap-2 text-slate-500 w-full pl-8">
                  <li>
                    Your name will be added to the SCRUMstudy Certificate
                    Registry
                  </li>
                  <li> You can add the certificate to your LinkedIn profile</li>
                  <li>
                    If you are unable to pass the exam, you can reschedule again
                    and take a maximum of two (2) free exam retakes
                  </li>
                  <li>
                    SCRUMstudy&trade; verifies the application: confirms the
                    exam date and time{" "}
                  </li>
                  <li>Take the 2 hours Proctored exam online</li>
                </ul>
              </li>
            </ul>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default ScrumCert;
