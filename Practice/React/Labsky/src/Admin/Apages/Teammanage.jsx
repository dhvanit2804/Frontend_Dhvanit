import React, { useEffect, useState } from "react";
import Aheader from "../Acoman/Aheader";
import Navdata from "../Acoman/Navdata";
import axios from "axios";

const Teammanage = () => {
  const [team, setteam] = useState([]);
  useEffect(() => {
    fetchdata();
  }, []);

  const fetchdata = async () => {
    const res = await axios.get("http://localhost:3000/team");
    console.log(res.data);
    setteam(res.data);
  };

  return (
    <div>
      <Aheader />
      <Navdata title="Team Manage" name="team management" />
      <div className="container py-4">
        <table className="table table-striped table-primary table-hover">
          <thead>
            <tr className="text-center">
              <th scope="col">#id</th>
              <th scope="col">Name</th>
              <th scope="col">Role</th>
              <th scope="col">Action</th>
            </tr>
          </thead>
          <tbody>
            {team &&
              team.map((data, index) => {
                console.log(data);
                return (
                  <tr className="text-center">
                    <th scope="row">{data.id}</th>
                    <td>{data.name}</td>
                    <td>{data.role}</td>
                    <td>
                      <button className="btn btn-success">View</button>
                      <button className="btn btn-info mx-2">Edit</button>
                      <button className="btn btn-danger">Delete</button>
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

export default Teammanage;
