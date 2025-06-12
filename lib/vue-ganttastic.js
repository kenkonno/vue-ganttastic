import W from "dayjs";
import {
  inject as ot,
  computed as A,
  defineComponent as K,
  openBlock as E,
  createElementBlock as O,
  createElementVNode as Y,
  Fragment as V,
  renderList as Q,
  unref as _,
  normalizeStyle as G,
  renderSlot as j,
  createTextVNode as ct,
  toDisplayString as Z,
  createCommentVNode as z,
  toRefs as nt,
  ref as $,
  watch as at,
  nextTick as Bt,
  createBlock as X,
  Teleport as Jt,
  createVNode as kt,
  Transition as te,
  withCtx as J,
  getCurrentScope as ee,
  onScopeDispose as ne,
  getCurrentInstance as oe,
  onMounted as Dt,
  useSlots as ae,
  provide as ut,
  withDirectives as re,
  withKeys as ie,
  vModelText as se,
  withModifiers as le,
  mergeProps as Yt,
  TransitionGroup as ue
} from "vue";

var dt = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {},
  Rt = {exports: {}};
(function(t, r) {
  (function (n, l) {
    t.exports = l();
  })(dt, function() {
    return function (n, l) {
      l.prototype.isSameOrBefore = function (i, u) {
        return this.isSame(i, u) || this.isBefore(i, u);
      };
    };
  });
})(Rt);
const ce = Rt.exports;
var It = {exports: {}};
(function(t, r) {
  (function (n, l) {
    t.exports = l();
  })(dt, function() {
    return function (n, l) {
      l.prototype.isSameOrAfter = function (i, u) {
        return this.isSame(i, u) || this.isAfter(i, u);
      };
    };
  });
})(It);
const de = It.exports;
var Ht = {exports: {}};
(function(t, r) {
  (function (n, l) {
    t.exports = l();
  })(dt, function() {
    return function (n, l, i) {
      l.prototype.isBetween = function (u, f, p, m) {
        var o = i(u), e = i(f), s = (m = m || "()")[0] === "(", g = m[1] === ")";
        return (s ? this.isAfter(o, p) : !this.isBefore(o, p)) && (g ? this.isBefore(e, p) : !this.isAfter(e, p)) || (s ? this.isBefore(o, p) : !this.isAfter(o, p)) && (g ? this.isAfter(e, p) : !this.isBefore(e, p));
      };
    };
  });
})(Ht);
const fe = Ht.exports;
var At = {exports: {}};
(function(t, r) {
  (function (n, l) {
    t.exports = l();
  })(dt, function() {
    var n = {
        LTS: "h:mm:ss A",
        LT: "h:mm A",
        L: "MM/DD/YYYY",
        LL: "MMMM D, YYYY",
        LLL: "MMMM D, YYYY h:mm A",
        LLLL: "dddd, MMMM D, YYYY h:mm A"
      },
      l = /(\[[^[]*\])|([-_:/.,()\s]+)|(A|a|YYYY|YY?|MM?M?M?|Do|DD?|hh?|HH?|mm?|ss?|S{1,3}|z|ZZ?)/g,
      i = /\d\d/, u = /\d\d?/, f = /\d*[^-_:/,()\s\d]+/, p = {}, m = function (c) {
        return (c = +c) + (c > 68 ? 1900 : 2e3);
      }, o = function (c) {
        return function (h) {
          this[c] = +h;
      };
      }, e = [/[+-]\d\d:?(\d\d)?|Z/, function (c) {
        (this.zone || (this.zone = {})).offset = function (h) {
          if (!h || h === "Z")
          return 0;
          var x = h.match(/([+-]|\d\d)/g), k = 60 * x[1] + (+x[2] || 0);
          return k === 0 ? 0 : x[0] === "+" ? -k : k;
        }(c);
      }], s = function (c) {
        var h = p[c];
        return h && (h.indexOf ? h : h.s.concat(h.f));
      }, g = function (c, h) {
        var x, k = p.meridiem;
        if (k) {
        for (var d = 1; d <= 24; d += 1)
          if (c.indexOf(k(d, 0, h)) > -1) {
            x = d > 12;
            break;
          }
      } else
          x = c === (h ? "pm" : "PM");
      return x;
      }, w = {
        A: [f, function (c) {
          this.afternoon = g(c, !1);
        }],
        a: [f, function (c) {
          this.afternoon = g(c, !0);
        }],
        S: [/\d/, function (c) {
          this.milliseconds = 100 * +c;
        }],
        SS: [i, function (c) {
          this.milliseconds = 10 * +c;
        }],
        SSS: [/\d{3}/, function (c) {
          this.milliseconds = +c;
        }],
        s: [u, o("seconds")],
        ss: [u, o("seconds")],
        m: [u, o("minutes")],
        mm: [u, o("minutes")],
        H: [u, o("hours")],
        h: [u, o("hours")],
        HH: [u, o("hours")],
        hh: [u, o("hours")],
        D: [u, o("day")],
        DD: [i, o("day")],
        Do: [f, function (c) {
          var h = p.ordinal, x = c.match(/\d+/);
          if (this.day = x[0], h)
            for (var k = 1; k <= 31; k += 1)
              h(k).replace(/\[|\]/g, "") === c && (this.day = k);
        }],
        M: [u, o("month")],
        MM: [i, o("month")],
        MMM: [f, function (c) {
          var h = s("months"), x = (s("monthsShort") || h.map(function (k) {
            return k.slice(0, 3);
          })).indexOf(c) + 1;
      if (x < 1)
        throw new Error();
      this.month = x % 12 || x;
        }],
        MMMM: [f, function (c) {
          var h = s("months").indexOf(c) + 1;
          if (h < 1)
        throw new Error();
          this.month = h % 12 || h;
        }],
        Y: [/[+-]?\d+/, o("year")],
        YY: [i, function (c) {
          this.year = m(c);
        }],
        YYYY: [/\d{4}/, o("year")],
        Z: e,
        ZZ: e
      };

    function B(c) {
      var h, x;
      h = c, x = p && p.formats;
      for (var k = (c = h.replace(/(\[[^\]]+])|(LTS?|l{1,4}|L{1,4})/g, function (C, T, M) {
        var S = M && M.toUpperCase();
        return T || x[M] || n[M] || x[S].replace(/(\[[^\]]+])|(MMMM|MM|DD|dddd)/g, function (H, R, P) {
          return R || P.slice(1);
        });
      })).match(l), d = k.length, b = 0; b < d; b += 1) {
        var a = k[b], v = w[a], y = v && v[0], D = v && v[1];
        k[b] = D ? {regex: y, parser: D} : a.replace(/^\[|\]$/g, "");
      }
      return function (C) {
        for (var T = {}, M = 0, S = 0; M < d; M += 1) {
          var H = k[M];
          if (typeof H == "string")
            S += H.length;
          else {
            var R = H.regex, P = H.parser, L = C.slice(S), I = R.exec(L)[0];
            P.call(T, I), C = C.replace(I, "");
          }
        }
        return function (N) {
          var U = N.afternoon;
          if (U !== void 0) {
            var et = N.hours;
            U ? et < 12 && (N.hours += 12) : et === 12 && (N.hours = 0), delete N.afternoon;
          }
        }(T), T;
      };
    }

    return function (c, h, x) {
      x.p.customParseFormat = !0, c && c.parseTwoDigitYear && (m = c.parseTwoDigitYear);
      var k = h.prototype, d = k.parse;
      k.parse = function (b) {
        var a = b.date, v = b.utc, y = b.args;
        this.$u = v;
        var D = y[1];
        if (typeof D == "string") {
          var C = y[2] === !0, T = y[3] === !0, M = C || T, S = y[2];
          T && (S = y[2]), p = this.$locale(), !C && S && (p = x.Ls[S]), this.$d = function (L, I, N) {
            try {
              if (["x", "X"].indexOf(I) > -1)
                return new Date((I === "X" ? 1e3 : 1) * L);
              var U = B(I)(L), et = U.year, st = U.month, qt = U.day, Wt = U.hours, Xt = U.minutes,
                Qt = U.seconds, Zt = U.milliseconds, Ct = U.zone, pt = new Date(),
                ht = qt || (et || st ? 1 : pt.getDate()), mt = et || pt.getFullYear(), lt = 0;
              et && !st || (lt = st > 0 ? st - 1 : pt.getMonth());
              var vt = Wt || 0, yt = Xt || 0, bt = Qt || 0, wt = Zt || 0;
              return Ct ? new Date(Date.UTC(mt, lt, ht, vt, yt, bt, wt + 60 * Ct.offset * 1e3)) : N ? new Date(Date.UTC(mt, lt, ht, vt, yt, bt, wt)) : new Date(mt, lt, ht, vt, yt, bt, wt);
            } catch {
              return new Date("");
            }
          }(a, D, v), this.init(), S && S !== !0 && (this.$L = this.locale(S).$L), M && a != this.format(D) && (this.$d = new Date("")), p = {};
        } else if (D instanceof Array)
          for (var H = D.length, R = 1; R <= H; R += 1) {
            y[1] = D[R - 1];
            var P = x.apply(this, y);
            if (P.isValid()) {
              this.$d = P.$d, this.$L = P.$L, this.init();
              break;
            }
            R === H && (this.$d = new Date(""));
          }
        else
          d.call(this, b);
      };
    };
  });
})(At);
const ge = At.exports, Pt = Symbol("CHART_ROWS_KEY"), Ut = Symbol("CONFIG_KEY"),
  jt = Symbol("EMIT_BAR_EVENT_KEY"), Et = Symbol("BAR_CONTAINER_KEY");

function F() {
  const t = ot(Ut);
  if (!t)
    throw Error("Failed to inject config!");
  return t;
}

const Ft = "YYYY-MM-DD HH:mm";

function rt(t = F()) {
  const {chartStart: r, chartEnd: n, barStart: l, barEnd: i, dateFormat: u} = t,
    f = A(() => m(r.value)), p = A(() => m(n.value)), m = (e, s) => {
      let g;
      if (s !== void 0 && typeof e != "string" && !(e instanceof Date) && (g = s === "start" ? e[l.value] : e[i.value]), typeof e == "string")
        g = e;
    else if (e instanceof Date)
        return W(e);
      const w = u.value || Ft;
      return W(g, w, !0);
  };
  return {
    chartStartDayjs: f,
    chartEndDayjs: p,
    toDayjs: m,
    format: (e, s) => s === !1 ? e instanceof Date ? e : W(e).toDate() : (typeof e == "string" || e instanceof Date ? m(e) : e).format(s)
  };
}
function ft() {
  const {precision: t} = F(), {chartStartDayjs: r, chartEndDayjs: n} = rt(), l = A(() => {
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
  }), i = {
    hour: "HH",
    date: "DD.MMM ",
    day: "DD",
    week: "DD",
    month: "MMMM YYYY",
    year: "YYYY"
  };
  return {
    timeaxisUnits: A(() => {
      const f = [], p = [], m = l.value === "day" ? "date" : l.value, o = t.value;
      let e = r.value.startOf(o);
      const s = n.value.diff(r.value, "minutes", !0);
      let g = 0, w = e[m]();
      for (; e.isBefore(n.value) || e.isSame(n.value);) {
        if (e[m]() !== w) {
          let d = 0;
          if (f.length === 0)
            d = e.startOf(m).diff(r.value, "minutes", !0) / s * 100;
          else if (e.isSameOrAfter(n.value))
            d = n.value.diff(
              e.subtract(1, m).startOf(m),
              "minutes",
              !0
            ) / s * 100;
          else {
            const a = e.startOf(m), v = e.subtract(1, m).startOf(m);
            d = a.diff(v, "minutes", !0) / s * 100;
          }
          const b = e.subtract(1, m);
          f.push({
            label: b.format(i[m]),
            value: String(w),
            date: b.toDate(),
            width: String(d) + "%"
          }), g = 0, w = e[m]();
        }
        let h = 0;
        p.length === 0 ? h = e.endOf(o).diff(r.value, "minutes", !0) / s * 100 : e.add(1, o).isSameOrAfter(n.value) ? h = n.value.diff(e.startOf(o), "minutes", !0) / s * 100 : h = e.endOf(o).diff(e.startOf(o), "minutes", !0) / s * 100;
        let x;
        switch (o) {
          case "week":
            x = e.startOf("week");
            break;
          default:
            x = e[o === "day" ? "date" : o]();
        }
        p.push({
          label: e.format(i[o]),
          value: String(x),
          date: e.toDate(),
          width: String(h) + "%"
        });
        const k = e;
        e = e.add(1, o), (e.isBefore(n.value) || e.isSame(n.value)) && (g += e.diff(k, "minutes", !0));
      }
      const B = n.value.isSame(n.value.startOf(m)) ? n.value[m]() - 1 : n.value[m]();
      return f.some((h) => h.value === String(B)) || (g += n.value.diff(
        e.subtract(1, o),
        "minutes",
        !0
      ), f.push({
        label: n.value.format(i[m]),
        value: String(w),
        date: n.value.toDate(),
        width: `${g / s * 100}%`
      })), {upperUnits: f, lowerUnits: p};
    })
  };
}

function tt(t = F()) {
  const {dateFormat: r, chartSize: n} = t, {
    chartStartDayjs: l,
    chartEndDayjs: i,
    toDayjs: u,
    format: f
  } = rt(t), p = A(() => i.value.diff(l.value, "minutes"));
  return {
    mapTimeToPosition: (e) => {
      const s = n.width.value || 0, g = u(e).diff(l.value, "minutes", !0);
      return Math.ceil(g / p.value * s);
    },
    mapPositionToTime: (e) => {
      const s = n.width.value || 0, g = e / s * p.value, w = f(l.value.add(g, "minutes"), r.value);
      if (typeof w == "string")
        return w;
      throw Error;
    }
  };
}

const pe = {class: "g-timeaxis"}, he = ["onClick"], me = ["onClick"],
  ve = {class: "milestone-description milestone-description-mark"}, ye = /* @__PURE__ */ K({
  __name: "GGanttTimeaxis",
  props: {
    mileStoneList: null
  },
  emits: ["onClickTimeUnit", "onClickMilestone"],
  setup(t, { emit: r }) {
    const n = t, {precision: l, colors: i} = F(), {timeaxisUnits: u} = ft(), f = () => {
      var o;
      return ((o = n.mileStoneList) == null ? void 0 : o.length) > 0 ? {minHeight: "33%"} : {height: "50%"};
    }, {mapTimeToPosition: p} = tt(), m = (o) => p(W(o).startOf("day").format("DD.MM.YYYY HH:mm"));
    return (o, e) => {
      var s;
      return E(), O("div", pe, [
        Y("div", {
          class: "g-timeunits-container",
          style: f
        }, [
          (E(!0), O(V, null, Q(_(u).upperUnits, ({
                                                   label: g,
                                                   value: w,
                                                   date: B,
                                                   width: c
                                                 }, h) => (E(), O("div", {
            key: B.getTime(),
            class: "g-upper-timeunit",
            style: G({
              background: h % 2 === 0 ? _(i).primary : _(i).secondary,
              color: _(i).text,
              width: c
            })
          }, [
            j(o.$slots, "upper-timeunit", {
              label: g,
              value: w,
              date: B
            }, () => [
              ct(Z(g), 1)
            ])
          ], 4))), 128))
        ]),
        Y("div", {
          class: "g-timeunits-container",
          style: f
        }, [
          (E(!0), O(V, null, Q(_(u).lowerUnits, ({
                                                   label: g,
                                                   value: w,
                                                   date: B,
                                                   width: c
                                                 }, h) => (E(), O("div", {
            key: B.getTime(),
            class: "g-timeunit",
            style: G({
              background: h % 2 === 0 ? _(i).ternary : _(i).quartenary,
              color: _(i).text,
              flexDirection: _(l) === "hour" ? "column" : "row",
              alignItems: _(l) === "hour" ? "" : "center",
              width: c
            }),
            onClick: (x) => r("onClickTimeUnit", {date: B})
          }, [
            j(o.$slots, "timeunit", {
              label: g,
              value: w,
              date: B
            }, () => [
              ct(Z(g), 1)
            ]),
            _(l) === "hour" ? (E(), O("div", {
              key: 0,
              class: "g-timeaxis-hour-pin",
              style: G({background: _(i).text})
            }, null, 4)) : z("", !0)
          ], 12, he))), 128))
        ]),
        ((s = t.mileStoneList) == null ? void 0 : s.length) > 0 ? (E(), O("div", {
          key: 0,
          class: "g-timeunits-container",
          style: G([f, {position: "relative"}])
        }, [
          (E(!0), O(V, null, Q(t.mileStoneList, (g) => (E(), O("div", {
            style: G({left: m(g.date) + "px", top: 0, position: "absolute"}),
            onClick: (w) => r("onClickMilestone", {milestone: g})
          }, [
            Y("p", ve, "\u25BC" + Z(g.description), 1)
          ], 12, me))), 256))
        ])) : z("", !0)
      ]);
    };
  }
});
const be = {class: "g-grid-container"}, we = /* @__PURE__ */ K({
  __name: "GGanttGrid",
  props: {
    highlightedDates: null
  },
  setup(t) {
    const r = t, n = A(() => {
      var u;
      return (u = r.highlightedDates) == null ? void 0 : u.map((f) => f.getTime());
    }), {colors: l} = F(), {timeaxisUnits: i} = ft();
    return (u, f) => (E(), O("div", be, [
      (E(!0), O(V, null, Q(_(i).lowerUnits, ({label: p, value: m, width: o, date: e}) => {
        var s;
        return E(), O("div", {
          key: e.getTime(),
          class: "g-grid-line",
          style: G({
            width: o,
            background: (s = _(n)) != null && s.includes(e.getTime()) ? _(l).hoverHighlight : void 0
          })
        }, null, 4);
      }), 128))
    ]));
  }
});
const xe = /* @__PURE__ */ K({
  __name: "GGanttBarTooltip",
  props: {
    bar: null,
    modelValue: { type: Boolean }
  },
  setup(t) {
    const r = t, n = {
      hour: "HH:mm",
      day: "DD. MMM HH:mm",
      week: "DD. MMM HH:mm",
      month: "DD. MMMM YYYY"
    }, l = "cadetblue", {bar: i} = nt(r), {
      precision: u,
      font: f,
      barStart: p,
      barEnd: m,
      rowHeight: o
    } = F(), e = $("0px"), s = $("0px");
    at(
      () => r.bar,
      async () => {
        var v;
        await Bt();
        const x = ((v = i == null ? void 0 : i.value) == null ? void 0 : v.ganttBarConfig.id) || "";
        if (!x)
          return;
        const k = document.getElementById(x), {
          top: d,
          left: b
        } = (k == null ? void 0 : k.getBoundingClientRect()) || {
          top: 0,
          left: 0
        }, a = Math.max(b, 10);
        e.value = `${d + o.value - 10}px`, s.value = `${a}px`;
      },
      { deep: !0, immediate: !0 }
    );
    const g = A(() => {
      var x, k;
      return ((k = (x = i == null ? void 0 : i.value) == null ? void 0 : x.ganttBarConfig.style) == null ? void 0 : k.background) || l;
    }), {toDayjs: w} = rt(), B = A(() => {
      var x;
      return (x = i.value) == null ? void 0 : x[p.value];
    }), c = A(() => {
      var x;
      return (x = i.value) == null ? void 0 : x[m.value];
    }), h = A(() => {
      if (!(i != null && i.value))
        return "";
      const x = n[u.value], k = w(B.value).format(x), d = w(c.value).format(x);
      return `${k} \u2013 ${d}`;
    });
    return (x, k) => (E(), X(Jt, {to: "body"}, [
      kt(te, {
        name: "g-fade",
        mode: "out-in"
      }, {
        default: J(() => [
          t.modelValue ? (E(), O("div", {
            key: 0,
            class: "g-gantt-tooltip",
            style: G({
              top: e.value,
              left: s.value,
              fontFamily: _(f)
            })
          }, [
            Y("div", {
              class: "g-gantt-tooltip-color-dot",
              style: G({background: _(g)})
            }, null, 4),
            j(x.$slots, "default", {
              bar: _(i),
              barStart: _(B),
              barEnd: _(c)
            }, () => [
              ct(Z(_(h)), 1)
            ])
          ], 4)) : z("", !0)
        ]),
        _: 3
      })
    ]));
  }
});
const Ot = {
  default: {
    primary: "#eeeeee",
    secondary: "#E0E0E0",
    ternary: "#F5F5F5",
    quartenary: "#ededed",
    hoverHighlight: "rgb(243 238 226)",
    text: "#404040",
    background: "white"
  },
  creamy: {
    primary: "#ffe8d9",
    secondary: "#fcdcc5",
    ternary: "#fff6f0",
    quartenary: "#f7ece6",
    hoverHighlight: "rgb(243 238 226)",
    text: "#542d05",
    background: "white"
  },
  crimson: {
    primary: "#a82039",
    secondary: "#c41238",
    ternary: "#db4f56",
    quartenary: "#ce5f64",
    hoverHighlight: "rgb(243 238 226)",
    text: "white",
    background: "white"
  },
  dark: {
    primary: "#404040",
    secondary: "#303030",
    ternary: "#353535",
    quartenary: "#383838",
    hoverHighlight: "rgb(243 238 226)",
    text: "white",
    background: "#525252",
    toast: "#1f1f1f"
  },
  flare: {
    primary: "#e08a38",
    secondary: "#e67912",
    ternary: "#5e5145",
    quartenary: "#665648",
    hoverHighlight: "rgb(243 238 226)",
    text: "white",
    background: "white"
  },
  fuchsia: {
    primary: "#de1d5a",
    secondary: "#b50b41",
    ternary: "#ff7da6",
    quartenary: "#f2799f",
    hoverHighlight: "rgb(243 238 226)",
    text: "white",
    background: "white"
  },
  grove: {
    primary: "#3d9960",
    secondary: "#288542",
    ternary: "#72b585",
    quartenary: "#65a577",
    hoverHighlight: "rgb(243 238 226)",
    text: "white",
    background: "white"
  },
  "material-blue": {
    primary: "#0D47A1",
    secondary: "#1565C0",
    ternary: "#42a5f5",
    quartenary: "#409fed",
    hoverHighlight: "rgb(243 238 226)",
    text: "white",
    background: "white"
  },
  sky: {
    primary: "#b5e3ff",
    secondary: "#a1d6f7",
    ternary: "#d6f7ff",
    quartenary: "#d0edf4",
    hoverHighlight: "rgb(243 238 226)",
    text: "#022c47",
    background: "white"
  },
  slumber: {
    primary: "#2a2f42",
    secondary: "#2f3447",
    ternary: "#35394d",
    quartenary: "#2c3044",
    hoverHighlight: "rgb(243 238 226)",
    text: "#ffe0b3",
    background: "#38383b",
    toast: "#1f1f1f"
  },
  vue: {
    primary: "#258a5d",
    secondary: "#41B883",
    ternary: "#35495E",
    quartenary: "#2a3d51",
    hoverHighlight: "rgb(243 238 226)",
    text: "white",
    background: "white"
  }
};
var Tt;
const it = typeof window < "u";
it && ((Tt = window == null ? void 0 : window.navigator) == null ? void 0 : Tt.userAgent) && /iP(ad|hone|od)/.test(window.navigator.userAgent);

function _e(t) {
  return typeof t == "function" ? t() : _(t);
}

function Be(t) {
  return t;
}

function ke(t) {
  return ee() ? (ne(t), !0) : !1;
}

function De(t, r = !0) {
  oe() ? Dt(t) : r ? t() : Bt(t);
}

function zt(t) {
  var r;
  const n = _e(t);
  return (r = n == null ? void 0 : n.$el) != null ? r : n;
}

const Ee = it ? window : void 0;
it && window.document;
it && window.navigator;
it && window.location;

function Ce(t, r = !1) {
  const n = $(), l = () => n.value = Boolean(t());
  return l(), De(l, r), n;
}

const xt = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {},
  _t = "__vueuse_ssr_handlers__";
xt[_t] = xt[_t] || {};
xt[_t];
var Mt = Object.getOwnPropertySymbols, Oe = Object.prototype.hasOwnProperty,
  Te = Object.prototype.propertyIsEnumerable, Me = (t, r) => {
    var n = {};
    for (var l in t)
      Oe.call(t, l) && r.indexOf(l) < 0 && (n[l] = t[l]);
    if (t != null && Mt)
      for (var l of Mt(t))
        r.indexOf(l) < 0 && Te.call(t, l) && (n[l] = t[l]);
    return n;
};

function Le(t, r, n = {}) {
  const l = n, {window: i = Ee} = l, u = Me(l, ["window"]);
  let f;
  const p = Ce(() => i && "ResizeObserver" in i), m = () => {
    f && (f.disconnect(), f = void 0);
  }, o = at(() => zt(t), (s) => {
    m(), p.value && i && s && (f = new ResizeObserver(r), f.observe(s, u));
  }, { immediate: !0, flush: "post" }), e = () => {
    m(), o();
  };
  return ke(e), {
    isSupported: p,
    stop: e
  };
}

function Se(t, r = {width: 0, height: 0}, n = {}) {
  const l = $(r.width), i = $(r.height);
  return Le(t, ([u]) => {
    l.value = u.contentRect.width, i.value = u.contentRect.height;
  }, n), at(() => zt(t), (u) => {
    l.value = u ? r.width : 0, i.value = u ? r.height : 0;
  }), {
    width: l,
    height: i
  };
}

var Lt;
(function(t) {
  t.UP = "UP", t.RIGHT = "RIGHT", t.DOWN = "DOWN", t.LEFT = "LEFT", t.NONE = "NONE";
})(Lt || (Lt = {}));
var $e = Object.defineProperty, St = Object.getOwnPropertySymbols,
  Ge = Object.prototype.hasOwnProperty, Ye = Object.prototype.propertyIsEnumerable,
  $t = (t, r, n) => r in t ? $e(t, r, {
    enumerable: !0,
    configurable: !0,
    writable: !0,
    value: n
  }) : t[r] = n, Re = (t, r) => {
    for (var n in r || (r = {}))
      Ge.call(r, n) && $t(t, n, r[n]);
    if (St)
      for (var n of St(r))
        Ye.call(r, n) && $t(t, n, r[n]);
  return t;
};
const Ie = {
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
Re({
  linear: Be
}, Ie);
const He = {
  key: 0,
  class: "g-footer"
}, Ae = {class: "g-footer-container"}, Pe = /* @__PURE__ */ K({
  __name: "GGanttFooter",
  props: {
    labels: null
  },
  setup(t) {
    const {precision: r, colors: n} = F(), {timeaxisUnits: l} = ft();
    return (i, u) => t.labels ? (E(), O("div", He, [
      Y("div", Ae, [
        (E(!0), O(V, null, Q(_(l).lowerUnits, ({
                                                 label: f,
                                                 value: p,
                                                 date: m,
                                                 width: o
                                               }, e) => (E(), O("div", {
          key: f,
          class: "g-timeunit",
          style: G({
            background: e % 2 === 0 ? _(n).ternary : _(n).quartenary,
            color: _(n).text,
            flexDirection: _(r) === "hour" ? "column" : "row",
            alignItems: _(r) === "hour" ? "" : "center",
            width: o
          })
        }, [
          j(i.$slots, "timeunit", {
            label: f,
            value: p,
            date: m
          }, () => [
            ct(Z(t.labels[e]), 1)
          ], !0)
        ], 4))), 128))
      ])
    ])) : z("", !0);
  }
});
const Ue = (t, r) => {
  const n = t.__vccOpts || t;
  for (const [l, i] of r)
    n[l] = i;
  return n;
}, je = /* @__PURE__ */ Ue(Pe, [["__scopeId", "data-v-400629df"]]), Fe = /* @__PURE__ */ K({
  __name: "GGanttDrawTodayLine",
  emits: ["today-line-position-x"],
  setup(t, { emit: r }) {
    const {mapTimeToPosition: n} = tt(),
      l = A(() => (r("today-line-position-x", {xPosition: n(W().startOf("day").format("DD.MM.YYYY HH:mm"))}), n(W().startOf("day").format("DD.MM.YYYY HH:mm"))));
    return (i, u) => (E(), O("div", {
      class: "vertical-line",
      style: G({left: _(l) + "px", top: 0})
    }, null, 4));
  }
});
const ze = /* @__PURE__ */ K({
  __name: "GGanttDrawVerticalLine",
  props: {
    date: null,
    color: null
  },
  setup(t) {
    const r = t, {mapTimeToPosition: n} = tt(),
      l = A(() => n(r.date.startOf("day").format("DD.MM.YYYY HH:mm")));
    return (i, u) => (E(), O("div", {
      class: "vertical-line",
      style: G({left: _(l) + "px", top: 0, backgroundColor: t.color})
    }, null, 4));
  }
});
const Ne = {class: "g-gantt-rows-container"}, Ve = /* @__PURE__ */ K({
  __name: "GGanttChart",
  props: {
    chartStart: null,
    chartEnd: null,
    precision: { default: "day" },
    barStart: null,
    barEnd: null,
    dateFormat: {type: [String, Boolean], default: Ft},
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
  emits: ["click-bar", "mousedown-bar", "mouseup-bar", "dblclick-bar", "mouseenter-bar", "mouseleave-bar", "dragstart-bar", "drag-bar", "dragend-bar", "contextmenu-bar", "today-line-position-x", "onClickTimeUnit", "onClickMilestone", "bar-update"],
  setup(t, { emit: r }) {
    const n = t, {width: l, font: i, colorScheme: u} = nt(n), f = ae(), p = A(
      () => typeof u.value != "string" ? u.value : Ot[u.value] || Ot.default
    ), m = () => {
      var a;
      const d = (a = f.default) == null ? void 0 : a.call(f), b = [];
      return d && d.forEach((v) => {
        var y;
        if ((y = v.props) != null && y.bars) {
          const D = v.props.bars;
          b.push(D);
        } else
          Array.isArray(v.children) && v.children.forEach((D) => {
            var T;
            const C = D;
            if ((T = C == null ? void 0 : C.props) != null && T.bars) {
              const M = C.props.bars;
              b.push(M);
            }
          });
      }), b;
    }, o = $(!1), e = $(!1), s = $(void 0);
    let g;
    const w = (d) => {
      g && clearTimeout(g), g = setTimeout(() => {
        o.value = !0;
      }, 800), s.value = d;
    }, B = () => {
      clearTimeout(g), o.value = !1;
    }, c = (d, b, a, v, y) => {
      if (typeof d == "string") {
        switch (d) {
          case "bar-update":
            y !== void 0 && r("bar-update", {bar: b, newValue: y});
            break;
        }
        return;
      }
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
          B(), r("mouseleave-bar", {bar: b, e: d});
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
    }, h = $(null), x = $(null), k = Se(h);
    return ut(Pt, m), ut(Ut, {
      ...nt(n),
      colors: p,
      chartSize: k
    }), ut(jt, c), (d, b) => (E(), O(V, null, [
      Y("div", {
        style: G([{
          display: "flex",
          "flex-flow": "column"
        }, t.sticky ? "position: sticky; left:0;z-index:100; background: white;" : ""]),
        class: "g-gantt-wrapper",
        ref_key: "gGanttWrapperRef",
        ref: x
      }, [
        j(d.$slots, "side-menu")
      ], 4),
      Y("div", {
        ref_key: "ganttChart",
        ref: h,
        class: "g-gantt-chart",
        style: G({width: _(l), background: _(p).background, fontFamily: _(i)})
      }, [
        t.hideTimeaxis ? z("", !0) : (E(), X(ye, {
          key: 0,
          "mile-stone-list": t.mileStoneList,
          onOnClickTimeUnit: b[0] || (b[0] = (a) => d.$emit("onClickTimeUnit", a)),
          onOnClickMilestone: b[1] || (b[1] = (a) => d.$emit("onClickMilestone", a))
        }, {
          "upper-timeunit": J(({label: a, value: v, date: y}) => [
            j(d.$slots, "upper-timeunit", {
              label: a,
              value: v,
              date: y
            })
          ]),
          timeunit: J(({label: a, value: v, date: y}) => [
            j(d.$slots, "timeunit", {
              label: a,
              value: v,
              date: y
            })
          ]),
          _: 3
        }, 8, ["mile-stone-list"])),
        Y("div", Ne, [
          t.grid ? (E(), X(we, {
            key: 0,
            "highlighted-dates": t.highlightedDates
          }, null, 8, ["highlighted-dates"])) : z("", !0),
          t.displayTodayLine ? (E(), X(Fe, {
            key: 1,
            onTodayLinePositionX: b[2] || (b[2] = (a) => r("today-line-position-x", a))
          })) : z("", !0),
          (E(!0), O(V, null, Q(t.verticalLines, (a) => (E(), X(ze, {
            date: a.date,
            color: a.color
          }, null, 8, ["date", "color"]))), 256)),
          j(d.$slots, "default")
        ]),
        t.hideTimeaxis ? z("", !0) : (E(), X(je, {
          key: 1,
          labels: t.footerLabels
        }, null, 8, ["labels"])),
        kt(xe, {
          "model-value": o.value || e.value,
          bar: s.value
        }, {
          default: J(() => [
            j(d.$slots, "bar-tooltip", {bar: s.value})
          ]),
          _: 3
        }, 8, ["model-value", "bar"])
      ], 4),
      Y("div", null, [
        j(d.$slots, "footer")
      ])
    ], 64));
  }
});

function gt() {
  const t = ot(jt);
  if (!t)
    throw Error("Failed to inject emitBarEvent!");
  return t;
}

function Gt(t, r = () => null, n = () => null, l = F()) {
  const {barStart: i, barEnd: u, pushOnOverlap: f} = l, p = $(!1);
  let m = 0, o;
  const {mapPositionToTime: e} = tt(l), {toDayjs: s} = rt(l), g = (d) => {
    const b = document.getElementById(t.ganttBarConfig.id);
    if (!b)
      return;
    switch (m = d.clientX - (b.getBoundingClientRect().left || 0), d.target.className) {
      case "g-gantt-bar-handle-left":
        document.body.style.cursor = "ew-resize", o = c;
        break;
      case "g-gantt-bar-handle-right":
        document.body.style.cursor = "ew-resize", o = h;
        break;
      default:
        o = B;
    }
    p.value = !0, window.addEventListener("mousemove", o), window.addEventListener("mouseup", k);
  }, w = () => {
    var a;
    const d = document.getElementById(t.ganttBarConfig.id), b = (a = d == null ? void 0 : d.closest(".g-gantt-row-bars-container")) == null ? void 0 : a.getBoundingClientRect();
    return { barElement: d, barContainer: b };
  }, B = (d) => {
    const { barElement: b, barContainer: a } = w();
    if (!b || !a)
      return;
    const v = b.getBoundingClientRect().width, y = d.clientX - a.left - m, D = y + v;
    if (!x(y, D)) {
      if (t[i.value].substring(0, 10) != e(y).substring(0, 10)) {
        const C = s(t[i.value]), M = s(t[u.value]).diff(C, "minute"),
          S = e(y).substring(0, 10) + " 00:00";
        t[i.value] = S, t[u.value] = s(S).add(M, "minute").format("DD.MM.YYYY HH:mm");
      }
      r(d, t);
    }
  }, c = (d) => {
    const { barElement: b, barContainer: a } = w();
    if (!b || !a)
      return;
    const v = d.clientX - a.left, y = e(v);
    if (!s(y).isSameOrAfter(s(t, "end"))) {
      if (t[i.value].substring(0, 10) != e(v).substring(0, 10)) {
        const D = e(v).substring(0, 10) + " 00:00";
        t[i.value] = D;
      }
      r(d, t);
    }
  }, h = (d) => {
    const { barElement: b, barContainer: a } = w();
    if (!b || !a)
      return;
    const v = d.clientX - a.left, y = e(v);
    s(y).isSameOrBefore(s(t, "start")) || (t[u.value] = e(v).substring(0, 10) + " 23:59", r(d, t));
  }, x = (d, b) => {
    if (!f.value)
      return !1;
    const a = t.ganttBarConfig.dragLimitLeft, v = t.ganttBarConfig.dragLimitRight;
    return d && a != null && d < a || b && v != null && b > v;
  }, k = (d) => {
    p.value = !1, document.body.style.cursor = "", window.removeEventListener("mousemove", o), window.removeEventListener("mouseup", k), n(d, t);
  };
  return {
    isDragging: p,
    initDrag: g
  };
}
function Nt() {
  const t = ot(Pt);
  if (!t)
    throw Error("Failed to inject getChartRows!");
  return t;
}

function Vt() {
  const t = F(), r = Nt(), n = gt(), {
    pushOnOverlap: l,
    barStart: i,
    barEnd: u,
    noOverlap: f,
    dateFormat: p
  } = t, m = /* @__PURE__ */ new Map(), {toDayjs: o, format: e} = rt(), s = (a, v) => {
    const {initDrag: y} = Gt(a, w, k, t);
    n({...v, type: "dragstart"}, a), y(v), d(a);
  }, g = (a, v) => {
    const y = a.ganttBarConfig.bundle;
    y != null && (r().forEach((D) => {
      D.forEach((C) => {
        if (C.ganttBarConfig.bundle === y) {
          const T = C === a ? k : () => null, {initDrag: M} = Gt(C, w, T, t);
          M(v), d(C);
        }
      });
    }), n({...v, type: "dragstart"}, a));
  }, w = (a, v) => {
    n({...a, type: "drag"}, v), B(v);
  }, B = (a) => {
    if (!(l != null && l.value))
      return;
    let v = a, {overlapBar: y, overlapType: D} = c(v);
    for (; y;) {
      d(y);
      const C = o(v[i.value]), T = o(v[u.value]), M = o(y[i.value]), S = o(y[u.value]);
      let H;
      switch (D) {
        case "left":
          H = S.diff(C, "minutes", !0), y[u.value] = e(v[i.value], p.value), y[i.value] = e(
            M.subtract(H, "minutes"),
            p.value
          );
          break;
        case "right":
          H = T.diff(M, "minutes", !0), y[i.value] = e(T, p.value), y[u.value] = e(
            S.add(H, "minutes"),
            p.value
          );
          break;
        default:
          console.warn(
            "Vue-Ganttastic: One bar is inside of the other one! This should never occur while push-on-overlap is active!"
          );
          return;
      }
      y && (D === "left" || D === "right") && h(y, H, D), v = y, {
        overlapBar: y,
        overlapType: D
      } = c(y);
    }
  }, c = (a) => {
    let v, y, D;
    const C = r().find((R) => R.includes(a)) || [], T = o(a[i.value]), M = o(a[u.value]);
    return {
      overlapBar: C.find((R) => {
        if (R === a)
        return !1;
        const P = o(R[i.value]), L = o(R[u.value]);
        return v = T.isBetween(P, L), y = M.isBetween(P, L), D = P.isBetween(T, M) || L.isBetween(T, M), v || y || D;
      }), overlapType: v ? "left" : y ? "right" : D ? "between" : null
    };
  }, h = (a, v, y) => {
    console.log("######################################"), d(a), a.ganttBarConfig.bundle && r().forEach((D) => {
      D.forEach((C) => {
        C.ganttBarConfig.bundle === a.ganttBarConfig.bundle && C !== a && (d(C), x(C, v, y));
      });
    });
  }, x = (a, v, y) => {
    switch (y) {
      case "left":
        a[i.value] = e(
          o(a, "start").subtract(v, "minutes"),
          p.value
        ), a[u.value] = e(
          o(a, "end").subtract(v, "minutes"),
          p.value
        );
        break;
      case "right":
        a[i.value] = e(
          o(a, "start").add(v, "minutes"),
          p.value
        ), a[u.value] = e(o(a, "end").add(v, "minutes"), p.value);
    }
    B(a);
  }, k = (a, v) => {
    b();
    const y = {
      ...a,
      type: "dragend"
    };
    n(y, v, void 0, new Map(m)), m.clear();
  }, d = (a) => {
    if (!m.has(a)) {
      const v = a[i.value], y = a[u.value];
      m.set(a, {oldStart: v, oldEnd: y});
    }
  }, b = () => {
    if (l.value || !f.value)
      return;
    let a = !1;
    m.forEach((v, y) => {
      const {overlapBar: D} = c(y);
      D != null && (a = !0);
    }), a && m.forEach(({oldStart: v, oldEnd: y}, D) => {
      D[i.value] = v, D[u.value] = y;
    });
  };
  return {
    initDragOfBar: s,
    initDragOfBundle: g
  };
}

function Kt() {
  const {pushOnOverlap: t} = F(), r = Nt(), n = (f) => {
    const p = [];
    return f != null && r().forEach((m) => {
      m.forEach((o) => {
        o.ganttBarConfig.bundle === f && p.push(o);
      });
    }), p;
  }, l = (f) => {
    if (!t.value || f.ganttBarConfig.pushOnOverlap === !1)
      return;
    for (const m of ["left", "right"]) {
      const o = m, {gapDistanceSoFar: e, bundleBarsAndGapDist: s} = i(
        f,
        0,
        o
      );
      let g = e;
      const w = s;
      if (!w)
        continue;
      for (let c = 0; c < w.length; c++) {
        const h = w[c].bar, x = w[c].gapDistance;
        n(h.ganttBarConfig.bundle).filter(
          (d) => d !== h
        ).forEach((d) => {
          const b = i(d, x, o), a = b.gapDistanceSoFar, v = b.bundleBarsAndGapDist;
          a != null && (!g || a < g) && (g = a), v.forEach((y) => {
            w.find((D) => D.bar === y.bar) || w.push(y);
          });
        });
      }
      const B = document.getElementById(f.ganttBarConfig.id);
      g != null && o === "left" ? f.ganttBarConfig.dragLimitLeft = B.offsetLeft - g : g != null && o === "right" && (f.ganttBarConfig.dragLimitRight = B.offsetLeft + B.offsetWidth + g);
    }
    n(f.ganttBarConfig.bundle).forEach((m) => {
      m.ganttBarConfig.dragLimitLeft = f.ganttBarConfig.dragLimitLeft, m.ganttBarConfig.dragLimitRight = f.ganttBarConfig.dragLimitRight;
    });
  }, i = (f, p = 0, m) => {
    const o = f.ganttBarConfig.bundle ? [{bar: f, gapDistance: p}] : [];
    let e = f, s = u(e, m);
    if (m === "left")
      for (; s;) {
        const g = document.getElementById(e.ganttBarConfig.id),
          w = document.getElementById(s.ganttBarConfig.id), B = w.offsetLeft + w.offsetWidth;
        if (p += g.offsetLeft - B, s.ganttBarConfig.immobile)
          return {gapDistanceSoFar: p, bundleBarsAndGapDist: o};
        s.ganttBarConfig.bundle && o.push({
          bar: s,
          gapDistance: p
        }), e = s, s = u(s, "left");
      }
    if (m === "right")
      for (; s;) {
        const g = document.getElementById(e.ganttBarConfig.id),
          w = document.getElementById(s.ganttBarConfig.id), B = g.offsetLeft + g.offsetWidth;
        if (p += w.offsetLeft - B, s.ganttBarConfig.immobile)
          return {gapDistanceSoFar: p, bundleBarsAndGapDist: o};
        s.ganttBarConfig.bundle && o.push({
          bar: s,
          gapDistance: p
        }), e = s, s = u(s, "right");
      }
    return {gapDistanceSoFar: null, bundleBarsAndGapDist: o};
  }, u = (f, p) => {
    const m = document.getElementById(f.ganttBarConfig.id),
      o = r().find((s) => s.includes(f)) || [];
    let e = [];
    return p === "left" ? e = o.filter((s) => {
      const g = document.getElementById(s.ganttBarConfig.id);
      return g && g.offsetLeft < m.offsetLeft && s.ganttBarConfig.pushOnOverlap !== !1;
    }) : e = o.filter((s) => {
      const g = document.getElementById(s.ganttBarConfig.id);
      return g && g.offsetLeft > m.offsetLeft && s.ganttBarConfig.pushOnOverlap !== !1;
    }), e.length > 0 ? e.reduce((s, g) => {
      const w = document.getElementById(s.ganttBarConfig.id),
        B = document.getElementById(g.ganttBarConfig.id), c = Math.abs(w.offsetLeft - m.offsetLeft),
        h = Math.abs(B.offsetLeft - m.offsetLeft);
      return c < h ? s : g;
    }, e[0]) : null;
  };
  return {
    setDragLimitsOfGanttBar: l
  };
}

const Ke = ["id"], qe = {class: "g-gantt-bar-label"}, We = {style: {"z-index": "100"}},
  Xe = /* @__PURE__ */ Y("div", {class: "g-gantt-bar-handle-left"}, null, -1),
  Qe = /* @__PURE__ */ Y("div", {class: "g-gantt-bar-handle-right"}, null, -1),
  Ze = /* @__PURE__ */ K({
  __name: "GGanttBar",
  props: {
    bar: null
  },
  setup(t) {
    const r = t, n = gt(), l = F(), {rowHeight: i} = l, {bar: u} = nt(r), {
        mapTimeToPosition: f,
        mapPositionToTime: p
      } = tt(), {initDragOfBar: m, initDragOfBundle: o} = Vt(), {setDragLimitsOfGanttBar: e} = Kt(),
      s = $(!1), g = A(() => u.value.ganttBarConfig);

    function w(C) {
      g.value.bundle != null ? o(u.value, C) : m(u.value, C), s.value = !0;
    }

    const B = () => {
        e(u.value), !g.value.immobile && (window.addEventListener("mousemove", w, {
        once: !0
      }), window.addEventListener(
        "mouseup",
        () => {
          window.removeEventListener("mousemove", w), s.value = !1;
        },
        { once: !0 }
      ));
      }, c = ot(Et), h = (C) => {
        var S;
        C.preventDefault(), C.type === "mousedown" && B();
        const T = (S = c == null ? void 0 : c.value) == null ? void 0 : S.getBoundingClientRect();
      if (!T)
        return;
        const M = p(C.clientX - T.left);
        n(C, u.value, M);
      }, {barStart: x, barEnd: k, width: d, chartStart: b, chartEnd: a, chartSize: v} = l, y = $(0),
      D = $(0);
    return Dt(() => {
      at(
        [u, d, b, a, v.width],
        () => {
          y.value = f(u.value[x.value]), D.value = f(u.value[k.value]);
        },
        { deep: !0, immediate: !0 }
      );
    }), (C, T) => (E(), O("div", {
      id: _(g).id,
      class: "g-gantt-bar",
      style: G({
        ..._(g).style,
        position: "absolute",
        top: `${_(i) * 0.1}px`,
        left: `${y.value}px`,
        width: `${D.value - y.value}px`,
        height: `${_(i) * 0.8}px`,
        zIndex: s.value ? 3 : 2
      }),
      onMousedown: h,
      onClick: h,
      onDblclick: h,
      onMouseenter: h,
      onMouseleave: h,
      onContextmenu: h
    }, [
      Y("div", qe, [
        j(C.$slots, "default", {bar: _(u)}, () => [
          Y("div", We, Z(_(g).label || ""), 1),
          _(g).progress ? (E(), O("div", {
            key: 0,
            style: G([{position: "absolute", height: "100%", left: "0"}, {
              width: _(g).progress + "%",
              backgroundColor: _(g).progressColor
            }])
          }, null, 4)) : z("", !0)
        ])
      ]),
      _(g).hasHandles ? (E(), O(V, {key: 0}, [
        Xe,
        Qe
      ], 64)) : z("", !0)
    ], 44, Ke));
  }
  });
const Je = ["id"], tn = {class: "g-gantt-bar-label"}, en = {
    key: 0,
    style: {"z-index": "100"}
  }, nn = ["onKeyup"], on = /* @__PURE__ */ Y("div", {class: "g-gantt-bar-handle-left"}, null, -1),
  an = /* @__PURE__ */ Y("div", {class: "g-gantt-bar-handle-right"}, null, -1),
  rn = /* @__PURE__ */ K({
    __name: "GGanttEditableBar",
    props: {
      bar: null
    },
    emits: ["update"],
    setup(t, {emit: r}) {
      const n = t, l = gt(), i = F(), {rowHeight: u} = i, {bar: f} = nt(n), {
          mapTimeToPosition: p,
          mapPositionToTime: m
        } = tt(), {initDragOfBar: o, initDragOfBundle: e} = Vt(), {setDragLimitsOfGanttBar: s} = Kt(),
        g = $(!1), w = $(!1), B = $(""), c = $(null), h = A(() => f.value.ganttBarConfig);

      function x(L) {
        h.value.bundle != null ? e(f.value, L) : o(f.value, L), g.value = !0;
      }

      const k = () => {
          s(f.value), !h.value.immobile && (window.addEventListener("mousemove", x, {
            once: !0
          }), window.addEventListener(
            "mouseup",
            () => {
              window.removeEventListener("mousemove", x), g.value = !1;
            },
            {once: !0}
          ));
        }, d = ot(Et), b = (L) => {
          var U;
          L.preventDefault(), L.type === "mousedown" && k();
          const I = (U = d == null ? void 0 : d.value) == null ? void 0 : U.getBoundingClientRect();
          if (!I)
            return;
          const N = m(L.clientX - I.left);
          l(L, f.value, N);
        }, a = (L) => {
          w.value || (L.stopPropagation(), w.value = !0, B.value = h.value.label || "", Bt(() => {
            c.value && c.value.focus();
          }));
        }, v = (L) => {
          const I = ["Backspace", "Delete", "ArrowLeft", "ArrowRight", "Tab"];
          !/^[0-9]$/.test(L.key) && !I.includes(L.key) && L.preventDefault();
        }, y = () => {
          if (!w.value)
            return;
          w.value = !1;
          const L = parseInt(B.value), I = isNaN(L) ? 0 : Math.max(0, L);
          h.value.label !== I.toString() && (h.value.label = I.toString(), r("update", {
            bar: f.value,
            newValue: I
          }));
        }, {barStart: D, barEnd: C, width: T, chartStart: M, chartEnd: S, chartSize: H} = i, R = $(0),
        P = $(0);
      return Dt(() => {
        at(
          [f, T, M, S, H.width],
          () => {
            R.value = p(f.value[D.value]), P.value = p(f.value[C.value]);
          },
          {deep: !0, immediate: !0}
        );
      }), (L, I) => (E(), O("div", {
        id: _(h).id,
        class: "g-gantt-bar",
        style: G({
          ..._(h).style,
          position: "absolute",
          top: `${_(u) * 0.1}px`,
          left: `${R.value}px`,
          width: `${P.value - R.value}px`,
          height: `${_(u) * 0.8}px`,
          zIndex: g.value ? 3 : 2
        }),
        onMousedown: b,
        onClick: a,
        onDblclick: b,
        onMouseenter: b,
        onMouseleave: b,
        onContextmenu: b
      }, [
        Y("div", tn, [
          j(L.$slots, "default", {bar: _(f)}, () => [
            w.value ? re((E(), O("input", {
              key: 1,
              ref_key: "inputRef",
              ref: c,
              "onUpdate:modelValue": I[0] || (I[0] = (N) => B.value = N),
              type: "text",
              class: "g-gantt-bar-edit-input",
              onKeyup: ie(y, ["enter"]),
              onBlur: y,
              onKeydown: v
            }, null, 40, nn)), [
              [se, B.value]
            ]) : (E(), O("div", en, Z(_(h).label || ""), 1)),
            _(h).progress ? (E(), O("div", {
              key: 2,
              style: G([{position: "absolute", height: "100%", left: "0"}, {
                width: _(h).progress + "%",
                backgroundColor: _(h).progressColor
            }])
            }, null, 4)) : z("", !0)
        ])
      ]),
        _(h).hasHandles ? (E(), O(V, {key: 0}, [
          on,
          an
        ], 64)) : z("", !0)
      ], 44, Je));
  }
});
const sn = /* @__PURE__ */ K({
  __name: "GGanttRow",
  props: {
    bars: null,
    highlightOnHover: { type: Boolean }
  },
  emits: ["drop", "bar-update"],
  setup(t, { emit: r }) {
    const n = t, {rowHeight: l, colors: i} = F(), {highlightOnHover: u} = nt(n), f = $(!1),
      p = gt(), m = A(() => ({
        height: `${l.value}px`,
        background: (u == null ? void 0 : u.value) && f.value ? i.value.hoverHighlight : null
      })), {mapPositionToTime: o} = tt(), e = $(null);
    ut(Et, e);
    const s = (w) => {
      var x;
      const B = (x = e.value) == null ? void 0 : x.getBoundingClientRect();
      if (!B) {
        console.error("Vue-Ganttastic: failed to find bar container element for row.");
        return;
      }
      const c = w.clientX - B.left, h = o(c);
      r("drop", {e: w, datetime: h});
    }, g = (w) => {
      r("bar-update", w), p("bar-update", w.bar, void 0, void 0, w.newValue);
    };
    return (w, B) => (E(), O("div", {
      class: "g-gantt-row",
      style: G(_(m)),
      onDragover: B[0] || (B[0] = le((c) => f.value = !0, ["prevent"])),
      onDragleave: B[1] || (B[1] = (c) => f.value = !1),
      onDrop: B[2] || (B[2] = (c) => s(c)),
      onMouseover: B[3] || (B[3] = (c) => f.value = !0),
      onMouseleave: B[4] || (B[4] = (c) => f.value = !1)
    }, [
      z("", !0),
      Y("div", Yt({
        ref_key: "barContainer",
        ref: e,
        class: "g-gantt-row-bars-container"
      }, w.$attrs), [
        kt(ue, {
          name: "bar-transition",
          tag: "div"
        }, {
          default: J(() => [
            (E(!0), O(V, null, Q(t.bars, (c) => (E(), O(V, {
              key: c.ganttBarConfig.id
            }, [
              c.editable ? (E(), X(rn, {
                key: 0,
                bar: c,
                onUpdate: g
              }, {
                default: J(() => [
                  j(w.$slots, "bar-label", {bar: c})
                ]),
                _: 2
              }, 1032, ["bar"])) : (E(), X(Ze, {
                key: 1,
                bar: c
              }, {
                default: J(() => [
                  j(w.$slots, "bar-label", {bar: c})
                ]),
                _: 2
              }, 1032, ["bar"]))
            ], 64))), 128))
          ]),
          _: 3
        })
      ], 16)
    ], 36));
  }
});
const ln = /* @__PURE__ */ K({
  __name: "GGanttLabelRow",
  props: {
    labels: null,
    styles: null
  },
  setup(t) {
    const {rowHeight: r, colors: n} = F(), {timeaxisUnits: l} = ft();
    return (i, u) => (E(), O("div", {
      class: "g-gantt-row",
      style: G({height: _(r) + "px"})
    }, [
      Y("div", Yt({
        ref: "barContainer",
        class: "g-gantt-row-bars-container"
      }, i.$attrs), [
        (E(!0), O(V, null, Q(_(l).lowerUnits, ({label: f, width: p, date: m}, o) => (E(), O("div", {
          key: m.getTime(),
          class: "g-timeunit",
          style: G({
            color: _(n).text,
            textAlign: "center",
            width: p
          })
        }, [
          Y("div", {
            class: "label",
            style: G(t.styles != null ? t.styles[o] : void 0)
          }, Z(t.labels[o]), 5)
        ], 4))), 128))
      ], 16)
    ], 4));
  }
});

function un() {
  W.extend(ce), W.extend(de), W.extend(fe), W.extend(ge);
}

const gn = {
  install(t, r) {
    un(), t.component("GGanttChart", Ve), t.component("GGanttRow", sn), t.component("GGanttLabelRow", ln);
  }
};

function q(t, r = "top") {
  if (!t || typeof document > "u")
    return;
  const n = document.head, l = document.createElement("style");
  r === "top" && n.firstChild ? n.insertBefore(l, n.firstChild) : n.appendChild(l), l.appendChild(document.createTextNode(t));
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
.label {
  display: flex;
  width: 100%;
  height: 100%;
  justify-content: center;
  align-items: center;
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
q(`
.vertical-line {
  width: 2px;
  height: 100%;
  background-color: red;
  position: absolute;
  z-index: 1;
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
.vertical-line {
  width: 2px;
  height: 100%;
  background-color: red;
  position: absolute;
  z-index: 1;
}
`, "top");
q(`
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
q(`
.g-gantt-bar {
  display: flex;
  justify-content: center;
  align-items: center;
  background: cadetblue;
  overflow: hidden;
  cursor: pointer;
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
.g-gantt-bar-edit-input {
  width: 80%;
  height: 70%;
  text-align: center;
  background-color: white;
  border: 1px solid #ccc;
  border-radius: 3px;
  font-size: 0.9em;
  padding: 0 5px;
  box-sizing: border-box;
  z-index: 100;
}
.g-gantt-bar-edit-input:focus {
  outline: none;
  border-color: #4a90e2;
  box-shadow: 0 0 3px rgba(74, 144, 226, 0.5);
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
  Ve as GGanttChart,
  ln as GGanttLabelRow,
  sn as GGanttRow,
  gn as default,
  un as extendDayjs,
  gn as ganttastic
};
