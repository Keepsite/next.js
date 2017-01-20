'use strict';

var cov_k4apgit12 = function () {
  var path = '/Users/Daniel/Keepsite/custom_modules/next.js/lib/css.js',
      hash = 'b95d5fb86a17c8fd0e62862c46eaa3f3c03c6abb',
      global = new Function('return this')(),
      gcv = '__coverage__',
      coverageData = {
    path: '/Users/Daniel/Keepsite/custom_modules/next.js/lib/css.js',
    statementMap: {
      '0': {
        start: {
          line: 13,
          column: 0
        },
        end: {
          line: 13,
          column: 23
        }
      },
      '1': {
        start: {
          line: 14,
          column: 0
        },
        end: {
          line: 18,
          column: 2
        }
      },
      '2': {
        start: {
          line: 15,
          column: 2
        },
        end: {
          line: 17,
          column: 3
        }
      },
      '3': {
        start: {
          line: 16,
          column: 4
        },
        end: {
          line: 16,
          column: 31
        }
      },
      '4': {
        start: {
          line: 20,
          column: 0
        },
        end: {
          line: 20,
          column: 20
        }
      }
    },
    fnMap: {
      '0': {
        name: '(anonymous_0)',
        decl: {
          start: {
            line: 14,
            column: 25
          },
          end: {
            line: 14,
            column: 26
          }
        },
        loc: {
          start: {
            line: 14,
            column: 32
          },
          end: {
            line: 18,
            column: 1
          }
        }
      }
    },
    branchMap: {
      '0': {
        loc: {
          start: {
            line: 15,
            column: 2
          },
          end: {
            line: 17,
            column: 3
          }
        },
        type: 'if',
        locations: [{
          start: {
            line: 15,
            column: 2
          },
          end: {
            line: 17,
            column: 3
          }
        }, {
          start: {
            line: 15,
            column: 2
          },
          end: {
            line: 17,
            column: 3
          }
        }]
      }
    },
    s: {
      '0': 0,
      '1': 0,
      '2': 0,
      '3': 0,
      '4': 0
    },
    f: {
      '0': 0
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

var _keys = require('babel-runtime/core-js/object/keys');

var _keys2 = _interopRequireDefault(_keys);

var cov_k4apgit12 = function () {
  var path = '/Users/Daniel/Keepsite/custom_modules/next.js/lib/css.js',
      hash = '0ed16cdda580c6ecf37cf079555105e3c26d9529',
      global = new Function('return this')(),
      gcv = '__coverage__',
      coverageData = {
    path: '/Users/Daniel/Keepsite/custom_modules/next.js/lib/css.js',
    statementMap: {
      '0': {
        start: {
          line: 1,
          column: 12
        },
        end: {
          line: 1,
          column: 29
        }
      },
      '1': {
        start: {
          line: 13,
          column: 0
        },
        end: {
          line: 13,
          column: 23
        }
      },
      '2': {
        start: {
          line: 14,
          column: 0
        },
        end: {
          line: 18,
          column: 2
        }
      },
      '3': {
        start: {
          line: 15,
          column: 2
        },
        end: {
          line: 17,
          column: 3
        }
      },
      '4': {
        start: {
          line: 16,
          column: 4
        },
        end: {
          line: 16,
          column: 31
        }
      },
      '5': {
        start: {
          line: 20,
          column: 0
        },
        end: {
          line: 20,
          column: 20
        }
      }
    },
    fnMap: {
      '0': {
        name: '(anonymous_0)',
        decl: {
          start: {
            line: 14,
            column: 25
          },
          end: {
            line: 14,
            column: 26
          }
        },
        loc: {
          start: {
            line: 14,
            column: 32
          },
          end: {
            line: 18,
            column: 1
          }
        }
      }
    },
    branchMap: {
      '0': {
        loc: {
          start: {
            line: 15,
            column: 2
          },
          end: {
            line: 17,
            column: 3
          }
        },
        type: 'if',
        locations: [{
          start: {
            line: 15,
            column: 2
          },
          end: {
            line: 17,
            column: 3
          }
        }, {
          start: {
            line: 15,
            column: 2
          },
          end: {
            line: 17,
            column: 3
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
      '5': 0
    },
    f: {
      '0': 0
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

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var css = (++cov_k4apgit12.s[0], require('glamor'));

/**
 * Expose style as default and the whole object as properties
 * so it can be used as follows:
 *
 * import css, { merge } from 'next/css'
 * css({ color: 'red' })
 * merge({ color: 'green' })
 * css.merge({ color: 'blue' })
 */

++cov_k4apgit12.s[1];
++cov_k4apgit12.s[0];
css.default = css.style;
++cov_k4apgit12.s[2];
++cov_k4apgit12.s[1];
(0, _keys2.default)(css).forEach(function (key) {
  ++cov_k4apgit12.f[0];
  ++cov_k4apgit12.f[0];
  ++cov_k4apgit12.s[3];
  ++cov_k4apgit12.s[2];

  if (key !== 'default') {
    ++cov_k4apgit12.b[0][0];
    ++cov_k4apgit12.b[0][0];
    ++cov_k4apgit12.s[4];
    ++cov_k4apgit12.s[3];

    css.default[key] = css[key];
  } else {
    ++cov_k4apgit12.b[0][1];
    ++cov_k4apgit12.b[0][1];
  }
});

++cov_k4apgit12.s[5];
++cov_k4apgit12.s[4];
module.exports = css;