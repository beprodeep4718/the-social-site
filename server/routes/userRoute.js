const router = require('express').Router();
const userCtrl = require('../controller/userController')
const authMiddleware = require('../middleware/authMiddleware')

router.route("/register").post(userCtrl.register);
router.route("/login").post(userCtrl.login);
router.route("/logout").get(authMiddleware, userCtrl.logout);
router.route("/userinfo").get(authMiddleware, userCtrl.getUser);

module.exports = router;
