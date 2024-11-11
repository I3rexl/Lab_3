const express= require('express');

const app= express();

const port= 3000;

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`);
    
});

const uri= 'mongodb+srv://anhnhph49560:yCnAwDBNZth21kiG@md19303.xrfgy.mongodb.net/anhnhph49560';

const mongoose= require('mongoose');

const carModel= require('./carModel');

app.get('/', async (req, res) => {
    await mongoose.connect(uri);

    let cars= await carModel.find();

    console.log(cars);

    res.send(cars);

});