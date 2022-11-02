import React, { useState } from "react";
import Swal from "sweetalert2";
import * as Yup from "yup";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { API_URL } from "../Helper/URL";

const phoneRegExp =
  /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/;

const schema = Yup.object({
  name: Yup.string().required().min(3).max(15),
  email: Yup.string()
    .email("That doesn't look like a valid email")
    .required("This field is required."),
  number: Yup.string()
    .matches(phoneRegExp, "Phone number is not valid")
    .min(10)
    .max(10)
    .required(),

  textarea: Yup.string()
    .matches(/^[A-Za-z ]*$/, "Please enter text only")
    .min(10)
    .max(40)
    .required(),

  location: Yup.string()
    .matches(/^[A-Za-z ]*$/, "Please enter text only")
    .min(3)
    .max(40)
    .required(),

  devices: Yup.string()
    .matches(
      /^[Easy bath,Disposable glove,Sterile glove,Mask,N95 mask,N95 mask,Under pad,Diaper,Bubbles,Tubing,Air Beds]*$/,
      "Please enter the Materials"
    )
    .required("Materials is required"),
  checkbox: Yup.string().required("A radio option is required"),
}).required();

function EnquiryForm2() {
  let navigate = useNavigate();
  const [name, setName] = useState("");
  const [number, setNumber] = useState("");
  const [email, setEmail] = useState("");
  const [textarea, setTextarea] = useState("");
  const [devices, setDevices] = useState("");
  const [checkbox, setCheckbox] = useState("");
  const [location, setLocation] = useState("");
  const [loadingInProgress, setLoading] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const sendDataToAPI = async () => {
    setLoading(true);
    if (!name || !number || !email || !textarea || !devices || !location) {
      return Swal.fire({
        icon: "error",
        title: "Error!",
        text: "All fields are required.",
        showConfirmButton: true,
      });
    }

    await axios.post(API_URL, {
      name,
      number,
      email,
      textarea,
      devices,
      checkbox,
      location,
    });

    setLoading(false);

    navigate("/tkpage");

    setTimeout(function () {
      window.location.reload(1);
    }, 2000);
  };

  return (
    <div className="mt-3 mb-5 text-justify ">
      <div className=" bg-zinc-300 rounded-2xl font-Poppins">
        {loadingInProgress ? (
          <div className="flex justify-center h-56 gap-4">
            <div className="grid content-center">
              <div
                className="w-12 h-12 border-pink-500 border-solid rounded-full animate-spin border-x-8 border-t-transparent"
              ></div>
            </div>
          </div>
        ) : (
          <div>
            <form
              onSubmit={handleSubmit(sendDataToAPI)}
              className="flex flex-col justify-center p-3 "
            >
              <div className="flex flex-col">
                <label className="hidden" htmlFor="name">
                  Name
                </label>
                <input
                  {...register("name")}
                  onChange={(e) => setName(e.target.value)}
                  name="name"
                  type="text"
                  id="name"
                  placeholder="Enter Your Name"
                  className="block w-full px-3 py-3 m-0 mb-1 font-semibold text-gray-700 transition ease-in-out bg-white border border-gray-300 border-solid rounded form-control bg-clip-padding focus:text-gray-700 focus:bg-white focus:border-pink-500 focus:outline-none "
                />
                <p className="font-semibold text-pink-500 font-Poppins">
                  {errors.name?.message}
                </p>
              </div>
              <div className="flex flex-col">
                <label className="hidden" htmlFor="email">
                  Email:
                </label>
                <input
                  {...register("email")}
                  onChange={(e) => setEmail(e.target.value)}
                  name="email"
                  type="email"
                  id="email"
                  placeholder="Enter Your Email"
                  className="block w-full px-3 py-3 m-0 mb-1 font-semibold text-gray-700 transition ease-in-out bg-white border border-gray-300 border-solid rounded form-control bg-clip-padding focus:text-gray-700 focus:bg-white focus:border-pink-500 focus:outline-none "
                />
                <p className="font-semibold text-pink-500 font-Poppins">
                  {errors.email?.message}
                </p>
              </div>
              <div className="flex flex-col">
                <label className="hidden" htmlFor="number">
                  number
                </label>
                <input
                  {...register("number")}
                  onChange={(e) => setNumber(e.target.value)}
                  name="number"
                  type="number"
                  id="number"
                  placeholder="Enter Your Mobile number"
                  className="block w-full px-3 py-3 m-0 mb-1 font-semibold text-gray-700 transition ease-in-out bg-white border border-gray-300 border-solid rounded form-control bg-clip-padding focus:text-gray-700 focus:bg-white focus:border-pink-500 focus:outline-none "
                />
                <p className="font-semibold text-pink-500 font-Poppins">
                  {errors.number?.message}
                </p>
              </div>
              <div className="flex flex-col">
                <label className="hidden" htmlFor="location">
                  Location
                </label>
                <input
                  {...register("location")}
                  name="location"
                  onChange={(e) => setLocation(e.target.value)}
                  id="location"
                  type="text"
                  placeholder="Enter Your Location"
                  className="block w-full px-3 py-3 m-0 mb-1 font-semibold text-gray-700 transition ease-in-out bg-white border border-gray-300 border-solid rounded form-control bg-clip-padding focus:text-gray-700 focus:bg-white focus:border-pink-500 focus:outline-none "
                />
                <p className="font-semibold text-pink-500 font-Poppins">
                  {errors.location?.message}
                </p>
              </div>
              <div className="flex flex-col">
                <label className="hidden" htmlFor="textarea">
                  Message:
                </label>
                <input
                  {...register("textarea")}
                  name="textarea"
                  onChange={(e) => setTextarea(e.target.value)}
                  id="textarea"
                  placeholder="Enter Your Message"
                  className="block w-full px-3 py-3 m-0 mb-1 font-semibold text-gray-700 transition ease-in-out bg-white border border-gray-300 border-solid rounded form-control bg-clip-padding focus:text-gray-700 focus:bg-white focus:border-pink-500 focus:outline-none "
                />
                <p className="font-semibold text-pink-500 font-Poppins">
                  {errors.textarea?.message}
                </p>
              </div>
              <div className="flex flex-col">
                <label htmlFor="devices" className="hidden">
                  Underline select
                </label>
                <select
                  {...register("devices")}
                  name="devices"
                  onChange={(e) => setDevices(e.target.value)}
                  id="devices"
                  className="block w-full px-3 py-3 m-0 mb-1 font-semibold text-gray-700 transition ease-in-out bg-white border border-gray-300 border-solid rounded form-control bg-clip-padding focus:text-gray-700 focus:bg-white focus:border-pink-500 focus:outline-none "
                >
                  <option selected>Choose a Materials</option>
                  <option value="Easy bath">Easy bath</option>
                  <option value="Disposable gloves">Disposable gloves</option>
                  <option value="Sterile gloves">Sterile gloves</option>

                  <option value="Under pad">Under pad</option>
                  <option value="Diaper">Diaper</option>
                </select>
                <p className="font-semibold text-pink-500 font-Poppins">
                  {errors.devices?.message}
                </p>
              </div>

              <div className="mt-2">
                <label className="inline-flex items-center ml-6">
                  <input
                    {...register("checkbox")}
                    onChange={(e) => setCheckbox(e.target.value)}
                    type="radio"
                    className="form-radio"
                    name="checkbox"
                    value="purchase"
                  />
                  <span className="ml-2">Purchase</span>
                </label>
                <p className="font-semibold text-pink-500 font-Poppins">
                  {errors.checkbox?.message}
                </p>
              </div>
              <div className="flex justify-center md:py-1">
                <button
                  className="px-6 py-3 mt-3 font-bold text-white transition duration-100 ease-in-out bg-pink-600 rounded-lg hover:ring-4 ring-sky-700"
                  type="submit"
                >
                  Sumbit
                </button>
              </div>
            </form>
          </div>
        )}
      </div>
    </div>
  );
}

export default EnquiryForm2;
