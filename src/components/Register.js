import React from "react";
import Navbar from "./Navbar";

const Register = () => {
  return (
    <div className="register-main">
      <Navbar />
      <div className="register">
      <div className="mb-3">
          <label for="username" className="col-form-label">
            Username
          </label>
            <input
              type="text"
              className="form-control"
              id="username"
            />
        </div>
        <div className="mb-3">
          <label for="exampleFormControlInput1" className="form-label">
            Email address
          </label>
          <input
            type="email"
            className="form-control"
            id="exampleFormControlInput1"
          />
        </div>
        <div className="mb-3">
          <label for="fname" className="col-form-label">
            First name
          </label>
            <input
              type="text"
              className="form-control"
              id="fname"
            />
        </div>
        <div className="mb-3">
          <label for="lname" className="col-form-label">
            Last name
          </label>
            <input
              type="text"
              className="form-control"
              id="lname"
            />
        </div>
        <div className="mb-3">
          <label for="inputPassword" className="col-form-label">
            Password
          </label>
            <input
              type="password"
              className="form-control"
              id="inputPassword"
            />
        </div>
        <button type="submit" className="btn btn-primary">
          Submit
        </button>
      </div>
    </div>
  );
};

export default Register;
