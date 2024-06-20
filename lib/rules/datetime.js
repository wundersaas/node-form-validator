const moment = require("moment");

module.exports = function date({ value }) {
  if (value && !moment(value, "YYYY-MM-DD HH:mm:ss", true).isValid()) {
    return false;
  }

  return true;
};
