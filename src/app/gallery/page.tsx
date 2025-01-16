"use client";
import { useEffect } from "react";
import lightGallery from "lightgallery";
import "lightgallery/css/lightgallery.css";
import GalleryImg1 from "../../assets/images/gallery-1.jpeg";
import GalleryImg2 from "../../assets/images/gallery-2.png";
import GalleryImg3 from "../../assets/images/gallery-3.jpeg";
import GalleryImg4 from "../../assets/images/gallery-4.jpeg";
import GalleryImg5 from "../../assets/images/gallery-5.jpeg";
import GalleryImg6 from "../../assets/images/gallery-6.jpeg";
import Link from "next/link";

const GalleryPage = () => {

  interface GalleryInstance {
    destroy: () => void;
  }

  useEffect(() => {
    const galleryElement: HTMLElement | null = document.getElementById("gallery-of-page");
    // Backup original console.log
    const originalConsoleLog: typeof console.log = console.log;

    // Disable console.log
    console.log = () => {};
    let galleryInstance: GalleryInstance | undefined;
    if (galleryElement) {
      galleryInstance = lightGallery(galleryElement, {
        plugins: [],
        speed: 500,
      }) as GalleryInstance;
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
    <main id="gallery-page">
      <section className="section gallery-section">
        <div className="container">
          <div style={{display: "flex", justifyContent: "space-between", alignItems: "baseline"}}>
            <h1 className="section-title">Gallery</h1>
            <div className="social-media" style={{ fontSize: "1.5rem"}}>
            <Link
             
              className="wrapper-instagram"
              href="https://www.instagram.com/tonywoodfloorstairs"
            >
              <i className="fa-brands fa-instagram"></i>
            </Link>
            <Link
              style={{padding: "0 15px"}}
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
          <p className="section-sub-title top">Our latest and best photos</p>
          <p className="section-sub-title">
            We love to take pictures and show them to the world.
          </p>
          <div id="gallery-of-page" className="row gallery-list">
            <a
              href={GalleryImg1.src}
              className="col-4 col-small-6 gallery-item"
            >
              <div className="gallery-wrapper-img">
                <img className="gallery-img" src={GalleryImg1.src} alt="GalleryImg" />
              </div>
            </a>
            <a
              href={GalleryImg2.src}
              className="col-4 col-small-6 gallery-item"
            >
              <div className="gallery-wrapper-img">
                <img className="gallery-img" src={GalleryImg2.src} alt="GalleryImg" />
              </div>
            </a>
            <a
              href={GalleryImg3.src}
              className="col-4 col-small-6 gallery-item"
            >
              <div className="gallery-wrapper-img">
                <img className="gallery-img" src={GalleryImg3.src} alt="GalleryImg" />
              </div>
            </a>
            <a
              href={GalleryImg4.src}
              className="col-4 col-small-6 gallery-item"
            >
              <div className="gallery-wrapper-img">
                <img className="gallery-img" src={GalleryImg4.src} alt="GalleryImg" />
              </div>
            </a>
            <a
              href={GalleryImg5.src}
              className="col-4 col-small-6 gallery-item"
            >
              <div className="gallery-wrapper-img">
                <img className="gallery-img" src={GalleryImg5.src} alt="GalleryImg" />
              </div>
            </a>
            <a
              href={GalleryImg6.src}
              className="col-4 col-small-6 gallery-item"
            >
              <div className="gallery-wrapper-img">
                <img className="gallery-img" src={GalleryImg6.src} alt="GalleryImg" />
              </div>
            </a>
          </div>
        </div>
      </section>
    </main>
  );
};
export default GalleryPage;
