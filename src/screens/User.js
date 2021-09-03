import axios from "axios";
import React from "react";
import "../screens/User.css";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function User({ user, getalluserdata }) {
  const deleteuser = async (email) => {
    try {
      const res = await axios({
        method: "DELETE",
        params: { email },
        url: "http://3.6.93.159:7883/machstatz/delete_existing_user",
      });
      toast.error(res.data.message);
    } catch (error) {
      toast(error);
    }
    getalluserdata();
  };

  return (
    <div className="grid-item" key={user._id.$oid}>
      <div className="deleteuser">
        <button className="delete" onClick={() => deleteuser(user.email)}>
          <h3 className="iconscontainer">
            <i className="fas fa-pen pen"></i>
            <i className="fas fa-trash trash"></i>
          </h3>
        </button>
      </div>
      <div className="usernamecontainer">
        <span className="circle">
          <span className="firstchar">{user.username[0].toUpperCase()}</span>
        </span>
        <div>{user.username}</div>
      </div>
    </div>
  );
}

export default User;
