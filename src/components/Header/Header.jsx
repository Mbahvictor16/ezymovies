import React, { Fragment, useState } from "react";
import Nav from "../Nav/Nav";
import { Outlet } from "react-router-dom";
import { FaBars } from "react-icons/fa";

import "./header.css";

const Header = () => {
  const [toggleState, setToggleState] = useState(false);

  return (
    <Fragment>
      <header>
        <div className="flex items-center justify-between gap-4">
          <FaBars onClick={() => setToggleState(true)} className="lg:hidden text-4xl md:text-5xl"/>
          <div className="text-3xl md:text-4xl lg:text-6xl">EZYMOVIES</div>
        </div>
        <Nav setToggleState={setToggleState} toggleState={toggleState} />
      </header>

      <Outlet />
    </Fragment>
  );
};

export default Header;
