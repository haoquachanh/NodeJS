// import connection from './configs/connectDB';

const { render } = require('ejs');
const express =require('express');
const { default: configViewEngine } = require('./configs/viewEngine');
const { default: initWebRoute } = require('./route/web');
require('dotenv').config(); 
    const app=express();
    const port=process.env.PORT || 3001;

    app.use(express.urlencoded({extended: true}))
    app.use(express.json())
    // setup view engine
    configViewEngine(app)       

    //init web route 
    initWebRoute(app)
    app.listen(port,()=>{
        console.log(`Port: ${port}`)
    })