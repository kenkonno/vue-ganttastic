import N from "dayjs";
import { inject as lt, computed as I, defineComponent as V, openBlock as k, createElementBlock as T, createElementVNode as Y, Fragment as X, renderList as J, unref as E, normalizeStyle as R, renderSlot as F, createTextVNode as st, toDisplayString as tt, createCommentVNode as j, toRefs as et, ref as $, watch as ut, nextTick as Tt, createBlock as Z, Teleport as Qt, createVNode as wt, Transition as Xt, withCtx as Q, getCurrentScope as Zt, onScopeDispose as Jt, getCurrentInstance as te, onMounted as Lt, useSlots as ee, provide as it, withModifiers as ne, mergeProps as re, TransitionGroup as ae } from "vue";
var ct = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {}, $t = { exports: {} };
(function(t, a) {
  (function(n, l) {
    t.exports = l();
  })(ct, function() {
    return function(n, l) {
      l.prototype.isSameOrBefore = function(s, c) {
        return this.isSame(s, c) || this.isBefore(s, c);
      };
    };
  });
})($t);
const oe = $t.exports;
var Gt = { exports: {} };
(function(t, a) {
  (function(n, l) {
    t.exports = l();
  })(ct, function() {
    return function(n, l) {
      l.prototype.isSameOrAfter = function(s, c) {
        return this.isSame(s, c) || this.isAfter(s, c);
      };
    };
  });
})(Gt);
const ie = Gt.exports;
var Yt = { exports: {} };
(function(t, a) {
  (function(n, l) {
    t.exports = l();
  })(ct, function() {
    return function(n, l, s) {
      l.prototype.isBetween = function(c, d, g, f) {
        var r = s(c), e = s(d), o = (f = f || "()")[0] === "(", u = f[1] === ")";
        return (o ? this.isAfter(r, g) : !this.isBefore(r, g)) && (u ? this.isBefore(e, g) : !this.isAfter(e, g)) || (o ? this.isBefore(r, g) : !this.isAfter(r, g)) && (u ? this.isAfter(e, g) : !this.isBefore(e, g));
      };
    };
  });
})(Yt);
const se = Yt.exports;
var It = { exports: {} };
(function(t, a) {
  (function(n, l) {
    t.exports = l();
  })(ct, function() {
    var n = { LTS: "h:mm:ss A", LT: "h:mm A", L: "MM/DD/YYYY", LL: "MMMM D, YYYY", LLL: "MMMM D, YYYY h:mm A", LLLL: "dddd, MMMM D, YYYY h:mm A" }, l = /(\[[^[]*\])|([-_:/.,()\s]+)|(A|a|YYYY|YY?|MM?M?M?|Do|DD?|hh?|HH?|mm?|ss?|S{1,3}|z|ZZ?)/g, s = /\d\d/, c = /\d\d?/, d = /\d*[^-_:/,()\s\d]+/, g = {}, f = function(v) {
      return (v = +v) + (v > 68 ? 1900 : 2e3);
    }, r = function(v) {
      return function(b) {
        this[v] = +b;
      };
    }, e = [/[+-]\d\d:?(\d\d)?|Z/, function(v) {
      (this.zone || (this.zone = {})).offset = function(b) {
        if (!b || b === "Z")
          return 0;
        var x = b.match(/([+-]|\d\d)/g), h = 60 * x[1] + (+x[2] || 0);
        return h === 0 ? 0 : x[0] === "+" ? -h : h;
      }(v);
    }], o = function(v) {
      var b = g[v];
      return b && (b.indexOf ? b : b.s.concat(b.f));
    }, u = function(v, b) {
      var x, h = g.meridiem;
      if (h) {
        for (var p = 1; p <= 24; p += 1)
          if (v.indexOf(h(p, 0, b)) > -1) {
            x = p > 12;
            break;
          }
      } else
        x = v === (b ? "pm" : "PM");
      return x;
    }, w = { A: [d, function(v) {
      this.afternoon = u(v, !1);
    }], a: [d, function(v) {
      this.afternoon = u(v, !0);
    }], S: [/\d/, function(v) {
      this.milliseconds = 100 * +v;
    }], SS: [s, function(v) {
      this.milliseconds = 10 * +v;
    }], SSS: [/\d{3}/, function(v) {
      this.milliseconds = +v;
    }], s: [c, r("seconds")], ss: [c, r("seconds")], m: [c, r("minutes")], mm: [c, r("minutes")], H: [c, r("hours")], h: [c, r("hours")], HH: [c, r("hours")], hh: [c, r("hours")], D: [c, r("day")], DD: [s, r("day")], Do: [d, function(v) {
      var b = g.ordinal, x = v.match(/\d+/);
      if (this.day = x[0], b)
        for (var h = 1; h <= 31; h += 1)
          b(h).replace(/\[|\]/g, "") === v && (this.day = h);
    }], M: [c, r("month")], MM: [s, r("month")], MMM: [d, function(v) {
      var b = o("months"), x = (o("monthsShort") || b.map(function(h) {
        return h.slice(0, 3);
      })).indexOf(v) + 1;
      if (x < 1)
        throw new Error();
      this.month = x % 12 || x;
    }], MMMM: [d, function(v) {
      var b = o("months").indexOf(v) + 1;
      if (b < 1)
        throw new Error();
      this.month = b % 12 || b;
    }], Y: [/[+-]?\d+/, r("year")], YY: [s, function(v) {
      this.year = f(v);
    }], YYYY: [/\d{4}/, r("year")], Z: e, ZZ: e };
    function D(v) {
      var b, x;
      b = v, x = g && g.formats;
      for (var h = (v = b.replace(/(\[[^\]]+])|(LTS?|l{1,4}|L{1,4})/g, function(O, C, S) {
        var M = S && S.toUpperCase();
        return C || x[S] || n[S] || x[M].replace(/(\[[^\]]+])|(MMMM|MM|DD|dddd)/g, function(L, G, H) {
          return G || H.slice(1);
        });
      })).match(l), p = h.length, B = 0; B < p; B += 1) {
        var i = h[B], m = w[i], y = m && m[0], _ = m && m[1];
        h[B] = _ ? { regex: y, parser: _ } : i.replace(/^\[|\]$/g, "");
      }
      return function(O) {
        for (var C = {}, S = 0, M = 0; S < p; S += 1) {
          var L = h[S];
          if (typeof L == "string")
            M += L.length;
          else {
            var G = L.regex, H = L.parser, P = O.slice(M), W = G.exec(P)[0];
            H.call(C, W), O = O.replace(W, "");
          }
        }
        return function(z) {
          var U = z.afternoon;
          if (U !== void 0) {
            var K = z.hours;
            U ? K < 12 && (z.hours += 12) : K === 12 && (z.hours = 0), delete z.afternoon;
          }
        }(C), C;
      };
    }
    return function(v, b, x) {
      x.p.customParseFormat = !0, v && v.parseTwoDigitYear && (f = v.parseTwoDigitYear);
      var h = b.prototype, p = h.parse;
      h.parse = function(B) {
        var i = B.date, m = B.utc, y = B.args;
        this.$u = m;
        var _ = y[1];
        if (typeof _ == "string") {
          var O = y[2] === !0, C = y[3] === !0, S = O || C, M = y[2];
          C && (M = y[2]), g = this.$locale(), !O && M && (g = x.Ls[M]), this.$d = function(P, W, z) {
            try {
              if (["x", "X"].indexOf(W) > -1)
                return new Date((W === "X" ? 1e3 : 1) * P);
              var U = D(W)(P), K = U.year, at = U.month, Nt = U.day, Vt = U.hours, qt = U.minutes, Wt = U.seconds, Kt = U.milliseconds, _t = U.zone, dt = new Date(), ft = Nt || (K || at ? 1 : dt.getDate()), gt = K || dt.getFullYear(), ot = 0;
              K && !at || (ot = at > 0 ? at - 1 : dt.getMonth());
              var ht = Vt || 0, pt = qt || 0, mt = Wt || 0, vt = Kt || 0;
              return _t ? new Date(Date.UTC(gt, ot, ft, ht, pt, mt, vt + 60 * _t.offset * 1e3)) : z ? new Date(Date.UTC(gt, ot, ft, ht, pt, mt, vt)) : new Date(gt, ot, ft, ht, pt, mt, vt);
            } catch {
              return new Date("");
            }
          }(i, _, m), this.init(), M && M !== !0 && (this.$L = this.locale(M).$L), S && i != this.format(_) && (this.$d = new Date("")), g = {};
        } else if (_ instanceof Array)
          for (var L = _.length, G = 1; G <= L; G += 1) {
            y[1] = _[G - 1];
            var H = x.apply(this, y);
            if (H.isValid()) {
              this.$d = H.$d, this.$L = H.$L, this.init();
              break;
            }
            G === L && (this.$d = new Date(""));
          }
        else
          p.call(this, B);
      };
    };
  });
})(It);
const le = It.exports, Rt = Symbol("CHART_ROWS_KEY"), At = Symbol("CONFIG_KEY"), Ht = Symbol("EMIT_BAR_EVENT_KEY"), Ut = Symbol("BAR_CONTAINER_KEY");
function A() {
  const t = lt(At);
  if (!t)
    throw Error("Failed to inject config!");
  return t;
}
const Ft = "YYYY-MM-DD HH:mm";
function nt(t = A()) {
  const { chartStart: a, chartEnd: n, barStart: l, barEnd: s, dateFormat: c } = t, d = I(() => f(a.value)), g = I(() => f(n.value)), f = (e, o) => {
    let u;
    if (o !== void 0 && typeof e != "string" && !(e instanceof Date) && (u = o === "start" ? e[l.value] : e[s.value]), typeof e == "string")
      u = e;
    else if (e instanceof Date)
      return N(e);
    const w = c.value || Ft;
    return N(u, w, !0);
  };
  return {
    chartStartDayjs: d,
    chartEndDayjs: g,
    toDayjs: f,
    format: (e, o) => o === !1 ? e instanceof Date ? e : N(e).toDate() : (typeof e == "string" || e instanceof Date ? f(e) : e).format(o)
  };
}
function xt() {
  const { precision: t } = A(), { chartStartDayjs: a, chartEndDayjs: n } = nt(), l = I(() => {
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
  }), s = {
    hour: "HH",
    date: "DD.MMM ",
    day: "DD",
    month: "MMMM YYYY",
    year: "YYYY"
  };
  return {
    timeaxisUnits: I(() => {
      const d = [], g = [], f = l.value === "day" ? "date" : l.value, r = t.value;
      let e = a.value.startOf(r);
      const o = n.value.diff(a.value, "minutes", !0);
      let u = 0, w = e[f]();
      for (; e.isBefore(n.value) || e.isSame(n.value); ) {
        if (e[f]() !== w) {
          let h = 0;
          if (d.length === 0)
            h = e.startOf(f).diff(a.value, "minutes", !0) / o * 100;
          else if (e.isSameOrAfter(n.value))
            h = n.value.diff(
              e.subtract(1, f).startOf(f),
              "minutes",
              !0
            ) / o * 100;
          else {
            const B = e.startOf(f), i = e.subtract(1, f).startOf(f);
            h = B.diff(i, "minutes", !0) / o * 100;
          }
          const p = e.subtract(1, f);
          d.push({
            label: p.format(s[f]),
            value: String(w),
            date: p.toDate(),
            width: String(h) + "%"
          }), u = 0, w = e[f]();
        }
        let b = 0;
        g.length === 0 ? b = e.endOf(r).diff(a.value, "minutes", !0) / o * 100 : e.add(1, r).isSameOrAfter(n.value) ? b = n.value.diff(e.startOf(r), "minutes", !0) / o * 100 : b = e.endOf(r).diff(e.startOf(r), "minutes", !0) / o * 100, g.push({
          label: e.format(s[r]),
          value: String(e[r === "day" ? "date" : r]()),
          date: e.toDate(),
          width: String(b) + "%"
        });
        const x = e;
        e = e.add(1, r), (e.isBefore(n.value) || e.isSame(n.value)) && (u += e.diff(x, "minutes", !0));
      }
      const D = n.value.isSame(n.value.startOf(f)) ? n.value[f]() - 1 : n.value[f]();
      return d.some((b) => b.value === String(D)) || (u += n.value.diff(
        e.subtract(1, r),
        "minutes",
        !0
      ), d.push({
        label: n.value.format(s[f]),
        value: String(w),
        date: n.value.toDate(),
        width: `${u / o * 100}%`
      })), { upperUnits: d, lowerUnits: g };
    })
  };
}
const ue = { class: "g-timeaxis" }, ce = { class: "g-timeunits-container" }, de = { class: "g-timeunits-container" }, fe = /* @__PURE__ */ V({
  __name: "GGanttTimeaxis",
  setup(t) {
    const { precision: a, colors: n } = A(), { timeaxisUnits: l } = xt();
    return (s, c) => (k(), T("div", ue, [
      Y("div", ce, [
        (k(!0), T(X, null, J(E(l).upperUnits, ({ label: d, value: g, date: f, width: r }, e) => (k(), T("div", {
          key: d,
          class: "g-upper-timeunit",
          style: R({
            background: e % 2 === 0 ? E(n).primary : E(n).secondary,
            color: E(n).text,
            width: r
          })
        }, [
          F(s.$slots, "upper-timeunit", {
            label: d,
            value: g,
            date: f
          }, () => [
            st(tt(d), 1)
          ])
        ], 4))), 128))
      ]),
      Y("div", de, [
        (k(!0), T(X, null, J(E(l).lowerUnits, ({ label: d, value: g, date: f, width: r }, e) => (k(), T("div", {
          key: d,
          class: "g-timeunit",
          style: R({
            background: e % 2 === 0 ? E(n).ternary : E(n).quartenary,
            color: E(n).text,
            flexDirection: E(a) === "hour" ? "column" : "row",
            alignItems: E(a) === "hour" ? "" : "center",
            width: r
          })
        }, [
          F(s.$slots, "timeunit", {
            label: d,
            value: g,
            date: f
          }, () => [
            st(tt(d), 1)
          ]),
          E(a) === "hour" ? (k(), T("div", {
            key: 0,
            class: "g-timeaxis-hour-pin",
            style: R({ background: E(n).text })
          }, null, 4)) : j("", !0)
        ], 4))), 128))
      ])
    ]));
  }
});
const ge = { class: "g-grid-container" }, he = /* @__PURE__ */ V({
  __name: "GGanttGrid",
  props: {
    highlightedUnits: null
  },
  setup(t) {
    const { colors: a } = A(), { timeaxisUnits: n } = xt();
    return (l, s) => (k(), T("div", ge, [
      (k(!0), T(X, null, J(E(n).lowerUnits, ({ label: c, value: d, width: g }) => {
        var f;
        return k(), T("div", {
          key: c,
          class: "g-grid-line",
          style: R({
            width: g,
            background: (f = t.highlightedUnits) != null && f.includes(Number(d)) ? E(a).hoverHighlight : void 0
          })
        }, null, 4);
      }), 128))
    ]));
  }
});
const pe = /* @__PURE__ */ V({
  __name: "GGanttBarTooltip",
  props: {
    bar: null,
    modelValue: { type: Boolean }
  },
  setup(t) {
    const a = t, n = {
      hour: "HH:mm",
      day: "DD. MMM HH:mm",
      month: "DD. MMMM YYYY"
    }, l = "cadetblue", { bar: s } = et(a), { precision: c, font: d, barStart: g, barEnd: f, rowHeight: r } = A(), e = $("0px"), o = $("0px");
    ut(
      () => a.bar,
      async () => {
        var m;
        await Tt();
        const x = ((m = s == null ? void 0 : s.value) == null ? void 0 : m.ganttBarConfig.id) || "";
        if (!x)
          return;
        const h = document.getElementById(x), { top: p, left: B } = (h == null ? void 0 : h.getBoundingClientRect()) || {
          top: 0,
          left: 0
        }, i = Math.max(B, 10);
        e.value = `${p + r.value - 10}px`, o.value = `${i}px`;
      },
      { deep: !0, immediate: !0 }
    );
    const u = I(() => {
      var x, h;
      return ((h = (x = s == null ? void 0 : s.value) == null ? void 0 : x.ganttBarConfig.style) == null ? void 0 : h.background) || l;
    }), { toDayjs: w } = nt(), D = I(() => {
      var x;
      return (x = s.value) == null ? void 0 : x[g.value];
    }), v = I(() => {
      var x;
      return (x = s.value) == null ? void 0 : x[f.value];
    }), b = I(() => {
      if (!(s != null && s.value))
        return "";
      const x = n[c.value], h = w(D.value).format(x), p = w(v.value).format(x);
      return `${h} \u2013 ${p}`;
    });
    return (x, h) => (k(), Z(Qt, { to: "body" }, [
      wt(Xt, {
        name: "g-fade",
        mode: "out-in"
      }, {
        default: Q(() => [
          t.modelValue ? (k(), T("div", {
            key: 0,
            class: "g-gantt-tooltip",
            style: R({
              top: e.value,
              left: o.value,
              fontFamily: E(d)
            })
          }, [
            Y("div", {
              class: "g-gantt-tooltip-color-dot",
              style: R({ background: E(u) })
            }, null, 4),
            F(x.$slots, "default", {
              bar: E(s),
              barStart: E(D),
              barEnd: E(v)
            }, () => [
              st(tt(E(b)), 1)
            ])
          ], 4)) : j("", !0)
        ]),
        _: 3
      })
    ]));
  }
});
const Et = {
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
var Ot;
const rt = typeof window < "u";
rt && ((Ot = window == null ? void 0 : window.navigator) == null ? void 0 : Ot.userAgent) && /iP(ad|hone|od)/.test(window.navigator.userAgent);
function me(t) {
  return typeof t == "function" ? t() : E(t);
}
function ve(t) {
  return t;
}
function ye(t) {
  return Zt() ? (Jt(t), !0) : !1;
}
function be(t, a = !0) {
  te() ? Lt(t) : a ? t() : Tt(t);
}
function jt(t) {
  var a;
  const n = me(t);
  return (a = n == null ? void 0 : n.$el) != null ? a : n;
}
const we = rt ? window : void 0;
rt && window.document;
rt && window.navigator;
rt && window.location;
function xe(t, a = !1) {
  const n = $(), l = () => n.value = Boolean(t());
  return l(), be(l, a), n;
}
const yt = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {}, bt = "__vueuse_ssr_handlers__";
yt[bt] = yt[bt] || {};
yt[bt];
var Dt = Object.getOwnPropertySymbols, Be = Object.prototype.hasOwnProperty, _e = Object.prototype.propertyIsEnumerable, Ee = (t, a) => {
  var n = {};
  for (var l in t)
    Be.call(t, l) && a.indexOf(l) < 0 && (n[l] = t[l]);
  if (t != null && Dt)
    for (var l of Dt(t))
      a.indexOf(l) < 0 && _e.call(t, l) && (n[l] = t[l]);
  return n;
};
function Oe(t, a, n = {}) {
  const l = n, { window: s = we } = l, c = Ee(l, ["window"]);
  let d;
  const g = xe(() => s && "ResizeObserver" in s), f = () => {
    d && (d.disconnect(), d = void 0);
  }, r = ut(() => jt(t), (o) => {
    f(), g.value && s && o && (d = new ResizeObserver(a), d.observe(o, c));
  }, { immediate: !0, flush: "post" }), e = () => {
    f(), r();
  };
  return ye(e), {
    isSupported: g,
    stop: e
  };
}
function De(t, a = { width: 0, height: 0 }, n = {}) {
  const l = $(a.width), s = $(a.height);
  return Oe(t, ([c]) => {
    l.value = c.contentRect.width, s.value = c.contentRect.height;
  }, n), ut(() => jt(t), (c) => {
    l.value = c ? a.width : 0, s.value = c ? a.height : 0;
  }), {
    width: l,
    height: s
  };
}
var Ct;
(function(t) {
  t.UP = "UP", t.RIGHT = "RIGHT", t.DOWN = "DOWN", t.LEFT = "LEFT", t.NONE = "NONE";
})(Ct || (Ct = {}));
var Ce = Object.defineProperty, kt = Object.getOwnPropertySymbols, ke = Object.prototype.hasOwnProperty, Se = Object.prototype.propertyIsEnumerable, St = (t, a, n) => a in t ? Ce(t, a, { enumerable: !0, configurable: !0, writable: !0, value: n }) : t[a] = n, Me = (t, a) => {
  for (var n in a || (a = {}))
    ke.call(a, n) && St(t, n, a[n]);
  if (kt)
    for (var n of kt(a))
      Se.call(a, n) && St(t, n, a[n]);
  return t;
};
const Te = {
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
Me({
  linear: ve
}, Te);
const Le = {
  key: 0,
  class: "g-footer"
}, $e = { class: "g-footer-container" }, Ge = /* @__PURE__ */ V({
  __name: "GGanttFooter",
  props: {
    labels: null
  },
  setup(t) {
    const { precision: a, colors: n } = A(), { timeaxisUnits: l } = xt();
    return (s, c) => t.labels ? (k(), T("div", Le, [
      Y("div", $e, [
        (k(!0), T(X, null, J(E(l).lowerUnits, ({ label: d, value: g, date: f, width: r }, e) => (k(), T("div", {
          key: d,
          class: "g-timeunit",
          style: R({
            background: e % 2 === 0 ? E(n).ternary : E(n).quartenary,
            color: E(n).text,
            flexDirection: E(a) === "hour" ? "column" : "row",
            alignItems: E(a) === "hour" ? "" : "center",
            width: r
          })
        }, [
          F(s.$slots, "timeunit", {
            label: d,
            value: g,
            date: f
          }, () => [
            st(tt(t.labels[e]), 1)
          ], !0)
        ], 4))), 128))
      ])
    ])) : j("", !0);
  }
});
const Ye = (t, a) => {
  const n = t.__vccOpts || t;
  for (const [l, s] of a)
    n[l] = s;
  return n;
}, Ie = /* @__PURE__ */ Ye(Ge, [["__scopeId", "data-v-b1cbf765"]]), Re = { style: { display: "flex", overflow: "scroll" } }, Ae = { style: { display: "flex" } }, He = { class: "g-gantt-rows-container" }, Ue = /* @__PURE__ */ V({
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
    highlightedUnits: { default: () => [] },
    font: { default: "inherit" },
    footerLabels: null,
    sticky: { type: Boolean }
  },
  emits: ["click-bar", "mousedown-bar", "mouseup-bar", "dblclick-bar", "mouseenter-bar", "mouseleave-bar", "dragstart-bar", "drag-bar", "dragend-bar", "contextmenu-bar"],
  setup(t, { emit: a }) {
    const n = t, { width: l, font: s, colorScheme: c } = et(n), d = ee(), g = I(
      () => typeof c.value != "string" ? c.value : Et[c.value] || Et.default
    ), f = () => {
      var B;
      const h = (B = d.default) == null ? void 0 : B.call(d), p = [];
      return h && h.forEach((i) => {
        var m;
        if ((m = i.props) != null && m.bars) {
          const y = i.props.bars;
          p.push(y);
        } else
          Array.isArray(i.children) && i.children.forEach((y) => {
            var O;
            const _ = y;
            if ((O = _ == null ? void 0 : _.props) != null && O.bars) {
              const C = _.props.bars;
              p.push(C);
            }
          });
      }), p;
    }, r = $(!1), e = $(!1), o = $(void 0);
    let u;
    const w = (h) => {
      u && clearTimeout(u), u = setTimeout(() => {
        r.value = !0;
      }, 800), o.value = h;
    }, D = () => {
      clearTimeout(u), r.value = !1;
    }, v = (h, p, B, i) => {
      switch (h.type) {
        case "click":
          a("click-bar", { bar: p, e: h, datetime: B });
          break;
        case "mousedown":
          a("mousedown-bar", { bar: p, e: h, datetime: B });
          break;
        case "mouseup":
          a("mouseup-bar", { bar: p, e: h, datetime: B });
          break;
        case "dblclick":
          a("dblclick-bar", { bar: p, e: h, datetime: B });
          break;
        case "mouseenter":
          w(p), a("mouseenter-bar", { bar: p, e: h });
          break;
        case "mouseleave":
          D(), a("mouseleave-bar", { bar: p, e: h });
          break;
        case "dragstart":
          e.value = !0, a("dragstart-bar", { bar: p, e: h });
          break;
        case "drag":
          a("drag-bar", { bar: p, e: h });
          break;
        case "dragend":
          e.value = !1, a("dragend-bar", { bar: p, e: h });
          break;
        case "contextmenu":
          a("contextmenu-bar", { bar: p, e: h, datetime: B });
          break;
      }
    }, b = $(null), x = De(b);
    return it(Rt, f), it(At, {
      ...et(n),
      colors: g,
      chartSize: x
    }), it(Ht, v), (h, p) => (k(), T("div", Re, [
      Y("div", Ae, [
        Y("div", {
          style: R([{ display: "flex", "flex-flow": "column" }, t.sticky ? "position: sticky; left:0;z-index:100; background: white;" : ""])
        }, [
          F(h.$slots, "side-menu")
        ], 4),
        Y("div", {
          ref_key: "ganttChart",
          ref: b,
          class: "g-gantt-chart",
          style: R({ width: E(l), background: E(g).background, fontFamily: E(s) })
        }, [
          t.hideTimeaxis ? j("", !0) : (k(), Z(fe, { key: 0 }, {
            "upper-timeunit": Q(({ label: B, value: i, date: m }) => [
              F(h.$slots, "upper-timeunit", {
                label: B,
                value: i,
                date: m
              })
            ]),
            timeunit: Q(({ label: B, value: i, date: m }) => [
              F(h.$slots, "timeunit", {
                label: B,
                value: i,
                date: m
              })
            ]),
            _: 3
          })),
          t.grid ? (k(), Z(he, {
            key: 1,
            "highlighted-units": t.highlightedUnits
          }, null, 8, ["highlighted-units"])) : j("", !0),
          Y("div", He, [
            F(h.$slots, "default")
          ]),
          t.hideTimeaxis ? j("", !0) : (k(), Z(Ie, {
            key: 2,
            labels: t.footerLabels
          }, null, 8, ["labels"])),
          wt(pe, {
            "model-value": r.value || e.value,
            bar: o.value
          }, {
            default: Q(() => [
              F(h.$slots, "bar-tooltip", { bar: o.value })
            ]),
            _: 3
          }, 8, ["model-value", "bar"])
        ], 4)
      ])
    ]));
  }
});
function Bt(t = A()) {
  const { dateFormat: a, chartSize: n } = t, { chartStartDayjs: l, chartEndDayjs: s, toDayjs: c, format: d } = nt(t), g = I(() => s.value.diff(l.value, "minutes"));
  return {
    mapTimeToPosition: (e) => {
      const o = n.width.value || 0, u = c(e).diff(l.value, "minutes", !0);
      return Math.ceil(u / g.value * o);
    },
    mapPositionToTime: (e) => {
      const o = n.width.value || 0, u = e / o * g.value, w = d(l.value.add(u, "minutes"), a.value);
      if (typeof w == "string")
        return w;
      throw Error;
    }
  };
}
function Mt(t, a = () => null, n = () => null, l = A()) {
  const { barStart: s, barEnd: c, pushOnOverlap: d } = l, g = $(!1);
  let f = 0, r;
  const { mapPositionToTime: e } = Bt(l), { toDayjs: o } = nt(l), u = (p) => {
    const B = document.getElementById(t.ganttBarConfig.id);
    if (!B)
      return;
    switch (f = p.clientX - (B.getBoundingClientRect().left || 0), p.target.className) {
      case "g-gantt-bar-handle-left":
        document.body.style.cursor = "ew-resize", r = v;
        break;
      case "g-gantt-bar-handle-right":
        document.body.style.cursor = "ew-resize", r = b;
        break;
      default:
        r = D;
    }
    g.value = !0, window.addEventListener("mousemove", r), window.addEventListener("mouseup", h);
  }, w = () => {
    var i;
    const p = document.getElementById(t.ganttBarConfig.id), B = (i = p == null ? void 0 : p.closest(".g-gantt-row-bars-container")) == null ? void 0 : i.getBoundingClientRect();
    return { barElement: p, barContainer: B };
  }, D = (p) => {
    const { barElement: B, barContainer: i } = w();
    if (!B || !i)
      return;
    const m = B.getBoundingClientRect().width, y = p.clientX - i.left - f, _ = y + m;
    if (!x(y, _)) {
      if (t[s.value].substring(0, 10) != e(y).substring(0, 10)) {
        const O = o(t[s.value]), S = o(t[c.value]).diff(O, "minute"), M = e(y).substring(0, 10) + " 00:00";
        t[s.value] = M, t[c.value] = o(M).add(S, "minute").format("DD.MM.YYYY HH:mm");
      }
      a(p, t);
    }
  }, v = (p) => {
    const { barElement: B, barContainer: i } = w();
    if (!B || !i)
      return;
    const m = p.clientX - i.left, y = e(m);
    if (!o(y).isSameOrAfter(o(t, "end"))) {
      if (t[s.value].substring(0, 10) != e(m).substring(0, 10)) {
        const _ = e(m).substring(0, 10) + " 00:00";
        t[s.value] = _;
      }
      a(p, t);
    }
  }, b = (p) => {
    const { barElement: B, barContainer: i } = w();
    if (!B || !i)
      return;
    const m = p.clientX - i.left, y = e(m);
    if (!o(y).isSameOrBefore(o(t, "start"))) {
      if (t[s.value].substring(0, 10) != e(m).substring(0, 10)) {
        const _ = e(m).substring(0, 10) + " 23:59";
        t[c.value] = _;
      }
      a(p, t);
    }
  }, x = (p, B) => {
    if (!d.value)
      return !1;
    const i = t.ganttBarConfig.dragLimitLeft, m = t.ganttBarConfig.dragLimitRight;
    return p && i != null && p < i || B && m != null && B > m;
  }, h = (p) => {
    g.value = !1, document.body.style.cursor = "", window.removeEventListener("mousemove", r), window.removeEventListener("mouseup", h), n(p, t);
  };
  return {
    isDragging: g,
    initDrag: u
  };
}
function Pt() {
  const t = lt(Rt);
  if (!t)
    throw Error("Failed to inject getChartRows!");
  return t;
}
function zt() {
  const t = lt(Ht);
  if (!t)
    throw Error("Failed to inject emitBarEvent!");
  return t;
}
function Fe() {
  const t = A(), a = Pt(), n = zt(), { pushOnOverlap: l, barStart: s, barEnd: c, noOverlap: d, dateFormat: g } = t, f = /* @__PURE__ */ new Map(), { toDayjs: r, format: e } = nt(), o = (i, m) => {
    const { initDrag: y } = Mt(i, w, h, t);
    n({ ...m, type: "dragstart" }, i), y(m), p(i);
  }, u = (i, m) => {
    const y = i.ganttBarConfig.bundle;
    y != null && (a().forEach((_) => {
      _.forEach((O) => {
        if (O.ganttBarConfig.bundle === y) {
          const C = O === i ? h : () => null, { initDrag: S } = Mt(O, w, C, t);
          S(m), p(O);
        }
      });
    }), n({ ...m, type: "dragstart" }, i));
  }, w = (i, m) => {
    n({ ...i, type: "drag" }, m), D(m);
  }, D = (i) => {
    if (!(l != null && l.value))
      return;
    let m = i, { overlapBar: y, overlapType: _ } = v(m);
    for (; y; ) {
      p(y);
      const O = r(m[s.value]), C = r(m[c.value]), S = r(y[s.value]), M = r(y[c.value]);
      let L;
      switch (_) {
        case "left":
          L = M.diff(O, "minutes", !0), y[c.value] = e(m[s.value], g.value), y[s.value] = e(
            S.subtract(L, "minutes"),
            g.value
          );
          break;
        case "right":
          L = C.diff(S, "minutes", !0), y[s.value] = e(C, g.value), y[c.value] = e(
            M.add(L, "minutes"),
            g.value
          );
          break;
        default:
          console.warn(
            "Vue-Ganttastic: One bar is inside of the other one! This should never occur while push-on-overlap is active!"
          );
          return;
      }
      y && (_ === "left" || _ === "right") && b(y, L, _), m = y, { overlapBar: y, overlapType: _ } = v(y);
    }
  }, v = (i) => {
    let m, y, _;
    const O = a().find((G) => G.includes(i)) || [], C = r(i[s.value]), S = r(i[c.value]);
    return { overlapBar: O.find((G) => {
      if (G === i)
        return !1;
      const H = r(G[s.value]), P = r(G[c.value]);
      return m = C.isBetween(H, P), y = S.isBetween(H, P), _ = H.isBetween(C, S) || P.isBetween(C, S), m || y || _;
    }), overlapType: m ? "left" : y ? "right" : _ ? "between" : null };
  }, b = (i, m, y) => {
    p(i), i.ganttBarConfig.bundle && a().forEach((_) => {
      _.forEach((O) => {
        O.ganttBarConfig.bundle === i.ganttBarConfig.bundle && O !== i && (p(O), x(O, m, y));
      });
    });
  }, x = (i, m, y) => {
    switch (y) {
      case "left":
        i[s.value] = e(
          r(i, "start").subtract(m, "minutes"),
          g.value
        ), i[c.value] = e(
          r(i, "end").subtract(m, "minutes"),
          g.value
        );
        break;
      case "right":
        i[s.value] = e(
          r(i, "start").add(m, "minutes"),
          g.value
        ), i[c.value] = e(r(i, "end").add(m, "minutes"), g.value);
    }
    D(i);
  }, h = (i, m) => {
    B();
    const y = {
      ...i,
      type: "dragend"
    };
    n(y, m, void 0, new Map(f)), f.clear();
  }, p = (i) => {
    if (!f.has(i)) {
      const m = i[s.value], y = i[c.value];
      f.set(i, { oldStart: m, oldEnd: y });
    }
  }, B = () => {
    if (l.value || !d.value)
      return;
    let i = !1;
    f.forEach((m, y) => {
      const { overlapBar: _ } = v(y);
      _ != null && (i = !0);
    }), i && f.forEach(({ oldStart: m, oldEnd: y }, _) => {
      _[s.value] = m, _[c.value] = y;
    });
  };
  return {
    initDragOfBar: o,
    initDragOfBundle: u
  };
}
function je() {
  const { pushOnOverlap: t } = A(), a = Pt(), n = (d) => {
    const g = [];
    return d != null && a().forEach((f) => {
      f.forEach((r) => {
        r.ganttBarConfig.bundle === d && g.push(r);
      });
    }), g;
  }, l = (d) => {
    if (!t.value || d.ganttBarConfig.pushOnOverlap === !1)
      return;
    for (const f of ["left", "right"]) {
      const r = f, { gapDistanceSoFar: e, bundleBarsAndGapDist: o } = s(
        d,
        0,
        r
      );
      let u = e;
      const w = o;
      if (!w)
        continue;
      for (let v = 0; v < w.length; v++) {
        const b = w[v].bar, x = w[v].gapDistance;
        n(b.ganttBarConfig.bundle).filter(
          (p) => p !== b
        ).forEach((p) => {
          const B = s(p, x, r), i = B.gapDistanceSoFar, m = B.bundleBarsAndGapDist;
          i != null && (!u || i < u) && (u = i), m.forEach((y) => {
            w.find((_) => _.bar === y.bar) || w.push(y);
          });
        });
      }
      const D = document.getElementById(d.ganttBarConfig.id);
      u != null && r === "left" ? d.ganttBarConfig.dragLimitLeft = D.offsetLeft - u : u != null && r === "right" && (d.ganttBarConfig.dragLimitRight = D.offsetLeft + D.offsetWidth + u);
    }
    n(d.ganttBarConfig.bundle).forEach((f) => {
      f.ganttBarConfig.dragLimitLeft = d.ganttBarConfig.dragLimitLeft, f.ganttBarConfig.dragLimitRight = d.ganttBarConfig.dragLimitRight;
    });
  }, s = (d, g = 0, f) => {
    const r = d.ganttBarConfig.bundle ? [{ bar: d, gapDistance: g }] : [];
    let e = d, o = c(e, f);
    if (f === "left")
      for (; o; ) {
        const u = document.getElementById(e.ganttBarConfig.id), w = document.getElementById(o.ganttBarConfig.id), D = w.offsetLeft + w.offsetWidth;
        if (g += u.offsetLeft - D, o.ganttBarConfig.immobile)
          return { gapDistanceSoFar: g, bundleBarsAndGapDist: r };
        o.ganttBarConfig.bundle && r.push({
          bar: o,
          gapDistance: g
        }), e = o, o = c(o, "left");
      }
    if (f === "right")
      for (; o; ) {
        const u = document.getElementById(e.ganttBarConfig.id), w = document.getElementById(o.ganttBarConfig.id), D = u.offsetLeft + u.offsetWidth;
        if (g += w.offsetLeft - D, o.ganttBarConfig.immobile)
          return { gapDistanceSoFar: g, bundleBarsAndGapDist: r };
        o.ganttBarConfig.bundle && r.push({
          bar: o,
          gapDistance: g
        }), e = o, o = c(o, "right");
      }
    return { gapDistanceSoFar: null, bundleBarsAndGapDist: r };
  }, c = (d, g) => {
    const f = document.getElementById(d.ganttBarConfig.id), r = a().find((o) => o.includes(d)) || [];
    let e = [];
    return g === "left" ? e = r.filter((o) => {
      const u = document.getElementById(o.ganttBarConfig.id);
      return u && u.offsetLeft < f.offsetLeft && o.ganttBarConfig.pushOnOverlap !== !1;
    }) : e = r.filter((o) => {
      const u = document.getElementById(o.ganttBarConfig.id);
      return u && u.offsetLeft > f.offsetLeft && o.ganttBarConfig.pushOnOverlap !== !1;
    }), e.length > 0 ? e.reduce((o, u) => {
      const w = document.getElementById(o.ganttBarConfig.id), D = document.getElementById(u.ganttBarConfig.id), v = Math.abs(w.offsetLeft - f.offsetLeft), b = Math.abs(D.offsetLeft - f.offsetLeft);
      return v < b ? o : u;
    }, e[0]) : null;
  };
  return {
    setDragLimitsOfGanttBar: l
  };
}
const Pe = ["id"], ze = { class: "g-gantt-bar-label" }, Ne = { style: { "z-index": "100" } }, Ve = /* @__PURE__ */ Y("div", { class: "g-gantt-bar-handle-left" }, null, -1), qe = /* @__PURE__ */ Y("div", { class: "g-gantt-bar-handle-right" }, null, -1), We = /* @__PURE__ */ V({
  __name: "GGanttBar",
  props: {
    bar: null
  },
  setup(t) {
    const a = t, n = zt(), l = A(), { rowHeight: s } = l, { bar: c } = et(a), { mapTimeToPosition: d, mapPositionToTime: g } = Bt(), { initDragOfBar: f, initDragOfBundle: r } = Fe(), { setDragLimitsOfGanttBar: e } = je(), o = $(!1), u = I(() => c.value.ganttBarConfig);
    function w(O) {
      u.value.bundle != null ? r(c.value, O) : f(c.value, O), o.value = !0;
    }
    const D = () => {
      e(c.value), !u.value.immobile && (window.addEventListener("mousemove", w, {
        once: !0
      }), window.addEventListener(
        "mouseup",
        () => {
          window.removeEventListener("mousemove", w), o.value = !1;
        },
        { once: !0 }
      ));
    }, v = lt(Ut), b = (O) => {
      var M;
      O.preventDefault(), O.type === "mousedown" && D();
      const C = (M = v == null ? void 0 : v.value) == null ? void 0 : M.getBoundingClientRect();
      if (!C)
        return;
      const S = g(O.clientX - C.left);
      n(O, c.value, S);
    }, { barStart: x, barEnd: h, width: p, chartStart: B, chartEnd: i, chartSize: m } = l, y = $(0), _ = $(0);
    return Lt(() => {
      ut(
        [c, p, B, i, m.width],
        () => {
          y.value = d(c.value[x.value]), _.value = d(c.value[h.value]);
        },
        { deep: !0, immediate: !0 }
      );
    }), (O, C) => (k(), T("div", {
      id: E(u).id,
      class: "g-gantt-bar",
      style: R({
        ...E(u).style,
        position: "absolute",
        top: `${E(s) * 0.1}px`,
        left: `${y.value}px`,
        width: `${_.value - y.value}px`,
        height: `${E(s) * 0.8}px`,
        zIndex: o.value ? 3 : 2
      }),
      onMousedown: b,
      onClick: b,
      onDblclick: b,
      onMouseenter: b,
      onMouseleave: b,
      onContextmenu: b
    }, [
      Y("div", ze, [
        F(O.$slots, "default", { bar: E(c) }, () => [
          Y("div", Ne, tt(E(u).label || ""), 1),
          E(u).progress ? (k(), T("div", {
            key: 0,
            style: R([{ position: "absolute", height: "100%", left: "0" }, {
              width: E(u).progress + "%",
              backgroundColor: E(u).progressColor
            }])
          }, null, 4)) : j("", !0)
        ])
      ]),
      E(u).hasHandles ? (k(), T(X, { key: 0 }, [
        Ve,
        qe
      ], 64)) : j("", !0)
    ], 44, Pe));
  }
});
const Ke = /* @__PURE__ */ V({
  __name: "GGanttRow",
  props: {
    bars: null,
    highlightOnHover: { type: Boolean }
  },
  emits: ["drop"],
  setup(t, { emit: a }) {
    const n = t, { rowHeight: l, colors: s } = A(), { highlightOnHover: c } = et(n), d = $(!1), g = I(() => ({
      height: `${l.value}px`,
      background: (c == null ? void 0 : c.value) && d.value ? s.value.hoverHighlight : null
    })), { mapPositionToTime: f } = Bt(), r = $(null);
    it(Ut, r);
    const e = (o) => {
      var v;
      const u = (v = r.value) == null ? void 0 : v.getBoundingClientRect();
      if (!u) {
        console.error("Vue-Ganttastic: failed to find bar container element for row.");
        return;
      }
      const w = o.clientX - u.left, D = f(w);
      a("drop", { e: o, datetime: D });
    };
    return (o, u) => (k(), T("div", {
      class: "g-gantt-row",
      style: R(E(g)),
      onDragover: u[0] || (u[0] = ne((w) => d.value = !0, ["prevent"])),
      onDragleave: u[1] || (u[1] = (w) => d.value = !1),
      onDrop: u[2] || (u[2] = (w) => e(w)),
      onMouseover: u[3] || (u[3] = (w) => d.value = !0),
      onMouseleave: u[4] || (u[4] = (w) => d.value = !1)
    }, [
      j("", !0),
      Y("div", re({
        ref_key: "barContainer",
        ref: r,
        class: "g-gantt-row-bars-container"
      }, o.$attrs), [
        wt(ae, {
          name: "bar-transition",
          tag: "div"
        }, {
          default: Q(() => [
            (k(!0), T(X, null, J(t.bars, (w) => (k(), Z(We, {
              key: w.ganttBarConfig.id,
              bar: w
            }, {
              default: Q(() => [
                F(o.$slots, "bar-label", { bar: w })
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
function Qe() {
  N.extend(oe), N.extend(ie), N.extend(se), N.extend(le);
}
const tn = {
  install(t, a) {
    Qe(), t.component("GGanttChart", Ue), t.component("GGanttRow", Ke);
  }
};
function q(t, a = "top") {
  if (!t || typeof document > "u")
    return;
  const n = document.head, l = document.createElement("style");
  a === "top" && n.firstChild ? n.insertBefore(l, n.firstChild) : n.appendChild(l), l.appendChild(document.createTextNode(t));
}
q(`
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
q(`
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
q(`
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
q(`
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
q(`
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
q(`
.g-footer[data-v-b1cbf765] {
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
.g-footer-container[data-v-b1cbf765] {
  display: flex;
  width: 100%;
  height: 100%;
}
.g-timeunit[data-v-b1cbf765] {
  height: 100%;
  font-size: 65%;
  display: flex;
  flex-direction: column;
  justify-content: center;
}

`, "top");
q(`
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
  Ue as GGanttChart,
  Ke as GGanttRow,
  tn as default,
  Qe as extendDayjs,
  tn as ganttastic
};
