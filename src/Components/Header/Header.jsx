import React from "react";
import Logo from "../../assets/Get in touch.png";

const Header = () => {
  return (
    <div className="flex justify-center text-center">
      <div className="mt-28 ">
        <img className="ml-7" src={Logo} alt="logo" />

        <p className="font-normal text-xl py-7 ">
          Reach out, and let's create a universe of possibilities together!
        </p>
      </div>
    </div>
  );
};

export default Header;
