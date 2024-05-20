import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";

const Nav = ({ setToggleState, toggleState }) => {
  const [screenSize, setScreenSize] = useState(true);
  function ToggleNavigation() {
    setToggleState(false);
  }

  useEffect(() => {
    function CheckScreenSize() {
      if (window.innerWidth > 1024) {
        setScreenSize(false);
      }
    }

    window.addEventListener("load", CheckScreenSize);
    window.addEventListener("resize", CheckScreenSize);


    return () => {
      window.removeEventListener("load", CheckScreenSize);
      window.removeEventListener("resize", CheckScreenSize)
    };
  }, [screenSize]);

  return (
    <nav className={`${screenSize ? "sm-screen" : undefined} ${toggleState ? "open" : undefined}`}>
      <div className="lg:hidden px-4 py-2">
        <span onClick={ToggleNavigation} className="text-7xl font-[950]">
          &times;
        </span>
      </div>
      <ul>
        <li>
          <NavLink to="" className={({isActive}) => isActive ? "active": undefined} onClick={ToggleNavigation}>Home</NavLink>
        </li>
        <li>
          <NavLink to="movies/categories" className={({isActive}) => isActive ? "active": undefined} onClick={ToggleNavigation}>Categories</NavLink>
        </li>
        <li>
          <NavLink to="movies/featured" className={({isActive}) => isActive ? "active": undefined} onClick={ToggleNavigation}>Featured</NavLink>
        </li>
        <li>
          <NavLink to="movies/latest" className={({isActive}) => isActive ? "active": undefined} onClick={ToggleNavigation}>Latest</NavLink>
        </li>
        <li>
          <NavLink to="/privacy-policy" className={({isActive}) => isActive ? "active": undefined} onClick={ToggleNavigation}>Privacy Policy</NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default Nav;
