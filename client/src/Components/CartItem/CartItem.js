import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash } from "@fortawesome/free-solid-svg-icons";
import { connect } from "react-redux";
import { removeFromCart } from "../../Redux/Actions/Actions";
import "./CartItem.css";

function CartItem(props) {
  const { item: product } = props;

  return (
    <div className="carddddd">
      <div className="card-img-container">
        <img src={product.ImgUrl} alt="..." className="card-img-top" />
      </div>
      <div className="card-body">
        <h5 className="card-title">الاسم:{product.Name}</h5>
        <p className="card-text">الكميه:{product.quantity}</p>
        <p className="card-text"> السعر للوحده:{product.Price}</p>
        <p className="card-text"> الربح للوحده:{product.Profit}</p>

        <p className="card-text">
          اجمالي السعر:{product.Price * product.quantity}
        </p>
        <p className="card-text">
          اجمالي الربح:{product.Profit * product.quantity}
        </p>

        <button
          className="btn btn-danger"
          onClick={() => props.removeFromCart(product)}
        >
          <FontAwesomeIcon icon={faTrash}></FontAwesomeIcon> &nbsp; احذف من
          العربه
        </button>
      </div>
    </div>
  );
}

const mapDispatchToProps = (dispatch) => {
  return {
    removeFromCart: (product) => dispatch(removeFromCart(product)),
  };
};

export default connect(null, mapDispatchToProps)(CartItem);
