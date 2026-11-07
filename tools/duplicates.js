function isDuplicate(pageA, pageB) {
  return pageA.title === pageA.title && pageA.body === pageB.body;
}

module.exports = { isDuplicate };
