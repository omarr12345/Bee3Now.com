import React, { useEffect } from "react";
import "./edit.css";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";
import { faHeart } from "@fortawesome/free-regular-svg-icons";
import { faEye } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

function Card(props) {
  const { item: product } = props;

  useEffect(() => {
    var secImgList = document.querySelectorAll(".second-card-img-top");
    secImgList.forEach((img) => {
      img.addEventListener("mouseover", () => {
        setTimeout(() => {
          img.style.opacity = "1";
        }, 300);
      });

      img.addEventListener("mouseleave", () => {
        setTimeout(() => {
          img.style.opacity = "0";
        }, 300);
      });
    });
  }, []);

  return (
    <div className="my-2 col-12 col-md-6 col-lg-3 px-1">
      <div
        className="card d-flex flex-column h-100 card-contains"
        key={product.Id}
      >
        <div className="card-img">
          <img src={product.ImgUrl} className="card-img-top img-fluid" />
          <img
            src={product.SecImgUrl}
            className="second-card-img-top img-fluid"
          />
        </div>

        <div className="card-con">
          <div className="card-name ">
            <p>{product.Name}</p>
          </div>
          <div className="  w-100 d-flex flex-row  flex-wrap justify-content-between ">
            <p className="card-price">السعر:{product.Price}جنيه</p>
            <p className="card-profit">الربح:{product.Profit}جنيه</p>
          </div>
        </div>

        <div className="card-details-button d-flex flex-row  justify-content-between ">
          <div className="py-1 px-3 add-to-cart-btn ">
            <Link
              to={`/product/${product.Id}`}
              className="text-decoration-none "
            >
              <FontAwesomeIcon
                icon={faShoppingCart}
                className="padding-top"
              ></FontAwesomeIcon>{" "}
              &nbsp; أضف الي العربه
            </Link>
          </div>

          <div className="padding-15 ">
            <Link to={`/product/${product.Id}`}>
              <FontAwesomeIcon
                icon={faHeart}
                className="fa-2x color-white"
              ></FontAwesomeIcon>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Card;
