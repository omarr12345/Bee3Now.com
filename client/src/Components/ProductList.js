import axios from "axios";
import React from "react";

function ProductList(props) {
  let deleteProduct = () => {
    axios
      .post(
        process.env.REACT_APP_API_URL + "/admin/deleteproduct",
        {
          prod: props.item.Id,
        },
        {
          headers: { Authorization: localStorage.getItem("access_token") },
        }
      )
      .then(window.location.reload(true));
  };

  return (
    <div className="text-align-center">
      <div className="productlist  row bg-white ">
        <div className="col-md-2">{props.item.Id}</div>
        <div className="col-md-2">{props.item.Name}</div>
        <div className="col-md-2">{props.item.Price}</div>
        <div className="col-md-2">{props.item.Profit}</div>
        <div className="col-md-4">
          <button
            className="btn-danger"
            onClick={(e) => {
              deleteProduct();
            }}
          >
            Delete
          </button>
        </div>
      </div>
    </div>
  );
}

export default ProductList;
