import axios from "axios";
import React from "react";
import { useQuery } from "react-query";
import Loading from "../Shared/Loading";
import UserRow from "./UserRow";
const Users = () => {
  const {
    data: users,
    isLoading,
    refetch,
  } = useQuery("users", () =>
    axios
      .get("http://localhost:5000/users", {
        headers: {
          authorization: `Bearer ${localStorage.getItem("accessToken")}`,
        },
      })
      .then((data) => {
        return data.data;
      })
  );
  if (isLoading) {
    return <Loading />;
  }

  return (
    <div>
      <h2 className="text-lg text-primary font-bold">
        All Users: {users.length}
      </h2>
      <div className="overflow-x-auto mx-5">
        <table className="table w-full">
          {/* <!-- head --> */}
          <thead>
            <tr>
              <th>Sl No.</th>
              <th>Email</th>
              <th>Make Admin</th>
              <th>Remove User</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user, index) => (
              <UserRow
                key={user._id}
                index={index}
                refetch={refetch}
                user={user}
              />
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Users;
