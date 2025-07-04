import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { showuser } from "../Slicedata/userSlice";

const Read = () => {
  const users = useSelector((state) => state.users.user);

  console.log(users);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(showuser());
  }, []);
  return (
    <div className="relative overflow-x-auto p-7">
      <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
        <thead className="text-xs text-gray-900 uppercase dark:text-gray-400">
          <tr>
            <th scope="col" className="px-6 py-3">
              id
            </th>
            <th scope="col" className="px-6 py-3">
              Name
            </th>
            <th scope="col" className="px-6 py-3">
              Email
            </th>
            <th scope="col" className="px-6 py-3">
              Action
            </th>
          </tr>
        </thead>
        <tbody>
          {users &&
            users.map((data, index) => {
              return (
                <tr className="bg-white dark:bg-gray-800">
                  <th
                    scope="row"
                    key={index}
                    className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                  >
                    {data.id}
                  </th>
                  <td className="px-6 py-4">{data.name}</td>
                  <td className="px-6 py-4">{data.email}</td>
                  <td className="px-6 py-4">{data.password}</td>
                </tr>
              );
            })}
        </tbody>
      </table>
    </div>
  );
};

export default Read;
