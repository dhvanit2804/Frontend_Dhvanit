// NotFound.jsx
import React from "react";
import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <div className="d-flex flex-column justify-content-center align-items-center min-vh-100 bg-light text-center px-3">
      <h1 className="display-1 fw-bold text-danger">404</h1>
      <h2 className="mb-3 fw-semibold">Oops! Page Not Found</h2>
      <p className="text-muted mb-4">
        The page you’re looking for doesn’t exist or has been moved.
      </p>
      <Link to="/" className="btn btn-primary px-4 py-2 shadow">
        Go Back Home
      </Link>
    </div>
  );
};

export default NotFound;
