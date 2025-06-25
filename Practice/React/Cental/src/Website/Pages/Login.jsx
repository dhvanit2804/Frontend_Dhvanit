import React, { useEffect, useState } from "react";
import {
  MDBContainer,
  MDBCol,
  MDBRow,
  MDBBtn,
  MDBIcon,
  MDBInput,
  MDBCheckbox,
} from "mdb-react-ui-kit";
import { toast } from "react-toastify";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";

const Login = () => {
  const redirect = useNavigate();

  useEffect(() => {
    if (localStorage.getItem("Uid")) {
      redirect("/");
    }
  });

  const [form, setform] = useState({
    email: "",
    password: "",
  });

  const getChange = (e) => {
    setform({
      ...form,
      [e.target.name]: e.target.value,
    });
    console.log(form);
  };

  const getSubmit = async (e) => {
    e.preventDefault();

    try {
      const { email, password } = form;

      if (!email.trim() || !password.trim()) {
        console.log("Please fill email and password...!");
        toast.error("Please fill email and password...!");
        return false;
      }

      const res = await axios.get(`http://localhost:3000/user?email=${email}`);
      console.log(res.data);

      // User Email Match
      if (res.data.length === 0) {
        console.log("Email Does not match...!");
        toast.error("Email Does not match...!");
        return false;
      }

      let user = res.data[0];

      // User Password match..
      if (user.password !== password) {
        console.log("Password Does not match...!");
        toast.error("Password Does not match...!");
        return false;
      }

      if (user.status == "block") {
        console.log("Account has been blocked..!");
        toast.error("Account has been blocked..!");
        return false;
      }

      localStorage.setItem("Uid", user.id);
      localStorage.setItem("Uname", user.name);
      redirect("/");
      console.log("Successfully Login..!");
      toast.success("Successfully Login..!");
    } catch (error) {
      console.log("API Not found...!");
      toast.error("API Not found...!");
    }
  };

  return (
    <div className="container mt-5">
      <form action="" onSubmit={getSubmit}>
        <MDBContainer fluid className="p-3 mt-5 my-5 h-custom">
          <MDBRow>
            <MDBCol col="10" md="6">
              <img
                src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/draw2.webp"
                class="img-fluid"
                alt="Sample image"
              />
            </MDBCol>

            <MDBCol col="4" md="6">
              <h1 className="fw-bold text-center mb-5">User Login</h1>

              <MDBInput
                value={form.email}
                name="email"
                onChange={getChange}
                wrapperClass="mb-4"
                label="Email address"
                id="formControlLg"
                type="email"
                size="lg"
              />
              <MDBInput
                value={form.password}
                name="password"
                onChange={getChange}
                wrapperClass="mb-4"
                label="Password"
                id="formControlLg"
                type="password"
                size="lg"
              />

              <div className="d-flex justify-content-between mb-4">
                <MDBCheckbox
                  name="flexCheck"
                  value=""
                  id="flexCheckDefault"
                  label="Remember me"
                />
                <a href="!#">Forgot password?</a>
              </div>

              <div className="text-center text-md-start mt-4 pt-2">
                <MDBBtn className="mb-0 px-5" size="lg">
                  Login
                </MDBBtn>
                <p className="small fw-bold mt-2 pt-1 mb-2">
                  Don't have an account?{" "}
                  <Link to="/register" className="link-danger">
                    Register
                  </Link>
                </p>
              </div>
            </MDBCol>
          </MDBRow>

          <div className="d-flex flex-column flex-md-row text-center text-md-start justify-content-between py-4 px-4 px-xl-5 bg-primary">
            <div className="text-white mb-3 mb-md-0">
              Copyright © 2025. All rights reserved.
            </div>

            <div>
              <MDBBtn
                tag="a"
                color="none"
                className="mx-3"
                style={{ color: "white" }}
              >
                <MDBIcon fab icon="facebook-f" size="md" />
              </MDBBtn>

              <MDBBtn
                tag="a"
                color="none"
                className="mx-3"
                style={{ color: "white" }}
              >
                <MDBIcon fab icon="twitter" size="md" />
              </MDBBtn>

              <MDBBtn
                tag="a"
                color="none"
                className="mx-3"
                style={{ color: "white" }}
              >
                <MDBIcon fab icon="google" size="md" />
              </MDBBtn>

              <MDBBtn
                tag="a"
                color="none"
                className="mx-3"
                style={{ color: "white" }}
              >
                <MDBIcon fab icon="linkedin-in" size="md" />
              </MDBBtn>
            </div>
          </div>
        </MDBContainer>
      </form>
    </div>
  );
};

export default Login;
