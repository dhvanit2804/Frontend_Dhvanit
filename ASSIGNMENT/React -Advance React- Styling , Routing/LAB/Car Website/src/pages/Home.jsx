import React from "react";
import Navbar from "../components/Navbar";

const Home = () => {
  return (
    <>
      {/* Banner start */}
      <Navbar />
      <section>
        <div className="container-fluid mt-1 bg-dark p-5 mb-1">
          <h1 className="text-center display-1 fw-bold text-light">
            Welcome to Car Market
          </h1>
          <h4 className="text-center display- fw-normal text-light">
            Your one-stop destination for buying, selling, and trading cars.
          </h4>
        </div>
      </section>
      {/* Banner End */}
      {/* Slider Start */}
      <section>
        <div id="carouselExampleCaptions" className="carousel slide mb-1">
          <div className="carousel-indicators">
            <button
              type="button"
              data-bs-target="#carouselExampleCaptions"
              data-bs-slide-to={0}
              className="active"
              aria-current="true"
              aria-label="Slide 1"
            />
            <button
              type="button"
              data-bs-target="#carouselExampleCaptions"
              data-bs-slide-to={1}
              aria-label="Slide 2"
            />
            <button
              type="button"
              data-bs-target="#carouselExampleCaptions"
              data-bs-slide-to={2}
              aria-label="Slide 3"
            />
          </div>
          <div className="carousel-inner">
            <div className="carousel-item active">
              <img
                src="https://images.hdqwalls.com/wallpapers/black-mercedes-amg-front-yg.jpg"
                style={{ height: "500px", objectFit: "cover" }}
                className="d-block w-100"
                alt="..."
              />
              <div className="carousel-caption d-none d-md-block">
                <h5>Mercedes-Benz</h5>
                <p>
                  A German luxury automotive brand known for premium vehicles,
                  advanced engineering, and the iconic three-pointed star logo.
                </p>
              </div>
            </div>
            <div className="carousel-item">
              <img
                src="https://www.hdcarwallpapers.com/download/bmw_m8_gran_coupe_first_edition_2020_4k_2-3840x2160.jpg"
                style={{ height: "500px", objectFit: "cover" }}
                className="d-block w-100"
                alt="..."
              />
              <div className="carousel-caption d-none d-md-block">
                <h5>BMW</h5>
                <p>
                  A German luxury automotive manufacturer renowned for sporty
                  driving dynamics, innovative technology, and the slogan "The
                  Ultimate Driving Machine."
                </p>
              </div>
            </div>
            <div className="carousel-item">
              <img
                src="https://i.pinimg.com/originals/68/47/f9/6847f9dcd4452b852b385e21fb36b1ee.jpg"
                style={{ height: "500px", objectFit: "cover" }}
                className="d-block w-100"
                alt="..."
              />
              <div className="carousel-caption d-none d-md-block">
                <h5>Lamborghini</h5>
                <p>
                  An Italian supercar manufacturer famous for exotic,
                  high-performance vehicles with aggressive styling and powerful
                  V10 and V12 engines.
                </p>
              </div>
            </div>
          </div>
          <button
            className="carousel-control-prev"
            type="button"
            data-bs-target="#carouselExampleCaptions"
            data-bs-slide="prev"
          >
            <span className="carousel-control-prev-icon" aria-hidden="true" />
            <span className="visually-hidden">Previous</span>
          </button>
          <button
            className="carousel-control-next"
            type="button"
            data-bs-target="#carouselExampleCaptions"
            data-bs-slide="next"
          >
            <span className="carousel-control-next-icon" aria-hidden="true" />
            <span className="visually-hidden">Next</span>
          </button>
        </div>
      </section>
      {/* Slider end */}
      {/* desc start */}
      <section>
        <div className="mt-1 p-5 mb-1 bg-dark">
          <h1 className="text-center text-light display-4 fw-bold">
            Car Market Place
          </h1>
          <p className="text-center text-light fs-5">
            Welcome to Car Market, your premier destination for all things
            automotive. Whether you're looking to buy, sell, or trade cars, we
            provide a seamless and user-friendly platform to connect buyers and
            sellers. Our mission is to make car transactions easy, transparent,
            and efficient for everyone.
          </p>
        </div>
      </section>
      {/* desc end */}
      {/* Start */}
      <section className="container my-5">
        {/* First Row */}
        <div className="row align-items-center mb-5">
          <div className="col-md-6">
            <img
              src="https://images.squarespace-cdn.com/content/v1/5ea17b68d465415faaf2a052/51944863-eeeb-4271-b211-cf0006eed940/Marketing+Strategies+For+Car+Rental+Agency.jpg"
              alt="Delicious Noodles"
              className="img-fluid rounded shadow-lg"
              style={{
                height: "350px",
                objectFit: "cover",
                width: "100%",
              }}
            />
          </div>
          <div className="col-md-6">
            <div className="p-4 bg-dark rounded shadow-sm h-100 d-flex flex-column justify-content-center">
              <h3 className="text-light fw-bold mb-3">Rent Car</h3>
              <p className="text-light fs-5 mb-3">
                At <span className="fw-semibold text-success">Car Market</span>,
                we offer a wide range of rental cars to suit your needs. From
                compact cars for city driving to spacious SUVs for family trips,
                we have it all. Our rental process is quick and hassle-free,
                ensuring you get on the road in no time.
              </p>
              <p className="text-light fs-5 mb-0">
                Whether you're planning a weekend getaway or need a vehicle for
                <span className="fw-semibold text-dark">
                  nation of noodles!
                </span>
              </p>
            </div>
          </div>
        </div>

        {/* Second Row*/}
        <div className="row align-items-center">
          <div className="col-md-6 order-md-2">
            <img
              src="https://www.wikihow.com/images/b/bf/Advertise-Your-Used-Car-for-Sale-Step-8.jpg"
              alt="Delicious Noodles"
              className="img-fluid rounded shadow-lg"
              style={{
                height: "350px",
                objectFit: "cover",
                width: "100%",
              }}
            />
          </div>
          <div className="col-md-6 order-md-1">
            <div className="p-4 bg-dark rounded shadow-sm h-100 d-flex flex-column justify-content-center">
              <h3 className="text-light fw-bold mb-3">Buy Car</h3>
              <p className="text-light fs-5 mb-3">
                Looking to buy a car?{" "}
                <span className="fw-semibold text-success">Car Market</span> has
                a vast selection of vehicles for sale, from brand-new models to
                certified pre-owned cars. Our platform allows you to browse
                listings, compare prices, and find the perfect car that fits
                your budget and lifestyle.
              </p>
              <p className="text-light fs-5 mb-0">
                Our user-friendly interface makes it easy to search for cars by
                make, model, price range, and location.
              </p>
            </div>
          </div>
        </div>
      </section>
      {/* End */}
      {/* Card start */}
      <section>
        <div className="container-fluid mt-1 mb-1 bg-dark p-5">
          <div className="row flex justify-content-around">
            <div className="col">
              <div className="card" style={{ width: "18rem" }}>
                <img
                  src="https://images.pexels.com/photos/1429775/pexels-photo-1429775.jpeg?auto=compress&cs=tinysrgb&w=600"
                  className="card-img-top"
                  alt="..."
                />
                <div className="card-body">
                  <p className="card-text">
                    The Mercedes-Benz G-Class is a luxury SUV that started as a
                    military vehicle in the 1970s but evolved into a high-end
                    status symbol.
                  </p>
                </div>
              </div>
            </div>
            <div className="col">
              <div className="card" style={{ width: "18rem" }}>
                <img
                  src="https://images.pexels.com/photos/3972755/pexels-photo-3972755.jpeg?auto=compress&cs=tinysrgb&w=600"
                  className="card-img-top"
                  alt="..."
                />
                <div className="card-body">
                  <p className="card-text">
                    Lamborghini is an Italian luxury supercar manufacturer
                    founded in 1963, some of the world's most exotic and
                    powerful sports cars.
                  </p>
                </div>
              </div>
            </div>
            <div className="col">
              <div className="card" style={{ width: "18rem" }}>
                <img
                  src="https://images.pexels.com/photos/3764984/pexels-photo-3764984.jpeg?auto=compress&cs=tinysrgb&w=600"
                  className="card-img-top"
                  alt="..."
                />
                <div className="card-body">
                  <p className="card-text">
                    Rolls-Royce is the pinnacle of British luxury founded in
                    1904 and renowned for creating the world's most opulent
                    automodiles
                  </p>
                </div>
              </div>
            </div>
            <div className="col">
              <div className="card" style={{ width: "18rem" }}>
                <img
                  src="https://images.pexels.com/photos/2127012/pexels-photo-2127012.jpeg?auto=compress&cs=tinysrgb&w=600"
                  className="card-img-top"
                  alt="..."
                />
                <div className="card-body">
                  <p className="card-text">
                    The BMW M3 is a high-performance version of the BMW 3
                    Series, known for its sporty handling and powerful engines.
                  </p>
                </div>
              </div>
            </div>
            <div className="col">
              <div className="card" style={{ width: "18rem" }}>
                <img
                  src="https://images.pexels.com/photos/1719647/pexels-photo-1719647.jpeg?auto=compress&cs=tinysrgb&w=600"
                  className="card-img-top"
                  alt="..."
                />
                <div className="card-body">
                  <p className="card-text">
                    Audi is a German luxury car manufacturer known for its
                    Quattro all-wheel-drive system and sleek, modern designs.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* card end */}
      {/* Rating start */}
      <section>
        <div className="container-fluid mt-1 mb-1 bg-dark p-5">
          <h1 className="text-center text-light display-4 fw-bold">
            Customer Reviews
          </h1>
          <div className="row mt-4">
            <div className="col-md-4">
              <div className="card text-center">
                <div className="card-body">
                  <h5 className="card-title">John Doe</h5>
                  <p className="card-text">
                    "Car Market made buying my first car a breeze! Highly
                    recommend."
                  </p>
                  <span className="text-warning">★★★★★</span>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="card text-center">
                <div className="card-body">
                  <h5 className="card-title">Jane Smith</h5>
                  <p className="card-text">
                    "Selling my car was quick and easy. Great platform!"
                  </p>
                  <span className="text-warning">★★★★☆</span>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="card text-center">
                <div className="card-body">
                  <h5 className="card-title">Mike Johnson</h5>
                  <p className="card-text">
                    "Fantastic selection of cars and excellent customer
                    service."
                  </p>
                  <span className="text-warning">★★★★★</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;
