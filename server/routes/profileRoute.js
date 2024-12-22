const router = require("express").Router();
const profileCtrl = require("../controller/profileController");
const authMiddleware = require("../middleware/authMiddleware");
const { upload } = require("../config/multer.js");

router
  .route("/upload")
  .post(authMiddleware, upload.single("image"), profileCtrl.uploadProfile);

module.exports = router;
