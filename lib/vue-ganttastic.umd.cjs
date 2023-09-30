(function(T,I){typeof exports=="object"&&typeof module<"u"?I(exports,require("dayjs"),require("vue")):typeof define=="function"&&define.amd?define(["exports","dayjs","vue"],I):(T=typeof globalThis<"u"?globalThis:T||self,I(T.VueGanttastic={},T.dayjs,T.Vue))})(this,function(T,I,t){"use strict";const N=(e=>e&&typeof e=="object"&&"default"in e?e:{default:e})(I);var P=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},at={exports:{}};(function(e,i){(function(r,u){e.exports=u()})(P,function(){return function(r,u){u.prototype.isSameOrBefore=function(l,c){return this.isSame(l,c)||this.isBefore(l,c)}}})})(at);const Tt=at.exports;var it={exports:{}};(function(e,i){(function(r,u){e.exports=u()})(P,function(){return function(r,u){u.prototype.isSameOrAfter=function(l,c){return this.isSame(l,c)||this.isAfter(l,c)}}})})(it);const Mt=it.exports;var st={exports:{}};(function(e,i){(function(r,u){e.exports=u()})(P,function(){return function(r,u,l){u.prototype.isBetween=function(c,g,m,d){var o=l(c),n=l(g),a=(d=d||"()")[0]==="(",f=d[1]===")";return(a?this.isAfter(o,m):!this.isBefore(o,m))&&(f?this.isBefore(n,m):!this.isAfter(n,m))||(a?this.isBefore(o,m):!this.isAfter(o,m))&&(f?this.isAfter(n,m):!this.isBefore(n,m))}}})})(st);const Lt=st.exports;var lt={exports:{}};(function(e,i){(function(r,u){e.exports=u()})(P,function(){var r={LTS:"h:mm:ss A",LT:"h:mm A",L:"MM/DD/YYYY",LL:"MMMM D, YYYY",LLL:"MMMM D, YYYY h:mm A",LLLL:"dddd, MMMM D, YYYY h:mm A"},u=/(\[[^[]*\])|([-_:/.,()\s]+)|(A|a|YYYY|YY?|MM?M?M?|Do|DD?|hh?|HH?|mm?|ss?|S{1,3}|z|ZZ?)/g,l=/\d\d/,c=/\d\d?/,g=/\d*[^-_:/,()\s\d]+/,m={},d=function(b){return(b=+b)+(b>68?1900:2e3)},o=function(b){return function(B){this[b]=+B}},n=[/[+-]\d\d:?(\d\d)?|Z/,function(b){(this.zone||(this.zone={})).offset=function(B){if(!B||B==="Z")return 0;var _=B.match(/([+-]|\d\d)/g),y=60*_[1]+(+_[2]||0);return y===0?0:_[0]==="+"?-y:y}(b)}],a=function(b){var B=m[b];return B&&(B.indexOf?B:B.s.concat(B.f))},f=function(b,B){var _,y=m.meridiem;if(y){for(var p=1;p<=24;p+=1)if(b.indexOf(y(p,0,B))>-1){_=p>12;break}}else _=b===(B?"pm":"PM");return _},x={A:[g,function(b){this.afternoon=f(b,!1)}],a:[g,function(b){this.afternoon=f(b,!0)}],S:[/\d/,function(b){this.milliseconds=100*+b}],SS:[l,function(b){this.milliseconds=10*+b}],SSS:[/\d{3}/,function(b){this.milliseconds=+b}],s:[c,o("seconds")],ss:[c,o("seconds")],m:[c,o("minutes")],mm:[c,o("minutes")],H:[c,o("hours")],h:[c,o("hours")],HH:[c,o("hours")],hh:[c,o("hours")],D:[c,o("day")],DD:[l,o("day")],Do:[g,function(b){var B=m.ordinal,_=b.match(/\d+/);if(this.day=_[0],B)for(var y=1;y<=31;y+=1)B(y).replace(/\[|\]/g,"")===b&&(this.day=y)}],M:[c,o("month")],MM:[l,o("month")],MMM:[g,function(b){var B=a("months"),_=(a("monthsShort")||B.map(function(y){return y.slice(0,3)})).indexOf(b)+1;if(_<1)throw new Error;this.month=_%12||_}],MMMM:[g,function(b){var B=a("months").indexOf(b)+1;if(B<1)throw new Error;this.month=B%12||B}],Y:[/[+-]?\d+/,o("year")],YY:[l,function(b){this.year=d(b)}],YYYY:[/\d{4}/,o("year")],Z:n,ZZ:n};function C(b){var B,_;B=b,_=m&&m.formats;for(var y=(b=B.replace(/(\[[^\]]+])|(LTS?|l{1,4}|L{1,4})/g,function(v,D,O){var S=O&&O.toUpperCase();return D||_[O]||r[O]||_[S].replace(/(\[[^\]]+])|(MMMM|MM|DD|dddd)/g,function(M,L,$){return L||$.slice(1)})})).match(u),p=y.length,E=0;E<p;E+=1){var s=y[E],h=x[s],w=h&&h[0],k=h&&h[1];y[E]=k?{regex:w,parser:k}:s.replace(/^\[|\]$/g,"")}return function(v){for(var D={},O=0,S=0;O<p;O+=1){var M=y[O];if(typeof M=="string")S+=M.length;else{var L=M.regex,$=M.parser,Y=v.slice(S),j=L.exec(Y)[0];$.call(D,j),v=v.replace(j,"")}}return function(A){var R=A.afternoon;if(R!==void 0){var H=A.hours;R?H<12&&(A.hours+=12):H===12&&(A.hours=0),delete A.afternoon}}(D),D}}return function(b,B,_){_.p.customParseFormat=!0,b&&b.parseTwoDigitYear&&(d=b.parseTwoDigitYear);var y=B.prototype,p=y.parse;y.parse=function(E){var s=E.date,h=E.utc,w=E.args;this.$u=h;var k=w[1];if(typeof k=="string"){var v=w[2]===!0,D=w[3]===!0,O=v||D,S=w[2];D&&(S=w[2]),m=this.$locale(),!v&&S&&(m=_.Ls[S]),this.$d=function(Y,j,A){try{if(["x","X"].indexOf(j)>-1)return new Date((j==="X"?1e3:1)*Y);var R=C(j)(Y),H=R.year,q=R.month,pe=R.day,he=R.hours,ye=R.minutes,be=R.seconds,we=R.milliseconds,St=R.zone,Z=new Date,J=pe||(H||q?1:Z.getDate()),tt=H||Z.getFullYear(),W=0;H&&!q||(W=q>0?q-1:Z.getMonth());var et=he||0,nt=ye||0,rt=be||0,ot=we||0;return St?new Date(Date.UTC(tt,W,J,et,nt,rt,ot+60*St.offset*1e3)):A?new Date(Date.UTC(tt,W,J,et,nt,rt,ot)):new Date(tt,W,J,et,nt,rt,ot)}catch{return new Date("")}}(s,k,h),this.init(),S&&S!==!0&&(this.$L=this.locale(S).$L),O&&s!=this.format(k)&&(this.$d=new Date("")),m={}}else if(k instanceof Array)for(var M=k.length,L=1;L<=M;L+=1){w[1]=k[L-1];var $=_.apply(this,w);if($.isValid()){this.$d=$.$d,this.$L=$.$L,this.init();break}L===M&&(this.$d=new Date(""))}else p.call(this,E)}}})})(lt);const Gt=lt.exports,ct=Symbol("CHART_ROWS_KEY"),dt=Symbol("CONFIG_KEY"),ft=Symbol("EMIT_BAR_EVENT_KEY"),ut=Symbol("BAR_CONTAINER_KEY");function G(){const e=t.inject(dt);if(!e)throw Error("Failed to inject config!");return e}const gt="YYYY-MM-DD HH:mm";function V(e=G()){const{chartStart:i,chartEnd:r,barStart:u,barEnd:l,dateFormat:c}=e,g=t.computed(()=>d(i.value)),m=t.computed(()=>d(r.value)),d=(n,a)=>{let f;if(a!==void 0&&typeof n!="string"&&!(n instanceof Date)&&(f=a==="start"?n[u.value]:n[l.value]),typeof n=="string")f=n;else if(n instanceof Date)return N.default(n);const x=c.value||gt;return N.default(f,x,!0)};return{chartStartDayjs:g,chartEndDayjs:m,toDayjs:d,format:(n,a)=>a===!1?n instanceof Date?n:N.default(n).toDate():(typeof n=="string"||n instanceof Date?d(n):n).format(a)}}function U(){const{precision:e}=G(),{chartStartDayjs:i,chartEndDayjs:r}=V(),u=t.computed(()=>{switch(e==null?void 0:e.value){case"hour":return"day";case"day":return"month";case"week":return"month";case"month":return"year";default:throw new Error("Precision prop incorrect. Must be one of the following: 'hour', 'day', 'month'")}}),l={hour:"HH",date:"DD.MMM ",day:"DD",week:"DD",month:"MMMM YYYY",year:"YYYY"};return{timeaxisUnits:t.computed(()=>{const g=[],m=[],d=u.value==="day"?"date":u.value,o=e.value;let n=i.value.startOf(o);const a=r.value.diff(i.value,"minutes",!0);let f=0,x=n[d]();for(;n.isBefore(r.value)||n.isSame(r.value);){if(n[d]()!==x){let p=0;if(g.length===0)p=n.startOf(d).diff(i.value,"minutes",!0)/a*100;else if(n.isSameOrAfter(r.value))p=r.value.diff(n.subtract(1,d).startOf(d),"minutes",!0)/a*100;else{const s=n.startOf(d),h=n.subtract(1,d).startOf(d);p=s.diff(h,"minutes",!0)/a*100}const E=n.subtract(1,d);g.push({label:E.format(l[d]),value:String(x),date:E.toDate(),width:String(p)+"%"}),f=0,x=n[d]()}let B=0;m.length===0?B=n.endOf(o).diff(i.value,"minutes",!0)/a*100:n.add(1,o).isSameOrAfter(r.value)?B=r.value.diff(n.startOf(o),"minutes",!0)/a*100:B=n.endOf(o).diff(n.startOf(o),"minutes",!0)/a*100;let _;switch(o){case"week":_=n.startOf("week");break;default:_=n[o==="day"?"date":o]()}m.push({label:n.format(l[o]),value:String(_),date:n.toDate(),width:String(B)+"%"});const y=n;n=n.add(1,o),(n.isBefore(r.value)||n.isSame(r.value))&&(f+=n.diff(y,"minutes",!0))}const C=r.value.isSame(r.value.startOf(d))?r.value[d]()-1:r.value[d]();return g.some(B=>B.value===String(C))||(f+=r.value.diff(n.subtract(1,o),"minutes",!0),g.push({label:r.value.format(l[d]),value:String(x),date:r.value.toDate(),width:`${f/a*100}%`})),{upperUnits:g,lowerUnits:m}})}}const $t={class:"g-timeaxis"},Rt={class:"g-timeunits-container"},Yt={class:"g-timeunits-container"},It=t.defineComponent({__name:"GGanttTimeaxis",setup(e){const{precision:i,colors:r}=G(),{timeaxisUnits:u}=U();return(l,c)=>(t.openBlock(),t.createElementBlock("div",$t,[t.createElementVNode("div",Rt,[(t.openBlock(!0),t.createElementBlock(t.Fragment,null,t.renderList(t.unref(u).upperUnits,({label:g,value:m,date:d,width:o},n)=>(t.openBlock(),t.createElementBlock("div",{key:d.getTime(),class:"g-upper-timeunit",style:t.normalizeStyle({background:n%2===0?t.unref(r).primary:t.unref(r).secondary,color:t.unref(r).text,width:o})},[t.renderSlot(l.$slots,"upper-timeunit",{label:g,value:m,date:d},()=>[t.createTextVNode(t.toDisplayString(g),1)])],4))),128))]),t.createElementVNode("div",Yt,[(t.openBlock(!0),t.createElementBlock(t.Fragment,null,t.renderList(t.unref(u).lowerUnits,({label:g,value:m,date:d,width:o},n)=>(t.openBlock(),t.createElementBlock("div",{key:d.getTime(),class:"g-timeunit",style:t.normalizeStyle({background:n%2===0?t.unref(r).ternary:t.unref(r).quartenary,color:t.unref(r).text,flexDirection:t.unref(i)==="hour"?"column":"row",alignItems:t.unref(i)==="hour"?"":"center",width:o})},[t.renderSlot(l.$slots,"timeunit",{label:g,value:m,date:d},()=>[t.createTextVNode(t.toDisplayString(g),1)]),t.unref(i)==="hour"?(t.openBlock(),t.createElementBlock("div",{key:0,class:"g-timeaxis-hour-pin",style:t.normalizeStyle({background:t.unref(r).text})},null,4)):t.createCommentVNode("",!0)],4))),128))])]))}}),Be="",Nt={class:"g-grid-container"},At=t.defineComponent({__name:"GGanttGrid",props:{highlightedDates:null},setup(e){const i=e,r=t.computed(()=>{var c;return(c=i.highlightedDates)==null?void 0:c.map(g=>g.getTime())}),{colors:u}=G(),{timeaxisUnits:l}=U();return(c,g)=>(t.openBlock(),t.createElementBlock("div",Nt,[(t.openBlock(!0),t.createElementBlock(t.Fragment,null,t.renderList(t.unref(l).lowerUnits,({label:m,value:d,width:o,date:n})=>{var a;return t.openBlock(),t.createElementBlock("div",{key:n.getTime(),class:"g-grid-line",style:t.normalizeStyle({width:o,background:(a=t.unref(r))!=null&&a.includes(n.getTime())?t.unref(u).hoverHighlight:void 0})},null,4)}),128))]))}}),xe="",jt=t.defineComponent({__name:"GGanttBarTooltip",props:{bar:null,modelValue:{type:Boolean}},setup(e){const i=e,r={hour:"HH:mm",day:"DD. MMM HH:mm",week:"DD. MMM HH:mm",month:"DD. MMMM YYYY"},u="cadetblue",{bar:l}=t.toRefs(i),{precision:c,font:g,barStart:m,barEnd:d,rowHeight:o}=G(),n=t.ref("0px"),a=t.ref("0px");t.watch(()=>i.bar,async()=>{var h;await t.nextTick();const _=((h=l==null?void 0:l.value)==null?void 0:h.ganttBarConfig.id)||"";if(!_)return;const y=document.getElementById(_),{top:p,left:E}=(y==null?void 0:y.getBoundingClientRect())||{top:0,left:0},s=Math.max(E,10);n.value=`${p+o.value-10}px`,a.value=`${s}px`},{deep:!0,immediate:!0});const f=t.computed(()=>{var _,y;return((y=(_=l==null?void 0:l.value)==null?void 0:_.ganttBarConfig.style)==null?void 0:y.background)||u}),{toDayjs:x}=V(),C=t.computed(()=>{var _;return(_=l.value)==null?void 0:_[m.value]}),b=t.computed(()=>{var _;return(_=l.value)==null?void 0:_[d.value]}),B=t.computed(()=>{if(!(l!=null&&l.value))return"";const _=r[c.value],y=x(C.value).format(_),p=x(b.value).format(_);return`${y} \u2013 ${p}`});return(_,y)=>(t.openBlock(),t.createBlock(t.Teleport,{to:"body"},[t.createVNode(t.Transition,{name:"g-fade",mode:"out-in"},{default:t.withCtx(()=>[e.modelValue?(t.openBlock(),t.createElementBlock("div",{key:0,class:"g-gantt-tooltip",style:t.normalizeStyle({top:n.value,left:a.value,fontFamily:t.unref(g)})},[t.createElementVNode("div",{class:"g-gantt-tooltip-color-dot",style:t.normalizeStyle({background:t.unref(f)})},null,4),t.renderSlot(_.$slots,"default",{bar:t.unref(l),barStart:t.unref(C),barEnd:t.unref(b)},()=>[t.createTextVNode(t.toDisplayString(t.unref(B)),1)])],4)):t.createCommentVNode("",!0)]),_:3})]))}}),_e="",mt={default:{primary:"#eeeeee",secondary:"#E0E0E0",ternary:"#F5F5F5",quartenary:"#ededed",hoverHighlight:"rgba(204, 216, 219, 0.5)",text:"#404040",background:"white"},creamy:{primary:"#ffe8d9",secondary:"#fcdcc5",ternary:"#fff6f0",quartenary:"#f7ece6",hoverHighlight:"rgba(230, 221, 202, 0.5)",text:"#542d05",background:"white"},crimson:{primary:"#a82039",secondary:"#c41238",ternary:"#db4f56",quartenary:"#ce5f64",hoverHighlight:"rgba(196, 141, 141, 0.5)",text:"white",background:"white"},dark:{primary:"#404040",secondary:"#303030",ternary:"#353535",quartenary:"#383838",hoverHighlight:"rgba(159, 160, 161, 0.5)",text:"white",background:"#525252",toast:"#1f1f1f"},flare:{primary:"#e08a38",secondary:"#e67912",ternary:"#5e5145",quartenary:"#665648",hoverHighlight:"rgba(196, 141, 141, 0.5)",text:"white",background:"white"},fuchsia:{primary:"#de1d5a",secondary:"#b50b41",ternary:"#ff7da6",quartenary:"#f2799f",hoverHighlight:"rgba(196, 141, 141, 0.5)",text:"white",background:"white"},grove:{primary:"#3d9960",secondary:"#288542",ternary:"#72b585",quartenary:"#65a577",hoverHighlight:"rgba(160, 219, 171, 0.5)",text:"white",background:"white"},"material-blue":{primary:"#0D47A1",secondary:"#1565C0",ternary:"#42a5f5",quartenary:"#409fed",hoverHighlight:"rgba(110, 165, 196, 0.5)",text:"white",background:"white"},sky:{primary:"#b5e3ff",secondary:"#a1d6f7",ternary:"#d6f7ff",quartenary:"#d0edf4",hoverHighlight:"rgba(193, 202, 214, 0.5)",text:"#022c47",background:"white"},slumber:{primary:"#2a2f42",secondary:"#2f3447",ternary:"#35394d",quartenary:"#2c3044",hoverHighlight:"rgba(179, 162, 127, 0.5)",text:"#ffe0b3",background:"#38383b",toast:"#1f1f1f"},vue:{primary:"#258a5d",secondary:"#41B883",ternary:"#35495E",quartenary:"#2a3d51",hoverHighlight:"rgba(160, 219, 171, 0.5)",text:"white",background:"white"}};var pt;const F=typeof window<"u";F&&((pt=window==null?void 0:window.navigator)==null?void 0:pt.userAgent)&&/iP(ad|hone|od)/.test(window.navigator.userAgent);function Ht(e){return typeof e=="function"?e():t.unref(e)}function Vt(e){return e}function Ft(e){return t.getCurrentScope()?(t.onScopeDispose(e),!0):!1}function zt(e,i=!0){t.getCurrentInstance()?t.onMounted(e):i?e():t.nextTick(e)}function ht(e){var i;const r=Ht(e);return(i=r==null?void 0:r.$el)!=null?i:r}const Pt=F?window:void 0;F&&window.document,F&&window.navigator,F&&window.location;function Ut(e,i=!1){const r=t.ref(),u=()=>r.value=Boolean(e());return u(),zt(u,i),r}const K=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},Q="__vueuse_ssr_handlers__";K[Q]=K[Q]||{},K[Q];var yt=Object.getOwnPropertySymbols,qt=Object.prototype.hasOwnProperty,Wt=Object.prototype.propertyIsEnumerable,Kt=(e,i)=>{var r={};for(var u in e)qt.call(e,u)&&i.indexOf(u)<0&&(r[u]=e[u]);if(e!=null&&yt)for(var u of yt(e))i.indexOf(u)<0&&Wt.call(e,u)&&(r[u]=e[u]);return r};function Qt(e,i,r={}){const u=r,{window:l=Pt}=u,c=Kt(u,["window"]);let g;const m=Ut(()=>l&&"ResizeObserver"in l),d=()=>{g&&(g.disconnect(),g=void 0)},o=t.watch(()=>ht(e),a=>{d(),m.value&&l&&a&&(g=new ResizeObserver(i),g.observe(a,c))},{immediate:!0,flush:"post"}),n=()=>{d(),o()};return Ft(n),{isSupported:m,stop:n}}function Xt(e,i={width:0,height:0},r={}){const u=t.ref(i.width),l=t.ref(i.height);return Qt(e,([c])=>{u.value=c.contentRect.width,l.value=c.contentRect.height},r),t.watch(()=>ht(e),c=>{u.value=c?i.width:0,l.value=c?i.height:0}),{width:u,height:l}}var bt;(function(e){e.UP="UP",e.RIGHT="RIGHT",e.DOWN="DOWN",e.LEFT="LEFT",e.NONE="NONE"})(bt||(bt={}));var Zt=Object.defineProperty,wt=Object.getOwnPropertySymbols,Jt=Object.prototype.hasOwnProperty,te=Object.prototype.propertyIsEnumerable,Bt=(e,i,r)=>i in e?Zt(e,i,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[i]=r,ee=(e,i)=>{for(var r in i||(i={}))Jt.call(i,r)&&Bt(e,r,i[r]);if(wt)for(var r of wt(i))te.call(i,r)&&Bt(e,r,i[r]);return e};ee({linear:Vt},{easeInSine:[.12,0,.39,0],easeOutSine:[.61,1,.88,1],easeInOutSine:[.37,0,.63,1],easeInQuad:[.11,0,.5,0],easeOutQuad:[.5,1,.89,1],easeInOutQuad:[.45,0,.55,1],easeInCubic:[.32,0,.67,0],easeOutCubic:[.33,1,.68,1],easeInOutCubic:[.65,0,.35,1],easeInQuart:[.5,0,.75,0],easeOutQuart:[.25,1,.5,1],easeInOutQuart:[.76,0,.24,1],easeInQuint:[.64,0,.78,0],easeOutQuint:[.22,1,.36,1],easeInOutQuint:[.83,0,.17,1],easeInExpo:[.7,0,.84,0],easeOutExpo:[.16,1,.3,1],easeInOutExpo:[.87,0,.13,1],easeInCirc:[.55,0,1,.45],easeOutCirc:[0,.55,.45,1],easeInOutCirc:[.85,0,.15,1],easeInBack:[.36,0,.66,-.56],easeOutBack:[.34,1.56,.64,1],easeInOutBack:[.68,-.6,.32,1.6]});const ne={key:0,class:"g-footer"},re={class:"g-footer-container"},oe=t.defineComponent({__name:"GGanttFooter",props:{labels:null},setup(e){const{precision:i,colors:r}=G(),{timeaxisUnits:u}=U();return(l,c)=>e.labels?(t.openBlock(),t.createElementBlock("div",ne,[t.createElementVNode("div",re,[(t.openBlock(!0),t.createElementBlock(t.Fragment,null,t.renderList(t.unref(u).lowerUnits,({label:g,value:m,date:d,width:o},n)=>(t.openBlock(),t.createElementBlock("div",{key:g,class:"g-timeunit",style:t.normalizeStyle({background:n%2===0?t.unref(r).ternary:t.unref(r).quartenary,color:t.unref(r).text,flexDirection:t.unref(i)==="hour"?"column":"row",alignItems:t.unref(i)==="hour"?"":"center",width:o})},[t.renderSlot(l.$slots,"timeunit",{label:g,value:m,date:d},()=>[t.createTextVNode(t.toDisplayString(e.labels[n]),1)],!0)],4))),128))])])):t.createCommentVNode("",!0)}}),ke="",ae=((e,i)=>{const r=e.__vccOpts||e;for(const[u,l]of i)r[u]=l;return r})(oe,[["__scopeId","data-v-400629df"]]),ie={class:"g-gantt-rows-container"},xt=t.defineComponent({__name:"GGanttChart",props:{chartStart:null,chartEnd:null,precision:{default:"day"},barStart:null,barEnd:null,dateFormat:{type:[String,Boolean],default:gt},width:{default:"100%"},hideTimeaxis:{type:Boolean,default:!1},colorScheme:{default:"default"},grid:{type:Boolean,default:!1},pushOnOverlap:{type:Boolean,default:!1},noOverlap:{type:Boolean,default:!1},rowHeight:{default:40},highlightedDates:{default:()=>[]},font:{default:"inherit"},footerLabels:null,sticky:{type:Boolean}},emits:["click-bar","mousedown-bar","mouseup-bar","dblclick-bar","mouseenter-bar","mouseleave-bar","dragstart-bar","drag-bar","dragend-bar","contextmenu-bar"],setup(e,{emit:i}){const r=e,{width:u,font:l,colorScheme:c}=t.toRefs(r),g=t.useSlots(),m=t.computed(()=>typeof c.value!="string"?c.value:mt[c.value]||mt.default),d=()=>{var E;const y=(E=g.default)==null?void 0:E.call(g),p=[];return y&&y.forEach(s=>{var h;if((h=s.props)!=null&&h.bars){const w=s.props.bars;p.push(w)}else Array.isArray(s.children)&&s.children.forEach(w=>{var v;const k=w;if((v=k==null?void 0:k.props)!=null&&v.bars){const D=k.props.bars;p.push(D)}})}),p},o=t.ref(!1),n=t.ref(!1),a=t.ref(void 0);let f;const x=y=>{f&&clearTimeout(f),f=setTimeout(()=>{o.value=!0},800),a.value=y},C=()=>{clearTimeout(f),o.value=!1},b=(y,p,E,s)=>{switch(y.type){case"click":i("click-bar",{bar:p,e:y,datetime:E});break;case"mousedown":i("mousedown-bar",{bar:p,e:y,datetime:E});break;case"mouseup":i("mouseup-bar",{bar:p,e:y,datetime:E});break;case"dblclick":i("dblclick-bar",{bar:p,e:y,datetime:E});break;case"mouseenter":x(p),i("mouseenter-bar",{bar:p,e:y});break;case"mouseleave":C(),i("mouseleave-bar",{bar:p,e:y});break;case"dragstart":n.value=!0,i("dragstart-bar",{bar:p,e:y});break;case"drag":i("drag-bar",{bar:p,e:y});break;case"dragend":n.value=!1,i("dragend-bar",{bar:p,e:y});break;case"contextmenu":i("contextmenu-bar",{bar:p,e:y,datetime:E});break}},B=t.ref(null),_=Xt(B);return t.provide(ct,d),t.provide(dt,{...t.toRefs(r),colors:m,chartSize:_}),t.provide(ft,b),(y,p)=>(t.openBlock(),t.createElementBlock(t.Fragment,null,[t.createElementVNode("div",{style:t.normalizeStyle([{display:"flex","flex-flow":"column"},e.sticky?"position: sticky; left:0;z-index:100; background: white;":""])},[t.renderSlot(y.$slots,"side-menu")],4),t.createElementVNode("div",{ref_key:"ganttChart",ref:B,class:"g-gantt-chart",style:t.normalizeStyle({width:t.unref(u),background:t.unref(m).background,fontFamily:t.unref(l)})},[e.hideTimeaxis?t.createCommentVNode("",!0):(t.openBlock(),t.createBlock(It,{key:0},{"upper-timeunit":t.withCtx(({label:E,value:s,date:h})=>[t.renderSlot(y.$slots,"upper-timeunit",{label:E,value:s,date:h})]),timeunit:t.withCtx(({label:E,value:s,date:h})=>[t.renderSlot(y.$slots,"timeunit",{label:E,value:s,date:h})]),_:3})),e.grid?(t.openBlock(),t.createBlock(At,{key:1,"highlighted-dates":e.highlightedDates},null,8,["highlighted-dates"])):t.createCommentVNode("",!0),t.createElementVNode("div",ie,[t.renderSlot(y.$slots,"default")]),e.hideTimeaxis?t.createCommentVNode("",!0):(t.openBlock(),t.createBlock(ae,{key:2,labels:e.footerLabels},null,8,["labels"])),t.createVNode(jt,{"model-value":o.value||n.value,bar:a.value},{default:t.withCtx(()=>[t.renderSlot(y.$slots,"bar-tooltip",{bar:a.value})]),_:3},8,["model-value","bar"])],4),t.createElementVNode("div",null,[t.renderSlot(y.$slots,"footer")])],64))}}),Ce="";function X(e=G()){const{dateFormat:i,chartSize:r}=e,{chartStartDayjs:u,chartEndDayjs:l,toDayjs:c,format:g}=V(e),m=t.computed(()=>l.value.diff(u.value,"minutes"));return{mapTimeToPosition:n=>{const a=r.width.value||0,f=c(n).diff(u.value,"minutes",!0);return Math.ceil(f/m.value*a)},mapPositionToTime:n=>{const a=r.width.value||0,f=n/a*m.value,x=g(u.value.add(f,"minutes"),i.value);if(typeof x=="string")return x;throw Error}}}function _t(e,i=()=>null,r=()=>null,u=G()){const{barStart:l,barEnd:c,pushOnOverlap:g}=u,m=t.ref(!1);let d=0,o;const{mapPositionToTime:n}=X(u),{toDayjs:a}=V(u),f=p=>{const E=document.getElementById(e.ganttBarConfig.id);if(!E)return;switch(d=p.clientX-(E.getBoundingClientRect().left||0),p.target.className){case"g-gantt-bar-handle-left":document.body.style.cursor="ew-resize",o=b;break;case"g-gantt-bar-handle-right":document.body.style.cursor="ew-resize",o=B;break;default:o=C}m.value=!0,window.addEventListener("mousemove",o),window.addEventListener("mouseup",y)},x=()=>{var s;const p=document.getElementById(e.ganttBarConfig.id),E=(s=p==null?void 0:p.closest(".g-gantt-row-bars-container"))==null?void 0:s.getBoundingClientRect();return{barElement:p,barContainer:E}},C=p=>{const{barElement:E,barContainer:s}=x();if(!E||!s)return;const h=E.getBoundingClientRect().width,w=p.clientX-s.left-d,k=w+h;if(!_(w,k)){if(e[l.value].substring(0,10)!=n(w).substring(0,10)){const v=a(e[l.value]),O=a(e[c.value]).diff(v,"minute"),S=n(w).substring(0,10)+" 00:00";e[l.value]=S,e[c.value]=a(S).add(O,"minute").format("DD.MM.YYYY HH:mm")}i(p,e)}},b=p=>{const{barElement:E,barContainer:s}=x();if(!E||!s)return;const h=p.clientX-s.left,w=n(h);if(!a(w).isSameOrAfter(a(e,"end"))){if(e[l.value].substring(0,10)!=n(h).substring(0,10)){const k=n(h).substring(0,10)+" 00:00";e[l.value]=k}i(p,e)}},B=p=>{const{barElement:E,barContainer:s}=x();if(!E||!s)return;const h=p.clientX-s.left,w=n(h);if(!a(w).isSameOrBefore(a(e,"start"))){if(e[l.value].substring(0,10)!=n(h).substring(0,10)){const k=n(h).substring(0,10)+" 23:59";e[c.value]=k}i(p,e)}},_=(p,E)=>{if(!g.value)return!1;const s=e.ganttBarConfig.dragLimitLeft,h=e.ganttBarConfig.dragLimitRight;return p&&s!=null&&p<s||E&&h!=null&&E>h},y=p=>{m.value=!1,document.body.style.cursor="",window.removeEventListener("mousemove",o),window.removeEventListener("mouseup",y),r(p,e)};return{isDragging:m,initDrag:f}}function Et(){const e=t.inject(ct);if(!e)throw Error("Failed to inject getChartRows!");return e}function kt(){const e=t.inject(ft);if(!e)throw Error("Failed to inject emitBarEvent!");return e}function se(){const e=G(),i=Et(),r=kt(),{pushOnOverlap:u,barStart:l,barEnd:c,noOverlap:g,dateFormat:m}=e,d=new Map,{toDayjs:o,format:n}=V(),a=(s,h)=>{const{initDrag:w}=_t(s,x,y,e);r({...h,type:"dragstart"},s),w(h),p(s)},f=(s,h)=>{const w=s.ganttBarConfig.bundle;w!=null&&(i().forEach(k=>{k.forEach(v=>{if(v.ganttBarConfig.bundle===w){const D=v===s?y:()=>null,{initDrag:O}=_t(v,x,D,e);O(h),p(v)}})}),r({...h,type:"dragstart"},s))},x=(s,h)=>{r({...s,type:"drag"},h),C(h)},C=s=>{if(!(u!=null&&u.value))return;let h=s,{overlapBar:w,overlapType:k}=b(h);for(;w;){p(w);const v=o(h[l.value]),D=o(h[c.value]),O=o(w[l.value]),S=o(w[c.value]);let M;switch(k){case"left":M=S.diff(v,"minutes",!0),w[c.value]=n(h[l.value],m.value),w[l.value]=n(O.subtract(M,"minutes"),m.value);break;case"right":M=D.diff(O,"minutes",!0),w[l.value]=n(D,m.value),w[c.value]=n(S.add(M,"minutes"),m.value);break;default:console.warn("Vue-Ganttastic: One bar is inside of the other one! This should never occur while push-on-overlap is active!");return}w&&(k==="left"||k==="right")&&B(w,M,k),h=w,{overlapBar:w,overlapType:k}=b(w)}},b=s=>{let h,w,k;const v=i().find(L=>L.includes(s))||[],D=o(s[l.value]),O=o(s[c.value]);return{overlapBar:v.find(L=>{if(L===s)return!1;const $=o(L[l.value]),Y=o(L[c.value]);return h=D.isBetween($,Y),w=O.isBetween($,Y),k=$.isBetween(D,O)||Y.isBetween(D,O),h||w||k}),overlapType:h?"left":w?"right":k?"between":null}},B=(s,h,w)=>{p(s),s.ganttBarConfig.bundle&&i().forEach(k=>{k.forEach(v=>{v.ganttBarConfig.bundle===s.ganttBarConfig.bundle&&v!==s&&(p(v),_(v,h,w))})})},_=(s,h,w)=>{switch(w){case"left":s[l.value]=n(o(s,"start").subtract(h,"minutes"),m.value),s[c.value]=n(o(s,"end").subtract(h,"minutes"),m.value);break;case"right":s[l.value]=n(o(s,"start").add(h,"minutes"),m.value),s[c.value]=n(o(s,"end").add(h,"minutes"),m.value)}C(s)},y=(s,h)=>{E();const w={...s,type:"dragend"};r(w,h,void 0,new Map(d)),d.clear()},p=s=>{if(!d.has(s)){const h=s[l.value],w=s[c.value];d.set(s,{oldStart:h,oldEnd:w})}},E=()=>{if(u.value||!g.value)return;let s=!1;d.forEach((h,w)=>{const{overlapBar:k}=b(w);k!=null&&(s=!0)}),s&&d.forEach(({oldStart:h,oldEnd:w},k)=>{k[l.value]=h,k[c.value]=w})};return{initDragOfBar:a,initDragOfBundle:f}}function le(){const{pushOnOverlap:e}=G(),i=Et(),r=g=>{const m=[];return g!=null&&i().forEach(d=>{d.forEach(o=>{o.ganttBarConfig.bundle===g&&m.push(o)})}),m},u=g=>{if(!e.value||g.ganttBarConfig.pushOnOverlap===!1)return;for(const d of["left","right"]){const o=d,{gapDistanceSoFar:n,bundleBarsAndGapDist:a}=l(g,0,o);let f=n;const x=a;if(!x)continue;for(let b=0;b<x.length;b++){const B=x[b].bar,_=x[b].gapDistance;r(B.ganttBarConfig.bundle).filter(p=>p!==B).forEach(p=>{const E=l(p,_,o),s=E.gapDistanceSoFar,h=E.bundleBarsAndGapDist;s!=null&&(!f||s<f)&&(f=s),h.forEach(w=>{x.find(k=>k.bar===w.bar)||x.push(w)})})}const C=document.getElementById(g.ganttBarConfig.id);f!=null&&o==="left"?g.ganttBarConfig.dragLimitLeft=C.offsetLeft-f:f!=null&&o==="right"&&(g.ganttBarConfig.dragLimitRight=C.offsetLeft+C.offsetWidth+f)}r(g.ganttBarConfig.bundle).forEach(d=>{d.ganttBarConfig.dragLimitLeft=g.ganttBarConfig.dragLimitLeft,d.ganttBarConfig.dragLimitRight=g.ganttBarConfig.dragLimitRight})},l=(g,m=0,d)=>{const o=g.ganttBarConfig.bundle?[{bar:g,gapDistance:m}]:[];let n=g,a=c(n,d);if(d==="left")for(;a;){const f=document.getElementById(n.ganttBarConfig.id),x=document.getElementById(a.ganttBarConfig.id),C=x.offsetLeft+x.offsetWidth;if(m+=f.offsetLeft-C,a.ganttBarConfig.immobile)return{gapDistanceSoFar:m,bundleBarsAndGapDist:o};a.ganttBarConfig.bundle&&o.push({bar:a,gapDistance:m}),n=a,a=c(a,"left")}if(d==="right")for(;a;){const f=document.getElementById(n.ganttBarConfig.id),x=document.getElementById(a.ganttBarConfig.id),C=f.offsetLeft+f.offsetWidth;if(m+=x.offsetLeft-C,a.ganttBarConfig.immobile)return{gapDistanceSoFar:m,bundleBarsAndGapDist:o};a.ganttBarConfig.bundle&&o.push({bar:a,gapDistance:m}),n=a,a=c(a,"right")}return{gapDistanceSoFar:null,bundleBarsAndGapDist:o}},c=(g,m)=>{const d=document.getElementById(g.ganttBarConfig.id),o=i().find(a=>a.includes(g))||[];let n=[];return m==="left"?n=o.filter(a=>{const f=document.getElementById(a.ganttBarConfig.id);return f&&f.offsetLeft<d.offsetLeft&&a.ganttBarConfig.pushOnOverlap!==!1}):n=o.filter(a=>{const f=document.getElementById(a.ganttBarConfig.id);return f&&f.offsetLeft>d.offsetLeft&&a.ganttBarConfig.pushOnOverlap!==!1}),n.length>0?n.reduce((a,f)=>{const x=document.getElementById(a.ganttBarConfig.id),C=document.getElementById(f.ganttBarConfig.id),b=Math.abs(x.offsetLeft-d.offsetLeft),B=Math.abs(C.offsetLeft-d.offsetLeft);return b<B?a:f},n[0]):null};return{setDragLimitsOfGanttBar:u}}const ce=["id"],de={class:"g-gantt-bar-label"},fe={style:{"z-index":"100"}},ue=t.createElementVNode("div",{class:"g-gantt-bar-handle-left"},null,-1),ge=t.createElementVNode("div",{class:"g-gantt-bar-handle-right"},null,-1),me=t.defineComponent({__name:"GGanttBar",props:{bar:null},setup(e){const i=e,r=kt(),u=G(),{rowHeight:l}=u,{bar:c}=t.toRefs(i),{mapTimeToPosition:g,mapPositionToTime:m}=X(),{initDragOfBar:d,initDragOfBundle:o}=se(),{setDragLimitsOfGanttBar:n}=le(),a=t.ref(!1),f=t.computed(()=>c.value.ganttBarConfig);function x(v){f.value.bundle!=null?o(c.value,v):d(c.value,v),a.value=!0}const C=()=>{n(c.value),!f.value.immobile&&(window.addEventListener("mousemove",x,{once:!0}),window.addEventListener("mouseup",()=>{window.removeEventListener("mousemove",x),a.value=!1},{once:!0}))},b=t.inject(ut),B=v=>{var S;v.preventDefault(),v.type==="mousedown"&&C();const D=(S=b==null?void 0:b.value)==null?void 0:S.getBoundingClientRect();if(!D)return;const O=m(v.clientX-D.left);r(v,c.value,O)},{barStart:_,barEnd:y,width:p,chartStart:E,chartEnd:s,chartSize:h}=u,w=t.ref(0),k=t.ref(0);return t.onMounted(()=>{t.watch([c,p,E,s,h.width],()=>{w.value=g(c.value[_.value]),k.value=g(c.value[y.value])},{deep:!0,immediate:!0})}),(v,D)=>(t.openBlock(),t.createElementBlock("div",{id:t.unref(f).id,class:"g-gantt-bar",style:t.normalizeStyle({...t.unref(f).style,position:"absolute",top:`${t.unref(l)*.1}px`,left:`${w.value}px`,width:`${k.value-w.value}px`,height:`${t.unref(l)*.8}px`,zIndex:a.value?3:2}),onMousedown:B,onClick:B,onDblclick:B,onMouseenter:B,onMouseleave:B,onContextmenu:B},[t.createElementVNode("div",de,[t.renderSlot(v.$slots,"default",{bar:t.unref(c)},()=>[t.createElementVNode("div",fe,t.toDisplayString(t.unref(f).label||""),1),t.unref(f).progress?(t.openBlock(),t.createElementBlock("div",{key:0,style:t.normalizeStyle([{position:"absolute",height:"100%",left:"0"},{width:t.unref(f).progress+"%",backgroundColor:t.unref(f).progressColor}])},null,4)):t.createCommentVNode("",!0)])]),t.unref(f).hasHandles?(t.openBlock(),t.createElementBlock(t.Fragment,{key:0},[ue,ge],64)):t.createCommentVNode("",!0)],44,ce))}}),De="",vt=t.defineComponent({__name:"GGanttRow",props:{bars:null,highlightOnHover:{type:Boolean}},emits:["drop"],setup(e,{emit:i}){const r=e,{rowHeight:u,colors:l}=G(),{highlightOnHover:c}=t.toRefs(r),g=t.ref(!1),m=t.computed(()=>({height:`${u.value}px`,background:(c==null?void 0:c.value)&&g.value?l.value.hoverHighlight:null})),{mapPositionToTime:d}=X(),o=t.ref(null);t.provide(ut,o);const n=a=>{var b;const f=(b=o.value)==null?void 0:b.getBoundingClientRect();if(!f){console.error("Vue-Ganttastic: failed to find bar container element for row.");return}const x=a.clientX-f.left,C=d(x);i("drop",{e:a,datetime:C})};return(a,f)=>(t.openBlock(),t.createElementBlock("div",{class:"g-gantt-row",style:t.normalizeStyle(t.unref(m)),onDragover:f[0]||(f[0]=t.withModifiers(x=>g.value=!0,["prevent"])),onDragleave:f[1]||(f[1]=x=>g.value=!1),onDrop:f[2]||(f[2]=x=>n(x)),onMouseover:f[3]||(f[3]=x=>g.value=!0),onMouseleave:f[4]||(f[4]=x=>g.value=!1)},[t.createCommentVNode("",!0),t.createElementVNode("div",t.mergeProps({ref_key:"barContainer",ref:o,class:"g-gantt-row-bars-container"},a.$attrs),[t.createVNode(t.TransitionGroup,{name:"bar-transition",tag:"div"},{default:t.withCtx(()=>[(t.openBlock(!0),t.createElementBlock(t.Fragment,null,t.renderList(e.bars,x=>(t.openBlock(),t.createBlock(me,{key:x.ganttBarConfig.id,bar:x},{default:t.withCtx(()=>[t.renderSlot(a.$slots,"bar-label",{bar:x})]),_:2},1032,["bar"]))),128))]),_:3})],16)],36))}}),Oe="",Ct=t.defineComponent({__name:"GGanttLabelRow",props:{labels:null,styles:null},setup(e){const{rowHeight:i,colors:r}=G(),{timeaxisUnits:u}=U();return(l,c)=>(t.openBlock(),t.createElementBlock("div",{class:"g-gantt-row",style:t.normalizeStyle({height:t.unref(i)+"px"})},[t.createElementVNode("div",t.mergeProps({ref:"barContainer",class:"g-gantt-row-bars-container"},l.$attrs),[(t.openBlock(!0),t.createElementBlock(t.Fragment,null,t.renderList(t.unref(u).lowerUnits,({label:g,width:m},d)=>(t.openBlock(),t.createElementBlock("div",{key:g,class:"g-timeunit",style:t.normalizeStyle({color:t.unref(r).text,textAlign:"center",width:m})},[t.createElementVNode("span",{style:t.normalizeStyle(e.styles!=null?e.styles[d]:void 0)},t.toDisplayString(e.labels[d]),5)],4))),128))],16)],4))}}),Se="";function Dt(){N.default.extend(Tt),N.default.extend(Mt),N.default.extend(Lt),N.default.extend(Gt)}const Ot={install(e,i){Dt(),e.component("GGanttChart",xt),e.component("GGanttRow",vt),e.component("GGanttLabelRow",Ct)}};T.GGanttChart=xt,T.GGanttLabelRow=Ct,T.GGanttRow=vt,T.default=Ot,T.extendDayjs=Dt,T.ganttastic=Ot,Object.defineProperties(T,{__esModule:{value:!0},[Symbol.toStringTag]:{value:"Module"}})});function injectStyle(T,I="top"){if(!T||typeof document>"u")return;const t=document.head,z=document.createElement("style");I==="top"&&t.firstChild?t.insertBefore(z,t.firstChild):t.appendChild(z),z.appendChild(document.createTextNode(T))}injectStyle(`
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
