import React from "react";
import { IoIosClose } from "react-icons/io";
import UseForm from "../hooks/UseForm";
import validata from "../utils/validate";

const FormSignup = () => {
  const { handleChange, values, handleSubmit, errors } = UseForm(validata);

  return (
    <div className="flex flex-col justify-center items-center bg-teal-100 rounded-r-2xl border-amber-900 w-100 shadow-xl">
      <button className="text-4xl pl-80 pt-5 hover:translate-y-0.5 cursor-pointer">
        <IoIosClose />
      </button>
      <h1 className="pb-4 text-2xl font-semibold">Create Your Account</h1>
      <form onSubmit={handleSubmit}>
        <div className="flex flex-col justify-center items-center gap-4 ">
          <input
            type="text"
            placeholder="Username"
            name="userName"
            value={values.userName}
            className="border rounded py-2 px-4 outline-0 border-l-blue-500 hover:translate-y-0.5"
            onChange={handleChange}
          />
          {errors.userName && <p>{errors.userName} </p>}
          <input
            type="email"
            placeholder="Email"
            name="email"
            value={values.email}
            className="border rounded py-2 px-4 outline-0 border-l-blue-500 hover:translate-y-0.5"
            onChange={handleChange}
          />
          {errors.email && <p>{errors.email} </p>}
          <input
            type="password"
            placeholder="Password"
            name="password"
            value={values.password}
            className="border rounded py-2 px-4 outline-0 border-l-blue-500 hover:translate-y-0.5"
            onChange={handleChange}
          />
          {errors.password && <p>{errors.password} </p>}
          <input
            type="password"
            placeholder="Conform Password"
            name="conPassword"
            value={values.conPassword}
            className="border rounded py-2 px-4 outline-0 border-l-blue-500 hover:translate-y-0.5"
            onChange={handleChange}
          />
          {errors.conPassword && <p>{errors.conPassword} </p>}
           <button className="border rounded px-4 py-2 my-5 hover:translate-y-0.5 hover:border-green-500 hover:shadow-emerald-500 hover:shadow-md  cursor-pointer">
          SingnUp
        </button>
        <p className="pb-5">
          Already have an account? Login <a className="text-red-600 border-b" href="#">here</a>
        </p>
        </div>
       
      </form>
    </div>
  );
};

export default FormSignup;
