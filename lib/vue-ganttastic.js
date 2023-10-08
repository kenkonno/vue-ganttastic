import V from "dayjs";
import { inject as lt, computed as I, defineComponent as U, openBlock as O, createElementBlock as M, createElementVNode as $, Fragment as q, renderList as J, unref as _, normalizeStyle as L, renderSlot as A, createTextVNode as st, toDisplayString as tt, createCommentVNode as j, toRefs as et, ref as Y, watch as ut, nextTick as St, createBlock as X, Teleport as Xt, createVNode as Bt, Transition as Zt, withCtx as Z, getCurrentScope as Jt, onScopeDispose as te, getCurrentInstance as ee, onMounted as Lt, useSlots as ne, provide as it, withModifiers as ae, mergeProps as Gt, TransitionGroup as re } from "vue";
var ct = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {}, $t = { exports: {} };
(function(t, r) {
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
const oe = $t.exports;
var Yt = { exports: {} };
(function(t, r) {
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
(function(t, r) {
  (function(n, l) {
    t.exports = l();
  })(ct, function() {
    return function(n, l, i) {
      l.prototype.isBetween = function(u, f, g, c) {
        var a = i(u), e = i(f), o = (c = c || "()")[0] === "(", d = c[1] === ")";
        return (o ? this.isAfter(a, g) : !this.isBefore(a, g)) && (d ? this.isBefore(e, g) : !this.isAfter(e, g)) || (o ? this.isBefore(a, g) : !this.isAfter(a, g)) && (d ? this.isAfter(e, g) : !this.isBefore(e, g));
      };
    };
  });
})(Rt);
const se = Rt.exports;
var It = { exports: {} };
(function(t, r) {
  (function(n, l) {
    t.exports = l();
  })(ct, function() {
    var n = { LTS: "h:mm:ss A", LT: "h:mm A", L: "MM/DD/YYYY", LL: "MMMM D, YYYY", LLL: "MMMM D, YYYY h:mm A", LLLL: "dddd, MMMM D, YYYY h:mm A" }, l = /(\[[^[]*\])|([-_:/.,()\s]+)|(A|a|YYYY|YY?|MM?M?M?|Do|DD?|hh?|HH?|mm?|ss?|S{1,3}|z|ZZ?)/g, i = /\d\d/, u = /\d\d?/, f = /\d*[^-_:/,()\s\d]+/, g = {}, c = function(v) {
      return (v = +v) + (v > 68 ? 1900 : 2e3);
    }, a = function(v) {
      return function(b) {
        this[v] = +b;
      };
    }, e = [/[+-]\d\d:?(\d\d)?|Z/, function(v) {
      (this.zone || (this.zone = {})).offset = function(b) {
        if (!b || b === "Z")
          return 0;
        var x = b.match(/([+-]|\d\d)/g), m = 60 * x[1] + (+x[2] || 0);
        return m === 0 ? 0 : x[0] === "+" ? -m : m;
      }(v);
    }], o = function(v) {
      var b = g[v];
      return b && (b.indexOf ? b : b.s.concat(b.f));
    }, d = function(v, b) {
      var x, m = g.meridiem;
      if (m) {
        for (var h = 1; h <= 24; h += 1)
          if (v.indexOf(m(h, 0, b)) > -1) {
            x = h > 12;
            break;
          }
      } else
        x = v === (b ? "pm" : "PM");
      return x;
    }, w = { A: [f, function(v) {
      this.afternoon = d(v, !1);
    }], a: [f, function(v) {
      this.afternoon = d(v, !0);
    }], S: [/\d/, function(v) {
      this.milliseconds = 100 * +v;
    }], SS: [i, function(v) {
      this.milliseconds = 10 * +v;
    }], SSS: [/\d{3}/, function(v) {
      this.milliseconds = +v;
    }], s: [u, a("seconds")], ss: [u, a("seconds")], m: [u, a("minutes")], mm: [u, a("minutes")], H: [u, a("hours")], h: [u, a("hours")], HH: [u, a("hours")], hh: [u, a("hours")], D: [u, a("day")], DD: [i, a("day")], Do: [f, function(v) {
      var b = g.ordinal, x = v.match(/\d+/);
      if (this.day = x[0], b)
        for (var m = 1; m <= 31; m += 1)
          b(m).replace(/\[|\]/g, "") === v && (this.day = m);
    }], M: [u, a("month")], MM: [i, a("month")], MMM: [f, function(v) {
      var b = o("months"), x = (o("monthsShort") || b.map(function(m) {
        return m.slice(0, 3);
      })).indexOf(v) + 1;
      if (x < 1)
        throw new Error();
      this.month = x % 12 || x;
    }], MMMM: [f, function(v) {
      var b = o("months").indexOf(v) + 1;
      if (b < 1)
        throw new Error();
      this.month = b % 12 || b;
    }], Y: [/[+-]?\d+/, a("year")], YY: [i, function(v) {
      this.year = c(v);
    }], YYYY: [/\d{4}/, a("year")], Z: e, ZZ: e };
    function C(v) {
      var b, x;
      b = v, x = g && g.formats;
      for (var m = (v = b.replace(/(\[[^\]]+])|(LTS?|l{1,4}|L{1,4})/g, function(D, k, T) {
        var S = T && T.toUpperCase();
        return k || x[T] || n[T] || x[S].replace(/(\[[^\]]+])|(MMMM|MM|DD|dddd)/g, function(G, R, F) {
          return R || F.slice(1);
        });
      })).match(l), h = m.length, B = 0; B < h; B += 1) {
        var s = m[B], p = w[s], y = p && p[0], E = p && p[1];
        m[B] = E ? { regex: y, parser: E } : s.replace(/^\[|\]$/g, "");
      }
      return function(D) {
        for (var k = {}, T = 0, S = 0; T < h; T += 1) {
          var G = m[T];
          if (typeof G == "string")
            S += G.length;
          else {
            var R = G.regex, F = G.parser, N = D.slice(S), K = R.exec(N)[0];
            F.call(k, K), D = D.replace(K, "");
          }
        }
        return function(W) {
          var P = W.afternoon;
          if (P !== void 0) {
            var Q = W.hours;
            P ? Q < 12 && (W.hours += 12) : Q === 12 && (W.hours = 0), delete W.afternoon;
          }
        }(k), k;
      };
    }
    return function(v, b, x) {
      x.p.customParseFormat = !0, v && v.parseTwoDigitYear && (c = v.parseTwoDigitYear);
      var m = b.prototype, h = m.parse;
      m.parse = function(B) {
        var s = B.date, p = B.utc, y = B.args;
        this.$u = p;
        var E = y[1];
        if (typeof E == "string") {
          var D = y[2] === !0, k = y[3] === !0, T = D || k, S = y[2];
          k && (S = y[2]), g = this.$locale(), !D && S && (g = x.Ls[S]), this.$d = function(N, K, W) {
            try {
              if (["x", "X"].indexOf(K) > -1)
                return new Date((K === "X" ? 1e3 : 1) * N);
              var P = C(K)(N), Q = P.year, rt = P.month, Vt = P.day, qt = P.hours, Wt = P.minutes, Kt = P.seconds, Qt = P.milliseconds, _t = P.zone, gt = new Date(), ht = Vt || (Q || rt ? 1 : gt.getDate()), pt = Q || gt.getFullYear(), ot = 0;
              Q && !rt || (ot = rt > 0 ? rt - 1 : gt.getMonth());
              var mt = qt || 0, vt = Wt || 0, yt = Kt || 0, bt = Qt || 0;
              return _t ? new Date(Date.UTC(pt, ot, ht, mt, vt, yt, bt + 60 * _t.offset * 1e3)) : W ? new Date(Date.UTC(pt, ot, ht, mt, vt, yt, bt)) : new Date(pt, ot, ht, mt, vt, yt, bt);
            } catch {
              return new Date("");
            }
          }(s, E, p), this.init(), S && S !== !0 && (this.$L = this.locale(S).$L), T && s != this.format(E) && (this.$d = new Date("")), g = {};
        } else if (E instanceof Array)
          for (var G = E.length, R = 1; R <= G; R += 1) {
            y[1] = E[R - 1];
            var F = x.apply(this, y);
            if (F.isValid()) {
              this.$d = F.$d, this.$L = F.$L, this.init();
              break;
            }
            R === G && (this.$d = new Date(""));
          }
        else
          h.call(this, B);
      };
    };
  });
})(It);
const le = It.exports, Ht = Symbol("CHART_ROWS_KEY"), At = Symbol("CONFIG_KEY"), Ft = Symbol("EMIT_BAR_EVENT_KEY"), Pt = Symbol("BAR_CONTAINER_KEY");
function H() {
  const t = lt(At);
  if (!t)
    throw Error("Failed to inject config!");
  return t;
}
const jt = "YYYY-MM-DD HH:mm";
function nt(t = H()) {
  const { chartStart: r, chartEnd: n, barStart: l, barEnd: i, dateFormat: u } = t, f = I(() => c(r.value)), g = I(() => c(n.value)), c = (e, o) => {
    let d;
    if (o !== void 0 && typeof e != "string" && !(e instanceof Date) && (d = o === "start" ? e[l.value] : e[i.value]), typeof e == "string")
      d = e;
    else if (e instanceof Date)
      return V(e);
    const w = u.value || jt;
    return V(d, w, !0);
  };
  return {
    chartStartDayjs: f,
    chartEndDayjs: g,
    toDayjs: c,
    format: (e, o) => o === !1 ? e instanceof Date ? e : V(e).toDate() : (typeof e == "string" || e instanceof Date ? c(e) : e).format(o)
  };
}
function dt() {
  const { precision: t } = H(), { chartStartDayjs: r, chartEndDayjs: n } = nt(), l = I(() => {
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
      const f = [], g = [], c = l.value === "day" ? "date" : l.value, a = t.value;
      let e = r.value.startOf(a);
      const o = n.value.diff(r.value, "minutes", !0);
      let d = 0, w = e[c]();
      for (; e.isBefore(n.value) || e.isSame(n.value); ) {
        if (e[c]() !== w) {
          let h = 0;
          if (f.length === 0)
            h = e.startOf(c).diff(r.value, "minutes", !0) / o * 100;
          else if (e.isSameOrAfter(n.value))
            h = n.value.diff(
              e.subtract(1, c).startOf(c),
              "minutes",
              !0
            ) / o * 100;
          else {
            const s = e.startOf(c), p = e.subtract(1, c).startOf(c);
            h = s.diff(p, "minutes", !0) / o * 100;
          }
          const B = e.subtract(1, c);
          f.push({
            label: B.format(i[c]),
            value: String(w),
            date: B.toDate(),
            width: String(h) + "%"
          }), d = 0, w = e[c]();
        }
        let b = 0;
        g.length === 0 ? b = e.endOf(a).diff(r.value, "minutes", !0) / o * 100 : e.add(1, a).isSameOrAfter(n.value) ? b = n.value.diff(e.startOf(a), "minutes", !0) / o * 100 : b = e.endOf(a).diff(e.startOf(a), "minutes", !0) / o * 100;
        let x;
        switch (a) {
          case "week":
            x = e.startOf("week");
            break;
          default:
            x = e[a === "day" ? "date" : a]();
        }
        g.push({
          label: e.format(i[a]),
          value: String(x),
          date: e.toDate(),
          width: String(b) + "%"
        });
        const m = e;
        e = e.add(1, a), (e.isBefore(n.value) || e.isSame(n.value)) && (d += e.diff(m, "minutes", !0));
      }
      const C = n.value.isSame(n.value.startOf(c)) ? n.value[c]() - 1 : n.value[c]();
      return f.some((b) => b.value === String(C)) || (d += n.value.diff(
        e.subtract(1, a),
        "minutes",
        !0
      ), f.push({
        label: n.value.format(i[c]),
        value: String(w),
        date: n.value.toDate(),
        width: `${d / o * 100}%`
      })), { upperUnits: f, lowerUnits: g };
    })
  };
}
const ue = { class: "g-timeaxis" }, ce = { class: "g-timeunits-container" }, de = { class: "g-timeunits-container" }, fe = /* @__PURE__ */ U({
  __name: "GGanttTimeaxis",
  setup(t) {
    const { precision: r, colors: n } = H(), { timeaxisUnits: l } = dt();
    return (i, u) => (O(), M("div", ue, [
      $("div", ce, [
        (O(!0), M(q, null, J(_(l).upperUnits, ({ label: f, value: g, date: c, width: a }, e) => (O(), M("div", {
          key: c.getTime(),
          class: "g-upper-timeunit",
          style: L({
            background: e % 2 === 0 ? _(n).primary : _(n).secondary,
            color: _(n).text,
            width: a
          })
        }, [
          A(i.$slots, "upper-timeunit", {
            label: f,
            value: g,
            date: c
          }, () => [
            st(tt(f), 1)
          ])
        ], 4))), 128))
      ]),
      $("div", de, [
        (O(!0), M(q, null, J(_(l).lowerUnits, ({ label: f, value: g, date: c, width: a }, e) => (O(), M("div", {
          key: c.getTime(),
          class: "g-timeunit",
          style: L({
            background: e % 2 === 0 ? _(n).ternary : _(n).quartenary,
            color: _(n).text,
            flexDirection: _(r) === "hour" ? "column" : "row",
            alignItems: _(r) === "hour" ? "" : "center",
            width: a
          })
        }, [
          A(i.$slots, "timeunit", {
            label: f,
            value: g,
            date: c
          }, () => [
            st(tt(f), 1)
          ]),
          _(r) === "hour" ? (O(), M("div", {
            key: 0,
            class: "g-timeaxis-hour-pin",
            style: L({ background: _(n).text })
          }, null, 4)) : j("", !0)
        ], 4))), 128))
      ])
    ]));
  }
});
const ge = { class: "g-grid-container" }, he = /* @__PURE__ */ U({
  __name: "GGanttGrid",
  props: {
    highlightedDates: null
  },
  setup(t) {
    const r = t, n = I(() => {
      var u;
      return (u = r.highlightedDates) == null ? void 0 : u.map((f) => f.getTime());
    }), { colors: l } = H(), { timeaxisUnits: i } = dt();
    return (u, f) => (O(), M("div", ge, [
      (O(!0), M(q, null, J(_(i).lowerUnits, ({ label: g, value: c, width: a, date: e }) => {
        var o;
        return O(), M("div", {
          key: e.getTime(),
          class: "g-grid-line",
          style: L({
            width: a,
            background: (o = _(n)) != null && o.includes(e.getTime()) ? _(l).hoverHighlight : void 0
          })
        }, null, 4);
      }), 128))
    ]));
  }
});
const pe = /* @__PURE__ */ U({
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
    }, l = "cadetblue", { bar: i } = et(r), { precision: u, font: f, barStart: g, barEnd: c, rowHeight: a } = H(), e = Y("0px"), o = Y("0px");
    ut(
      () => r.bar,
      async () => {
        var p;
        await St();
        const x = ((p = i == null ? void 0 : i.value) == null ? void 0 : p.ganttBarConfig.id) || "";
        if (!x)
          return;
        const m = document.getElementById(x), { top: h, left: B } = (m == null ? void 0 : m.getBoundingClientRect()) || {
          top: 0,
          left: 0
        }, s = Math.max(B, 10);
        e.value = `${h + a.value - 10}px`, o.value = `${s}px`;
      },
      { deep: !0, immediate: !0 }
    );
    const d = I(() => {
      var x, m;
      return ((m = (x = i == null ? void 0 : i.value) == null ? void 0 : x.ganttBarConfig.style) == null ? void 0 : m.background) || l;
    }), { toDayjs: w } = nt(), C = I(() => {
      var x;
      return (x = i.value) == null ? void 0 : x[g.value];
    }), v = I(() => {
      var x;
      return (x = i.value) == null ? void 0 : x[c.value];
    }), b = I(() => {
      if (!(i != null && i.value))
        return "";
      const x = n[u.value], m = w(C.value).format(x), h = w(v.value).format(x);
      return `${m} \u2013 ${h}`;
    });
    return (x, m) => (O(), X(Xt, { to: "body" }, [
      Bt(Zt, {
        name: "g-fade",
        mode: "out-in"
      }, {
        default: Z(() => [
          t.modelValue ? (O(), M("div", {
            key: 0,
            class: "g-gantt-tooltip",
            style: L({
              top: e.value,
              left: o.value,
              fontFamily: _(f)
            })
          }, [
            $("div", {
              class: "g-gantt-tooltip-color-dot",
              style: L({ background: _(d) })
            }, null, 4),
            A(x.$slots, "default", {
              bar: _(i),
              barStart: _(C),
              barEnd: _(v)
            }, () => [
              st(tt(_(b)), 1)
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
var Dt;
const at = typeof window < "u";
at && ((Dt = window == null ? void 0 : window.navigator) == null ? void 0 : Dt.userAgent) && /iP(ad|hone|od)/.test(window.navigator.userAgent);
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
  ee() ? Lt(t) : r ? t() : St(t);
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
  const n = Y(), l = () => n.value = Boolean(t());
  return l(), be(l, r), n;
}
const wt = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {}, xt = "__vueuse_ssr_handlers__";
wt[xt] = wt[xt] || {};
wt[xt];
var Ot = Object.getOwnPropertySymbols, Be = Object.prototype.hasOwnProperty, _e = Object.prototype.propertyIsEnumerable, Ee = (t, r) => {
  var n = {};
  for (var l in t)
    Be.call(t, l) && r.indexOf(l) < 0 && (n[l] = t[l]);
  if (t != null && Ot)
    for (var l of Ot(t))
      r.indexOf(l) < 0 && _e.call(t, l) && (n[l] = t[l]);
  return n;
};
function De(t, r, n = {}) {
  const l = n, { window: i = we } = l, u = Ee(l, ["window"]);
  let f;
  const g = xe(() => i && "ResizeObserver" in i), c = () => {
    f && (f.disconnect(), f = void 0);
  }, a = ut(() => Ut(t), (o) => {
    c(), g.value && i && o && (f = new ResizeObserver(r), f.observe(o, u));
  }, { immediate: !0, flush: "post" }), e = () => {
    c(), a();
  };
  return ye(e), {
    isSupported: g,
    stop: e
  };
}
function Oe(t, r = { width: 0, height: 0 }, n = {}) {
  const l = Y(r.width), i = Y(r.height);
  return De(t, ([u]) => {
    l.value = u.contentRect.width, i.value = u.contentRect.height;
  }, n), ut(() => Ut(t), (u) => {
    l.value = u ? r.width : 0, i.value = u ? r.height : 0;
  }), {
    width: l,
    height: i
  };
}
var Ct;
(function(t) {
  t.UP = "UP", t.RIGHT = "RIGHT", t.DOWN = "DOWN", t.LEFT = "LEFT", t.NONE = "NONE";
})(Ct || (Ct = {}));
var Ce = Object.defineProperty, kt = Object.getOwnPropertySymbols, ke = Object.prototype.hasOwnProperty, Te = Object.prototype.propertyIsEnumerable, Tt = (t, r, n) => r in t ? Ce(t, r, { enumerable: !0, configurable: !0, writable: !0, value: n }) : t[r] = n, Me = (t, r) => {
  for (var n in r || (r = {}))
    ke.call(r, n) && Tt(t, n, r[n]);
  if (kt)
    for (var n of kt(r))
      Te.call(r, n) && Tt(t, n, r[n]);
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
Me({
  linear: ve
}, Se);
const Le = {
  key: 0,
  class: "g-footer"
}, Ge = { class: "g-footer-container" }, $e = /* @__PURE__ */ U({
  __name: "GGanttFooter",
  props: {
    labels: null
  },
  setup(t) {
    const { precision: r, colors: n } = H(), { timeaxisUnits: l } = dt();
    return (i, u) => t.labels ? (O(), M("div", Le, [
      $("div", Ge, [
        (O(!0), M(q, null, J(_(l).lowerUnits, ({ label: f, value: g, date: c, width: a }, e) => (O(), M("div", {
          key: f,
          class: "g-timeunit",
          style: L({
            background: e % 2 === 0 ? _(n).ternary : _(n).quartenary,
            color: _(n).text,
            flexDirection: _(r) === "hour" ? "column" : "row",
            alignItems: _(r) === "hour" ? "" : "center",
            width: a
          })
        }, [
          A(i.$slots, "timeunit", {
            label: f,
            value: g,
            date: c
          }, () => [
            st(tt(t.labels[e]), 1)
          ], !0)
        ], 4))), 128))
      ])
    ])) : j("", !0);
  }
});
const Ye = (t, r) => {
  const n = t.__vccOpts || t;
  for (const [l, i] of r)
    n[l] = i;
  return n;
}, Re = /* @__PURE__ */ Ye($e, [["__scopeId", "data-v-400629df"]]);
function ft(t = H()) {
  const { dateFormat: r, chartSize: n } = t, { chartStartDayjs: l, chartEndDayjs: i, toDayjs: u, format: f } = nt(t), g = I(() => i.value.diff(l.value, "minutes"));
  return {
    mapTimeToPosition: (e) => {
      const o = n.width.value || 0, d = u(e).diff(l.value, "minutes", !0);
      return Math.ceil(d / g.value * o);
    },
    mapPositionToTime: (e) => {
      const o = n.width.value || 0, d = e / o * g.value, w = f(l.value.add(d, "minutes"), r.value);
      if (typeof w == "string")
        return w;
      throw Error;
    }
  };
}
const Ie = /* @__PURE__ */ U({
  __name: "GGanttDrawTodayLine",
  setup(t) {
    const { mapTimeToPosition: r } = ft(), n = I(() => r(V().startOf("day").format("DD.MM.YYYY HH:mm")));
    return (l, i) => (O(), M("div", {
      class: "today-line",
      style: L({ left: _(n) + "px" })
    }, null, 4));
  }
});
const He = { class: "g-gantt-rows-container" }, Ae = /* @__PURE__ */ U({
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
    sticky: { type: Boolean },
    displayTodayLine: { type: Boolean }
  },
  emits: ["click-bar", "mousedown-bar", "mouseup-bar", "dblclick-bar", "mouseenter-bar", "mouseleave-bar", "dragstart-bar", "drag-bar", "dragend-bar", "contextmenu-bar"],
  setup(t, { emit: r }) {
    const n = t, { width: l, font: i, colorScheme: u } = et(n), f = ne(), g = I(
      () => typeof u.value != "string" ? u.value : Et[u.value] || Et.default
    ), c = () => {
      var B;
      const m = (B = f.default) == null ? void 0 : B.call(f), h = [];
      return m && m.forEach((s) => {
        var p;
        if ((p = s.props) != null && p.bars) {
          const y = s.props.bars;
          h.push(y);
        } else
          Array.isArray(s.children) && s.children.forEach((y) => {
            var D;
            const E = y;
            if ((D = E == null ? void 0 : E.props) != null && D.bars) {
              const k = E.props.bars;
              h.push(k);
            }
          });
      }), h;
    }, a = Y(!1), e = Y(!1), o = Y(void 0);
    let d;
    const w = (m) => {
      d && clearTimeout(d), d = setTimeout(() => {
        a.value = !0;
      }, 800), o.value = m;
    }, C = () => {
      clearTimeout(d), a.value = !1;
    }, v = (m, h, B, s) => {
      switch (m.type) {
        case "click":
          r("click-bar", { bar: h, e: m, datetime: B });
          break;
        case "mousedown":
          r("mousedown-bar", { bar: h, e: m, datetime: B });
          break;
        case "mouseup":
          r("mouseup-bar", { bar: h, e: m, datetime: B });
          break;
        case "dblclick":
          r("dblclick-bar", { bar: h, e: m, datetime: B });
          break;
        case "mouseenter":
          w(h), r("mouseenter-bar", { bar: h, e: m });
          break;
        case "mouseleave":
          C(), r("mouseleave-bar", { bar: h, e: m });
          break;
        case "dragstart":
          e.value = !0, r("dragstart-bar", { bar: h, e: m });
          break;
        case "drag":
          r("drag-bar", { bar: h, e: m });
          break;
        case "dragend":
          e.value = !1, r("dragend-bar", { bar: h, e: m });
          break;
        case "contextmenu":
          r("contextmenu-bar", { bar: h, e: m, datetime: B });
          break;
      }
    }, b = Y(null), x = Oe(b);
    return it(Ht, c), it(At, {
      ...et(n),
      colors: g,
      chartSize: x
    }), it(Ft, v), (m, h) => (O(), M(q, null, [
      $("div", {
        style: L([{ display: "flex", "flex-flow": "column" }, t.sticky ? "position: sticky; left:0;z-index:100; background: white;" : ""])
      }, [
        A(m.$slots, "side-menu")
      ], 4),
      $("div", {
        ref_key: "ganttChart",
        ref: b,
        class: "g-gantt-chart",
        style: L({ width: _(l), background: _(g).background, fontFamily: _(i) })
      }, [
        t.hideTimeaxis ? j("", !0) : (O(), X(fe, { key: 0 }, {
          "upper-timeunit": Z(({ label: B, value: s, date: p }) => [
            A(m.$slots, "upper-timeunit", {
              label: B,
              value: s,
              date: p
            })
          ]),
          timeunit: Z(({ label: B, value: s, date: p }) => [
            A(m.$slots, "timeunit", {
              label: B,
              value: s,
              date: p
            })
          ]),
          _: 3
        })),
        t.grid ? (O(), X(he, {
          key: 1,
          "highlighted-dates": t.highlightedDates
        }, null, 8, ["highlighted-dates"])) : j("", !0),
        $("div", He, [
          A(m.$slots, "default")
        ]),
        t.hideTimeaxis ? j("", !0) : (O(), X(Re, {
          key: 2,
          labels: t.footerLabels
        }, null, 8, ["labels"])),
        Bt(pe, {
          "model-value": a.value || e.value,
          bar: o.value
        }, {
          default: Z(() => [
            A(m.$slots, "bar-tooltip", { bar: o.value })
          ]),
          _: 3
        }, 8, ["model-value", "bar"]),
        t.displayTodayLine ? (O(), X(Ie, { key: 3 })) : j("", !0)
      ], 4),
      $("div", null, [
        A(m.$slots, "footer")
      ])
    ], 64));
  }
});
function Mt(t, r = () => null, n = () => null, l = H()) {
  const { barStart: i, barEnd: u, pushOnOverlap: f } = l, g = Y(!1);
  let c = 0, a;
  const { mapPositionToTime: e } = ft(l), { toDayjs: o } = nt(l), d = (h) => {
    const B = document.getElementById(t.ganttBarConfig.id);
    if (!B)
      return;
    switch (c = h.clientX - (B.getBoundingClientRect().left || 0), h.target.className) {
      case "g-gantt-bar-handle-left":
        document.body.style.cursor = "ew-resize", a = v;
        break;
      case "g-gantt-bar-handle-right":
        document.body.style.cursor = "ew-resize", a = b;
        break;
      default:
        a = C;
    }
    g.value = !0, window.addEventListener("mousemove", a), window.addEventListener("mouseup", m);
  }, w = () => {
    var s;
    const h = document.getElementById(t.ganttBarConfig.id), B = (s = h == null ? void 0 : h.closest(".g-gantt-row-bars-container")) == null ? void 0 : s.getBoundingClientRect();
    return { barElement: h, barContainer: B };
  }, C = (h) => {
    const { barElement: B, barContainer: s } = w();
    if (!B || !s)
      return;
    const p = B.getBoundingClientRect().width, y = h.clientX - s.left - c, E = y + p;
    if (!x(y, E)) {
      if (t[i.value].substring(0, 10) != e(y).substring(0, 10)) {
        const D = o(t[i.value]), T = o(t[u.value]).diff(D, "minute"), S = e(y).substring(0, 10) + " 00:00";
        t[i.value] = S, t[u.value] = o(S).add(T, "minute").format("DD.MM.YYYY HH:mm");
      }
      r(h, t);
    }
  }, v = (h) => {
    const { barElement: B, barContainer: s } = w();
    if (!B || !s)
      return;
    const p = h.clientX - s.left, y = e(p);
    if (!o(y).isSameOrAfter(o(t, "end"))) {
      if (t[i.value].substring(0, 10) != e(p).substring(0, 10)) {
        const E = e(p).substring(0, 10) + " 00:00";
        t[i.value] = E;
      }
      r(h, t);
    }
  }, b = (h) => {
    const { barElement: B, barContainer: s } = w();
    if (!B || !s)
      return;
    const p = h.clientX - s.left, y = e(p);
    if (!o(y).isSameOrBefore(o(t, "start"))) {
      if (t[i.value].substring(0, 10) != e(p).substring(0, 10)) {
        const E = e(p).substring(0, 10) + " 23:59";
        t[u.value] = E;
      }
      r(h, t);
    }
  }, x = (h, B) => {
    if (!f.value)
      return !1;
    const s = t.ganttBarConfig.dragLimitLeft, p = t.ganttBarConfig.dragLimitRight;
    return h && s != null && h < s || B && p != null && B > p;
  }, m = (h) => {
    g.value = !1, document.body.style.cursor = "", window.removeEventListener("mousemove", a), window.removeEventListener("mouseup", m), n(h, t);
  };
  return {
    isDragging: g,
    initDrag: d
  };
}
function zt() {
  const t = lt(Ht);
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
function Fe() {
  const t = H(), r = zt(), n = Nt(), { pushOnOverlap: l, barStart: i, barEnd: u, noOverlap: f, dateFormat: g } = t, c = /* @__PURE__ */ new Map(), { toDayjs: a, format: e } = nt(), o = (s, p) => {
    const { initDrag: y } = Mt(s, w, m, t);
    n({ ...p, type: "dragstart" }, s), y(p), h(s);
  }, d = (s, p) => {
    const y = s.ganttBarConfig.bundle;
    y != null && (r().forEach((E) => {
      E.forEach((D) => {
        if (D.ganttBarConfig.bundle === y) {
          const k = D === s ? m : () => null, { initDrag: T } = Mt(D, w, k, t);
          T(p), h(D);
        }
      });
    }), n({ ...p, type: "dragstart" }, s));
  }, w = (s, p) => {
    n({ ...s, type: "drag" }, p), C(p);
  }, C = (s) => {
    if (!(l != null && l.value))
      return;
    let p = s, { overlapBar: y, overlapType: E } = v(p);
    for (; y; ) {
      h(y);
      const D = a(p[i.value]), k = a(p[u.value]), T = a(y[i.value]), S = a(y[u.value]);
      let G;
      switch (E) {
        case "left":
          G = S.diff(D, "minutes", !0), y[u.value] = e(p[i.value], g.value), y[i.value] = e(
            T.subtract(G, "minutes"),
            g.value
          );
          break;
        case "right":
          G = k.diff(T, "minutes", !0), y[i.value] = e(k, g.value), y[u.value] = e(
            S.add(G, "minutes"),
            g.value
          );
          break;
        default:
          console.warn(
            "Vue-Ganttastic: One bar is inside of the other one! This should never occur while push-on-overlap is active!"
          );
          return;
      }
      y && (E === "left" || E === "right") && b(y, G, E), p = y, { overlapBar: y, overlapType: E } = v(y);
    }
  }, v = (s) => {
    let p, y, E;
    const D = r().find((R) => R.includes(s)) || [], k = a(s[i.value]), T = a(s[u.value]);
    return { overlapBar: D.find((R) => {
      if (R === s)
        return !1;
      const F = a(R[i.value]), N = a(R[u.value]);
      return p = k.isBetween(F, N), y = T.isBetween(F, N), E = F.isBetween(k, T) || N.isBetween(k, T), p || y || E;
    }), overlapType: p ? "left" : y ? "right" : E ? "between" : null };
  }, b = (s, p, y) => {
    h(s), s.ganttBarConfig.bundle && r().forEach((E) => {
      E.forEach((D) => {
        D.ganttBarConfig.bundle === s.ganttBarConfig.bundle && D !== s && (h(D), x(D, p, y));
      });
    });
  }, x = (s, p, y) => {
    switch (y) {
      case "left":
        s[i.value] = e(
          a(s, "start").subtract(p, "minutes"),
          g.value
        ), s[u.value] = e(
          a(s, "end").subtract(p, "minutes"),
          g.value
        );
        break;
      case "right":
        s[i.value] = e(
          a(s, "start").add(p, "minutes"),
          g.value
        ), s[u.value] = e(a(s, "end").add(p, "minutes"), g.value);
    }
    C(s);
  }, m = (s, p) => {
    B();
    const y = {
      ...s,
      type: "dragend"
    };
    n(y, p, void 0, new Map(c)), c.clear();
  }, h = (s) => {
    if (!c.has(s)) {
      const p = s[i.value], y = s[u.value];
      c.set(s, { oldStart: p, oldEnd: y });
    }
  }, B = () => {
    if (l.value || !f.value)
      return;
    let s = !1;
    c.forEach((p, y) => {
      const { overlapBar: E } = v(y);
      E != null && (s = !0);
    }), s && c.forEach(({ oldStart: p, oldEnd: y }, E) => {
      E[i.value] = p, E[u.value] = y;
    });
  };
  return {
    initDragOfBar: o,
    initDragOfBundle: d
  };
}
function Pe() {
  const { pushOnOverlap: t } = H(), r = zt(), n = (f) => {
    const g = [];
    return f != null && r().forEach((c) => {
      c.forEach((a) => {
        a.ganttBarConfig.bundle === f && g.push(a);
      });
    }), g;
  }, l = (f) => {
    if (!t.value || f.ganttBarConfig.pushOnOverlap === !1)
      return;
    for (const c of ["left", "right"]) {
      const a = c, { gapDistanceSoFar: e, bundleBarsAndGapDist: o } = i(
        f,
        0,
        a
      );
      let d = e;
      const w = o;
      if (!w)
        continue;
      for (let v = 0; v < w.length; v++) {
        const b = w[v].bar, x = w[v].gapDistance;
        n(b.ganttBarConfig.bundle).filter(
          (h) => h !== b
        ).forEach((h) => {
          const B = i(h, x, a), s = B.gapDistanceSoFar, p = B.bundleBarsAndGapDist;
          s != null && (!d || s < d) && (d = s), p.forEach((y) => {
            w.find((E) => E.bar === y.bar) || w.push(y);
          });
        });
      }
      const C = document.getElementById(f.ganttBarConfig.id);
      d != null && a === "left" ? f.ganttBarConfig.dragLimitLeft = C.offsetLeft - d : d != null && a === "right" && (f.ganttBarConfig.dragLimitRight = C.offsetLeft + C.offsetWidth + d);
    }
    n(f.ganttBarConfig.bundle).forEach((c) => {
      c.ganttBarConfig.dragLimitLeft = f.ganttBarConfig.dragLimitLeft, c.ganttBarConfig.dragLimitRight = f.ganttBarConfig.dragLimitRight;
    });
  }, i = (f, g = 0, c) => {
    const a = f.ganttBarConfig.bundle ? [{ bar: f, gapDistance: g }] : [];
    let e = f, o = u(e, c);
    if (c === "left")
      for (; o; ) {
        const d = document.getElementById(e.ganttBarConfig.id), w = document.getElementById(o.ganttBarConfig.id), C = w.offsetLeft + w.offsetWidth;
        if (g += d.offsetLeft - C, o.ganttBarConfig.immobile)
          return { gapDistanceSoFar: g, bundleBarsAndGapDist: a };
        o.ganttBarConfig.bundle && a.push({
          bar: o,
          gapDistance: g
        }), e = o, o = u(o, "left");
      }
    if (c === "right")
      for (; o; ) {
        const d = document.getElementById(e.ganttBarConfig.id), w = document.getElementById(o.ganttBarConfig.id), C = d.offsetLeft + d.offsetWidth;
        if (g += w.offsetLeft - C, o.ganttBarConfig.immobile)
          return { gapDistanceSoFar: g, bundleBarsAndGapDist: a };
        o.ganttBarConfig.bundle && a.push({
          bar: o,
          gapDistance: g
        }), e = o, o = u(o, "right");
      }
    return { gapDistanceSoFar: null, bundleBarsAndGapDist: a };
  }, u = (f, g) => {
    const c = document.getElementById(f.ganttBarConfig.id), a = r().find((o) => o.includes(f)) || [];
    let e = [];
    return g === "left" ? e = a.filter((o) => {
      const d = document.getElementById(o.ganttBarConfig.id);
      return d && d.offsetLeft < c.offsetLeft && o.ganttBarConfig.pushOnOverlap !== !1;
    }) : e = a.filter((o) => {
      const d = document.getElementById(o.ganttBarConfig.id);
      return d && d.offsetLeft > c.offsetLeft && o.ganttBarConfig.pushOnOverlap !== !1;
    }), e.length > 0 ? e.reduce((o, d) => {
      const w = document.getElementById(o.ganttBarConfig.id), C = document.getElementById(d.ganttBarConfig.id), v = Math.abs(w.offsetLeft - c.offsetLeft), b = Math.abs(C.offsetLeft - c.offsetLeft);
      return v < b ? o : d;
    }, e[0]) : null;
  };
  return {
    setDragLimitsOfGanttBar: l
  };
}
const je = ["id"], Ue = { class: "g-gantt-bar-label" }, ze = { style: { "z-index": "100" } }, Ne = /* @__PURE__ */ $("div", { class: "g-gantt-bar-handle-left" }, null, -1), Ve = /* @__PURE__ */ $("div", { class: "g-gantt-bar-handle-right" }, null, -1), qe = /* @__PURE__ */ U({
  __name: "GGanttBar",
  props: {
    bar: null
  },
  setup(t) {
    const r = t, n = Nt(), l = H(), { rowHeight: i } = l, { bar: u } = et(r), { mapTimeToPosition: f, mapPositionToTime: g } = ft(), { initDragOfBar: c, initDragOfBundle: a } = Fe(), { setDragLimitsOfGanttBar: e } = Pe(), o = Y(!1), d = I(() => u.value.ganttBarConfig);
    function w(D) {
      d.value.bundle != null ? a(u.value, D) : c(u.value, D), o.value = !0;
    }
    const C = () => {
      e(u.value), !d.value.immobile && (window.addEventListener("mousemove", w, {
        once: !0
      }), window.addEventListener(
        "mouseup",
        () => {
          window.removeEventListener("mousemove", w), o.value = !1;
        },
        { once: !0 }
      ));
    }, v = lt(Pt), b = (D) => {
      var S;
      D.preventDefault(), D.type === "mousedown" && C();
      const k = (S = v == null ? void 0 : v.value) == null ? void 0 : S.getBoundingClientRect();
      if (!k)
        return;
      const T = g(D.clientX - k.left);
      n(D, u.value, T);
    }, { barStart: x, barEnd: m, width: h, chartStart: B, chartEnd: s, chartSize: p } = l, y = Y(0), E = Y(0);
    return Lt(() => {
      ut(
        [u, h, B, s, p.width],
        () => {
          y.value = f(u.value[x.value]), E.value = f(u.value[m.value]);
        },
        { deep: !0, immediate: !0 }
      );
    }), (D, k) => (O(), M("div", {
      id: _(d).id,
      class: "g-gantt-bar",
      style: L({
        ..._(d).style,
        position: "absolute",
        top: `${_(i) * 0.1}px`,
        left: `${y.value}px`,
        width: `${E.value - y.value}px`,
        height: `${_(i) * 0.8}px`,
        zIndex: o.value ? 3 : 2
      }),
      onMousedown: b,
      onClick: b,
      onDblclick: b,
      onMouseenter: b,
      onMouseleave: b,
      onContextmenu: b
    }, [
      $("div", Ue, [
        A(D.$slots, "default", { bar: _(u) }, () => [
          $("div", ze, tt(_(d).label || ""), 1),
          _(d).progress ? (O(), M("div", {
            key: 0,
            style: L([{ position: "absolute", height: "100%", left: "0" }, {
              width: _(d).progress + "%",
              backgroundColor: _(d).progressColor
            }])
          }, null, 4)) : j("", !0)
        ])
      ]),
      _(d).hasHandles ? (O(), M(q, { key: 0 }, [
        Ne,
        Ve
      ], 64)) : j("", !0)
    ], 44, je));
  }
});
const We = /* @__PURE__ */ U({
  __name: "GGanttRow",
  props: {
    bars: null,
    highlightOnHover: { type: Boolean }
  },
  emits: ["drop"],
  setup(t, { emit: r }) {
    const n = t, { rowHeight: l, colors: i } = H(), { highlightOnHover: u } = et(n), f = Y(!1), g = I(() => ({
      height: `${l.value}px`,
      background: (u == null ? void 0 : u.value) && f.value ? i.value.hoverHighlight : null
    })), { mapPositionToTime: c } = ft(), a = Y(null);
    it(Pt, a);
    const e = (o) => {
      var v;
      const d = (v = a.value) == null ? void 0 : v.getBoundingClientRect();
      if (!d) {
        console.error("Vue-Ganttastic: failed to find bar container element for row.");
        return;
      }
      const w = o.clientX - d.left, C = c(w);
      r("drop", { e: o, datetime: C });
    };
    return (o, d) => (O(), M("div", {
      class: "g-gantt-row",
      style: L(_(g)),
      onDragover: d[0] || (d[0] = ae((w) => f.value = !0, ["prevent"])),
      onDragleave: d[1] || (d[1] = (w) => f.value = !1),
      onDrop: d[2] || (d[2] = (w) => e(w)),
      onMouseover: d[3] || (d[3] = (w) => f.value = !0),
      onMouseleave: d[4] || (d[4] = (w) => f.value = !1)
    }, [
      j("", !0),
      $("div", Gt({
        ref_key: "barContainer",
        ref: a,
        class: "g-gantt-row-bars-container"
      }, o.$attrs), [
        Bt(re, {
          name: "bar-transition",
          tag: "div"
        }, {
          default: Z(() => [
            (O(!0), M(q, null, J(t.bars, (w) => (O(), X(qe, {
              key: w.ganttBarConfig.id,
              bar: w
            }, {
              default: Z(() => [
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
const Ke = /* @__PURE__ */ U({
  __name: "GGanttLabelRow",
  props: {
    labels: null,
    styles: null
  },
  setup(t) {
    const { rowHeight: r, colors: n } = H(), { timeaxisUnits: l } = dt();
    return (i, u) => (O(), M("div", {
      class: "g-gantt-row",
      style: L({ height: _(r) + "px" })
    }, [
      $("div", Gt({
        ref: "barContainer",
        class: "g-gantt-row-bars-container"
      }, i.$attrs), [
        (O(!0), M(q, null, J(_(l).lowerUnits, ({ label: f, width: g, date: c }, a) => (O(), M("div", {
          key: c.getTime(),
          class: "g-timeunit",
          style: L({
            color: _(n).text,
            textAlign: "center",
            width: g
          })
        }, [
          $("span", {
            style: L(t.styles != null ? t.styles[a] : void 0)
          }, tt(t.labels[a]), 5)
        ], 4))), 128))
      ], 16)
    ], 4));
  }
});
function Qe() {
  V.extend(oe), V.extend(ie), V.extend(se), V.extend(le);
}
const tn = {
  install(t, r) {
    Qe(), t.component("GGanttChart", Ae), t.component("GGanttRow", We), t.component("GGanttLabelRow", Ke);
  }
};
function z(t, r = "top") {
  if (!t || typeof document > "u")
    return;
  const n = document.head, l = document.createElement("style");
  r === "top" && n.firstChild ? n.insertBefore(l, n.firstChild) : n.appendChild(l), l.appendChild(document.createTextNode(t));
}
z(`
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
z(`
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
z(`
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
z(`
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
z(`
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
z(`
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
z(`
.today-line {
  width: 2px;
  height: 100%;
  background-color: red;
  position: absolute;
  z-index: 1;
}
`, "top");
z(`
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
z(`
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
  Ke as GGanttLabelRow,
  We as GGanttRow,
  tn as default,
  Qe as extendDayjs,
  tn as ganttastic
};
