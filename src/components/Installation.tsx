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


const Installation = () => {
  useEffect(() => {
    const galleryElement = document.getElementById("gallery");

    // Backup original console.log
    const originalConsoleLog = console.log;

    // Disable console.log
    console.log = () => {};

    let galleryInstance: ReturnType<typeof lightGallery> | undefined;
    if (galleryElement) {
      galleryInstance = lightGallery(galleryElement, {
        plugins: [],
        speed: 500,
      });
    }

    // Restore original console.log after lightGallery initialization
    console.log = originalConsoleLog;

    return () => {
      if (galleryInstance) {
        galleryInstance.destroy();
      }
    };
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
                alt="Sand Flooring"
              />
            </div>
            <div className="card-footer">
              <p className="card-footer-title">Sand Flooring</p>
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
                alt="Laminate & Vinyl"
              />
            </div>
            <div className="card-footer">
              <p className="card-footer-title">Laminate & Vinyl</p>
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
            href={Engineered.src}
            className="gallery-item col-4 col-small-6 installation-item"
          >
            <div className="wrapper-img">
              <img
                className="installation-img"
                src={Engineered.src}
                alt="Tiles"
              />
            </div>
            <div className="card-footer">
              <p className="card-footer-title">Tiles</p>
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
                alt="Vents"
              />
            </div>
            <div className="card-footer">
              <p className="card-footer-title">Vents</p>
            </div>
          </a>
        </div>
      </div>
    </section>
  );
};
export default Installation;
