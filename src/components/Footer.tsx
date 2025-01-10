"use client";
import Link from "next/link";

const Footer = () => {
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
    <>
      <footer className="section footer-section">
        <div className="container">
          <div className="wrapper-footer-menu">
            <ul className="footer-menu">
              {Menus.map((menu, index) => (
                <li key={index} className="footer-menu-item">
                  <Link href={menu.link}>
                    <span className="footer-menu-link">{menu.name}</span>
                  </Link>
                </li>
              ))}
            </ul>
            <div className="footer-instagram">
              <Link
                className="wrapper-instagram"
                href="https://www.instagram.com/tonywoodfloorstairs"
              >
                <i className="fa-brands fa-instagram"></i>
              </Link>
              <Link
                className="wrapper-instagram"
                href="https://www.tiktok.com/@tonywoodfloorstair?_t=ZS-8sr9mYJMuYh&_r=1"
              >
                <i className="fa-brands fa-tiktok"></i>
              </Link>
              <Link
                className="wrapper-instagram"
                href="https://wa.me/16475733136"
              >
                <i className="fa-brands fa-whatsapp"></i>
              </Link>
            </div>
          </div>
          <div className="divider-line" />
          <div className="row location-list">
            <div className="col-3 col-small-6">
              <p>Milton, ON</p>
            </div>
            <div className="col-3 col-small-6">
              <p>Oakville, ON</p>
            </div>
            <div className="col-3 col-small-6">
              <p>Brampton, ON</p>
            </div>
            <div className="col-3 col-small-6">
              <p>Burlington, ON</p>
            </div>
            <div className="col-3 col-small-6">
              <p>Hamilton, ON</p>
            </div>
            <div className="col-3 col-small-6">
              <p>St.Catharines, ON</p>
            </div>
            <div className="col-3 col-small-6">
              <p>Ontario, Canada</p>
            </div>
            <div className="col-3 col-small-6">
              <p>Aurora, ON</p>
            </div>
            <div className="col-3 col-small-6">
              <p>Concord, ON</p>
            </div>
            <div className="col-3 col-small-6">
              <p>King City, ON</p>
            </div>
            <div className="col-3 col-small-6">
              <p>King, ON</p>
            </div>
            <div className="col-3 col-small-6">
              <p>Maple, On</p>
            </div>
            <div className="col-3 col-small-6">
              <p>Nobleton, ON</p>
            </div>
            <div className="col-3 col-small-6">
              <p>Richmond Hill, ON</p>
            </div>
            <div className="col-3 col-small-6">
              <p>Richmond Hill, ON</p>
            </div>
            <div className="col-3 col-small-6">
              <p>Woodbridge, ON</p>
            </div>
          </div>
          <ul className="row">
            <li className="col-3 col-small-6">
              <div className="footer-item footer-address">
                <h3 className="footer-title">Address</h3>
                <p className="footer-sub-title">
                  399 Humberline Dr <br /> Toronto ON M9W 5T5 Canada,
                </p>
                <p className="footer-contact">
                  <span className="footer-contact">Whats app: </span>
                  <Link href="https://wa.me/16475733136">6475733136</Link>
                </p>
                <p className="footer-contact">
                  <span className="footer-contact">Instagram: </span>
                  <Link href="https://www.instagram.com/tonywoodfloorstairs/">
                    TONYWOODFLOORSTAIRS
                  </Link>
                </p>
                <p className="footer-contact">
                  <span className="footer-contact">Email: </span>
                  <Link href="mailto:hotuan1100@gmail.com">
                    Hotuan1100@gmail.com
                  </Link>
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
          <p className="copy-right">© 2025 Tony wood floor stairs & tiles</p>
        </div>
      </footer>
      <div className="social-contact">
        <Link
          className="wrapper-instagram"
          href="https://www.instagram.com/tonywoodfloorstairs"
        >
          <i className="fa-brands fa-instagram"></i>
        </Link>
        <Link
          className="wrapper-instagram"
          href="https://www.tiktok.com/@tonywoodfloorstair?_t=ZS-8sr9mYJMuYh&_r=1"
        >
          <i className="fa-brands fa-tiktok"></i>
        </Link>
        <Link className="wrapper-instagram" href="https://wa.me/16475733136">
          <i className="fa-brands fa-whatsapp"></i>
        </Link>
      </div>
    </>
  );
};
export default Footer;
