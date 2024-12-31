"use client";
import { useEffect } from "react";
import lightGallery from "lightgallery";
import "lightgallery/css/lightgallery.css";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import GalleryImg1 from "../../assets/images/gallery-1.jpeg";
import GalleryImg2 from "../../assets/images/gallery-2.png";
import GalleryImg3 from "../../assets/images/gallery-3.jpeg";
import GalleryImg4 from "../../assets/images/gallery-4.jpeg";
import GalleryImg5 from "../../assets/images/gallery-5.jpeg";
import GalleryImg6 from "../../assets/images/gallery-6.jpeg";

const GalleryPage = () => {
  useEffect(() => {
    const galleryElement = document.getElementById("gallery-of-page");
    if (galleryElement) {
      lightGallery(galleryElement, {
        plugins: [],
        speed: 500,
      });
    }
  }, []);
  
  return (
    <main id="gallery-page">
      <Header />
      <section className="section installation-section">
        <div className="container">
          <h1 className="section-title">Gallery</h1>
          <p className="section-sub-title top">Our latest and best photos</p>
          <p className="section-sub-title">
            We love to take pictures and show them to the world.
          </p>
          <div id="gallery-of-page" className="row installation-list">
            <a
              href={GalleryImg1.src}
              className="gallery-item col-4 col-small-6 installation-item"
            >
              <div className="wrapper-img">
                <img
                  className="installation-img"
                  src={GalleryImg1.src}
                  alt="Flooring"
                />
              </div>
            </a>
            <a
              href={GalleryImg2.src}
              className="gallery-item col-4 col-small-6 installation-item"
            >
              <div className="wrapper-img">
                <img
                  className="installation-img"
                  src={GalleryImg2.src}
                  alt="Hardwood"
                />
              </div>
            </a>
            <a
              href={GalleryImg3.src}
              className="gallery-item col-4 col-small-6 installation-item"
            >
              <div className="wrapper-img">
                <img
                  className="installation-img"
                  src={GalleryImg3.src}
                  alt="Engineered"
                />
              </div>
            </a>
            <a
              href={GalleryImg4.src}
              className="gallery-item col-4 col-small-6 installation-item"
            >
              <div className="wrapper-img">
                <img
                  className="installation-img"
                  src={GalleryImg4.src}
                  alt="Laminate"
                />
              </div>
            </a>
            <a
              href={GalleryImg5.src}
              className="gallery-item col-4 col-small-6 installation-item"
            >
              <div className="wrapper-img">
                <img
                  className="installation-img"
                  src={GalleryImg5.src}
                  alt="CapetTile"
                />
              </div>
            </a>
            <a
              href={GalleryImg6.src}
              className="gallery-item col-4 col-small-6 installation-item"
            >
              <div className="wrapper-img">
                <img
                  className="installation-img"
                  src={GalleryImg6.src}
                  alt="Stairs"
                />
              </div>
            </a>
          </div>
        </div>
      </section>
      <Footer />
    </main>
  );
};
export default GalleryPage;
