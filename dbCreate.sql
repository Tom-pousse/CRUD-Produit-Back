CREATE DATABASE lastbrief;

CREATE TABLE Utilisateur (
    id SERIAL PRIMARY KEY,
    nom VARCHAR(255) NOT NULL,
    prenom VARCHAR(255) NOT NULL,
    email VARCHAR(255) NOT NULL UNIQUE,
    mot_de_passe VARCHAR(255) NOT NULL
);


CREATE TABLE Produit (
    id SERIAL PRIMARY KEY,
    nom VARCHAR(255) NOT NULL,
    prix DECIMAL(12, 2) NOT NULL,
    quantite INTEGER NOT NULL,
    id_categorie INTEGER NOT NULL,
    FOREIGN KEY (id_categorie) REFERENCES Categorie(id)
);


CREATE TABLE Categorie (
    id SERIAL PRIMARY KEY,
    nom VARCHAR(255) NOT NULL
);