'use strict';

var cov_162lqfmxou = function () {
  var path = '/Users/Daniel/Keepsite/custom_modules/next.js/server/build/plugins/unlink-file-plugin.js',
      hash = '066d28d61f357d173c1b8052bc45548fb77defab',
      global = new Function('return this')(),
      gcv = '__coverage__',
      coverageData = {
    path: '/Users/Daniel/Keepsite/custom_modules/next.js/server/build/plugins/unlink-file-plugin.js',
    statementMap: {
      '0': {
        start: {
          line: 6,
          column: 4
        },
        end: {
          line: 6,
          column: 24
        }
      },
      '1': {
        start: {
          line: 10,
          column: 4
        },
        end: {
          line: 26,
          column: 6
        }
      },
      '2': {
        start: {
          line: 12,
          column: 21
        },
        end: {
          line: 12,
          column: 43
        }
      },
      '3': {
        start: {
          line: 14,
          column: 6
        },
        end: {
          line: 14,
          column: 42
        }
      },
      '4': {
        start: {
          line: 16,
          column: 6
        },
        end: {
          line: 25,
          column: 39
        }
      },
      '5': {
        start: {
          line: 18,
          column: 8
        },
        end: {
          line: 23,
          column: 9
        }
      },
      '6': {
        start: {
          line: 19,
          column: 10
        },
        end: {
          line: 19,
          column: 28
        }
      },
      '7': {
        start: {
          line: 21,
          column: 10
        },
        end: {
          line: 21,
          column: 43
        }
      },
      '8': {
        start: {
          line: 21,
          column: 37
        },
        end: {
          line: 21,
          column: 43
        }
      },
      '9': {
        start: {
          line: 22,
          column: 10
        },
        end: {
          line: 22,
          column: 19
        }
      },
      '10': {
        start: {
          line: 25,
          column: 18
        },
        end: {
          line: 25,
          column: 28
        }
      }
    },
    fnMap: {
      '0': {
        name: '(anonymous_0)',
        decl: {
          start: {
            line: 5,
            column: 2
          },
          end: {
            line: 5,
            column: 3
          }
        },
        loc: {
          start: {
            line: 5,
            column: 17
          },
          end: {
            line: 7,
            column: 3
          }
        }
      },
      '1': {
        name: '(anonymous_1)',
        decl: {
          start: {
            line: 9,
            column: 2
          },
          end: {
            line: 9,
            column: 3
          }
        },
        loc: {
          start: {
            line: 9,
            column: 19
          },
          end: {
            line: 27,
            column: 3
          }
        }
      },
      '2': {
        name: '(anonymous_2)',
        decl: {
          start: {
            line: 10,
            column: 34
          },
          end: {
            line: 10,
            column: 35
          }
        },
        loc: {
          start: {
            line: 10,
            column: 61
          },
          end: {
            line: 26,
            column: 5
          }
        }
      },
      '3': {
        name: '(anonymous_3)',
        decl: {
          start: {
            line: 12,
            column: 14
          },
          end: {
            line: 12,
            column: 15
          }
        },
        loc: {
          start: {
            line: 12,
            column: 21
          },
          end: {
            line: 12,
            column: 43
          }
        }
      },
      '4': {
        name: '(anonymous_4)',
        decl: {
          start: {
            line: 16,
            column: 30
          },
          end: {
            line: 16,
            column: 31
          }
        },
        loc: {
          start: {
            line: 16,
            column: 43
          },
          end: {
            line: 24,
            column: 7
          }
        }
      },
      '5': {
        name: '(anonymous_5)',
        decl: {
          start: {
            line: 25,
            column: 12
          },
          end: {
            line: 25,
            column: 13
          }
        },
        loc: {
          start: {
            line: 25,
            column: 18
          },
          end: {
            line: 25,
            column: 28
          }
        }
      }
    },
    branchMap: {
      '0': {
        loc: {
          start: {
            line: 21,
            column: 10
          },
          end: {
            line: 21,
            column: 43
          }
        },
        type: 'if',
        locations: [{
          start: {
            line: 21,
            column: 10
          },
          end: {
            line: 21,
            column: 43
          }
        }, {
          start: {
            line: 21,
            column: 10
          },
          end: {
            line: 21,
            column: 43
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
      '10': 0
    },
    f: {
      '0': 0,
      '1': 0,
      '2': 0,
      '3': 0,
      '4': 0,
      '5': 0
    },
    b: {
      '0': [0, 0]
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

var _promise = require('babel-runtime/core-js/promise');

var _promise2 = _interopRequireDefault(_promise);

var _keys = require('babel-runtime/core-js/object/keys');

var _keys2 = _interopRequireDefault(_keys);

var _classCallCheck2 = require('babel-runtime/helpers/classCallCheck');

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = require('babel-runtime/helpers/createClass');

var _createClass3 = _interopRequireDefault(_createClass2);

var cov_162lqfmxou = function () {
  var path = '/Users/Daniel/Keepsite/custom_modules/next.js/server/build/plugins/unlink-file-plugin.js',
      hash = 'ad227ebf2dbd90a81e6169f420c7a8de9c3a38e0',
      global = new Function('return this')(),
      gcv = '__coverage__',
      coverageData = {
    path: '/Users/Daniel/Keepsite/custom_modules/next.js/server/build/plugins/unlink-file-plugin.js',
    statementMap: {
      '0': {
        start: {
          line: 6,
          column: 4
        },
        end: {
          line: 6,
          column: 24
        }
      },
      '1': {
        start: {
          line: 10,
          column: 4
        },
        end: {
          line: 26,
          column: 6
        }
      },
      '2': {
        start: {
          line: 11,
          column: 22
        },
        end: {
          line: 12,
          column: 44
        }
      },
      '3': {
        start: {
          line: 12,
          column: 21
        },
        end: {
          line: 12,
          column: 43
        }
      },
      '4': {
        start: {
          line: 14,
          column: 6
        },
        end: {
          line: 14,
          column: 42
        }
      },
      '5': {
        start: {
          line: 16,
          column: 6
        },
        end: {
          line: 25,
          column: 39
        }
      },
      '6': {
        start: {
          line: 17,
          column: 21
        },
        end: {
          line: 17,
          column: 49
        }
      },
      '7': {
        start: {
          line: 18,
          column: 8
        },
        end: {
          line: 23,
          column: 9
        }
      },
      '8': {
        start: {
          line: 19,
          column: 10
        },
        end: {
          line: 19,
          column: 28
        }
      },
      '9': {
        start: {
          line: 21,
          column: 10
        },
        end: {
          line: 21,
          column: 43
        }
      },
      '10': {
        start: {
          line: 21,
          column: 37
        },
        end: {
          line: 21,
          column: 43
        }
      },
      '11': {
        start: {
          line: 22,
          column: 10
        },
        end: {
          line: 22,
          column: 19
        }
      },
      '12': {
        start: {
          line: 25,
          column: 18
        },
        end: {
          line: 25,
          column: 28
        }
      }
    },
    fnMap: {
      '0': {
        name: '(anonymous_0)',
        decl: {
          start: {
            line: 5,
            column: 2
          },
          end: {
            line: 5,
            column: 3
          }
        },
        loc: {
          start: {
            line: 5,
            column: 17
          },
          end: {
            line: 7,
            column: 3
          }
        }
      },
      '1': {
        name: '(anonymous_1)',
        decl: {
          start: {
            line: 9,
            column: 2
          },
          end: {
            line: 9,
            column: 3
          }
        },
        loc: {
          start: {
            line: 9,
            column: 19
          },
          end: {
            line: 27,
            column: 3
          }
        }
      },
      '2': {
        name: '(anonymous_2)',
        decl: {
          start: {
            line: 10,
            column: 34
          },
          end: {
            line: 10,
            column: 35
          }
        },
        loc: {
          start: {
            line: 10,
            column: 61
          },
          end: {
            line: 26,
            column: 5
          }
        }
      },
      '3': {
        name: '(anonymous_3)',
        decl: {
          start: {
            line: 12,
            column: 14
          },
          end: {
            line: 12,
            column: 15
          }
        },
        loc: {
          start: {
            line: 12,
            column: 21
          },
          end: {
            line: 12,
            column: 43
          }
        }
      },
      '4': {
        name: '(anonymous_4)',
        decl: {
          start: {
            line: 16,
            column: 30
          },
          end: {
            line: 16,
            column: 31
          }
        },
        loc: {
          start: {
            line: 16,
            column: 43
          },
          end: {
            line: 24,
            column: 7
          }
        }
      },
      '5': {
        name: '(anonymous_5)',
        decl: {
          start: {
            line: 25,
            column: 12
          },
          end: {
            line: 25,
            column: 13
          }
        },
        loc: {
          start: {
            line: 25,
            column: 18
          },
          end: {
            line: 25,
            column: 28
          }
        }
      }
    },
    branchMap: {
      '0': {
        loc: {
          start: {
            line: 21,
            column: 10
          },
          end: {
            line: 21,
            column: 43
          }
        },
        type: 'if',
        locations: [{
          start: {
            line: 21,
            column: 10
          },
          end: {
            line: 21,
            column: 43
          }
        }, {
          start: {
            line: 21,
            column: 10
          },
          end: {
            line: 21,
            column: 43
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
      '12': 0
    },
    f: {
      '0': 0,
      '1': 0,
      '2': 0,
      '3': 0,
      '4': 0,
      '5': 0
    },
    b: {
      '0': [0, 0]
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

var _path = require('path');

var _fs = require('mz/fs');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var UnlinkFilePlugin = function () {
  function UnlinkFilePlugin() {
    (0, _classCallCheck3.default)(this, UnlinkFilePlugin);
    ++cov_162lqfmxou.f[0];
    ++cov_162lqfmxou.f[0];
    ++cov_162lqfmxou.s[0];
    ++cov_162lqfmxou.s[0];

    this.prevAssets = {};
  }

  (0, _createClass3.default)(UnlinkFilePlugin, [{
    key: 'apply',
    value: function apply(compiler) {
      var _this = this;

      ++cov_162lqfmxou.f[1];
      ++cov_162lqfmxou.f[1];
      ++cov_162lqfmxou.s[1];
      ++cov_162lqfmxou.s[1];

      compiler.plugin('after-emit', function (compilation, callback) {
        ++cov_162lqfmxou.f[2];
        ++cov_162lqfmxou.f[2];

        var removed = (++cov_162lqfmxou.s[2], (0, _keys2.default)(_this.prevAssets).filter(function (a) {
          ++cov_162lqfmxou.f[3];
          ++cov_162lqfmxou.f[3];
          ++cov_162lqfmxou.s[3];
          ++cov_162lqfmxou.s[2];
          return !compilation.assets[a];
        }));

        ++cov_162lqfmxou.s[4];
        ++cov_162lqfmxou.s[3];
        _this.prevAssets = compilation.assets;

        ++cov_162lqfmxou.s[5];
        ++cov_162lqfmxou.s[4];
        _promise2.default.all(removed.map(function () {
          var _ref = (0, _asyncToGenerator3.default)(_regenerator2.default.mark(function _callee(f) {
            var path;
            return _regenerator2.default.wrap(function _callee$(_context) {
              while (1) {
                switch (_context.prev = _context.next) {
                  case 0:
                    ++cov_162lqfmxou.f[4];
                    ++cov_162lqfmxou.f[4];
                    path = (++cov_162lqfmxou.s[6], (0, _path.join)(compiler.outputPath, f));
                    ++cov_162lqfmxou.s[7];
                    ++cov_162lqfmxou.s[5];
                    _context.prev = 5;
                    ++cov_162lqfmxou.s[8];
                    ++cov_162lqfmxou.s[6];
                    _context.next = 10;
                    return (0, _fs.unlink)(path);

                  case 10:
                    _context.next = 29;
                    break;

                  case 12:
                    _context.prev = 12;
                    _context.t0 = _context['catch'](5);
                    ++cov_162lqfmxou.s[9];
                    ++cov_162lqfmxou.s[7];

                    if (!(_context.t0.code === 'ENOENT')) {
                      _context.next = 24;
                      break;
                    }

                    ++cov_162lqfmxou.b[0][0];
                    ++cov_162lqfmxou.b[0][0];
                    ++cov_162lqfmxou.s[10];
                    ++cov_162lqfmxou.s[8];
                    return _context.abrupt('return');

                  case 24:
                    ++cov_162lqfmxou.b[0][1];
                    ++cov_162lqfmxou.b[0][1];

                  case 26:
                    ++cov_162lqfmxou.s[11];
                    ++cov_162lqfmxou.s[9];
                    throw _context.t0;

                  case 29:
                  case 'end':
                    return _context.stop();
                }
              }
            }, _callee, _this, [[5, 12]]);
          }));

          return function (_x) {
            return _ref.apply(this, arguments);
          };
        }())).then(function () {
          ++cov_162lqfmxou.f[5];
          ++cov_162lqfmxou.f[5];
          ++cov_162lqfmxou.s[12];
          ++cov_162lqfmxou.s[10];
          return callback();
        }, callback);
      });
    }
  }]);
  return UnlinkFilePlugin;
}();

exports.default = UnlinkFilePlugin;