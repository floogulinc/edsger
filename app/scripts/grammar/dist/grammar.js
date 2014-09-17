parser = (function() {
  /*
   * Generated by PEG.js 0.8.0.
   *
   * http://pegjs.majda.cz/
   */

  function peg$subclass(child, parent) {
    function Ctor() { this.constructor = child; }
    Ctor.prototype = parent.prototype;
    child.prototype = new Ctor();
  }

  function SyntaxError(message, expected, found, offset, line, column) {
    this.message  = message;
    this.expected = expected;
    this.found    = found;
    this.offset   = offset;
    this.line     = line;
    this.column   = column;

    this.name     = 'SyntaxError';
  }

  peg$subclass(SyntaxError, Error);

  function parse(input) {
    var options = arguments.length > 1 ? arguments[1] : {},

        peg$FAILED = {},

        peg$startRuleFunctions = { expr: peg$parseexpr },
        peg$startRuleFunction  = peg$parseexpr,

        peg$c0 = peg$FAILED,
        peg$c1 = function(equiv) { return equiv; },
        peg$c2 = { type: 'other', description: 'whitespace' },
        peg$c3 = [],
        peg$c4 = /^[ \t\r\n]/,
        peg$c5 = { type: 'class', value: '[ \\t\\r\\n]', description: '[ \\t\\r\\n]' },
        peg$c6 = { type: 'other', description: 'expression' },
        peg$c7 = function(left, right) { return binary({ op : '≡', left : left, right : right }); },
        peg$c8 = '===',
        peg$c9 = { type: 'literal', value: '===', description: '\'===\'' },
        peg$c10 = '\u2261',
        peg$c11 = { type: 'literal', value: '\u2261', description: '\'\\u2261\'' },
        peg$c12 = { type: 'other', description: 'AND/OR' },
        peg$c13 = /^[|&\u2227\u2228]/,
        peg$c14 = { type: 'class', value: '[|&\\u2227\\u2228]', description: '[|&\\u2227\\u2228]' },
        peg$c15 = function(left, binOp, right) { return binary({ op : normalizeOp(binOp), left : left, right : right }); },
        peg$c16 = /^[\xAC!]/,
        peg$c17 = { type: 'class', value: '[\\xAC!]', description: '[\\xAC!]' },
        peg$c18 = function(op, e) { return unary({ op : normalizeOp(op), expr : e }); },
        peg$c19 = { type: 'other', description: 'substitution' },
        peg$c20 = function(expr, subst) { return expr.applySubstitutions(subst); },
        peg$c21 = '[',
        peg$c22 = { type: 'literal', value: '[', description: '\'[\'' },
        peg$c23 = ',',
        peg$c24 = { type: 'literal', value: ',', description: '\',\'' },
        peg$c25 = ':=',
        peg$c26 = { type: 'literal', value: ':=', description: '\':=\'' },
        peg$c27 = ']',
        peg$c28 = { type: 'literal', value: ']', description: '\']\'' },
        peg$c29 = function(replacedVars, replacements) { return { 'varsToReplace' : makeList(replacedVars), 'replacementExprs' : makeList(replacements) }; },
        peg$c30 = '(',
        peg$c31 = { type: 'literal', value: '(', description: '\'(\'' },
        peg$c32 = ')',
        peg$c33 = { type: 'literal', value: ')', description: '\')\'' },
        peg$c34 = function(e) { return e; },
        peg$c35 = { type: 'other', description: 'variable' },
        peg$c36 = /^[A-Za-z]/,
        peg$c37 = { type: 'class', value: '[A-Za-z]', description: '[A-Za-z]' },
        peg$c38 = /^[A-Za-z0-9_]/,
        peg$c39 = { type: 'class', value: '[A-Za-z0-9_]', description: '[A-Za-z0-9_]' },
        peg$c40 = function(chars) { return variable({name : chars[0] + chars[1].join('')}); },
        peg$c41 = { type: 'other', description: 'integer' },
        peg$c42 = /^[0-9]/,
        peg$c43 = { type: 'class', value: '[0-9]', description: '[0-9]' },
        peg$c44 = function(digits) { return parseInt(digits.join(''), 10); },

        peg$currPos          = 0,
        peg$reportedPos      = 0,
        peg$cachedPos        = 0,
        peg$cachedPosDetails = { line: 1, column: 1, seenCR: false },
        peg$maxFailPos       = 0,
        peg$maxFailExpected  = [],
        peg$silentFails      = 0,

        peg$result;

    if ('startRule' in options) {
      if (!(options.startRule in peg$startRuleFunctions)) {
        throw new Error('Cant start parsing from rule \'' + options.startRule + '\'.');
      }

      peg$startRuleFunction = peg$startRuleFunctions[options.startRule];
    }

    function text() {
      return input.substring(peg$reportedPos, peg$currPos);
    }

    function offset() {
      return peg$reportedPos;
    }

    function line() {
      return peg$computePosDetails(peg$reportedPos).line;
    }

    function column() {
      return peg$computePosDetails(peg$reportedPos).column;
    }

    function expected(description) {
      throw peg$buildException(
        null,
        [{ type: 'other', description: description }],
        peg$reportedPos
      );
    }

    function error(message) {
      throw peg$buildException(message, null, peg$reportedPos);
    }

    function peg$computePosDetails(pos) {
      function advance(details, startPos, endPos) {
        var p, ch;

        for (p = startPos; p < endPos; p++) {
          ch = input.charAt(p);
          if (ch === '\n') {
            if (!details.seenCR) { details.line++; }
            details.column = 1;
            details.seenCR = false;
          } else if (ch === '\r' || ch === '\u2028' || ch === '\u2029') {
            details.line++;
            details.column = 1;
            details.seenCR = true;
          } else {
            details.column++;
            details.seenCR = false;
          }
        }
      }

      if (peg$cachedPos !== pos) {
        if (peg$cachedPos > pos) {
          peg$cachedPos = 0;
          peg$cachedPosDetails = { line: 1, column: 1, seenCR: false };
        }
        advance(peg$cachedPosDetails, peg$cachedPos, pos);
        peg$cachedPos = pos;
      }

      return peg$cachedPosDetails;
    }

    function peg$fail(expected) {
      if (peg$currPos < peg$maxFailPos) { return; }

      if (peg$currPos > peg$maxFailPos) {
        peg$maxFailPos = peg$currPos;
        peg$maxFailExpected = [];
      }

      peg$maxFailExpected.push(expected);
    }

    function peg$buildException(message, expected, pos) {
      function cleanupExpected(expected) {
        var i = 1;

        expected.sort(function(a, b) {
          if (a.description < b.description) {
            return -1;
          } else if (a.description > b.description) {
            return 1;
          } else {
            return 0;
          }
        });

        while (i < expected.length) {
          if (expected[i - 1] === expected[i]) {
            expected.splice(i, 1);
          } else {
            i++;
          }
        }
      }

      function buildMessage(expected, found) {
        function stringEscape(s) {
          function hex(ch) { return ch.charCodeAt(0).toString(16).toUpperCase(); }

          return s
            .replace(/\\/g,   '\\\\')
            .replace(/'/g,    "\\'")
            .replace(/\x08/g, '\\b')
            .replace(/\t/g,   '\\t')
            .replace(/\n/g,   '\\n')
            .replace(/\f/g,   '\\f')
            .replace(/\r/g,   '\\r')
            .replace(/[\x00-\x07\x0B\x0E\x0F]/g, function(ch) { return '\\x0' + hex(ch); })
            .replace(/[\x10-\x1F\x80-\xFF]/g,    function(ch) { return '\\x'  + hex(ch); })
            .replace(/[\u0180-\u0FFF]/g,         function(ch) { return '\\u0' + hex(ch); })
            .replace(/[\u1080-\uFFFF]/g,         function(ch) { return '\\u'  + hex(ch); });
        }

        var expectedDescs = new Array(expected.length),
            expectedDesc, foundDesc, i;

        for (i = 0; i < expected.length; i++) {
          expectedDescs[i] = expected[i].description;
        }

        expectedDesc = expected.length > 1
          ? expectedDescs.slice(0, -1).join(', ')
              + ' or '
              + expectedDescs[expected.length - 1]
          : expectedDescs[0];

        foundDesc = found ? '\'' + stringEscape(found) + '\'' : 'end of input';

        return 'Expected ' + expectedDesc + ' but ' + foundDesc + ' found.';
      }

      var posDetails = peg$computePosDetails(pos),
          found      = pos < input.length ? input.charAt(pos) : null;

      if (expected !== null) {
        cleanupExpected(expected);
      }

      return new SyntaxError(
        message !== null ? message : buildMessage(expected, found),
        expected,
        found,
        pos,
        posDetails.line,
        posDetails.column
      );
    }

    function peg$parseexpr() {
      var s0, s1, s2, s3;

      s0 = peg$currPos;
      s1 = peg$parse_();
      if (s1 !== peg$FAILED) {
        s2 = peg$parseequiv();
        if (s2 !== peg$FAILED) {
          s3 = peg$parse_();
          if (s3 !== peg$FAILED) {
            peg$reportedPos = s0;
            s1 = peg$c1(s2);
            s0 = s1;
          } else {
            peg$currPos = s0;
            s0 = peg$c0;
          }
        } else {
          peg$currPos = s0;
          s0 = peg$c0;
        }
      } else {
        peg$currPos = s0;
        s0 = peg$c0;
      }

      return s0;
    }

    function peg$parse_() {
      var s0, s1;

      peg$silentFails++;
      s0 = [];
      if (peg$c4.test(input.charAt(peg$currPos))) {
        s1 = input.charAt(peg$currPos);
        peg$currPos++;
      } else {
        s1 = peg$FAILED;
        if (peg$silentFails === 0) { peg$fail(peg$c5); }
      }
      while (s1 !== peg$FAILED) {
        s0.push(s1);
        if (peg$c4.test(input.charAt(peg$currPos))) {
          s1 = input.charAt(peg$currPos);
          peg$currPos++;
        } else {
          s1 = peg$FAILED;
          if (peg$silentFails === 0) { peg$fail(peg$c5); }
        }
      }
      peg$silentFails--;
      if (s0 === peg$FAILED) {
        s1 = peg$FAILED;
        if (peg$silentFails === 0) { peg$fail(peg$c2); }
      }

      return s0;
    }

    function peg$parseequiv() {
      var s0, s1, s2, s3, s4, s5;

      peg$silentFails++;
      s0 = peg$currPos;
      s1 = peg$parseandOrOr();
      if (s1 !== peg$FAILED) {
        s2 = peg$parse_();
        if (s2 !== peg$FAILED) {
          s3 = peg$parseequivOp();
          if (s3 !== peg$FAILED) {
            s4 = peg$parse_();
            if (s4 !== peg$FAILED) {
              s5 = peg$parseexpr();
              if (s5 !== peg$FAILED) {
                peg$reportedPos = s0;
                s1 = peg$c7(s1, s5);
                s0 = s1;
              } else {
                peg$currPos = s0;
                s0 = peg$c0;
              }
            } else {
              peg$currPos = s0;
              s0 = peg$c0;
            }
          } else {
            peg$currPos = s0;
            s0 = peg$c0;
          }
        } else {
          peg$currPos = s0;
          s0 = peg$c0;
        }
      } else {
        peg$currPos = s0;
        s0 = peg$c0;
      }
      if (s0 === peg$FAILED) {
        s0 = peg$parseandOrOr();
      }
      peg$silentFails--;
      if (s0 === peg$FAILED) {
        s1 = peg$FAILED;
        if (peg$silentFails === 0) { peg$fail(peg$c6); }
      }

      return s0;
    }

    function peg$parseequivOp() {
      var s0;

      if (input.substr(peg$currPos, 3) === peg$c8) {
        s0 = peg$c8;
        peg$currPos += 3;
      } else {
        s0 = peg$FAILED;
        if (peg$silentFails === 0) { peg$fail(peg$c9); }
      }
      if (s0 === peg$FAILED) {
        if (input.charCodeAt(peg$currPos) === 8801) {
          s0 = peg$c10;
          peg$currPos++;
        } else {
          s0 = peg$FAILED;
          if (peg$silentFails === 0) { peg$fail(peg$c11); }
        }
      }

      return s0;
    }

    function peg$parseandOrOr() {
      var s0, s1, s2, s3, s4, s5;

      peg$silentFails++;
      s0 = peg$currPos;
      s1 = peg$parseunary();
      if (s1 !== peg$FAILED) {
        s2 = peg$parse_();
        if (s2 !== peg$FAILED) {
          if (peg$c13.test(input.charAt(peg$currPos))) {
            s3 = input.charAt(peg$currPos);
            peg$currPos++;
          } else {
            s3 = peg$FAILED;
            if (peg$silentFails === 0) { peg$fail(peg$c14); }
          }
          if (s3 !== peg$FAILED) {
            s4 = peg$parse_();
            if (s4 !== peg$FAILED) {
              s5 = peg$parseandOrOr();
              if (s5 !== peg$FAILED) {
                peg$reportedPos = s0;
                s1 = peg$c15(s1, s3, s5);
                s0 = s1;
              } else {
                peg$currPos = s0;
                s0 = peg$c0;
              }
            } else {
              peg$currPos = s0;
              s0 = peg$c0;
            }
          } else {
            peg$currPos = s0;
            s0 = peg$c0;
          }
        } else {
          peg$currPos = s0;
          s0 = peg$c0;
        }
      } else {
        peg$currPos = s0;
        s0 = peg$c0;
      }
      if (s0 === peg$FAILED) {
        s0 = peg$parseunary();
      }
      peg$silentFails--;
      if (s0 === peg$FAILED) {
        s1 = peg$FAILED;
        if (peg$silentFails === 0) { peg$fail(peg$c12); }
      }

      return s0;
    }

    function peg$parseunary() {
      var s0, s1, s2, s3;

      s0 = peg$currPos;
      if (peg$c16.test(input.charAt(peg$currPos))) {
        s1 = input.charAt(peg$currPos);
        peg$currPos++;
      } else {
        s1 = peg$FAILED;
        if (peg$silentFails === 0) { peg$fail(peg$c17); }
      }
      if (s1 !== peg$FAILED) {
        s2 = peg$parse_();
        if (s2 !== peg$FAILED) {
          s3 = peg$parseprimary();
          if (s3 !== peg$FAILED) {
            peg$reportedPos = s0;
            s1 = peg$c18(s1, s3);
            s0 = s1;
          } else {
            peg$currPos = s0;
            s0 = peg$c0;
          }
        } else {
          peg$currPos = s0;
          s0 = peg$c0;
        }
      } else {
        peg$currPos = s0;
        s0 = peg$c0;
      }
      if (s0 === peg$FAILED) {
        s0 = peg$parsesubstitution();
      }

      return s0;
    }

    function peg$parsesubstitution() {
      var s0, s1, s2, s3, s4;

      peg$silentFails++;
      s0 = peg$currPos;
      s1 = peg$parseprimary();
      if (s1 !== peg$FAILED) {
        s2 = peg$parse_();
        if (s2 !== peg$FAILED) {
          s3 = [];
          s4 = peg$parsesubstExpr();
          while (s4 !== peg$FAILED) {
            s3.push(s4);
            s4 = peg$parsesubstExpr();
          }
          if (s3 !== peg$FAILED) {
            peg$reportedPos = s0;
            s1 = peg$c20(s1, s3);
            s0 = s1;
          } else {
            peg$currPos = s0;
            s0 = peg$c0;
          }
        } else {
          peg$currPos = s0;
          s0 = peg$c0;
        }
      } else {
        peg$currPos = s0;
        s0 = peg$c0;
      }
      if (s0 === peg$FAILED) {
        s0 = peg$parseprimary();
      }
      peg$silentFails--;
      if (s0 === peg$FAILED) {
        s1 = peg$FAILED;
        if (peg$silentFails === 0) { peg$fail(peg$c19); }
      }

      return s0;
    }

    function peg$parsesubstExpr() {
      var s0, s1, s2, s3, s4, s5, s6, s7, s8, s9, s10, s11, s12, s13, s14;

      s0 = peg$currPos;
      if (input.charCodeAt(peg$currPos) === 91) {
        s1 = peg$c21;
        peg$currPos++;
      } else {
        s1 = peg$FAILED;
        if (peg$silentFails === 0) { peg$fail(peg$c22); }
      }
      if (s1 !== peg$FAILED) {
        s2 = peg$parse_();
        if (s2 !== peg$FAILED) {
          s3 = peg$currPos;
          s4 = peg$parsevariable();
          if (s4 !== peg$FAILED) {
            s5 = [];
            s6 = peg$currPos;
            s7 = peg$currPos;
            s8 = peg$parse_();
            if (s8 !== peg$FAILED) {
              if (input.charCodeAt(peg$currPos) === 44) {
                s9 = peg$c23;
                peg$currPos++;
              } else {
                s9 = peg$FAILED;
                if (peg$silentFails === 0) { peg$fail(peg$c24); }
              }
              if (s9 !== peg$FAILED) {
                s10 = peg$parse_();
                if (s10 !== peg$FAILED) {
                  s8 = [s8, s9, s10];
                  s7 = s8;
                } else {
                  peg$currPos = s7;
                  s7 = peg$c0;
                }
              } else {
                peg$currPos = s7;
                s7 = peg$c0;
              }
            } else {
              peg$currPos = s7;
              s7 = peg$c0;
            }
            if (s7 !== peg$FAILED) {
              s8 = peg$parsevariable();
              if (s8 !== peg$FAILED) {
                s7 = [s7, s8];
                s6 = s7;
              } else {
                peg$currPos = s6;
                s6 = peg$c0;
              }
            } else {
              peg$currPos = s6;
              s6 = peg$c0;
            }
            while (s6 !== peg$FAILED) {
              s5.push(s6);
              s6 = peg$currPos;
              s7 = peg$currPos;
              s8 = peg$parse_();
              if (s8 !== peg$FAILED) {
                if (input.charCodeAt(peg$currPos) === 44) {
                  s9 = peg$c23;
                  peg$currPos++;
                } else {
                  s9 = peg$FAILED;
                  if (peg$silentFails === 0) { peg$fail(peg$c24); }
                }
                if (s9 !== peg$FAILED) {
                  s10 = peg$parse_();
                  if (s10 !== peg$FAILED) {
                    s8 = [s8, s9, s10];
                    s7 = s8;
                  } else {
                    peg$currPos = s7;
                    s7 = peg$c0;
                  }
                } else {
                  peg$currPos = s7;
                  s7 = peg$c0;
                }
              } else {
                peg$currPos = s7;
                s7 = peg$c0;
              }
              if (s7 !== peg$FAILED) {
                s8 = peg$parsevariable();
                if (s8 !== peg$FAILED) {
                  s7 = [s7, s8];
                  s6 = s7;
                } else {
                  peg$currPos = s6;
                  s6 = peg$c0;
                }
              } else {
                peg$currPos = s6;
                s6 = peg$c0;
              }
            }
            if (s5 !== peg$FAILED) {
              s4 = [s4, s5];
              s3 = s4;
            } else {
              peg$currPos = s3;
              s3 = peg$c0;
            }
          } else {
            peg$currPos = s3;
            s3 = peg$c0;
          }
          if (s3 !== peg$FAILED) {
            s4 = peg$parse_();
            if (s4 !== peg$FAILED) {
              if (input.substr(peg$currPos, 2) === peg$c25) {
                s5 = peg$c25;
                peg$currPos += 2;
              } else {
                s5 = peg$FAILED;
                if (peg$silentFails === 0) { peg$fail(peg$c26); }
              }
              if (s5 !== peg$FAILED) {
                s6 = peg$parse_();
                if (s6 !== peg$FAILED) {
                  s7 = peg$currPos;
                  s8 = peg$parseexpr();
                  if (s8 !== peg$FAILED) {
                    s9 = [];
                    s10 = peg$currPos;
                    s11 = peg$currPos;
                    s12 = peg$parse_();
                    if (s12 !== peg$FAILED) {
                      if (input.charCodeAt(peg$currPos) === 44) {
                        s13 = peg$c23;
                        peg$currPos++;
                      } else {
                        s13 = peg$FAILED;
                        if (peg$silentFails === 0) { peg$fail(peg$c24); }
                      }
                      if (s13 !== peg$FAILED) {
                        s14 = peg$parse_();
                        if (s14 !== peg$FAILED) {
                          s12 = [s12, s13, s14];
                          s11 = s12;
                        } else {
                          peg$currPos = s11;
                          s11 = peg$c0;
                        }
                      } else {
                        peg$currPos = s11;
                        s11 = peg$c0;
                      }
                    } else {
                      peg$currPos = s11;
                      s11 = peg$c0;
                    }
                    if (s11 !== peg$FAILED) {
                      s12 = peg$parseexpr();
                      if (s12 !== peg$FAILED) {
                        s11 = [s11, s12];
                        s10 = s11;
                      } else {
                        peg$currPos = s10;
                        s10 = peg$c0;
                      }
                    } else {
                      peg$currPos = s10;
                      s10 = peg$c0;
                    }
                    while (s10 !== peg$FAILED) {
                      s9.push(s10);
                      s10 = peg$currPos;
                      s11 = peg$currPos;
                      s12 = peg$parse_();
                      if (s12 !== peg$FAILED) {
                        if (input.charCodeAt(peg$currPos) === 44) {
                          s13 = peg$c23;
                          peg$currPos++;
                        } else {
                          s13 = peg$FAILED;
                          if (peg$silentFails === 0) { peg$fail(peg$c24); }
                        }
                        if (s13 !== peg$FAILED) {
                          s14 = peg$parse_();
                          if (s14 !== peg$FAILED) {
                            s12 = [s12, s13, s14];
                            s11 = s12;
                          } else {
                            peg$currPos = s11;
                            s11 = peg$c0;
                          }
                        } else {
                          peg$currPos = s11;
                          s11 = peg$c0;
                        }
                      } else {
                        peg$currPos = s11;
                        s11 = peg$c0;
                      }
                      if (s11 !== peg$FAILED) {
                        s12 = peg$parseexpr();
                        if (s12 !== peg$FAILED) {
                          s11 = [s11, s12];
                          s10 = s11;
                        } else {
                          peg$currPos = s10;
                          s10 = peg$c0;
                        }
                      } else {
                        peg$currPos = s10;
                        s10 = peg$c0;
                      }
                    }
                    if (s9 !== peg$FAILED) {
                      s8 = [s8, s9];
                      s7 = s8;
                    } else {
                      peg$currPos = s7;
                      s7 = peg$c0;
                    }
                  } else {
                    peg$currPos = s7;
                    s7 = peg$c0;
                  }
                  if (s7 !== peg$FAILED) {
                    s8 = peg$parse_();
                    if (s8 !== peg$FAILED) {
                      if (input.charCodeAt(peg$currPos) === 93) {
                        s9 = peg$c27;
                        peg$currPos++;
                      } else {
                        s9 = peg$FAILED;
                        if (peg$silentFails === 0) { peg$fail(peg$c28); }
                      }
                      if (s9 !== peg$FAILED) {
                        s10 = peg$parse_();
                        if (s10 !== peg$FAILED) {
                          peg$reportedPos = s0;
                          s1 = peg$c29(s3, s7);
                          s0 = s1;
                        } else {
                          peg$currPos = s0;
                          s0 = peg$c0;
                        }
                      } else {
                        peg$currPos = s0;
                        s0 = peg$c0;
                      }
                    } else {
                      peg$currPos = s0;
                      s0 = peg$c0;
                    }
                  } else {
                    peg$currPos = s0;
                    s0 = peg$c0;
                  }
                } else {
                  peg$currPos = s0;
                  s0 = peg$c0;
                }
              } else {
                peg$currPos = s0;
                s0 = peg$c0;
              }
            } else {
              peg$currPos = s0;
              s0 = peg$c0;
            }
          } else {
            peg$currPos = s0;
            s0 = peg$c0;
          }
        } else {
          peg$currPos = s0;
          s0 = peg$c0;
        }
      } else {
        peg$currPos = s0;
        s0 = peg$c0;
      }

      return s0;
    }

    function peg$parseprimary() {
      var s0, s1, s2, s3;

      s0 = peg$parsevariable();
      if (s0 === peg$FAILED) {
        s0 = peg$parseinteger();
        if (s0 === peg$FAILED) {
          s0 = peg$currPos;
          if (input.charCodeAt(peg$currPos) === 40) {
            s1 = peg$c30;
            peg$currPos++;
          } else {
            s1 = peg$FAILED;
            if (peg$silentFails === 0) { peg$fail(peg$c31); }
          }
          if (s1 !== peg$FAILED) {
            s2 = peg$parseexpr();
            if (s2 !== peg$FAILED) {
              if (input.charCodeAt(peg$currPos) === 41) {
                s3 = peg$c32;
                peg$currPos++;
              } else {
                s3 = peg$FAILED;
                if (peg$silentFails === 0) { peg$fail(peg$c33); }
              }
              if (s3 !== peg$FAILED) {
                peg$reportedPos = s0;
                s1 = peg$c34(s2);
                s0 = s1;
              } else {
                peg$currPos = s0;
                s0 = peg$c0;
              }
            } else {
              peg$currPos = s0;
              s0 = peg$c0;
            }
          } else {
            peg$currPos = s0;
            s0 = peg$c0;
          }
        }
      }

      return s0;
    }

    function peg$parsevariable() {
      var s0, s1, s2, s3, s4;

      peg$silentFails++;
      s0 = peg$currPos;
      s1 = peg$currPos;
      if (peg$c36.test(input.charAt(peg$currPos))) {
        s2 = input.charAt(peg$currPos);
        peg$currPos++;
      } else {
        s2 = peg$FAILED;
        if (peg$silentFails === 0) { peg$fail(peg$c37); }
      }
      if (s2 !== peg$FAILED) {
        s3 = [];
        if (peg$c38.test(input.charAt(peg$currPos))) {
          s4 = input.charAt(peg$currPos);
          peg$currPos++;
        } else {
          s4 = peg$FAILED;
          if (peg$silentFails === 0) { peg$fail(peg$c39); }
        }
        while (s4 !== peg$FAILED) {
          s3.push(s4);
          if (peg$c38.test(input.charAt(peg$currPos))) {
            s4 = input.charAt(peg$currPos);
            peg$currPos++;
          } else {
            s4 = peg$FAILED;
            if (peg$silentFails === 0) { peg$fail(peg$c39); }
          }
        }
        if (s3 !== peg$FAILED) {
          s2 = [s2, s3];
          s1 = s2;
        } else {
          peg$currPos = s1;
          s1 = peg$c0;
        }
      } else {
        peg$currPos = s1;
        s1 = peg$c0;
      }
      if (s1 !== peg$FAILED) {
        peg$reportedPos = s0;
        s1 = peg$c40(s1);
      }
      s0 = s1;
      peg$silentFails--;
      if (s0 === peg$FAILED) {
        s1 = peg$FAILED;
        if (peg$silentFails === 0) { peg$fail(peg$c35); }
      }

      return s0;
    }

    function peg$parseinteger() {
      var s0, s1, s2;

      peg$silentFails++;
      s0 = peg$currPos;
      s1 = [];
      if (peg$c42.test(input.charAt(peg$currPos))) {
        s2 = input.charAt(peg$currPos);
        peg$currPos++;
      } else {
        s2 = peg$FAILED;
        if (peg$silentFails === 0) { peg$fail(peg$c43); }
      }
      if (s2 !== peg$FAILED) {
        while (s2 !== peg$FAILED) {
          s1.push(s2);
          if (peg$c42.test(input.charAt(peg$currPos))) {
            s2 = input.charAt(peg$currPos);
            peg$currPos++;
          } else {
            s2 = peg$FAILED;
            if (peg$silentFails === 0) { peg$fail(peg$c43); }
          }
        }
      } else {
        s1 = peg$c0;
      }
      if (s1 !== peg$FAILED) {
        peg$reportedPos = s0;
        s1 = peg$c44(s1);
      }
      s0 = s1;
      peg$silentFails--;
      if (s0 === peg$FAILED) {
        s1 = peg$FAILED;
        if (peg$silentFails === 0) { peg$fail(peg$c41); }
      }

      return s0;
    }


    	var expr = function(spec) {
    		var that = {};
    		
    		that.applySubstitutions = function(substitutions) {
    			result = this;
    			for (var i=0; i<substitutions.length; ++i) {
    				result = result.applySubstitution(substitutions[i]);
    			}
    			return result;
    		}
    		
    		return that;
    	}

    	var variable = function(spec) {
    		var that = expr(spec);
    		
    		that.name = spec.name;
    		
    		// A substitution is a list of variables paired with a list of expressions.
    		that.applySubstitution = function(substitution) {
    			for (var i=0; i<substitution.varsToReplace.length; i+=1) {
    				if (this.name === substitution.varsToReplace[i].name) {
    					return substitution.replacementExprs[i];
    				}
    			}
    			return this;
    		}
    		
    		return that;
    	}
    	
    	var unary = function(spec) {
    		var that = expr(spec);
    		
    		that.op = spec.op;
    		that.expr = spec.expr
    		
    		that.applySubstitution = function(substitution) {
    			return unary({op : this.op, expr : this.expr.applySubstitution(substitution)});
    		}
    		
    		return that;
    	}

    	var binary = function(spec) {
    		var that = expr(spec);
    		
    		that.op = spec.op;
    		that.left = spec.left;
    		that.right = spec.right;
    		
    		that.applySubstitution = function(substitution) {
    			return binary(
    				{ op : this.op, 
    				  left : this.left.applySubstitution(substitution),
    				  right : this.right.applySubstitution(substitution)});
    		}
    		
    		return that;
    	}
    	
    	var normalizeOp = function(op) {
    		if (op === '&') {
    			return '∧';
    		} else if (op === '|') {
    			return '∨';
    		} else if (op === '!') {
    			return '¬';
    		} else {
    			return op;
    		}
    	}
    	
    	var makeList = function(items) {
    		var result = [items[0]];
    		if (items.length > 1) {
    			var others = items[1];
    			for (var i=0; i<others.length; i+=1) {
    				result.push(others[i][1]);
    			}
    		}
    		return result;
    	}

    	var keys = function(spec) {
    	    return Object.keys(spec)[0];
    	}


    peg$result = peg$startRuleFunction();

    if (peg$result !== peg$FAILED && peg$currPos === input.length) {
      return peg$result;
    } else {
      if (peg$result !== peg$FAILED && peg$currPos < input.length) {
        peg$fail({ type: 'end', description: 'end of input' });
      }

      throw peg$buildException(null, peg$maxFailExpected, peg$maxFailPos);
    }
  }

  return {
    SyntaxError: SyntaxError,
    parse:       parse
  };
})();
S