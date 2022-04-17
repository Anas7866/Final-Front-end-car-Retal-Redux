/* eslint-disable jsx-a11y/alt-text */
import { toast } from "react-toastify";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addUser } from "../redux/users/actions";
import "../Signup/Signup.css";

function Signup() {
  const dispatch = useDispatch();
  const [user, setUser] = useState({
    name: "",
    email: "",
    contact: "",
    dob: "",
    country: "",
    city: "",
    address: "",
    password: "",
  });

  const handleChange = (event) => {
    const { value, name } = event.target;
    let newUser = { ...user };
    newUser[name] = value;
    setUser(newUser);
  };

  const handleSubmit = () => {
    if (
      user.name === "" ||
      user.email === "" ||
      user.contact === "" ||
      user.dob === "" ||
      user.country === "" ||
      user.city === "" ||
      user.address === "" ||
      user.password === ""
    ) {
      toast.error("Please fill all fields");
      return;
    }
    dispatch(addUser(user));
  };

  return (
    <div className="col-sm-12 linear-background">
      <div className="container">
        <div className="row">
          <div className="col-sm-6 padding-laptop">
            <div className="col-sm-12">
              <div className="row ">
                <div className="col-sm-6 p-0">
                  <div className="col-sm-12 text-left ">
                    <h3>Sign-up</h3>
                  </div>

                  <div className="col-sm-12 p-0">
                    <div className="input-group field-size text-center mt-2">
                      <div className="input-group-prepend ">
                        <button
                          className="btn btn-primary button-color"
                          type="button"
                        >
                          <i style={{ color: "gray" }} class="fas fa-user"></i>
                        </button>
                      </div>
                      <input
                        type="text"
                        className="form-control field-background shadow-none focus-1"
                        placeholder="Name"
                        aria-describedby="basic-addon1"
                        value={user.name}
                        name="name"
                        onChange={(event) => {
                          handleChange(event);
                        }}
                      />
                    </div>
                    <div className="input-group field-size text-center mt-2">
                      <div className="input-group-prepend ">
                        <button
                          className="btn btn-primary button-color"
                          type="button"
                        >
                          <i
                            style={{ color: "gray" }}
                            class="fas fa-envelope"
                          ></i>
                        </button>
                      </div>
                      <input
                        type="text"
                        className="form-control field-background shadow-none focus-1"
                        placeholder="Email"
                        aria-describedby="basic-addon1"
                        value={user.email}
                        name="email"
                        onChange={(event) => {
                          handleChange(event);
                        }}
                      />
                    </div>
                    <div className="input-group field-size text-center mt-2">
                      <div className="input-group-prepend ">
                        <button
                          className="btn btn-primary button-color"
                          type="button"
                        >
                          <i
                            style={{ color: "gray" }}
                            class="fas fa-address-book"
                          ></i>
                        </button>
                      </div>
                      <input
                        type="text"
                        className="form-control field-background shadow-none focus-1"
                        placeholder="contact"
                        aria-describedby="basic-addon1"
                        value={user.contact}
                        name="contact"
                        onChange={(event) => {
                          handleChange(event);
                        }}
                      />
                    </div>
                    <div className="input-group field-size text-center mt-2">
                      <div className="input-group-prepend ">
                        <button
                          className="btn btn-primary button-color"
                          type="button"
                        >
                          <i
                            style={{ color: "gray" }}
                            class="fas fa-calendar"
                          ></i>
                        </button>
                      </div>
                      <input
                        type="text"
                        className="form-control field-background shadow-none focus-1"
                        placeholder="dob"
                        aria-describedby="basic-addon1"
                        value={user.dob}
                        name="dob"
                        onChange={(event) => {
                          handleChange(event);
                        }}
                      />
                    </div>
                    <div className="input-group field-size text-center mt-2">
                      <div className="input-group-prepend ">
                        <button
                          className="btn btn-primary button-color"
                          type="button"
                        >
                          <i
                            style={{ color: "gray" }}
                            class="fas fa-globe-africa"
                          ></i>
                        </button>
                      </div>
                      <input
                        type="text"
                        className="form-control field-background shadow-none focus-1"
                        placeholder="country"
                        aria-describedby="basic-addon1"
                        value={user.country}
                        name="country"
                        onChange={(event) => {
                          handleChange(event);
                        }}
                      />
                    </div>

                    <div className="input-group field-size text-center mt-2">
                      <div className="input-group-prepend ">
                        <button
                          className="btn btn-primary button-color"
                          type="button"
                        >
                          <i
                            style={{ color: "gray" }}
                            class="fas fa-building"
                          ></i>
                        </button>
                      </div>
                      <input
                        type="text"
                        className="form-control field-background shadow-none focus-1"
                        placeholder="city"
                        aria-describedby="basic-addon1"
                        value={user.city}
                        name="city"
                        onChange={(event) => {
                          handleChange(event);
                        }}
                      />
                    </div>
                    <div className="input-group field-size text-center mt-2">
                      <div className="input-group-prepend ">
                        <button
                          className="btn btn-primary button-color"
                          type="button"
                        >
                          <i
                            style={{ color: "gray" }}
                            class="fas fa-address-card"
                          ></i>
                        </button>
                      </div>
                      <input
                        type="text"
                        className="form-control field-background shadow-none focus-1"
                        placeholder="address"
                        aria-describedby="basic-addon1"
                        value={user.address}
                        name="address"
                        onChange={(event) => {
                          handleChange(event);
                        }}
                      />
                    </div>
                    <div className="input-group field-size text-center mt-2">
                      <div className="input-group-prepend ">
                        <button
                          className="btn btn-primary button-color"
                          type="button"
                        >
                          <i style={{ color: "gray" }} class="fas fa-lock"></i>
                        </button>
                      </div>
                      <input
                        type="password"
                        className="form-control field-background shadow-none focus-1"
                        placeholder="password"
                        aria-describedby="basic-addon1"
                        value={user.password}
                        name="password"
                        onChange={(event) => {
                          handleChange(event);
                        }}
                      />
                    </div>

                    <div className="col-sm-12 p-0 mt-4">
                      <div className="custom-control custom-checkbox">
                        <input
                          type="checkbox"
                          className="custom-control-input"
                          id="customCheck1"
                        />
                        <label
                          className="custom-control-label"
                          htmlFor="customCheck1"
                        >
                          I've read and agreed with Terms of service and our
                          Privacy Policy
                        </label>
                      </div>
                    </div>
                    <div className="col-sm-12 pl-0 mt-2">
                      <button
                        className="btn btn-primary pl-5 pr-5"
                        onClick={handleSubmit}
                        style={{
                          borderRadius: "20px",
                          backgroundColor: "#2B6777",
                          borderColor: "#2B6777",
                        }}
                      >
                        <i class="fas fa-arrow-right"></i>
                      </button>
                    </div>
                    <div
                      className="col-sm-12 p-0 mt-2"
                      style={{ fontSize: "80%" }}
                    >
                      <span>
                        <p className="p-0 m-0">
                          Already have an account?{" "}
                          <p className="p-0 m-0">
                            <b style={{ color: "#2B6777" }}>
                              <Link
                                to="/login"
                                style={{ textDecoration: "none" }}
                              >
                                Login
                              </Link>
                            </b>
                          </p>
                        </p>
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-sm-6 m-auto">
            <img src="Images/card.png" className="img-fluid" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Signup;
