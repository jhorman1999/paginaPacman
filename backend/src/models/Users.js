const { Schema, model } = require('mongoose');

const usersSchema = new Schema({
    userName: {
        type: String,
        required: true,
        trim: true
    },
    correo: {
        type: String,
        required: true,
        trim: true,
        unique: true
    },
    password: {
        type: String,
        required: true
    },
    numberPhone: {
        type: Number,
        required: true,
        trim: true
    }
});

module.exports= model('Users',usersSchema)