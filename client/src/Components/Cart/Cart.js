import React from "react";
import CartItem from "../CartItem/CartItem";
import { connect } from "react-redux";
import "./Cart.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMoneyCheckAlt } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

class Cart extends React.Component {
  componentDidMount() {
    if (this.props.items.length == 0) {
      document.getElementById("empty").innerHTML =
        "<h1 style='text-align:center'>العربه فارغه !</h1>";

      document.getElementById("buy").style.display = "none";
    }
  }

  compoenenDidUpdate() {
    if (this.props.items.length == 0) {
      document.getElementById("empty").innerHTML =
        "<h1 style='text-align:center'>العربه فارغه !</h1>";

      document.getElementById("buy").style.display = "none";
    }
  }

  render() {
    return (
      <div className="container cart">
        <div className="row ">
          <div id="empty"></div>

          <div className="row justify-content-between">
            {this.props.items.map((item) => (
              <CartItem item={item} key={item.Id} />
            ))}
          </div>
        </div>

        <div>
          <div className="text-align-center">
            <h3 className="text-center">المجموع:{this.props.total}</h3>
          </div>
          <div className="text-center">
            <Link
              disabled
              className=" text-center p-2 btn-success text-center"
              id="buy"
              to={"/completingorder"}
            >
              اتتم عملية الشراء{" "}
              <FontAwesomeIcon icon={faMoneyCheckAlt}></FontAwesomeIcon>
            </Link>
            <br />
            <br />

            <p>ملحوظه الدفع كاش عند الاستلام </p>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    items: state.cart,
    total: state.cart.reduce(
      (total, item) => total + item.Price * item.quantity,
      0
    ),
  };
};

export default connect(mapStateToProps)(Cart);
