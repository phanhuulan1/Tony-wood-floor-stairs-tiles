import Link from "next/link";
import ServicesFlooringInstallations from "../../assets/images/services-flooring-installations.png";
import ServicesStairsInstallations from "../../assets/images/services-stairs-installations.png";

const ServicesPage = () => {
  return (
    <main id="services-page">
      <section className="section floor-section">
        <div className="container">
          <div className="floor-item-img">
            <img
              className="floor-img"
              src={ServicesFlooringInstallations.src}
              alt="Flooring Installations"
            />
          </div>
          <div className="floor-item-content">
            <div className="floor-wrapper">
              <p className="floor-title">Flooring Installations</p>
              <p className="floor-desc">
                Add a description Flooring Installation We offer a wide array of
                residential and commercial flooring installation and sales
                services at affordable rates. Laminate Hardwood Engineered
                Hardwood Floor Vinyl Composite Tile (VCT) & Vinyl Click Tile
                Carpet & Carpet Tile Tile Floor Installation Much more!n here.
              </p>
              <Link className="floor-link" href="/about">
                Read more
              </Link>
            </div>
          </div>
        </div>
      </section>
      <section className="section stairs-section">
        <div className="container">
          <ul className="row stairs-list">
            <li className="col-6 col-small-6 stairs-item">
              <div className="stairs-wrapper">
                <img
                  className="stairs-img"
                  src={ServicesStairsInstallations.src}
                  alt="Stairs Installations"
                />
              </div>
            </li>
            <li className="col-6 col-small-6 stairs-item">
              <div className="stairs-wrapper">
                <p className="stairs-title">Stairs Installations</p>
                <p className="stairs-desc">
                  To install a staircase that will be functional, decorative,
                  and safe, certain guidelines must be observed. The type of
                  material to choose is a primary consideration. While stairs
                  have been constructed using a variety of materials over the
                  years, wood stairs remain the most common. Here’s some
                  suggestions on how to install wood stairs.
                </p>
                <Link className="stairs-link" href="/about">
                  Read more
                </Link>
              </div>
            </li>
          </ul>
        </div>
      </section>
    </main>
  );
};
export default ServicesPage;
