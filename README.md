# CS103a CP02
Author : Jiefang Li
This is a course project which has a simple authentication module 
and provides access to a mongoose database in the cloud.

## Installation
Download the project from github and download nodejs and npm from https://nodejs.org
and cd into the folder

Install the packages with
``` bash
npm install
```
Start the project with
``` bash
node app.js
```
or install nodemon (the node monitoring app) with
``` bash
npm install -g nodemon
```
and start the project with
``` bash
nodemon
```

## Use
- Register as a new user under register page
![Register page](public/images/register.png)

- Login with your user name and password under login page
![Login page](public/images/login.png)

- After successful login, go to the searcher
![Searcher page](public/images/routesfinder.png)

- You can either search by routes type (e.g., key bus)
![Search by type page](public/images/search_by_type.png)
![Search by type page](public/images/results_by_type.png)

- Or you can search by destination (e.g., south station)
![Search by type page](public/images/search_by_destination.png)
![Search by type page](public/images/results_by_destination.png)

