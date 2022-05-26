import axios from "axios";
import React, { useState } from "react";
import { useQuery } from "react-query";
import Loading from "../Shared/Loading";
import DeleteConfirmModel from "./DeleteConfirmModel";
import DoctorRow from "./DoctorRow";
const ManageDoctors = () => {
  const [deleteDoctor, setDeleteDoctor] = useState(null);
  const {
    data: doctors,
    isLoading,
    refetch,
  } = useQuery("doctors", () =>
    axios
      .get("http://localhost:5000/doctors", {
        headers: {
          authorization: `Bearer ${localStorage.getItem("accessToken")}`,
        },
      })
      .then((data) => {
        // console.log(data.data);
        return data.data;
      })
  );
  if (isLoading) {
    return <Loading />;
  }
  return (
    <div>
      <h2 className="text-xl font-bold text-primary">
        Manage Doctors: {doctors.length}
      </h2>
      <div className="overflow-x-auto mx-5">
        <table className="table w-full">
          <thead>
            <tr>
              <th>Sl No.</th>
              <th>Avatar</th>
              <th>Name</th>
              <th>Sector</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {doctors.map((doctor, index) => (
              <DoctorRow
                key={doctor._id}
                index={index}
                refetch={refetch}
                doctor={doctor}
                setDeleteDoctor={setDeleteDoctor}
              />
            ))}
          </tbody>
        </table>
      </div>
      {deleteDoctor && (
        <DeleteConfirmModel
          deleteDoctor={deleteDoctor}
          setDeleteDoctor={setDeleteDoctor}
          refetch={refetch}
        />
      )}
    </div>
  );
};

export default ManageDoctors;
