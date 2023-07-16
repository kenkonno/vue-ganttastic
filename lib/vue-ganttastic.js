import N from "dayjs";
import { inject as st, computed as R, defineComponent as K, openBlock as k, createElementBlock as L, createElementVNode as I, Fragment as X, renderList as rt, unref as O, normalizeStyle as U, renderSlot as P, createTextVNode as vt, toDisplayString as ot, createCommentVNode as W, toRefs as Z, ref as $, watch as lt, nextTick as Tt, createBlock as it, Teleport as Qt, createVNode as wt, Transition as Xt, withCtx as q, getCurrentScope as Zt, onScopeDispose as Jt, getCurrentInstance as te, onMounted as Mt, useSlots as ee, provide as at, withModifiers as ne, mergeProps as ae, TransitionGroup as re } from "vue";
var ut = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {}, Lt = { exports: {} };
(function(t, i) {
  (function(n, l) {
    t.exports = l();
  })(ut, function() {
    return function(n, l) {
      l.prototype.isSameOrBefore = function(d, u) {
        return this.isSame(d, u) || this.isBefore(d, u);
      };
    };
  });
})(Lt);
const oe = Lt.exports;
var $t = { exports: {} };
(function(t, i) {
  (function(n, l) {
    t.exports = l();
  })(ut, function() {
    return function(n, l) {
      l.prototype.isSameOrAfter = function(d, u) {
        return this.isSame(d, u) || this.isAfter(d, u);
      };
    };
  });
})($t);
const ie = $t.exports;
var Gt = { exports: {} };
(function(t, i) {
  (function(n, l) {
    t.exports = l();
  })(ut, function() {
    return function(n, l, d) {
      l.prototype.isBetween = function(u, f, g, c) {
        var a = d(u), e = d(f), o = (c = c || "()")[0] === "(", s = c[1] === ")";
        return (o ? this.isAfter(a, g) : !this.isBefore(a, g)) && (s ? this.isBefore(e, g) : !this.isAfter(e, g)) || (o ? this.isBefore(a, g) : !this.isAfter(a, g)) && (s ? this.isAfter(e, g) : !this.isBefore(e, g));
      };
    };
  });
})(Gt);
const se = Gt.exports;
var It = { exports: {} };
(function(t, i) {
  (function(n, l) {
    t.exports = l();
  })(ut, function() {
    var n = { LTS: "h:mm:ss A", LT: "h:mm A", L: "MM/DD/YYYY", LL: "MMMM D, YYYY", LLL: "MMMM D, YYYY h:mm A", LLLL: "dddd, MMMM D, YYYY h:mm A" }, l = /(\[[^[]*\])|([-_:/.,()\s]+)|(A|a|YYYY|YY?|MM?M?M?|Do|DD?|hh?|HH?|mm?|ss?|S{1,3}|z|ZZ?)/g, d = /\d\d/, u = /\d\d?/, f = /\d*[^-_:/,()\s\d]+/, g = {}, c = function(v) {
      return (v = +v) + (v > 68 ? 1900 : 2e3);
    }, a = function(v) {
      return function(b) {
        this[v] = +b;
      };
    }, e = [/[+-]\d\d:?(\d\d)?|Z/, function(v) {
      (this.zone || (this.zone = {})).offset = function(b) {
        if (!b || b === "Z")
          return 0;
        var w = b.match(/([+-]|\d\d)/g), h = 60 * w[1] + (+w[2] || 0);
        return h === 0 ? 0 : w[0] === "+" ? -h : h;
      }(v);
    }], o = function(v) {
      var b = g[v];
      return b && (b.indexOf ? b : b.s.concat(b.f));
    }, s = function(v, b) {
      var w, h = g.meridiem;
      if (h) {
        for (var p = 1; p <= 24; p += 1)
          if (v.indexOf(h(p, 0, b)) > -1) {
            w = p > 12;
            break;
          }
      } else
        w = v === (b ? "pm" : "PM");
      return w;
    }, B = { A: [f, function(v) {
      this.afternoon = s(v, !1);
    }], a: [f, function(v) {
      this.afternoon = s(v, !0);
    }], S: [/\d/, function(v) {
      this.milliseconds = 100 * +v;
    }], SS: [d, function(v) {
      this.milliseconds = 10 * +v;
    }], SSS: [/\d{3}/, function(v) {
      this.milliseconds = +v;
    }], s: [u, a("seconds")], ss: [u, a("seconds")], m: [u, a("minutes")], mm: [u, a("minutes")], H: [u, a("hours")], h: [u, a("hours")], HH: [u, a("hours")], hh: [u, a("hours")], D: [u, a("day")], DD: [d, a("day")], Do: [f, function(v) {
      var b = g.ordinal, w = v.match(/\d+/);
      if (this.day = w[0], b)
        for (var h = 1; h <= 31; h += 1)
          b(h).replace(/\[|\]/g, "") === v && (this.day = h);
    }], M: [u, a("month")], MM: [d, a("month")], MMM: [f, function(v) {
      var b = o("months"), w = (o("monthsShort") || b.map(function(h) {
        return h.slice(0, 3);
      })).indexOf(v) + 1;
      if (w < 1)
        throw new Error();
      this.month = w % 12 || w;
    }], MMMM: [f, function(v) {
      var b = o("months").indexOf(v) + 1;
      if (b < 1)
        throw new Error();
      this.month = b % 12 || b;
    }], Y: [/[+-]?\d+/, a("year")], YY: [d, function(v) {
      this.year = c(v);
    }], YYYY: [/\d{4}/, a("year")], Z: e, ZZ: e };
    function D(v) {
      var b, w;
      b = v, w = g && g.formats;
      for (var h = (v = b.replace(/(\[[^\]]+])|(LTS?|l{1,4}|L{1,4})/g, function(E, C, S) {
        var T = S && S.toUpperCase();
        return C || w[S] || n[S] || w[T].replace(/(\[[^\]]+])|(MMMM|MM|DD|dddd)/g, function(M, G, Y) {
          return G || Y.slice(1);
        });
      })).match(l), p = h.length, x = 0; x < p; x += 1) {
        var r = h[x], y = B[r], m = y && y[0], _ = y && y[1];
        h[x] = _ ? { regex: m, parser: _ } : r.replace(/^\[|\]$/g, "");
      }
      return function(E) {
        for (var C = {}, S = 0, T = 0; S < p; S += 1) {
          var M = h[S];
          if (typeof M == "string")
            T += M.length;
          else {
            var G = M.regex, Y = M.parser, j = E.slice(T), z = G.exec(j)[0];
            Y.call(C, z), E = E.replace(z, "");
          }
        }
        return function(F) {
          var A = F.afternoon;
          if (A !== void 0) {
            var V = F.hours;
            A ? V < 12 && (F.hours += 12) : V === 12 && (F.hours = 0), delete F.afternoon;
          }
        }(C), C;
      };
    }
    return function(v, b, w) {
      w.p.customParseFormat = !0, v && v.parseTwoDigitYear && (c = v.parseTwoDigitYear);
      var h = b.prototype, p = h.parse;
      h.parse = function(x) {
        var r = x.date, y = x.utc, m = x.args;
        this.$u = y;
        var _ = m[1];
        if (typeof _ == "string") {
          var E = m[2] === !0, C = m[3] === !0, S = E || C, T = m[2];
          C && (T = m[2]), g = this.$locale(), !E && T && (g = w.Ls[T]), this.$d = function(j, z, F) {
            try {
              if (["x", "X"].indexOf(z) > -1)
                return new Date((z === "X" ? 1e3 : 1) * j);
              var A = D(z)(j), V = A.year, et = A.month, zt = A.day, Vt = A.hours, qt = A.minutes, Wt = A.seconds, Kt = A.milliseconds, xt = A.zone, ct = new Date(), dt = zt || (V || et ? 1 : ct.getDate()), ft = V || ct.getFullYear(), nt = 0;
              V && !et || (nt = et > 0 ? et - 1 : ct.getMonth());
              var gt = Vt || 0, ht = qt || 0, pt = Wt || 0, mt = Kt || 0;
              return xt ? new Date(Date.UTC(ft, nt, dt, gt, ht, pt, mt + 60 * xt.offset * 1e3)) : F ? new Date(Date.UTC(ft, nt, dt, gt, ht, pt, mt)) : new Date(ft, nt, dt, gt, ht, pt, mt);
            } catch {
              return new Date("");
            }
          }(r, _, y), this.init(), T && T !== !0 && (this.$L = this.locale(T).$L), S && r != this.format(_) && (this.$d = new Date("")), g = {};
        } else if (_ instanceof Array)
          for (var M = _.length, G = 1; G <= M; G += 1) {
            m[1] = _[G - 1];
            var Y = w.apply(this, m);
            if (Y.isValid()) {
              this.$d = Y.$d, this.$L = Y.$L, this.init();
              break;
            }
            G === M && (this.$d = new Date(""));
          }
        else
          p.call(this, x);
      };
    };
  });
})(It);
const le = It.exports, Rt = Symbol("CHART_ROWS_KEY"), Yt = Symbol("CONFIG_KEY"), At = Symbol("EMIT_BAR_EVENT_KEY"), Ht = Symbol("BAR_CONTAINER_KEY");
function H() {
  const t = st(Yt);
  if (!t)
    throw Error("Failed to inject config!");
  return t;
}
const Pt = "YYYY-MM-DD HH:mm";
function J(t = H()) {
  const { chartStart: i, chartEnd: n, barStart: l, barEnd: d, dateFormat: u } = t, f = R(() => c(i.value)), g = R(() => c(n.value)), c = (e, o) => {
    let s;
    if (o !== void 0 && typeof e != "string" && !(e instanceof Date) && (s = o === "start" ? e[l.value] : e[d.value]), typeof e == "string")
      s = e;
    else if (e instanceof Date)
      return N(e);
    const B = u.value || Pt;
    return N(s, B, !0);
  };
  return {
    chartStartDayjs: f,
    chartEndDayjs: g,
    toDayjs: c,
    format: (e, o) => o === !1 ? e instanceof Date ? e : N(e).toDate() : (typeof e == "string" || e instanceof Date ? c(e) : e).format(o)
  };
}
function Ut() {
  const { precision: t } = H(), { chartStartDayjs: i, chartEndDayjs: n } = J(), l = R(() => {
    switch (t == null ? void 0 : t.value) {
      case "hour":
        return "day";
      case "day":
        return "month";
      case "month":
        return "year";
      default:
        throw new Error(
          "Precision prop incorrect. Must be one of the following: 'hour', 'day', 'month'"
        );
    }
  }), d = {
    hour: "HH",
    date: "DD.MMM ",
    day: "DD",
    month: "MMMM YYYY",
    year: "YYYY"
  };
  return {
    timeaxisUnits: R(() => {
      const f = [], g = [], c = l.value === "day" ? "date" : l.value, a = t.value;
      let e = i.value.startOf(a);
      const o = n.value.diff(i.value, "minutes", !0);
      let s = 0, B = e[c]();
      for (; e.isBefore(n.value) || e.isSame(n.value); ) {
        if (e[c]() !== B) {
          let h = 0;
          if (f.length === 0)
            h = e.startOf(c).diff(i.value, "minutes", !0) / o * 100;
          else if (e.isSameOrAfter(n.value))
            h = n.value.diff(
              e.subtract(1, c).startOf(c),
              "minutes",
              !0
            ) / o * 100;
          else {
            const x = e.startOf(c), r = e.subtract(1, c).startOf(c);
            h = x.diff(r, "minutes", !0) / o * 100;
          }
          const p = e.subtract(1, c);
          f.push({
            label: p.format(d[c]),
            value: String(B),
            date: p.toDate(),
            width: String(h) + "%"
          }), s = 0, B = e[c]();
        }
        let b = 0;
        g.length === 0 ? b = e.endOf(a).diff(i.value, "minutes", !0) / o * 100 : e.add(1, a).isSameOrAfter(n.value) ? b = n.value.diff(e.startOf(a), "minutes", !0) / o * 100 : b = e.endOf(a).diff(e.startOf(a), "minutes", !0) / o * 100, g.push({
          label: e.format(d[a]),
          value: String(e[a === "day" ? "date" : a]()),
          date: e.toDate(),
          width: String(b) + "%"
        });
        const w = e;
        e = e.add(1, a), (e.isBefore(n.value) || e.isSame(n.value)) && (s += e.diff(w, "minutes", !0));
      }
      const D = n.value.isSame(n.value.startOf(c)) ? n.value[c]() - 1 : n.value[c]();
      return f.some((b) => b.value === String(D)) || (s += n.value.diff(
        e.subtract(1, a),
        "minutes",
        !0
      ), f.push({
        label: n.value.format(d[c]),
        value: String(B),
        date: n.value.toDate(),
        width: `${s / o * 100}%`
      })), { upperUnits: f, lowerUnits: g };
    })
  };
}
const ue = { class: "g-timeaxis" }, ce = { class: "g-timeunits-container" }, de = { class: "g-timeunits-container" }, fe = /* @__PURE__ */ K({
  __name: "GGanttTimeaxis",
  setup(t) {
    const { precision: i, colors: n } = H(), { timeaxisUnits: l } = Ut();
    return (d, u) => (k(), L("div", ue, [
      I("div", ce, [
        (k(!0), L(X, null, rt(O(l).upperUnits, ({ label: f, value: g, date: c, width: a }, e) => (k(), L("div", {
          key: f,
          class: "g-upper-timeunit",
          style: U({
            background: e % 2 === 0 ? O(n).primary : O(n).secondary,
            color: O(n).text,
            width: a
          })
        }, [
          P(d.$slots, "upper-timeunit", {
            label: f,
            value: g,
            date: c
          }, () => [
            vt(ot(f), 1)
          ])
        ], 4))), 128))
      ]),
      I("div", de, [
        (k(!0), L(X, null, rt(O(l).lowerUnits, ({ label: f, value: g, date: c, width: a }, e) => (k(), L("div", {
          key: f,
          class: "g-timeunit",
          style: U({
            background: e % 2 === 0 ? O(n).ternary : O(n).quartenary,
            color: O(n).text,
            flexDirection: O(i) === "hour" ? "column" : "row",
            alignItems: O(i) === "hour" ? "" : "center",
            width: a
          })
        }, [
          P(d.$slots, "timeunit", {
            label: f,
            value: g,
            date: c
          }, () => [
            vt(ot(f), 1)
          ]),
          O(i) === "hour" ? (k(), L("div", {
            key: 0,
            class: "g-timeaxis-hour-pin",
            style: U({ background: O(n).text })
          }, null, 4)) : W("", !0)
        ], 4))), 128))
      ])
    ]));
  }
});
const ge = { class: "g-grid-container" }, he = /* @__PURE__ */ K({
  __name: "GGanttGrid",
  props: {
    highlightedUnits: null
  },
  setup(t) {
    const { colors: i } = H(), { timeaxisUnits: n } = Ut();
    return (l, d) => (k(), L("div", ge, [
      (k(!0), L(X, null, rt(O(n).lowerUnits, ({ label: u, value: f, width: g }) => {
        var c;
        return k(), L("div", {
          key: u,
          class: "g-grid-line",
          style: U({
            width: g,
            background: (c = t.highlightedUnits) != null && c.includes(Number(f)) ? O(i).hoverHighlight : void 0
          })
        }, null, 4);
      }), 128))
    ]));
  }
});
const pe = /* @__PURE__ */ K({
  __name: "GGanttBarTooltip",
  props: {
    bar: null,
    modelValue: { type: Boolean }
  },
  setup(t) {
    const i = t, n = {
      hour: "HH:mm",
      day: "DD. MMM HH:mm",
      month: "DD. MMMM YYYY"
    }, l = "cadetblue", { bar: d } = Z(i), { precision: u, font: f, barStart: g, barEnd: c, rowHeight: a } = H(), e = $("0px"), o = $("0px");
    lt(
      () => i.bar,
      async () => {
        var y;
        await Tt();
        const w = ((y = d == null ? void 0 : d.value) == null ? void 0 : y.ganttBarConfig.id) || "";
        if (!w)
          return;
        const h = document.getElementById(w), { top: p, left: x } = (h == null ? void 0 : h.getBoundingClientRect()) || {
          top: 0,
          left: 0
        }, r = Math.max(x, 10);
        e.value = `${p + a.value - 10}px`, o.value = `${r}px`;
      },
      { deep: !0, immediate: !0 }
    );
    const s = R(() => {
      var w, h;
      return ((h = (w = d == null ? void 0 : d.value) == null ? void 0 : w.ganttBarConfig.style) == null ? void 0 : h.background) || l;
    }), { toDayjs: B } = J(), D = R(() => {
      var w;
      return (w = d.value) == null ? void 0 : w[g.value];
    }), v = R(() => {
      var w;
      return (w = d.value) == null ? void 0 : w[c.value];
    }), b = R(() => {
      if (!(d != null && d.value))
        return "";
      const w = n[u.value], h = B(D.value).format(w), p = B(v.value).format(w);
      return `${h} \u2013 ${p}`;
    });
    return (w, h) => (k(), it(Qt, { to: "body" }, [
      wt(Xt, {
        name: "g-fade",
        mode: "out-in"
      }, {
        default: q(() => [
          t.modelValue ? (k(), L("div", {
            key: 0,
            class: "g-gantt-tooltip",
            style: U({
              top: e.value,
              left: o.value,
              fontFamily: O(f)
            })
          }, [
            I("div", {
              class: "g-gantt-tooltip-color-dot",
              style: U({ background: O(s) })
            }, null, 4),
            P(w.$slots, "default", {
              bar: O(d),
              barStart: O(D),
              barEnd: O(v)
            }, () => [
              vt(ot(O(b)), 1)
            ])
          ], 4)) : W("", !0)
        ]),
        _: 3
      })
    ]));
  }
});
const _t = {
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
var Et;
const tt = typeof window < "u";
tt && ((Et = window == null ? void 0 : window.navigator) == null ? void 0 : Et.userAgent) && /iP(ad|hone|od)/.test(window.navigator.userAgent);
function me(t) {
  return typeof t == "function" ? t() : O(t);
}
function ve(t) {
  return t;
}
function ye(t) {
  return Zt() ? (Jt(t), !0) : !1;
}
function be(t, i = !0) {
  te() ? Mt(t) : i ? t() : Tt(t);
}
function jt(t) {
  var i;
  const n = me(t);
  return (i = n == null ? void 0 : n.$el) != null ? i : n;
}
const we = tt ? window : void 0;
tt && window.document;
tt && window.navigator;
tt && window.location;
function Be(t, i = !1) {
  const n = $(), l = () => n.value = Boolean(t());
  return l(), be(l, i), n;
}
const yt = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {}, bt = "__vueuse_ssr_handlers__";
yt[bt] = yt[bt] || {};
yt[bt];
var Ot = Object.getOwnPropertySymbols, xe = Object.prototype.hasOwnProperty, _e = Object.prototype.propertyIsEnumerable, Ee = (t, i) => {
  var n = {};
  for (var l in t)
    xe.call(t, l) && i.indexOf(l) < 0 && (n[l] = t[l]);
  if (t != null && Ot)
    for (var l of Ot(t))
      i.indexOf(l) < 0 && _e.call(t, l) && (n[l] = t[l]);
  return n;
};
function Oe(t, i, n = {}) {
  const l = n, { window: d = we } = l, u = Ee(l, ["window"]);
  let f;
  const g = Be(() => d && "ResizeObserver" in d), c = () => {
    f && (f.disconnect(), f = void 0);
  }, a = lt(() => jt(t), (o) => {
    c(), g.value && d && o && (f = new ResizeObserver(i), f.observe(o, u));
  }, { immediate: !0, flush: "post" }), e = () => {
    c(), a();
  };
  return ye(e), {
    isSupported: g,
    stop: e
  };
}
function De(t, i = { width: 0, height: 0 }, n = {}) {
  const l = $(i.width), d = $(i.height);
  return Oe(t, ([u]) => {
    l.value = u.contentRect.width, d.value = u.contentRect.height;
  }, n), lt(() => jt(t), (u) => {
    l.value = u ? i.width : 0, d.value = u ? i.height : 0;
  }), {
    width: l,
    height: d
  };
}
var Dt;
(function(t) {
  t.UP = "UP", t.RIGHT = "RIGHT", t.DOWN = "DOWN", t.LEFT = "LEFT", t.NONE = "NONE";
})(Dt || (Dt = {}));
var Ce = Object.defineProperty, Ct = Object.getOwnPropertySymbols, Se = Object.prototype.hasOwnProperty, ke = Object.prototype.propertyIsEnumerable, St = (t, i, n) => i in t ? Ce(t, i, { enumerable: !0, configurable: !0, writable: !0, value: n }) : t[i] = n, Te = (t, i) => {
  for (var n in i || (i = {}))
    Se.call(i, n) && St(t, n, i[n]);
  if (Ct)
    for (var n of Ct(i))
      ke.call(i, n) && St(t, n, i[n]);
  return t;
};
const Me = {
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
Te({
  linear: ve
}, Me);
const Le = { style: { display: "flex", overflow: "scroll" } }, $e = { style: { display: "flex" } }, Ge = { style: { display: "flex", "flex-flow": "column" } }, Ie = /* @__PURE__ */ I("div", {
  class: "g-timeaxis",
  style: { width: "auto" }
}, " table headers ", -1), Re = { class: "g-gantt-rows-container" }, Ye = /* @__PURE__ */ K({
  __name: "GGanttChart",
  props: {
    chartStart: null,
    chartEnd: null,
    precision: { default: "day" },
    barStart: null,
    barEnd: null,
    dateFormat: { type: [String, Boolean], default: Pt },
    width: { default: "100%" },
    hideTimeaxis: { type: Boolean, default: !1 },
    colorScheme: { default: "default" },
    grid: { type: Boolean, default: !1 },
    pushOnOverlap: { type: Boolean, default: !1 },
    noOverlap: { type: Boolean, default: !1 },
    rowHeight: { default: 40 },
    highlightedUnits: { default: () => [] },
    font: { default: "inherit" }
  },
  emits: ["click-bar", "mousedown-bar", "mouseup-bar", "dblclick-bar", "mouseenter-bar", "mouseleave-bar", "dragstart-bar", "drag-bar", "dragend-bar", "contextmenu-bar"],
  setup(t, { emit: i }) {
    const n = t, { width: l, font: d, colorScheme: u } = Z(n), f = ee(), g = R(
      () => typeof u.value != "string" ? u.value : _t[u.value] || _t.default
    ), c = () => {
      var x;
      const h = (x = f.default) == null ? void 0 : x.call(f), p = [];
      return h && h.forEach((r) => {
        var y;
        if ((y = r.props) != null && y.bars) {
          const m = r.props.bars;
          p.push(m);
        } else
          Array.isArray(r.children) && r.children.forEach((m) => {
            var E;
            const _ = m;
            if ((E = _ == null ? void 0 : _.props) != null && E.bars) {
              const C = _.props.bars;
              p.push(C);
            }
          });
      }), p;
    }, a = $(!1), e = $(!1), o = $(void 0);
    let s;
    const B = (h) => {
      s && clearTimeout(s), s = setTimeout(() => {
        a.value = !0;
      }, 800), o.value = h;
    }, D = () => {
      clearTimeout(s), a.value = !1;
    }, v = (h, p, x, r) => {
      switch (h.type) {
        case "click":
          i("click-bar", { bar: p, e: h, datetime: x });
          break;
        case "mousedown":
          i("mousedown-bar", { bar: p, e: h, datetime: x });
          break;
        case "mouseup":
          i("mouseup-bar", { bar: p, e: h, datetime: x });
          break;
        case "dblclick":
          i("dblclick-bar", { bar: p, e: h, datetime: x });
          break;
        case "mouseenter":
          B(p), i("mouseenter-bar", { bar: p, e: h });
          break;
        case "mouseleave":
          D(), i("mouseleave-bar", { bar: p, e: h });
          break;
        case "dragstart":
          e.value = !0, i("dragstart-bar", { bar: p, e: h });
          break;
        case "drag":
          i("drag-bar", { bar: p, e: h });
          break;
        case "dragend":
          e.value = !1, i("dragend-bar", { bar: p, e: h });
          break;
        case "contextmenu":
          i("contextmenu-bar", { bar: p, e: h, datetime: x });
          break;
      }
    }, b = $(null), w = De(b);
    return at(Rt, c), at(Yt, {
      ...Z(n),
      colors: g,
      chartSize: w
    }), at(At, v), (h, p) => (k(), L("div", Le, [
      I("div", $e, [
        I("div", Ge, [
          Ie,
          P(h.$slots, "rows")
        ]),
        I("div", {
          ref_key: "ganttChart",
          ref: b,
          class: "g-gantt-chart",
          style: U({ width: O(l), background: O(g).background, fontFamily: O(d) })
        }, [
          t.hideTimeaxis ? W("", !0) : (k(), it(fe, { key: 0 }, {
            "upper-timeunit": q(({ label: x, value: r, date: y }) => [
              P(h.$slots, "upper-timeunit", {
                label: x,
                value: r,
                date: y
              })
            ]),
            timeunit: q(({ label: x, value: r, date: y }) => [
              P(h.$slots, "timeunit", {
                label: x,
                value: r,
                date: y
              })
            ]),
            _: 3
          })),
          t.grid ? (k(), it(he, {
            key: 1,
            "highlighted-units": t.highlightedUnits
          }, null, 8, ["highlighted-units"])) : W("", !0),
          I("div", Re, [
            P(h.$slots, "default")
          ]),
          wt(pe, {
            "model-value": a.value || e.value,
            bar: o.value
          }, {
            default: q(() => [
              P(h.$slots, "bar-tooltip", { bar: o.value })
            ]),
            _: 3
          }, 8, ["model-value", "bar"])
        ], 4)
      ])
    ]));
  }
});
function Bt(t = H()) {
  const { dateFormat: i, chartSize: n } = t, { chartStartDayjs: l, chartEndDayjs: d, toDayjs: u, format: f } = J(t), g = R(() => d.value.diff(l.value, "minutes"));
  return {
    mapTimeToPosition: (e) => {
      const o = n.width.value || 0, s = u(e).diff(l.value, "minutes", !0);
      return Math.ceil(s / g.value * o);
    },
    mapPositionToTime: (e) => {
      const o = n.width.value || 0, s = e / o * g.value;
      return f(l.value.add(s, "minutes"), i.value);
    }
  };
}
function kt(t, i = () => null, n = () => null, l = H()) {
  const { barStart: d, barEnd: u, pushOnOverlap: f } = l, g = $(!1);
  let c = 0, a;
  const { mapPositionToTime: e } = Bt(l), { toDayjs: o } = J(l), s = (p) => {
    const x = document.getElementById(t.ganttBarConfig.id);
    if (!x)
      return;
    switch (c = p.clientX - (x.getBoundingClientRect().left || 0), p.target.className) {
      case "g-gantt-bar-handle-left":
        document.body.style.cursor = "ew-resize", a = v;
        break;
      case "g-gantt-bar-handle-right":
        document.body.style.cursor = "ew-resize", a = b;
        break;
      default:
        a = D;
    }
    g.value = !0, window.addEventListener("mousemove", a), window.addEventListener("mouseup", h);
  }, B = () => {
    var r;
    const p = document.getElementById(t.ganttBarConfig.id), x = (r = p == null ? void 0 : p.closest(".g-gantt-row-bars-container")) == null ? void 0 : r.getBoundingClientRect();
    return { barElement: p, barContainer: x };
  }, D = (p) => {
    const { barElement: x, barContainer: r } = B();
    if (!x || !r)
      return;
    const y = x.getBoundingClientRect().width, m = p.clientX - r.left - c, _ = m + y;
    w(m, _) || (t[d.value] = e(m), t[u.value] = e(_), i(p, t));
  }, v = (p) => {
    const { barElement: x, barContainer: r } = B();
    if (!x || !r)
      return;
    const y = p.clientX - r.left, m = e(y);
    o(m).isSameOrAfter(o(t, "end")) || (t[d.value] = m, i(p, t));
  }, b = (p) => {
    const { barElement: x, barContainer: r } = B();
    if (!x || !r)
      return;
    const y = p.clientX - r.left, m = e(y);
    o(m).isSameOrBefore(o(t, "start")) || (t[u.value] = m, i(p, t));
  }, w = (p, x) => {
    if (!f.value)
      return !1;
    const r = t.ganttBarConfig.dragLimitLeft, y = t.ganttBarConfig.dragLimitRight;
    return p && r != null && p < r || x && y != null && x > y;
  }, h = (p) => {
    g.value = !1, document.body.style.cursor = "", window.removeEventListener("mousemove", a), window.removeEventListener("mouseup", h), n(p, t);
  };
  return {
    isDragging: g,
    initDrag: s
  };
}
function Ft() {
  const t = st(Rt);
  if (!t)
    throw Error("Failed to inject getChartRows!");
  return t;
}
function Nt() {
  const t = st(At);
  if (!t)
    throw Error("Failed to inject emitBarEvent!");
  return t;
}
function Ae() {
  const t = H(), i = Ft(), n = Nt(), { pushOnOverlap: l, barStart: d, barEnd: u, noOverlap: f, dateFormat: g } = t, c = /* @__PURE__ */ new Map(), { toDayjs: a, format: e } = J(), o = (r, y) => {
    const { initDrag: m } = kt(r, B, h, t);
    n({ ...y, type: "dragstart" }, r), m(y), p(r);
  }, s = (r, y) => {
    const m = r.ganttBarConfig.bundle;
    m != null && (i().forEach((_) => {
      _.forEach((E) => {
        if (E.ganttBarConfig.bundle === m) {
          const C = E === r ? h : () => null, { initDrag: S } = kt(E, B, C, t);
          S(y), p(E);
        }
      });
    }), n({ ...y, type: "dragstart" }, r));
  }, B = (r, y) => {
    n({ ...r, type: "drag" }, y), D(y);
  }, D = (r) => {
    if (!(l != null && l.value))
      return;
    let y = r, { overlapBar: m, overlapType: _ } = v(y);
    for (; m; ) {
      p(m);
      const E = a(y[d.value]), C = a(y[u.value]), S = a(m[d.value]), T = a(m[u.value]);
      let M;
      switch (_) {
        case "left":
          M = T.diff(E, "minutes", !0), m[u.value] = e(y[d.value], g.value), m[d.value] = e(
            S.subtract(M, "minutes"),
            g.value
          );
          break;
        case "right":
          M = C.diff(S, "minutes", !0), m[d.value] = e(C, g.value), m[u.value] = e(
            T.add(M, "minutes"),
            g.value
          );
          break;
        default:
          console.warn(
            "Vue-Ganttastic: One bar is inside of the other one! This should never occur while push-on-overlap is active!"
          );
          return;
      }
      m && (_ === "left" || _ === "right") && b(m, M, _), y = m, { overlapBar: m, overlapType: _ } = v(m);
    }
  }, v = (r) => {
    let y, m, _;
    const E = i().find((G) => G.includes(r)) || [], C = a(r[d.value]), S = a(r[u.value]);
    return { overlapBar: E.find((G) => {
      if (G === r)
        return !1;
      const Y = a(G[d.value]), j = a(G[u.value]);
      return y = C.isBetween(Y, j), m = S.isBetween(Y, j), _ = Y.isBetween(C, S) || j.isBetween(C, S), y || m || _;
    }), overlapType: y ? "left" : m ? "right" : _ ? "between" : null };
  }, b = (r, y, m) => {
    p(r), r.ganttBarConfig.bundle && i().forEach((_) => {
      _.forEach((E) => {
        E.ganttBarConfig.bundle === r.ganttBarConfig.bundle && E !== r && (p(E), w(E, y, m));
      });
    });
  }, w = (r, y, m) => {
    switch (m) {
      case "left":
        r[d.value] = e(
          a(r, "start").subtract(y, "minutes"),
          g.value
        ), r[u.value] = e(
          a(r, "end").subtract(y, "minutes"),
          g.value
        );
        break;
      case "right":
        r[d.value] = e(
          a(r, "start").add(y, "minutes"),
          g.value
        ), r[u.value] = e(a(r, "end").add(y, "minutes"), g.value);
    }
    D(r);
  }, h = (r, y) => {
    x();
    const m = {
      ...r,
      type: "dragend"
    };
    n(m, y, void 0, new Map(c)), c.clear();
  }, p = (r) => {
    if (!c.has(r)) {
      const y = r[d.value], m = r[u.value];
      c.set(r, { oldStart: y, oldEnd: m });
    }
  }, x = () => {
    if (l.value || !f.value)
      return;
    let r = !1;
    c.forEach((y, m) => {
      const { overlapBar: _ } = v(m);
      _ != null && (r = !0);
    }), r && c.forEach(({ oldStart: y, oldEnd: m }, _) => {
      _[d.value] = y, _[u.value] = m;
    });
  };
  return {
    initDragOfBar: o,
    initDragOfBundle: s
  };
}
function He() {
  const { pushOnOverlap: t } = H(), i = Ft(), n = (f) => {
    const g = [];
    return f != null && i().forEach((c) => {
      c.forEach((a) => {
        a.ganttBarConfig.bundle === f && g.push(a);
      });
    }), g;
  }, l = (f) => {
    if (!t.value || f.ganttBarConfig.pushOnOverlap === !1)
      return;
    for (const c of ["left", "right"]) {
      const a = c, { gapDistanceSoFar: e, bundleBarsAndGapDist: o } = d(
        f,
        0,
        a
      );
      let s = e;
      const B = o;
      if (!B)
        continue;
      for (let v = 0; v < B.length; v++) {
        const b = B[v].bar, w = B[v].gapDistance;
        n(b.ganttBarConfig.bundle).filter(
          (p) => p !== b
        ).forEach((p) => {
          const x = d(p, w, a), r = x.gapDistanceSoFar, y = x.bundleBarsAndGapDist;
          r != null && (!s || r < s) && (s = r), y.forEach((m) => {
            B.find((_) => _.bar === m.bar) || B.push(m);
          });
        });
      }
      const D = document.getElementById(f.ganttBarConfig.id);
      s != null && a === "left" ? f.ganttBarConfig.dragLimitLeft = D.offsetLeft - s : s != null && a === "right" && (f.ganttBarConfig.dragLimitRight = D.offsetLeft + D.offsetWidth + s);
    }
    n(f.ganttBarConfig.bundle).forEach((c) => {
      c.ganttBarConfig.dragLimitLeft = f.ganttBarConfig.dragLimitLeft, c.ganttBarConfig.dragLimitRight = f.ganttBarConfig.dragLimitRight;
    });
  }, d = (f, g = 0, c) => {
    const a = f.ganttBarConfig.bundle ? [{ bar: f, gapDistance: g }] : [];
    let e = f, o = u(e, c);
    if (c === "left")
      for (; o; ) {
        const s = document.getElementById(e.ganttBarConfig.id), B = document.getElementById(o.ganttBarConfig.id), D = B.offsetLeft + B.offsetWidth;
        if (g += s.offsetLeft - D, o.ganttBarConfig.immobile)
          return { gapDistanceSoFar: g, bundleBarsAndGapDist: a };
        o.ganttBarConfig.bundle && a.push({
          bar: o,
          gapDistance: g
        }), e = o, o = u(o, "left");
      }
    if (c === "right")
      for (; o; ) {
        const s = document.getElementById(e.ganttBarConfig.id), B = document.getElementById(o.ganttBarConfig.id), D = s.offsetLeft + s.offsetWidth;
        if (g += B.offsetLeft - D, o.ganttBarConfig.immobile)
          return { gapDistanceSoFar: g, bundleBarsAndGapDist: a };
        o.ganttBarConfig.bundle && a.push({
          bar: o,
          gapDistance: g
        }), e = o, o = u(o, "right");
      }
    return { gapDistanceSoFar: null, bundleBarsAndGapDist: a };
  }, u = (f, g) => {
    const c = document.getElementById(f.ganttBarConfig.id), a = i().find((o) => o.includes(f)) || [];
    let e = [];
    return g === "left" ? e = a.filter((o) => {
      const s = document.getElementById(o.ganttBarConfig.id);
      return s && s.offsetLeft < c.offsetLeft && o.ganttBarConfig.pushOnOverlap !== !1;
    }) : e = a.filter((o) => {
      const s = document.getElementById(o.ganttBarConfig.id);
      return s && s.offsetLeft > c.offsetLeft && o.ganttBarConfig.pushOnOverlap !== !1;
    }), e.length > 0 ? e.reduce((o, s) => {
      const B = document.getElementById(o.ganttBarConfig.id), D = document.getElementById(s.ganttBarConfig.id), v = Math.abs(B.offsetLeft - c.offsetLeft), b = Math.abs(D.offsetLeft - c.offsetLeft);
      return v < b ? o : s;
    }, e[0]) : null;
  };
  return {
    setDragLimitsOfGanttBar: l
  };
}
const Pe = ["id"], Ue = { class: "g-gantt-bar-label" }, je = /* @__PURE__ */ I("div", { class: "g-gantt-bar-handle-left" }, null, -1), Fe = /* @__PURE__ */ I("div", { class: "g-gantt-bar-handle-right" }, null, -1), Ne = /* @__PURE__ */ K({
  __name: "GGanttBar",
  props: {
    bar: null
  },
  setup(t) {
    const i = t, n = Nt(), l = H(), { rowHeight: d } = l, { bar: u } = Z(i), { mapTimeToPosition: f, mapPositionToTime: g } = Bt(), { initDragOfBar: c, initDragOfBundle: a } = Ae(), { setDragLimitsOfGanttBar: e } = He(), o = $(!1), s = R(() => u.value.ganttBarConfig);
    function B(E) {
      s.value.bundle != null ? a(u.value, E) : c(u.value, E), o.value = !0;
    }
    const D = () => {
      e(u.value), !s.value.immobile && (window.addEventListener("mousemove", B, {
        once: !0
      }), window.addEventListener(
        "mouseup",
        () => {
          window.removeEventListener("mousemove", B), o.value = !1;
        },
        { once: !0 }
      ));
    }, v = st(Ht), b = (E) => {
      var T;
      E.preventDefault(), E.type === "mousedown" && D();
      const C = (T = v == null ? void 0 : v.value) == null ? void 0 : T.getBoundingClientRect();
      if (!C)
        return;
      const S = g(E.clientX - C.left);
      n(E, u.value, S);
    }, { barStart: w, barEnd: h, width: p, chartStart: x, chartEnd: r, chartSize: y } = l, m = $(0), _ = $(0);
    return Mt(() => {
      lt(
        [u, p, x, r, y.width],
        () => {
          m.value = f(u.value[w.value]), _.value = f(u.value[h.value]);
        },
        { deep: !0, immediate: !0 }
      );
    }), (E, C) => (k(), L("div", {
      id: O(s).id,
      class: "g-gantt-bar",
      style: U({
        ...O(s).style,
        position: "absolute",
        top: `${O(d) * 0.1}px`,
        left: `${m.value}px`,
        width: `${_.value - m.value}px`,
        height: `${O(d) * 0.8}px`,
        zIndex: o.value ? 3 : 2
      }),
      onMousedown: b,
      onClick: b,
      onDblclick: b,
      onMouseenter: b,
      onMouseleave: b,
      onContextmenu: b
    }, [
      I("div", Ue, [
        P(E.$slots, "default", { bar: O(u) }, () => [
          I("div", null, ot(O(s).label || ""), 1)
        ])
      ]),
      O(s).hasHandles ? (k(), L(X, { key: 0 }, [
        je,
        Fe
      ], 64)) : W("", !0)
    ], 44, Pe));
  }
});
const ze = /* @__PURE__ */ K({
  __name: "GGanttRow",
  props: {
    bars: null,
    highlightOnHover: { type: Boolean }
  },
  emits: ["drop"],
  setup(t, { emit: i }) {
    const n = t, { rowHeight: l, colors: d } = H(), { highlightOnHover: u } = Z(n), f = $(!1), g = R(() => ({
      height: `${l.value}px`,
      background: (u == null ? void 0 : u.value) && f.value ? d.value.hoverHighlight : null
    })), { mapPositionToTime: c } = Bt(), a = $(null);
    at(Ht, a);
    const e = (o) => {
      var v;
      const s = (v = a.value) == null ? void 0 : v.getBoundingClientRect();
      if (!s) {
        console.error("Vue-Ganttastic: failed to find bar container element for row.");
        return;
      }
      const B = o.clientX - s.left, D = c(B);
      i("drop", { e: o, datetime: D });
    };
    return (o, s) => (k(), L("div", {
      class: "g-gantt-row",
      style: U(O(g)),
      onDragover: s[0] || (s[0] = ne((B) => f.value = !0, ["prevent"])),
      onDragleave: s[1] || (s[1] = (B) => f.value = !1),
      onDrop: s[2] || (s[2] = (B) => e(B)),
      onMouseover: s[3] || (s[3] = (B) => f.value = !0),
      onMouseleave: s[4] || (s[4] = (B) => f.value = !1)
    }, [
      W("", !0),
      I("div", ae({
        ref_key: "barContainer",
        ref: a,
        class: "g-gantt-row-bars-container"
      }, o.$attrs), [
        wt(re, {
          name: "bar-transition",
          tag: "div"
        }, {
          default: q(() => [
            (k(!0), L(X, null, rt(t.bars, (B) => (k(), it(Ne, {
              key: B.ganttBarConfig.id,
              bar: B
            }, {
              default: q(() => [
                P(o.$slots, "bar-label", { bar: B })
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
function Ve() {
  N.extend(oe), N.extend(ie), N.extend(se), N.extend(le);
}
const Qe = {
  install(t, i) {
    Ve(), t.component("GGanttChart", Ye), t.component("GGanttRow", ze);
  }
};
function Q(t, i = "top") {
  if (!t || typeof document > "u")
    return;
  const n = document.head, l = document.createElement("style");
  i === "top" && n.firstChild ? n.insertBefore(l, n.firstChild) : n.appendChild(l), l.appendChild(document.createTextNode(t));
}
Q(`
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
Q(`
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
Q(`
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
Q(`
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
`, "top");
Q(`
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
Q(`
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
export {
  Ye as GGanttChart,
  ze as GGanttRow,
  Qe as default,
  Ve as extendDayjs,
  Qe as ganttastic
};
