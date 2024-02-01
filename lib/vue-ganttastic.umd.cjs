(function(T,I){typeof exports=="object"&&typeof module<"u"?I(exports,require("dayjs"),require("vue")):typeof define=="function"&&define.amd?define(["exports","dayjs","vue"],I):(T=typeof globalThis<"u"?globalThis:T||self,I(T.VueGanttastic={},T.dayjs,T.Vue))})(this,function(T,I,t){"use strict";const R=(e=>e&&typeof e=="object"&&"default"in e?e:{default:e})(I);var U=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},at={exports:{}};(function(e,l){(function(a,f){e.exports=f()})(U,function(){return function(a,f){f.prototype.isSameOrBefore=function(s,d){return this.isSame(s,d)||this.isBefore(s,d)}}})})(at);const Tt=at.exports;var it={exports:{}};(function(e,l){(function(a,f){e.exports=f()})(U,function(){return function(a,f){f.prototype.isSameOrAfter=function(s,d){return this.isSame(s,d)||this.isAfter(s,d)}}})})(it);const Lt=it.exports;var st={exports:{}};(function(e,l){(function(a,f){e.exports=f()})(U,function(){return function(a,f,s){f.prototype.isBetween=function(d,m,g,p){var o=s(d),n=s(m),i=(p=p||"()")[0]==="(",c=p[1]===")";return(i?this.isAfter(o,g):!this.isBefore(o,g))&&(c?this.isBefore(n,g):!this.isAfter(n,g))||(i?this.isBefore(o,g):!this.isAfter(o,g))&&(c?this.isAfter(n,g):!this.isBefore(n,g))}}})})(st);const Mt=st.exports;var lt={exports:{}};(function(e,l){(function(a,f){e.exports=f()})(U,function(){var a={LTS:"h:mm:ss A",LT:"h:mm A",L:"MM/DD/YYYY",LL:"MMMM D, YYYY",LLL:"MMMM D, YYYY h:mm A",LLLL:"dddd, MMMM D, YYYY h:mm A"},f=/(\[[^[]*\])|([-_:/.,()\s]+)|(A|a|YYYY|YY?|MM?M?M?|Do|DD?|hh?|HH?|mm?|ss?|S{1,3}|z|ZZ?)/g,s=/\d\d/,d=/\d\d?/,m=/\d*[^-_:/,()\s\d]+/,g={},p=function(y){return(y=+y)+(y>68?1900:2e3)},o=function(y){return function(w){this[y]=+w}},n=[/[+-]\d\d:?(\d\d)?|Z/,function(y){(this.zone||(this.zone={})).offset=function(w){if(!w||w==="Z")return 0;var k=w.match(/([+-]|\d\d)/g),_=60*k[1]+(+k[2]||0);return _===0?0:k[0]==="+"?-_:_}(y)}],i=function(y){var w=g[y];return w&&(w.indexOf?w:w.s.concat(w.f))},c=function(y,w){var k,_=g.meridiem;if(_){for(var u=1;u<=24;u+=1)if(y.indexOf(_(u,0,w))>-1){k=u>12;break}}else k=y===(w?"pm":"PM");return k},x={A:[m,function(y){this.afternoon=c(y,!1)}],a:[m,function(y){this.afternoon=c(y,!0)}],S:[/\d/,function(y){this.milliseconds=100*+y}],SS:[s,function(y){this.milliseconds=10*+y}],SSS:[/\d{3}/,function(y){this.milliseconds=+y}],s:[d,o("seconds")],ss:[d,o("seconds")],m:[d,o("minutes")],mm:[d,o("minutes")],H:[d,o("hours")],h:[d,o("hours")],HH:[d,o("hours")],hh:[d,o("hours")],D:[d,o("day")],DD:[s,o("day")],Do:[m,function(y){var w=g.ordinal,k=y.match(/\d+/);if(this.day=k[0],w)for(var _=1;_<=31;_+=1)w(_).replace(/\[|\]/g,"")===y&&(this.day=_)}],M:[d,o("month")],MM:[s,o("month")],MMM:[m,function(y){var w=i("months"),k=(i("monthsShort")||w.map(function(_){return _.slice(0,3)})).indexOf(y)+1;if(k<1)throw new Error;this.month=k%12||k}],MMMM:[m,function(y){var w=i("months").indexOf(y)+1;if(w<1)throw new Error;this.month=w%12||w}],Y:[/[+-]?\d+/,o("year")],YY:[s,function(y){this.year=p(y)}],YYYY:[/\d{4}/,o("year")],Z:n,ZZ:n};function D(y){var w,k;w=y,k=g&&g.formats;for(var _=(y=w.replace(/(\[[^\]]+])|(LTS?|l{1,4}|L{1,4})/g,function(C,v,S){var O=S&&S.toUpperCase();return v||k[S]||a[S]||k[O].replace(/(\[[^\]]+])|(MMMM|MM|DD|dddd)/g,function(L,M,Y){return M||Y.slice(1)})})).match(f),u=_.length,B=0;B<u;B+=1){var r=_[B],h=x[r],b=h&&h[0],E=h&&h[1];_[B]=E?{regex:b,parser:E}:r.replace(/^\[|\]$/g,"")}return function(C){for(var v={},S=0,O=0;S<u;S+=1){var L=_[S];if(typeof L=="string")O+=L.length;else{var M=L.regex,Y=L.parser,H=C.slice(O),z=M.exec(H)[0];Y.call(v,z),C=C.replace(z,"")}}return function(N){var $=N.afternoon;if($!==void 0){var A=N.hours;$?A<12&&(N.hours+=12):A===12&&(N.hours=0),delete N.afternoon}}(v),v}}return function(y,w,k){k.p.customParseFormat=!0,y&&y.parseTwoDigitYear&&(p=y.parseTwoDigitYear);var _=w.prototype,u=_.parse;_.parse=function(B){var r=B.date,h=B.utc,b=B.args;this.$u=h;var E=b[1];if(typeof E=="string"){var C=b[2]===!0,v=b[3]===!0,S=C||v,O=b[2];v&&(O=b[2]),g=this.$locale(),!C&&O&&(g=k.Ls[O]),this.$d=function(H,z,N){try{if(["x","X"].indexOf(z)>-1)return new Date((z==="X"?1e3:1)*H);var $=D(z)(H),A=$.year,W=$.month,be=$.day,we=$.hours,Be=$.minutes,xe=$.seconds,ke=$.milliseconds,Ot=$.zone,Z=new Date,J=be||(A||W?1:Z.getDate()),tt=A||Z.getFullYear(),X=0;A&&!W||(X=W>0?W-1:Z.getMonth());var et=we||0,nt=Be||0,ot=xe||0,rt=ke||0;return Ot?new Date(Date.UTC(tt,X,J,et,nt,ot,rt+60*Ot.offset*1e3)):N?new Date(Date.UTC(tt,X,J,et,nt,ot,rt)):new Date(tt,X,J,et,nt,ot,rt)}catch{return new Date("")}}(r,E,h),this.init(),O&&O!==!0&&(this.$L=this.locale(O).$L),S&&r!=this.format(E)&&(this.$d=new Date("")),g={}}else if(E instanceof Array)for(var L=E.length,M=1;M<=L;M+=1){b[1]=E[M-1];var Y=k.apply(this,b);if(Y.isValid()){this.$d=Y.$d,this.$L=Y.$L,this.init();break}M===L&&(this.$d=new Date(""))}else u.call(this,B)}}})})(lt);const Gt=lt.exports,ct=Symbol("CHART_ROWS_KEY"),dt=Symbol("CONFIG_KEY"),ft=Symbol("EMIT_BAR_EVENT_KEY"),ut=Symbol("BAR_CONTAINER_KEY");function G(){const e=t.inject(dt);if(!e)throw Error("Failed to inject config!");return e}const mt="YYYY-MM-DD HH:mm";function j(e=G()){const{chartStart:l,chartEnd:a,barStart:f,barEnd:s,dateFormat:d}=e,m=t.computed(()=>p(l.value)),g=t.computed(()=>p(a.value)),p=(n,i)=>{let c;if(i!==void 0&&typeof n!="string"&&!(n instanceof Date)&&(c=i==="start"?n[f.value]:n[s.value]),typeof n=="string")c=n;else if(n instanceof Date)return R.default(n);const x=d.value||mt;return R.default(c,x,!0)};return{chartStartDayjs:m,chartEndDayjs:g,toDayjs:p,format:(n,i)=>i===!1?n instanceof Date?n:R.default(n).toDate():(typeof n=="string"||n instanceof Date?p(n):n).format(i)}}function q(){const{precision:e}=G(),{chartStartDayjs:l,chartEndDayjs:a}=j(),f=t.computed(()=>{switch(e==null?void 0:e.value){case"hour":return"day";case"day":return"month";case"week":return"month";case"month":return"year";default:throw new Error("Precision prop incorrect. Must be one of the following: 'hour', 'day', 'month'")}}),s={hour:"HH",date:"DD.MMM ",day:"DD",week:"DD",month:"MMMM YYYY",year:"YYYY"};return{timeaxisUnits:t.computed(()=>{const m=[],g=[],p=f.value==="day"?"date":f.value,o=e.value;let n=l.value.startOf(o);const i=a.value.diff(l.value,"minutes",!0);let c=0,x=n[p]();for(;n.isBefore(a.value)||n.isSame(a.value);){if(n[p]()!==x){let u=0;if(m.length===0)u=n.startOf(p).diff(l.value,"minutes",!0)/i*100;else if(n.isSameOrAfter(a.value))u=a.value.diff(n.subtract(1,p).startOf(p),"minutes",!0)/i*100;else{const r=n.startOf(p),h=n.subtract(1,p).startOf(p);u=r.diff(h,"minutes",!0)/i*100}const B=n.subtract(1,p);m.push({label:B.format(s[p]),value:String(x),date:B.toDate(),width:String(u)+"%"}),c=0,x=n[p]()}let w=0;g.length===0?w=n.endOf(o).diff(l.value,"minutes",!0)/i*100:n.add(1,o).isSameOrAfter(a.value)?w=a.value.diff(n.startOf(o),"minutes",!0)/i*100:w=n.endOf(o).diff(n.startOf(o),"minutes",!0)/i*100;let k;switch(o){case"week":k=n.startOf("week");break;default:k=n[o==="day"?"date":o]()}g.push({label:n.format(s[o]),value:String(k),date:n.toDate(),width:String(w)+"%"});const _=n;n=n.add(1,o),(n.isBefore(a.value)||n.isSame(a.value))&&(c+=n.diff(_,"minutes",!0))}const D=a.value.isSame(a.value.startOf(p))?a.value[p]()-1:a.value[p]();return m.some(w=>w.value===String(D))||(c+=a.value.diff(n.subtract(1,o),"minutes",!0),m.push({label:a.value.format(s[p]),value:String(x),date:a.value.toDate(),width:`${c/i*100}%`})),{upperUnits:m,lowerUnits:g}})}}function V(e=G()){const{dateFormat:l,chartSize:a}=e,{chartStartDayjs:f,chartEndDayjs:s,toDayjs:d,format:m}=j(e),g=t.computed(()=>s.value.diff(f.value,"minutes"));return{mapTimeToPosition:n=>{const i=a.width.value||0,c=d(n).diff(f.value,"minutes",!0);return Math.ceil(c/g.value*i)},mapPositionToTime:n=>{const i=a.width.value||0,c=n/i*g.value,x=m(f.value.add(c,"minutes"),l.value);if(typeof x=="string")return x;throw Error}}}const Yt={class:"g-timeaxis"},$t=["onClick"],Rt=t.createElementVNode("p",{class:"milestone-description milestone-description-mark"},"\u25BC",-1),Ht=["onClick"],It=t.defineComponent({__name:"GGanttTimeaxis",props:{mileStoneList:null},emits:["onClickTimeUnit","onClickMilestone"],setup(e,{emit:l}){const a=e,{precision:f,colors:s}=G(),{timeaxisUnits:d}=q(),m=()=>{var o;return((o=a.mileStoneList)==null?void 0:o.length)>0?{minHeight:"33%"}:{height:"50%"}},{mapTimeToPosition:g}=V(),p=o=>g(R.default(o).startOf("day").format("DD.MM.YYYY HH:mm"));return(o,n)=>{var i;return t.openBlock(),t.createElementBlock("div",Yt,[t.createElementVNode("div",{class:"g-timeunits-container",style:m},[(t.openBlock(!0),t.createElementBlock(t.Fragment,null,t.renderList(t.unref(d).upperUnits,({label:c,value:x,date:D,width:y},w)=>(t.openBlock(),t.createElementBlock("div",{key:D.getTime(),class:"g-upper-timeunit",style:t.normalizeStyle({background:w%2===0?t.unref(s).primary:t.unref(s).secondary,color:t.unref(s).text,width:y})},[t.renderSlot(o.$slots,"upper-timeunit",{label:c,value:x,date:D},()=>[t.createTextVNode(t.toDisplayString(c),1)])],4))),128))]),t.createElementVNode("div",{class:"g-timeunits-container",style:m},[(t.openBlock(!0),t.createElementBlock(t.Fragment,null,t.renderList(t.unref(d).lowerUnits,({label:c,value:x,date:D,width:y},w)=>(t.openBlock(),t.createElementBlock("div",{key:D.getTime(),class:"g-timeunit",style:t.normalizeStyle({background:w%2===0?t.unref(s).ternary:t.unref(s).quartenary,color:t.unref(s).text,flexDirection:t.unref(f)==="hour"?"column":"row",alignItems:t.unref(f)==="hour"?"":"center",width:y}),onClick:k=>l("onClickTimeUnit",{date:D})},[t.renderSlot(o.$slots,"timeunit",{label:c,value:x,date:D},()=>[t.createTextVNode(t.toDisplayString(c),1)]),t.unref(f)==="hour"?(t.openBlock(),t.createElementBlock("div",{key:0,class:"g-timeaxis-hour-pin",style:t.normalizeStyle({background:t.unref(s).text})},null,4)):t.createCommentVNode("",!0)],12,$t))),128))]),((i=e.mileStoneList)==null?void 0:i.length)>0?(t.openBlock(),t.createElementBlock("div",{key:0,class:"g-timeunits-container",style:t.normalizeStyle([m,{position:"relative"}])},[(t.openBlock(!0),t.createElementBlock(t.Fragment,null,t.renderList(e.mileStoneList,c=>(t.openBlock(),t.createElementBlock("div",{style:t.normalizeStyle({left:p(c.date)+"px",top:0,position:"absolute"})},[Rt,t.createElementVNode("span",{class:"milestone-description",onClick:x=>l("onClickMilestone",{milestone:c})},t.toDisplayString(c.description),9,Ht)],4))),256))])):t.createCommentVNode("",!0)])}}}),_e="",Nt={class:"g-grid-container"},Vt=t.defineComponent({__name:"GGanttGrid",props:{highlightedDates:null},setup(e){const l=e,a=t.computed(()=>{var d;return(d=l.highlightedDates)==null?void 0:d.map(m=>m.getTime())}),{colors:f}=G(),{timeaxisUnits:s}=q();return(d,m)=>(t.openBlock(),t.createElementBlock("div",Nt,[(t.openBlock(!0),t.createElementBlock(t.Fragment,null,t.renderList(t.unref(s).lowerUnits,({label:g,value:p,width:o,date:n})=>{var i;return t.openBlock(),t.createElementBlock("div",{key:n.getTime(),class:"g-grid-line",style:t.normalizeStyle({width:o,background:(i=t.unref(a))!=null&&i.includes(n.getTime())?t.unref(f).hoverHighlight:void 0})},null,4)}),128))]))}}),Ee="",zt=t.defineComponent({__name:"GGanttBarTooltip",props:{bar:null,modelValue:{type:Boolean}},setup(e){const l=e,a={hour:"HH:mm",day:"DD. MMM HH:mm",week:"DD. MMM HH:mm",month:"DD. MMMM YYYY"},f="cadetblue",{bar:s}=t.toRefs(l),{precision:d,font:m,barStart:g,barEnd:p,rowHeight:o}=G(),n=t.ref("0px"),i=t.ref("0px");t.watch(()=>l.bar,async()=>{var h;await t.nextTick();const k=((h=s==null?void 0:s.value)==null?void 0:h.ganttBarConfig.id)||"";if(!k)return;const _=document.getElementById(k),{top:u,left:B}=(_==null?void 0:_.getBoundingClientRect())||{top:0,left:0},r=Math.max(B,10);n.value=`${u+o.value-10}px`,i.value=`${r}px`},{deep:!0,immediate:!0});const c=t.computed(()=>{var k,_;return((_=(k=s==null?void 0:s.value)==null?void 0:k.ganttBarConfig.style)==null?void 0:_.background)||f}),{toDayjs:x}=j(),D=t.computed(()=>{var k;return(k=s.value)==null?void 0:k[g.value]}),y=t.computed(()=>{var k;return(k=s.value)==null?void 0:k[p.value]}),w=t.computed(()=>{if(!(s!=null&&s.value))return"";const k=a[d.value],_=x(D.value).format(k),u=x(y.value).format(k);return`${_} \u2013 ${u}`});return(k,_)=>(t.openBlock(),t.createBlock(t.Teleport,{to:"body"},[t.createVNode(t.Transition,{name:"g-fade",mode:"out-in"},{default:t.withCtx(()=>[e.modelValue?(t.openBlock(),t.createElementBlock("div",{key:0,class:"g-gantt-tooltip",style:t.normalizeStyle({top:n.value,left:i.value,fontFamily:t.unref(m)})},[t.createElementVNode("div",{class:"g-gantt-tooltip-color-dot",style:t.normalizeStyle({background:t.unref(c)})},null,4),t.renderSlot(k.$slots,"default",{bar:t.unref(s),barStart:t.unref(D),barEnd:t.unref(y)},()=>[t.createTextVNode(t.toDisplayString(t.unref(w)),1)])],4)):t.createCommentVNode("",!0)]),_:3})]))}}),Ce="",gt={default:{primary:"#eeeeee",secondary:"#E0E0E0",ternary:"#F5F5F5",quartenary:"#ededed",hoverHighlight:"rgba(204, 216, 219, 0.5)",text:"#404040",background:"white"},creamy:{primary:"#ffe8d9",secondary:"#fcdcc5",ternary:"#fff6f0",quartenary:"#f7ece6",hoverHighlight:"rgba(230, 221, 202, 0.5)",text:"#542d05",background:"white"},crimson:{primary:"#a82039",secondary:"#c41238",ternary:"#db4f56",quartenary:"#ce5f64",hoverHighlight:"rgba(196, 141, 141, 0.5)",text:"white",background:"white"},dark:{primary:"#404040",secondary:"#303030",ternary:"#353535",quartenary:"#383838",hoverHighlight:"rgba(159, 160, 161, 0.5)",text:"white",background:"#525252",toast:"#1f1f1f"},flare:{primary:"#e08a38",secondary:"#e67912",ternary:"#5e5145",quartenary:"#665648",hoverHighlight:"rgba(196, 141, 141, 0.5)",text:"white",background:"white"},fuchsia:{primary:"#de1d5a",secondary:"#b50b41",ternary:"#ff7da6",quartenary:"#f2799f",hoverHighlight:"rgba(196, 141, 141, 0.5)",text:"white",background:"white"},grove:{primary:"#3d9960",secondary:"#288542",ternary:"#72b585",quartenary:"#65a577",hoverHighlight:"rgba(160, 219, 171, 0.5)",text:"white",background:"white"},"material-blue":{primary:"#0D47A1",secondary:"#1565C0",ternary:"#42a5f5",quartenary:"#409fed",hoverHighlight:"rgba(110, 165, 196, 0.5)",text:"white",background:"white"},sky:{primary:"#b5e3ff",secondary:"#a1d6f7",ternary:"#d6f7ff",quartenary:"#d0edf4",hoverHighlight:"rgba(193, 202, 214, 0.5)",text:"#022c47",background:"white"},slumber:{primary:"#2a2f42",secondary:"#2f3447",ternary:"#35394d",quartenary:"#2c3044",hoverHighlight:"rgba(179, 162, 127, 0.5)",text:"#ffe0b3",background:"#38383b",toast:"#1f1f1f"},vue:{primary:"#258a5d",secondary:"#41B883",ternary:"#35495E",quartenary:"#2a3d51",hoverHighlight:"rgba(160, 219, 171, 0.5)",text:"white",background:"white"}};var pt;const F=typeof window<"u";F&&((pt=window==null?void 0:window.navigator)==null?void 0:pt.userAgent)&&/iP(ad|hone|od)/.test(window.navigator.userAgent);function At(e){return typeof e=="function"?e():t.unref(e)}function jt(e){return e}function Ft(e){return t.getCurrentScope()?(t.onScopeDispose(e),!0):!1}function Pt(e,l=!0){t.getCurrentInstance()?t.onMounted(e):l?e():t.nextTick(e)}function ht(e){var l;const a=At(e);return(l=a==null?void 0:a.$el)!=null?l:a}const Ut=F?window:void 0;F&&window.document,F&&window.navigator,F&&window.location;function qt(e,l=!1){const a=t.ref(),f=()=>a.value=Boolean(e());return f(),Pt(f,l),a}const K=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},Q="__vueuse_ssr_handlers__";K[Q]=K[Q]||{},K[Q];var yt=Object.getOwnPropertySymbols,Wt=Object.prototype.hasOwnProperty,Xt=Object.prototype.propertyIsEnumerable,Kt=(e,l)=>{var a={};for(var f in e)Wt.call(e,f)&&l.indexOf(f)<0&&(a[f]=e[f]);if(e!=null&&yt)for(var f of yt(e))l.indexOf(f)<0&&Xt.call(e,f)&&(a[f]=e[f]);return a};function Qt(e,l,a={}){const f=a,{window:s=Ut}=f,d=Kt(f,["window"]);let m;const g=qt(()=>s&&"ResizeObserver"in s),p=()=>{m&&(m.disconnect(),m=void 0)},o=t.watch(()=>ht(e),i=>{p(),g.value&&s&&i&&(m=new ResizeObserver(l),m.observe(i,d))},{immediate:!0,flush:"post"}),n=()=>{p(),o()};return Ft(n),{isSupported:g,stop:n}}function Zt(e,l={width:0,height:0},a={}){const f=t.ref(l.width),s=t.ref(l.height);return Qt(e,([d])=>{f.value=d.contentRect.width,s.value=d.contentRect.height},a),t.watch(()=>ht(e),d=>{f.value=d?l.width:0,s.value=d?l.height:0}),{width:f,height:s}}var bt;(function(e){e.UP="UP",e.RIGHT="RIGHT",e.DOWN="DOWN",e.LEFT="LEFT",e.NONE="NONE"})(bt||(bt={}));var Jt=Object.defineProperty,wt=Object.getOwnPropertySymbols,te=Object.prototype.hasOwnProperty,ee=Object.prototype.propertyIsEnumerable,Bt=(e,l,a)=>l in e?Jt(e,l,{enumerable:!0,configurable:!0,writable:!0,value:a}):e[l]=a,ne=(e,l)=>{for(var a in l||(l={}))te.call(l,a)&&Bt(e,a,l[a]);if(wt)for(var a of wt(l))ee.call(l,a)&&Bt(e,a,l[a]);return e};ne({linear:jt},{easeInSine:[.12,0,.39,0],easeOutSine:[.61,1,.88,1],easeInOutSine:[.37,0,.63,1],easeInQuad:[.11,0,.5,0],easeOutQuad:[.5,1,.89,1],easeInOutQuad:[.45,0,.55,1],easeInCubic:[.32,0,.67,0],easeOutCubic:[.33,1,.68,1],easeInOutCubic:[.65,0,.35,1],easeInQuart:[.5,0,.75,0],easeOutQuart:[.25,1,.5,1],easeInOutQuart:[.76,0,.24,1],easeInQuint:[.64,0,.78,0],easeOutQuint:[.22,1,.36,1],easeInOutQuint:[.83,0,.17,1],easeInExpo:[.7,0,.84,0],easeOutExpo:[.16,1,.3,1],easeInOutExpo:[.87,0,.13,1],easeInCirc:[.55,0,1,.45],easeOutCirc:[0,.55,.45,1],easeInOutCirc:[.85,0,.15,1],easeInBack:[.36,0,.66,-.56],easeOutBack:[.34,1.56,.64,1],easeInOutBack:[.68,-.6,.32,1.6]});const oe={key:0,class:"g-footer"},re={class:"g-footer-container"},ae=t.defineComponent({__name:"GGanttFooter",props:{labels:null},setup(e){const{precision:l,colors:a}=G(),{timeaxisUnits:f}=q();return(s,d)=>e.labels?(t.openBlock(),t.createElementBlock("div",oe,[t.createElementVNode("div",re,[(t.openBlock(!0),t.createElementBlock(t.Fragment,null,t.renderList(t.unref(f).lowerUnits,({label:m,value:g,date:p,width:o},n)=>(t.openBlock(),t.createElementBlock("div",{key:m,class:"g-timeunit",style:t.normalizeStyle({background:n%2===0?t.unref(a).ternary:t.unref(a).quartenary,color:t.unref(a).text,flexDirection:t.unref(l)==="hour"?"column":"row",alignItems:t.unref(l)==="hour"?"":"center",width:o})},[t.renderSlot(s.$slots,"timeunit",{label:m,value:g,date:p},()=>[t.createTextVNode(t.toDisplayString(e.labels[n]),1)],!0)],4))),128))])])):t.createCommentVNode("",!0)}}),ve="",ie=((e,l)=>{const a=e.__vccOpts||e;for(const[f,s]of l)a[f]=s;return a})(ae,[["__scopeId","data-v-400629df"]]),se=t.defineComponent({__name:"GGanttDrawTodayLine",emits:["today-line-position-x"],setup(e,{emit:l}){const{mapTimeToPosition:a}=V(),f=t.computed(()=>(l("today-line-position-x",{xPosition:a(R.default().startOf("day").format("DD.MM.YYYY HH:mm"))}),a(R.default().startOf("day").format("DD.MM.YYYY HH:mm"))));return(s,d)=>(t.openBlock(),t.createElementBlock("div",{class:"vertical-line",style:t.normalizeStyle({left:t.unref(f)+"px",top:0})},null,4))}}),Oe="",le=t.defineComponent({__name:"GGanttDrawVerticalLine",props:{date:null,color:null},setup(e){const l=e,{mapTimeToPosition:a}=V(),f=t.computed(()=>a(l.date.startOf("day").format("DD.MM.YYYY HH:mm")));return(s,d)=>(t.openBlock(),t.createElementBlock("div",{class:"vertical-line",style:t.normalizeStyle({left:t.unref(f)+"px",top:0,backgroundColor:e.color})},null,4))}}),Te="",ce={class:"g-gantt-rows-container"},xt=t.defineComponent({__name:"GGanttChart",props:{chartStart:null,chartEnd:null,precision:{default:"day"},barStart:null,barEnd:null,dateFormat:{type:[String,Boolean],default:mt},width:{default:"100%"},hideTimeaxis:{type:Boolean,default:!1},colorScheme:{default:"default"},grid:{type:Boolean,default:!1},pushOnOverlap:{type:Boolean,default:!1},noOverlap:{type:Boolean,default:!1},rowHeight:{default:40},highlightedDates:{default:()=>[]},font:{default:"inherit"},footerLabels:null,sticky:{type:Boolean},displayTodayLine:{type:Boolean},mileStoneList:null,verticalLines:null},emits:["click-bar","mousedown-bar","mouseup-bar","dblclick-bar","mouseenter-bar","mouseleave-bar","dragstart-bar","drag-bar","dragend-bar","contextmenu-bar","today-line-position-x","onClickTimeUnit","onClickMilestone"],setup(e,{emit:l}){const a=e,{width:f,font:s,colorScheme:d}=t.toRefs(a),m=t.useSlots(),g=t.computed(()=>typeof d.value!="string"?d.value:gt[d.value]||gt.default),p=()=>{var r;const u=(r=m.default)==null?void 0:r.call(m),B=[];return u&&u.forEach(h=>{var b;if((b=h.props)!=null&&b.bars){const E=h.props.bars;B.push(E)}else Array.isArray(h.children)&&h.children.forEach(E=>{var v;const C=E;if((v=C==null?void 0:C.props)!=null&&v.bars){const S=C.props.bars;B.push(S)}})}),B},o=t.ref(!1),n=t.ref(!1),i=t.ref(void 0);let c;const x=u=>{c&&clearTimeout(c),c=setTimeout(()=>{o.value=!0},800),i.value=u},D=()=>{clearTimeout(c),o.value=!1},y=(u,B,r,h)=>{switch(u.type){case"click":l("click-bar",{bar:B,e:u,datetime:r});break;case"mousedown":l("mousedown-bar",{bar:B,e:u,datetime:r});break;case"mouseup":l("mouseup-bar",{bar:B,e:u,datetime:r});break;case"dblclick":l("dblclick-bar",{bar:B,e:u,datetime:r});break;case"mouseenter":x(B),l("mouseenter-bar",{bar:B,e:u});break;case"mouseleave":D(),l("mouseleave-bar",{bar:B,e:u});break;case"dragstart":n.value=!0,l("dragstart-bar",{bar:B,e:u});break;case"drag":l("drag-bar",{bar:B,e:u});break;case"dragend":n.value=!1,l("dragend-bar",{bar:B,e:u});break;case"contextmenu":l("contextmenu-bar",{bar:B,e:u,datetime:r});break}},w=t.ref(null),k=t.ref(null),_=Zt(w);return t.provide(ct,p),t.provide(dt,{...t.toRefs(a),colors:g,chartSize:_}),t.provide(ft,y),(u,B)=>(t.openBlock(),t.createElementBlock(t.Fragment,null,[t.createElementVNode("div",{style:t.normalizeStyle([{display:"flex","flex-flow":"column"},e.sticky?"position: sticky; left:0;z-index:100; background: white;":""]),class:"g-gantt-wrapper",ref_key:"gGanttWrapperRef",ref:k},[t.renderSlot(u.$slots,"side-menu")],4),t.createElementVNode("div",{ref_key:"ganttChart",ref:w,class:"g-gantt-chart",style:t.normalizeStyle({width:t.unref(f),background:t.unref(g).background,fontFamily:t.unref(s)})},[e.hideTimeaxis?t.createCommentVNode("",!0):(t.openBlock(),t.createBlock(It,{key:0,"mile-stone-list":e.mileStoneList,onOnClickTimeUnit:B[0]||(B[0]=r=>u.$emit("onClickTimeUnit",r)),onOnClickMilestone:B[1]||(B[1]=r=>u.$emit("onClickMilestone",r))},{"upper-timeunit":t.withCtx(({label:r,value:h,date:b})=>[t.renderSlot(u.$slots,"upper-timeunit",{label:r,value:h,date:b})]),timeunit:t.withCtx(({label:r,value:h,date:b})=>[t.renderSlot(u.$slots,"timeunit",{label:r,value:h,date:b})]),_:3},8,["mile-stone-list"])),t.createElementVNode("div",ce,[e.grid?(t.openBlock(),t.createBlock(Vt,{key:0,"highlighted-dates":e.highlightedDates},null,8,["highlighted-dates"])):t.createCommentVNode("",!0),e.displayTodayLine?(t.openBlock(),t.createBlock(se,{key:1,onTodayLinePositionX:B[2]||(B[2]=r=>l("today-line-position-x",r))})):t.createCommentVNode("",!0),(t.openBlock(!0),t.createElementBlock(t.Fragment,null,t.renderList(e.verticalLines,r=>(t.openBlock(),t.createBlock(le,{date:r.date,color:r.color},null,8,["date","color"]))),256)),t.renderSlot(u.$slots,"default")]),e.hideTimeaxis?t.createCommentVNode("",!0):(t.openBlock(),t.createBlock(ie,{key:1,labels:e.footerLabels},null,8,["labels"])),t.createVNode(zt,{"model-value":o.value||n.value,bar:i.value},{default:t.withCtx(()=>[t.renderSlot(u.$slots,"bar-tooltip",{bar:i.value})]),_:3},8,["model-value","bar"])],4),t.createElementVNode("div",null,[t.renderSlot(u.$slots,"footer")])],64))}}),Le="";function kt(e,l=()=>null,a=()=>null,f=G()){const{barStart:s,barEnd:d,pushOnOverlap:m}=f,g=t.ref(!1);let p=0,o;const{mapPositionToTime:n}=V(f),{toDayjs:i}=j(f),c=u=>{const B=document.getElementById(e.ganttBarConfig.id);if(!B)return;switch(p=u.clientX-(B.getBoundingClientRect().left||0),u.target.className){case"g-gantt-bar-handle-left":document.body.style.cursor="ew-resize",o=y;break;case"g-gantt-bar-handle-right":document.body.style.cursor="ew-resize",o=w;break;default:o=D}g.value=!0,window.addEventListener("mousemove",o),window.addEventListener("mouseup",_)},x=()=>{var r;const u=document.getElementById(e.ganttBarConfig.id),B=(r=u==null?void 0:u.closest(".g-gantt-row-bars-container"))==null?void 0:r.getBoundingClientRect();return{barElement:u,barContainer:B}},D=u=>{const{barElement:B,barContainer:r}=x();if(!B||!r)return;const h=B.getBoundingClientRect().width,b=u.clientX-r.left-p,E=b+h;if(!k(b,E)){if(e[s.value].substring(0,10)!=n(b).substring(0,10)){const C=i(e[s.value]),S=i(e[d.value]).diff(C,"minute"),O=n(b).substring(0,10)+" 00:00";e[s.value]=O,e[d.value]=i(O).add(S,"minute").format("DD.MM.YYYY HH:mm")}l(u,e)}},y=u=>{const{barElement:B,barContainer:r}=x();if(!B||!r)return;const h=u.clientX-r.left,b=n(h);if(!i(b).isSameOrAfter(i(e,"end"))){if(e[s.value].substring(0,10)!=n(h).substring(0,10)){const E=n(h).substring(0,10)+" 00:00";e[s.value]=E}l(u,e)}},w=u=>{const{barElement:B,barContainer:r}=x();if(!B||!r)return;const h=u.clientX-r.left,b=n(h);if(!i(b).isSameOrBefore(i(e,"start"))){if(e[s.value].substring(0,10)!=n(h).substring(0,10)){const E=n(h).substring(0,10)+" 23:59";e[d.value]=E}l(u,e)}},k=(u,B)=>{if(!m.value)return!1;const r=e.ganttBarConfig.dragLimitLeft,h=e.ganttBarConfig.dragLimitRight;return u&&r!=null&&u<r||B&&h!=null&&B>h},_=u=>{g.value=!1,document.body.style.cursor="",window.removeEventListener("mousemove",o),window.removeEventListener("mouseup",_),a(u,e)};return{isDragging:g,initDrag:c}}function _t(){const e=t.inject(ct);if(!e)throw Error("Failed to inject getChartRows!");return e}function Et(){const e=t.inject(ft);if(!e)throw Error("Failed to inject emitBarEvent!");return e}function de(){const e=G(),l=_t(),a=Et(),{pushOnOverlap:f,barStart:s,barEnd:d,noOverlap:m,dateFormat:g}=e,p=new Map,{toDayjs:o,format:n}=j(),i=(r,h)=>{const{initDrag:b}=kt(r,x,_,e);a({...h,type:"dragstart"},r),b(h),u(r)},c=(r,h)=>{const b=r.ganttBarConfig.bundle;b!=null&&(l().forEach(E=>{E.forEach(C=>{if(C.ganttBarConfig.bundle===b){const v=C===r?_:()=>null,{initDrag:S}=kt(C,x,v,e);S(h),u(C)}})}),a({...h,type:"dragstart"},r))},x=(r,h)=>{a({...r,type:"drag"},h),D(h)},D=r=>{if(!(f!=null&&f.value))return;let h=r,{overlapBar:b,overlapType:E}=y(h);for(;b;){u(b);const C=o(h[s.value]),v=o(h[d.value]),S=o(b[s.value]),O=o(b[d.value]);let L;switch(E){case"left":L=O.diff(C,"minutes",!0),b[d.value]=n(h[s.value],g.value),b[s.value]=n(S.subtract(L,"minutes"),g.value);break;case"right":L=v.diff(S,"minutes",!0),b[s.value]=n(v,g.value),b[d.value]=n(O.add(L,"minutes"),g.value);break;default:console.warn("Vue-Ganttastic: One bar is inside of the other one! This should never occur while push-on-overlap is active!");return}b&&(E==="left"||E==="right")&&w(b,L,E),h=b,{overlapBar:b,overlapType:E}=y(b)}},y=r=>{let h,b,E;const C=l().find(M=>M.includes(r))||[],v=o(r[s.value]),S=o(r[d.value]);return{overlapBar:C.find(M=>{if(M===r)return!1;const Y=o(M[s.value]),H=o(M[d.value]);return h=v.isBetween(Y,H),b=S.isBetween(Y,H),E=Y.isBetween(v,S)||H.isBetween(v,S),h||b||E}),overlapType:h?"left":b?"right":E?"between":null}},w=(r,h,b)=>{u(r),r.ganttBarConfig.bundle&&l().forEach(E=>{E.forEach(C=>{C.ganttBarConfig.bundle===r.ganttBarConfig.bundle&&C!==r&&(u(C),k(C,h,b))})})},k=(r,h,b)=>{switch(b){case"left":r[s.value]=n(o(r,"start").subtract(h,"minutes"),g.value),r[d.value]=n(o(r,"end").subtract(h,"minutes"),g.value);break;case"right":r[s.value]=n(o(r,"start").add(h,"minutes"),g.value),r[d.value]=n(o(r,"end").add(h,"minutes"),g.value)}D(r)},_=(r,h)=>{B();const b={...r,type:"dragend"};a(b,h,void 0,new Map(p)),p.clear()},u=r=>{if(!p.has(r)){const h=r[s.value],b=r[d.value];p.set(r,{oldStart:h,oldEnd:b})}},B=()=>{if(f.value||!m.value)return;let r=!1;p.forEach((h,b)=>{const{overlapBar:E}=y(b);E!=null&&(r=!0)}),r&&p.forEach(({oldStart:h,oldEnd:b},E)=>{E[s.value]=h,E[d.value]=b})};return{initDragOfBar:i,initDragOfBundle:c}}function fe(){const{pushOnOverlap:e}=G(),l=_t(),a=m=>{const g=[];return m!=null&&l().forEach(p=>{p.forEach(o=>{o.ganttBarConfig.bundle===m&&g.push(o)})}),g},f=m=>{if(!e.value||m.ganttBarConfig.pushOnOverlap===!1)return;for(const p of["left","right"]){const o=p,{gapDistanceSoFar:n,bundleBarsAndGapDist:i}=s(m,0,o);let c=n;const x=i;if(!x)continue;for(let y=0;y<x.length;y++){const w=x[y].bar,k=x[y].gapDistance;a(w.ganttBarConfig.bundle).filter(u=>u!==w).forEach(u=>{const B=s(u,k,o),r=B.gapDistanceSoFar,h=B.bundleBarsAndGapDist;r!=null&&(!c||r<c)&&(c=r),h.forEach(b=>{x.find(E=>E.bar===b.bar)||x.push(b)})})}const D=document.getElementById(m.ganttBarConfig.id);c!=null&&o==="left"?m.ganttBarConfig.dragLimitLeft=D.offsetLeft-c:c!=null&&o==="right"&&(m.ganttBarConfig.dragLimitRight=D.offsetLeft+D.offsetWidth+c)}a(m.ganttBarConfig.bundle).forEach(p=>{p.ganttBarConfig.dragLimitLeft=m.ganttBarConfig.dragLimitLeft,p.ganttBarConfig.dragLimitRight=m.ganttBarConfig.dragLimitRight})},s=(m,g=0,p)=>{const o=m.ganttBarConfig.bundle?[{bar:m,gapDistance:g}]:[];let n=m,i=d(n,p);if(p==="left")for(;i;){const c=document.getElementById(n.ganttBarConfig.id),x=document.getElementById(i.ganttBarConfig.id),D=x.offsetLeft+x.offsetWidth;if(g+=c.offsetLeft-D,i.ganttBarConfig.immobile)return{gapDistanceSoFar:g,bundleBarsAndGapDist:o};i.ganttBarConfig.bundle&&o.push({bar:i,gapDistance:g}),n=i,i=d(i,"left")}if(p==="right")for(;i;){const c=document.getElementById(n.ganttBarConfig.id),x=document.getElementById(i.ganttBarConfig.id),D=c.offsetLeft+c.offsetWidth;if(g+=x.offsetLeft-D,i.ganttBarConfig.immobile)return{gapDistanceSoFar:g,bundleBarsAndGapDist:o};i.ganttBarConfig.bundle&&o.push({bar:i,gapDistance:g}),n=i,i=d(i,"right")}return{gapDistanceSoFar:null,bundleBarsAndGapDist:o}},d=(m,g)=>{const p=document.getElementById(m.ganttBarConfig.id),o=l().find(i=>i.includes(m))||[];let n=[];return g==="left"?n=o.filter(i=>{const c=document.getElementById(i.ganttBarConfig.id);return c&&c.offsetLeft<p.offsetLeft&&i.ganttBarConfig.pushOnOverlap!==!1}):n=o.filter(i=>{const c=document.getElementById(i.ganttBarConfig.id);return c&&c.offsetLeft>p.offsetLeft&&i.ganttBarConfig.pushOnOverlap!==!1}),n.length>0?n.reduce((i,c)=>{const x=document.getElementById(i.ganttBarConfig.id),D=document.getElementById(c.ganttBarConfig.id),y=Math.abs(x.offsetLeft-p.offsetLeft),w=Math.abs(D.offsetLeft-p.offsetLeft);return y<w?i:c},n[0]):null};return{setDragLimitsOfGanttBar:f}}const ue=["id"],me={class:"g-gantt-bar-label"},ge={style:{"z-index":"100"}},pe=t.createElementVNode("div",{class:"g-gantt-bar-handle-left"},null,-1),he=t.createElementVNode("div",{class:"g-gantt-bar-handle-right"},null,-1),ye=t.defineComponent({__name:"GGanttBar",props:{bar:null},setup(e){const l=e,a=Et(),f=G(),{rowHeight:s}=f,{bar:d}=t.toRefs(l),{mapTimeToPosition:m,mapPositionToTime:g}=V(),{initDragOfBar:p,initDragOfBundle:o}=de(),{setDragLimitsOfGanttBar:n}=fe(),i=t.ref(!1),c=t.computed(()=>d.value.ganttBarConfig);function x(C){c.value.bundle!=null?o(d.value,C):p(d.value,C),i.value=!0}const D=()=>{n(d.value),!c.value.immobile&&(window.addEventListener("mousemove",x,{once:!0}),window.addEventListener("mouseup",()=>{window.removeEventListener("mousemove",x),i.value=!1},{once:!0}))},y=t.inject(ut),w=C=>{var O;C.preventDefault(),C.type==="mousedown"&&D();const v=(O=y==null?void 0:y.value)==null?void 0:O.getBoundingClientRect();if(!v)return;const S=g(C.clientX-v.left);a(C,d.value,S)},{barStart:k,barEnd:_,width:u,chartStart:B,chartEnd:r,chartSize:h}=f,b=t.ref(0),E=t.ref(0);return t.onMounted(()=>{t.watch([d,u,B,r,h.width],()=>{b.value=m(d.value[k.value]),E.value=m(d.value[_.value])},{deep:!0,immediate:!0})}),(C,v)=>(t.openBlock(),t.createElementBlock("div",{id:t.unref(c).id,class:"g-gantt-bar",style:t.normalizeStyle({...t.unref(c).style,position:"absolute",top:`${t.unref(s)*.1}px`,left:`${b.value}px`,width:`${E.value-b.value}px`,height:`${t.unref(s)*.8}px`,zIndex:i.value?3:2}),onMousedown:w,onClick:w,onDblclick:w,onMouseenter:w,onMouseleave:w,onContextmenu:w},[t.createElementVNode("div",me,[t.renderSlot(C.$slots,"default",{bar:t.unref(d)},()=>[t.createElementVNode("div",ge,t.toDisplayString(t.unref(c).label||""),1),t.unref(c).progress?(t.openBlock(),t.createElementBlock("div",{key:0,style:t.normalizeStyle([{position:"absolute",height:"100%",left:"0"},{width:t.unref(c).progress+"%",backgroundColor:t.unref(c).progressColor}])},null,4)):t.createCommentVNode("",!0)])]),t.unref(c).hasHandles?(t.openBlock(),t.createElementBlock(t.Fragment,{key:0},[pe,he],64)):t.createCommentVNode("",!0)],44,ue))}}),Me="",Ct=t.defineComponent({__name:"GGanttRow",props:{bars:null,highlightOnHover:{type:Boolean}},emits:["drop"],setup(e,{emit:l}){const a=e,{rowHeight:f,colors:s}=G(),{highlightOnHover:d}=t.toRefs(a),m=t.ref(!1),g=t.computed(()=>({height:`${f.value}px`,background:(d==null?void 0:d.value)&&m.value?s.value.hoverHighlight:null})),{mapPositionToTime:p}=V(),o=t.ref(null);t.provide(ut,o);const n=i=>{var y;const c=(y=o.value)==null?void 0:y.getBoundingClientRect();if(!c){console.error("Vue-Ganttastic: failed to find bar container element for row.");return}const x=i.clientX-c.left,D=p(x);l("drop",{e:i,datetime:D})};return(i,c)=>(t.openBlock(),t.createElementBlock("div",{class:"g-gantt-row",style:t.normalizeStyle(t.unref(g)),onDragover:c[0]||(c[0]=t.withModifiers(x=>m.value=!0,["prevent"])),onDragleave:c[1]||(c[1]=x=>m.value=!1),onDrop:c[2]||(c[2]=x=>n(x)),onMouseover:c[3]||(c[3]=x=>m.value=!0),onMouseleave:c[4]||(c[4]=x=>m.value=!1)},[t.createCommentVNode("",!0),t.createElementVNode("div",t.mergeProps({ref_key:"barContainer",ref:o,class:"g-gantt-row-bars-container"},i.$attrs),[t.createVNode(t.TransitionGroup,{name:"bar-transition",tag:"div"},{default:t.withCtx(()=>[(t.openBlock(!0),t.createElementBlock(t.Fragment,null,t.renderList(e.bars,x=>(t.openBlock(),t.createBlock(ye,{key:x.ganttBarConfig.id,bar:x},{default:t.withCtx(()=>[t.renderSlot(i.$slots,"bar-label",{bar:x})]),_:2},1032,["bar"]))),128))]),_:3})],16)],36))}}),Ge="",Dt=t.defineComponent({__name:"GGanttLabelRow",props:{labels:null,styles:null},setup(e){const{rowHeight:l,colors:a}=G(),{timeaxisUnits:f}=q();return(s,d)=>(t.openBlock(),t.createElementBlock("div",{class:"g-gantt-row",style:t.normalizeStyle({height:t.unref(l)+"px"})},[t.createElementVNode("div",t.mergeProps({ref:"barContainer",class:"g-gantt-row-bars-container"},s.$attrs),[(t.openBlock(!0),t.createElementBlock(t.Fragment,null,t.renderList(t.unref(f).lowerUnits,({label:m,width:g,date:p},o)=>(t.openBlock(),t.createElementBlock("div",{key:p.getTime(),class:"g-timeunit",style:t.normalizeStyle({color:t.unref(a).text,textAlign:"center",width:g})},[t.createElementVNode("span",{style:t.normalizeStyle(e.styles!=null?e.styles[o]:void 0)},t.toDisplayString(e.labels[o]),5)],4))),128))],16)],4))}}),Ye="";function vt(){R.default.extend(Tt),R.default.extend(Lt),R.default.extend(Mt),R.default.extend(Gt)}const St={install(e,l){vt(),e.component("GGanttChart",xt),e.component("GGanttRow",Ct),e.component("GGanttLabelRow",Dt)}};T.GGanttChart=xt,T.GGanttLabelRow=Dt,T.GGanttRow=Ct,T.default=St,T.extendDayjs=vt,T.ganttastic=St,Object.defineProperties(T,{__esModule:{value:!0},[Symbol.toStringTag]:{value:"Module"}})});function injectStyle(T,I="top"){if(!T||typeof document>"u")return;const t=document.head,P=document.createElement("style");I==="top"&&t.firstChild?t.insertBefore(P,t.firstChild):t.appendChild(P),P.appendChild(document.createTextNode(T))}injectStyle(`
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
.milestone-description-mark {
  margin-left: -11px !important;
}
.milestone-description-mark {
  width: 24px;
  text-align: center;
}
.milestone-description {
  margin: 0;
  display: inline-block;
  font-size: 0.8rem;
}
.milestone-description > span {
}

`,"top");injectStyle(`
.vertical-line {
  width: 2px;
  height: 100%;
  background-color: red;
  position: absolute;
  z-index: 1;
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
.vertical-line {
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
