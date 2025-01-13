import Link from "next/link";

const WhyUsComponent = () => {
  return (
    <section className="section why-us-section">
      <div className="container">
        <h2 className="section-title">Why us?</h2>
        <ul className="row why-us-list">
          <li className="col-4 col-small-12 why-us-item">
            <div className="card-body">
              <p className="card-title">
                Competitive <br />
                Pricing & Discounts
              </p>
              <p className="card-sub-title">
                We offer affordable rates while maintaining top notch quality of
                work we perform for all of our clients. Contact us 24/7 to get
                free estimate and we will respond in an hour.
              </p>
              <Link className="card-link" href="/contact-us">
                REQUEST QUOTE
              </Link>
            </div>
          </li>
          <li className="col-4 col-small-12 why-us-item">
            <div className="card-body">
              <p className="card-title">Clean, Accurate & Reliable Service</p>
              <p className="card-sub-title">
                We use proper equipment and our staff is clean, accurate and
                precise with their work. We also wear all required PPE.
              </p>
              <Link className="card-link" href="/gallery">
                GALLERY
              </Link>
            </div>
          </li>
          <li className="col-4 col-small-12 why-us-item">
            <div className="card-body">
              <p className="card-title">
                Excellent Customer Service & Easy Billing
              </p>
              <p className="card-sub-title">
                We provide excellent customer service. We offer free estimates
                on all jobs, as well as contactless payment options with online
                billing.
              </p>
              <Link className="card-link" href="/about">
                MORE INFO
              </Link>
            </div>
          </li>
        </ul>
      </div>
    </section>
  );
};
export default WhyUsComponent;
