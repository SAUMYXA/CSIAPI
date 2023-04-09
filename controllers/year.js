const Year_2 = require("../models/2ndYear");
const Year_3 = require("../models/3rdYear");
const Year_4 = require("../models/4thYear");

const year=(role)=>{
return role=="4th"?Year_4:role=="3rd"?Year_3:Year_2
};
module.exports=year;