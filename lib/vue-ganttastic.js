import j from "dayjs";
import { inject as lt, computed as I, defineComponent as N, openBlock as C, createElementBlock as O, createElementVNode as G, Fragment as z, renderList as X, unref as B, normalizeStyle as L, renderSlot as H, createTextVNode as et, toDisplayString as K, createCommentVNode as A, toRefs as nt, ref as $, watch as ut, nextTick as St, createBlock as J, Teleport as Qt, createVNode as Bt, Transition as Zt, withCtx as tt, getCurrentScope as Jt, onScopeDispose as te, getCurrentInstance as ee, onMounted as Lt, useSlots as ne, provide as st, withModifiers as oe, mergeProps as Gt, TransitionGroup as ae } from "vue";
var ct = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {}, $t = { exports: {} };
(function(t, s) {
  (function(n, l) {
    t.exports = l();
  })(ct, function() {
    return function(n, l) {
      l.prototype.isSameOrBefore = function(i, u) {
        return this.isSame(i, u) || this.isBefore(i, u);
      };
    };
  });
})($t);
const re = $t.exports;
var Yt = { exports: {} };
(function(t, s) {
  (function(n, l) {
    t.exports = l();
  })(ct, function() {
    return function(n, l) {
      l.prototype.isSameOrAfter = function(i, u) {
        return this.isSame(i, u) || this.isAfter(i, u);
      };
    };
  });
})(Yt);
const ie = Yt.exports;
var Rt = { exports: {} };
(function(t, s) {
  (function(n, l) {
    t.exports = l();
  })(ct, function() {
    return function(n, l, i) {
      l.prototype.isBetween = function(u, m, h, g) {
        var a = i(u), e = i(m), o = (g = g || "()")[0] === "(", c = g[1] === ")";
        return (o ? this.isAfter(a, h) : !this.isBefore(a, h)) && (c ? this.isBefore(e, h) : !this.isAfter(e, h)) || (o ? this.isBefore(a, h) : !this.isAfter(a, h)) && (c ? this.isAfter(e, h) : !this.isBefore(e, h));
      };
    };
  });
})(Rt);
const se = Rt.exports;
var It = { exports: {} };
(function(t, s) {
  (function(n, l) {
    t.exports = l();
  })(ct, function() {
    var n = { LTS: "h:mm:ss A", LT: "h:mm A", L: "MM/DD/YYYY", LL: "MMMM D, YYYY", LLL: "MMMM D, YYYY h:mm A", LLLL: "dddd, MMMM D, YYYY h:mm A" }, l = /(\[[^[]*\])|([-_:/.,()\s]+)|(A|a|YYYY|YY?|MM?M?M?|Do|DD?|hh?|HH?|mm?|ss?|S{1,3}|z|ZZ?)/g, i = /\d\d/, u = /\d\d?/, m = /\d*[^-_:/,()\s\d]+/, h = {}, g = function(f) {
      return (f = +f) + (f > 68 ? 1900 : 2e3);
    }, a = function(f) {
      return function(y) {
        this[f] = +y;
      };
    }, e = [/[+-]\d\d:?(\d\d)?|Z/, function(f) {
      (this.zone || (this.zone = {})).offset = function(y) {
        if (!y || y === "Z")
          return 0;
        var x = y.match(/([+-]|\d\d)/g), _ = 60 * x[1] + (+x[2] || 0);
        return _ === 0 ? 0 : x[0] === "+" ? -_ : _;
      }(f);
    }], o = function(f) {
      var y = h[f];
      return y && (y.indexOf ? y : y.s.concat(y.f));
    }, c = function(f, y) {
      var x, _ = h.meridiem;
      if (_) {
        for (var d = 1; d <= 24; d += 1)
          if (f.indexOf(_(d, 0, y)) > -1) {
            x = d > 12;
            break;
          }
      } else
        x = f === (y ? "pm" : "PM");
      return x;
    }, b = { A: [m, function(f) {
      this.afternoon = c(f, !1);
    }], a: [m, function(f) {
      this.afternoon = c(f, !0);
    }], S: [/\d/, function(f) {
      this.milliseconds = 100 * +f;
    }], SS: [i, function(f) {
      this.milliseconds = 10 * +f;
    }], SSS: [/\d{3}/, function(f) {
      this.milliseconds = +f;
    }], s: [u, a("seconds")], ss: [u, a("seconds")], m: [u, a("minutes")], mm: [u, a("minutes")], H: [u, a("hours")], h: [u, a("hours")], HH: [u, a("hours")], hh: [u, a("hours")], D: [u, a("day")], DD: [i, a("day")], Do: [m, function(f) {
      var y = h.ordinal, x = f.match(/\d+/);
      if (this.day = x[0], y)
        for (var _ = 1; _ <= 31; _ += 1)
          y(_).replace(/\[|\]/g, "") === f && (this.day = _);
    }], M: [u, a("month")], MM: [i, a("month")], MMM: [m, function(f) {
      var y = o("months"), x = (o("monthsShort") || y.map(function(_) {
        return _.slice(0, 3);
      })).indexOf(f) + 1;
      if (x < 1)
        throw new Error();
      this.month = x % 12 || x;
    }], MMMM: [m, function(f) {
      var y = o("months").indexOf(f) + 1;
      if (y < 1)
        throw new Error();
      this.month = y % 12 || y;
    }], Y: [/[+-]?\d+/, a("year")], YY: [i, function(f) {
      this.year = g(f);
    }], YYYY: [/\d{4}/, a("year")], Z: e, ZZ: e };
    function E(f) {
      var y, x;
      y = f, x = h && h.formats;
      for (var _ = (f = y.replace(/(\[[^\]]+])|(LTS?|l{1,4}|L{1,4})/g, function(k, T, M) {
        var S = M && M.toUpperCase();
        return T || x[M] || n[M] || x[S].replace(/(\[[^\]]+])|(MMMM|MM|DD|dddd)/g, function(Y, R, P) {
          return R || P.slice(1);
        });
      })).match(l), d = _.length, w = 0; w < d; w += 1) {
        var r = _[w], p = b[r], v = p && p[0], D = p && p[1];
        _[w] = D ? { regex: v, parser: D } : r.replace(/^\[|\]$/g, "");
      }
      return function(k) {
        for (var T = {}, M = 0, S = 0; M < d; M += 1) {
          var Y = _[M];
          if (typeof Y == "string")
            S += Y.length;
          else {
            var R = Y.regex, P = Y.parser, q = k.slice(S), Q = R.exec(q)[0];
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
    return function(f, y, x) {
      x.p.customParseFormat = !0, f && f.parseTwoDigitYear && (g = f.parseTwoDigitYear);
      var _ = y.prototype, d = _.parse;
      _.parse = function(w) {
        var r = w.date, p = w.utc, v = w.args;
        this.$u = p;
        var D = v[1];
        if (typeof D == "string") {
          var k = v[2] === !0, T = v[3] === !0, M = k || T, S = v[2];
          T && (S = v[2]), h = this.$locale(), !k && S && (h = x.Ls[S]), this.$d = function(q, Q, W) {
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
          }(r, D, p), this.init(), S && S !== !0 && (this.$L = this.locale(S).$L), M && r != this.format(D) && (this.$d = new Date("")), h = {};
        } else if (D instanceof Array)
          for (var Y = D.length, R = 1; R <= Y; R += 1) {
            v[1] = D[R - 1];
            var P = x.apply(this, v);
            if (P.isValid()) {
              this.$d = P.$d, this.$L = P.$L, this.init();
              break;
            }
            R === Y && (this.$d = new Date(""));
          }
        else
          d.call(this, w);
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
  const { chartStart: s, chartEnd: n, barStart: l, barEnd: i, dateFormat: u } = t, m = I(() => g(s.value)), h = I(() => g(n.value)), g = (e, o) => {
    let c;
    if (o !== void 0 && typeof e != "string" && !(e instanceof Date) && (c = o === "start" ? e[l.value] : e[i.value]), typeof e == "string")
      c = e;
    else if (e instanceof Date)
      return j(e);
    const b = u.value || Ft;
    return j(c, b, !0);
  };
  return {
    chartStartDayjs: m,
    chartEndDayjs: h,
    toDayjs: g,
    format: (e, o) => o === !1 ? e instanceof Date ? e : j(e).toDate() : (typeof e == "string" || e instanceof Date ? g(e) : e).format(o)
  };
}
function dt() {
  const { precision: t } = U(), { chartStartDayjs: s, chartEndDayjs: n } = ot(), l = I(() => {
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
    timeaxisUnits: I(() => {
      const m = [], h = [], g = l.value === "day" ? "date" : l.value, a = t.value;
      let e = s.value.startOf(a);
      const o = n.value.diff(s.value, "minutes", !0);
      let c = 0, b = e[g]();
      for (; e.isBefore(n.value) || e.isSame(n.value); ) {
        if (e[g]() !== b) {
          let d = 0;
          if (m.length === 0)
            d = e.startOf(g).diff(s.value, "minutes", !0) / o * 100;
          else if (e.isSameOrAfter(n.value))
            d = n.value.diff(
              e.subtract(1, g).startOf(g),
              "minutes",
              !0
            ) / o * 100;
          else {
            const r = e.startOf(g), p = e.subtract(1, g).startOf(g);
            d = r.diff(p, "minutes", !0) / o * 100;
          }
          const w = e.subtract(1, g);
          m.push({
            label: w.format(i[g]),
            value: String(b),
            date: w.toDate(),
            width: String(d) + "%"
          }), c = 0, b = e[g]();
        }
        let y = 0;
        h.length === 0 ? y = e.endOf(a).diff(s.value, "minutes", !0) / o * 100 : e.add(1, a).isSameOrAfter(n.value) ? y = n.value.diff(e.startOf(a), "minutes", !0) / o * 100 : y = e.endOf(a).diff(e.startOf(a), "minutes", !0) / o * 100;
        let x;
        switch (a) {
          case "week":
            x = e.startOf("week");
            break;
          default:
            x = e[a === "day" ? "date" : a]();
        }
        h.push({
          label: e.format(i[a]),
          value: String(x),
          date: e.toDate(),
          width: String(y) + "%"
        });
        const _ = e;
        e = e.add(1, a), (e.isBefore(n.value) || e.isSame(n.value)) && (c += e.diff(_, "minutes", !0));
      }
      const E = n.value.isSame(n.value.startOf(g)) ? n.value[g]() - 1 : n.value[g]();
      return m.some((y) => y.value === String(E)) || (c += n.value.diff(
        e.subtract(1, a),
        "minutes",
        !0
      ), m.push({
        label: n.value.format(i[g]),
        value: String(b),
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
  setup(t, { emit: s }) {
    const n = t, { precision: l, colors: i } = U(), { timeaxisUnits: u } = dt(), m = () => {
      var e;
      return ((e = n.mileStoneList) == null ? void 0 : e.length) > 0 ? { minHeight: "33%" } : { height: "50%" };
    }, h = (e) => l.value == "week" ? n.mileStoneList.map((o) => a(o.date).getTime()).includes(a(e).getTime()) : n.mileStoneList.map((o) => o.date.getTime()).includes(e.getTime()), g = (e) => l.value == "week" ? n.mileStoneList.find((o) => a(o.date).getTime() === a(e).getTime()) : n.mileStoneList.find((o) => o.date.getTime() === e.getTime());
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
          (C(!0), O(z, null, X(B(u).upperUnits, ({ label: b, value: E, date: f, width: y }, x) => (C(), O("div", {
            key: f.getTime(),
            class: "g-upper-timeunit",
            style: L({
              background: x % 2 === 0 ? B(i).primary : B(i).secondary,
              color: B(i).text,
              width: y
            })
          }, [
            H(e.$slots, "upper-timeunit", {
              label: b,
              value: E,
              date: f
            }, () => [
              et(K(b), 1)
            ])
          ], 4))), 128))
        ]),
        G("div", {
          class: "g-timeunits-container",
          style: m
        }, [
          (C(!0), O(z, null, X(B(u).lowerUnits, ({ label: b, value: E, date: f, width: y }, x) => (C(), O("div", {
            key: f.getTime(),
            class: "g-timeunit",
            style: L({
              background: x % 2 === 0 ? B(i).ternary : B(i).quartenary,
              color: B(i).text,
              flexDirection: B(l) === "hour" ? "column" : "row",
              alignItems: B(l) === "hour" ? "" : "center",
              width: y
            }),
            onClick: (_) => s("onClickTimeUnit", { date: f })
          }, [
            H(e.$slots, "timeunit", {
              label: b,
              value: E,
              date: f
            }, () => [
              et(K(b), 1)
            ]),
            B(l) === "hour" ? (C(), O("div", {
              key: 0,
              class: "g-timeaxis-hour-pin",
              style: L({ background: B(i).text })
            }, null, 4)) : A("", !0)
          ], 12, ce))), 128))
        ]),
        ((c = t.mileStoneList) == null ? void 0 : c.length) > 0 ? (C(), O("div", {
          key: 0,
          class: "g-timeunits-container",
          style: m
        }, [
          (C(!0), O(z, null, X(B(u).lowerUnits, ({ label: b, value: E, date: f, width: y }, x) => (C(), O("div", {
            key: f.getTime(),
            class: "g-timeunit",
            style: L({
              color: B(i).text,
              flexDirection: B(l) === "hour" ? "column" : "row",
              alignItems: B(l) === "hour" ? "" : "center",
              width: y
            })
          }, [
            h(f) ? H(e.$slots, "timeunit", {
              key: 0,
              label: b,
              value: E,
              date: f
            }, () => [
              G("p", de, [
                et("\u25BC "),
                G("span", {
                  class: "milestone-description",
                  onClick: (_) => s("onClickMilestone", { milestone: g(f) })
                }, K(g(f).description), 9, fe)
              ])
            ]) : A("", !0),
            B(l) === "hour" ? (C(), O("div", {
              key: 1,
              class: "g-timeaxis-hour-pin",
              style: L({ background: B(i).text })
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
    const s = t, n = I(() => {
      var u;
      return (u = s.highlightedDates) == null ? void 0 : u.map((m) => m.getTime());
    }), { colors: l } = U(), { timeaxisUnits: i } = dt();
    return (u, m) => (C(), O("div", me, [
      (C(!0), O(z, null, X(B(i).lowerUnits, ({ label: h, value: g, width: a, date: e }) => {
        var o;
        return C(), O("div", {
          key: e.getTime(),
          class: "g-grid-line",
          style: L({
            width: a,
            background: (o = B(n)) != null && o.includes(e.getTime()) ? B(l).hoverHighlight : void 0
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
    const s = t, n = {
      hour: "HH:mm",
      day: "DD. MMM HH:mm",
      week: "DD. MMM HH:mm",
      month: "DD. MMMM YYYY"
    }, l = "cadetblue", { bar: i } = nt(s), { precision: u, font: m, barStart: h, barEnd: g, rowHeight: a } = U(), e = $("0px"), o = $("0px");
    ut(
      () => s.bar,
      async () => {
        var p;
        await St();
        const x = ((p = i == null ? void 0 : i.value) == null ? void 0 : p.ganttBarConfig.id) || "";
        if (!x)
          return;
        const _ = document.getElementById(x), { top: d, left: w } = (_ == null ? void 0 : _.getBoundingClientRect()) || {
          top: 0,
          left: 0
        }, r = Math.max(w, 10);
        e.value = `${d + a.value - 10}px`, o.value = `${r}px`;
      },
      { deep: !0, immediate: !0 }
    );
    const c = I(() => {
      var x, _;
      return ((_ = (x = i == null ? void 0 : i.value) == null ? void 0 : x.ganttBarConfig.style) == null ? void 0 : _.background) || l;
    }), { toDayjs: b } = ot(), E = I(() => {
      var x;
      return (x = i.value) == null ? void 0 : x[h.value];
    }), f = I(() => {
      var x;
      return (x = i.value) == null ? void 0 : x[g.value];
    }), y = I(() => {
      if (!(i != null && i.value))
        return "";
      const x = n[u.value], _ = b(E.value).format(x), d = b(f.value).format(x);
      return `${_} \u2013 ${d}`;
    });
    return (x, _) => (C(), J(Qt, { to: "body" }, [
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
              fontFamily: B(m)
            })
          }, [
            G("div", {
              class: "g-gantt-tooltip-color-dot",
              style: L({ background: B(c) })
            }, null, 4),
            H(x.$slots, "default", {
              bar: B(i),
              barStart: B(E),
              barEnd: B(f)
            }, () => [
              et(K(B(y)), 1)
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
  return typeof t == "function" ? t() : B(t);
}
function ye(t) {
  return t;
}
function be(t) {
  return Jt() ? (te(t), !0) : !1;
}
function we(t, s = !0) {
  ee() ? Lt(t) : s ? t() : St(t);
}
function jt(t) {
  var s;
  const n = ve(t);
  return (s = n == null ? void 0 : n.$el) != null ? s : n;
}
const xe = at ? window : void 0;
at && window.document;
at && window.navigator;
at && window.location;
function Be(t, s = !1) {
  const n = $(), l = () => n.value = Boolean(t());
  return l(), we(l, s), n;
}
const wt = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {}, xt = "__vueuse_ssr_handlers__";
wt[xt] = wt[xt] || {};
wt[xt];
var Et = Object.getOwnPropertySymbols, _e = Object.prototype.hasOwnProperty, De = Object.prototype.propertyIsEnumerable, ke = (t, s) => {
  var n = {};
  for (var l in t)
    _e.call(t, l) && s.indexOf(l) < 0 && (n[l] = t[l]);
  if (t != null && Et)
    for (var l of Et(t))
      s.indexOf(l) < 0 && De.call(t, l) && (n[l] = t[l]);
  return n;
};
function Ee(t, s, n = {}) {
  const l = n, { window: i = xe } = l, u = ke(l, ["window"]);
  let m;
  const h = Be(() => i && "ResizeObserver" in i), g = () => {
    m && (m.disconnect(), m = void 0);
  }, a = ut(() => jt(t), (o) => {
    g(), h.value && i && o && (m = new ResizeObserver(s), m.observe(o, u));
  }, { immediate: !0, flush: "post" }), e = () => {
    g(), a();
  };
  return be(e), {
    isSupported: h,
    stop: e
  };
}
function Ce(t, s = { width: 0, height: 0 }, n = {}) {
  const l = $(s.width), i = $(s.height);
  return Ee(t, ([u]) => {
    l.value = u.contentRect.width, i.value = u.contentRect.height;
  }, n), ut(() => jt(t), (u) => {
    l.value = u ? s.width : 0, i.value = u ? s.height : 0;
  }), {
    width: l,
    height: i
  };
}
var Ct;
(function(t) {
  t.UP = "UP", t.RIGHT = "RIGHT", t.DOWN = "DOWN", t.LEFT = "LEFT", t.NONE = "NONE";
})(Ct || (Ct = {}));
var Oe = Object.defineProperty, Ot = Object.getOwnPropertySymbols, Te = Object.prototype.hasOwnProperty, Me = Object.prototype.propertyIsEnumerable, Tt = (t, s, n) => s in t ? Oe(t, s, { enumerable: !0, configurable: !0, writable: !0, value: n }) : t[s] = n, Se = (t, s) => {
  for (var n in s || (s = {}))
    Te.call(s, n) && Tt(t, n, s[n]);
  if (Ot)
    for (var n of Ot(s))
      Me.call(s, n) && Tt(t, n, s[n]);
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
    const { precision: s, colors: n } = U(), { timeaxisUnits: l } = dt();
    return (i, u) => t.labels ? (C(), O("div", Ge, [
      G("div", $e, [
        (C(!0), O(z, null, X(B(l).lowerUnits, ({ label: m, value: h, date: g, width: a }, e) => (C(), O("div", {
          key: m,
          class: "g-timeunit",
          style: L({
            background: e % 2 === 0 ? B(n).ternary : B(n).quartenary,
            color: B(n).text,
            flexDirection: B(s) === "hour" ? "column" : "row",
            alignItems: B(s) === "hour" ? "" : "center",
            width: a
          })
        }, [
          H(i.$slots, "timeunit", {
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
const Re = (t, s) => {
  const n = t.__vccOpts || t;
  for (const [l, i] of s)
    n[l] = i;
  return n;
}, Ie = /* @__PURE__ */ Re(Ye, [["__scopeId", "data-v-400629df"]]);
function ft(t = U()) {
  const { dateFormat: s, chartSize: n } = t, { chartStartDayjs: l, chartEndDayjs: i, toDayjs: u, format: m } = ot(t), h = I(() => i.value.diff(l.value, "minutes"));
  return {
    mapTimeToPosition: (e) => {
      const o = n.width.value || 0, c = u(e).diff(l.value, "minutes", !0);
      return Math.ceil(c / h.value * o);
    },
    mapPositionToTime: (e) => {
      const o = n.width.value || 0, c = e / o * h.value, b = m(l.value.add(c, "minutes"), s.value);
      if (typeof b == "string")
        return b;
      throw Error;
    }
  };
}
const He = /* @__PURE__ */ N({
  __name: "GGanttDrawTodayLine",
  emits: ["today-line-position-x"],
  setup(t, { emit: s }) {
    const { mapTimeToPosition: n } = ft(), l = I(() => (s("today-line-position-x", { xPosition: n(j().startOf("day").format("DD.MM.YYYY HH:mm")) }), n(j().startOf("day").format("DD.MM.YYYY HH:mm"))));
    return (i, u) => (C(), O("div", {
      class: "today-line",
      style: L({ left: B(l) + "px", top: 0 })
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
  setup(t, { emit: s }) {
    const n = t, { width: l, font: i, colorScheme: u } = nt(n), m = ne(), h = I(
      () => typeof u.value != "string" ? u.value : Dt[u.value] || Dt.default
    ), g = () => {
      var r;
      const d = (r = m.default) == null ? void 0 : r.call(m), w = [];
      return d && d.forEach((p) => {
        var v;
        if ((v = p.props) != null && v.bars) {
          const D = p.props.bars;
          w.push(D);
        } else
          Array.isArray(p.children) && p.children.forEach((D) => {
            var T;
            const k = D;
            if ((T = k == null ? void 0 : k.props) != null && T.bars) {
              const M = k.props.bars;
              w.push(M);
            }
          });
      }), w;
    }, a = $(!1), e = $(!1), o = $(void 0);
    let c;
    const b = (d) => {
      c && clearTimeout(c), c = setTimeout(() => {
        a.value = !0;
      }, 800), o.value = d;
    }, E = () => {
      clearTimeout(c), a.value = !1;
    }, f = (d, w, r, p) => {
      switch (d.type) {
        case "click":
          s("click-bar", { bar: w, e: d, datetime: r });
          break;
        case "mousedown":
          s("mousedown-bar", { bar: w, e: d, datetime: r });
          break;
        case "mouseup":
          s("mouseup-bar", { bar: w, e: d, datetime: r });
          break;
        case "dblclick":
          s("dblclick-bar", { bar: w, e: d, datetime: r });
          break;
        case "mouseenter":
          b(w), s("mouseenter-bar", { bar: w, e: d });
          break;
        case "mouseleave":
          E(), s("mouseleave-bar", { bar: w, e: d });
          break;
        case "dragstart":
          e.value = !0, s("dragstart-bar", { bar: w, e: d });
          break;
        case "drag":
          s("drag-bar", { bar: w, e: d });
          break;
        case "dragend":
          e.value = !1, s("dragend-bar", { bar: w, e: d });
          break;
        case "contextmenu":
          s("contextmenu-bar", { bar: w, e: d, datetime: r });
          break;
      }
    }, y = $(null), x = $(null), _ = Ce(y);
    return st(Ht, g), st(At, {
      ...nt(n),
      colors: h,
      chartSize: _
    }), st(Ut, f), (d, w) => (C(), O(z, null, [
      G("div", {
        style: L([{ display: "flex", "flex-flow": "column" }, t.sticky ? "position: sticky; left:0;z-index:100; background: white;" : ""]),
        class: "g-gantt-wrapper",
        ref_key: "gGanttWrapperRef",
        ref: x
      }, [
        H(d.$slots, "side-menu")
      ], 4),
      G("div", {
        ref_key: "ganttChart",
        ref: y,
        class: "g-gantt-chart",
        style: L({ width: B(l), background: B(h).background, fontFamily: B(i) })
      }, [
        t.hideTimeaxis ? A("", !0) : (C(), J(ge, {
          key: 0,
          "mile-stone-list": t.mileStoneList,
          onOnClickTimeUnit: w[0] || (w[0] = (r) => d.$emit("onClickTimeUnit", r)),
          onOnClickMilestone: w[1] || (w[1] = (r) => d.$emit("onClickMilestone", r))
        }, {
          "upper-timeunit": tt(({ label: r, value: p, date: v }) => [
            H(d.$slots, "upper-timeunit", {
              label: r,
              value: p,
              date: v
            })
          ]),
          timeunit: tt(({ label: r, value: p, date: v }) => [
            H(d.$slots, "timeunit", {
              label: r,
              value: p,
              date: v
            })
          ]),
          _: 3
        }, 8, ["mile-stone-list"])),
        G("div", Ae, [
          t.grid ? (C(), J(he, {
            key: 0,
            "highlighted-dates": t.highlightedDates
          }, null, 8, ["highlighted-dates"])) : A("", !0),
          t.displayTodayLine ? (C(), J(He, {
            key: 1,
            onTodayLinePositionX: w[2] || (w[2] = (r) => s("today-line-position-x", r))
          })) : A("", !0),
          H(d.$slots, "default")
        ]),
        t.hideTimeaxis ? A("", !0) : (C(), J(Ie, {
          key: 1,
          labels: t.footerLabels
        }, null, 8, ["labels"])),
        Bt(pe, {
          "model-value": a.value || e.value,
          bar: o.value
        }, {
          default: tt(() => [
            H(d.$slots, "bar-tooltip", { bar: o.value })
          ]),
          _: 3
        }, 8, ["model-value", "bar"])
      ], 4),
      G("div", null, [
        H(d.$slots, "footer")
      ])
    ], 64));
  }
});
function Mt(t, s = () => null, n = () => null, l = U()) {
  const { barStart: i, barEnd: u, pushOnOverlap: m } = l, h = $(!1);
  let g = 0, a;
  const { mapPositionToTime: e } = ft(l), { toDayjs: o } = ot(l), c = (d) => {
    const w = document.getElementById(t.ganttBarConfig.id);
    if (!w)
      return;
    switch (g = d.clientX - (w.getBoundingClientRect().left || 0), d.target.className) {
      case "g-gantt-bar-handle-left":
        document.body.style.cursor = "ew-resize", a = f;
        break;
      case "g-gantt-bar-handle-right":
        document.body.style.cursor = "ew-resize", a = y;
        break;
      default:
        a = E;
    }
    h.value = !0, window.addEventListener("mousemove", a), window.addEventListener("mouseup", _);
  }, b = () => {
    var r;
    const d = document.getElementById(t.ganttBarConfig.id), w = (r = d == null ? void 0 : d.closest(".g-gantt-row-bars-container")) == null ? void 0 : r.getBoundingClientRect();
    return { barElement: d, barContainer: w };
  }, E = (d) => {
    const { barElement: w, barContainer: r } = b();
    if (!w || !r)
      return;
    const p = w.getBoundingClientRect().width, v = d.clientX - r.left - g, D = v + p;
    if (!x(v, D)) {
      if (t[i.value].substring(0, 10) != e(v).substring(0, 10)) {
        const k = o(t[i.value]), M = o(t[u.value]).diff(k, "minute"), S = e(v).substring(0, 10) + " 00:00";
        t[i.value] = S, t[u.value] = o(S).add(M, "minute").format("DD.MM.YYYY HH:mm");
      }
      s(d, t);
    }
  }, f = (d) => {
    const { barElement: w, barContainer: r } = b();
    if (!w || !r)
      return;
    const p = d.clientX - r.left, v = e(p);
    if (!o(v).isSameOrAfter(o(t, "end"))) {
      if (t[i.value].substring(0, 10) != e(p).substring(0, 10)) {
        const D = e(p).substring(0, 10) + " 00:00";
        t[i.value] = D;
      }
      s(d, t);
    }
  }, y = (d) => {
    const { barElement: w, barContainer: r } = b();
    if (!w || !r)
      return;
    const p = d.clientX - r.left, v = e(p);
    if (!o(v).isSameOrBefore(o(t, "start"))) {
      if (t[i.value].substring(0, 10) != e(p).substring(0, 10)) {
        const D = e(p).substring(0, 10) + " 23:59";
        t[u.value] = D;
      }
      s(d, t);
    }
  }, x = (d, w) => {
    if (!m.value)
      return !1;
    const r = t.ganttBarConfig.dragLimitLeft, p = t.ganttBarConfig.dragLimitRight;
    return d && r != null && d < r || w && p != null && w > p;
  }, _ = (d) => {
    h.value = !1, document.body.style.cursor = "", window.removeEventListener("mousemove", a), window.removeEventListener("mouseup", _), n(d, t);
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
  const t = U(), s = zt(), n = Nt(), { pushOnOverlap: l, barStart: i, barEnd: u, noOverlap: m, dateFormat: h } = t, g = /* @__PURE__ */ new Map(), { toDayjs: a, format: e } = ot(), o = (r, p) => {
    const { initDrag: v } = Mt(r, b, _, t);
    n({ ...p, type: "dragstart" }, r), v(p), d(r);
  }, c = (r, p) => {
    const v = r.ganttBarConfig.bundle;
    v != null && (s().forEach((D) => {
      D.forEach((k) => {
        if (k.ganttBarConfig.bundle === v) {
          const T = k === r ? _ : () => null, { initDrag: M } = Mt(k, b, T, t);
          M(p), d(k);
        }
      });
    }), n({ ...p, type: "dragstart" }, r));
  }, b = (r, p) => {
    n({ ...r, type: "drag" }, p), E(p);
  }, E = (r) => {
    if (!(l != null && l.value))
      return;
    let p = r, { overlapBar: v, overlapType: D } = f(p);
    for (; v; ) {
      d(v);
      const k = a(p[i.value]), T = a(p[u.value]), M = a(v[i.value]), S = a(v[u.value]);
      let Y;
      switch (D) {
        case "left":
          Y = S.diff(k, "minutes", !0), v[u.value] = e(p[i.value], h.value), v[i.value] = e(
            M.subtract(Y, "minutes"),
            h.value
          );
          break;
        case "right":
          Y = T.diff(M, "minutes", !0), v[i.value] = e(T, h.value), v[u.value] = e(
            S.add(Y, "minutes"),
            h.value
          );
          break;
        default:
          console.warn(
            "Vue-Ganttastic: One bar is inside of the other one! This should never occur while push-on-overlap is active!"
          );
          return;
      }
      v && (D === "left" || D === "right") && y(v, Y, D), p = v, { overlapBar: v, overlapType: D } = f(v);
    }
  }, f = (r) => {
    let p, v, D;
    const k = s().find((R) => R.includes(r)) || [], T = a(r[i.value]), M = a(r[u.value]);
    return { overlapBar: k.find((R) => {
      if (R === r)
        return !1;
      const P = a(R[i.value]), q = a(R[u.value]);
      return p = T.isBetween(P, q), v = M.isBetween(P, q), D = P.isBetween(T, M) || q.isBetween(T, M), p || v || D;
    }), overlapType: p ? "left" : v ? "right" : D ? "between" : null };
  }, y = (r, p, v) => {
    d(r), r.ganttBarConfig.bundle && s().forEach((D) => {
      D.forEach((k) => {
        k.ganttBarConfig.bundle === r.ganttBarConfig.bundle && k !== r && (d(k), x(k, p, v));
      });
    });
  }, x = (r, p, v) => {
    switch (v) {
      case "left":
        r[i.value] = e(
          a(r, "start").subtract(p, "minutes"),
          h.value
        ), r[u.value] = e(
          a(r, "end").subtract(p, "minutes"),
          h.value
        );
        break;
      case "right":
        r[i.value] = e(
          a(r, "start").add(p, "minutes"),
          h.value
        ), r[u.value] = e(a(r, "end").add(p, "minutes"), h.value);
    }
    E(r);
  }, _ = (r, p) => {
    w();
    const v = {
      ...r,
      type: "dragend"
    };
    n(v, p, void 0, new Map(g)), g.clear();
  }, d = (r) => {
    if (!g.has(r)) {
      const p = r[i.value], v = r[u.value];
      g.set(r, { oldStart: p, oldEnd: v });
    }
  }, w = () => {
    if (l.value || !m.value)
      return;
    let r = !1;
    g.forEach((p, v) => {
      const { overlapBar: D } = f(v);
      D != null && (r = !0);
    }), r && g.forEach(({ oldStart: p, oldEnd: v }, D) => {
      D[i.value] = p, D[u.value] = v;
    });
  };
  return {
    initDragOfBar: o,
    initDragOfBundle: c
  };
}
function Fe() {
  const { pushOnOverlap: t } = U(), s = zt(), n = (m) => {
    const h = [];
    return m != null && s().forEach((g) => {
      g.forEach((a) => {
        a.ganttBarConfig.bundle === m && h.push(a);
      });
    }), h;
  }, l = (m) => {
    if (!t.value || m.ganttBarConfig.pushOnOverlap === !1)
      return;
    for (const g of ["left", "right"]) {
      const a = g, { gapDistanceSoFar: e, bundleBarsAndGapDist: o } = i(
        m,
        0,
        a
      );
      let c = e;
      const b = o;
      if (!b)
        continue;
      for (let f = 0; f < b.length; f++) {
        const y = b[f].bar, x = b[f].gapDistance;
        n(y.ganttBarConfig.bundle).filter(
          (d) => d !== y
        ).forEach((d) => {
          const w = i(d, x, a), r = w.gapDistanceSoFar, p = w.bundleBarsAndGapDist;
          r != null && (!c || r < c) && (c = r), p.forEach((v) => {
            b.find((D) => D.bar === v.bar) || b.push(v);
          });
        });
      }
      const E = document.getElementById(m.ganttBarConfig.id);
      c != null && a === "left" ? m.ganttBarConfig.dragLimitLeft = E.offsetLeft - c : c != null && a === "right" && (m.ganttBarConfig.dragLimitRight = E.offsetLeft + E.offsetWidth + c);
    }
    n(m.ganttBarConfig.bundle).forEach((g) => {
      g.ganttBarConfig.dragLimitLeft = m.ganttBarConfig.dragLimitLeft, g.ganttBarConfig.dragLimitRight = m.ganttBarConfig.dragLimitRight;
    });
  }, i = (m, h = 0, g) => {
    const a = m.ganttBarConfig.bundle ? [{ bar: m, gapDistance: h }] : [];
    let e = m, o = u(e, g);
    if (g === "left")
      for (; o; ) {
        const c = document.getElementById(e.ganttBarConfig.id), b = document.getElementById(o.ganttBarConfig.id), E = b.offsetLeft + b.offsetWidth;
        if (h += c.offsetLeft - E, o.ganttBarConfig.immobile)
          return { gapDistanceSoFar: h, bundleBarsAndGapDist: a };
        o.ganttBarConfig.bundle && a.push({
          bar: o,
          gapDistance: h
        }), e = o, o = u(o, "left");
      }
    if (g === "right")
      for (; o; ) {
        const c = document.getElementById(e.ganttBarConfig.id), b = document.getElementById(o.ganttBarConfig.id), E = c.offsetLeft + c.offsetWidth;
        if (h += b.offsetLeft - E, o.ganttBarConfig.immobile)
          return { gapDistanceSoFar: h, bundleBarsAndGapDist: a };
        o.ganttBarConfig.bundle && a.push({
          bar: o,
          gapDistance: h
        }), e = o, o = u(o, "right");
      }
    return { gapDistanceSoFar: null, bundleBarsAndGapDist: a };
  }, u = (m, h) => {
    const g = document.getElementById(m.ganttBarConfig.id), a = s().find((o) => o.includes(m)) || [];
    let e = [];
    return h === "left" ? e = a.filter((o) => {
      const c = document.getElementById(o.ganttBarConfig.id);
      return c && c.offsetLeft < g.offsetLeft && o.ganttBarConfig.pushOnOverlap !== !1;
    }) : e = a.filter((o) => {
      const c = document.getElementById(o.ganttBarConfig.id);
      return c && c.offsetLeft > g.offsetLeft && o.ganttBarConfig.pushOnOverlap !== !1;
    }), e.length > 0 ? e.reduce((o, c) => {
      const b = document.getElementById(o.ganttBarConfig.id), E = document.getElementById(c.ganttBarConfig.id), f = Math.abs(b.offsetLeft - g.offsetLeft), y = Math.abs(E.offsetLeft - g.offsetLeft);
      return f < y ? o : c;
    }, e[0]) : null;
  };
  return {
    setDragLimitsOfGanttBar: l
  };
}
const je = ["id"], ze = { class: "g-gantt-bar-label" }, Ne = { style: { "z-index": "100" } }, Ve = /* @__PURE__ */ G("div", { class: "g-gantt-bar-handle-left" }, null, -1), qe = /* @__PURE__ */ G("div", { class: "g-gantt-bar-handle-right" }, null, -1), We = /* @__PURE__ */ N({
  __name: "GGanttBar",
  props: {
    bar: null
  },
  setup(t) {
    const s = t, n = Nt(), l = U(), { rowHeight: i } = l, { bar: u } = nt(s), { mapTimeToPosition: m, mapPositionToTime: h } = ft(), { initDragOfBar: g, initDragOfBundle: a } = Pe(), { setDragLimitsOfGanttBar: e } = Fe(), o = $(!1), c = I(() => u.value.ganttBarConfig);
    function b(k) {
      c.value.bundle != null ? a(u.value, k) : g(u.value, k), o.value = !0;
    }
    const E = () => {
      e(u.value), !c.value.immobile && (window.addEventListener("mousemove", b, {
        once: !0
      }), window.addEventListener(
        "mouseup",
        () => {
          window.removeEventListener("mousemove", b), o.value = !1;
        },
        { once: !0 }
      ));
    }, f = lt(Pt), y = (k) => {
      var S;
      k.preventDefault(), k.type === "mousedown" && E();
      const T = (S = f == null ? void 0 : f.value) == null ? void 0 : S.getBoundingClientRect();
      if (!T)
        return;
      const M = h(k.clientX - T.left);
      n(k, u.value, M);
    }, { barStart: x, barEnd: _, width: d, chartStart: w, chartEnd: r, chartSize: p } = l, v = $(0), D = $(0);
    return Lt(() => {
      ut(
        [u, d, w, r, p.width],
        () => {
          v.value = m(u.value[x.value]), D.value = m(u.value[_.value]);
        },
        { deep: !0, immediate: !0 }
      );
    }), (k, T) => (C(), O("div", {
      id: B(c).id,
      class: "g-gantt-bar",
      style: L({
        ...B(c).style,
        position: "absolute",
        top: `${B(i) * 0.1}px`,
        left: `${v.value}px`,
        width: `${D.value - v.value}px`,
        height: `${B(i) * 0.8}px`,
        zIndex: o.value ? 3 : 2
      }),
      onMousedown: y,
      onClick: y,
      onDblclick: y,
      onMouseenter: y,
      onMouseleave: y,
      onContextmenu: y
    }, [
      G("div", ze, [
        H(k.$slots, "default", { bar: B(u) }, () => [
          G("div", Ne, K(B(c).label || ""), 1),
          B(c).progress ? (C(), O("div", {
            key: 0,
            style: L([{ position: "absolute", height: "100%", left: "0" }, {
              width: B(c).progress + "%",
              backgroundColor: B(c).progressColor
            }])
          }, null, 4)) : A("", !0)
        ])
      ]),
      B(c).hasHandles ? (C(), O(z, { key: 0 }, [
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
  setup(t, { emit: s }) {
    const n = t, { rowHeight: l, colors: i } = U(), { highlightOnHover: u } = nt(n), m = $(!1), h = I(() => ({
      height: `${l.value}px`,
      background: (u == null ? void 0 : u.value) && m.value ? i.value.hoverHighlight : null
    })), { mapPositionToTime: g } = ft(), a = $(null);
    st(Pt, a);
    const e = (o) => {
      var f;
      const c = (f = a.value) == null ? void 0 : f.getBoundingClientRect();
      if (!c) {
        console.error("Vue-Ganttastic: failed to find bar container element for row.");
        return;
      }
      const b = o.clientX - c.left, E = g(b);
      s("drop", { e: o, datetime: E });
    };
    return (o, c) => (C(), O("div", {
      class: "g-gantt-row",
      style: L(B(h)),
      onDragover: c[0] || (c[0] = oe((b) => m.value = !0, ["prevent"])),
      onDragleave: c[1] || (c[1] = (b) => m.value = !1),
      onDrop: c[2] || (c[2] = (b) => e(b)),
      onMouseover: c[3] || (c[3] = (b) => m.value = !0),
      onMouseleave: c[4] || (c[4] = (b) => m.value = !1)
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
            (C(!0), O(z, null, X(t.bars, (b) => (C(), J(We, {
              key: b.ganttBarConfig.id,
              bar: b
            }, {
              default: tt(() => [
                H(o.$slots, "bar-label", { bar: b })
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
    const { rowHeight: s, colors: n } = U(), { timeaxisUnits: l } = dt();
    return (i, u) => (C(), O("div", {
      class: "g-gantt-row",
      style: L({ height: B(s) + "px" })
    }, [
      G("div", Gt({
        ref: "barContainer",
        class: "g-gantt-row-bars-container"
      }, i.$attrs), [
        (C(!0), O(z, null, X(B(l).lowerUnits, ({ label: m, width: h, date: g }, a) => (C(), O("div", {
          key: g.getTime(),
          class: "g-timeunit",
          style: L({
            color: B(n).text,
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
  install(t, s) {
    Qe(), t.component("GGanttChart", Ue), t.component("GGanttRow", Xe), t.component("GGanttLabelRow", Ke);
  }
};
function V(t, s = "top") {
  if (!t || typeof document > "u")
    return;
  const n = document.head, l = document.createElement("style");
  s === "top" && n.firstChild ? n.insertBefore(l, n.firstChild) : n.appendChild(l), l.appendChild(document.createTextNode(t));
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
.milestone-description {
  margin: 0;
}
.milestone-description > span {
  position: absolute;
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
  Ke as GGanttLabelRow,
  Xe as GGanttRow,
  en as default,
  Qe as extendDayjs,
  en as ganttastic
};
