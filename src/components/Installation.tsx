"use client";
import { useEffect } from "react";
import lightGallery from "lightgallery";
import "lightgallery/css/lightgallery.css";

import CapetTile from "../assets/images/capettile.jpeg";
import Engineered from "../assets/images/engineered.jpeg";
import Flooring from "../assets/images/flooring.jpeg";
import Hardwood from "../assets/images/hardwood.jpeg";
import Laminate from "../assets/images/laminate.jpeg";
import Stairs from "../assets/images/stairs.png";
import Refinishing from "../assets/images/refinishing.jpeg";
import Recapping from "../assets/images/recapping.jpeg";
import Railing from "../assets/images/railing.jpeg";
import Vinyl from "../assets/images/vinyl.jpeg";

const Installation = () => {
  useEffect(() => {
    const galleryElement = document.getElementById("gallery");

    // Backup original console.log
    const originalConsoleLog = console.log;

    // Disable console.log
    console.log = () => {};

    if (galleryElement) {
      lightGallery(galleryElement, {
        plugins: [],
        speed: 500,
      });
    }

    // Restore original console.log after lightGallery initialization
    console.log = originalConsoleLog;
  }, []);

  return (
    <section className="section installation-section">
      <div className="container">
        <h2 className="section-title">TYPES OF FLOORING INSTALLATION</h2>
        <div id="gallery" className="row installation-list">
          <a
            href={Flooring.src}
            className="gallery-item col-4 col-small-6 installation-item"
          >
            <div className="wrapper-img">
              <img
                className="installation-img"
                src={Flooring.src}
                alt="Flooring"
              />
            </div>
            <div className="card-footer">
              <p className="card-footer-title">Flooring</p>
            </div>
          </a>
          <a
            href={Hardwood.src}
            className="gallery-item col-4 col-small-6 installation-item"
          >
            <div className="wrapper-img">
              <img
                className="installation-img"
                src={Hardwood.src}
                alt="Hardwood"
              />
            </div>
            <div className="card-footer">
              <p className="card-footer-title"> Hardwood</p>
            </div>
          </a>
          <a
            href={Engineered.src}
            className="gallery-item col-4 col-small-6 installation-item"
          >
            <div className="wrapper-img">
              <img
                className="installation-img"
                src={Engineered.src}
                alt="Engineered"
              />
            </div>
            <div className="card-footer">
              <p className="card-footer-title">Engineered</p>
            </div>
          </a>
          <a
            href={Laminate.src}
            className="gallery-item col-4 col-small-6 installation-item"
          >
            <div className="wrapper-img">
              <img
                className="installation-img"
                src={Laminate.src}
                alt="Laminate"
              />
            </div>
            <div className="card-footer">
              <p className="card-footer-title">Laminate</p>
            </div>
          </a>
          <a
            href={CapetTile.src}
            className="gallery-item col-4 col-small-6 installation-item"
          >
            <div className="wrapper-img">
              <img
                className="installation-img"
                src={CapetTile.src}
                alt="CapetTile"
              />
            </div>
            <div className="card-footer">
              <p className="card-footer-title">CapetTile</p>
            </div>
          </a>
          <a
            href={Stairs.src}
            className="gallery-item col-4 col-small-6 installation-item"
          >
            <div className="wrapper-img">
              <img className="installation-img" src={Stairs.src} alt="Stairs" />
            </div>
            <div className="card-footer">
              <p className="card-footer-title">Stairs</p>
            </div>
          </a>
          <a
            href={Refinishing.src}
            className="gallery-item col-4 col-small-6 installation-item"
          >
            <div className="wrapper-img">
              <img
                className="installation-img"
                src={Refinishing.src}
                alt="Refinishing"
              />
            </div>
            <div className="card-footer">
              <p className="card-footer-title">Refinishing</p>
            </div>
          </a>
          <a
            href={Recapping.src}
            className="gallery-item col-4 col-small-6 installation-item"
          >
            <div className="wrapper-img">
              <img
                className="installation-img"
                src={Recapping.src}
                alt="Recapping"
              />
            </div>
            <div className="card-footer">
              <p className="card-footer-title">Recapping</p>
            </div>
          </a>
          <a
            href={Railing.src}
            className="gallery-item col-4 col-small-6 installation-item"
          >
            <div className="wrapper-img">
              <img
                className="installation-img"
                src={Railing.src}
                alt="Railing"
              />
            </div>
            <div className="card-footer">
              <p className="card-footer-title">Railing</p>
            </div>
          </a>
          <a
            href={Vinyl.src}
            className="gallery-item col-4 col-small-6 installation-item"
          >
            <div className="wrapper-img">
              <img className="installation-img" src={Vinyl.src} alt="Vinyl" />
            </div>
            <div className="card-footer">
              <p className="card-footer-title">Vinyl</p>
            </div>
          </a>
        </div>
      </div>
    </section>
  );
};
export default Installation;
