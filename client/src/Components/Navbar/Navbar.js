import React, { useState } from "react";
import "./edit.css";
import {
  Navbar,
  Container,
  Nav,
  Form,
  FormControl,
  Button,
  NavDropdown,
} from "react-bootstrap";
import { printAllData } from "../../Api/Products";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faShoppingCart,
  faUser,
  faSearch,
  faHeart,
} from "@fortawesome/free-solid-svg-icons";
import { BrowserRouter as Router, Route, Link, Routes } from "react-router-dom";
import axios from "axios";
import { useLocation } from "react-router";
import { connect } from "react-redux";

const AuthPages = ["/login", "/signup", "/forgotpassword"];

function HomeNavbar(props) {
  const location = useLocation();
  const [searchKey, setSearchKey] = useState("");
  const isAuthPage = () => AuthPages.includes(location?.pathname);

  const [allproducts, setAllProducts] = useState([]);
  var body = document.body;

  body.onclick = () => {
    document.getElementById("search-menu").style.display = "none";
  };

  const handleSearch = async (e) => {
    document.getElementById("search-menu").style.display = "block";
    await axios
      .get(process.env.REACT_APP_API_URL + "/allproducts", {
        headers: { Authorization: localStorage.getItem("access_token") },
      })
      .then((response) => {
        setAllProducts(response.data);
      });

    var newArray = allproducts.filter(function (el) {
      return el.Name == e.target.value;
    });

    newArray.map((product) => {
      console.log(product.Name);
      document.getElementById("search-menu").innerHTML =
        "<a class='d-flex flex-row justify-content-between search-output' style=' text-decoration:none; color:black' href='/product/" +
        product.Id +
        "' '> <div  style='padding-top:30px'>" +
        product.Name +
        "</div> <div  style='padding-top:30px'> السعر:" +
        product.Price +
        " جنيه</div><div class='h-100'><img src=" +
        product.first_img +
        " class='search-imgs img-fluid'></div>     </a>";
    });
  };
  return (
    <div>
      <Navbar className="nav" expand="lg">
        <Container fluid>
          <Navbar.Brand>
            <Link to="/" className="text-decoration-none nav-link">
              <img className="logo2" src={require("../../Assets/logo2.png")} />
            </Link>
          </Navbar.Brand>
          <Navbar.Toggle className="lineheight" aria-controls="navbarScroll" />
          {!isAuthPage() && (
            <Navbar.Collapse id="navbarScroll">
              <Nav
                className="me-auto my-2 my-lg-0"
                style={{ maxHeight: "100px" }}
                navbarScroll
              >
                <Form className="d-flex flex-row justify-content-center search-form  ">
                  <input
                    _ngcontent-mob-c82=""
                    type="text"
                    placeholder="ما الذي تبحث عنه؟"
                    formcontrolname="searchKey"
                    className="product-search-form__input h-100 form-control "
                    id="search-tape"
                    onChange={handleSearch}
                  />

                  <div id="search-menu"></div>
                </Form>
                <div className="d-flex flex-row justify-content-between icons ">
                  <Link
                    to="/profile/personaldetails"
                    className="text-decoration-none nav-link"
                  >
                    <FontAwesomeIcon icon={faUser} className="fa-2x" />
                  </Link>

                  <Link to="/cart" className="text-decoration-none nav-link">
                    <span
                      className="badge badge-danger"
                      style={{ color: "red" }}
                    >
                      {props.totalQuantity}
                    </span>

                    <FontAwesomeIcon icon={faShoppingCart} className="fa-2x " />
                  </Link>

                  <Link
                    to="/favourites"
                    className="text-decoration-none nav-link"
                  >
                    <span
                      className="badge"
                      style={{ color: "red", fontWeight: "bold" }}
                    >
                      {props.totalFavs}
                    </span>
                    <FontAwesomeIcon icon={faHeart} className="fa-2x " />
                  </Link>
                </div>
              </Nav>
            </Navbar.Collapse>
          )}
        </Container>
      </Navbar>
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    totalQuantity: state.cart.reduce((total, item) => total + item.quantity, 0),
    totalFavs: state.favourites.length,
  };
};

export default connect(mapStateToProps)(HomeNavbar);
