const mongoose = require("mongoose");

const Year_4Schema = new mongoose.Schema(
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
const Year_4 = mongoose.model("Year_4", Year_4Schema);
module.exports = Year_4;
