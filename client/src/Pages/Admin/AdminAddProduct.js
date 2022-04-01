import React, { useEffect, useState } from "react";
import "./edit.css";
import axios from "axios";

function AdminAddProduct() {
  const [name, setProductName] = useState("");
  const [price, setProductPrice] = useState("");
  const [profit, setProductProfit] = useState("");
  const [category, setProductCategory] = useState("");
  const [firstImg, setProductFirstImg] = useState("");
  const [secImg, setProductSecImg] = useState("");
  const [thirdImg, setProductThirdImg] = useState("");
  const [forthImg, setProductForthImg] = useState("");
  const [fifthImg, setProductFifthImg] = useState("");

  console.log(name, price, profit, firstImg, secImg);

  const addProduct = () => {
    axios.post(process.env.REACT_APP_API_URL + "admin/addproduct", {
      ProductName: name,
      ProductPrice: price,
      ProductProfit: profit,
      ProductCategory: category,
      FirstImgUrl: firstImg,
      SecImgUrl: secImg,
      ThirdImgUrl: thirdImg,
      ForthImgUrl: forthImg,
      FifthImgUrl: fifthImg,
    });
  };

  return (
    <div className="AdminAddProduct">
      <form className="add-product-form">
        <input
          type="text"
          onChange={(e) => {
            setProductName(e.target.value);
          }}
          name="productname"
          placeholder="Product name"
          className="form-text-input  form-control"
        />
        <br />
        <input
          type="text"
          onChange={(e) => {
            setProductPrice(e.target.value);
          }}
          name="productprice"
          placeholder="Product price"
          className="form-text-input form-control"
        />
        <br />
        <input
          type="text"
          onChange={(e) => {
            setProductProfit(e.target.value);
          }}
          name="productprofit"
          placeholder="Product profit"
          className="form-text-input form-control"
        />
        <br />
        <input
          type="text"
          onChange={(e) => {
            setProductCategory(e.target.value);
          }}
          name="productcategory"
          placeholder="Product Category"
          className="form-text-input form-control"
        />
        <br />
        <input
          type="file"
          className="form-control"
          id="first-img"
          onChange={(e) => {
            var lastValue = "../../Assets/" + e.target.value.substring(12);
            setProductFirstImg(lastValue);
          }}
        />
        <br />
        <input
          type="file"
          className="form-control"
          id="sec-img"
          onChange={(e) => {
            var lastValue = "../../Assets/" + e.target.value.substring(12);

            setProductSecImg(lastValue);
          }}
        />
        <br />

        <input
          type="file"
          className="form-control"
          id="third-img"
          onChange={(e) => {
            var lastValue = "../../Assets/" + e.target.value.substring(12);

            setProductThirdImg(lastValue);
          }}
        />
        <br />

        <input
          type="file"
          className="form-control"
          id="sec-img"
          onChange={(e) => {
            var lastValue = "../../Assets/" + e.target.value.substring(12);

            setProductForthImg(lastValue);
          }}
        />

        <br />
        <input
          type="file"
          className="form-control"
          id="sec-img"
          onChange={(e) => {
            var lastValue = "../../Assets/" + e.target.value.substring(12);

            setProductFifthImg(lastValue);
          }}
        />
        <button
          className="btn btn-success adding-product-sub-button"
          onClick={addProduct}
        >
          Submit
        </button>
      </form>
    </div>
  );
}

export default AdminAddProduct;
