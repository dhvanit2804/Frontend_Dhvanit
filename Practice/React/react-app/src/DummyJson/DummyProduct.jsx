import axios from "axios";
import React, { useEffect, useState } from "react";

function DummyProduct() {
  const [data, setdata] = useState([]);
  useEffect(() => {
    fetchdata();
  },[]);

  const fetchdata = async () => {
    const res = await axios.get("https://dummyjson.com/products");
    setdata(res.data.products);
    // console.log(res.data.products);
  };
  return (
    <div className="container">
      <div className="row">
        {data &&
          data.map((product, index) => {
            const { images, title, price, description } = product;
            return (
              <div className="col-md-4" key={index}>
                <div className="card" style={{ width: "18rem" }}>
                  <img
                    src={images[0]}
                    style={{ height: "300px" }}
                    className="card-img-top"
                    alt="..."
                  />
                  <div className="card-body">
                    <h5 className="card-title">{title}</h5>
                    <h5>{price} $</h5>
                    <p className="card-text">{description.slice(0, 60)}</p>
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

export default DummyProduct;
