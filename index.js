"use strict";

/*
 * Request
 *
 * Copyright(c) 2018 Francois-Guillaume Ribreau <npm@fgribreau.com>
 * MIT Licensed
 *
 */

module.exports = function(array, iteratee) {
  if (!Array.isArray(array)) {
    throw new TypeError(
      "splitBy(array, iteratee), first parameter must be an array"
    );
  }

  if (typeof iteratee !== "function") {
    throw new TypeError(
      "splitBy(array, iteratee), second parameter must be a function"
    );
  }

  const memo = {
    // result
    output: [[]],
    // current chunk, ref to the last inner-array in output array
    chunk: []
  };
  memo.chunk = memo.output[0];

  return array.reduce((memo, val, index) => {
    if (iteratee(val, index, memo.chunk, array)) {
      memo.chunk = [];
      memo.output.push(memo.chunk);
    } else {
      memo.chunk.push(val);
    }

    return memo;
  }, memo).output;
};
