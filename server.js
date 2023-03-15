// Credit to wiki.aznraven.com

// Load express
const express = require('express')

// Setup our Express app
const app = express()

const PORT = 8888

const aboutRoute = require('./routes/aboutRoute')
const anydayRoute = require('./routes/anydayRoute')
const fridayRoute = require('./routes/fridayRoute')
const homeRoute = require('./routes/homeRoute')
const mondayRoute = require('./routes/mondayRoute')
const saturdayRoute = require('./routes/saturdayRoute')
const sundayRoute = require('./routes/sundayRoute')
const thursdayRoute = require('./routes/thursdayRoute')
const tuesdayRoute = require('./routes/tuesdayRoute')
const wednesdayRoute = require('./routes/wednesdayRoute')

// Load the create engine -> (npm install jsx-view-engine react react-dom)
const { createEngine } = require('jsx-view-engine')

// Configure the view engine and look for files ending in jsx
app.set('view engine', 'jsx')

// Create the engine and accept files ending in jsx
app.engine('jsx', createEngine())

// Connect our routes to our express app
app.use('/about', aboutRoute)
app.use('/anyday', anydayRoute)
app.use('/friday', fridayRoute)
app.use('/home', homeRoute)
app.use('/monday', mondayRoute)
app.use('/saturday', saturdayRoute)
app.use('/sunday', sundayRoute)
app.use('/thursday', thursdayRoute)
app.use('/tuesday', tuesdayRoute)
app.use('/wednesday', wednesdayRoute)

// Listen to the given port
app.listen(PORT, () => {
    console.log('Listening to the port: ' + PORT)
})