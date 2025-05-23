import axios from "axios";
import React, { useEffect, useState } from "react";

function DummyCart() {
  const [data, setdata] = useState([]);
  useEffect(() => {
    fetchdata();
  }, []);

  const fetchdata = async () => {
    const res = await axios.get("https://dummyjson.com/carts");
    setdata(res.data.carts);
    console.log(res.data.carts);
  };
  return (
    <div className="container">
      <div className="row">
        {data &&
          data.map((product, index) => {
            return (
              <div className="col-md-4" key={index}>
                <div className="card" style={{ width: "18rem" }}>
                  <img
                    src={product.products[0].thumbnail}
                    style={{ height: "300px" }}
                    className="card-img-top"
                    alt="..."
                  />
                  <div className="card-body">
                    <h5 className="card-title">{product.products[0].title}</h5>
                    <h5>{product.products[0].price} $</h5>
                    <p className="card-text">{product.products[0].total}</p>
                    {/* <a href="#" className="btn btn-primary">
                Go somewhere
              </a> */}
                  </div>
                </div>
              </div>
            );
          })}
      </div>
    </div>
  );
}

export default DummyCart;
