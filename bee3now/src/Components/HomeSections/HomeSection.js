import React from "react";
import "./edit.css";
import { Link } from "react-router-dom";

function HomeSection() {
  return (
    <div className="container ">
      <h3>الأقسام</h3>

      <div className="row">
        <Link
          to="/products/MobileAccessories"
          className="col-6 col-md-3 col-lg-2 link-decoration "
        >
          <div className="card-content  ">
            <div className="content-img">
              <img src={require("../../Assets/Untitled-5-1.png")} />
            </div>

            <div className="content-name ">اكسسوارات محمول</div>
          </div>
        </Link>

        <Link
          to="/products/Childsproducts"
          className="col-6 col-md-3 col-lg-2 link-decoration"
          style={{ textDecoration: "none" }}
        >
          <div className="card-content">
            <div className="content-img">
              {" "}
              <img src={require("../../Assets/baby-boy.png")} />
            </div>
            <div className="content-name">أطفال</div>
          </div>
        </Link>

        <Link
          to="/products/Clothes"
          className="col-6 col-md-3 col-lg-2 link-decoration"
          style={{ textDecoration: "none" }}
        >
          <div className="card-content">
            <div className="content-img">
              {" "}
              <img src={require("../../Assets/shirt.png")} />
            </div>
            <div className="content-name">ملابس</div>
          </div>
        </Link>

        <Link
          to="/products/Watches"
          className="col-6 col-md-3 col-lg-2 link-decoration"
          style={{ textDecoration: "none" }}
        >
          <div className="card-content">
            <div className="content-img">
              {" "}
              <img src={require("../../Assets/watch.png")} />
            </div>
            <div className="content-name">ساعات</div>
          </div>
        </Link>

        <Link
          to="/products/BeautyProducts"
          className="col-6 col-md-3 col-lg-2 link-decoration"
          style={{ textDecoration: "none" }}
        >
          <div className="card-content">
            <div className="content-img">
              {" "}
              <img src={require("../../Assets/lipstick.png")} />
            </div>
            <div className="content-name">منتجات تجميل</div>
          </div>
        </Link>

        <Link
          to="/products/HouseProducts"
          className="col-6 col-md-3 col-lg-2 link-decoration"
          style={{ textDecoration: "none" }}
        >
          <div className="card-content">
            <div className="content-img">
              {" "}
              <img src={require("../../Assets/home.png")} />
            </div>
            <div className="content-name">المنزل </div>
          </div>
        </Link>

        <Link
          to="/products/electricproducts"
          className="col-6 col-md-3 col-lg-2 link-decoration"
          style={{ textDecoration: "none" }}
        >
          <div className="card-content">
            <div className="content-img">
              {" "}
              <img src={require("../../Assets/radio.png")} />
            </div>
            <div className="content-name">الكترونيات</div>
          </div>
        </Link>

        <Link
          to="/products/ShavingProducts"
          className="col-6 col-md-3 col-lg-2 link-decoration"
          style={{ textDecoration: "none" }}
        >
          <div className="card-content">
            <div className="content-img">
              {" "}
              <img src={require("../../Assets/electric-shaver.png")} />
            </div>
            <div className="content-name">مكن حلاقه</div>
          </div>
        </Link>

        <Link
          to="/walletsandbags"
          className="col-6 col-md-3 col-lg-2 link-decoration"
          style={{ textDecoration: "none" }}
        >
          <div className="card-content">
            <div className="content-img">
              {" "}
              <img src={require("../../Assets/backpack.png")} />
            </div>
            <div className="content-name">شنط و محافظ</div>
          </div>
        </Link>
      </div>
    </div>
  );
}

export default HomeSection;
