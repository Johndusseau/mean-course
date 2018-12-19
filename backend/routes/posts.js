const express = require("express");

const Postcontroller = require("../controllers/post");
const checkAuth = require("../middleware/check-auth");
const extractFile = require("../middleware/file");
const router = express.Router();

router.post("", checkAuth, extractFile, Postcontroller.createPost);

router.put("/:id", checkAuth, extractFile, Postcontroller.updatePost);

router.get("", Postcontroller.getPosts);

router.get(":id", Postcontroller.singlePost);

router.delete("/:id", checkAuth, Postcontroller.deletePost);

module.exports = router;
