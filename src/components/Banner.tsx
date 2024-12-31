import Link from "next/link";
import BannerBackgroundImg from "../assets/images/banner-bg-img.jpeg";

const Banner = () => {
  return (
    <section className="section banner-section">
      <div className="banner-wrapper">
        <img
          className="banner-img"
          src={BannerBackgroundImg.src}
          alt="Banner Background Image"
        />
        <div className="banner-bg-overlay" />
        <div className="container banner-content">
          <h1 className="banner-title">FLOORING INSTALLATION</h1>
          <div className="banner-divider" />
          <h2 className="banner-sub-title">
            Residential & Commercial | Licensed & Insured.
          </h2>
          <div className="banner-wrapper-link">
            <Link className="banner-link" href="/">
              Rea more
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Banner;
