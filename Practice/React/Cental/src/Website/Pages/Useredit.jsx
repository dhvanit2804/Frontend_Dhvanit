import React, { useEffect, useState } from "react";
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
import axios from "axios";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

const Useredit = () => {
  const redirect = useNavigate();

  const [edit, setedit] = useState({
    id: "",
    name: "",
    email: "",
    password: "",
    status: "",
  });

  useEffect(() => {
    getdata();
  }, []);

  const getdata = async () => {
    const res = await axios.get(
      `http://localhost:3000/user/${localStorage.getItem("Uid")}`
    );
    console.log(res.data);
    setedit(res.data);
  };

  const getChange = (e) => {
    setedit({
      ...edit,
      [e.target.name]: e.target.value,
    });
    console.log(edit);
  };

  const updatedata = async (e) => {
    e.preventDefault();

    try {
      if (!edit.name.trim() || !edit.email.trim() || !edit.password.trim()) {
        console.log("Please fill required..!");
        toast.error("Please fill required..!");
        return false;
      }

      const res = await axios.patch(
        `http://localhost:3000/user/${edit.id}`,
        edit
      );
      console.log(res.data);
      localStorage.setItem("Uname", res.data.name);
      redirect("/");
      toast.success("Profile updated..!");
      setedit({
        id: "",
        name: "",
        email: "",
        password: "",
        status: "",
      });
    } catch (error) {
      console.log("API data not found..!");
      toast.error("API data not found..!");
      return false;
    }
  };

  return (
    <div className="container">
      <div className="min-vh-100 d-flex justify-content-center align-items-center">
        <form action="" onSubmit={updatedata}>
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
                      Update Profile
                    </h1>

                    <div className="d-flex flex-row align-items-center mb-4 ">
                      <MDBIcon fas icon="user me-3" size="lg" />
                      <MDBInput
                        label="Your Name"
                        value={edit.name}
                        name="name"
                        onChange={getChange}
                        id="form1"
                        type="text"
                        className="w-100"
                      />
                    </div>

                    <div className="d-flex flex-row align-items-center mb-4">
                      <MDBIcon fas icon="envelope me-3" size="lg" />
                      <MDBInput
                        value={edit.email}
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
                        value={edit.password}
                        name="password"
                        onChange={getChange}
                        label="Password"
                        id="form3"
                        type="password"
                      />
                    </div>

                    <MDBBtn className="mb-4" size="lg">
                      Update Profile
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

export default Useredit;
