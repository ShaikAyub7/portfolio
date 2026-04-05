import React from "react";

const Footer = () => {
  return (
    <div className="bg-blue-950 border-t p-4 flex items-center justify-center text-gray-400 ">
      copyright &copy; {new Date().getFullYear()}
    </div>
  );
};

export default Footer;
