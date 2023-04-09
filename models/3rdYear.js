const mongoose = require("mongoose");

const Year_3Schema = new mongoose.Schema(
  {
    Teamname:{type:String},
    date:{type:String},
    venue:{type:String},
    members:{type:String},
    content:{type:String},
    photo:{type:String}
     },
  { timestamps: true }
);
const Year_3 = mongoose.model("Year_3", Year_3Schema);
module.exports = Year_3;