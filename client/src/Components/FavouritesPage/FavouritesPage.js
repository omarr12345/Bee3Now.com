import React from "react";
import CartItem from "../CartItem/CartItem";
import { connect } from "react-redux";
import "./edit.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMoneyCheckAlt } from "@fortawesome/free-solid-svg-icons";
import FavouriteItem from "../FavouriteItem/FavouriteItem";

class FavouritesPage extends React.Component {
  componentDidMount() {
    if (this.props.items.length == 0) {
      console.log("yeah");
      document.getElementById("empty").innerHTML =
        "<h1 style='text-align:center;'>المفضله فارغه! </h1>";
    }
  }
  render() {
    return (
      <div className="container cart">
        <div className=" mx-0 my-2">
          <div id="empty"></div>
          <div className="row justify-content-between">
            {this.props.items.map((item) => (
              <FavouriteItem item={item} key={item.Id} />
            ))}
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    items: state.favourites,
  };
};

export default connect(mapStateToProps)(FavouritesPage);
