import React, { useState } from "react";
import Facilitator from "../components/Facilitator";
import Hero from "../components/Hero";
import Navbar from "../components/Navbar";
import RoadMap from "../components/RoadMap";
import Objectives from "../components/Objectives";
import ScrumCert from "../components/Scrum";
import Definition from "../components/Definition";
import Contact from "../components/Contact";
import Form from "../components/Form";

const Home = () => {
  const [toggleRegistrationModal, setToggleRegistrationModal] = useState(false);
  const handleRegistrationModal = () => {
    setToggleRegistrationModal(true);
  };

  return (
    <div className="w-full flex flex-col">
      <Navbar />
      <Hero handleRegistrationModal={handleRegistrationModal} />
      <Definition handleRegistrationModal={handleRegistrationModal} />
      <RoadMap />
      <Facilitator />
      <Objectives />
      <ScrumCert handleRegistrationModal={handleRegistrationModal} />
      <Contact />
      <Form
        toggleRegistrationModal={toggleRegistrationModal}
        setToggleRegistrationModal={setToggleRegistrationModal}
        handleRegistrationModal={handleRegistrationModal}
      />
    </div>
  );
};

export default Home;
