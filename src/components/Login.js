import React from 'react'
import Navbar from './Navbar'
// import pic from '../images/pic.jpg'

const Login = () => {
  return (
    <div className="login-main">
      <Navbar />
      {/* <img src={pic} alt="" /> */}
      <div className="login">
      <form>
      <div className="mb-3">
          <label for="username" className="col-form-label">
            Username
          </label>
            <input
              type="text"
              className="form-control"
              id="username"
              name="username"
              // value={credentials.username}
              // onChange={handleChange}
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
              // value={credentials.password}
              // onChange={handleChange}
            />
        </div>
        <button type="submit" className="btn btn-primary">
          Submit
        </button>
        </form>
      </div>
    </div>
  )
}

export default Login