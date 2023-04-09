const mongoose = require("mongoose");

const Year_2Schema = new mongoose.Schema(
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
const Year_2 = mongoose.model("Year_2", Year_2Schema);
module.exports = Year_2;
