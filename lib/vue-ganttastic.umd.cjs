(function(T,I){typeof exports=="object"&&typeof module<"u"?I(exports,require("dayjs"),require("vue")):typeof define=="function"&&define.amd?define(["exports","dayjs","vue"],I):(T=typeof globalThis<"u"?globalThis:T||self,I(T.VueGanttastic={},T.dayjs,T.Vue))})(this,function(T,I,t){"use strict";const R=(e=>e&&typeof e=="object"&&"default"in e?e:{default:e})(I);var P=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},at={exports:{}};(function(e,s){(function(a,l){e.exports=l()})(P,function(){return function(a,l){l.prototype.isSameOrBefore=function(i,d){return this.isSame(i,d)||this.isBefore(i,d)}}})})(at);const Tt=at.exports;var it={exports:{}};(function(e,s){(function(a,l){e.exports=l()})(P,function(){return function(a,l){l.prototype.isSameOrAfter=function(i,d){return this.isSame(i,d)||this.isAfter(i,d)}}})})(it);const Lt=it.exports;var st={exports:{}};(function(e,s){(function(a,l){e.exports=l()})(P,function(){return function(a,l,i){l.prototype.isBetween=function(d,p,h,m){var r=i(d),n=i(p),o=(m=m||"()")[0]==="(",f=m[1]===")";return(o?this.isAfter(r,h):!this.isBefore(r,h))&&(f?this.isBefore(n,h):!this.isAfter(n,h))||(o?this.isBefore(r,h):!this.isAfter(r,h))&&(f?this.isAfter(n,h):!this.isBefore(n,h))}}})})(st);const Mt=st.exports;var lt={exports:{}};(function(e,s){(function(a,l){e.exports=l()})(P,function(){var a={LTS:"h:mm:ss A",LT:"h:mm A",L:"MM/DD/YYYY",LL:"MMMM D, YYYY",LLL:"MMMM D, YYYY h:mm A",LLLL:"dddd, MMMM D, YYYY h:mm A"},l=/(\[[^[]*\])|([-_:/.,()\s]+)|(A|a|YYYY|YY?|MM?M?M?|Do|DD?|hh?|HH?|mm?|ss?|S{1,3}|z|ZZ?)/g,i=/\d\d/,d=/\d\d?/,p=/\d*[^-_:/,()\s\d]+/,h={},m=function(u){return(u=+u)+(u>68?1900:2e3)},r=function(u){return function(B){this[u]=+B}},n=[/[+-]\d\d:?(\d\d)?|Z/,function(u){(this.zone||(this.zone={})).offset=function(B){if(!B||B==="Z")return 0;var k=B.match(/([+-]|\d\d)/g),y=60*k[1]+(+k[2]||0);return y===0?0:k[0]==="+"?-y:y}(u)}],o=function(u){var B=h[u];return B&&(B.indexOf?B:B.s.concat(B.f))},f=function(u,B){var k,y=h.meridiem;if(y){for(var g=1;g<=24;g+=1)if(u.indexOf(y(g,0,B))>-1){k=g>12;break}}else k=u===(B?"pm":"PM");return k},x={A:[p,function(u){this.afternoon=f(u,!1)}],a:[p,function(u){this.afternoon=f(u,!0)}],S:[/\d/,function(u){this.milliseconds=100*+u}],SS:[i,function(u){this.milliseconds=10*+u}],SSS:[/\d{3}/,function(u){this.milliseconds=+u}],s:[d,r("seconds")],ss:[d,r("seconds")],m:[d,r("minutes")],mm:[d,r("minutes")],H:[d,r("hours")],h:[d,r("hours")],HH:[d,r("hours")],hh:[d,r("hours")],D:[d,r("day")],DD:[i,r("day")],Do:[p,function(u){var B=h.ordinal,k=u.match(/\d+/);if(this.day=k[0],B)for(var y=1;y<=31;y+=1)B(y).replace(/\[|\]/g,"")===u&&(this.day=y)}],M:[d,r("month")],MM:[i,r("month")],MMM:[p,function(u){var B=o("months"),k=(o("monthsShort")||B.map(function(y){return y.slice(0,3)})).indexOf(u)+1;if(k<1)throw new Error;this.month=k%12||k}],MMMM:[p,function(u){var B=o("months").indexOf(u)+1;if(B<1)throw new Error;this.month=B%12||B}],Y:[/[+-]?\d+/,r("year")],YY:[i,function(u){this.year=m(u)}],YYYY:[/\d{4}/,r("year")],Z:n,ZZ:n};function D(u){var B,k;B=u,k=h&&h.formats;for(var y=(u=B.replace(/(\[[^\]]+])|(LTS?|l{1,4}|L{1,4})/g,function(C,S,v){var O=v&&v.toUpperCase();return S||k[v]||a[v]||k[O].replace(/(\[[^\]]+])|(MMMM|MM|DD|dddd)/g,function(L,M,$){return M||$.slice(1)})})).match(l),g=y.length,E=0;E<g;E+=1){var c=y[E],b=x[c],w=b&&b[0],_=b&&b[1];y[E]=_?{regex:w,parser:_}:c.replace(/^\[|\]$/g,"")}return function(C){for(var S={},v=0,O=0;v<g;v+=1){var L=y[v];if(typeof L=="string")O+=L.length;else{var M=L.regex,$=L.parser,N=C.slice(O),V=M.exec(N)[0];$.call(S,V),C=C.replace(V,"")}}return function(H){var Y=H.afternoon;if(Y!==void 0){var A=H.hours;Y?A<12&&(H.hours+=12):A===12&&(H.hours=0),delete H.afternoon}}(S),S}}return function(u,B,k){k.p.customParseFormat=!0,u&&u.parseTwoDigitYear&&(m=u.parseTwoDigitYear);var y=B.prototype,g=y.parse;y.parse=function(E){var c=E.date,b=E.utc,w=E.args;this.$u=b;var _=w[1];if(typeof _=="string"){var C=w[2]===!0,S=w[3]===!0,v=C||S,O=w[2];S&&(O=w[2]),h=this.$locale(),!C&&O&&(h=k.Ls[O]),this.$d=function(N,V,H){try{if(["x","X"].indexOf(V)>-1)return new Date((V==="X"?1e3:1)*N);var Y=D(V)(N),A=Y.year,W=Y.month,ye=Y.day,be=Y.hours,we=Y.minutes,Be=Y.seconds,xe=Y.milliseconds,Ot=Y.zone,Z=new Date,J=ye||(A||W?1:Z.getDate()),tt=A||Z.getFullYear(),X=0;A&&!W||(X=W>0?W-1:Z.getMonth());var et=be||0,nt=we||0,ot=Be||0,rt=xe||0;return Ot?new Date(Date.UTC(tt,X,J,et,nt,ot,rt+60*Ot.offset*1e3)):H?new Date(Date.UTC(tt,X,J,et,nt,ot,rt)):new Date(tt,X,J,et,nt,ot,rt)}catch{return new Date("")}}(c,_,b),this.init(),O&&O!==!0&&(this.$L=this.locale(O).$L),v&&c!=this.format(_)&&(this.$d=new Date("")),h={}}else if(_ instanceof Array)for(var L=_.length,M=1;M<=L;M+=1){w[1]=_[M-1];var $=k.apply(this,w);if($.isValid()){this.$d=$.$d,this.$L=$.$L,this.init();break}M===L&&(this.$d=new Date(""))}else g.call(this,E)}}})})(lt);const Gt=lt.exports,ct=Symbol("CHART_ROWS_KEY"),dt=Symbol("CONFIG_KEY"),ft=Symbol("EMIT_BAR_EVENT_KEY"),ut=Symbol("BAR_CONTAINER_KEY");function G(){const e=t.inject(dt);if(!e)throw Error("Failed to inject config!");return e}const gt="YYYY-MM-DD HH:mm";function j(e=G()){const{chartStart:s,chartEnd:a,barStart:l,barEnd:i,dateFormat:d}=e,p=t.computed(()=>m(s.value)),h=t.computed(()=>m(a.value)),m=(n,o)=>{let f;if(o!==void 0&&typeof n!="string"&&!(n instanceof Date)&&(f=o==="start"?n[l.value]:n[i.value]),typeof n=="string")f=n;else if(n instanceof Date)return R.default(n);const x=d.value||gt;return R.default(f,x,!0)};return{chartStartDayjs:p,chartEndDayjs:h,toDayjs:m,format:(n,o)=>o===!1?n instanceof Date?n:R.default(n).toDate():(typeof n=="string"||n instanceof Date?m(n):n).format(o)}}function U(){const{precision:e}=G(),{chartStartDayjs:s,chartEndDayjs:a}=j(),l=t.computed(()=>{switch(e==null?void 0:e.value){case"hour":return"day";case"day":return"month";case"week":return"month";case"month":return"year";default:throw new Error("Precision prop incorrect. Must be one of the following: 'hour', 'day', 'month'")}}),i={hour:"HH",date:"DD.MMM ",day:"DD",week:"DD",month:"MMMM YYYY",year:"YYYY"};return{timeaxisUnits:t.computed(()=>{const p=[],h=[],m=l.value==="day"?"date":l.value,r=e.value;let n=s.value.startOf(r);const o=a.value.diff(s.value,"minutes",!0);let f=0,x=n[m]();for(;n.isBefore(a.value)||n.isSame(a.value);){if(n[m]()!==x){let g=0;if(p.length===0)g=n.startOf(m).diff(s.value,"minutes",!0)/o*100;else if(n.isSameOrAfter(a.value))g=a.value.diff(n.subtract(1,m).startOf(m),"minutes",!0)/o*100;else{const c=n.startOf(m),b=n.subtract(1,m).startOf(m);g=c.diff(b,"minutes",!0)/o*100}const E=n.subtract(1,m);p.push({label:E.format(i[m]),value:String(x),date:E.toDate(),width:String(g)+"%"}),f=0,x=n[m]()}let B=0;h.length===0?B=n.endOf(r).diff(s.value,"minutes",!0)/o*100:n.add(1,r).isSameOrAfter(a.value)?B=a.value.diff(n.startOf(r),"minutes",!0)/o*100:B=n.endOf(r).diff(n.startOf(r),"minutes",!0)/o*100;let k;switch(r){case"week":k=n.startOf("week");break;default:k=n[r==="day"?"date":r]()}h.push({label:n.format(i[r]),value:String(k),date:n.toDate(),width:String(B)+"%"});const y=n;n=n.add(1,r),(n.isBefore(a.value)||n.isSame(a.value))&&(f+=n.diff(y,"minutes",!0))}const D=a.value.isSame(a.value.startOf(m))?a.value[m]()-1:a.value[m]();return p.some(B=>B.value===String(D))||(f+=a.value.diff(n.subtract(1,r),"minutes",!0),p.push({label:a.value.format(i[m]),value:String(x),date:a.value.toDate(),width:`${f/o*100}%`})),{upperUnits:p,lowerUnits:h}})}}const $t={class:"g-timeaxis"},Yt=["onClick"],Rt={class:"milestone-description"},Nt=["onClick"],It=t.defineComponent({__name:"GGanttTimeaxis",props:{mileStoneList:null},emits:["onClickTimeUnit","onClickMilestone"],setup(e,{emit:s}){const a=e,{precision:l,colors:i}=G(),{timeaxisUnits:d}=U(),p=()=>{var n;return((n=a.mileStoneList)==null?void 0:n.length)>0?{minHeight:"33%"}:{height:"50%"}},h=n=>l.value=="week"?a.mileStoneList.map(o=>r(o.date).getTime()).includes(r(n).getTime()):a.mileStoneList.map(o=>o.date.getTime()).includes(n.getTime()),m=n=>l.value=="week"?a.mileStoneList.find(o=>r(o.date).getTime()===r(n).getTime()):a.mileStoneList.find(o=>o.date.getTime()===n.getTime());function r(n){n=new Date(n);let o=n.getDay(),f=n.getDate()-o+(o==0?-6:1);return new Date(n.setDate(f))}return(n,o)=>{var f;return t.openBlock(),t.createElementBlock("div",$t,[t.createElementVNode("div",{class:"g-timeunits-container",style:p},[(t.openBlock(!0),t.createElementBlock(t.Fragment,null,t.renderList(t.unref(d).upperUnits,({label:x,value:D,date:u,width:B},k)=>(t.openBlock(),t.createElementBlock("div",{key:u.getTime(),class:"g-upper-timeunit",style:t.normalizeStyle({background:k%2===0?t.unref(i).primary:t.unref(i).secondary,color:t.unref(i).text,width:B})},[t.renderSlot(n.$slots,"upper-timeunit",{label:x,value:D,date:u},()=>[t.createTextVNode(t.toDisplayString(x),1)])],4))),128))]),t.createElementVNode("div",{class:"g-timeunits-container",style:p},[(t.openBlock(!0),t.createElementBlock(t.Fragment,null,t.renderList(t.unref(d).lowerUnits,({label:x,value:D,date:u,width:B},k)=>(t.openBlock(),t.createElementBlock("div",{key:u.getTime(),class:"g-timeunit",style:t.normalizeStyle({background:k%2===0?t.unref(i).ternary:t.unref(i).quartenary,color:t.unref(i).text,flexDirection:t.unref(l)==="hour"?"column":"row",alignItems:t.unref(l)==="hour"?"":"center",width:B}),onClick:y=>s("onClickTimeUnit",{date:u})},[t.renderSlot(n.$slots,"timeunit",{label:x,value:D,date:u},()=>[t.createTextVNode(t.toDisplayString(x),1)]),t.unref(l)==="hour"?(t.openBlock(),t.createElementBlock("div",{key:0,class:"g-timeaxis-hour-pin",style:t.normalizeStyle({background:t.unref(i).text})},null,4)):t.createCommentVNode("",!0)],12,Yt))),128))]),((f=e.mileStoneList)==null?void 0:f.length)>0?(t.openBlock(),t.createElementBlock("div",{key:0,class:"g-timeunits-container",style:p},[(t.openBlock(!0),t.createElementBlock(t.Fragment,null,t.renderList(t.unref(d).lowerUnits,({label:x,value:D,date:u,width:B},k)=>(t.openBlock(),t.createElementBlock("div",{key:u.getTime(),class:"g-timeunit",style:t.normalizeStyle({color:t.unref(i).text,flexDirection:t.unref(l)==="hour"?"column":"row",alignItems:t.unref(l)==="hour"?"":"center",width:B})},[h(u)?t.renderSlot(n.$slots,"timeunit",{key:0,label:x,value:D,date:u},()=>[t.createElementVNode("p",Rt,[t.createTextVNode("\u25BC "),t.createElementVNode("span",{class:"milestone-description",onClick:y=>s("onClickMilestone",{milestone:m(u)})},t.toDisplayString(m(u).description),9,Nt)])]):t.createCommentVNode("",!0),t.unref(l)==="hour"?(t.openBlock(),t.createElementBlock("div",{key:1,class:"g-timeaxis-hour-pin",style:t.normalizeStyle({background:t.unref(i).text})},null,4)):t.createCommentVNode("",!0)],4))),128))])):t.createCommentVNode("",!0)])}}}),ke="",Ht={class:"g-grid-container"},Vt=t.defineComponent({__name:"GGanttGrid",props:{highlightedDates:null},setup(e){const s=e,a=t.computed(()=>{var d;return(d=s.highlightedDates)==null?void 0:d.map(p=>p.getTime())}),{colors:l}=G(),{timeaxisUnits:i}=U();return(d,p)=>(t.openBlock(),t.createElementBlock("div",Ht,[(t.openBlock(!0),t.createElementBlock(t.Fragment,null,t.renderList(t.unref(i).lowerUnits,({label:h,value:m,width:r,date:n})=>{var o;return t.openBlock(),t.createElementBlock("div",{key:n.getTime(),class:"g-grid-line",style:t.normalizeStyle({width:r,background:(o=t.unref(a))!=null&&o.includes(n.getTime())?t.unref(l).hoverHighlight:void 0})},null,4)}),128))]))}}),Ee="",At=t.defineComponent({__name:"GGanttBarTooltip",props:{bar:null,modelValue:{type:Boolean}},setup(e){const s=e,a={hour:"HH:mm",day:"DD. MMM HH:mm",week:"DD. MMM HH:mm",month:"DD. MMMM YYYY"},l="cadetblue",{bar:i}=t.toRefs(s),{precision:d,font:p,barStart:h,barEnd:m,rowHeight:r}=G(),n=t.ref("0px"),o=t.ref("0px");t.watch(()=>s.bar,async()=>{var b;await t.nextTick();const k=((b=i==null?void 0:i.value)==null?void 0:b.ganttBarConfig.id)||"";if(!k)return;const y=document.getElementById(k),{top:g,left:E}=(y==null?void 0:y.getBoundingClientRect())||{top:0,left:0},c=Math.max(E,10);n.value=`${g+r.value-10}px`,o.value=`${c}px`},{deep:!0,immediate:!0});const f=t.computed(()=>{var k,y;return((y=(k=i==null?void 0:i.value)==null?void 0:k.ganttBarConfig.style)==null?void 0:y.background)||l}),{toDayjs:x}=j(),D=t.computed(()=>{var k;return(k=i.value)==null?void 0:k[h.value]}),u=t.computed(()=>{var k;return(k=i.value)==null?void 0:k[m.value]}),B=t.computed(()=>{if(!(i!=null&&i.value))return"";const k=a[d.value],y=x(D.value).format(k),g=x(u.value).format(k);return`${y} \u2013 ${g}`});return(k,y)=>(t.openBlock(),t.createBlock(t.Teleport,{to:"body"},[t.createVNode(t.Transition,{name:"g-fade",mode:"out-in"},{default:t.withCtx(()=>[e.modelValue?(t.openBlock(),t.createElementBlock("div",{key:0,class:"g-gantt-tooltip",style:t.normalizeStyle({top:n.value,left:o.value,fontFamily:t.unref(p)})},[t.createElementVNode("div",{class:"g-gantt-tooltip-color-dot",style:t.normalizeStyle({background:t.unref(f)})},null,4),t.renderSlot(k.$slots,"default",{bar:t.unref(i),barStart:t.unref(D),barEnd:t.unref(u)},()=>[t.createTextVNode(t.toDisplayString(t.unref(B)),1)])],4)):t.createCommentVNode("",!0)]),_:3})]))}}),_e="",mt={default:{primary:"#eeeeee",secondary:"#E0E0E0",ternary:"#F5F5F5",quartenary:"#ededed",hoverHighlight:"rgba(204, 216, 219, 0.5)",text:"#404040",background:"white"},creamy:{primary:"#ffe8d9",secondary:"#fcdcc5",ternary:"#fff6f0",quartenary:"#f7ece6",hoverHighlight:"rgba(230, 221, 202, 0.5)",text:"#542d05",background:"white"},crimson:{primary:"#a82039",secondary:"#c41238",ternary:"#db4f56",quartenary:"#ce5f64",hoverHighlight:"rgba(196, 141, 141, 0.5)",text:"white",background:"white"},dark:{primary:"#404040",secondary:"#303030",ternary:"#353535",quartenary:"#383838",hoverHighlight:"rgba(159, 160, 161, 0.5)",text:"white",background:"#525252",toast:"#1f1f1f"},flare:{primary:"#e08a38",secondary:"#e67912",ternary:"#5e5145",quartenary:"#665648",hoverHighlight:"rgba(196, 141, 141, 0.5)",text:"white",background:"white"},fuchsia:{primary:"#de1d5a",secondary:"#b50b41",ternary:"#ff7da6",quartenary:"#f2799f",hoverHighlight:"rgba(196, 141, 141, 0.5)",text:"white",background:"white"},grove:{primary:"#3d9960",secondary:"#288542",ternary:"#72b585",quartenary:"#65a577",hoverHighlight:"rgba(160, 219, 171, 0.5)",text:"white",background:"white"},"material-blue":{primary:"#0D47A1",secondary:"#1565C0",ternary:"#42a5f5",quartenary:"#409fed",hoverHighlight:"rgba(110, 165, 196, 0.5)",text:"white",background:"white"},sky:{primary:"#b5e3ff",secondary:"#a1d6f7",ternary:"#d6f7ff",quartenary:"#d0edf4",hoverHighlight:"rgba(193, 202, 214, 0.5)",text:"#022c47",background:"white"},slumber:{primary:"#2a2f42",secondary:"#2f3447",ternary:"#35394d",quartenary:"#2c3044",hoverHighlight:"rgba(179, 162, 127, 0.5)",text:"#ffe0b3",background:"#38383b",toast:"#1f1f1f"},vue:{primary:"#258a5d",secondary:"#41B883",ternary:"#35495E",quartenary:"#2a3d51",hoverHighlight:"rgba(160, 219, 171, 0.5)",text:"white",background:"white"}};var pt;const F=typeof window<"u";F&&((pt=window==null?void 0:window.navigator)==null?void 0:pt.userAgent)&&/iP(ad|hone|od)/.test(window.navigator.userAgent);function jt(e){return typeof e=="function"?e():t.unref(e)}function Ft(e){return e}function zt(e){return t.getCurrentScope()?(t.onScopeDispose(e),!0):!1}function Pt(e,s=!0){t.getCurrentInstance()?t.onMounted(e):s?e():t.nextTick(e)}function ht(e){var s;const a=jt(e);return(s=a==null?void 0:a.$el)!=null?s:a}const Ut=F?window:void 0;F&&window.document,F&&window.navigator,F&&window.location;function qt(e,s=!1){const a=t.ref(),l=()=>a.value=Boolean(e());return l(),Pt(l,s),a}const K=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},Q="__vueuse_ssr_handlers__";K[Q]=K[Q]||{},K[Q];var yt=Object.getOwnPropertySymbols,Wt=Object.prototype.hasOwnProperty,Xt=Object.prototype.propertyIsEnumerable,Kt=(e,s)=>{var a={};for(var l in e)Wt.call(e,l)&&s.indexOf(l)<0&&(a[l]=e[l]);if(e!=null&&yt)for(var l of yt(e))s.indexOf(l)<0&&Xt.call(e,l)&&(a[l]=e[l]);return a};function Qt(e,s,a={}){const l=a,{window:i=Ut}=l,d=Kt(l,["window"]);let p;const h=qt(()=>i&&"ResizeObserver"in i),m=()=>{p&&(p.disconnect(),p=void 0)},r=t.watch(()=>ht(e),o=>{m(),h.value&&i&&o&&(p=new ResizeObserver(s),p.observe(o,d))},{immediate:!0,flush:"post"}),n=()=>{m(),r()};return zt(n),{isSupported:h,stop:n}}function Zt(e,s={width:0,height:0},a={}){const l=t.ref(s.width),i=t.ref(s.height);return Qt(e,([d])=>{l.value=d.contentRect.width,i.value=d.contentRect.height},a),t.watch(()=>ht(e),d=>{l.value=d?s.width:0,i.value=d?s.height:0}),{width:l,height:i}}var bt;(function(e){e.UP="UP",e.RIGHT="RIGHT",e.DOWN="DOWN",e.LEFT="LEFT",e.NONE="NONE"})(bt||(bt={}));var Jt=Object.defineProperty,wt=Object.getOwnPropertySymbols,te=Object.prototype.hasOwnProperty,ee=Object.prototype.propertyIsEnumerable,Bt=(e,s,a)=>s in e?Jt(e,s,{enumerable:!0,configurable:!0,writable:!0,value:a}):e[s]=a,ne=(e,s)=>{for(var a in s||(s={}))te.call(s,a)&&Bt(e,a,s[a]);if(wt)for(var a of wt(s))ee.call(s,a)&&Bt(e,a,s[a]);return e};ne({linear:Ft},{easeInSine:[.12,0,.39,0],easeOutSine:[.61,1,.88,1],easeInOutSine:[.37,0,.63,1],easeInQuad:[.11,0,.5,0],easeOutQuad:[.5,1,.89,1],easeInOutQuad:[.45,0,.55,1],easeInCubic:[.32,0,.67,0],easeOutCubic:[.33,1,.68,1],easeInOutCubic:[.65,0,.35,1],easeInQuart:[.5,0,.75,0],easeOutQuart:[.25,1,.5,1],easeInOutQuart:[.76,0,.24,1],easeInQuint:[.64,0,.78,0],easeOutQuint:[.22,1,.36,1],easeInOutQuint:[.83,0,.17,1],easeInExpo:[.7,0,.84,0],easeOutExpo:[.16,1,.3,1],easeInOutExpo:[.87,0,.13,1],easeInCirc:[.55,0,1,.45],easeOutCirc:[0,.55,.45,1],easeInOutCirc:[.85,0,.15,1],easeInBack:[.36,0,.66,-.56],easeOutBack:[.34,1.56,.64,1],easeInOutBack:[.68,-.6,.32,1.6]});const oe={key:0,class:"g-footer"},re={class:"g-footer-container"},ae=t.defineComponent({__name:"GGanttFooter",props:{labels:null},setup(e){const{precision:s,colors:a}=G(),{timeaxisUnits:l}=U();return(i,d)=>e.labels?(t.openBlock(),t.createElementBlock("div",oe,[t.createElementVNode("div",re,[(t.openBlock(!0),t.createElementBlock(t.Fragment,null,t.renderList(t.unref(l).lowerUnits,({label:p,value:h,date:m,width:r},n)=>(t.openBlock(),t.createElementBlock("div",{key:p,class:"g-timeunit",style:t.normalizeStyle({background:n%2===0?t.unref(a).ternary:t.unref(a).quartenary,color:t.unref(a).text,flexDirection:t.unref(s)==="hour"?"column":"row",alignItems:t.unref(s)==="hour"?"":"center",width:r})},[t.renderSlot(i.$slots,"timeunit",{label:p,value:h,date:m},()=>[t.createTextVNode(t.toDisplayString(e.labels[n]),1)],!0)],4))),128))])])):t.createCommentVNode("",!0)}}),De="",ie=((e,s)=>{const a=e.__vccOpts||e;for(const[l,i]of s)a[l]=i;return a})(ae,[["__scopeId","data-v-400629df"]]);function q(e=G()){const{dateFormat:s,chartSize:a}=e,{chartStartDayjs:l,chartEndDayjs:i,toDayjs:d,format:p}=j(e),h=t.computed(()=>i.value.diff(l.value,"minutes"));return{mapTimeToPosition:n=>{const o=a.width.value||0,f=d(n).diff(l.value,"minutes",!0);return Math.ceil(f/h.value*o)},mapPositionToTime:n=>{const o=a.width.value||0,f=n/o*h.value,x=p(l.value.add(f,"minutes"),s.value);if(typeof x=="string")return x;throw Error}}}const se=t.defineComponent({__name:"GGanttDrawTodayLine",emits:["today-line-position-x"],setup(e,{emit:s}){const{mapTimeToPosition:a}=q(),l=t.computed(()=>(s("today-line-position-x",{xPosition:a(R.default().startOf("day").format("DD.MM.YYYY HH:mm"))}),a(R.default().startOf("day").format("DD.MM.YYYY HH:mm"))));return(i,d)=>(t.openBlock(),t.createElementBlock("div",{class:"today-line",style:t.normalizeStyle({left:t.unref(l)+"px"})},null,4))}}),ve="",le={class:"g-gantt-rows-container"},xt=t.defineComponent({__name:"GGanttChart",props:{chartStart:null,chartEnd:null,precision:{default:"day"},barStart:null,barEnd:null,dateFormat:{type:[String,Boolean],default:gt},width:{default:"100%"},hideTimeaxis:{type:Boolean,default:!1},colorScheme:{default:"default"},grid:{type:Boolean,default:!1},pushOnOverlap:{type:Boolean,default:!1},noOverlap:{type:Boolean,default:!1},rowHeight:{default:40},highlightedDates:{default:()=>[]},font:{default:"inherit"},footerLabels:null,sticky:{type:Boolean},displayTodayLine:{type:Boolean},mileStoneList:null},emits:["click-bar","mousedown-bar","mouseup-bar","dblclick-bar","mouseenter-bar","mouseleave-bar","dragstart-bar","drag-bar","dragend-bar","contextmenu-bar","today-line-position-x","onClickTimeUnit","onClickMilestone"],setup(e,{emit:s}){const a=e,{width:l,font:i,colorScheme:d}=t.toRefs(a),p=t.useSlots(),h=t.computed(()=>typeof d.value!="string"?d.value:mt[d.value]||mt.default),m=()=>{var E;const y=(E=p.default)==null?void 0:E.call(p),g=[];return y&&y.forEach(c=>{var b;if((b=c.props)!=null&&b.bars){const w=c.props.bars;g.push(w)}else Array.isArray(c.children)&&c.children.forEach(w=>{var C;const _=w;if((C=_==null?void 0:_.props)!=null&&C.bars){const S=_.props.bars;g.push(S)}})}),g},r=t.ref(!1),n=t.ref(!1),o=t.ref(void 0);let f;const x=y=>{f&&clearTimeout(f),f=setTimeout(()=>{r.value=!0},800),o.value=y},D=()=>{clearTimeout(f),r.value=!1},u=(y,g,E,c)=>{switch(y.type){case"click":s("click-bar",{bar:g,e:y,datetime:E});break;case"mousedown":s("mousedown-bar",{bar:g,e:y,datetime:E});break;case"mouseup":s("mouseup-bar",{bar:g,e:y,datetime:E});break;case"dblclick":s("dblclick-bar",{bar:g,e:y,datetime:E});break;case"mouseenter":x(g),s("mouseenter-bar",{bar:g,e:y});break;case"mouseleave":D(),s("mouseleave-bar",{bar:g,e:y});break;case"dragstart":n.value=!0,s("dragstart-bar",{bar:g,e:y});break;case"drag":s("drag-bar",{bar:g,e:y});break;case"dragend":n.value=!1,s("dragend-bar",{bar:g,e:y});break;case"contextmenu":s("contextmenu-bar",{bar:g,e:y,datetime:E});break}},B=t.ref(null),k=Zt(B);return t.provide(ct,m),t.provide(dt,{...t.toRefs(a),colors:h,chartSize:k}),t.provide(ft,u),(y,g)=>(t.openBlock(),t.createElementBlock(t.Fragment,null,[t.createElementVNode("div",{style:t.normalizeStyle([{display:"flex","flex-flow":"column"},e.sticky?"position: sticky; left:0;z-index:100; background: white;":""]),class:"g-gantt-wrapper"},[t.renderSlot(y.$slots,"side-menu")],4),t.createElementVNode("div",{ref_key:"ganttChart",ref:B,class:"g-gantt-chart",style:t.normalizeStyle({width:t.unref(l),background:t.unref(h).background,fontFamily:t.unref(i)})},[e.hideTimeaxis?t.createCommentVNode("",!0):(t.openBlock(),t.createBlock(It,{key:0,"mile-stone-list":e.mileStoneList,onOnClickTimeUnit:g[0]||(g[0]=E=>y.$emit("onClickTimeUnit",E)),onOnClickMilestone:g[1]||(g[1]=E=>y.$emit("onClickMilestone",E))},{"upper-timeunit":t.withCtx(({label:E,value:c,date:b})=>[t.renderSlot(y.$slots,"upper-timeunit",{label:E,value:c,date:b})]),timeunit:t.withCtx(({label:E,value:c,date:b})=>[t.renderSlot(y.$slots,"timeunit",{label:E,value:c,date:b})]),_:3},8,["mile-stone-list"])),e.grid?(t.openBlock(),t.createBlock(Vt,{key:1,"highlighted-dates":e.highlightedDates},null,8,["highlighted-dates"])):t.createCommentVNode("",!0),t.createElementVNode("div",le,[t.renderSlot(y.$slots,"default")]),e.hideTimeaxis?t.createCommentVNode("",!0):(t.openBlock(),t.createBlock(ie,{key:2,labels:e.footerLabels},null,8,["labels"])),t.createVNode(At,{"model-value":r.value||n.value,bar:o.value},{default:t.withCtx(()=>[t.renderSlot(y.$slots,"bar-tooltip",{bar:o.value})]),_:3},8,["model-value","bar"]),e.displayTodayLine?(t.openBlock(),t.createBlock(se,{key:3,onTodayLinePositionX:g[2]||(g[2]=E=>s("today-line-position-x",E))})):t.createCommentVNode("",!0)],4),t.createElementVNode("div",null,[t.renderSlot(y.$slots,"footer")])],64))}}),Oe="";function kt(e,s=()=>null,a=()=>null,l=G()){const{barStart:i,barEnd:d,pushOnOverlap:p}=l,h=t.ref(!1);let m=0,r;const{mapPositionToTime:n}=q(l),{toDayjs:o}=j(l),f=g=>{const E=document.getElementById(e.ganttBarConfig.id);if(!E)return;switch(m=g.clientX-(E.getBoundingClientRect().left||0),g.target.className){case"g-gantt-bar-handle-left":document.body.style.cursor="ew-resize",r=u;break;case"g-gantt-bar-handle-right":document.body.style.cursor="ew-resize",r=B;break;default:r=D}h.value=!0,window.addEventListener("mousemove",r),window.addEventListener("mouseup",y)},x=()=>{var c;const g=document.getElementById(e.ganttBarConfig.id),E=(c=g==null?void 0:g.closest(".g-gantt-row-bars-container"))==null?void 0:c.getBoundingClientRect();return{barElement:g,barContainer:E}},D=g=>{const{barElement:E,barContainer:c}=x();if(!E||!c)return;const b=E.getBoundingClientRect().width,w=g.clientX-c.left-m,_=w+b;if(!k(w,_)){if(e[i.value].substring(0,10)!=n(w).substring(0,10)){const C=o(e[i.value]),v=o(e[d.value]).diff(C,"minute"),O=n(w).substring(0,10)+" 00:00";e[i.value]=O,e[d.value]=o(O).add(v,"minute").format("DD.MM.YYYY HH:mm")}s(g,e)}},u=g=>{const{barElement:E,barContainer:c}=x();if(!E||!c)return;const b=g.clientX-c.left,w=n(b);if(!o(w).isSameOrAfter(o(e,"end"))){if(e[i.value].substring(0,10)!=n(b).substring(0,10)){const _=n(b).substring(0,10)+" 00:00";e[i.value]=_}s(g,e)}},B=g=>{const{barElement:E,barContainer:c}=x();if(!E||!c)return;const b=g.clientX-c.left,w=n(b);if(!o(w).isSameOrBefore(o(e,"start"))){if(e[i.value].substring(0,10)!=n(b).substring(0,10)){const _=n(b).substring(0,10)+" 23:59";e[d.value]=_}s(g,e)}},k=(g,E)=>{if(!p.value)return!1;const c=e.ganttBarConfig.dragLimitLeft,b=e.ganttBarConfig.dragLimitRight;return g&&c!=null&&g<c||E&&b!=null&&E>b},y=g=>{h.value=!1,document.body.style.cursor="",window.removeEventListener("mousemove",r),window.removeEventListener("mouseup",y),a(g,e)};return{isDragging:h,initDrag:f}}function Et(){const e=t.inject(ct);if(!e)throw Error("Failed to inject getChartRows!");return e}function _t(){const e=t.inject(ft);if(!e)throw Error("Failed to inject emitBarEvent!");return e}function ce(){const e=G(),s=Et(),a=_t(),{pushOnOverlap:l,barStart:i,barEnd:d,noOverlap:p,dateFormat:h}=e,m=new Map,{toDayjs:r,format:n}=j(),o=(c,b)=>{const{initDrag:w}=kt(c,x,y,e);a({...b,type:"dragstart"},c),w(b),g(c)},f=(c,b)=>{const w=c.ganttBarConfig.bundle;w!=null&&(s().forEach(_=>{_.forEach(C=>{if(C.ganttBarConfig.bundle===w){const S=C===c?y:()=>null,{initDrag:v}=kt(C,x,S,e);v(b),g(C)}})}),a({...b,type:"dragstart"},c))},x=(c,b)=>{a({...c,type:"drag"},b),D(b)},D=c=>{if(!(l!=null&&l.value))return;let b=c,{overlapBar:w,overlapType:_}=u(b);for(;w;){g(w);const C=r(b[i.value]),S=r(b[d.value]),v=r(w[i.value]),O=r(w[d.value]);let L;switch(_){case"left":L=O.diff(C,"minutes",!0),w[d.value]=n(b[i.value],h.value),w[i.value]=n(v.subtract(L,"minutes"),h.value);break;case"right":L=S.diff(v,"minutes",!0),w[i.value]=n(S,h.value),w[d.value]=n(O.add(L,"minutes"),h.value);break;default:console.warn("Vue-Ganttastic: One bar is inside of the other one! This should never occur while push-on-overlap is active!");return}w&&(_==="left"||_==="right")&&B(w,L,_),b=w,{overlapBar:w,overlapType:_}=u(w)}},u=c=>{let b,w,_;const C=s().find(M=>M.includes(c))||[],S=r(c[i.value]),v=r(c[d.value]);return{overlapBar:C.find(M=>{if(M===c)return!1;const $=r(M[i.value]),N=r(M[d.value]);return b=S.isBetween($,N),w=v.isBetween($,N),_=$.isBetween(S,v)||N.isBetween(S,v),b||w||_}),overlapType:b?"left":w?"right":_?"between":null}},B=(c,b,w)=>{g(c),c.ganttBarConfig.bundle&&s().forEach(_=>{_.forEach(C=>{C.ganttBarConfig.bundle===c.ganttBarConfig.bundle&&C!==c&&(g(C),k(C,b,w))})})},k=(c,b,w)=>{switch(w){case"left":c[i.value]=n(r(c,"start").subtract(b,"minutes"),h.value),c[d.value]=n(r(c,"end").subtract(b,"minutes"),h.value);break;case"right":c[i.value]=n(r(c,"start").add(b,"minutes"),h.value),c[d.value]=n(r(c,"end").add(b,"minutes"),h.value)}D(c)},y=(c,b)=>{E();const w={...c,type:"dragend"};a(w,b,void 0,new Map(m)),m.clear()},g=c=>{if(!m.has(c)){const b=c[i.value],w=c[d.value];m.set(c,{oldStart:b,oldEnd:w})}},E=()=>{if(l.value||!p.value)return;let c=!1;m.forEach((b,w)=>{const{overlapBar:_}=u(w);_!=null&&(c=!0)}),c&&m.forEach(({oldStart:b,oldEnd:w},_)=>{_[i.value]=b,_[d.value]=w})};return{initDragOfBar:o,initDragOfBundle:f}}function de(){const{pushOnOverlap:e}=G(),s=Et(),a=p=>{const h=[];return p!=null&&s().forEach(m=>{m.forEach(r=>{r.ganttBarConfig.bundle===p&&h.push(r)})}),h},l=p=>{if(!e.value||p.ganttBarConfig.pushOnOverlap===!1)return;for(const m of["left","right"]){const r=m,{gapDistanceSoFar:n,bundleBarsAndGapDist:o}=i(p,0,r);let f=n;const x=o;if(!x)continue;for(let u=0;u<x.length;u++){const B=x[u].bar,k=x[u].gapDistance;a(B.ganttBarConfig.bundle).filter(g=>g!==B).forEach(g=>{const E=i(g,k,r),c=E.gapDistanceSoFar,b=E.bundleBarsAndGapDist;c!=null&&(!f||c<f)&&(f=c),b.forEach(w=>{x.find(_=>_.bar===w.bar)||x.push(w)})})}const D=document.getElementById(p.ganttBarConfig.id);f!=null&&r==="left"?p.ganttBarConfig.dragLimitLeft=D.offsetLeft-f:f!=null&&r==="right"&&(p.ganttBarConfig.dragLimitRight=D.offsetLeft+D.offsetWidth+f)}a(p.ganttBarConfig.bundle).forEach(m=>{m.ganttBarConfig.dragLimitLeft=p.ganttBarConfig.dragLimitLeft,m.ganttBarConfig.dragLimitRight=p.ganttBarConfig.dragLimitRight})},i=(p,h=0,m)=>{const r=p.ganttBarConfig.bundle?[{bar:p,gapDistance:h}]:[];let n=p,o=d(n,m);if(m==="left")for(;o;){const f=document.getElementById(n.ganttBarConfig.id),x=document.getElementById(o.ganttBarConfig.id),D=x.offsetLeft+x.offsetWidth;if(h+=f.offsetLeft-D,o.ganttBarConfig.immobile)return{gapDistanceSoFar:h,bundleBarsAndGapDist:r};o.ganttBarConfig.bundle&&r.push({bar:o,gapDistance:h}),n=o,o=d(o,"left")}if(m==="right")for(;o;){const f=document.getElementById(n.ganttBarConfig.id),x=document.getElementById(o.ganttBarConfig.id),D=f.offsetLeft+f.offsetWidth;if(h+=x.offsetLeft-D,o.ganttBarConfig.immobile)return{gapDistanceSoFar:h,bundleBarsAndGapDist:r};o.ganttBarConfig.bundle&&r.push({bar:o,gapDistance:h}),n=o,o=d(o,"right")}return{gapDistanceSoFar:null,bundleBarsAndGapDist:r}},d=(p,h)=>{const m=document.getElementById(p.ganttBarConfig.id),r=s().find(o=>o.includes(p))||[];let n=[];return h==="left"?n=r.filter(o=>{const f=document.getElementById(o.ganttBarConfig.id);return f&&f.offsetLeft<m.offsetLeft&&o.ganttBarConfig.pushOnOverlap!==!1}):n=r.filter(o=>{const f=document.getElementById(o.ganttBarConfig.id);return f&&f.offsetLeft>m.offsetLeft&&o.ganttBarConfig.pushOnOverlap!==!1}),n.length>0?n.reduce((o,f)=>{const x=document.getElementById(o.ganttBarConfig.id),D=document.getElementById(f.ganttBarConfig.id),u=Math.abs(x.offsetLeft-m.offsetLeft),B=Math.abs(D.offsetLeft-m.offsetLeft);return u<B?o:f},n[0]):null};return{setDragLimitsOfGanttBar:l}}const fe=["id"],ue={class:"g-gantt-bar-label"},ge={style:{"z-index":"100"}},me=t.createElementVNode("div",{class:"g-gantt-bar-handle-left"},null,-1),pe=t.createElementVNode("div",{class:"g-gantt-bar-handle-right"},null,-1),he=t.defineComponent({__name:"GGanttBar",props:{bar:null},setup(e){const s=e,a=_t(),l=G(),{rowHeight:i}=l,{bar:d}=t.toRefs(s),{mapTimeToPosition:p,mapPositionToTime:h}=q(),{initDragOfBar:m,initDragOfBundle:r}=ce(),{setDragLimitsOfGanttBar:n}=de(),o=t.ref(!1),f=t.computed(()=>d.value.ganttBarConfig);function x(C){f.value.bundle!=null?r(d.value,C):m(d.value,C),o.value=!0}const D=()=>{n(d.value),!f.value.immobile&&(window.addEventListener("mousemove",x,{once:!0}),window.addEventListener("mouseup",()=>{window.removeEventListener("mousemove",x),o.value=!1},{once:!0}))},u=t.inject(ut),B=C=>{var O;C.preventDefault(),C.type==="mousedown"&&D();const S=(O=u==null?void 0:u.value)==null?void 0:O.getBoundingClientRect();if(!S)return;const v=h(C.clientX-S.left);a(C,d.value,v)},{barStart:k,barEnd:y,width:g,chartStart:E,chartEnd:c,chartSize:b}=l,w=t.ref(0),_=t.ref(0);return t.onMounted(()=>{t.watch([d,g,E,c,b.width],()=>{w.value=p(d.value[k.value]),_.value=p(d.value[y.value])},{deep:!0,immediate:!0})}),(C,S)=>(t.openBlock(),t.createElementBlock("div",{id:t.unref(f).id,class:"g-gantt-bar",style:t.normalizeStyle({...t.unref(f).style,position:"absolute",top:`${t.unref(i)*.1}px`,left:`${w.value}px`,width:`${_.value-w.value}px`,height:`${t.unref(i)*.8}px`,zIndex:o.value?3:2}),onMousedown:B,onClick:B,onDblclick:B,onMouseenter:B,onMouseleave:B,onContextmenu:B},[t.createElementVNode("div",ue,[t.renderSlot(C.$slots,"default",{bar:t.unref(d)},()=>[t.createElementVNode("div",ge,t.toDisplayString(t.unref(f).label||""),1),t.unref(f).progress?(t.openBlock(),t.createElementBlock("div",{key:0,style:t.normalizeStyle([{position:"absolute",height:"100%",left:"0"},{width:t.unref(f).progress+"%",backgroundColor:t.unref(f).progressColor}])},null,4)):t.createCommentVNode("",!0)])]),t.unref(f).hasHandles?(t.openBlock(),t.createElementBlock(t.Fragment,{key:0},[me,pe],64)):t.createCommentVNode("",!0)],44,fe))}}),Te="",Ct=t.defineComponent({__name:"GGanttRow",props:{bars:null,highlightOnHover:{type:Boolean}},emits:["drop"],setup(e,{emit:s}){const a=e,{rowHeight:l,colors:i}=G(),{highlightOnHover:d}=t.toRefs(a),p=t.ref(!1),h=t.computed(()=>({height:`${l.value}px`,background:(d==null?void 0:d.value)&&p.value?i.value.hoverHighlight:null})),{mapPositionToTime:m}=q(),r=t.ref(null);t.provide(ut,r);const n=o=>{var u;const f=(u=r.value)==null?void 0:u.getBoundingClientRect();if(!f){console.error("Vue-Ganttastic: failed to find bar container element for row.");return}const x=o.clientX-f.left,D=m(x);s("drop",{e:o,datetime:D})};return(o,f)=>(t.openBlock(),t.createElementBlock("div",{class:"g-gantt-row",style:t.normalizeStyle(t.unref(h)),onDragover:f[0]||(f[0]=t.withModifiers(x=>p.value=!0,["prevent"])),onDragleave:f[1]||(f[1]=x=>p.value=!1),onDrop:f[2]||(f[2]=x=>n(x)),onMouseover:f[3]||(f[3]=x=>p.value=!0),onMouseleave:f[4]||(f[4]=x=>p.value=!1)},[t.createCommentVNode("",!0),t.createElementVNode("div",t.mergeProps({ref_key:"barContainer",ref:r,class:"g-gantt-row-bars-container"},o.$attrs),[t.createVNode(t.TransitionGroup,{name:"bar-transition",tag:"div"},{default:t.withCtx(()=>[(t.openBlock(!0),t.createElementBlock(t.Fragment,null,t.renderList(e.bars,x=>(t.openBlock(),t.createBlock(he,{key:x.ganttBarConfig.id,bar:x},{default:t.withCtx(()=>[t.renderSlot(o.$slots,"bar-label",{bar:x})]),_:2},1032,["bar"]))),128))]),_:3})],16)],36))}}),Le="",Dt=t.defineComponent({__name:"GGanttLabelRow",props:{labels:null,styles:null},setup(e){const{rowHeight:s,colors:a}=G(),{timeaxisUnits:l}=U();return(i,d)=>(t.openBlock(),t.createElementBlock("div",{class:"g-gantt-row",style:t.normalizeStyle({height:t.unref(s)+"px"})},[t.createElementVNode("div",t.mergeProps({ref:"barContainer",class:"g-gantt-row-bars-container"},i.$attrs),[(t.openBlock(!0),t.createElementBlock(t.Fragment,null,t.renderList(t.unref(l).lowerUnits,({label:p,width:h,date:m},r)=>(t.openBlock(),t.createElementBlock("div",{key:m.getTime(),class:"g-timeunit",style:t.normalizeStyle({color:t.unref(a).text,textAlign:"center",width:h})},[t.createElementVNode("span",{style:t.normalizeStyle(e.styles!=null?e.styles[r]:void 0)},t.toDisplayString(e.labels[r]),5)],4))),128))],16)],4))}}),Me="";function St(){R.default.extend(Tt),R.default.extend(Lt),R.default.extend(Mt),R.default.extend(Gt)}const vt={install(e,s){St(),e.component("GGanttChart",xt),e.component("GGanttRow",Ct),e.component("GGanttLabelRow",Dt)}};T.GGanttChart=xt,T.GGanttLabelRow=Dt,T.GGanttRow=Ct,T.default=vt,T.extendDayjs=St,T.ganttastic=vt,Object.defineProperties(T,{__esModule:{value:!0},[Symbol.toStringTag]:{value:"Module"}})});function injectStyle(T,I="top"){if(!T||typeof document>"u")return;const t=document.head,z=document.createElement("style");I==="top"&&t.firstChild?t.insertBefore(z,t.firstChild):t.appendChild(z),z.appendChild(document.createTextNode(T))}injectStyle(`
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
.today-line {
  width: 2px;
  height: 100%;
  background-color: red;
  position: absolute;
  z-index: 1;
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
