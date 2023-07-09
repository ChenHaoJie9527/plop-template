function bigHumpCheck(fileName) {
  const reg = /^[A-Z][a-zA-Z]*$/;
  return reg.test(fileName);
}

module.exports = bigHumpCheck;
