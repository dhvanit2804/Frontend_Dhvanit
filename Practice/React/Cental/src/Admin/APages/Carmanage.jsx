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
            {
              car && car.map((data, index)=> {
                console.log(data)
                return(
                  <tr className="text-center">
              <th scope="row">{data.id}</th>
              <td>{data.name}</td>
              <td>{data.price}</td>
              <td>{data.fuel}</td>
              <td>{data.mileage}</td>
              <td>{data.review}</td>
              <td>{data.year}</td>
              <td>
                <button className="btn btn-info">View</button>
                <button className="btn btn-success mx-2">Edit</button>
                <button className="btn btn-danger">delete</button>
              </td>
            </tr>
                )
              })
            }
            
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Carmanage;
