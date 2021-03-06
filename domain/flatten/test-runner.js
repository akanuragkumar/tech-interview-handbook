const assert = require('assert');
const flattenRecursive = require('./flatten-recursive');
const flattenIterative = require('./flatten-recursive');

[flattenRecursive, flattenIterative].forEach((fn) => {
  assert.deepEqual(fn([1, 2, 3]), [1, 2, 3]);
  assert.deepEqual(fn([1, [2, 3]]), [1, 2, 3]);
  assert.deepEqual(fn([1, [2, 3], 4, [5, 6]]), [1, 2, 3, 4, 5, 6]);
  assert.deepEqual(fn([[2, 3, 5, 6]]), [2, 3, 5, 6]);
  assert.deepEqual(fn([[2, [3, 5], 6]]), [2, 3, 5, 6]);

  assert.deepEqual(fn([]), []);
  assert.deepEqual(fn([1, [2, 3], 4, 5]), [1, 2, 3, 4, 5]);
  assert.deepEqual(fn([1, [2, [3, [4]], 5]]), [1, 2, 3, 4, 5]);
  assert.deepEqual(fn([1, [2, 3], [4, 5]]), [1, 2, 3, 4, 5]);
  assert.deepEqual(fn([1, [[2, 3], [4, 5]]]), [1, 2, 3, 4, 5]);
});
