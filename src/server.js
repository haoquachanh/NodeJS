const { render } = require('ejs');
const express =require('express');
const { default: configViewEngine } = require('./configs/viewEngine');

    const app=express();
    const port=3001;

    configViewEngine(app)
    app.get('/',(req,res)=> {
        res.render('index.ejs')
    })

    app.listen(port,()=>{
        console.log(`Port: ${port}`)
    })