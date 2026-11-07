function isDuplicate(pageA, pageB) {
  return pageA.title === pageB.title && pageA.body === pageB.body;
}

module.exports = { isDuplicate };
