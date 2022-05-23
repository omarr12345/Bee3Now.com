import React from "react";
import "./edit.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faInstagram,
  faLinkedin,
} from "@fortawesome/free-brands-svg-icons";

import { Link } from "react-router-dom";
function CallUs() {
  return (
    <div className="width-100 h-auto d-flex flex-row flex-wrap p-5 justify-content-between callus-color">
      <div>
        <h4>للتواصل معنا :01012305869 </h4>
      </div>

      <div className="d-flex flex-row ">
        <a href="https://www.facebook.com/groups/bee3official/?ref=share">
          <FontAwesomeIcon icon={faFacebook} className="fa-2x m-l-5 " />
        </a>
        <a href="https://www.instagram.com/bee3now8/">
          <FontAwesomeIcon icon={faInstagram} className="fa-2x m-l-5" />
        </a>
        <a href="https://www.linkedin.com/in/bee3-now-9a948521a">
          <FontAwesomeIcon icon={faLinkedin} className="fa-2x m-l-5" />
        </a>
      </div>

      <div>
        <p> @bee3. All Rights Reserved 2021</p>
      </div>
    </div>
  );
}

export default CallUs;
