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
//   return upload = multer({ storage: storage });
// };
// module.exports=multerVideo


const multer = require("multer");

const multerPhoto = (photo) => {
  const storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, "uploads");
    },
    filename: function (req, file, cb) {
      cb(null, Date.now() + "-" + file.originalname);
    },
  });
  
  const upload = multer({ storage: storage }).single('photo');
  
  return (req, res, next) => {
    upload(req, res, function (err) {
      if (err) {
        // handle error
        return res.status(400).json({ message: 'Failed to upload photo' });
      }
      next();
    });
  }
};

module.exports = multerPhoto;
