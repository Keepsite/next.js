'use strict';

var cov_152bdcuj2r = function () {
  var path = '/Users/Daniel/Keepsite/custom_modules/next.js/server/require.js',
      hash = 'bd9fb726bee5abc43dfe2026199ffb73520eefb8',
      global = new Function('return this')(),
      gcv = '__coverage__',
      coverageData = {
    path: '/Users/Daniel/Keepsite/custom_modules/next.js/server/require.js',
    statementMap: {
      '0': {
        start: {
          line: 5,
          column: 2
        },
        end: {
          line: 5,
          column: 19
        }
      }
    },
    fnMap: {
      '0': {
        name: 'requireModule',
        decl: {
          start: {
            line: 3,
            column: 30
          },
          end: {
            line: 3,
            column: 43
          }
        },
        loc: {
          start: {
            line: 3,
            column: 51
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

var _regenerator = require('babel-runtime/regenerator');

var _regenerator2 = _interopRequireDefault(_regenerator);

var _asyncToGenerator2 = require('babel-runtime/helpers/asyncToGenerator');

var _asyncToGenerator3 = _interopRequireDefault(_asyncToGenerator2);

var cov_152bdcuj2r = function () {
  var path = '/Users/Daniel/Keepsite/custom_modules/next.js/server/require.js',
      hash = '9988e5bfdf6af9e3cc3780f16d676aa56a084b58',
      global = new Function('return this')(),
      gcv = '__coverage__',
      coverageData = {
    path: '/Users/Daniel/Keepsite/custom_modules/next.js/server/require.js',
    statementMap: {
      '0': {
        start: {
          line: 4,
          column: 12
        },
        end: {
          line: 4,
          column: 31
        }
      },
      '1': {
        start: {
          line: 5,
          column: 2
        },
        end: {
          line: 5,
          column: 19
        }
      }
    },
    fnMap: {
      '0': {
        name: 'requireModule',
        decl: {
          start: {
            line: 3,
            column: 30
          },
          end: {
            line: 3,
            column: 43
          }
        },
        loc: {
          start: {
            line: 3,
            column: 51
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
      '0': 0,
      '1': 0
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

var _resolve = require('./resolve');

var _resolve2 = _interopRequireDefault(_resolve);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function () {
  var _ref = (0, _asyncToGenerator3.default)(_regenerator2.default.mark(function _callee(path) {
    var f;
    return _regenerator2.default.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            ++cov_152bdcuj2r.f[0];
            ++cov_152bdcuj2r.f[0];
            ++cov_152bdcuj2r.s[0];
            _context.next = 5;
            return (0, _resolve2.default)(path);

          case 5:
            f = _context.sent;
            ++cov_152bdcuj2r.s[1];
            ++cov_152bdcuj2r.s[0];
            return _context.abrupt('return', require(f));

          case 9:
          case 'end':
            return _context.stop();
        }
      }
    }, _callee, this);
  }));

  function requireModule(_x) {
    return _ref.apply(this, arguments);
  }

  return requireModule;
}();