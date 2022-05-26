import React from "react";

const DoctorRow = ({ doctor, index, refetch, setDeleteDoctor }) => {
  const { doctorName, doctorEmail, sector, doctorImg } = doctor;

  return (
    <tr>
      <th>{index + 1}</th>
      <td>
        <div className="avatar">
          <div className="w-12 rounded-full ring ring-primary ring-offset-2">
            <img src={doctorImg} alt={doctorName} />
          </div>
        </div>
      </td>
      <td>{doctorName}</td>
      <td>{sector}</td>
      <td>
        <label
          onClick={() => setDeleteDoctor(doctor)}
          htmlFor="delete-confirm-modal"
          className="btn btn-error btn-xs text-white"
        >
          Remove
        </label>
      </td>
    </tr>
  );
};

export default DoctorRow;
