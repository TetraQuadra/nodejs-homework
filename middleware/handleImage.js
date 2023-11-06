const jimp = require("jimp");
const path = require("path");
require("dotenv").config();

const handleImage = async (req, res, next) => {
  try {
    const image = await jimp.read(path.join("temp", req.file.filename));
    await image
      .resize(256, 256)
      .write(path.join("public", "avatars", "avatar-" + req.user + ".png"));
    req.avatarUrl = path.join(
      process.env.BASE_URL + "avatars",
      "avatar-" + req.user + ".png"
    );
    next();
  } catch (err) {
    console.error(err);
    next(err);
  }
};

module.exports = handleImage;
