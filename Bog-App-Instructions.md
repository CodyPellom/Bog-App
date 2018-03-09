Skip to content
This repository
Search
Pull requests
Issues
Marketplace
Explore
 @CodyPellom
 Sign out
2
0 172 ATL-WDI-Exercises/rails_bog_app
forked from SF-WDI-LABS/rails_bog_app
 Code  Pull requests 0  Projects 0  Wiki  Insights
rails_bog_app/Bog_MERN_Stack.md
4daf5a0  5 hours ago
@king0120 king0120 Update Bog_MERN_Stack.md
     
457 lines (348 sloc)  14.2 KB
 MERN Stack Bog App
Overview
Everyone does blog apps. Now, you're going to work on a bog app. Researchers are collecting data on a local bog and need an app to quickly record field data.

Objectives
It's time to put all your React and Express knowledge into practice! In this project, you will:

Review CRUD in the context of a MERN application.
Build Forms and communicate with a back end using React
Build memory for the steps required to create an Express app.
Workflow
You'll work through this project as a "time trial." You will be building the app 4 times, each time gaining skills through repetition. Here's how we want you to work:

Start by making a parent folder that will hold each of your trial apps.
Move through the instructions below to build your bog app. Use as many hints as you'd like to check your work and make sure you get through the lab smoothly. Commit your work along the way and at the conclusion. Take notes on your workflow.
When you've finished a run, go back to the parent folder and make a new rails app. Make sure you name it differently (e.g. bog-app-one, bog-app-two)! Watch out that you're not in a nested rails app folder!
Go through the lab another time. This time, time yourself on how long it takes you. Push yourself to peek at the hints more sparingly and code as much as you can on your own. Try not reference the solution; you can look at your first rails app if you're stuck. Again, make sure to commit your work.
Repeat the lab a third time. Try not to use the instructions to build your bog app and refer to them only when very stuck. Time yourself again and aim to build the app faster than you built it the second time around. Make sure you have roughly the same number of commits as you had on your second run. Version control isn't the place to cut corners!
Repeat the lab a fourth time. Time yourself. Try to streamline your process. Squash bugs faster and try not to look at any resources. Commit often and build it as fast as you can!


Submission
When you're finished with your timed runs, edit the README to add an introduction paragraph that includes:

a 3-5 sentences reflection on how this went for you
a tip for others to help conquer some part of the app that used to trip you up
the times for your first and fourth runs
Background
A bog is a mire that accumulates peat, a deposit of dead plant material — often mosses.

You may hear bog and think of Yoda and Luke...



Or maybe Sir Didymus and The Bog of Eternal Stench...



CRUD and REST Reference
REST stands for REpresentational State Transfer. We will strictly adhere to RESTful routing.

Verb	Path	Action	Used for
GET	/creatures	index	displaying list of all creatures
GET	/creatures/new	new	displaying an HTML form to create a new creature
POST	/creatures	create	creating a new creature in the database
GET	/creatures/:id	show	displaying a specific creature
GET	/creatures/:id/edit	edit	displaying an HTML form to edit a specific creature
PUT or PATCH	/creatures/:id	update	updating a specific creature in the database
DELETE	/creatures/:id	destroy	deleting a specific creature in the database
Part I: Getting Started


0. Create a folder that will (eventually) contain four rails apps
Only do this step the first time:

mkdir bog-app-time-trials
cd bog-app-time-trials
1. Set up a new Express project
(Write down your start time!!!)

Create a new Express project:

 mkdir bog-express-one
 cd bog-express-one
 npm init -y
 npm i express mongoose dotenv body-parser morgan concurrently
 touch app.js
After installing your server side dependencies and creating your app.js it's time to open up your text editor and get to work!

Add the following to your app.js:

Import all of your server side dependencies (express, mongoose, etc)
Set up dotenv to parse your environment variables
Overwrite the mongoose Promise library with the global ES6 library
Connect to the Mongoose database at process.env.MONGODB_URI (make sure you have a .env file where you define the address)
Log when your database connects (a.k.a 'open') and when it errors
Inject middleware (like body-parser) using app.use
Set up a get request that sends back "Hello World"
Tell your app to listen on port 3001, and console log when it connects.
Example
Take a look at some previous examples to refresh you on how to set up an express app.Sample Project 3

2. Add a db directory and create a Mongoose model for Creatures
Define a new mongoose schema for Creatures and give it two attributes: name and description.

Also create a seeds.js file and add a few test creatures to your database. Verify that this works via the mongo command line.

Schema Example
Seeds Example
3. Create a routes directory and build out RESTful API routes for creatures.
Remember to import the express router and your model from the ./db/schema file.

const express = require('express')
const router = express.Router()

const { Creature } = require('../db/schema.js')
Make sure there are routes for each RESTful action.

Get All Creatures
Get One Creature by Id
Create New Creature
Update A Creature
Delete A Creature
Use Postman to test each routes.

Make sure to import your routes into your app.js file.

Index Route
Show Route
Create Route
Update Route
Delete Route
4. Use create-react-app to build your client directory
Once you have a working API, it's now time to tie that to a React app.

Initialize your React app by running this command in the root of your directory. Additionally, let's go ahead and install some packages we will use in React

create-react-app client
cd client
npm i axios styled-components react-router-dom
5. Set up your proxy and express app to handle React
Add a proxy to hit your local API in your client package.json

...
  "proxy": "http://localhost:3001",
...
In your app.js, make sure you add the Express static middleware and you change your app.get('/') to handle the built React app.

// app.js
...
  app.use(express.static(`${__dirname}/client/build`))
...
  //below your api routes
  app.get('/*', (req, res) => {
    res.sendFile(`${__dirname}/client/build/index.html`)
  })
...
Also make sure to add a postinstall and dev step to the root package.json to help Heroku know how to deploy your app.

 "engines": {
   "node": 9.7.0
 },
 "scripts": {
    "start": "node app.js",
    "dev": "concurrently \"node app.js\" \"cd client && npm start\"",
    "test": "echo \"Error: no test specified\" && exit 1",
    "postinstall": "cd client && npm i && npm run build"
  },
You should now be able to run both your API and React app by using the command npm run dev

ASIDE: This is a great opportunity to deploy to Heroku! Make sure you follow these commands.

  heroku create
  heroku addons:create mongolab:sandbox
  git push heroku master

  # If you need to seed your production database
  heroku run node db/seeds.js
6. Set up React Router and create Components for Routes
First we will get rid of the boilerplate code in App.js and replace it with some react-router code

import React, { Component } from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Creatures from './components/Creatures'
import SingleCreature from './components/SingleCreature'

class App extends Component {
  render () {
    return (
      <Router>
        <div>
          <Switch>
            <Route exact path="/" component={Creatures}/>
            <Route path="/:id" component={SingleCreature}/>
          </Switch>
        </div>
      </Router>
    )
  }
}

export default App
7. Read All and Create New
Use the Creatures component to house components that allow you do the following:

Get All Creatures and display them as a list of Links.
Click a button to toggle a form on and off.
Input data into a form to create a new creature.
Take a look at the solution code for hints

8. Read One, Update, and Delete
Use the SingleCreature component to house components that allow you to get one creature, toggle a form to update the creature, and delete a creature Take a look at the solution code for hints

9. Introduce Styled Components
Once you have the usability for creatures, use styled components to style your application. Keep these things in mind. Feel free to also bring in libraries like material-ui

Does my app look good on mobile?
Can I add transitions and animations to this UI
Does this app look professional and polished?
Additional Development Ideas for after Version 4
Add links to other pages to help users navigate your site. For instance, a creature show page might have a link to the creatures index page. Use Link. Also link each creature on the Creatures component to its individual show page.
If you'd like, add a navbar with links to the homepage (/). Make a new route called /new which will open the Creatures component, but set the form toggle to true by default. This navbar should show up on every page. Take advantage of whichever CSS library you chose to include!
Read about Mongoose Validations, and add validations to the Creature model to make sure a new creature can't be created without a name and description.
CONGRATULATIONS! You have created a Bog App! Take a break, you look Swamped!


© 2018 GitHub, Inc.
Terms
Privacy
Security
Status
Help
Contact GitHub
API
Training
Shop
Blog
About