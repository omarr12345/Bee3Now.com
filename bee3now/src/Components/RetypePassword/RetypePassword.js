import React from "react";
import "./edit.css";
import { useParams } from "react-router";
import { useState } from "react";
import axios from "axios";

function RetypePassword() {
  const [pass, setPass] = useState();
  const [confirmPass, setConfirmPass] = useState();
  const params = useParams();
  const accesstoken = params.accesstoken;

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (pass == confirmPass) {
      await axios
        .patch(
          process.env.REACT_APP_API_URL + "/updatepassword",
          {
            Password: pass,
          },
          {
            headers: { Authorization: accesstoken },
          }
        )
        .then((response) => {
          alert(response.data);
        });
    } else {
      console.log("Retype Password Correctly");
    }
  };
  return (
    <div className="container retype-password">
      <form className="text-center border" onSubmit={handleSubmit}>
        <div className="text-center">
          <label>الباسوورد الجديد</label>
          <br />
          <input
            className="form-control w-30"
            type="password"
            onChange={(e) => {
              setPass(e.target.value);
            }}
          />
          <br />
          <label> تأكيد الباسوورد الجديد</label>
          <br />
          <input
            className="form-control w-30"
            type="password"
            onChange={(e) => {
              setConfirmPass(e.target.value);
            }}
          />
          <br />
          <input
            type="submit"
            value="اتمام العمليه"
            className="btn btn-success btn-width"
          />
        </div>
      </form>
    </div>
  );
}

export default RetypePassword;
