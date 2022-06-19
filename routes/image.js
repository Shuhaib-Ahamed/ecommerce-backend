const multer = require("multer");
const { getTokenWithAdmin } = require("./token");

const router = require("express").Router();

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "images/");
  },
  filename: (req, file, cb) => {
    cb(null, file.originalname);
  },
});

const upload = multer({ storage: storage });

//CREATE
router.post("/image", upload.single("file"), async function (req, res) {
  try {
    res.status(200).json("Image Uploaded...");
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
