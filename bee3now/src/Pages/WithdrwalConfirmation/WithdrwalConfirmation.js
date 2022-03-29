import React, { useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheckCircle } from "@fortawesome/free-solid-svg-icons";
import "./edit.css";
import { useParams } from "react-router";
import axios from "axios";

function WithdrwalConfirmation() {
  const params = useParams();
  const token = params.accesstoken;

  useEffect(async () => {
    await axios
      .patch(
        process.env.REACT_APP_API_URL + "/emptywallet",
        {
          Wallet: 0,
        },
        {
          headers: { Authorization: localStorage.getItem("access_token") },
        }
      )
      .then((response) => {
        console.log(response);
      });
  });
  return (
    <div className="container">
      <h2 className="text-center">
        مبروووووك <br />
        تم تأكيد طلبك وسيتم التواصل معك في خلال ساعه من الان لتحويل المبلع
        <br />
        <FontAwesomeIcon
          icon={faCheckCircle}
          className="fa-2x tic"
        ></FontAwesomeIcon>
      </h2>
    </div>
  );
}

export default WithdrwalConfirmation;
