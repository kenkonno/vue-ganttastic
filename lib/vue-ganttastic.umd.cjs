(function(T,I){typeof exports=="object"&&typeof module<"u"?I(exports,require("dayjs"),require("vue")):typeof define=="function"&&define.amd?define(["exports","dayjs","vue"],I):(T=typeof globalThis<"u"?globalThis:T||self,I(T.VueGanttastic={},T.dayjs,T.Vue))})(this,function(T,I,t){"use strict";const N=(e=>e&&typeof e=="object"&&"default"in e?e:{default:e})(I);var P=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},at={exports:{}};(function(e,i){(function(r,g){e.exports=g()})(P,function(){return function(r,g){g.prototype.isSameOrBefore=function(l,f){return this.isSame(l,f)||this.isBefore(l,f)}}})})(at);const Tt=at.exports;var it={exports:{}};(function(e,i){(function(r,g){e.exports=g()})(P,function(){return function(r,g){g.prototype.isSameOrAfter=function(l,f){return this.isSame(l,f)||this.isAfter(l,f)}}})})(it);const Lt=it.exports;var st={exports:{}};(function(e,i){(function(r,g){e.exports=g()})(P,function(){return function(r,g,l){g.prototype.isBetween=function(f,c,m,u){var o=l(f),n=l(c),a=(u=u||"()")[0]==="(",d=u[1]===")";return(a?this.isAfter(o,m):!this.isBefore(o,m))&&(d?this.isBefore(n,m):!this.isAfter(n,m))||(a?this.isBefore(o,m):!this.isAfter(o,m))&&(d?this.isAfter(n,m):!this.isBefore(n,m))}}})})(st);const Mt=st.exports;var lt={exports:{}};(function(e,i){(function(r,g){e.exports=g()})(P,function(){var r={LTS:"h:mm:ss A",LT:"h:mm A",L:"MM/DD/YYYY",LL:"MMMM D, YYYY",LLL:"MMMM D, YYYY h:mm A",LLLL:"dddd, MMMM D, YYYY h:mm A"},g=/(\[[^[]*\])|([-_:/.,()\s]+)|(A|a|YYYY|YY?|MM?M?M?|Do|DD?|hh?|HH?|mm?|ss?|S{1,3}|z|ZZ?)/g,l=/\d\d/,f=/\d\d?/,c=/\d*[^-_:/,()\s\d]+/,m={},u=function(b){return(b=+b)+(b>68?1900:2e3)},o=function(b){return function(B){this[b]=+B}},n=[/[+-]\d\d:?(\d\d)?|Z/,function(b){(this.zone||(this.zone={})).offset=function(B){if(!B||B==="Z")return 0;var _=B.match(/([+-]|\d\d)/g),p=60*_[1]+(+_[2]||0);return p===0?0:_[0]==="+"?-p:p}(b)}],a=function(b){var B=m[b];return B&&(B.indexOf?B:B.s.concat(B.f))},d=function(b,B){var _,p=m.meridiem;if(p){for(var h=1;h<=24;h+=1)if(b.indexOf(p(h,0,B))>-1){_=h>12;break}}else _=b===(B?"pm":"PM");return _},x={A:[c,function(b){this.afternoon=d(b,!1)}],a:[c,function(b){this.afternoon=d(b,!0)}],S:[/\d/,function(b){this.milliseconds=100*+b}],SS:[l,function(b){this.milliseconds=10*+b}],SSS:[/\d{3}/,function(b){this.milliseconds=+b}],s:[f,o("seconds")],ss:[f,o("seconds")],m:[f,o("minutes")],mm:[f,o("minutes")],H:[f,o("hours")],h:[f,o("hours")],HH:[f,o("hours")],hh:[f,o("hours")],D:[f,o("day")],DD:[l,o("day")],Do:[c,function(b){var B=m.ordinal,_=b.match(/\d+/);if(this.day=_[0],B)for(var p=1;p<=31;p+=1)B(p).replace(/\[|\]/g,"")===b&&(this.day=p)}],M:[f,o("month")],MM:[l,o("month")],MMM:[c,function(b){var B=a("months"),_=(a("monthsShort")||B.map(function(p){return p.slice(0,3)})).indexOf(b)+1;if(_<1)throw new Error;this.month=_%12||_}],MMMM:[c,function(b){var B=a("months").indexOf(b)+1;if(B<1)throw new Error;this.month=B%12||B}],Y:[/[+-]?\d+/,o("year")],YY:[l,function(b){this.year=u(b)}],YYYY:[/\d{4}/,o("year")],Z:n,ZZ:n};function C(b){var B,_;B=b,_=m&&m.formats;for(var p=(b=B.replace(/(\[[^\]]+])|(LTS?|l{1,4}|L{1,4})/g,function(v,D,O){var S=O&&O.toUpperCase();return D||_[O]||r[O]||_[S].replace(/(\[[^\]]+])|(MMMM|MM|DD|dddd)/g,function(L,M,$){return M||$.slice(1)})})).match(g),h=p.length,E=0;E<h;E+=1){var s=p[E],y=x[s],w=y&&y[0],k=y&&y[1];p[E]=k?{regex:w,parser:k}:s.replace(/^\[|\]$/g,"")}return function(v){for(var D={},O=0,S=0;O<h;O+=1){var L=p[O];if(typeof L=="string")S+=L.length;else{var M=L.regex,$=L.parser,Y=v.slice(S),A=M.exec(Y)[0];$.call(D,A),v=v.replace(A,"")}}return function(F){var R=F.afternoon;if(R!==void 0){var j=F.hours;R?j<12&&(F.hours+=12):j===12&&(F.hours=0),delete F.afternoon}}(D),D}}return function(b,B,_){_.p.customParseFormat=!0,b&&b.parseTwoDigitYear&&(u=b.parseTwoDigitYear);var p=B.prototype,h=p.parse;p.parse=function(E){var s=E.date,y=E.utc,w=E.args;this.$u=y;var k=w[1];if(typeof k=="string"){var v=w[2]===!0,D=w[3]===!0,O=v||D,S=w[2];D&&(S=w[2]),m=this.$locale(),!v&&S&&(m=_.Ls[S]),this.$d=function(Y,A,F){try{if(["x","X"].indexOf(A)>-1)return new Date((A==="X"?1e3:1)*Y);var R=C(A)(Y),j=R.year,q=R.month,pe=R.day,he=R.hours,ye=R.minutes,be=R.seconds,we=R.milliseconds,St=R.zone,Z=new Date,J=pe||(j||q?1:Z.getDate()),tt=j||Z.getFullYear(),W=0;j&&!q||(W=q>0?q-1:Z.getMonth());var et=he||0,nt=ye||0,rt=be||0,ot=we||0;return St?new Date(Date.UTC(tt,W,J,et,nt,rt,ot+60*St.offset*1e3)):F?new Date(Date.UTC(tt,W,J,et,nt,rt,ot)):new Date(tt,W,J,et,nt,rt,ot)}catch{return new Date("")}}(s,k,y),this.init(),S&&S!==!0&&(this.$L=this.locale(S).$L),O&&s!=this.format(k)&&(this.$d=new Date("")),m={}}else if(k instanceof Array)for(var L=k.length,M=1;M<=L;M+=1){w[1]=k[M-1];var $=_.apply(this,w);if($.isValid()){this.$d=$.$d,this.$L=$.$L,this.init();break}M===L&&(this.$d=new Date(""))}else h.call(this,E)}}})})(lt);const Gt=lt.exports,ct=Symbol("CHART_ROWS_KEY"),dt=Symbol("CONFIG_KEY"),ft=Symbol("EMIT_BAR_EVENT_KEY"),ut=Symbol("BAR_CONTAINER_KEY");function G(){const e=t.inject(dt);if(!e)throw Error("Failed to inject config!");return e}const gt="YYYY-MM-DD HH:mm";function V(e=G()){const{chartStart:i,chartEnd:r,barStart:g,barEnd:l,dateFormat:f}=e,c=t.computed(()=>u(i.value)),m=t.computed(()=>u(r.value)),u=(n,a)=>{let d;if(a!==void 0&&typeof n!="string"&&!(n instanceof Date)&&(d=a==="start"?n[g.value]:n[l.value]),typeof n=="string")d=n;else if(n instanceof Date)return N.default(n);const x=f.value||gt;return N.default(d,x,!0)};return{chartStartDayjs:c,chartEndDayjs:m,toDayjs:u,format:(n,a)=>a===!1?n instanceof Date?n:N.default(n).toDate():(typeof n=="string"||n instanceof Date?u(n):n).format(a)}}function U(){const{precision:e}=G(),{chartStartDayjs:i,chartEndDayjs:r}=V(),g=t.computed(()=>{switch(e==null?void 0:e.value){case"hour":return"day";case"day":return"month";case"month":return"year";default:throw new Error("Precision prop incorrect. Must be one of the following: 'hour', 'day', 'month'")}}),l={hour:"HH",date:"DD.MMM ",day:"DD",month:"MMMM YYYY",year:"YYYY"};return{timeaxisUnits:t.computed(()=>{const c=[],m=[],u=g.value==="day"?"date":g.value,o=e.value;let n=i.value.startOf(o);const a=r.value.diff(i.value,"minutes",!0);let d=0,x=n[u]();for(;n.isBefore(r.value)||n.isSame(r.value);){if(n[u]()!==x){let p=0;if(c.length===0)p=n.startOf(u).diff(i.value,"minutes",!0)/a*100;else if(n.isSameOrAfter(r.value))p=r.value.diff(n.subtract(1,u).startOf(u),"minutes",!0)/a*100;else{const E=n.startOf(u),s=n.subtract(1,u).startOf(u);p=E.diff(s,"minutes",!0)/a*100}const h=n.subtract(1,u);c.push({label:h.format(l[u]),value:String(x),date:h.toDate(),width:String(p)+"%"}),d=0,x=n[u]()}let B=0;m.length===0?B=n.endOf(o).diff(i.value,"minutes",!0)/a*100:n.add(1,o).isSameOrAfter(r.value)?B=r.value.diff(n.startOf(o),"minutes",!0)/a*100:B=n.endOf(o).diff(n.startOf(o),"minutes",!0)/a*100,m.push({label:n.format(l[o]),value:String(n[o==="day"?"date":o]()),date:n.toDate(),width:String(B)+"%"});const _=n;n=n.add(1,o),(n.isBefore(r.value)||n.isSame(r.value))&&(d+=n.diff(_,"minutes",!0))}const C=r.value.isSame(r.value.startOf(u))?r.value[u]()-1:r.value[u]();return c.some(B=>B.value===String(C))||(d+=r.value.diff(n.subtract(1,o),"minutes",!0),c.push({label:r.value.format(l[u]),value:String(x),date:r.value.toDate(),width:`${d/a*100}%`})),{upperUnits:c,lowerUnits:m}})}}const $t={class:"g-timeaxis"},Rt={class:"g-timeunits-container"},Yt={class:"g-timeunits-container"},It=t.defineComponent({__name:"GGanttTimeaxis",setup(e){const{precision:i,colors:r}=G(),{timeaxisUnits:g}=U();return(l,f)=>(t.openBlock(),t.createElementBlock("div",$t,[t.createElementVNode("div",Rt,[(t.openBlock(!0),t.createElementBlock(t.Fragment,null,t.renderList(t.unref(g).upperUnits,({label:c,value:m,date:u,width:o},n)=>(t.openBlock(),t.createElementBlock("div",{key:c,class:"g-upper-timeunit",style:t.normalizeStyle({background:n%2===0?t.unref(r).primary:t.unref(r).secondary,color:t.unref(r).text,width:o})},[t.renderSlot(l.$slots,"upper-timeunit",{label:c,value:m,date:u},()=>[t.createTextVNode(t.toDisplayString(c),1)])],4))),128))]),t.createElementVNode("div",Yt,[(t.openBlock(!0),t.createElementBlock(t.Fragment,null,t.renderList(t.unref(g).lowerUnits,({label:c,value:m,date:u,width:o},n)=>(t.openBlock(),t.createElementBlock("div",{key:c,class:"g-timeunit",style:t.normalizeStyle({background:n%2===0?t.unref(r).ternary:t.unref(r).quartenary,color:t.unref(r).text,flexDirection:t.unref(i)==="hour"?"column":"row",alignItems:t.unref(i)==="hour"?"":"center",width:o})},[t.renderSlot(l.$slots,"timeunit",{label:c,value:m,date:u},()=>[t.createTextVNode(t.toDisplayString(c),1)]),t.unref(i)==="hour"?(t.openBlock(),t.createElementBlock("div",{key:0,class:"g-timeaxis-hour-pin",style:t.normalizeStyle({background:t.unref(r).text})},null,4)):t.createCommentVNode("",!0)],4))),128))])]))}}),Be="",Nt={class:"g-grid-container"},Ft=t.defineComponent({__name:"GGanttGrid",props:{highlightedDates:null},setup(e){var f;const r=(f=e.highlightedDates)==null?void 0:f.map(c=>c.getTime()),{colors:g}=G(),{timeaxisUnits:l}=U();return(c,m)=>(t.openBlock(),t.createElementBlock("div",Nt,[(t.openBlock(!0),t.createElementBlock(t.Fragment,null,t.renderList(t.unref(l).lowerUnits,({label:u,value:o,width:n,date:a})=>{var d;return t.openBlock(),t.createElementBlock("div",{key:u,class:"g-grid-line",style:t.normalizeStyle({width:n,background:(d=t.unref(r))!=null&&d.includes(a.getTime())?t.unref(g).hoverHighlight:void 0})},null,4)}),128))]))}}),xe="",At=t.defineComponent({__name:"GGanttBarTooltip",props:{bar:null,modelValue:{type:Boolean}},setup(e){const i=e,r={hour:"HH:mm",day:"DD. MMM HH:mm",month:"DD. MMMM YYYY"},g="cadetblue",{bar:l}=t.toRefs(i),{precision:f,font:c,barStart:m,barEnd:u,rowHeight:o}=G(),n=t.ref("0px"),a=t.ref("0px");t.watch(()=>i.bar,async()=>{var y;await t.nextTick();const _=((y=l==null?void 0:l.value)==null?void 0:y.ganttBarConfig.id)||"";if(!_)return;const p=document.getElementById(_),{top:h,left:E}=(p==null?void 0:p.getBoundingClientRect())||{top:0,left:0},s=Math.max(E,10);n.value=`${h+o.value-10}px`,a.value=`${s}px`},{deep:!0,immediate:!0});const d=t.computed(()=>{var _,p;return((p=(_=l==null?void 0:l.value)==null?void 0:_.ganttBarConfig.style)==null?void 0:p.background)||g}),{toDayjs:x}=V(),C=t.computed(()=>{var _;return(_=l.value)==null?void 0:_[m.value]}),b=t.computed(()=>{var _;return(_=l.value)==null?void 0:_[u.value]}),B=t.computed(()=>{if(!(l!=null&&l.value))return"";const _=r[f.value],p=x(C.value).format(_),h=x(b.value).format(_);return`${p} \u2013 ${h}`});return(_,p)=>(t.openBlock(),t.createBlock(t.Teleport,{to:"body"},[t.createVNode(t.Transition,{name:"g-fade",mode:"out-in"},{default:t.withCtx(()=>[e.modelValue?(t.openBlock(),t.createElementBlock("div",{key:0,class:"g-gantt-tooltip",style:t.normalizeStyle({top:n.value,left:a.value,fontFamily:t.unref(c)})},[t.createElementVNode("div",{class:"g-gantt-tooltip-color-dot",style:t.normalizeStyle({background:t.unref(d)})},null,4),t.renderSlot(_.$slots,"default",{bar:t.unref(l),barStart:t.unref(C),barEnd:t.unref(b)},()=>[t.createTextVNode(t.toDisplayString(t.unref(B)),1)])],4)):t.createCommentVNode("",!0)]),_:3})]))}}),_e="",mt={default:{primary:"#eeeeee",secondary:"#E0E0E0",ternary:"#F5F5F5",quartenary:"#ededed",hoverHighlight:"rgba(204, 216, 219, 0.5)",text:"#404040",background:"white"},creamy:{primary:"#ffe8d9",secondary:"#fcdcc5",ternary:"#fff6f0",quartenary:"#f7ece6",hoverHighlight:"rgba(230, 221, 202, 0.5)",text:"#542d05",background:"white"},crimson:{primary:"#a82039",secondary:"#c41238",ternary:"#db4f56",quartenary:"#ce5f64",hoverHighlight:"rgba(196, 141, 141, 0.5)",text:"white",background:"white"},dark:{primary:"#404040",secondary:"#303030",ternary:"#353535",quartenary:"#383838",hoverHighlight:"rgba(159, 160, 161, 0.5)",text:"white",background:"#525252",toast:"#1f1f1f"},flare:{primary:"#e08a38",secondary:"#e67912",ternary:"#5e5145",quartenary:"#665648",hoverHighlight:"rgba(196, 141, 141, 0.5)",text:"white",background:"white"},fuchsia:{primary:"#de1d5a",secondary:"#b50b41",ternary:"#ff7da6",quartenary:"#f2799f",hoverHighlight:"rgba(196, 141, 141, 0.5)",text:"white",background:"white"},grove:{primary:"#3d9960",secondary:"#288542",ternary:"#72b585",quartenary:"#65a577",hoverHighlight:"rgba(160, 219, 171, 0.5)",text:"white",background:"white"},"material-blue":{primary:"#0D47A1",secondary:"#1565C0",ternary:"#42a5f5",quartenary:"#409fed",hoverHighlight:"rgba(110, 165, 196, 0.5)",text:"white",background:"white"},sky:{primary:"#b5e3ff",secondary:"#a1d6f7",ternary:"#d6f7ff",quartenary:"#d0edf4",hoverHighlight:"rgba(193, 202, 214, 0.5)",text:"#022c47",background:"white"},slumber:{primary:"#2a2f42",secondary:"#2f3447",ternary:"#35394d",quartenary:"#2c3044",hoverHighlight:"rgba(179, 162, 127, 0.5)",text:"#ffe0b3",background:"#38383b",toast:"#1f1f1f"},vue:{primary:"#258a5d",secondary:"#41B883",ternary:"#35495E",quartenary:"#2a3d51",hoverHighlight:"rgba(160, 219, 171, 0.5)",text:"white",background:"white"}};var pt;const H=typeof window<"u";H&&((pt=window==null?void 0:window.navigator)==null?void 0:pt.userAgent)&&/iP(ad|hone|od)/.test(window.navigator.userAgent);function jt(e){return typeof e=="function"?e():t.unref(e)}function Vt(e){return e}function Ht(e){return t.getCurrentScope()?(t.onScopeDispose(e),!0):!1}function zt(e,i=!0){t.getCurrentInstance()?t.onMounted(e):i?e():t.nextTick(e)}function ht(e){var i;const r=jt(e);return(i=r==null?void 0:r.$el)!=null?i:r}const Pt=H?window:void 0;H&&window.document,H&&window.navigator,H&&window.location;function Ut(e,i=!1){const r=t.ref(),g=()=>r.value=Boolean(e());return g(),zt(g,i),r}const K=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},Q="__vueuse_ssr_handlers__";K[Q]=K[Q]||{},K[Q];var yt=Object.getOwnPropertySymbols,qt=Object.prototype.hasOwnProperty,Wt=Object.prototype.propertyIsEnumerable,Kt=(e,i)=>{var r={};for(var g in e)qt.call(e,g)&&i.indexOf(g)<0&&(r[g]=e[g]);if(e!=null&&yt)for(var g of yt(e))i.indexOf(g)<0&&Wt.call(e,g)&&(r[g]=e[g]);return r};function Qt(e,i,r={}){const g=r,{window:l=Pt}=g,f=Kt(g,["window"]);let c;const m=Ut(()=>l&&"ResizeObserver"in l),u=()=>{c&&(c.disconnect(),c=void 0)},o=t.watch(()=>ht(e),a=>{u(),m.value&&l&&a&&(c=new ResizeObserver(i),c.observe(a,f))},{immediate:!0,flush:"post"}),n=()=>{u(),o()};return Ht(n),{isSupported:m,stop:n}}function Xt(e,i={width:0,height:0},r={}){const g=t.ref(i.width),l=t.ref(i.height);return Qt(e,([f])=>{g.value=f.contentRect.width,l.value=f.contentRect.height},r),t.watch(()=>ht(e),f=>{g.value=f?i.width:0,l.value=f?i.height:0}),{width:g,height:l}}var bt;(function(e){e.UP="UP",e.RIGHT="RIGHT",e.DOWN="DOWN",e.LEFT="LEFT",e.NONE="NONE"})(bt||(bt={}));var Zt=Object.defineProperty,wt=Object.getOwnPropertySymbols,Jt=Object.prototype.hasOwnProperty,te=Object.prototype.propertyIsEnumerable,Bt=(e,i,r)=>i in e?Zt(e,i,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[i]=r,ee=(e,i)=>{for(var r in i||(i={}))Jt.call(i,r)&&Bt(e,r,i[r]);if(wt)for(var r of wt(i))te.call(i,r)&&Bt(e,r,i[r]);return e};ee({linear:Vt},{easeInSine:[.12,0,.39,0],easeOutSine:[.61,1,.88,1],easeInOutSine:[.37,0,.63,1],easeInQuad:[.11,0,.5,0],easeOutQuad:[.5,1,.89,1],easeInOutQuad:[.45,0,.55,1],easeInCubic:[.32,0,.67,0],easeOutCubic:[.33,1,.68,1],easeInOutCubic:[.65,0,.35,1],easeInQuart:[.5,0,.75,0],easeOutQuart:[.25,1,.5,1],easeInOutQuart:[.76,0,.24,1],easeInQuint:[.64,0,.78,0],easeOutQuint:[.22,1,.36,1],easeInOutQuint:[.83,0,.17,1],easeInExpo:[.7,0,.84,0],easeOutExpo:[.16,1,.3,1],easeInOutExpo:[.87,0,.13,1],easeInCirc:[.55,0,1,.45],easeOutCirc:[0,.55,.45,1],easeInOutCirc:[.85,0,.15,1],easeInBack:[.36,0,.66,-.56],easeOutBack:[.34,1.56,.64,1],easeInOutBack:[.68,-.6,.32,1.6]});const ne={key:0,class:"g-footer"},re={class:"g-footer-container"},oe=t.defineComponent({__name:"GGanttFooter",props:{labels:null},setup(e){const{precision:i,colors:r}=G(),{timeaxisUnits:g}=U();return(l,f)=>e.labels?(t.openBlock(),t.createElementBlock("div",ne,[t.createElementVNode("div",re,[(t.openBlock(!0),t.createElementBlock(t.Fragment,null,t.renderList(t.unref(g).lowerUnits,({label:c,value:m,date:u,width:o},n)=>(t.openBlock(),t.createElementBlock("div",{key:c,class:"g-timeunit",style:t.normalizeStyle({background:n%2===0?t.unref(r).ternary:t.unref(r).quartenary,color:t.unref(r).text,flexDirection:t.unref(i)==="hour"?"column":"row",alignItems:t.unref(i)==="hour"?"":"center",width:o})},[t.renderSlot(l.$slots,"timeunit",{label:c,value:m,date:u},()=>[t.createTextVNode(t.toDisplayString(e.labels[n]),1)],!0)],4))),128))])])):t.createCommentVNode("",!0)}}),ke="",ae=((e,i)=>{const r=e.__vccOpts||e;for(const[g,l]of i)r[g]=l;return r})(oe,[["__scopeId","data-v-400629df"]]),ie={class:"g-gantt-rows-container"},xt=t.defineComponent({__name:"GGanttChart",props:{chartStart:null,chartEnd:null,precision:{default:"day"},barStart:null,barEnd:null,dateFormat:{type:[String,Boolean],default:gt},width:{default:"100%"},hideTimeaxis:{type:Boolean,default:!1},colorScheme:{default:"default"},grid:{type:Boolean,default:!1},pushOnOverlap:{type:Boolean,default:!1},noOverlap:{type:Boolean,default:!1},rowHeight:{default:40},highlightedDates:{default:()=>[]},font:{default:"inherit"},footerLabels:null,sticky:{type:Boolean}},emits:["click-bar","mousedown-bar","mouseup-bar","dblclick-bar","mouseenter-bar","mouseleave-bar","dragstart-bar","drag-bar","dragend-bar","contextmenu-bar"],setup(e,{emit:i}){const r=e,{width:g,font:l,colorScheme:f}=t.toRefs(r),c=t.useSlots(),m=t.computed(()=>typeof f.value!="string"?f.value:mt[f.value]||mt.default),u=()=>{var E;const p=(E=c.default)==null?void 0:E.call(c),h=[];return p&&p.forEach(s=>{var y;if((y=s.props)!=null&&y.bars){const w=s.props.bars;h.push(w)}else Array.isArray(s.children)&&s.children.forEach(w=>{var v;const k=w;if((v=k==null?void 0:k.props)!=null&&v.bars){const D=k.props.bars;h.push(D)}})}),h},o=t.ref(!1),n=t.ref(!1),a=t.ref(void 0);let d;const x=p=>{d&&clearTimeout(d),d=setTimeout(()=>{o.value=!0},800),a.value=p},C=()=>{clearTimeout(d),o.value=!1},b=(p,h,E,s)=>{switch(p.type){case"click":i("click-bar",{bar:h,e:p,datetime:E});break;case"mousedown":i("mousedown-bar",{bar:h,e:p,datetime:E});break;case"mouseup":i("mouseup-bar",{bar:h,e:p,datetime:E});break;case"dblclick":i("dblclick-bar",{bar:h,e:p,datetime:E});break;case"mouseenter":x(h),i("mouseenter-bar",{bar:h,e:p});break;case"mouseleave":C(),i("mouseleave-bar",{bar:h,e:p});break;case"dragstart":n.value=!0,i("dragstart-bar",{bar:h,e:p});break;case"drag":i("drag-bar",{bar:h,e:p});break;case"dragend":n.value=!1,i("dragend-bar",{bar:h,e:p});break;case"contextmenu":i("contextmenu-bar",{bar:h,e:p,datetime:E});break}},B=t.ref(null),_=Xt(B);return t.provide(ct,u),t.provide(dt,{...t.toRefs(r),colors:m,chartSize:_}),t.provide(ft,b),(p,h)=>(t.openBlock(),t.createElementBlock(t.Fragment,null,[t.createElementVNode("div",{style:t.normalizeStyle([{display:"flex","flex-flow":"column"},e.sticky?"position: sticky; left:0;z-index:100; background: white;":""])},[t.renderSlot(p.$slots,"side-menu")],4),t.createElementVNode("div",{ref_key:"ganttChart",ref:B,class:"g-gantt-chart",style:t.normalizeStyle({width:t.unref(g),background:t.unref(m).background,fontFamily:t.unref(l)})},[e.hideTimeaxis?t.createCommentVNode("",!0):(t.openBlock(),t.createBlock(It,{key:0},{"upper-timeunit":t.withCtx(({label:E,value:s,date:y})=>[t.renderSlot(p.$slots,"upper-timeunit",{label:E,value:s,date:y})]),timeunit:t.withCtx(({label:E,value:s,date:y})=>[t.renderSlot(p.$slots,"timeunit",{label:E,value:s,date:y})]),_:3})),e.grid?(t.openBlock(),t.createBlock(Ft,{key:1,"highlighted-dates":e.highlightedDates},null,8,["highlighted-dates"])):t.createCommentVNode("",!0),t.createElementVNode("div",ie,[t.renderSlot(p.$slots,"default")]),e.hideTimeaxis?t.createCommentVNode("",!0):(t.openBlock(),t.createBlock(ae,{key:2,labels:e.footerLabels},null,8,["labels"])),t.createVNode(At,{"model-value":o.value||n.value,bar:a.value},{default:t.withCtx(()=>[t.renderSlot(p.$slots,"bar-tooltip",{bar:a.value})]),_:3},8,["model-value","bar"])],4),t.createElementVNode("div",null,[t.renderSlot(p.$slots,"footer")])],64))}}),Ce="";function X(e=G()){const{dateFormat:i,chartSize:r}=e,{chartStartDayjs:g,chartEndDayjs:l,toDayjs:f,format:c}=V(e),m=t.computed(()=>l.value.diff(g.value,"minutes"));return{mapTimeToPosition:n=>{const a=r.width.value||0,d=f(n).diff(g.value,"minutes",!0);return Math.ceil(d/m.value*a)},mapPositionToTime:n=>{const a=r.width.value||0,d=n/a*m.value,x=c(g.value.add(d,"minutes"),i.value);if(typeof x=="string")return x;throw Error}}}function _t(e,i=()=>null,r=()=>null,g=G()){const{barStart:l,barEnd:f,pushOnOverlap:c}=g,m=t.ref(!1);let u=0,o;const{mapPositionToTime:n}=X(g),{toDayjs:a}=V(g),d=h=>{const E=document.getElementById(e.ganttBarConfig.id);if(!E)return;switch(u=h.clientX-(E.getBoundingClientRect().left||0),h.target.className){case"g-gantt-bar-handle-left":document.body.style.cursor="ew-resize",o=b;break;case"g-gantt-bar-handle-right":document.body.style.cursor="ew-resize",o=B;break;default:o=C}m.value=!0,window.addEventListener("mousemove",o),window.addEventListener("mouseup",p)},x=()=>{var s;const h=document.getElementById(e.ganttBarConfig.id),E=(s=h==null?void 0:h.closest(".g-gantt-row-bars-container"))==null?void 0:s.getBoundingClientRect();return{barElement:h,barContainer:E}},C=h=>{const{barElement:E,barContainer:s}=x();if(!E||!s)return;const y=E.getBoundingClientRect().width,w=h.clientX-s.left-u,k=w+y;if(!_(w,k)){if(e[l.value].substring(0,10)!=n(w).substring(0,10)){const v=a(e[l.value]),O=a(e[f.value]).diff(v,"minute"),S=n(w).substring(0,10)+" 00:00";e[l.value]=S,e[f.value]=a(S).add(O,"minute").format("DD.MM.YYYY HH:mm")}i(h,e)}},b=h=>{const{barElement:E,barContainer:s}=x();if(!E||!s)return;const y=h.clientX-s.left,w=n(y);if(!a(w).isSameOrAfter(a(e,"end"))){if(e[l.value].substring(0,10)!=n(y).substring(0,10)){const k=n(y).substring(0,10)+" 00:00";e[l.value]=k}i(h,e)}},B=h=>{const{barElement:E,barContainer:s}=x();if(!E||!s)return;const y=h.clientX-s.left,w=n(y);if(!a(w).isSameOrBefore(a(e,"start"))){if(e[l.value].substring(0,10)!=n(y).substring(0,10)){const k=n(y).substring(0,10)+" 23:59";e[f.value]=k}i(h,e)}},_=(h,E)=>{if(!c.value)return!1;const s=e.ganttBarConfig.dragLimitLeft,y=e.ganttBarConfig.dragLimitRight;return h&&s!=null&&h<s||E&&y!=null&&E>y},p=h=>{m.value=!1,document.body.style.cursor="",window.removeEventListener("mousemove",o),window.removeEventListener("mouseup",p),r(h,e)};return{isDragging:m,initDrag:d}}function Et(){const e=t.inject(ct);if(!e)throw Error("Failed to inject getChartRows!");return e}function kt(){const e=t.inject(ft);if(!e)throw Error("Failed to inject emitBarEvent!");return e}function se(){const e=G(),i=Et(),r=kt(),{pushOnOverlap:g,barStart:l,barEnd:f,noOverlap:c,dateFormat:m}=e,u=new Map,{toDayjs:o,format:n}=V(),a=(s,y)=>{const{initDrag:w}=_t(s,x,p,e);r({...y,type:"dragstart"},s),w(y),h(s)},d=(s,y)=>{const w=s.ganttBarConfig.bundle;w!=null&&(i().forEach(k=>{k.forEach(v=>{if(v.ganttBarConfig.bundle===w){const D=v===s?p:()=>null,{initDrag:O}=_t(v,x,D,e);O(y),h(v)}})}),r({...y,type:"dragstart"},s))},x=(s,y)=>{r({...s,type:"drag"},y),C(y)},C=s=>{if(!(g!=null&&g.value))return;let y=s,{overlapBar:w,overlapType:k}=b(y);for(;w;){h(w);const v=o(y[l.value]),D=o(y[f.value]),O=o(w[l.value]),S=o(w[f.value]);let L;switch(k){case"left":L=S.diff(v,"minutes",!0),w[f.value]=n(y[l.value],m.value),w[l.value]=n(O.subtract(L,"minutes"),m.value);break;case"right":L=D.diff(O,"minutes",!0),w[l.value]=n(D,m.value),w[f.value]=n(S.add(L,"minutes"),m.value);break;default:console.warn("Vue-Ganttastic: One bar is inside of the other one! This should never occur while push-on-overlap is active!");return}w&&(k==="left"||k==="right")&&B(w,L,k),y=w,{overlapBar:w,overlapType:k}=b(w)}},b=s=>{let y,w,k;const v=i().find(M=>M.includes(s))||[],D=o(s[l.value]),O=o(s[f.value]);return{overlapBar:v.find(M=>{if(M===s)return!1;const $=o(M[l.value]),Y=o(M[f.value]);return y=D.isBetween($,Y),w=O.isBetween($,Y),k=$.isBetween(D,O)||Y.isBetween(D,O),y||w||k}),overlapType:y?"left":w?"right":k?"between":null}},B=(s,y,w)=>{h(s),s.ganttBarConfig.bundle&&i().forEach(k=>{k.forEach(v=>{v.ganttBarConfig.bundle===s.ganttBarConfig.bundle&&v!==s&&(h(v),_(v,y,w))})})},_=(s,y,w)=>{switch(w){case"left":s[l.value]=n(o(s,"start").subtract(y,"minutes"),m.value),s[f.value]=n(o(s,"end").subtract(y,"minutes"),m.value);break;case"right":s[l.value]=n(o(s,"start").add(y,"minutes"),m.value),s[f.value]=n(o(s,"end").add(y,"minutes"),m.value)}C(s)},p=(s,y)=>{E();const w={...s,type:"dragend"};r(w,y,void 0,new Map(u)),u.clear()},h=s=>{if(!u.has(s)){const y=s[l.value],w=s[f.value];u.set(s,{oldStart:y,oldEnd:w})}},E=()=>{if(g.value||!c.value)return;let s=!1;u.forEach((y,w)=>{const{overlapBar:k}=b(w);k!=null&&(s=!0)}),s&&u.forEach(({oldStart:y,oldEnd:w},k)=>{k[l.value]=y,k[f.value]=w})};return{initDragOfBar:a,initDragOfBundle:d}}function le(){const{pushOnOverlap:e}=G(),i=Et(),r=c=>{const m=[];return c!=null&&i().forEach(u=>{u.forEach(o=>{o.ganttBarConfig.bundle===c&&m.push(o)})}),m},g=c=>{if(!e.value||c.ganttBarConfig.pushOnOverlap===!1)return;for(const u of["left","right"]){const o=u,{gapDistanceSoFar:n,bundleBarsAndGapDist:a}=l(c,0,o);let d=n;const x=a;if(!x)continue;for(let b=0;b<x.length;b++){const B=x[b].bar,_=x[b].gapDistance;r(B.ganttBarConfig.bundle).filter(h=>h!==B).forEach(h=>{const E=l(h,_,o),s=E.gapDistanceSoFar,y=E.bundleBarsAndGapDist;s!=null&&(!d||s<d)&&(d=s),y.forEach(w=>{x.find(k=>k.bar===w.bar)||x.push(w)})})}const C=document.getElementById(c.ganttBarConfig.id);d!=null&&o==="left"?c.ganttBarConfig.dragLimitLeft=C.offsetLeft-d:d!=null&&o==="right"&&(c.ganttBarConfig.dragLimitRight=C.offsetLeft+C.offsetWidth+d)}r(c.ganttBarConfig.bundle).forEach(u=>{u.ganttBarConfig.dragLimitLeft=c.ganttBarConfig.dragLimitLeft,u.ganttBarConfig.dragLimitRight=c.ganttBarConfig.dragLimitRight})},l=(c,m=0,u)=>{const o=c.ganttBarConfig.bundle?[{bar:c,gapDistance:m}]:[];let n=c,a=f(n,u);if(u==="left")for(;a;){const d=document.getElementById(n.ganttBarConfig.id),x=document.getElementById(a.ganttBarConfig.id),C=x.offsetLeft+x.offsetWidth;if(m+=d.offsetLeft-C,a.ganttBarConfig.immobile)return{gapDistanceSoFar:m,bundleBarsAndGapDist:o};a.ganttBarConfig.bundle&&o.push({bar:a,gapDistance:m}),n=a,a=f(a,"left")}if(u==="right")for(;a;){const d=document.getElementById(n.ganttBarConfig.id),x=document.getElementById(a.ganttBarConfig.id),C=d.offsetLeft+d.offsetWidth;if(m+=x.offsetLeft-C,a.ganttBarConfig.immobile)return{gapDistanceSoFar:m,bundleBarsAndGapDist:o};a.ganttBarConfig.bundle&&o.push({bar:a,gapDistance:m}),n=a,a=f(a,"right")}return{gapDistanceSoFar:null,bundleBarsAndGapDist:o}},f=(c,m)=>{const u=document.getElementById(c.ganttBarConfig.id),o=i().find(a=>a.includes(c))||[];let n=[];return m==="left"?n=o.filter(a=>{const d=document.getElementById(a.ganttBarConfig.id);return d&&d.offsetLeft<u.offsetLeft&&a.ganttBarConfig.pushOnOverlap!==!1}):n=o.filter(a=>{const d=document.getElementById(a.ganttBarConfig.id);return d&&d.offsetLeft>u.offsetLeft&&a.ganttBarConfig.pushOnOverlap!==!1}),n.length>0?n.reduce((a,d)=>{const x=document.getElementById(a.ganttBarConfig.id),C=document.getElementById(d.ganttBarConfig.id),b=Math.abs(x.offsetLeft-u.offsetLeft),B=Math.abs(C.offsetLeft-u.offsetLeft);return b<B?a:d},n[0]):null};return{setDragLimitsOfGanttBar:g}}const ce=["id"],de={class:"g-gantt-bar-label"},fe={style:{"z-index":"100"}},ue=t.createElementVNode("div",{class:"g-gantt-bar-handle-left"},null,-1),ge=t.createElementVNode("div",{class:"g-gantt-bar-handle-right"},null,-1),me=t.defineComponent({__name:"GGanttBar",props:{bar:null},setup(e){const i=e,r=kt(),g=G(),{rowHeight:l}=g,{bar:f}=t.toRefs(i),{mapTimeToPosition:c,mapPositionToTime:m}=X(),{initDragOfBar:u,initDragOfBundle:o}=se(),{setDragLimitsOfGanttBar:n}=le(),a=t.ref(!1),d=t.computed(()=>f.value.ganttBarConfig);function x(v){d.value.bundle!=null?o(f.value,v):u(f.value,v),a.value=!0}const C=()=>{n(f.value),!d.value.immobile&&(window.addEventListener("mousemove",x,{once:!0}),window.addEventListener("mouseup",()=>{window.removeEventListener("mousemove",x),a.value=!1},{once:!0}))},b=t.inject(ut),B=v=>{var S;v.preventDefault(),v.type==="mousedown"&&C();const D=(S=b==null?void 0:b.value)==null?void 0:S.getBoundingClientRect();if(!D)return;const O=m(v.clientX-D.left);r(v,f.value,O)},{barStart:_,barEnd:p,width:h,chartStart:E,chartEnd:s,chartSize:y}=g,w=t.ref(0),k=t.ref(0);return t.onMounted(()=>{t.watch([f,h,E,s,y.width],()=>{w.value=c(f.value[_.value]),k.value=c(f.value[p.value])},{deep:!0,immediate:!0})}),(v,D)=>(t.openBlock(),t.createElementBlock("div",{id:t.unref(d).id,class:"g-gantt-bar",style:t.normalizeStyle({...t.unref(d).style,position:"absolute",top:`${t.unref(l)*.1}px`,left:`${w.value}px`,width:`${k.value-w.value}px`,height:`${t.unref(l)*.8}px`,zIndex:a.value?3:2}),onMousedown:B,onClick:B,onDblclick:B,onMouseenter:B,onMouseleave:B,onContextmenu:B},[t.createElementVNode("div",de,[t.renderSlot(v.$slots,"default",{bar:t.unref(f)},()=>[t.createElementVNode("div",fe,t.toDisplayString(t.unref(d).label||""),1),t.unref(d).progress?(t.openBlock(),t.createElementBlock("div",{key:0,style:t.normalizeStyle([{position:"absolute",height:"100%",left:"0"},{width:t.unref(d).progress+"%",backgroundColor:t.unref(d).progressColor}])},null,4)):t.createCommentVNode("",!0)])]),t.unref(d).hasHandles?(t.openBlock(),t.createElementBlock(t.Fragment,{key:0},[ue,ge],64)):t.createCommentVNode("",!0)],44,ce))}}),De="",vt=t.defineComponent({__name:"GGanttRow",props:{bars:null,highlightOnHover:{type:Boolean}},emits:["drop"],setup(e,{emit:i}){const r=e,{rowHeight:g,colors:l}=G(),{highlightOnHover:f}=t.toRefs(r),c=t.ref(!1),m=t.computed(()=>({height:`${g.value}px`,background:(f==null?void 0:f.value)&&c.value?l.value.hoverHighlight:null})),{mapPositionToTime:u}=X(),o=t.ref(null);t.provide(ut,o);const n=a=>{var b;const d=(b=o.value)==null?void 0:b.getBoundingClientRect();if(!d){console.error("Vue-Ganttastic: failed to find bar container element for row.");return}const x=a.clientX-d.left,C=u(x);i("drop",{e:a,datetime:C})};return(a,d)=>(t.openBlock(),t.createElementBlock("div",{class:"g-gantt-row",style:t.normalizeStyle(t.unref(m)),onDragover:d[0]||(d[0]=t.withModifiers(x=>c.value=!0,["prevent"])),onDragleave:d[1]||(d[1]=x=>c.value=!1),onDrop:d[2]||(d[2]=x=>n(x)),onMouseover:d[3]||(d[3]=x=>c.value=!0),onMouseleave:d[4]||(d[4]=x=>c.value=!1)},[t.createCommentVNode("",!0),t.createElementVNode("div",t.mergeProps({ref_key:"barContainer",ref:o,class:"g-gantt-row-bars-container"},a.$attrs),[t.createVNode(t.TransitionGroup,{name:"bar-transition",tag:"div"},{default:t.withCtx(()=>[(t.openBlock(!0),t.createElementBlock(t.Fragment,null,t.renderList(e.bars,x=>(t.openBlock(),t.createBlock(me,{key:x.ganttBarConfig.id,bar:x},{default:t.withCtx(()=>[t.renderSlot(a.$slots,"bar-label",{bar:x})]),_:2},1032,["bar"]))),128))]),_:3})],16)],36))}}),Oe="",Ct=t.defineComponent({__name:"GGanttLabelRow",props:{labels:null,styleFunc:null},setup(e){const i=e,{rowHeight:r,colors:g}=G(),{timeaxisUnits:l}=U(),f=c=>i.styleFunc!=null?i.styleFunc(c):{};return(c,m)=>(t.openBlock(),t.createElementBlock("div",{class:"g-gantt-row",style:t.normalizeStyle({height:t.unref(r)+"px"})},[t.createElementVNode("div",t.mergeProps({ref:"barContainer",class:"g-gantt-row-bars-container"},c.$attrs),[(t.openBlock(!0),t.createElementBlock(t.Fragment,null,t.renderList(t.unref(l).lowerUnits,({label:u,width:o},n)=>(t.openBlock(),t.createElementBlock("div",{key:u,class:"g-timeunit",style:t.normalizeStyle({color:t.unref(g).text,textAlign:"center",width:o})},[t.createElementVNode("span",{style:t.normalizeStyle(f(u))},t.toDisplayString(e.labels[n]),5)],4))),128))],16)],4))}}),Se="";function Dt(){N.default.extend(Tt),N.default.extend(Lt),N.default.extend(Mt),N.default.extend(Gt)}const Ot={install(e,i){Dt(),e.component("GGanttChart",xt),e.component("GGanttRow",vt),e.component("GGanttLabelRow",Ct)}};T.GGanttChart=xt,T.GGanttLabelRow=Ct,T.GGanttRow=vt,T.default=Ot,T.extendDayjs=Dt,T.ganttastic=Ot,Object.defineProperties(T,{__esModule:{value:!0},[Symbol.toStringTag]:{value:"Module"}})});function injectStyle(T,I="top"){if(!T||typeof document>"u")return;const t=document.head,z=document.createElement("style");I==="top"&&t.firstChild?t.insertBefore(z,t.firstChild):t.appendChild(z),z.appendChild(document.createTextNode(T))}injectStyle(`
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
