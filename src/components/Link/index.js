import React from "react";

const LinkWrapper = ({
  children,
  reference,
  handleCloseNavBar,
  handleRegistrationModal,
}) => {
  const handleFunctions = () => {
    handleRegistrationModal && handleRegistrationModal();
    handleCloseNavBar && handleCloseNavBar();
  };
  return (
    <a
      className="flex gap-2 w-max items-center justify-center px-8 py-2 text-white bg-blue-600 rounded-lg transition-all hover:scale-[0.9] hover:text-white active:scale-90"
      href={reference}
      onClick={handleFunctions}
    >
      {children}
    </a>
  );
};

export default LinkWrapper;
