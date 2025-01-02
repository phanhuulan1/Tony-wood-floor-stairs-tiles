import Link from "next/link";
import AboutBannerBg from "../../assets/images/about-banner-bg.jpeg";

const AboutPage = () => {
  return (
    <main id="about-page">
      <section className="section banner-section">
        <div className="banner-wrapper">
          <img
            className="banner-img"
            src={AboutBannerBg.src}
            alt="Banner Background Image"
          />
          <div className="banner-bg-overlay" />
          <div className="container banner-content">
            <h1 className="banner-title">ABOUT US</h1>
          </div>
        </div>
      </section>
      <section className="section our-story-section">
        <div className="container">
          <p className="our-story-desc">
            Founded in 2020 by a group of individuals, bringing passion, various
            skills, expertise, and experiences to the table. With over 20 years
            of experience in their fields, “To Be Interior” was born.
            Specializing in residential and commercial general contracting,
            renovation, flooring installation, interior painting, interior
            installation and service, as well as material sales. All under one
            roof. Offering top notch quality of service while thriving to build
            long lasting relationships with our customers, their friends and
            families.
          </p>
        </div>
      </section>
      <section className="section why-us-section">
        <div className="container">
          <h2 className="section-title">What we do?</h2>
          <ul className="row why-us-list">
            <li className="col-4 col-small-12 why-us-item">
              <div className="card-body">
                <p className="card-title">Flooring Installation.</p>
                <p className="card-sub-title">
                  We offer a wide array of residential and commercial flooring
                  installation and sales services at affordable rates. Laminate,
                  Hardwood, Vinyl, Carpet, and much more!
                </p>
                <Link className="card-link" href="/services">
                  Services
                </Link>
              </div>
            </li>
            <li className="col-4 col-small-12 why-us-item">
              <div className="card-body">
                <p className="card-title">Stairs Installation.</p>
                <p className="card-sub-title">
                  If you need stair renovations, we can help you with installing
                  solid oak and maple stair tread and stair nosing to protect
                  edges from damaging and for new look for your house. If you
                  need stairs and railing installation, our experts can help you
                  in remodeling your stairs. We have more than 20 years of
                  experiencing in flooring and stairs field and we are happy to
                  discuss any residential, commercial or industrial project in
                  detail.
                </p>
                <Link className="card-link" href="/services">
                  Red more
                </Link>
              </div>
            </li>
            <li className="col-4 col-small-12 why-us-item">
              <div className="card-body">
                <p className="card-title">Building Material Sales.</p>
                <p className="card-sub-title">
                  We Can Supply Materials at competitive prices from reliable
                  manufacturers! Kick back and relax and let us do all the
                  worrying. Contact us for more info.
                </p>
                <Link className="card-link" href="/gallery">
                  Gallery
                </Link>
              </div>
            </li>
            <li className="col-4 col-small-12 why-us-item">
              <div className="card-body">
                <p className="card-title">General Contracting.</p>
                <p className="card-sub-title">
                  Offer a wide variety of residential and commercial
                  installation and renovation contracting services. Kitchen ,
                  dry wall and taping, handyman work, furniture assembly and
                  much more!
                </p>
                <Link className="card-link" href="/contact-us">
                  Contact us
                </Link>
              </div>
            </li>
          </ul>
        </div>
      </section>
    </main>
  );
};
export default AboutPage;
