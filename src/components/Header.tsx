"use client";
import React, { useCallback, useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";
import TheCutFlooringLogo from "../assets/images/the-cut-flooring-logo.png";

const Header = () => {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);
  const [active, setActive] = useState(pathname);

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

  useEffect(() => {
    setActive(pathname);
  }, [pathname]);

  return (
    <header className="section header-section">
      <div className="header-menu-desktop">
        <div className="header-top">
          <Link
            className="instagram-icon"
            href="https://instagram.com/thecutflooring?utm_medium=copy_link"
          >
            <i className="fa-brands fa-instagram"></i>
          </Link>
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
