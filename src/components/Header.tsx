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
            href="https://www.instagram.com/tonywoodfloorstairs"
          >
            <i className="fa-brands fa-instagram"></i>
          </Link>
          <Link
            className="tiktok-icon"
            href="https://www.tiktok.com/@tonywoodfloorstair?_t=ZS-8sr9mYJMuYh&_r=1"
          >
            <i className="fa-brands fa-tiktok"></i>
          </Link>
            <Link
            className="whatsapp-icon"
            href="https://wa.me/16475733136"
            >
            <i className="fa-brands fa-whatsapp"></i>
          </Link>
          <div className="header-logo">
            <Link className="header-link" href="/">
              <div style={{marginRight: "170px"}} className="wrapper-logo">
                <img
                  className="the-cut-logo"
                  src={TheCutFlooringLogo.src}
                  alt="Tony wood floor stairs & tiles Logo"
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
                  alt="Tony wood floor stairs & tiles Logo"
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
