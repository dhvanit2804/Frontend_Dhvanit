import React, { useEffect, useState } from "react";
import {
  MDBBtn,
  MDBContainer,
  MDBCard,
  MDBCardBody,
  MDBCol,
  MDBRow,
  MDBInput,
  MDBCheckbox,
  MDBIcon,
} from "mdb-react-ui-kit";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import axios from "axios";

const Alogin = () => {
  const redirect = useNavigate();
  useEffect(() => {
    if (localStorage.getItem("Aid")) {
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
  };

  const getSubmit = async (e) => {
    e.preventDefault();

    try {
      const { email, password } = form;

      if (!email.trim() || !password.trim()) {
        console.log("Pls fill required...!");
        toast.error("Pls fill required...!");
        return false;
      }

      const res = await axios.get(`http://localhost:3000/admin?email=${email}`);
      console.log(res.data);

      if (res.data.length === 0) {
        console.log("Email id does not match...!");
        toast.error("Email id does not match...!");
        return false;
      }

      let admin = res.data[0];

      // Password Match

      if (admin.password !== password) {
        console.log("Password does not match...!");
        toast.error("Password does not match...!");
        return false;
      }

      localStorage.setItem("Aid", admin.id);
      localStorage.setItem("Aname", admin.name);
      redirect("/dash");
      toast.success("Login Successfully...!");
    } catch (error) {
      console.log("API Data Not Found...", error);
    }
  };

  return (
    <div className="container">
      <form action="" onSubmit={getSubmit}>
        <MDBContainer fluid>
          <div
            className="p-5 bg-image"
            style={{
              backgroundImage:
                "url(https://mdbootstrap.com/img/new/textures/full/171.jpg)",
              height: "300px",
            }}
          ></div>

          <MDBCard
            className="mx-5 mb-5 p-5 shadow-5"
            style={{
              marginTop: "-100px",
              background: "hsla(0, 0%, 100%, 0.8)",
              backdropFilter: "blur(30px)",
            }}
          >
            <MDBCardBody className="p-5 text-center">
              <h2 className="fw-bold mb-5">Admin Login</h2>

              <MDBInput
                value={form.email}
                name="email"
                onChange={getChange}
                wrapperClass="mb-4"
                label="Email"
                id="form1"
                type="email"
              />
              <MDBInput
                value={form.password}
                name="password"
                onChange={getChange}
                wrapperClass="mb-4"
                label="Password"
                id="form1"
                type="password"
              />

              <div className="d-flex justify-content-center mb-4">
                <MDBCheckbox
                  name="flexCheck"
                  value=""
                  id="flexCheckDefault"
                  label="Subscribe to our newsletter"
                />
              </div>

              <MDBBtn className="w-100 mb-4" size="md">
                sign up
              </MDBBtn>

              <div className="text-center">
                <p>or sign up with:</p>

                <MDBBtn
                  tag="a"
                  color="none"
                  className="mx-3"
                  style={{ color: "#1266f1" }}
                >
                  <MDBIcon fab icon="facebook-f" size="sm" />
                </MDBBtn>

                <MDBBtn
                  tag="a"
                  color="none"
                  className="mx-3"
                  style={{ color: "#1266f1" }}
                >
                  <MDBIcon fab icon="twitter" size="sm" />
                </MDBBtn>

                <MDBBtn
                  tag="a"
                  color="none"
                  className="mx-3"
                  style={{ color: "#1266f1" }}
                >
                  <MDBIcon fab icon="google" size="sm" />
                </MDBBtn>

                <MDBBtn
                  tag="a"
                  color="none"
                  className="mx-3"
                  style={{ color: "#1266f1" }}
                >
                  <MDBIcon fab icon="github" size="sm" />
                </MDBBtn>
              </div>
            </MDBCardBody>
          </MDBCard>
        </MDBContainer>
      </form>
    </div>
  );
};

export default Alogin;
