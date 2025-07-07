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

  const [teamdata, setteamdata] = useState({
    id: "",
    name: "",
    img: "",
    role: "",
  });

  const getdata = async (id) => {
    const res = await axios.get(`http://localhost:3000/team/${id}`);
    console.log(res.data);
    setteamdata(res.data);
  };

  const removedata = async (id) => {
    const res = await axios.delete(`http://localhost:3000/team/${id}`);
    console.log(res.data);
    fetchdata();
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
                      <button
                        className="btn btn-success"
                        data-bs-toggle="modal"
                        data-bs-target="#exampleModal"
                        onClick={() => getdata(data.id)}
                      >
                        View
                      </button>

                      <button
                        className="btn btn-danger ms-2"
                        onClick={() => removedata(data.id)}
                      >
                        Delete
                      </button>
                    </td>
                  </tr>
                );
              })}
          </tbody>
        </table>
      </div>
      <div
        className="modal fade"
        id="exampleModal"
        tabIndex={-1}
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h1 className="modal-title fs-5" id="exampleModalLabel">
                Team Member
              </h1>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              />
            </div>
            <div className="modal-body">
              <div className="card shadow border-0 h-100">
                <div className="position-relative overflow-hidden">
                  <img
                    src={teamdata.img}
                    className="card-img-top img-fluid"
                    style={{ height: "500px" }}
                  />
                  <div className="position-absolute top-0 end-0 p-2 d-flex flex-column gap-2">
                    <a className="btn btn-sm btn-light" href="#">
                      <i className="fab fa-facebook-f" />
                    </a>
                    <a className="btn btn-sm btn-light" href="#">
                      <i className="fab fa-twitter" />
                    </a>
                    <a className="btn btn-sm btn-light" href="#">
                      <i className="fab fa-linkedin-in" />
                    </a>
                    <a className="btn btn-sm btn-light" href="#">
                      <i className="fab fa-youtube" />
                    </a>
                  </div>
                </div>
                <div className="card-body text-center">
                  <h5 className="card-title mb-1">{teamdata.name}</h5>
                  <p className="card-text text-muted">{teamdata.role}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Teammanage;
