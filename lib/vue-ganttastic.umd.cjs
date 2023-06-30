(function(T,Y){typeof exports=="object"&&typeof module<"u"?Y(exports,require("dayjs"),require("vue")):typeof define=="function"&&define.amd?define(["exports","dayjs","vue"],Y):(T=typeof globalThis<"u"?globalThis:T||self,Y(T.VueGanttastic={},T.dayjs,T.Vue))})(this,function(T,Y,t){"use strict";const A=(e=>e&&typeof e=="object"&&"default"in e?e:{default:e})(Y);var V=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},ot={exports:{}};(function(e,s){(function(o,m){e.exports=m()})(V,function(){return function(o,m){m.prototype.isSameOrBefore=function(l,d){return this.isSame(l,d)||this.isBefore(l,d)}}})})(ot);const St=ot.exports;var at={exports:{}};(function(e,s){(function(o,m){e.exports=m()})(V,function(){return function(o,m){m.prototype.isSameOrAfter=function(l,d){return this.isSame(l,d)||this.isAfter(l,d)}}})})(at);const Tt=at.exports;var it={exports:{}};(function(e,s){(function(o,m){e.exports=m()})(V,function(){return function(o,m,l){m.prototype.isBetween=function(d,u,g,f){var r=l(d),n=l(u),i=(f=f||"()")[0]==="(",c=f[1]===")";return(i?this.isAfter(r,g):!this.isBefore(r,g))&&(c?this.isBefore(n,g):!this.isAfter(n,g))||(i?this.isBefore(r,g):!this.isAfter(r,g))&&(c?this.isAfter(n,g):!this.isBefore(n,g))}}})})(it);const Mt=it.exports;var st={exports:{}};(function(e,s){(function(o,m){e.exports=m()})(V,function(){var o={LTS:"h:mm:ss A",LT:"h:mm A",L:"MM/DD/YYYY",LL:"MMMM D, YYYY",LLL:"MMMM D, YYYY h:mm A",LLLL:"dddd, MMMM D, YYYY h:mm A"},m=/(\[[^[]*\])|([-_:/.,()\s]+)|(A|a|YYYY|YY?|MM?M?M?|Do|DD?|hh?|HH?|mm?|ss?|S{1,3}|z|ZZ?)/g,l=/\d\d/,d=/\d\d?/,u=/\d*[^-_:/,()\s\d]+/,g={},f=function(b){return(b=+b)+(b>68?1900:2e3)},r=function(b){return function(B){this[b]=+B}},n=[/[+-]\d\d:?(\d\d)?|Z/,function(b){(this.zone||(this.zone={})).offset=function(B){if(!B||B==="Z")return 0;var v=B.match(/([+-]|\d\d)/g),h=60*v[1]+(+v[2]||0);return h===0?0:v[0]==="+"?-h:h}(b)}],i=function(b){var B=g[b];return B&&(B.indexOf?B:B.s.concat(B.f))},c=function(b,B){var v,h=g.meridiem;if(h){for(var p=1;p<=24;p+=1)if(b.indexOf(h(p,0,B))>-1){v=p>12;break}}else v=b===(B?"pm":"PM");return v},x={A:[u,function(b){this.afternoon=c(b,!1)}],a:[u,function(b){this.afternoon=c(b,!0)}],S:[/\d/,function(b){this.milliseconds=100*+b}],SS:[l,function(b){this.milliseconds=10*+b}],SSS:[/\d{3}/,function(b){this.milliseconds=+b}],s:[d,r("seconds")],ss:[d,r("seconds")],m:[d,r("minutes")],mm:[d,r("minutes")],H:[d,r("hours")],h:[d,r("hours")],HH:[d,r("hours")],hh:[d,r("hours")],D:[d,r("day")],DD:[l,r("day")],Do:[u,function(b){var B=g.ordinal,v=b.match(/\d+/);if(this.day=v[0],B)for(var h=1;h<=31;h+=1)B(h).replace(/\[|\]/g,"")===b&&(this.day=h)}],M:[d,r("month")],MM:[l,r("month")],MMM:[u,function(b){var B=i("months"),v=(i("monthsShort")||B.map(function(h){return h.slice(0,3)})).indexOf(b)+1;if(v<1)throw new Error;this.month=v%12||v}],MMMM:[u,function(b){var B=i("months").indexOf(b)+1;if(B<1)throw new Error;this.month=B%12||B}],Y:[/[+-]?\d+/,r("year")],YY:[l,function(b){this.year=f(b)}],YYYY:[/\d{4}/,r("year")],Z:n,ZZ:n};function C(b){var B,v;B=b,v=g&&g.formats;for(var h=(b=B.replace(/(\[[^\]]+])|(LTS?|l{1,4}|L{1,4})/g,function(k,O,D){var S=D&&D.toUpperCase();return O||v[D]||o[D]||v[S].replace(/(\[[^\]]+])|(MMMM|MM|DD|dddd)/g,function(M,L,$){return L||$.slice(1)})})).match(m),p=h.length,E=0;E<p;E+=1){var a=h[E],w=x[a],y=w&&w[0],_=w&&w[1];h[E]=_?{regex:y,parser:_}:a.replace(/^\[|\]$/g,"")}return function(k){for(var O={},D=0,S=0;D<p;D+=1){var M=h[D];if(typeof M=="string")S+=M.length;else{var L=M.regex,$=M.parser,I=k.slice(S),N=L.exec(I)[0];$.call(O,N),k=k.replace(N,"")}}return function(j){var G=j.afternoon;if(G!==void 0){var H=j.hours;G?H<12&&(j.hours+=12):H===12&&(j.hours=0),delete j.afternoon}}(O),O}}return function(b,B,v){v.p.customParseFormat=!0,b&&b.parseTwoDigitYear&&(f=b.parseTwoDigitYear);var h=B.prototype,p=h.parse;h.parse=function(E){var a=E.date,w=E.utc,y=E.args;this.$u=w;var _=y[1];if(typeof _=="string"){var k=y[2]===!0,O=y[3]===!0,D=k||O,S=y[2];O&&(S=y[2]),g=this.$locale(),!k&&S&&(g=v.Ls[S]),this.$d=function(I,N,j){try{if(["x","X"].indexOf(N)>-1)return new Date((N==="X"?1e3:1)*I);var G=C(N)(I),H=G.year,z=G.month,ce=G.day,de=G.hours,fe=G.minutes,ue=G.seconds,ge=G.milliseconds,Dt=G.zone,X=new Date,Z=ce||(H||z?1:X.getDate()),J=H||X.getFullYear(),q=0;H&&!z||(q=z>0?z-1:X.getMonth());var tt=de||0,et=fe||0,nt=ue||0,rt=ge||0;return Dt?new Date(Date.UTC(J,q,Z,tt,et,nt,rt+60*Dt.offset*1e3)):j?new Date(Date.UTC(J,q,Z,tt,et,nt,rt)):new Date(J,q,Z,tt,et,nt,rt)}catch{return new Date("")}}(a,_,w),this.init(),S&&S!==!0&&(this.$L=this.locale(S).$L),D&&a!=this.format(_)&&(this.$d=new Date("")),g={}}else if(_ instanceof Array)for(var M=_.length,L=1;L<=M;L+=1){y[1]=_[L-1];var $=v.apply(this,y);if($.isValid()){this.$d=$.$d,this.$L=$.$L,this.init();break}L===M&&(this.$d=new Date(""))}else p.call(this,E)}}})})(st);const Lt=st.exports,lt=Symbol("CHART_ROWS_KEY"),ct=Symbol("CONFIG_KEY"),dt=Symbol("EMIT_BAR_EVENT_KEY"),ft=Symbol("BAR_CONTAINER_KEY");function R(){const e=t.inject(ct);if(!e)throw Error("Failed to inject config!");return e}const ut="YYYY-MM-DD HH:mm";function F(e=R()){const{chartStart:s,chartEnd:o,barStart:m,barEnd:l,dateFormat:d}=e,u=t.computed(()=>f(s.value)),g=t.computed(()=>f(o.value)),f=(n,i)=>{let c;if(i!==void 0&&typeof n!="string"&&!(n instanceof Date)&&(c=i==="start"?n[m.value]:n[l.value]),typeof n=="string")c=n;else if(n instanceof Date)return A.default(n);const x=d.value||ut;return A.default(c,x,!0)};return{chartStartDayjs:u,chartEndDayjs:g,toDayjs:f,format:(n,i)=>i===!1?n instanceof Date?n:A.default(n).toDate():(typeof n=="string"||n instanceof Date?f(n):n).format(i)}}function gt(){const{precision:e}=R(),{chartStartDayjs:s,chartEndDayjs:o}=F(),m=t.computed(()=>{switch(e==null?void 0:e.value){case"hour":return"day";case"day":return"month";case"month":return"year";default:throw new Error("Precision prop incorrect. Must be one of the following: 'hour', 'day', 'month'")}}),l={hour:"HH",date:"DD.MMM ",day:"DD.MMM ",month:"MMMM YYYY",year:"YYYY"};return{timeaxisUnits:t.computed(()=>{const u=[],g=[],f=m.value==="day"?"date":m.value,r=e.value;let n=s.value.startOf(r);const i=o.value.diff(s.value,"minutes",!0);let c=0,x=n[f]();for(;n.isBefore(o.value)||n.isSame(o.value);){if(n[f]()!==x){let h=0;if(u.length===0)h=n.startOf(f).diff(s.value,"minutes",!0)/i*100;else if(n.isSameOrAfter(o.value))h=o.value.diff(n.subtract(1,f).startOf(f),"minutes",!0)/i*100;else{const E=n.startOf(f),a=n.subtract(1,f).startOf(f);h=E.diff(a,"minutes",!0)/i*100}const p=n.subtract(1,f);u.push({label:p.format(l[f]),value:String(x),date:p.toDate(),width:String(h)+"%"}),c=0,x=n[f]()}let B=0;g.length===0?B=n.endOf(r).diff(s.value,"minutes",!0)/i*100:n.add(1,r).isSameOrAfter(o.value)?B=o.value.diff(n.startOf(r),"minutes",!0)/i*100:B=n.endOf(r).diff(n.startOf(r),"minutes",!0)/i*100,g.push({label:n.format(l[r]),value:String(n[r==="day"?"date":r]()),date:n.toDate(),width:String(B)+"%"});const v=n;n=n.add(1,r),(n.isBefore(o.value)||n.isSame(o.value))&&(c+=n.diff(v,"minutes",!0))}const C=o.value.isSame(o.value.startOf(f))?o.value[f]()-1:o.value[f]();return u.some(B=>B.value===String(C))||(c+=o.value.diff(n.subtract(1,r),"minutes",!0),u.push({label:o.value.format(l[f]),value:String(x),date:o.value.toDate(),width:`${c/i*100}%`})),{upperUnits:u,lowerUnits:g}})}}const Rt={class:"g-timeaxis"},$t={class:"g-timeunits-container"},Gt={class:"g-timeunits-container"},It=t.defineComponent({__name:"GGanttTimeaxis",setup(e){const{precision:s,colors:o}=R(),{timeaxisUnits:m}=gt();return(l,d)=>(t.openBlock(),t.createElementBlock("div",Rt,[t.createElementVNode("div",$t,[(t.openBlock(!0),t.createElementBlock(t.Fragment,null,t.renderList(t.unref(m).upperUnits,({label:u,value:g,date:f,width:r},n)=>(t.openBlock(),t.createElementBlock("div",{key:u,class:"g-upper-timeunit",style:t.normalizeStyle({background:n%2===0?t.unref(o).primary:t.unref(o).secondary,color:t.unref(o).text,width:r})},[t.renderSlot(l.$slots,"upper-timeunit",{label:u,value:g,date:f},()=>[t.createTextVNode(t.toDisplayString(u),1)])],4))),128))]),t.createElementVNode("div",Gt,[(t.openBlock(!0),t.createElementBlock(t.Fragment,null,t.renderList(t.unref(m).lowerUnits,({label:u,value:g,date:f,width:r},n)=>(t.openBlock(),t.createElementBlock("div",{key:u,class:"g-timeunit",style:t.normalizeStyle({background:n%2===0?t.unref(o).ternary:t.unref(o).quartenary,color:t.unref(o).text,flexDirection:t.unref(s)==="hour"?"column":"row",alignItems:t.unref(s)==="hour"?"":"center",width:r})},[t.renderSlot(l.$slots,"timeunit",{label:u,value:g,date:f},()=>[t.createTextVNode(t.toDisplayString(u),1)]),t.unref(s)==="hour"?(t.openBlock(),t.createElementBlock("div",{key:0,class:"g-timeaxis-hour-pin",style:t.normalizeStyle({background:t.unref(o).text})},null,4)):t.createCommentVNode("",!0)],4))),128))])]))}}),me="",Yt={class:"g-grid-container"},At=t.defineComponent({__name:"GGanttGrid",props:{highlightedUnits:null},setup(e){const{colors:s}=R(),{timeaxisUnits:o}=gt();return(m,l)=>(t.openBlock(),t.createElementBlock("div",Yt,[(t.openBlock(!0),t.createElementBlock(t.Fragment,null,t.renderList(t.unref(o).lowerUnits,({label:d,value:u,width:g})=>{var f;return t.openBlock(),t.createElementBlock("div",{key:d,class:"g-grid-line",style:t.normalizeStyle({width:g,background:(f=e.highlightedUnits)!=null&&f.includes(Number(u))?t.unref(s).hoverHighlight:void 0})},null,4)}),128))]))}}),pe="",jt=t.defineComponent({__name:"GGanttBarTooltip",props:{bar:null,modelValue:{type:Boolean}},setup(e){const s=e,o={hour:"HH:mm",day:"DD. MMM HH:mm",month:"DD. MMMM YYYY"},m="cadetblue",{bar:l}=t.toRefs(s),{precision:d,font:u,barStart:g,barEnd:f,rowHeight:r}=R(),n=t.ref("0px"),i=t.ref("0px");t.watch(()=>s.bar,async()=>{var w;await t.nextTick();const v=((w=l==null?void 0:l.value)==null?void 0:w.ganttBarConfig.id)||"";if(!v)return;const h=document.getElementById(v),{top:p,left:E}=(h==null?void 0:h.getBoundingClientRect())||{top:0,left:0},a=Math.max(E,10);n.value=`${p+r.value-10}px`,i.value=`${a}px`},{deep:!0,immediate:!0});const c=t.computed(()=>{var v,h;return((h=(v=l==null?void 0:l.value)==null?void 0:v.ganttBarConfig.style)==null?void 0:h.background)||m}),{toDayjs:x}=F(),C=t.computed(()=>{var v;return(v=l.value)==null?void 0:v[g.value]}),b=t.computed(()=>{var v;return(v=l.value)==null?void 0:v[f.value]}),B=t.computed(()=>{if(!(l!=null&&l.value))return"";const v=o[d.value],h=x(C.value).format(v),p=x(b.value).format(v);return`${h} \u2013 ${p}`});return(v,h)=>(t.openBlock(),t.createBlock(t.Teleport,{to:"body"},[t.createVNode(t.Transition,{name:"g-fade",mode:"out-in"},{default:t.withCtx(()=>[e.modelValue?(t.openBlock(),t.createElementBlock("div",{key:0,class:"g-gantt-tooltip",style:t.normalizeStyle({top:n.value,left:i.value,fontFamily:t.unref(u)})},[t.createElementVNode("div",{class:"g-gantt-tooltip-color-dot",style:t.normalizeStyle({background:t.unref(c)})},null,4),t.renderSlot(v.$slots,"default",{bar:t.unref(l),barStart:t.unref(C),barEnd:t.unref(b)},()=>[t.createTextVNode(t.toDisplayString(t.unref(B)),1)])],4)):t.createCommentVNode("",!0)]),_:3})]))}}),he="",mt={default:{primary:"#eeeeee",secondary:"#E0E0E0",ternary:"#F5F5F5",quartenary:"#ededed",hoverHighlight:"rgba(204, 216, 219, 0.5)",text:"#404040",background:"white"},creamy:{primary:"#ffe8d9",secondary:"#fcdcc5",ternary:"#fff6f0",quartenary:"#f7ece6",hoverHighlight:"rgba(230, 221, 202, 0.5)",text:"#542d05",background:"white"},crimson:{primary:"#a82039",secondary:"#c41238",ternary:"#db4f56",quartenary:"#ce5f64",hoverHighlight:"rgba(196, 141, 141, 0.5)",text:"white",background:"white"},dark:{primary:"#404040",secondary:"#303030",ternary:"#353535",quartenary:"#383838",hoverHighlight:"rgba(159, 160, 161, 0.5)",text:"white",background:"#525252",toast:"#1f1f1f"},flare:{primary:"#e08a38",secondary:"#e67912",ternary:"#5e5145",quartenary:"#665648",hoverHighlight:"rgba(196, 141, 141, 0.5)",text:"white",background:"white"},fuchsia:{primary:"#de1d5a",secondary:"#b50b41",ternary:"#ff7da6",quartenary:"#f2799f",hoverHighlight:"rgba(196, 141, 141, 0.5)",text:"white",background:"white"},grove:{primary:"#3d9960",secondary:"#288542",ternary:"#72b585",quartenary:"#65a577",hoverHighlight:"rgba(160, 219, 171, 0.5)",text:"white",background:"white"},"material-blue":{primary:"#0D47A1",secondary:"#1565C0",ternary:"#42a5f5",quartenary:"#409fed",hoverHighlight:"rgba(110, 165, 196, 0.5)",text:"white",background:"white"},sky:{primary:"#b5e3ff",secondary:"#a1d6f7",ternary:"#d6f7ff",quartenary:"#d0edf4",hoverHighlight:"rgba(193, 202, 214, 0.5)",text:"#022c47",background:"white"},slumber:{primary:"#2a2f42",secondary:"#2f3447",ternary:"#35394d",quartenary:"#2c3044",hoverHighlight:"rgba(179, 162, 127, 0.5)",text:"#ffe0b3",background:"#38383b",toast:"#1f1f1f"},vue:{primary:"#258a5d",secondary:"#41B883",ternary:"#35495E",quartenary:"#2a3d51",hoverHighlight:"rgba(160, 219, 171, 0.5)",text:"white",background:"white"}};var pt;const P=typeof window<"u";P&&((pt=window==null?void 0:window.navigator)==null?void 0:pt.userAgent)&&/iP(ad|hone|od)/.test(window.navigator.userAgent);function Nt(e){return typeof e=="function"?e():t.unref(e)}function Ht(e){return e}function Ft(e){return t.getCurrentScope()?(t.onScopeDispose(e),!0):!1}function Pt(e,s=!0){t.getCurrentInstance()?t.onMounted(e):s?e():t.nextTick(e)}function ht(e){var s;const o=Nt(e);return(s=o==null?void 0:o.$el)!=null?s:o}const Ut=P?window:void 0;P&&window.document,P&&window.navigator,P&&window.location;function Vt(e,s=!1){const o=t.ref(),m=()=>o.value=Boolean(e());return m(),Pt(m,s),o}const W=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},K="__vueuse_ssr_handlers__";W[K]=W[K]||{},W[K];var yt=Object.getOwnPropertySymbols,zt=Object.prototype.hasOwnProperty,qt=Object.prototype.propertyIsEnumerable,Wt=(e,s)=>{var o={};for(var m in e)zt.call(e,m)&&s.indexOf(m)<0&&(o[m]=e[m]);if(e!=null&&yt)for(var m of yt(e))s.indexOf(m)<0&&qt.call(e,m)&&(o[m]=e[m]);return o};function Kt(e,s,o={}){const m=o,{window:l=Ut}=m,d=Wt(m,["window"]);let u;const g=Vt(()=>l&&"ResizeObserver"in l),f=()=>{u&&(u.disconnect(),u=void 0)},r=t.watch(()=>ht(e),i=>{f(),g.value&&l&&i&&(u=new ResizeObserver(s),u.observe(i,d))},{immediate:!0,flush:"post"}),n=()=>{f(),r()};return Ft(n),{isSupported:g,stop:n}}function Qt(e,s={width:0,height:0},o={}){const m=t.ref(s.width),l=t.ref(s.height);return Kt(e,([d])=>{m.value=d.contentRect.width,l.value=d.contentRect.height},o),t.watch(()=>ht(e),d=>{m.value=d?s.width:0,l.value=d?s.height:0}),{width:m,height:l}}var bt;(function(e){e.UP="UP",e.RIGHT="RIGHT",e.DOWN="DOWN",e.LEFT="LEFT",e.NONE="NONE"})(bt||(bt={}));var Xt=Object.defineProperty,wt=Object.getOwnPropertySymbols,Zt=Object.prototype.hasOwnProperty,Jt=Object.prototype.propertyIsEnumerable,Bt=(e,s,o)=>s in e?Xt(e,s,{enumerable:!0,configurable:!0,writable:!0,value:o}):e[s]=o,te=(e,s)=>{for(var o in s||(s={}))Zt.call(s,o)&&Bt(e,o,s[o]);if(wt)for(var o of wt(s))Jt.call(s,o)&&Bt(e,o,s[o]);return e};te({linear:Ht},{easeInSine:[.12,0,.39,0],easeOutSine:[.61,1,.88,1],easeInOutSine:[.37,0,.63,1],easeInQuad:[.11,0,.5,0],easeOutQuad:[.5,1,.89,1],easeInOutQuad:[.45,0,.55,1],easeInCubic:[.32,0,.67,0],easeOutCubic:[.33,1,.68,1],easeInOutCubic:[.65,0,.35,1],easeInQuart:[.5,0,.75,0],easeOutQuart:[.25,1,.5,1],easeInOutQuart:[.76,0,.24,1],easeInQuint:[.64,0,.78,0],easeOutQuint:[.22,1,.36,1],easeInOutQuint:[.83,0,.17,1],easeInExpo:[.7,0,.84,0],easeOutExpo:[.16,1,.3,1],easeInOutExpo:[.87,0,.13,1],easeInCirc:[.55,0,1,.45],easeOutCirc:[0,.55,.45,1],easeInOutCirc:[.85,0,.15,1],easeInBack:[.36,0,.66,-.56],easeOutBack:[.34,1.56,.64,1],easeInOutBack:[.68,-.6,.32,1.6]});const ee={class:"g-gantt-rows-container"},vt=t.defineComponent({__name:"GGanttChart",props:{chartStart:null,chartEnd:null,precision:{default:"day"},barStart:null,barEnd:null,dateFormat:{type:[String,Boolean],default:ut},width:{default:"100%"},hideTimeaxis:{type:Boolean,default:!1},colorScheme:{default:"default"},grid:{type:Boolean,default:!1},pushOnOverlap:{type:Boolean,default:!1},noOverlap:{type:Boolean,default:!1},rowHeight:{default:40},highlightedUnits:{default:()=>[]},font:{default:"inherit"}},emits:["click-bar","mousedown-bar","mouseup-bar","dblclick-bar","mouseenter-bar","mouseleave-bar","dragstart-bar","drag-bar","dragend-bar","contextmenu-bar"],setup(e,{emit:s}){const o=e,{width:m,font:l,colorScheme:d}=t.toRefs(o),u=t.useSlots(),g=t.computed(()=>typeof d.value!="string"?d.value:mt[d.value]||mt.default),f=()=>{var E;const h=(E=u.default)==null?void 0:E.call(u),p=[];return h&&h.forEach(a=>{var w;if((w=a.props)!=null&&w.bars){const y=a.props.bars;p.push(y)}else Array.isArray(a.children)&&a.children.forEach(y=>{var k;const _=y;if((k=_==null?void 0:_.props)!=null&&k.bars){const O=_.props.bars;p.push(O)}})}),p},r=t.ref(!1),n=t.ref(!1),i=t.ref(void 0);let c;const x=h=>{c&&clearTimeout(c),c=setTimeout(()=>{r.value=!0},800),i.value=h},C=()=>{clearTimeout(c),r.value=!1},b=(h,p,E,a)=>{switch(h.type){case"click":s("click-bar",{bar:p,e:h,datetime:E});break;case"mousedown":s("mousedown-bar",{bar:p,e:h,datetime:E});break;case"mouseup":s("mouseup-bar",{bar:p,e:h,datetime:E});break;case"dblclick":s("dblclick-bar",{bar:p,e:h,datetime:E});break;case"mouseenter":x(p),s("mouseenter-bar",{bar:p,e:h});break;case"mouseleave":C(),s("mouseleave-bar",{bar:p,e:h});break;case"dragstart":n.value=!0,s("dragstart-bar",{bar:p,e:h});break;case"drag":s("drag-bar",{bar:p,e:h});break;case"dragend":n.value=!1,s("dragend-bar",{bar:p,e:h,movedBars:a});break;case"contextmenu":s("contextmenu-bar",{bar:p,e:h,datetime:E});break}},B=t.ref(null),v=Qt(B);return t.provide(lt,f),t.provide(ct,{...t.toRefs(o),colors:g,chartSize:v}),t.provide(dt,b),(h,p)=>(t.openBlock(),t.createElementBlock("div",{ref_key:"ganttChart",ref:B,class:"g-gantt-chart",style:t.normalizeStyle({width:t.unref(m),background:t.unref(g).background,fontFamily:t.unref(l)})},[e.hideTimeaxis?t.createCommentVNode("",!0):(t.openBlock(),t.createBlock(It,{key:0},{"upper-timeunit":t.withCtx(({label:E,value:a,date:w})=>[t.renderSlot(h.$slots,"upper-timeunit",{label:E,value:a,date:w})]),timeunit:t.withCtx(({label:E,value:a,date:w})=>[t.renderSlot(h.$slots,"timeunit",{label:E,value:a,date:w})]),_:3})),e.grid?(t.openBlock(),t.createBlock(At,{key:1,"highlighted-units":e.highlightedUnits},null,8,["highlighted-units"])):t.createCommentVNode("",!0),t.createElementVNode("div",ee,[t.renderSlot(h.$slots,"default")]),t.createVNode(jt,{"model-value":r.value||n.value,bar:i.value},{default:t.withCtx(()=>[t.renderSlot(h.$slots,"bar-tooltip",{bar:i.value})]),_:3},8,["model-value","bar"])],4))}}),be="";function Q(e=R()){const{dateFormat:s,chartSize:o}=e,{chartStartDayjs:m,chartEndDayjs:l,toDayjs:d,format:u}=F(e),g=t.computed(()=>l.value.diff(m.value,"minutes"));return{mapTimeToPosition:n=>{const i=o.width.value||0,c=d(n).diff(m.value,"minutes",!0);return Math.ceil(c/g.value*i)},mapPositionToTime:n=>{const i=o.width.value||0,c=n/i*g.value;return u(m.value.add(c,"minutes"),s.value)}}}function xt(e,s=()=>null,o=()=>null,m=R()){const{barStart:l,barEnd:d,pushOnOverlap:u}=m,g=t.ref(!1);let f=0,r;const{mapPositionToTime:n}=Q(m),{toDayjs:i}=F(m),c=p=>{const E=document.getElementById(e.ganttBarConfig.id);if(!E)return;switch(f=p.clientX-(E.getBoundingClientRect().left||0),p.target.className){case"g-gantt-bar-handle-left":document.body.style.cursor="ew-resize",r=b;break;case"g-gantt-bar-handle-right":document.body.style.cursor="ew-resize",r=B;break;default:r=C}g.value=!0,window.addEventListener("mousemove",r),window.addEventListener("mouseup",h)},x=()=>{var a;const p=document.getElementById(e.ganttBarConfig.id),E=(a=p==null?void 0:p.closest(".g-gantt-row-bars-container"))==null?void 0:a.getBoundingClientRect();return{barElement:p,barContainer:E}},C=p=>{const{barElement:E,barContainer:a}=x();if(!E||!a)return;const w=E.getBoundingClientRect().width,y=p.clientX-a.left-f,_=y+w;v(y,_)||(e[l.value]=n(y),e[d.value]=n(_),s(p,e))},b=p=>{const{barElement:E,barContainer:a}=x();if(!E||!a)return;const w=p.clientX-a.left,y=n(w);i(y).isSameOrAfter(i(e,"end"))||(e[l.value]=y,s(p,e))},B=p=>{const{barElement:E,barContainer:a}=x();if(!E||!a)return;const w=p.clientX-a.left,y=n(w);i(y).isSameOrBefore(i(e,"start"))||(e[d.value]=y,s(p,e))},v=(p,E)=>{if(!u.value)return!1;const a=e.ganttBarConfig.dragLimitLeft,w=e.ganttBarConfig.dragLimitRight;return p&&a!=null&&p<a||E&&w!=null&&E>w},h=p=>{g.value=!1,document.body.style.cursor="",window.removeEventListener("mousemove",r),window.removeEventListener("mouseup",h),o(p,e)};return{isDragging:g,initDrag:c}}function Et(){const e=t.inject(lt);if(!e)throw Error("Failed to inject getChartRows!");return e}function _t(){const e=t.inject(dt);if(!e)throw Error("Failed to inject emitBarEvent!");return e}function ne(){const e=R(),s=Et(),o=_t(),{pushOnOverlap:m,barStart:l,barEnd:d,noOverlap:u,dateFormat:g}=e,f=new Map,{toDayjs:r,format:n}=F(),i=(a,w)=>{const{initDrag:y}=xt(a,x,h,e);o({...w,type:"dragstart"},a),y(w),p(a)},c=(a,w)=>{const y=a.ganttBarConfig.bundle;y!=null&&(s().forEach(_=>{_.forEach(k=>{if(k.ganttBarConfig.bundle===y){const O=k===a?h:()=>null,{initDrag:D}=xt(k,x,O,e);D(w),p(k)}})}),o({...w,type:"dragstart"},a))},x=(a,w)=>{o({...a,type:"drag"},w),C(w)},C=a=>{if(!(m!=null&&m.value))return;let w=a,{overlapBar:y,overlapType:_}=b(w);for(;y;){p(y);const k=r(w[l.value]),O=r(w[d.value]),D=r(y[l.value]),S=r(y[d.value]);let M;switch(_){case"left":M=S.diff(k,"minutes",!0),y[d.value]=n(w[l.value],g.value),y[l.value]=n(D.subtract(M,"minutes"),g.value);break;case"right":M=O.diff(D,"minutes",!0),y[l.value]=n(O,g.value),y[d.value]=n(S.add(M,"minutes"),g.value);break;default:console.warn("Vue-Ganttastic: One bar is inside of the other one! This should never occur while push-on-overlap is active!");return}y&&(_==="left"||_==="right")&&B(y,M,_),w=y,{overlapBar:y,overlapType:_}=b(y)}},b=a=>{let w,y,_;const k=s().find(L=>L.includes(a))||[],O=r(a[l.value]),D=r(a[d.value]);return{overlapBar:k.find(L=>{if(L===a)return!1;const $=r(L[l.value]),I=r(L[d.value]);return w=O.isBetween($,I),y=D.isBetween($,I),_=$.isBetween(O,D)||I.isBetween(O,D),w||y||_}),overlapType:w?"left":y?"right":_?"between":null}},B=(a,w,y)=>{p(a),a.ganttBarConfig.bundle&&s().forEach(_=>{_.forEach(k=>{k.ganttBarConfig.bundle===a.ganttBarConfig.bundle&&k!==a&&(p(k),v(k,w,y))})})},v=(a,w,y)=>{switch(y){case"left":a[l.value]=n(r(a,"start").subtract(w,"minutes"),g.value),a[d.value]=n(r(a,"end").subtract(w,"minutes"),g.value);break;case"right":a[l.value]=n(r(a,"start").add(w,"minutes"),g.value),a[d.value]=n(r(a,"end").add(w,"minutes"),g.value)}C(a)},h=(a,w)=>{E();const y={...a,type:"dragend"};o(y,w,void 0,new Map(f)),f.clear()},p=a=>{if(!f.has(a)){const w=a[l.value],y=a[d.value];f.set(a,{oldStart:w,oldEnd:y})}},E=()=>{if(m.value||!u.value)return;let a=!1;f.forEach((w,y)=>{const{overlapBar:_}=b(y);_!=null&&(a=!0)}),a&&f.forEach(({oldStart:w,oldEnd:y},_)=>{_[l.value]=w,_[d.value]=y})};return{initDragOfBar:i,initDragOfBundle:c}}function re(){const{pushOnOverlap:e}=R(),s=Et(),o=u=>{const g=[];return u!=null&&s().forEach(f=>{f.forEach(r=>{r.ganttBarConfig.bundle===u&&g.push(r)})}),g},m=u=>{if(!e.value||u.ganttBarConfig.pushOnOverlap===!1)return;for(const f of["left","right"]){const r=f,{gapDistanceSoFar:n,bundleBarsAndGapDist:i}=l(u,0,r);let c=n;const x=i;if(!x)continue;for(let b=0;b<x.length;b++){const B=x[b].bar,v=x[b].gapDistance;o(B.ganttBarConfig.bundle).filter(p=>p!==B).forEach(p=>{const E=l(p,v,r),a=E.gapDistanceSoFar,w=E.bundleBarsAndGapDist;a!=null&&(!c||a<c)&&(c=a),w.forEach(y=>{x.find(_=>_.bar===y.bar)||x.push(y)})})}const C=document.getElementById(u.ganttBarConfig.id);c!=null&&r==="left"?u.ganttBarConfig.dragLimitLeft=C.offsetLeft-c:c!=null&&r==="right"&&(u.ganttBarConfig.dragLimitRight=C.offsetLeft+C.offsetWidth+c)}o(u.ganttBarConfig.bundle).forEach(f=>{f.ganttBarConfig.dragLimitLeft=u.ganttBarConfig.dragLimitLeft,f.ganttBarConfig.dragLimitRight=u.ganttBarConfig.dragLimitRight})},l=(u,g=0,f)=>{const r=u.ganttBarConfig.bundle?[{bar:u,gapDistance:g}]:[];let n=u,i=d(n,f);if(f==="left")for(;i;){const c=document.getElementById(n.ganttBarConfig.id),x=document.getElementById(i.ganttBarConfig.id),C=x.offsetLeft+x.offsetWidth;if(g+=c.offsetLeft-C,i.ganttBarConfig.immobile)return{gapDistanceSoFar:g,bundleBarsAndGapDist:r};i.ganttBarConfig.bundle&&r.push({bar:i,gapDistance:g}),n=i,i=d(i,"left")}if(f==="right")for(;i;){const c=document.getElementById(n.ganttBarConfig.id),x=document.getElementById(i.ganttBarConfig.id),C=c.offsetLeft+c.offsetWidth;if(g+=x.offsetLeft-C,i.ganttBarConfig.immobile)return{gapDistanceSoFar:g,bundleBarsAndGapDist:r};i.ganttBarConfig.bundle&&r.push({bar:i,gapDistance:g}),n=i,i=d(i,"right")}return{gapDistanceSoFar:null,bundleBarsAndGapDist:r}},d=(u,g)=>{const f=document.getElementById(u.ganttBarConfig.id),r=s().find(i=>i.includes(u))||[];let n=[];return g==="left"?n=r.filter(i=>{const c=document.getElementById(i.ganttBarConfig.id);return c&&c.offsetLeft<f.offsetLeft&&i.ganttBarConfig.pushOnOverlap!==!1}):n=r.filter(i=>{const c=document.getElementById(i.ganttBarConfig.id);return c&&c.offsetLeft>f.offsetLeft&&i.ganttBarConfig.pushOnOverlap!==!1}),n.length>0?n.reduce((i,c)=>{const x=document.getElementById(i.ganttBarConfig.id),C=document.getElementById(c.ganttBarConfig.id),b=Math.abs(x.offsetLeft-f.offsetLeft),B=Math.abs(C.offsetLeft-f.offsetLeft);return b<B?i:c},n[0]):null};return{setDragLimitsOfGanttBar:m}}const oe=["id"],ae={class:"g-gantt-bar-label"},ie=t.createElementVNode("div",{class:"g-gantt-bar-handle-left"},null,-1),se=t.createElementVNode("div",{class:"g-gantt-bar-handle-right"},null,-1),le=t.defineComponent({__name:"GGanttBar",props:{bar:null},setup(e){const s=e,o=_t(),m=R(),{rowHeight:l}=m,{bar:d}=t.toRefs(s),{mapTimeToPosition:u,mapPositionToTime:g}=Q(),{initDragOfBar:f,initDragOfBundle:r}=ne(),{setDragLimitsOfGanttBar:n}=re(),i=t.ref(!1),c=t.computed(()=>d.value.ganttBarConfig);function x(k){c.value.bundle!=null?r(d.value,k):f(d.value,k),i.value=!0}const C=()=>{n(d.value),!c.value.immobile&&(window.addEventListener("mousemove",x,{once:!0}),window.addEventListener("mouseup",()=>{window.removeEventListener("mousemove",x),i.value=!1},{once:!0}))},b=t.inject(ft),B=k=>{var S;k.preventDefault(),k.type==="mousedown"&&C();const O=(S=b==null?void 0:b.value)==null?void 0:S.getBoundingClientRect();if(!O)return;const D=g(k.clientX-O.left);o(k,d.value,D)},{barStart:v,barEnd:h,width:p,chartStart:E,chartEnd:a,chartSize:w}=m,y=t.ref(0),_=t.ref(0);return t.onMounted(()=>{t.watch([d,p,E,a,w.width],()=>{y.value=u(d.value[v.value]),_.value=u(d.value[h.value])},{deep:!0,immediate:!0})}),(k,O)=>(t.openBlock(),t.createElementBlock("div",{id:t.unref(c).id,class:"g-gantt-bar",style:t.normalizeStyle({...t.unref(c).style,position:"absolute",top:`${t.unref(l)*.1}px`,left:`${y.value}px`,width:`${_.value-y.value}px`,height:`${t.unref(l)*.8}px`,zIndex:i.value?3:2}),onMousedown:B,onClick:B,onDblclick:B,onMouseenter:B,onMouseleave:B,onContextmenu:B},[t.createElementVNode("div",ae,[t.renderSlot(k.$slots,"default",{bar:t.unref(d)},()=>[t.createElementVNode("div",null,t.toDisplayString(t.unref(c).label||""),1)])]),t.unref(c).hasHandles?(t.openBlock(),t.createElementBlock(t.Fragment,{key:0},[ie,se],64)):t.createCommentVNode("",!0)],44,oe))}}),we="",kt=t.defineComponent({__name:"GGanttRow",props:{label:null,bars:null,highlightOnHover:{type:Boolean}},emits:["drop"],setup(e,{emit:s}){const o=e,{rowHeight:m,colors:l}=R(),{highlightOnHover:d}=t.toRefs(o),u=t.ref(!1),g=t.computed(()=>({height:`${m.value}px`,background:(d==null?void 0:d.value)&&u.value?l.value.hoverHighlight:null})),{mapPositionToTime:f}=Q(),r=t.ref(null);t.provide(ft,r);const n=i=>{var b;const c=(b=r.value)==null?void 0:b.getBoundingClientRect();if(!c){console.error("Vue-Ganttastic: failed to find bar container element for row.");return}const x=i.clientX-c.left,C=f(x);s("drop",{e:i,datetime:C})};return(i,c)=>(t.openBlock(),t.createElementBlock("div",{class:"g-gantt-row",style:t.normalizeStyle(t.unref(g)),onDragover:c[0]||(c[0]=t.withModifiers(x=>u.value=!0,["prevent"])),onDragleave:c[1]||(c[1]=x=>u.value=!1),onDrop:c[2]||(c[2]=x=>n(x)),onMouseover:c[3]||(c[3]=x=>u.value=!0),onMouseleave:c[4]||(c[4]=x=>u.value=!1)},[t.createElementVNode("div",{class:"g-gantt-row-label",style:t.normalizeStyle({background:t.unref(l).primary,color:t.unref(l).text})},[t.renderSlot(i.$slots,"label",{},()=>[t.createTextVNode(t.toDisplayString(e.label),1)])],4),t.createElementVNode("div",t.mergeProps({ref_key:"barContainer",ref:r,class:"g-gantt-row-bars-container"},i.$attrs),[t.createVNode(t.TransitionGroup,{name:"bar-transition",tag:"div"},{default:t.withCtx(()=>[(t.openBlock(!0),t.createElementBlock(t.Fragment,null,t.renderList(e.bars,x=>(t.openBlock(),t.createBlock(le,{key:x.ganttBarConfig.id,bar:x},{default:t.withCtx(()=>[t.renderSlot(i.$slots,"bar-label",{bar:x})]),_:2},1032,["bar"]))),128))]),_:3})],16)],36))}}),Be="";function Ct(){A.default.extend(St),A.default.extend(Tt),A.default.extend(Mt),A.default.extend(Lt)}const Ot={install(e,s){Ct(),e.component("GGanttChart",vt),e.component("GGanttRow",kt)}};T.GGanttChart=vt,T.GGanttRow=kt,T.default=Ot,T.extendDayjs=Ct,T.ganttastic=Ot,Object.defineProperties(T,{__esModule:{value:!0},[Symbol.toStringTag]:{value:"Module"}})});function injectStyle(T,Y="top"){if(!T||typeof document>"u")return;const t=document.head,U=document.createElement("style");Y==="top"&&t.firstChild?t.insertBefore(U,t.firstChild):t.appendChild(U),U.appendChild(document.createTextNode(T))}injectStyle(`
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
