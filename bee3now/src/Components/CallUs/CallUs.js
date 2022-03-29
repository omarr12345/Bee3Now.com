import React from "react";
import "./edit.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faTwitter,
  faInstagram,
  faLinkedin,
} from "@fortawesome/free-brands-svg-icons";
function CallUs() {
  return (
    <div className="width-100 h-auto d-flex flex-row flex-wrap p-5 justify-content-between callus-color">
      <div>
        <h4>للتواصل معنا :01012305869 </h4>
      </div>

      <div className="d-flex flex-row ">
        <FontAwesomeIcon icon={faFacebook} className="fa-2x m-l-5 " />
        <FontAwesomeIcon icon={faTwitter} className="fa-2x m-l-5" />
        <FontAwesomeIcon icon={faInstagram} className="fa-2x m-l-5" />
        <FontAwesomeIcon icon={faLinkedin} className="fa-2x m-l-5" />
      </div>

      <div>
        <p> @bee3. All Rights Reserved 2021</p>
      </div>
    </div>
  );
}

export default CallUs;
