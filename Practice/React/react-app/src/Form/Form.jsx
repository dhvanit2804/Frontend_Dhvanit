import React, { useState } from "react";

function Form() {

    const [name, setname] = useState("");
    const [email, setemail] = useState("")
    const [num, setnum] = useState("")
    const [pass, setpass] = useState("");

  return (
    <div className="container">
      <div className="row">
        <div className="col-md-6">
          <form action="">
            <div>
              <h1>This is form </h1>
              <div className="mb-3 mt-3">
                <label
                  htmlFor="exampleFormControlInput1"
                  className="form-label"
                >
                  Enter your name
                </label>
                <input
                  type="name"
                  value={name}
                  onChange={(e)=>setname(e.target.value)}
                  className="form-control"
                  id="exampleFormControlInput1"
                  placeholder="Enter Your name"
                />
              </div>
              <div className="mb-3">
                <label
                  htmlFor="exampleFormControlInput2"
                  className="form-label"
                >
                  Email address
                </label>
                <input
                  type="email"
                  value={email}
                  onChange={(e)=>setemail(e.target.value)}
                  className="form-control"
                  id="exampleFormControlInput2"
                  placeholder="Enter Your email"
                />
              </div>
              <div className="mb-3">
                <label
                  htmlFor="exampleFormControlInput3"
                  className="form-label"
                >
                  Enter your number
                </label>
                <input
                  type="tel"
                  value={num}
                  onChange={(e)=>setnum(e.target.value)}
                  className="form-control"
                  id="exampleFormControlInput3"
                  placeholder="Enter Your number"
                />
              </div>
              <div className="mb-3">
                <label
                  htmlFor="exampleFormControlInput4"
                  className="form-label"
                >
                  Enter your password
                </label>
                <input
                  type="password"
                  value={pass}
                  onChange={(e)=>setpass(e.target.value)}
                  className="form-control"
                  id="exampleFormControlInput4"
                  placeholder="Enter Your password"
                />
              </div>
              <div>
                <input type="submit" />
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Form;
