module.exports = function object({ value }) {
  if (!value) return true;

  return value.constructor === Object;
};
