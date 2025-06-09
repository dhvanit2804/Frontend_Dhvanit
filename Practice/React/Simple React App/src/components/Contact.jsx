import React, { useState } from "react";

const Contact = () => {
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });

  const getChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div className="container mt-5">
      <div className="row justify-content-center">
        <div className="col-lg-8">
          <div className="text-center mb-5">
            <h1 className="display-5 fw-bold text-primary">📧 Contact Us</h1>
            <p className="lead text-muted">
              Get in touch with us using the form below
            </p>
          </div>
          <div className="row">
            <div className="card shadow">
              <div className="card-body">
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
                      value={form.name}
                      name="name"
                      onChange={getChange}
                      id="exampleFormControlInput1"
                      placeholder="Enter your name"
                    />
                  </div>
                  <div className="mb-3">
                    <label
                      htmlFor="exampleFormControlInput3"
                      className="form-label fw-bold"
                    >
                      Email Address
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={form.email}
                      onChange={getChange}
                      className="form-control"
                      id="exampleFormControlInput3"
                      placeholder="name@example.com"
                    />
                  </div>
                  <div className="mb-3">
                    <label
                      htmlFor="exampleFormControlTextarea2"
                      className="form-label fw-bold"
                    >
                      Message
                    </label>
                    <textarea
                      className="form-control"
                      id="exampleFormControlTextarea2"
                      name="message"
                      onChange={getChange}
                      rows={3}
                      value={form.message}
                      placeholder="Enter your message"
                    />
                  </div>
                  <div>
                    <input
                      type="submit"
                      className="btn btn-primary btn-lg w-100"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
