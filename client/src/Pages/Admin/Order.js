import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useEffect } from "react";
import "./edit.css";
import { faHandPeace } from "@fortawesome/free-solid-svg-icons";
import axios from "axios";
import { useState } from "react";

function Order(props) {
  const { order } = props;
  const [userOrders, setUserOrders] = useState([]);
  var cuurentOrder = document.getElementsByClassName("order");
  var deliveredOrderBtn = document.querySelectorAll(".delivered");
  var processingOrderBtn = document.querySelectorAll(".processing");
  var shippingOrderBtn = document.querySelectorAll(".shipping");

  var x;
  const [shippingBtn, setShippingBtn] = useState(false);
  const [processingBtn, setProcessingBtn] = useState(false);
  const [deliveredBtn, setDeliveredBtn] = useState(false);

  const data = {
    Status: "processing",
    Order_Id: order.Id,
  };

  const secData = {
    Status: "shipping",
    Order_Id: order.Id,
  };

  const thirdData = {
    Status: "delivered",
    Order_Id: order.Id,
  };

  const processing = async (e) => {
    await axios
      .patch(process.env.REACT_APP_API_URL + "/currentsorder", data, {
        "Content-Type": "application/json",
        headers: { Authorization: localStorage.getItem("access_token") },
      })
      .then((response) => {
        if (response.status == "200") {
          window.location.reload();
        }
      });
  };

  const shipping = async (e) => {
    await axios
      .patch(process.env.REACT_APP_API_URL + "/currentsorder", secData, {
        "Content-Type": "application/json",
        headers: { Authorization: localStorage.getItem("access_token") },
      })
      .then((response) => {
        if (response.status == "200") {
        }
      });
    await axios
      .patch(
        process.env.REACT_APP_API_URL + "/expectedprofit",
        {
          ExpectedProfit: JSON.parse(order.Request).reduce(
            (totalProfit, item) => totalProfit + item.Profit * item.quantity,
            0
          ),
          user_id: order.user_id,
        },
        {
          "Content-Type": "application/json",
          headers: { Authorization: localStorage.getItem("access_token") },
        }
      )
      .then((response, error) => {
        if (response.status == "200") {
          console.log(response);
          window.location.reload();
        } else {
          throw error;
        }
      });
  };

  const delivered = async (e) => {
    await axios
      .patch(process.env.REACT_APP_API_URL + "/currentsorder", thirdData, {
        "Content-Type": "application/json",
        headers: { Authorization: localStorage.getItem("access_token") },
      })
      .then((response) => {
        if (response.status == "200") {
        }
      });

    await axios
      .patch(
        process.env.REACT_APP_API_URL + "/decreaseexpectedprofit",
        {
          ExpectedProfit: JSON.parse(order.Request).reduce(
            (totalProfit, item) => totalProfit + item.Profit * item.quantity,
            0
          ),
          user_id: order.user_id,
        },
        {
          "Content-Type": "application/json",
          headers: { Authorization: localStorage.getItem("access_token") },
        }
      )
      .then((response, error) => {
        if (response.status == "200") {
          console.log(response);
          window.location.reload();
        } else {
          throw error;
        }
      });

    await axios
      .patch(
        process.env.REACT_APP_API_URL + "/wallet",
        {
          wallet: JSON.parse(order.Request).reduce(
            (totalProfit, item) => totalProfit + item.Profit * item.quantity,
            0
          ),
          user_id: order.user_id,
        },
        {
          headers: { Authorization: localStorage.getItem("access_token") },
        }
      )
      .then((responsee) => {});
  };

  useEffect(async () => {
    await axios
      .get(process.env.REACT_APP_API_URL + "/orders", {
        headers: { Authorization: localStorage.getItem("access_token") },
      })
      .then((response) => {
        setUserOrders(response.data);
        console.log(response.data);
      });
  }, []);

  useEffect(() => {
    for (var i = 0; i < userOrders.length; i++) {
      if (userOrders[i].Status == "processing") {
        processingOrderBtn[i].disabled = true;
      } else if (userOrders[i].Status == "shipping") {
        processingOrderBtn[i].disabled = true;

        shippingOrderBtn[i].disabled = true;
      } else if (userOrders[i].Status == "delivered") {
        processingOrderBtn[i].disabled = true;
        shippingOrderBtn[i].disabled = true;
        deliveredOrderBtn[i].disabled = true;
      }
    }
  });

  return (
    <div className="order h-25  border-solid-1-black col-12  col-sm-12 col-md-10 col-lg-10  col-xl-10 row ">
      <div className="d-flex flex-column justify-content-center border-solid-1-black col-12 col-md-4 col-lg-4  col-xl-3 text-center">
        <h2>بيانات الشحن:</h2>
        <h4>اسم العميل:{order.CustomerName}</h4>
        <h4>العنوان:{order.CustomerAddress}</h4>
        <h4>المحافظه:{order.Governerate}</h4>
        <h4>رقم العميل:{order.CustomerNum}</h4>
        <h4>الرقم البديل:{order.CustomerSecNum}</h4>
      </div>

      <div className="col-12 col-md-5  col-lg-5  col-xl-5 border-solid-1-black">
        {JSON.parse(order.Request).map((x) => {
          return (
            <div className="d-flex flex-row border-solid-1-black w-long ">
              <div className="w-50">
                <img src={x.ImgUrl} className="h-100 w-50 " />
              </div>

              <div className="w-50">
                <p>اسم المنتح:{x.Name}</p>
                <p>سعر المنتج:{x.Price}</p>
                <p>الربح للوحده:{x.Profit}</p>
                <p>الكميه المطلوبه:{x.quantity}</p>
              </div>
            </div>
          );
        })}
      </div>

      <div className="text-center order-code col-12 col-md-3 col-lg-3 col-xl-4 ">
        <p>كود الاوردر :{order.Id}</p>
        <br />
        <br />
        <div className=" ">
          {" "}
          <button
            className="option btn-success btn processing text-center"
            onClick={(e) => {
              processing();
            }}
          >
            تم الشحن{" "}
          </button>
        </div>{" "}
        <br />
        <br />
        <div className=" ">
          {" "}
          <button
            type="submit"
            className="option btn-success btn shipping text-center"
            onClick={(e) => {
              shipping();
            }}
          >
            قيد التوصيل
          </button>{" "}
        </div>{" "}
        <br />
        <br />
        <div className="">
          {" "}
          <button
            className="option delivered btn-success btn"
            onClick={(e) => {
              delivered();
            }}
          >
            تم التوصيل
          </button>{" "}
          <br />
          <br />
          <br />
        </div>{" "}
        <p>سعر الشحن:{order.ShippingPrice}</p>
        <div className="order-status"></div>
      </div>
    </div>
  );
}

export default Order;
