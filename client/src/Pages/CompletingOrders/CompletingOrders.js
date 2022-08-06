import React from "react";
import "./edit.css";
import { useState } from "react";
import axios from "axios";
function CompletingOrders() {
  var userMobile = document.getElementById("usermobile");
  var userMobile_2 = document.getElementById("usermobile2");
  const [name, setName] = useState("");
  const [num, setNum] = useState("");
  const [secNum, setSecNum] = useState("");
  const [address, setAddress] = useState("");
  const [fbPage, setFbPage] = useState("");
  const [fbPageLink, setFbPageLink] = useState("");
  const [notes, setNotes] = useState("");
  const [shippingPrice, setShippingPrice] = useState("");
  const [governerate, setGovernerate] = useState("");

  const NumericOnly = (e) => {
    //angka only
    const reg = /^[0-9\b]+$/;
    let preval = e.target.value;
    if (e.target.value === "" || reg.test(e.target.value)) return true;
    else e.target.value = preval.substring(0, preval.length - 1);
  };

  const handleSubmit = () => {
    console.log("inside axios.post");
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
        console.log(response);
        console.log(num, secNum);
      });
  };

  var shippingPr;
  const handleCheck = (input) => {
    switch (input) {
      case "القاهره":
        console.log("yeah");
        shippingPr = 15;
        setShippingPrice(shippingPr);

        break;
      case "اسكندريه":
        console.log("yeah");
        shippingPr = 30;
        setShippingPrice(shippingPr);
        break;

      case "كفر الشيخ":
        console.log("yeah");
        shippingPr = 30;
        setShippingPrice(shippingPr);
        break;

      case "الدقهليه":
        console.log("yeah");
        shippingPr = 30;
        setShippingPrice(shippingPr);
        break;

      case "الشرقيه":
        console.log("yeah");
        shippingPr = 30;
        setShippingPrice(shippingPr);
        break;

      case "الساحل الشمالي":
        console.log("yeah");
        shippingPr = 35;
        setShippingPrice(shippingPr);
        break;

      case "المحله":
        console.log("yeah");
        shippingPr = 30;
        setShippingPrice(shippingPr);
        break;

      case "الغربيه":
        console.log("yeah");
        shippingPr = 30;
        setShippingPrice(shippingPr);
        break;

      case "الاقصر":
        console.log("yeah");
        shippingPr = 35;
        setShippingPrice(shippingPr);
        break;

      case "البحيره":
        console.log("yeah");
        shippingPr = 30;
        setShippingPrice(shippingPr);
        break;

      case "العين السخنه":
        console.log("yeah");
        shippingPr = 35;
        setShippingPrice(shippingPr);
        break;

      case "بني سويف":
        console.log("yeah");
        shippingPr = 30;
        setShippingPrice(shippingPr);
        break;

      case "سوهاج":
        console.log("yeah");
        shippingPr = 35;
        setShippingPrice(shippingPr);
        break;

      case "الفيوم":
        console.log("yeah");
        shippingPr = 30;
        setShippingPrice(shippingPr);
        break;

      case "المنوفيه ":
        console.log("yeah");
        shippingPr = 30;
        setShippingPrice(shippingPr);
        break;

      case "العاشر من رمضان":
        console.log("yeah");
        shippingPr = 30;
        setShippingPrice(shippingPr);
        break;

      case "البحر الاحمر":
        console.log("yeah");
        shippingPr = 35;
        setShippingPrice(shippingPr);
        break;

      case "الاسماعيليه":
        console.log("yeah");
        shippingPr = 30;
        setShippingPrice(shippingPr);
        break;

      case "الحيزه ":
        console.log("yeah");
        shippingPr = 35;
        setShippingPrice(shippingPr);
        break;

      case "طنطا ":
        console.log("yeah");
        shippingPr = 35;
        setShippingPrice(shippingPr);
        break;

      case " أسيوط":
        console.log("yeah");
        shippingPr = 35;
        setShippingPrice(shippingPr);
        break;

      case "مرسي مطروح":
        console.log("yeah");
        shippingPr = 35;
        setShippingPrice(shippingPr);
        break;

      case "دمياط":
        console.log("yeah");
        shippingPr = 35;
        setShippingPrice(shippingPr);
        break;

      case "السويس":
        console.log("yeah");
        shippingPr = 35;
        setShippingPrice(shippingPr);
        break;

      case "وادي النطرون":
        console.log("yeah");
        shippingPr = 35;
        setShippingPrice(shippingPr);
        break;

      case "المنيا":
        console.log("yeah");
        shippingPr = 35;
        setShippingPrice(shippingPr);
        break;

      case "قنا":
        console.log("yeah");
        shippingPr = 35;
        setShippingPrice(shippingPr);
        break;

      case "اسوان ":
        console.log("yeah");
        shippingPr = 35;
        setShippingPrice(shippingPr);
        break;
    }
  };

  return (
    <div className="completing-orders container ">
      <h3 className="text-center outline">ادخل بيانات الشحن من فضلك</h3>
      <br />
      <form onSubmit={handleSubmit} className="form-style">
        <p htmlFor="username">اسم المشتري</p>
        <input
          type="text"
          name="username"
          className="form-control w-100"
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
          maxLength="11"
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
          required
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
        >
          <option>القاهره </option>
          <option>اسكندريه</option>
          <option>مرسي مطروح</option>
          <option>السويس</option>
          <option>اسماعيليه</option>
          <option>بورسعيد</option>
          <option>الاقصر</option>
          <option>الدقهليه</option>
          <option>الشرقيه</option>
          <option>المنوفيه</option>
          <option>القليوبيه</option>
          <option>البحيره</option>
          <option>الغربيه</option>
          <option>دمياط</option>
          <option>كفر الشيخ</option>
          <option>الفيوم</option>
          <option>بني سويف</option>
          <option>العين السخنه</option>
          <option>وادي النطرون</option>
          <option>المنيا</option>
          <option>أسيوط</option>
          <option>سوهاج</option>
          <option>قنا</option>
          <option>البحر الاحمر</option>
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
