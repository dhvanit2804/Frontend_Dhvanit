import React, { useEffect, useState } from "react";
import Aheader from "../AComan/Aheader";
import Navdata from "../AComan/Navdata";
import axios from "axios";
import { data } from "react-router-dom";

const Blogmange = () => {
  const [blog, setBlog] = useState([]);
  useEffect(() => {
    fetchdata();
  }, []);

  const fetchdata = async () => {
    const res = await axios.get("http://localhost:3000/Blog");
    console.log(res.data);
    setBlog(res.data);
  };

  return (
    <div>
      <Aheader />
      <Navdata title="Blog Manage" name="Blog" />
      <div className="container py-4">
        <table className="table table-dark table-hover">
          <thead>
            <tr className="text-center">
              <th scope="col">#id</th>
              <th scope="col">Name</th>
              <th scope="col">Title</th>
              <th scope="col">Date</th>
              <th scope="col">Comment</th>
              <th scope="col">Action</th>
            </tr>
          </thead>
          <tbody>
            {blog &&
              blog.map((data, index) => {
                console.log(data);
                return (
                  <tr className="text-center" key={index}>
                    <th scope="row">{data.id}</th>
                    <td>{data.name}</td>
                    <td>{data.title}</td>
                    <td>{data.date}</td>
                    <td>{data.comment}</td>
                    <td>
                      <button className="btn btn-info">View</button>
                      <button className="btn btn-success mx-2">Edit</button>
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

export default Blogmange;
