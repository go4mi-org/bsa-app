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
      className="flex gap-2 w-max items-center justify-center px-8 py-2 text-slate-600 bg-slate-100 rounded-3xl transition-all hover:bg-slate-300 hover:text-slate-800 active:scale-90"
      href={reference}
      onClick={handleFunctions}
    >
      {children}
    </a>
  );
};

export default LinkWrapper;
