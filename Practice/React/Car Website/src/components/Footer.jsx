import React from "react";

function Footer() {
  return (
    <div>
      <footer className="bg-dark text-light pt-4 pb-2 mt-5">
  <div className="container">
    <div className="row">
      {/* Brand Info */}
      <div className="col-md-4 mb-3">
        <h5 className="text-danger">Car Market</h5>
        <p>Your trusted destination to buy, sell, or trade cars. Find your next ride or post your vehicle today with ease and confidence.</p>

        {/* Social Icons */}
        <div className="mt-3">
          <a href="https://facebook.com" className="text-light me-3 fs-5" target="_blank" rel="noreferrer">
            <i className="bi bi-facebook"></i>
          </a>
          <a href="https://instagram.com" className="text-light me-3 fs-5" target="_blank" rel="noreferrer">
            <i className="bi bi-instagram"></i>
          </a>
          <a href="https://twitter.com" className="text-light me-3 fs-5" target="_blank" rel="noreferrer">
            <i className="bi bi-twitter-x"></i>
          </a>
          <a href="mailto:noodlesnation@example.com" className="text-light fs-5">
            <i className="bi bi-envelope-fill"></i>
          </a>
        </div>
      </div>

      {/* Quick Links */}
      <div className="col-md-4 mb-3">
        <h6 className="text-light">Quick Links</h6>
        <ul className="list-unstyled">
          <li><a href="#menu" className="text-light text-decoration-none">Menu</a></li>
          <li><a href="#about" className="text-light text-decoration-none">About Us</a></li>
          <li><a href="#contact" className="text-light text-decoration-none">Contact</a></li>
          <li><a href="#order" className="text-light text-decoration-none">Order Now</a></li>
        </ul>
      </div>

      {/* Contact Info */}
      <div className="col-md-4 mb-3">
        <h6 className="text-light">Contact</h6>
        <p className="mb-1">📍 123 Flavor Street, Food City</p>
        <p className="mb-1">📞 +91 98765 43210</p>
        <p>✉ carmarketplace@gmail.com</p>
      </div>
    </div>

    {/* Bottom Text */}
    <div className="text-center border-top pt-3">
      <small>© {new Date().getFullYear()} Noodles Nation. All rights reserved.</small>
    </div>
  </div>
</footer>

    </div>
  );
}

export default Footer;