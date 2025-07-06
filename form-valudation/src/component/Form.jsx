import React from "react";
import FormSignup from "./FormSignup";
import img1 from "../assets/react.svg";

const Form = () => {
  return (
    <div className="flex  p-5">
      <div className="flex flex-col justify-center bg-teal-200 rounded-l-2xl shadow-xl  w-100 ">
        <img src={img1} alt="" />
      </div>
      <FormSignup />
    </div>
  );
};

export default Form;
