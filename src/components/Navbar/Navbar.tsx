import React, { useState } from "react";
import { styles } from "../../util/style";
import { logo, menu, close } from "../../assets";
import { navigationLinks } from "../../util/constant";

const Navbar = () => {
  const [toggleNav, setToggleNav] = useState(false);
  const [active, setActive] = useState("home");

  const toggleHandler = () => {
    setToggleNav(!toggleNav);
  };

  const activeHandler = (id) => {
    setActive(id);
  };

  return (
    <div className={`w-full py-6 ${styles.flexBetween}`}>
      {/* Logo */}
      <img src={logo} alt="" className="w-[130px] h-[35px]" />

      {/* navigation links */}
      <ul className="list-none sm:flex hidden justify-end items-center flex-1">
        {navigationLinks.map((nav, idx) => (
          <li
            key={nav.id}
            className={`${
              idx === navigationLinks.length - 1 ? "mr-0" : "mr-10"
            } ${
              active === nav.id ? "text-white" : "text-lightWhite"
            } font-montserrat font-normal cursor-pointer text-[16px] mr-10  hover:text-white transition-all duration-500`}
            onClick={() => activeHandler(nav.id)}
          >
            <a href={`#${nav.id}`}>{nav.title}</a>
          </li>
        ))}
      </ul>

      {/* navigation btn */}
      <div className={`sm:hidden flex flex-1 justify-end items-center`}>
        <img
          src={toggleNav ? close : menu}
          className="w-[30px] h-[30px] object-contain"
          alt="nav"
          onClick={toggleHandler}
        />

        <div
          className={`${
            !toggleNav ? "hidden" : "flex"
          } p-6 absolute top-20 right-0 left-0 w-full sidebar bg-black-gradient z-20`}
        >
          <ul className="list-none flex justify-center items-center flex-1 xs:flex-col ss:flex-row">
            {navigationLinks.map((nav, idx) => (
              <li
                key={nav.id}
                className={`${
                  idx === navigationLinks.length - 1 ? "mr-0" : "mr-10"
                } ${idx === 0 ? "mt-0" : "mt-5"}
                ${
                  active === nav.id ? "text-white" : "text-lightWhite"
                } font-montserrat font-normal cursor-pointer text-[18px] mr-10  hover:text-white transition-all duration-500`}
                onClick={() => activeHandler(nav.id)}
              >
                <a href={`#${nav.id}`}>{nav.title}</a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
