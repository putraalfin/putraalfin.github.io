import mongoose from "mongoose";

const Animals = mongoose.model('Animals',{
    Nama: {
        type: String,
        required: true
    },
    Category: {
        type: String,
        required: true
    },
    Type:{
        type: String,
        required: true
    },
    NamaLatin: {
        type: String,
        required: true
    },
    Kingdom: {
        type: String,
        required: true
    },
    Kelas:{
        type: String,
        required: true
    },
    Family: {
        type: String,
        require: true
    },
    Spesies: {
        type: String,
        required: true
    },
    Image: {
        type: String,
        required: true
    }

});

export default Animals;