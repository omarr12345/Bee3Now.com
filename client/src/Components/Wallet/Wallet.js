import axios from "axios";
import React, { useEffect, useState } from "react";
import "./edit.css";
import { Link } from "react-router-dom";

function Wallet() {
  const [user, getUser] = useState([]);
  useEffect(() => {
    axios
      .get(process.env.REACT_APP_API_URL + "/users", {
        headers: { Authorization: localStorage.getItem("access_token") },
      })
      .then((response) => {
        getUser(response.data);
        console.log(user[0]);
      });
  }, []);

  useEffect(() => {
    user.map((y) => {
      if (y.Wallet == 0) {
        document.getElementById("withdraw-btn").style.display = "none";
      }
    });
  });
  return (
    <div className="wallet">
      <h3>المحفظه</h3>
      <p>
        انت في اول الطريق الي تحقيق حلمك و تقدر دلوقتي تشوف المنتجات وتبدأ تبيع
        اللي يناسبك و تحقق ارباح و نجاحات كتير ..
      </p>

      <div className="row">
        <div className="col-12 col-lg-7 mx-auto wallet-card text-center">
          <h3> أرباحك الجاهزه للسحب:</h3>
          <br />
          <h2>
            {" "}
            {user.map((x) => {
              return x.Wallet;
            })}
            <span> </span>
            <span>جنيه مصري</span>
          </h2>
          <Link className=" btn-success p-2" to="/withdraw" id="withdraw-btn">
            سحب الارباح
          </Link>
          <br />
          <br />

          <h3> أرباحك المتوقعه:</h3>
          <br />
          <h2>
            {user.map((x) => {
              return x.expectedprofit;
            })}
            <span> </span>
            <span>جنيه مصري</span>
          </h2>
        </div>
      </div>
    </div>
  );
}

export default Wallet;
