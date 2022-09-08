# ToDoistPlaywright


<h1 align="center">
  <br>
 
  <br>
  ToDoist Challenge - FrontEnd/BackEnd
  <br>
</h1>

<h4 align="center">QA buddy program for ToDoist Challenge Frontend and Backend.</h4>

<p align="center">
  <a href="#sparkles-key-features">Key Features</a> •
  <a href="#package-packages">Packages</a> •
  
</p>

## :sparkles: Key Features

* **ToDoistRepo** - Frontend and Backend living within the same repository.

## :package: Packages

- **@ToDoist-FrontEnd** - Modules shared web
- **@ToDoist-BackEnd** - postman and Newman 

## :blue_book: Setup

To clone and run this application, you'll need the following:
- [Git](https://git-scm.com) 
- [Node.js](https://nodejs.org/en/download/)
- [Yarn](https://yarnpkg.com/)
- [Newman](https://www.npmjs.com/package/newman)

```bash
# Clone this repository
$ git clone https://github.com/ricardo-rd-rm/TodoistChallenge.git

# Go into the repository
$ cd TodoistChallenge

# Install dependencies
$ yarn install

# Add .env file with below Data
$ USERNAME=ricardo.r.wizeline@gmail.com
$ PASSWORD=wizeline123
$ INVALIDUSERNAME=wrongUser@gmail.com
$ INVALIDPASSWORD=wrongPassword
```
### Before running 
It needs to be considered that this project uses `.env` files to work properly.

### Run FrontEnd 
In order to run FrontEnd, execute the following commands 

#### Scritps to run FE
```bash
# On the shared folder
# test:chrome:headless
# test:chrome
# test:all
$ yarn test:chrome
```
This will run the shared folder watcher to update the website on every shared file change.

### Run BackEnd
In order to run FrontEnd, execute the following commands 

#### Scripts to run BE
```bash
# On the shared folder
# test:be
$ yarn test:be
```

