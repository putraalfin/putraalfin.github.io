import mongoose from "mongoose";

const APIkey = mongoose.model('APIkey',{
    Email: {
        type: String,
        required: true
    },
    APIkey: {
        type: String,
        required: true
    },
    CreatedAt: {
        type: Date,
        required: true
    }
});

export default APIkey;
