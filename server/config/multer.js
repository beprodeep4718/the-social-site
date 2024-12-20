const multer = require("multer");
const cloudinary = require("./cloudinary");
const { CloudinaryStorage } = require("multer-storage-cloudinary");


const storage = new CloudinaryStorage({
    cloudinary: cloudinary,
    params: {
      folder: "hostel-site/profile-pic",
    },
})

const upload = multer({ storage });

module.exports = upload;