(function(T,I){typeof exports=="object"&&typeof module<"u"?I(exports,require("dayjs"),require("vue")):typeof define=="function"&&define.amd?define(["exports","dayjs","vue"],I):(T=typeof globalThis<"u"?globalThis:T||self,I(T.VueGanttastic={},T.dayjs,T.Vue))})(this,function(T,I,t){"use strict";const R=(e=>e&&typeof e=="object"&&"default"in e?e:{default:e})(I);var P=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},at={exports:{}};(function(e,l){(function(a,c){e.exports=c()})(P,function(){return function(a,c){c.prototype.isSameOrBefore=function(s,d){return this.isSame(s,d)||this.isBefore(s,d)}}})})(at);const Tt=at.exports;var it={exports:{}};(function(e,l){(function(a,c){e.exports=c()})(P,function(){return function(a,c){c.prototype.isSameOrAfter=function(s,d){return this.isSame(s,d)||this.isAfter(s,d)}}})})(it);const Lt=it.exports;var st={exports:{}};(function(e,l){(function(a,c){e.exports=c()})(P,function(){return function(a,c,s){c.prototype.isBetween=function(d,p,h,m){var r=s(d),n=s(p),o=(m=m||"()")[0]==="(",f=m[1]===")";return(o?this.isAfter(r,h):!this.isBefore(r,h))&&(f?this.isBefore(n,h):!this.isAfter(n,h))||(o?this.isBefore(r,h):!this.isAfter(r,h))&&(f?this.isAfter(n,h):!this.isBefore(n,h))}}})})(st);const Mt=st.exports;var lt={exports:{}};(function(e,l){(function(a,c){e.exports=c()})(P,function(){var a={LTS:"h:mm:ss A",LT:"h:mm A",L:"MM/DD/YYYY",LL:"MMMM D, YYYY",LLL:"MMMM D, YYYY h:mm A",LLLL:"dddd, MMMM D, YYYY h:mm A"},c=/(\[[^[]*\])|([-_:/.,()\s]+)|(A|a|YYYY|YY?|MM?M?M?|Do|DD?|hh?|HH?|mm?|ss?|S{1,3}|z|ZZ?)/g,s=/\d\d/,d=/\d\d?/,p=/\d*[^-_:/,()\s\d]+/,h={},m=function(g){return(g=+g)+(g>68?1900:2e3)},r=function(g){return function(w){this[g]=+w}},n=[/[+-]\d\d:?(\d\d)?|Z/,function(g){(this.zone||(this.zone={})).offset=function(w){if(!w||w==="Z")return 0;var k=w.match(/([+-]|\d\d)/g),E=60*k[1]+(+k[2]||0);return E===0?0:k[0]==="+"?-E:E}(g)}],o=function(g){var w=h[g];return w&&(w.indexOf?w:w.s.concat(w.f))},f=function(g,w){var k,E=h.meridiem;if(E){for(var u=1;u<=24;u+=1)if(g.indexOf(E(u,0,w))>-1){k=u>12;break}}else k=g===(w?"pm":"PM");return k},B={A:[p,function(g){this.afternoon=f(g,!1)}],a:[p,function(g){this.afternoon=f(g,!0)}],S:[/\d/,function(g){this.milliseconds=100*+g}],SS:[s,function(g){this.milliseconds=10*+g}],SSS:[/\d{3}/,function(g){this.milliseconds=+g}],s:[d,r("seconds")],ss:[d,r("seconds")],m:[d,r("minutes")],mm:[d,r("minutes")],H:[d,r("hours")],h:[d,r("hours")],HH:[d,r("hours")],hh:[d,r("hours")],D:[d,r("day")],DD:[s,r("day")],Do:[p,function(g){var w=h.ordinal,k=g.match(/\d+/);if(this.day=k[0],w)for(var E=1;E<=31;E+=1)w(E).replace(/\[|\]/g,"")===g&&(this.day=E)}],M:[d,r("month")],MM:[s,r("month")],MMM:[p,function(g){var w=o("months"),k=(o("monthsShort")||w.map(function(E){return E.slice(0,3)})).indexOf(g)+1;if(k<1)throw new Error;this.month=k%12||k}],MMMM:[p,function(g){var w=o("months").indexOf(g)+1;if(w<1)throw new Error;this.month=w%12||w}],Y:[/[+-]?\d+/,r("year")],YY:[s,function(g){this.year=m(g)}],YYYY:[/\d{4}/,r("year")],Z:n,ZZ:n};function D(g){var w,k;w=g,k=h&&h.formats;for(var E=(g=w.replace(/(\[[^\]]+])|(LTS?|l{1,4}|L{1,4})/g,function(C,S,v){var O=v&&v.toUpperCase();return S||k[v]||a[v]||k[O].replace(/(\[[^\]]+])|(MMMM|MM|DD|dddd)/g,function(L,M,$){return M||$.slice(1)})})).match(c),u=E.length,x=0;x<u;x+=1){var i=E[x],y=B[i],b=y&&y[0],_=y&&y[1];E[x]=_?{regex:b,parser:_}:i.replace(/^\[|\]$/g,"")}return function(C){for(var S={},v=0,O=0;v<u;v+=1){var L=E[v];if(typeof L=="string")O+=L.length;else{var M=L.regex,$=L.parser,N=C.slice(O),V=M.exec(N)[0];$.call(S,V),C=C.replace(V,"")}}return function(H){var Y=H.afternoon;if(Y!==void 0){var A=H.hours;Y?A<12&&(H.hours+=12):A===12&&(H.hours=0),delete H.afternoon}}(S),S}}return function(g,w,k){k.p.customParseFormat=!0,g&&g.parseTwoDigitYear&&(m=g.parseTwoDigitYear);var E=w.prototype,u=E.parse;E.parse=function(x){var i=x.date,y=x.utc,b=x.args;this.$u=y;var _=b[1];if(typeof _=="string"){var C=b[2]===!0,S=b[3]===!0,v=C||S,O=b[2];S&&(O=b[2]),h=this.$locale(),!C&&O&&(h=k.Ls[O]),this.$d=function(N,V,H){try{if(["x","X"].indexOf(V)>-1)return new Date((V==="X"?1e3:1)*N);var Y=D(V)(N),A=Y.year,W=Y.month,ye=Y.day,be=Y.hours,we=Y.minutes,Be=Y.seconds,xe=Y.milliseconds,Ot=Y.zone,Z=new Date,J=ye||(A||W?1:Z.getDate()),tt=A||Z.getFullYear(),X=0;A&&!W||(X=W>0?W-1:Z.getMonth());var et=be||0,nt=we||0,ot=Be||0,rt=xe||0;return Ot?new Date(Date.UTC(tt,X,J,et,nt,ot,rt+60*Ot.offset*1e3)):H?new Date(Date.UTC(tt,X,J,et,nt,ot,rt)):new Date(tt,X,J,et,nt,ot,rt)}catch{return new Date("")}}(i,_,y),this.init(),O&&O!==!0&&(this.$L=this.locale(O).$L),v&&i!=this.format(_)&&(this.$d=new Date("")),h={}}else if(_ instanceof Array)for(var L=_.length,M=1;M<=L;M+=1){b[1]=_[M-1];var $=k.apply(this,b);if($.isValid()){this.$d=$.$d,this.$L=$.$L,this.init();break}M===L&&(this.$d=new Date(""))}else u.call(this,x)}}})})(lt);const Gt=lt.exports,ct=Symbol("CHART_ROWS_KEY"),dt=Symbol("CONFIG_KEY"),ft=Symbol("EMIT_BAR_EVENT_KEY"),ut=Symbol("BAR_CONTAINER_KEY");function G(){const e=t.inject(dt);if(!e)throw Error("Failed to inject config!");return e}const gt="YYYY-MM-DD HH:mm";function j(e=G()){const{chartStart:l,chartEnd:a,barStart:c,barEnd:s,dateFormat:d}=e,p=t.computed(()=>m(l.value)),h=t.computed(()=>m(a.value)),m=(n,o)=>{let f;if(o!==void 0&&typeof n!="string"&&!(n instanceof Date)&&(f=o==="start"?n[c.value]:n[s.value]),typeof n=="string")f=n;else if(n instanceof Date)return R.default(n);const B=d.value||gt;return R.default(f,B,!0)};return{chartStartDayjs:p,chartEndDayjs:h,toDayjs:m,format:(n,o)=>o===!1?n instanceof Date?n:R.default(n).toDate():(typeof n=="string"||n instanceof Date?m(n):n).format(o)}}function U(){const{precision:e}=G(),{chartStartDayjs:l,chartEndDayjs:a}=j(),c=t.computed(()=>{switch(e==null?void 0:e.value){case"hour":return"day";case"day":return"month";case"week":return"month";case"month":return"year";default:throw new Error("Precision prop incorrect. Must be one of the following: 'hour', 'day', 'month'")}}),s={hour:"HH",date:"DD.MMM ",day:"DD",week:"DD",month:"MMMM YYYY",year:"YYYY"};return{timeaxisUnits:t.computed(()=>{const p=[],h=[],m=c.value==="day"?"date":c.value,r=e.value;let n=l.value.startOf(r);const o=a.value.diff(l.value,"minutes",!0);let f=0,B=n[m]();for(;n.isBefore(a.value)||n.isSame(a.value);){if(n[m]()!==B){let u=0;if(p.length===0)u=n.startOf(m).diff(l.value,"minutes",!0)/o*100;else if(n.isSameOrAfter(a.value))u=a.value.diff(n.subtract(1,m).startOf(m),"minutes",!0)/o*100;else{const i=n.startOf(m),y=n.subtract(1,m).startOf(m);u=i.diff(y,"minutes",!0)/o*100}const x=n.subtract(1,m);p.push({label:x.format(s[m]),value:String(B),date:x.toDate(),width:String(u)+"%"}),f=0,B=n[m]()}let w=0;h.length===0?w=n.endOf(r).diff(l.value,"minutes",!0)/o*100:n.add(1,r).isSameOrAfter(a.value)?w=a.value.diff(n.startOf(r),"minutes",!0)/o*100:w=n.endOf(r).diff(n.startOf(r),"minutes",!0)/o*100;let k;switch(r){case"week":k=n.startOf("week");break;default:k=n[r==="day"?"date":r]()}h.push({label:n.format(s[r]),value:String(k),date:n.toDate(),width:String(w)+"%"});const E=n;n=n.add(1,r),(n.isBefore(a.value)||n.isSame(a.value))&&(f+=n.diff(E,"minutes",!0))}const D=a.value.isSame(a.value.startOf(m))?a.value[m]()-1:a.value[m]();return p.some(w=>w.value===String(D))||(f+=a.value.diff(n.subtract(1,r),"minutes",!0),p.push({label:a.value.format(s[m]),value:String(B),date:a.value.toDate(),width:`${f/o*100}%`})),{upperUnits:p,lowerUnits:h}})}}const $t={class:"g-timeaxis"},Yt=["onClick"],Rt={class:"milestone-description"},Nt=["onClick"],It=t.defineComponent({__name:"GGanttTimeaxis",props:{mileStoneList:null},emits:["onClickTimeUnit","onClickMilestone"],setup(e,{emit:l}){const a=e,{precision:c,colors:s}=G(),{timeaxisUnits:d}=U(),p=()=>{var n;return((n=a.mileStoneList)==null?void 0:n.length)>0?{minHeight:"33%"}:{height:"50%"}},h=n=>c.value=="week"?a.mileStoneList.map(o=>r(o.date).getTime()).includes(r(n).getTime()):a.mileStoneList.map(o=>o.date.getTime()).includes(n.getTime()),m=n=>c.value=="week"?a.mileStoneList.find(o=>r(o.date).getTime()===r(n).getTime()):a.mileStoneList.find(o=>o.date.getTime()===n.getTime());function r(n){n=new Date(n);let o=n.getDay(),f=n.getDate()-o+(o==0?-6:1);return new Date(n.setDate(f))}return(n,o)=>{var f;return t.openBlock(),t.createElementBlock("div",$t,[t.createElementVNode("div",{class:"g-timeunits-container",style:p},[(t.openBlock(!0),t.createElementBlock(t.Fragment,null,t.renderList(t.unref(d).upperUnits,({label:B,value:D,date:g,width:w},k)=>(t.openBlock(),t.createElementBlock("div",{key:g.getTime(),class:"g-upper-timeunit",style:t.normalizeStyle({background:k%2===0?t.unref(s).primary:t.unref(s).secondary,color:t.unref(s).text,width:w})},[t.renderSlot(n.$slots,"upper-timeunit",{label:B,value:D,date:g},()=>[t.createTextVNode(t.toDisplayString(B),1)])],4))),128))]),t.createElementVNode("div",{class:"g-timeunits-container",style:p},[(t.openBlock(!0),t.createElementBlock(t.Fragment,null,t.renderList(t.unref(d).lowerUnits,({label:B,value:D,date:g,width:w},k)=>(t.openBlock(),t.createElementBlock("div",{key:g.getTime(),class:"g-timeunit",style:t.normalizeStyle({background:k%2===0?t.unref(s).ternary:t.unref(s).quartenary,color:t.unref(s).text,flexDirection:t.unref(c)==="hour"?"column":"row",alignItems:t.unref(c)==="hour"?"":"center",width:w}),onClick:E=>l("onClickTimeUnit",{date:g})},[t.renderSlot(n.$slots,"timeunit",{label:B,value:D,date:g},()=>[t.createTextVNode(t.toDisplayString(B),1)]),t.unref(c)==="hour"?(t.openBlock(),t.createElementBlock("div",{key:0,class:"g-timeaxis-hour-pin",style:t.normalizeStyle({background:t.unref(s).text})},null,4)):t.createCommentVNode("",!0)],12,Yt))),128))]),((f=e.mileStoneList)==null?void 0:f.length)>0?(t.openBlock(),t.createElementBlock("div",{key:0,class:"g-timeunits-container",style:p},[(t.openBlock(!0),t.createElementBlock(t.Fragment,null,t.renderList(t.unref(d).lowerUnits,({label:B,value:D,date:g,width:w},k)=>(t.openBlock(),t.createElementBlock("div",{key:g.getTime(),class:"g-timeunit",style:t.normalizeStyle({color:t.unref(s).text,flexDirection:t.unref(c)==="hour"?"column":"row",alignItems:t.unref(c)==="hour"?"":"center",width:w})},[h(g)?t.renderSlot(n.$slots,"timeunit",{key:0,label:B,value:D,date:g},()=>[t.createElementVNode("p",Rt,[t.createTextVNode("\u25BC "),t.createElementVNode("span",{class:"milestone-description",onClick:E=>l("onClickMilestone",{milestone:m(g)})},t.toDisplayString(m(g).description),9,Nt)])]):t.createCommentVNode("",!0),t.unref(c)==="hour"?(t.openBlock(),t.createElementBlock("div",{key:1,class:"g-timeaxis-hour-pin",style:t.normalizeStyle({background:t.unref(s).text})},null,4)):t.createCommentVNode("",!0)],4))),128))])):t.createCommentVNode("",!0)])}}}),ke="",Ht={class:"g-grid-container"},Vt=t.defineComponent({__name:"GGanttGrid",props:{highlightedDates:null},setup(e){const l=e,a=t.computed(()=>{var d;return(d=l.highlightedDates)==null?void 0:d.map(p=>p.getTime())}),{colors:c}=G(),{timeaxisUnits:s}=U();return(d,p)=>(t.openBlock(),t.createElementBlock("div",Ht,[(t.openBlock(!0),t.createElementBlock(t.Fragment,null,t.renderList(t.unref(s).lowerUnits,({label:h,value:m,width:r,date:n})=>{var o;return t.openBlock(),t.createElementBlock("div",{key:n.getTime(),class:"g-grid-line",style:t.normalizeStyle({width:r,background:(o=t.unref(a))!=null&&o.includes(n.getTime())?t.unref(c).hoverHighlight:void 0})},null,4)}),128))]))}}),Ee="",At=t.defineComponent({__name:"GGanttBarTooltip",props:{bar:null,modelValue:{type:Boolean}},setup(e){const l=e,a={hour:"HH:mm",day:"DD. MMM HH:mm",week:"DD. MMM HH:mm",month:"DD. MMMM YYYY"},c="cadetblue",{bar:s}=t.toRefs(l),{precision:d,font:p,barStart:h,barEnd:m,rowHeight:r}=G(),n=t.ref("0px"),o=t.ref("0px");t.watch(()=>l.bar,async()=>{var y;await t.nextTick();const k=((y=s==null?void 0:s.value)==null?void 0:y.ganttBarConfig.id)||"";if(!k)return;const E=document.getElementById(k),{top:u,left:x}=(E==null?void 0:E.getBoundingClientRect())||{top:0,left:0},i=Math.max(x,10);n.value=`${u+r.value-10}px`,o.value=`${i}px`},{deep:!0,immediate:!0});const f=t.computed(()=>{var k,E;return((E=(k=s==null?void 0:s.value)==null?void 0:k.ganttBarConfig.style)==null?void 0:E.background)||c}),{toDayjs:B}=j(),D=t.computed(()=>{var k;return(k=s.value)==null?void 0:k[h.value]}),g=t.computed(()=>{var k;return(k=s.value)==null?void 0:k[m.value]}),w=t.computed(()=>{if(!(s!=null&&s.value))return"";const k=a[d.value],E=B(D.value).format(k),u=B(g.value).format(k);return`${E} \u2013 ${u}`});return(k,E)=>(t.openBlock(),t.createBlock(t.Teleport,{to:"body"},[t.createVNode(t.Transition,{name:"g-fade",mode:"out-in"},{default:t.withCtx(()=>[e.modelValue?(t.openBlock(),t.createElementBlock("div",{key:0,class:"g-gantt-tooltip",style:t.normalizeStyle({top:n.value,left:o.value,fontFamily:t.unref(p)})},[t.createElementVNode("div",{class:"g-gantt-tooltip-color-dot",style:t.normalizeStyle({background:t.unref(f)})},null,4),t.renderSlot(k.$slots,"default",{bar:t.unref(s),barStart:t.unref(D),barEnd:t.unref(g)},()=>[t.createTextVNode(t.toDisplayString(t.unref(w)),1)])],4)):t.createCommentVNode("",!0)]),_:3})]))}}),_e="",mt={default:{primary:"#eeeeee",secondary:"#E0E0E0",ternary:"#F5F5F5",quartenary:"#ededed",hoverHighlight:"rgba(204, 216, 219, 0.5)",text:"#404040",background:"white"},creamy:{primary:"#ffe8d9",secondary:"#fcdcc5",ternary:"#fff6f0",quartenary:"#f7ece6",hoverHighlight:"rgba(230, 221, 202, 0.5)",text:"#542d05",background:"white"},crimson:{primary:"#a82039",secondary:"#c41238",ternary:"#db4f56",quartenary:"#ce5f64",hoverHighlight:"rgba(196, 141, 141, 0.5)",text:"white",background:"white"},dark:{primary:"#404040",secondary:"#303030",ternary:"#353535",quartenary:"#383838",hoverHighlight:"rgba(159, 160, 161, 0.5)",text:"white",background:"#525252",toast:"#1f1f1f"},flare:{primary:"#e08a38",secondary:"#e67912",ternary:"#5e5145",quartenary:"#665648",hoverHighlight:"rgba(196, 141, 141, 0.5)",text:"white",background:"white"},fuchsia:{primary:"#de1d5a",secondary:"#b50b41",ternary:"#ff7da6",quartenary:"#f2799f",hoverHighlight:"rgba(196, 141, 141, 0.5)",text:"white",background:"white"},grove:{primary:"#3d9960",secondary:"#288542",ternary:"#72b585",quartenary:"#65a577",hoverHighlight:"rgba(160, 219, 171, 0.5)",text:"white",background:"white"},"material-blue":{primary:"#0D47A1",secondary:"#1565C0",ternary:"#42a5f5",quartenary:"#409fed",hoverHighlight:"rgba(110, 165, 196, 0.5)",text:"white",background:"white"},sky:{primary:"#b5e3ff",secondary:"#a1d6f7",ternary:"#d6f7ff",quartenary:"#d0edf4",hoverHighlight:"rgba(193, 202, 214, 0.5)",text:"#022c47",background:"white"},slumber:{primary:"#2a2f42",secondary:"#2f3447",ternary:"#35394d",quartenary:"#2c3044",hoverHighlight:"rgba(179, 162, 127, 0.5)",text:"#ffe0b3",background:"#38383b",toast:"#1f1f1f"},vue:{primary:"#258a5d",secondary:"#41B883",ternary:"#35495E",quartenary:"#2a3d51",hoverHighlight:"rgba(160, 219, 171, 0.5)",text:"white",background:"white"}};var pt;const F=typeof window<"u";F&&((pt=window==null?void 0:window.navigator)==null?void 0:pt.userAgent)&&/iP(ad|hone|od)/.test(window.navigator.userAgent);function jt(e){return typeof e=="function"?e():t.unref(e)}function Ft(e){return e}function zt(e){return t.getCurrentScope()?(t.onScopeDispose(e),!0):!1}function Pt(e,l=!0){t.getCurrentInstance()?t.onMounted(e):l?e():t.nextTick(e)}function ht(e){var l;const a=jt(e);return(l=a==null?void 0:a.$el)!=null?l:a}const Ut=F?window:void 0;F&&window.document,F&&window.navigator,F&&window.location;function qt(e,l=!1){const a=t.ref(),c=()=>a.value=Boolean(e());return c(),Pt(c,l),a}const K=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},Q="__vueuse_ssr_handlers__";K[Q]=K[Q]||{},K[Q];var yt=Object.getOwnPropertySymbols,Wt=Object.prototype.hasOwnProperty,Xt=Object.prototype.propertyIsEnumerable,Kt=(e,l)=>{var a={};for(var c in e)Wt.call(e,c)&&l.indexOf(c)<0&&(a[c]=e[c]);if(e!=null&&yt)for(var c of yt(e))l.indexOf(c)<0&&Xt.call(e,c)&&(a[c]=e[c]);return a};function Qt(e,l,a={}){const c=a,{window:s=Ut}=c,d=Kt(c,["window"]);let p;const h=qt(()=>s&&"ResizeObserver"in s),m=()=>{p&&(p.disconnect(),p=void 0)},r=t.watch(()=>ht(e),o=>{m(),h.value&&s&&o&&(p=new ResizeObserver(l),p.observe(o,d))},{immediate:!0,flush:"post"}),n=()=>{m(),r()};return zt(n),{isSupported:h,stop:n}}function Zt(e,l={width:0,height:0},a={}){const c=t.ref(l.width),s=t.ref(l.height);return Qt(e,([d])=>{c.value=d.contentRect.width,s.value=d.contentRect.height},a),t.watch(()=>ht(e),d=>{c.value=d?l.width:0,s.value=d?l.height:0}),{width:c,height:s}}var bt;(function(e){e.UP="UP",e.RIGHT="RIGHT",e.DOWN="DOWN",e.LEFT="LEFT",e.NONE="NONE"})(bt||(bt={}));var Jt=Object.defineProperty,wt=Object.getOwnPropertySymbols,te=Object.prototype.hasOwnProperty,ee=Object.prototype.propertyIsEnumerable,Bt=(e,l,a)=>l in e?Jt(e,l,{enumerable:!0,configurable:!0,writable:!0,value:a}):e[l]=a,ne=(e,l)=>{for(var a in l||(l={}))te.call(l,a)&&Bt(e,a,l[a]);if(wt)for(var a of wt(l))ee.call(l,a)&&Bt(e,a,l[a]);return e};ne({linear:Ft},{easeInSine:[.12,0,.39,0],easeOutSine:[.61,1,.88,1],easeInOutSine:[.37,0,.63,1],easeInQuad:[.11,0,.5,0],easeOutQuad:[.5,1,.89,1],easeInOutQuad:[.45,0,.55,1],easeInCubic:[.32,0,.67,0],easeOutCubic:[.33,1,.68,1],easeInOutCubic:[.65,0,.35,1],easeInQuart:[.5,0,.75,0],easeOutQuart:[.25,1,.5,1],easeInOutQuart:[.76,0,.24,1],easeInQuint:[.64,0,.78,0],easeOutQuint:[.22,1,.36,1],easeInOutQuint:[.83,0,.17,1],easeInExpo:[.7,0,.84,0],easeOutExpo:[.16,1,.3,1],easeInOutExpo:[.87,0,.13,1],easeInCirc:[.55,0,1,.45],easeOutCirc:[0,.55,.45,1],easeInOutCirc:[.85,0,.15,1],easeInBack:[.36,0,.66,-.56],easeOutBack:[.34,1.56,.64,1],easeInOutBack:[.68,-.6,.32,1.6]});const oe={key:0,class:"g-footer"},re={class:"g-footer-container"},ae=t.defineComponent({__name:"GGanttFooter",props:{labels:null},setup(e){const{precision:l,colors:a}=G(),{timeaxisUnits:c}=U();return(s,d)=>e.labels?(t.openBlock(),t.createElementBlock("div",oe,[t.createElementVNode("div",re,[(t.openBlock(!0),t.createElementBlock(t.Fragment,null,t.renderList(t.unref(c).lowerUnits,({label:p,value:h,date:m,width:r},n)=>(t.openBlock(),t.createElementBlock("div",{key:p,class:"g-timeunit",style:t.normalizeStyle({background:n%2===0?t.unref(a).ternary:t.unref(a).quartenary,color:t.unref(a).text,flexDirection:t.unref(l)==="hour"?"column":"row",alignItems:t.unref(l)==="hour"?"":"center",width:r})},[t.renderSlot(s.$slots,"timeunit",{label:p,value:h,date:m},()=>[t.createTextVNode(t.toDisplayString(e.labels[n]),1)],!0)],4))),128))])])):t.createCommentVNode("",!0)}}),De="",ie=((e,l)=>{const a=e.__vccOpts||e;for(const[c,s]of l)a[c]=s;return a})(ae,[["__scopeId","data-v-400629df"]]);function q(e=G()){const{dateFormat:l,chartSize:a}=e,{chartStartDayjs:c,chartEndDayjs:s,toDayjs:d,format:p}=j(e),h=t.computed(()=>s.value.diff(c.value,"minutes"));return{mapTimeToPosition:n=>{const o=a.width.value||0,f=d(n).diff(c.value,"minutes",!0);return Math.ceil(f/h.value*o)},mapPositionToTime:n=>{const o=a.width.value||0,f=n/o*h.value,B=p(c.value.add(f,"minutes"),l.value);if(typeof B=="string")return B;throw Error}}}const se=t.defineComponent({__name:"GGanttDrawTodayLine",emits:["today-line-position-x"],setup(e,{emit:l}){const{mapTimeToPosition:a}=q(),c=t.computed(()=>(l("today-line-position-x",{xPosition:a(R.default().startOf("day").format("DD.MM.YYYY HH:mm"))}),a(R.default().startOf("day").format("DD.MM.YYYY HH:mm"))));return(s,d)=>(t.openBlock(),t.createElementBlock("div",{class:"today-line",style:t.normalizeStyle({left:t.unref(c)+"px"})},null,4))}}),ve="",le={class:"g-gantt-rows-container"},xt=t.defineComponent({__name:"GGanttChart",props:{chartStart:null,chartEnd:null,precision:{default:"day"},barStart:null,barEnd:null,dateFormat:{type:[String,Boolean],default:gt},width:{default:"100%"},hideTimeaxis:{type:Boolean,default:!1},colorScheme:{default:"default"},grid:{type:Boolean,default:!1},pushOnOverlap:{type:Boolean,default:!1},noOverlap:{type:Boolean,default:!1},rowHeight:{default:40},highlightedDates:{default:()=>[]},font:{default:"inherit"},footerLabels:null,sticky:{type:Boolean},displayTodayLine:{type:Boolean},mileStoneList:null},emits:["click-bar","mousedown-bar","mouseup-bar","dblclick-bar","mouseenter-bar","mouseleave-bar","dragstart-bar","drag-bar","dragend-bar","contextmenu-bar","today-line-position-x","onClickTimeUnit","onClickMilestone"],setup(e,{emit:l}){const a=e,{width:c,font:s,colorScheme:d}=t.toRefs(a),p=t.useSlots(),h=t.computed(()=>typeof d.value!="string"?d.value:mt[d.value]||mt.default),m=()=>{var i;const u=(i=p.default)==null?void 0:i.call(p),x=[];return u&&u.forEach(y=>{var b;if((b=y.props)!=null&&b.bars){const _=y.props.bars;x.push(_)}else Array.isArray(y.children)&&y.children.forEach(_=>{var S;const C=_;if((S=C==null?void 0:C.props)!=null&&S.bars){const v=C.props.bars;x.push(v)}})}),x},r=t.ref(!1),n=t.ref(!1),o=t.ref(void 0);let f;const B=u=>{f&&clearTimeout(f),f=setTimeout(()=>{r.value=!0},800),o.value=u},D=()=>{clearTimeout(f),r.value=!1},g=(u,x,i,y)=>{switch(u.type){case"click":l("click-bar",{bar:x,e:u,datetime:i});break;case"mousedown":l("mousedown-bar",{bar:x,e:u,datetime:i});break;case"mouseup":l("mouseup-bar",{bar:x,e:u,datetime:i});break;case"dblclick":l("dblclick-bar",{bar:x,e:u,datetime:i});break;case"mouseenter":B(x),l("mouseenter-bar",{bar:x,e:u});break;case"mouseleave":D(),l("mouseleave-bar",{bar:x,e:u});break;case"dragstart":n.value=!0,l("dragstart-bar",{bar:x,e:u});break;case"drag":l("drag-bar",{bar:x,e:u});break;case"dragend":n.value=!1,l("dragend-bar",{bar:x,e:u});break;case"contextmenu":l("contextmenu-bar",{bar:x,e:u,datetime:i});break}},w=t.ref(null),k=t.ref(null),E=Zt(w);return t.provide(ct,m),t.provide(dt,{...t.toRefs(a),colors:h,chartSize:E}),t.provide(ft,g),(u,x)=>(t.openBlock(),t.createElementBlock(t.Fragment,null,[t.createElementVNode("div",{style:t.normalizeStyle([{display:"flex","flex-flow":"column"},e.sticky?"position: sticky; left:0;z-index:100; background: white;":""]),class:"g-gantt-wrapper",ref_key:"gGanttWrapperRef",ref:k},[t.renderSlot(u.$slots,"side-menu")],4),t.createElementVNode("div",{ref_key:"ganttChart",ref:w,class:"g-gantt-chart",style:t.normalizeStyle({width:t.unref(c),background:t.unref(h).background,fontFamily:t.unref(s)})},[e.hideTimeaxis?t.createCommentVNode("",!0):(t.openBlock(),t.createBlock(It,{key:0,"mile-stone-list":e.mileStoneList,onOnClickTimeUnit:x[0]||(x[0]=i=>u.$emit("onClickTimeUnit",i)),onOnClickMilestone:x[1]||(x[1]=i=>u.$emit("onClickMilestone",i))},{"upper-timeunit":t.withCtx(({label:i,value:y,date:b})=>[t.renderSlot(u.$slots,"upper-timeunit",{label:i,value:y,date:b})]),timeunit:t.withCtx(({label:i,value:y,date:b})=>[t.renderSlot(u.$slots,"timeunit",{label:i,value:y,date:b})]),_:3},8,["mile-stone-list"])),t.createElementVNode("div",le,[e.grid?(t.openBlock(),t.createBlock(Vt,{key:0,"highlighted-dates":e.highlightedDates},null,8,["highlighted-dates"])):t.createCommentVNode("",!0),t.renderSlot(u.$slots,"default")]),e.hideTimeaxis?t.createCommentVNode("",!0):(t.openBlock(),t.createBlock(ie,{key:1,labels:e.footerLabels},null,8,["labels"])),t.createVNode(At,{"model-value":r.value||n.value,bar:o.value},{default:t.withCtx(()=>[t.renderSlot(u.$slots,"bar-tooltip",{bar:o.value})]),_:3},8,["model-value","bar"]),e.displayTodayLine?(t.openBlock(),t.createBlock(se,{key:2,onTodayLinePositionX:x[2]||(x[2]=i=>l("today-line-position-x",i))})):t.createCommentVNode("",!0)],4),t.createElementVNode("div",null,[t.renderSlot(u.$slots,"footer")])],64))}}),Oe="";function kt(e,l=()=>null,a=()=>null,c=G()){const{barStart:s,barEnd:d,pushOnOverlap:p}=c,h=t.ref(!1);let m=0,r;const{mapPositionToTime:n}=q(c),{toDayjs:o}=j(c),f=u=>{const x=document.getElementById(e.ganttBarConfig.id);if(!x)return;switch(m=u.clientX-(x.getBoundingClientRect().left||0),u.target.className){case"g-gantt-bar-handle-left":document.body.style.cursor="ew-resize",r=g;break;case"g-gantt-bar-handle-right":document.body.style.cursor="ew-resize",r=w;break;default:r=D}h.value=!0,window.addEventListener("mousemove",r),window.addEventListener("mouseup",E)},B=()=>{var i;const u=document.getElementById(e.ganttBarConfig.id),x=(i=u==null?void 0:u.closest(".g-gantt-row-bars-container"))==null?void 0:i.getBoundingClientRect();return{barElement:u,barContainer:x}},D=u=>{const{barElement:x,barContainer:i}=B();if(!x||!i)return;const y=x.getBoundingClientRect().width,b=u.clientX-i.left-m,_=b+y;if(!k(b,_)){if(e[s.value].substring(0,10)!=n(b).substring(0,10)){const C=o(e[s.value]),v=o(e[d.value]).diff(C,"minute"),O=n(b).substring(0,10)+" 00:00";e[s.value]=O,e[d.value]=o(O).add(v,"minute").format("DD.MM.YYYY HH:mm")}l(u,e)}},g=u=>{const{barElement:x,barContainer:i}=B();if(!x||!i)return;const y=u.clientX-i.left,b=n(y);if(!o(b).isSameOrAfter(o(e,"end"))){if(e[s.value].substring(0,10)!=n(y).substring(0,10)){const _=n(y).substring(0,10)+" 00:00";e[s.value]=_}l(u,e)}},w=u=>{const{barElement:x,barContainer:i}=B();if(!x||!i)return;const y=u.clientX-i.left,b=n(y);if(!o(b).isSameOrBefore(o(e,"start"))){if(e[s.value].substring(0,10)!=n(y).substring(0,10)){const _=n(y).substring(0,10)+" 23:59";e[d.value]=_}l(u,e)}},k=(u,x)=>{if(!p.value)return!1;const i=e.ganttBarConfig.dragLimitLeft,y=e.ganttBarConfig.dragLimitRight;return u&&i!=null&&u<i||x&&y!=null&&x>y},E=u=>{h.value=!1,document.body.style.cursor="",window.removeEventListener("mousemove",r),window.removeEventListener("mouseup",E),a(u,e)};return{isDragging:h,initDrag:f}}function Et(){const e=t.inject(ct);if(!e)throw Error("Failed to inject getChartRows!");return e}function _t(){const e=t.inject(ft);if(!e)throw Error("Failed to inject emitBarEvent!");return e}function ce(){const e=G(),l=Et(),a=_t(),{pushOnOverlap:c,barStart:s,barEnd:d,noOverlap:p,dateFormat:h}=e,m=new Map,{toDayjs:r,format:n}=j(),o=(i,y)=>{const{initDrag:b}=kt(i,B,E,e);a({...y,type:"dragstart"},i),b(y),u(i)},f=(i,y)=>{const b=i.ganttBarConfig.bundle;b!=null&&(l().forEach(_=>{_.forEach(C=>{if(C.ganttBarConfig.bundle===b){const S=C===i?E:()=>null,{initDrag:v}=kt(C,B,S,e);v(y),u(C)}})}),a({...y,type:"dragstart"},i))},B=(i,y)=>{a({...i,type:"drag"},y),D(y)},D=i=>{if(!(c!=null&&c.value))return;let y=i,{overlapBar:b,overlapType:_}=g(y);for(;b;){u(b);const C=r(y[s.value]),S=r(y[d.value]),v=r(b[s.value]),O=r(b[d.value]);let L;switch(_){case"left":L=O.diff(C,"minutes",!0),b[d.value]=n(y[s.value],h.value),b[s.value]=n(v.subtract(L,"minutes"),h.value);break;case"right":L=S.diff(v,"minutes",!0),b[s.value]=n(S,h.value),b[d.value]=n(O.add(L,"minutes"),h.value);break;default:console.warn("Vue-Ganttastic: One bar is inside of the other one! This should never occur while push-on-overlap is active!");return}b&&(_==="left"||_==="right")&&w(b,L,_),y=b,{overlapBar:b,overlapType:_}=g(b)}},g=i=>{let y,b,_;const C=l().find(M=>M.includes(i))||[],S=r(i[s.value]),v=r(i[d.value]);return{overlapBar:C.find(M=>{if(M===i)return!1;const $=r(M[s.value]),N=r(M[d.value]);return y=S.isBetween($,N),b=v.isBetween($,N),_=$.isBetween(S,v)||N.isBetween(S,v),y||b||_}),overlapType:y?"left":b?"right":_?"between":null}},w=(i,y,b)=>{u(i),i.ganttBarConfig.bundle&&l().forEach(_=>{_.forEach(C=>{C.ganttBarConfig.bundle===i.ganttBarConfig.bundle&&C!==i&&(u(C),k(C,y,b))})})},k=(i,y,b)=>{switch(b){case"left":i[s.value]=n(r(i,"start").subtract(y,"minutes"),h.value),i[d.value]=n(r(i,"end").subtract(y,"minutes"),h.value);break;case"right":i[s.value]=n(r(i,"start").add(y,"minutes"),h.value),i[d.value]=n(r(i,"end").add(y,"minutes"),h.value)}D(i)},E=(i,y)=>{x();const b={...i,type:"dragend"};a(b,y,void 0,new Map(m)),m.clear()},u=i=>{if(!m.has(i)){const y=i[s.value],b=i[d.value];m.set(i,{oldStart:y,oldEnd:b})}},x=()=>{if(c.value||!p.value)return;let i=!1;m.forEach((y,b)=>{const{overlapBar:_}=g(b);_!=null&&(i=!0)}),i&&m.forEach(({oldStart:y,oldEnd:b},_)=>{_[s.value]=y,_[d.value]=b})};return{initDragOfBar:o,initDragOfBundle:f}}function de(){const{pushOnOverlap:e}=G(),l=Et(),a=p=>{const h=[];return p!=null&&l().forEach(m=>{m.forEach(r=>{r.ganttBarConfig.bundle===p&&h.push(r)})}),h},c=p=>{if(!e.value||p.ganttBarConfig.pushOnOverlap===!1)return;for(const m of["left","right"]){const r=m,{gapDistanceSoFar:n,bundleBarsAndGapDist:o}=s(p,0,r);let f=n;const B=o;if(!B)continue;for(let g=0;g<B.length;g++){const w=B[g].bar,k=B[g].gapDistance;a(w.ganttBarConfig.bundle).filter(u=>u!==w).forEach(u=>{const x=s(u,k,r),i=x.gapDistanceSoFar,y=x.bundleBarsAndGapDist;i!=null&&(!f||i<f)&&(f=i),y.forEach(b=>{B.find(_=>_.bar===b.bar)||B.push(b)})})}const D=document.getElementById(p.ganttBarConfig.id);f!=null&&r==="left"?p.ganttBarConfig.dragLimitLeft=D.offsetLeft-f:f!=null&&r==="right"&&(p.ganttBarConfig.dragLimitRight=D.offsetLeft+D.offsetWidth+f)}a(p.ganttBarConfig.bundle).forEach(m=>{m.ganttBarConfig.dragLimitLeft=p.ganttBarConfig.dragLimitLeft,m.ganttBarConfig.dragLimitRight=p.ganttBarConfig.dragLimitRight})},s=(p,h=0,m)=>{const r=p.ganttBarConfig.bundle?[{bar:p,gapDistance:h}]:[];let n=p,o=d(n,m);if(m==="left")for(;o;){const f=document.getElementById(n.ganttBarConfig.id),B=document.getElementById(o.ganttBarConfig.id),D=B.offsetLeft+B.offsetWidth;if(h+=f.offsetLeft-D,o.ganttBarConfig.immobile)return{gapDistanceSoFar:h,bundleBarsAndGapDist:r};o.ganttBarConfig.bundle&&r.push({bar:o,gapDistance:h}),n=o,o=d(o,"left")}if(m==="right")for(;o;){const f=document.getElementById(n.ganttBarConfig.id),B=document.getElementById(o.ganttBarConfig.id),D=f.offsetLeft+f.offsetWidth;if(h+=B.offsetLeft-D,o.ganttBarConfig.immobile)return{gapDistanceSoFar:h,bundleBarsAndGapDist:r};o.ganttBarConfig.bundle&&r.push({bar:o,gapDistance:h}),n=o,o=d(o,"right")}return{gapDistanceSoFar:null,bundleBarsAndGapDist:r}},d=(p,h)=>{const m=document.getElementById(p.ganttBarConfig.id),r=l().find(o=>o.includes(p))||[];let n=[];return h==="left"?n=r.filter(o=>{const f=document.getElementById(o.ganttBarConfig.id);return f&&f.offsetLeft<m.offsetLeft&&o.ganttBarConfig.pushOnOverlap!==!1}):n=r.filter(o=>{const f=document.getElementById(o.ganttBarConfig.id);return f&&f.offsetLeft>m.offsetLeft&&o.ganttBarConfig.pushOnOverlap!==!1}),n.length>0?n.reduce((o,f)=>{const B=document.getElementById(o.ganttBarConfig.id),D=document.getElementById(f.ganttBarConfig.id),g=Math.abs(B.offsetLeft-m.offsetLeft),w=Math.abs(D.offsetLeft-m.offsetLeft);return g<w?o:f},n[0]):null};return{setDragLimitsOfGanttBar:c}}const fe=["id"],ue={class:"g-gantt-bar-label"},ge={style:{"z-index":"100"}},me=t.createElementVNode("div",{class:"g-gantt-bar-handle-left"},null,-1),pe=t.createElementVNode("div",{class:"g-gantt-bar-handle-right"},null,-1),he=t.defineComponent({__name:"GGanttBar",props:{bar:null},setup(e){const l=e,a=_t(),c=G(),{rowHeight:s}=c,{bar:d}=t.toRefs(l),{mapTimeToPosition:p,mapPositionToTime:h}=q(),{initDragOfBar:m,initDragOfBundle:r}=ce(),{setDragLimitsOfGanttBar:n}=de(),o=t.ref(!1),f=t.computed(()=>d.value.ganttBarConfig);function B(C){f.value.bundle!=null?r(d.value,C):m(d.value,C),o.value=!0}const D=()=>{n(d.value),!f.value.immobile&&(window.addEventListener("mousemove",B,{once:!0}),window.addEventListener("mouseup",()=>{window.removeEventListener("mousemove",B),o.value=!1},{once:!0}))},g=t.inject(ut),w=C=>{var O;C.preventDefault(),C.type==="mousedown"&&D();const S=(O=g==null?void 0:g.value)==null?void 0:O.getBoundingClientRect();if(!S)return;const v=h(C.clientX-S.left);a(C,d.value,v)},{barStart:k,barEnd:E,width:u,chartStart:x,chartEnd:i,chartSize:y}=c,b=t.ref(0),_=t.ref(0);return t.onMounted(()=>{t.watch([d,u,x,i,y.width],()=>{b.value=p(d.value[k.value]),_.value=p(d.value[E.value])},{deep:!0,immediate:!0})}),(C,S)=>(t.openBlock(),t.createElementBlock("div",{id:t.unref(f).id,class:"g-gantt-bar",style:t.normalizeStyle({...t.unref(f).style,position:"absolute",top:`${t.unref(s)*.1}px`,left:`${b.value}px`,width:`${_.value-b.value}px`,height:`${t.unref(s)*.8}px`,zIndex:o.value?3:2}),onMousedown:w,onClick:w,onDblclick:w,onMouseenter:w,onMouseleave:w,onContextmenu:w},[t.createElementVNode("div",ue,[t.renderSlot(C.$slots,"default",{bar:t.unref(d)},()=>[t.createElementVNode("div",ge,t.toDisplayString(t.unref(f).label||""),1),t.unref(f).progress?(t.openBlock(),t.createElementBlock("div",{key:0,style:t.normalizeStyle([{position:"absolute",height:"100%",left:"0"},{width:t.unref(f).progress+"%",backgroundColor:t.unref(f).progressColor}])},null,4)):t.createCommentVNode("",!0)])]),t.unref(f).hasHandles?(t.openBlock(),t.createElementBlock(t.Fragment,{key:0},[me,pe],64)):t.createCommentVNode("",!0)],44,fe))}}),Te="",Ct=t.defineComponent({__name:"GGanttRow",props:{bars:null,highlightOnHover:{type:Boolean}},emits:["drop"],setup(e,{emit:l}){const a=e,{rowHeight:c,colors:s}=G(),{highlightOnHover:d}=t.toRefs(a),p=t.ref(!1),h=t.computed(()=>({height:`${c.value}px`,background:(d==null?void 0:d.value)&&p.value?s.value.hoverHighlight:null})),{mapPositionToTime:m}=q(),r=t.ref(null);t.provide(ut,r);const n=o=>{var g;const f=(g=r.value)==null?void 0:g.getBoundingClientRect();if(!f){console.error("Vue-Ganttastic: failed to find bar container element for row.");return}const B=o.clientX-f.left,D=m(B);l("drop",{e:o,datetime:D})};return(o,f)=>(t.openBlock(),t.createElementBlock("div",{class:"g-gantt-row",style:t.normalizeStyle(t.unref(h)),onDragover:f[0]||(f[0]=t.withModifiers(B=>p.value=!0,["prevent"])),onDragleave:f[1]||(f[1]=B=>p.value=!1),onDrop:f[2]||(f[2]=B=>n(B)),onMouseover:f[3]||(f[3]=B=>p.value=!0),onMouseleave:f[4]||(f[4]=B=>p.value=!1)},[t.createCommentVNode("",!0),t.createElementVNode("div",t.mergeProps({ref_key:"barContainer",ref:r,class:"g-gantt-row-bars-container"},o.$attrs),[t.createVNode(t.TransitionGroup,{name:"bar-transition",tag:"div"},{default:t.withCtx(()=>[(t.openBlock(!0),t.createElementBlock(t.Fragment,null,t.renderList(e.bars,B=>(t.openBlock(),t.createBlock(he,{key:B.ganttBarConfig.id,bar:B},{default:t.withCtx(()=>[t.renderSlot(o.$slots,"bar-label",{bar:B})]),_:2},1032,["bar"]))),128))]),_:3})],16)],36))}}),Le="",Dt=t.defineComponent({__name:"GGanttLabelRow",props:{labels:null,styles:null},setup(e){const{rowHeight:l,colors:a}=G(),{timeaxisUnits:c}=U();return(s,d)=>(t.openBlock(),t.createElementBlock("div",{class:"g-gantt-row",style:t.normalizeStyle({height:t.unref(l)+"px"})},[t.createElementVNode("div",t.mergeProps({ref:"barContainer",class:"g-gantt-row-bars-container"},s.$attrs),[(t.openBlock(!0),t.createElementBlock(t.Fragment,null,t.renderList(t.unref(c).lowerUnits,({label:p,width:h,date:m},r)=>(t.openBlock(),t.createElementBlock("div",{key:m.getTime(),class:"g-timeunit",style:t.normalizeStyle({color:t.unref(a).text,textAlign:"center",width:h})},[t.createElementVNode("span",{style:t.normalizeStyle(e.styles!=null?e.styles[r]:void 0)},t.toDisplayString(e.labels[r]),5)],4))),128))],16)],4))}}),Me="";function St(){R.default.extend(Tt),R.default.extend(Lt),R.default.extend(Mt),R.default.extend(Gt)}const vt={install(e,l){St(),e.component("GGanttChart",xt),e.component("GGanttRow",Ct),e.component("GGanttLabelRow",Dt)}};T.GGanttChart=xt,T.GGanttLabelRow=Dt,T.GGanttRow=Ct,T.default=vt,T.extendDayjs=St,T.ganttastic=vt,Object.defineProperties(T,{__esModule:{value:!0},[Symbol.toStringTag]:{value:"Module"}})});function injectStyle(T,I="top"){if(!T||typeof document>"u")return;const t=document.head,z=document.createElement("style");I==="top"&&t.firstChild?t.insertBefore(z,t.firstChild):t.appendChild(z),z.appendChild(document.createTextNode(T))}injectStyle(`
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
`,"top");injectStyle(`
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

`,"top");injectStyle(`
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
`,"top");injectStyle(`
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
`,"top");injectStyle(`
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
`,"top");injectStyle(`
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

`,"top");injectStyle(`
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

`,"top");injectStyle(`
.today-line {
  width: 2px;
  height: 100%;
  background-color: red;
  position: absolute;
  z-index: 1;
}
`,"top");injectStyle(`
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
`,"top");
