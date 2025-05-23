import axios from "axios";
import React, { useEffect, useState } from "react";

function Mockapi() {
  const [data, setdata] = useState("");
  useEffect(() => {
    fetchdata();
  });

  const fetchdata = async () => {
    const res = await axios.get(
      "https://681f1721c1c291fa6635eff8.mockapi.io/React"
    );
    // console.log(res.data)
    setdata(res.data);
  };

  return (
    <div>
      <table className="table">
        <thead>
          <tr>
            <th scope="col">#id</th>
            <th scope="col">Name</th>
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
                  <td>{user.name}</td>
                  <td>{user.email}</td>
                  <td>{user.phone}</td>
                  <td>{user.city}</td>
                </tr>
              );
            })}
        </tbody>
      </table>
    </div>
  );
}

export default Mockapi;
