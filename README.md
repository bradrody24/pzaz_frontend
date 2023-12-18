# Project setup

## Pre-requisites
<br>
### 1. Install Node.js

Install Node.js, we will use NPM to install dependencies, (latest version is 16.14.2 LTS or 18.0.0 Current) see link below:

[Download Node.js](https://www.nodejs.org/en/)
<br>
<br>

## Clone repository from Github

## Install project dependencies
<br>

1. Open Visual Studio Code, then open `Terminal` → `New Terminal` on the Main Menu

2. On Terminal pane, change directory to our project
    ```
    cd [project_name]
    ```
3. Install all project dependencies
    ```
    npm install
    ```
4. After `npm install`, you should have new folder `node_modules` added on the left pane of Visual Studio Code

5. If there is any module or library that needs to be updated, you may update them using `npm update`
    ```
    npm update
    ```
<br>

## Run app
    ```
    npm run serve
    ```


The application should then be available on port 8081:

```shell
http://localhost:8081/
```