import N from "dayjs";
import { inject as lt, computed as R, defineComponent as q, openBlock as k, createElementBlock as M, createElementVNode as Y, Fragment as V, renderList as J, unref as E, normalizeStyle as A, renderSlot as I, createTextVNode as st, toDisplayString as tt, createCommentVNode as P, toRefs as et, ref as $, watch as ut, nextTick as Mt, createBlock as Z, Teleport as Qt, createVNode as wt, Transition as Xt, withCtx as X, getCurrentScope as Zt, onScopeDispose as Jt, getCurrentInstance as te, onMounted as Lt, useSlots as ee, provide as it, withModifiers as ne, mergeProps as ae, TransitionGroup as re } from "vue";
var ct = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {}, $t = { exports: {} };
(function(t, o) {
  (function(n, u) {
    t.exports = u();
  })(ct, function() {
    return function(n, u) {
      u.prototype.isSameOrBefore = function(s, c) {
        return this.isSame(s, c) || this.isBefore(s, c);
      };
    };
  });
})($t);
const oe = $t.exports;
var Gt = { exports: {} };
(function(t, o) {
  (function(n, u) {
    t.exports = u();
  })(ct, function() {
    return function(n, u) {
      u.prototype.isSameOrAfter = function(s, c) {
        return this.isSame(s, c) || this.isAfter(s, c);
      };
    };
  });
})(Gt);
const ie = Gt.exports;
var Yt = { exports: {} };
(function(t, o) {
  (function(n, u) {
    t.exports = u();
  })(ct, function() {
    return function(n, u, s) {
      u.prototype.isBetween = function(c, d, g, f) {
        var a = s(c), e = s(d), r = (f = f || "()")[0] === "(", l = f[1] === ")";
        return (r ? this.isAfter(a, g) : !this.isBefore(a, g)) && (l ? this.isBefore(e, g) : !this.isAfter(e, g)) || (r ? this.isBefore(a, g) : !this.isAfter(a, g)) && (l ? this.isAfter(e, g) : !this.isBefore(e, g));
      };
    };
  });
})(Yt);
const se = Yt.exports;
var It = { exports: {} };
(function(t, o) {
  (function(n, u) {
    t.exports = u();
  })(ct, function() {
    var n = { LTS: "h:mm:ss A", LT: "h:mm A", L: "MM/DD/YYYY", LL: "MMMM D, YYYY", LLL: "MMMM D, YYYY h:mm A", LLLL: "dddd, MMMM D, YYYY h:mm A" }, u = /(\[[^[]*\])|([-_:/.,()\s]+)|(A|a|YYYY|YY?|MM?M?M?|Do|DD?|hh?|HH?|mm?|ss?|S{1,3}|z|ZZ?)/g, s = /\d\d/, c = /\d\d?/, d = /\d*[^-_:/,()\s\d]+/, g = {}, f = function(v) {
      return (v = +v) + (v > 68 ? 1900 : 2e3);
    }, a = function(v) {
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
    }], r = function(v) {
      var b = g[v];
      return b && (b.indexOf ? b : b.s.concat(b.f));
    }, l = function(v, b) {
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
      this.afternoon = l(v, !1);
    }], a: [d, function(v) {
      this.afternoon = l(v, !0);
    }], S: [/\d/, function(v) {
      this.milliseconds = 100 * +v;
    }], SS: [s, function(v) {
      this.milliseconds = 10 * +v;
    }], SSS: [/\d{3}/, function(v) {
      this.milliseconds = +v;
    }], s: [c, a("seconds")], ss: [c, a("seconds")], m: [c, a("minutes")], mm: [c, a("minutes")], H: [c, a("hours")], h: [c, a("hours")], HH: [c, a("hours")], hh: [c, a("hours")], D: [c, a("day")], DD: [s, a("day")], Do: [d, function(v) {
      var b = g.ordinal, x = v.match(/\d+/);
      if (this.day = x[0], b)
        for (var h = 1; h <= 31; h += 1)
          b(h).replace(/\[|\]/g, "") === v && (this.day = h);
    }], M: [c, a("month")], MM: [s, a("month")], MMM: [d, function(v) {
      var b = r("months"), x = (r("monthsShort") || b.map(function(h) {
        return h.slice(0, 3);
      })).indexOf(v) + 1;
      if (x < 1)
        throw new Error();
      this.month = x % 12 || x;
    }], MMMM: [d, function(v) {
      var b = r("months").indexOf(v) + 1;
      if (b < 1)
        throw new Error();
      this.month = b % 12 || b;
    }], Y: [/[+-]?\d+/, a("year")], YY: [s, function(v) {
      this.year = f(v);
    }], YYYY: [/\d{4}/, a("year")], Z: e, ZZ: e };
    function D(v) {
      var b, x;
      b = v, x = g && g.formats;
      for (var h = (v = b.replace(/(\[[^\]]+])|(LTS?|l{1,4}|L{1,4})/g, function(O, C, T) {
        var S = T && T.toUpperCase();
        return C || x[T] || n[T] || x[S].replace(/(\[[^\]]+])|(MMMM|MM|DD|dddd)/g, function(L, G, F) {
          return G || F.slice(1);
        });
      })).match(u), p = h.length, B = 0; B < p; B += 1) {
        var i = h[B], m = w[i], y = m && m[0], _ = m && m[1];
        h[B] = _ ? { regex: y, parser: _ } : i.replace(/^\[|\]$/g, "");
      }
      return function(O) {
        for (var C = {}, T = 0, S = 0; T < p; T += 1) {
          var L = h[T];
          if (typeof L == "string")
            S += L.length;
          else {
            var G = L.regex, F = L.parser, U = O.slice(S), K = G.exec(U)[0];
            F.call(C, K), O = O.replace(K, "");
          }
        }
        return function(z) {
          var j = z.afternoon;
          if (j !== void 0) {
            var Q = z.hours;
            j ? Q < 12 && (z.hours += 12) : Q === 12 && (z.hours = 0), delete z.afternoon;
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
          var O = y[2] === !0, C = y[3] === !0, T = O || C, S = y[2];
          C && (S = y[2]), g = this.$locale(), !O && S && (g = x.Ls[S]), this.$d = function(U, K, z) {
            try {
              if (["x", "X"].indexOf(K) > -1)
                return new Date((K === "X" ? 1e3 : 1) * U);
              var j = D(K)(U), Q = j.year, rt = j.month, Nt = j.day, Vt = j.hours, qt = j.minutes, Wt = j.seconds, Kt = j.milliseconds, _t = j.zone, dt = new Date(), ft = Nt || (Q || rt ? 1 : dt.getDate()), gt = Q || dt.getFullYear(), ot = 0;
              Q && !rt || (ot = rt > 0 ? rt - 1 : dt.getMonth());
              var ht = Vt || 0, pt = qt || 0, mt = Wt || 0, vt = Kt || 0;
              return _t ? new Date(Date.UTC(gt, ot, ft, ht, pt, mt, vt + 60 * _t.offset * 1e3)) : z ? new Date(Date.UTC(gt, ot, ft, ht, pt, mt, vt)) : new Date(gt, ot, ft, ht, pt, mt, vt);
            } catch {
              return new Date("");
            }
          }(i, _, m), this.init(), S && S !== !0 && (this.$L = this.locale(S).$L), T && i != this.format(_) && (this.$d = new Date("")), g = {};
        } else if (_ instanceof Array)
          for (var L = _.length, G = 1; G <= L; G += 1) {
            y[1] = _[G - 1];
            var F = x.apply(this, y);
            if (F.isValid()) {
              this.$d = F.$d, this.$L = F.$L, this.init();
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
const le = It.exports, Rt = Symbol("CHART_ROWS_KEY"), At = Symbol("CONFIG_KEY"), Ht = Symbol("EMIT_BAR_EVENT_KEY"), Ft = Symbol("BAR_CONTAINER_KEY");
function H() {
  const t = lt(At);
  if (!t)
    throw Error("Failed to inject config!");
  return t;
}
const jt = "YYYY-MM-DD HH:mm";
function nt(t = H()) {
  const { chartStart: o, chartEnd: n, barStart: u, barEnd: s, dateFormat: c } = t, d = R(() => f(o.value)), g = R(() => f(n.value)), f = (e, r) => {
    let l;
    if (r !== void 0 && typeof e != "string" && !(e instanceof Date) && (l = r === "start" ? e[u.value] : e[s.value]), typeof e == "string")
      l = e;
    else if (e instanceof Date)
      return N(e);
    const w = c.value || jt;
    return N(l, w, !0);
  };
  return {
    chartStartDayjs: d,
    chartEndDayjs: g,
    toDayjs: f,
    format: (e, r) => r === !1 ? e instanceof Date ? e : N(e).toDate() : (typeof e == "string" || e instanceof Date ? f(e) : e).format(r)
  };
}
function xt() {
  const { precision: t } = H(), { chartStartDayjs: o, chartEndDayjs: n } = nt(), u = R(() => {
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
    timeaxisUnits: R(() => {
      const d = [], g = [], f = u.value === "day" ? "date" : u.value, a = t.value;
      let e = o.value.startOf(a);
      const r = n.value.diff(o.value, "minutes", !0);
      let l = 0, w = e[f]();
      for (; e.isBefore(n.value) || e.isSame(n.value); ) {
        if (e[f]() !== w) {
          let h = 0;
          if (d.length === 0)
            h = e.startOf(f).diff(o.value, "minutes", !0) / r * 100;
          else if (e.isSameOrAfter(n.value))
            h = n.value.diff(
              e.subtract(1, f).startOf(f),
              "minutes",
              !0
            ) / r * 100;
          else {
            const B = e.startOf(f), i = e.subtract(1, f).startOf(f);
            h = B.diff(i, "minutes", !0) / r * 100;
          }
          const p = e.subtract(1, f);
          d.push({
            label: p.format(s[f]),
            value: String(w),
            date: p.toDate(),
            width: String(h) + "%"
          }), l = 0, w = e[f]();
        }
        let b = 0;
        g.length === 0 ? b = e.endOf(a).diff(o.value, "minutes", !0) / r * 100 : e.add(1, a).isSameOrAfter(n.value) ? b = n.value.diff(e.startOf(a), "minutes", !0) / r * 100 : b = e.endOf(a).diff(e.startOf(a), "minutes", !0) / r * 100, g.push({
          label: e.format(s[a]),
          value: String(e[a === "day" ? "date" : a]()),
          date: e.toDate(),
          width: String(b) + "%"
        });
        const x = e;
        e = e.add(1, a), (e.isBefore(n.value) || e.isSame(n.value)) && (l += e.diff(x, "minutes", !0));
      }
      const D = n.value.isSame(n.value.startOf(f)) ? n.value[f]() - 1 : n.value[f]();
      return d.some((b) => b.value === String(D)) || (l += n.value.diff(
        e.subtract(1, a),
        "minutes",
        !0
      ), d.push({
        label: n.value.format(s[f]),
        value: String(w),
        date: n.value.toDate(),
        width: `${l / r * 100}%`
      })), { upperUnits: d, lowerUnits: g };
    })
  };
}
const ue = { class: "g-timeaxis" }, ce = { class: "g-timeunits-container" }, de = { class: "g-timeunits-container" }, fe = /* @__PURE__ */ q({
  __name: "GGanttTimeaxis",
  setup(t) {
    const { precision: o, colors: n } = H(), { timeaxisUnits: u } = xt();
    return (s, c) => (k(), M("div", ue, [
      Y("div", ce, [
        (k(!0), M(V, null, J(E(u).upperUnits, ({ label: d, value: g, date: f, width: a }, e) => (k(), M("div", {
          key: d,
          class: "g-upper-timeunit",
          style: A({
            background: e % 2 === 0 ? E(n).primary : E(n).secondary,
            color: E(n).text,
            width: a
          })
        }, [
          I(s.$slots, "upper-timeunit", {
            label: d,
            value: g,
            date: f
          }, () => [
            st(tt(d), 1)
          ])
        ], 4))), 128))
      ]),
      Y("div", de, [
        (k(!0), M(V, null, J(E(u).lowerUnits, ({ label: d, value: g, date: f, width: a }, e) => (k(), M("div", {
          key: d,
          class: "g-timeunit",
          style: A({
            background: e % 2 === 0 ? E(n).ternary : E(n).quartenary,
            color: E(n).text,
            flexDirection: E(o) === "hour" ? "column" : "row",
            alignItems: E(o) === "hour" ? "" : "center",
            width: a
          })
        }, [
          I(s.$slots, "timeunit", {
            label: d,
            value: g,
            date: f
          }, () => [
            st(tt(d), 1)
          ]),
          E(o) === "hour" ? (k(), M("div", {
            key: 0,
            class: "g-timeaxis-hour-pin",
            style: A({ background: E(n).text })
          }, null, 4)) : P("", !0)
        ], 4))), 128))
      ])
    ]));
  }
});
const ge = { class: "g-grid-container" }, he = /* @__PURE__ */ q({
  __name: "GGanttGrid",
  props: {
    highlightedDates: null
  },
  setup(t) {
    var c;
    const n = (c = t.highlightedDates) == null ? void 0 : c.map((d) => d.getTime()), { colors: u } = H(), { timeaxisUnits: s } = xt();
    return (d, g) => (k(), M("div", ge, [
      (k(!0), M(V, null, J(E(s).lowerUnits, ({ label: f, value: a, width: e, date: r }) => {
        var l;
        return k(), M("div", {
          key: f,
          class: "g-grid-line",
          style: A({
            width: e,
            background: (l = E(n)) != null && l.includes(r.getTime()) ? E(u).hoverHighlight : void 0
          })
        }, null, 4);
      }), 128))
    ]));
  }
});
const pe = /* @__PURE__ */ q({
  __name: "GGanttBarTooltip",
  props: {
    bar: null,
    modelValue: { type: Boolean }
  },
  setup(t) {
    const o = t, n = {
      hour: "HH:mm",
      day: "DD. MMM HH:mm",
      month: "DD. MMMM YYYY"
    }, u = "cadetblue", { bar: s } = et(o), { precision: c, font: d, barStart: g, barEnd: f, rowHeight: a } = H(), e = $("0px"), r = $("0px");
    ut(
      () => o.bar,
      async () => {
        var m;
        await Mt();
        const x = ((m = s == null ? void 0 : s.value) == null ? void 0 : m.ganttBarConfig.id) || "";
        if (!x)
          return;
        const h = document.getElementById(x), { top: p, left: B } = (h == null ? void 0 : h.getBoundingClientRect()) || {
          top: 0,
          left: 0
        }, i = Math.max(B, 10);
        e.value = `${p + a.value - 10}px`, r.value = `${i}px`;
      },
      { deep: !0, immediate: !0 }
    );
    const l = R(() => {
      var x, h;
      return ((h = (x = s == null ? void 0 : s.value) == null ? void 0 : x.ganttBarConfig.style) == null ? void 0 : h.background) || u;
    }), { toDayjs: w } = nt(), D = R(() => {
      var x;
      return (x = s.value) == null ? void 0 : x[g.value];
    }), v = R(() => {
      var x;
      return (x = s.value) == null ? void 0 : x[f.value];
    }), b = R(() => {
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
        default: X(() => [
          t.modelValue ? (k(), M("div", {
            key: 0,
            class: "g-gantt-tooltip",
            style: A({
              top: e.value,
              left: r.value,
              fontFamily: E(d)
            })
          }, [
            Y("div", {
              class: "g-gantt-tooltip-color-dot",
              style: A({ background: E(l) })
            }, null, 4),
            I(x.$slots, "default", {
              bar: E(s),
              barStart: E(D),
              barEnd: E(v)
            }, () => [
              st(tt(E(b)), 1)
            ])
          ], 4)) : P("", !0)
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
const at = typeof window < "u";
at && ((Ot = window == null ? void 0 : window.navigator) == null ? void 0 : Ot.userAgent) && /iP(ad|hone|od)/.test(window.navigator.userAgent);
function me(t) {
  return typeof t == "function" ? t() : E(t);
}
function ve(t) {
  return t;
}
function ye(t) {
  return Zt() ? (Jt(t), !0) : !1;
}
function be(t, o = !0) {
  te() ? Lt(t) : o ? t() : Mt(t);
}
function Pt(t) {
  var o;
  const n = me(t);
  return (o = n == null ? void 0 : n.$el) != null ? o : n;
}
const we = at ? window : void 0;
at && window.document;
at && window.navigator;
at && window.location;
function xe(t, o = !1) {
  const n = $(), u = () => n.value = Boolean(t());
  return u(), be(u, o), n;
}
const yt = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {}, bt = "__vueuse_ssr_handlers__";
yt[bt] = yt[bt] || {};
yt[bt];
var Dt = Object.getOwnPropertySymbols, Be = Object.prototype.hasOwnProperty, _e = Object.prototype.propertyIsEnumerable, Ee = (t, o) => {
  var n = {};
  for (var u in t)
    Be.call(t, u) && o.indexOf(u) < 0 && (n[u] = t[u]);
  if (t != null && Dt)
    for (var u of Dt(t))
      o.indexOf(u) < 0 && _e.call(t, u) && (n[u] = t[u]);
  return n;
};
function Oe(t, o, n = {}) {
  const u = n, { window: s = we } = u, c = Ee(u, ["window"]);
  let d;
  const g = xe(() => s && "ResizeObserver" in s), f = () => {
    d && (d.disconnect(), d = void 0);
  }, a = ut(() => Pt(t), (r) => {
    f(), g.value && s && r && (d = new ResizeObserver(o), d.observe(r, c));
  }, { immediate: !0, flush: "post" }), e = () => {
    f(), a();
  };
  return ye(e), {
    isSupported: g,
    stop: e
  };
}
function De(t, o = { width: 0, height: 0 }, n = {}) {
  const u = $(o.width), s = $(o.height);
  return Oe(t, ([c]) => {
    u.value = c.contentRect.width, s.value = c.contentRect.height;
  }, n), ut(() => Pt(t), (c) => {
    u.value = c ? o.width : 0, s.value = c ? o.height : 0;
  }), {
    width: u,
    height: s
  };
}
var Ct;
(function(t) {
  t.UP = "UP", t.RIGHT = "RIGHT", t.DOWN = "DOWN", t.LEFT = "LEFT", t.NONE = "NONE";
})(Ct || (Ct = {}));
var Ce = Object.defineProperty, kt = Object.getOwnPropertySymbols, ke = Object.prototype.hasOwnProperty, Te = Object.prototype.propertyIsEnumerable, Tt = (t, o, n) => o in t ? Ce(t, o, { enumerable: !0, configurable: !0, writable: !0, value: n }) : t[o] = n, Se = (t, o) => {
  for (var n in o || (o = {}))
    ke.call(o, n) && Tt(t, n, o[n]);
  if (kt)
    for (var n of kt(o))
      Te.call(o, n) && Tt(t, n, o[n]);
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
Se({
  linear: ve
}, Me);
const Le = {
  key: 0,
  class: "g-footer"
}, $e = { class: "g-footer-container" }, Ge = /* @__PURE__ */ q({
  __name: "GGanttFooter",
  props: {
    labels: null
  },
  setup(t) {
    const { precision: o, colors: n } = H(), { timeaxisUnits: u } = xt();
    return (s, c) => t.labels ? (k(), M("div", Le, [
      Y("div", $e, [
        (k(!0), M(V, null, J(E(u).lowerUnits, ({ label: d, value: g, date: f, width: a }, e) => (k(), M("div", {
          key: d,
          class: "g-timeunit",
          style: A({
            background: e % 2 === 0 ? E(n).ternary : E(n).quartenary,
            color: E(n).text,
            flexDirection: E(o) === "hour" ? "column" : "row",
            alignItems: E(o) === "hour" ? "" : "center",
            width: a
          })
        }, [
          I(s.$slots, "timeunit", {
            label: d,
            value: g,
            date: f
          }, () => [
            st(tt(t.labels[e]), 1)
          ], !0)
        ], 4))), 128))
      ])
    ])) : P("", !0);
  }
});
const Ye = (t, o) => {
  const n = t.__vccOpts || t;
  for (const [u, s] of o)
    n[u] = s;
  return n;
}, Ie = /* @__PURE__ */ Ye(Ge, [["__scopeId", "data-v-400629df"]]), Re = { style: { display: "flex" } }, Ae = { class: "g-gantt-rows-container" }, He = /* @__PURE__ */ q({
  __name: "GGanttChart",
  props: {
    chartStart: null,
    chartEnd: null,
    precision: { default: "day" },
    barStart: null,
    barEnd: null,
    dateFormat: { type: [String, Boolean], default: jt },
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
    sticky: { type: Boolean }
  },
  emits: ["click-bar", "mousedown-bar", "mouseup-bar", "dblclick-bar", "mouseenter-bar", "mouseleave-bar", "dragstart-bar", "drag-bar", "dragend-bar", "contextmenu-bar"],
  setup(t, { emit: o }) {
    const n = t, { width: u, font: s, colorScheme: c } = et(n), d = ee(), g = R(
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
    }, a = $(!1), e = $(!1), r = $(void 0);
    let l;
    const w = (h) => {
      l && clearTimeout(l), l = setTimeout(() => {
        a.value = !0;
      }, 800), r.value = h;
    }, D = () => {
      clearTimeout(l), a.value = !1;
    }, v = (h, p, B, i) => {
      switch (h.type) {
        case "click":
          o("click-bar", { bar: p, e: h, datetime: B });
          break;
        case "mousedown":
          o("mousedown-bar", { bar: p, e: h, datetime: B });
          break;
        case "mouseup":
          o("mouseup-bar", { bar: p, e: h, datetime: B });
          break;
        case "dblclick":
          o("dblclick-bar", { bar: p, e: h, datetime: B });
          break;
        case "mouseenter":
          w(p), o("mouseenter-bar", { bar: p, e: h });
          break;
        case "mouseleave":
          D(), o("mouseleave-bar", { bar: p, e: h });
          break;
        case "dragstart":
          e.value = !0, o("dragstart-bar", { bar: p, e: h });
          break;
        case "drag":
          o("drag-bar", { bar: p, e: h });
          break;
        case "dragend":
          e.value = !1, o("dragend-bar", { bar: p, e: h });
          break;
        case "contextmenu":
          o("contextmenu-bar", { bar: p, e: h, datetime: B });
          break;
      }
    }, b = $(null), x = De(b);
    return it(Rt, f), it(At, {
      ...et(n),
      colors: g,
      chartSize: x
    }), it(Ht, v), (h, p) => (k(), M(V, null, [
      Y("div", Re, [
        Y("div", {
          style: A([{ display: "flex", "flex-flow": "column" }, t.sticky ? "position: sticky; left:0;z-index:100; background: white;" : ""])
        }, [
          I(h.$slots, "side-menu")
        ], 4),
        Y("div", {
          ref_key: "ganttChart",
          ref: b,
          class: "g-gantt-chart",
          style: A({ width: E(u), background: E(g).background, fontFamily: E(s) })
        }, [
          t.hideTimeaxis ? P("", !0) : (k(), Z(fe, { key: 0 }, {
            "upper-timeunit": X(({ label: B, value: i, date: m }) => [
              I(h.$slots, "upper-timeunit", {
                label: B,
                value: i,
                date: m
              })
            ]),
            timeunit: X(({ label: B, value: i, date: m }) => [
              I(h.$slots, "timeunit", {
                label: B,
                value: i,
                date: m
              })
            ]),
            _: 3
          })),
          t.grid ? (k(), Z(he, {
            key: 1,
            "highlighted-dates": t.highlightedDates
          }, null, 8, ["highlighted-dates"])) : P("", !0),
          Y("div", Ae, [
            I(h.$slots, "default")
          ]),
          t.hideTimeaxis ? P("", !0) : (k(), Z(Ie, {
            key: 2,
            labels: t.footerLabels
          }, null, 8, ["labels"])),
          wt(pe, {
            "model-value": a.value || e.value,
            bar: r.value
          }, {
            default: X(() => [
              I(h.$slots, "bar-tooltip", { bar: r.value })
            ]),
            _: 3
          }, 8, ["model-value", "bar"])
        ], 4)
      ]),
      Y("div", null, [
        I(h.$slots, "footer")
      ])
    ], 64));
  }
});
function Bt(t = H()) {
  const { dateFormat: o, chartSize: n } = t, { chartStartDayjs: u, chartEndDayjs: s, toDayjs: c, format: d } = nt(t), g = R(() => s.value.diff(u.value, "minutes"));
  return {
    mapTimeToPosition: (e) => {
      const r = n.width.value || 0, l = c(e).diff(u.value, "minutes", !0);
      return Math.ceil(l / g.value * r);
    },
    mapPositionToTime: (e) => {
      const r = n.width.value || 0, l = e / r * g.value, w = d(u.value.add(l, "minutes"), o.value);
      if (typeof w == "string")
        return w;
      throw Error;
    }
  };
}
function St(t, o = () => null, n = () => null, u = H()) {
  const { barStart: s, barEnd: c, pushOnOverlap: d } = u, g = $(!1);
  let f = 0, a;
  const { mapPositionToTime: e } = Bt(u), { toDayjs: r } = nt(u), l = (p) => {
    const B = document.getElementById(t.ganttBarConfig.id);
    if (!B)
      return;
    switch (f = p.clientX - (B.getBoundingClientRect().left || 0), p.target.className) {
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
        const O = r(t[s.value]), T = r(t[c.value]).diff(O, "minute"), S = e(y).substring(0, 10) + " 00:00";
        t[s.value] = S, t[c.value] = r(S).add(T, "minute").format("DD.MM.YYYY HH:mm");
      }
      o(p, t);
    }
  }, v = (p) => {
    const { barElement: B, barContainer: i } = w();
    if (!B || !i)
      return;
    const m = p.clientX - i.left, y = e(m);
    if (!r(y).isSameOrAfter(r(t, "end"))) {
      if (t[s.value].substring(0, 10) != e(m).substring(0, 10)) {
        const _ = e(m).substring(0, 10) + " 00:00";
        t[s.value] = _;
      }
      o(p, t);
    }
  }, b = (p) => {
    const { barElement: B, barContainer: i } = w();
    if (!B || !i)
      return;
    const m = p.clientX - i.left, y = e(m);
    if (!r(y).isSameOrBefore(r(t, "start"))) {
      if (t[s.value].substring(0, 10) != e(m).substring(0, 10)) {
        const _ = e(m).substring(0, 10) + " 23:59";
        t[c.value] = _;
      }
      o(p, t);
    }
  }, x = (p, B) => {
    if (!d.value)
      return !1;
    const i = t.ganttBarConfig.dragLimitLeft, m = t.ganttBarConfig.dragLimitRight;
    return p && i != null && p < i || B && m != null && B > m;
  }, h = (p) => {
    g.value = !1, document.body.style.cursor = "", window.removeEventListener("mousemove", a), window.removeEventListener("mouseup", h), n(p, t);
  };
  return {
    isDragging: g,
    initDrag: l
  };
}
function Ut() {
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
  const t = H(), o = Ut(), n = zt(), { pushOnOverlap: u, barStart: s, barEnd: c, noOverlap: d, dateFormat: g } = t, f = /* @__PURE__ */ new Map(), { toDayjs: a, format: e } = nt(), r = (i, m) => {
    const { initDrag: y } = St(i, w, h, t);
    n({ ...m, type: "dragstart" }, i), y(m), p(i);
  }, l = (i, m) => {
    const y = i.ganttBarConfig.bundle;
    y != null && (o().forEach((_) => {
      _.forEach((O) => {
        if (O.ganttBarConfig.bundle === y) {
          const C = O === i ? h : () => null, { initDrag: T } = St(O, w, C, t);
          T(m), p(O);
        }
      });
    }), n({ ...m, type: "dragstart" }, i));
  }, w = (i, m) => {
    n({ ...i, type: "drag" }, m), D(m);
  }, D = (i) => {
    if (!(u != null && u.value))
      return;
    let m = i, { overlapBar: y, overlapType: _ } = v(m);
    for (; y; ) {
      p(y);
      const O = a(m[s.value]), C = a(m[c.value]), T = a(y[s.value]), S = a(y[c.value]);
      let L;
      switch (_) {
        case "left":
          L = S.diff(O, "minutes", !0), y[c.value] = e(m[s.value], g.value), y[s.value] = e(
            T.subtract(L, "minutes"),
            g.value
          );
          break;
        case "right":
          L = C.diff(T, "minutes", !0), y[s.value] = e(C, g.value), y[c.value] = e(
            S.add(L, "minutes"),
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
    const O = o().find((G) => G.includes(i)) || [], C = a(i[s.value]), T = a(i[c.value]);
    return { overlapBar: O.find((G) => {
      if (G === i)
        return !1;
      const F = a(G[s.value]), U = a(G[c.value]);
      return m = C.isBetween(F, U), y = T.isBetween(F, U), _ = F.isBetween(C, T) || U.isBetween(C, T), m || y || _;
    }), overlapType: m ? "left" : y ? "right" : _ ? "between" : null };
  }, b = (i, m, y) => {
    p(i), i.ganttBarConfig.bundle && o().forEach((_) => {
      _.forEach((O) => {
        O.ganttBarConfig.bundle === i.ganttBarConfig.bundle && O !== i && (p(O), x(O, m, y));
      });
    });
  }, x = (i, m, y) => {
    switch (y) {
      case "left":
        i[s.value] = e(
          a(i, "start").subtract(m, "minutes"),
          g.value
        ), i[c.value] = e(
          a(i, "end").subtract(m, "minutes"),
          g.value
        );
        break;
      case "right":
        i[s.value] = e(
          a(i, "start").add(m, "minutes"),
          g.value
        ), i[c.value] = e(a(i, "end").add(m, "minutes"), g.value);
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
    if (u.value || !d.value)
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
    initDragOfBar: r,
    initDragOfBundle: l
  };
}
function je() {
  const { pushOnOverlap: t } = H(), o = Ut(), n = (d) => {
    const g = [];
    return d != null && o().forEach((f) => {
      f.forEach((a) => {
        a.ganttBarConfig.bundle === d && g.push(a);
      });
    }), g;
  }, u = (d) => {
    if (!t.value || d.ganttBarConfig.pushOnOverlap === !1)
      return;
    for (const f of ["left", "right"]) {
      const a = f, { gapDistanceSoFar: e, bundleBarsAndGapDist: r } = s(
        d,
        0,
        a
      );
      let l = e;
      const w = r;
      if (!w)
        continue;
      for (let v = 0; v < w.length; v++) {
        const b = w[v].bar, x = w[v].gapDistance;
        n(b.ganttBarConfig.bundle).filter(
          (p) => p !== b
        ).forEach((p) => {
          const B = s(p, x, a), i = B.gapDistanceSoFar, m = B.bundleBarsAndGapDist;
          i != null && (!l || i < l) && (l = i), m.forEach((y) => {
            w.find((_) => _.bar === y.bar) || w.push(y);
          });
        });
      }
      const D = document.getElementById(d.ganttBarConfig.id);
      l != null && a === "left" ? d.ganttBarConfig.dragLimitLeft = D.offsetLeft - l : l != null && a === "right" && (d.ganttBarConfig.dragLimitRight = D.offsetLeft + D.offsetWidth + l);
    }
    n(d.ganttBarConfig.bundle).forEach((f) => {
      f.ganttBarConfig.dragLimitLeft = d.ganttBarConfig.dragLimitLeft, f.ganttBarConfig.dragLimitRight = d.ganttBarConfig.dragLimitRight;
    });
  }, s = (d, g = 0, f) => {
    const a = d.ganttBarConfig.bundle ? [{ bar: d, gapDistance: g }] : [];
    let e = d, r = c(e, f);
    if (f === "left")
      for (; r; ) {
        const l = document.getElementById(e.ganttBarConfig.id), w = document.getElementById(r.ganttBarConfig.id), D = w.offsetLeft + w.offsetWidth;
        if (g += l.offsetLeft - D, r.ganttBarConfig.immobile)
          return { gapDistanceSoFar: g, bundleBarsAndGapDist: a };
        r.ganttBarConfig.bundle && a.push({
          bar: r,
          gapDistance: g
        }), e = r, r = c(r, "left");
      }
    if (f === "right")
      for (; r; ) {
        const l = document.getElementById(e.ganttBarConfig.id), w = document.getElementById(r.ganttBarConfig.id), D = l.offsetLeft + l.offsetWidth;
        if (g += w.offsetLeft - D, r.ganttBarConfig.immobile)
          return { gapDistanceSoFar: g, bundleBarsAndGapDist: a };
        r.ganttBarConfig.bundle && a.push({
          bar: r,
          gapDistance: g
        }), e = r, r = c(r, "right");
      }
    return { gapDistanceSoFar: null, bundleBarsAndGapDist: a };
  }, c = (d, g) => {
    const f = document.getElementById(d.ganttBarConfig.id), a = o().find((r) => r.includes(d)) || [];
    let e = [];
    return g === "left" ? e = a.filter((r) => {
      const l = document.getElementById(r.ganttBarConfig.id);
      return l && l.offsetLeft < f.offsetLeft && r.ganttBarConfig.pushOnOverlap !== !1;
    }) : e = a.filter((r) => {
      const l = document.getElementById(r.ganttBarConfig.id);
      return l && l.offsetLeft > f.offsetLeft && r.ganttBarConfig.pushOnOverlap !== !1;
    }), e.length > 0 ? e.reduce((r, l) => {
      const w = document.getElementById(r.ganttBarConfig.id), D = document.getElementById(l.ganttBarConfig.id), v = Math.abs(w.offsetLeft - f.offsetLeft), b = Math.abs(D.offsetLeft - f.offsetLeft);
      return v < b ? r : l;
    }, e[0]) : null;
  };
  return {
    setDragLimitsOfGanttBar: u
  };
}
const Pe = ["id"], Ue = { class: "g-gantt-bar-label" }, ze = { style: { "z-index": "100" } }, Ne = /* @__PURE__ */ Y("div", { class: "g-gantt-bar-handle-left" }, null, -1), Ve = /* @__PURE__ */ Y("div", { class: "g-gantt-bar-handle-right" }, null, -1), qe = /* @__PURE__ */ q({
  __name: "GGanttBar",
  props: {
    bar: null
  },
  setup(t) {
    const o = t, n = zt(), u = H(), { rowHeight: s } = u, { bar: c } = et(o), { mapTimeToPosition: d, mapPositionToTime: g } = Bt(), { initDragOfBar: f, initDragOfBundle: a } = Fe(), { setDragLimitsOfGanttBar: e } = je(), r = $(!1), l = R(() => c.value.ganttBarConfig);
    function w(O) {
      l.value.bundle != null ? a(c.value, O) : f(c.value, O), r.value = !0;
    }
    const D = () => {
      e(c.value), !l.value.immobile && (window.addEventListener("mousemove", w, {
        once: !0
      }), window.addEventListener(
        "mouseup",
        () => {
          window.removeEventListener("mousemove", w), r.value = !1;
        },
        { once: !0 }
      ));
    }, v = lt(Ft), b = (O) => {
      var S;
      O.preventDefault(), O.type === "mousedown" && D();
      const C = (S = v == null ? void 0 : v.value) == null ? void 0 : S.getBoundingClientRect();
      if (!C)
        return;
      const T = g(O.clientX - C.left);
      n(O, c.value, T);
    }, { barStart: x, barEnd: h, width: p, chartStart: B, chartEnd: i, chartSize: m } = u, y = $(0), _ = $(0);
    return Lt(() => {
      ut(
        [c, p, B, i, m.width],
        () => {
          y.value = d(c.value[x.value]), _.value = d(c.value[h.value]);
        },
        { deep: !0, immediate: !0 }
      );
    }), (O, C) => (k(), M("div", {
      id: E(l).id,
      class: "g-gantt-bar",
      style: A({
        ...E(l).style,
        position: "absolute",
        top: `${E(s) * 0.1}px`,
        left: `${y.value}px`,
        width: `${_.value - y.value}px`,
        height: `${E(s) * 0.8}px`,
        zIndex: r.value ? 3 : 2
      }),
      onMousedown: b,
      onClick: b,
      onDblclick: b,
      onMouseenter: b,
      onMouseleave: b,
      onContextmenu: b
    }, [
      Y("div", Ue, [
        I(O.$slots, "default", { bar: E(c) }, () => [
          Y("div", ze, tt(E(l).label || ""), 1),
          E(l).progress ? (k(), M("div", {
            key: 0,
            style: A([{ position: "absolute", height: "100%", left: "0" }, {
              width: E(l).progress + "%",
              backgroundColor: E(l).progressColor
            }])
          }, null, 4)) : P("", !0)
        ])
      ]),
      E(l).hasHandles ? (k(), M(V, { key: 0 }, [
        Ne,
        Ve
      ], 64)) : P("", !0)
    ], 44, Pe));
  }
});
const We = /* @__PURE__ */ q({
  __name: "GGanttRow",
  props: {
    bars: null,
    highlightOnHover: { type: Boolean }
  },
  emits: ["drop"],
  setup(t, { emit: o }) {
    const n = t, { rowHeight: u, colors: s } = H(), { highlightOnHover: c } = et(n), d = $(!1), g = R(() => ({
      height: `${u.value}px`,
      background: (c == null ? void 0 : c.value) && d.value ? s.value.hoverHighlight : null
    })), { mapPositionToTime: f } = Bt(), a = $(null);
    it(Ft, a);
    const e = (r) => {
      var v;
      const l = (v = a.value) == null ? void 0 : v.getBoundingClientRect();
      if (!l) {
        console.error("Vue-Ganttastic: failed to find bar container element for row.");
        return;
      }
      const w = r.clientX - l.left, D = f(w);
      o("drop", { e: r, datetime: D });
    };
    return (r, l) => (k(), M("div", {
      class: "g-gantt-row",
      style: A(E(g)),
      onDragover: l[0] || (l[0] = ne((w) => d.value = !0, ["prevent"])),
      onDragleave: l[1] || (l[1] = (w) => d.value = !1),
      onDrop: l[2] || (l[2] = (w) => e(w)),
      onMouseover: l[3] || (l[3] = (w) => d.value = !0),
      onMouseleave: l[4] || (l[4] = (w) => d.value = !1)
    }, [
      P("", !0),
      Y("div", ae({
        ref_key: "barContainer",
        ref: a,
        class: "g-gantt-row-bars-container"
      }, r.$attrs), [
        wt(re, {
          name: "bar-transition",
          tag: "div"
        }, {
          default: X(() => [
            (k(!0), M(V, null, J(t.bars, (w) => (k(), Z(qe, {
              key: w.ganttBarConfig.id,
              bar: w
            }, {
              default: X(() => [
                I(r.$slots, "bar-label", { bar: w })
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
function Ke() {
  N.extend(oe), N.extend(ie), N.extend(se), N.extend(le);
}
const Je = {
  install(t, o) {
    Ke(), t.component("GGanttChart", He), t.component("GGanttRow", We);
  }
};
function W(t, o = "top") {
  if (!t || typeof document > "u")
    return;
  const n = document.head, u = document.createElement("style");
  o === "top" && n.firstChild ? n.insertBefore(u, n.firstChild) : n.appendChild(u), u.appendChild(document.createTextNode(t));
}
W(`
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
W(`
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
W(`
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
W(`
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
W(`
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
W(`
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
W(`
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
  He as GGanttChart,
  We as GGanttRow,
  Je as default,
  Ke as extendDayjs,
  Je as ganttastic
};
