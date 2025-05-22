import React, { useEffect, useState } from "react";

function Usedata() {
  // useEffect(()=>{
  //     console.log("I am Outside")
  //     return(()=>{
  //         console.log("effect inside")
  //     })
  // },[])

  const [name, setName] = useState("Dhvanit");
  useEffect(() => {
    console.log("Outside");
    return () => {
      console.log("Inside");
    };
  }, [name]);

  return (
    <div>
      <h1>This is UseEffect</h1>

      <h1>Hello {name}</h1>

      <button onClick={() => setName("Meet")}>Change Name</button>
    </div>
  );
}

export default Usedata;
