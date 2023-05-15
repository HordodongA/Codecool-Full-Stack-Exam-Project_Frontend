# Landlord - maintenance assistant webapplication - Frontend
Landlord Maintenance Assistant Web Application is designed to work with "Landlord - Maintenance Assistant Web Application - Backend" application server. The goal is to help optimize maintenance tasks, minimize time requirements, maximize performance by making them planned, and prevent forgetting something.

**Major technologies used for building this project:** React with Vite build tool, TypeScrypt and Chakra UI component library. For registration and login it uses OpenId standards and Google account. See full dependencies in package.json file. Project uses stateless session management with JSON web tokens.


## Table of Contents
- [About](#about)
- [Getting Started (use Docker image file)](#getting-started-use-docker-image-file)
- [Getting Started (install app)](#getting-started-install-app)
- [Available scripts](#available-scripts)
- [Usage](#usage)
- [Links and resources](#links-and-resources)
- [License](#license)


## About
This application has come to life as a full-stack software developer school's exam project. It aims to help in the maintenance of various properties, such as flats, houses, premises, vehicles, and so on, by helping to collect information and todo lists in one place. In the first milestone, two modules were built: Activities and Machines. Planned future milestones will contain further modules, such as cleaning, inspections, inventory, administration and billing, animal and plant maintenance. 


## Getting started (use Docker image file)
Use this command to download and run Docker image file mapped to the port 5173. 
```
$ docker run -d -p 5173:80 hordodonga/landlord-frontend:1.0
```
The frontend application will running here: http://localhost:5173/
It's important that Google Dev Console credentials (redirect uri), backend's environmental variables and frontend's src/config.ts file all contains the same values. Port 5173 is a default value.


## Getting started (install app)
**The project's frontend part is runnable by cloning the repository and follow this steps.** Frontend application needs it's own backend application running. [Follow links section.](#links-and-resources)
### Clone repository
```
$ git clone https://github.com/HordodongA/Codecool-Full-Stack-Exam-Project_Frontend.git
```
### Install Node JS and Node Package Manager on your computer if necessary
### Install project's dependencies (root directory)
Install with [npm.](https://www.npmjs.com/)
```
$ npm install
```
It will install all dependencies collected in package.json file.

### Check out the config.ts file in root directory
There is a config.ts file in repository. It contains the main credentials and data for connecting to backend, for using Google login, for display links to documentation and readme files.  
Please note that this data has to be synchronized with Google Developer Console's credentials and Landlord Backend environment variables.

**If you walked along all above steps, the application is ready to use. See scripts below.**


## Available Scripts
**In the project directory, you can run:**
### `npm run dev`
Starts te application in developer mode.
### `npm run build`
Builds the app for production to the `dist` folder.
### `npm run preview`
Preview project in a production-like environment. Starts a production server, and opens a browser to the server URL. (The npm run build command has to be executed before.)


## Usage
A few minutes after frontend application is started either by `npm run preview` or `npm run dev`, the console prints the URL of the http server. It is `http://localhost:5173` by default. Follow the URL in the browser. In case of errors, the application uses the terminal and browser's console to indicate them. In the first milestone, two modules were built: Activities and Machines. Planned future milestones will contain further expansion modules.

### Assets
An asset is a property or chattel, such as a house, holiday home, meadow, car, or even a bicycle. You can store all the relevant data about the asset here, such as the contact details of the janitor, tenants, neighbors, and other important contacts. You can also keep track of the asset's utility service contracts and other related data.  
For now, the landlord can manage the data related to each asset's activities and machines. In the future, we plan to add new modules for cleaning, inspections, inventory, administration, billing, and animal and plant maintenance.  

### Activities
Have you ever returned a rented drill only to remember that you forgot to drill something? Or realized after the mechanic left that you wanted them to check something else? 
After stowing away the chemicals and protective gear, you recall there was something else you needed to take care of. Perhaps you waited weeks for an appointment and only later realized you forgot to mention something crucial while at the car repair shop, and now you're miles away. Or maybe you remember after the silicone caulk or super glue has already dried that there was something else you intended to fix with them.  
This module helps you collect and store important notes so that you can access them when needed.  
Here are some examples of how you can use this module:  
* List items that require a hammer drill, super glue, or acid or degreaser treatment.  
* Avoid forgetting anything when you have to pay high drop-off fees and wait a long time for an appointment with a plumber, electrician, or appliance repairer.  
* Keep track of items you need to buy when you go to the department store, such as things your car or garden needs before winter.  

### Machines
Proper upkeep and maintenance of household appliances is crucial. It not only saves you from having to repair or replace them prematurely but also helps you be environmentally responsible. This module lets you store data related to your machines, such as fire alarms, washing machines, dishwashers, air conditioners, water filters, etc. You can manage details such as their credentials, warranty expiration dates, and service contacts.  
Here are some examples of how you can use the module's to-do lists:  
* List things that need to be checked or cleaned at regular intervals, such as filters, batteries, drips, clogs, and expiration dates.  
* Keep track of parts that need repair or replacement.  
* Keep a list of expendable accessories.  
* List items that you need to acquire.  


## Links and resources
* [Wireframe (Figma)](https://www.figma.com/file/TWU5SGmZQ5tDEllSZ4iMpx/HdA_Exam-Project_Wireframe_1.1?node-id=0%3A1&t=JJKIYxl5MBnpcDVP-1)  
* [GitHub repository backend](https://github.com/HordodongA/Codecool-Full-Stack-Exam-Project_Backend)  
* [GitHub repository frontend](https://github.com/HordodongA/Codecool-Full-Stack-Exam-Project_Frontend)  
* The About page contains OpenAPI 3.0 documentation displayed by Swagger UI.  
* The [Figma wireframe](https://www.figma.com/file/TWU5SGmZQ5tDEllSZ4iMpx/HdA_Exam-Project_Wireframe_1.2.1?type=design&node-id=0%3A1&t=1XVm9Be3pQidybrb-1) in the root of the repository contains the basic design of the application and was made alongside the user stories.  


## License
This project is licensed under the [MIT License.](https://choosealicense.com/licenses/mit/)  

LANDLORD webapplication - Frontend part  
Codecool Fullstack API developer exam project 2023  
Author: Gabor Neubauer