const router = require("express").Router();
const { postUpload } = require("../config/multer");
const ctrlPost = require("../controller/postController");
const authMiddleware = require("../middleware/authMiddleware");


router
  .route("/create")
  .post(authMiddleware, postUpload.single("image"), ctrlPost.create);

router
  .route("/")
  .get(ctrlPost.getAll);

module.exports = router;
