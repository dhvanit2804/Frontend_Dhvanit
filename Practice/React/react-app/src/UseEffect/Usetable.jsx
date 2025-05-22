import React, { useEffect, useState } from "react";

function Usetable() {
  const [data, setdata] = useState([]);

  useEffect(() => {
    fetchdata();
  }, []);

  const fetchdata = async () => {
    const res = await fetch("https://jsonplaceholder.typicode.com/users");
    const result = await res.json();
    setdata(result);
  };

  return (
    <div>
      <table className="table">
        <thead>
          <tr>
            <th scope="col">id</th>
            <th scope="col">Name</th>
            <th scope="col">Email</th>
            <th scope="col">Phone</th>
            <th scope="col">Company</th>
          </tr>
        </thead>
        <tbody>
          {data &&
            data.map((user, index) => {
              // console.log(user)
              return (
                <tr>
                  <td>{user.id}</td>
                  <td>{user.name}</td>
                  <td>{user.email}</td>
                  <td>{user.phone}</td>
                  <td>{user.company.name}</td>
                </tr>
              );
            })}
        </tbody>
      </table>
    </div>
  );
}

export default Usetable;
