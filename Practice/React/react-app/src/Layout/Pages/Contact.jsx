import React from "react";
import Header from "../Coman/Header";
import Footer from "../../Bootstrap/Footer";
import { Link, Outlet } from "react-router-dom";

function Contact() {
  return (
    <div>
      <Header />
      <h1>This is Contact Page</h1>
      <ul className="nav bg-dark">
        <li className="nav-item">
          <Link className="nav-link" to="contact1">
            Contact 1
          </Link>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">
            Contact 2
          </a>
        </li>
      </ul>
      <Outlet />
      <br />
      <Footer />
    </div>
  );
}

export default Contact;
