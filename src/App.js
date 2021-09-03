import "./App.css";
import axios from "axios";
import { useEffect, useState } from "react";

import User from "./screens/User";
import AddUser from "./screens/AddUser";

function App() {
  const [userdata, setuserdata] = useState([]);
  const getalluserdata = async () => {
    const response = await axios.get(
      "http://3.6.93.159:7883/machstatz/get_all_users"
    );
    // const response = await fetch(
    //   "https://3.6.93.159:7883/machstatz/get_all_users"
    // );
    // response = response.json();
    setuserdata(response.data);
    return response.data;
  };
  useEffect(async () => {
    await getalluserdata();
  }, []);

  return (
    <>
      <div className="App">
        <div className="grid-container">
          {userdata.map((user) => (
            <div key={user._id.$oid}>
              <User user={user} getalluserdata={getalluserdata} />
            </div>
          ))}
        </div>
      </div>
      <AddUser getalluserdata={getalluserdata} />
    </>
  );
}

export default App;
