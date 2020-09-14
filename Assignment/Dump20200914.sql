-- MySQL dump 10.13  Distrib 8.0.21, for Win64 (x86_64)
--
-- Host: localhost    Database: user
-- ------------------------------------------------------
-- Server version	8.0.21

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!50503 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `booking`
--

DROP TABLE IF EXISTS `booking`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `booking` (
  `Customer` text,
  `roomType` text,
  `checkIn` date DEFAULT NULL,
  `checkOut` date DEFAULT NULL,
  `guests` int DEFAULT NULL
) ENGINE=MyISAM DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `booking`
--

LOCK TABLES `booking` WRITE;
/*!40000 ALTER TABLE `booking` DISABLE KEYS */;
INSERT INTO `booking` VALUES ('Ruchir','Standard','2019-02-25','2019-02-27',3),('Ruchir','Standard','2019-02-22','2019-02-23',3),('Ruchir','Luxury','2019-02-25','2019-02-27',3),('Kshitij','Standard','2020-09-13','2020-09-14',3),('Karan','Luxury','2020-09-13','2020-09-14',5),('Karan','Deluxe','2020-09-16','2020-09-17',3),('Ruchir','Deluxe','2020-09-14','2020-09-15',7);
/*!40000 ALTER TABLE `booking` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `rooms`
--

DROP TABLE IF EXISTS `rooms`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `rooms` (
  `roomType` text,
  `capacity` text,
  `booked_status` text
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `rooms`
--

LOCK TABLES `rooms` WRITE;
/*!40000 ALTER TABLE `rooms` DISABLE KEYS */;
INSERT INTO `rooms` VALUES ('Deluxe','3','1'),('Deluxe','3','1'),('Deluxe','3','1'),('Deluxe','3','1'),('Deluxe','3','1'),('Deluxe','3','1'),('Deluxe','3','1'),('Deluxe','3','1'),('Deluxe','3','1'),('Deluxe','3','0'),('Deluxe','3','0'),('Deluxe','3','0'),('Deluxe','3','0'),('Deluxe','3','0');
/*!40000 ALTER TABLE `rooms` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `users`
--

DROP TABLE IF EXISTS `users`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `users` (
  `username` text,
  `password` text,
  `email` text,
  `mobile` text
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `users`
--

LOCK TABLES `users` WRITE;
/*!40000 ALTER TABLE `users` DISABLE KEYS */;
INSERT INTO `users` VALUES ('tanuj','12345','ruchir@gmail.com','123456789'),('ruchirverma','123456','ruchirverma22@gmail.com','9131711917'),('ruchirverma22@gmail.com','12345','ruchirv@ymail.com','12345676543'),('ruchirverma22444@gmail.com','12345','ruchirverma22@gmail.com','987654321'),('ritik','12345','ruchirverma22@gmail.com','123456'),('kshitijkumar','12345','kshitij','123456'),('kshitijkumar1','123456','kshitij','123456'),('rverma7612','12345','kshitij','123456'),('rverma76aa','123445','kshitij','123456'),('rverma7665','123456','kshitij','123456'),('prakhar','12345','prakhar@gmail.com','9876543210'),('admin','123455','ruchirverma22@gmail.com','12345678'),('tanuj1','12345','ruchirverma22@gmail.com','123456'),('tanu','12345','ruchirverma22@gmail.com','123456'),('viky','12345','viky@gmail.com','12345'),('tanuj12','456789','ruchirverma22@gmail.com','987654321'),('ruchir','12345','ruchirverma22@gmail.com','9876543210');
/*!40000 ALTER TABLE `users` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2020-09-14 17:14:41
