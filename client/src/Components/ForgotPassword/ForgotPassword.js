import React from "react";
import "./edit.css";
import { useState, useEffect } from "react";
import axios from "axios";

function ForgotPassword() {
  const [email, setEmail] = useState();

  const handleSubmit = async (e) => {
    e.preventDefault();
    await axios
      .post(process.env.REACT_APP_API_URL + "/forgotpassword", {
        Email: email,
      })
      .then((response) => {
        alert(response.data);
      });
  };

  return (
    <div className="container">
      <form className="forgot-password-form" onSubmit={handleSubmit}>
        <label>البريد الالكتروني</label>

        <input
          className="form-control email-field"
          type="email"
          onChange={(e) => {
            setEmail(e.target.value);
          }}
          required
        ></input>

        <br />
        <input
          type="submit"
          className=" btn-success width btn"
          value="تأكيد البريد الالكتروني"
        />
      </form>

      <br />
      <div className="text-center">
        <p>
          ملحوظه: سيتم ارسال رساله بها كود لتأكيد معلوماتك علي البريد الالكتروني
          الذي قمت بادخاله
        </p>
      </div>
    </div>
  );
}

export default ForgotPassword;
