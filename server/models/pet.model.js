const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const PetSchema = new mongoose.Schema({
    name:{
        type:String,
        required: [true, "Name is Required"],
        minlength:[3, "Must be atleast 3 characters"]
    },

    type:{
        type:String,
        required: [true,"Need to know Spieces of this thing!"],
        minlength:[3, "Must be atleast 3 characters"]

    },

    description:{
        type:String,
        required: [true,"We Need to know more!!"],
        minlength:[3, "Must be atleast 3 characters"]

    },

    skillOne:{
        type:String,
    },

    skillTwo:{
        type:String,
    },

    skillThree:{
        type:String
    }
},{timestamps: true})

const Pet = mongoose.model("Pet",PetSchema);

module.exports = Pet;