import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="container mt-5">
      <div className="row justify-content-center">
        <div className="col-lg-8">
          <div className="text-center mb-5">
            <h1 className="display-4 fw-bold text-primary mb-3">
              Welcome to My React App
            </h1>
            <p className="lead text-muted">
              This is Simple React App build with React Router and Bootstrap
            </p>
          </div>
          <div className="row g-4">
            <div className="col-md-6">
              <div className="card" style={{ width: "18rem" }}>
                <div className="card-body">
                  <h5 className="card-title text-primary">🧮 Counter</h5>
                  <h6 className="card-subtitle mb-2 text-body-secondary">
                    Simple Counter App
                  </h6>
                  <p className="card-text">
                    Practice React state management with an interactive counter
                  </p>
                  <Link to="/counter" className="btn btn-primary">Try Counter</Link>
                </div>
              </div>
            </div>
            <div className="col-md-6">
              <div className="card" style={{ width: "18rem" }}>
                <div className="card-body">
                  <h5 className="card-title text-success">📧 Contact Page</h5>
                  <h6 className="card-subtitle mb-2 text-body-secondary">
                    Simple Contact Page
                  </h6>
                  <p className="card-text">
                    Learn form handling and component interaction
                  </p>
                  <Link to="/contact" className="btn btn-success">View Contact</Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
