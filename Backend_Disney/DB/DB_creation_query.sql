CREATE DATABASE  IF NOT EXISTS `apidisney` /*!40100 DEFAULT CHARACTER SET utf8 */ /*!80016 DEFAULT ENCRYPTION='N' */;
USE `apidisney`;
-- MySQL dump 10.13  Distrib 8.0.27, for Win64 (x86_64)
--
-- Host: localhost    Database: apidisney
-- ------------------------------------------------------
-- Server version	8.0.27

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
-- Table structure for table `characters`
--

DROP TABLE IF EXISTS `characters`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `characters` (
  `idCharacter` int NOT NULL AUTO_INCREMENT,
  `image` varchar(200) DEFAULT NULL,
  `name` varchar(45) NOT NULL,
  `age` int DEFAULT NULL,
  `weight` int DEFAULT NULL,
  `history` varchar(200) DEFAULT NULL,
  PRIMARY KEY (`idCharacter`),
  UNIQUE KEY `idCharacter_UNIQUE` (`idCharacter`),
  UNIQUE KEY `name_UNIQUE` (`name`)
) ENGINE=InnoDB AUTO_INCREMENT=44 DEFAULT CHARSET=utf8mb3;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Table structure for table `genres`
--

DROP TABLE IF EXISTS `genres`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `genres` (
  `idGenre` int NOT NULL AUTO_INCREMENT,
  `name` varchar(45) DEFAULT NULL,
  `image` varchar(200) DEFAULT NULL,
  PRIMARY KEY (`idGenre`),
  UNIQUE KEY `idMovie_UNIQUE` (`idGenre`),
  UNIQUE KEY `name_UNIQUE` (`name`)
) ENGINE=InnoDB AUTO_INCREMENT=12 DEFAULT CHARSET=utf8mb3;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Table structure for table `movies`
--

DROP TABLE IF EXISTS `movies`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `movies` (
  `idMovie` int NOT NULL AUTO_INCREMENT,
  `image` varchar(200) DEFAULT NULL,
  `title` varchar(45) NOT NULL,
  `relaseDate` date DEFAULT NULL,
  `rating` int DEFAULT NULL,
  PRIMARY KEY (`idMovie`),
  UNIQUE KEY `idMovie_UNIQUE` (`idMovie`),
  UNIQUE KEY `title_UNIQUE` (`title`)
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=utf8mb3;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Table structure for table `movies_characters`
--

DROP TABLE IF EXISTS `movies_characters`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `movies_characters` (
  `idMovies_characters` int NOT NULL AUTO_INCREMENT,
  `idCharacterFK` int NOT NULL,
  `idMovieFK` int NOT NULL,
  PRIMARY KEY (`idMovies_characters`),
  KEY `FK_movies_characters_characters_idx` (`idCharacterFK`),
  KEY `FK_movies_characters_movies_idx` (`idMovieFK`),
  CONSTRAINT `FK_movies_characters_characters` FOREIGN KEY (`idCharacterFK`) REFERENCES `characters` (`idCharacter`) ON DELETE CASCADE ON UPDATE CASCADE,
  CONSTRAINT `FK_movies_characters_movies` FOREIGN KEY (`idMovieFK`) REFERENCES `movies` (`idMovie`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=10 DEFAULT CHARSET=utf8mb3;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Table structure for table `movies_genres`
--

DROP TABLE IF EXISTS `movies_genres`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `movies_genres` (
  `idMovies_genres` int NOT NULL AUTO_INCREMENT,
  `idMovieFK` int NOT NULL,
  `idGenreFK` int NOT NULL,
  PRIMARY KEY (`idMovies_genres`),
  KEY `FK_movies_genres_movies_idx` (`idMovieFK`),
  KEY `FK_movies_genres_genres_idx` (`idGenreFK`),
  CONSTRAINT `FK_movies_genres_genres` FOREIGN KEY (`idGenreFK`) REFERENCES `genres` (`idGenre`) ON DELETE CASCADE ON UPDATE CASCADE,
  CONSTRAINT `FK_movies_genres_movies` FOREIGN KEY (`idMovieFK`) REFERENCES `movies` (`idMovie`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=5 DEFAULT CHARSET=utf8mb3;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Table structure for table `users`
--

DROP TABLE IF EXISTS `users`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `users` (
  `idUser` int NOT NULL AUTO_INCREMENT,
  `userName` varchar(45) NOT NULL,
  `email` varchar(45) NOT NULL,
  `password` varchar(100) NOT NULL,
  `createAt` datetime DEFAULT CURRENT_TIMESTAMP,
  `updatedAt` datetime DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`idUser`),
  UNIQUE KEY `userId_UNIQUE` (`idUser`),
  UNIQUE KEY `username_UNIQUE` (`userName`),
  UNIQUE KEY `email_UNIQUE` (`email`)
) ENGINE=InnoDB AUTO_INCREMENT=7 DEFAULT CHARSET=utf8mb3;
/*!40101 SET character_set_client = @saved_cs_client */;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2022-07-31 22:56:38
