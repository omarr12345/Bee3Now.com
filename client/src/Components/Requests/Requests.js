import React from "react";
import "./edit.css";
import { useState, useEffect } from "react";
import axios from "axios";

function Requests() {
  var totalProfit = 0;
  var totalPrice = 0;
  var profit = 0;

  const [userOrders, setUserOrders] = useState([]);

  var orderShippingDetails = document.getElementsByClassName(
    "order-shipping-details"
  );

  const checkStatus = () => {
    var processing = document.getElementsByClassName("processing");
    var shipping = document.getElementsByClassName("shipping");
    var delivered = document.getElementsByClassName("delivered");
    var status = document.getElementsByClassName("order-status");

    console.log("yup");

    for (var i = 0; i < status.length; i++) {
      if (status[i].innerHTML == "delivered") {
        delivered[i].classList.add("big-dot");
        shipping[i].classList.add("big-dot");
        processing[i].classList.add("big-dot");
      } else if (status[i].innerHTML == "shipping") {
        shipping[i].classList.add("big-dot");
        processing[i].classList.add("big-dot");
      } else if (status[i].innerHTML == "processing") {
        processing[i].classList.add("big-dot");
      }
    }
  };

  useEffect(() => {
    axios
      .get(process.env.REACT_APP_API_URL + "/profile", {
        headers: { Authorization: localStorage.getItem("access_token") },
      })
      .then((response) => {
        setUserOrders(response.data);
      });
  }, []);

  useEffect(() => {
    checkStatus();
  }, [userOrders]);

  return (
    <div className="requests">
      <h3 className="bg-white text-center p-3 orders-num">
        عدد الأوردرات :{userOrders.length}{" "}
      </h3>
      {userOrders.map((o) => {
        return (
          <div className="order" onLoad={checkStatus} key={o.Id}>
            <h3>كود الطلب: {o.Id}</h3>

            <div className="d-flex flex-row w-100">
              <div className="w-75">
                {" "}
                <label> اسم العميل :</label>
                <p>{o.CustomerName}</p>
              </div>

              <div className="w-25">
                {" "}
                <label>المحافظه:</label>
                <p>{o.Governerate}</p>
              </div>
            </div>
            <label>رقم العميل:</label>
            <p>{o.CustomerNum}</p>

            <label>رقم البديل:</label>

            <p>{o.CustomerSecNum}</p>

            <label> العنوان:</label>

            <p>{o.CustomerAddress}</p>

            <div className="d-flex flex-row w-100">
              <div className=" w-25">
                {" "}
                <label> اجمالي السعر:</label>
                <p>
                  {
                    (totalPrice = JSON.parse(o.Request).reduce(
                      (totalPrice, item) =>
                        totalPrice + item.Price * item.quantity,
                      0
                    ))
                  }{" "}
                  جنيه
                </p>
              </div>

              <div className="w-25">
                {" "}
                <label>اجمالي الربح:</label>
                <p>
                  {
                    (totalProfit = JSON.parse(o.Request).reduce(
                      (totalProfit, item) =>
                        totalProfit + item.Profit * item.quantity,
                      0
                    ))
                  }
                  جنيه
                </p>
              </div>

              <div className="w-25">
                {" "}
                <label>سعر الشحن:</label>
                <p>{o.ShippingPrice}جنيه</p>
              </div>
            </div>

            <br />
            <div className="d-flex flex-row justify-content-between align-items-center ">
              <div>
                <h3>حالة الاوردر: </h3>

                <h3 className="order-status">{o.Status}</h3>
              </div>
            </div>
            <hr className="divider mb-4" />
            <div className="d-flex flex-row justify-content-between align-items-center align-content-center">
              <hr className="flex-fill track-line" />
              <span className="dot processing"></span>
              <hr className="flex-fill track-line" />
              <span className="dot shipping"> </span>
              <hr className="flex-fill track-line" />
              <span className="dot delivered"></span>
              <hr className="flex-fill track-line" />
            </div>

            <div className="d-flex flex-row  align-items-center">
              <div className="d-flex flex-column justify-content-center w-25">
                <span>مراجعة الطلب</span>
              </div>
              <div className="d-flex flex-column justify-content-center align-items-center w-25">
                <span>تجهيز الطلب</span>
              </div>
              <div className="d-flex flex-column align-items-center w-25">
                <span>قيد التوصيل</span>
              </div>
              <div className="d-flex flex-column align-items-end w-25">
                <span>تم التوصيل</span>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default Requests;
