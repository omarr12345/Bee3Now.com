import React, { useEffect, useState } from "react";
import axios from "axios";
import ProductList from "../../Components/ProductList";
function RemoveProducts() {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    axios
      .get(process.env.REACT_APP_API_URL + "/allproducts", {
        "Content-type": "application/json",
        headers: {
          Authorization: localStorage.getItem("admin_access_token"),
        },
      })
      .then((response) => {
        setProducts(response.data);
      });
  }, []);

  return (
    <div className="prods" style={{ marginTop: "100px" }}>
      {products.map((item) => {
        return <ProductList item={item} key={item.Id} />;
      })}
    </div>
  );
}

export default RemoveProducts;
