import React from "react";

const Contact = () => {
  return (
    <>
      <section>
        <div className="container-fluid mt-1 bg-dark p-5">
          <h1 className="text-center text-light display-1 fw-bold mb-3">
            Contact Us
          </h1>
          <h4 className="text-center display-6 fw-normal text-light">
            We're here to help with all your automotive needs
          </h4>
        </div>
      </section>
      <section>
        <div className="container my-5">
          <div className="row">
            <div className="col-md-4 mb-4">
              <div className="card text-center h-100 border-0 shadow">
                <div className="card-body p-4">
                  <div
                    className="bg-dark text-light rounded-circle d-inline-flex align-items-center justify-content-center mb-3"
                    style={{ width: "80px", height: "80px" }}
                  >
                    <span className="fs-1">📍</span>
                  </div>
                  <h4 className="fw-bold">Visit Us</h4>
                  <p className="text-muted">
                    123 Car Market Street
                    <br />
                    Downtown District
                    <br />
                    New York, NY 10001
                  </p>
                </div>
              </div>
            </div>
            <div className="col-md-4 mb-4">
              <div className="card text-center h-100 border-0 shadow">
                <div className="card-body p-4">
                  <div
                    className="bg-dark text-light rounded-circle d-inline-flex align-items-center justify-content-center mb-3"
                    style={{ width: "80px", height: "80px" }}
                  >
                    <span className="fs-1">📞</span>
                  </div>
                  <h4 className="fw-bold">Call Us</h4>
                  <p className="text-muted">
                    Phone: +1 (555) 123-4567
                    <br />
                    Toll Free: 1-800-CAR-MKET
                    <br />
                    Available 24/7
                  </p>
                </div>
              </div>
            </div>
            <div className="col-md-4 mb-4">
              <div className="card text-center h-100 border-0 shadow">
                <div className="card-body p-4">
                  <div
                    className="bg-dark text-light rounded-circle d-inline-flex align-items-center justify-content-center mb-3"
                    style={{ width: "80px", height: "80px" }}
                  >
                    <span className="fs-1">✉️</span>
                  </div>
                  <h4 className="fw-bold">Email Us</h4>
                  <p className="text-muted">
                    info@carmarket.com
                    <br />
                    support@carmarket.com
                    <br />
                    sale@carmarket.com
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Form start */}
      <section>
        <div className="container-fluid bg-light p-5">
          <div className="container">
            <div className="row">
              <div className="col-md-6 mb-4">
                <h2 className="display-5 fw-bold mb-4">Send us a Message</h2>
                <form action="">
                  <div>
                    <div className="mb-3">
                      <label
                        htmlFor="exampleFormControlInput1"
                        className="form-label fw-bold"
                      >
                        Enter your name
                      </label>
                      <input
                        type="text"
                        className="form-control"
                        id="exampleFormControlInput1"
                        placeholder="enter name"
                      />
                    </div>
                    <div className="mb-3">
                      <label
                        htmlFor="exampleFormControlInput2"
                        className="form-label fw-bold"
                      >
                        Email Address
                      </label>
                      <input
                        type="email"
                        className="form-control"
                        id="exampleFormControlInput2"
                        placeholder="name@email.com"
                      />
                    </div>
                    <div className="mb-3">
                      <label
                        htmlFor="exampleFormControlInput3"
                        className="form-label fw-bold"
                      >
                        Enter Your Contact Number
                      </label>
                      <input
                        type="tel"
                        className="form-control"
                        id="exampleFormControlInput3"
                        placeholder="9200XXXXXX"
                      />
                    </div>
                    <div className="mb-3">
                      <label
                        htmlFor="exampleFormControlTextarea1"
                        className="form-label fw-bold"
                      >
                        Message
                      </label>
                      <textarea
                        className="form-control"
                        id="exampleFormControlTextarea1"
                        rows={3}
                        defaultValue={""}
                        placeholder="enter some message"
                      />
                    </div>
                    <button type="button" className="btn btn-dark btn-lg px-5">
                    Send Message
                  </button>
                  </div>
                </form>
              </div>
              <div className="col-md-6 mb-4 mt-5">
                 <div className="mt-3 bg-dark text-light p-5 rounded">
                  <p className="text-light">
                    <strong>Business Hours:</strong><br />
                    Monday - Friday: 9:00 AM - 8:00 PM<br />
                    Saturday: 9:00 AM - 6:00 PM<br />
                    Sunday: 11:00 AM - 5:00 PM
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Contact;
