import React from "react";
import Container from "../Container";

const ScrumCert = () => {
  return (
    <div id="cert" className="w-full py-24">
      <Container>
        <h1 className="text-blue-900 text-center text-4xl font-bold mb-8">
          Scrum Master Certified (SMC
          <sup className="font-normal text-2xl">TM</sup>) Certification
        </h1>
        <div className="w-full min-h-[400px] gap-4 flex flex-wrap">
          <div className="flex-1 bg-blue-800">
            <ul className="text-slate-100 w-full pt-12 px-4 py-4 mb-8 flex flex-wrap">
              <h1 className="text-3xl text-center md:text-left ml-4 w-full mb-4 text-slate-200 font-bold">
                Why Scrum Cert?
              </h1>
              <li className="flex leading-loose gap-2 p-4 min-w-[250px]">
                <span className="text-2xl">01.</span>
                Like any other certification, the Scrum Master Certificate tells
                potential employers that you have learned, understand and can
                practice the core scrum principles. It also proves that you have
                an agile mindset, an attribute that your organization can
                leverage.
              </li>
              <li className="flex leading-loose gap-2 p-4 min-w-[250px]">
                <span className="text-2xl">02.</span> Scrum Master Certified
                (SMCTM) Certification Why Scrum Cert? Like any other
                certification, the Scrum Master Certificate tells potential
                employers that you have learned, understand and can practice the
                core scrum principles. It also proves that you have an agile
                mindset, an attribute that your organization can leverage.
              </li>
            </ul>
          </div>
          <div className="flex-1 bg-slate-100">
            <ul className="text-slate-700 w-full pt-12 px-4 py-4 mb-8 flex flex-wrap">
              <h1 className="text-3xl text-center md:text-left ml-4 w-full text-slate-600 font-bold">
                The Scrum Cert Exam
              </h1>
              <p className="text-center md:text-left ml-4 w-full mb-4 text-slate-600">
                Can be completed 180 days from the day of registration
              </p>
              <li className="flex flex-col gap-2 p-4 min-w-[250px]">
                <div className="flex gap-2">
                  <span className="text-2xl">01.</span>
                  Successful candidates will be awarded the Scrum R Master
                  Certified (SMC ) Certification by SCRUMstudy
                </div>
                <ul className="list-[square] flex flex-col gap-2 text-slate-500 w-full pl-16">
                  <li>Multiple choice</li>
                  <li>100 percent question per exam</li>
                  <li>No negative marks for wrong answers</li>
                  <li>120 minutes duration</li>
                  <li>Proctored online exam</li>
                  <li>Current pass rate: 95%</li>
                </ul>
              </li>

              <li className="flex flex-col gap-2 p-4 min-w-[250px]">
                <div className="flex gap-2">
                  <span className="text-2xl">02.</span>
                  Access the online course and take the exam
                </div>
                <ul className="list-[square] flex flex-col gap-2 text-slate-500 w-full pl-16">
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

              <li className="flex flex-col gap-2 p-4 min-w-[250px]">
                <div className="flex gap-2">
                  <span className="text-2xl">03.</span>
                  Upon successful completion of the exam, get an online
                  certificate
                </div>
                <ul className="list-[square] flex flex-col gap-2 text-slate-500 w-full pl-16">
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