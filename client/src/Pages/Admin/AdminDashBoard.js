import React, { useState } from "react";
import "./edit.css";
import { useDispatch } from "react-redux";
import { getOrders } from "../../Api/Products";
import { useEffect } from "react";
import Order from "./Order";

function AdminDashBoard() {
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    getOrders().then((response) => {
      setOrders(response.data);
    });
  }, []);

  return (
    <div className="container orders-container bg-white ">
      <h1 className="text-center">Admin DashBoard</h1>
      <br />
      <br />
      <div className="row">
        {orders.map((order) => {
          return <Order order={order} key={order.Id} />;
        })}
      </div>
    </div>
  );
}

export default AdminDashBoard;

/*

  {JSON.stringify(orders).map((order) => {
        
      })}

      */
