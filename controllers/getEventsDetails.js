// const multer = require("multer");
// const multerVideo = require("../middlewares/multer");
// const year = require("./year");
// const multer = require("multer");
// const multerVideo = (video) => {
//   const storage = multer.diskStorage({
//     destination: function (req, file, cb) {
//       cb(null, "uploads");
//     },
//     filename: function (req, file, cb) {
//       cb(null, Date.now() + "-" + file.originalname);
//     },
//   });
//    upload = multer({ storage: storage });
// };
// const getDetails=async(req,res)=>{
//    const github=req.body.github;
//    const linkedin=req.body.linkedin;
//    const name=req.body.name;
//    const insta=req.body.insta;
//    const role=req.body.role;
//    const video=req.file;
//    const member=await year(role).create({
//      github:github,
//      linkedin:linkedin,
//      name:name,
//      insta:insta,
//      video:gif
//    });
//    return res.status(200).json(member);
// };
// module.exports=getDetails



const multer = require("multer");
const multerPhoto = require("../middlewares/multer");
const year = require("./year");

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "uploads");
  },
  filename: function (req, file, cb) {
    cb(null, Date.now() + "-" + file.originalname);
  },
});

const upload = multer({ storage: storage });

const getEventsDetails = async (req, res) => {
  const Teamname= req.body.Teamname;
  const date = req.body.date;
  const venue = req.body.venue;
  const members = req.body.members;
  const content = req.body.content;
  const role = req.body.role;
  const photo = req.file;

  const member = await year(role).create({
    date: date,
    venue: venue,
    Teamname: Teamname,
    members: members,
    content: content,
    photo: photo,
  });

  return res.status(200).json(member);
};

module.exports = getEventsDetails;
