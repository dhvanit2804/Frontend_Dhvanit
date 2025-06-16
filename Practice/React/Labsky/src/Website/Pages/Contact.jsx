import React from 'react'
import Header from '../Coman/Header'
import Navheader from '../Coman/Navheader'
import Footer from '../Coman/Footer'

const Contact = () => {
  return (
    <div>
      <Header />
      <Navheader title="Contact Us" name="Contact" />
      {/* Contact Start */}
      <div className="container-fluid py-5">
        <div className="container py-5">
          <div
            className="text-center mx-auto wow fadeInUp"
            data-wow-delay="0.1s"
            style={{ maxWidth: 600 }}
          >
            <h1 className="display-6 mb-3">
              Have Any Query? Feel Free To Contact Us
            </h1>
            <p className="mb-5">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur
              tellus augue, iaculis id elit eget, ultrices pulvinar tortor.
            </p>
          </div>
          <div className="row contact-info position-relative g-0 mb-5">
            <div className="col-lg-6">
              <a
                href="tel:+0123456789"
                className="d-flex justify-content-lg-center bg-primary p-4"
              >
                <div className="icon-box-light flex-shrink-0">
                  <i className="bi bi-phone text-dark" />
                </div>
                <div className="ms-3">
                  <h5 className="text-white">Call Us</h5>
                  <h2 className="text-white mb-0">+012 345 67890</h2>
                </div>
              </a>
            </div>
            <div className="col-lg-6">
              <a
                href="mailto:info@example.com"
                className="d-flex justify-content-lg-center bg-primary p-4"
              >
                <div className="icon-box-light flex-shrink-0">
                  <i className="bi bi-envelope text-dark" />
                </div>
                <div className="ms-3">
                  <h5 className="text-white">Mail Us</h5>
                  <h2 className="text-white mb-0">info@example.com</h2>
                </div>
              </a>
            </div>
          </div>
          <div className="row g-5">
            <div className="col-lg-6 wow fadeInUp" data-wow-delay="0.1s">
              <p className="mb-4">
                The contact form is currently inactive. Get a functional and
                working contact form with Ajax &amp; PHP in a few minutes. Just
                copy and paste the files, add a little code and you're done.{" "}
                <a href="https://htmlcodex.com/contact-form">Download Now</a>.
              </p>
              <form>
                <div className="row g-3">
                  <div className="col-md-6">
                    <div className="form-floating">
                      <input
                        type="text"
                        className="form-control"
                        id="name"
                        placeholder="Your Name"
                      />
                      <label htmlFor="name">Your Name</label>
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="form-floating">
                      <input
                        type="email"
                        className="form-control"
                        id="email"
                        placeholder="Your Email"
                      />
                      <label htmlFor="email">Your Email</label>
                    </div>
                  </div>
                  <div className="col-12">
                    <div className="form-floating">
                      <input
                        type="text"
                        className="form-control"
                        id="subject"
                        placeholder="Subject"
                      />
                      <label htmlFor="subject">Subject</label>
                    </div>
                  </div>
                  <div className="col-12">
                    <div className="form-floating">
                      <textarea
                        className="form-control"
                        placeholder="Leave a message here"
                        id="message"
                        style={{ height: 200 }}
                        defaultValue={""}
                      />
                      <label htmlFor="message">Message</label>
                    </div>
                  </div>
                  <div className="col-12">
                    <button className="btn btn-primary py-3 px-5" type="submit">
                      Send Message
                    </button>
                  </div>
                </div>
              </form>
            </div>
            <div className="col-lg-6 wow fadeInUp" data-wow-delay="0.5s">
              <iframe
                className="w-100 h-100"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3001156.4288297426!2d-78.01371936852176!3d42.72876761954724!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4ccc4bf0f123a5a9%3A0xddcfc6c1de189567!2sNew%20York%2C%20USA!5e0!3m2!1sen!2sbd!4v1603794290143!5m2!1sen!2sbd"
                frameBorder={0}
                style={{ minHeight: 300, border: 0 }}
                allowFullScreen
                aria-hidden="false"
                tabIndex={0}
              />
            </div>
          </div>
        </div>
      </div>
      {/* Contact End */}

      <Footer />
    </div>
  );
}

export default Contact