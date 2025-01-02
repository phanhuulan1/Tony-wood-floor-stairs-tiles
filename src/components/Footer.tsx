"use client";
import Link from "next/link";
import TheCutFlooringLogo from "../assets/images/the-cut-flooring-logo.png";
import { useState } from "react";

const Footer = () => {
  const [active, setActive] = useState(location.pathname);

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

  return (
    <footer className="section footer-section">
      <div className="container">
        <div className="footer-logo">
          <Link className="footer-link" href="/">
            <div className="wrapper-logo">
              <img
                className="the-cut-logo"
                src={TheCutFlooringLogo.src}
                alt="The cut flooring Logo"
              />
            </div>
            <p className="the-cut-title">The Cut Flooring</p>
          </Link>
        </div>
        <div className="wrapper-footer-menu">
          <ul className="footer-menu">
            {Menus.map((menu, index) => (
              <li key={index} className="footer-menu-item">
                <Link href={menu.link} onClick={() => setActive(menu.link)}>
                  <span className="footer-menu-link">{menu.name}</span>
                </Link>
              </li>
            ))}
          </ul>
          <div className="footer-instagram">
            <div className="wrapper-instagram">
              <i className="fa-brands fa-instagram"></i>
            </div>
          </div>
        </div>
        <div className="divider-line" />
        <ul className="row">
          <li className="col-3 col-small-6">
            <div className="footer-item footer-address">
              <h3 className="footer-title">Address</h3>
              <p className="footer-sub-title">
                1196 Kennedy Rd, Scarborough <br /> Toronto , Ontario, ON M1P
                2L1, Canada,
              </p>
              <p className="footer-contact">
                <Link href="">6472963377</Link>
              </p>
              <p className="footer-contact">
                <Link href="">Thecutflooring@gmail.com</Link>
              </p>
            </div>
          </li>
          <li className="col-3 col-small-6">
            <div className="footer-item footer-about">
              <h3 className="footer-title">About us</h3>
              <p className="footer-sub-title">
                We are grateful for your support, if you have any additional
                questions feel free to call us at anytime from 12PM - 12AM.
              </p>
            </div>
          </li>
        </ul>
        <div className="divider-line" />
        <p className="copy-right">© 2024 The Cut</p>
      </div>
    </footer>
  );
};
export default Footer;
