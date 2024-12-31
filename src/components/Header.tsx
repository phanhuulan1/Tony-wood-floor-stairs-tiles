"use client";
import TheCutFlooringLogo from "../assets/images/the-cut-flooring-logo.png";
import Link from "next/link";
import React, { useCallback, useState } from "react";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

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
          <li className="header-menu-item is-active">
            <Link className="header-menu-link" href="/">
              Home
            </Link>
          </li>
          <li className="header-menu-item">
            <Link className="header-menu-link" href="/service">
              Services
            </Link>
          </li>
          <li className="header-menu-item">
            <Link className="header-menu-link" href="/about">
              About
            </Link>
          </li>
          <li className="header-menu-item">
            <Link className="header-menu-link" href="/gallery">
              Gallery
            </Link>
          </li>
          <li className="header-menu-item">
            <Link className="header-menu-link" href="/location">
              Location
            </Link>
          </li>
          <li className="header-menu-item">
            <Link className="header-menu-link" href="/contact-us">
              Contact us
            </Link>
          </li>
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
          <li className="header-menu-item is-active">
            <Link className="header-menu-link" href="/">
              Home
            </Link>
          </li>
          <li className="header-menu-item">
            <Link className="header-menu-link" href="/services">
              Services
            </Link>
          </li>
          <li className="header-menu-item">
            <Link className="header-menu-link" href="/about">
              About
            </Link>
          </li>
          <li className="header-menu-item">
            <Link className="header-menu-link" href="/gallery">
              Gallery
            </Link>
          </li>
          <li className="header-menu-item">
            <Link className="header-menu-link" href="/location">
              Location
            </Link>
          </li>
          <li className="header-menu-item">
            <Link className="header-menu-link" href="/contact-us">
              Contact us
            </Link>
          </li>
        </ul>
      </div>
    </header>
  );
};
export default Header;
