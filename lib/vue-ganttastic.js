import W from "dayjs";
import { inject as lt, computed as H, defineComponent as N, openBlock as C, createElementBlock as T, createElementVNode as G, Fragment as z, renderList as Z, unref as _, normalizeStyle as R, renderSlot as A, createTextVNode as st, toDisplayString as J, createCommentVNode as P, toRefs as et, ref as $, watch as ut, nextTick as Mt, createBlock as tt, Teleport as Xt, createVNode as xt, Transition as Zt, withCtx as X, getCurrentScope as Jt, onScopeDispose as te, getCurrentInstance as ee, onMounted as Lt, useSlots as ne, provide as it, withModifiers as ae, mergeProps as Gt, TransitionGroup as re } from "vue";
var ct = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {}, $t = { exports: {} };
(function(t, r) {
  (function(n, l) {
    t.exports = l();
  })(ct, function() {
    return function(n, l) {
      l.prototype.isSameOrBefore = function(s, d) {
        return this.isSame(s, d) || this.isBefore(s, d);
      };
    };
  });
})($t);
const oe = $t.exports;
var Rt = { exports: {} };
(function(t, r) {
  (function(n, l) {
    t.exports = l();
  })(ct, function() {
    return function(n, l) {
      l.prototype.isSameOrAfter = function(s, d) {
        return this.isSame(s, d) || this.isAfter(s, d);
      };
    };
  });
})(Rt);
const ie = Rt.exports;
var Yt = { exports: {} };
(function(t, r) {
  (function(n, l) {
    t.exports = l();
  })(ct, function() {
    return function(n, l, s) {
      l.prototype.isBetween = function(d, u, g, f) {
        var a = s(d), e = s(u), o = (f = f || "()")[0] === "(", c = f[1] === ")";
        return (o ? this.isAfter(a, g) : !this.isBefore(a, g)) && (c ? this.isBefore(e, g) : !this.isAfter(e, g)) || (o ? this.isBefore(a, g) : !this.isAfter(a, g)) && (c ? this.isAfter(e, g) : !this.isBefore(e, g));
      };
    };
  });
})(Yt);
const se = Yt.exports;
var It = { exports: {} };
(function(t, r) {
  (function(n, l) {
    t.exports = l();
  })(ct, function() {
    var n = { LTS: "h:mm:ss A", LT: "h:mm A", L: "MM/DD/YYYY", LL: "MMMM D, YYYY", LLL: "MMMM D, YYYY h:mm A", LLLL: "dddd, MMMM D, YYYY h:mm A" }, l = /(\[[^[]*\])|([-_:/.,()\s]+)|(A|a|YYYY|YY?|MM?M?M?|Do|DD?|hh?|HH?|mm?|ss?|S{1,3}|z|ZZ?)/g, s = /\d\d/, d = /\d\d?/, u = /\d*[^-_:/,()\s\d]+/, g = {}, f = function(v) {
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
    }], o = function(v) {
      var b = g[v];
      return b && (b.indexOf ? b : b.s.concat(b.f));
    }, c = function(v, b) {
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
    }, w = { A: [u, function(v) {
      this.afternoon = c(v, !1);
    }], a: [u, function(v) {
      this.afternoon = c(v, !0);
    }], S: [/\d/, function(v) {
      this.milliseconds = 100 * +v;
    }], SS: [s, function(v) {
      this.milliseconds = 10 * +v;
    }], SSS: [/\d{3}/, function(v) {
      this.milliseconds = +v;
    }], s: [d, a("seconds")], ss: [d, a("seconds")], m: [d, a("minutes")], mm: [d, a("minutes")], H: [d, a("hours")], h: [d, a("hours")], HH: [d, a("hours")], hh: [d, a("hours")], D: [d, a("day")], DD: [s, a("day")], Do: [u, function(v) {
      var b = g.ordinal, x = v.match(/\d+/);
      if (this.day = x[0], b)
        for (var h = 1; h <= 31; h += 1)
          b(h).replace(/\[|\]/g, "") === v && (this.day = h);
    }], M: [d, a("month")], MM: [s, a("month")], MMM: [u, function(v) {
      var b = o("months"), x = (o("monthsShort") || b.map(function(h) {
        return h.slice(0, 3);
      })).indexOf(v) + 1;
      if (x < 1)
        throw new Error();
      this.month = x % 12 || x;
    }], MMMM: [u, function(v) {
      var b = o("months").indexOf(v) + 1;
      if (b < 1)
        throw new Error();
      this.month = b % 12 || b;
    }], Y: [/[+-]?\d+/, a("year")], YY: [s, function(v) {
      this.year = f(v);
    }], YYYY: [/\d{4}/, a("year")], Z: e, ZZ: e };
    function D(v) {
      var b, x;
      b = v, x = g && g.formats;
      for (var h = (v = b.replace(/(\[[^\]]+])|(LTS?|l{1,4}|L{1,4})/g, function(O, k, S) {
        var M = S && S.toUpperCase();
        return k || x[S] || n[S] || x[M].replace(/(\[[^\]]+])|(MMMM|MM|DD|dddd)/g, function(L, Y, F) {
          return Y || F.slice(1);
        });
      })).match(l), p = h.length, B = 0; B < p; B += 1) {
        var i = h[B], m = w[i], y = m && m[0], E = m && m[1];
        h[B] = E ? { regex: y, parser: E } : i.replace(/^\[|\]$/g, "");
      }
      return function(O) {
        for (var k = {}, S = 0, M = 0; S < p; S += 1) {
          var L = h[S];
          if (typeof L == "string")
            M += L.length;
          else {
            var Y = L.regex, F = L.parser, U = O.slice(M), K = Y.exec(U)[0];
            F.call(k, K), O = O.replace(K, "");
          }
        }
        return function(q) {
          var j = q.afternoon;
          if (j !== void 0) {
            var Q = q.hours;
            j ? Q < 12 && (q.hours += 12) : Q === 12 && (q.hours = 0), delete q.afternoon;
          }
        }(k), k;
      };
    }
    return function(v, b, x) {
      x.p.customParseFormat = !0, v && v.parseTwoDigitYear && (f = v.parseTwoDigitYear);
      var h = b.prototype, p = h.parse;
      h.parse = function(B) {
        var i = B.date, m = B.utc, y = B.args;
        this.$u = m;
        var E = y[1];
        if (typeof E == "string") {
          var O = y[2] === !0, k = y[3] === !0, S = O || k, M = y[2];
          k && (M = y[2]), g = this.$locale(), !O && M && (g = x.Ls[M]), this.$d = function(U, K, q) {
            try {
              if (["x", "X"].indexOf(K) > -1)
                return new Date((K === "X" ? 1e3 : 1) * U);
              var j = D(K)(U), Q = j.year, rt = j.month, Vt = j.day, qt = j.hours, Wt = j.minutes, Kt = j.seconds, Qt = j.milliseconds, _t = j.zone, ft = new Date(), gt = Vt || (Q || rt ? 1 : ft.getDate()), ht = Q || ft.getFullYear(), ot = 0;
              Q && !rt || (ot = rt > 0 ? rt - 1 : ft.getMonth());
              var pt = qt || 0, mt = Wt || 0, vt = Kt || 0, yt = Qt || 0;
              return _t ? new Date(Date.UTC(ht, ot, gt, pt, mt, vt, yt + 60 * _t.offset * 1e3)) : q ? new Date(Date.UTC(ht, ot, gt, pt, mt, vt, yt)) : new Date(ht, ot, gt, pt, mt, vt, yt);
            } catch {
              return new Date("");
            }
          }(i, E, m), this.init(), M && M !== !0 && (this.$L = this.locale(M).$L), S && i != this.format(E) && (this.$d = new Date("")), g = {};
        } else if (E instanceof Array)
          for (var L = E.length, Y = 1; Y <= L; Y += 1) {
            y[1] = E[Y - 1];
            var F = x.apply(this, y);
            if (F.isValid()) {
              this.$d = F.$d, this.$L = F.$L, this.init();
              break;
            }
            Y === L && (this.$d = new Date(""));
          }
        else
          p.call(this, B);
      };
    };
  });
})(It);
const le = It.exports, At = Symbol("CHART_ROWS_KEY"), Ht = Symbol("CONFIG_KEY"), Ft = Symbol("EMIT_BAR_EVENT_KEY"), jt = Symbol("BAR_CONTAINER_KEY");
function I() {
  const t = lt(Ht);
  if (!t)
    throw Error("Failed to inject config!");
  return t;
}
const Pt = "YYYY-MM-DD HH:mm";
function nt(t = I()) {
  const { chartStart: r, chartEnd: n, barStart: l, barEnd: s, dateFormat: d } = t, u = H(() => f(r.value)), g = H(() => f(n.value)), f = (e, o) => {
    let c;
    if (o !== void 0 && typeof e != "string" && !(e instanceof Date) && (c = o === "start" ? e[l.value] : e[s.value]), typeof e == "string")
      c = e;
    else if (e instanceof Date)
      return W(e);
    const w = d.value || Pt;
    return W(c, w, !0);
  };
  return {
    chartStartDayjs: u,
    chartEndDayjs: g,
    toDayjs: f,
    format: (e, o) => o === !1 ? e instanceof Date ? e : W(e).toDate() : (typeof e == "string" || e instanceof Date ? f(e) : e).format(o)
  };
}
function dt() {
  const { precision: t } = I(), { chartStartDayjs: r, chartEndDayjs: n } = nt(), l = H(() => {
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
    timeaxisUnits: H(() => {
      const u = [], g = [], f = l.value === "day" ? "date" : l.value, a = t.value;
      let e = r.value.startOf(a);
      const o = n.value.diff(r.value, "minutes", !0);
      let c = 0, w = e[f]();
      for (; e.isBefore(n.value) || e.isSame(n.value); ) {
        if (e[f]() !== w) {
          let h = 0;
          if (u.length === 0)
            h = e.startOf(f).diff(r.value, "minutes", !0) / o * 100;
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
          u.push({
            label: p.format(s[f]),
            value: String(w),
            date: p.toDate(),
            width: String(h) + "%"
          }), c = 0, w = e[f]();
        }
        let b = 0;
        g.length === 0 ? b = e.endOf(a).diff(r.value, "minutes", !0) / o * 100 : e.add(1, a).isSameOrAfter(n.value) ? b = n.value.diff(e.startOf(a), "minutes", !0) / o * 100 : b = e.endOf(a).diff(e.startOf(a), "minutes", !0) / o * 100, g.push({
          label: e.format(s[a]),
          value: String(e[a === "day" ? "date" : a]()),
          date: e.toDate(),
          width: String(b) + "%"
        });
        const x = e;
        e = e.add(1, a), (e.isBefore(n.value) || e.isSame(n.value)) && (c += e.diff(x, "minutes", !0));
      }
      const D = n.value.isSame(n.value.startOf(f)) ? n.value[f]() - 1 : n.value[f]();
      return u.some((b) => b.value === String(D)) || (c += n.value.diff(
        e.subtract(1, a),
        "minutes",
        !0
      ), u.push({
        label: n.value.format(s[f]),
        value: String(w),
        date: n.value.toDate(),
        width: `${c / o * 100}%`
      })), { upperUnits: u, lowerUnits: g };
    })
  };
}
const ue = { class: "g-timeaxis" }, ce = { class: "g-timeunits-container" }, de = { class: "g-timeunits-container" }, fe = /* @__PURE__ */ N({
  __name: "GGanttTimeaxis",
  setup(t) {
    const { precision: r, colors: n } = I(), { timeaxisUnits: l } = dt();
    return (s, d) => (C(), T("div", ue, [
      G("div", ce, [
        (C(!0), T(z, null, Z(_(l).upperUnits, ({ label: u, value: g, date: f, width: a }, e) => (C(), T("div", {
          key: u,
          class: "g-upper-timeunit",
          style: R({
            background: e % 2 === 0 ? _(n).primary : _(n).secondary,
            color: _(n).text,
            width: a
          })
        }, [
          A(s.$slots, "upper-timeunit", {
            label: u,
            value: g,
            date: f
          }, () => [
            st(J(u), 1)
          ])
        ], 4))), 128))
      ]),
      G("div", de, [
        (C(!0), T(z, null, Z(_(l).lowerUnits, ({ label: u, value: g, date: f, width: a }, e) => (C(), T("div", {
          key: u,
          class: "g-timeunit",
          style: R({
            background: e % 2 === 0 ? _(n).ternary : _(n).quartenary,
            color: _(n).text,
            flexDirection: _(r) === "hour" ? "column" : "row",
            alignItems: _(r) === "hour" ? "" : "center",
            width: a
          })
        }, [
          A(s.$slots, "timeunit", {
            label: u,
            value: g,
            date: f
          }, () => [
            st(J(u), 1)
          ]),
          _(r) === "hour" ? (C(), T("div", {
            key: 0,
            class: "g-timeaxis-hour-pin",
            style: R({ background: _(n).text })
          }, null, 4)) : P("", !0)
        ], 4))), 128))
      ])
    ]));
  }
});
const ge = { class: "g-grid-container" }, he = /* @__PURE__ */ N({
  __name: "GGanttGrid",
  props: {
    highlightedDates: null
  },
  setup(t) {
    var d;
    const n = (d = t.highlightedDates) == null ? void 0 : d.map((u) => u.getTime()), { colors: l } = I(), { timeaxisUnits: s } = dt();
    return (u, g) => (C(), T("div", ge, [
      (C(!0), T(z, null, Z(_(s).lowerUnits, ({ label: f, value: a, width: e, date: o }) => {
        var c;
        return C(), T("div", {
          key: f,
          class: "g-grid-line",
          style: R({
            width: e,
            background: (c = _(n)) != null && c.includes(o.getTime()) ? _(l).hoverHighlight : void 0
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
    const r = t, n = {
      hour: "HH:mm",
      day: "DD. MMM HH:mm",
      month: "DD. MMMM YYYY"
    }, l = "cadetblue", { bar: s } = et(r), { precision: d, font: u, barStart: g, barEnd: f, rowHeight: a } = I(), e = $("0px"), o = $("0px");
    ut(
      () => r.bar,
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
        e.value = `${p + a.value - 10}px`, o.value = `${i}px`;
      },
      { deep: !0, immediate: !0 }
    );
    const c = H(() => {
      var x, h;
      return ((h = (x = s == null ? void 0 : s.value) == null ? void 0 : x.ganttBarConfig.style) == null ? void 0 : h.background) || l;
    }), { toDayjs: w } = nt(), D = H(() => {
      var x;
      return (x = s.value) == null ? void 0 : x[g.value];
    }), v = H(() => {
      var x;
      return (x = s.value) == null ? void 0 : x[f.value];
    }), b = H(() => {
      if (!(s != null && s.value))
        return "";
      const x = n[d.value], h = w(D.value).format(x), p = w(v.value).format(x);
      return `${h} \u2013 ${p}`;
    });
    return (x, h) => (C(), tt(Xt, { to: "body" }, [
      xt(Zt, {
        name: "g-fade",
        mode: "out-in"
      }, {
        default: X(() => [
          t.modelValue ? (C(), T("div", {
            key: 0,
            class: "g-gantt-tooltip",
            style: R({
              top: e.value,
              left: o.value,
              fontFamily: _(u)
            })
          }, [
            G("div", {
              class: "g-gantt-tooltip-color-dot",
              style: R({ background: _(c) })
            }, null, 4),
            A(x.$slots, "default", {
              bar: _(s),
              barStart: _(D),
              barEnd: _(v)
            }, () => [
              st(J(_(b)), 1)
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
  return typeof t == "function" ? t() : _(t);
}
function ve(t) {
  return t;
}
function ye(t) {
  return Jt() ? (te(t), !0) : !1;
}
function be(t, r = !0) {
  ee() ? Lt(t) : r ? t() : Mt(t);
}
function Ut(t) {
  var r;
  const n = me(t);
  return (r = n == null ? void 0 : n.$el) != null ? r : n;
}
const we = at ? window : void 0;
at && window.document;
at && window.navigator;
at && window.location;
function xe(t, r = !1) {
  const n = $(), l = () => n.value = Boolean(t());
  return l(), be(l, r), n;
}
const bt = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {}, wt = "__vueuse_ssr_handlers__";
bt[wt] = bt[wt] || {};
bt[wt];
var Dt = Object.getOwnPropertySymbols, Be = Object.prototype.hasOwnProperty, _e = Object.prototype.propertyIsEnumerable, Ee = (t, r) => {
  var n = {};
  for (var l in t)
    Be.call(t, l) && r.indexOf(l) < 0 && (n[l] = t[l]);
  if (t != null && Dt)
    for (var l of Dt(t))
      r.indexOf(l) < 0 && _e.call(t, l) && (n[l] = t[l]);
  return n;
};
function Oe(t, r, n = {}) {
  const l = n, { window: s = we } = l, d = Ee(l, ["window"]);
  let u;
  const g = xe(() => s && "ResizeObserver" in s), f = () => {
    u && (u.disconnect(), u = void 0);
  }, a = ut(() => Ut(t), (o) => {
    f(), g.value && s && o && (u = new ResizeObserver(r), u.observe(o, d));
  }, { immediate: !0, flush: "post" }), e = () => {
    f(), a();
  };
  return ye(e), {
    isSupported: g,
    stop: e
  };
}
function De(t, r = { width: 0, height: 0 }, n = {}) {
  const l = $(r.width), s = $(r.height);
  return Oe(t, ([d]) => {
    l.value = d.contentRect.width, s.value = d.contentRect.height;
  }, n), ut(() => Ut(t), (d) => {
    l.value = d ? r.width : 0, s.value = d ? r.height : 0;
  }), {
    width: l,
    height: s
  };
}
var Ct;
(function(t) {
  t.UP = "UP", t.RIGHT = "RIGHT", t.DOWN = "DOWN", t.LEFT = "LEFT", t.NONE = "NONE";
})(Ct || (Ct = {}));
var Ce = Object.defineProperty, kt = Object.getOwnPropertySymbols, ke = Object.prototype.hasOwnProperty, Se = Object.prototype.propertyIsEnumerable, St = (t, r, n) => r in t ? Ce(t, r, { enumerable: !0, configurable: !0, writable: !0, value: n }) : t[r] = n, Te = (t, r) => {
  for (var n in r || (r = {}))
    ke.call(r, n) && St(t, n, r[n]);
  if (kt)
    for (var n of kt(r))
      Se.call(r, n) && St(t, n, r[n]);
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
const Le = {
  key: 0,
  class: "g-footer"
}, Ge = { class: "g-footer-container" }, $e = /* @__PURE__ */ N({
  __name: "GGanttFooter",
  props: {
    labels: null
  },
  setup(t) {
    const { precision: r, colors: n } = I(), { timeaxisUnits: l } = dt();
    return (s, d) => t.labels ? (C(), T("div", Le, [
      G("div", Ge, [
        (C(!0), T(z, null, Z(_(l).lowerUnits, ({ label: u, value: g, date: f, width: a }, e) => (C(), T("div", {
          key: u,
          class: "g-timeunit",
          style: R({
            background: e % 2 === 0 ? _(n).ternary : _(n).quartenary,
            color: _(n).text,
            flexDirection: _(r) === "hour" ? "column" : "row",
            alignItems: _(r) === "hour" ? "" : "center",
            width: a
          })
        }, [
          A(s.$slots, "timeunit", {
            label: u,
            value: g,
            date: f
          }, () => [
            st(J(t.labels[e]), 1)
          ], !0)
        ], 4))), 128))
      ])
    ])) : P("", !0);
  }
});
const Re = (t, r) => {
  const n = t.__vccOpts || t;
  for (const [l, s] of r)
    n[l] = s;
  return n;
}, Ye = /* @__PURE__ */ Re($e, [["__scopeId", "data-v-400629df"]]), Ie = { class: "g-gantt-rows-container" }, Ae = /* @__PURE__ */ N({
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
    highlightedDates: { default: () => [] },
    font: { default: "inherit" },
    footerLabels: null,
    sticky: { type: Boolean }
  },
  emits: ["click-bar", "mousedown-bar", "mouseup-bar", "dblclick-bar", "mouseenter-bar", "mouseleave-bar", "dragstart-bar", "drag-bar", "dragend-bar", "contextmenu-bar"],
  setup(t, { emit: r }) {
    const n = t, { width: l, font: s, colorScheme: d } = et(n), u = ne(), g = H(
      () => typeof d.value != "string" ? d.value : Et[d.value] || Et.default
    ), f = () => {
      var B;
      const h = (B = u.default) == null ? void 0 : B.call(u), p = [];
      return h && h.forEach((i) => {
        var m;
        if ((m = i.props) != null && m.bars) {
          const y = i.props.bars;
          p.push(y);
        } else
          Array.isArray(i.children) && i.children.forEach((y) => {
            var O;
            const E = y;
            if ((O = E == null ? void 0 : E.props) != null && O.bars) {
              const k = E.props.bars;
              p.push(k);
            }
          });
      }), p;
    }, a = $(!1), e = $(!1), o = $(void 0);
    let c;
    const w = (h) => {
      c && clearTimeout(c), c = setTimeout(() => {
        a.value = !0;
      }, 800), o.value = h;
    }, D = () => {
      clearTimeout(c), a.value = !1;
    }, v = (h, p, B, i) => {
      switch (h.type) {
        case "click":
          r("click-bar", { bar: p, e: h, datetime: B });
          break;
        case "mousedown":
          r("mousedown-bar", { bar: p, e: h, datetime: B });
          break;
        case "mouseup":
          r("mouseup-bar", { bar: p, e: h, datetime: B });
          break;
        case "dblclick":
          r("dblclick-bar", { bar: p, e: h, datetime: B });
          break;
        case "mouseenter":
          w(p), r("mouseenter-bar", { bar: p, e: h });
          break;
        case "mouseleave":
          D(), r("mouseleave-bar", { bar: p, e: h });
          break;
        case "dragstart":
          e.value = !0, r("dragstart-bar", { bar: p, e: h });
          break;
        case "drag":
          r("drag-bar", { bar: p, e: h });
          break;
        case "dragend":
          e.value = !1, r("dragend-bar", { bar: p, e: h });
          break;
        case "contextmenu":
          r("contextmenu-bar", { bar: p, e: h, datetime: B });
          break;
      }
    }, b = $(null), x = De(b);
    return it(At, f), it(Ht, {
      ...et(n),
      colors: g,
      chartSize: x
    }), it(Ft, v), (h, p) => (C(), T(z, null, [
      G("div", {
        style: R([{ display: "flex", "flex-flow": "column" }, t.sticky ? "position: sticky; left:0;z-index:100; background: white;" : ""])
      }, [
        A(h.$slots, "side-menu")
      ], 4),
      G("div", {
        ref_key: "ganttChart",
        ref: b,
        class: "g-gantt-chart",
        style: R({ width: _(l), background: _(g).background, fontFamily: _(s) })
      }, [
        t.hideTimeaxis ? P("", !0) : (C(), tt(fe, { key: 0 }, {
          "upper-timeunit": X(({ label: B, value: i, date: m }) => [
            A(h.$slots, "upper-timeunit", {
              label: B,
              value: i,
              date: m
            })
          ]),
          timeunit: X(({ label: B, value: i, date: m }) => [
            A(h.$slots, "timeunit", {
              label: B,
              value: i,
              date: m
            })
          ]),
          _: 3
        })),
        t.grid ? (C(), tt(he, {
          key: 1,
          "highlighted-dates": t.highlightedDates
        }, null, 8, ["highlighted-dates"])) : P("", !0),
        G("div", Ie, [
          A(h.$slots, "default")
        ]),
        t.hideTimeaxis ? P("", !0) : (C(), tt(Ye, {
          key: 2,
          labels: t.footerLabels
        }, null, 8, ["labels"])),
        xt(pe, {
          "model-value": a.value || e.value,
          bar: o.value
        }, {
          default: X(() => [
            A(h.$slots, "bar-tooltip", { bar: o.value })
          ]),
          _: 3
        }, 8, ["model-value", "bar"])
      ], 4),
      G("div", null, [
        A(h.$slots, "footer")
      ])
    ], 64));
  }
});
function Bt(t = I()) {
  const { dateFormat: r, chartSize: n } = t, { chartStartDayjs: l, chartEndDayjs: s, toDayjs: d, format: u } = nt(t), g = H(() => s.value.diff(l.value, "minutes"));
  return {
    mapTimeToPosition: (e) => {
      const o = n.width.value || 0, c = d(e).diff(l.value, "minutes", !0);
      return Math.ceil(c / g.value * o);
    },
    mapPositionToTime: (e) => {
      const o = n.width.value || 0, c = e / o * g.value, w = u(l.value.add(c, "minutes"), r.value);
      if (typeof w == "string")
        return w;
      throw Error;
    }
  };
}
function Tt(t, r = () => null, n = () => null, l = I()) {
  const { barStart: s, barEnd: d, pushOnOverlap: u } = l, g = $(!1);
  let f = 0, a;
  const { mapPositionToTime: e } = Bt(l), { toDayjs: o } = nt(l), c = (p) => {
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
    const m = B.getBoundingClientRect().width, y = p.clientX - i.left - f, E = y + m;
    if (!x(y, E)) {
      if (t[s.value].substring(0, 10) != e(y).substring(0, 10)) {
        const O = o(t[s.value]), S = o(t[d.value]).diff(O, "minute"), M = e(y).substring(0, 10) + " 00:00";
        t[s.value] = M, t[d.value] = o(M).add(S, "minute").format("DD.MM.YYYY HH:mm");
      }
      r(p, t);
    }
  }, v = (p) => {
    const { barElement: B, barContainer: i } = w();
    if (!B || !i)
      return;
    const m = p.clientX - i.left, y = e(m);
    if (!o(y).isSameOrAfter(o(t, "end"))) {
      if (t[s.value].substring(0, 10) != e(m).substring(0, 10)) {
        const E = e(m).substring(0, 10) + " 00:00";
        t[s.value] = E;
      }
      r(p, t);
    }
  }, b = (p) => {
    const { barElement: B, barContainer: i } = w();
    if (!B || !i)
      return;
    const m = p.clientX - i.left, y = e(m);
    if (!o(y).isSameOrBefore(o(t, "start"))) {
      if (t[s.value].substring(0, 10) != e(m).substring(0, 10)) {
        const E = e(m).substring(0, 10) + " 23:59";
        t[d.value] = E;
      }
      r(p, t);
    }
  }, x = (p, B) => {
    if (!u.value)
      return !1;
    const i = t.ganttBarConfig.dragLimitLeft, m = t.ganttBarConfig.dragLimitRight;
    return p && i != null && p < i || B && m != null && B > m;
  }, h = (p) => {
    g.value = !1, document.body.style.cursor = "", window.removeEventListener("mousemove", a), window.removeEventListener("mouseup", h), n(p, t);
  };
  return {
    isDragging: g,
    initDrag: c
  };
}
function zt() {
  const t = lt(At);
  if (!t)
    throw Error("Failed to inject getChartRows!");
  return t;
}
function Nt() {
  const t = lt(Ft);
  if (!t)
    throw Error("Failed to inject emitBarEvent!");
  return t;
}
function He() {
  const t = I(), r = zt(), n = Nt(), { pushOnOverlap: l, barStart: s, barEnd: d, noOverlap: u, dateFormat: g } = t, f = /* @__PURE__ */ new Map(), { toDayjs: a, format: e } = nt(), o = (i, m) => {
    const { initDrag: y } = Tt(i, w, h, t);
    n({ ...m, type: "dragstart" }, i), y(m), p(i);
  }, c = (i, m) => {
    const y = i.ganttBarConfig.bundle;
    y != null && (r().forEach((E) => {
      E.forEach((O) => {
        if (O.ganttBarConfig.bundle === y) {
          const k = O === i ? h : () => null, { initDrag: S } = Tt(O, w, k, t);
          S(m), p(O);
        }
      });
    }), n({ ...m, type: "dragstart" }, i));
  }, w = (i, m) => {
    n({ ...i, type: "drag" }, m), D(m);
  }, D = (i) => {
    if (!(l != null && l.value))
      return;
    let m = i, { overlapBar: y, overlapType: E } = v(m);
    for (; y; ) {
      p(y);
      const O = a(m[s.value]), k = a(m[d.value]), S = a(y[s.value]), M = a(y[d.value]);
      let L;
      switch (E) {
        case "left":
          L = M.diff(O, "minutes", !0), y[d.value] = e(m[s.value], g.value), y[s.value] = e(
            S.subtract(L, "minutes"),
            g.value
          );
          break;
        case "right":
          L = k.diff(S, "minutes", !0), y[s.value] = e(k, g.value), y[d.value] = e(
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
      y && (E === "left" || E === "right") && b(y, L, E), m = y, { overlapBar: y, overlapType: E } = v(y);
    }
  }, v = (i) => {
    let m, y, E;
    const O = r().find((Y) => Y.includes(i)) || [], k = a(i[s.value]), S = a(i[d.value]);
    return { overlapBar: O.find((Y) => {
      if (Y === i)
        return !1;
      const F = a(Y[s.value]), U = a(Y[d.value]);
      return m = k.isBetween(F, U), y = S.isBetween(F, U), E = F.isBetween(k, S) || U.isBetween(k, S), m || y || E;
    }), overlapType: m ? "left" : y ? "right" : E ? "between" : null };
  }, b = (i, m, y) => {
    p(i), i.ganttBarConfig.bundle && r().forEach((E) => {
      E.forEach((O) => {
        O.ganttBarConfig.bundle === i.ganttBarConfig.bundle && O !== i && (p(O), x(O, m, y));
      });
    });
  }, x = (i, m, y) => {
    switch (y) {
      case "left":
        i[s.value] = e(
          a(i, "start").subtract(m, "minutes"),
          g.value
        ), i[d.value] = e(
          a(i, "end").subtract(m, "minutes"),
          g.value
        );
        break;
      case "right":
        i[s.value] = e(
          a(i, "start").add(m, "minutes"),
          g.value
        ), i[d.value] = e(a(i, "end").add(m, "minutes"), g.value);
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
      const m = i[s.value], y = i[d.value];
      f.set(i, { oldStart: m, oldEnd: y });
    }
  }, B = () => {
    if (l.value || !u.value)
      return;
    let i = !1;
    f.forEach((m, y) => {
      const { overlapBar: E } = v(y);
      E != null && (i = !0);
    }), i && f.forEach(({ oldStart: m, oldEnd: y }, E) => {
      E[s.value] = m, E[d.value] = y;
    });
  };
  return {
    initDragOfBar: o,
    initDragOfBundle: c
  };
}
function Fe() {
  const { pushOnOverlap: t } = I(), r = zt(), n = (u) => {
    const g = [];
    return u != null && r().forEach((f) => {
      f.forEach((a) => {
        a.ganttBarConfig.bundle === u && g.push(a);
      });
    }), g;
  }, l = (u) => {
    if (!t.value || u.ganttBarConfig.pushOnOverlap === !1)
      return;
    for (const f of ["left", "right"]) {
      const a = f, { gapDistanceSoFar: e, bundleBarsAndGapDist: o } = s(
        u,
        0,
        a
      );
      let c = e;
      const w = o;
      if (!w)
        continue;
      for (let v = 0; v < w.length; v++) {
        const b = w[v].bar, x = w[v].gapDistance;
        n(b.ganttBarConfig.bundle).filter(
          (p) => p !== b
        ).forEach((p) => {
          const B = s(p, x, a), i = B.gapDistanceSoFar, m = B.bundleBarsAndGapDist;
          i != null && (!c || i < c) && (c = i), m.forEach((y) => {
            w.find((E) => E.bar === y.bar) || w.push(y);
          });
        });
      }
      const D = document.getElementById(u.ganttBarConfig.id);
      c != null && a === "left" ? u.ganttBarConfig.dragLimitLeft = D.offsetLeft - c : c != null && a === "right" && (u.ganttBarConfig.dragLimitRight = D.offsetLeft + D.offsetWidth + c);
    }
    n(u.ganttBarConfig.bundle).forEach((f) => {
      f.ganttBarConfig.dragLimitLeft = u.ganttBarConfig.dragLimitLeft, f.ganttBarConfig.dragLimitRight = u.ganttBarConfig.dragLimitRight;
    });
  }, s = (u, g = 0, f) => {
    const a = u.ganttBarConfig.bundle ? [{ bar: u, gapDistance: g }] : [];
    let e = u, o = d(e, f);
    if (f === "left")
      for (; o; ) {
        const c = document.getElementById(e.ganttBarConfig.id), w = document.getElementById(o.ganttBarConfig.id), D = w.offsetLeft + w.offsetWidth;
        if (g += c.offsetLeft - D, o.ganttBarConfig.immobile)
          return { gapDistanceSoFar: g, bundleBarsAndGapDist: a };
        o.ganttBarConfig.bundle && a.push({
          bar: o,
          gapDistance: g
        }), e = o, o = d(o, "left");
      }
    if (f === "right")
      for (; o; ) {
        const c = document.getElementById(e.ganttBarConfig.id), w = document.getElementById(o.ganttBarConfig.id), D = c.offsetLeft + c.offsetWidth;
        if (g += w.offsetLeft - D, o.ganttBarConfig.immobile)
          return { gapDistanceSoFar: g, bundleBarsAndGapDist: a };
        o.ganttBarConfig.bundle && a.push({
          bar: o,
          gapDistance: g
        }), e = o, o = d(o, "right");
      }
    return { gapDistanceSoFar: null, bundleBarsAndGapDist: a };
  }, d = (u, g) => {
    const f = document.getElementById(u.ganttBarConfig.id), a = r().find((o) => o.includes(u)) || [];
    let e = [];
    return g === "left" ? e = a.filter((o) => {
      const c = document.getElementById(o.ganttBarConfig.id);
      return c && c.offsetLeft < f.offsetLeft && o.ganttBarConfig.pushOnOverlap !== !1;
    }) : e = a.filter((o) => {
      const c = document.getElementById(o.ganttBarConfig.id);
      return c && c.offsetLeft > f.offsetLeft && o.ganttBarConfig.pushOnOverlap !== !1;
    }), e.length > 0 ? e.reduce((o, c) => {
      const w = document.getElementById(o.ganttBarConfig.id), D = document.getElementById(c.ganttBarConfig.id), v = Math.abs(w.offsetLeft - f.offsetLeft), b = Math.abs(D.offsetLeft - f.offsetLeft);
      return v < b ? o : c;
    }, e[0]) : null;
  };
  return {
    setDragLimitsOfGanttBar: l
  };
}
const je = ["id"], Pe = { class: "g-gantt-bar-label" }, Ue = { style: { "z-index": "100" } }, ze = /* @__PURE__ */ G("div", { class: "g-gantt-bar-handle-left" }, null, -1), Ne = /* @__PURE__ */ G("div", { class: "g-gantt-bar-handle-right" }, null, -1), Ve = /* @__PURE__ */ N({
  __name: "GGanttBar",
  props: {
    bar: null
  },
  setup(t) {
    const r = t, n = Nt(), l = I(), { rowHeight: s } = l, { bar: d } = et(r), { mapTimeToPosition: u, mapPositionToTime: g } = Bt(), { initDragOfBar: f, initDragOfBundle: a } = He(), { setDragLimitsOfGanttBar: e } = Fe(), o = $(!1), c = H(() => d.value.ganttBarConfig);
    function w(O) {
      c.value.bundle != null ? a(d.value, O) : f(d.value, O), o.value = !0;
    }
    const D = () => {
      e(d.value), !c.value.immobile && (window.addEventListener("mousemove", w, {
        once: !0
      }), window.addEventListener(
        "mouseup",
        () => {
          window.removeEventListener("mousemove", w), o.value = !1;
        },
        { once: !0 }
      ));
    }, v = lt(jt), b = (O) => {
      var M;
      O.preventDefault(), O.type === "mousedown" && D();
      const k = (M = v == null ? void 0 : v.value) == null ? void 0 : M.getBoundingClientRect();
      if (!k)
        return;
      const S = g(O.clientX - k.left);
      n(O, d.value, S);
    }, { barStart: x, barEnd: h, width: p, chartStart: B, chartEnd: i, chartSize: m } = l, y = $(0), E = $(0);
    return Lt(() => {
      ut(
        [d, p, B, i, m.width],
        () => {
          y.value = u(d.value[x.value]), E.value = u(d.value[h.value]);
        },
        { deep: !0, immediate: !0 }
      );
    }), (O, k) => (C(), T("div", {
      id: _(c).id,
      class: "g-gantt-bar",
      style: R({
        ..._(c).style,
        position: "absolute",
        top: `${_(s) * 0.1}px`,
        left: `${y.value}px`,
        width: `${E.value - y.value}px`,
        height: `${_(s) * 0.8}px`,
        zIndex: o.value ? 3 : 2
      }),
      onMousedown: b,
      onClick: b,
      onDblclick: b,
      onMouseenter: b,
      onMouseleave: b,
      onContextmenu: b
    }, [
      G("div", Pe, [
        A(O.$slots, "default", { bar: _(d) }, () => [
          G("div", Ue, J(_(c).label || ""), 1),
          _(c).progress ? (C(), T("div", {
            key: 0,
            style: R([{ position: "absolute", height: "100%", left: "0" }, {
              width: _(c).progress + "%",
              backgroundColor: _(c).progressColor
            }])
          }, null, 4)) : P("", !0)
        ])
      ]),
      _(c).hasHandles ? (C(), T(z, { key: 0 }, [
        ze,
        Ne
      ], 64)) : P("", !0)
    ], 44, je));
  }
});
const qe = /* @__PURE__ */ N({
  __name: "GGanttRow",
  props: {
    bars: null,
    highlightOnHover: { type: Boolean }
  },
  emits: ["drop"],
  setup(t, { emit: r }) {
    const n = t, { rowHeight: l, colors: s } = I(), { highlightOnHover: d } = et(n), u = $(!1), g = H(() => ({
      height: `${l.value}px`,
      background: (d == null ? void 0 : d.value) && u.value ? s.value.hoverHighlight : null
    })), { mapPositionToTime: f } = Bt(), a = $(null);
    it(jt, a);
    const e = (o) => {
      var v;
      const c = (v = a.value) == null ? void 0 : v.getBoundingClientRect();
      if (!c) {
        console.error("Vue-Ganttastic: failed to find bar container element for row.");
        return;
      }
      const w = o.clientX - c.left, D = f(w);
      r("drop", { e: o, datetime: D });
    };
    return (o, c) => (C(), T("div", {
      class: "g-gantt-row",
      style: R(_(g)),
      onDragover: c[0] || (c[0] = ae((w) => u.value = !0, ["prevent"])),
      onDragleave: c[1] || (c[1] = (w) => u.value = !1),
      onDrop: c[2] || (c[2] = (w) => e(w)),
      onMouseover: c[3] || (c[3] = (w) => u.value = !0),
      onMouseleave: c[4] || (c[4] = (w) => u.value = !1)
    }, [
      P("", !0),
      G("div", Gt({
        ref_key: "barContainer",
        ref: a,
        class: "g-gantt-row-bars-container"
      }, o.$attrs), [
        xt(re, {
          name: "bar-transition",
          tag: "div"
        }, {
          default: X(() => [
            (C(!0), T(z, null, Z(t.bars, (w) => (C(), tt(Ve, {
              key: w.ganttBarConfig.id,
              bar: w
            }, {
              default: X(() => [
                A(o.$slots, "bar-label", { bar: w })
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
const We = /* @__PURE__ */ N({
  __name: "GGanttLabelRow",
  props: {
    labels: null,
    styleFunc: null
  },
  setup(t) {
    const r = t, { rowHeight: n, colors: l } = I(), { timeaxisUnits: s } = dt(), d = (u) => r.styleFunc != null ? r.styleFunc(u) : {};
    return (u, g) => (C(), T("div", {
      class: "g-gantt-row",
      style: R({ height: _(n) + "px" })
    }, [
      G("div", Gt({
        ref: "barContainer",
        class: "g-gantt-row-bars-container"
      }, u.$attrs), [
        (C(!0), T(z, null, Z(_(s).lowerUnits, ({ label: f, width: a }, e) => (C(), T("div", {
          key: f,
          class: "g-timeunit",
          style: R({
            color: _(l).text,
            textAlign: "center",
            width: a
          })
        }, [
          G("span", {
            style: R(d(f))
          }, J(t.labels[e]), 5)
        ], 4))), 128))
      ], 16)
    ], 4));
  }
});
function Ke() {
  W.extend(oe), W.extend(ie), W.extend(se), W.extend(le);
}
const Je = {
  install(t, r) {
    Ke(), t.component("GGanttChart", Ae), t.component("GGanttRow", qe), t.component("GGanttLabelRow", We);
  }
};
function V(t, r = "top") {
  if (!t || typeof document > "u")
    return;
  const n = document.head, l = document.createElement("style");
  r === "top" && n.firstChild ? n.insertBefore(l, n.firstChild) : n.appendChild(l), l.appendChild(document.createTextNode(t));
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
  display: flex;
  height: 100%;
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
  Ae as GGanttChart,
  We as GGanttLabelRow,
  qe as GGanttRow,
  Je as default,
  Ke as extendDayjs,
  Je as ganttastic
};
