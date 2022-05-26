import axios from "axios";
import React from "react";
import { toast } from "react-toastify";
const DeleteConfirmModel = ({ deleteDoctor, setDeleteDoctor, refetch }) => {
  const { doctorName, doctorEmail } = deleteDoctor;
  const handleDelete = (email) => {
    // console.log(email);
    // fetch(`http://localhost:5000/doctor/${email}`, {
    //   method: "DELETE",
    //   headers: {
    //     authorization: `Bearer ${localStorage.getItem("accessToken")}`,
    //   },
    // })
    //   .then((res) => res.json())
    //   .then((data) => {
    //     console.log(data);
    //     if (data.deletedCount) {
    //       toast.success(`Dr. ${doctorName} is deleted Successfully`);
    //       refetch();
    //     }
    //   });
    axios
      .delete(`http://localhost:5000/doctor/${email}`, {
        method: "DELETE",
        headers: {
          authorization: `Bearer ${localStorage.getItem("accessToken")}`,
        },
      })
      .then((data) => {
        console.log(data.data);
        if (data.data.deletedCount) {
          toast.success(`Dr. ${doctorName} is deleted Successfully`);
          setDeleteDoctor(null);
          refetch();
        }
      });
  };
  return (
    <div>
      <input
        type="checkbox"
        id="delete-confirm-modal"
        className="modal-toggle"
      />
      <div className="modal">
        <div className="modal-box">
          <h3 className="font-bold text-lg">{`Are you sure You Want to Delete Dr. ${doctorName}?`}</h3>
          <p className="py-4">
            You've been selected htmlFor a chance to get one year of
            subscription to use Wikipedia htmlFor free!
          </p>
          <div className="modal-action">
            <button
              onClick={() => handleDelete(doctorEmail)}
              className="btn btn-sm btn-outline btn-error"
            >
              Confirm
            </button>
            <label htmlFor="delete-confirm-modal" className="btn btn-sm">
              Cancel
            </label>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DeleteConfirmModel;
