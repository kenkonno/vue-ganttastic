import j from "dayjs";
import { inject as lt, computed as I, defineComponent as N, openBlock as C, createElementBlock as O, createElementVNode as G, Fragment as z, renderList as X, unref as _, normalizeStyle as L, renderSlot as H, createTextVNode as et, toDisplayString as K, createCommentVNode as A, toRefs as nt, ref as Y, watch as ut, nextTick as St, createBlock as J, Teleport as Qt, createVNode as Bt, Transition as Zt, withCtx as tt, getCurrentScope as Jt, onScopeDispose as te, getCurrentInstance as ee, onMounted as Lt, useSlots as ne, provide as st, withModifiers as oe, mergeProps as Gt, TransitionGroup as ae } from "vue";
var ct = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {}, $t = { exports: {} };
(function(t, i) {
  (function(n, s) {
    t.exports = s();
  })(ct, function() {
    return function(n, s) {
      s.prototype.isSameOrBefore = function(r, u) {
        return this.isSame(r, u) || this.isBefore(r, u);
      };
    };
  });
})($t);
const re = $t.exports;
var Yt = { exports: {} };
(function(t, i) {
  (function(n, s) {
    t.exports = s();
  })(ct, function() {
    return function(n, s) {
      s.prototype.isSameOrAfter = function(r, u) {
        return this.isSame(r, u) || this.isAfter(r, u);
      };
    };
  });
})(Yt);
const ie = Yt.exports;
var Rt = { exports: {} };
(function(t, i) {
  (function(n, s) {
    t.exports = s();
  })(ct, function() {
    return function(n, s, r) {
      s.prototype.isBetween = function(u, m, h, g) {
        var a = r(u), e = r(m), o = (g = g || "()")[0] === "(", c = g[1] === ")";
        return (o ? this.isAfter(a, h) : !this.isBefore(a, h)) && (c ? this.isBefore(e, h) : !this.isAfter(e, h)) || (o ? this.isBefore(a, h) : !this.isAfter(a, h)) && (c ? this.isAfter(e, h) : !this.isBefore(e, h));
      };
    };
  });
})(Rt);
const se = Rt.exports;
var It = { exports: {} };
(function(t, i) {
  (function(n, s) {
    t.exports = s();
  })(ct, function() {
    var n = { LTS: "h:mm:ss A", LT: "h:mm A", L: "MM/DD/YYYY", LL: "MMMM D, YYYY", LLL: "MMMM D, YYYY h:mm A", LLLL: "dddd, MMMM D, YYYY h:mm A" }, s = /(\[[^[]*\])|([-_:/.,()\s]+)|(A|a|YYYY|YY?|MM?M?M?|Do|DD?|hh?|HH?|mm?|ss?|S{1,3}|z|ZZ?)/g, r = /\d\d/, u = /\d\d?/, m = /\d*[^-_:/,()\s\d]+/, h = {}, g = function(d) {
      return (d = +d) + (d > 68 ? 1900 : 2e3);
    }, a = function(d) {
      return function(b) {
        this[d] = +b;
      };
    }, e = [/[+-]\d\d:?(\d\d)?|Z/, function(d) {
      (this.zone || (this.zone = {})).offset = function(b) {
        if (!b || b === "Z")
          return 0;
        var x = b.match(/([+-]|\d\d)/g), p = 60 * x[1] + (+x[2] || 0);
        return p === 0 ? 0 : x[0] === "+" ? -p : p;
      }(d);
    }], o = function(d) {
      var b = h[d];
      return b && (b.indexOf ? b : b.s.concat(b.f));
    }, c = function(d, b) {
      var x, p = h.meridiem;
      if (p) {
        for (var f = 1; f <= 24; f += 1)
          if (d.indexOf(p(f, 0, b)) > -1) {
            x = f > 12;
            break;
          }
      } else
        x = d === (b ? "pm" : "PM");
      return x;
    }, w = { A: [m, function(d) {
      this.afternoon = c(d, !1);
    }], a: [m, function(d) {
      this.afternoon = c(d, !0);
    }], S: [/\d/, function(d) {
      this.milliseconds = 100 * +d;
    }], SS: [r, function(d) {
      this.milliseconds = 10 * +d;
    }], SSS: [/\d{3}/, function(d) {
      this.milliseconds = +d;
    }], s: [u, a("seconds")], ss: [u, a("seconds")], m: [u, a("minutes")], mm: [u, a("minutes")], H: [u, a("hours")], h: [u, a("hours")], HH: [u, a("hours")], hh: [u, a("hours")], D: [u, a("day")], DD: [r, a("day")], Do: [m, function(d) {
      var b = h.ordinal, x = d.match(/\d+/);
      if (this.day = x[0], b)
        for (var p = 1; p <= 31; p += 1)
          b(p).replace(/\[|\]/g, "") === d && (this.day = p);
    }], M: [u, a("month")], MM: [r, a("month")], MMM: [m, function(d) {
      var b = o("months"), x = (o("monthsShort") || b.map(function(p) {
        return p.slice(0, 3);
      })).indexOf(d) + 1;
      if (x < 1)
        throw new Error();
      this.month = x % 12 || x;
    }], MMMM: [m, function(d) {
      var b = o("months").indexOf(d) + 1;
      if (b < 1)
        throw new Error();
      this.month = b % 12 || b;
    }], Y: [/[+-]?\d+/, a("year")], YY: [r, function(d) {
      this.year = g(d);
    }], YYYY: [/\d{4}/, a("year")], Z: e, ZZ: e };
    function E(d) {
      var b, x;
      b = d, x = h && h.formats;
      for (var p = (d = b.replace(/(\[[^\]]+])|(LTS?|l{1,4}|L{1,4})/g, function(k, T, M) {
        var S = M && M.toUpperCase();
        return T || x[M] || n[M] || x[S].replace(/(\[[^\]]+])|(MMMM|MM|DD|dddd)/g, function($, R, P) {
          return R || P.slice(1);
        });
      })).match(s), f = p.length, B = 0; B < f; B += 1) {
        var l = p[B], v = w[l], y = v && v[0], D = v && v[1];
        p[B] = D ? { regex: y, parser: D } : l.replace(/^\[|\]$/g, "");
      }
      return function(k) {
        for (var T = {}, M = 0, S = 0; M < f; M += 1) {
          var $ = p[M];
          if (typeof $ == "string")
            S += $.length;
          else {
            var R = $.regex, P = $.parser, q = k.slice(S), Q = R.exec(q)[0];
            P.call(T, Q), k = k.replace(Q, "");
          }
        }
        return function(W) {
          var F = W.afternoon;
          if (F !== void 0) {
            var Z = W.hours;
            F ? Z < 12 && (W.hours += 12) : Z === 12 && (W.hours = 0), delete W.afternoon;
          }
        }(T), T;
      };
    }
    return function(d, b, x) {
      x.p.customParseFormat = !0, d && d.parseTwoDigitYear && (g = d.parseTwoDigitYear);
      var p = b.prototype, f = p.parse;
      p.parse = function(B) {
        var l = B.date, v = B.utc, y = B.args;
        this.$u = v;
        var D = y[1];
        if (typeof D == "string") {
          var k = y[2] === !0, T = y[3] === !0, M = k || T, S = y[2];
          T && (S = y[2]), h = this.$locale(), !k && S && (h = x.Ls[S]), this.$d = function(q, Q, W) {
            try {
              if (["x", "X"].indexOf(Q) > -1)
                return new Date((Q === "X" ? 1e3 : 1) * q);
              var F = E(Q)(q), Z = F.year, rt = F.month, Vt = F.day, qt = F.hours, Wt = F.minutes, Xt = F.seconds, Kt = F.milliseconds, _t = F.zone, gt = new Date(), mt = Vt || (Z || rt ? 1 : gt.getDate()), ht = Z || gt.getFullYear(), it = 0;
              Z && !rt || (it = rt > 0 ? rt - 1 : gt.getMonth());
              var pt = qt || 0, vt = Wt || 0, yt = Xt || 0, bt = Kt || 0;
              return _t ? new Date(Date.UTC(ht, it, mt, pt, vt, yt, bt + 60 * _t.offset * 1e3)) : W ? new Date(Date.UTC(ht, it, mt, pt, vt, yt, bt)) : new Date(ht, it, mt, pt, vt, yt, bt);
            } catch {
              return new Date("");
            }
          }(l, D, v), this.init(), S && S !== !0 && (this.$L = this.locale(S).$L), M && l != this.format(D) && (this.$d = new Date("")), h = {};
        } else if (D instanceof Array)
          for (var $ = D.length, R = 1; R <= $; R += 1) {
            y[1] = D[R - 1];
            var P = x.apply(this, y);
            if (P.isValid()) {
              this.$d = P.$d, this.$L = P.$L, this.init();
              break;
            }
            R === $ && (this.$d = new Date(""));
          }
        else
          f.call(this, B);
      };
    };
  });
})(It);
const le = It.exports, Ht = Symbol("CHART_ROWS_KEY"), At = Symbol("CONFIG_KEY"), Ut = Symbol("EMIT_BAR_EVENT_KEY"), Pt = Symbol("BAR_CONTAINER_KEY");
function U() {
  const t = lt(At);
  if (!t)
    throw Error("Failed to inject config!");
  return t;
}
const Ft = "YYYY-MM-DD HH:mm";
function ot(t = U()) {
  const { chartStart: i, chartEnd: n, barStart: s, barEnd: r, dateFormat: u } = t, m = I(() => g(i.value)), h = I(() => g(n.value)), g = (e, o) => {
    let c;
    if (o !== void 0 && typeof e != "string" && !(e instanceof Date) && (c = o === "start" ? e[s.value] : e[r.value]), typeof e == "string")
      c = e;
    else if (e instanceof Date)
      return j(e);
    const w = u.value || Ft;
    return j(c, w, !0);
  };
  return {
    chartStartDayjs: m,
    chartEndDayjs: h,
    toDayjs: g,
    format: (e, o) => o === !1 ? e instanceof Date ? e : j(e).toDate() : (typeof e == "string" || e instanceof Date ? g(e) : e).format(o)
  };
}
function dt() {
  const { precision: t } = U(), { chartStartDayjs: i, chartEndDayjs: n } = ot(), s = I(() => {
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
  }), r = {
    hour: "HH",
    date: "DD.MMM ",
    day: "DD",
    week: "DD",
    month: "MMMM YYYY",
    year: "YYYY"
  };
  return {
    timeaxisUnits: I(() => {
      const m = [], h = [], g = s.value === "day" ? "date" : s.value, a = t.value;
      let e = i.value.startOf(a);
      const o = n.value.diff(i.value, "minutes", !0);
      let c = 0, w = e[g]();
      for (; e.isBefore(n.value) || e.isSame(n.value); ) {
        if (e[g]() !== w) {
          let f = 0;
          if (m.length === 0)
            f = e.startOf(g).diff(i.value, "minutes", !0) / o * 100;
          else if (e.isSameOrAfter(n.value))
            f = n.value.diff(
              e.subtract(1, g).startOf(g),
              "minutes",
              !0
            ) / o * 100;
          else {
            const l = e.startOf(g), v = e.subtract(1, g).startOf(g);
            f = l.diff(v, "minutes", !0) / o * 100;
          }
          const B = e.subtract(1, g);
          m.push({
            label: B.format(r[g]),
            value: String(w),
            date: B.toDate(),
            width: String(f) + "%"
          }), c = 0, w = e[g]();
        }
        let b = 0;
        h.length === 0 ? b = e.endOf(a).diff(i.value, "minutes", !0) / o * 100 : e.add(1, a).isSameOrAfter(n.value) ? b = n.value.diff(e.startOf(a), "minutes", !0) / o * 100 : b = e.endOf(a).diff(e.startOf(a), "minutes", !0) / o * 100;
        let x;
        switch (a) {
          case "week":
            x = e.startOf("week");
            break;
          default:
            x = e[a === "day" ? "date" : a]();
        }
        h.push({
          label: e.format(r[a]),
          value: String(x),
          date: e.toDate(),
          width: String(b) + "%"
        });
        const p = e;
        e = e.add(1, a), (e.isBefore(n.value) || e.isSame(n.value)) && (c += e.diff(p, "minutes", !0));
      }
      const E = n.value.isSame(n.value.startOf(g)) ? n.value[g]() - 1 : n.value[g]();
      return m.some((b) => b.value === String(E)) || (c += n.value.diff(
        e.subtract(1, a),
        "minutes",
        !0
      ), m.push({
        label: n.value.format(r[g]),
        value: String(w),
        date: n.value.toDate(),
        width: `${c / o * 100}%`
      })), { upperUnits: m, lowerUnits: h };
    })
  };
}
const ue = { class: "g-timeaxis" }, ce = ["onClick"], de = { class: "milestone-description" }, fe = ["onClick"], ge = /* @__PURE__ */ N({
  __name: "GGanttTimeaxis",
  props: {
    mileStoneList: null
  },
  emits: ["onClickTimeUnit", "onClickMilestone"],
  setup(t, { emit: i }) {
    const n = t, { precision: s, colors: r } = U(), { timeaxisUnits: u } = dt(), m = () => {
      var e;
      return ((e = n.mileStoneList) == null ? void 0 : e.length) > 0 ? { minHeight: "33%" } : { height: "50%" };
    }, h = (e) => s.value == "week" ? n.mileStoneList.map((o) => a(o.date).getTime()).includes(a(e).getTime()) : n.mileStoneList.map((o) => o.date.getTime()).includes(e.getTime()), g = (e) => s.value == "week" ? n.mileStoneList.find((o) => a(o.date).getTime() === a(e).getTime()) : n.mileStoneList.find((o) => o.date.getTime() === e.getTime());
    function a(e) {
      e = new Date(e);
      let o = e.getDay(), c = e.getDate() - o + (o == 0 ? -6 : 1);
      return new Date(e.setDate(c));
    }
    return (e, o) => {
      var c;
      return C(), O("div", ue, [
        G("div", {
          class: "g-timeunits-container",
          style: m
        }, [
          (C(!0), O(z, null, X(_(u).upperUnits, ({ label: w, value: E, date: d, width: b }, x) => (C(), O("div", {
            key: d.getTime(),
            class: "g-upper-timeunit",
            style: L({
              background: x % 2 === 0 ? _(r).primary : _(r).secondary,
              color: _(r).text,
              width: b
            })
          }, [
            H(e.$slots, "upper-timeunit", {
              label: w,
              value: E,
              date: d
            }, () => [
              et(K(w), 1)
            ])
          ], 4))), 128))
        ]),
        G("div", {
          class: "g-timeunits-container",
          style: m
        }, [
          (C(!0), O(z, null, X(_(u).lowerUnits, ({ label: w, value: E, date: d, width: b }, x) => (C(), O("div", {
            key: d.getTime(),
            class: "g-timeunit",
            style: L({
              background: x % 2 === 0 ? _(r).ternary : _(r).quartenary,
              color: _(r).text,
              flexDirection: _(s) === "hour" ? "column" : "row",
              alignItems: _(s) === "hour" ? "" : "center",
              width: b
            }),
            onClick: (p) => i("onClickTimeUnit", { date: d })
          }, [
            H(e.$slots, "timeunit", {
              label: w,
              value: E,
              date: d
            }, () => [
              et(K(w), 1)
            ]),
            _(s) === "hour" ? (C(), O("div", {
              key: 0,
              class: "g-timeaxis-hour-pin",
              style: L({ background: _(r).text })
            }, null, 4)) : A("", !0)
          ], 12, ce))), 128))
        ]),
        ((c = t.mileStoneList) == null ? void 0 : c.length) > 0 ? (C(), O("div", {
          key: 0,
          class: "g-timeunits-container",
          style: m
        }, [
          (C(!0), O(z, null, X(_(u).lowerUnits, ({ label: w, value: E, date: d, width: b }, x) => (C(), O("div", {
            key: d.getTime(),
            class: "g-timeunit",
            style: L({
              color: _(r).text,
              flexDirection: _(s) === "hour" ? "column" : "row",
              alignItems: _(s) === "hour" ? "" : "center",
              width: b
            })
          }, [
            h(d) ? H(e.$slots, "timeunit", {
              key: 0,
              label: w,
              value: E,
              date: d
            }, () => [
              G("p", de, [
                et("\u25BC "),
                G("span", {
                  class: "milestone-description",
                  onClick: (p) => i("onClickMilestone", { milestone: g(d) })
                }, K(g(d).description), 9, fe)
              ])
            ]) : A("", !0),
            _(s) === "hour" ? (C(), O("div", {
              key: 1,
              class: "g-timeaxis-hour-pin",
              style: L({ background: _(r).text })
            }, null, 4)) : A("", !0)
          ], 4))), 128))
        ])) : A("", !0)
      ]);
    };
  }
});
const me = { class: "g-grid-container" }, he = /* @__PURE__ */ N({
  __name: "GGanttGrid",
  props: {
    highlightedDates: null
  },
  setup(t) {
    const i = t, n = I(() => {
      var u;
      return (u = i.highlightedDates) == null ? void 0 : u.map((m) => m.getTime());
    }), { colors: s } = U(), { timeaxisUnits: r } = dt();
    return (u, m) => (C(), O("div", me, [
      (C(!0), O(z, null, X(_(r).lowerUnits, ({ label: h, value: g, width: a, date: e }) => {
        var o;
        return C(), O("div", {
          key: e.getTime(),
          class: "g-grid-line",
          style: L({
            width: a,
            background: (o = _(n)) != null && o.includes(e.getTime()) ? _(s).hoverHighlight : void 0
          })
        }, null, 4);
      }), 128))
    ]));
  }
});
const pe = /* @__PURE__ */ N({
  __name: "GGanttBarTooltip",
  props: {
    bar: null,
    modelValue: { type: Boolean }
  },
  setup(t) {
    const i = t, n = {
      hour: "HH:mm",
      day: "DD. MMM HH:mm",
      week: "DD. MMM HH:mm",
      month: "DD. MMMM YYYY"
    }, s = "cadetblue", { bar: r } = nt(i), { precision: u, font: m, barStart: h, barEnd: g, rowHeight: a } = U(), e = Y("0px"), o = Y("0px");
    ut(
      () => i.bar,
      async () => {
        var v;
        await St();
        const x = ((v = r == null ? void 0 : r.value) == null ? void 0 : v.ganttBarConfig.id) || "";
        if (!x)
          return;
        const p = document.getElementById(x), { top: f, left: B } = (p == null ? void 0 : p.getBoundingClientRect()) || {
          top: 0,
          left: 0
        }, l = Math.max(B, 10);
        e.value = `${f + a.value - 10}px`, o.value = `${l}px`;
      },
      { deep: !0, immediate: !0 }
    );
    const c = I(() => {
      var x, p;
      return ((p = (x = r == null ? void 0 : r.value) == null ? void 0 : x.ganttBarConfig.style) == null ? void 0 : p.background) || s;
    }), { toDayjs: w } = ot(), E = I(() => {
      var x;
      return (x = r.value) == null ? void 0 : x[h.value];
    }), d = I(() => {
      var x;
      return (x = r.value) == null ? void 0 : x[g.value];
    }), b = I(() => {
      if (!(r != null && r.value))
        return "";
      const x = n[u.value], p = w(E.value).format(x), f = w(d.value).format(x);
      return `${p} \u2013 ${f}`;
    });
    return (x, p) => (C(), J(Qt, { to: "body" }, [
      Bt(Zt, {
        name: "g-fade",
        mode: "out-in"
      }, {
        default: tt(() => [
          t.modelValue ? (C(), O("div", {
            key: 0,
            class: "g-gantt-tooltip",
            style: L({
              top: e.value,
              left: o.value,
              fontFamily: _(m)
            })
          }, [
            G("div", {
              class: "g-gantt-tooltip-color-dot",
              style: L({ background: _(c) })
            }, null, 4),
            H(x.$slots, "default", {
              bar: _(r),
              barStart: _(E),
              barEnd: _(d)
            }, () => [
              et(K(_(b)), 1)
            ])
          ], 4)) : A("", !0)
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
  return typeof t == "function" ? t() : _(t);
}
function ye(t) {
  return t;
}
function be(t) {
  return Jt() ? (te(t), !0) : !1;
}
function we(t, i = !0) {
  ee() ? Lt(t) : i ? t() : St(t);
}
function jt(t) {
  var i;
  const n = ve(t);
  return (i = n == null ? void 0 : n.$el) != null ? i : n;
}
const xe = at ? window : void 0;
at && window.document;
at && window.navigator;
at && window.location;
function Be(t, i = !1) {
  const n = Y(), s = () => n.value = Boolean(t());
  return s(), we(s, i), n;
}
const wt = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {}, xt = "__vueuse_ssr_handlers__";
wt[xt] = wt[xt] || {};
wt[xt];
var Et = Object.getOwnPropertySymbols, _e = Object.prototype.hasOwnProperty, De = Object.prototype.propertyIsEnumerable, ke = (t, i) => {
  var n = {};
  for (var s in t)
    _e.call(t, s) && i.indexOf(s) < 0 && (n[s] = t[s]);
  if (t != null && Et)
    for (var s of Et(t))
      i.indexOf(s) < 0 && De.call(t, s) && (n[s] = t[s]);
  return n;
};
function Ee(t, i, n = {}) {
  const s = n, { window: r = xe } = s, u = ke(s, ["window"]);
  let m;
  const h = Be(() => r && "ResizeObserver" in r), g = () => {
    m && (m.disconnect(), m = void 0);
  }, a = ut(() => jt(t), (o) => {
    g(), h.value && r && o && (m = new ResizeObserver(i), m.observe(o, u));
  }, { immediate: !0, flush: "post" }), e = () => {
    g(), a();
  };
  return be(e), {
    isSupported: h,
    stop: e
  };
}
function Ce(t, i = { width: 0, height: 0 }, n = {}) {
  const s = Y(i.width), r = Y(i.height);
  return Ee(t, ([u]) => {
    s.value = u.contentRect.width, r.value = u.contentRect.height;
  }, n), ut(() => jt(t), (u) => {
    s.value = u ? i.width : 0, r.value = u ? i.height : 0;
  }), {
    width: s,
    height: r
  };
}
var Ct;
(function(t) {
  t.UP = "UP", t.RIGHT = "RIGHT", t.DOWN = "DOWN", t.LEFT = "LEFT", t.NONE = "NONE";
})(Ct || (Ct = {}));
var Oe = Object.defineProperty, Ot = Object.getOwnPropertySymbols, Te = Object.prototype.hasOwnProperty, Me = Object.prototype.propertyIsEnumerable, Tt = (t, i, n) => i in t ? Oe(t, i, { enumerable: !0, configurable: !0, writable: !0, value: n }) : t[i] = n, Se = (t, i) => {
  for (var n in i || (i = {}))
    Te.call(i, n) && Tt(t, n, i[n]);
  if (Ot)
    for (var n of Ot(i))
      Me.call(i, n) && Tt(t, n, i[n]);
  return t;
};
const Le = {
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
  linear: ye
}, Le);
const Ge = {
  key: 0,
  class: "g-footer"
}, $e = { class: "g-footer-container" }, Ye = /* @__PURE__ */ N({
  __name: "GGanttFooter",
  props: {
    labels: null
  },
  setup(t) {
    const { precision: i, colors: n } = U(), { timeaxisUnits: s } = dt();
    return (r, u) => t.labels ? (C(), O("div", Ge, [
      G("div", $e, [
        (C(!0), O(z, null, X(_(s).lowerUnits, ({ label: m, value: h, date: g, width: a }, e) => (C(), O("div", {
          key: m,
          class: "g-timeunit",
          style: L({
            background: e % 2 === 0 ? _(n).ternary : _(n).quartenary,
            color: _(n).text,
            flexDirection: _(i) === "hour" ? "column" : "row",
            alignItems: _(i) === "hour" ? "" : "center",
            width: a
          })
        }, [
          H(r.$slots, "timeunit", {
            label: m,
            value: h,
            date: g
          }, () => [
            et(K(t.labels[e]), 1)
          ], !0)
        ], 4))), 128))
      ])
    ])) : A("", !0);
  }
});
const Re = (t, i) => {
  const n = t.__vccOpts || t;
  for (const [s, r] of i)
    n[s] = r;
  return n;
}, Ie = /* @__PURE__ */ Re(Ye, [["__scopeId", "data-v-400629df"]]);
function ft(t = U()) {
  const { dateFormat: i, chartSize: n } = t, { chartStartDayjs: s, chartEndDayjs: r, toDayjs: u, format: m } = ot(t), h = I(() => r.value.diff(s.value, "minutes"));
  return {
    mapTimeToPosition: (e) => {
      const o = n.width.value || 0, c = u(e).diff(s.value, "minutes", !0);
      return Math.ceil(c / h.value * o);
    },
    mapPositionToTime: (e) => {
      const o = n.width.value || 0, c = e / o * h.value, w = m(s.value.add(c, "minutes"), i.value);
      if (typeof w == "string")
        return w;
      throw Error;
    }
  };
}
const He = /* @__PURE__ */ N({
  __name: "GGanttDrawTodayLine",
  emits: ["today-line-position-x"],
  setup(t, { emit: i }) {
    const { mapTimeToPosition: n } = ft(), s = I(() => (i("today-line-position-x", { xPosition: n(j().startOf("day").format("DD.MM.YYYY HH:mm")) }), n(j().startOf("day").format("DD.MM.YYYY HH:mm"))));
    return (r, u) => (C(), O("div", {
      class: "today-line",
      style: L({ left: _(s) + "px" })
    }, null, 4));
  }
});
const Ae = { class: "g-gantt-rows-container" }, Ue = /* @__PURE__ */ N({
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
    mileStoneList: null
  },
  emits: ["click-bar", "mousedown-bar", "mouseup-bar", "dblclick-bar", "mouseenter-bar", "mouseleave-bar", "dragstart-bar", "drag-bar", "dragend-bar", "contextmenu-bar", "today-line-position-x", "onClickTimeUnit", "onClickMilestone"],
  setup(t, { emit: i }) {
    const n = t, { width: s, font: r, colorScheme: u } = nt(n), m = ne(), h = I(
      () => typeof u.value != "string" ? u.value : Dt[u.value] || Dt.default
    ), g = () => {
      var B;
      const p = (B = m.default) == null ? void 0 : B.call(m), f = [];
      return p && p.forEach((l) => {
        var v;
        if ((v = l.props) != null && v.bars) {
          const y = l.props.bars;
          f.push(y);
        } else
          Array.isArray(l.children) && l.children.forEach((y) => {
            var k;
            const D = y;
            if ((k = D == null ? void 0 : D.props) != null && k.bars) {
              const T = D.props.bars;
              f.push(T);
            }
          });
      }), f;
    }, a = Y(!1), e = Y(!1), o = Y(void 0);
    let c;
    const w = (p) => {
      c && clearTimeout(c), c = setTimeout(() => {
        a.value = !0;
      }, 800), o.value = p;
    }, E = () => {
      clearTimeout(c), a.value = !1;
    }, d = (p, f, B, l) => {
      switch (p.type) {
        case "click":
          i("click-bar", { bar: f, e: p, datetime: B });
          break;
        case "mousedown":
          i("mousedown-bar", { bar: f, e: p, datetime: B });
          break;
        case "mouseup":
          i("mouseup-bar", { bar: f, e: p, datetime: B });
          break;
        case "dblclick":
          i("dblclick-bar", { bar: f, e: p, datetime: B });
          break;
        case "mouseenter":
          w(f), i("mouseenter-bar", { bar: f, e: p });
          break;
        case "mouseleave":
          E(), i("mouseleave-bar", { bar: f, e: p });
          break;
        case "dragstart":
          e.value = !0, i("dragstart-bar", { bar: f, e: p });
          break;
        case "drag":
          i("drag-bar", { bar: f, e: p });
          break;
        case "dragend":
          e.value = !1, i("dragend-bar", { bar: f, e: p });
          break;
        case "contextmenu":
          i("contextmenu-bar", { bar: f, e: p, datetime: B });
          break;
      }
    }, b = Y(null), x = Ce(b);
    return st(Ht, g), st(At, {
      ...nt(n),
      colors: h,
      chartSize: x
    }), st(Ut, d), (p, f) => (C(), O(z, null, [
      G("div", {
        style: L([{ display: "flex", "flex-flow": "column" }, t.sticky ? "position: sticky; left:0;z-index:100; background: white;" : ""]),
        class: "g-gantt-wrapper"
      }, [
        H(p.$slots, "side-menu")
      ], 4),
      G("div", {
        ref_key: "ganttChart",
        ref: b,
        class: "g-gantt-chart",
        style: L({ width: _(s), background: _(h).background, fontFamily: _(r) })
      }, [
        t.hideTimeaxis ? A("", !0) : (C(), J(ge, {
          key: 0,
          "mile-stone-list": t.mileStoneList,
          onOnClickTimeUnit: f[0] || (f[0] = (B) => p.$emit("onClickTimeUnit", B)),
          onOnClickMilestone: f[1] || (f[1] = (B) => p.$emit("onClickMilestone", B))
        }, {
          "upper-timeunit": tt(({ label: B, value: l, date: v }) => [
            H(p.$slots, "upper-timeunit", {
              label: B,
              value: l,
              date: v
            })
          ]),
          timeunit: tt(({ label: B, value: l, date: v }) => [
            H(p.$slots, "timeunit", {
              label: B,
              value: l,
              date: v
            })
          ]),
          _: 3
        }, 8, ["mile-stone-list"])),
        t.grid ? (C(), J(he, {
          key: 1,
          "highlighted-dates": t.highlightedDates
        }, null, 8, ["highlighted-dates"])) : A("", !0),
        G("div", Ae, [
          H(p.$slots, "default")
        ]),
        t.hideTimeaxis ? A("", !0) : (C(), J(Ie, {
          key: 2,
          labels: t.footerLabels
        }, null, 8, ["labels"])),
        Bt(pe, {
          "model-value": a.value || e.value,
          bar: o.value
        }, {
          default: tt(() => [
            H(p.$slots, "bar-tooltip", { bar: o.value })
          ]),
          _: 3
        }, 8, ["model-value", "bar"]),
        t.displayTodayLine ? (C(), J(He, {
          key: 3,
          onTodayLinePositionX: f[2] || (f[2] = (B) => i("today-line-position-x", B))
        })) : A("", !0)
      ], 4),
      G("div", null, [
        H(p.$slots, "footer")
      ])
    ], 64));
  }
});
function Mt(t, i = () => null, n = () => null, s = U()) {
  const { barStart: r, barEnd: u, pushOnOverlap: m } = s, h = Y(!1);
  let g = 0, a;
  const { mapPositionToTime: e } = ft(s), { toDayjs: o } = ot(s), c = (f) => {
    const B = document.getElementById(t.ganttBarConfig.id);
    if (!B)
      return;
    switch (g = f.clientX - (B.getBoundingClientRect().left || 0), f.target.className) {
      case "g-gantt-bar-handle-left":
        document.body.style.cursor = "ew-resize", a = d;
        break;
      case "g-gantt-bar-handle-right":
        document.body.style.cursor = "ew-resize", a = b;
        break;
      default:
        a = E;
    }
    h.value = !0, window.addEventListener("mousemove", a), window.addEventListener("mouseup", p);
  }, w = () => {
    var l;
    const f = document.getElementById(t.ganttBarConfig.id), B = (l = f == null ? void 0 : f.closest(".g-gantt-row-bars-container")) == null ? void 0 : l.getBoundingClientRect();
    return { barElement: f, barContainer: B };
  }, E = (f) => {
    const { barElement: B, barContainer: l } = w();
    if (!B || !l)
      return;
    const v = B.getBoundingClientRect().width, y = f.clientX - l.left - g, D = y + v;
    if (!x(y, D)) {
      if (t[r.value].substring(0, 10) != e(y).substring(0, 10)) {
        const k = o(t[r.value]), M = o(t[u.value]).diff(k, "minute"), S = e(y).substring(0, 10) + " 00:00";
        t[r.value] = S, t[u.value] = o(S).add(M, "minute").format("DD.MM.YYYY HH:mm");
      }
      i(f, t);
    }
  }, d = (f) => {
    const { barElement: B, barContainer: l } = w();
    if (!B || !l)
      return;
    const v = f.clientX - l.left, y = e(v);
    if (!o(y).isSameOrAfter(o(t, "end"))) {
      if (t[r.value].substring(0, 10) != e(v).substring(0, 10)) {
        const D = e(v).substring(0, 10) + " 00:00";
        t[r.value] = D;
      }
      i(f, t);
    }
  }, b = (f) => {
    const { barElement: B, barContainer: l } = w();
    if (!B || !l)
      return;
    const v = f.clientX - l.left, y = e(v);
    if (!o(y).isSameOrBefore(o(t, "start"))) {
      if (t[r.value].substring(0, 10) != e(v).substring(0, 10)) {
        const D = e(v).substring(0, 10) + " 23:59";
        t[u.value] = D;
      }
      i(f, t);
    }
  }, x = (f, B) => {
    if (!m.value)
      return !1;
    const l = t.ganttBarConfig.dragLimitLeft, v = t.ganttBarConfig.dragLimitRight;
    return f && l != null && f < l || B && v != null && B > v;
  }, p = (f) => {
    h.value = !1, document.body.style.cursor = "", window.removeEventListener("mousemove", a), window.removeEventListener("mouseup", p), n(f, t);
  };
  return {
    isDragging: h,
    initDrag: c
  };
}
function zt() {
  const t = lt(Ht);
  if (!t)
    throw Error("Failed to inject getChartRows!");
  return t;
}
function Nt() {
  const t = lt(Ut);
  if (!t)
    throw Error("Failed to inject emitBarEvent!");
  return t;
}
function Pe() {
  const t = U(), i = zt(), n = Nt(), { pushOnOverlap: s, barStart: r, barEnd: u, noOverlap: m, dateFormat: h } = t, g = /* @__PURE__ */ new Map(), { toDayjs: a, format: e } = ot(), o = (l, v) => {
    const { initDrag: y } = Mt(l, w, p, t);
    n({ ...v, type: "dragstart" }, l), y(v), f(l);
  }, c = (l, v) => {
    const y = l.ganttBarConfig.bundle;
    y != null && (i().forEach((D) => {
      D.forEach((k) => {
        if (k.ganttBarConfig.bundle === y) {
          const T = k === l ? p : () => null, { initDrag: M } = Mt(k, w, T, t);
          M(v), f(k);
        }
      });
    }), n({ ...v, type: "dragstart" }, l));
  }, w = (l, v) => {
    n({ ...l, type: "drag" }, v), E(v);
  }, E = (l) => {
    if (!(s != null && s.value))
      return;
    let v = l, { overlapBar: y, overlapType: D } = d(v);
    for (; y; ) {
      f(y);
      const k = a(v[r.value]), T = a(v[u.value]), M = a(y[r.value]), S = a(y[u.value]);
      let $;
      switch (D) {
        case "left":
          $ = S.diff(k, "minutes", !0), y[u.value] = e(v[r.value], h.value), y[r.value] = e(
            M.subtract($, "minutes"),
            h.value
          );
          break;
        case "right":
          $ = T.diff(M, "minutes", !0), y[r.value] = e(T, h.value), y[u.value] = e(
            S.add($, "minutes"),
            h.value
          );
          break;
        default:
          console.warn(
            "Vue-Ganttastic: One bar is inside of the other one! This should never occur while push-on-overlap is active!"
          );
          return;
      }
      y && (D === "left" || D === "right") && b(y, $, D), v = y, { overlapBar: y, overlapType: D } = d(y);
    }
  }, d = (l) => {
    let v, y, D;
    const k = i().find((R) => R.includes(l)) || [], T = a(l[r.value]), M = a(l[u.value]);
    return { overlapBar: k.find((R) => {
      if (R === l)
        return !1;
      const P = a(R[r.value]), q = a(R[u.value]);
      return v = T.isBetween(P, q), y = M.isBetween(P, q), D = P.isBetween(T, M) || q.isBetween(T, M), v || y || D;
    }), overlapType: v ? "left" : y ? "right" : D ? "between" : null };
  }, b = (l, v, y) => {
    f(l), l.ganttBarConfig.bundle && i().forEach((D) => {
      D.forEach((k) => {
        k.ganttBarConfig.bundle === l.ganttBarConfig.bundle && k !== l && (f(k), x(k, v, y));
      });
    });
  }, x = (l, v, y) => {
    switch (y) {
      case "left":
        l[r.value] = e(
          a(l, "start").subtract(v, "minutes"),
          h.value
        ), l[u.value] = e(
          a(l, "end").subtract(v, "minutes"),
          h.value
        );
        break;
      case "right":
        l[r.value] = e(
          a(l, "start").add(v, "minutes"),
          h.value
        ), l[u.value] = e(a(l, "end").add(v, "minutes"), h.value);
    }
    E(l);
  }, p = (l, v) => {
    B();
    const y = {
      ...l,
      type: "dragend"
    };
    n(y, v, void 0, new Map(g)), g.clear();
  }, f = (l) => {
    if (!g.has(l)) {
      const v = l[r.value], y = l[u.value];
      g.set(l, { oldStart: v, oldEnd: y });
    }
  }, B = () => {
    if (s.value || !m.value)
      return;
    let l = !1;
    g.forEach((v, y) => {
      const { overlapBar: D } = d(y);
      D != null && (l = !0);
    }), l && g.forEach(({ oldStart: v, oldEnd: y }, D) => {
      D[r.value] = v, D[u.value] = y;
    });
  };
  return {
    initDragOfBar: o,
    initDragOfBundle: c
  };
}
function Fe() {
  const { pushOnOverlap: t } = U(), i = zt(), n = (m) => {
    const h = [];
    return m != null && i().forEach((g) => {
      g.forEach((a) => {
        a.ganttBarConfig.bundle === m && h.push(a);
      });
    }), h;
  }, s = (m) => {
    if (!t.value || m.ganttBarConfig.pushOnOverlap === !1)
      return;
    for (const g of ["left", "right"]) {
      const a = g, { gapDistanceSoFar: e, bundleBarsAndGapDist: o } = r(
        m,
        0,
        a
      );
      let c = e;
      const w = o;
      if (!w)
        continue;
      for (let d = 0; d < w.length; d++) {
        const b = w[d].bar, x = w[d].gapDistance;
        n(b.ganttBarConfig.bundle).filter(
          (f) => f !== b
        ).forEach((f) => {
          const B = r(f, x, a), l = B.gapDistanceSoFar, v = B.bundleBarsAndGapDist;
          l != null && (!c || l < c) && (c = l), v.forEach((y) => {
            w.find((D) => D.bar === y.bar) || w.push(y);
          });
        });
      }
      const E = document.getElementById(m.ganttBarConfig.id);
      c != null && a === "left" ? m.ganttBarConfig.dragLimitLeft = E.offsetLeft - c : c != null && a === "right" && (m.ganttBarConfig.dragLimitRight = E.offsetLeft + E.offsetWidth + c);
    }
    n(m.ganttBarConfig.bundle).forEach((g) => {
      g.ganttBarConfig.dragLimitLeft = m.ganttBarConfig.dragLimitLeft, g.ganttBarConfig.dragLimitRight = m.ganttBarConfig.dragLimitRight;
    });
  }, r = (m, h = 0, g) => {
    const a = m.ganttBarConfig.bundle ? [{ bar: m, gapDistance: h }] : [];
    let e = m, o = u(e, g);
    if (g === "left")
      for (; o; ) {
        const c = document.getElementById(e.ganttBarConfig.id), w = document.getElementById(o.ganttBarConfig.id), E = w.offsetLeft + w.offsetWidth;
        if (h += c.offsetLeft - E, o.ganttBarConfig.immobile)
          return { gapDistanceSoFar: h, bundleBarsAndGapDist: a };
        o.ganttBarConfig.bundle && a.push({
          bar: o,
          gapDistance: h
        }), e = o, o = u(o, "left");
      }
    if (g === "right")
      for (; o; ) {
        const c = document.getElementById(e.ganttBarConfig.id), w = document.getElementById(o.ganttBarConfig.id), E = c.offsetLeft + c.offsetWidth;
        if (h += w.offsetLeft - E, o.ganttBarConfig.immobile)
          return { gapDistanceSoFar: h, bundleBarsAndGapDist: a };
        o.ganttBarConfig.bundle && a.push({
          bar: o,
          gapDistance: h
        }), e = o, o = u(o, "right");
      }
    return { gapDistanceSoFar: null, bundleBarsAndGapDist: a };
  }, u = (m, h) => {
    const g = document.getElementById(m.ganttBarConfig.id), a = i().find((o) => o.includes(m)) || [];
    let e = [];
    return h === "left" ? e = a.filter((o) => {
      const c = document.getElementById(o.ganttBarConfig.id);
      return c && c.offsetLeft < g.offsetLeft && o.ganttBarConfig.pushOnOverlap !== !1;
    }) : e = a.filter((o) => {
      const c = document.getElementById(o.ganttBarConfig.id);
      return c && c.offsetLeft > g.offsetLeft && o.ganttBarConfig.pushOnOverlap !== !1;
    }), e.length > 0 ? e.reduce((o, c) => {
      const w = document.getElementById(o.ganttBarConfig.id), E = document.getElementById(c.ganttBarConfig.id), d = Math.abs(w.offsetLeft - g.offsetLeft), b = Math.abs(E.offsetLeft - g.offsetLeft);
      return d < b ? o : c;
    }, e[0]) : null;
  };
  return {
    setDragLimitsOfGanttBar: s
  };
}
const je = ["id"], ze = { class: "g-gantt-bar-label" }, Ne = { style: { "z-index": "100" } }, Ve = /* @__PURE__ */ G("div", { class: "g-gantt-bar-handle-left" }, null, -1), qe = /* @__PURE__ */ G("div", { class: "g-gantt-bar-handle-right" }, null, -1), We = /* @__PURE__ */ N({
  __name: "GGanttBar",
  props: {
    bar: null
  },
  setup(t) {
    const i = t, n = Nt(), s = U(), { rowHeight: r } = s, { bar: u } = nt(i), { mapTimeToPosition: m, mapPositionToTime: h } = ft(), { initDragOfBar: g, initDragOfBundle: a } = Pe(), { setDragLimitsOfGanttBar: e } = Fe(), o = Y(!1), c = I(() => u.value.ganttBarConfig);
    function w(k) {
      c.value.bundle != null ? a(u.value, k) : g(u.value, k), o.value = !0;
    }
    const E = () => {
      e(u.value), !c.value.immobile && (window.addEventListener("mousemove", w, {
        once: !0
      }), window.addEventListener(
        "mouseup",
        () => {
          window.removeEventListener("mousemove", w), o.value = !1;
        },
        { once: !0 }
      ));
    }, d = lt(Pt), b = (k) => {
      var S;
      k.preventDefault(), k.type === "mousedown" && E();
      const T = (S = d == null ? void 0 : d.value) == null ? void 0 : S.getBoundingClientRect();
      if (!T)
        return;
      const M = h(k.clientX - T.left);
      n(k, u.value, M);
    }, { barStart: x, barEnd: p, width: f, chartStart: B, chartEnd: l, chartSize: v } = s, y = Y(0), D = Y(0);
    return Lt(() => {
      ut(
        [u, f, B, l, v.width],
        () => {
          y.value = m(u.value[x.value]), D.value = m(u.value[p.value]);
        },
        { deep: !0, immediate: !0 }
      );
    }), (k, T) => (C(), O("div", {
      id: _(c).id,
      class: "g-gantt-bar",
      style: L({
        ..._(c).style,
        position: "absolute",
        top: `${_(r) * 0.1}px`,
        left: `${y.value}px`,
        width: `${D.value - y.value}px`,
        height: `${_(r) * 0.8}px`,
        zIndex: o.value ? 3 : 2
      }),
      onMousedown: b,
      onClick: b,
      onDblclick: b,
      onMouseenter: b,
      onMouseleave: b,
      onContextmenu: b
    }, [
      G("div", ze, [
        H(k.$slots, "default", { bar: _(u) }, () => [
          G("div", Ne, K(_(c).label || ""), 1),
          _(c).progress ? (C(), O("div", {
            key: 0,
            style: L([{ position: "absolute", height: "100%", left: "0" }, {
              width: _(c).progress + "%",
              backgroundColor: _(c).progressColor
            }])
          }, null, 4)) : A("", !0)
        ])
      ]),
      _(c).hasHandles ? (C(), O(z, { key: 0 }, [
        Ve,
        qe
      ], 64)) : A("", !0)
    ], 44, je));
  }
});
const Xe = /* @__PURE__ */ N({
  __name: "GGanttRow",
  props: {
    bars: null,
    highlightOnHover: { type: Boolean }
  },
  emits: ["drop"],
  setup(t, { emit: i }) {
    const n = t, { rowHeight: s, colors: r } = U(), { highlightOnHover: u } = nt(n), m = Y(!1), h = I(() => ({
      height: `${s.value}px`,
      background: (u == null ? void 0 : u.value) && m.value ? r.value.hoverHighlight : null
    })), { mapPositionToTime: g } = ft(), a = Y(null);
    st(Pt, a);
    const e = (o) => {
      var d;
      const c = (d = a.value) == null ? void 0 : d.getBoundingClientRect();
      if (!c) {
        console.error("Vue-Ganttastic: failed to find bar container element for row.");
        return;
      }
      const w = o.clientX - c.left, E = g(w);
      i("drop", { e: o, datetime: E });
    };
    return (o, c) => (C(), O("div", {
      class: "g-gantt-row",
      style: L(_(h)),
      onDragover: c[0] || (c[0] = oe((w) => m.value = !0, ["prevent"])),
      onDragleave: c[1] || (c[1] = (w) => m.value = !1),
      onDrop: c[2] || (c[2] = (w) => e(w)),
      onMouseover: c[3] || (c[3] = (w) => m.value = !0),
      onMouseleave: c[4] || (c[4] = (w) => m.value = !1)
    }, [
      A("", !0),
      G("div", Gt({
        ref_key: "barContainer",
        ref: a,
        class: "g-gantt-row-bars-container"
      }, o.$attrs), [
        Bt(ae, {
          name: "bar-transition",
          tag: "div"
        }, {
          default: tt(() => [
            (C(!0), O(z, null, X(t.bars, (w) => (C(), J(We, {
              key: w.ganttBarConfig.id,
              bar: w
            }, {
              default: tt(() => [
                H(o.$slots, "bar-label", { bar: w })
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
const Ke = /* @__PURE__ */ N({
  __name: "GGanttLabelRow",
  props: {
    labels: null,
    styles: null
  },
  setup(t) {
    const { rowHeight: i, colors: n } = U(), { timeaxisUnits: s } = dt();
    return (r, u) => (C(), O("div", {
      class: "g-gantt-row",
      style: L({ height: _(i) + "px" })
    }, [
      G("div", Gt({
        ref: "barContainer",
        class: "g-gantt-row-bars-container"
      }, r.$attrs), [
        (C(!0), O(z, null, X(_(s).lowerUnits, ({ label: m, width: h, date: g }, a) => (C(), O("div", {
          key: g.getTime(),
          class: "g-timeunit",
          style: L({
            color: _(n).text,
            textAlign: "center",
            width: h
          })
        }, [
          G("span", {
            style: L(t.styles != null ? t.styles[a] : void 0)
          }, K(t.labels[a]), 5)
        ], 4))), 128))
      ], 16)
    ], 4));
  }
});
function Qe() {
  j.extend(re), j.extend(ie), j.extend(se), j.extend(le);
}
const en = {
  install(t, i) {
    Qe(), t.component("GGanttChart", Ue), t.component("GGanttRow", Xe), t.component("GGanttLabelRow", Ke);
  }
};
function V(t, i = "top") {
  if (!t || typeof document > "u")
    return;
  const n = document.head, s = document.createElement("style");
  i === "top" && n.firstChild ? n.insertBefore(s, n.firstChild) : n.appendChild(s), s.appendChild(document.createTextNode(t));
}
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
.today-line {
  width: 2px;
  height: 100%;
  background-color: red;
  position: absolute;
  z-index: 1;
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
.milestone-description {
  margin: 0;
}
.milestone-description > span {
  position: absolute;
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
export {
  Ue as GGanttChart,
  Ke as GGanttLabelRow,
  Xe as GGanttRow,
  en as default,
  Qe as extendDayjs,
  en as ganttastic
};
