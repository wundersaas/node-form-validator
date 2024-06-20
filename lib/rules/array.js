module.exports = function array({ value }) {
  if (!value) return true;
  return Array.isArray(value);
};
