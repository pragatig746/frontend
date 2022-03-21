import Navbar from "./Navbar";
import React, { useState, useContext } from "react";
import { useNavigate } from "react-router";

const Register = () => {
  const navigate = useNavigate();
  const [credentials, setcredentials] = useState({
    username: "",
    password: "",
    password2: "",
    email: "",
    fname: "",
    lname: "",
  });
  // const aContext = useContext(alertContext);
  // const { showAlert } = aContext;

  const handleChange = (e) => {
    setcredentials({ ...credentials, [e.target.name]: e.target.value });
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    const response = await fetch("http://127.0.0.1:8000/register/", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        username: credentials.username,
        password: credentials.password,
        password2: credentials.password2,
        email: credentials.email,
        first_name: credentials.fname,
        last_name: credentials.lname
      }),
    });
    const json = await response.json();
    console.log(json);
    // if (!json.success) {
    //   showAlert({ type: "danger", msg: json.error });
    // } else {
    //   // localStorage.setItem("token", json.authtoken);
    //   setcredentials({ name: "", email: "", password: "" });
    //   navigate("/expense");
    //   showAlert({ type: "success", msg: "Signed up" });
    // }
  };
  return (
    <div className="register-main">
      <Navbar />
      <div className="register">
      <form onSubmit={handleSubmit}>
      <div className="mb-3">
          <label for="username" className="col-form-label">
            Username
          </label>
            <input
              type="text"
              className="form-control"
              id="username"
              name="username"
              value={credentials.username}
              onChange={handleChange}
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
            name="email"
            value={credentials.email}
            onChange={handleChange}
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
              name="fname"
              value={credentials.fname}
              onChange={handleChange}
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
              name="lname"
              value={credentials.lname}
              onChange={handleChange}
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
              name="password"
              value={credentials.password}
              onChange={handleChange}
            />
        </div>
        <div className="mb-3">
          <label for="inputPassword" className="col-form-label">
            Password2
          </label>
            <input
              type="password"
              className="form-control"
              id="inputPassword2"
              name="password2"
              value={credentials.password2}
              onChange={handleChange}
            />
        </div>
        <button type="submit" className="btn btn-primary">
          Submit
        </button>
        </form>
      </div>
    </div>
  );
};

export default Register;
