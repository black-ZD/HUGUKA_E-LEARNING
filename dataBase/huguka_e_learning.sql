-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Apr 21, 2026 at 02:01 PM
-- Server version: 10.4.32-MariaDB
-- PHP Version: 8.0.30

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `huguka_e_learning`
--

-- --------------------------------------------------------

--
-- Table structure for table `module`
--

CREATE TABLE `module` (
  `id` int(11) NOT NULL,
  `moduleName` varchar(255) NOT NULL,
  `moduleCode` varchar(50) NOT NULL,
  `moduleTrainer` varchar(255) NOT NULL,
  `createAt` timestamp NOT NULL DEFAULT current_timestamp(),
  `updateAt` datetime DEFAULT current_timestamp(),
  `moduleDescription` text DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `module`
--

INSERT INTO `module` (`id`, `moduleName`, `moduleCode`, `moduleTrainer`, `createAt`, `updateAt`, `moduleDescription`) VALUES
(1, 'software devlopment', '4376', 'NIYONSHUTI Emery', '2026-04-14 08:20:51', '2026-04-14 10:20:51', 'about building software'),
(2, 'create frontend using react.js', 'sod0043', 'KEVINE', '2026-04-14 08:41:32', '2026-04-14 10:41:32', 'create ui using react.js farme work'),
(3, 'create frontend using react.js', 'sod0043', 'NIYONSHUTI Emery', '2026-04-14 08:45:40', '2026-04-14 10:45:40', 'create ui using react.js framework'),
(4, 'CREATE BACKEND USING NODE.JS', 'sod0044', 'BlackGen', '2026-04-14 08:45:40', '2026-04-14 10:45:40', 'create SERVER SIDE OF WEB APPLICATION(BACKEND) USING NODE.JS LIBRARY WITH EXPRESS.JS FRAMEWORK'),
(5, 'CREATE BACKEND USING PHP', 'sod0044', 'Logan Mullahh', '2026-04-14 08:45:40', '2026-04-14 10:45:40', 'create SERVER SIDE OF WEB APPLICATION(BACKEND) USING PHP'),
(6, 'DESIGN UI/UX', 'sod0045', 'BlackCoffee', '2026-04-14 08:45:40', '2026-04-14 10:45:40', 'DESIGN UI/UX AND UNDERSTANDING'),
(7, 'DesignUi/Ux', 'SOD001', 'niyonshuti Emery', '2026-04-15 11:22:49', '2026-04-15 13:22:49', 'designing user interface'),
(10, 'English', 'SOD028', '', '2026-04-17 09:38:36', '2026-04-17 13:34:24', 'using intermediet english at work place');

-- --------------------------------------------------------

--
-- Table structure for table `users`
--

CREATE TABLE `users` (
  `id` int(11) NOT NULL,
  `fName` varchar(50) NOT NULL,
  `sName` varchar(50) NOT NULL,
  `email` varchar(255) NOT NULL,
  `phoneNumber` int(15) NOT NULL,
  `role` enum('ADMIN','TRAINER','STUDENT','PARENT') NOT NULL DEFAULT 'STUDENT',
  `password_hashed` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Table structure for table `user_accounts`
--

CREATE TABLE `user_accounts` (
  `id` int(11) NOT NULL,
  `firstName` varchar(100) NOT NULL,
  `secondName` varchar(100) NOT NULL,
  `phoneNumber` int(15) NOT NULL,
  `email` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Indexes for dumped tables
--

--
-- Indexes for table `module`
--
ALTER TABLE `module`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `email` (`email`);

--
-- Indexes for table `user_accounts`
--
ALTER TABLE `user_accounts`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `phoneNumber` (`phoneNumber`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `module`
--
ALTER TABLE `module`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=12;

--
-- AUTO_INCREMENT for table `users`
--
ALTER TABLE `users`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `user_accounts`
--
ALTER TABLE `user_accounts`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
