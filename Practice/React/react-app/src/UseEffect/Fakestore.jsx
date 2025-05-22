import axios from "axios";
import React, { useEffect, useState } from "react";

function Fakestore() {
  const [data, setdata] = useState([]);

  useEffect(() => {
    fetchdata();
  }, []);

  const fetchdata = async () => {
    const res = await axios.get("https://fakestoreapi.com/users");
    // console.log(res.data)
    setdata(res.data);
  };
  return (
    <div>
      <table className="table">
        <thead>
          <tr>
            <th scope="col">id</th>
            <th scope="col">Username</th>
            <th scope="col">Email</th>
            <th scope="col">Phone</th>
            <th scope="col">City</th>
          </tr>
        </thead>
        <tbody>
          {data &&
            data.map((user, index) => {
              return (
                <tr>
                  <th>{user.id}</th>
                  <th>{user.username}</th>
                  <th>{user.email}</th>
                  <th>{user.phone}</th>
                  <th>{user.address.city}</th>
                </tr>
              );
            })}
        </tbody>
      </table>
    </div>
  );
}

export default Fakestore;
