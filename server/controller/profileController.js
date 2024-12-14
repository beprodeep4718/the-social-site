const cloudinary = require("../config/cloudinary");
const User = require("../models/userSchema");
const upload = require("../config/multer.js");

const profileCtrl = {
  uploadProfile: async (req, res) => {
    try {
      const user = await User.findOne({ _id: req.user.id });
      const newProfile = await user.updateOne(
        {
          profilePicture: {
            url: req.file.path,
            public_id: req.file.filename,
          },
        },
        { new: true }
      );
      res.status(200).json({
        message: "Image uploaded successfully",
        user: newProfile,
        url: req.file.path,
        public_id: req.file.filename,
      });
    } catch (error) {
      console.log(error.message);
      res.status(500).json({ msg: "Error uploading profile picture" });
    }
  },
};

module.exports = profileCtrl;
