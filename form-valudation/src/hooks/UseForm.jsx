import React, { useState } from "react";

const UseForm = (validata) => {
  const [values, setValues] = useState({
    userName: "",
    email: "",
    password: "",
    conPassword: "",
  });

  const [errors, setError] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setValues((prevValues) => {
      return {
        ...prevValues,
        [name]: value,
      };
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    setError(validata(values))
  };
  return { handleChange, values,handleSubmit,errors };
};

export default UseForm;
