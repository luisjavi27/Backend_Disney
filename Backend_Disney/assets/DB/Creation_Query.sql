-- MySQL Workbench Forward Engineering

SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0;
SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0;
SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION';

-- -----------------------------------------------------
-- Schema APIDisney
-- -----------------------------------------------------

-- -----------------------------------------------------
-- Schema APIDisney
-- -----------------------------------------------------
CREATE SCHEMA IF NOT EXISTS `APIDisney` DEFAULT CHARACTER SET utf8 ;
USE `APIDisney` ;

-- -----------------------------------------------------
-- Table `APIDisney`.`users`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `APIDisney`.`users` (
  `idUser` INT NOT NULL AUTO_INCREMENT,
  `username` VARCHAR(16) NOT NULL,
  `email` VARCHAR(255) NOT NULL,
  `password` VARCHAR(32) NOT NULL,
  `createAt` DATETIME NULL DEFAULT CURRENT_TIMESTAMP,
  `updateAt` DATETIME NULL DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`idUser`),
  UNIQUE INDEX `userId_UNIQUE` (`idUser` ASC) VISIBLE,
  UNIQUE INDEX `username_UNIQUE` (`username` ASC) VISIBLE,
  UNIQUE INDEX `email_UNIQUE` (`email` ASC) VISIBLE);


-- -----------------------------------------------------
-- Table `APIDisney`.`characters`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `APIDisney`.`characters` (
  `idCharacter` INT NOT NULL AUTO_INCREMENT,
  `image` VARCHAR(200) NULL,
  `name` VARCHAR(45) NOT NULL,
  `age` INT NULL,
  `weight` INT NULL,
  `history` VARCHAR(200) NULL,
  PRIMARY KEY (`idCharacter`),
  UNIQUE INDEX `idCharacter_UNIQUE` (`idCharacter` ASC) VISIBLE,
  UNIQUE INDEX `name_UNIQUE` (`name` ASC) VISIBLE)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `APIDisney`.`movies`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `APIDisney`.`movies` (
  `idMovie` INT NOT NULL AUTO_INCREMENT,
  `image` VARCHAR(200) NULL,
  `title` VARCHAR(45) NULL,
  `relaseDate` DATE NULL,
  `rating` INT NULL,
  PRIMARY KEY (`idMovie`),
  UNIQUE INDEX `idMovie_UNIQUE` (`idMovie` ASC) VISIBLE,
  UNIQUE INDEX `title_UNIQUE` (`title` ASC) VISIBLE)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `APIDisney`.`movies_characters`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `APIDisney`.`movies_characters` (
  `idMovies_characters` INT NOT NULL AUTO_INCREMENT,
  `idCharacterFK` INT NOT NULL,
  `idMovieFK` INT NOT NULL,
  PRIMARY KEY (`idMovies_characters`),
  INDEX `FK_movies_characters_characters_idx` (`idCharacterFK` ASC) VISIBLE,
  INDEX `FK_movies_characters_movies_idx` (`idMovieFK` ASC) VISIBLE,
  CONSTRAINT `FK_movies_characters_characters`
    FOREIGN KEY (`idCharacterFK`)
    REFERENCES `APIDisney`.`characters` (`idCharacter`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `FK_movies_characters_movies`
    FOREIGN KEY (`idMovieFK`)
    REFERENCES `APIDisney`.`movies` (`idMovie`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `APIDisney`.`genres`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `APIDisney`.`genres` (
  `idGenre` INT NOT NULL AUTO_INCREMENT,
  `name` VARCHAR(45) NULL,
  `image` VARCHAR(200) NULL,
  PRIMARY KEY (`idGenre`),
  UNIQUE INDEX `idMovie_UNIQUE` (`idGenre` ASC) VISIBLE,
  UNIQUE INDEX `name_UNIQUE` (`name` ASC) VISIBLE)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `APIDisney`.`movies_genres`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `APIDisney`.`movies_genres` (
  `idMovies_genres` INT NOT NULL AUTO_INCREMENT,
  `idMoviesFK` INT NULL,
  `idGenresFK` INT NULL,
  PRIMARY KEY (`idMovies_genres`),
  INDEX `FK_movies_genres_movies_idx` (`idMoviesFK` ASC) VISIBLE,
  INDEX `FK_movies_genres_genres_idx` (`idGenresFK` ASC) VISIBLE,
  CONSTRAINT `FK_movies_genres_movies`
    FOREIGN KEY (`idMoviesFK`)
    REFERENCES `APIDisney`.`movies` (`idMovie`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `FK_movies_genres_genres`
    FOREIGN KEY (`idGenresFK`)
    REFERENCES `APIDisney`.`genres` (`idGenre`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


SET SQL_MODE=@OLD_SQL_MODE;
SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS;
SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS;
