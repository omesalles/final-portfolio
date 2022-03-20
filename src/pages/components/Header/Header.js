import React, { useState } from "react";
import { ReactComponent as CloseMenu } from "../../../assets/x.svg";
import { ReactComponent as MenuIcon } from "../../../assets/menu.svg";
import { globalRoutes } from "../../globalRoutes";
import { Link } from "react-router-dom";
import "./header.css";

/* base on https://sdever.medium.com/building-a-responsive-navigation-bar-with-react-css-d9b30af03c20*/

export function Header() {
  const [click, setClick] = useState(false);
  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);
  return (
    <header className={click ? "header-right" : "header-center"}>
      <div className="logo-nav">
        <div className={click ? "nav-options active" : "nav-options"}>
          {globalRoutes.map((item, i) => (
              <Link
                key={i}
                to={item.path}
                className="option"
                onClick={closeMobileMenu}
              >
                {item.titol}
              </Link>
          ))}
        </div>
      </div>
      <div className="mobile-menu" onClick={handleClick}>
        {click ? (
          <CloseMenu className="menu-icon" />
        ) : (
          <MenuIcon className="menu-icon" />
        )}
      </div>
    </header>
  );
}
