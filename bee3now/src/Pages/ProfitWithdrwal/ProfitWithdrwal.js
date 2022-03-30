import axios from "axios";
import React, { useState } from "react";

const TransferMethod = {
  vodafone: "فودافون كاش",
  etisalat: "اتصالات كاش ",
  orange: "اورانج موني ",
};

function ProfitWithdrwal() {
  const [transferNumber, setTransferNumber] = useState();
  const [way, setWay] = useState("vodafone");
  const NumericOnly = (e) => {
    //angka only
    const reg = /^[0-9\b]+$/;
    let preval = e.target.value;
    if (e.target.value === "" || reg.test(e.target.value)) return true;
    else e.target.value = preval.substring(0, preval.length - 1);
  };

  const handleSubmit = (e) => {
    console.log(way, transferNumber);

    axios
      .post(
        process.env.REACT_APP_API_URL + "/profitwithdrawalemail",
        {
          TransferNumber: transferNumber,
          TransferWay: TransferMethod[way],
        },
        {
          headers: { Authorization: localStorage.getItem("access_token") },
        }
      )
      .then((response) => {
        console.log(response);
        alert("لقد وصلتك رسالة تأكيد علي بريدك الالكتروني");
      });

    axios
      .patch(
        "http://localhost:3001/api/emptywallet",
        {
          Wallet: 0,
        },
        {
          headers: { Authorization: localStorage.getItem("access_token") },
        }
      )
      .then((response) => {
        console.log(response);
      });
  };
  return (
    <div className="container">
      <div className="row">
        <form onSubmit={handleSubmit} className="col-xl-12 col-lg-12 col-md-12">
          <p>رقم التحويل</p>
          <input
            type="text"
            placeholder="رقم التحويل"
            className="form-control"
            maxLength="11"
            onChange={(e) => {
              NumericOnly(e);
              setTransferNumber(e.target.value);
            }}
            required
          />

          <p>طريقة التحويل</p>

          <select
            className="form-control"
            required
            value={way}
            onChange={(e) => {
              setWay(e.target.value);
              console.log(e.target.value);
            }}
          >
            <option value="vodafone">فودافون كاش</option>
            <option value="etisalat">اتصالات كاش</option>
            <option value="orange">اورانج موني</option>
          </select>

          <br />
          <input
            type="submit"
            value="تأكيد المعلومات"
            className="p-3 btn-success"
          />
        </form>
      </div>
    </div>
  );
}

export default ProfitWithdrwal;
