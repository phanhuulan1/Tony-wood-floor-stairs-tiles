import Link from "next/link";
import MapComponent from "@/components/Maps";

const LocationPage = () => {
  return (
    <main id="location-page">
      <section className="section location-section">
        <div className="container">
          <div className="row">
            <div className="col-6 col-large-12">
              <MapComponent />
            </div>
            <div className="col-6 col-large-12">
              <div className="location-time">
                <div className="location-date">
                  <p>Monday – Friday</p>
                  <p>Open</p>
                </div>
                <div className="location-date">
                  <p>Saturday – Sunday</p>
                  <p>Closed</p>
                </div>
              </div>
              <div className="divider-line" />
              <div className="location-bottom">
                <div className="row">
                  <div className="col-6 col-small-12">
                    <div className="location-address">
                      <h4 className="location-title">Address</h4>
                      <p className="location-sub-title">
                        399 Humberline Dr 
                        Toronto ON M9W 5T5 Canada,
                      </p>
                    </div>
                  </div>
                  <div className="col-6 col-small-12">
                    <div className="location-contact">
                      <div className="location-phone">
                        <h4 className="location-title">Phone</h4>
                        <p className="location-sub-title">
                          <Link href="tel:6475733136">6475733136</Link>
                        </p>
                      </div>
                      <div className="location-email">
                        <h4 className="location-title">Email</h4>
                        <Link
                          href="mailto:hotuan1100@gmail.com"
                          className="location-sub-title email-link"
                        >
                          Hotuan1100@gmail.com
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};
export default LocationPage;
