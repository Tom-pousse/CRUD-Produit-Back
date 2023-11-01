## 1 coté front:

nombre de composant:

- une page list des produit
- un composant connexion
- un composant suppression
- un composant modification
- un composant création
- un composant 404
- un composant nav-bar

## 2 creation db + script + inser (ok)

## 3 coté back: (ok)

installer :

- npm i @nestjs/typeorm typeorm pg (ok)
- npm i --save @nestjs/config (ok)
- npm i --save class-validator class-transformer (ok)
- npm i bcrypt (ok)
- npm i --save-dev @types/bcrypt (ok)
- npm i @nestjs/passport @nestjs/jwt (ok)
- npm i passport-jwt (ok)
- npm i --save-dev @types/passport-jwt (ok)

ressource :

- categorie (ok)
- utilisateur (ok)
- produit (ok)
- auth (ok)

Créer un fichier .env (ok)

## 4 coté back: je vais avoir besoin dans mes services:

Dans Auth:

- d'une inscription/connexion (ok)

Dans produit:

- d'un create all produit (ok)
- d'un get all produit (ok)
- d'un find one produit (ok)
- d'un patch produit (ok)
- d'un delete produit (ok)

Dans catégorie:

- d'un get all (ok)
