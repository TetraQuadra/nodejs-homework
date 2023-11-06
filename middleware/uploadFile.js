const multer = require("multer");
const path = require("path");

const storage = multer.diskStorage({
  destination: path.resolve("temp"),
  filename: (req, file, cb) => {
    const fileName = Date.now() + "temp";
    cb(null, fileName);
  },
});

const limits = {
  fileSize: 2000000,
};
const uploadFile = multer({
  storage,
  limits,
});

module.exports = uploadFile;
