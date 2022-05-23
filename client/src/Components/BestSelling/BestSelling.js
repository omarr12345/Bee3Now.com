import React, { useEffect, useState } from "react";
import "./edit.css";

import Card from "../Card/Card";
import { connect } from "react-redux";
import { useDispatch } from "react-redux";
import axios from "axios";

function BestSelling(props) {
  const dispatch = useDispatch();
  const [clothes, setClothes] = useState([]);
  const [watches, setWatches] = useState([]);
  const [houseProducts, setHouseProducts] = useState([]);
  const [shavingProducts, setShavingProducts] = useState([]);
  const [beautyProducts, setBeautyProducts] = useState([]);
  const [mobileAccessories, setMobileAccessories] = useState([]);
  const [wallets, setWallets] = useState([]);
  const [bags, setBags] = useState([]);
  const [electricProducts, setElectricProducts] = useState([]);
  const [bestSellingProducts, setBestSellingProducts] = useState([]);

  useEffect(() => {
    axios
      .get(process.env.REACT_APP_API_URL + "/products", {
        headers: { Authorization: localStorage.getItem("access_token") },
      })
      .then((response) => {
        setBestSellingProducts(response.data);
      });

    axios
      .get(process.env.REACT_APP_API_URL + "/bestselling/clothes", {
        headers: { Authorization: localStorage.getItem("access_token") },
      })
      .then((response) => {
        setClothes(response.data);
        console.log(response.data);
      });

    axios
      .get(process.env.REACT_APP_API_URL + "/bestselling/watches", {
        headers: { Authorization: localStorage.getItem("access_token") },
      })
      .then((response) => {
        setWatches(response.data);
        console.log(response.data);
      });

    axios
      .get(process.env.REACT_APP_API_URL + "/bestselling/houseproducts", {
        headers: { Authorization: localStorage.getItem("access_token") },
      })
      .then((response) => {
        setHouseProducts(response.data);
        console.log(response.data);
      });

    axios
      .get(process.env.REACT_APP_API_URL + "/bestselling/beautyproducts", {
        headers: { Authorization: localStorage.getItem("access_token") },
      })
      .then((response) => {
        setBeautyProducts(response.data);
        console.log(response.data);
      });

    axios
      .get(process.env.REACT_APP_API_URL + "/bestselling/electricproducts", {
        headers: { Authorization: localStorage.getItem("access_token") },
      })
      .then((response) => {
        setElectricProducts(response.data);
        console.log(response.data);
      });

    axios
      .get(process.env.REACT_APP_API_URL + "/bestselling/shavingproducts", {
        headers: { Authorization: localStorage.getItem("access_token") },
      })
      .then((response) => {
        setShavingProducts(response.data);
        console.log(response.data);
      });

    axios
      .get(process.env.REACT_APP_API_URL + "/bestselling/wallets", {
        headers: { Authorization: localStorage.getItem("access_token") },
      })
      .then((response) => {
        setWallets(response.data);
        console.log(response.data);
      });

    axios
      .get(process.env.REACT_APP_API_URL + "/bestselling/bags", {
        headers: { Authorization: localStorage.getItem("access_token") },
      })
      .then((response) => {
        setBags(response.data);
        console.log(response.data);
      });

    axios
      .get(process.env.REACT_APP_API_URL + "/bestselling/mobileaccessories", {
        headers: { Authorization: localStorage.getItem("access_token") },
      })
      .then((response) => {
        setMobileAccessories(response.data);
        console.log(response.data);
      });
  }, []);

  return (
    <div className="container">
      <h3>الأكثر مبيعا</h3>
      <br />
      <div className="row mx-0">
        {bestSellingProducts.map((item) => {
          return <Card item={item} key={item.Id} />;
        })}
      </div>

      <br />

      <h3>الملابس</h3>

      <br />

      <div className="d-flex flex-row flex-wrap justify-content-between">
        {clothes.map((item) => {
          return <Card item={item} key={item.Id} />;
        })}
      </div>

      <br />
      <h3>الساعات</h3>

      <br />

      <div className="d-flex flex-row flex-wrap justify-content-between">
        {watches.map((item) => {
          return <Card item={item} key={item.Id} />;
        })}
      </div>

      <br />

      <h3>الأدوات المنزليه</h3>

      <br />

      <div className="d-flex flex-row flex-wrap justify-content-between">
        {houseProducts.map((item) => {
          return <Card item={item} key={item.Id} />;
        })}
      </div>

      <br />

      <h3> مكن حلاقه</h3>

      <br />

      <div className="d-flex flex-row flex-wrap justify-content-between">
        {shavingProducts.map((item) => {
          return <Card item={item} key={item.Id} />;
        })}
      </div>

      <br />

      <h3>مستحضرات تجميل</h3>

      <br />

      <div className="d-flex flex-row flex-wrap justify-content-between">
        {beautyProducts.map((item) => {
          return <Card item={item} key={item.Id} />;
        })}
      </div>

      <br />

      <h3>أدوات كهربائيه </h3>

      <br />

      <div className="d-flex flex-row flex-wrap justify-content-between">
        {electricProducts.map((item) => {
          return <Card item={item} key={item.Id} />;
        })}
      </div>

      <br />

      <h3>شنط </h3>

      <br />

      <div className="d-flex flex-row flex-wrap justify-content-between">
        {bags.map((item) => {
          return <Card item={item} key={item.Id} />;
        })}
      </div>

      <br />

      <h3> محافظ</h3>

      <br />

      <div className="d-flex flex-row flex-wrap justify-content-between">
        {wallets.map((item) => {
          return <Card item={item} key={item.Id} />;
        })}
      </div>

      <br />

      <h3>اكسسوارات موبايل </h3>

      <br />

      <div className="d-flex flex-row flex-wrap justify-content-between">
        {mobileAccessories.map((item) => {
          return <Card item={item} key={item.Id} />;
        })}
      </div>
    </div>
  );
}

export default BestSelling;
