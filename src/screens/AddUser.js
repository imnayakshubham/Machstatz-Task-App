import React, { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import axios from "axios";
import "../screens/AddUser.css";

function AddUser({ getalluserdata }) {
  const [email, setemail] = useState("");
  const [firstname, setfirstname] = useState("");
  const [lastname, setlastname] = useState("");
  const [pwd, setpwd] = useState("");
  const [username, setusername] = useState("");

  const handleadduser = async () => {
    if (!email && !firstname && !lastname && !pwd && !username) {
      return toast.error("Please fill all the fields");
    }
    try {
      let data = { email, firstname, lastname, pwd, username };
      const res = await axios({
        method: "POST",
        url: "http://3.6.93.159:7883/machstatz/add_new_user",
        data: data,
        headers: {
          "Access-Control-Allow-Origin": "*",
          "Content-Type": "text/plain",
        },
      });
      toast(res.data.message);
    } catch (error) {
      toast(error);
    }
    getalluserdata();
  };
  const clearinputfields = () => {
    setemail("");
    setfirstname("");
    setlastname("");
    setpwd("");
    setusername("");
  };
  return (
    <>
      <div className="inputcontainer">
        <h1>Add User</h1>
        <hr />
        <div className="addsuser">
          <form id="postform" method="post">
            <div className="userform">
              <input
                type="email"
                placeholder="Enter Email here"
                value={email}
                name={email}
                onChange={(e) => {
                  setemail(e.target.value);
                }}
                required
              />
              <input
                type="text"
                placeholder="Enter First Name here"
                value={firstname}
                name={firstname}
                onChange={(e) => {
                  setfirstname(e.target.value);
                }}
                required
              />
              <input
                type="text"
                placeholder="Enter Last Name here"
                value={lastname}
                name={lastname}
                onChange={(e) => {
                  setlastname(e.target.value);
                }}
                required
              />

              <input
                type="password"
                placeholder="Enter password here"
                value={pwd}
                name={pwd}
                onChange={(e) => {
                  setpwd(e.target.value);
                }}
                required
              />
              <input
                type="text"
                placeholder="Enter Username here"
                value={username}
                name={username}
                onChange={(e) => {
                  setusername(e.target.value);
                }}
                required
              />
            </div>
            <div className="btncontainer">
              <button className="cancelbtn" onClick={clearinputfields}>
                Cancel
              </button>
              <button className="btn" onClick={handleadduser}>
                Add User
              </button>
            </div>
          </form>
        </div>
      </div>
      <ToastContainer />
    </>
  );
}

export default AddUser;
