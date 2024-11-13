const express= require('express');

const app= express();

const port= 3000;

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
    
});

const COMMON= require('./COMMON');
const uri= COMMON.uri;

const mongoose= require('mongoose');

const carModel= require('./carModel');

const apiMobile= require('./api');
app.use('/api', apiMobile);

app.get('/', async (req, res) => {
    await mongoose.connect(uri);

    let cars= await carModel.find();

    console.log(cars);

    res.send(cars);

});