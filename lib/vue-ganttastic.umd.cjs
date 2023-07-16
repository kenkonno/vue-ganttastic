(function(T,Y){typeof exports=="object"&&typeof module<"u"?Y(exports,require("dayjs"),require("vue")):typeof define=="function"&&define.amd?define(["exports","dayjs","vue"],Y):(T=typeof globalThis<"u"?globalThis:T||self,Y(T.VueGanttastic={},T.dayjs,T.Vue))})(this,function(T,Y,t){"use strict";const N=(e=>e&&typeof e=="object"&&"default"in e?e:{default:e})(Y);var U=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},ot={exports:{}};(function(e,s){(function(o,m){e.exports=m()})(U,function(){return function(o,m){m.prototype.isSameOrBefore=function(f,c){return this.isSame(f,c)||this.isBefore(f,c)}}})})(ot);const St=ot.exports;var at={exports:{}};(function(e,s){(function(o,m){e.exports=m()})(U,function(){return function(o,m){m.prototype.isSameOrAfter=function(f,c){return this.isSame(f,c)||this.isAfter(f,c)}}})})(at);const Tt=at.exports;var it={exports:{}};(function(e,s){(function(o,m){e.exports=m()})(U,function(){return function(o,m,f){m.prototype.isBetween=function(c,u,g,d){var r=f(c),n=f(u),i=(d=d||"()")[0]==="(",l=d[1]===")";return(i?this.isAfter(r,g):!this.isBefore(r,g))&&(l?this.isBefore(n,g):!this.isAfter(n,g))||(i?this.isBefore(r,g):!this.isAfter(r,g))&&(l?this.isAfter(n,g):!this.isBefore(n,g))}}})})(it);const Mt=it.exports;var st={exports:{}};(function(e,s){(function(o,m){e.exports=m()})(U,function(){var o={LTS:"h:mm:ss A",LT:"h:mm A",L:"MM/DD/YYYY",LL:"MMMM D, YYYY",LLL:"MMMM D, YYYY h:mm A",LLLL:"dddd, MMMM D, YYYY h:mm A"},m=/(\[[^[]*\])|([-_:/.,()\s]+)|(A|a|YYYY|YY?|MM?M?M?|Do|DD?|hh?|HH?|mm?|ss?|S{1,3}|z|ZZ?)/g,f=/\d\d/,c=/\d\d?/,u=/\d*[^-_:/,()\s\d]+/,g={},d=function(b){return(b=+b)+(b>68?1900:2e3)},r=function(b){return function(B){this[b]=+B}},n=[/[+-]\d\d:?(\d\d)?|Z/,function(b){(this.zone||(this.zone={})).offset=function(B){if(!B||B==="Z")return 0;var v=B.match(/([+-]|\d\d)/g),p=60*v[1]+(+v[2]||0);return p===0?0:v[0]==="+"?-p:p}(b)}],i=function(b){var B=g[b];return B&&(B.indexOf?B:B.s.concat(B.f))},l=function(b,B){var v,p=g.meridiem;if(p){for(var h=1;h<=24;h+=1)if(b.indexOf(p(h,0,B))>-1){v=h>12;break}}else v=b===(B?"pm":"PM");return v},x={A:[u,function(b){this.afternoon=l(b,!1)}],a:[u,function(b){this.afternoon=l(b,!0)}],S:[/\d/,function(b){this.milliseconds=100*+b}],SS:[f,function(b){this.milliseconds=10*+b}],SSS:[/\d{3}/,function(b){this.milliseconds=+b}],s:[c,r("seconds")],ss:[c,r("seconds")],m:[c,r("minutes")],mm:[c,r("minutes")],H:[c,r("hours")],h:[c,r("hours")],HH:[c,r("hours")],hh:[c,r("hours")],D:[c,r("day")],DD:[f,r("day")],Do:[u,function(b){var B=g.ordinal,v=b.match(/\d+/);if(this.day=v[0],B)for(var p=1;p<=31;p+=1)B(p).replace(/\[|\]/g,"")===b&&(this.day=p)}],M:[c,r("month")],MM:[f,r("month")],MMM:[u,function(b){var B=i("months"),v=(i("monthsShort")||B.map(function(p){return p.slice(0,3)})).indexOf(b)+1;if(v<1)throw new Error;this.month=v%12||v}],MMMM:[u,function(b){var B=i("months").indexOf(b)+1;if(B<1)throw new Error;this.month=B%12||B}],Y:[/[+-]?\d+/,r("year")],YY:[f,function(b){this.year=d(b)}],YYYY:[/\d{4}/,r("year")],Z:n,ZZ:n};function k(b){var B,v;B=b,v=g&&g.formats;for(var p=(b=B.replace(/(\[[^\]]+])|(LTS?|l{1,4}|L{1,4})/g,function(C,O,D){var S=D&&D.toUpperCase();return O||v[D]||o[D]||v[S].replace(/(\[[^\]]+])|(MMMM|MM|DD|dddd)/g,function(M,L,R){return L||R.slice(1)})})).match(m),h=p.length,E=0;E<h;E+=1){var a=p[E],w=x[a],y=w&&w[0],_=w&&w[1];p[E]=_?{regex:y,parser:_}:a.replace(/^\[|\]$/g,"")}return function(C){for(var O={},D=0,S=0;D<h;D+=1){var M=p[D];if(typeof M=="string")S+=M.length;else{var L=M.regex,R=M.parser,I=C.slice(S),j=L.exec(I)[0];R.call(O,j),C=C.replace(j,"")}}return function(A){var G=A.afternoon;if(G!==void 0){var H=A.hours;G?H<12&&(A.hours+=12):H===12&&(A.hours=0),delete A.afternoon}}(O),O}}return function(b,B,v){v.p.customParseFormat=!0,b&&b.parseTwoDigitYear&&(d=b.parseTwoDigitYear);var p=B.prototype,h=p.parse;p.parse=function(E){var a=E.date,w=E.utc,y=E.args;this.$u=w;var _=y[1];if(typeof _=="string"){var C=y[2]===!0,O=y[3]===!0,D=C||O,S=y[2];O&&(S=y[2]),g=this.$locale(),!C&&S&&(g=v.Ls[S]),this.$d=function(I,j,A){try{if(["x","X"].indexOf(j)>-1)return new Date((j==="X"?1e3:1)*I);var G=k(j)(I),H=G.year,z=G.month,ge=G.day,me=G.hours,pe=G.minutes,he=G.seconds,ye=G.milliseconds,Dt=G.zone,X=new Date,Z=ge||(H||z?1:X.getDate()),J=H||X.getFullYear(),q=0;H&&!z||(q=z>0?z-1:X.getMonth());var tt=me||0,et=pe||0,nt=he||0,rt=ye||0;return Dt?new Date(Date.UTC(J,q,Z,tt,et,nt,rt+60*Dt.offset*1e3)):A?new Date(Date.UTC(J,q,Z,tt,et,nt,rt)):new Date(J,q,Z,tt,et,nt,rt)}catch{return new Date("")}}(a,_,w),this.init(),S&&S!==!0&&(this.$L=this.locale(S).$L),D&&a!=this.format(_)&&(this.$d=new Date("")),g={}}else if(_ instanceof Array)for(var M=_.length,L=1;L<=M;L+=1){y[1]=_[L-1];var R=v.apply(this,y);if(R.isValid()){this.$d=R.$d,this.$L=R.$L,this.init();break}L===M&&(this.$d=new Date(""))}else h.call(this,E)}}})})(st);const Lt=st.exports,lt=Symbol("CHART_ROWS_KEY"),ct=Symbol("CONFIG_KEY"),dt=Symbol("EMIT_BAR_EVENT_KEY"),ft=Symbol("BAR_CONTAINER_KEY");function $(){const e=t.inject(ct);if(!e)throw Error("Failed to inject config!");return e}const ut="YYYY-MM-DD HH:mm";function V(e=$()){const{chartStart:s,chartEnd:o,barStart:m,barEnd:f,dateFormat:c}=e,u=t.computed(()=>d(s.value)),g=t.computed(()=>d(o.value)),d=(n,i)=>{let l;if(i!==void 0&&typeof n!="string"&&!(n instanceof Date)&&(l=i==="start"?n[m.value]:n[f.value]),typeof n=="string")l=n;else if(n instanceof Date)return N.default(n);const x=c.value||ut;return N.default(l,x,!0)};return{chartStartDayjs:u,chartEndDayjs:g,toDayjs:d,format:(n,i)=>i===!1?n instanceof Date?n:N.default(n).toDate():(typeof n=="string"||n instanceof Date?d(n):n).format(i)}}function gt(){const{precision:e}=$(),{chartStartDayjs:s,chartEndDayjs:o}=V(),m=t.computed(()=>{switch(e==null?void 0:e.value){case"hour":return"day";case"day":return"month";case"month":return"year";default:throw new Error("Precision prop incorrect. Must be one of the following: 'hour', 'day', 'month'")}}),f={hour:"HH",date:"DD.MMM ",day:"DD",month:"MMMM YYYY",year:"YYYY"};return{timeaxisUnits:t.computed(()=>{const u=[],g=[],d=m.value==="day"?"date":m.value,r=e.value;let n=s.value.startOf(r);const i=o.value.diff(s.value,"minutes",!0);let l=0,x=n[d]();for(;n.isBefore(o.value)||n.isSame(o.value);){if(n[d]()!==x){let p=0;if(u.length===0)p=n.startOf(d).diff(s.value,"minutes",!0)/i*100;else if(n.isSameOrAfter(o.value))p=o.value.diff(n.subtract(1,d).startOf(d),"minutes",!0)/i*100;else{const E=n.startOf(d),a=n.subtract(1,d).startOf(d);p=E.diff(a,"minutes",!0)/i*100}const h=n.subtract(1,d);u.push({label:h.format(f[d]),value:String(x),date:h.toDate(),width:String(p)+"%"}),l=0,x=n[d]()}let B=0;g.length===0?B=n.endOf(r).diff(s.value,"minutes",!0)/i*100:n.add(1,r).isSameOrAfter(o.value)?B=o.value.diff(n.startOf(r),"minutes",!0)/i*100:B=n.endOf(r).diff(n.startOf(r),"minutes",!0)/i*100,g.push({label:n.format(f[r]),value:String(n[r==="day"?"date":r]()),date:n.toDate(),width:String(B)+"%"});const v=n;n=n.add(1,r),(n.isBefore(o.value)||n.isSame(o.value))&&(l+=n.diff(v,"minutes",!0))}const k=o.value.isSame(o.value.startOf(d))?o.value[d]()-1:o.value[d]();return u.some(B=>B.value===String(k))||(l+=o.value.diff(n.subtract(1,r),"minutes",!0),u.push({label:o.value.format(f[d]),value:String(x),date:o.value.toDate(),width:`${l/i*100}%`})),{upperUnits:u,lowerUnits:g}})}}const $t={class:"g-timeaxis"},Rt={class:"g-timeunits-container"},Gt={class:"g-timeunits-container"},It=t.defineComponent({__name:"GGanttTimeaxis",setup(e){const{precision:s,colors:o}=$(),{timeaxisUnits:m}=gt();return(f,c)=>(t.openBlock(),t.createElementBlock("div",$t,[t.createElementVNode("div",Rt,[(t.openBlock(!0),t.createElementBlock(t.Fragment,null,t.renderList(t.unref(m).upperUnits,({label:u,value:g,date:d,width:r},n)=>(t.openBlock(),t.createElementBlock("div",{key:u,class:"g-upper-timeunit",style:t.normalizeStyle({background:n%2===0?t.unref(o).primary:t.unref(o).secondary,color:t.unref(o).text,width:r})},[t.renderSlot(f.$slots,"upper-timeunit",{label:u,value:g,date:d},()=>[t.createTextVNode(t.toDisplayString(u),1)])],4))),128))]),t.createElementVNode("div",Gt,[(t.openBlock(!0),t.createElementBlock(t.Fragment,null,t.renderList(t.unref(m).lowerUnits,({label:u,value:g,date:d,width:r},n)=>(t.openBlock(),t.createElementBlock("div",{key:u,class:"g-timeunit",style:t.normalizeStyle({background:n%2===0?t.unref(o).ternary:t.unref(o).quartenary,color:t.unref(o).text,flexDirection:t.unref(s)==="hour"?"column":"row",alignItems:t.unref(s)==="hour"?"":"center",width:r})},[t.renderSlot(f.$slots,"timeunit",{label:u,value:g,date:d},()=>[t.createTextVNode(t.toDisplayString(u),1)]),t.unref(s)==="hour"?(t.openBlock(),t.createElementBlock("div",{key:0,class:"g-timeaxis-hour-pin",style:t.normalizeStyle({background:t.unref(o).text})},null,4)):t.createCommentVNode("",!0)],4))),128))])]))}}),be="",Yt={class:"g-grid-container"},Nt=t.defineComponent({__name:"GGanttGrid",props:{highlightedUnits:null},setup(e){const{colors:s}=$(),{timeaxisUnits:o}=gt();return(m,f)=>(t.openBlock(),t.createElementBlock("div",Yt,[(t.openBlock(!0),t.createElementBlock(t.Fragment,null,t.renderList(t.unref(o).lowerUnits,({label:c,value:u,width:g})=>{var d;return t.openBlock(),t.createElementBlock("div",{key:c,class:"g-grid-line",style:t.normalizeStyle({width:g,background:(d=e.highlightedUnits)!=null&&d.includes(Number(u))?t.unref(s).hoverHighlight:void 0})},null,4)}),128))]))}}),we="",At=t.defineComponent({__name:"GGanttBarTooltip",props:{bar:null,modelValue:{type:Boolean}},setup(e){const s=e,o={hour:"HH:mm",day:"DD. MMM HH:mm",month:"DD. MMMM YYYY"},m="cadetblue",{bar:f}=t.toRefs(s),{precision:c,font:u,barStart:g,barEnd:d,rowHeight:r}=$(),n=t.ref("0px"),i=t.ref("0px");t.watch(()=>s.bar,async()=>{var w;await t.nextTick();const v=((w=f==null?void 0:f.value)==null?void 0:w.ganttBarConfig.id)||"";if(!v)return;const p=document.getElementById(v),{top:h,left:E}=(p==null?void 0:p.getBoundingClientRect())||{top:0,left:0},a=Math.max(E,10);n.value=`${h+r.value-10}px`,i.value=`${a}px`},{deep:!0,immediate:!0});const l=t.computed(()=>{var v,p;return((p=(v=f==null?void 0:f.value)==null?void 0:v.ganttBarConfig.style)==null?void 0:p.background)||m}),{toDayjs:x}=V(),k=t.computed(()=>{var v;return(v=f.value)==null?void 0:v[g.value]}),b=t.computed(()=>{var v;return(v=f.value)==null?void 0:v[d.value]}),B=t.computed(()=>{if(!(f!=null&&f.value))return"";const v=o[c.value],p=x(k.value).format(v),h=x(b.value).format(v);return`${p} \u2013 ${h}`});return(v,p)=>(t.openBlock(),t.createBlock(t.Teleport,{to:"body"},[t.createVNode(t.Transition,{name:"g-fade",mode:"out-in"},{default:t.withCtx(()=>[e.modelValue?(t.openBlock(),t.createElementBlock("div",{key:0,class:"g-gantt-tooltip",style:t.normalizeStyle({top:n.value,left:i.value,fontFamily:t.unref(u)})},[t.createElementVNode("div",{class:"g-gantt-tooltip-color-dot",style:t.normalizeStyle({background:t.unref(l)})},null,4),t.renderSlot(v.$slots,"default",{bar:t.unref(f),barStart:t.unref(k),barEnd:t.unref(b)},()=>[t.createTextVNode(t.toDisplayString(t.unref(B)),1)])],4)):t.createCommentVNode("",!0)]),_:3})]))}}),Be="",mt={default:{primary:"#eeeeee",secondary:"#E0E0E0",ternary:"#F5F5F5",quartenary:"#ededed",hoverHighlight:"rgba(204, 216, 219, 0.5)",text:"#404040",background:"white"},creamy:{primary:"#ffe8d9",secondary:"#fcdcc5",ternary:"#fff6f0",quartenary:"#f7ece6",hoverHighlight:"rgba(230, 221, 202, 0.5)",text:"#542d05",background:"white"},crimson:{primary:"#a82039",secondary:"#c41238",ternary:"#db4f56",quartenary:"#ce5f64",hoverHighlight:"rgba(196, 141, 141, 0.5)",text:"white",background:"white"},dark:{primary:"#404040",secondary:"#303030",ternary:"#353535",quartenary:"#383838",hoverHighlight:"rgba(159, 160, 161, 0.5)",text:"white",background:"#525252",toast:"#1f1f1f"},flare:{primary:"#e08a38",secondary:"#e67912",ternary:"#5e5145",quartenary:"#665648",hoverHighlight:"rgba(196, 141, 141, 0.5)",text:"white",background:"white"},fuchsia:{primary:"#de1d5a",secondary:"#b50b41",ternary:"#ff7da6",quartenary:"#f2799f",hoverHighlight:"rgba(196, 141, 141, 0.5)",text:"white",background:"white"},grove:{primary:"#3d9960",secondary:"#288542",ternary:"#72b585",quartenary:"#65a577",hoverHighlight:"rgba(160, 219, 171, 0.5)",text:"white",background:"white"},"material-blue":{primary:"#0D47A1",secondary:"#1565C0",ternary:"#42a5f5",quartenary:"#409fed",hoverHighlight:"rgba(110, 165, 196, 0.5)",text:"white",background:"white"},sky:{primary:"#b5e3ff",secondary:"#a1d6f7",ternary:"#d6f7ff",quartenary:"#d0edf4",hoverHighlight:"rgba(193, 202, 214, 0.5)",text:"#022c47",background:"white"},slumber:{primary:"#2a2f42",secondary:"#2f3447",ternary:"#35394d",quartenary:"#2c3044",hoverHighlight:"rgba(179, 162, 127, 0.5)",text:"#ffe0b3",background:"#38383b",toast:"#1f1f1f"},vue:{primary:"#258a5d",secondary:"#41B883",ternary:"#35495E",quartenary:"#2a3d51",hoverHighlight:"rgba(160, 219, 171, 0.5)",text:"white",background:"white"}};var pt;const F=typeof window<"u";F&&((pt=window==null?void 0:window.navigator)==null?void 0:pt.userAgent)&&/iP(ad|hone|od)/.test(window.navigator.userAgent);function jt(e){return typeof e=="function"?e():t.unref(e)}function Ht(e){return e}function Vt(e){return t.getCurrentScope()?(t.onScopeDispose(e),!0):!1}function Ft(e,s=!0){t.getCurrentInstance()?t.onMounted(e):s?e():t.nextTick(e)}function ht(e){var s;const o=jt(e);return(s=o==null?void 0:o.$el)!=null?s:o}const Pt=F?window:void 0;F&&window.document,F&&window.navigator,F&&window.location;function Ut(e,s=!1){const o=t.ref(),m=()=>o.value=Boolean(e());return m(),Ft(m,s),o}const W=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},K="__vueuse_ssr_handlers__";W[K]=W[K]||{},W[K];var yt=Object.getOwnPropertySymbols,zt=Object.prototype.hasOwnProperty,qt=Object.prototype.propertyIsEnumerable,Wt=(e,s)=>{var o={};for(var m in e)zt.call(e,m)&&s.indexOf(m)<0&&(o[m]=e[m]);if(e!=null&&yt)for(var m of yt(e))s.indexOf(m)<0&&qt.call(e,m)&&(o[m]=e[m]);return o};function Kt(e,s,o={}){const m=o,{window:f=Pt}=m,c=Wt(m,["window"]);let u;const g=Ut(()=>f&&"ResizeObserver"in f),d=()=>{u&&(u.disconnect(),u=void 0)},r=t.watch(()=>ht(e),i=>{d(),g.value&&f&&i&&(u=new ResizeObserver(s),u.observe(i,c))},{immediate:!0,flush:"post"}),n=()=>{d(),r()};return Vt(n),{isSupported:g,stop:n}}function Qt(e,s={width:0,height:0},o={}){const m=t.ref(s.width),f=t.ref(s.height);return Kt(e,([c])=>{m.value=c.contentRect.width,f.value=c.contentRect.height},o),t.watch(()=>ht(e),c=>{m.value=c?s.width:0,f.value=c?s.height:0}),{width:m,height:f}}var bt;(function(e){e.UP="UP",e.RIGHT="RIGHT",e.DOWN="DOWN",e.LEFT="LEFT",e.NONE="NONE"})(bt||(bt={}));var Xt=Object.defineProperty,wt=Object.getOwnPropertySymbols,Zt=Object.prototype.hasOwnProperty,Jt=Object.prototype.propertyIsEnumerable,Bt=(e,s,o)=>s in e?Xt(e,s,{enumerable:!0,configurable:!0,writable:!0,value:o}):e[s]=o,te=(e,s)=>{for(var o in s||(s={}))Zt.call(s,o)&&Bt(e,o,s[o]);if(wt)for(var o of wt(s))Jt.call(s,o)&&Bt(e,o,s[o]);return e};te({linear:Ht},{easeInSine:[.12,0,.39,0],easeOutSine:[.61,1,.88,1],easeInOutSine:[.37,0,.63,1],easeInQuad:[.11,0,.5,0],easeOutQuad:[.5,1,.89,1],easeInOutQuad:[.45,0,.55,1],easeInCubic:[.32,0,.67,0],easeOutCubic:[.33,1,.68,1],easeInOutCubic:[.65,0,.35,1],easeInQuart:[.5,0,.75,0],easeOutQuart:[.25,1,.5,1],easeInOutQuart:[.76,0,.24,1],easeInQuint:[.64,0,.78,0],easeOutQuint:[.22,1,.36,1],easeInOutQuint:[.83,0,.17,1],easeInExpo:[.7,0,.84,0],easeOutExpo:[.16,1,.3,1],easeInOutExpo:[.87,0,.13,1],easeInCirc:[.55,0,1,.45],easeOutCirc:[0,.55,.45,1],easeInOutCirc:[.85,0,.15,1],easeInBack:[.36,0,.66,-.56],easeOutBack:[.34,1.56,.64,1],easeInOutBack:[.68,-.6,.32,1.6]});const ee={style:{display:"flex",overflow:"scroll"}},ne={style:{display:"flex"}},re={style:{display:"flex","flex-flow":"column"}},oe=t.createElementVNode("div",{class:"g-timeaxis",style:{width:"auto"}}," table headers ",-1),ae={class:"g-gantt-rows-container"},vt=t.defineComponent({__name:"GGanttChart",props:{chartStart:null,chartEnd:null,precision:{default:"day"},barStart:null,barEnd:null,dateFormat:{type:[String,Boolean],default:ut},width:{default:"100%"},hideTimeaxis:{type:Boolean,default:!1},colorScheme:{default:"default"},grid:{type:Boolean,default:!1},pushOnOverlap:{type:Boolean,default:!1},noOverlap:{type:Boolean,default:!1},rowHeight:{default:40},highlightedUnits:{default:()=>[]},font:{default:"inherit"}},emits:["click-bar","mousedown-bar","mouseup-bar","dblclick-bar","mouseenter-bar","mouseleave-bar","dragstart-bar","drag-bar","dragend-bar","contextmenu-bar"],setup(e,{emit:s}){const o=e,{width:m,font:f,colorScheme:c}=t.toRefs(o),u=t.useSlots(),g=t.computed(()=>typeof c.value!="string"?c.value:mt[c.value]||mt.default),d=()=>{var E;const p=(E=u.default)==null?void 0:E.call(u),h=[];return p&&p.forEach(a=>{var w;if((w=a.props)!=null&&w.bars){const y=a.props.bars;h.push(y)}else Array.isArray(a.children)&&a.children.forEach(y=>{var C;const _=y;if((C=_==null?void 0:_.props)!=null&&C.bars){const O=_.props.bars;h.push(O)}})}),h},r=t.ref(!1),n=t.ref(!1),i=t.ref(void 0);let l;const x=p=>{l&&clearTimeout(l),l=setTimeout(()=>{r.value=!0},800),i.value=p},k=()=>{clearTimeout(l),r.value=!1},b=(p,h,E,a)=>{switch(p.type){case"click":s("click-bar",{bar:h,e:p,datetime:E});break;case"mousedown":s("mousedown-bar",{bar:h,e:p,datetime:E});break;case"mouseup":s("mouseup-bar",{bar:h,e:p,datetime:E});break;case"dblclick":s("dblclick-bar",{bar:h,e:p,datetime:E});break;case"mouseenter":x(h),s("mouseenter-bar",{bar:h,e:p});break;case"mouseleave":k(),s("mouseleave-bar",{bar:h,e:p});break;case"dragstart":n.value=!0,s("dragstart-bar",{bar:h,e:p});break;case"drag":s("drag-bar",{bar:h,e:p});break;case"dragend":n.value=!1,s("dragend-bar",{bar:h,e:p});break;case"contextmenu":s("contextmenu-bar",{bar:h,e:p,datetime:E});break}},B=t.ref(null),v=Qt(B);return t.provide(lt,d),t.provide(ct,{...t.toRefs(o),colors:g,chartSize:v}),t.provide(dt,b),(p,h)=>(t.openBlock(),t.createElementBlock("div",ee,[t.createElementVNode("div",ne,[t.createElementVNode("div",re,[oe,t.renderSlot(p.$slots,"rows")]),t.createElementVNode("div",{ref_key:"ganttChart",ref:B,class:"g-gantt-chart",style:t.normalizeStyle({width:t.unref(m),background:t.unref(g).background,fontFamily:t.unref(f)})},[e.hideTimeaxis?t.createCommentVNode("",!0):(t.openBlock(),t.createBlock(It,{key:0},{"upper-timeunit":t.withCtx(({label:E,value:a,date:w})=>[t.renderSlot(p.$slots,"upper-timeunit",{label:E,value:a,date:w})]),timeunit:t.withCtx(({label:E,value:a,date:w})=>[t.renderSlot(p.$slots,"timeunit",{label:E,value:a,date:w})]),_:3})),e.grid?(t.openBlock(),t.createBlock(Nt,{key:1,"highlighted-units":e.highlightedUnits},null,8,["highlighted-units"])):t.createCommentVNode("",!0),t.createElementVNode("div",ae,[t.renderSlot(p.$slots,"default")]),t.createVNode(At,{"model-value":r.value||n.value,bar:i.value},{default:t.withCtx(()=>[t.renderSlot(p.$slots,"bar-tooltip",{bar:i.value})]),_:3},8,["model-value","bar"])],4)])]))}}),xe="";function Q(e=$()){const{dateFormat:s,chartSize:o}=e,{chartStartDayjs:m,chartEndDayjs:f,toDayjs:c,format:u}=V(e),g=t.computed(()=>f.value.diff(m.value,"minutes"));return{mapTimeToPosition:n=>{const i=o.width.value||0,l=c(n).diff(m.value,"minutes",!0);return Math.ceil(l/g.value*i)},mapPositionToTime:n=>{const i=o.width.value||0,l=n/i*g.value;return u(m.value.add(l,"minutes"),s.value)}}}function xt(e,s=()=>null,o=()=>null,m=$()){const{barStart:f,barEnd:c,pushOnOverlap:u}=m,g=t.ref(!1);let d=0,r;const{mapPositionToTime:n}=Q(m),{toDayjs:i}=V(m),l=h=>{const E=document.getElementById(e.ganttBarConfig.id);if(!E)return;switch(d=h.clientX-(E.getBoundingClientRect().left||0),h.target.className){case"g-gantt-bar-handle-left":document.body.style.cursor="ew-resize",r=b;break;case"g-gantt-bar-handle-right":document.body.style.cursor="ew-resize",r=B;break;default:r=k}g.value=!0,window.addEventListener("mousemove",r),window.addEventListener("mouseup",p)},x=()=>{var a;const h=document.getElementById(e.ganttBarConfig.id),E=(a=h==null?void 0:h.closest(".g-gantt-row-bars-container"))==null?void 0:a.getBoundingClientRect();return{barElement:h,barContainer:E}},k=h=>{const{barElement:E,barContainer:a}=x();if(!E||!a)return;const w=E.getBoundingClientRect().width,y=h.clientX-a.left-d,_=y+w;v(y,_)||(e[f.value]=n(y),e[c.value]=n(_),s(h,e))},b=h=>{const{barElement:E,barContainer:a}=x();if(!E||!a)return;const w=h.clientX-a.left,y=n(w);i(y).isSameOrAfter(i(e,"end"))||(e[f.value]=y,s(h,e))},B=h=>{const{barElement:E,barContainer:a}=x();if(!E||!a)return;const w=h.clientX-a.left,y=n(w);i(y).isSameOrBefore(i(e,"start"))||(e[c.value]=y,s(h,e))},v=(h,E)=>{if(!u.value)return!1;const a=e.ganttBarConfig.dragLimitLeft,w=e.ganttBarConfig.dragLimitRight;return h&&a!=null&&h<a||E&&w!=null&&E>w},p=h=>{g.value=!1,document.body.style.cursor="",window.removeEventListener("mousemove",r),window.removeEventListener("mouseup",p),o(h,e)};return{isDragging:g,initDrag:l}}function Et(){const e=t.inject(lt);if(!e)throw Error("Failed to inject getChartRows!");return e}function _t(){const e=t.inject(dt);if(!e)throw Error("Failed to inject emitBarEvent!");return e}function ie(){const e=$(),s=Et(),o=_t(),{pushOnOverlap:m,barStart:f,barEnd:c,noOverlap:u,dateFormat:g}=e,d=new Map,{toDayjs:r,format:n}=V(),i=(a,w)=>{const{initDrag:y}=xt(a,x,p,e);o({...w,type:"dragstart"},a),y(w),h(a)},l=(a,w)=>{const y=a.ganttBarConfig.bundle;y!=null&&(s().forEach(_=>{_.forEach(C=>{if(C.ganttBarConfig.bundle===y){const O=C===a?p:()=>null,{initDrag:D}=xt(C,x,O,e);D(w),h(C)}})}),o({...w,type:"dragstart"},a))},x=(a,w)=>{o({...a,type:"drag"},w),k(w)},k=a=>{if(!(m!=null&&m.value))return;let w=a,{overlapBar:y,overlapType:_}=b(w);for(;y;){h(y);const C=r(w[f.value]),O=r(w[c.value]),D=r(y[f.value]),S=r(y[c.value]);let M;switch(_){case"left":M=S.diff(C,"minutes",!0),y[c.value]=n(w[f.value],g.value),y[f.value]=n(D.subtract(M,"minutes"),g.value);break;case"right":M=O.diff(D,"minutes",!0),y[f.value]=n(O,g.value),y[c.value]=n(S.add(M,"minutes"),g.value);break;default:console.warn("Vue-Ganttastic: One bar is inside of the other one! This should never occur while push-on-overlap is active!");return}y&&(_==="left"||_==="right")&&B(y,M,_),w=y,{overlapBar:y,overlapType:_}=b(y)}},b=a=>{let w,y,_;const C=s().find(L=>L.includes(a))||[],O=r(a[f.value]),D=r(a[c.value]);return{overlapBar:C.find(L=>{if(L===a)return!1;const R=r(L[f.value]),I=r(L[c.value]);return w=O.isBetween(R,I),y=D.isBetween(R,I),_=R.isBetween(O,D)||I.isBetween(O,D),w||y||_}),overlapType:w?"left":y?"right":_?"between":null}},B=(a,w,y)=>{h(a),a.ganttBarConfig.bundle&&s().forEach(_=>{_.forEach(C=>{C.ganttBarConfig.bundle===a.ganttBarConfig.bundle&&C!==a&&(h(C),v(C,w,y))})})},v=(a,w,y)=>{switch(y){case"left":a[f.value]=n(r(a,"start").subtract(w,"minutes"),g.value),a[c.value]=n(r(a,"end").subtract(w,"minutes"),g.value);break;case"right":a[f.value]=n(r(a,"start").add(w,"minutes"),g.value),a[c.value]=n(r(a,"end").add(w,"minutes"),g.value)}k(a)},p=(a,w)=>{E();const y={...a,type:"dragend"};o(y,w,void 0,new Map(d)),d.clear()},h=a=>{if(!d.has(a)){const w=a[f.value],y=a[c.value];d.set(a,{oldStart:w,oldEnd:y})}},E=()=>{if(m.value||!u.value)return;let a=!1;d.forEach((w,y)=>{const{overlapBar:_}=b(y);_!=null&&(a=!0)}),a&&d.forEach(({oldStart:w,oldEnd:y},_)=>{_[f.value]=w,_[c.value]=y})};return{initDragOfBar:i,initDragOfBundle:l}}function se(){const{pushOnOverlap:e}=$(),s=Et(),o=u=>{const g=[];return u!=null&&s().forEach(d=>{d.forEach(r=>{r.ganttBarConfig.bundle===u&&g.push(r)})}),g},m=u=>{if(!e.value||u.ganttBarConfig.pushOnOverlap===!1)return;for(const d of["left","right"]){const r=d,{gapDistanceSoFar:n,bundleBarsAndGapDist:i}=f(u,0,r);let l=n;const x=i;if(!x)continue;for(let b=0;b<x.length;b++){const B=x[b].bar,v=x[b].gapDistance;o(B.ganttBarConfig.bundle).filter(h=>h!==B).forEach(h=>{const E=f(h,v,r),a=E.gapDistanceSoFar,w=E.bundleBarsAndGapDist;a!=null&&(!l||a<l)&&(l=a),w.forEach(y=>{x.find(_=>_.bar===y.bar)||x.push(y)})})}const k=document.getElementById(u.ganttBarConfig.id);l!=null&&r==="left"?u.ganttBarConfig.dragLimitLeft=k.offsetLeft-l:l!=null&&r==="right"&&(u.ganttBarConfig.dragLimitRight=k.offsetLeft+k.offsetWidth+l)}o(u.ganttBarConfig.bundle).forEach(d=>{d.ganttBarConfig.dragLimitLeft=u.ganttBarConfig.dragLimitLeft,d.ganttBarConfig.dragLimitRight=u.ganttBarConfig.dragLimitRight})},f=(u,g=0,d)=>{const r=u.ganttBarConfig.bundle?[{bar:u,gapDistance:g}]:[];let n=u,i=c(n,d);if(d==="left")for(;i;){const l=document.getElementById(n.ganttBarConfig.id),x=document.getElementById(i.ganttBarConfig.id),k=x.offsetLeft+x.offsetWidth;if(g+=l.offsetLeft-k,i.ganttBarConfig.immobile)return{gapDistanceSoFar:g,bundleBarsAndGapDist:r};i.ganttBarConfig.bundle&&r.push({bar:i,gapDistance:g}),n=i,i=c(i,"left")}if(d==="right")for(;i;){const l=document.getElementById(n.ganttBarConfig.id),x=document.getElementById(i.ganttBarConfig.id),k=l.offsetLeft+l.offsetWidth;if(g+=x.offsetLeft-k,i.ganttBarConfig.immobile)return{gapDistanceSoFar:g,bundleBarsAndGapDist:r};i.ganttBarConfig.bundle&&r.push({bar:i,gapDistance:g}),n=i,i=c(i,"right")}return{gapDistanceSoFar:null,bundleBarsAndGapDist:r}},c=(u,g)=>{const d=document.getElementById(u.ganttBarConfig.id),r=s().find(i=>i.includes(u))||[];let n=[];return g==="left"?n=r.filter(i=>{const l=document.getElementById(i.ganttBarConfig.id);return l&&l.offsetLeft<d.offsetLeft&&i.ganttBarConfig.pushOnOverlap!==!1}):n=r.filter(i=>{const l=document.getElementById(i.ganttBarConfig.id);return l&&l.offsetLeft>d.offsetLeft&&i.ganttBarConfig.pushOnOverlap!==!1}),n.length>0?n.reduce((i,l)=>{const x=document.getElementById(i.ganttBarConfig.id),k=document.getElementById(l.ganttBarConfig.id),b=Math.abs(x.offsetLeft-d.offsetLeft),B=Math.abs(k.offsetLeft-d.offsetLeft);return b<B?i:l},n[0]):null};return{setDragLimitsOfGanttBar:m}}const le=["id"],ce={class:"g-gantt-bar-label"},de=t.createElementVNode("div",{class:"g-gantt-bar-handle-left"},null,-1),fe=t.createElementVNode("div",{class:"g-gantt-bar-handle-right"},null,-1),ue=t.defineComponent({__name:"GGanttBar",props:{bar:null},setup(e){const s=e,o=_t(),m=$(),{rowHeight:f}=m,{bar:c}=t.toRefs(s),{mapTimeToPosition:u,mapPositionToTime:g}=Q(),{initDragOfBar:d,initDragOfBundle:r}=ie(),{setDragLimitsOfGanttBar:n}=se(),i=t.ref(!1),l=t.computed(()=>c.value.ganttBarConfig);function x(C){l.value.bundle!=null?r(c.value,C):d(c.value,C),i.value=!0}const k=()=>{n(c.value),!l.value.immobile&&(window.addEventListener("mousemove",x,{once:!0}),window.addEventListener("mouseup",()=>{window.removeEventListener("mousemove",x),i.value=!1},{once:!0}))},b=t.inject(ft),B=C=>{var S;C.preventDefault(),C.type==="mousedown"&&k();const O=(S=b==null?void 0:b.value)==null?void 0:S.getBoundingClientRect();if(!O)return;const D=g(C.clientX-O.left);o(C,c.value,D)},{barStart:v,barEnd:p,width:h,chartStart:E,chartEnd:a,chartSize:w}=m,y=t.ref(0),_=t.ref(0);return t.onMounted(()=>{t.watch([c,h,E,a,w.width],()=>{y.value=u(c.value[v.value]),_.value=u(c.value[p.value])},{deep:!0,immediate:!0})}),(C,O)=>(t.openBlock(),t.createElementBlock("div",{id:t.unref(l).id,class:"g-gantt-bar",style:t.normalizeStyle({...t.unref(l).style,position:"absolute",top:`${t.unref(f)*.1}px`,left:`${y.value}px`,width:`${_.value-y.value}px`,height:`${t.unref(f)*.8}px`,zIndex:i.value?3:2}),onMousedown:B,onClick:B,onDblclick:B,onMouseenter:B,onMouseleave:B,onContextmenu:B},[t.createElementVNode("div",ce,[t.renderSlot(C.$slots,"default",{bar:t.unref(c)},()=>[t.createElementVNode("div",null,t.toDisplayString(t.unref(l).label||""),1)])]),t.unref(l).hasHandles?(t.openBlock(),t.createElementBlock(t.Fragment,{key:0},[de,fe],64)):t.createCommentVNode("",!0)],44,le))}}),Ee="",Ct=t.defineComponent({__name:"GGanttRow",props:{bars:null,highlightOnHover:{type:Boolean}},emits:["drop"],setup(e,{emit:s}){const o=e,{rowHeight:m,colors:f}=$(),{highlightOnHover:c}=t.toRefs(o),u=t.ref(!1),g=t.computed(()=>({height:`${m.value}px`,background:(c==null?void 0:c.value)&&u.value?f.value.hoverHighlight:null})),{mapPositionToTime:d}=Q(),r=t.ref(null);t.provide(ft,r);const n=i=>{var b;const l=(b=r.value)==null?void 0:b.getBoundingClientRect();if(!l){console.error("Vue-Ganttastic: failed to find bar container element for row.");return}const x=i.clientX-l.left,k=d(x);s("drop",{e:i,datetime:k})};return(i,l)=>(t.openBlock(),t.createElementBlock("div",{class:"g-gantt-row",style:t.normalizeStyle(t.unref(g)),onDragover:l[0]||(l[0]=t.withModifiers(x=>u.value=!0,["prevent"])),onDragleave:l[1]||(l[1]=x=>u.value=!1),onDrop:l[2]||(l[2]=x=>n(x)),onMouseover:l[3]||(l[3]=x=>u.value=!0),onMouseleave:l[4]||(l[4]=x=>u.value=!1)},[t.createCommentVNode("",!0),t.createElementVNode("div",t.mergeProps({ref_key:"barContainer",ref:r,class:"g-gantt-row-bars-container"},i.$attrs),[t.createVNode(t.TransitionGroup,{name:"bar-transition",tag:"div"},{default:t.withCtx(()=>[(t.openBlock(!0),t.createElementBlock(t.Fragment,null,t.renderList(e.bars,x=>(t.openBlock(),t.createBlock(ue,{key:x.ganttBarConfig.id,bar:x},{default:t.withCtx(()=>[t.renderSlot(i.$slots,"bar-label",{bar:x})]),_:2},1032,["bar"]))),128))]),_:3})],16)],36))}}),_e="";function kt(){N.default.extend(St),N.default.extend(Tt),N.default.extend(Mt),N.default.extend(Lt)}const Ot={install(e,s){kt(),e.component("GGanttChart",vt),e.component("GGanttRow",Ct)}};T.GGanttChart=vt,T.GGanttRow=Ct,T.default=Ot,T.extendDayjs=kt,T.ganttastic=Ot,Object.defineProperties(T,{__esModule:{value:!0},[Symbol.toStringTag]:{value:"Module"}})});function injectStyle(T,Y="top"){if(!T||typeof document>"u")return;const t=document.head,P=document.createElement("style");Y==="top"&&t.firstChild?t.insertBefore(P,t.firstChild):t.appendChild(P),P.appendChild(document.createTextNode(T))}injectStyle(`
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
