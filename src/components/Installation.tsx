/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";
import { useCallback, useRef, useState } from "react";
import "lightgallery/css/lightgallery.css";

import LightGallery from "lightgallery/react";
import lgZoom from "lightgallery/plugins/zoom";
import lgVideo from "lightgallery/plugins/video";

// start Vinyl And Laminate
import VinylAndLaminate1 from "../assets/vinyl-and-laminates/vinyl-and-laminate-1.jpg";
import VinylAndLaminate2 from "../assets/vinyl-and-laminates/vinyl-and-laminate-2.jpg";
import VinylAndLaminate3 from "../assets/vinyl-and-laminates/vinyl-and-laminate-3.jpg";
import VinylAndLaminate4 from "../assets/vinyl-and-laminates/vinyl-and-laminate-4.jpg";
import VinylAndLaminate5 from "../assets/vinyl-and-laminates/vinyl-and-laminate-5.jpg";
import VinylAndLaminate6 from "../assets/vinyl-and-laminates/vinyl-and-laminate-6.jpg";
import VinylAndLaminate7 from "../assets/vinyl-and-laminates/vinyl-and-laminate-7.jpg";
import VinylAndLaminate8 from "../assets/vinyl-and-laminates/vinyl-and-laminate-8.jpg";
import VinylAndLaminate9 from "../assets/vinyl-and-laminates/vinyl-and-laminate-9.jpg";
import VinylAndLaminate10 from "../assets/vinyl-and-laminates/vinyl-and-laminate-10.jpg";
import VinylAndLaminate11 from "../assets/vinyl-and-laminates/vinyl-and-laminate-11.jpg";
import VinylAndLaminate12 from "../assets/vinyl-and-laminates/vinyl-and-laminate-12.jpg";
import VinylAndLaminate13 from "../assets/vinyl-and-laminates/vinyl-and-laminate-13.jpg";
import VinylAndLaminate14 from "../assets/vinyl-and-laminates/vinyl-and-laminate-14.jpg";
import VinylAndLaminate15 from "../assets/vinyl-and-laminates/vinyl-and-laminate-15.jpg";
import VinylAndLaminate16 from "../assets/vinyl-and-laminates/vinyl-and-laminate-16.jpg";
import VinylAndLaminate17 from "../assets/vinyl-and-laminates/vinyl-and-laminate-17.jpg";
import VinylAndLaminate18 from "../assets/vinyl-and-laminates/vinyl-and-laminate-18.jpg";
import VinylAndLaminate19 from "../assets/vinyl-and-laminates/vinyl-and-laminate-19.jpg";
import VinylAndLaminate20 from "../assets/vinyl-and-laminates/vinyl-and-laminate-20.jpg";
import VinylAndLaminate21 from "../assets/vinyl-and-laminates/vinyl-and-laminate-21.jpg";
import VinylAndLaminate22 from "../assets/vinyl-and-laminates/vinyl-and-laminate-22.jpg";
import VinylAndLaminate23 from "../assets/vinyl-and-laminates/vinyl-and-laminate-23.jpg";
// emd Vinyl And Laminate

// start vent
import Vent2 from "../assets/vents/vent-2.jpg";
import Vent3 from "../assets/vents/vent-3.jpg";
import Vent4 from "../assets/vents/vent-4.jpg";
import Vent5 from "../assets/vents/vent-5.jpg";
import Vent6 from "../assets/vents/vent-6.jpg";
import Vent7 from "../assets/vents/vent-7.jpg";
import Vent8 from "../assets/vents/vent-8.jpg";
// end vent

// start tile
import Tile1 from "../assets/tiles/tile-1.jpg";
import Tile2 from "../assets/tiles/tile-2.jpg";
import Tile3 from "../assets/tiles/tile-3.jpg";
import Tile4 from "../assets/tiles/tile-4.jpg";
import Tile5 from "../assets/tiles/tile-5.jpg";
import Tile6 from "../assets/tiles/tile-6.jpg";
import Tile7 from "../assets/tiles/tile-7.jpg";
import Tile8 from "../assets/tiles/tile-8.jpg";
import Tile9 from "../assets/tiles/tile-9.jpg";
import Tile10 from "../assets/tiles/tile-10.jpg";
import Tile11 from "../assets/tiles/tile-11.jpg";
import Tile12 from "../assets/tiles/tile-12.jpg";
// end tile

// start stair
import Stair1 from "../assets/stairs/stair-1.jpeg";
import Stair2 from "../assets/stairs/stair-2.jpg";
import Stair3 from "../assets/stairs/stair-3.jpg";
import Stair4 from "../assets/stairs/stair-4.jpg";
import Stair5 from "../assets/stairs/stair-5.jpg";
import Stair6 from "../assets/stairs/stair-6.jpg";
import Stair7 from "../assets/stairs/stair-7.jpg";
import Stair8 from "../assets/stairs/stair-8.jpg";
import Stair9 from "../assets/stairs/stair-9.jpg";
import Stair10 from "../assets/stairs/stair-10.jpg";
import Stair11 from "../assets/stairs/stair-11.jpg";
import Stair12 from "../assets/stairs/stair-12.jpg";
import Stair13 from "../assets/stairs/stair-13.jpg";
import Stair14 from "../assets/stairs/stair-14.jpg";
import Stair15 from "../assets/stairs/stair-15.jpg";
import Stair16 from "../assets/stairs/stair-16.jpg";
import Stair17 from "../assets/stairs/stair-17.jpg";
import Stair18 from "../assets/stairs/stair-18.jpg";
import Stair19 from "../assets/stairs/stair-19.jpg";
// end stair

// start sand-flooring
import SandFlooring1 from "../assets/sand-floorings/sand-flooring-1.jpg";
import SandFlooring2 from "../assets/sand-floorings/sand-flooring-2.jpg";
import SandFlooring3 from "../assets/sand-floorings/sand-flooring-3.jpg";
import SandFlooring4 from "../assets/sand-floorings/sand-flooring-4.jpg";
import SandFlooring5 from "../assets/sand-floorings/sand-flooring-5.jpg";
import SandFlooring6 from "../assets/sand-floorings/sand-flooring-6.jpg";
import SandFlooring7 from "../assets/sand-floorings/sand-flooring-7.jpg";
import SandFlooring8 from "../assets/sand-floorings/sand-flooring-8.jpg";
import SandFlooring9 from "../assets/sand-floorings/sand-flooring-9.jpg";
import SandFlooring10 from "../assets/sand-floorings/sand-flooring-10.jpg";
import SandFlooring11 from "../assets/sand-floorings/sand-flooring-11.jpg";
import SandFlooring12 from "../assets/sand-floorings/sand-flooring-12.jpg";
// end sand-flooring

// start flooring
import Flooring1 from "../assets/floorings/flooring-1.jpg";
import Flooring2 from "../assets/floorings/flooring-2.jpg";
import Flooring3 from "../assets/floorings/flooring-3.jpg";
import Flooring4 from "../assets/floorings/flooring-4.jpg";
import Flooring5 from "../assets/floorings/flooring-5.jpg";
import Flooring6 from "../assets/floorings/flooring-6.jpg";
import Flooring7 from "../assets/floorings/flooring-7.jpg";
import Flooring8 from "../assets/floorings/flooring-8.jpg";
import Flooring9 from "../assets/floorings/flooring-9.jpg";
import Flooring10 from "../assets/floorings/flooring-10.jpg";
import Flooring11 from "../assets/floorings/flooring-11.jpg";
import Flooring12 from "../assets/floorings/flooring-12.jpg";
import Flooring13 from "../assets/floorings/flooring-13.jpg";
import Flooring14 from "../assets/floorings/flooring-14.jpg";
import Flooring15 from "../assets/floorings/flooring-15.jpg";
import Flooring16 from "../assets/floorings/flooring-16.jpg";
import Flooring17 from "../assets/floorings/flooring-17.jpg";
import Flooring18 from "../assets/floorings/flooring-18.jpg";
import Flooring19 from "../assets/floorings/flooring-19.jpg";
import Flooring20 from "../assets/floorings/flooring-20.jpg";
import Flooring21 from "../assets/floorings/flooring-21.jpg";
import Flooring22 from "../assets/floorings/flooring-22.jpg";
import Flooring23 from "../assets/floorings/flooring-23.jpg";
import Flooring24 from "../assets/floorings/flooring-24.jpg";
import Flooring25 from "../assets/floorings/flooring-25.jpg";
import Flooring26 from "../assets/floorings/flooring-26.jpg";
import Flooring27 from "../assets/floorings/flooring-27.jpg";
import Flooring28 from "../assets/floorings/flooring-28.jpg";
import Flooring29 from "../assets/floorings/flooring-29.jpg";
import Flooring30 from "../assets/floorings/flooring-30.jpg";
import Flooring31 from "../assets/floorings/flooring-31.jpg";
import Flooring32 from "../assets/floorings/flooring-32.jpg";
import Flooring33 from "../assets/floorings/flooring-33.jpg";
import Flooring34 from "../assets/floorings/flooring-34.jpg";
// end flooring

const Installation = () => {
  const lightGalleryVinylAndLaminatesRef = useRef<any>(null);
  const lightGalleryVentsRef = useRef<any>(null);
  const lightGalleryTilesRef = useRef<any>(null);
  const lightGalleryStairsRef = useRef<any>(null);
  const lightGallerySandFlooringsRef = useRef<any>(null);
  const lightGalleryFlooringsRef = useRef<any>(null);

  const [vinylAndLaminates] = useState([
    {
      src: VinylAndLaminate1.src,
    },
    {
      src: VinylAndLaminate2.src,
    },
    {
      src: VinylAndLaminate3.src,
    },
    {
      src: VinylAndLaminate4.src,
    },
    {
      src: VinylAndLaminate5.src,
    },
    {
      src: VinylAndLaminate6.src,
    },
    {
      src: VinylAndLaminate7.src,
    },
    {
      src: VinylAndLaminate8.src,
    },
    {
      src: VinylAndLaminate9.src,
    },
    {
      src: VinylAndLaminate10.src,
    },
    {
      src: VinylAndLaminate11.src,
    },
    {
      src: VinylAndLaminate12.src,
    },
    {
      src: VinylAndLaminate13.src,
    },
    {
      src: VinylAndLaminate14.src,
    },
    {
      src: VinylAndLaminate15.src,
    },
    {
      src: VinylAndLaminate16.src,
    },
    {
      src: VinylAndLaminate17.src,
    },
    {
      src: VinylAndLaminate18.src,
    },
    {
      src: VinylAndLaminate19.src,
    },
    {
      src: VinylAndLaminate20.src,
    },
    {
      src: VinylAndLaminate21.src,
    },
    {
      src: VinylAndLaminate22.src,
    },
    {
      src: VinylAndLaminate23.src,
    },
  ]);

  const [vents] = useState([
    {
      src: Vent2.src,
    },
    {
      src: Vent3.src,
    },
    {
      src: Vent4.src,
    },
    {
      src: Vent5.src,
    },
    {
      src: Vent6.src,
    },
    {
      src: Vent7.src,
    },
    {
      src: Vent8.src,
    },
  ]);

  const [tiles] = useState([
    {
      src: Tile1.src,
    },
    {
      src: Tile2.src,
    },
    {
      src: Tile3.src,
    },
    {
      src: Tile4.src,
    },
    {
      src: Tile5.src,
    },
    {
      src: Tile6.src,
    },
    {
      src: Tile7.src,
    },
    {
      src: Tile8.src,
    },
    {
      src: Tile9.src,
    },
    {
      src: Tile10.src,
    },
    {
      src: Tile11.src,
    },
    {
      src: Tile12.src,
    },
  ]);

  const [stairs] = useState([
    {
      src: Stair1.src,
    },
    {
      src: Stair2.src,
    },
    {
      src: Stair3.src,
    },
    {
      src: Stair4.src,
    },
    {
      src: Stair5.src,
    },
    {
      src: Stair6.src,
    },
    {
      src: Stair7.src,
    },
    {
      src: Stair8.src,
    },
    {
      src: Stair9.src,
    },
    {
      src: Stair10.src,
    },
    {
      src: Stair11.src,
    },
    {
      src: Stair12.src,
    },
    {
      src: Stair13.src,
    },
    {
      src: Stair14.src,
    },
    {
      src: Stair15.src,
    },
    {
      src: Stair16.src,
    },
    {
      src: Stair17.src,
    },
    {
      src: Stair18.src,
    },
    {
      src: Stair19.src,
    },
  ]);

  const [sandFloorings] = useState([
    {
      src: SandFlooring1.src,
    },
    {
      src: SandFlooring2.src,
    },
    {
      src: SandFlooring3.src,
    },
    {
      src: SandFlooring4.src,
    },
    {
      src: SandFlooring5.src,
    },
    {
      src: SandFlooring6.src,
    },
    {
      src: SandFlooring7.src,
    },
    {
      src: SandFlooring8.src,
    },
    {
      src: SandFlooring9.src,
    },
    {
      src: SandFlooring10.src,
    },
    {
      src: SandFlooring11.src,
    },
    {
      src: SandFlooring12.src,
    },
    {
      src: SandFlooring12.src,
    },
  ]);

  const [floorings] = useState([
    {
      src: Flooring1.src,
    },
    {
      src: Flooring2.src,
    },
    {
      src: Flooring3.src,
    },
    {
      src: Flooring4.src,
    },
    {
      src: Flooring5.src,
    },
    {
      src: Flooring6.src,
    },
    {
      src: Flooring7.src,
    },
    {
      src: Flooring8.src,
    },
    {
      src: Flooring9.src,
    },
    {
      src: Flooring10.src,
    },
    {
      src: Flooring11.src,
    },
    {
      src: Flooring12.src,
    },
    {
      src: Flooring13.src,
    },
    {
      src: Flooring14.src,
    },
    {
      src: Flooring15.src,
    },
    {
      src: Flooring16.src,
    },
    {
      src: Flooring17.src,
    },
    {
      src: Flooring18.src,
    },
    {
      src: Flooring19.src,
    },
    {
      src: Flooring20.src,
    },
    {
      src: Flooring21.src,
    },
    {
      src: Flooring22.src,
    },
    {
      src: Flooring23.src,
    },
    {
      src: Flooring24.src,
    },
    {
      src: Flooring25.src,
    },
    {
      src: Flooring26.src,
    },
    {
      src: Flooring27.src,
    },
    {
      src: Flooring28.src,
    },
    {
      src: Flooring29.src,
    },
    {
      src: Flooring30.src,
    },
    {
      src: Flooring31.src,
    },
    {
      src: Flooring32.src,
    },
    {
      src: Flooring33.src,
    },
    {
      src: Flooring34.src,
    },
  ]);

  // start openGallery
  const openGalleryVinylAndLaminates = useCallback(() => {
    lightGalleryVinylAndLaminatesRef.current.openGallery();
  }, []);

  const openGalleryVents = useCallback(() => {
    lightGalleryVentsRef.current.openGallery();
  }, []);

  const openGalleryTiles = useCallback(() => {
    lightGalleryTilesRef.current.openGallery();
  }, []);

  const openGalleryStairs = useCallback(() => {
    lightGalleryStairsRef.current.openGallery();
  }, []);

  const openGallerySandFloorings = useCallback(() => {
    lightGallerySandFlooringsRef.current.openGallery();
  }, []);

  const openGalleryFloorings = useCallback(() => {
    lightGalleryFlooringsRef.current.openGallery();
  }, []);
  // end openGallery

  // start onInit
  const onInitVinylAndLaminates = useCallback((detail: any) => {
    if (detail) {
      lightGalleryVinylAndLaminatesRef.current = detail.instance;
    }
  }, []);

  const onInitVents = useCallback((detail: any) => {
    if (detail) {
      lightGalleryVentsRef.current = detail.instance;
    }
  }, []);

  const onInitTiles = useCallback((detail: any) => {
    if (detail) {
      lightGalleryTilesRef.current = detail.instance;
    }
  }, []);

  const onInitStairs = useCallback((detail: any) => {
    if (detail) {
      lightGalleryStairsRef.current = detail.instance;
    }
  }, []);

  const onInitSandFloorings = useCallback((detail: any) => {
    if (detail) {
      lightGallerySandFlooringsRef.current = detail.instance;
    }
  }, []);

  const onInitFloorings = useCallback((detail: any) => {
    if (detail) {
      lightGalleryFlooringsRef.current = detail.instance;
    }
  }, []);
  // end onInit

  return (
    <section className="section installation-section">
      <div className="container">
        <h2 className="section-title">TYPES OF FLOORING INSTALLATION</h2>
        <div className="row installation-list">
          <div className="col-4 col-small-6 installation-item">
            <div className="wrapper-img">
              <img onClick={openGalleryFloorings} src={Flooring1.src} />
            </div>
            <div className="card-footer">
              <p className="card-footer-title">Flooring</p>
            </div>
            <LightGallery
              elementClassNames="custom-classname"
              dynamic
              dynamicEl={floorings}
              onInit={onInitFloorings}
              plugins={[lgZoom, lgVideo]}
            ></LightGallery>
          </div>
          <div className="col-4 col-small-6 installation-item">
            <div className="wrapper-img">
              <img onClick={openGallerySandFloorings} src={SandFlooring1.src} />
            </div>
            <div className="card-footer">
              <p className="card-footer-title">Sand Flooring</p>
            </div>
            <LightGallery
              elementClassNames="custom-classname"
              dynamic
              dynamicEl={sandFloorings}
              onInit={onInitSandFloorings}
              plugins={[lgZoom, lgVideo]}
            ></LightGallery>
          </div>
          <div className="col-4 col-small-6 installation-item">
            <div className="wrapper-img">
              <img
                onClick={openGalleryVinylAndLaminates}
                src={VinylAndLaminate1.src}
              />
            </div>
            <div className="card-footer">
              <p className="card-footer-title">Laminate & Vinyl</p>
            </div>
            <LightGallery
              elementClassNames="custom-classname"
              dynamic
              dynamicEl={vinylAndLaminates}
              onInit={onInitVinylAndLaminates}
              plugins={[lgZoom, lgVideo]}
            ></LightGallery>
          </div>
          <div className="col-4 col-small-6 installation-item">
            <div className="wrapper-img">
              <img onClick={openGalleryStairs} src={Stair1.src} />
            </div>
            <div className="card-footer">
              <p className="card-footer-title">Stairs</p>
            </div>
            <LightGallery
              elementClassNames="custom-classname"
              dynamic
              dynamicEl={stairs}
              onInit={onInitStairs}
              plugins={[lgZoom, lgVideo]}
            ></LightGallery>
          </div>
          <div className="col-4 col-small-6 installation-item">
            <div className="wrapper-img">
              <img onClick={openGalleryTiles} src={Tile1.src} />
            </div>
            <div className="card-footer">
              <p className="card-footer-title">Tiles</p>
            </div>
            <LightGallery
              elementClassNames="custom-classname"
              dynamic
              dynamicEl={tiles}
              onInit={onInitTiles}
              plugins={[lgZoom, lgVideo]}
            ></LightGallery>
          </div>
          <div className="col-4 col-small-6 installation-item">
            <div className="wrapper-img">
              <img onClick={openGalleryVents} src={Vent2.src} />
            </div>
            <div className="card-footer">
              <p className="card-footer-title">Vents</p>
            </div>
            <LightGallery
              elementClassNames="custom-classname"
              dynamic
              dynamicEl={vents}
              onInit={onInitVents}
              plugins={[lgZoom, lgVideo]}
            ></LightGallery>
          </div>
        </div>
      </div>
    </section>
  );
};
export default Installation;
