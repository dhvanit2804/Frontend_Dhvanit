import React, { useEffect, useState } from "react";
import Aheader from "../Acoman/Aheader";
import Navdata from "../Acoman/Navdata";
import axios from "axios";

const Userlogin = () => {
  const [user, setuser] = useState([]);
  useEffect(() => {
    fetchdata();
  }, []);

  const fetchdata = async () => {
    const res = await axios.get("http://localhost:3000/user");
    console.log(res.data);
    setuser(res.data);
  };

  return (
    <div>
      <Aheader />
      <Navdata title="Manage User" name="User Managment" />
      <div className="container">
        <table className="table table-striped table-primary table-hover">
          <thead>
            <tr className="text-center">
              <th scope="col">#id</th>
              <th scope="col">Name</th>
              <th scope="col">Email</th>
              <th scope="col">Action</th>
            </tr>
          </thead>
          <tbody>
            {user &&
              user.map((data, index) => {
                console.log(data);
                return (
                  <tr className="text-center" key={index}>
                    <th scope="row">{data.id}</th>
                    <td>{data.name}</td>
                    <td>{data.email}</td>
                    <td>
                      <button className="btn btn-success">UPDATE</button>
                    </td>
                  </tr>
                );
              })}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Userlogin;
