const multer = require("multer");
const cloudinary = require("./cloudinary");
const { CloudinaryStorage } = require("multer-storage-cloudinary");


const storage = new CloudinaryStorage({
    cloudinary: cloudinary,
    params: {
      folder: "hostel-site/profile-pic",
    },
})
const Poststorage = new CloudinaryStorage({
    cloudinary: cloudinary,
    params: {
      folder: "hostel-site/posts",
    },
})

const upload = multer({ storage });
const postUpload = multer({storage: Poststorage });

module.exports = {upload, postUpload};