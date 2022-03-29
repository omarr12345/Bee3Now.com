import axios from "axios";
import React, { useEffect, useState } from "react";
import "./ProfilePage.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faShoppingCart,
  faUser,
  faWallet,
  faSearch,
  faHeart,
  faShoppingBag,
  faSignOutAlt,
} from "@fortawesome/free-solid-svg-icons";
import { BrowserRouter } from "react-router-dom";
import { Routes } from "react-router";
import { Route } from "react-router";
import { Router } from "react-router";
import { Link } from "react-router-dom";
import Wallet from "../Wallet/Wallet";
import Requests from "../Requests/Requests";
import PersonalDetails from "../PersonalDetails/PersonalDetails";
import { Switch } from "react-router-dom";
import { Outlet } from "react-router";
function ProfilePage() {
  const signout = () => {
    sessionStorage.setItem("Authenticated", " ");
  };
  return (
    <div className="profile-page">
      <div className="container row mx-auto">
        <div className="sidebar col-12 col-md-4">
          <div className="authorizes ">
            <div>
              <Link to="/profile/personaldetails" className="side-bar">
                <h3 className="choices text-decoration-none w-100">
                  <FontAwesomeIcon icon={faUser}></FontAwesomeIcon>{" "}
                  &nbsp;&nbsp;حسابي
                </h3>
              </Link>
            </div>
            <div>
              <Link to="/profile/wallet" className="side-bar">
                <h3 className="choices">
                  <FontAwesomeIcon icon={faWallet}></FontAwesomeIcon>
                  &nbsp;&nbsp;المحفظه
                </h3>{" "}
              </Link>
            </div>
            <div>
              <Link to="/profile/requests" className="side-bar">
                <h3 className="choices">
                  <FontAwesomeIcon icon={faShoppingBag}></FontAwesomeIcon>{" "}
                  &nbsp;&nbsp; الطلبات
                </h3>{" "}
              </Link>
            </div>
            <div>
              <Link to="/login" className="side-bar " onClick={signout}>
                <h3 className="choices">
                  <FontAwesomeIcon icon={faSignOutAlt}></FontAwesomeIcon>
                  &nbsp;&nbsp; تسجيل الخروج
                </h3>
              </Link>
            </div>
          </div>
        </div>

        <div className="content col-12 col-md-8 ">
          <Outlet />
        </div>
      </div>
    </div>
  );
}

export default ProfilePage;
