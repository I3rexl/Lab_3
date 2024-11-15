const mongoose= require('mongoose');

const CarSchema= new mongoose.Schema({
    ten:{
        type: String,
        require: true
    },
    namSX:{
        type: Number,
    },
    hang:{
        type: String,
        require: true
    },
    gia:{
        type: Number,
    },
    anh:{
        type: String,
    }
});

const CarModel= new mongoose.model('user', CarSchema);

module.exports= CarModel;
