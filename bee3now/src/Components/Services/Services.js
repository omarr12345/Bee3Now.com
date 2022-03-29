import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTruck } from "@fortawesome/free-solid-svg-icons";
import { faMoneyBill } from "@fortawesome/free-solid-svg-icons";
import { faHistory } from "@fortawesome/free-solid-svg-icons";
import { faGifts } from "@fortawesome/free-solid-svg-icons";
import React from "react";
import "./edit.css";

function Services() {
  return (
    <div className="container d-flex flex-row flex-wrap justify-content-between align-items-center services-border">
      <div className="d-flex flex-column align-items-center">
        <FontAwesomeIcon icon={faTruck} className=" fa-5x icon-color" />
        <h3>الشحن السريع</h3>
        <p>لكل أنحاء مصر</p>
      </div>

      <div className="d-flex flex-column align-items-center">
        <FontAwesomeIcon icon={faMoneyBill} className="fa-5x icon-color" />
        <h3>تحويل الارباح</h3>
        <p>في خلال 5 ايام</p>
      </div>

      <div className="d-flex flex-column align-items-center vertical-align-middle ">
        <FontAwesomeIcon icon={faHistory} className="fa-5x icon-color" />
        <h3>خدمة العملاء </h3>
        <p>متاحه 24 ساعه</p>
      </div>

      <div className="d-flex flex-column align-items-center">
        <FontAwesomeIcon icon={faGifts} className="fa-5x icon-color" />
        <h3>عروض وهدايا</h3>
        <p>طوال ايام السنه</p>
      </div>
    </div>
  );
}

export default Services;
