import React, { useEffect, useState } from "react";
import "./edit.css";
import axios from "axios";
import { Axios } from "axios";
import { error } from "jquery";

function PersonalDetails() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [number, setNumber] = useState("");
  const [pass, setPass] = useState("");

  const data = {
    Email: email,
    Number: number,
    FirstName: firstName,
    LastName: lastName,
  };

  var Fname = document.getElementById("userfname");
  var lname = document.getElementById("userlname");
  var Email = document.getElementById("useremail");
  var num = document.getElementById("usernum");
  var password = document.getElementById("pass");
  var rePassword = document.getElementById("confirmpass");
  var mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

  const validateFirstName = (input) => {
    if (Fname.value.length < 3) {
      Fname.style.border = "solid 1px red";
      return false;
    }
    Fname.style.border = "solid 1px green";
    return true;
  };

  const validateLastName = (input) => {
    if (lname.value.length < 3) {
      lname.style.border = "solid 1px red";
      return false;
    }
    lname.style.border = "solid 1px green";
    return true;
  };

  const validateNumber = (input) => {
    if (num.value.length < 11) {
      num.style.border = "solid 1px red";
      return false;
    }

    num.style.border = "solid 1px green";

    return true;
  };

  const validatePass = (input) => {
    if (password.value === rePassword.value && password.value.length >= 8) {
      console.log("true");
      password.style.border = "solid 1px green";
      rePassword.style.border = "solid 1px green";

      return true;
    }

    password.style.border = "solid 1px red";
    rePassword.style.border = "solid 1px red";
    return false;
  };

  const validateEmail = (input) => {
    if (Email.value.match(mailformat)) {
      Email.style.border = "solid 1px green";
      return true;
    } else {
      Email.style.border = "solid 1px red";
      return false;
    }
  };

  const handleChange = async (e) => {
    if (
      validateEmail() &&
      validateFirstName() &&
      validateNumber() &&
      validateLastName()
    ) {
      await axios
        .patch(
          process.env.REACT_APP_API_URL + "/currentuserrr",
          data,

          {
            "Content-Type": "application/json",
            headers: { Authorization: localStorage.getItem("access_token") },
          }
        )
        .then((response) => {
          if (response.status == "200") {
            console.log(response.data);
          } else {
            console.log("error");
            throw error;
          }
        });
    }
  };

  const handlePasswordChange = async (e) => {
    if (validatePass()) {
      await axios
        .patch(
          "http://localhost:3001/api/updatepassword",
          {
            Password: pass,
          },
          {
            headers: { Authorization: localStorage.getItem("access_token") },
          }
        )
        .then((response) => {
          if (response.status == "200") {
            console.log(response.data);
          } else {
            console.log("error");
            throw error;
          }
        });
    }
  };

  return (
    <div className="personal-details">
      <h3> تعديل البيانات الشخصيه</h3>
      <form className=" w-100" onSubmit={handleChange}>
        <div className="d-flex flex-row justify-content-start">
          <div className="w-50">
            <p> الاسم الأول</p>
            <input
              type="text"
              className="form-control form-edit"
              id="userfname"
              placeholder="الاسم الأول"
              onChange={(e) => {
                setFirstName(e.target.value);
              }}
              onBlur={() => {
                validateFirstName(Fname.value);
              }}
              required
            />
          </div>

          <div className="w-50">
            <p> الاسم الأخير</p>

            <input
              type="text"
              className="form-control form-edit"
              placeholder="الاسم الأخير"
              id="userlname"
              onChange={(e) => {
                setLastName(e.target.value);
              }}
              onBlur={() => {
                validateLastName(lname.value);
              }}
              required
            />
          </div>
        </div>
        <br />
        <div className=" w-100">
          <p>البريد الالكتروني</p>
          <input
            type="email"
            placeholder="البريد الالكتروني"
            className="form-control form-edit "
            id="useremail"
            onChange={(e) => {
              setEmail(e.target.value);
            }}
            onBlur={() => {
              validateEmail(Email.value);
            }}
            required
          />
        </div>
        <br />

        <div className="w-100">
          <p>رقم الموبايل </p>
          <input
            type="text"
            id="usernum"
            placeholder="رقم الموبايل "
            className="form-control form-edit"
            onChange={(e) => {
              setNumber(e.target.value);
            }}
            onBlur={() => {
              validateNumber(num.value);
            }}
            required
          />
        </div>
        <br />

        <div className="text-center">
          <button className="btn btn-success"> تعديل المعلومات</button>
        </div>
      </form>

      <h3> تعديل كلمة المرور </h3>

      <form className=" w-100" onSubmit={handlePasswordChange}>
        <div className="d-flex flex-row justify-content-start">
          <div className="w-50">
            <p> كلمة المرور </p>
            <input
              type="password"
              className="form-control form-edit"
              id="pass"
              placeholder=" كلمة المرور"
              onChange={(e) => {
                setPass(e.target.value);
                console.log(pass);
              }}
              onBlur={() => {
                validatePass(password.value);
              }}
              required
            />
          </div>

          <div className="w-50">
            <p> تغيير كلمة المرور </p>

            <input
              type="password"
              className="form-control form-edit"
              placeholder=" تأكيد كلمة المرور"
              id="confirmpass"
              onBlur={() => {
                validatePass(rePassword.value);
              }}
              required
            />
          </div>
        </div>

        <br />

        <div className="text-center">
          <button className="btn btn-success"> تغيير كلمة المرور</button>
        </div>
      </form>
    </div>
  );
}

export default PersonalDetails;
