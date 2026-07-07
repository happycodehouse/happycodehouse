import React from "react";
import { Link, useLocation } from "react-router-dom";

import headerStyle from "./header.module.scss";
import { useDirectionalHover } from "../../hooks/useDirectionalHover";

interface NavItemProps {
  item: {
    path: string;
    label: string;
  };
  currentPath: string;
}

const NavItem: React.FC<NavItemProps> = ({ item, currentPath }) => {
  const { overlayStyle, getHoverProps } = useDirectionalHover({
    background: "#f5f5f5"
  });

  return (
    <li {...getHoverProps()}>
      <div className="overlay" style={overlayStyle}/>
      <Link to={item.path}>
        {currentPath === "/" ? "" : "/ "}{item.label}
      </Link>
    </li>
  );
};

const Header: React.FC = () => {
  const location = useLocation();
  const currentPath = location.pathname;

  const getPageTitle = (): string => {
    switch (currentPath) {
      case "/feed":
        return "Feed";
      case "/resume":
        return "Resume";
      default:
        return "";
    }
  };

  const navItems = [
    { path: "/feed", label: "Feed" },
    { path: "/resume", label: "Resume" },
    { path: "/", label: "Home" }
  ];

  return (
    <header className={headerStyle.header}>
      <div className={headerStyle.inner}>
        {currentPath !== "/" && (
          <div className={headerStyle.logo}>
            {getPageTitle()}
          </div>
        )}
        <ul className={headerStyle.nav}>
          {navItems.map((item) => {
            if (currentPath !== item.path) {
              return (
                <NavItem
                  key={item.path}
                  item={item}
                  currentPath={currentPath}
                />
              );
            }
            return null;
          })}
        </ul>
      </div>
    </header>
  );
};

export default Header;