// // const getDetails = require("../controllers/getDetails");
// const postDetails = require("../controllers/postDetails")
// const multer=require("multer");
// const path=require("path");
// const year = require("../controllers/year");
// const router=require("express").Router();
// const videoStorage = multer.diskStorage({
//     destination: 'videos', // Destination to store video 
//     filename: (req, file, cb) => {
//         cb(null, file.fieldname + '_' + Date.now() 
//          + path.extname(file.originalname))
//     }
// });
//   const videoUpload = multer({
//     storage: videoStorage,
//     limits: {
//     fileSize: 10000000 
//     },
//     fileFilter(req, file, cb) {
//       if (!file.originalname.match(/\.(mp4|MPEG-4|mkv|gif)$/)) { 
//          return cb(new Error('Please upload a video'))
//       }
//       cb(undefined, true)
//    }
// })
// router.post("/getDetails",videoUpload.single("video"),async(req,res)=>{
//     const github=req.body.github;
//     const linkedin=req.body.linkedin;
//     const name=req.body.name;
//     const insta=req.body.insta;
//     const role=req.body.role;
//     const video=req.file.filename;
//     const member=await year(role).create({
//       github:github,
//       linkedin:linkedin,
//       name:name,
//       insta:insta,
//       video:video
//     });
//     return res.status(200).json(member);
//  });
// router.post("/postDetails",postDetails);
// module.exports=router


const getEventsDetails = require("../controllers/getEventsDetails");
const postEventsDetails = require("../controllers/postEventsDetails")
const multer=require("multer");
const path=require("path");
const year = require("../controllers/year");
const router=require("express").Router();
const photoStorage = multer.diskStorage({
    destination: 'uploads', // Destination to store photo 
    filename: (req, file, cb) => {
        cb(null, file.fieldname + '_' + Date.now() 
         + path.extname(file.originalname))
    }
});
const photoUpload = multer({
    storage: photoStorage,
    limits: {
        fileSize: 1000000 // Maximum file size is 1MB
    },
    fileFilter(req, file, cb) {
        if (!file.originalname.match(/\.(jpg|jpeg|png|gif)$/)) { // Supported photo formats
            return cb(new Error('Please upload an image'))
        }
        cb(undefined, true)
    }
})
router.post("/getEventsDetails", photoUpload.single("photo"), async(req,res)=>{
    const Teamname= req.body.Teamname;
    const date = req.body.date;
    const venue = req.body.venue;
    const members = req.body.members;
    const content = req.body.content;
    const role=req.body.role;
    const photo=req.file.filename;
    const member=await year(role).create({
        date: date,
        venue: venue,
        Teamname: Teamname,
        members: members,
        content: content,
      photo:photo
    });
    return res.status(200).json(member);
});
router.post("/postEventsDetails", postEventsDetails);
module.exports=router
