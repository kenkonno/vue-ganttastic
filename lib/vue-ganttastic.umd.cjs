(function(T,I){typeof exports=="object"&&typeof module<"u"?I(exports,require("dayjs"),require("vue")):typeof define=="function"&&define.amd?define(["exports","dayjs","vue"],I):(T=typeof globalThis<"u"?globalThis:T||self,I(T.VueGanttastic={},T.dayjs,T.Vue))})(this,function(T,I,t){"use strict";const N=(e=>e&&typeof e=="object"&&"default"in e?e:{default:e})(I);var U=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},at={exports:{}};(function(e,s){(function(r,m){e.exports=m()})(U,function(){return function(r,m){m.prototype.isSameOrBefore=function(l,c){return this.isSame(l,c)||this.isBefore(l,c)}}})})(at);const St=at.exports;var it={exports:{}};(function(e,s){(function(r,m){e.exports=m()})(U,function(){return function(r,m){m.prototype.isSameOrAfter=function(l,c){return this.isSame(l,c)||this.isAfter(l,c)}}})})(it);const Tt=it.exports;var st={exports:{}};(function(e,s){(function(r,m){e.exports=m()})(U,function(){return function(r,m,l){m.prototype.isBetween=function(c,d,u,f){var o=l(c),n=l(d),a=(f=f||"()")[0]==="(",g=f[1]===")";return(a?this.isAfter(o,u):!this.isBefore(o,u))&&(g?this.isBefore(n,u):!this.isAfter(n,u))||(a?this.isBefore(o,u):!this.isAfter(o,u))&&(g?this.isAfter(n,u):!this.isBefore(n,u))}}})})(st);const Mt=st.exports;var lt={exports:{}};(function(e,s){(function(r,m){e.exports=m()})(U,function(){var r={LTS:"h:mm:ss A",LT:"h:mm A",L:"MM/DD/YYYY",LL:"MMMM D, YYYY",LLL:"MMMM D, YYYY h:mm A",LLLL:"dddd, MMMM D, YYYY h:mm A"},m=/(\[[^[]*\])|([-_:/.,()\s]+)|(A|a|YYYY|YY?|MM?M?M?|Do|DD?|hh?|HH?|mm?|ss?|S{1,3}|z|ZZ?)/g,l=/\d\d/,c=/\d\d?/,d=/\d*[^-_:/,()\s\d]+/,u={},f=function(b){return(b=+b)+(b>68?1900:2e3)},o=function(b){return function(B){this[b]=+B}},n=[/[+-]\d\d:?(\d\d)?|Z/,function(b){(this.zone||(this.zone={})).offset=function(B){if(!B||B==="Z")return 0;var v=B.match(/([+-]|\d\d)/g),p=60*v[1]+(+v[2]||0);return p===0?0:v[0]==="+"?-p:p}(b)}],a=function(b){var B=u[b];return B&&(B.indexOf?B:B.s.concat(B.f))},g=function(b,B){var v,p=u.meridiem;if(p){for(var h=1;h<=24;h+=1)if(b.indexOf(p(h,0,B))>-1){v=h>12;break}}else v=b===(B?"pm":"PM");return v},x={A:[d,function(b){this.afternoon=g(b,!1)}],a:[d,function(b){this.afternoon=g(b,!0)}],S:[/\d/,function(b){this.milliseconds=100*+b}],SS:[l,function(b){this.milliseconds=10*+b}],SSS:[/\d{3}/,function(b){this.milliseconds=+b}],s:[c,o("seconds")],ss:[c,o("seconds")],m:[c,o("minutes")],mm:[c,o("minutes")],H:[c,o("hours")],h:[c,o("hours")],HH:[c,o("hours")],hh:[c,o("hours")],D:[c,o("day")],DD:[l,o("day")],Do:[d,function(b){var B=u.ordinal,v=b.match(/\d+/);if(this.day=v[0],B)for(var p=1;p<=31;p+=1)B(p).replace(/\[|\]/g,"")===b&&(this.day=p)}],M:[c,o("month")],MM:[l,o("month")],MMM:[d,function(b){var B=a("months"),v=(a("monthsShort")||B.map(function(p){return p.slice(0,3)})).indexOf(b)+1;if(v<1)throw new Error;this.month=v%12||v}],MMMM:[d,function(b){var B=a("months").indexOf(b)+1;if(B<1)throw new Error;this.month=B%12||B}],Y:[/[+-]?\d+/,o("year")],YY:[l,function(b){this.year=f(b)}],YYYY:[/\d{4}/,o("year")],Z:n,ZZ:n};function C(b){var B,v;B=b,v=u&&u.formats;for(var p=(b=B.replace(/(\[[^\]]+])|(LTS?|l{1,4}|L{1,4})/g,function(k,O,D){var S=D&&D.toUpperCase();return O||v[D]||r[D]||v[S].replace(/(\[[^\]]+])|(MMMM|MM|DD|dddd)/g,function(M,L,G){return L||G.slice(1)})})).match(m),h=p.length,_=0;_<h;_+=1){var i=p[_],y=x[i],w=y&&y[0],E=y&&y[1];p[_]=E?{regex:w,parser:E}:i.replace(/^\[|\]$/g,"")}return function(k){for(var O={},D=0,S=0;D<h;D+=1){var M=p[D];if(typeof M=="string")S+=M.length;else{var L=M.regex,G=M.parser,Y=k.slice(S),A=L.exec(Y)[0];G.call(O,A),k=k.replace(A,"")}}return function(j){var R=j.afternoon;if(R!==void 0){var H=j.hours;R?H<12&&(j.hours+=12):H===12&&(j.hours=0),delete j.afternoon}}(O),O}}return function(b,B,v){v.p.customParseFormat=!0,b&&b.parseTwoDigitYear&&(f=b.parseTwoDigitYear);var p=B.prototype,h=p.parse;p.parse=function(_){var i=_.date,y=_.utc,w=_.args;this.$u=y;var E=w[1];if(typeof E=="string"){var k=w[2]===!0,O=w[3]===!0,D=k||O,S=w[2];O&&(S=w[2]),u=this.$locale(),!k&&S&&(u=v.Ls[S]),this.$d=function(Y,A,j){try{if(["x","X"].indexOf(A)>-1)return new Date((A==="X"?1e3:1)*Y);var R=C(A)(Y),H=R.year,z=R.month,pe=R.day,he=R.hours,ye=R.minutes,be=R.seconds,we=R.milliseconds,Dt=R.zone,Z=new Date,J=pe||(H||z?1:Z.getDate()),tt=H||Z.getFullYear(),q=0;H&&!z||(q=z>0?z-1:Z.getMonth());var et=he||0,nt=ye||0,rt=be||0,ot=we||0;return Dt?new Date(Date.UTC(tt,q,J,et,nt,rt,ot+60*Dt.offset*1e3)):j?new Date(Date.UTC(tt,q,J,et,nt,rt,ot)):new Date(tt,q,J,et,nt,rt,ot)}catch{return new Date("")}}(i,E,y),this.init(),S&&S!==!0&&(this.$L=this.locale(S).$L),D&&i!=this.format(E)&&(this.$d=new Date("")),u={}}else if(E instanceof Array)for(var M=E.length,L=1;L<=M;L+=1){w[1]=E[L-1];var G=v.apply(this,w);if(G.isValid()){this.$d=G.$d,this.$L=G.$L,this.init();break}L===M&&(this.$d=new Date(""))}else h.call(this,_)}}})})(lt);const Lt=lt.exports,ct=Symbol("CHART_ROWS_KEY"),dt=Symbol("CONFIG_KEY"),ft=Symbol("EMIT_BAR_EVENT_KEY"),ut=Symbol("BAR_CONTAINER_KEY");function $(){const e=t.inject(dt);if(!e)throw Error("Failed to inject config!");return e}const gt="YYYY-MM-DD HH:mm";function F(e=$()){const{chartStart:s,chartEnd:r,barStart:m,barEnd:l,dateFormat:c}=e,d=t.computed(()=>f(s.value)),u=t.computed(()=>f(r.value)),f=(n,a)=>{let g;if(a!==void 0&&typeof n!="string"&&!(n instanceof Date)&&(g=a==="start"?n[m.value]:n[l.value]),typeof n=="string")g=n;else if(n instanceof Date)return N.default(n);const x=c.value||gt;return N.default(g,x,!0)};return{chartStartDayjs:d,chartEndDayjs:u,toDayjs:f,format:(n,a)=>a===!1?n instanceof Date?n:N.default(n).toDate():(typeof n=="string"||n instanceof Date?f(n):n).format(a)}}function W(){const{precision:e}=$(),{chartStartDayjs:s,chartEndDayjs:r}=F(),m=t.computed(()=>{switch(e==null?void 0:e.value){case"hour":return"day";case"day":return"month";case"month":return"year";default:throw new Error("Precision prop incorrect. Must be one of the following: 'hour', 'day', 'month'")}}),l={hour:"HH",date:"DD.MMM ",day:"DD",month:"MMMM YYYY",year:"YYYY"};return{timeaxisUnits:t.computed(()=>{const d=[],u=[],f=m.value==="day"?"date":m.value,o=e.value;let n=s.value.startOf(o);const a=r.value.diff(s.value,"minutes",!0);let g=0,x=n[f]();for(;n.isBefore(r.value)||n.isSame(r.value);){if(n[f]()!==x){let p=0;if(d.length===0)p=n.startOf(f).diff(s.value,"minutes",!0)/a*100;else if(n.isSameOrAfter(r.value))p=r.value.diff(n.subtract(1,f).startOf(f),"minutes",!0)/a*100;else{const _=n.startOf(f),i=n.subtract(1,f).startOf(f);p=_.diff(i,"minutes",!0)/a*100}const h=n.subtract(1,f);d.push({label:h.format(l[f]),value:String(x),date:h.toDate(),width:String(p)+"%"}),g=0,x=n[f]()}let B=0;u.length===0?B=n.endOf(o).diff(s.value,"minutes",!0)/a*100:n.add(1,o).isSameOrAfter(r.value)?B=r.value.diff(n.startOf(o),"minutes",!0)/a*100:B=n.endOf(o).diff(n.startOf(o),"minutes",!0)/a*100,u.push({label:n.format(l[o]),value:String(n[o==="day"?"date":o]()),date:n.toDate(),width:String(B)+"%"});const v=n;n=n.add(1,o),(n.isBefore(r.value)||n.isSame(r.value))&&(g+=n.diff(v,"minutes",!0))}const C=r.value.isSame(r.value.startOf(f))?r.value[f]()-1:r.value[f]();return d.some(B=>B.value===String(C))||(g+=r.value.diff(n.subtract(1,o),"minutes",!0),d.push({label:r.value.format(l[f]),value:String(x),date:r.value.toDate(),width:`${g/a*100}%`})),{upperUnits:d,lowerUnits:u}})}}const $t={class:"g-timeaxis"},Gt={class:"g-timeunits-container"},Rt={class:"g-timeunits-container"},Yt=t.defineComponent({__name:"GGanttTimeaxis",setup(e){const{precision:s,colors:r}=$(),{timeaxisUnits:m}=W();return(l,c)=>(t.openBlock(),t.createElementBlock("div",$t,[t.createElementVNode("div",Gt,[(t.openBlock(!0),t.createElementBlock(t.Fragment,null,t.renderList(t.unref(m).upperUnits,({label:d,value:u,date:f,width:o},n)=>(t.openBlock(),t.createElementBlock("div",{key:d,class:"g-upper-timeunit",style:t.normalizeStyle({background:n%2===0?t.unref(r).primary:t.unref(r).secondary,color:t.unref(r).text,width:o})},[t.renderSlot(l.$slots,"upper-timeunit",{label:d,value:u,date:f},()=>[t.createTextVNode(t.toDisplayString(d),1)])],4))),128))]),t.createElementVNode("div",Rt,[(t.openBlock(!0),t.createElementBlock(t.Fragment,null,t.renderList(t.unref(m).lowerUnits,({label:d,value:u,date:f,width:o},n)=>(t.openBlock(),t.createElementBlock("div",{key:d,class:"g-timeunit",style:t.normalizeStyle({background:n%2===0?t.unref(r).ternary:t.unref(r).quartenary,color:t.unref(r).text,flexDirection:t.unref(s)==="hour"?"column":"row",alignItems:t.unref(s)==="hour"?"":"center",width:o})},[t.renderSlot(l.$slots,"timeunit",{label:d,value:u,date:f},()=>[t.createTextVNode(t.toDisplayString(d),1)]),t.unref(s)==="hour"?(t.openBlock(),t.createElementBlock("div",{key:0,class:"g-timeaxis-hour-pin",style:t.normalizeStyle({background:t.unref(r).text})},null,4)):t.createCommentVNode("",!0)],4))),128))])]))}}),Be="",It={class:"g-grid-container"},Nt=t.defineComponent({__name:"GGanttGrid",props:{highlightedUnits:null},setup(e){const{colors:s}=$(),{timeaxisUnits:r}=W();return(m,l)=>(t.openBlock(),t.createElementBlock("div",It,[(t.openBlock(!0),t.createElementBlock(t.Fragment,null,t.renderList(t.unref(r).lowerUnits,({label:c,value:d,width:u})=>{var f;return t.openBlock(),t.createElementBlock("div",{key:c,class:"g-grid-line",style:t.normalizeStyle({width:u,background:(f=e.highlightedUnits)!=null&&f.includes(Number(d))?t.unref(s).hoverHighlight:void 0})},null,4)}),128))]))}}),xe="",jt=t.defineComponent({__name:"GGanttBarTooltip",props:{bar:null,modelValue:{type:Boolean}},setup(e){const s=e,r={hour:"HH:mm",day:"DD. MMM HH:mm",month:"DD. MMMM YYYY"},m="cadetblue",{bar:l}=t.toRefs(s),{precision:c,font:d,barStart:u,barEnd:f,rowHeight:o}=$(),n=t.ref("0px"),a=t.ref("0px");t.watch(()=>s.bar,async()=>{var y;await t.nextTick();const v=((y=l==null?void 0:l.value)==null?void 0:y.ganttBarConfig.id)||"";if(!v)return;const p=document.getElementById(v),{top:h,left:_}=(p==null?void 0:p.getBoundingClientRect())||{top:0,left:0},i=Math.max(_,10);n.value=`${h+o.value-10}px`,a.value=`${i}px`},{deep:!0,immediate:!0});const g=t.computed(()=>{var v,p;return((p=(v=l==null?void 0:l.value)==null?void 0:v.ganttBarConfig.style)==null?void 0:p.background)||m}),{toDayjs:x}=F(),C=t.computed(()=>{var v;return(v=l.value)==null?void 0:v[u.value]}),b=t.computed(()=>{var v;return(v=l.value)==null?void 0:v[f.value]}),B=t.computed(()=>{if(!(l!=null&&l.value))return"";const v=r[c.value],p=x(C.value).format(v),h=x(b.value).format(v);return`${p} \u2013 ${h}`});return(v,p)=>(t.openBlock(),t.createBlock(t.Teleport,{to:"body"},[t.createVNode(t.Transition,{name:"g-fade",mode:"out-in"},{default:t.withCtx(()=>[e.modelValue?(t.openBlock(),t.createElementBlock("div",{key:0,class:"g-gantt-tooltip",style:t.normalizeStyle({top:n.value,left:a.value,fontFamily:t.unref(d)})},[t.createElementVNode("div",{class:"g-gantt-tooltip-color-dot",style:t.normalizeStyle({background:t.unref(g)})},null,4),t.renderSlot(v.$slots,"default",{bar:t.unref(l),barStart:t.unref(C),barEnd:t.unref(b)},()=>[t.createTextVNode(t.toDisplayString(t.unref(B)),1)])],4)):t.createCommentVNode("",!0)]),_:3})]))}}),ve="",mt={default:{primary:"#eeeeee",secondary:"#E0E0E0",ternary:"#F5F5F5",quartenary:"#ededed",hoverHighlight:"rgba(204, 216, 219, 0.5)",text:"#404040",background:"white"},creamy:{primary:"#ffe8d9",secondary:"#fcdcc5",ternary:"#fff6f0",quartenary:"#f7ece6",hoverHighlight:"rgba(230, 221, 202, 0.5)",text:"#542d05",background:"white"},crimson:{primary:"#a82039",secondary:"#c41238",ternary:"#db4f56",quartenary:"#ce5f64",hoverHighlight:"rgba(196, 141, 141, 0.5)",text:"white",background:"white"},dark:{primary:"#404040",secondary:"#303030",ternary:"#353535",quartenary:"#383838",hoverHighlight:"rgba(159, 160, 161, 0.5)",text:"white",background:"#525252",toast:"#1f1f1f"},flare:{primary:"#e08a38",secondary:"#e67912",ternary:"#5e5145",quartenary:"#665648",hoverHighlight:"rgba(196, 141, 141, 0.5)",text:"white",background:"white"},fuchsia:{primary:"#de1d5a",secondary:"#b50b41",ternary:"#ff7da6",quartenary:"#f2799f",hoverHighlight:"rgba(196, 141, 141, 0.5)",text:"white",background:"white"},grove:{primary:"#3d9960",secondary:"#288542",ternary:"#72b585",quartenary:"#65a577",hoverHighlight:"rgba(160, 219, 171, 0.5)",text:"white",background:"white"},"material-blue":{primary:"#0D47A1",secondary:"#1565C0",ternary:"#42a5f5",quartenary:"#409fed",hoverHighlight:"rgba(110, 165, 196, 0.5)",text:"white",background:"white"},sky:{primary:"#b5e3ff",secondary:"#a1d6f7",ternary:"#d6f7ff",quartenary:"#d0edf4",hoverHighlight:"rgba(193, 202, 214, 0.5)",text:"#022c47",background:"white"},slumber:{primary:"#2a2f42",secondary:"#2f3447",ternary:"#35394d",quartenary:"#2c3044",hoverHighlight:"rgba(179, 162, 127, 0.5)",text:"#ffe0b3",background:"#38383b",toast:"#1f1f1f"},vue:{primary:"#258a5d",secondary:"#41B883",ternary:"#35495E",quartenary:"#2a3d51",hoverHighlight:"rgba(160, 219, 171, 0.5)",text:"white",background:"white"}};var pt;const V=typeof window<"u";V&&((pt=window==null?void 0:window.navigator)==null?void 0:pt.userAgent)&&/iP(ad|hone|od)/.test(window.navigator.userAgent);function At(e){return typeof e=="function"?e():t.unref(e)}function Ht(e){return e}function Ft(e){return t.getCurrentScope()?(t.onScopeDispose(e),!0):!1}function Vt(e,s=!0){t.getCurrentInstance()?t.onMounted(e):s?e():t.nextTick(e)}function ht(e){var s;const r=At(e);return(s=r==null?void 0:r.$el)!=null?s:r}const Pt=V?window:void 0;V&&window.document,V&&window.navigator,V&&window.location;function Ut(e,s=!1){const r=t.ref(),m=()=>r.value=Boolean(e());return m(),Vt(m,s),r}const K=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},Q="__vueuse_ssr_handlers__";K[Q]=K[Q]||{},K[Q];var yt=Object.getOwnPropertySymbols,zt=Object.prototype.hasOwnProperty,qt=Object.prototype.propertyIsEnumerable,Wt=(e,s)=>{var r={};for(var m in e)zt.call(e,m)&&s.indexOf(m)<0&&(r[m]=e[m]);if(e!=null&&yt)for(var m of yt(e))s.indexOf(m)<0&&qt.call(e,m)&&(r[m]=e[m]);return r};function Kt(e,s,r={}){const m=r,{window:l=Pt}=m,c=Wt(m,["window"]);let d;const u=Ut(()=>l&&"ResizeObserver"in l),f=()=>{d&&(d.disconnect(),d=void 0)},o=t.watch(()=>ht(e),a=>{f(),u.value&&l&&a&&(d=new ResizeObserver(s),d.observe(a,c))},{immediate:!0,flush:"post"}),n=()=>{f(),o()};return Ft(n),{isSupported:u,stop:n}}function Qt(e,s={width:0,height:0},r={}){const m=t.ref(s.width),l=t.ref(s.height);return Kt(e,([c])=>{m.value=c.contentRect.width,l.value=c.contentRect.height},r),t.watch(()=>ht(e),c=>{m.value=c?s.width:0,l.value=c?s.height:0}),{width:m,height:l}}var bt;(function(e){e.UP="UP",e.RIGHT="RIGHT",e.DOWN="DOWN",e.LEFT="LEFT",e.NONE="NONE"})(bt||(bt={}));var Xt=Object.defineProperty,wt=Object.getOwnPropertySymbols,Zt=Object.prototype.hasOwnProperty,Jt=Object.prototype.propertyIsEnumerable,Bt=(e,s,r)=>s in e?Xt(e,s,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[s]=r,te=(e,s)=>{for(var r in s||(s={}))Zt.call(s,r)&&Bt(e,r,s[r]);if(wt)for(var r of wt(s))Jt.call(s,r)&&Bt(e,r,s[r]);return e};te({linear:Ht},{easeInSine:[.12,0,.39,0],easeOutSine:[.61,1,.88,1],easeInOutSine:[.37,0,.63,1],easeInQuad:[.11,0,.5,0],easeOutQuad:[.5,1,.89,1],easeInOutQuad:[.45,0,.55,1],easeInCubic:[.32,0,.67,0],easeOutCubic:[.33,1,.68,1],easeInOutCubic:[.65,0,.35,1],easeInQuart:[.5,0,.75,0],easeOutQuart:[.25,1,.5,1],easeInOutQuart:[.76,0,.24,1],easeInQuint:[.64,0,.78,0],easeOutQuint:[.22,1,.36,1],easeInOutQuint:[.83,0,.17,1],easeInExpo:[.7,0,.84,0],easeOutExpo:[.16,1,.3,1],easeInOutExpo:[.87,0,.13,1],easeInCirc:[.55,0,1,.45],easeOutCirc:[0,.55,.45,1],easeInOutCirc:[.85,0,.15,1],easeInBack:[.36,0,.66,-.56],easeOutBack:[.34,1.56,.64,1],easeInOutBack:[.68,-.6,.32,1.6]});const ee={key:0,class:"g-footer"},ne={class:"g-footer-container"},re=t.defineComponent({__name:"GGanttFooter",props:{labels:null},setup(e){const{precision:s,colors:r}=$(),{timeaxisUnits:m}=W();return(l,c)=>e.labels?(t.openBlock(),t.createElementBlock("div",ee,[t.createElementVNode("div",ne,[(t.openBlock(!0),t.createElementBlock(t.Fragment,null,t.renderList(t.unref(m).lowerUnits,({label:d,value:u,date:f,width:o},n)=>(t.openBlock(),t.createElementBlock("div",{key:d,class:"g-timeunit",style:t.normalizeStyle({background:n%2===0?t.unref(r).ternary:t.unref(r).quartenary,color:t.unref(r).text,flexDirection:t.unref(s)==="hour"?"column":"row",alignItems:t.unref(s)==="hour"?"":"center",width:o})},[t.renderSlot(l.$slots,"timeunit",{label:d,value:u,date:f},()=>[t.createTextVNode(t.toDisplayString(e.labels[n]),1)],!0)],4))),128))])])):t.createCommentVNode("",!0)}}),Ee="",oe=((e,s)=>{const r=e.__vccOpts||e;for(const[m,l]of s)r[m]=l;return r})(re,[["__scopeId","data-v-b1cbf765"]]),ae={style:{display:"flex",overflow:"scroll"}},ie={style:{display:"flex"}},se={class:"g-gantt-rows-container"},xt=t.defineComponent({__name:"GGanttChart",props:{chartStart:null,chartEnd:null,precision:{default:"day"},barStart:null,barEnd:null,dateFormat:{type:[String,Boolean],default:gt},width:{default:"100%"},hideTimeaxis:{type:Boolean,default:!1},colorScheme:{default:"default"},grid:{type:Boolean,default:!1},pushOnOverlap:{type:Boolean,default:!1},noOverlap:{type:Boolean,default:!1},rowHeight:{default:40},highlightedUnits:{default:()=>[]},font:{default:"inherit"},footerLabels:null,sticky:{type:Boolean}},emits:["click-bar","mousedown-bar","mouseup-bar","dblclick-bar","mouseenter-bar","mouseleave-bar","dragstart-bar","drag-bar","dragend-bar","contextmenu-bar"],setup(e,{emit:s}){const r=e,{width:m,font:l,colorScheme:c}=t.toRefs(r),d=t.useSlots(),u=t.computed(()=>typeof c.value!="string"?c.value:mt[c.value]||mt.default),f=()=>{var _;const p=(_=d.default)==null?void 0:_.call(d),h=[];return p&&p.forEach(i=>{var y;if((y=i.props)!=null&&y.bars){const w=i.props.bars;h.push(w)}else Array.isArray(i.children)&&i.children.forEach(w=>{var k;const E=w;if((k=E==null?void 0:E.props)!=null&&k.bars){const O=E.props.bars;h.push(O)}})}),h},o=t.ref(!1),n=t.ref(!1),a=t.ref(void 0);let g;const x=p=>{g&&clearTimeout(g),g=setTimeout(()=>{o.value=!0},800),a.value=p},C=()=>{clearTimeout(g),o.value=!1},b=(p,h,_,i)=>{switch(p.type){case"click":s("click-bar",{bar:h,e:p,datetime:_});break;case"mousedown":s("mousedown-bar",{bar:h,e:p,datetime:_});break;case"mouseup":s("mouseup-bar",{bar:h,e:p,datetime:_});break;case"dblclick":s("dblclick-bar",{bar:h,e:p,datetime:_});break;case"mouseenter":x(h),s("mouseenter-bar",{bar:h,e:p});break;case"mouseleave":C(),s("mouseleave-bar",{bar:h,e:p});break;case"dragstart":n.value=!0,s("dragstart-bar",{bar:h,e:p});break;case"drag":s("drag-bar",{bar:h,e:p});break;case"dragend":n.value=!1,s("dragend-bar",{bar:h,e:p});break;case"contextmenu":s("contextmenu-bar",{bar:h,e:p,datetime:_});break}},B=t.ref(null),v=Qt(B);return t.provide(ct,f),t.provide(dt,{...t.toRefs(r),colors:u,chartSize:v}),t.provide(ft,b),(p,h)=>(t.openBlock(),t.createElementBlock("div",ae,[t.createElementVNode("div",ie,[t.createElementVNode("div",{style:t.normalizeStyle([{display:"flex","flex-flow":"column"},e.sticky?"position: sticky; left:0;z-index:100; background: white;":""])},[t.renderSlot(p.$slots,"side-menu")],4),t.createElementVNode("div",{ref_key:"ganttChart",ref:B,class:"g-gantt-chart",style:t.normalizeStyle({width:t.unref(m),background:t.unref(u).background,fontFamily:t.unref(l)})},[e.hideTimeaxis?t.createCommentVNode("",!0):(t.openBlock(),t.createBlock(Yt,{key:0},{"upper-timeunit":t.withCtx(({label:_,value:i,date:y})=>[t.renderSlot(p.$slots,"upper-timeunit",{label:_,value:i,date:y})]),timeunit:t.withCtx(({label:_,value:i,date:y})=>[t.renderSlot(p.$slots,"timeunit",{label:_,value:i,date:y})]),_:3})),e.grid?(t.openBlock(),t.createBlock(Nt,{key:1,"highlighted-units":e.highlightedUnits},null,8,["highlighted-units"])):t.createCommentVNode("",!0),t.createElementVNode("div",se,[t.renderSlot(p.$slots,"default")]),e.hideTimeaxis?t.createCommentVNode("",!0):(t.openBlock(),t.createBlock(oe,{key:2,labels:e.footerLabels},null,8,["labels"])),t.createVNode(jt,{"model-value":o.value||n.value,bar:a.value},{default:t.withCtx(()=>[t.renderSlot(p.$slots,"bar-tooltip",{bar:a.value})]),_:3},8,["model-value","bar"])],4)])]))}}),Ce="";function X(e=$()){const{dateFormat:s,chartSize:r}=e,{chartStartDayjs:m,chartEndDayjs:l,toDayjs:c,format:d}=F(e),u=t.computed(()=>l.value.diff(m.value,"minutes"));return{mapTimeToPosition:n=>{const a=r.width.value||0,g=c(n).diff(m.value,"minutes",!0);return Math.ceil(g/u.value*a)},mapPositionToTime:n=>{const a=r.width.value||0,g=n/a*u.value,x=d(m.value.add(g,"minutes"),s.value);if(typeof x=="string")return x;throw Error}}}function vt(e,s=()=>null,r=()=>null,m=$()){const{barStart:l,barEnd:c,pushOnOverlap:d}=m,u=t.ref(!1);let f=0,o;const{mapPositionToTime:n}=X(m),{toDayjs:a}=F(m),g=h=>{const _=document.getElementById(e.ganttBarConfig.id);if(!_)return;switch(f=h.clientX-(_.getBoundingClientRect().left||0),h.target.className){case"g-gantt-bar-handle-left":document.body.style.cursor="ew-resize",o=b;break;case"g-gantt-bar-handle-right":document.body.style.cursor="ew-resize",o=B;break;default:o=C}u.value=!0,window.addEventListener("mousemove",o),window.addEventListener("mouseup",p)},x=()=>{var i;const h=document.getElementById(e.ganttBarConfig.id),_=(i=h==null?void 0:h.closest(".g-gantt-row-bars-container"))==null?void 0:i.getBoundingClientRect();return{barElement:h,barContainer:_}},C=h=>{const{barElement:_,barContainer:i}=x();if(!_||!i)return;const y=_.getBoundingClientRect().width,w=h.clientX-i.left-f,E=w+y;if(!v(w,E)){if(e[l.value].substring(0,10)!=n(w).substring(0,10)){const k=a(e[l.value]),D=a(e[c.value]).diff(k,"minute"),S=n(w).substring(0,10)+" 00:00";e[l.value]=S,e[c.value]=a(S).add(D,"minute").format("DD.MM.YYYY HH:mm")}s(h,e)}},b=h=>{const{barElement:_,barContainer:i}=x();if(!_||!i)return;const y=h.clientX-i.left,w=n(y);if(!a(w).isSameOrAfter(a(e,"end"))){if(e[l.value].substring(0,10)!=n(y).substring(0,10)){const E=n(y).substring(0,10)+" 00:00";e[l.value]=E}s(h,e)}},B=h=>{const{barElement:_,barContainer:i}=x();if(!_||!i)return;const y=h.clientX-i.left,w=n(y);if(!a(w).isSameOrBefore(a(e,"start"))){if(e[l.value].substring(0,10)!=n(y).substring(0,10)){const E=n(y).substring(0,10)+" 23:59";e[c.value]=E}s(h,e)}},v=(h,_)=>{if(!d.value)return!1;const i=e.ganttBarConfig.dragLimitLeft,y=e.ganttBarConfig.dragLimitRight;return h&&i!=null&&h<i||_&&y!=null&&_>y},p=h=>{u.value=!1,document.body.style.cursor="",window.removeEventListener("mousemove",o),window.removeEventListener("mouseup",p),r(h,e)};return{isDragging:u,initDrag:g}}function _t(){const e=t.inject(ct);if(!e)throw Error("Failed to inject getChartRows!");return e}function Et(){const e=t.inject(ft);if(!e)throw Error("Failed to inject emitBarEvent!");return e}function le(){const e=$(),s=_t(),r=Et(),{pushOnOverlap:m,barStart:l,barEnd:c,noOverlap:d,dateFormat:u}=e,f=new Map,{toDayjs:o,format:n}=F(),a=(i,y)=>{const{initDrag:w}=vt(i,x,p,e);r({...y,type:"dragstart"},i),w(y),h(i)},g=(i,y)=>{const w=i.ganttBarConfig.bundle;w!=null&&(s().forEach(E=>{E.forEach(k=>{if(k.ganttBarConfig.bundle===w){const O=k===i?p:()=>null,{initDrag:D}=vt(k,x,O,e);D(y),h(k)}})}),r({...y,type:"dragstart"},i))},x=(i,y)=>{r({...i,type:"drag"},y),C(y)},C=i=>{if(!(m!=null&&m.value))return;let y=i,{overlapBar:w,overlapType:E}=b(y);for(;w;){h(w);const k=o(y[l.value]),O=o(y[c.value]),D=o(w[l.value]),S=o(w[c.value]);let M;switch(E){case"left":M=S.diff(k,"minutes",!0),w[c.value]=n(y[l.value],u.value),w[l.value]=n(D.subtract(M,"minutes"),u.value);break;case"right":M=O.diff(D,"minutes",!0),w[l.value]=n(O,u.value),w[c.value]=n(S.add(M,"minutes"),u.value);break;default:console.warn("Vue-Ganttastic: One bar is inside of the other one! This should never occur while push-on-overlap is active!");return}w&&(E==="left"||E==="right")&&B(w,M,E),y=w,{overlapBar:w,overlapType:E}=b(w)}},b=i=>{let y,w,E;const k=s().find(L=>L.includes(i))||[],O=o(i[l.value]),D=o(i[c.value]);return{overlapBar:k.find(L=>{if(L===i)return!1;const G=o(L[l.value]),Y=o(L[c.value]);return y=O.isBetween(G,Y),w=D.isBetween(G,Y),E=G.isBetween(O,D)||Y.isBetween(O,D),y||w||E}),overlapType:y?"left":w?"right":E?"between":null}},B=(i,y,w)=>{h(i),i.ganttBarConfig.bundle&&s().forEach(E=>{E.forEach(k=>{k.ganttBarConfig.bundle===i.ganttBarConfig.bundle&&k!==i&&(h(k),v(k,y,w))})})},v=(i,y,w)=>{switch(w){case"left":i[l.value]=n(o(i,"start").subtract(y,"minutes"),u.value),i[c.value]=n(o(i,"end").subtract(y,"minutes"),u.value);break;case"right":i[l.value]=n(o(i,"start").add(y,"minutes"),u.value),i[c.value]=n(o(i,"end").add(y,"minutes"),u.value)}C(i)},p=(i,y)=>{_();const w={...i,type:"dragend"};r(w,y,void 0,new Map(f)),f.clear()},h=i=>{if(!f.has(i)){const y=i[l.value],w=i[c.value];f.set(i,{oldStart:y,oldEnd:w})}},_=()=>{if(m.value||!d.value)return;let i=!1;f.forEach((y,w)=>{const{overlapBar:E}=b(w);E!=null&&(i=!0)}),i&&f.forEach(({oldStart:y,oldEnd:w},E)=>{E[l.value]=y,E[c.value]=w})};return{initDragOfBar:a,initDragOfBundle:g}}function ce(){const{pushOnOverlap:e}=$(),s=_t(),r=d=>{const u=[];return d!=null&&s().forEach(f=>{f.forEach(o=>{o.ganttBarConfig.bundle===d&&u.push(o)})}),u},m=d=>{if(!e.value||d.ganttBarConfig.pushOnOverlap===!1)return;for(const f of["left","right"]){const o=f,{gapDistanceSoFar:n,bundleBarsAndGapDist:a}=l(d,0,o);let g=n;const x=a;if(!x)continue;for(let b=0;b<x.length;b++){const B=x[b].bar,v=x[b].gapDistance;r(B.ganttBarConfig.bundle).filter(h=>h!==B).forEach(h=>{const _=l(h,v,o),i=_.gapDistanceSoFar,y=_.bundleBarsAndGapDist;i!=null&&(!g||i<g)&&(g=i),y.forEach(w=>{x.find(E=>E.bar===w.bar)||x.push(w)})})}const C=document.getElementById(d.ganttBarConfig.id);g!=null&&o==="left"?d.ganttBarConfig.dragLimitLeft=C.offsetLeft-g:g!=null&&o==="right"&&(d.ganttBarConfig.dragLimitRight=C.offsetLeft+C.offsetWidth+g)}r(d.ganttBarConfig.bundle).forEach(f=>{f.ganttBarConfig.dragLimitLeft=d.ganttBarConfig.dragLimitLeft,f.ganttBarConfig.dragLimitRight=d.ganttBarConfig.dragLimitRight})},l=(d,u=0,f)=>{const o=d.ganttBarConfig.bundle?[{bar:d,gapDistance:u}]:[];let n=d,a=c(n,f);if(f==="left")for(;a;){const g=document.getElementById(n.ganttBarConfig.id),x=document.getElementById(a.ganttBarConfig.id),C=x.offsetLeft+x.offsetWidth;if(u+=g.offsetLeft-C,a.ganttBarConfig.immobile)return{gapDistanceSoFar:u,bundleBarsAndGapDist:o};a.ganttBarConfig.bundle&&o.push({bar:a,gapDistance:u}),n=a,a=c(a,"left")}if(f==="right")for(;a;){const g=document.getElementById(n.ganttBarConfig.id),x=document.getElementById(a.ganttBarConfig.id),C=g.offsetLeft+g.offsetWidth;if(u+=x.offsetLeft-C,a.ganttBarConfig.immobile)return{gapDistanceSoFar:u,bundleBarsAndGapDist:o};a.ganttBarConfig.bundle&&o.push({bar:a,gapDistance:u}),n=a,a=c(a,"right")}return{gapDistanceSoFar:null,bundleBarsAndGapDist:o}},c=(d,u)=>{const f=document.getElementById(d.ganttBarConfig.id),o=s().find(a=>a.includes(d))||[];let n=[];return u==="left"?n=o.filter(a=>{const g=document.getElementById(a.ganttBarConfig.id);return g&&g.offsetLeft<f.offsetLeft&&a.ganttBarConfig.pushOnOverlap!==!1}):n=o.filter(a=>{const g=document.getElementById(a.ganttBarConfig.id);return g&&g.offsetLeft>f.offsetLeft&&a.ganttBarConfig.pushOnOverlap!==!1}),n.length>0?n.reduce((a,g)=>{const x=document.getElementById(a.ganttBarConfig.id),C=document.getElementById(g.ganttBarConfig.id),b=Math.abs(x.offsetLeft-f.offsetLeft),B=Math.abs(C.offsetLeft-f.offsetLeft);return b<B?a:g},n[0]):null};return{setDragLimitsOfGanttBar:m}}const de=["id"],fe={class:"g-gantt-bar-label"},ue=t.createElementVNode("div",{class:"g-gantt-bar-handle-left"},null,-1),ge=t.createElementVNode("div",{class:"g-gantt-bar-handle-right"},null,-1),me=t.defineComponent({__name:"GGanttBar",props:{bar:null},setup(e){const s=e,r=Et(),m=$(),{rowHeight:l}=m,{bar:c}=t.toRefs(s),{mapTimeToPosition:d,mapPositionToTime:u}=X(),{initDragOfBar:f,initDragOfBundle:o}=le(),{setDragLimitsOfGanttBar:n}=ce(),a=t.ref(!1),g=t.computed(()=>c.value.ganttBarConfig);function x(k){g.value.bundle!=null?o(c.value,k):f(c.value,k),a.value=!0}const C=()=>{n(c.value),!g.value.immobile&&(window.addEventListener("mousemove",x,{once:!0}),window.addEventListener("mouseup",()=>{window.removeEventListener("mousemove",x),a.value=!1},{once:!0}))},b=t.inject(ut),B=k=>{var S;k.preventDefault(),k.type==="mousedown"&&C();const O=(S=b==null?void 0:b.value)==null?void 0:S.getBoundingClientRect();if(!O)return;const D=u(k.clientX-O.left);r(k,c.value,D)},{barStart:v,barEnd:p,width:h,chartStart:_,chartEnd:i,chartSize:y}=m,w=t.ref(0),E=t.ref(0);return t.onMounted(()=>{t.watch([c,h,_,i,y.width],()=>{w.value=d(c.value[v.value]),E.value=d(c.value[p.value])},{deep:!0,immediate:!0})}),(k,O)=>(t.openBlock(),t.createElementBlock("div",{id:t.unref(g).id,class:"g-gantt-bar",style:t.normalizeStyle({...t.unref(g).style,position:"absolute",top:`${t.unref(l)*.1}px`,left:`${w.value}px`,width:`${E.value-w.value}px`,height:`${t.unref(l)*.8}px`,zIndex:a.value?3:2}),onMousedown:B,onClick:B,onDblclick:B,onMouseenter:B,onMouseleave:B,onContextmenu:B},[t.createElementVNode("div",fe,[t.renderSlot(k.$slots,"default",{bar:t.unref(c)},()=>[t.createElementVNode("div",null,t.toDisplayString(t.unref(g).label||""),1)])]),t.unref(g).hasHandles?(t.openBlock(),t.createElementBlock(t.Fragment,{key:0},[ue,ge],64)):t.createCommentVNode("",!0)],44,de))}}),Oe="",kt=t.defineComponent({__name:"GGanttRow",props:{bars:null,highlightOnHover:{type:Boolean}},emits:["drop"],setup(e,{emit:s}){const r=e,{rowHeight:m,colors:l}=$(),{highlightOnHover:c}=t.toRefs(r),d=t.ref(!1),u=t.computed(()=>({height:`${m.value}px`,background:(c==null?void 0:c.value)&&d.value?l.value.hoverHighlight:null})),{mapPositionToTime:f}=X(),o=t.ref(null);t.provide(ut,o);const n=a=>{var b;const g=(b=o.value)==null?void 0:b.getBoundingClientRect();if(!g){console.error("Vue-Ganttastic: failed to find bar container element for row.");return}const x=a.clientX-g.left,C=f(x);s("drop",{e:a,datetime:C})};return(a,g)=>(t.openBlock(),t.createElementBlock("div",{class:"g-gantt-row",style:t.normalizeStyle(t.unref(u)),onDragover:g[0]||(g[0]=t.withModifiers(x=>d.value=!0,["prevent"])),onDragleave:g[1]||(g[1]=x=>d.value=!1),onDrop:g[2]||(g[2]=x=>n(x)),onMouseover:g[3]||(g[3]=x=>d.value=!0),onMouseleave:g[4]||(g[4]=x=>d.value=!1)},[t.createCommentVNode("",!0),t.createElementVNode("div",t.mergeProps({ref_key:"barContainer",ref:o,class:"g-gantt-row-bars-container"},a.$attrs),[t.createVNode(t.TransitionGroup,{name:"bar-transition",tag:"div"},{default:t.withCtx(()=>[(t.openBlock(!0),t.createElementBlock(t.Fragment,null,t.renderList(e.bars,x=>(t.openBlock(),t.createBlock(me,{key:x.ganttBarConfig.id,bar:x},{default:t.withCtx(()=>[t.renderSlot(a.$slots,"bar-label",{bar:x})]),_:2},1032,["bar"]))),128))]),_:3})],16)],36))}}),De="";function Ct(){N.default.extend(St),N.default.extend(Tt),N.default.extend(Mt),N.default.extend(Lt)}const Ot={install(e,s){Ct(),e.component("GGanttChart",xt),e.component("GGanttRow",kt)}};T.GGanttChart=xt,T.GGanttRow=kt,T.default=Ot,T.extendDayjs=Ct,T.ganttastic=Ot,Object.defineProperties(T,{__esModule:{value:!0},[Symbol.toStringTag]:{value:"Module"}})});function injectStyle(T,I="top"){if(!T||typeof document>"u")return;const t=document.head,P=document.createElement("style");I==="top"&&t.firstChild?t.insertBefore(P,t.firstChild):t.appendChild(P),P.appendChild(document.createTextNode(T))}injectStyle(`
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
