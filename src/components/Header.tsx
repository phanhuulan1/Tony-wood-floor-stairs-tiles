"use client";
import TheCutFlooringLogo from "../assets/images/the-cut-flooring-logo.png";
import Link from "next/link";
import React, { useCallback, useState } from "react";

const Header = (props: any) => {
  const [active, setActive] = useState(location.pathname);
  const [isOpen, setIsOpen] = useState(false);

  const Menus = [
    {
      name: "Home",
      link: "/",
    },
    {
      name: "Services",
      link: "/services",
    },
    {
      name: "About",
      link: "/about",
    },
    {
      name: "Gallery",
      link: "/gallery",
    },
    {
      name: "Location",
      link: "/location",
    },
    {
      name: "Contact us",
      link: "/contact-us",
    },
  ];

  const toggleMenu = useCallback(() => {
    setIsOpen(!isOpen);
  }, [isOpen]);

  return (
    <header className="section header-section">
      <div className="header-menu-desktop">
        <div className="header-top">
          <div className="instagram-icon">
            <i className="fa-brands fa-instagram"></i>
          </div>
          <div className="header-logo">
            <Link className="header-link" href="/">
              <div className="wrapper-logo">
                <img
                  className="the-cut-logo"
                  src={TheCutFlooringLogo.src}
                  alt="The cut flooring Logo"
                />
              </div>
            </Link>
          </div>
        </div>
        <div className="divider-line" />
        <ul className="header-menu">
          {Menus.map((menu, index) => (
            <li
              key={index}
              className={`header-menu-item ${
                active === menu.link ? "is-active" : ""
              }`}
            >
              <Link href={menu.link} onClick={() => setActive(menu.link)}>
                <span className="header-menu-link">{menu.name}</span>
              </Link>
            </li>
          ))}
        </ul>
      </div>
      <div className="header-menu-mobile">
        <div className="menu-mobile-top">
          <div className="header-logo">
            <Link className="header-link" href="/">
              <div className="wrapper-logo">
                <img
                  className="the-cut-logo"
                  src={TheCutFlooringLogo.src}
                  alt="The cut flooring Logo"
                />
              </div>
            </Link>
          </div>
          <div className="wrapper-hamburger-icon">
            <i
              className={`fa-solid ${
                isOpen ? "fa-xmark close-icon" : "fa-bars hamburger-icon"
              }`}
              onClick={toggleMenu}
            ></i>
          </div>
        </div>
        <ul
          className={`header-menu menu-mobile ${
            isOpen ? "menu-mobile-open" : ""
          }`}
        >
          {Menus.map((menu, index) => (
            <li
              key={index}
              className={`header-menu-item ${
                active === menu.link ? "is-active" : ""
              }`}
              onClick={() => setIsOpen(false)}
            >
              <Link href={menu.link} onClick={() => setActive(menu.link)}>
                <span className="header-menu-link">{menu.name}</span>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </header>
  );
};
export default Header;
