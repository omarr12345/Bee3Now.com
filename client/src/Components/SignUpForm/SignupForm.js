import React, { useEffect, useState } from "react";
import "./Edit.scss";
import Axios from "axios";

function SignupForm() {
  const [useremailReg, setEmail] = useState("");
  const [userpassReg, setPassword] = useState("");
  const [userfirstnameReg, setFirstname] = useState("");
  const [userlastnameReg, setLastname] = useState("");
  const [usergenderReg, setGender] = useState("");
  const [usertypeReg, setType] = useState("");

  let fname = document.getElementById("first_name");
  let lname = document.getElementById("last_name");
  let password = document.getElementById("password");
  let rePassword = document.getElementById("re_password");
  let email = document.getElementById("email");
  let submitButton = document.getElementById("submit_button");
  var mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

  const validateFirstName = (input) => {
    if (fname.value.length < 3) {
      fname.style.border = "solid 1px red";
      return false;
    }
    fname.style.border = "solid 1px green";
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

  const validatePassword = (input) => {
    if (password.value === rePassword.value && password.value.length >= 8) {
      password.style.border = "solid 1px green";
      rePassword.style.border = "solid 1px green";

      return true;
    }

    password.style.border = "solid 1px red";
    rePassword.style.border = "solid 1px red";
    return false;
  };

  const validateEmail = (input) => {
    if (email.value.match(mailformat)) {
      email.style.border = "solid 1px green";
      return true;
    } else {
      email.style.border = "solid 1px red";
      return false;
    }
  };

  const register = () => {
    if (
      validateEmail() &&
      validateFirstName() &&
      validatePassword() &&
      validateLastName()
    ) {
      Axios.post(
        process.env.REACT_APP_API_URL + "/register",
        {
          Firstname: userfirstnameReg,
          Lastname: userlastnameReg,
          Email: useremailReg,
          Pass: userpassReg,
          Type: usertypeReg,
          Gender: usergenderReg,
          withCredentials: true,
        },
        {
          headers: { Authorization: localStorage.getItem("access_token") },
        }
      ).then((response) => {
        if (response.status == "201") {
          console.log(response);
          localStorage.setItem("access_token", response.data.accessToken);
          alert("???? ?????????? ???????????? ??????????");
          window.location.assign("/");
        } else if (response.status == "200") {
          alert(response.data.Email);
        } else {
          console.log("error");
        }
      });
    }
  };

  return (
    <div className="form_wrapper" dir="ltr">
      <div className="form_container">
        <div className="title_container">
          <h2>?????????? ???????? ????????</h2>
        </div>
        <form className="form-editor">
          <div className="row clearfix">
            <div className="">
              <div className="input_field">
                {" "}
                <p className="text-right">???????????? ????????????????????</p>
                <input
                  type="email"
                  name="email"
                  placeholder="???????????? ????????????????????"
                  id="email"
                  onBlur={() => {
                    validateEmail(email.value);
                  }}
                  onChange={(e) => {
                    setEmail(e.target.value);
                  }}
                  required
                />
              </div>
              <div className="input_field">
                {" "}
                <p className="text-right"> ???????? ????????????</p>
                <input
                  type="password"
                  name="password"
                  id="password"
                  placeholder="8 ???????? ???? ??????????"
                  onChange={(e) => {
                    setPassword(e.target.value);
                  }}
                  required
                />
              </div>
              <div className="input_field">
                {" "}
                <p className="text-right"> ?????????? ???????? ???????????? </p>
                <input
                  type="password"
                  name="password"
                  id="re_password"
                  onBlur={() => {
                    validatePassword(rePassword.value);
                  }}
                  placeholder="?????????? ???????? ????????????"
                  required
                />
              </div>
              <div className="row clearfix">
                <div className="col_half">
                  <div className="input_field">
                    <p>?????????? ??????????</p>

                    <input
                      type="text"
                      name="name"
                      placeholder="?????????? "
                      id="first_name"
                      onBlur={() => validateFirstName(fname.value)}
                      onChange={(e) => {
                        setFirstname(e.target.value);
                      }}
                    />
                  </div>
                </div>
                <div className="col_half">
                  <div className="input_field">
                    {" "}
                    <p>?????? ??????????????</p>
                    <input
                      type="text"
                      name="name"
                      id="last_name"
                      placeholder=" ?????? ??????????????"
                      onBlur={() => {
                        validateLastName(lname.value);
                      }}
                      onChange={(e) => {
                        setLastname(e.target.value);
                      }}
                      required
                    />
                  </div>
                </div>
              </div>

              <input
                className="button btn btn-success"
                onClick={register}
                id="submit_button"
                value="?????????? ????????????"
              />
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}

export default SignupForm;
