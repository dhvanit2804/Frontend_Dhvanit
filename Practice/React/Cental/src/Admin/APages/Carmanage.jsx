import React, { useEffect, useState } from "react";
import Aheader from "../AComan/Aheader";
import Navdata from "../AComan/Navdata";
import axios from "axios";

const Carmanage = () => {
  const [car, setCar] = useState([]);

  useEffect(() => {
    fetchdata();
  }, []);

  const fetchdata = async () => {
    const res = await axios.get("http://localhost:3000/Vehicle");
    console.log(res.data);
    setCar(res.data);
  };

  const [cardata, setCardata] = useState({
    id: "",
    name: "",
    price: "",
    review: "",
    img: "",
    fuel: "",
    mileage: "",
    year: "",
  });

  // View Data
  const getdata = async (id) => {
    const res = await axios.get(`http://localhost:3000/Vehicle/${id}`);
    console.log(res.data);
    setCardata(res.data);
  };
  // Remove DATA
  const removedata = async (id) => {
    const res = await axios.delete(`http://localhost:3000/Vehicle/${id}`);
    console.log(res.data);
    fetchdata();
  };
  // UPDATE DATA
  const [carupdate, setcarupdate] = useState(null);
  const [updatecar, setupdatecar] = useState({
    id: "",
    name: "",
    price: "",
    review: "",
    img: "",
    fuel: "",
    mileage: "",
    year: "",
  });

  const openmodal = (id) => {
    setcarupdate(id);
    setupdatecar(id);
  };

  const datachange = (e) => {
    setupdatecar({
      ...updatecar,
      [e.target.name]: e.target.value,
    });
  };

  const updatedata = async (e) => {
    e.preventDefault();

    const res = await axios.put(
      `http://localhost:3000/Vehicle/${updatecar.id}`,
      updatecar
    );
    console.log(res.data);
  };

  return (
    <div>
      <Aheader />
      <Navdata title="Car Manage" name="Manege Cars" />
      <div className="container py-4">
        <table className="table table-dark table-hover">
          <thead>
            <tr className="text-center">
              <th scope="col">id</th>
              <th scope="col">Name</th>
              <th scope="col">Price</th>
              <th scope="col">Fuel</th>
              <th scope="col">Mileage</th>
              <th scope="col">Review</th>
              <th scope="col">Modal</th>
              <th scope="col">Action</th>
            </tr>
          </thead>
          <tbody>
            {car &&
              car.map((data, index) => {
                console.log(data);
                return (
                  <tr className="text-center">
                    <th scope="row">{data.id}</th>
                    <td>{data.name}</td>
                    <td>{data.price}</td>
                    <td>{data.fuel}</td>
                    <td>{data.mileage}</td>
                    <td>{data.review}</td>
                    <td>{data.year}</td>
                    <td>
                      <button
                        className="btn btn-info"
                        onClick={() => getdata(data.id)}
                        data-bs-toggle="modal"
                        data-bs-target="#exampleModal"
                      >
                        View
                      </button>
                      <button
                        className="btn btn-success mx-2"
                        data-bs-toggle="modal"
                        data-bs-target="#staticBackdrop"
                        onClick={() => openmodal(data)}
                      >
                        Edit
                      </button>
                      <button
                        className="btn btn-danger"
                        onClick={() => removedata(data.id)}
                      >
                        delete
                      </button>
                    </td>
                  </tr>
                );
              })}
          </tbody>
        </table>
        <div
          className="modal fade"
          id="exampleModal"
          tabIndex={-1}
          aria-labelledby="exampleModalLabel"
          aria-hidden="true"
        >
          <div className="modal-dialog">
            <div className="modal-content">
              <div className="modal-header">
                <h1 className="modal-title fs-5" id="exampleModalLabel">
                  Cars
                </h1>
                <button
                  type="button"
                  className="btn-close"
                  data-bs-dismiss="modal"
                  aria-label="Close"
                />
              </div>
              <div className="modal-body">
                <div className="card shadow-lg border-0 rounded-4 h-100">
                  <img
                    src={cardata.img}
                    className="card-img-top rounded-top-4"
                    style={{ height: "250px", objectFit: "cover" }}
                    alt={cardata.name}
                  />
                  <div className="card-body p-4">
                    <h5 className="card-title text-primary fw-bold mb-3">
                      {cardata.name}
                    </h5>
                    <ul className="list-unstyled text-dark mb-4">
                      <li>
                        <strong>Price:</strong> ₹{cardata.price}
                      </li>
                      <li>
                        <strong>Fuel:</strong> {cardata.fuel}
                      </li>
                      <li>
                        <strong>Mileage:</strong> {cardata.mileage} km/l
                      </li>
                      <li>
                        <strong>Review:</strong> ⭐ {cardata.review}/5
                      </li>
                      <li>
                        <strong>Model Year:</strong> {cardata.year}
                      </li>
                    </ul>
                    <a
                      href="#"
                      className="btn btn-success w-100 fw-semibold rounded-pill"
                    >
                      <i className="bi bi-calendar-check-fill me-2"></i>
                      Book Now
                    </a>
                  </div>
                </div>
              </div>
              <div className="modal-footer">
                <button
                  type="button"
                  className="btn btn-secondary"
                  data-bs-dismiss="modal"
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        </div>
        {carupdate && (
          <div
            class="modal fade"
            id="staticBackdrop"
            data-bs-backdrop="static"
            data-bs-keyboard="false"
            tabindex="-1"
            aria-labelledby="staticBackdropLabel"
            aria-hidden="true"
          >
            <div class="modal-dialog modal-lg">
              <div class="modal-content">
                <div class="modal-header">
                  <h1 class="modal-title fs-5" id="staticBackdropLabel">
                    Update Car Data
                  </h1>
                  <button
                    type="button"
                    class="btn-close"
                    data-bs-dismiss="modal"
                    aria-label="Close"
                  ></button>
                </div>
                <div class="modal-body">
                  <div className="bg-secondary p-5 rounded">
                    <h4 className="text-primary mb-4">UPDATE CAR DATA</h4>
                    <form>
                      <div className="row g-4">
                        <div className="col-lg-12 col-xl-6">
                          <div className="form-floating">
                            <input
                              type="text"
                              className="form-control"
                              id="name"
                              name="name"
                              onChange={datachange}
                              value={updatecar && updatecar.name}
                              placeholder="Your Name"
                            />
                            <label htmlFor="name">Car Name</label>
                          </div>
                        </div>
                        <div className="col-lg-12 col-xl-6">
                          <div className="form-floating">
                            <input
                              type="text"
                              className="form-control"
                              id="email"
                              name="year"
                              onChange={datachange}
                              value={updatecar && updatecar.year}
                              placeholder="Your Email"
                            />
                            <label htmlFor="email">Modal</label>
                          </div>
                        </div>
                        <div className="col-lg-12 col-xl-6">
                          <div className="form-floating">
                            <input
                              type="text"
                              className="form-control"
                              id="phone"
                              name="price"
                              onChange={datachange}
                              value={updatecar && updatecar.price}
                              placeholder="Phone"
                            />
                            <label htmlFor="phone">Car Price</label>
                          </div>
                        </div>
                        <div className="col-lg-12 col-xl-6">
                          <div className="form-floating">
                            <input
                              type="text"
                              className="form-control"
                              id="project"
                              name="review"
                              onChange={datachange}
                              value={updatecar && updatecar.review}
                              placeholder="Project"
                            />
                            <label htmlFor="project">Car Review</label>
                          </div>
                        </div>
                        <div className="col-12">
                          <div className="form-floating">
                            <input
                              type="url"
                              className="form-control"
                              id="subject"
                              name="img"
                              onChange={datachange}
                              value={updatecar && updatecar.img}
                              placeholder="Subject"
                            />
                            <label htmlFor="subject">Image</label>
                          </div>
                        </div>
                        <div className="col-lg-12 col-xl-6">
                          <div className="form-floating">
                            <input
                              type="text"
                              className="form-control"
                              id="subject"
                              name="fuel"
                              onChange={datachange}
                              value={updatecar && updatecar.fuel}
                              placeholder="Subject"
                            />
                            <label htmlFor="subject">Fuel</label>
                          </div>
                        </div>
                        <div className="col-lg-12 col-xl-6">
                          <div className="form-floating">
                            <input
                              type="text"
                              className="form-control"
                              id="subject"
                              name="mileage"
                              onChange={datachange}
                              value={updatecar && updatecar.mileage}
                              placeholder="Subject"
                            />
                            <label htmlFor="subject">Mileage</label>
                          </div>
                        </div>
                        <div className="col-12">
                          <button
                            className="btn btn-light w-100 py-3"
                            data-bs-dismiss="modal"
                            onClick={updatedata}
                          >
                            Update Car Data
                          </button>
                        </div>
                      </div>
                    </form>
                  </div>
                </div>
                <div class="modal-footer">
                  <button
                    type="button"
                    class="btn btn-secondary"
                    data-bs-dismiss="modal"
                  >
                    Close
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Carmanage;
