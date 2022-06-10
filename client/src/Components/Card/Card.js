import React, { useEffect } from "react";
import "./edit.css";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";
import { faHeart } from "@fortawesome/free-regular-svg-icons";
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
    <div className="my-2 col-6 col-md-4 col-lg-3 px-1 ">
      <div
        className="card d-flex flex-column h-100 card-contains"
        key={product.Id}
      >
        <div className="card-img">
          <img
            src={"../../Assets/" + product.first_img}
            className="card-img-top img-fluid"
          />
          <img
            src={"../../Assets/" + product.second_img}
            className="second-card-img-top img-fluid"
          />
        </div>

        <div className="card-con">
          <div className="card-name ">
            <p>{product.Name}</p>
          </div>

          <div className="  w-100 d-flex flex-row  flex-wrap justify-content-between ">
            <p className="card-price">{product.Price}جنيه</p>
            <p className="card-profit">الربح:{product.Profit}</p>
          </div>
        </div>

        <div className="card-details-button row ">
          <div className="py-3 add-to-cart-btn col-9 col-md-10">
            <Link
              to={`/product/${product.Id}`}
              className="text-decoration-none"
            >
              <FontAwesomeIcon
                icon={faShoppingCart}
                className="padding-top"
              ></FontAwesomeIcon>{" "}
              أضف الي العربه
            </Link>
          </div>

          <div className="padding-15  col-3 col-md-2">
            <Link to={`/product/${product.Id}`}>
              <FontAwesomeIcon
                icon={faHeart}
                className="fa-2x color-gold"
              ></FontAwesomeIcon>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Card;
