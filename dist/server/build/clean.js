'use strict';

var cov_2htfqykza6 = function () {
  var path = '/Users/Daniel/Keepsite/custom_modules/next.js/server/build/clean.js',
      hash = '05e1f5db6d969b874cf3433d2e745177474a8823',
      global = new Function('return this')(),
      gcv = '__coverage__',
      coverageData = {
    path: '/Users/Daniel/Keepsite/custom_modules/next.js/server/build/clean.js',
    statementMap: {
      '0': {
        start: {
          line: 5,
          column: 2
        },
        end: {
          line: 5,
          column: 35
        }
      }
    },
    fnMap: {
      '0': {
        name: 'clean',
        decl: {
          start: {
            line: 4,
            column: 24
          },
          end: {
            line: 4,
            column: 29
          }
        },
        loc: {
          start: {
            line: 4,
            column: 36
          },
          end: {
            line: 6,
            column: 1
          }
        }
      }
    },
    branchMap: {},
    s: {
      '0': 0
    },
    f: {
      '0': 0
    },
    b: {},
    _coverageSchema: '332fd63041d2c1bcb487cc26dd0d5f7d97098a6c'
  },
      coverage = global[gcv] || (global[gcv] = {});

  if (coverage[path] && coverage[path].hash === hash) {
    return coverage[path];
  }

  coverageData.hash = hash;
  return coverage[path] = coverageData;
}();

Object.defineProperty(exports, "__esModule", {
  value: true
});

var cov_2htfqykza6 = function () {
  var path = '/Users/Daniel/Keepsite/custom_modules/next.js/server/build/clean.js',
      hash = '05e1f5db6d969b874cf3433d2e745177474a8823',
      global = new Function('return this')(),
      gcv = '__coverage__',
      coverageData = {
    path: '/Users/Daniel/Keepsite/custom_modules/next.js/server/build/clean.js',
    statementMap: {
      '0': {
        start: {
          line: 5,
          column: 2
        },
        end: {
          line: 5,
          column: 35
        }
      }
    },
    fnMap: {
      '0': {
        name: 'clean',
        decl: {
          start: {
            line: 4,
            column: 24
          },
          end: {
            line: 4,
            column: 29
          }
        },
        loc: {
          start: {
            line: 4,
            column: 36
          },
          end: {
            line: 6,
            column: 1
          }
        }
      }
    },
    branchMap: {},
    s: {
      '0': 0
    },
    f: {
      '0': 0
    },
    b: {},
    _coverageSchema: '332fd63041d2c1bcb487cc26dd0d5f7d97098a6c'
  },
      coverage = global[gcv] || (global[gcv] = {});

  if (coverage[path] && coverage[path].hash === hash) {
    return coverage[path];
  }

  coverageData.hash = hash;
  return coverage[path] = coverageData;
}();

exports.default = clean;

var _path = require('path');

var _del = require('del');

var _del2 = _interopRequireDefault(_del);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function clean(dir) {
  ++cov_2htfqykza6.f[0];
  ++cov_2htfqykza6.f[0];
  ++cov_2htfqykza6.s[0];
  ++cov_2htfqykza6.s[0];

  return (0, _del2.default)((0, _path.resolve)(dir, '.next'));
}