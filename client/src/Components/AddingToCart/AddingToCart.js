import React from "react";
import { useState } from "react";
import { Link, useParams } from "react-router-dom";
import { useEffect } from "react";
import { addToCart, addToFavourites } from "../../Redux/Actions/Actions";
import { connect } from "react-redux";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart, faShoppingCart } from "@fortawesome/free-solid-svg-icons";
import { getProduct } from "../../Api/Products";
import "./edit.css";
import Carousel from "react-bootstrap/Carousel";
// export for others scripts to use

function AddingToCart(props) {
  //variables

  const params = useParams();
  const id = params.id;

  //setstates
  const [loading, setLoading] = useState(true);
  const [product, setProduct] = useState({
    quantity: 1,
  });
  const [price, setPrice] = useState(0);
  const [profit, setProfit] = useState(0);
  const [quantity, setQuantity] = useState(1);
  const [index, setIndex] = useState(0);

  var data = [
    {
      image: "../../Assets/" + product.first_img,
      caption: "Caption",
      description: "Description Here",
      id: 1,
    },
    {
      image: "../../Assets/" + product.second_img,
      caption: "Caption",
      description: "Description Here",
      id: 2,
    },
    {
      image: "../../Assets/" + product.third_img,
      caption: "Caption",
      description: "Description Here",
      id: 3,
    },

    {
      image: "../../Assets/" + product.forth_img,
      caption: "Caption",
      description: "Description Here",
      id: 4,
    },
    {
      image: "../../Assets/" + product.fifth_img,
      caption: "Caption",
      description: "Description Here",
      id: 5,
    },
  ];

  //functions

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };

  function handleQuantity(e) {
    console.log(e.target.value);
    if (e.target.value < 0) {
      return 0;
    } else {
      document.getElementById("add-to-cart").style.display = "inline";

      setQuantity(Number(e.target.value));

      setProduct({
        ...product,
        quantity: Number(e.target.value),
      });
    }
  }

  function downloadAll() {
    document.getElementById("download_file1").click();
    document.getElementById("download_file2").click();
    document.getElementById("download_file3").click();
    document.getElementById("download_file4").click();
    document.getElementById("download_file5").click();
  }

  //useEffects
  useEffect(() => {
    getProduct(parseInt(id)).then((product) => {
      setTimeout(() => {
        setProduct({ ...product, quantity });
        setLoading(false);
        console.log(product);
      }, 2000);
    });
  }, []);

  useEffect(() => {
    setPrice(Number(product.Price) * quantity);
    setProfit(Number(product.Profit) * quantity);
  }, [product.Price, product.Profit, quantity]);

  if (loading) {
    return "loading ..";
  }

  return (
    <div className="adding-to-cart">
      <div className="container ">
        <div className="row ">
          <div className="img-container col-6 col-md-6 col-lg-6 col-sm-6">
            <Carousel
              activeIndex={index}
              onSelect={handleSelect}
              className="carousel"
            >
              {data.map((slide, i) => {
                return (
                  <Carousel.Item className="carouselItem" key={slide.id}>
                    <img
                      className="d-block img-fluid carousel-img"
                      src={slide.image}
                      alt="slider image"
                    />
                  </Carousel.Item>
                );
              })}
            </Carousel>
            <div className="text-center">
              <a
                href={product.ImgUrl}
                download="product1.png"
                id="download_file1"
              ></a>

              <a
                href={product.SecImgUrl}
                download="product2.png"
                id="download_file2"
              ></a>

              <a
                href={product.ThirdImgUrl}
                download="product3.png"
                id="download_file3"
              ></a>

              <a
                href={product.ForthImgUrl}
                download="product4.jpg"
                id="download_file4"
              ></a>

              <a
                href={product.FifthImgUrl}
                download="product5.png"
                id="download_file5"
              ></a>
              <br />

              <button className="btn-success p-4 w-75">
                <a
                  onClick={downloadAll}
                  id="downloadAll"
                  href="#"
                  className="text-decoration-none  color-white"
                >
                  تحميل صور المنتح بالكامل
                </a>
              </button>
            </div>
          </div>
          <div className="card-body col-6 col-md-6 col-lg-6 col-sm-6 ">
            <h5 className="card-title"> {product.Name}</h5> <br />
            <p className="card-text"> السعر: {product.Price}</p>
            <p className="card-text"> الربح: {product.Profit} </p>
            <input
              id="quantity"
              type="number"
              value={quantity}
              min="1"
              max="10"
              className="form-control col-12"
              onChange={(e) => {
                handleQuantity(e);
              }}
            />
            <br /> <br />
            <p>السعر الاجمالي:{price} </p>
            <p> الربح الاجمالي:{profit} </p>
            <button className="btn-success p-2 col-12">
              <Link
                to="/cart"
                id="add-to-cart"
                className="text-decoration-none  color-white  "
                onClick={(e) => {
                  props.addToCart(product);
                  window.location.href = "/cart";
                }}
              >
                <FontAwesomeIcon icon={faShoppingCart}> </FontAwesomeIcon>{" "}
                &nbsp; أضف الي العربه
              </Link>
            </button>
            <br />
            <br />
            <button className=" p-2 btn-yellow col-12 ">
              <Link
                to="/favourites"
                className="text-decoration-none color-white "
                id="add-to-favourites"
                onClick={(e) => {
                  props.addToFavourites(product);
                }}
              >
                <FontAwesomeIcon
                  icon={faHeart}
                  className="favourite-icon"
                ></FontAwesomeIcon>
                &nbsp; أضف الي المفضله
              </Link>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

const mapDispatchToProps = (dispatch) => {
  return {
    addToCart: (productInfo) => dispatch(addToCart(productInfo)),
    addToFavourites: (favouriteProduct) =>
      dispatch(addToFavourites(favouriteProduct)),
  };
};

export default connect(null, mapDispatchToProps)(AddingToCart);
