import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { deleteuser, showuser } from "../Slicedata/userSlice";

const Read = () => {
  const users = useSelector((state) => state.users.user);

  console.log(users);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(showuser());
  }, []);
  return (
    <div className="container">
      <table className="table table-dark table-hover mt-2">
        <thead>
          <tr className="text-center">
            <th scope="col">#</th>
            <th scope="col">First</th>
            <th scope="col">Last</th>
            <th scope="col">Handle</th>
          </tr>
        </thead>
        <tbody>
          {users &&
            users.map((data, index) => {
              return (
                <tr className="text-center" key={index}>
                  <th scope="row">{data.id}</th>
                  <td>{data.name}</td>
                  <td>{data.email}</td>
                  <td>
                    <button className="btn btn-success">View</button>
                    <button className="btn btn-info mx-2">Edit</button>
                    <button
                      className="btn btn-danger"
                      onClick={() => dispatch(deleteuser(data.id))}
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
  );
};

export default Read;
