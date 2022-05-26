import React from "react";
import axios from "axios";
import { toast } from "react-toastify";
import { useForm } from "react-hook-form";
import { useQuery } from "react-query";
import Loading from "../Shared/Loading";
const Signup = () => {
  const {
    register,
    formState: { errors },
    handleSubmit,
    reset,
  } = useForm();
  const { data: services, isLoading } = useQuery("services", () =>
    axios.get("http://localhost:5000/services").then((data) => {
      return data.data;
    })
  );
  const imageStorageKey = "227c0c22a52534cb626f208a31942b4c";
  //File=https://api.imgbb.com/1/upload
  if (isLoading) {
    return <Loading />;
  }
  const onSubmit = async (data) => {
    console.log(data);
    const name = data.name;
    const email = data.email;
    const sector = data.sector;
    const image = data.image[0];
    const formData = new FormData();
    formData.append("image", image);
    const url = `https://api.imgbb.com/1/upload?key=${imageStorageKey}`;

    axios.post(url, formData).then((result) => {
      // console.log(result.data);
      if (result.data.success) {
        const img = result.data.data.url;
        // console.log(img);
        const doctor = {
          doctorName: name,
          doctorEmail: email,
          sector: sector,
          doctorImg: img,
        };
        // console.log(doctor);
        const url = "http://localhost:5000/doctor";
        axios
          .post(url, doctor, {
            headers: {
              authorization: `Bearer ${localStorage.getItem("accessToken")}`,
            },
          })
          .then((inserted) => {
            if (inserted.data.insertedId) {
              toast.success(`Dr. ${name} is added Successfully`, {
                theme: "colored",
              });
              reset();
            } else {
              toast.error("Failed to Add Doctor", { theme: "colored" });
            }
            // console.log(inserted.data);
          });
      }
    });
  };

  return (
    <div className="mt-5 flex justify-center items-center">
      <div className="card w-96 shadow-2xl">
        <div className="card-body">
          <h2 className="text-center text-xl font-bold">Add Doctor</h2>
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Name</span>
              </label>
              <input
                type="Text"
                placeholder="Enter Your Name"
                className="input input-bordered"
                {...register("name", {
                  required: {
                    value: true,
                    message: "Name is required",
                  },
                })}
              />
              <label className="label">
                {errors.name?.type === "required" && (
                  <span className="label-text-alt text-[red]">
                    {errors.name.message}
                  </span>
                )}
              </label>
            </div>

            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                type="email"
                placeholder="Enter Your Email"
                className="input input-bordered"
                {...register("email", {
                  required: {
                    value: true,
                    message: "Email is required",
                  },
                  pattern: {
                    value: /[a-z0-9]+@[a-z]+\.[a-z]{2,3}/,
                    message: "Provide A Valid Email",
                  },
                })}
              />
              <label className="label">
                {errors.email?.type === "required" && (
                  <span className="label-text-alt text-[red]">
                    {errors.email.message}
                  </span>
                )}
                {errors.email?.type === "pattern" && (
                  <span className="label-text-alt text-[red]">
                    {errors.email.message}
                  </span>
                )}
              </label>
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Sector</span>
              </label>
              <select
                {...register("sector")}
                className="select input-bordered w-full max-w-xs"
              >
                {services.map((service) => (
                  <option key={service.Id} value={service.name}>
                    {service.name}
                  </option>
                ))}
              </select>
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Image</span>
              </label>
              <input
                type="file"
                alt=""
                placeholder="Image"
                className="input input-bordered"
                {...register("image", {
                  required: {
                    value: true,
                    message: "Image File is required",
                  },
                })}
              />
              <label className="label">
                {errors.image?.type === "required" && (
                  <span className="label-text-alt text-[red]">
                    {errors.image.message}
                  </span>
                )}
              </label>
            </div>
            <div className="form-control mt-6">
              <input type="submit" className="btn" value="Add" />
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Signup;
