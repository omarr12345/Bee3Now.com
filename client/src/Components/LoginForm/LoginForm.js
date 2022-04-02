import axios from "axios";
import React, { useState, useEffect } from "react";
import "./login-form.css";
import { productsApi } from "../../Api/Products";
import { Link } from "react-router-dom";
import "react-toastify/dist/ReactToastify.css";

function LoginForm(props) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const token = "..your token";
  var headers = {
    "Content-Type": "application/json",
  };

  const login = () => {
    console.log("insidelogin");
    //console.log(localStorage.getItem("access_token"));
    axios
      .post(
        process.env.REACT_APP_API_URL + "/login",
        {
          Email: email,
          Password: password,
        },
        {
          headers: { Authorization: localStorage.getItem("access_token") },
        }
      )
      .then((response) => {
        console.log(response.data);
        if (response.data.Email == "not found on database") {
          alert("please write valid username and password");
        } else {
          console.log(response);
          localStorage.setItem("access_token", response.data.accessToken);
          sessionStorage.setItem("Authenticated", "is Authenticated");
          axios
            .post(process.env.REACT_APP_URL, {
              token: localStorage.getItem("access_token"),
            })
            .then((responseee) => {
              window.location.href = "/";
              console.log("inside second axios");
              console.log(responseee.data);
            });
        }
      });
  };

  return (
    <div className="container">
      <section id="content" className="text-center">
        <form className="d-flex flex-column justify-content-center">
          <h1>تسجيل الدخول </h1>
          <div>
            <input
              type="text"
              placeholder="البريد الالكتروني"
              required=""
              id="username"
              onChange={(e) => {
                setEmail(e.target.value);
              }}
            />
          </div>
          <div>
            <input
              type="password"
              placeholder="كلمة المرور"
              required=""
              id="password"
              onChange={(e) => {
                setPassword(e.target.value);
              }}
            />
          </div>
          <div className="text-center">
            <input
              value="دخول"
              onClick={login}
              type="button"
              className="btn btn-success btn-edit"
            />
            {/*<div dir="rtl">
              {showloginButton ? (
                <GoogleLogin
                  clientId={clientId}
                  buttonText=" الدخول ب"
                  onSuccess={onLoginSuccess}
                  onFailure={onLoginFailure}
                  cookiePolicy={"single_host_origin"}
                  isSignedIn={true}
                  style={{ border: "solid 2px !important", fontWeight: "bold" }}
                />
              ) : null}

              {showlogoutButton ? (
                <GoogleLogout
                  clientId={clientId}
                  buttonText="Sign Out"
                  onLogoutSuccess={onSignoutSuccess}
                ></GoogleLogout>
              ) : null}
            </div>
              */}
            <br />
            <div className=" d-flex flex-row justify-content-center p-0">
              {" "}
              <Link to="/forgotpassword" className="w-50  text-decoration-none">
                هل نسيت كلمة المرور ؟
              </Link>
              <Link className="w-50 text-decoration-none" to="/signup">
                انشاء حساب جديد
              </Link>
            </div>
          </div>
        </form>
      </section>

      <div className="text-center">
        <h3 className="text-center">
          ****سجل دخولك أولا لتستطيع استخدام الموقع****
        </h3>
      </div>
    </div>
  );
}

export default LoginForm;
