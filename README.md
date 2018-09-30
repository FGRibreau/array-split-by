<div align="center">
  <br><p><strong>splitBy</strong> - `splitBy(array, iteratee)`</p>
</div>

------------------------------------------------

[![Build Status](https://img.shields.io/circleci/project/FGRibreau/splitby.svg)](https://circleci.com/gh/FGRibreau/splitby/) [![Coverage Status](https://img.shields.io/coveralls/FGRibreau/splitby/master.svg)](https://coveralls.io/github/FGRibreau/splitby?branch=master) [![Deps](	https://img.shields.io/david/FGRibreau/splitby.svg)](https://david-dm.org/FGRibreau/splitby) [![NPM version](https://img.shields.io/npm/v/splitby.svg)](http://badge.fury.io/js/splitby) [![Downloads](http://img.shields.io/npm/dm/splitby.svg)](https://www.npmjs.com/package/splitby)

[![Get help on Codementor](https://cdn.codementor.io/badges/get_help_github.svg)](https://www.codementor.io/francois-guillaume-ribreau?utm_source=github&utm_medium=button&utm_term=francois-guillaume-ribreau&utm_campaign=github)  [![available-for-advisory](https://img.shields.io/badge/available%20for%20consulting%20advisory-yes-ff69b4.svg?)](http://bit.ly/2c7uFJq) ![extra](https://img.shields.io/badge/actively%20maintained-yes-ff69b4.svg)

<!-- ![NPM](https://nodei.co/npm/splitby.png?downloadRank=true) ![NPM](https://nodei.co/npm-dl/splitby.png?months=3&height=2) -->

## Usage

Like [String.prototype.split](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/split) except that it works on array and accepts an iteratee which is invoked for each element in array to generate the criterion by which the separation is computed. The order of result values is determined by the order they occur in the array. The iteratee is invoked with three argument: `(value, index, chunk, array)`

## ❤️ Shameless plug
- [**Charts, simple as a URL**. No more server-side rendering pain, 1 url = 1 chart](https://image-charts.com)
- [Looking for a free **Redis GUI**?](http://redsmin.com) [Or for **real-time alerting** & monitoring for Redis?](http://redsmin.com)
- [**Mailpopin**](https://mailpop.in/) - **Stripe** payment emails you can actually use

## Installation

Install with [npm](https://npmjs.org/package/splitby).

    npm install --save array-split-by


### Example

```javascript
const splitBy = require('splitby');

splitBy([1, 2, 3, "|", 4, 5, 6], val => val === "|"); // [[1, 2, 3], [4, 5, 6]]

splitBy([1, 2, 3], val => val % 2 === 0); // [[1], [3]]

splitBy([{x:0, a:true}, {x:1, a:true}, {x:2, a:false}, {x:1, a:true}], (val) => !val.a); // [[{"a": true, "x": 0}, {"a": true, "x": 1}], [{"a": true, "x": 1}]
```


## [Changelog](CHANGELOG.md)

## CI

- set the env. variable `COVERALLS_REPO_TOKEN`, create it with: https://coveralls.io/


## You want to support my work?

I maintain this project in my free time, if it helped you, well, I would be grateful to buy a beer thanks to your [paypal](https://paypal.me/fgribreau) or [Bitcoins](https://www.coinbase.com/fgribreau), donation!

[Francois-Guillaume Ribreau](http://fgribreau.com) (npm@fgribreau.com)
