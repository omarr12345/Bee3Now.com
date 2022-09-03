import React from "react";
import "./edit.css";
import { useState } from "react";
import axios from "axios";
function CompletingOrders() {
  const [name, setName] = useState("");
  const [num, setNum] = useState("");
  const [secNum, setSecNum] = useState("");
  const [address, setAddress] = useState("");
  const [fbPage, setFbPage] = useState("");
  const [fbPageLink, setFbPageLink] = useState("");
  const [notes, setNotes] = useState("");
  const [shippingPrice, setShippingPrice] = useState(35);
  const [governerate, setGovernerate] = useState("");

  let userName = document.getElementById("user_name");
  var userMobile = document.getElementById("usermobile");
  let adderss = document.getElementById("useraddress");

  const validateName = (input) => {
    console.log(input);
    if (userName.value.length < 3) {
      userName.style.border = "solid 1px red";
      userName.classList.add(".isinvalid");
      return false;
    }
    userName.style.border = "solid 1px green";
    return true;
  };

  const validateMobNum = () => {
    if (userMobile.value.length < 11) {
      userMobile.style.border = "solid 1px red";
      return false;
    }
    userMobile.style.border = "solid 1px green";
    return true;
  };

  const validateUserAddress = () => {
    if (adderss.value.length < 1) {
      adderss.style.border = "solid 1px red";
      return false;
    }
    adderss.style.border = "solid 1px green";
    return true;
  };

  const handleSubmit = (e) => {
    if (validateName() && validateMobNum() && validateUserAddress()) {

      e.preventDefault()
      axios
        .post(
          process.env.REACT_APP_API_URL + "/orders",
          {
            CustomerName: name,
            CustomerAddress: address,
            CustomerNumber: num,
            CustomerSecNum: secNum,
            FbPage: fbPage,
            FbPageLink: fbPageLink,
            Notes: notes,
            ShippingPrice: shippingPrice,
            Governerate: governerate,
            Request: localStorage.getItem("cart"),
          },
          {
            headers: { Authorization: localStorage.getItem("access_token") },
          }
        )
        .then((response) => {
          window.location.assign("/profile/requests")

        });
    }
  };
  var shippingPr;
  const handleCheck = (input) => {
    switch (input) {
      case "الجيزه":
        shippingPr = 35;
        setShippingPrice(shippingPr);

        break;

      case "القاهره":
        shippingPr = 35;
        setShippingPrice(shippingPr);

        break;

      // eslint-disable-next-line no-fallthrough
      default:
        shippingPr = 35;
        setShippingPrice(shippingPr);
    }
  };

  const NumericOnly = (e) => {
    //angka only
    const reg = /^[0-9\b]+$/;
    let preval = e.target.value;
    if (e.target.value === "" || reg.test(e.target.value)) return true;
    else e.target.value = preval.substring(0, preval.length - 1);
  };

  return (
    <div className="completing-orders container  ">
      <h3 className="text-center outline">ادخل بيانات الشحن من فضلك</h3>
      <br />
      <form onSubmit={handleSubmit} className="form-style ">
        <p htmlFor="username">اسم المشتري</p>
        <input
          type="text"
          name="username"
          id="user_name"
          className="form-control w-100"
          onBlur={(e) => {
            validateName(e.target);
          }}
          onChange={(e) => {
            setName(e.target.value);
          }}
          required
        />
        <br />
        <p htmlFor="usermobile">رقم الموبايل : 11 رقم باللغه الانجليزيه</p>
        <input
          type="text"
          name="usermobile"
          id="usermobile"
          className="form-control w-100"
          onChange={(e) => {
            NumericOnly(e);
            setNum(e.target.value);
          }}
          onBlur={() => {
            validateMobNum(userMobile);
          }}
          maxLength="11"
          minLength="11"
          required
        />
        <br />
        <p htmlFor="usermobile-2">(البديل)رقم الموبايل</p>
        <input
          type="text"
          name="usermobile2"
          id="usermobile2"
          className="form-control w-100"
          onChange={(e) => {
            NumericOnly(e);
            setSecNum(e.target.value);
          }}
          maxLength="11"
          minLength="11"
        />
        <br />

        <p htmlFor="useraddress">العنوان بالتفصيل</p>
        <input
          type="text"
          name="address"
          id="useraddress"
          className="form-control w-100"
          onChange={(e) => {
            setAddress(e.target.value);
          }}
          onBlur={() => {
            validateUserAddress(adderss);
          }}
          required
        />

        <br />

        <p htmlFor="useraddress">المحافظه</p>

        <select
          className="form-control"
          onChange={(e) => {
            setGovernerate(e.target.value);
            handleCheck(e.target.value);
          }}
          id="governerate"
        >
          <option>القاهره </option>
          <option>الجيزه </option>
        </select>

        <br />

        <div className="shipping-price ">
          <h3 className="bg-white p-3">
            سعر الشحن :{shippingPrice}
            <br />
            *ملحوظه سعر الشحن يختلف حسب المحافظه*
          </h3>
          <br />
        </div>

        <p htmlFor="fbpage">(اختياري) اسم صفحتك اللي بتبيع منها علي فيسبوك</p>
        <input
          type="text"
          name="fbpage"
          id="userfbpage"
          className="form-control w-100"
          onChange={(e) => {
            setFbPage(e.target.value);
          }}
        />

        <br />

        <p htmlFor="fbpagelink">(اختياري)لينك الصفحه</p>
        <input
          type="text"
          name="fbpagelink"
          id="userfbpagelink"
          className="form-control w-100"
          onChange={(e) => {
            setFbPageLink(e.target.value);
          }}
        />
        <br />

        <p htmlFor="notes">ملاحظات</p>
        <textarea
          type="text"
          name="notes"
          id="usernotes"
          className="form-control w-100"
          onChange={(e) => {
            setNotes(e.target.value);
          }}
        />

        <br />

        <div className="text-center">
          <button className="btn btn-success text-align-center" type="submit">
            ارسال الطلب
          </button>
        </div>
      </form>
    </div>
  );
}

export default CompletingOrders;
