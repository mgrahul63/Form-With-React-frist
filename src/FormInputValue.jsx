/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */

import React from "react";

const FormInputValue = (props) => {
  return (
    <>
      <div>
        <h2>Form Data:</h2>
        <p>First Name: {props.data.fname}</p>
        <p>Last Name: {props.data.lname}</p>
        <p>Email: {props.data.email}</p>
        <p>Password: {props.data.password}</p>
      </div>
      <div>Hello</div>
    </>
  );
};

export default FormInputValue;
