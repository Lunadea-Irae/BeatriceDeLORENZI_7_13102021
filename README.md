
# Groupomania - Social Network V 1.0
* Introduction
* Requirements
* Installation
* Configuration
* Developments

## Introduction
This is an MVP Front and Backend social Network for Groupomania. I wanted it to look like pinterest but including text and not only pictures.

## Requirements
To run this project you will need :

* Node.js
* Angular-cli (version 13.0.2)
* a MySQL server

## Installation
1. Download this git
Firstly, you have to download this project to try it.

2. install your database MySQL
    1. create a database named : `groupomania`
    2. create a .env file with this data (complete it with YOUR database information) :
    ```
    ACCESS_TOKEN_SECRET = ANY_SUPER_SECRET_ACCESS_TOKEN
    REFRESH_TOKEN_SECRET = ANY_SUPER_SECRET_REFRESH_TOKEN

    DATABASE_NAME = groupomania
    DATABASE_PASSWORD = YOUR_DATABASE_PASSWORD
    DATABASE_USER = YOUR_DATABASE_ADMIN_USERNAME
    DATABASE_HOST = 127.0.0.1
    DATABASE_DIALECT = mysql
    DATABASE_LOGS = false
    ```

2. In your Terminal, navigate to the folder

3. Install backend
    copy past this command in your terminal :
    ```bash
    cd ./backend/
    npm run create
    ```

    for futher launches, just copypast :
    ```bash
    cd ./backend/
    npm run create
    ```

4. Install the frontend
    open another terminal and copypast this command :
    ```bash
    cd ./frontend/
    npm start
    ```

## Launch & accesses
    You can open the project in http://localhost:4200
    if it do not work, verify that your ports 3000 (for the api) and 4200 (for the frontend) are not used by another service.

| | Username | Password |
| - | :-----------: | :--------------------------- |
| Admin | Admin | Admin4TheWin |
| thomas.tomel | Toto | test|

## Developments
### Currently implemented :
* Sign Up & Login
* refresh Token
* Home page
* Topic page
* Comments
* Can edit, delete
* profil page
* edit or delete profil
* User ranks
* administrator rights
### Possible evolutions
* Reply to a comment
* Like a comment
* Save a topic
* follow an user
* log errors