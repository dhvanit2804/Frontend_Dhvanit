import React, { useState } from "react";
import Aheader from "../AComan/Aheader";
import Navdata from "../AComan/Navdata";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Caradd = () => {
  const redirect = useNavigate();

  const [form, setform] = useState({
    id: "",
    name: "",
    price: "",
    review: "",
    img: "",
    fuel: "",
    mileage: "",
    year: "",
  });

  const getChange = (e) => {
    setform({
      ...form,
      id: new Date().getTime().toString(),
      [e.target.name]: e.target.value,
    });
  };

  const handleCar = async (e) => {
    e.preventDefault();

    const res = await axios.post("http://localhost:3000/Vehicle", form);
    console.log(res.data);
    redirect("/carmanage");
    setform({
      id: "",
      name: "",
      price: "",
      review: "",
      img: "",
      fuel: "",
      mileage: "",
      year: "",
    });
  };
  return (
    <div>
      <Aheader />
      <Navdata title="Car Add" name="Add Cars" />
      <div className="container py-5">
        <h1 className="text-center fw-bold">CARS ADD</h1>
        <div className="bg-secondary p-5 rounded">
          <h4 className="text-primary mb-4">ADD CARS</h4>
          <form onSubmit={handleCar}>
            <div className="row g-4">
              <div className="col-lg-12 col-xl-6">
                <div className="form-floating">
                  <input
                    type="text"
                    className="form-control"
                    id="name"
                    value={form.name}
                    name="name"
                    onChange={getChange}
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
                    value={form.year}
                    onChange={getChange}
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
                    value={form.price}
                    name="price"
                    onChange={getChange}
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
                    value={form.review}
                    name="review"
                    onChange={getChange}
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
                    value={form.img}
                    name="img"
                    onChange={getChange}
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
                    value={form.fuel}
                    name="fuel"
                    onChange={getChange}
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
                    value={form.mileage}
                    name="mileage"
                    onChange={getChange}
                    placeholder="Subject"
                  />
                  <label htmlFor="subject">Mileage</label>
                </div>
              </div>
              <div className="col-12">
                <button className="btn btn-light w-100 py-3">Add Car</button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Caradd;
