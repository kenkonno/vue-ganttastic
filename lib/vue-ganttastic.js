import N from "dayjs";
import { inject as st, computed as I, defineComponent as K, openBlock as k, createElementBlock as L, createElementVNode as G, Fragment as X, renderList as rt, unref as O, normalizeStyle as U, renderSlot as P, createTextVNode as vt, toDisplayString as ot, createCommentVNode as W, toRefs as Z, ref as $, watch as lt, nextTick as kt, createBlock as it, Teleport as Qt, createVNode as wt, Transition as Xt, withCtx as q, getCurrentScope as Zt, onScopeDispose as Jt, getCurrentInstance as te, onMounted as Tt, useSlots as ee, provide as at, withModifiers as ne, mergeProps as ae, TransitionGroup as re } from "vue";
var ut = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {}, Lt = { exports: {} };
(function(t, i) {
  (function(n, c) {
    t.exports = c();
  })(ut, function() {
    return function(n, c) {
      c.prototype.isSameOrBefore = function(s, l) {
        return this.isSame(s, l) || this.isBefore(s, l);
      };
    };
  });
})(Lt);
const oe = Lt.exports;
var $t = { exports: {} };
(function(t, i) {
  (function(n, c) {
    t.exports = c();
  })(ut, function() {
    return function(n, c) {
      c.prototype.isSameOrAfter = function(s, l) {
        return this.isSame(s, l) || this.isAfter(s, l);
      };
    };
  });
})($t);
const ie = $t.exports;
var Yt = { exports: {} };
(function(t, i) {
  (function(n, c) {
    t.exports = c();
  })(ut, function() {
    return function(n, c, s) {
      c.prototype.isBetween = function(l, f, g, d) {
        var a = s(l), e = s(f), r = (d = d || "()")[0] === "(", u = d[1] === ")";
        return (r ? this.isAfter(a, g) : !this.isBefore(a, g)) && (u ? this.isBefore(e, g) : !this.isAfter(e, g)) || (r ? this.isBefore(a, g) : !this.isAfter(a, g)) && (u ? this.isAfter(e, g) : !this.isBefore(e, g));
      };
    };
  });
})(Yt);
const se = Yt.exports;
var Gt = { exports: {} };
(function(t, i) {
  (function(n, c) {
    t.exports = c();
  })(ut, function() {
    var n = { LTS: "h:mm:ss A", LT: "h:mm A", L: "MM/DD/YYYY", LL: "MMMM D, YYYY", LLL: "MMMM D, YYYY h:mm A", LLLL: "dddd, MMMM D, YYYY h:mm A" }, c = /(\[[^[]*\])|([-_:/.,()\s]+)|(A|a|YYYY|YY?|MM?M?M?|Do|DD?|hh?|HH?|mm?|ss?|S{1,3}|z|ZZ?)/g, s = /\d\d/, l = /\d\d?/, f = /\d*[^-_:/,()\s\d]+/, g = {}, d = function(v) {
      return (v = +v) + (v > 68 ? 1900 : 2e3);
    }, a = function(v) {
      return function(b) {
        this[v] = +b;
      };
    }, e = [/[+-]\d\d:?(\d\d)?|Z/, function(v) {
      (this.zone || (this.zone = {})).offset = function(b) {
        if (!b || b === "Z")
          return 0;
        var B = b.match(/([+-]|\d\d)/g), h = 60 * B[1] + (+B[2] || 0);
        return h === 0 ? 0 : B[0] === "+" ? -h : h;
      }(v);
    }], r = function(v) {
      var b = g[v];
      return b && (b.indexOf ? b : b.s.concat(b.f));
    }, u = function(v, b) {
      var B, h = g.meridiem;
      if (h) {
        for (var p = 1; p <= 24; p += 1)
          if (v.indexOf(h(p, 0, b)) > -1) {
            B = p > 12;
            break;
          }
      } else
        B = v === (b ? "pm" : "PM");
      return B;
    }, w = { A: [f, function(v) {
      this.afternoon = u(v, !1);
    }], a: [f, function(v) {
      this.afternoon = u(v, !0);
    }], S: [/\d/, function(v) {
      this.milliseconds = 100 * +v;
    }], SS: [s, function(v) {
      this.milliseconds = 10 * +v;
    }], SSS: [/\d{3}/, function(v) {
      this.milliseconds = +v;
    }], s: [l, a("seconds")], ss: [l, a("seconds")], m: [l, a("minutes")], mm: [l, a("minutes")], H: [l, a("hours")], h: [l, a("hours")], HH: [l, a("hours")], hh: [l, a("hours")], D: [l, a("day")], DD: [s, a("day")], Do: [f, function(v) {
      var b = g.ordinal, B = v.match(/\d+/);
      if (this.day = B[0], b)
        for (var h = 1; h <= 31; h += 1)
          b(h).replace(/\[|\]/g, "") === v && (this.day = h);
    }], M: [l, a("month")], MM: [s, a("month")], MMM: [f, function(v) {
      var b = r("months"), B = (r("monthsShort") || b.map(function(h) {
        return h.slice(0, 3);
      })).indexOf(v) + 1;
      if (B < 1)
        throw new Error();
      this.month = B % 12 || B;
    }], MMMM: [f, function(v) {
      var b = r("months").indexOf(v) + 1;
      if (b < 1)
        throw new Error();
      this.month = b % 12 || b;
    }], Y: [/[+-]?\d+/, a("year")], YY: [s, function(v) {
      this.year = d(v);
    }], YYYY: [/\d{4}/, a("year")], Z: e, ZZ: e };
    function D(v) {
      var b, B;
      b = v, B = g && g.formats;
      for (var h = (v = b.replace(/(\[[^\]]+])|(LTS?|l{1,4}|L{1,4})/g, function(E, C, S) {
        var M = S && S.toUpperCase();
        return C || B[S] || n[S] || B[M].replace(/(\[[^\]]+])|(MMMM|MM|DD|dddd)/g, function(T, Y, R) {
          return Y || R.slice(1);
        });
      })).match(c), p = h.length, x = 0; x < p; x += 1) {
        var o = h[x], m = w[o], y = m && m[0], _ = m && m[1];
        h[x] = _ ? { regex: y, parser: _ } : o.replace(/^\[|\]$/g, "");
      }
      return function(E) {
        for (var C = {}, S = 0, M = 0; S < p; S += 1) {
          var T = h[S];
          if (typeof T == "string")
            M += T.length;
          else {
            var Y = T.regex, R = T.parser, j = E.slice(M), z = Y.exec(j)[0];
            R.call(C, z), E = E.replace(z, "");
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
    return function(v, b, B) {
      B.p.customParseFormat = !0, v && v.parseTwoDigitYear && (d = v.parseTwoDigitYear);
      var h = b.prototype, p = h.parse;
      h.parse = function(x) {
        var o = x.date, m = x.utc, y = x.args;
        this.$u = m;
        var _ = y[1];
        if (typeof _ == "string") {
          var E = y[2] === !0, C = y[3] === !0, S = E || C, M = y[2];
          C && (M = y[2]), g = this.$locale(), !E && M && (g = B.Ls[M]), this.$d = function(j, z, F) {
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
          }(o, _, m), this.init(), M && M !== !0 && (this.$L = this.locale(M).$L), S && o != this.format(_) && (this.$d = new Date("")), g = {};
        } else if (_ instanceof Array)
          for (var T = _.length, Y = 1; Y <= T; Y += 1) {
            y[1] = _[Y - 1];
            var R = B.apply(this, y);
            if (R.isValid()) {
              this.$d = R.$d, this.$L = R.$L, this.init();
              break;
            }
            Y === T && (this.$d = new Date(""));
          }
        else
          p.call(this, x);
      };
    };
  });
})(Gt);
const le = Gt.exports, It = Symbol("CHART_ROWS_KEY"), Rt = Symbol("CONFIG_KEY"), At = Symbol("EMIT_BAR_EVENT_KEY"), Ht = Symbol("BAR_CONTAINER_KEY");
function H() {
  const t = st(Rt);
  if (!t)
    throw Error("Failed to inject config!");
  return t;
}
const Pt = "YYYY-MM-DD HH:mm";
function J(t = H()) {
  const { chartStart: i, chartEnd: n, barStart: c, barEnd: s, dateFormat: l } = t, f = I(() => d(i.value)), g = I(() => d(n.value)), d = (e, r) => {
    let u;
    if (r !== void 0 && typeof e != "string" && !(e instanceof Date) && (u = r === "start" ? e[c.value] : e[s.value]), typeof e == "string")
      u = e;
    else if (e instanceof Date)
      return N(e);
    const w = l.value || Pt;
    return N(u, w, !0);
  };
  return {
    chartStartDayjs: f,
    chartEndDayjs: g,
    toDayjs: d,
    format: (e, r) => r === !1 ? e instanceof Date ? e : N(e).toDate() : (typeof e == "string" || e instanceof Date ? d(e) : e).format(r)
  };
}
function Ut() {
  const { precision: t } = H(), { chartStartDayjs: i, chartEndDayjs: n } = J(), c = I(() => {
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
      const f = [], g = [], d = c.value === "day" ? "date" : c.value, a = t.value;
      let e = i.value.startOf(a);
      const r = n.value.diff(i.value, "minutes", !0);
      let u = 0, w = e[d]();
      for (; e.isBefore(n.value) || e.isSame(n.value); ) {
        if (e[d]() !== w) {
          let h = 0;
          if (f.length === 0)
            h = e.startOf(d).diff(i.value, "minutes", !0) / r * 100;
          else if (e.isSameOrAfter(n.value))
            h = n.value.diff(
              e.subtract(1, d).startOf(d),
              "minutes",
              !0
            ) / r * 100;
          else {
            const x = e.startOf(d), o = e.subtract(1, d).startOf(d);
            h = x.diff(o, "minutes", !0) / r * 100;
          }
          const p = e.subtract(1, d);
          f.push({
            label: p.format(s[d]),
            value: String(w),
            date: p.toDate(),
            width: String(h) + "%"
          }), u = 0, w = e[d]();
        }
        let b = 0;
        g.length === 0 ? b = e.endOf(a).diff(i.value, "minutes", !0) / r * 100 : e.add(1, a).isSameOrAfter(n.value) ? b = n.value.diff(e.startOf(a), "minutes", !0) / r * 100 : b = e.endOf(a).diff(e.startOf(a), "minutes", !0) / r * 100, g.push({
          label: e.format(s[a]),
          value: String(e[a === "day" ? "date" : a]()),
          date: e.toDate(),
          width: String(b) + "%"
        });
        const B = e;
        e = e.add(1, a), (e.isBefore(n.value) || e.isSame(n.value)) && (u += e.diff(B, "minutes", !0));
      }
      const D = n.value.isSame(n.value.startOf(d)) ? n.value[d]() - 1 : n.value[d]();
      return f.some((b) => b.value === String(D)) || (u += n.value.diff(
        e.subtract(1, a),
        "minutes",
        !0
      ), f.push({
        label: n.value.format(s[d]),
        value: String(w),
        date: n.value.toDate(),
        width: `${u / r * 100}%`
      })), { upperUnits: f, lowerUnits: g };
    })
  };
}
const ue = { class: "g-timeaxis" }, ce = { class: "g-timeunits-container" }, de = { class: "g-timeunits-container" }, fe = /* @__PURE__ */ K({
  __name: "GGanttTimeaxis",
  setup(t) {
    const { precision: i, colors: n } = H(), { timeaxisUnits: c } = Ut();
    return (s, l) => (k(), L("div", ue, [
      G("div", ce, [
        (k(!0), L(X, null, rt(O(c).upperUnits, ({ label: f, value: g, date: d, width: a }, e) => (k(), L("div", {
          key: f,
          class: "g-upper-timeunit",
          style: U({
            background: e % 2 === 0 ? O(n).primary : O(n).secondary,
            color: O(n).text,
            width: a
          })
        }, [
          P(s.$slots, "upper-timeunit", {
            label: f,
            value: g,
            date: d
          }, () => [
            vt(ot(f), 1)
          ])
        ], 4))), 128))
      ]),
      G("div", de, [
        (k(!0), L(X, null, rt(O(c).lowerUnits, ({ label: f, value: g, date: d, width: a }, e) => (k(), L("div", {
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
          P(s.$slots, "timeunit", {
            label: f,
            value: g,
            date: d
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
    return (c, s) => (k(), L("div", ge, [
      (k(!0), L(X, null, rt(O(n).lowerUnits, ({ label: l, value: f, width: g }) => {
        var d;
        return k(), L("div", {
          key: l,
          class: "g-grid-line",
          style: U({
            width: g,
            background: (d = t.highlightedUnits) != null && d.includes(Number(f)) ? O(i).hoverHighlight : void 0
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
    }, c = "cadetblue", { bar: s } = Z(i), { precision: l, font: f, barStart: g, barEnd: d, rowHeight: a } = H(), e = $("0px"), r = $("0px");
    lt(
      () => i.bar,
      async () => {
        var m;
        await kt();
        const B = ((m = s == null ? void 0 : s.value) == null ? void 0 : m.ganttBarConfig.id) || "";
        if (!B)
          return;
        const h = document.getElementById(B), { top: p, left: x } = (h == null ? void 0 : h.getBoundingClientRect()) || {
          top: 0,
          left: 0
        }, o = Math.max(x, 10);
        e.value = `${p + a.value - 10}px`, r.value = `${o}px`;
      },
      { deep: !0, immediate: !0 }
    );
    const u = I(() => {
      var B, h;
      return ((h = (B = s == null ? void 0 : s.value) == null ? void 0 : B.ganttBarConfig.style) == null ? void 0 : h.background) || c;
    }), { toDayjs: w } = J(), D = I(() => {
      var B;
      return (B = s.value) == null ? void 0 : B[g.value];
    }), v = I(() => {
      var B;
      return (B = s.value) == null ? void 0 : B[d.value];
    }), b = I(() => {
      if (!(s != null && s.value))
        return "";
      const B = n[l.value], h = w(D.value).format(B), p = w(v.value).format(B);
      return `${h} \u2013 ${p}`;
    });
    return (B, h) => (k(), it(Qt, { to: "body" }, [
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
              left: r.value,
              fontFamily: O(f)
            })
          }, [
            G("div", {
              class: "g-gantt-tooltip-color-dot",
              style: U({ background: O(u) })
            }, null, 4),
            P(B.$slots, "default", {
              bar: O(s),
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
  te() ? Tt(t) : i ? t() : kt(t);
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
  const n = $(), c = () => n.value = Boolean(t());
  return c(), be(c, i), n;
}
const yt = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {}, bt = "__vueuse_ssr_handlers__";
yt[bt] = yt[bt] || {};
yt[bt];
var Ot = Object.getOwnPropertySymbols, xe = Object.prototype.hasOwnProperty, _e = Object.prototype.propertyIsEnumerable, Ee = (t, i) => {
  var n = {};
  for (var c in t)
    xe.call(t, c) && i.indexOf(c) < 0 && (n[c] = t[c]);
  if (t != null && Ot)
    for (var c of Ot(t))
      i.indexOf(c) < 0 && _e.call(t, c) && (n[c] = t[c]);
  return n;
};
function Oe(t, i, n = {}) {
  const c = n, { window: s = we } = c, l = Ee(c, ["window"]);
  let f;
  const g = Be(() => s && "ResizeObserver" in s), d = () => {
    f && (f.disconnect(), f = void 0);
  }, a = lt(() => jt(t), (r) => {
    d(), g.value && s && r && (f = new ResizeObserver(i), f.observe(r, l));
  }, { immediate: !0, flush: "post" }), e = () => {
    d(), a();
  };
  return ye(e), {
    isSupported: g,
    stop: e
  };
}
function De(t, i = { width: 0, height: 0 }, n = {}) {
  const c = $(i.width), s = $(i.height);
  return Oe(t, ([l]) => {
    c.value = l.contentRect.width, s.value = l.contentRect.height;
  }, n), lt(() => jt(t), (l) => {
    c.value = l ? i.width : 0, s.value = l ? i.height : 0;
  }), {
    width: c,
    height: s
  };
}
var Dt;
(function(t) {
  t.UP = "UP", t.RIGHT = "RIGHT", t.DOWN = "DOWN", t.LEFT = "LEFT", t.NONE = "NONE";
})(Dt || (Dt = {}));
var Ce = Object.defineProperty, Ct = Object.getOwnPropertySymbols, Se = Object.prototype.hasOwnProperty, Me = Object.prototype.propertyIsEnumerable, St = (t, i, n) => i in t ? Ce(t, i, { enumerable: !0, configurable: !0, writable: !0, value: n }) : t[i] = n, ke = (t, i) => {
  for (var n in i || (i = {}))
    Se.call(i, n) && St(t, n, i[n]);
  if (Ct)
    for (var n of Ct(i))
      Me.call(i, n) && St(t, n, i[n]);
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
ke({
  linear: ve
}, Te);
const Le = { style: { display: "flex", overflow: "scroll" } }, $e = { style: { display: "flex" } }, Ye = { style: { display: "flex", "flex-flow": "column" } }, Ge = /* @__PURE__ */ G("div", {
  class: "g-timeaxis",
  style: { width: "auto" }
}, " table headers ", -1), Ie = { class: "g-gantt-rows-container" }, Re = /* @__PURE__ */ K({
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
    const n = t, { width: c, font: s, colorScheme: l } = Z(n), f = ee(), g = I(
      () => typeof l.value != "string" ? l.value : _t[l.value] || _t.default
    ), d = () => {
      var x;
      const h = (x = f.default) == null ? void 0 : x.call(f), p = [];
      return h && h.forEach((o) => {
        var m;
        if ((m = o.props) != null && m.bars) {
          const y = o.props.bars;
          p.push(y);
        } else
          Array.isArray(o.children) && o.children.forEach((y) => {
            var E;
            const _ = y;
            if ((E = _ == null ? void 0 : _.props) != null && E.bars) {
              const C = _.props.bars;
              p.push(C);
            }
          });
      }), p;
    }, a = $(!1), e = $(!1), r = $(void 0);
    let u;
    const w = (h) => {
      u && clearTimeout(u), u = setTimeout(() => {
        a.value = !0;
      }, 800), r.value = h;
    }, D = () => {
      clearTimeout(u), a.value = !1;
    }, v = (h, p, x, o) => {
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
          w(p), i("mouseenter-bar", { bar: p, e: h });
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
    }, b = $(null), B = De(b);
    return at(It, d), at(Rt, {
      ...Z(n),
      colors: g,
      chartSize: B
    }), at(At, v), (h, p) => (k(), L("div", Le, [
      G("div", $e, [
        G("div", Ye, [
          Ge,
          P(h.$slots, "rows")
        ]),
        G("div", {
          ref_key: "ganttChart",
          ref: b,
          class: "g-gantt-chart",
          style: U({ width: O(c), background: O(g).background, fontFamily: O(s) })
        }, [
          t.hideTimeaxis ? W("", !0) : (k(), it(fe, { key: 0 }, {
            "upper-timeunit": q(({ label: x, value: o, date: m }) => [
              P(h.$slots, "upper-timeunit", {
                label: x,
                value: o,
                date: m
              })
            ]),
            timeunit: q(({ label: x, value: o, date: m }) => [
              P(h.$slots, "timeunit", {
                label: x,
                value: o,
                date: m
              })
            ]),
            _: 3
          })),
          t.grid ? (k(), it(he, {
            key: 1,
            "highlighted-units": t.highlightedUnits
          }, null, 8, ["highlighted-units"])) : W("", !0),
          G("div", Ie, [
            P(h.$slots, "default")
          ]),
          wt(pe, {
            "model-value": a.value || e.value,
            bar: r.value
          }, {
            default: q(() => [
              P(h.$slots, "bar-tooltip", { bar: r.value })
            ]),
            _: 3
          }, 8, ["model-value", "bar"])
        ], 4)
      ])
    ]));
  }
});
function Bt(t = H()) {
  const { dateFormat: i, chartSize: n } = t, { chartStartDayjs: c, chartEndDayjs: s, toDayjs: l, format: f } = J(t), g = I(() => s.value.diff(c.value, "minutes"));
  return {
    mapTimeToPosition: (e) => {
      const r = n.width.value || 0, u = l(e).diff(c.value, "minutes", !0);
      return Math.ceil(u / g.value * r);
    },
    mapPositionToTime: (e) => {
      const r = n.width.value || 0, u = e / r * g.value, w = f(c.value.add(u, "minutes"), i.value);
      if (typeof w == "string")
        return w;
      throw Error;
    }
  };
}
function Mt(t, i = () => null, n = () => null, c = H()) {
  const { barStart: s, barEnd: l, pushOnOverlap: f } = c, g = $(!1);
  let d = 0, a;
  const { mapPositionToTime: e } = Bt(c), { toDayjs: r } = J(c), u = (p) => {
    const x = document.getElementById(t.ganttBarConfig.id);
    if (!x)
      return;
    switch (d = p.clientX - (x.getBoundingClientRect().left || 0), p.target.className) {
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
    var o;
    const p = document.getElementById(t.ganttBarConfig.id), x = (o = p == null ? void 0 : p.closest(".g-gantt-row-bars-container")) == null ? void 0 : o.getBoundingClientRect();
    return { barElement: p, barContainer: x };
  }, D = (p) => {
    const { barElement: x, barContainer: o } = w();
    if (!x || !o)
      return;
    const m = x.getBoundingClientRect().width, y = p.clientX - o.left - d, _ = y + m;
    if (!B(y, _)) {
      if (t[s.value].substring(0, 10) != e(y).substring(0, 10)) {
        const E = r(t[s.value]), S = r(t[l.value]).diff(E, "minute"), M = e(y).substring(0, 10) + " 00:00";
        t[s.value] = M, t[l.value] = r(M).add(S, "minute").format("DD.MM.YYYY HH:mm");
      }
      i(p, t);
    }
  }, v = (p) => {
    const { barElement: x, barContainer: o } = w();
    if (!x || !o)
      return;
    const m = p.clientX - o.left, y = e(m);
    if (!r(y).isSameOrAfter(r(t, "end"))) {
      if (t[s.value].substring(0, 10) != e(m).substring(0, 10)) {
        const _ = e(m).substring(0, 10) + " 00:00";
        t[s.value] = _;
      }
      i(p, t);
    }
  }, b = (p) => {
    const { barElement: x, barContainer: o } = w();
    if (!x || !o)
      return;
    const m = p.clientX - o.left, y = e(m);
    if (!r(y).isSameOrBefore(r(t, "start"))) {
      if (t[s.value].substring(0, 10) != e(m).substring(0, 10)) {
        const _ = e(m).substring(0, 10) + " 23:59";
        t[l.value] = _;
      }
      i(p, t);
    }
  }, B = (p, x) => {
    if (!f.value)
      return !1;
    const o = t.ganttBarConfig.dragLimitLeft, m = t.ganttBarConfig.dragLimitRight;
    return p && o != null && p < o || x && m != null && x > m;
  }, h = (p) => {
    g.value = !1, document.body.style.cursor = "", window.removeEventListener("mousemove", a), window.removeEventListener("mouseup", h), n(p, t);
  };
  return {
    isDragging: g,
    initDrag: u
  };
}
function Ft() {
  const t = st(It);
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
  const t = H(), i = Ft(), n = Nt(), { pushOnOverlap: c, barStart: s, barEnd: l, noOverlap: f, dateFormat: g } = t, d = /* @__PURE__ */ new Map(), { toDayjs: a, format: e } = J(), r = (o, m) => {
    const { initDrag: y } = Mt(o, w, h, t);
    n({ ...m, type: "dragstart" }, o), y(m), p(o);
  }, u = (o, m) => {
    const y = o.ganttBarConfig.bundle;
    y != null && (i().forEach((_) => {
      _.forEach((E) => {
        if (E.ganttBarConfig.bundle === y) {
          const C = E === o ? h : () => null, { initDrag: S } = Mt(E, w, C, t);
          S(m), p(E);
        }
      });
    }), n({ ...m, type: "dragstart" }, o));
  }, w = (o, m) => {
    n({ ...o, type: "drag" }, m), D(m);
  }, D = (o) => {
    if (!(c != null && c.value))
      return;
    let m = o, { overlapBar: y, overlapType: _ } = v(m);
    for (; y; ) {
      p(y);
      const E = a(m[s.value]), C = a(m[l.value]), S = a(y[s.value]), M = a(y[l.value]);
      let T;
      switch (_) {
        case "left":
          T = M.diff(E, "minutes", !0), y[l.value] = e(m[s.value], g.value), y[s.value] = e(
            S.subtract(T, "minutes"),
            g.value
          );
          break;
        case "right":
          T = C.diff(S, "minutes", !0), y[s.value] = e(C, g.value), y[l.value] = e(
            M.add(T, "minutes"),
            g.value
          );
          break;
        default:
          console.warn(
            "Vue-Ganttastic: One bar is inside of the other one! This should never occur while push-on-overlap is active!"
          );
          return;
      }
      y && (_ === "left" || _ === "right") && b(y, T, _), m = y, { overlapBar: y, overlapType: _ } = v(y);
    }
  }, v = (o) => {
    let m, y, _;
    const E = i().find((Y) => Y.includes(o)) || [], C = a(o[s.value]), S = a(o[l.value]);
    return { overlapBar: E.find((Y) => {
      if (Y === o)
        return !1;
      const R = a(Y[s.value]), j = a(Y[l.value]);
      return m = C.isBetween(R, j), y = S.isBetween(R, j), _ = R.isBetween(C, S) || j.isBetween(C, S), m || y || _;
    }), overlapType: m ? "left" : y ? "right" : _ ? "between" : null };
  }, b = (o, m, y) => {
    p(o), o.ganttBarConfig.bundle && i().forEach((_) => {
      _.forEach((E) => {
        E.ganttBarConfig.bundle === o.ganttBarConfig.bundle && E !== o && (p(E), B(E, m, y));
      });
    });
  }, B = (o, m, y) => {
    switch (y) {
      case "left":
        o[s.value] = e(
          a(o, "start").subtract(m, "minutes"),
          g.value
        ), o[l.value] = e(
          a(o, "end").subtract(m, "minutes"),
          g.value
        );
        break;
      case "right":
        o[s.value] = e(
          a(o, "start").add(m, "minutes"),
          g.value
        ), o[l.value] = e(a(o, "end").add(m, "minutes"), g.value);
    }
    D(o);
  }, h = (o, m) => {
    x();
    const y = {
      ...o,
      type: "dragend"
    };
    n(y, m, void 0, new Map(d)), d.clear();
  }, p = (o) => {
    if (!d.has(o)) {
      const m = o[s.value], y = o[l.value];
      d.set(o, { oldStart: m, oldEnd: y });
    }
  }, x = () => {
    if (c.value || !f.value)
      return;
    let o = !1;
    d.forEach((m, y) => {
      const { overlapBar: _ } = v(y);
      _ != null && (o = !0);
    }), o && d.forEach(({ oldStart: m, oldEnd: y }, _) => {
      _[s.value] = m, _[l.value] = y;
    });
  };
  return {
    initDragOfBar: r,
    initDragOfBundle: u
  };
}
function He() {
  const { pushOnOverlap: t } = H(), i = Ft(), n = (f) => {
    const g = [];
    return f != null && i().forEach((d) => {
      d.forEach((a) => {
        a.ganttBarConfig.bundle === f && g.push(a);
      });
    }), g;
  }, c = (f) => {
    if (!t.value || f.ganttBarConfig.pushOnOverlap === !1)
      return;
    for (const d of ["left", "right"]) {
      const a = d, { gapDistanceSoFar: e, bundleBarsAndGapDist: r } = s(
        f,
        0,
        a
      );
      let u = e;
      const w = r;
      if (!w)
        continue;
      for (let v = 0; v < w.length; v++) {
        const b = w[v].bar, B = w[v].gapDistance;
        n(b.ganttBarConfig.bundle).filter(
          (p) => p !== b
        ).forEach((p) => {
          const x = s(p, B, a), o = x.gapDistanceSoFar, m = x.bundleBarsAndGapDist;
          o != null && (!u || o < u) && (u = o), m.forEach((y) => {
            w.find((_) => _.bar === y.bar) || w.push(y);
          });
        });
      }
      const D = document.getElementById(f.ganttBarConfig.id);
      u != null && a === "left" ? f.ganttBarConfig.dragLimitLeft = D.offsetLeft - u : u != null && a === "right" && (f.ganttBarConfig.dragLimitRight = D.offsetLeft + D.offsetWidth + u);
    }
    n(f.ganttBarConfig.bundle).forEach((d) => {
      d.ganttBarConfig.dragLimitLeft = f.ganttBarConfig.dragLimitLeft, d.ganttBarConfig.dragLimitRight = f.ganttBarConfig.dragLimitRight;
    });
  }, s = (f, g = 0, d) => {
    const a = f.ganttBarConfig.bundle ? [{ bar: f, gapDistance: g }] : [];
    let e = f, r = l(e, d);
    if (d === "left")
      for (; r; ) {
        const u = document.getElementById(e.ganttBarConfig.id), w = document.getElementById(r.ganttBarConfig.id), D = w.offsetLeft + w.offsetWidth;
        if (g += u.offsetLeft - D, r.ganttBarConfig.immobile)
          return { gapDistanceSoFar: g, bundleBarsAndGapDist: a };
        r.ganttBarConfig.bundle && a.push({
          bar: r,
          gapDistance: g
        }), e = r, r = l(r, "left");
      }
    if (d === "right")
      for (; r; ) {
        const u = document.getElementById(e.ganttBarConfig.id), w = document.getElementById(r.ganttBarConfig.id), D = u.offsetLeft + u.offsetWidth;
        if (g += w.offsetLeft - D, r.ganttBarConfig.immobile)
          return { gapDistanceSoFar: g, bundleBarsAndGapDist: a };
        r.ganttBarConfig.bundle && a.push({
          bar: r,
          gapDistance: g
        }), e = r, r = l(r, "right");
      }
    return { gapDistanceSoFar: null, bundleBarsAndGapDist: a };
  }, l = (f, g) => {
    const d = document.getElementById(f.ganttBarConfig.id), a = i().find((r) => r.includes(f)) || [];
    let e = [];
    return g === "left" ? e = a.filter((r) => {
      const u = document.getElementById(r.ganttBarConfig.id);
      return u && u.offsetLeft < d.offsetLeft && r.ganttBarConfig.pushOnOverlap !== !1;
    }) : e = a.filter((r) => {
      const u = document.getElementById(r.ganttBarConfig.id);
      return u && u.offsetLeft > d.offsetLeft && r.ganttBarConfig.pushOnOverlap !== !1;
    }), e.length > 0 ? e.reduce((r, u) => {
      const w = document.getElementById(r.ganttBarConfig.id), D = document.getElementById(u.ganttBarConfig.id), v = Math.abs(w.offsetLeft - d.offsetLeft), b = Math.abs(D.offsetLeft - d.offsetLeft);
      return v < b ? r : u;
    }, e[0]) : null;
  };
  return {
    setDragLimitsOfGanttBar: c
  };
}
const Pe = ["id"], Ue = { class: "g-gantt-bar-label" }, je = /* @__PURE__ */ G("div", { class: "g-gantt-bar-handle-left" }, null, -1), Fe = /* @__PURE__ */ G("div", { class: "g-gantt-bar-handle-right" }, null, -1), Ne = /* @__PURE__ */ K({
  __name: "GGanttBar",
  props: {
    bar: null
  },
  setup(t) {
    const i = t, n = Nt(), c = H(), { rowHeight: s } = c, { bar: l } = Z(i), { mapTimeToPosition: f, mapPositionToTime: g } = Bt(), { initDragOfBar: d, initDragOfBundle: a } = Ae(), { setDragLimitsOfGanttBar: e } = He(), r = $(!1), u = I(() => l.value.ganttBarConfig);
    function w(E) {
      u.value.bundle != null ? a(l.value, E) : d(l.value, E), r.value = !0;
    }
    const D = () => {
      e(l.value), !u.value.immobile && (window.addEventListener("mousemove", w, {
        once: !0
      }), window.addEventListener(
        "mouseup",
        () => {
          window.removeEventListener("mousemove", w), r.value = !1;
        },
        { once: !0 }
      ));
    }, v = st(Ht), b = (E) => {
      var M;
      E.preventDefault(), E.type === "mousedown" && D();
      const C = (M = v == null ? void 0 : v.value) == null ? void 0 : M.getBoundingClientRect();
      if (!C)
        return;
      const S = g(E.clientX - C.left);
      n(E, l.value, S);
    }, { barStart: B, barEnd: h, width: p, chartStart: x, chartEnd: o, chartSize: m } = c, y = $(0), _ = $(0);
    return Tt(() => {
      lt(
        [l, p, x, o, m.width],
        () => {
          y.value = f(l.value[B.value]), _.value = f(l.value[h.value]);
        },
        { deep: !0, immediate: !0 }
      );
    }), (E, C) => (k(), L("div", {
      id: O(u).id,
      class: "g-gantt-bar",
      style: U({
        ...O(u).style,
        position: "absolute",
        top: `${O(s) * 0.1}px`,
        left: `${y.value}px`,
        width: `${_.value - y.value}px`,
        height: `${O(s) * 0.8}px`,
        zIndex: r.value ? 3 : 2
      }),
      onMousedown: b,
      onClick: b,
      onDblclick: b,
      onMouseenter: b,
      onMouseleave: b,
      onContextmenu: b
    }, [
      G("div", Ue, [
        P(E.$slots, "default", { bar: O(l) }, () => [
          G("div", null, ot(O(u).label || ""), 1)
        ])
      ]),
      O(u).hasHandles ? (k(), L(X, { key: 0 }, [
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
    const n = t, { rowHeight: c, colors: s } = H(), { highlightOnHover: l } = Z(n), f = $(!1), g = I(() => ({
      height: `${c.value}px`,
      background: (l == null ? void 0 : l.value) && f.value ? s.value.hoverHighlight : null
    })), { mapPositionToTime: d } = Bt(), a = $(null);
    at(Ht, a);
    const e = (r) => {
      var v;
      const u = (v = a.value) == null ? void 0 : v.getBoundingClientRect();
      if (!u) {
        console.error("Vue-Ganttastic: failed to find bar container element for row.");
        return;
      }
      const w = r.clientX - u.left, D = d(w);
      i("drop", { e: r, datetime: D });
    };
    return (r, u) => (k(), L("div", {
      class: "g-gantt-row",
      style: U(O(g)),
      onDragover: u[0] || (u[0] = ne((w) => f.value = !0, ["prevent"])),
      onDragleave: u[1] || (u[1] = (w) => f.value = !1),
      onDrop: u[2] || (u[2] = (w) => e(w)),
      onMouseover: u[3] || (u[3] = (w) => f.value = !0),
      onMouseleave: u[4] || (u[4] = (w) => f.value = !1)
    }, [
      W("", !0),
      G("div", ae({
        ref_key: "barContainer",
        ref: a,
        class: "g-gantt-row-bars-container"
      }, r.$attrs), [
        wt(re, {
          name: "bar-transition",
          tag: "div"
        }, {
          default: q(() => [
            (k(!0), L(X, null, rt(t.bars, (w) => (k(), it(Ne, {
              key: w.ganttBarConfig.id,
              bar: w
            }, {
              default: q(() => [
                P(r.$slots, "bar-label", { bar: w })
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
    Ve(), t.component("GGanttChart", Re), t.component("GGanttRow", ze);
  }
};
function Q(t, i = "top") {
  if (!t || typeof document > "u")
    return;
  const n = document.head, c = document.createElement("style");
  i === "top" && n.firstChild ? n.insertBefore(c, n.firstChild) : n.appendChild(c), c.appendChild(document.createTextNode(t));
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
  Re as GGanttChart,
  ze as GGanttRow,
  Qe as default,
  Ve as extendDayjs,
  Qe as ganttastic
};
