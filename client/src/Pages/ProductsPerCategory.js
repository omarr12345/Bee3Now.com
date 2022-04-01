import axios from "axios";
import React from "react";
import { useState, useEffect } from "react";
import { useLocation, useParams } from "react-router";
import Card from "../Components/Card/Card";

function ProductsPerCategory() {
  let { category } = useParams();
  const [products, setProducts] = useState([]);

  useEffect(async () => {
    await axios
      .get(process.env.REACT_APP_API_URL + `/products/${category}`, {
        headers: { Authorization: localStorage.getItem("access_token") },
      })
      .then((response) => {
        setProducts(response.data);
      });
  }, [category]);

  return (
    <div className="container ">
      <div className="d-flex flex-row justify-content-between flex-wrap ">
        {products.map((item) => (
          <Card item={item} key={item.Id} />
        ))}
      </div>
    </div>
  );
}

export default ProductsPerCategory;
