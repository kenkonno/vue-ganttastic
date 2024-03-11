import j from "dayjs";
import { inject as ut, computed as R, defineComponent as N, openBlock as E, createElementBlock as O, createElementVNode as Y, Fragment as z, renderList as W, unref as B, normalizeStyle as S, renderSlot as A, createTextVNode as lt, toDisplayString as Q, createCommentVNode as F, toRefs as nt, ref as G, watch as ct, nextTick as Lt, createBlock as K, Teleport as Qt, createVNode as Bt, Transition as Zt, withCtx as tt, getCurrentScope as Jt, onScopeDispose as te, getCurrentInstance as ee, onMounted as St, useSlots as ne, provide as st, withModifiers as oe, mergeProps as Gt, TransitionGroup as ae } from "vue";
var dt = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {}, Yt = { exports: {} };
(function(t, r) {
  (function(o, u) {
    t.exports = u();
  })(dt, function() {
    return function(o, u) {
      u.prototype.isSameOrBefore = function(s, c) {
        return this.isSame(s, c) || this.isBefore(s, c);
      };
    };
  });
})(Yt);
const re = Yt.exports;
var $t = { exports: {} };
(function(t, r) {
  (function(o, u) {
    t.exports = u();
  })(dt, function() {
    return function(o, u) {
      u.prototype.isSameOrAfter = function(s, c) {
        return this.isSame(s, c) || this.isAfter(s, c);
      };
    };
  });
})($t);
const ie = $t.exports;
var Rt = { exports: {} };
(function(t, r) {
  (function(o, u) {
    t.exports = u();
  })(dt, function() {
    return function(o, u, s) {
      u.prototype.isBetween = function(c, f, g, p) {
        var n = s(c), e = s(f), i = (p = p || "()")[0] === "(", l = p[1] === ")";
        return (i ? this.isAfter(n, g) : !this.isBefore(n, g)) && (l ? this.isBefore(e, g) : !this.isAfter(e, g)) || (i ? this.isBefore(n, g) : !this.isAfter(n, g)) && (l ? this.isAfter(e, g) : !this.isBefore(e, g));
      };
    };
  });
})(Rt);
const se = Rt.exports;
var Ht = { exports: {} };
(function(t, r) {
  (function(o, u) {
    t.exports = u();
  })(dt, function() {
    var o = { LTS: "h:mm:ss A", LT: "h:mm A", L: "MM/DD/YYYY", LL: "MMMM D, YYYY", LLL: "MMMM D, YYYY h:mm A", LLLL: "dddd, MMMM D, YYYY h:mm A" }, u = /(\[[^[]*\])|([-_:/.,()\s]+)|(A|a|YYYY|YY?|MM?M?M?|Do|DD?|hh?|HH?|mm?|ss?|S{1,3}|z|ZZ?)/g, s = /\d\d/, c = /\d\d?/, f = /\d*[^-_:/,()\s\d]+/, g = {}, p = function(h) {
      return (h = +h) + (h > 68 ? 1900 : 2e3);
    }, n = function(h) {
      return function(y) {
        this[h] = +y;
      };
    }, e = [/[+-]\d\d:?(\d\d)?|Z/, function(h) {
      (this.zone || (this.zone = {})).offset = function(y) {
        if (!y || y === "Z")
          return 0;
        var x = y.match(/([+-]|\d\d)/g), _ = 60 * x[1] + (+x[2] || 0);
        return _ === 0 ? 0 : x[0] === "+" ? -_ : _;
      }(h);
    }], i = function(h) {
      var y = g[h];
      return y && (y.indexOf ? y : y.s.concat(y.f));
    }, l = function(h, y) {
      var x, _ = g.meridiem;
      if (_) {
        for (var d = 1; d <= 24; d += 1)
          if (h.indexOf(_(d, 0, y)) > -1) {
            x = d > 12;
            break;
          }
      } else
        x = h === (y ? "pm" : "PM");
      return x;
    }, w = { A: [f, function(h) {
      this.afternoon = l(h, !1);
    }], a: [f, function(h) {
      this.afternoon = l(h, !0);
    }], S: [/\d/, function(h) {
      this.milliseconds = 100 * +h;
    }], SS: [s, function(h) {
      this.milliseconds = 10 * +h;
    }], SSS: [/\d{3}/, function(h) {
      this.milliseconds = +h;
    }], s: [c, n("seconds")], ss: [c, n("seconds")], m: [c, n("minutes")], mm: [c, n("minutes")], H: [c, n("hours")], h: [c, n("hours")], HH: [c, n("hours")], hh: [c, n("hours")], D: [c, n("day")], DD: [s, n("day")], Do: [f, function(h) {
      var y = g.ordinal, x = h.match(/\d+/);
      if (this.day = x[0], y)
        for (var _ = 1; _ <= 31; _ += 1)
          y(_).replace(/\[|\]/g, "") === h && (this.day = _);
    }], M: [c, n("month")], MM: [s, n("month")], MMM: [f, function(h) {
      var y = i("months"), x = (i("monthsShort") || y.map(function(_) {
        return _.slice(0, 3);
      })).indexOf(h) + 1;
      if (x < 1)
        throw new Error();
      this.month = x % 12 || x;
    }], MMMM: [f, function(h) {
      var y = i("months").indexOf(h) + 1;
      if (y < 1)
        throw new Error();
      this.month = y % 12 || y;
    }], Y: [/[+-]?\d+/, n("year")], YY: [s, function(h) {
      this.year = p(h);
    }], YYYY: [/\d{4}/, n("year")], Z: e, ZZ: e };
    function C(h) {
      var y, x;
      y = h, x = g && g.formats;
      for (var _ = (h = y.replace(/(\[[^\]]+])|(LTS?|l{1,4}|L{1,4})/g, function(k, T, M) {
        var L = M && M.toUpperCase();
        return T || x[M] || o[M] || x[L].replace(/(\[[^\]]+])|(MMMM|MM|DD|dddd)/g, function($, H, P) {
          return H || P.slice(1);
        });
      })).match(u), d = _.length, b = 0; b < d; b += 1) {
        var a = _[b], m = w[a], v = m && m[0], D = m && m[1];
        _[b] = D ? { regex: v, parser: D } : a.replace(/^\[|\]$/g, "");
      }
      return function(k) {
        for (var T = {}, M = 0, L = 0; M < d; M += 1) {
          var $ = _[M];
          if (typeof $ == "string")
            L += $.length;
          else {
            var H = $.regex, P = $.parser, q = k.slice(L), Z = H.exec(q)[0];
            P.call(T, Z), k = k.replace(Z, "");
          }
        }
        return function(X) {
          var U = X.afternoon;
          if (U !== void 0) {
            var J = X.hours;
            U ? J < 12 && (X.hours += 12) : J === 12 && (X.hours = 0), delete X.afternoon;
          }
        }(T), T;
      };
    }
    return function(h, y, x) {
      x.p.customParseFormat = !0, h && h.parseTwoDigitYear && (p = h.parseTwoDigitYear);
      var _ = y.prototype, d = _.parse;
      _.parse = function(b) {
        var a = b.date, m = b.utc, v = b.args;
        this.$u = m;
        var D = v[1];
        if (typeof D == "string") {
          var k = v[2] === !0, T = v[3] === !0, M = k || T, L = v[2];
          T && (L = v[2]), g = this.$locale(), !k && L && (g = x.Ls[L]), this.$d = function(q, Z, X) {
            try {
              if (["x", "X"].indexOf(Z) > -1)
                return new Date((Z === "X" ? 1e3 : 1) * q);
              var U = C(Z)(q), J = U.year, rt = U.month, Vt = U.day, qt = U.hours, Wt = U.minutes, Xt = U.seconds, Kt = U.milliseconds, _t = U.zone, gt = new Date(), pt = Vt || (J || rt ? 1 : gt.getDate()), mt = J || gt.getFullYear(), it = 0;
              J && !rt || (it = rt > 0 ? rt - 1 : gt.getMonth());
              var ht = qt || 0, vt = Wt || 0, yt = Xt || 0, bt = Kt || 0;
              return _t ? new Date(Date.UTC(mt, it, pt, ht, vt, yt, bt + 60 * _t.offset * 1e3)) : X ? new Date(Date.UTC(mt, it, pt, ht, vt, yt, bt)) : new Date(mt, it, pt, ht, vt, yt, bt);
            } catch {
              return new Date("");
            }
          }(a, D, m), this.init(), L && L !== !0 && (this.$L = this.locale(L).$L), M && a != this.format(D) && (this.$d = new Date("")), g = {};
        } else if (D instanceof Array)
          for (var $ = D.length, H = 1; H <= $; H += 1) {
            v[1] = D[H - 1];
            var P = x.apply(this, v);
            if (P.isValid()) {
              this.$d = P.$d, this.$L = P.$L, this.init();
              break;
            }
            H === $ && (this.$d = new Date(""));
          }
        else
          d.call(this, b);
      };
    };
  });
})(Ht);
const le = Ht.exports, It = Symbol("CHART_ROWS_KEY"), At = Symbol("CONFIG_KEY"), Pt = Symbol("EMIT_BAR_EVENT_KEY"), Ut = Symbol("BAR_CONTAINER_KEY");
function I() {
  const t = ut(At);
  if (!t)
    throw Error("Failed to inject config!");
  return t;
}
const Ft = "YYYY-MM-DD HH:mm";
function ot(t = I()) {
  const { chartStart: r, chartEnd: o, barStart: u, barEnd: s, dateFormat: c } = t, f = R(() => p(r.value)), g = R(() => p(o.value)), p = (e, i) => {
    let l;
    if (i !== void 0 && typeof e != "string" && !(e instanceof Date) && (l = i === "start" ? e[u.value] : e[s.value]), typeof e == "string")
      l = e;
    else if (e instanceof Date)
      return j(e);
    const w = c.value || Ft;
    return j(l, w, !0);
  };
  return {
    chartStartDayjs: f,
    chartEndDayjs: g,
    toDayjs: p,
    format: (e, i) => i === !1 ? e instanceof Date ? e : j(e).toDate() : (typeof e == "string" || e instanceof Date ? p(e) : e).format(i)
  };
}
function ft() {
  const { precision: t } = I(), { chartStartDayjs: r, chartEndDayjs: o } = ot(), u = R(() => {
    switch (t == null ? void 0 : t.value) {
      case "hour":
        return "day";
      case "day":
        return "month";
      case "week":
        return "month";
      case "month":
        return "year";
      default:
        throw new Error(
          "Precision prop incorrect. Must be one of the following: 'hour', 'day', 'month'"
        );
    }
  }), s = {
    hour: "HH",
    date: "DD.MMM ",
    day: "DD",
    week: "DD",
    month: "MMMM YYYY",
    year: "YYYY"
  };
  return {
    timeaxisUnits: R(() => {
      const f = [], g = [], p = u.value === "day" ? "date" : u.value, n = t.value;
      let e = r.value.startOf(n);
      const i = o.value.diff(r.value, "minutes", !0);
      let l = 0, w = e[p]();
      for (; e.isBefore(o.value) || e.isSame(o.value); ) {
        if (e[p]() !== w) {
          let d = 0;
          if (f.length === 0)
            d = e.startOf(p).diff(r.value, "minutes", !0) / i * 100;
          else if (e.isSameOrAfter(o.value))
            d = o.value.diff(
              e.subtract(1, p).startOf(p),
              "minutes",
              !0
            ) / i * 100;
          else {
            const a = e.startOf(p), m = e.subtract(1, p).startOf(p);
            d = a.diff(m, "minutes", !0) / i * 100;
          }
          const b = e.subtract(1, p);
          f.push({
            label: b.format(s[p]),
            value: String(w),
            date: b.toDate(),
            width: String(d) + "%"
          }), l = 0, w = e[p]();
        }
        let y = 0;
        g.length === 0 ? y = e.endOf(n).diff(r.value, "minutes", !0) / i * 100 : e.add(1, n).isSameOrAfter(o.value) ? y = o.value.diff(e.startOf(n), "minutes", !0) / i * 100 : y = e.endOf(n).diff(e.startOf(n), "minutes", !0) / i * 100;
        let x;
        switch (n) {
          case "week":
            x = e.startOf("week");
            break;
          default:
            x = e[n === "day" ? "date" : n]();
        }
        g.push({
          label: e.format(s[n]),
          value: String(x),
          date: e.toDate(),
          width: String(y) + "%"
        });
        const _ = e;
        e = e.add(1, n), (e.isBefore(o.value) || e.isSame(o.value)) && (l += e.diff(_, "minutes", !0));
      }
      const C = o.value.isSame(o.value.startOf(p)) ? o.value[p]() - 1 : o.value[p]();
      return f.some((y) => y.value === String(C)) || (l += o.value.diff(
        e.subtract(1, n),
        "minutes",
        !0
      ), f.push({
        label: o.value.format(s[p]),
        value: String(w),
        date: o.value.toDate(),
        width: `${l / i * 100}%`
      })), { upperUnits: f, lowerUnits: g };
    })
  };
}
function et(t = I()) {
  const { dateFormat: r, chartSize: o } = t, { chartStartDayjs: u, chartEndDayjs: s, toDayjs: c, format: f } = ot(t), g = R(() => s.value.diff(u.value, "minutes"));
  return {
    mapTimeToPosition: (e) => {
      const i = o.width.value || 0, l = c(e).diff(u.value, "minutes", !0);
      return Math.ceil(l / g.value * i);
    },
    mapPositionToTime: (e) => {
      const i = o.width.value || 0, l = e / i * g.value, w = f(u.value.add(l, "minutes"), r.value);
      if (typeof w == "string")
        return w;
      throw Error;
    }
  };
}
const ue = { class: "g-timeaxis" }, ce = ["onClick"], de = ["onClick"], fe = { class: "milestone-description milestone-description-mark" }, ge = /* @__PURE__ */ N({
  __name: "GGanttTimeaxis",
  props: {
    mileStoneList: null
  },
  emits: ["onClickTimeUnit", "onClickMilestone"],
  setup(t, { emit: r }) {
    const o = t, { precision: u, colors: s } = I(), { timeaxisUnits: c } = ft(), f = () => {
      var n;
      return ((n = o.mileStoneList) == null ? void 0 : n.length) > 0 ? { minHeight: "33%" } : { height: "50%" };
    }, { mapTimeToPosition: g } = et(), p = (n) => g(j(n).startOf("day").format("DD.MM.YYYY HH:mm"));
    return (n, e) => {
      var i;
      return E(), O("div", ue, [
        Y("div", {
          class: "g-timeunits-container",
          style: f
        }, [
          (E(!0), O(z, null, W(B(c).upperUnits, ({ label: l, value: w, date: C, width: h }, y) => (E(), O("div", {
            key: C.getTime(),
            class: "g-upper-timeunit",
            style: S({
              background: y % 2 === 0 ? B(s).primary : B(s).secondary,
              color: B(s).text,
              width: h
            })
          }, [
            A(n.$slots, "upper-timeunit", {
              label: l,
              value: w,
              date: C
            }, () => [
              lt(Q(l), 1)
            ])
          ], 4))), 128))
        ]),
        Y("div", {
          class: "g-timeunits-container",
          style: f
        }, [
          (E(!0), O(z, null, W(B(c).lowerUnits, ({ label: l, value: w, date: C, width: h }, y) => (E(), O("div", {
            key: C.getTime(),
            class: "g-timeunit",
            style: S({
              background: y % 2 === 0 ? B(s).ternary : B(s).quartenary,
              color: B(s).text,
              flexDirection: B(u) === "hour" ? "column" : "row",
              alignItems: B(u) === "hour" ? "" : "center",
              width: h
            }),
            onClick: (x) => r("onClickTimeUnit", { date: C })
          }, [
            A(n.$slots, "timeunit", {
              label: l,
              value: w,
              date: C
            }, () => [
              lt(Q(l), 1)
            ]),
            B(u) === "hour" ? (E(), O("div", {
              key: 0,
              class: "g-timeaxis-hour-pin",
              style: S({ background: B(s).text })
            }, null, 4)) : F("", !0)
          ], 12, ce))), 128))
        ]),
        ((i = t.mileStoneList) == null ? void 0 : i.length) > 0 ? (E(), O("div", {
          key: 0,
          class: "g-timeunits-container",
          style: S([f, { position: "relative" }])
        }, [
          (E(!0), O(z, null, W(t.mileStoneList, (l) => (E(), O("div", {
            style: S({ left: p(l.date) + "px", top: 0, position: "absolute" }),
            onClick: (w) => r("onClickMilestone", { milestone: l })
          }, [
            Y("p", fe, "\u25BC" + Q(l.description), 1)
          ], 12, de))), 256))
        ])) : F("", !0)
      ]);
    };
  }
});
const pe = { class: "g-grid-container" }, me = /* @__PURE__ */ N({
  __name: "GGanttGrid",
  props: {
    highlightedDates: null
  },
  setup(t) {
    const r = t, o = R(() => {
      var c;
      return (c = r.highlightedDates) == null ? void 0 : c.map((f) => f.getTime());
    }), { colors: u } = I(), { timeaxisUnits: s } = ft();
    return (c, f) => (E(), O("div", pe, [
      (E(!0), O(z, null, W(B(s).lowerUnits, ({ label: g, value: p, width: n, date: e }) => {
        var i;
        return E(), O("div", {
          key: e.getTime(),
          class: "g-grid-line",
          style: S({
            width: n,
            background: (i = B(o)) != null && i.includes(e.getTime()) ? B(u).hoverHighlight : void 0
          })
        }, null, 4);
      }), 128))
    ]));
  }
});
const he = /* @__PURE__ */ N({
  __name: "GGanttBarTooltip",
  props: {
    bar: null,
    modelValue: { type: Boolean }
  },
  setup(t) {
    const r = t, o = {
      hour: "HH:mm",
      day: "DD. MMM HH:mm",
      week: "DD. MMM HH:mm",
      month: "DD. MMMM YYYY"
    }, u = "cadetblue", { bar: s } = nt(r), { precision: c, font: f, barStart: g, barEnd: p, rowHeight: n } = I(), e = G("0px"), i = G("0px");
    ct(
      () => r.bar,
      async () => {
        var m;
        await Lt();
        const x = ((m = s == null ? void 0 : s.value) == null ? void 0 : m.ganttBarConfig.id) || "";
        if (!x)
          return;
        const _ = document.getElementById(x), { top: d, left: b } = (_ == null ? void 0 : _.getBoundingClientRect()) || {
          top: 0,
          left: 0
        }, a = Math.max(b, 10);
        e.value = `${d + n.value - 10}px`, i.value = `${a}px`;
      },
      { deep: !0, immediate: !0 }
    );
    const l = R(() => {
      var x, _;
      return ((_ = (x = s == null ? void 0 : s.value) == null ? void 0 : x.ganttBarConfig.style) == null ? void 0 : _.background) || u;
    }), { toDayjs: w } = ot(), C = R(() => {
      var x;
      return (x = s.value) == null ? void 0 : x[g.value];
    }), h = R(() => {
      var x;
      return (x = s.value) == null ? void 0 : x[p.value];
    }), y = R(() => {
      if (!(s != null && s.value))
        return "";
      const x = o[c.value], _ = w(C.value).format(x), d = w(h.value).format(x);
      return `${_} \u2013 ${d}`;
    });
    return (x, _) => (E(), K(Qt, { to: "body" }, [
      Bt(Zt, {
        name: "g-fade",
        mode: "out-in"
      }, {
        default: tt(() => [
          t.modelValue ? (E(), O("div", {
            key: 0,
            class: "g-gantt-tooltip",
            style: S({
              top: e.value,
              left: i.value,
              fontFamily: B(f)
            })
          }, [
            Y("div", {
              class: "g-gantt-tooltip-color-dot",
              style: S({ background: B(l) })
            }, null, 4),
            A(x.$slots, "default", {
              bar: B(s),
              barStart: B(C),
              barEnd: B(h)
            }, () => [
              lt(Q(B(y)), 1)
            ])
          ], 4)) : F("", !0)
        ]),
        _: 3
      })
    ]));
  }
});
const Dt = {
  default: {
    primary: "#eeeeee",
    secondary: "#E0E0E0",
    ternary: "#F5F5F5",
    quartenary: "#ededed",
    hoverHighlight: "rgba(204, 216, 219, 0.5)",
    text: "#404040",
    background: "white"
  },
  creamy: {
    primary: "#ffe8d9",
    secondary: "#fcdcc5",
    ternary: "#fff6f0",
    quartenary: "#f7ece6",
    hoverHighlight: "rgba(230, 221, 202, 0.5)",
    text: "#542d05",
    background: "white"
  },
  crimson: {
    primary: "#a82039",
    secondary: "#c41238",
    ternary: "#db4f56",
    quartenary: "#ce5f64",
    hoverHighlight: "rgba(196, 141, 141, 0.5)",
    text: "white",
    background: "white"
  },
  dark: {
    primary: "#404040",
    secondary: "#303030",
    ternary: "#353535",
    quartenary: "#383838",
    hoverHighlight: "rgba(159, 160, 161, 0.5)",
    text: "white",
    background: "#525252",
    toast: "#1f1f1f"
  },
  flare: {
    primary: "#e08a38",
    secondary: "#e67912",
    ternary: "#5e5145",
    quartenary: "#665648",
    hoverHighlight: "rgba(196, 141, 141, 0.5)",
    text: "white",
    background: "white"
  },
  fuchsia: {
    primary: "#de1d5a",
    secondary: "#b50b41",
    ternary: "#ff7da6",
    quartenary: "#f2799f",
    hoverHighlight: "rgba(196, 141, 141, 0.5)",
    text: "white",
    background: "white"
  },
  grove: {
    primary: "#3d9960",
    secondary: "#288542",
    ternary: "#72b585",
    quartenary: "#65a577",
    hoverHighlight: "rgba(160, 219, 171, 0.5)",
    text: "white",
    background: "white"
  },
  "material-blue": {
    primary: "#0D47A1",
    secondary: "#1565C0",
    ternary: "#42a5f5",
    quartenary: "#409fed",
    hoverHighlight: "rgba(110, 165, 196, 0.5)",
    text: "white",
    background: "white"
  },
  sky: {
    primary: "#b5e3ff",
    secondary: "#a1d6f7",
    ternary: "#d6f7ff",
    quartenary: "#d0edf4",
    hoverHighlight: "rgba(193, 202, 214, 0.5)",
    text: "#022c47",
    background: "white"
  },
  slumber: {
    primary: "#2a2f42",
    secondary: "#2f3447",
    ternary: "#35394d",
    quartenary: "#2c3044",
    hoverHighlight: "rgba(179, 162, 127, 0.5)",
    text: "#ffe0b3",
    background: "#38383b",
    toast: "#1f1f1f"
  },
  vue: {
    primary: "#258a5d",
    secondary: "#41B883",
    ternary: "#35495E",
    quartenary: "#2a3d51",
    hoverHighlight: "rgba(160, 219, 171, 0.5)",
    text: "white",
    background: "white"
  }
};
var kt;
const at = typeof window < "u";
at && ((kt = window == null ? void 0 : window.navigator) == null ? void 0 : kt.userAgent) && /iP(ad|hone|od)/.test(window.navigator.userAgent);
function ve(t) {
  return typeof t == "function" ? t() : B(t);
}
function ye(t) {
  return t;
}
function be(t) {
  return Jt() ? (te(t), !0) : !1;
}
function we(t, r = !0) {
  ee() ? St(t) : r ? t() : Lt(t);
}
function jt(t) {
  var r;
  const o = ve(t);
  return (r = o == null ? void 0 : o.$el) != null ? r : o;
}
const xe = at ? window : void 0;
at && window.document;
at && window.navigator;
at && window.location;
function Be(t, r = !1) {
  const o = G(), u = () => o.value = Boolean(t());
  return u(), we(u, r), o;
}
const wt = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {}, xt = "__vueuse_ssr_handlers__";
wt[xt] = wt[xt] || {};
wt[xt];
var Et = Object.getOwnPropertySymbols, _e = Object.prototype.hasOwnProperty, De = Object.prototype.propertyIsEnumerable, ke = (t, r) => {
  var o = {};
  for (var u in t)
    _e.call(t, u) && r.indexOf(u) < 0 && (o[u] = t[u]);
  if (t != null && Et)
    for (var u of Et(t))
      r.indexOf(u) < 0 && De.call(t, u) && (o[u] = t[u]);
  return o;
};
function Ee(t, r, o = {}) {
  const u = o, { window: s = xe } = u, c = ke(u, ["window"]);
  let f;
  const g = Be(() => s && "ResizeObserver" in s), p = () => {
    f && (f.disconnect(), f = void 0);
  }, n = ct(() => jt(t), (i) => {
    p(), g.value && s && i && (f = new ResizeObserver(r), f.observe(i, c));
  }, { immediate: !0, flush: "post" }), e = () => {
    p(), n();
  };
  return be(e), {
    isSupported: g,
    stop: e
  };
}
function Ce(t, r = { width: 0, height: 0 }, o = {}) {
  const u = G(r.width), s = G(r.height);
  return Ee(t, ([c]) => {
    u.value = c.contentRect.width, s.value = c.contentRect.height;
  }, o), ct(() => jt(t), (c) => {
    u.value = c ? r.width : 0, s.value = c ? r.height : 0;
  }), {
    width: u,
    height: s
  };
}
var Ct;
(function(t) {
  t.UP = "UP", t.RIGHT = "RIGHT", t.DOWN = "DOWN", t.LEFT = "LEFT", t.NONE = "NONE";
})(Ct || (Ct = {}));
var Oe = Object.defineProperty, Ot = Object.getOwnPropertySymbols, Te = Object.prototype.hasOwnProperty, Me = Object.prototype.propertyIsEnumerable, Tt = (t, r, o) => r in t ? Oe(t, r, { enumerable: !0, configurable: !0, writable: !0, value: o }) : t[r] = o, Le = (t, r) => {
  for (var o in r || (r = {}))
    Te.call(r, o) && Tt(t, o, r[o]);
  if (Ot)
    for (var o of Ot(r))
      Me.call(r, o) && Tt(t, o, r[o]);
  return t;
};
const Se = {
  easeInSine: [0.12, 0, 0.39, 0],
  easeOutSine: [0.61, 1, 0.88, 1],
  easeInOutSine: [0.37, 0, 0.63, 1],
  easeInQuad: [0.11, 0, 0.5, 0],
  easeOutQuad: [0.5, 1, 0.89, 1],
  easeInOutQuad: [0.45, 0, 0.55, 1],
  easeInCubic: [0.32, 0, 0.67, 0],
  easeOutCubic: [0.33, 1, 0.68, 1],
  easeInOutCubic: [0.65, 0, 0.35, 1],
  easeInQuart: [0.5, 0, 0.75, 0],
  easeOutQuart: [0.25, 1, 0.5, 1],
  easeInOutQuart: [0.76, 0, 0.24, 1],
  easeInQuint: [0.64, 0, 0.78, 0],
  easeOutQuint: [0.22, 1, 0.36, 1],
  easeInOutQuint: [0.83, 0, 0.17, 1],
  easeInExpo: [0.7, 0, 0.84, 0],
  easeOutExpo: [0.16, 1, 0.3, 1],
  easeInOutExpo: [0.87, 0, 0.13, 1],
  easeInCirc: [0.55, 0, 1, 0.45],
  easeOutCirc: [0, 0.55, 0.45, 1],
  easeInOutCirc: [0.85, 0, 0.15, 1],
  easeInBack: [0.36, 0, 0.66, -0.56],
  easeOutBack: [0.34, 1.56, 0.64, 1],
  easeInOutBack: [0.68, -0.6, 0.32, 1.6]
};
Le({
  linear: ye
}, Se);
const Ge = {
  key: 0,
  class: "g-footer"
}, Ye = { class: "g-footer-container" }, $e = /* @__PURE__ */ N({
  __name: "GGanttFooter",
  props: {
    labels: null
  },
  setup(t) {
    const { precision: r, colors: o } = I(), { timeaxisUnits: u } = ft();
    return (s, c) => t.labels ? (E(), O("div", Ge, [
      Y("div", Ye, [
        (E(!0), O(z, null, W(B(u).lowerUnits, ({ label: f, value: g, date: p, width: n }, e) => (E(), O("div", {
          key: f,
          class: "g-timeunit",
          style: S({
            background: e % 2 === 0 ? B(o).ternary : B(o).quartenary,
            color: B(o).text,
            flexDirection: B(r) === "hour" ? "column" : "row",
            alignItems: B(r) === "hour" ? "" : "center",
            width: n
          })
        }, [
          A(s.$slots, "timeunit", {
            label: f,
            value: g,
            date: p
          }, () => [
            lt(Q(t.labels[e]), 1)
          ], !0)
        ], 4))), 128))
      ])
    ])) : F("", !0);
  }
});
const Re = (t, r) => {
  const o = t.__vccOpts || t;
  for (const [u, s] of r)
    o[u] = s;
  return o;
}, He = /* @__PURE__ */ Re($e, [["__scopeId", "data-v-400629df"]]), Ie = /* @__PURE__ */ N({
  __name: "GGanttDrawTodayLine",
  emits: ["today-line-position-x"],
  setup(t, { emit: r }) {
    const { mapTimeToPosition: o } = et(), u = R(() => (r("today-line-position-x", { xPosition: o(j().startOf("day").format("DD.MM.YYYY HH:mm")) }), o(j().startOf("day").format("DD.MM.YYYY HH:mm"))));
    return (s, c) => (E(), O("div", {
      class: "vertical-line",
      style: S({ left: B(u) + "px", top: 0 })
    }, null, 4));
  }
});
const Ae = /* @__PURE__ */ N({
  __name: "GGanttDrawVerticalLine",
  props: {
    date: null,
    color: null
  },
  setup(t) {
    const r = t, { mapTimeToPosition: o } = et(), u = R(() => o(r.date.startOf("day").format("DD.MM.YYYY HH:mm")));
    return (s, c) => (E(), O("div", {
      class: "vertical-line",
      style: S({ left: B(u) + "px", top: 0, backgroundColor: t.color })
    }, null, 4));
  }
});
const Pe = { class: "g-gantt-rows-container" }, Ue = /* @__PURE__ */ N({
  __name: "GGanttChart",
  props: {
    chartStart: null,
    chartEnd: null,
    precision: { default: "day" },
    barStart: null,
    barEnd: null,
    dateFormat: { type: [String, Boolean], default: Ft },
    width: { default: "100%" },
    hideTimeaxis: { type: Boolean, default: !1 },
    colorScheme: { default: "default" },
    grid: { type: Boolean, default: !1 },
    pushOnOverlap: { type: Boolean, default: !1 },
    noOverlap: { type: Boolean, default: !1 },
    rowHeight: { default: 40 },
    highlightedDates: { default: () => [] },
    font: { default: "inherit" },
    footerLabels: null,
    sticky: { type: Boolean },
    displayTodayLine: { type: Boolean },
    mileStoneList: null,
    verticalLines: null
  },
  emits: ["click-bar", "mousedown-bar", "mouseup-bar", "dblclick-bar", "mouseenter-bar", "mouseleave-bar", "dragstart-bar", "drag-bar", "dragend-bar", "contextmenu-bar", "today-line-position-x", "onClickTimeUnit", "onClickMilestone"],
  setup(t, { emit: r }) {
    const o = t, { width: u, font: s, colorScheme: c } = nt(o), f = ne(), g = R(
      () => typeof c.value != "string" ? c.value : Dt[c.value] || Dt.default
    ), p = () => {
      var a;
      const d = (a = f.default) == null ? void 0 : a.call(f), b = [];
      return d && d.forEach((m) => {
        var v;
        if ((v = m.props) != null && v.bars) {
          const D = m.props.bars;
          b.push(D);
        } else
          Array.isArray(m.children) && m.children.forEach((D) => {
            var T;
            const k = D;
            if ((T = k == null ? void 0 : k.props) != null && T.bars) {
              const M = k.props.bars;
              b.push(M);
            }
          });
      }), b;
    }, n = G(!1), e = G(!1), i = G(void 0);
    let l;
    const w = (d) => {
      l && clearTimeout(l), l = setTimeout(() => {
        n.value = !0;
      }, 800), i.value = d;
    }, C = () => {
      clearTimeout(l), n.value = !1;
    }, h = (d, b, a, m) => {
      switch (d.type) {
        case "click":
          r("click-bar", { bar: b, e: d, datetime: a });
          break;
        case "mousedown":
          r("mousedown-bar", { bar: b, e: d, datetime: a });
          break;
        case "mouseup":
          r("mouseup-bar", { bar: b, e: d, datetime: a });
          break;
        case "dblclick":
          r("dblclick-bar", { bar: b, e: d, datetime: a });
          break;
        case "mouseenter":
          w(b), r("mouseenter-bar", { bar: b, e: d });
          break;
        case "mouseleave":
          C(), r("mouseleave-bar", { bar: b, e: d });
          break;
        case "dragstart":
          e.value = !0, r("dragstart-bar", { bar: b, e: d });
          break;
        case "drag":
          r("drag-bar", { bar: b, e: d });
          break;
        case "dragend":
          e.value = !1, r("dragend-bar", { bar: b, e: d });
          break;
        case "contextmenu":
          r("contextmenu-bar", { bar: b, e: d, datetime: a });
          break;
      }
    }, y = G(null), x = G(null), _ = Ce(y);
    return st(It, p), st(At, {
      ...nt(o),
      colors: g,
      chartSize: _
    }), st(Pt, h), (d, b) => (E(), O(z, null, [
      Y("div", {
        style: S([{ display: "flex", "flex-flow": "column" }, t.sticky ? "position: sticky; left:0;z-index:100; background: white;" : ""]),
        class: "g-gantt-wrapper",
        ref_key: "gGanttWrapperRef",
        ref: x
      }, [
        A(d.$slots, "side-menu")
      ], 4),
      Y("div", {
        ref_key: "ganttChart",
        ref: y,
        class: "g-gantt-chart",
        style: S({ width: B(u), background: B(g).background, fontFamily: B(s) })
      }, [
        t.hideTimeaxis ? F("", !0) : (E(), K(ge, {
          key: 0,
          "mile-stone-list": t.mileStoneList,
          onOnClickTimeUnit: b[0] || (b[0] = (a) => d.$emit("onClickTimeUnit", a)),
          onOnClickMilestone: b[1] || (b[1] = (a) => d.$emit("onClickMilestone", a))
        }, {
          "upper-timeunit": tt(({ label: a, value: m, date: v }) => [
            A(d.$slots, "upper-timeunit", {
              label: a,
              value: m,
              date: v
            })
          ]),
          timeunit: tt(({ label: a, value: m, date: v }) => [
            A(d.$slots, "timeunit", {
              label: a,
              value: m,
              date: v
            })
          ]),
          _: 3
        }, 8, ["mile-stone-list"])),
        Y("div", Pe, [
          t.grid ? (E(), K(me, {
            key: 0,
            "highlighted-dates": t.highlightedDates
          }, null, 8, ["highlighted-dates"])) : F("", !0),
          t.displayTodayLine ? (E(), K(Ie, {
            key: 1,
            onTodayLinePositionX: b[2] || (b[2] = (a) => r("today-line-position-x", a))
          })) : F("", !0),
          (E(!0), O(z, null, W(t.verticalLines, (a) => (E(), K(Ae, {
            date: a.date,
            color: a.color
          }, null, 8, ["date", "color"]))), 256)),
          A(d.$slots, "default")
        ]),
        t.hideTimeaxis ? F("", !0) : (E(), K(He, {
          key: 1,
          labels: t.footerLabels
        }, null, 8, ["labels"])),
        Bt(he, {
          "model-value": n.value || e.value,
          bar: i.value
        }, {
          default: tt(() => [
            A(d.$slots, "bar-tooltip", { bar: i.value })
          ]),
          _: 3
        }, 8, ["model-value", "bar"])
      ], 4),
      Y("div", null, [
        A(d.$slots, "footer")
      ])
    ], 64));
  }
});
function Mt(t, r = () => null, o = () => null, u = I()) {
  const { barStart: s, barEnd: c, pushOnOverlap: f } = u, g = G(!1);
  let p = 0, n;
  const { mapPositionToTime: e } = et(u), { toDayjs: i } = ot(u), l = (d) => {
    const b = document.getElementById(t.ganttBarConfig.id);
    if (!b)
      return;
    switch (p = d.clientX - (b.getBoundingClientRect().left || 0), d.target.className) {
      case "g-gantt-bar-handle-left":
        document.body.style.cursor = "ew-resize", n = h;
        break;
      case "g-gantt-bar-handle-right":
        document.body.style.cursor = "ew-resize", n = y;
        break;
      default:
        n = C;
    }
    g.value = !0, window.addEventListener("mousemove", n), window.addEventListener("mouseup", _);
  }, w = () => {
    var a;
    const d = document.getElementById(t.ganttBarConfig.id), b = (a = d == null ? void 0 : d.closest(".g-gantt-row-bars-container")) == null ? void 0 : a.getBoundingClientRect();
    return { barElement: d, barContainer: b };
  }, C = (d) => {
    const { barElement: b, barContainer: a } = w();
    if (!b || !a)
      return;
    const m = b.getBoundingClientRect().width, v = d.clientX - a.left - p, D = v + m;
    if (!x(v, D)) {
      if (t[s.value].substring(0, 10) != e(v).substring(0, 10)) {
        const k = i(t[s.value]), M = i(t[c.value]).diff(k, "minute"), L = e(v).substring(0, 10) + " 00:00";
        t[s.value] = L, t[c.value] = i(L).add(M, "minute").format("DD.MM.YYYY HH:mm");
      }
      r(d, t);
    }
  }, h = (d) => {
    const { barElement: b, barContainer: a } = w();
    if (!b || !a)
      return;
    const m = d.clientX - a.left, v = e(m);
    if (!i(v).isSameOrAfter(i(t, "end"))) {
      if (t[s.value].substring(0, 10) != e(m).substring(0, 10)) {
        const D = e(m).substring(0, 10) + " 00:00";
        t[s.value] = D;
      }
      r(d, t);
    }
  }, y = (d) => {
    const { barElement: b, barContainer: a } = w();
    if (!b || !a)
      return;
    const m = d.clientX - a.left, v = e(m);
    if (!i(v).isSameOrBefore(i(t, "start"))) {
      if (t[s.value].substring(0, 10) != e(m).substring(0, 10)) {
        const D = e(m).substring(0, 10) + " 23:59";
        t[c.value] = D;
      }
      r(d, t);
    }
  }, x = (d, b) => {
    if (!f.value)
      return !1;
    const a = t.ganttBarConfig.dragLimitLeft, m = t.ganttBarConfig.dragLimitRight;
    return d && a != null && d < a || b && m != null && b > m;
  }, _ = (d) => {
    g.value = !1, document.body.style.cursor = "", window.removeEventListener("mousemove", n), window.removeEventListener("mouseup", _), o(d, t);
  };
  return {
    isDragging: g,
    initDrag: l
  };
}
function zt() {
  const t = ut(It);
  if (!t)
    throw Error("Failed to inject getChartRows!");
  return t;
}
function Nt() {
  const t = ut(Pt);
  if (!t)
    throw Error("Failed to inject emitBarEvent!");
  return t;
}
function Fe() {
  const t = I(), r = zt(), o = Nt(), { pushOnOverlap: u, barStart: s, barEnd: c, noOverlap: f, dateFormat: g } = t, p = /* @__PURE__ */ new Map(), { toDayjs: n, format: e } = ot(), i = (a, m) => {
    const { initDrag: v } = Mt(a, w, _, t);
    o({ ...m, type: "dragstart" }, a), v(m), d(a);
  }, l = (a, m) => {
    const v = a.ganttBarConfig.bundle;
    v != null && (r().forEach((D) => {
      D.forEach((k) => {
        if (k.ganttBarConfig.bundle === v) {
          const T = k === a ? _ : () => null, { initDrag: M } = Mt(k, w, T, t);
          M(m), d(k);
        }
      });
    }), o({ ...m, type: "dragstart" }, a));
  }, w = (a, m) => {
    o({ ...a, type: "drag" }, m), C(m);
  }, C = (a) => {
    if (!(u != null && u.value))
      return;
    let m = a, { overlapBar: v, overlapType: D } = h(m);
    for (; v; ) {
      d(v);
      const k = n(m[s.value]), T = n(m[c.value]), M = n(v[s.value]), L = n(v[c.value]);
      let $;
      switch (D) {
        case "left":
          $ = L.diff(k, "minutes", !0), v[c.value] = e(m[s.value], g.value), v[s.value] = e(
            M.subtract($, "minutes"),
            g.value
          );
          break;
        case "right":
          $ = T.diff(M, "minutes", !0), v[s.value] = e(T, g.value), v[c.value] = e(
            L.add($, "minutes"),
            g.value
          );
          break;
        default:
          console.warn(
            "Vue-Ganttastic: One bar is inside of the other one! This should never occur while push-on-overlap is active!"
          );
          return;
      }
      v && (D === "left" || D === "right") && y(v, $, D), m = v, { overlapBar: v, overlapType: D } = h(v);
    }
  }, h = (a) => {
    let m, v, D;
    const k = r().find((H) => H.includes(a)) || [], T = n(a[s.value]), M = n(a[c.value]);
    return { overlapBar: k.find((H) => {
      if (H === a)
        return !1;
      const P = n(H[s.value]), q = n(H[c.value]);
      return m = T.isBetween(P, q), v = M.isBetween(P, q), D = P.isBetween(T, M) || q.isBetween(T, M), m || v || D;
    }), overlapType: m ? "left" : v ? "right" : D ? "between" : null };
  }, y = (a, m, v) => {
    d(a), a.ganttBarConfig.bundle && r().forEach((D) => {
      D.forEach((k) => {
        k.ganttBarConfig.bundle === a.ganttBarConfig.bundle && k !== a && (d(k), x(k, m, v));
      });
    });
  }, x = (a, m, v) => {
    switch (v) {
      case "left":
        a[s.value] = e(
          n(a, "start").subtract(m, "minutes"),
          g.value
        ), a[c.value] = e(
          n(a, "end").subtract(m, "minutes"),
          g.value
        );
        break;
      case "right":
        a[s.value] = e(
          n(a, "start").add(m, "minutes"),
          g.value
        ), a[c.value] = e(n(a, "end").add(m, "minutes"), g.value);
    }
    C(a);
  }, _ = (a, m) => {
    b();
    const v = {
      ...a,
      type: "dragend"
    };
    o(v, m, void 0, new Map(p)), p.clear();
  }, d = (a) => {
    if (!p.has(a)) {
      const m = a[s.value], v = a[c.value];
      p.set(a, { oldStart: m, oldEnd: v });
    }
  }, b = () => {
    if (u.value || !f.value)
      return;
    let a = !1;
    p.forEach((m, v) => {
      const { overlapBar: D } = h(v);
      D != null && (a = !0);
    }), a && p.forEach(({ oldStart: m, oldEnd: v }, D) => {
      D[s.value] = m, D[c.value] = v;
    });
  };
  return {
    initDragOfBar: i,
    initDragOfBundle: l
  };
}
function je() {
  const { pushOnOverlap: t } = I(), r = zt(), o = (f) => {
    const g = [];
    return f != null && r().forEach((p) => {
      p.forEach((n) => {
        n.ganttBarConfig.bundle === f && g.push(n);
      });
    }), g;
  }, u = (f) => {
    if (!t.value || f.ganttBarConfig.pushOnOverlap === !1)
      return;
    for (const p of ["left", "right"]) {
      const n = p, { gapDistanceSoFar: e, bundleBarsAndGapDist: i } = s(
        f,
        0,
        n
      );
      let l = e;
      const w = i;
      if (!w)
        continue;
      for (let h = 0; h < w.length; h++) {
        const y = w[h].bar, x = w[h].gapDistance;
        o(y.ganttBarConfig.bundle).filter(
          (d) => d !== y
        ).forEach((d) => {
          const b = s(d, x, n), a = b.gapDistanceSoFar, m = b.bundleBarsAndGapDist;
          a != null && (!l || a < l) && (l = a), m.forEach((v) => {
            w.find((D) => D.bar === v.bar) || w.push(v);
          });
        });
      }
      const C = document.getElementById(f.ganttBarConfig.id);
      l != null && n === "left" ? f.ganttBarConfig.dragLimitLeft = C.offsetLeft - l : l != null && n === "right" && (f.ganttBarConfig.dragLimitRight = C.offsetLeft + C.offsetWidth + l);
    }
    o(f.ganttBarConfig.bundle).forEach((p) => {
      p.ganttBarConfig.dragLimitLeft = f.ganttBarConfig.dragLimitLeft, p.ganttBarConfig.dragLimitRight = f.ganttBarConfig.dragLimitRight;
    });
  }, s = (f, g = 0, p) => {
    const n = f.ganttBarConfig.bundle ? [{ bar: f, gapDistance: g }] : [];
    let e = f, i = c(e, p);
    if (p === "left")
      for (; i; ) {
        const l = document.getElementById(e.ganttBarConfig.id), w = document.getElementById(i.ganttBarConfig.id), C = w.offsetLeft + w.offsetWidth;
        if (g += l.offsetLeft - C, i.ganttBarConfig.immobile)
          return { gapDistanceSoFar: g, bundleBarsAndGapDist: n };
        i.ganttBarConfig.bundle && n.push({
          bar: i,
          gapDistance: g
        }), e = i, i = c(i, "left");
      }
    if (p === "right")
      for (; i; ) {
        const l = document.getElementById(e.ganttBarConfig.id), w = document.getElementById(i.ganttBarConfig.id), C = l.offsetLeft + l.offsetWidth;
        if (g += w.offsetLeft - C, i.ganttBarConfig.immobile)
          return { gapDistanceSoFar: g, bundleBarsAndGapDist: n };
        i.ganttBarConfig.bundle && n.push({
          bar: i,
          gapDistance: g
        }), e = i, i = c(i, "right");
      }
    return { gapDistanceSoFar: null, bundleBarsAndGapDist: n };
  }, c = (f, g) => {
    const p = document.getElementById(f.ganttBarConfig.id), n = r().find((i) => i.includes(f)) || [];
    let e = [];
    return g === "left" ? e = n.filter((i) => {
      const l = document.getElementById(i.ganttBarConfig.id);
      return l && l.offsetLeft < p.offsetLeft && i.ganttBarConfig.pushOnOverlap !== !1;
    }) : e = n.filter((i) => {
      const l = document.getElementById(i.ganttBarConfig.id);
      return l && l.offsetLeft > p.offsetLeft && i.ganttBarConfig.pushOnOverlap !== !1;
    }), e.length > 0 ? e.reduce((i, l) => {
      const w = document.getElementById(i.ganttBarConfig.id), C = document.getElementById(l.ganttBarConfig.id), h = Math.abs(w.offsetLeft - p.offsetLeft), y = Math.abs(C.offsetLeft - p.offsetLeft);
      return h < y ? i : l;
    }, e[0]) : null;
  };
  return {
    setDragLimitsOfGanttBar: u
  };
}
const ze = ["id"], Ne = { class: "g-gantt-bar-label" }, Ve = { style: { "z-index": "100" } }, qe = /* @__PURE__ */ Y("div", { class: "g-gantt-bar-handle-left" }, null, -1), We = /* @__PURE__ */ Y("div", { class: "g-gantt-bar-handle-right" }, null, -1), Xe = /* @__PURE__ */ N({
  __name: "GGanttBar",
  props: {
    bar: null
  },
  setup(t) {
    const r = t, o = Nt(), u = I(), { rowHeight: s } = u, { bar: c } = nt(r), { mapTimeToPosition: f, mapPositionToTime: g } = et(), { initDragOfBar: p, initDragOfBundle: n } = Fe(), { setDragLimitsOfGanttBar: e } = je(), i = G(!1), l = R(() => c.value.ganttBarConfig);
    function w(k) {
      l.value.bundle != null ? n(c.value, k) : p(c.value, k), i.value = !0;
    }
    const C = () => {
      e(c.value), !l.value.immobile && (window.addEventListener("mousemove", w, {
        once: !0
      }), window.addEventListener(
        "mouseup",
        () => {
          window.removeEventListener("mousemove", w), i.value = !1;
        },
        { once: !0 }
      ));
    }, h = ut(Ut), y = (k) => {
      var L;
      k.preventDefault(), k.type === "mousedown" && C();
      const T = (L = h == null ? void 0 : h.value) == null ? void 0 : L.getBoundingClientRect();
      if (!T)
        return;
      const M = g(k.clientX - T.left);
      o(k, c.value, M);
    }, { barStart: x, barEnd: _, width: d, chartStart: b, chartEnd: a, chartSize: m } = u, v = G(0), D = G(0);
    return St(() => {
      ct(
        [c, d, b, a, m.width],
        () => {
          v.value = f(c.value[x.value]), D.value = f(c.value[_.value]);
        },
        { deep: !0, immediate: !0 }
      );
    }), (k, T) => (E(), O("div", {
      id: B(l).id,
      class: "g-gantt-bar",
      style: S({
        ...B(l).style,
        position: "absolute",
        top: `${B(s) * 0.1}px`,
        left: `${v.value}px`,
        width: `${D.value - v.value}px`,
        height: `${B(s) * 0.8}px`,
        zIndex: i.value ? 3 : 2
      }),
      onMousedown: y,
      onClick: y,
      onDblclick: y,
      onMouseenter: y,
      onMouseleave: y,
      onContextmenu: y
    }, [
      Y("div", Ne, [
        A(k.$slots, "default", { bar: B(c) }, () => [
          Y("div", Ve, Q(B(l).label || ""), 1),
          B(l).progress ? (E(), O("div", {
            key: 0,
            style: S([{ position: "absolute", height: "100%", left: "0" }, {
              width: B(l).progress + "%",
              backgroundColor: B(l).progressColor
            }])
          }, null, 4)) : F("", !0)
        ])
      ]),
      B(l).hasHandles ? (E(), O(z, { key: 0 }, [
        qe,
        We
      ], 64)) : F("", !0)
    ], 44, ze));
  }
});
const Ke = /* @__PURE__ */ N({
  __name: "GGanttRow",
  props: {
    bars: null,
    highlightOnHover: { type: Boolean }
  },
  emits: ["drop"],
  setup(t, { emit: r }) {
    const o = t, { rowHeight: u, colors: s } = I(), { highlightOnHover: c } = nt(o), f = G(!1), g = R(() => ({
      height: `${u.value}px`,
      background: (c == null ? void 0 : c.value) && f.value ? s.value.hoverHighlight : null
    })), { mapPositionToTime: p } = et(), n = G(null);
    st(Ut, n);
    const e = (i) => {
      var h;
      const l = (h = n.value) == null ? void 0 : h.getBoundingClientRect();
      if (!l) {
        console.error("Vue-Ganttastic: failed to find bar container element for row.");
        return;
      }
      const w = i.clientX - l.left, C = p(w);
      r("drop", { e: i, datetime: C });
    };
    return (i, l) => (E(), O("div", {
      class: "g-gantt-row",
      style: S(B(g)),
      onDragover: l[0] || (l[0] = oe((w) => f.value = !0, ["prevent"])),
      onDragleave: l[1] || (l[1] = (w) => f.value = !1),
      onDrop: l[2] || (l[2] = (w) => e(w)),
      onMouseover: l[3] || (l[3] = (w) => f.value = !0),
      onMouseleave: l[4] || (l[4] = (w) => f.value = !1)
    }, [
      F("", !0),
      Y("div", Gt({
        ref_key: "barContainer",
        ref: n,
        class: "g-gantt-row-bars-container"
      }, i.$attrs), [
        Bt(ae, {
          name: "bar-transition",
          tag: "div"
        }, {
          default: tt(() => [
            (E(!0), O(z, null, W(t.bars, (w) => (E(), K(Xe, {
              key: w.ganttBarConfig.id,
              bar: w
            }, {
              default: tt(() => [
                A(i.$slots, "bar-label", { bar: w })
              ]),
              _: 2
            }, 1032, ["bar"]))), 128))
          ]),
          _: 3
        })
      ], 16)
    ], 36));
  }
});
const Qe = /* @__PURE__ */ N({
  __name: "GGanttLabelRow",
  props: {
    labels: null,
    styles: null
  },
  setup(t) {
    const { rowHeight: r, colors: o } = I(), { timeaxisUnits: u } = ft();
    return (s, c) => (E(), O("div", {
      class: "g-gantt-row",
      style: S({ height: B(r) + "px" })
    }, [
      Y("div", Gt({
        ref: "barContainer",
        class: "g-gantt-row-bars-container"
      }, s.$attrs), [
        (E(!0), O(z, null, W(B(u).lowerUnits, ({ label: f, width: g, date: p }, n) => (E(), O("div", {
          key: p.getTime(),
          class: "g-timeunit",
          style: S({
            color: B(o).text,
            textAlign: "center",
            width: g
          })
        }, [
          Y("span", {
            style: S(t.styles != null ? t.styles[n] : void 0)
          }, Q(t.labels[n]), 5)
        ], 4))), 128))
      ], 16)
    ], 4));
  }
});
function Ze() {
  j.extend(re), j.extend(ie), j.extend(se), j.extend(le);
}
const nn = {
  install(t, r) {
    Ze(), t.component("GGanttChart", Ue), t.component("GGanttRow", Ke), t.component("GGanttLabelRow", Qe);
  }
};
function V(t, r = "top") {
  if (!t || typeof document > "u")
    return;
  const o = document.head, u = document.createElement("style");
  r === "top" && o.firstChild ? o.insertBefore(u, o.firstChild) : o.appendChild(u), u.appendChild(document.createTextNode(t));
}
V(`
.g-gantt-row {
  width: 100%;
  transition: background 0.4s;
  position: relative;
}
.g-gantt-row > .g-gantt-row-bars-container {
  position: relative;
  border-top: 1px solid #eaeaea;
  width: 100%;
  border-bottom: 1px solid #eaeaea;
}
.g-gantt-row-label {
  position: absolute;
  top: 0;
  left: 0px;
  padding: 0px 8px;
  display: flex;
  align-items: center;
  height: 60%;
  min-height: 20px;
  font-size: 0.8em;
  font-weight: bold;
  border-bottom-right-radius: 6px;
  background: #f2f2f2;
  z-index: 3;
  box-shadow: 0px 1px 4px 0px rgba(0, 0, 0, 0.6);
}
.bar-transition-leave-active,
.bar-transition-enter-active {
  transition: all 0.2s;
}
.bar-transition-enter-from,
.bar-transition-leave-to {
  transform: scale(0.8);
  opacity: 0;
}
`, "top");
V(`
.g-gantt-chart {
  position: relative;
  display: flex;
  flex-direction: column;
  overflow-x: hidden;
  -webkit-touch-callout: none;
  -webkit-user-select: none;
     -moz-user-select: none;
          user-select: none;
  border-radius: 5px;
  font-feature-settings: "tnum";
  font-variant-numeric: tabular-nums;
}
.g-gantt-rows-container {
  position: relative;
}
`, "top");
V(`
.g-gantt-row {
  width: 100%;
  transition: background 0.4s;
  position: relative;
}
.g-gantt-row > .g-gantt-row-bars-container {
  position: relative;
  border-top: 1px solid #eaeaea;
  width: 100%;
  border-bottom: 1px solid #eaeaea;
  display: flex;
  height: 100%;
}

`, "top");
V(`
.g-gantt-bar {
  display: flex;
  justify-content: center;
  align-items: center;
  background: cadetblue;
  overflow: hidden;
}
.g-gantt-bar-label {
  width: 100%;
  height: 100%;
  box-sizing: border-box;
  padding: 0 14px 0 14px; /* 14px is the width of the handle */
  display: flex;
  justify-content: center;
  align-items: center;
}
.g-gantt-bar-label > * {
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}
.g-gantt-bar-handle-left,
.g-gantt-bar-handle-right {
  position: absolute;
  width: 10px;
  height: 100%;
  background: white;
  opacity: 0.7;
  border-radius: 0px;
  cursor: ew-resize;
  top: 0;
}
.g-gantt-bar-handle-left {
  left: 0;
}
.g-gantt-bar-handle-right {
  right: 0;
}
.g-gantt-bar-label img {
  pointer-events: none;
}
`, "top");
V(`
.g-timeaxis {
  position: sticky;
  top: 0;
  width: 100%;
  height: 8vh;
  min-height: 75px;
  background: white;
  z-index: 4;
  box-shadow: 0px 1px 3px 2px rgba(50, 50, 50, 0.5);
  display: flex;
  flex-direction: column;
}
.g-timeunits-container {
  display: flex;
  width: 100%;
  height: 50%;
}
.g-timeunit {
  height: 100%;
  font-size: 65%;
  display: flex;
  flex-direction: column;
  justify-content: center;
}
.g-upper-timeunit {
  display: flex;
  height: 100%;
  justify-content: center;
  align-items: center;
}
.g-timeaxis-hour-pin {
  width: 1px;
  height: 10px;
}
.milestone-description-mark {
  margin-left: -11px !important;
}
.milestone-description-mark {
  width: 24px;
  text-align: center;
}
.milestone-description {
  margin: 0;
  display: inline-block;
  font-size: 0.8rem;
  width: 0;
  white-space: nowrap;
}
.milestone-description > span {
}

`, "top");
V(`
.g-grid-container {
  position: absolute;
  top: 0;
  left: 0%;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: space-between;
}
.g-grid-line {
  width: 1px;
  height: 100%;
  border-left: 1px solid #eaeaea;
}
`, "top");
V(`
.vertical-line {
  width: 2px;
  height: 100%;
  background-color: red;
  position: absolute;
  z-index: 1;
}
`, "top");
V(`
.vertical-line {
  width: 2px;
  height: 100%;
  background-color: red;
  position: absolute;
  z-index: 1;
}
`, "top");
V(`
.g-gantt-tooltip {
  position: fixed;
  background: black;
  color: white;
  z-index: 4;
  font-size: 0.85em;
  padding: 5px;
  border-radius: 3px;
  transition: opacity 0.2s;
  display: flex;
  align-items: center;
  font-feature-settings: "tnum";
  font-variant-numeric: tabular-nums;
}
.g-gantt-tooltip:before {
  content: "";
  position: absolute;
  top: 0;
  left: 10%;
  width: 0;
  height: 0;
  border: 10px solid transparent;
  border-bottom-color: black;
  border-top: 0;
  margin-left: -5px;
  margin-top: -5px;
}
.g-gantt-tooltip-color-dot {
  width: 8px;
  height: 8px;
  border-radius: 100%;
  margin-right: 4px;
}
.g-fade-enter-active,
.g-fade-leave-active {
  transition: opacity 0.3s ease;
}
.g-fade-enter-from,
.g-fade-leave-to {
  opacity: 0;
}
`, "top");
V(`
.g-footer[data-v-400629df] {
  position: sticky;
  top: 0;
  width: 100%;
  min-height: 45px;
  background: white;
  z-index: 4;
  box-shadow: 0px 1px 3px 2px rgba(50, 50, 50, 0.5);
  display: flex;
  flex-direction: column;
}
.g-footer-container[data-v-400629df] {
  display: flex;
  width: 100%;
  height: 100%;
}
.g-timeunit[data-v-400629df] {
  height: 100%;
  font-size: 65%;
  display: flex;
  flex-direction: column;
  justify-content: center;
}

`, "top");
export {
  Ue as GGanttChart,
  Qe as GGanttLabelRow,
  Ke as GGanttRow,
  nn as default,
  Ze as extendDayjs,
  nn as ganttastic
};
