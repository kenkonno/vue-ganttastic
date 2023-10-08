(function(T,N){typeof exports=="object"&&typeof module<"u"?N(exports,require("dayjs"),require("vue")):typeof define=="function"&&define.amd?define(["exports","dayjs","vue"],N):(T=typeof globalThis<"u"?globalThis:T||self,N(T.VueGanttastic={},T.dayjs,T.Vue))})(this,function(T,N,t){"use strict";const R=(e=>e&&typeof e=="object"&&"default"in e?e:{default:e})(N);var P=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},at={exports:{}};(function(e,i){(function(o,d){e.exports=d()})(P,function(){return function(o,d){d.prototype.isSameOrBefore=function(s,c){return this.isSame(s,c)||this.isBefore(s,c)}}})})(at);const Tt=at.exports;var it={exports:{}};(function(e,i){(function(o,d){e.exports=d()})(P,function(){return function(o,d){d.prototype.isSameOrAfter=function(s,c){return this.isSame(s,c)||this.isAfter(s,c)}}})})(it);const Lt=it.exports;var st={exports:{}};(function(e,i){(function(o,d){e.exports=d()})(P,function(){return function(o,d,s){d.prototype.isBetween=function(c,g,m,f){var r=s(c),n=s(g),a=(f=f||"()")[0]==="(",u=f[1]===")";return(a?this.isAfter(r,m):!this.isBefore(r,m))&&(u?this.isBefore(n,m):!this.isAfter(n,m))||(a?this.isBefore(r,m):!this.isAfter(r,m))&&(u?this.isAfter(n,m):!this.isBefore(n,m))}}})})(st);const Mt=st.exports;var lt={exports:{}};(function(e,i){(function(o,d){e.exports=d()})(P,function(){var o={LTS:"h:mm:ss A",LT:"h:mm A",L:"MM/DD/YYYY",LL:"MMMM D, YYYY",LLL:"MMMM D, YYYY h:mm A",LLLL:"dddd, MMMM D, YYYY h:mm A"},d=/(\[[^[]*\])|([-_:/.,()\s]+)|(A|a|YYYY|YY?|MM?M?M?|Do|DD?|hh?|HH?|mm?|ss?|S{1,3}|z|ZZ?)/g,s=/\d\d/,c=/\d\d?/,g=/\d*[^-_:/,()\s\d]+/,m={},f=function(b){return(b=+b)+(b>68?1900:2e3)},r=function(b){return function(B){this[b]=+B}},n=[/[+-]\d\d:?(\d\d)?|Z/,function(b){(this.zone||(this.zone={})).offset=function(B){if(!B||B==="Z")return 0;var _=B.match(/([+-]|\d\d)/g),y=60*_[1]+(+_[2]||0);return y===0?0:_[0]==="+"?-y:y}(b)}],a=function(b){var B=m[b];return B&&(B.indexOf?B:B.s.concat(B.f))},u=function(b,B){var _,y=m.meridiem;if(y){for(var p=1;p<=24;p+=1)if(b.indexOf(y(p,0,B))>-1){_=p>12;break}}else _=b===(B?"pm":"PM");return _},x={A:[g,function(b){this.afternoon=u(b,!1)}],a:[g,function(b){this.afternoon=u(b,!0)}],S:[/\d/,function(b){this.milliseconds=100*+b}],SS:[s,function(b){this.milliseconds=10*+b}],SSS:[/\d{3}/,function(b){this.milliseconds=+b}],s:[c,r("seconds")],ss:[c,r("seconds")],m:[c,r("minutes")],mm:[c,r("minutes")],H:[c,r("hours")],h:[c,r("hours")],HH:[c,r("hours")],hh:[c,r("hours")],D:[c,r("day")],DD:[s,r("day")],Do:[g,function(b){var B=m.ordinal,_=b.match(/\d+/);if(this.day=_[0],B)for(var y=1;y<=31;y+=1)B(y).replace(/\[|\]/g,"")===b&&(this.day=y)}],M:[c,r("month")],MM:[s,r("month")],MMM:[g,function(b){var B=a("months"),_=(a("monthsShort")||B.map(function(y){return y.slice(0,3)})).indexOf(b)+1;if(_<1)throw new Error;this.month=_%12||_}],MMMM:[g,function(b){var B=a("months").indexOf(b)+1;if(B<1)throw new Error;this.month=B%12||B}],Y:[/[+-]?\d+/,r("year")],YY:[s,function(b){this.year=f(b)}],YYYY:[/\d{4}/,r("year")],Z:n,ZZ:n};function C(b){var B,_;B=b,_=m&&m.formats;for(var y=(b=B.replace(/(\[[^\]]+])|(LTS?|l{1,4}|L{1,4})/g,function(v,D,O){var S=O&&O.toUpperCase();return D||_[O]||o[O]||_[S].replace(/(\[[^\]]+])|(MMMM|MM|DD|dddd)/g,function(L,M,$){return M||$.slice(1)})})).match(d),p=y.length,E=0;E<p;E+=1){var l=y[E],h=x[l],w=h&&h[0],k=h&&h[1];y[E]=k?{regex:w,parser:k}:l.replace(/^\[|\]$/g,"")}return function(v){for(var D={},O=0,S=0;O<p;O+=1){var L=y[O];if(typeof L=="string")S+=L.length;else{var M=L.regex,$=L.parser,I=v.slice(S),H=M.exec(I)[0];$.call(D,H),v=v.replace(H,"")}}return function(A){var Y=A.afternoon;if(Y!==void 0){var j=A.hours;Y?j<12&&(A.hours+=12):j===12&&(A.hours=0),delete A.afternoon}}(D),D}}return function(b,B,_){_.p.customParseFormat=!0,b&&b.parseTwoDigitYear&&(f=b.parseTwoDigitYear);var y=B.prototype,p=y.parse;y.parse=function(E){var l=E.date,h=E.utc,w=E.args;this.$u=h;var k=w[1];if(typeof k=="string"){var v=w[2]===!0,D=w[3]===!0,O=v||D,S=w[2];D&&(S=w[2]),m=this.$locale(),!v&&S&&(m=_.Ls[S]),this.$d=function(I,H,A){try{if(["x","X"].indexOf(H)>-1)return new Date((H==="X"?1e3:1)*I);var Y=C(H)(I),j=Y.year,W=Y.month,he=Y.day,ye=Y.hours,be=Y.minutes,we=Y.seconds,Be=Y.milliseconds,St=Y.zone,Z=new Date,J=he||(j||W?1:Z.getDate()),tt=j||Z.getFullYear(),K=0;j&&!W||(K=W>0?W-1:Z.getMonth());var et=ye||0,nt=be||0,ot=we||0,rt=Be||0;return St?new Date(Date.UTC(tt,K,J,et,nt,ot,rt+60*St.offset*1e3)):A?new Date(Date.UTC(tt,K,J,et,nt,ot,rt)):new Date(tt,K,J,et,nt,ot,rt)}catch{return new Date("")}}(l,k,h),this.init(),S&&S!==!0&&(this.$L=this.locale(S).$L),O&&l!=this.format(k)&&(this.$d=new Date("")),m={}}else if(k instanceof Array)for(var L=k.length,M=1;M<=L;M+=1){w[1]=k[M-1];var $=_.apply(this,w);if($.isValid()){this.$d=$.$d,this.$L=$.$L,this.init();break}M===L&&(this.$d=new Date(""))}else p.call(this,E)}}})})(lt);const Gt=lt.exports,ct=Symbol("CHART_ROWS_KEY"),dt=Symbol("CONFIG_KEY"),ft=Symbol("EMIT_BAR_EVENT_KEY"),ut=Symbol("BAR_CONTAINER_KEY");function G(){const e=t.inject(dt);if(!e)throw Error("Failed to inject config!");return e}const gt="YYYY-MM-DD HH:mm";function V(e=G()){const{chartStart:i,chartEnd:o,barStart:d,barEnd:s,dateFormat:c}=e,g=t.computed(()=>f(i.value)),m=t.computed(()=>f(o.value)),f=(n,a)=>{let u;if(a!==void 0&&typeof n!="string"&&!(n instanceof Date)&&(u=a==="start"?n[d.value]:n[s.value]),typeof n=="string")u=n;else if(n instanceof Date)return R.default(n);const x=c.value||gt;return R.default(u,x,!0)};return{chartStartDayjs:g,chartEndDayjs:m,toDayjs:f,format:(n,a)=>a===!1?n instanceof Date?n:R.default(n).toDate():(typeof n=="string"||n instanceof Date?f(n):n).format(a)}}function U(){const{precision:e}=G(),{chartStartDayjs:i,chartEndDayjs:o}=V(),d=t.computed(()=>{switch(e==null?void 0:e.value){case"hour":return"day";case"day":return"month";case"week":return"month";case"month":return"year";default:throw new Error("Precision prop incorrect. Must be one of the following: 'hour', 'day', 'month'")}}),s={hour:"HH",date:"DD.MMM ",day:"DD",week:"DD",month:"MMMM YYYY",year:"YYYY"};return{timeaxisUnits:t.computed(()=>{const g=[],m=[],f=d.value==="day"?"date":d.value,r=e.value;let n=i.value.startOf(r);const a=o.value.diff(i.value,"minutes",!0);let u=0,x=n[f]();for(;n.isBefore(o.value)||n.isSame(o.value);){if(n[f]()!==x){let p=0;if(g.length===0)p=n.startOf(f).diff(i.value,"minutes",!0)/a*100;else if(n.isSameOrAfter(o.value))p=o.value.diff(n.subtract(1,f).startOf(f),"minutes",!0)/a*100;else{const l=n.startOf(f),h=n.subtract(1,f).startOf(f);p=l.diff(h,"minutes",!0)/a*100}const E=n.subtract(1,f);g.push({label:E.format(s[f]),value:String(x),date:E.toDate(),width:String(p)+"%"}),u=0,x=n[f]()}let B=0;m.length===0?B=n.endOf(r).diff(i.value,"minutes",!0)/a*100:n.add(1,r).isSameOrAfter(o.value)?B=o.value.diff(n.startOf(r),"minutes",!0)/a*100:B=n.endOf(r).diff(n.startOf(r),"minutes",!0)/a*100;let _;switch(r){case"week":_=n.startOf("week");break;default:_=n[r==="day"?"date":r]()}m.push({label:n.format(s[r]),value:String(_),date:n.toDate(),width:String(B)+"%"});const y=n;n=n.add(1,r),(n.isBefore(o.value)||n.isSame(o.value))&&(u+=n.diff(y,"minutes",!0))}const C=o.value.isSame(o.value.startOf(f))?o.value[f]()-1:o.value[f]();return g.some(B=>B.value===String(C))||(u+=o.value.diff(n.subtract(1,r),"minutes",!0),g.push({label:o.value.format(s[f]),value:String(x),date:o.value.toDate(),width:`${u/a*100}%`})),{upperUnits:g,lowerUnits:m}})}}const $t={class:"g-timeaxis"},Yt={class:"g-timeunits-container"},Rt={class:"g-timeunits-container"},It=t.defineComponent({__name:"GGanttTimeaxis",setup(e){const{precision:i,colors:o}=G(),{timeaxisUnits:d}=U();return(s,c)=>(t.openBlock(),t.createElementBlock("div",$t,[t.createElementVNode("div",Yt,[(t.openBlock(!0),t.createElementBlock(t.Fragment,null,t.renderList(t.unref(d).upperUnits,({label:g,value:m,date:f,width:r},n)=>(t.openBlock(),t.createElementBlock("div",{key:f.getTime(),class:"g-upper-timeunit",style:t.normalizeStyle({background:n%2===0?t.unref(o).primary:t.unref(o).secondary,color:t.unref(o).text,width:r})},[t.renderSlot(s.$slots,"upper-timeunit",{label:g,value:m,date:f},()=>[t.createTextVNode(t.toDisplayString(g),1)])],4))),128))]),t.createElementVNode("div",Rt,[(t.openBlock(!0),t.createElementBlock(t.Fragment,null,t.renderList(t.unref(d).lowerUnits,({label:g,value:m,date:f,width:r},n)=>(t.openBlock(),t.createElementBlock("div",{key:f.getTime(),class:"g-timeunit",style:t.normalizeStyle({background:n%2===0?t.unref(o).ternary:t.unref(o).quartenary,color:t.unref(o).text,flexDirection:t.unref(i)==="hour"?"column":"row",alignItems:t.unref(i)==="hour"?"":"center",width:r})},[t.renderSlot(s.$slots,"timeunit",{label:g,value:m,date:f},()=>[t.createTextVNode(t.toDisplayString(g),1)]),t.unref(i)==="hour"?(t.openBlock(),t.createElementBlock("div",{key:0,class:"g-timeaxis-hour-pin",style:t.normalizeStyle({background:t.unref(o).text})},null,4)):t.createCommentVNode("",!0)],4))),128))])]))}}),xe="",Nt={class:"g-grid-container"},At=t.defineComponent({__name:"GGanttGrid",props:{highlightedDates:null},setup(e){const i=e,o=t.computed(()=>{var c;return(c=i.highlightedDates)==null?void 0:c.map(g=>g.getTime())}),{colors:d}=G(),{timeaxisUnits:s}=U();return(c,g)=>(t.openBlock(),t.createElementBlock("div",Nt,[(t.openBlock(!0),t.createElementBlock(t.Fragment,null,t.renderList(t.unref(s).lowerUnits,({label:m,value:f,width:r,date:n})=>{var a;return t.openBlock(),t.createElementBlock("div",{key:n.getTime(),class:"g-grid-line",style:t.normalizeStyle({width:r,background:(a=t.unref(o))!=null&&a.includes(n.getTime())?t.unref(d).hoverHighlight:void 0})},null,4)}),128))]))}}),_e="",Ht=t.defineComponent({__name:"GGanttBarTooltip",props:{bar:null,modelValue:{type:Boolean}},setup(e){const i=e,o={hour:"HH:mm",day:"DD. MMM HH:mm",week:"DD. MMM HH:mm",month:"DD. MMMM YYYY"},d="cadetblue",{bar:s}=t.toRefs(i),{precision:c,font:g,barStart:m,barEnd:f,rowHeight:r}=G(),n=t.ref("0px"),a=t.ref("0px");t.watch(()=>i.bar,async()=>{var h;await t.nextTick();const _=((h=s==null?void 0:s.value)==null?void 0:h.ganttBarConfig.id)||"";if(!_)return;const y=document.getElementById(_),{top:p,left:E}=(y==null?void 0:y.getBoundingClientRect())||{top:0,left:0},l=Math.max(E,10);n.value=`${p+r.value-10}px`,a.value=`${l}px`},{deep:!0,immediate:!0});const u=t.computed(()=>{var _,y;return((y=(_=s==null?void 0:s.value)==null?void 0:_.ganttBarConfig.style)==null?void 0:y.background)||d}),{toDayjs:x}=V(),C=t.computed(()=>{var _;return(_=s.value)==null?void 0:_[m.value]}),b=t.computed(()=>{var _;return(_=s.value)==null?void 0:_[f.value]}),B=t.computed(()=>{if(!(s!=null&&s.value))return"";const _=o[c.value],y=x(C.value).format(_),p=x(b.value).format(_);return`${y} \u2013 ${p}`});return(_,y)=>(t.openBlock(),t.createBlock(t.Teleport,{to:"body"},[t.createVNode(t.Transition,{name:"g-fade",mode:"out-in"},{default:t.withCtx(()=>[e.modelValue?(t.openBlock(),t.createElementBlock("div",{key:0,class:"g-gantt-tooltip",style:t.normalizeStyle({top:n.value,left:a.value,fontFamily:t.unref(g)})},[t.createElementVNode("div",{class:"g-gantt-tooltip-color-dot",style:t.normalizeStyle({background:t.unref(u)})},null,4),t.renderSlot(_.$slots,"default",{bar:t.unref(s),barStart:t.unref(C),barEnd:t.unref(b)},()=>[t.createTextVNode(t.toDisplayString(t.unref(B)),1)])],4)):t.createCommentVNode("",!0)]),_:3})]))}}),Ee="",mt={default:{primary:"#eeeeee",secondary:"#E0E0E0",ternary:"#F5F5F5",quartenary:"#ededed",hoverHighlight:"rgba(204, 216, 219, 0.5)",text:"#404040",background:"white"},creamy:{primary:"#ffe8d9",secondary:"#fcdcc5",ternary:"#fff6f0",quartenary:"#f7ece6",hoverHighlight:"rgba(230, 221, 202, 0.5)",text:"#542d05",background:"white"},crimson:{primary:"#a82039",secondary:"#c41238",ternary:"#db4f56",quartenary:"#ce5f64",hoverHighlight:"rgba(196, 141, 141, 0.5)",text:"white",background:"white"},dark:{primary:"#404040",secondary:"#303030",ternary:"#353535",quartenary:"#383838",hoverHighlight:"rgba(159, 160, 161, 0.5)",text:"white",background:"#525252",toast:"#1f1f1f"},flare:{primary:"#e08a38",secondary:"#e67912",ternary:"#5e5145",quartenary:"#665648",hoverHighlight:"rgba(196, 141, 141, 0.5)",text:"white",background:"white"},fuchsia:{primary:"#de1d5a",secondary:"#b50b41",ternary:"#ff7da6",quartenary:"#f2799f",hoverHighlight:"rgba(196, 141, 141, 0.5)",text:"white",background:"white"},grove:{primary:"#3d9960",secondary:"#288542",ternary:"#72b585",quartenary:"#65a577",hoverHighlight:"rgba(160, 219, 171, 0.5)",text:"white",background:"white"},"material-blue":{primary:"#0D47A1",secondary:"#1565C0",ternary:"#42a5f5",quartenary:"#409fed",hoverHighlight:"rgba(110, 165, 196, 0.5)",text:"white",background:"white"},sky:{primary:"#b5e3ff",secondary:"#a1d6f7",ternary:"#d6f7ff",quartenary:"#d0edf4",hoverHighlight:"rgba(193, 202, 214, 0.5)",text:"#022c47",background:"white"},slumber:{primary:"#2a2f42",secondary:"#2f3447",ternary:"#35394d",quartenary:"#2c3044",hoverHighlight:"rgba(179, 162, 127, 0.5)",text:"#ffe0b3",background:"#38383b",toast:"#1f1f1f"},vue:{primary:"#258a5d",secondary:"#41B883",ternary:"#35495E",quartenary:"#2a3d51",hoverHighlight:"rgba(160, 219, 171, 0.5)",text:"white",background:"white"}};var pt;const F=typeof window<"u";F&&((pt=window==null?void 0:window.navigator)==null?void 0:pt.userAgent)&&/iP(ad|hone|od)/.test(window.navigator.userAgent);function jt(e){return typeof e=="function"?e():t.unref(e)}function Vt(e){return e}function Ft(e){return t.getCurrentScope()?(t.onScopeDispose(e),!0):!1}function zt(e,i=!0){t.getCurrentInstance()?t.onMounted(e):i?e():t.nextTick(e)}function ht(e){var i;const o=jt(e);return(i=o==null?void 0:o.$el)!=null?i:o}const Pt=F?window:void 0;F&&window.document,F&&window.navigator,F&&window.location;function Ut(e,i=!1){const o=t.ref(),d=()=>o.value=Boolean(e());return d(),zt(d,i),o}const Q=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},X="__vueuse_ssr_handlers__";Q[X]=Q[X]||{},Q[X];var yt=Object.getOwnPropertySymbols,qt=Object.prototype.hasOwnProperty,Wt=Object.prototype.propertyIsEnumerable,Kt=(e,i)=>{var o={};for(var d in e)qt.call(e,d)&&i.indexOf(d)<0&&(o[d]=e[d]);if(e!=null&&yt)for(var d of yt(e))i.indexOf(d)<0&&Wt.call(e,d)&&(o[d]=e[d]);return o};function Qt(e,i,o={}){const d=o,{window:s=Pt}=d,c=Kt(d,["window"]);let g;const m=Ut(()=>s&&"ResizeObserver"in s),f=()=>{g&&(g.disconnect(),g=void 0)},r=t.watch(()=>ht(e),a=>{f(),m.value&&s&&a&&(g=new ResizeObserver(i),g.observe(a,c))},{immediate:!0,flush:"post"}),n=()=>{f(),r()};return Ft(n),{isSupported:m,stop:n}}function Xt(e,i={width:0,height:0},o={}){const d=t.ref(i.width),s=t.ref(i.height);return Qt(e,([c])=>{d.value=c.contentRect.width,s.value=c.contentRect.height},o),t.watch(()=>ht(e),c=>{d.value=c?i.width:0,s.value=c?i.height:0}),{width:d,height:s}}var bt;(function(e){e.UP="UP",e.RIGHT="RIGHT",e.DOWN="DOWN",e.LEFT="LEFT",e.NONE="NONE"})(bt||(bt={}));var Zt=Object.defineProperty,wt=Object.getOwnPropertySymbols,Jt=Object.prototype.hasOwnProperty,te=Object.prototype.propertyIsEnumerable,Bt=(e,i,o)=>i in e?Zt(e,i,{enumerable:!0,configurable:!0,writable:!0,value:o}):e[i]=o,ee=(e,i)=>{for(var o in i||(i={}))Jt.call(i,o)&&Bt(e,o,i[o]);if(wt)for(var o of wt(i))te.call(i,o)&&Bt(e,o,i[o]);return e};ee({linear:Vt},{easeInSine:[.12,0,.39,0],easeOutSine:[.61,1,.88,1],easeInOutSine:[.37,0,.63,1],easeInQuad:[.11,0,.5,0],easeOutQuad:[.5,1,.89,1],easeInOutQuad:[.45,0,.55,1],easeInCubic:[.32,0,.67,0],easeOutCubic:[.33,1,.68,1],easeInOutCubic:[.65,0,.35,1],easeInQuart:[.5,0,.75,0],easeOutQuart:[.25,1,.5,1],easeInOutQuart:[.76,0,.24,1],easeInQuint:[.64,0,.78,0],easeOutQuint:[.22,1,.36,1],easeInOutQuint:[.83,0,.17,1],easeInExpo:[.7,0,.84,0],easeOutExpo:[.16,1,.3,1],easeInOutExpo:[.87,0,.13,1],easeInCirc:[.55,0,1,.45],easeOutCirc:[0,.55,.45,1],easeInOutCirc:[.85,0,.15,1],easeInBack:[.36,0,.66,-.56],easeOutBack:[.34,1.56,.64,1],easeInOutBack:[.68,-.6,.32,1.6]});const ne={key:0,class:"g-footer"},oe={class:"g-footer-container"},re=t.defineComponent({__name:"GGanttFooter",props:{labels:null},setup(e){const{precision:i,colors:o}=G(),{timeaxisUnits:d}=U();return(s,c)=>e.labels?(t.openBlock(),t.createElementBlock("div",ne,[t.createElementVNode("div",oe,[(t.openBlock(!0),t.createElementBlock(t.Fragment,null,t.renderList(t.unref(d).lowerUnits,({label:g,value:m,date:f,width:r},n)=>(t.openBlock(),t.createElementBlock("div",{key:g,class:"g-timeunit",style:t.normalizeStyle({background:n%2===0?t.unref(o).ternary:t.unref(o).quartenary,color:t.unref(o).text,flexDirection:t.unref(i)==="hour"?"column":"row",alignItems:t.unref(i)==="hour"?"":"center",width:r})},[t.renderSlot(s.$slots,"timeunit",{label:g,value:m,date:f},()=>[t.createTextVNode(t.toDisplayString(e.labels[n]),1)],!0)],4))),128))])])):t.createCommentVNode("",!0)}}),ve="",ae=((e,i)=>{const o=e.__vccOpts||e;for(const[d,s]of i)o[d]=s;return o})(re,[["__scopeId","data-v-400629df"]]);function q(e=G()){const{dateFormat:i,chartSize:o}=e,{chartStartDayjs:d,chartEndDayjs:s,toDayjs:c,format:g}=V(e),m=t.computed(()=>s.value.diff(d.value,"minutes"));return{mapTimeToPosition:n=>{const a=o.width.value||0,u=c(n).diff(d.value,"minutes",!0);return Math.ceil(u/m.value*a)},mapPositionToTime:n=>{const a=o.width.value||0,u=n/a*m.value,x=g(d.value.add(u,"minutes"),i.value);if(typeof x=="string")return x;throw Error}}}const ie=t.defineComponent({__name:"GGanttDrawTodayLine",setup(e){const{mapTimeToPosition:i}=q(),o=t.computed(()=>i(R.default().startOf("day").format("DD.MM.YYYY HH:mm")));return(d,s)=>(t.openBlock(),t.createElementBlock("div",{class:"today-line",style:t.normalizeStyle({left:t.unref(o)+"px"})}," TODAY LINE ",4))}}),De="",se={class:"g-gantt-rows-container"},xt=t.defineComponent({__name:"GGanttChart",props:{chartStart:null,chartEnd:null,precision:{default:"day"},barStart:null,barEnd:null,dateFormat:{type:[String,Boolean],default:gt},width:{default:"100%"},hideTimeaxis:{type:Boolean,default:!1},colorScheme:{default:"default"},grid:{type:Boolean,default:!1},pushOnOverlap:{type:Boolean,default:!1},noOverlap:{type:Boolean,default:!1},rowHeight:{default:40},highlightedDates:{default:()=>[]},font:{default:"inherit"},footerLabels:null,sticky:{type:Boolean},displayTodayLine:{type:Boolean}},emits:["click-bar","mousedown-bar","mouseup-bar","dblclick-bar","mouseenter-bar","mouseleave-bar","dragstart-bar","drag-bar","dragend-bar","contextmenu-bar"],setup(e,{emit:i}){const o=e,{width:d,font:s,colorScheme:c}=t.toRefs(o),g=t.useSlots(),m=t.computed(()=>typeof c.value!="string"?c.value:mt[c.value]||mt.default),f=()=>{var E;const y=(E=g.default)==null?void 0:E.call(g),p=[];return y&&y.forEach(l=>{var h;if((h=l.props)!=null&&h.bars){const w=l.props.bars;p.push(w)}else Array.isArray(l.children)&&l.children.forEach(w=>{var v;const k=w;if((v=k==null?void 0:k.props)!=null&&v.bars){const D=k.props.bars;p.push(D)}})}),p},r=t.ref(!1),n=t.ref(!1),a=t.ref(void 0);let u;const x=y=>{u&&clearTimeout(u),u=setTimeout(()=>{r.value=!0},800),a.value=y},C=()=>{clearTimeout(u),r.value=!1},b=(y,p,E,l)=>{switch(y.type){case"click":i("click-bar",{bar:p,e:y,datetime:E});break;case"mousedown":i("mousedown-bar",{bar:p,e:y,datetime:E});break;case"mouseup":i("mouseup-bar",{bar:p,e:y,datetime:E});break;case"dblclick":i("dblclick-bar",{bar:p,e:y,datetime:E});break;case"mouseenter":x(p),i("mouseenter-bar",{bar:p,e:y});break;case"mouseleave":C(),i("mouseleave-bar",{bar:p,e:y});break;case"dragstart":n.value=!0,i("dragstart-bar",{bar:p,e:y});break;case"drag":i("drag-bar",{bar:p,e:y});break;case"dragend":n.value=!1,i("dragend-bar",{bar:p,e:y});break;case"contextmenu":i("contextmenu-bar",{bar:p,e:y,datetime:E});break}},B=t.ref(null),_=Xt(B);return t.provide(ct,f),t.provide(dt,{...t.toRefs(o),colors:m,chartSize:_}),t.provide(ft,b),(y,p)=>(t.openBlock(),t.createElementBlock(t.Fragment,null,[t.createElementVNode("div",{style:t.normalizeStyle([{display:"flex","flex-flow":"column"},e.sticky?"position: sticky; left:0;z-index:100; background: white;":""])},[t.renderSlot(y.$slots,"side-menu")],4),t.createElementVNode("div",{ref_key:"ganttChart",ref:B,class:"g-gantt-chart",style:t.normalizeStyle({width:t.unref(d),background:t.unref(m).background,fontFamily:t.unref(s)})},[e.hideTimeaxis?t.createCommentVNode("",!0):(t.openBlock(),t.createBlock(It,{key:0},{"upper-timeunit":t.withCtx(({label:E,value:l,date:h})=>[t.renderSlot(y.$slots,"upper-timeunit",{label:E,value:l,date:h})]),timeunit:t.withCtx(({label:E,value:l,date:h})=>[t.renderSlot(y.$slots,"timeunit",{label:E,value:l,date:h})]),_:3})),e.grid?(t.openBlock(),t.createBlock(At,{key:1,"highlighted-dates":e.highlightedDates},null,8,["highlighted-dates"])):t.createCommentVNode("",!0),t.createElementVNode("div",se,[t.renderSlot(y.$slots,"default")]),e.hideTimeaxis?t.createCommentVNode("",!0):(t.openBlock(),t.createBlock(ae,{key:2,labels:e.footerLabels},null,8,["labels"])),t.createVNode(Ht,{"model-value":r.value||n.value,bar:a.value},{default:t.withCtx(()=>[t.renderSlot(y.$slots,"bar-tooltip",{bar:a.value})]),_:3},8,["model-value","bar"]),e.displayTodayLine?(t.openBlock(),t.createBlock(ie,{key:3})):t.createCommentVNode("",!0)],4),t.createElementVNode("div",null,[t.renderSlot(y.$slots,"footer")])],64))}}),Oe="";function _t(e,i=()=>null,o=()=>null,d=G()){const{barStart:s,barEnd:c,pushOnOverlap:g}=d,m=t.ref(!1);let f=0,r;const{mapPositionToTime:n}=q(d),{toDayjs:a}=V(d),u=p=>{const E=document.getElementById(e.ganttBarConfig.id);if(!E)return;switch(f=p.clientX-(E.getBoundingClientRect().left||0),p.target.className){case"g-gantt-bar-handle-left":document.body.style.cursor="ew-resize",r=b;break;case"g-gantt-bar-handle-right":document.body.style.cursor="ew-resize",r=B;break;default:r=C}m.value=!0,window.addEventListener("mousemove",r),window.addEventListener("mouseup",y)},x=()=>{var l;const p=document.getElementById(e.ganttBarConfig.id),E=(l=p==null?void 0:p.closest(".g-gantt-row-bars-container"))==null?void 0:l.getBoundingClientRect();return{barElement:p,barContainer:E}},C=p=>{const{barElement:E,barContainer:l}=x();if(!E||!l)return;const h=E.getBoundingClientRect().width,w=p.clientX-l.left-f,k=w+h;if(!_(w,k)){if(e[s.value].substring(0,10)!=n(w).substring(0,10)){const v=a(e[s.value]),O=a(e[c.value]).diff(v,"minute"),S=n(w).substring(0,10)+" 00:00";e[s.value]=S,e[c.value]=a(S).add(O,"minute").format("DD.MM.YYYY HH:mm")}i(p,e)}},b=p=>{const{barElement:E,barContainer:l}=x();if(!E||!l)return;const h=p.clientX-l.left,w=n(h);if(!a(w).isSameOrAfter(a(e,"end"))){if(e[s.value].substring(0,10)!=n(h).substring(0,10)){const k=n(h).substring(0,10)+" 00:00";e[s.value]=k}i(p,e)}},B=p=>{const{barElement:E,barContainer:l}=x();if(!E||!l)return;const h=p.clientX-l.left,w=n(h);if(!a(w).isSameOrBefore(a(e,"start"))){if(e[s.value].substring(0,10)!=n(h).substring(0,10)){const k=n(h).substring(0,10)+" 23:59";e[c.value]=k}i(p,e)}},_=(p,E)=>{if(!g.value)return!1;const l=e.ganttBarConfig.dragLimitLeft,h=e.ganttBarConfig.dragLimitRight;return p&&l!=null&&p<l||E&&h!=null&&E>h},y=p=>{m.value=!1,document.body.style.cursor="",window.removeEventListener("mousemove",r),window.removeEventListener("mouseup",y),o(p,e)};return{isDragging:m,initDrag:u}}function Et(){const e=t.inject(ct);if(!e)throw Error("Failed to inject getChartRows!");return e}function kt(){const e=t.inject(ft);if(!e)throw Error("Failed to inject emitBarEvent!");return e}function le(){const e=G(),i=Et(),o=kt(),{pushOnOverlap:d,barStart:s,barEnd:c,noOverlap:g,dateFormat:m}=e,f=new Map,{toDayjs:r,format:n}=V(),a=(l,h)=>{const{initDrag:w}=_t(l,x,y,e);o({...h,type:"dragstart"},l),w(h),p(l)},u=(l,h)=>{const w=l.ganttBarConfig.bundle;w!=null&&(i().forEach(k=>{k.forEach(v=>{if(v.ganttBarConfig.bundle===w){const D=v===l?y:()=>null,{initDrag:O}=_t(v,x,D,e);O(h),p(v)}})}),o({...h,type:"dragstart"},l))},x=(l,h)=>{o({...l,type:"drag"},h),C(h)},C=l=>{if(!(d!=null&&d.value))return;let h=l,{overlapBar:w,overlapType:k}=b(h);for(;w;){p(w);const v=r(h[s.value]),D=r(h[c.value]),O=r(w[s.value]),S=r(w[c.value]);let L;switch(k){case"left":L=S.diff(v,"minutes",!0),w[c.value]=n(h[s.value],m.value),w[s.value]=n(O.subtract(L,"minutes"),m.value);break;case"right":L=D.diff(O,"minutes",!0),w[s.value]=n(D,m.value),w[c.value]=n(S.add(L,"minutes"),m.value);break;default:console.warn("Vue-Ganttastic: One bar is inside of the other one! This should never occur while push-on-overlap is active!");return}w&&(k==="left"||k==="right")&&B(w,L,k),h=w,{overlapBar:w,overlapType:k}=b(w)}},b=l=>{let h,w,k;const v=i().find(M=>M.includes(l))||[],D=r(l[s.value]),O=r(l[c.value]);return{overlapBar:v.find(M=>{if(M===l)return!1;const $=r(M[s.value]),I=r(M[c.value]);return h=D.isBetween($,I),w=O.isBetween($,I),k=$.isBetween(D,O)||I.isBetween(D,O),h||w||k}),overlapType:h?"left":w?"right":k?"between":null}},B=(l,h,w)=>{p(l),l.ganttBarConfig.bundle&&i().forEach(k=>{k.forEach(v=>{v.ganttBarConfig.bundle===l.ganttBarConfig.bundle&&v!==l&&(p(v),_(v,h,w))})})},_=(l,h,w)=>{switch(w){case"left":l[s.value]=n(r(l,"start").subtract(h,"minutes"),m.value),l[c.value]=n(r(l,"end").subtract(h,"minutes"),m.value);break;case"right":l[s.value]=n(r(l,"start").add(h,"minutes"),m.value),l[c.value]=n(r(l,"end").add(h,"minutes"),m.value)}C(l)},y=(l,h)=>{E();const w={...l,type:"dragend"};o(w,h,void 0,new Map(f)),f.clear()},p=l=>{if(!f.has(l)){const h=l[s.value],w=l[c.value];f.set(l,{oldStart:h,oldEnd:w})}},E=()=>{if(d.value||!g.value)return;let l=!1;f.forEach((h,w)=>{const{overlapBar:k}=b(w);k!=null&&(l=!0)}),l&&f.forEach(({oldStart:h,oldEnd:w},k)=>{k[s.value]=h,k[c.value]=w})};return{initDragOfBar:a,initDragOfBundle:u}}function ce(){const{pushOnOverlap:e}=G(),i=Et(),o=g=>{const m=[];return g!=null&&i().forEach(f=>{f.forEach(r=>{r.ganttBarConfig.bundle===g&&m.push(r)})}),m},d=g=>{if(!e.value||g.ganttBarConfig.pushOnOverlap===!1)return;for(const f of["left","right"]){const r=f,{gapDistanceSoFar:n,bundleBarsAndGapDist:a}=s(g,0,r);let u=n;const x=a;if(!x)continue;for(let b=0;b<x.length;b++){const B=x[b].bar,_=x[b].gapDistance;o(B.ganttBarConfig.bundle).filter(p=>p!==B).forEach(p=>{const E=s(p,_,r),l=E.gapDistanceSoFar,h=E.bundleBarsAndGapDist;l!=null&&(!u||l<u)&&(u=l),h.forEach(w=>{x.find(k=>k.bar===w.bar)||x.push(w)})})}const C=document.getElementById(g.ganttBarConfig.id);u!=null&&r==="left"?g.ganttBarConfig.dragLimitLeft=C.offsetLeft-u:u!=null&&r==="right"&&(g.ganttBarConfig.dragLimitRight=C.offsetLeft+C.offsetWidth+u)}o(g.ganttBarConfig.bundle).forEach(f=>{f.ganttBarConfig.dragLimitLeft=g.ganttBarConfig.dragLimitLeft,f.ganttBarConfig.dragLimitRight=g.ganttBarConfig.dragLimitRight})},s=(g,m=0,f)=>{const r=g.ganttBarConfig.bundle?[{bar:g,gapDistance:m}]:[];let n=g,a=c(n,f);if(f==="left")for(;a;){const u=document.getElementById(n.ganttBarConfig.id),x=document.getElementById(a.ganttBarConfig.id),C=x.offsetLeft+x.offsetWidth;if(m+=u.offsetLeft-C,a.ganttBarConfig.immobile)return{gapDistanceSoFar:m,bundleBarsAndGapDist:r};a.ganttBarConfig.bundle&&r.push({bar:a,gapDistance:m}),n=a,a=c(a,"left")}if(f==="right")for(;a;){const u=document.getElementById(n.ganttBarConfig.id),x=document.getElementById(a.ganttBarConfig.id),C=u.offsetLeft+u.offsetWidth;if(m+=x.offsetLeft-C,a.ganttBarConfig.immobile)return{gapDistanceSoFar:m,bundleBarsAndGapDist:r};a.ganttBarConfig.bundle&&r.push({bar:a,gapDistance:m}),n=a,a=c(a,"right")}return{gapDistanceSoFar:null,bundleBarsAndGapDist:r}},c=(g,m)=>{const f=document.getElementById(g.ganttBarConfig.id),r=i().find(a=>a.includes(g))||[];let n=[];return m==="left"?n=r.filter(a=>{const u=document.getElementById(a.ganttBarConfig.id);return u&&u.offsetLeft<f.offsetLeft&&a.ganttBarConfig.pushOnOverlap!==!1}):n=r.filter(a=>{const u=document.getElementById(a.ganttBarConfig.id);return u&&u.offsetLeft>f.offsetLeft&&a.ganttBarConfig.pushOnOverlap!==!1}),n.length>0?n.reduce((a,u)=>{const x=document.getElementById(a.ganttBarConfig.id),C=document.getElementById(u.ganttBarConfig.id),b=Math.abs(x.offsetLeft-f.offsetLeft),B=Math.abs(C.offsetLeft-f.offsetLeft);return b<B?a:u},n[0]):null};return{setDragLimitsOfGanttBar:d}}const de=["id"],fe={class:"g-gantt-bar-label"},ue={style:{"z-index":"100"}},ge=t.createElementVNode("div",{class:"g-gantt-bar-handle-left"},null,-1),me=t.createElementVNode("div",{class:"g-gantt-bar-handle-right"},null,-1),pe=t.defineComponent({__name:"GGanttBar",props:{bar:null},setup(e){const i=e,o=kt(),d=G(),{rowHeight:s}=d,{bar:c}=t.toRefs(i),{mapTimeToPosition:g,mapPositionToTime:m}=q(),{initDragOfBar:f,initDragOfBundle:r}=le(),{setDragLimitsOfGanttBar:n}=ce(),a=t.ref(!1),u=t.computed(()=>c.value.ganttBarConfig);function x(v){u.value.bundle!=null?r(c.value,v):f(c.value,v),a.value=!0}const C=()=>{n(c.value),!u.value.immobile&&(window.addEventListener("mousemove",x,{once:!0}),window.addEventListener("mouseup",()=>{window.removeEventListener("mousemove",x),a.value=!1},{once:!0}))},b=t.inject(ut),B=v=>{var S;v.preventDefault(),v.type==="mousedown"&&C();const D=(S=b==null?void 0:b.value)==null?void 0:S.getBoundingClientRect();if(!D)return;const O=m(v.clientX-D.left);o(v,c.value,O)},{barStart:_,barEnd:y,width:p,chartStart:E,chartEnd:l,chartSize:h}=d,w=t.ref(0),k=t.ref(0);return t.onMounted(()=>{t.watch([c,p,E,l,h.width],()=>{w.value=g(c.value[_.value]),k.value=g(c.value[y.value])},{deep:!0,immediate:!0})}),(v,D)=>(t.openBlock(),t.createElementBlock("div",{id:t.unref(u).id,class:"g-gantt-bar",style:t.normalizeStyle({...t.unref(u).style,position:"absolute",top:`${t.unref(s)*.1}px`,left:`${w.value}px`,width:`${k.value-w.value}px`,height:`${t.unref(s)*.8}px`,zIndex:a.value?3:2}),onMousedown:B,onClick:B,onDblclick:B,onMouseenter:B,onMouseleave:B,onContextmenu:B},[t.createElementVNode("div",fe,[t.renderSlot(v.$slots,"default",{bar:t.unref(c)},()=>[t.createElementVNode("div",ue,t.toDisplayString(t.unref(u).label||""),1),t.unref(u).progress?(t.openBlock(),t.createElementBlock("div",{key:0,style:t.normalizeStyle([{position:"absolute",height:"100%",left:"0"},{width:t.unref(u).progress+"%",backgroundColor:t.unref(u).progressColor}])},null,4)):t.createCommentVNode("",!0)])]),t.unref(u).hasHandles?(t.openBlock(),t.createElementBlock(t.Fragment,{key:0},[ge,me],64)):t.createCommentVNode("",!0)],44,de))}}),Se="",vt=t.defineComponent({__name:"GGanttRow",props:{bars:null,highlightOnHover:{type:Boolean}},emits:["drop"],setup(e,{emit:i}){const o=e,{rowHeight:d,colors:s}=G(),{highlightOnHover:c}=t.toRefs(o),g=t.ref(!1),m=t.computed(()=>({height:`${d.value}px`,background:(c==null?void 0:c.value)&&g.value?s.value.hoverHighlight:null})),{mapPositionToTime:f}=q(),r=t.ref(null);t.provide(ut,r);const n=a=>{var b;const u=(b=r.value)==null?void 0:b.getBoundingClientRect();if(!u){console.error("Vue-Ganttastic: failed to find bar container element for row.");return}const x=a.clientX-u.left,C=f(x);i("drop",{e:a,datetime:C})};return(a,u)=>(t.openBlock(),t.createElementBlock("div",{class:"g-gantt-row",style:t.normalizeStyle(t.unref(m)),onDragover:u[0]||(u[0]=t.withModifiers(x=>g.value=!0,["prevent"])),onDragleave:u[1]||(u[1]=x=>g.value=!1),onDrop:u[2]||(u[2]=x=>n(x)),onMouseover:u[3]||(u[3]=x=>g.value=!0),onMouseleave:u[4]||(u[4]=x=>g.value=!1)},[t.createCommentVNode("",!0),t.createElementVNode("div",t.mergeProps({ref_key:"barContainer",ref:r,class:"g-gantt-row-bars-container"},a.$attrs),[t.createVNode(t.TransitionGroup,{name:"bar-transition",tag:"div"},{default:t.withCtx(()=>[(t.openBlock(!0),t.createElementBlock(t.Fragment,null,t.renderList(e.bars,x=>(t.openBlock(),t.createBlock(pe,{key:x.ganttBarConfig.id,bar:x},{default:t.withCtx(()=>[t.renderSlot(a.$slots,"bar-label",{bar:x})]),_:2},1032,["bar"]))),128))]),_:3})],16)],36))}}),Te="",Ct=t.defineComponent({__name:"GGanttLabelRow",props:{labels:null,styles:null},setup(e){const{rowHeight:i,colors:o}=G(),{timeaxisUnits:d}=U();return(s,c)=>(t.openBlock(),t.createElementBlock("div",{class:"g-gantt-row",style:t.normalizeStyle({height:t.unref(i)+"px"})},[t.createElementVNode("div",t.mergeProps({ref:"barContainer",class:"g-gantt-row-bars-container"},s.$attrs),[(t.openBlock(!0),t.createElementBlock(t.Fragment,null,t.renderList(t.unref(d).lowerUnits,({label:g,width:m,date:f},r)=>(t.openBlock(),t.createElementBlock("div",{key:f.getTime(),class:"g-timeunit",style:t.normalizeStyle({color:t.unref(o).text,textAlign:"center",width:m})},[t.createElementVNode("span",{style:t.normalizeStyle(e.styles!=null?e.styles[r]:void 0)},t.toDisplayString(e.labels[r]),5)],4))),128))],16)],4))}}),Le="";function Dt(){R.default.extend(Tt),R.default.extend(Lt),R.default.extend(Mt),R.default.extend(Gt)}const Ot={install(e,i){Dt(),e.component("GGanttChart",xt),e.component("GGanttRow",vt),e.component("GGanttLabelRow",Ct)}};T.GGanttChart=xt,T.GGanttLabelRow=Ct,T.GGanttRow=vt,T.default=Ot,T.extendDayjs=Dt,T.ganttastic=Ot,Object.defineProperties(T,{__esModule:{value:!0},[Symbol.toStringTag]:{value:"Module"}})});function injectStyle(T,N="top"){if(!T||typeof document>"u")return;const t=document.head,z=document.createElement("style");N==="top"&&t.firstChild?t.insertBefore(z,t.firstChild):t.appendChild(z),z.appendChild(document.createTextNode(T))}injectStyle(`
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
.today-line {
  width: 2px;
  height: 100%;
  background-color: red;
  position: absolute;
  z-index: 1;
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

`,"top");
