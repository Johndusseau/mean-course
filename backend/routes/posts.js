const express = require("express");
const multer = require("multer");

const Postcontroller = require("../controllers/post");
const checkAuth = require("../middleware/check-auth");

const router = express.Router();

const MIME_TYPE_MAP = {
  "image/png": "png",
  "image/jpeg": "jpg",
  "image/jpeg": "jpg"
};
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    const isValid = MIME_TYPE_MAP[file.mimetype];
    let error = new Error("Invalid mim type");
    if (isValid) {
      error = null;
    }
    cb(error, "backend/images");
  },
  filename: (req, file, cb) => {
    const name = file.originalname
      .toLocaleLowerCase()
      .split(" ")
      .join("-");
    const ext = MIME_TYPE_MAP[file.mimetype];
    cb(null, name + "-" + Date.now() + "-" + ext);
  }
});

router.post(
  "",
  checkAuth,
  multer({ storage: storage }).single("image"),
  Postcontroller.createPost
);

router.put(
  "/:id",
  checkAuth,
  multer({ storage: storage }).single("image"),
  Postcontroller.updatePost
);

router.get("", Postcontroller.getPosts);

router.get(":id", Postcontroller.singlePost);

router.delete("/:id", checkAuth, Postcontroller.deletePost);

module.exports = router;
