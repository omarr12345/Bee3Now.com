-- phpMyAdmin SQL Dump
-- version 5.1.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Apr 02, 2022 at 02:52 AM
-- Server version: 10.4.22-MariaDB
-- PHP Version: 7.4.27

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `products`
--

-- --------------------------------------------------------

--
-- Table structure for table `admins`
--

CREATE TABLE `admins` (
  `id` int(11) NOT NULL,
  `username` text NOT NULL,
  `password` text NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Table structure for table `orders`
--

CREATE TABLE `orders` (
  `Id` int(11) NOT NULL,
  `user_id` int(11) NOT NULL,
  `CustomerName` text NOT NULL,
  `CustomerNum` text NOT NULL,
  `CustomerSecNum` text NOT NULL,
  `CustomerAddress` text NOT NULL,
  `Governerate` text NOT NULL,
  `FbPage` text NOT NULL,
  `FbPageLink` text NOT NULL,
  `Notes` text NOT NULL,
  `Request` text NOT NULL,
  `ShippingPrice` text NOT NULL,
  `Status` text NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Table structure for table `orders_users`
--

CREATE TABLE `orders_users` (
  `id` int(11) NOT NULL,
  `user_id` int(11) NOT NULL,
  `order_id` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `orders_users`
--

INSERT INTO `orders_users` (`id`, `user_id`, `order_id`) VALUES
(0, 185, 1),
(1, 186, 1);

-- --------------------------------------------------------

--
-- Table structure for table `order_product`
--

CREATE TABLE `order_product` (
  `id` int(11) NOT NULL,
  `product_id` int(11) NOT NULL,
  `order_id` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `order_product`
--

INSERT INTO `order_product` (`id`, `product_id`, `order_id`) VALUES
(1, 24, 38),
(2, 28, 38);

-- --------------------------------------------------------

--
-- Table structure for table `product`
--

CREATE TABLE `product` (
  `Id` int(11) NOT NULL,
  `Name` text NOT NULL,
  `Category` text NOT NULL,
  `Price` int(11) NOT NULL,
  `Profit` int(11) NOT NULL,
  `Size` text NOT NULL,
  `ImgUrl` text NOT NULL,
  `SecImgUrl` text NOT NULL,
  `ThirdImgUrl` text NOT NULL,
  `ForthImgUrl` text NOT NULL,
  `FifthImgUrl` text NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `product`
--

INSERT INTO `product` (`Id`, `Name`, `Category`, `Price`, `Profit`, `Size`, `ImgUrl`, `SecImgUrl`, `ThirdImgUrl`, `ForthImgUrl`, `FifthImgUrl`) VALUES
(47, 'ماكينة حلاقه vgr', 'shavingproducts', 1000, 150, '', '../../Assets/shaver.jpg', '../../Assets/shaver.jpg', '../../Assets/shaver.jpg', '../../Assets/shaver.jpg', '../../Assets/shaver.jpg'),
(48, 'محفظه h&m', 'wallets', 100, 10, '', '../../Assets/61fa5nGnifL._AC_SL1000_.jpg', '../../Assets/61fa5nGnifL._AC_SL1000_.jpg', '../../Assets/61fa5nGnifL._AC_SL1000_.jpg', '../../Assets/61fa5nGnifL._AC_SL1000_.jpg', '../../Assets/61fa5nGnifL._AC_SL1000_.jpg'),
(49, 'ِشنطه longman', 'bags', 200, 40, '', '../../Assets/longchampbag.jpeg', '../../Assets/longchampbag.jpeg', '../../Assets/longchampbag.jpeg', '../../Assets/longchampbag.jpeg', '../../Assets/longchampbag.jpeg'),
(50, 'مستلزمات أطفال ', 'childsproducts', 200, 30, '', '../../Assets/babyproducts.jpg', '../../Assets/babyproducts.jpg', '../../Assets/babyproducts.jpg', '../../Assets/babyproducts.jpg', '../../Assets/babyproducts.jpg'),
(51, 'diorgoldenwatch', 'watches', 70, 10, '', '../../Assets/diorgoldwatch.jpg', '../../Assets/diorgoldwatch.jpg', '../../Assets/diorgoldwatch.jpg', '../../Assets/diorgoldwatch.jpg', '../../Assets/diorgoldwatch.jpg'),
(52, 'تيشيرت قطن رجالي أبيض', 'clothes', 70, 15, '', '../../Assets/cottonwhitetshirt.jpg', '../../Assets/cottonwhitetshirt.jpg', '../../Assets/cottonwhitetshirt.jpg', '../../Assets/cottonwhitetshirt.jpg', '../../Assets/cottonwhitetshirt.jpg'),
(53, 'سماعه بلوتوث glory', 'mobileaccessories', 200, 20, '', '../../Assets/GettyImages-x-376.jpg', '../../Assets/GettyImages-x-376.jpg', '../../Assets/GettyImages-x-376.jpg', '../../Assets/GettyImages-x-376.jpg', '../../Assets/GettyImages-x-376.jpg'),
(54, 'منخول يدوي', 'houseproducts', 100, 15, '', '../../Assets/mankhol.jpg', '../../Assets/mankhol.jpg', '../../Assets/mankhol.jpg', '../../Assets/mankhol.jpg', '../../Assets/mankhol.jpg'),
(55, 'مروحة سقف ايطالي', 'electricproducts', 1000, 100, '', '../../Assets/buy_panasonic_56_inch_ceiling_fan__f-56mz2tbgjag__lowest_price_in_kuwait.jpg', '../../Assets/buy_panasonic_56_inch_ceiling_fan__f-56mz2tbgjag__lowest_price_in_kuwait.jpg', '../../Assets/buy_panasonic_56_inch_ceiling_fan__f-56mz2tbgjag__lowest_price_in_kuwait.jpg', '../../Assets/buy_panasonic_56_inch_ceiling_fan__f-56mz2tbgjag__lowest_price_in_kuwait.jpg', '../../Assets/buy_panasonic_56_inch_ceiling_fan__f-56mz2tbgjag__lowest_price_in_kuwait.jpg'),
(56, 'Lipstick', 'beautyproducts', 50, 10, '', '../../Assets/Lipstick.jpg', '../../Assets/Lipstick.jpg', '../../Assets/Lipstick.jpg', '../../Assets/Lipstick.jpg', '../../Assets/Lipstick.jpg'),
(57, 'تيشيرت قطن رجالي أبيض', 'clothes', 100, 20, '', '../../Assets/cottonwhitetshirt.jpg', '../../Assets/cottonwhitetshirt.jpg', '../../Assets/cottonwhitetshirt.jpg', '../../Assets/cottonwhitetshirt.jpg', '../../Assets/cottonwhitetshirt.jpg');

-- --------------------------------------------------------

--
-- Table structure for table `users`
--

CREATE TABLE `users` (
  `Id` int(11) NOT NULL,
  `Email` text NOT NULL,
  `Password` text NOT NULL,
  `Firstname` text NOT NULL,
  `Lastname` text NOT NULL,
  `Number` text NOT NULL,
  `Type` text NOT NULL,
  `expectedprofit` int(11) NOT NULL,
  `Wallet` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Indexes for dumped tables
--

--
-- Indexes for table `admins`
--
ALTER TABLE `admins`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `orders`
--
ALTER TABLE `orders`
  ADD PRIMARY KEY (`Id`);

--
-- Indexes for table `orders_users`
--
ALTER TABLE `orders_users`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `order_product`
--
ALTER TABLE `order_product`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `product`
--
ALTER TABLE `product`
  ADD PRIMARY KEY (`Id`);

--
-- Indexes for table `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`Id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `admins`
--
ALTER TABLE `admins`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT for table `orders`
--
ALTER TABLE `orders`
  MODIFY `Id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `order_product`
--
ALTER TABLE `order_product`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT for table `product`
--
ALTER TABLE `product`
  MODIFY `Id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=58;

--
-- AUTO_INCREMENT for table `users`
--
ALTER TABLE `users`
  MODIFY `Id` int(11) NOT NULL AUTO_INCREMENT;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
