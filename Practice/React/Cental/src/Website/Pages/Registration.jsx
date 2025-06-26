import React, { useState } from "react";
import {
  MDBBtn,
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBCard,
  MDBCardBody,
  MDBCardImage,
  MDBInput,
  MDBIcon,
} from "mdb-react-ui-kit";
import { toast } from "react-toastify";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Registration = () => {
  const redirect = useNavigate();

  const [form, setform] = useState({
    id: "",
    name: "",
    email: "",
    password: "",
    status: "",
  });

  const getChange = (e) => {
    setform({
      ...form,
      id: new Date().getTime().toString(),
      status: "unblock",
      [e.target.name]: e.target.value,
    });
    console.log(form);
  };

  const getSubmit = async (e) => {
    e.preventDefault();

    if (!form.name.trim() || !form.email.trim() || !form.password.trim()) {
      console.log("Please fill required..!");
      toast.error("Please fill required..!");
      return false;
    }

    const res = await axios.post("http://localhost:3000/user", form);
    console.log(res.data);
    redirect("/login");
    toast.success("Register Successfull..!");
  };

  return (
    <div className="container">
      <div className="min-vh-100 d-flex justify-content-center align-items-center">
        <form action="" onSubmit={getSubmit}>
          <MDBContainer fluid>
            <MDBCard className="text-black" style={{ borderRadius: "25px" }}>
              <MDBCardBody>
                <MDBRow>
                  <MDBCol
                    md="10"
                    lg="6"
                    className="order-2 order-lg-1 d-flex flex-column align-items-center"
                  >
                    <h1 className="text-center h1 fw-bold mb-5 mx-1 mx-md-4 mt-4">
                      Sign up
                    </h1>

                    <div className="d-flex flex-row align-items-center mb-4 ">
                      <MDBIcon fas icon="user me-3" size="lg" />
                      <MDBInput
                        label="Your Name"
                        name="name"
                        onChange={getChange}
                        value={form.name}
                        id="form1"
                        type="text"
                        className="w-100"
                      />
                    </div>

                    <div className="d-flex flex-row align-items-center mb-4">
                      <MDBIcon fas icon="envelope me-3" size="lg" />
                      <MDBInput
                        value={form.email}
                        name="email"
                        onChange={getChange}
                        label="Your Email"
                        id="form2"
                        type="email"
                      />
                    </div>

                    <div className="d-flex flex-row align-items-center mb-4">
                      <MDBIcon fas icon="lock me-3" size="lg" />
                      <MDBInput
                        value={form.password}
                        name="password"
                        onChange={getChange}
                        label="Password"
                        id="form3"
                        type="password"
                      />
                    </div>

                    <MDBBtn className="mb-4" size="lg">
                      Register
                    </MDBBtn>
                  </MDBCol>

                  <MDBCol
                    md="10"
                    lg="6"
                    className="order-1 order-lg-2 d-flex align-items-center"
                  >
                    <MDBCardImage
                      src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-registration/draw1.webp"
                      fluid
                    />
                  </MDBCol>
                </MDBRow>
              </MDBCardBody>
            </MDBCard>
          </MDBContainer>
        </form>
      </div>
    </div>
  );
};

export default Registration;
