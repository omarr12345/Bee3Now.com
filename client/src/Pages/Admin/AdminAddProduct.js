import React, { useEffect, useState } from "react";
import "./edit.css";
import axios from "axios";
import FormData from "form-data";

function AdminAddProduct() {
  const [name, setProductName] = useState("");
  const [price, setProductPrice] = useState("");
  const [profit, setProductProfit] = useState("");
  const [category, setProductCategory] = useState("");

  useEffect(() => {
    const form = document.getElementById("add-p-f");
    form.addEventListener("submit", (e) => {
      e.preventDefault();
      const formData = new FormData(form);

      axios.post(process.env.REACT_APP_API_URL + "/admin/addproduct", formData);
    });
  }, []);

  return (
    <div className="AdminAddProduct">
      <form
        className="add-product-form"
        id="add-p-f"
        encType="multipart/form-data"
      >
        <input
          type="text"
          onChange={(e) => {
            setProductName(e.target.value);
          }}
          name="productname"
          placeholder="Product name"
          className="form-text-input  form-control"
          required
        />
        <br />
        <textarea
          type="text"
          name="productdesc"
          placeholder="Product description"
          className="form-text-input  form-control"
          required
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
          required
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
          required
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
          required
        />
        <br />
        <input
          type="file"
          className="form-control"
          id="first-img"
          name="uploaded_image_1"
          accept=""
          required
        />
        <br />
        <input
          type="file"
          className="form-control"
          id="sec-img"
          name="uploaded_image_2"
          accept=""
          required
        />
        <br />
        <input
          type="file"
          className="form-control"
          id="third-img"
          name="uploaded_image_3"
          accept=""
          required
        />
        <br />
        <input
          type="file"
          className="form-control"
          id="sec-img"
          name="uploaded_image_4"
          accept=""
          required
        />
        <br />
        <input
          type="file"
          className="form-control"
          id="sec-img"
          name="uploaded_image_5"
          accept=""
          required
        />
        <button
          className="btn btn-success adding-product-sub-button"
          type="submit"
        >
          Submit
        </button>
      </form>
    </div>
  );
}

export default AdminAddProduct;
