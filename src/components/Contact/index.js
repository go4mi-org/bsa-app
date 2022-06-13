import React from "react";
import Container from "../Container";

const Contact = () => {
  return (
    <div id="contact" className="w-full flex items-center bg-black py-12">
      <Container>
        <div className="w-full justify-between items-center flex flex-wrap">
          <h1 className="text-3xl text-center w-full text-slate-200 font-bold">
            JS Joda Solutions
          </h1>
          <div className="flex w-full flex-col mt-4">
            <span className="text-sm text-center w-full text-slate-200 font-normal spacing-snug">
              Jodasolution@gmail.com
            </span>
            <span className="text-sm text-center w-full text-slate-200 font-semibold spacing-snug">
              (Whatsapp): +1571-295-4262
            </span>
          </div>
          <span className="text-sm text-center mt-8 w-full text-slate-200 font-normal spacing-snug">
            &copy; Jodasolutions 2022
          </span>
        </div>
      </Container>
    </div>
  );
};

export default Contact;
