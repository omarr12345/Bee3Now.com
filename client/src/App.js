import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import HomeNavbar from "./Components/Navbar/Navbar";
import ProfilePage from "./Components/ProfilePage/ProfilePage";
import { Route, Routes, useLocation } from "react-router-dom";
import HomePage from "./Components/HomePage/HomePage";
import Cart from "./Components/Cart/Cart";
import React, { useEffect } from "react";

import WalletsAndBags from "./Pages/WalletsAndBags";
import LoginForm from "./Components/LoginForm/LoginForm";
import SignupForm from "./Components/SignUpForm/SignupForm";
import AddingToCart from "./Components/AddingToCart/AddingToCart";
import PrivateRoute from "./Components/ProtectedRoute/ProtectedRoute";
import AdminAddProduct from "./Pages/Admin/AdminAddProduct";
import FavouritesPage from "./Components/FavouritesPage/FavouritesPage";
import CompletingOrders from "./Pages/CompletingOrders/CompletingOrders";
import AdminDashBoard from "./Pages/Admin/AdminDashBoard";
import Wallet from "./Components/Wallet/Wallet";
import Requests from "./Components/Requests/Requests";
import PersonalDetails from "./Components/PersonalDetails/PersonalDetails";
import ForgotPassword from "./Components/ForgotPassword/ForgotPassword";
import RetypePassword from "./Components/RetypePassword/RetypePassword";
import AdminLogin from "./Pages/Admin/AdminLogin";
import AdminRoute from "./Pages/Admin/AdminRoute";
import ProfitWithdrwal from "./Pages/ProfitWithdrwal/ProfitWithdrwal";
import WithdrwalConfirmation from "./Pages/WithdrwalConfirmation/WithdrwalConfirmation";
import ProductsPerCategory from "./Pages/ProductsPerCategory";
import RemoveProducts from "./Pages/Admin/RemoveProducts";

function NoMatch() {
  let location = useLocation();

  return (
    <div>
      <h3>
        No match for <code>{location?.pathname}</code>
      </h3>
    </div>
  );
}

function App() {
  useEffect(() => {
    document.title = "Bee3now احدث موقع دروبشيبينج في مصر";
  });

  return (
    <div className="App">
      <HomeNavbar />
      <Routes>
        <Route path="/login" element={<LoginForm />} />
        <Route path="/signup" element={<SignupForm />} />
        <Route path="/adminlogin" element={<AdminLogin />} />

        <Route path="/forgotpassword" element={<ForgotPassword />} />
        <Route
          path="/retypepassword/:accesstoken"
          render={(props) => <RetypePassword {...props} />}
          element={<RetypePassword />}
        />

        <Route
          path="/withdrawalconfirmation/:accesstoken"
          render={(props) => <WithdrwalConfirmation {...props} />}
          element={<WithdrwalConfirmation />}
        />

        <Route exact path="/" element={<PrivateRoute />}>
          <Route exact path="/" element={<HomePage />} />
          <Route path="/profile/*" element={<ProfilePage />}>
            <Route path="personaldetails" element={<PersonalDetails />} />
            <Route path="wallet" element={<Wallet />} />
            <Route path="Requests" element={<Requests />} />
          </Route>
          <Route path="/cart" element={<Cart />} />
          <Route path="/walletsandbags" element={<WalletsAndBags />} />
          <Route path="/products/:category" element={<ProductsPerCategory />} />
          <Route exact path="/favourites" element={<FavouritesPage />} />
          <Route
            path="/product/:id"
            render={(props) => <AddingToCart {...props} />}
            element={<AddingToCart />}
          />
          <Route exact path="/completingorder" element={<CompletingOrders />} />
          <Route exact path="/withdraw" element={<ProfitWithdrwal />} />
        </Route>

        <Route exact path="/" element={<AdminRoute />}>
          <Route path="/admin/addproduct" element={<AdminAddProduct />} />
          <Route path="/admin/dashboard" element={<AdminDashBoard />} />
          <Route path="/admin/products" element={<RemoveProducts />} />
        </Route>

        <Route path="*" element={<NoMatch />} />
      </Routes>
    </div>
  );
}

export default App;
