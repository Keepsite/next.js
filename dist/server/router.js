'use strict';

var cov_yjv624wi2 = function () {
  var path = '/Users/Daniel/Keepsite/custom_modules/next.js/server/router.js',
      hash = '3acf15e974def200e292ea24e82efc6d31091364',
      global = new Function('return this')(),
      gcv = '__coverage__',
      coverageData = {
    path: '/Users/Daniel/Keepsite/custom_modules/next.js/server/router.js',
    statementMap: {
      '0': {
        start: {
          line: 8,
          column: 4
        },
        end: {
          line: 8,
          column: 27
        }
      },
      '1': {
        start: {
          line: 12,
          column: 4
        },
        end: {
          line: 12,
          column: 29
        }
      },
      '2': {
        start: {
          line: 17,
          column: 4
        },
        end: {
          line: 17,
          column: 42
        }
      },
      '3': {
        start: {
          line: 18,
          column: 4
        },
        end: {
          line: 18,
          column: 35
        }
      },
      '4': {
        start: {
          line: 23,
          column: 4
        },
        end: {
          line: 23,
          column: 23
        }
      },
      '5': {
        start: {
          line: 23,
          column: 17
        },
        end: {
          line: 23,
          column: 23
        }
      },
      '6': {
        start: {
          line: 26,
          column: 4
        },
        end: {
          line: 33,
          column: 5
        }
      },
      '7': {
        start: {
          line: 28,
          column: 6
        },
        end: {
          line: 32,
          column: 7
        }
      },
      '8': {
        start: {
          line: 29,
          column: 8
        },
        end: {
          line: 31,
          column: 9
        }
      },
      '9': {
        start: {
          line: 30,
          column: 10
        },
        end: {
          line: 30,
          column: 39
        }
      }
    },
    fnMap: {
      '0': {
        name: '(anonymous_0)',
        decl: {
          start: {
            line: 7,
            column: 2
          },
          end: {
            line: 7,
            column: 3
          }
        },
        loc: {
          start: {
            line: 7,
            column: 17
          },
          end: {
            line: 9,
            column: 3
          }
        }
      },
      '1': {
        name: '(anonymous_1)',
        decl: {
          start: {
            line: 11,
            column: 2
          },
          end: {
            line: 11,
            column: 3
          }
        },
        loc: {
          start: {
            line: 11,
            column: 17
          },
          end: {
            line: 13,
            column: 3
          }
        }
      },
      '2': {
        name: '(anonymous_2)',
        decl: {
          start: {
            line: 15,
            column: 2
          },
          end: {
            line: 15,
            column: 3
          }
        },
        loc: {
          start: {
            line: 15,
            column: 25
          },
          end: {
            line: 19,
            column: 3
          }
        }
      },
      '3': {
        name: '(anonymous_3)',
        decl: {
          start: {
            line: 21,
            column: 2
          },
          end: {
            line: 21,
            column: 3
          }
        },
        loc: {
          start: {
            line: 21,
            column: 19
          },
          end: {
            line: 34,
            column: 3
          }
        }
      },
      '4': {
        name: '(anonymous_4)',
        decl: {
          start: {
            line: 29,
            column: 15
          },
          end: {
            line: 29,
            column: 16
          }
        },
        loc: {
          start: {
            line: 29,
            column: 27
          },
          end: {
            line: 31,
            column: 9
          }
        }
      }
    },
    branchMap: {
      '0': {
        loc: {
          start: {
            line: 16,
            column: 19
          },
          end: {
            line: 16,
            column: 55
          }
        },
        type: 'binary-expr',
        locations: [{
          start: {
            line: undefined,
            column: undefined
          },
          end: {
            line: undefined,
            column: undefined
          }
        }, {
          start: {
            line: undefined,
            column: undefined
          },
          end: {
            line: undefined,
            column: undefined
          }
        }]
      },
      '1': {
        loc: {
          start: {
            line: 23,
            column: 4
          },
          end: {
            line: 23,
            column: 23
          }
        },
        type: 'if',
        locations: [{
          start: {
            line: 23,
            column: 4
          },
          end: {
            line: 23,
            column: 23
          }
        }, {
          start: {
            line: 23,
            column: 4
          },
          end: {
            line: 23,
            column: 23
          }
        }]
      },
      '2': {
        loc: {
          start: {
            line: 28,
            column: 6
          },
          end: {
            line: 32,
            column: 7
          }
        },
        type: 'if',
        locations: [{
          start: {
            line: 28,
            column: 6
          },
          end: {
            line: 32,
            column: 7
          }
        }, {
          start: {
            line: 28,
            column: 6
          },
          end: {
            line: 32,
            column: 7
          }
        }]
      }
    },
    s: {
      '0': 0,
      '1': 0,
      '2': 0,
      '3': 0,
      '4': 0,
      '5': 0,
      '6': 0,
      '7': 0,
      '8': 0,
      '9': 0
    },
    f: {
      '0': 0,
      '1': 0,
      '2': 0,
      '3': 0,
      '4': 0
    },
    b: {
      '0': [0, 0],
      '1': [0, 0],
      '2': [0, 0]
    },
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

var _typeof2 = require('babel-runtime/helpers/typeof');

var _typeof3 = _interopRequireDefault(_typeof2);

var _getIterator2 = require('babel-runtime/core-js/get-iterator');

var _getIterator3 = _interopRequireDefault(_getIterator2);

var _set = require('babel-runtime/core-js/set');

var _set2 = _interopRequireDefault(_set);

var _map = require('babel-runtime/core-js/map');

var _map2 = _interopRequireDefault(_map);

var _classCallCheck2 = require('babel-runtime/helpers/classCallCheck');

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = require('babel-runtime/helpers/createClass');

var _createClass3 = _interopRequireDefault(_createClass2);

var cov_yjv624wi2 = function () {
  var path = '/Users/Daniel/Keepsite/custom_modules/next.js/server/router.js',
      hash = 'aa9824511b055d4cdb4beb20c1df3ac15fca706d',
      global = new Function('return this')(),
      gcv = '__coverage__',
      coverageData = {
    path: '/Users/Daniel/Keepsite/custom_modules/next.js/server/router.js',
    statementMap: {
      '0': {
        start: {
          line: 4,
          column: 14
        },
        end: {
          line: 4,
          column: 25
        }
      },
      '1': {
        start: {
          line: 8,
          column: 4
        },
        end: {
          line: 8,
          column: 27
        }
      },
      '2': {
        start: {
          line: 12,
          column: 4
        },
        end: {
          line: 12,
          column: 29
        }
      },
      '3': {
        start: {
          line: 16,
          column: 19
        },
        end: {
          line: 16,
          column: 55
        }
      },
      '4': {
        start: {
          line: 17,
          column: 4
        },
        end: {
          line: 17,
          column: 42
        }
      },
      '5': {
        start: {
          line: 18,
          column: 4
        },
        end: {
          line: 18,
          column: 35
        }
      },
      '6': {
        start: {
          line: 22,
          column: 19
        },
        end: {
          line: 22,
          column: 46
        }
      },
      '7': {
        start: {
          line: 23,
          column: 4
        },
        end: {
          line: 23,
          column: 23
        }
      },
      '8': {
        start: {
          line: 23,
          column: 17
        },
        end: {
          line: 23,
          column: 23
        }
      },
      '9': {
        start: {
          line: 25,
          column: 25
        },
        end: {
          line: 25,
          column: 39
        }
      },
      '10': {
        start: {
          line: 26,
          column: 4
        },
        end: {
          line: 33,
          column: 5
        }
      },
      '11': {
        start: {
          line: 27,
          column: 21
        },
        end: {
          line: 27,
          column: 38
        }
      },
      '12': {
        start: {
          line: 28,
          column: 6
        },
        end: {
          line: 32,
          column: 7
        }
      },
      '13': {
        start: {
          line: 29,
          column: 8
        },
        end: {
          line: 31,
          column: 9
        }
      },
      '14': {
        start: {
          line: 30,
          column: 10
        },
        end: {
          line: 30,
          column: 39
        }
      }
    },
    fnMap: {
      '0': {
        name: '(anonymous_0)',
        decl: {
          start: {
            line: 7,
            column: 2
          },
          end: {
            line: 7,
            column: 3
          }
        },
        loc: {
          start: {
            line: 7,
            column: 17
          },
          end: {
            line: 9,
            column: 3
          }
        }
      },
      '1': {
        name: '(anonymous_1)',
        decl: {
          start: {
            line: 11,
            column: 2
          },
          end: {
            line: 11,
            column: 3
          }
        },
        loc: {
          start: {
            line: 11,
            column: 17
          },
          end: {
            line: 13,
            column: 3
          }
        }
      },
      '2': {
        name: '(anonymous_2)',
        decl: {
          start: {
            line: 15,
            column: 2
          },
          end: {
            line: 15,
            column: 3
          }
        },
        loc: {
          start: {
            line: 15,
            column: 25
          },
          end: {
            line: 19,
            column: 3
          }
        }
      },
      '3': {
        name: '(anonymous_3)',
        decl: {
          start: {
            line: 21,
            column: 2
          },
          end: {
            line: 21,
            column: 3
          }
        },
        loc: {
          start: {
            line: 21,
            column: 19
          },
          end: {
            line: 34,
            column: 3
          }
        }
      },
      '4': {
        name: '(anonymous_4)',
        decl: {
          start: {
            line: 29,
            column: 15
          },
          end: {
            line: 29,
            column: 16
          }
        },
        loc: {
          start: {
            line: 29,
            column: 27
          },
          end: {
            line: 31,
            column: 9
          }
        }
      }
    },
    branchMap: {
      '0': {
        loc: {
          start: {
            line: 16,
            column: 19
          },
          end: {
            line: 16,
            column: 55
          }
        },
        type: 'binary-expr',
        locations: [{
          start: {
            line: 16,
            column: 19
          },
          end: {
            line: 16,
            column: 42
          }
        }, {
          start: {
            line: 16,
            column: 46
          },
          end: {
            line: 16,
            column: 55
          }
        }]
      },
      '1': {
        loc: {
          start: {
            line: 23,
            column: 4
          },
          end: {
            line: 23,
            column: 23
          }
        },
        type: 'if',
        locations: [{
          start: {
            line: 23,
            column: 4
          },
          end: {
            line: 23,
            column: 23
          }
        }, {
          start: {
            line: 23,
            column: 4
          },
          end: {
            line: 23,
            column: 23
          }
        }]
      },
      '2': {
        loc: {
          start: {
            line: 28,
            column: 6
          },
          end: {
            line: 32,
            column: 7
          }
        },
        type: 'if',
        locations: [{
          start: {
            line: 28,
            column: 6
          },
          end: {
            line: 32,
            column: 7
          }
        }, {
          start: {
            line: 28,
            column: 6
          },
          end: {
            line: 32,
            column: 7
          }
        }]
      }
    },
    s: {
      '0': 0,
      '1': 0,
      '2': 0,
      '3': 0,
      '4': 0,
      '5': 0,
      '6': 0,
      '7': 0,
      '8': 0,
      '9': 0,
      '10': 0,
      '11': 0,
      '12': 0,
      '13': 0,
      '14': 0
    },
    f: {
      '0': 0,
      '1': 0,
      '2': 0,
      '3': 0,
      '4': 0
    },
    b: {
      '0': [0, 0],
      '1': [0, 0],
      '2': [0, 0]
    },
    _coverageSchema: '332fd63041d2c1bcb487cc26dd0d5f7d97098a6c'
  },
      coverage = global[gcv] || (global[gcv] = {});

  if (coverage[path] && coverage[path].hash === hash) {
    return coverage[path];
  }

  coverageData.hash = hash;
  return coverage[path] = coverageData;
}();

var _url = require('url');

var _pathMatch = require('path-match');

var _pathMatch2 = _interopRequireDefault(_pathMatch);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var route = (++cov_yjv624wi2.s[0], (0, _pathMatch2.default)());

var Router = function () {
  function Router() {
    (0, _classCallCheck3.default)(this, Router);
    ++cov_yjv624wi2.f[0];
    ++cov_yjv624wi2.f[0];
    ++cov_yjv624wi2.s[1];
    ++cov_yjv624wi2.s[0];

    this.routes = new _map2.default();
  }

  (0, _createClass3.default)(Router, [{
    key: 'get',
    value: function get(path, fn) {
      ++cov_yjv624wi2.f[1];
      ++cov_yjv624wi2.f[1];
      ++cov_yjv624wi2.s[2];
      ++cov_yjv624wi2.s[1];

      this.add('GET', path, fn);
    }
  }, {
    key: 'add',
    value: function add(method, path, fn) {
      ++cov_yjv624wi2.f[2];
      ++cov_yjv624wi2.f[2];

      var routes = (++cov_yjv624wi2.s[3], (++cov_yjv624wi2.b[0][0], (++cov_yjv624wi2.b[0][0], this.routes.get(method))) || (++cov_yjv624wi2.b[0][1], (++cov_yjv624wi2.b[0][1], new _set2.default())));
      ++cov_yjv624wi2.s[4];
      ++cov_yjv624wi2.s[2];
      routes.add({ match: route(path), fn: fn });
      ++cov_yjv624wi2.s[5];
      ++cov_yjv624wi2.s[3];
      this.routes.set(method, routes);
    }
  }, {
    key: 'match',
    value: function match(req, res) {
      var _this = this;

      ++cov_yjv624wi2.f[3];
      ++cov_yjv624wi2.f[3];

      var routes = (++cov_yjv624wi2.s[6], this.routes.get(req.method));
      ++cov_yjv624wi2.s[7];
      ++cov_yjv624wi2.s[4];
      if (!routes) {
          ++cov_yjv624wi2.b[1][0];
          ++cov_yjv624wi2.b[1][0];
          ++cov_yjv624wi2.s[8];
          ++cov_yjv624wi2.s[5];
          return;
        } else {
        ++cov_yjv624wi2.b[1][1];
        ++cov_yjv624wi2.b[1][1];
      }
      var _ref = (++cov_yjv624wi2.s[9], (0, _url.parse)(req.url)),
          pathname = _ref.pathname;

      ++cov_yjv624wi2.s[10];
      ++cov_yjv624wi2.s[6];
      var _iteratorNormalCompletion = true;
      var _didIteratorError = false;
      var _iteratorError = undefined;

      try {
        var _loop = function _loop() {
          var r = _step.value;

          var params = (++cov_yjv624wi2.s[11], r.match(pathname));
          ++cov_yjv624wi2.s[12];
          ++cov_yjv624wi2.s[7];
          if (params) {
            ++cov_yjv624wi2.b[2][0];
            ++cov_yjv624wi2.b[2][0];
            ++cov_yjv624wi2.s[13];
            ++cov_yjv624wi2.s[8];

            return {
              v: function () {
                var _ref2 = (0, _asyncToGenerator3.default)(_regenerator2.default.mark(function _callee() {
                  return _regenerator2.default.wrap(function _callee$(_context) {
                    while (1) {
                      switch (_context.prev = _context.next) {
                        case 0:
                          ++cov_yjv624wi2.f[4];
                          ++cov_yjv624wi2.f[4];
                          ++cov_yjv624wi2.s[14];
                          ++cov_yjv624wi2.s[9];
                          return _context.abrupt('return', r.fn(req, res, params));

                        case 5:
                        case 'end':
                          return _context.stop();
                      }
                    }
                  }, _callee, _this);
                }));

                return function v() {
                  return _ref2.apply(this, arguments);
                };
              }()
            };
          } else {
            ++cov_yjv624wi2.b[2][1];
            ++cov_yjv624wi2.b[2][1];
          }
        };

        for (var _iterator = (0, _getIterator3.default)(routes), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
          var _ret = _loop();

          if ((typeof _ret === 'undefined' ? 'undefined' : (0, _typeof3.default)(_ret)) === "object") return _ret.v;
        }
      } catch (err) {
        _didIteratorError = true;
        _iteratorError = err;
      } finally {
        try {
          if (!_iteratorNormalCompletion && _iterator.return) {
            _iterator.return();
          }
        } finally {
          if (_didIteratorError) {
            throw _iteratorError;
          }
        }
      }
    }
  }]);
  return Router;
}();

exports.default = Router;