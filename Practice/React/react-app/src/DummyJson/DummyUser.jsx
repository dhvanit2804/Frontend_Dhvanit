import axios from "axios";
import React, { useEffect, useState } from "react";

function DummyUser() {
  const [data, setdata] = useState([]);

  useEffect(() => {
    fetchdata();
  }, []);

  const fetchdata = async () => {
    const res = await axios.get("https://dummyjson.com/users");
    setdata(res.data.users);
    console.log(res.data.users);
  };
  return (
    <div>
      <table className="table table-dark">
        <thead>
          <tr>
            <th scope="col">id</th>
            <th scope="col">Name</th>
            <th scope="col">Role</th>
            <th scope="col">Age</th>
            <th scope="col">email</th>
            <th scope="col">Phone</th>
            <th scope="col">City</th>
          </tr>
        </thead>
        <tbody>
          {data &&
            data.map((user, index) => {
              const { id, firstName, company, age, email, phone, address } =
                user;

              return (
                <tr key={index}>
                  <th>{id}</th>
                  <th>{firstName}</th>
                  <th>{company.title}</th>
                  <th>{age}</th>
                  <th>{email}</th>
                  <th>{phone}</th>
                  <th>{address.city}</th>
                </tr>
              );
            })}
        </tbody>
      </table>
    </div>
  );
}

export default DummyUser;
