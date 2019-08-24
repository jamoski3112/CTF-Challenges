-- phpMyAdmin SQL Dump
-- version 4.9.0.1
-- https://www.phpmyadmin.net/
--
-- Host: localhost
-- Generation Time: Aug 20, 2019 at 08:15 AM
-- Server version: 10.4.6-MariaDB
-- PHP Version: 7.1.31

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `victimcorp`
--

-- --------------------------------------------------------

--
-- Table structure for table `victimcorp_manager`
--

CREATE TABLE `victimcorp_manager` (
  `id` int(11) NOT NULL,
  `username` varchar(1000) NOT NULL,
  `email` varchar(100) NOT NULL,
  `password` varchar(100) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `victimcorp_manager`
--

INSERT INTO `victimcorp_manager` (`id`, `username`, `email`, `password`) VALUES
(1, 'admin', 'admin@victimcorp.xyz', 'a5b6e34b25f4722b811d371e957aea29'),
(2, 'larry', 'larry@victimcorp.xyz', '66f4b449b3a98abf87f2521e35513542');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `victimcorp_manager`
--
ALTER TABLE `victimcorp_manager`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `victimcorp_manager`
--
ALTER TABLE `victimcorp_manager`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4642;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
