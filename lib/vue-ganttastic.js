import z from "dayjs";
import { inject as lt, computed as I, defineComponent as V, openBlock as S, createElementBlock as T, createElementVNode as Y, Fragment as X, renderList as J, unref as E, normalizeStyle as F, renderSlot as U, createTextVNode as st, toDisplayString as tt, createCommentVNode as P, toRefs as et, ref as $, watch as ut, nextTick as Tt, createBlock as Z, Teleport as Qt, createVNode as wt, Transition as Xt, withCtx as Q, getCurrentScope as Zt, onScopeDispose as Jt, getCurrentInstance as te, onMounted as Lt, useSlots as ee, provide as it, withModifiers as ne, mergeProps as ae, TransitionGroup as re } from "vue";
var ct = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {}, $t = { exports: {} };
(function(t, r) {
  (function(n, l) {
    t.exports = l();
  })(ct, function() {
    return function(n, l) {
      l.prototype.isSameOrBefore = function(s, u) {
        return this.isSame(s, u) || this.isBefore(s, u);
      };
    };
  });
})($t);
const oe = $t.exports;
var Gt = { exports: {} };
(function(t, r) {
  (function(n, l) {
    t.exports = l();
  })(ct, function() {
    return function(n, l) {
      l.prototype.isSameOrAfter = function(s, u) {
        return this.isSame(s, u) || this.isAfter(s, u);
      };
    };
  });
})(Gt);
const ie = Gt.exports;
var Yt = { exports: {} };
(function(t, r) {
  (function(n, l) {
    t.exports = l();
  })(ct, function() {
    return function(n, l, s) {
      l.prototype.isBetween = function(u, c, f, d) {
        var a = s(u), e = s(c), o = (d = d || "()")[0] === "(", g = d[1] === ")";
        return (o ? this.isAfter(a, f) : !this.isBefore(a, f)) && (g ? this.isBefore(e, f) : !this.isAfter(e, f)) || (o ? this.isBefore(a, f) : !this.isAfter(a, f)) && (g ? this.isAfter(e, f) : !this.isBefore(e, f));
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
    var n = { LTS: "h:mm:ss A", LT: "h:mm A", L: "MM/DD/YYYY", LL: "MMMM D, YYYY", LLL: "MMMM D, YYYY h:mm A", LLLL: "dddd, MMMM D, YYYY h:mm A" }, l = /(\[[^[]*\])|([-_:/.,()\s]+)|(A|a|YYYY|YY?|MM?M?M?|Do|DD?|hh?|HH?|mm?|ss?|S{1,3}|z|ZZ?)/g, s = /\d\d/, u = /\d\d?/, c = /\d*[^-_:/,()\s\d]+/, f = {}, d = function(v) {
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
      var b = f[v];
      return b && (b.indexOf ? b : b.s.concat(b.f));
    }, g = function(v, b) {
      var x, h = f.meridiem;
      if (h) {
        for (var p = 1; p <= 24; p += 1)
          if (v.indexOf(h(p, 0, b)) > -1) {
            x = p > 12;
            break;
          }
      } else
        x = v === (b ? "pm" : "PM");
      return x;
    }, w = { A: [c, function(v) {
      this.afternoon = g(v, !1);
    }], a: [c, function(v) {
      this.afternoon = g(v, !0);
    }], S: [/\d/, function(v) {
      this.milliseconds = 100 * +v;
    }], SS: [s, function(v) {
      this.milliseconds = 10 * +v;
    }], SSS: [/\d{3}/, function(v) {
      this.milliseconds = +v;
    }], s: [u, a("seconds")], ss: [u, a("seconds")], m: [u, a("minutes")], mm: [u, a("minutes")], H: [u, a("hours")], h: [u, a("hours")], HH: [u, a("hours")], hh: [u, a("hours")], D: [u, a("day")], DD: [s, a("day")], Do: [c, function(v) {
      var b = f.ordinal, x = v.match(/\d+/);
      if (this.day = x[0], b)
        for (var h = 1; h <= 31; h += 1)
          b(h).replace(/\[|\]/g, "") === v && (this.day = h);
    }], M: [u, a("month")], MM: [s, a("month")], MMM: [c, function(v) {
      var b = o("months"), x = (o("monthsShort") || b.map(function(h) {
        return h.slice(0, 3);
      })).indexOf(v) + 1;
      if (x < 1)
        throw new Error();
      this.month = x % 12 || x;
    }], MMMM: [c, function(v) {
      var b = o("months").indexOf(v) + 1;
      if (b < 1)
        throw new Error();
      this.month = b % 12 || b;
    }], Y: [/[+-]?\d+/, a("year")], YY: [s, function(v) {
      this.year = d(v);
    }], YYYY: [/\d{4}/, a("year")], Z: e, ZZ: e };
    function D(v) {
      var b, x;
      b = v, x = f && f.formats;
      for (var h = (v = b.replace(/(\[[^\]]+])|(LTS?|l{1,4}|L{1,4})/g, function(O, C, k) {
        var M = k && k.toUpperCase();
        return C || x[k] || n[k] || x[M].replace(/(\[[^\]]+])|(MMMM|MM|DD|dddd)/g, function(L, G, A) {
          return G || A.slice(1);
        });
      })).match(l), p = h.length, B = 0; B < p; B += 1) {
        var i = h[B], m = w[i], y = m && m[0], _ = m && m[1];
        h[B] = _ ? { regex: y, parser: _ } : i.replace(/^\[|\]$/g, "");
      }
      return function(O) {
        for (var C = {}, k = 0, M = 0; k < p; k += 1) {
          var L = h[k];
          if (typeof L == "string")
            M += L.length;
          else {
            var G = L.regex, A = L.parser, j = O.slice(M), W = G.exec(j)[0];
            A.call(C, W), O = O.replace(W, "");
          }
        }
        return function(N) {
          var H = N.afternoon;
          if (H !== void 0) {
            var K = N.hours;
            H ? K < 12 && (N.hours += 12) : K === 12 && (N.hours = 0), delete N.afternoon;
          }
        }(C), C;
      };
    }
    return function(v, b, x) {
      x.p.customParseFormat = !0, v && v.parseTwoDigitYear && (d = v.parseTwoDigitYear);
      var h = b.prototype, p = h.parse;
      h.parse = function(B) {
        var i = B.date, m = B.utc, y = B.args;
        this.$u = m;
        var _ = y[1];
        if (typeof _ == "string") {
          var O = y[2] === !0, C = y[3] === !0, k = O || C, M = y[2];
          C && (M = y[2]), f = this.$locale(), !O && M && (f = x.Ls[M]), this.$d = function(j, W, N) {
            try {
              if (["x", "X"].indexOf(W) > -1)
                return new Date((W === "X" ? 1e3 : 1) * j);
              var H = D(W)(j), K = H.year, rt = H.month, zt = H.day, Vt = H.hours, qt = H.minutes, Wt = H.seconds, Kt = H.milliseconds, _t = H.zone, dt = new Date(), ft = zt || (K || rt ? 1 : dt.getDate()), gt = K || dt.getFullYear(), ot = 0;
              K && !rt || (ot = rt > 0 ? rt - 1 : dt.getMonth());
              var ht = Vt || 0, pt = qt || 0, mt = Wt || 0, vt = Kt || 0;
              return _t ? new Date(Date.UTC(gt, ot, ft, ht, pt, mt, vt + 60 * _t.offset * 1e3)) : N ? new Date(Date.UTC(gt, ot, ft, ht, pt, mt, vt)) : new Date(gt, ot, ft, ht, pt, mt, vt);
            } catch {
              return new Date("");
            }
          }(i, _, m), this.init(), M && M !== !0 && (this.$L = this.locale(M).$L), k && i != this.format(_) && (this.$d = new Date("")), f = {};
        } else if (_ instanceof Array)
          for (var L = _.length, G = 1; G <= L; G += 1) {
            y[1] = _[G - 1];
            var A = x.apply(this, y);
            if (A.isValid()) {
              this.$d = A.$d, this.$L = A.$L, this.init();
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
function R() {
  const t = lt(At);
  if (!t)
    throw Error("Failed to inject config!");
  return t;
}
const Ft = "YYYY-MM-DD HH:mm";
function nt(t = R()) {
  const { chartStart: r, chartEnd: n, barStart: l, barEnd: s, dateFormat: u } = t, c = I(() => d(r.value)), f = I(() => d(n.value)), d = (e, o) => {
    let g;
    if (o !== void 0 && typeof e != "string" && !(e instanceof Date) && (g = o === "start" ? e[l.value] : e[s.value]), typeof e == "string")
      g = e;
    else if (e instanceof Date)
      return z(e);
    const w = u.value || Ft;
    return z(g, w, !0);
  };
  return {
    chartStartDayjs: c,
    chartEndDayjs: f,
    toDayjs: d,
    format: (e, o) => o === !1 ? e instanceof Date ? e : z(e).toDate() : (typeof e == "string" || e instanceof Date ? d(e) : e).format(o)
  };
}
function xt() {
  const { precision: t } = R(), { chartStartDayjs: r, chartEndDayjs: n } = nt(), l = I(() => {
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
      const c = [], f = [], d = l.value === "day" ? "date" : l.value, a = t.value;
      let e = r.value.startOf(a);
      const o = n.value.diff(r.value, "minutes", !0);
      let g = 0, w = e[d]();
      for (; e.isBefore(n.value) || e.isSame(n.value); ) {
        if (e[d]() !== w) {
          let h = 0;
          if (c.length === 0)
            h = e.startOf(d).diff(r.value, "minutes", !0) / o * 100;
          else if (e.isSameOrAfter(n.value))
            h = n.value.diff(
              e.subtract(1, d).startOf(d),
              "minutes",
              !0
            ) / o * 100;
          else {
            const B = e.startOf(d), i = e.subtract(1, d).startOf(d);
            h = B.diff(i, "minutes", !0) / o * 100;
          }
          const p = e.subtract(1, d);
          c.push({
            label: p.format(s[d]),
            value: String(w),
            date: p.toDate(),
            width: String(h) + "%"
          }), g = 0, w = e[d]();
        }
        let b = 0;
        f.length === 0 ? b = e.endOf(a).diff(r.value, "minutes", !0) / o * 100 : e.add(1, a).isSameOrAfter(n.value) ? b = n.value.diff(e.startOf(a), "minutes", !0) / o * 100 : b = e.endOf(a).diff(e.startOf(a), "minutes", !0) / o * 100, f.push({
          label: e.format(s[a]),
          value: String(e[a === "day" ? "date" : a]()),
          date: e.toDate(),
          width: String(b) + "%"
        });
        const x = e;
        e = e.add(1, a), (e.isBefore(n.value) || e.isSame(n.value)) && (g += e.diff(x, "minutes", !0));
      }
      const D = n.value.isSame(n.value.startOf(d)) ? n.value[d]() - 1 : n.value[d]();
      return c.some((b) => b.value === String(D)) || (g += n.value.diff(
        e.subtract(1, a),
        "minutes",
        !0
      ), c.push({
        label: n.value.format(s[d]),
        value: String(w),
        date: n.value.toDate(),
        width: `${g / o * 100}%`
      })), { upperUnits: c, lowerUnits: f };
    })
  };
}
const ue = { class: "g-timeaxis" }, ce = { class: "g-timeunits-container" }, de = { class: "g-timeunits-container" }, fe = /* @__PURE__ */ V({
  __name: "GGanttTimeaxis",
  setup(t) {
    const { precision: r, colors: n } = R(), { timeaxisUnits: l } = xt();
    return (s, u) => (S(), T("div", ue, [
      Y("div", ce, [
        (S(!0), T(X, null, J(E(l).upperUnits, ({ label: c, value: f, date: d, width: a }, e) => (S(), T("div", {
          key: c,
          class: "g-upper-timeunit",
          style: F({
            background: e % 2 === 0 ? E(n).primary : E(n).secondary,
            color: E(n).text,
            width: a
          })
        }, [
          U(s.$slots, "upper-timeunit", {
            label: c,
            value: f,
            date: d
          }, () => [
            st(tt(c), 1)
          ])
        ], 4))), 128))
      ]),
      Y("div", de, [
        (S(!0), T(X, null, J(E(l).lowerUnits, ({ label: c, value: f, date: d, width: a }, e) => (S(), T("div", {
          key: c,
          class: "g-timeunit",
          style: F({
            background: e % 2 === 0 ? E(n).ternary : E(n).quartenary,
            color: E(n).text,
            flexDirection: E(r) === "hour" ? "column" : "row",
            alignItems: E(r) === "hour" ? "" : "center",
            width: a
          })
        }, [
          U(s.$slots, "timeunit", {
            label: c,
            value: f,
            date: d
          }, () => [
            st(tt(c), 1)
          ]),
          E(r) === "hour" ? (S(), T("div", {
            key: 0,
            class: "g-timeaxis-hour-pin",
            style: F({ background: E(n).text })
          }, null, 4)) : P("", !0)
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
    const { colors: r } = R(), { timeaxisUnits: n } = xt();
    return (l, s) => (S(), T("div", ge, [
      (S(!0), T(X, null, J(E(n).lowerUnits, ({ label: u, value: c, width: f }) => {
        var d;
        return S(), T("div", {
          key: u,
          class: "g-grid-line",
          style: F({
            width: f,
            background: (d = t.highlightedUnits) != null && d.includes(Number(c)) ? E(r).hoverHighlight : void 0
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
    const r = t, n = {
      hour: "HH:mm",
      day: "DD. MMM HH:mm",
      month: "DD. MMMM YYYY"
    }, l = "cadetblue", { bar: s } = et(r), { precision: u, font: c, barStart: f, barEnd: d, rowHeight: a } = R(), e = $("0px"), o = $("0px");
    ut(
      () => r.bar,
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
        e.value = `${p + a.value - 10}px`, o.value = `${i}px`;
      },
      { deep: !0, immediate: !0 }
    );
    const g = I(() => {
      var x, h;
      return ((h = (x = s == null ? void 0 : s.value) == null ? void 0 : x.ganttBarConfig.style) == null ? void 0 : h.background) || l;
    }), { toDayjs: w } = nt(), D = I(() => {
      var x;
      return (x = s.value) == null ? void 0 : x[f.value];
    }), v = I(() => {
      var x;
      return (x = s.value) == null ? void 0 : x[d.value];
    }), b = I(() => {
      if (!(s != null && s.value))
        return "";
      const x = n[u.value], h = w(D.value).format(x), p = w(v.value).format(x);
      return `${h} \u2013 ${p}`;
    });
    return (x, h) => (S(), Z(Qt, { to: "body" }, [
      wt(Xt, {
        name: "g-fade",
        mode: "out-in"
      }, {
        default: Q(() => [
          t.modelValue ? (S(), T("div", {
            key: 0,
            class: "g-gantt-tooltip",
            style: F({
              top: e.value,
              left: o.value,
              fontFamily: E(c)
            })
          }, [
            Y("div", {
              class: "g-gantt-tooltip-color-dot",
              style: F({ background: E(g) })
            }, null, 4),
            U(x.$slots, "default", {
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
function be(t, r = !0) {
  te() ? Lt(t) : r ? t() : Tt(t);
}
function jt(t) {
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
const yt = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {}, bt = "__vueuse_ssr_handlers__";
yt[bt] = yt[bt] || {};
yt[bt];
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
  const l = n, { window: s = we } = l, u = Ee(l, ["window"]);
  let c;
  const f = xe(() => s && "ResizeObserver" in s), d = () => {
    c && (c.disconnect(), c = void 0);
  }, a = ut(() => jt(t), (o) => {
    d(), f.value && s && o && (c = new ResizeObserver(r), c.observe(o, u));
  }, { immediate: !0, flush: "post" }), e = () => {
    d(), a();
  };
  return ye(e), {
    isSupported: f,
    stop: e
  };
}
function De(t, r = { width: 0, height: 0 }, n = {}) {
  const l = $(r.width), s = $(r.height);
  return Oe(t, ([u]) => {
    l.value = u.contentRect.width, s.value = u.contentRect.height;
  }, n), ut(() => jt(t), (u) => {
    l.value = u ? r.width : 0, s.value = u ? r.height : 0;
  }), {
    width: l,
    height: s
  };
}
var Ct;
(function(t) {
  t.UP = "UP", t.RIGHT = "RIGHT", t.DOWN = "DOWN", t.LEFT = "LEFT", t.NONE = "NONE";
})(Ct || (Ct = {}));
var Ce = Object.defineProperty, kt = Object.getOwnPropertySymbols, ke = Object.prototype.hasOwnProperty, Se = Object.prototype.propertyIsEnumerable, St = (t, r, n) => r in t ? Ce(t, r, { enumerable: !0, configurable: !0, writable: !0, value: n }) : t[r] = n, Me = (t, r) => {
  for (var n in r || (r = {}))
    ke.call(r, n) && St(t, n, r[n]);
  if (kt)
    for (var n of kt(r))
      Se.call(r, n) && St(t, n, r[n]);
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
    const { precision: r, colors: n } = R(), { timeaxisUnits: l } = xt();
    return (s, u) => t.labels ? (S(), T("div", Le, [
      Y("div", $e, [
        (S(!0), T(X, null, J(E(l).lowerUnits, ({ label: c, value: f, date: d, width: a }, e) => (S(), T("div", {
          key: c,
          class: "g-timeunit",
          style: F({
            background: e % 2 === 0 ? E(n).ternary : E(n).quartenary,
            color: E(n).text,
            flexDirection: E(r) === "hour" ? "column" : "row",
            alignItems: E(r) === "hour" ? "" : "center",
            width: a
          })
        }, [
          U(s.$slots, "timeunit", {
            label: c,
            value: f,
            date: d
          }, () => [
            st(tt(t.labels[e]), 1)
          ], !0)
        ], 4))), 128))
      ])
    ])) : P("", !0);
  }
});
const Ye = (t, r) => {
  const n = t.__vccOpts || t;
  for (const [l, s] of r)
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
  setup(t, { emit: r }) {
    const n = t, { width: l, font: s, colorScheme: u } = et(n), c = ee(), f = I(
      () => typeof u.value != "string" ? u.value : Et[u.value] || Et.default
    ), d = () => {
      var B;
      const h = (B = c.default) == null ? void 0 : B.call(c), p = [];
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
    }, a = $(!1), e = $(!1), o = $(void 0);
    let g;
    const w = (h) => {
      g && clearTimeout(g), g = setTimeout(() => {
        a.value = !0;
      }, 800), o.value = h;
    }, D = () => {
      clearTimeout(g), a.value = !1;
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
    return it(Rt, d), it(At, {
      ...et(n),
      colors: f,
      chartSize: x
    }), it(Ht, v), (h, p) => (S(), T("div", Re, [
      Y("div", Ae, [
        Y("div", {
          style: F([{ display: "flex", "flex-flow": "column" }, t.sticky ? "position: sticky; left:0;z-index:100; background: white;" : ""])
        }, [
          U(h.$slots, "side-menu")
        ], 4),
        Y("div", {
          ref_key: "ganttChart",
          ref: b,
          class: "g-gantt-chart",
          style: F({ width: E(l), background: E(f).background, fontFamily: E(s) })
        }, [
          t.hideTimeaxis ? P("", !0) : (S(), Z(fe, { key: 0 }, {
            "upper-timeunit": Q(({ label: B, value: i, date: m }) => [
              U(h.$slots, "upper-timeunit", {
                label: B,
                value: i,
                date: m
              })
            ]),
            timeunit: Q(({ label: B, value: i, date: m }) => [
              U(h.$slots, "timeunit", {
                label: B,
                value: i,
                date: m
              })
            ]),
            _: 3
          })),
          t.grid ? (S(), Z(he, {
            key: 1,
            "highlighted-units": t.highlightedUnits
          }, null, 8, ["highlighted-units"])) : P("", !0),
          Y("div", He, [
            U(h.$slots, "default")
          ]),
          t.hideTimeaxis ? P("", !0) : (S(), Z(Ie, {
            key: 2,
            labels: t.footerLabels
          }, null, 8, ["labels"])),
          wt(pe, {
            "model-value": a.value || e.value,
            bar: o.value
          }, {
            default: Q(() => [
              U(h.$slots, "bar-tooltip", { bar: o.value })
            ]),
            _: 3
          }, 8, ["model-value", "bar"])
        ], 4)
      ])
    ]));
  }
});
function Bt(t = R()) {
  const { dateFormat: r, chartSize: n } = t, { chartStartDayjs: l, chartEndDayjs: s, toDayjs: u, format: c } = nt(t), f = I(() => s.value.diff(l.value, "minutes"));
  return {
    mapTimeToPosition: (e) => {
      const o = n.width.value || 0, g = u(e).diff(l.value, "minutes", !0);
      return Math.ceil(g / f.value * o);
    },
    mapPositionToTime: (e) => {
      const o = n.width.value || 0, g = e / o * f.value, w = c(l.value.add(g, "minutes"), r.value);
      if (typeof w == "string")
        return w;
      throw Error;
    }
  };
}
function Mt(t, r = () => null, n = () => null, l = R()) {
  const { barStart: s, barEnd: u, pushOnOverlap: c } = l, f = $(!1);
  let d = 0, a;
  const { mapPositionToTime: e } = Bt(l), { toDayjs: o } = nt(l), g = (p) => {
    const B = document.getElementById(t.ganttBarConfig.id);
    if (!B)
      return;
    switch (d = p.clientX - (B.getBoundingClientRect().left || 0), p.target.className) {
      case "g-gantt-bar-handle-left":
        document.body.style.cursor = "ew-resize", a = v;
        break;
      case "g-gantt-bar-handle-right":
        document.body.style.cursor = "ew-resize", a = b;
        break;
      default:
        a = D;
    }
    f.value = !0, window.addEventListener("mousemove", a), window.addEventListener("mouseup", h);
  }, w = () => {
    var i;
    const p = document.getElementById(t.ganttBarConfig.id), B = (i = p == null ? void 0 : p.closest(".g-gantt-row-bars-container")) == null ? void 0 : i.getBoundingClientRect();
    return { barElement: p, barContainer: B };
  }, D = (p) => {
    const { barElement: B, barContainer: i } = w();
    if (!B || !i)
      return;
    const m = B.getBoundingClientRect().width, y = p.clientX - i.left - d, _ = y + m;
    if (!x(y, _)) {
      if (t[s.value].substring(0, 10) != e(y).substring(0, 10)) {
        const O = o(t[s.value]), k = o(t[u.value]).diff(O, "minute"), M = e(y).substring(0, 10) + " 00:00";
        t[s.value] = M, t[u.value] = o(M).add(k, "minute").format("DD.MM.YYYY HH:mm");
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
        const _ = e(m).substring(0, 10) + " 00:00";
        t[s.value] = _;
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
        const _ = e(m).substring(0, 10) + " 23:59";
        t[u.value] = _;
      }
      r(p, t);
    }
  }, x = (p, B) => {
    if (!c.value)
      return !1;
    const i = t.ganttBarConfig.dragLimitLeft, m = t.ganttBarConfig.dragLimitRight;
    return p && i != null && p < i || B && m != null && B > m;
  }, h = (p) => {
    f.value = !1, document.body.style.cursor = "", window.removeEventListener("mousemove", a), window.removeEventListener("mouseup", h), n(p, t);
  };
  return {
    isDragging: f,
    initDrag: g
  };
}
function Pt() {
  const t = lt(Rt);
  if (!t)
    throw Error("Failed to inject getChartRows!");
  return t;
}
function Nt() {
  const t = lt(Ht);
  if (!t)
    throw Error("Failed to inject emitBarEvent!");
  return t;
}
function Fe() {
  const t = R(), r = Pt(), n = Nt(), { pushOnOverlap: l, barStart: s, barEnd: u, noOverlap: c, dateFormat: f } = t, d = /* @__PURE__ */ new Map(), { toDayjs: a, format: e } = nt(), o = (i, m) => {
    const { initDrag: y } = Mt(i, w, h, t);
    n({ ...m, type: "dragstart" }, i), y(m), p(i);
  }, g = (i, m) => {
    const y = i.ganttBarConfig.bundle;
    y != null && (r().forEach((_) => {
      _.forEach((O) => {
        if (O.ganttBarConfig.bundle === y) {
          const C = O === i ? h : () => null, { initDrag: k } = Mt(O, w, C, t);
          k(m), p(O);
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
      const O = a(m[s.value]), C = a(m[u.value]), k = a(y[s.value]), M = a(y[u.value]);
      let L;
      switch (_) {
        case "left":
          L = M.diff(O, "minutes", !0), y[u.value] = e(m[s.value], f.value), y[s.value] = e(
            k.subtract(L, "minutes"),
            f.value
          );
          break;
        case "right":
          L = C.diff(k, "minutes", !0), y[s.value] = e(C, f.value), y[u.value] = e(
            M.add(L, "minutes"),
            f.value
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
    const O = r().find((G) => G.includes(i)) || [], C = a(i[s.value]), k = a(i[u.value]);
    return { overlapBar: O.find((G) => {
      if (G === i)
        return !1;
      const A = a(G[s.value]), j = a(G[u.value]);
      return m = C.isBetween(A, j), y = k.isBetween(A, j), _ = A.isBetween(C, k) || j.isBetween(C, k), m || y || _;
    }), overlapType: m ? "left" : y ? "right" : _ ? "between" : null };
  }, b = (i, m, y) => {
    p(i), i.ganttBarConfig.bundle && r().forEach((_) => {
      _.forEach((O) => {
        O.ganttBarConfig.bundle === i.ganttBarConfig.bundle && O !== i && (p(O), x(O, m, y));
      });
    });
  }, x = (i, m, y) => {
    switch (y) {
      case "left":
        i[s.value] = e(
          a(i, "start").subtract(m, "minutes"),
          f.value
        ), i[u.value] = e(
          a(i, "end").subtract(m, "minutes"),
          f.value
        );
        break;
      case "right":
        i[s.value] = e(
          a(i, "start").add(m, "minutes"),
          f.value
        ), i[u.value] = e(a(i, "end").add(m, "minutes"), f.value);
    }
    D(i);
  }, h = (i, m) => {
    B();
    const y = {
      ...i,
      type: "dragend"
    };
    n(y, m, void 0, new Map(d)), d.clear();
  }, p = (i) => {
    if (!d.has(i)) {
      const m = i[s.value], y = i[u.value];
      d.set(i, { oldStart: m, oldEnd: y });
    }
  }, B = () => {
    if (l.value || !c.value)
      return;
    let i = !1;
    d.forEach((m, y) => {
      const { overlapBar: _ } = v(y);
      _ != null && (i = !0);
    }), i && d.forEach(({ oldStart: m, oldEnd: y }, _) => {
      _[s.value] = m, _[u.value] = y;
    });
  };
  return {
    initDragOfBar: o,
    initDragOfBundle: g
  };
}
function je() {
  const { pushOnOverlap: t } = R(), r = Pt(), n = (c) => {
    const f = [];
    return c != null && r().forEach((d) => {
      d.forEach((a) => {
        a.ganttBarConfig.bundle === c && f.push(a);
      });
    }), f;
  }, l = (c) => {
    if (!t.value || c.ganttBarConfig.pushOnOverlap === !1)
      return;
    for (const d of ["left", "right"]) {
      const a = d, { gapDistanceSoFar: e, bundleBarsAndGapDist: o } = s(
        c,
        0,
        a
      );
      let g = e;
      const w = o;
      if (!w)
        continue;
      for (let v = 0; v < w.length; v++) {
        const b = w[v].bar, x = w[v].gapDistance;
        n(b.ganttBarConfig.bundle).filter(
          (p) => p !== b
        ).forEach((p) => {
          const B = s(p, x, a), i = B.gapDistanceSoFar, m = B.bundleBarsAndGapDist;
          i != null && (!g || i < g) && (g = i), m.forEach((y) => {
            w.find((_) => _.bar === y.bar) || w.push(y);
          });
        });
      }
      const D = document.getElementById(c.ganttBarConfig.id);
      g != null && a === "left" ? c.ganttBarConfig.dragLimitLeft = D.offsetLeft - g : g != null && a === "right" && (c.ganttBarConfig.dragLimitRight = D.offsetLeft + D.offsetWidth + g);
    }
    n(c.ganttBarConfig.bundle).forEach((d) => {
      d.ganttBarConfig.dragLimitLeft = c.ganttBarConfig.dragLimitLeft, d.ganttBarConfig.dragLimitRight = c.ganttBarConfig.dragLimitRight;
    });
  }, s = (c, f = 0, d) => {
    const a = c.ganttBarConfig.bundle ? [{ bar: c, gapDistance: f }] : [];
    let e = c, o = u(e, d);
    if (d === "left")
      for (; o; ) {
        const g = document.getElementById(e.ganttBarConfig.id), w = document.getElementById(o.ganttBarConfig.id), D = w.offsetLeft + w.offsetWidth;
        if (f += g.offsetLeft - D, o.ganttBarConfig.immobile)
          return { gapDistanceSoFar: f, bundleBarsAndGapDist: a };
        o.ganttBarConfig.bundle && a.push({
          bar: o,
          gapDistance: f
        }), e = o, o = u(o, "left");
      }
    if (d === "right")
      for (; o; ) {
        const g = document.getElementById(e.ganttBarConfig.id), w = document.getElementById(o.ganttBarConfig.id), D = g.offsetLeft + g.offsetWidth;
        if (f += w.offsetLeft - D, o.ganttBarConfig.immobile)
          return { gapDistanceSoFar: f, bundleBarsAndGapDist: a };
        o.ganttBarConfig.bundle && a.push({
          bar: o,
          gapDistance: f
        }), e = o, o = u(o, "right");
      }
    return { gapDistanceSoFar: null, bundleBarsAndGapDist: a };
  }, u = (c, f) => {
    const d = document.getElementById(c.ganttBarConfig.id), a = r().find((o) => o.includes(c)) || [];
    let e = [];
    return f === "left" ? e = a.filter((o) => {
      const g = document.getElementById(o.ganttBarConfig.id);
      return g && g.offsetLeft < d.offsetLeft && o.ganttBarConfig.pushOnOverlap !== !1;
    }) : e = a.filter((o) => {
      const g = document.getElementById(o.ganttBarConfig.id);
      return g && g.offsetLeft > d.offsetLeft && o.ganttBarConfig.pushOnOverlap !== !1;
    }), e.length > 0 ? e.reduce((o, g) => {
      const w = document.getElementById(o.ganttBarConfig.id), D = document.getElementById(g.ganttBarConfig.id), v = Math.abs(w.offsetLeft - d.offsetLeft), b = Math.abs(D.offsetLeft - d.offsetLeft);
      return v < b ? o : g;
    }, e[0]) : null;
  };
  return {
    setDragLimitsOfGanttBar: l
  };
}
const Pe = ["id"], Ne = { class: "g-gantt-bar-label" }, ze = /* @__PURE__ */ Y("div", { class: "g-gantt-bar-handle-left" }, null, -1), Ve = /* @__PURE__ */ Y("div", { class: "g-gantt-bar-handle-right" }, null, -1), qe = /* @__PURE__ */ V({
  __name: "GGanttBar",
  props: {
    bar: null
  },
  setup(t) {
    const r = t, n = Nt(), l = R(), { rowHeight: s } = l, { bar: u } = et(r), { mapTimeToPosition: c, mapPositionToTime: f } = Bt(), { initDragOfBar: d, initDragOfBundle: a } = Fe(), { setDragLimitsOfGanttBar: e } = je(), o = $(!1), g = I(() => u.value.ganttBarConfig);
    function w(O) {
      g.value.bundle != null ? a(u.value, O) : d(u.value, O), o.value = !0;
    }
    const D = () => {
      e(u.value), !g.value.immobile && (window.addEventListener("mousemove", w, {
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
      const k = f(O.clientX - C.left);
      n(O, u.value, k);
    }, { barStart: x, barEnd: h, width: p, chartStart: B, chartEnd: i, chartSize: m } = l, y = $(0), _ = $(0);
    return Lt(() => {
      ut(
        [u, p, B, i, m.width],
        () => {
          y.value = c(u.value[x.value]), _.value = c(u.value[h.value]);
        },
        { deep: !0, immediate: !0 }
      );
    }), (O, C) => (S(), T("div", {
      id: E(g).id,
      class: "g-gantt-bar",
      style: F({
        ...E(g).style,
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
      Y("div", Ne, [
        U(O.$slots, "default", { bar: E(u) }, () => [
          Y("div", null, tt(E(g).label || ""), 1)
        ])
      ]),
      E(g).hasHandles ? (S(), T(X, { key: 0 }, [
        ze,
        Ve
      ], 64)) : P("", !0)
    ], 44, Pe));
  }
});
const We = /* @__PURE__ */ V({
  __name: "GGanttRow",
  props: {
    bars: null,
    highlightOnHover: { type: Boolean }
  },
  emits: ["drop"],
  setup(t, { emit: r }) {
    const n = t, { rowHeight: l, colors: s } = R(), { highlightOnHover: u } = et(n), c = $(!1), f = I(() => ({
      height: `${l.value}px`,
      background: (u == null ? void 0 : u.value) && c.value ? s.value.hoverHighlight : null
    })), { mapPositionToTime: d } = Bt(), a = $(null);
    it(Ut, a);
    const e = (o) => {
      var v;
      const g = (v = a.value) == null ? void 0 : v.getBoundingClientRect();
      if (!g) {
        console.error("Vue-Ganttastic: failed to find bar container element for row.");
        return;
      }
      const w = o.clientX - g.left, D = d(w);
      r("drop", { e: o, datetime: D });
    };
    return (o, g) => (S(), T("div", {
      class: "g-gantt-row",
      style: F(E(f)),
      onDragover: g[0] || (g[0] = ne((w) => c.value = !0, ["prevent"])),
      onDragleave: g[1] || (g[1] = (w) => c.value = !1),
      onDrop: g[2] || (g[2] = (w) => e(w)),
      onMouseover: g[3] || (g[3] = (w) => c.value = !0),
      onMouseleave: g[4] || (g[4] = (w) => c.value = !1)
    }, [
      P("", !0),
      Y("div", ae({
        ref_key: "barContainer",
        ref: a,
        class: "g-gantt-row-bars-container"
      }, o.$attrs), [
        wt(re, {
          name: "bar-transition",
          tag: "div"
        }, {
          default: Q(() => [
            (S(!0), T(X, null, J(t.bars, (w) => (S(), Z(qe, {
              key: w.ganttBarConfig.id,
              bar: w
            }, {
              default: Q(() => [
                U(o.$slots, "bar-label", { bar: w })
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
  z.extend(oe), z.extend(ie), z.extend(se), z.extend(le);
}
const Je = {
  install(t, r) {
    Ke(), t.component("GGanttChart", Ue), t.component("GGanttRow", We);
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
  We as GGanttRow,
  Je as default,
  Ke as extendDayjs,
  Je as ganttastic
};
