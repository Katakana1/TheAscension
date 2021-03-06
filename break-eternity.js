"use strict";
function _instanceof(t, r) {
  return null != r && "undefined" != typeof Symbol && r[Symbol.hasInstance]
    ? !!r[Symbol.hasInstance](t)
    : t instanceof r;
}
function _typeof(t) {
  return (_typeof =
    "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
      ? function(t) {
          return typeof t;
        }
      : function(t) {
          return t &&
            "function" == typeof Symbol &&
            t.constructor === Symbol &&
            t !== Symbol.prototype
            ? "symbol"
            : typeof t;
        })(t);
}
!(function(t, r) {
  "object" ===
    ("undefined" == typeof exports ? "undefined" : _typeof(exports)) &&
  "undefined" != typeof module
    ? (module.exports = r())
    : "function" == typeof define && define.amd
    ? define(r)
    : ((t = t || self).Decimal = r());
})(void 0, function() {
  var t = Math.log10(9e15),
    r = (function() {
      for (var t = [], r = -323; r <= 308; r++) t.push(Number("1e" + r));
      return function(r) {
        return t[r + 323];
      };
    })(),
    i = function(t) {
      return h.fromValue_noAlloc(t);
    },
    e = function(t, r, i) {
      return h.fromComponents(t, r, i);
    },
    n = function(t, r, i) {
      return h.fromComponents_noNormalize(t, r, i);
    },
    a = function(t, r) {
      var i = r + 1,
        e = Math.ceil(Math.log10(Math.abs(t))),
        n = Math.round(t * Math.pow(10, i - e)) * Math.pow(10, e - i);
      return parseFloat(n.toFixed(Math.max(i - e, 0)));
    },
    s = function(t) {
      return Math.sign(t) * Math.log10(Math.abs(t));
    },
    o = function(t) {
      var r,
        i,
        e =
          arguments.length > 1 && void 0 !== arguments[1]
            ? arguments[1]
            : 1e-10;
      if (!Number.isFinite(t)) return t;
      if (0 === t) return t;
      if (1 === t) return 0.5671432904097838;
      r = t < 10 ? 0 : Math.log(t) - Math.log(Math.log(t));
      for (var n = 0; n < 100; ++n) {
        if (
          ((i = (t * Math.exp(-r) + r * r) / (r + 1)),
          Math.abs(i - r) < e * Math.abs(i))
        )
          return i;
        r = i;
      }
      throw Error("Iteration failed to converge: " + t);
    },
    h = (function() {
      function h(t) {
        (this.sign = Number.NaN),
          (this.layer = Number.NaN),
          (this.mag = Number.NaN),
          _instanceof(t, h)
            ? this.fromDecimal(t)
            : "number" == typeof t
            ? this.fromNumber(t)
            : "string" == typeof t
            ? this.fromString(t)
            : ((this.sign = 0), (this.layer = 0), (this.mag = 0));
      }
      Object.defineProperty(h.prototype, "m", {
        get: function() {
          if (0 === this.sign) return 0;
          if (0 === this.layer) {
            var t,
              i = Math.floor(Math.log10(this.mag));
            return (
              (t = 5e-324 === this.mag ? 5 : this.mag / r(i)), this.sign * t
            );
          }
          if (1 === this.layer) {
            var e = this.mag - Math.floor(this.mag);
            return this.sign * Math.pow(10, e);
          }
          return this.sign;
        },
        set: function(t) {
          this.layer <= 2
            ? this.fromMantissaExponent(t, this.e)
            : ((this.sign = Math.sign(t)),
              0 === this.sign && (this.layer, this.exponent));
        },
        enumerable: !0,
        configurable: !0
      }),
        Object.defineProperty(h.prototype, "e", {
          get: function() {
            return 0 === this.sign
              ? 0
              : 0 === this.layer
              ? Math.floor(Math.log10(this.mag))
              : 1 === this.layer
              ? Math.floor(this.mag)
              : 2 === this.layer
              ? Math.floor(
                  Math.sign(this.mag) * Math.pow(10, Math.abs(this.mag))
                )
              : this.mag * Number.POSITIVE_INFINITY;
          },
          set: function(t) {
            this.fromMantissaExponent(this.m, t);
          },
          enumerable: !0,
          configurable: !0
        }),
        Object.defineProperty(h.prototype, "s", {
          get: function() {
            return this.sign;
          },
          set: function(t) {
            0 === t
              ? ((this.sign = 0), (this.layer = 0), (this.mag = 0))
              : (this.sign = t);
          },
          enumerable: !0,
          configurable: !0
        }),
        Object.defineProperty(h.prototype, "mantissa", {
          get: function() {
            return this.m;
          },
          set: function(t) {
            this.m = t;
          },
          enumerable: !0,
          configurable: !0
        }),
        Object.defineProperty(h.prototype, "exponent", {
          get: function() {
            return this.e;
          },
          set: function(t) {
            this.e = t;
          },
          enumerable: !0,
          configurable: !0
        }),
        (h.fromComponents = function(t, r, i) {
          return new h().fromComponents(t, r, i);
        }),
        (h.fromComponents_noNormalize = function(t, r, i) {
          return new h().fromComponents_noNormalize(t, r, i);
        }),
        (h.fromMantissaExponent = function(t, r) {
          return new h().fromMantissaExponent(t, r);
        }),
        (h.fromMantissaExponent_noNormalize = function(t, r) {
          return new h().fromMantissaExponent_noNormalize(t, r);
        }),
        (h.fromDecimal = function(t) {
          return new h().fromDecimal(t);
        }),
        (h.fromNumber = function(t) {
          return new h().fromNumber(t);
        }),
        (h.fromString = function(t) {
          return new h().fromString(t);
        }),
        (h.fromValue = function(t) {
          return new h().fromValue(t);
        }),
        (h.fromValue_noAlloc = function(t) {
          return _instanceof(t, h) ? t : new h(t);
        }),
        (h.abs = function(t) {
          return i(t).abs();
        }),
        (h.neg = function(t) {
          return i(t).neg();
        }),
        (h.negate = function(t) {
          return i(t).neg();
        }),
        (h.negated = function(t) {
          return i(t).neg();
        }),
        (h.sign = function(t) {
          return i(t).sign();
        }),
        (h.sgn = function(t) {
          return i(t).sign();
        }),
        (h.round = function(t) {
          return i(t).round();
        }),
        (h.floor = function(t) {
          return i(t).floor();
        }),
        (h.ceil = function(t) {
          return i(t).ceil();
        }),
        (h.trunc = function(t) {
          return i(t).trunc();
        }),
        (h.add = function(t, r) {
          return i(t).add(r);
        }),
        (h.plus = function(t, r) {
          return i(t).add(r);
        }),
        (h.sub = function(t, r) {
          return i(t).sub(r);
        }),
        (h.subtract = function(t, r) {
          return i(t).sub(r);
        }),
        (h.minus = function(t, r) {
          return i(t).sub(r);
        }),
        (h.mul = function(t, r) {
          return i(t).mul(r);
        }),
        (h.multiply = function(t, r) {
          return i(t).mul(r);
        }),
        (h.times = function(t, r) {
          return i(t).mul(r);
        }),
        (h.div = function(t, r) {
          return i(t).div(r);
        }),
        (h.divide = function(t, r) {
          return i(t).div(r);
        }),
        (h.recip = function(t) {
          return i(t).recip();
        }),
        (h.reciprocal = function(t) {
          return i(t).recip();
        }),
        (h.reciprocate = function(t) {
          return i(t).reciprocate();
        }),
        (h.cmp = function(t, r) {
          return i(t).cmp(r);
        }),
        (h.cmpabs = function(t, r) {
          return i(t).cmpabs(r);
        }),
        (h.compare = function(t, r) {
          return i(t).cmp(r);
        }),
        (h.eq = function(t, r) {
          return i(t).eq(r);
        }),
        (h.equals = function(t, r) {
          return i(t).eq(r);
        }),
        (h.neq = function(t, r) {
          return i(t).neq(r);
        }),
        (h.notEquals = function(t, r) {
          return i(t).notEquals(r);
        }),
        (h.lt = function(t, r) {
          return i(t).lt(r);
        }),
        (h.lte = function(t, r) {
          return i(t).lte(r);
        }),
        (h.gt = function(t, r) {
          return i(t).gt(r);
        }),
        (h.gte = function(t, r) {
          return i(t).gte(r);
        }),
        (h.max = function(t, r) {
          return i(t).max(r);
        }),
        (h.min = function(t, r) {
          return i(t).min(r);
        }),
        (h.minabs = function(t, r) {
          return i(t).minabs(r);
        }),
        (h.maxabs = function(t, r) {
          return i(t).maxabs(r);
        }),
        (h.clamp = function(t, r, e) {
          return i(t).clamp(r, e);
        }),
        (h.clampMin = function(t, r) {
          return i(t).clampMin(r);
        }),
        (h.clampMax = function(t, r) {
          return i(t).clampMax(r);
        }),
        (h.cmp_tolerance = function(t, r, e) {
          return i(t).cmp_tolerance(r, e);
        }),
        (h.compare_tolerance = function(t, r, e) {
          return i(t).cmp_tolerance(r, e);
        }),
        (h.eq_tolerance = function(t, r, e) {
          return i(t).eq_tolerance(r, e);
        }),
        (h.equals_tolerance = function(t, r, e) {
          return i(t).eq_tolerance(r, e);
        }),
        (h.neq_tolerance = function(t, r, e) {
          return i(t).neq_tolerance(r, e);
        }),
        (h.notEquals_tolerance = function(t, r, e) {
          return i(t).notEquals_tolerance(r, e);
        }),
        (h.lt_tolerance = function(t, r, e) {
          return i(t).lt_tolerance(r, e);
        }),
        (h.lte_tolerance = function(t, r, e) {
          return i(t).lte_tolerance(r, e);
        }),
        (h.gt_tolerance = function(t, r, e) {
          return i(t).gt_tolerance(r, e);
        }),
        (h.gte_tolerance = function(t, r, e) {
          return i(t).gte_tolerance(r, e);
        }),
        (h.pLog10 = function(t) {
          return i(t).pLog10();
        }),
        (h.absLog10 = function(t) {
          return i(t).absLog10();
        }),
        (h.log10 = function(t) {
          return i(t).log10();
        }),
        (h.log = function(t, r) {
          return i(t).log(r);
        }),
        (h.log2 = function(t) {
          return i(t).log2();
        }),
        (h.ln = function(t) {
          return i(t).ln();
        }),
        (h.logarithm = function(t, r) {
          return i(t).logarithm(r);
        }),
        (h.pow = function(t, r) {
          return i(t).pow(r);
        }),
        (h.pow10 = function(t) {
          return i(t).pow10();
        }),
        (h.root = function(t, r) {
          return i(t).root(r);
        }),
        (h.factorial = function(t, r) {
          return i(t).factorial();
        }),
        (h.gamma = function(t, r) {
          return i(t).gamma();
        }),
        (h.lngamma = function(t, r) {
          return i(t).lngamma();
        }),
        (h.exp = function(t) {
          return i(t).exp();
        }),
        (h.sqr = function(t) {
          return i(t).sqr();
        }),
        (h.sqrt = function(t) {
          return i(t).sqrt();
        }),
        (h.cube = function(t) {
          return i(t).cube();
        }),
        (h.cbrt = function(t) {
          return i(t).cbrt();
        }),
        (h.tetrate = function(t) {
          var r =
              arguments.length > 1 && void 0 !== arguments[1]
                ? arguments[1]
                : 2,
            e =
              arguments.length > 2 && void 0 !== arguments[2]
                ? arguments[2]
                : n(1, 0, 1);
          return i(t).tetrate(r, e);
        }),
        (h.iteratedexp = function(t) {
          var r =
              arguments.length > 1 && void 0 !== arguments[1]
                ? arguments[1]
                : 2,
            e =
              arguments.length > 2 && void 0 !== arguments[2]
                ? arguments[2]
                : n(1, 0, 1);
          return i(t).iteratedexp(r, e);
        }),
        (h.iteratedlog = function(t) {
          var r =
              arguments.length > 1 && void 0 !== arguments[1]
                ? arguments[1]
                : 10,
            e =
              arguments.length > 2 && void 0 !== arguments[2]
                ? arguments[2]
                : 1;
          return i(t).iteratedlog(r, e);
        }),
        (h.layeradd10 = function(t, r) {
          return i(t).layeradd10(r);
        }),
        (h.layeradd = function(t, r) {
          var e =
            arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 10;
          return i(t).layeradd(r, e);
        }),
        (h.slog = function(t) {
          var r =
            arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 10;
          return i(t).slog(r);
        }),
        (h.lambertw = function(t) {
          return i(t).lambertw();
        }),
        (h.ssqrt = function(t) {
          return i(t).ssqrt();
        }),
        (h.pentate = function(t) {
          var r =
              arguments.length > 1 && void 0 !== arguments[1]
                ? arguments[1]
                : 2,
            e =
              arguments.length > 2 && void 0 !== arguments[2]
                ? arguments[2]
                : n(1, 0, 1);
          return i(t).pentate(r, e);
        }),
        (h.affordGeometricSeries = function(t, r, e, n) {
          return this.affordGeometricSeries_core(i(t), i(r), i(e), n);
        }),
        (h.sumGeometricSeries = function(t, r, e, n) {
          return this.sumGeometricSeries_core(t, i(r), i(e), n);
        }),
        (h.affordArithmeticSeries = function(t, r, e, n) {
          return this.affordArithmeticSeries_core(i(t), i(r), i(e), i(n));
        }),
        (h.sumArithmeticSeries = function(t, r, e, n) {
          return this.sumArithmeticSeries_core(i(t), i(r), i(e), i(n));
        }),
        (h.efficiencyOfPurchase = function(t, r, e) {
          return this.efficiencyOfPurchase_core(i(t), i(r), i(e));
        }),
        (h.randomDecimalForTesting = function(t) {
          if (20 * Math.random() < 1) return n(0, 0, 0);
          var r = Math.random() > 0.5 ? 1 : -1;
          if (20 * Math.random() < 1) return n(r, 0, 1);
          var i = Math.floor(Math.random() * (t + 1)),
            a = 0 === i ? 616 * Math.random() - 308 : 16 * Math.random();
          Math.random() > 0.9 && (a = Math.trunc(a));
          var s = Math.pow(10, a);
          return Math.random() > 0.9 && (s = Math.trunc(s)), e(r, i, s);
        }),
        (h.affordGeometricSeries_core = function(t, r, i, e) {
          var n = r.mul(i.pow(e));
          return h.floor(
            t
              .div(n)
              .mul(i.sub(1))
              .add(1)
              .log10()
              .div(i.log10())
          );
        }),
        (h.sumGeometricSeries_core = function(t, r, i, e) {
          return r
            .mul(i.pow(e))
            .mul(h.sub(1, i.pow(t)))
            .div(h.sub(1, i));
        }),
        (h.affordArithmeticSeries_core = function(t, r, i, e) {
          var n = r.add(e.mul(i)).sub(i.div(2)),
            a = n.pow(2);
          return n
            .neg()
            .add(a.add(i.mul(t).mul(2)).sqrt())
            .div(i)
            .floor();
        }),
        (h.sumArithmeticSeries_core = function(t, r, i, e) {
          var n = r.add(e.mul(i));
          return t.div(2).mul(n.mul(2).plus(t.sub(1).mul(i)));
        }),
        (h.efficiencyOfPurchase_core = function(t, r, i) {
          return t.div(r).add(t.div(i));
        }),
        (h.prototype.normalize = function() {
          if (0 === this.sign || (0 === this.mag && 0 === this.layer))
            return (this.sign = 0), (this.mag = 0), (this.layer = 0), this;
          if (
            (0 === this.layer &&
              this.mag < 0 &&
              ((this.mag = -this.mag), (this.sign = -this.sign)),
            0 === this.layer && this.mag < 1 / 9e15)
          )
            return (this.layer += 1), (this.mag = Math.log10(this.mag)), this;
          var r = Math.abs(this.mag),
            i = Math.sign(this.mag);
          if (r >= 9e15)
            return (this.layer += 1), (this.mag = i * Math.log10(r)), this;
          for (; r < t && this.layer > 0; )
            (this.layer -= 1),
              0 === this.layer
                ? (this.mag = Math.pow(10, this.mag))
                : ((this.mag = i * Math.pow(10, r)),
                  (r = Math.abs(this.mag)),
                  (i = Math.sign(this.mag)));
          return (
            0 === this.layer &&
              (this.mag < 0
                ? ((this.mag = -this.mag), (this.sign = -this.sign))
                : 0 === this.mag && (this.sign = 0)),
            this
          );
        }),
        (h.prototype.fromComponents = function(t, r, i) {
          return (
            (this.sign = t),
            (this.layer = r),
            (this.mag = i),
            this.normalize(),
            this
          );
        }),
        (h.prototype.fromComponents_noNormalize = function(t, r, i) {
          return (this.sign = t), (this.layer = r), (this.mag = i), this;
        }),
        (h.prototype.fromMantissaExponent = function(t, r) {
          return (
            (this.layer = 1),
            (this.sign = Math.sign(t)),
            (t = Math.abs(t)),
            (this.mag = r + Math.log10(t)),
            this.normalize(),
            this
          );
        }),
        (h.prototype.fromMantissaExponent_noNormalize = function(t, r) {
          return this.fromMantissaExponent(t, r), this;
        }),
        (h.prototype.fromDecimal = function(t) {
          return (
            (this.sign = t.sign),
            (this.layer = t.layer),
            (this.mag = t.mag),
            this
          );
        }),
        (h.prototype.fromNumber = function(t) {
          return (
            (this.mag = Math.abs(t)),
            (this.sign = Math.sign(t)),
            (this.layer = 0),
            this.normalize(),
            this
          );
        });
      (h.prototype.fromString = function(t) {
        var r = (t = t.replace(",", "")).split("^^^");
        if (2 === r.length) {
          var n = parseFloat(r[0]),
            a = parseFloat(r[1]),
            o = 1;
          if (2 === (l = r[1].split(";")).length) {
            o = parseFloat(l[1]);
            isFinite(o) || (o = 1);
          }
          if (isFinite(n) && isFinite(a)) {
            var u = h.pentate(n, a, o);
            return (
              (this.sign = u.sign),
              (this.layer = u.layer),
              (this.mag = u.mag),
              this
            );
          }
        }
        var g = t.split("^^");
        if (2 === g.length) {
          var l;
          (n = parseFloat(g[0])), (a = parseFloat(g[1]));
          if (2 === (l = g[1].split(";")).length) {
            o = parseFloat(l[1]);
            isFinite(o) || (o = 1);
          }
          if (isFinite(n) && isFinite(a)) {
            u = h.tetrate(n, a, o);
            return (
              (this.sign = u.sign),
              (this.layer = u.layer),
              (this.mag = u.mag),
              this
            );
          }
        }
        var m,
          f = t.split("^");
        if (2 === f.length) {
          n = parseFloat(f[0]);
          var c = parseFloat(f[1]);
          if (isFinite(n) && isFinite(c)) {
            u = h.pow(n, c);
            return (
              (this.sign = u.sign),
              (this.layer = u.layer),
              (this.mag = u.mag),
              this
            );
          }
        }
        if (2 === (m = (t = t.trim().toLowerCase()).split("pt")).length) {
          (n = 10),
            (a = parseFloat(m[0])),
            (m[1] = m[1].replace("(", "")),
            (m[1] = m[1].replace(")", ""));
          o = parseFloat(m[1]);
          if ((isFinite(o) || (o = 1), isFinite(n) && isFinite(a))) {
            u = h.tetrate(n, a, o);
            return (
              (this.sign = u.sign),
              (this.layer = u.layer),
              (this.mag = u.mag),
              this
            );
          }
        }
        if (2 === (m = t.split("p")).length) {
          (n = 10),
            (a = parseFloat(m[0])),
            (m[1] = m[1].replace("(", "")),
            (m[1] = m[1].replace(")", ""));
          o = parseFloat(m[1]);
          if ((isFinite(o) || (o = 1), isFinite(n) && isFinite(a))) {
            u = h.tetrate(n, a, o);
            return (
              (this.sign = u.sign),
              (this.layer = u.layer),
              (this.mag = u.mag),
              this
            );
          }
        }
        var p = t.split("e"),
          y = p.length - 1;
        if (0 === y) {
          var d = parseFloat(t);
          if (isFinite(d)) return this.fromNumber(d);
        } else if (1 === y) {
          d = parseFloat(t);
          if (isFinite(d) && 0 !== d) return this.fromNumber(d);
        }
        var M = t.split("e^");
        if (2 === M.length) {
          (this.sign = 1), "-" == M[0].charAt(0) && (this.sign = -1);
          for (var b = "", N = 0; N < M[1].length; ++N) {
            var v = M[1].charCodeAt(N);
            if (!((v >= 43 && v <= 57) || 101 === v))
              return (
                (this.layer = parseFloat(b)),
                (this.mag = parseFloat(M[1].substr(N + 1))),
                this.normalize(),
                this
              );
            b += M[1].charAt(N);
          }
        }
        if (y < 1)
          return (this.sign = 0), (this.layer = 0), (this.mag = 0), this;
        var _ = parseFloat(p[0]);
        if (0 === _)
          return (this.sign = 0), (this.layer = 0), (this.mag = 0), this;
        c = parseFloat(p[p.length - 1]);
        if (y >= 2) {
          var F = parseFloat(p[p.length - 2]);
          isFinite(F) && ((c *= Math.sign(F)), (c += s(F)));
        }
        if (isFinite(_))
          if (1 === y)
            (this.sign = Math.sign(_)),
              (this.layer = 1),
              (this.mag = c + Math.log10(Math.abs(_)));
          else {
            if (((this.sign = Math.sign(_)), (this.layer = y), 2 === y)) {
              u = h.mul(e(1, 2, c), i(_));
              return (
                (this.sign = u.sign),
                (this.layer = u.layer),
                (this.mag = u.mag),
                this
              );
            }
            this.mag = c;
          }
        else
          (this.sign = "-" === p[0] ? -1 : 1), (this.layer = y), (this.mag = c);
        return this.normalize(), this;
      }),
        (h.prototype.fromValue = function(t) {
          return _instanceof(t, h)
            ? this.fromDecimal(t)
            : "number" == typeof t
            ? this.fromNumber(t)
            : "string" == typeof t
            ? this.fromString(t)
            : ((this.sign = 0), (this.layer = 0), (this.mag = 0), this);
        }),
        (h.prototype.toNumber = function() {
          return Number.isFinite(this.layer)
            ? 0 === this.layer
              ? this.sign * this.mag
              : 1 === this.layer
              ? this.sign * Math.pow(10, this.mag)
              : this.mag > 0
              ? this.sign > 0
                ? Number.POSITIVE_INFINITY
                : Number.NEGATIVE_INFINITY
              : 0
            : Number.NaN;
        }),
        (h.prototype.mantissaWithDecimalPlaces = function(t) {
          return isNaN(this.m) ? Number.NaN : 0 === this.m ? 0 : a(this.m, t);
        }),
        (h.prototype.magnitudeWithDecimalPlaces = function(t) {
          return isNaN(this.mag)
            ? Number.NaN
            : 0 === this.mag
            ? 0
            : a(this.mag, t);
        }),
        (h.prototype.toString = function() {
          return 0 === this.layer
            ? (this.mag < 1e21 && this.mag > 1e-7) || 0 === this.mag
              ? (this.sign * this.mag).toString()
              : this.m + "e" + this.e
            : 1 === this.layer
            ? this.m + "e" + this.e
            : this.layer <= 5
            ? (-1 === this.sign ? "-" : "") + "e".repeat(this.layer) + this.mag
            : (-1 === this.sign ? "-" : "") +
              "(e^" +
              this.layer +
              ")" +
              this.mag;
        }),
        (h.prototype.toExponential = function(t) {
          return 0 === this.layer
            ? (this.sign * this.mag).toExponential(t)
            : this.toStringWithDecimalPlaces(t);
        }),
        (h.prototype.toFixed = function(t) {
          return 0 === this.layer
            ? (this.sign * this.mag).toFixed(t)
            : this.toStringWithDecimalPlaces(t);
        }),
        (h.prototype.toPrecision = function(t) {
          return this.e <= -7
            ? this.toExponential(t - 1)
            : t > this.e
            ? this.toFixed(t - this.exponent - 1)
            : this.toExponential(t - 1);
        }),
        (h.prototype.valueOf = function() {
          return this.toString();
        }),
        (h.prototype.toJSON = function() {
          return this.toString();
        }),
        (h.prototype.toStringWithDecimalPlaces = function(t) {
          return 0 === this.layer
            ? (this.mag < 1e21 && this.mag > 1e-7) || 0 === this.mag
              ? (this.sign * this.mag).toFixed(t)
              : a(this.m, t) + "e" + a(this.e, t)
            : 1 === this.layer
            ? a(this.m, t) + "e" + a(this.e, t)
            : this.layer <= 5
            ? (-1 === this.sign ? "-" : "") +
              "e".repeat(this.layer) +
              a(this.mag, t)
            : (-1 === this.sign ? "-" : "") +
              "(e^" +
              this.layer +
              ")" +
              a(this.mag, t);
        }),
        (h.prototype.abs = function() {
          return n(0 === this.sign ? 0 : 1, this.layer, this.mag);
        }),
        (h.prototype.neg = function() {
          return n(-this.sign, this.layer, this.mag);
        }),
        (h.prototype.negate = function() {
          return this.neg();
        }),
        (h.prototype.negated = function() {
          return this.neg();
        }),
        (h.prototype.sign = function() {
          return this.sign;
        }),
        (h.prototype.sgn = function() {
          return this.sign;
        }),
        (h.prototype.round = function() {
          return this.mag < 0
            ? h.dZero
            : 0 === this.layer
            ? e(this.sign, 0, Math.round(this.mag))
            : this;
        }),
        (h.prototype.floor = function() {
          return this.mag < 0
            ? h.dZero
            : 0 === this.layer
            ? e(this.sign, 0, Math.floor(this.mag))
            : this;
        }),
        (h.prototype.ceil = function() {
          return this.mag < 0
            ? h.dZero
            : 0 === this.layer
            ? e(this.sign, 0, Math.ceil(this.mag))
            : this;
        }),
        (h.prototype.trunc = function() {
          return this.mag < 0
            ? h.dZero
            : 0 === this.layer
            ? e(this.sign, 0, Math.trunc(this.mag))
            : this;
        }),
        (h.prototype.add = function(t) {
          var r,
            a,
            s = i(t);
          if (!Number.isFinite(this.layer)) return this;
          if (!Number.isFinite(s.layer)) return s;
          if (0 === this.sign) return s;
          if (0 === s.sign) return this;
          if (
            this.sign === -s.sign &&
            this.layer === s.layer &&
            this.mag === s.mag
          )
            return n(0, 0, 0);
          if (this.layer >= 2 || s.layer >= 2) return this.maxabs(s);
          if (
            (h.cmpabs(this, s) > 0
              ? ((r = this), (a = s))
              : ((r = s), (a = this)),
            0 === r.layer && 0 === a.layer)
          )
            return i(r.sign * r.mag + a.sign * a.mag);
          var o = r.layer * Math.sign(r.mag),
            u = a.layer * Math.sign(a.mag);
          if (o - u >= 2) return r;
          if (0 === o && -1 === u) {
            if (Math.abs(a.mag - Math.log10(r.mag)) > 17) return r;
            var g = Math.pow(10, Math.log10(r.mag) - a.mag),
              l = a.sign + r.sign * g;
            return e(Math.sign(l), 1, a.mag + Math.log10(Math.abs(l)));
          }
          if (1 === o && 0 === u) {
            if (Math.abs(r.mag - Math.log10(a.mag)) > 17) return r;
            (g = Math.pow(10, r.mag - Math.log10(a.mag))),
              (l = a.sign + r.sign * g);
            return e(
              Math.sign(l),
              1,
              Math.log10(a.mag) + Math.log10(Math.abs(l))
            );
          }
          if (Math.abs(r.mag - a.mag) > 17) return r;
          (g = Math.pow(10, r.mag - a.mag)), (l = a.sign + r.sign * g);
          return e(Math.sign(l), 1, a.mag + Math.log10(Math.abs(l)));
        }),
        (h.prototype.plus = function(t) {
          return this.add(t);
        }),
        (h.prototype.sub = function(t) {
          return this.add(i(t).neg());
        }),
        (h.prototype.subtract = function(t) {
          return this.sub(t);
        }),
        (h.prototype.minus = function(t) {
          return this.sub(t);
        }),
        (h.prototype.mul = function(t) {
          var r,
            a,
            s = i(t);
          if (!Number.isFinite(this.layer)) return this;
          if (!Number.isFinite(s.layer)) return s;
          if (0 === this.sign || 0 === s.sign) return n(0, 0, 0);
          if (this.layer === s.layer && this.mag === -s.mag)
            return n(this.sign * s.sign, 0, 1);
          if (
            (this.layer > s.layer ||
            (this.layer == s.layer && Math.abs(this.mag) > Math.abs(s.mag))
              ? ((r = this), (a = s))
              : ((r = s), (a = this)),
            0 === r.layer && 0 === a.layer)
          )
            return i(r.sign * a.sign * r.mag * a.mag);
          if (r.layer >= 3 || r.layer - a.layer >= 2)
            return e(r.sign * a.sign, r.layer, r.mag);
          if (1 === r.layer && 0 === a.layer)
            return e(r.sign * a.sign, 1, r.mag + Math.log10(a.mag));
          if (1 === r.layer && 1 === a.layer)
            return e(r.sign * a.sign, 1, r.mag + a.mag);
          if (2 === r.layer && 1 === a.layer) {
            var o = e(Math.sign(r.mag), r.layer - 1, Math.abs(r.mag)).add(
              e(Math.sign(a.mag), a.layer - 1, Math.abs(a.mag))
            );
            return e(r.sign * a.sign, o.layer + 1, o.sign * o.mag);
          }
          if (2 === r.layer && 2 === a.layer) {
            o = e(Math.sign(r.mag), r.layer - 1, Math.abs(r.mag)).add(
              e(Math.sign(a.mag), a.layer - 1, Math.abs(a.mag))
            );
            return e(r.sign * a.sign, o.layer + 1, o.sign * o.mag);
          }
          throw Error("Bad arguments to mul: " + this + ", " + t);
        }),
        (h.prototype.multiply = function(t) {
          return this.mul(t);
        }),
        (h.prototype.times = function(t) {
          return this.mul(t);
        }),
        (h.prototype.div = function(t) {
          var r = i(t);
          return this.mul(r.recip());
        }),
        (h.prototype.divide = function(t) {
          return this.div(t);
        }),
        (h.prototype.divideBy = function(t) {
          return this.div(t);
        }),
        (h.prototype.dividedBy = function(t) {
          return this.div(t);
        }),
        (h.prototype.recip = function() {
          return 0 === this.mag
            ? h.dNaN
            : 0 === this.layer
            ? e(this.sign, 0, 1 / this.mag)
            : e(this.sign, this.layer, -this.mag);
        }),
        (h.prototype.reciprocal = function() {
          return this.recip();
        }),
        (h.prototype.reciprocate = function() {
          return this.recip();
        }),
        (h.prototype.cmp = function(t) {
          var r = i(t);
          return this.sign > r.sign
            ? 1
            : this.sign < r.sign
            ? -1
            : this.sign * this.cmpabs(t);
        }),
        (h.prototype.cmpabs = function(t) {
          var r = i(t),
            e = this.mag > 0 ? this.layer : -this.layer,
            n = r.mag > 0 ? r.layer : -r.layer;
          return e > n
            ? 1
            : e < n
            ? -1
            : this.mag > r.mag
            ? 1
            : this.mag < r.mag
            ? -1
            : 0;
        }),
        (h.prototype.compare = function(t) {
          return this.cmp(t);
        }),
        (h.prototype.eq = function(t) {
          var r = i(t);
          return (
            this.sign === r.sign && this.layer === r.layer && this.mag === r.mag
          );
        }),
        (h.prototype.equals = function(t) {
          return this.eq(t);
        }),
        (h.prototype.neq = function(t) {
          return !this.eq(t);
        }),
        (h.prototype.notEquals = function(t) {
          return this.neq(t);
        }),
        (h.prototype.lt = function(t) {
          i(t);
          return -1 === this.cmp(t);
        }),
        (h.prototype.lte = function(t) {
          return !this.gt(t);
        }),
        (h.prototype.gt = function(t) {
          i(t);
          return 1 === this.cmp(t);
        }),
        (h.prototype.gte = function(t) {
          return !this.lt(t);
        }),
        (h.prototype.max = function(t) {
          var r = i(t);
          return this.lt(r) ? r : this;
        }),
        (h.prototype.min = function(t) {
          var r = i(t);
          return this.gt(r) ? r : this;
        }),
        (h.prototype.maxabs = function(t) {
          var r = i(t);
          return this.cmpabs(r) < 0 ? r : this;
        }),
        (h.prototype.minabs = function(t) {
          var r = i(t);
          return this.cmpabs(r) > 0 ? r : this;
        }),
        (h.prototype.clamp = function(t, r) {
          return this.max(t).min(r);
        }),
        (h.prototype.clampMin = function(t) {
          return this.max(t);
        }),
        (h.prototype.clampMax = function(t) {
          return this.min(t);
        }),
        (h.prototype.cmp_tolerance = function(t, r) {
          var e = i(t);
          return this.eq_tolerance(e, r) ? 0 : this.cmp(e);
        }),
        (h.prototype.compare_tolerance = function(t, r) {
          return this.cmp_tolerance(t, r);
        }),
        (h.prototype.eq_tolerance = function(t, r) {
          var e = i(t);
          if ((null == r && (r = 1e-7), this.sign !== e.sign)) return !1;
          if (Math.abs(this.layer - e.layer) > 1) return !1;
          var n = this.mag,
            a = e.mag;
          return (
            this.layer > e.layer && (a = s(a)),
            this.layer < e.layer && (n = s(n)),
            Math.abs(n - a) <= r * Math.max(Math.abs(n), Math.abs(a))
          );
        }),
        (h.prototype.equals_tolerance = function(t, r) {
          return this.eq_tolerance(t, r);
        }),
        (h.prototype.neq_tolerance = function(t, r) {
          return !this.eq_tolerance(t, r);
        }),
        (h.prototype.notEquals_tolerance = function(t, r) {
          return this.neq_tolerance(t, r);
        }),
        (h.prototype.lt_tolerance = function(t, r) {
          var e = i(t);
          return !this.eq_tolerance(e, r) && this.lt(e);
        }),
        (h.prototype.lte_tolerance = function(t, r) {
          var e = i(t);
          return this.eq_tolerance(e, r) || this.lt(e);
        }),
        (h.prototype.gt_tolerance = function(t, r) {
          var e = i(t);
          return !this.eq_tolerance(e, r) && this.gt(e);
        }),
        (h.prototype.gte_tolerance = function(t, r) {
          var e = i(t);
          return this.eq_tolerance(e, r) || this.gt(e);
        }),
        (h.prototype.pLog10 = function() {
          return this.lt(h.dZero) ? h.dZero : this.log10();
        }),
        (h.prototype.absLog10 = function() {
          return 0 === this.sign
            ? h.dNaN
            : this.layer > 0
            ? e(Math.sign(this.mag), this.layer - 1, Math.abs(this.mag))
            : e(1, 0, Math.log10(this.mag));
        }),
        (h.prototype.log10 = function() {
          return this.sign <= 0
            ? h.dNaN
            : this.layer > 0
            ? e(Math.sign(this.mag), this.layer - 1, Math.abs(this.mag))
            : e(this.sign, 0, Math.log10(this.mag));
        }),
        (h.prototype.log = function(t) {
          return (
            (t = i(t)),
            this.sign <= 0
              ? h.dNaN
              : t.sign <= 0
              ? h.dNaN
              : 1 === t.sign && 0 === t.layer && 1 === t.mag
              ? h.dNaN
              : 0 === this.layer && 0 === t.layer
              ? e(this.sign, 0, Math.log(this.mag) / Math.log(t.mag))
              : h.div(this.log10(), t.log10())
          );
        }),
        (h.prototype.log2 = function() {
          return this.sign <= 0
            ? h.dNaN
            : 0 === this.layer
            ? e(this.sign, 0, Math.log2(this.mag))
            : 1 === this.layer
            ? e(Math.sign(this.mag), 0, 3.321928094887362 * Math.abs(this.mag))
            : 2 === this.layer
            ? e(Math.sign(this.mag), 1, Math.abs(this.mag) + 0.5213902276543247)
            : e(Math.sign(this.mag), this.layer - 1, Math.abs(this.mag));
        }),
        (h.prototype.ln = function() {
          return this.sign <= 0
            ? h.dNaN
            : 0 === this.layer
            ? e(this.sign, 0, Math.log(this.mag))
            : 1 === this.layer
            ? e(Math.sign(this.mag), 0, 2.302585092994046 * Math.abs(this.mag))
            : 2 === this.layer
            ? e(
                Math.sign(this.mag),
                1,
                Math.abs(this.mag) + 0.36221568869946325
              )
            : e(Math.sign(this.mag), this.layer - 1, Math.abs(this.mag));
        }),
        (h.prototype.logarithm = function(t) {
          return this.log(t);
        }),
        (h.prototype.pow = function(t) {
          var r = this,
            e = i(t);
          if (0 === r.sign) return r;
          if (1 === r.sign && 0 === r.layer && 1 === r.mag) return r;
          if (0 === e.sign) return n(1, 0, 1);
          if (1 === e.sign && 0 === e.layer && 1 === e.mag) return r;
          var a = r
            .absLog10()
            .mul(e)
            .pow10();
          return -1 === this.sign && e.toNumber() % 2 == 1 ? a.neg() : a;
        }),
        (h.prototype.pow10 = function() {
          if (!Number.isFinite(this.layer) || !Number.isFinite(this.mag))
            return h.dNaN;
          var t = this;
          if (0 === t.layer) {
            var r = Math.pow(10, t.sign * t.mag);
            if (Number.isFinite(r) && Math.abs(r) > 0.1) return e(1, 0, r);
            if (0 === t.sign) return h.dOne;
            t = n(t.sign, t.layer + 1, Math.log10(t.mag));
          }
          return t.sign > 0 && t.mag > 0
            ? e(t.sign, t.layer + 1, t.mag)
            : t.sign < 0 && t.mag > 0
            ? e(-t.sign, t.layer + 1, -t.mag)
            : h.dOne;
        }),
        (h.prototype.pow_base = function(t) {
          return i(t).pow(this);
        }),
        (h.prototype.root = function(t) {
          var r = i(t);
          return this.pow(r.recip());
        }),
        (h.prototype.factorial = function() {
          return this.mag < 0
            ? this.toNumber()
                .add(1)
                .gamma()
            : 0 === this.layer
            ? this.add(1).gamma()
            : 1 === this.layer
            ? h.exp(h.mul(this, h.ln(this).sub(1)))
            : h.exp(this);
        }),
        (h.prototype.gamma = function() {
          if (this.mag < 0) return this.recip();
          if (0 === this.layer) {
            if (this.lt(n(1, 0, 24)))
              return i(
                (function(t) {
                  if (!isFinite(t)) return t;
                  if (t < -50)
                    return t === Math.trunc(t) ? Number.NEGATIVE_INFINITY : 0;
                  for (var r = 1; t < 10; ) (r *= t), ++t;
                  var i = 0.9189385332046727;
                  (i += (0.5 + (t -= 1)) * Math.log(t)), (i -= t);
                  var e = t * t,
                    n = t;
                  return (
                    (i += 1 / (12 * n)),
                    (i += 1 / (360 * (n *= e))),
                    (i += 1 / (1260 * (n *= e))),
                    (i += 1 / (1680 * (n *= e))),
                    (i += 1 / (1188 * (n *= e))),
                    (i += 691 / (360360 * (n *= e))),
                    (i += 7 / (1092 * (n *= e))),
                    (i += 3617 / (122400 * (n *= e))),
                    Math.exp(i) / r
                  );
                })(this.sign * this.mag)
              );
            var t = this.mag - 1,
              r = 0.9189385332046727;
            r += (t + 0.5) * Math.log(t);
            var e = t * t,
              a = t,
              s = 12 * a,
              o = 1 / s,
              u = (r -= t) + o;
            if (u === r) return h.exp(r);
            if ((u = (r = u) - (o = 1 / (s = 360 * (a *= e)))) === r)
              return h.exp(r);
            r = u;
            var g = 1 / (s = 1260 * (a *= e));
            return (r += g), (r -= g = 1 / (s = 1680 * (a *= e))), h.exp(r);
          }
          return 1 === this.layer
            ? h.exp(h.mul(this, h.ln(this).sub(1)))
            : h.exp(this);
        }),
        (h.prototype.lngamma = function() {
          return this.gamma().ln();
        }),
        (h.prototype.exp = function() {
          return this.mag < 0
            ? h.dOne
            : 0 === this.layer && this.mag <= 709.7
            ? i(Math.exp(this.sign * this.mag))
            : 0 === this.layer
            ? e(1, 1, this.sign * Math.log10(Math.E) * this.mag)
            : 1 === this.layer
            ? e(1, 2, this.sign * (Math.log10(0.4342944819032518) + this.mag))
            : e(1, this.layer + 1, this.sign * this.mag);
        }),
        (h.prototype.sqr = function() {
          return this.pow(2);
        }),
        (h.prototype.sqrt = function() {
          if (0 === this.layer) return i(Math.sqrt(this.sign * this.mag));
          if (1 === this.layer)
            return e(1, 2, Math.log10(this.mag) - 0.3010299956639812);
          var t = h.div(n(this.sign, this.layer - 1, this.mag), n(1, 0, 2));
          return (t.layer += 1), t.normalize(), t;
        }),
        (h.prototype.cube = function() {
          return this.pow(3);
        }),
        (h.prototype.cbrt = function() {
          return this.pow(1 / 3);
        }),
        (h.prototype.tetrate = function() {
          var t =
              arguments.length > 0 && void 0 !== arguments[0]
                ? arguments[0]
                : 2,
            r =
              arguments.length > 1 && void 0 !== arguments[1]
                ? arguments[1]
                : n(1, 0, 1);
          if (t === Number.POSITIVE_INFINITY) {
            var e = h.ln(this).neg();
            return e.lambertw().div(e);
          }
          if (t < 0) return h.iteratedlog(r, this, -t);
          r = i(r);
          var a = t - (t = Math.trunc(t));
          0 !== a &&
            (r.eq(h.dOne)
              ? (++t, (r = new h(a)))
              : (r = this.eq(10) ? r.layeradd10(a) : r.layeradd(a, this)));
          for (var s = 0; s < t; ++s) {
            if (((r = this.pow(r)), !isFinite(r.layer) || !isFinite(r.mag)))
              return r;
            if (r.layer - this.layer > 3)
              return n(r.sign, r.layer + (t - s - 1), r.mag);
            if (s > 100) return r;
          }
          return r;
        }),
        (h.prototype.iteratedexp = function() {
          var t =
              arguments.length > 0 && void 0 !== arguments[0]
                ? arguments[0]
                : 2,
            r =
              arguments.length > 1 && void 0 !== arguments[1]
                ? arguments[1]
                : n(1, 0, 1);
          return this.tetrate(t, r);
        }),
        (h.prototype.iteratedlog = function() {
          var t =
              arguments.length > 0 && void 0 !== arguments[0]
                ? arguments[0]
                : 10,
            r =
              arguments.length > 1 && void 0 !== arguments[1]
                ? arguments[1]
                : 1;
          if (r < 0) return h.tetrate(t, -r, this);
          t = i(t);
          var e = i(this),
            n = r - (r = Math.trunc(r));
          if (e.layer - t.layer > 3) {
            var a = Math.min(r, e.layer - t.layer - 3);
            (r -= a), (e.layer -= a);
          }
          for (var s = 0; s < r; ++s) {
            if (((e = e.log(t)), !isFinite(e.layer) || !isFinite(e.mag)))
              return e;
            if (s > 100) return e;
          }
          return (
            n > 0 &&
              n < 1 &&
              (e = t.eq(10) ? e.layeradd10(-n) : e.layeradd(-n, t)),
            e
          );
        }),
        (h.prototype.slog = function() {
          var t =
            arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 10;
          if (this.mag < 0) return h.dNegOne;
          t = i(t);
          var r = 0,
            e = i(this);
          if (e.layer - t.layer > 3) {
            var n = e.layer - t.layer - 3;
            (r += n), (e.layer -= n);
          }
          for (var a = 0; a < 100; ++a)
            if (e.lt(h.dZero)) (e = h.pow(t, e)), (r -= 1);
            else {
              if (e.lte(h.dOne)) return i(r + e.toNumber() - 1);
              (r += 1), (e = h.log(e, t));
            }
          return i(r);
        }),
        (h.prototype.layeradd10 = function(t) {
          t = h.fromValue_noAlloc(t).toNumber();
          var r,
            e = i(this);
          t >= 1 && ((t -= r = Math.trunc(t)), (e.layer += r));
          if (
            t <= -1 &&
            ((t -= r = Math.trunc(t)), (e.layer += r), e.layer < 0)
          )
            for (var n = 0; n < 100; ++n) {
              if ((e.layer++, (e.mag = Math.log10(e.mag)), !isFinite(e.mag)))
                return e;
              if (e.layer >= 0) break;
            }
          if (t > 0) {
            for (var a = 0; Number.isFinite(e.mag) && e.mag < 10; )
              (e.mag = Math.pow(10, e.mag)), ++a;
            for (
              e.mag > 1e10 && ((e.mag = Math.log10(e.mag)), e.layer++),
                (s = Math.log10(Math.log(1e10) / Math.log(e.mag), 10)) < t &&
                  ((e.mag = Math.log10(1e10)), e.layer++, (t -= s)),
                e.mag = Math.pow(e.mag, Math.pow(10, t));
              a > 0;

            )
              (e.mag = Math.log10(e.mag)), --a;
          } else if (t < 0) {
            for (a = 0; Number.isFinite(e.mag) && e.mag < 10; )
              (e.mag = Math.pow(10, e.mag)), ++a;
            var s;
            for (
              e.mag > 1e10 && ((e.mag = Math.log10(e.mag)), e.layer++),
                (s = Math.log10(1 / Math.log10(e.mag))) > t &&
                  ((e.mag = 1e10), e.layer--, (t -= s)),
                e.mag = Math.pow(e.mag, Math.pow(10, t));
              a > 0;

            )
              (e.mag = Math.log10(e.mag)), --a;
          }
          for (; e.layer < 0; ) e.layer++, (e.mag = Math.log10(e.mag));
          return e.normalize(), e;
        }),
        (h.prototype.layeradd = function(t, r) {
          var i = this.slog(r).toNumber() + t;
          return i >= 0
            ? h.tetrate(r, i)
            : Number.isFinite(i)
            ? i >= -1
              ? h.log(h.tetrate(r, i + 1), r)
              : void h.log(h.log(h.tetrate(r, i + 2), r), r)
            : h.dNaN;
        }),
        (h.prototype.lambertw = function() {
          if (this.lt(-0.3678794411710499))
            throw Error(
              "lambertw is unimplemented for results less than -1, sorry!"
            );
          return this.mag < 0
            ? i(o(this.toNumber()))
            : 0 === this.layer
            ? i(o(this.sign * this.mag))
            : 1 === this.layer
            ? u(this)
            : 2 === this.layer
            ? u(this)
            : this.layer >= 3
            ? n(this.sign, this.layer - 1, this.mag)
            : void 0;
        });
      var u = function(t) {
        var r,
          i,
          e,
          n,
          a =
            arguments.length > 1 && void 0 !== arguments[1]
              ? arguments[1]
              : 1e-10;
        if (!Number.isFinite(t.mag)) return t;
        if (0 === t) return t;
        if (1 === t) return 0.5671432904097838;
        h.abs(t);
        r = h.ln(t);
        for (var s = 0; s < 100; ++s) {
          if (
            ((i = h.exp(-r)),
            (e = r.sub(t.mul(i))),
            (n = r.sub(
              e.div(
                r.add(1).sub(
                  r
                    .add(2)
                    .mul(e)
                    .div(h.mul(2, r).add(2))
                )
              )
            )),
            h.abs(n.sub(r)).lt(h.abs(n).mul(a)))
          )
            return n;
          r = n;
        }
        throw Error("Iteration failed to converge: " + t);
      };
      return (
        (h.prototype.ssqrt = function() {
          if (1 == this.sign && this.layer >= 3)
            return n(this.sign, this.layer - 1, this.mag);
          var t = this.ln();
          return t.div(t.lambertw());
        }),
        (h.prototype.pentate = function() {
          var t =
              arguments.length > 0 && void 0 !== arguments[0]
                ? arguments[0]
                : 2,
            r =
              arguments.length > 1 && void 0 !== arguments[1]
                ? arguments[1]
                : n(1, 0, 1);
          r = i(r);
          var e = t - (t = Math.trunc(t));
          0 !== e &&
            (r.eq(h.dOne)
              ? (++t, (r = new h(e)))
              : (r = this.eq(10) ? r.layeradd10(e) : r.layeradd(e, this)));
          for (var a = 0; a < t; ++a) {
            if (((r = this.tetrate(r)), !isFinite(r.layer) || !isFinite(r.mag)))
              return r;
            if (a > 10) return r;
          }
          return r;
        }),
        (h.prototype.sin = function() {
          return this.mag < 0
            ? this
            : 0 === this.layer
            ? i(Math.sin(this.sign * this.mag))
            : n(0, 0, 0);
        }),
        (h.prototype.cos = function() {
          return this.mag < 0
            ? h.dOne
            : 0 === this.layer
            ? i(Math.cos(this.sign * this.mag))
            : n(0, 0, 0);
        }),
        (h.prototype.tan = function() {
          return this.mag < 0
            ? this
            : 0 === this.layer
            ? i(Math.tan(this.sign * this.mag))
            : n(0, 0, 0);
        }),
        (h.prototype.asin = function() {
          return this.mag < 0
            ? this
            : 0 === this.layer
            ? i(Math.asin(this.sign * this.mag))
            : n(Number.NaN, Number.NaN, Number.NaN);
        }),
        (h.prototype.acos = function() {
          return this.mag < 0
            ? i(Math.acos(this.toNumber()))
            : 0 === this.layer
            ? i(Math.acos(this.sign * this.mag))
            : n(Number.NaN, Number.NaN, Number.NaN);
        }),
        (h.prototype.atan = function() {
          return this.mag < 0
            ? this
            : 0 === this.layer
            ? i(Math.atan(this.sign * this.mag))
            : i(Math.atan(Infinity * this.sign));
        }),
        (h.prototype.sinh = function() {
          return this.exp()
            .sub(this.negate().exp())
            .div(2);
        }),
        (h.prototype.cosh = function() {
          return this.exp()
            .add(this.negate().exp())
            .div(2);
        }),
        (h.prototype.tanh = function() {
          return this.sinh().div(this.cosh());
        }),
        (h.prototype.asinh = function() {
          return h.ln(
            this.add(
              this.sqr()
                .add(1)
                .sqrt()
            )
          );
        }),
        (h.prototype.acosh = function() {
          return h.ln(
            this.add(
              this.sqr()
                .sub(1)
                .sqrt()
            )
          );
        }),
        (h.prototype.atanh = function() {
          return this.abs().gte(1)
            ? n(Number.NaN, Number.NaN, Number.NaN)
            : h.ln(this.add(1).div(i(1).sub(this))).div(2);
        }),
        (h.prototype.ascensionPenalty = function(t) {
          return 0 === t ? this : this.root(h.pow(10, t));
        }),
        (h.prototype.egg = function() {
          return this.add(9);
        }),
        (h.prototype.lessThanOrEqualTo = function(t) {
          return this.cmp(t) < 1;
        }),
        (h.prototype.lessThan = function(t) {
          return this.cmp(t) < 0;
        }),
        (h.prototype.greaterThanOrEqualTo = function(t) {
          return this.cmp(t) > -1;
        }),
        (h.prototype.greaterThan = function(t) {
          return this.cmp(t) > 0;
        }),
        h
      );
    })();
  return (
    (h.dZero = n(0, 0, 0)),
    (h.dOne = n(1, 0, 1)),
    (h.dNegOne = n(-1, 0, 1)),
    (h.dTwo = n(1, 0, 2)),
    (h.dTen = n(1, 0, 10)),
    (h.dNaN = n(Number.NaN, Number.NaN, Number.NaN)),
    (h.dInf = n(1, Number.POSITIVE_INFINITY, Number.POSITIVE_INFINITY)),
    (h.dNegInf = n(-1, Number.NEGATIVE_INFINITY, Number.NEGATIVE_INFINITY)),
    (h.dNumberMax = e(1, 0, Number.MAX_VALUE)),
    (h.dNumberMin = e(1, 0, Number.MIN_VALUE)),
    h
  );
});
