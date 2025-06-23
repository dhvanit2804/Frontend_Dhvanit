import React, { useEffect, useState } from "react";
import {
  MDBContainer,
  MDBInput,
  MDBCheckbox,
  MDBBtn,
  MDBIcon,
} from "mdb-react-ui-kit";
import { toast } from "react-toastify";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Alogin = () => {
  const redirect = useNavigate();

  useEffect(() => {
    if (localStorage.getItem("Admin id")) {
      redirect("/dash");
    }
  }, []);

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
        console.log("Pls field required...!");
        toast.error("Pls field required...!");
        return false;
      }

      // Email id Match
      const res = await axios.get(`http://localhost:3000/Admin?email=${email}`);
      console.log(res.data);
      if (res.data.lenght === 0) {
        console.log("Email id Does not match...!");
        toast.error("Email id Does not match...");
        return false;
      }

      let admin = res.data[0];

      // PassWord match

      if (admin.password !== password) {
        console.log("Password does not match..");
        toast.error("Password not match....");
        return false;
      }

      localStorage.setItem("Admin id", admin.id);
      localStorage.setItem("Admin Name", admin.name);
      redirect("/dash");
      toast.success("Login successfully...");
      console.log("Login Successfull..");
    } catch (error) {
      console.log("API Data Not Found...", error);
    }
  };

  return (
    <div className="container mt-5">
      <h1 className="text-center fw-bold text-primary">
        <u>ADMIN LOGIN PAGE</u>
      </h1>
      <form action="" onSubmit={getSubmit}>
        <MDBContainer className="p-3 my-5 d-flex flex-column w-50">
          <MDBInput
            wrapperClass="mb-4"
            label="Email address"
            id="form1"
            name="email"
            onChange={getChange}
            type="email"
            value={form.email}
          />
          <MDBInput
            wrapperClass="mb-4"
            label="Password"
            id="form2"
            type="password"
            onChange={getChange}
            name="password"
            value={form.password}
          />

          <div className="d-flex justify-content-between mx-3 mb-4">
            <MDBCheckbox
              name="flexCheck"
              value=""
              id="flexCheckDefault"
              label="Remember me"
            />
            <a href="!#">Forgot password?</a>
          </div>

          <MDBBtn className="mb-4">Sign in</MDBBtn>

          <div className="text-center">
            <p>
              Not a member? <a href="#!">Register</a>
            </p>
            <p>or sign up with:</p>

            <div
              className="d-flex justify-content-between mx-auto"
              style={{ width: "40%" }}
            >
              <MDBBtn
                tag="a"
                color="none"
                className="m-1"
                style={{ color: "#1266f1" }}
              >
                <MDBIcon fab icon="facebook-f" size="sm" />
              </MDBBtn>

              <MDBBtn
                tag="a"
                color="none"
                className="m-1"
                style={{ color: "#1266f1" }}
              >
                <MDBIcon fab icon="twitter" size="sm" />
              </MDBBtn>

              <MDBBtn
                tag="a"
                color="none"
                className="m-1"
                style={{ color: "#1266f1" }}
              >
                <MDBIcon fab icon="google" size="sm" />
              </MDBBtn>

              <MDBBtn
                tag="a"
                color="none"
                className="m-1"
                style={{ color: "#1266f1" }}
              >
                <MDBIcon fab icon="github" size="sm" />
              </MDBBtn>
            </div>
          </div>
        </MDBContainer>
      </form>
    </div>
  );
};

export default Alogin;
