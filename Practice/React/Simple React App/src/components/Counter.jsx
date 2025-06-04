import React, { useState } from "react";

const Counter = () => {
  const [count, setCount] = useState(0);

  const increment = () => setCount(count + 1);
  const decrement = () => setCount(count - 1);
  const reset = () => setCount(0);

  return (
    <div className="container mt-5">
      <div className="row justify-content-center">
        <div className="col-lg-6">
          <div className="Card shadow-lg">
            <div className="card-header bg-primary text-white text-center">
              <h2 className="mb-0">🧮 React Counter App</h2>
            </div>
            <div className="card-body text-center p-5">
              <div className="mb-4">
                <span className="display-1 fw-bold text-primary">{count}</span>
              </div>
              <div className="d-grid gap-2 d-md-flex justify-content-md-center">
                <button className="btn btn-danger btn-lg" onClick={decrement}>
                  - Decrease
                </button>
                <button className="btn btn-secondary btn-lg" onClick={reset}>
                  Reset
                </button>
                <button className="btn btn-success btn-lg" onClick={increment}>
                  + Increase
                </button>
              </div>

              <div className="mt-4 p-3 bg-light rounded">
                <small className="text-muted">
                  This counter demonstrates React state management using the
                  useState hook
                </small>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Counter;
