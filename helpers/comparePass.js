const bcrypt = require("bcrypt");

const comparePass = async (pass1, pass2) => {
  return await bcrypt.compare(pass1, pass2);
};

module.exports = comparePass;
