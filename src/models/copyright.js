const mongoose = require("mongoose");

const CopyrightSchema = new mongoose.Schema({
 year :{
    type:String,
    required:["please enter your year",true]
 }
},{
    timestamps:true,
});


const Copyright = mongoose.model('Copyright',CopyrightSchema)
module.exports = Copyright;