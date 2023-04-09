const year = require("./year");

const postEventsDetails=async(req,res)=>{
   const role=req.body.role;
   const memberYear= year(role);
   const detail=await memberYear.find({});
   return res.status(200).json(detail);   

}
module.exports=postEventsDetails