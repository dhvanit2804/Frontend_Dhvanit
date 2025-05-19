import React from "react";

function Slider() {
  return (
    <div>
      <div
        id="carouselExampleIndicators"
        className="carousel slide"
        style={{ height: "500px" }}
      >
        <div className="carousel-indicators">
          <button
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide-to={0}
            className="active"
            aria-current="true"
            aria-label="Slide 1"
          />
          <button
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide-to={1}
            aria-label="Slide 2"
          />
          <button
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide-to={2}
            aria-label="Slide 3"
          />
        </div>
        <div
          className="carousel-inner"
          style={{
            height: "100%",
            overflow: "hidden",
            borderRadius: "10px",
            marginTop: "20px",
          }}
        >
          <div className="carousel-item active">
            <img
              src="https://images.pexels.com/photos/46160/field-clouds-sky-earth-46160.jpeg"
              className="d-block w-100"
              alt="..."
              style={{ objectFit: "cover", height: "500px", width: "100%" }}
            />
          </div>
          <div className="carousel-item">
            <img
              src="https://images.pexels.com/photos/158028/bellingrath-gardens-alabama-landscape-scenic-158028.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
              className="d-block w-100"
              alt="..."
              style={{ objectFit: "cover", height: "500px", width: "100%" }}
            />
          </div>
          <div className="carousel-item">
            <img
              src="https://images.pexels.com/photos/167684/pexels-photo-167684.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
              className="d-block w-100"
              alt="..."
              style={{ objectFit: "cover", height: "500px", width: "100%" }}
            />
          </div>
        </div>
        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExampleIndicators"
          data-bs-slide="prev"
        >
          <span className="carousel-control-prev-icon" aria-hidden="true" />
          <span className="visually-hidden">Previous</span>
        </button>
        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#carouselExampleIndicators"
          data-bs-slide="next"
        >
          <span className="carousel-control-next-icon" aria-hidden="true" />
          <span className="visually-hidden">Next</span>
        </button>
      </div>
    </div>
  );
}

export default Slider;
