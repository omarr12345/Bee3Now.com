import axios from "axios";

export const axiosInstance = axios.create({
  baseURL: process.env.REACT_APP_API_URL,
});
export const allProductsApi = `${process.env.REACT_APP_API_URL}/allproducts`;

const getAllData = async () => {
  return axiosInstance.get("/allproducts", {
    headers: { Authorization: localStorage.getItem("access_token") },
  });
};

const printAllData = async () => {
  const allData = await getAllData;

  return allData;
};

const getOrders = async () => {
  return axiosInstance.get("/orders", {
    headers: { Authorization: localStorage.getItem("admin_access_token") },
  });
};

/*fetch(ordersApi, {
  headers: { Authorization: localStorage.getItem("access_token") },
}).then((response) => response.json());
*/

const printOrders = async () => {
  const orders = await getOrders;

  return orders;
};

export function getProduct(Id) {
  const product = getAllData().then((response) =>
    response.data.find((item) => item.Id === Id)
  );
  return Promise.resolve(product);
}

/*
function getProduct(id) {
  const product = Products.find((item) => item.id === id);
  return Promise.resolve(product);
}
*/

export { getAllData, printAllData, printOrders, getOrders };
