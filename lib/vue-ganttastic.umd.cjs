(function($,H){typeof exports=="object"&&typeof module<"u"?H(exports,require("dayjs"),require("vue")):typeof define=="function"&&define.amd?define(["exports","dayjs","vue"],H):($=typeof globalThis<"u"?globalThis:$||self,H($.VueGanttastic={},$.dayjs,$.Vue))})(this,function($,H,t){"use strict";const I=(e=>e&&typeof e=="object"&&"default"in e?e:{default:e})(H);var U=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},st={exports:{}};(function(e,i){(function(a,g){e.exports=g()})(U,function(){return function(a,g){g.prototype.isSameOrBefore=function(s,d){return this.isSame(s,d)||this.isBefore(s,d)}}})})(st);const Lt=st.exports;var lt={exports:{}};(function(e,i){(function(a,g){e.exports=g()})(U,function(){return function(a,g){g.prototype.isSameOrAfter=function(s,d){return this.isSame(s,d)||this.isAfter(s,d)}}})})(lt);const Gt=lt.exports;var ct={exports:{}};(function(e,i){(function(a,g){e.exports=g()})(U,function(){return function(a,g,s){g.prototype.isBetween=function(d,f,h,y){var o=s(d),n=s(f),l=(y=y||"()")[0]==="(",m=y[1]===")";return(l?this.isAfter(o,h):!this.isBefore(o,h))&&(m?this.isBefore(n,h):!this.isAfter(n,h))||(l?this.isBefore(o,h):!this.isAfter(o,h))&&(m?this.isAfter(n,h):!this.isBefore(n,h))}}})})(ct);const $t=ct.exports;var dt={exports:{}};(function(e,i){(function(a,g){e.exports=g()})(U,function(){var a={LTS:"h:mm:ss A",LT:"h:mm A",L:"MM/DD/YYYY",LL:"MMMM D, YYYY",LLL:"MMMM D, YYYY h:mm A",LLLL:"dddd, MMMM D, YYYY h:mm A"},g=/(\[[^[]*\])|([-_:/.,()\s]+)|(A|a|YYYY|YY?|MM?M?M?|Do|DD?|hh?|HH?|mm?|ss?|S{1,3}|z|ZZ?)/g,s=/\d\d/,d=/\d\d?/,f=/\d*[^-_:/,()\s\d]+/,h={},y=function(c){return(c=+c)+(c>68?1900:2e3)},o=function(c){return function(p){this[c]=+p}},n=[/[+-]\d\d:?(\d\d)?|Z/,function(c){(this.zone||(this.zone={})).offset=function(p){if(!p||p==="Z")return 0;var k=p.match(/([+-]|\d\d)/g),E=60*k[1]+(+k[2]||0);return E===0?0:k[0]==="+"?-E:E}(c)}],l=function(c){var p=h[c];return p&&(p.indexOf?p:p.s.concat(p.f))},m=function(c,p){var k,E=h.meridiem;if(E){for(var u=1;u<=24;u+=1)if(c.indexOf(E(u,0,p))>-1){k=u>12;break}}else k=c===(p?"pm":"PM");return k},x={A:[f,function(c){this.afternoon=m(c,!1)}],a:[f,function(c){this.afternoon=m(c,!0)}],S:[/\d/,function(c){this.milliseconds=100*+c}],SS:[s,function(c){this.milliseconds=10*+c}],SSS:[/\d{3}/,function(c){this.milliseconds=+c}],s:[d,o("seconds")],ss:[d,o("seconds")],m:[d,o("minutes")],mm:[d,o("minutes")],H:[d,o("hours")],h:[d,o("hours")],HH:[d,o("hours")],hh:[d,o("hours")],D:[d,o("day")],DD:[s,o("day")],Do:[f,function(c){var p=h.ordinal,k=c.match(/\d+/);if(this.day=k[0],p)for(var E=1;E<=31;E+=1)p(E).replace(/\[|\]/g,"")===c&&(this.day=E)}],M:[d,o("month")],MM:[s,o("month")],MMM:[f,function(c){var p=l("months"),k=(l("monthsShort")||p.map(function(E){return E.slice(0,3)})).indexOf(c)+1;if(k<1)throw new Error;this.month=k%12||k}],MMMM:[f,function(c){var p=l("months").indexOf(c)+1;if(p<1)throw new Error;this.month=p%12||p}],Y:[/[+-]?\d+/,o("year")],YY:[s,function(c){this.year=y(c)}],YYYY:[/\d{4}/,o("year")],Z:n,ZZ:n};function _(c){var p,k;p=c,k=h&&h.formats;for(var E=(c=p.replace(/(\[[^\]]+])|(LTS?|l{1,4}|L{1,4})/g,function(v,D,S){var T=S&&S.toUpperCase();return D||k[S]||a[S]||k[T].replace(/(\[[^\]]+])|(MMMM|MM|DD|dddd)/g,function(G,M,R){return M||R.slice(1)})})).match(g),u=E.length,B=0;B<u;B+=1){var r=E[B],b=x[r],w=b&&b[0],C=b&&b[1];E[B]=C?{regex:w,parser:C}:r.replace(/^\[|\]$/g,"")}return function(v){for(var D={},S=0,T=0;S<u;S+=1){var G=E[S];if(typeof G=="string")T+=G.length;else{var M=G.regex,R=G.parser,O=v.slice(T),L=M.exec(O)[0];R.call(D,L),v=v.replace(L,"")}}return function(V){var N=V.afternoon;if(N!==void 0){var j=V.hours;N?j<12&&(V.hours+=12):j===12&&(V.hours=0),delete V.afternoon}}(D),D}}return function(c,p,k){k.p.customParseFormat=!0,c&&c.parseTwoDigitYear&&(y=c.parseTwoDigitYear);var E=p.prototype,u=E.parse;E.parse=function(B){var r=B.date,b=B.utc,w=B.args;this.$u=b;var C=w[1];if(typeof C=="string"){var v=w[2]===!0,D=w[3]===!0,S=v||D,T=w[2];D&&(T=w[2]),h=this.$locale(),!v&&T&&(h=k.Ls[T]),this.$d=function(O,L,V){try{if(["x","X"].indexOf(L)>-1)return new Date((L==="X"?1e3:1)*O);var N=_(L)(O),j=N.year,W=N.month,Ce=N.day,ve=N.hours,De=N.minutes,Se=N.seconds,Oe=N.milliseconds,Mt=N.zone,tt=new Date,et=Ce||(j||W?1:tt.getDate()),nt=j||tt.getFullYear(),X=0;j&&!W||(X=W>0?W-1:tt.getMonth());var ot=ve||0,rt=De||0,at=Se||0,it=Oe||0;return Mt?new Date(Date.UTC(nt,X,et,ot,rt,at,it+60*Mt.offset*1e3)):V?new Date(Date.UTC(nt,X,et,ot,rt,at,it)):new Date(nt,X,et,ot,rt,at,it)}catch{return new Date("")}}(r,C,b),this.init(),T&&T!==!0&&(this.$L=this.locale(T).$L),S&&r!=this.format(C)&&(this.$d=new Date("")),h={}}else if(C instanceof Array)for(var G=C.length,M=1;M<=G;M+=1){w[1]=C[M-1];var R=k.apply(this,w);if(R.isValid()){this.$d=R.$d,this.$L=R.$L,this.init();break}M===G&&(this.$d=new Date(""))}else u.call(this,B)}}})})(dt);const Yt=dt.exports,ft=Symbol("CHART_ROWS_KEY"),ut=Symbol("CONFIG_KEY"),gt=Symbol("EMIT_BAR_EVENT_KEY"),Q=Symbol("BAR_CONTAINER_KEY");function Y(){const e=t.inject(ut);if(!e)throw Error("Failed to inject config!");return e}const mt="YYYY-MM-DD HH:mm";function A(e=Y()){const{chartStart:i,chartEnd:a,barStart:g,barEnd:s,dateFormat:d}=e,f=t.computed(()=>y(i.value)),h=t.computed(()=>y(a.value)),y=(n,l)=>{let m;if(l!==void 0&&typeof n!="string"&&!(n instanceof Date)&&(m=l==="start"?n[g.value]:n[s.value]),typeof n=="string")m=n;else if(n instanceof Date)return I.default(n);const x=d.value||mt;return I.default(m,x,!0)};return{chartStartDayjs:f,chartEndDayjs:h,toDayjs:y,format:(n,l)=>l===!1?n instanceof Date?n:I.default(n).toDate():(typeof n=="string"||n instanceof Date?y(n):n).format(l)}}function q(){const{precision:e}=Y(),{chartStartDayjs:i,chartEndDayjs:a}=A(),g=t.computed(()=>{switch(e==null?void 0:e.value){case"hour":return"day";case"day":return"month";case"week":return"month";case"month":return"year";default:throw new Error("Precision prop incorrect. Must be one of the following: 'hour', 'day', 'month'")}}),s={hour:"HH",date:"DD.MMM ",day:"DD",week:"DD",month:"MMMM YYYY",year:"YYYY"};return{timeaxisUnits:t.computed(()=>{const f=[],h=[],y=g.value==="day"?"date":g.value,o=e.value;let n=i.value.startOf(o);const l=a.value.diff(i.value,"minutes",!0);let m=0,x=n[y]();for(;n.isBefore(a.value)||n.isSame(a.value);){if(n[y]()!==x){let u=0;if(f.length===0)u=n.startOf(y).diff(i.value,"minutes",!0)/l*100;else if(n.isSameOrAfter(a.value))u=a.value.diff(n.subtract(1,y).startOf(y),"minutes",!0)/l*100;else{const r=n.startOf(y),b=n.subtract(1,y).startOf(y);u=r.diff(b,"minutes",!0)/l*100}const B=n.subtract(1,y);f.push({label:B.format(s[y]),value:String(x),date:B.toDate(),width:String(u)+"%"}),m=0,x=n[y]()}let p=0;h.length===0?p=n.endOf(o).diff(i.value,"minutes",!0)/l*100:n.add(1,o).isSameOrAfter(a.value)?p=a.value.diff(n.startOf(o),"minutes",!0)/l*100:p=n.endOf(o).diff(n.startOf(o),"minutes",!0)/l*100;let k;switch(o){case"week":k=n.startOf("week");break;default:k=n[o==="day"?"date":o]()}h.push({label:n.format(s[o]),value:String(k),date:n.toDate(),width:String(p)+"%"});const E=n;n=n.add(1,o),(n.isBefore(a.value)||n.isSame(a.value))&&(m+=n.diff(E,"minutes",!0))}const _=a.value.isSame(a.value.startOf(y))?a.value[y]()-1:a.value[y]();return f.some(p=>p.value===String(_))||(m+=a.value.diff(n.subtract(1,o),"minutes",!0),f.push({label:a.value.format(s[y]),value:String(x),date:a.value.toDate(),width:`${m/l*100}%`})),{upperUnits:f,lowerUnits:h}})}}function z(e=Y()){const{dateFormat:i,chartSize:a}=e,{chartStartDayjs:g,chartEndDayjs:s,toDayjs:d,format:f}=A(e),h=t.computed(()=>s.value.diff(g.value,"minutes"));return{mapTimeToPosition:n=>{const l=a.width.value||0,m=d(n).diff(g.value,"minutes",!0);return Math.ceil(m/h.value*l)},mapPositionToTime:n=>{const l=a.width.value||0,m=n/l*h.value,x=f(g.value.add(m,"minutes"),i.value);if(typeof x=="string")return x;throw Error}}}const Rt={class:"g-timeaxis"},Nt=["onClick"],Vt=["onClick"],It={class:"milestone-description milestone-description-mark"},Ht=t.defineComponent({__name:"GGanttTimeaxis",props:{mileStoneList:null},emits:["onClickTimeUnit","onClickMilestone"],setup(e,{emit:i}){const a=e,{precision:g,colors:s}=Y(),{timeaxisUnits:d}=q(),f=()=>{var o;return((o=a.mileStoneList)==null?void 0:o.length)>0?{minHeight:"33%"}:{height:"50%"}},{mapTimeToPosition:h}=z(),y=o=>h(I.default(o).startOf("day").format("DD.MM.YYYY HH:mm"));return(o,n)=>{var l;return t.openBlock(),t.createElementBlock("div",Rt,[t.createElementVNode("div",{class:"g-timeunits-container",style:f},[(t.openBlock(!0),t.createElementBlock(t.Fragment,null,t.renderList(t.unref(d).upperUnits,({label:m,value:x,date:_,width:c},p)=>(t.openBlock(),t.createElementBlock("div",{key:_.getTime(),class:"g-upper-timeunit",style:t.normalizeStyle({background:p%2===0?t.unref(s).primary:t.unref(s).secondary,color:t.unref(s).text,width:c})},[t.renderSlot(o.$slots,"upper-timeunit",{label:m,value:x,date:_},()=>[t.createTextVNode(t.toDisplayString(m),1)])],4))),128))]),t.createElementVNode("div",{class:"g-timeunits-container",style:f},[(t.openBlock(!0),t.createElementBlock(t.Fragment,null,t.renderList(t.unref(d).lowerUnits,({label:m,value:x,date:_,width:c},p)=>(t.openBlock(),t.createElementBlock("div",{key:_.getTime(),class:"g-timeunit",style:t.normalizeStyle({background:p%2===0?t.unref(s).ternary:t.unref(s).quartenary,color:t.unref(s).text,flexDirection:t.unref(g)==="hour"?"column":"row",alignItems:t.unref(g)==="hour"?"":"center",width:c}),onClick:k=>i("onClickTimeUnit",{date:_})},[t.renderSlot(o.$slots,"timeunit",{label:m,value:x,date:_},()=>[t.createTextVNode(t.toDisplayString(m),1)]),t.unref(g)==="hour"?(t.openBlock(),t.createElementBlock("div",{key:0,class:"g-timeaxis-hour-pin",style:t.normalizeStyle({background:t.unref(s).text})},null,4)):t.createCommentVNode("",!0)],12,Nt))),128))]),((l=e.mileStoneList)==null?void 0:l.length)>0?(t.openBlock(),t.createElementBlock("div",{key:0,class:"g-timeunits-container",style:t.normalizeStyle([f,{position:"relative"}])},[(t.openBlock(!0),t.createElementBlock(t.Fragment,null,t.renderList(e.mileStoneList,m=>(t.openBlock(),t.createElementBlock("div",{style:t.normalizeStyle({left:y(m.date)+"px",top:0,position:"absolute"}),onClick:x=>i("onClickMilestone",{milestone:m})},[t.createElementVNode("p",It,"\u25BC"+t.toDisplayString(m.description),1)],12,Vt))),256))])):t.createCommentVNode("",!0)])}}}),Te="",zt={class:"g-grid-container"},jt=t.defineComponent({__name:"GGanttGrid",props:{highlightedDates:null},setup(e){const i=e,a=t.computed(()=>{var d;return(d=i.highlightedDates)==null?void 0:d.map(f=>f.getTime())}),{colors:g}=Y(),{timeaxisUnits:s}=q();return(d,f)=>(t.openBlock(),t.createElementBlock("div",zt,[(t.openBlock(!0),t.createElementBlock(t.Fragment,null,t.renderList(t.unref(s).lowerUnits,({label:h,value:y,width:o,date:n})=>{var l;return t.openBlock(),t.createElementBlock("div",{key:n.getTime(),class:"g-grid-line",style:t.normalizeStyle({width:o,background:(l=t.unref(a))!=null&&l.includes(n.getTime())?t.unref(g).hoverHighlight:void 0})},null,4)}),128))]))}}),Me="",At=t.defineComponent({__name:"GGanttBarTooltip",props:{bar:null,modelValue:{type:Boolean}},setup(e){const i=e,a={hour:"HH:mm",day:"DD. MMM HH:mm",week:"DD. MMM HH:mm",month:"DD. MMMM YYYY"},g="cadetblue",{bar:s}=t.toRefs(i),{precision:d,font:f,barStart:h,barEnd:y,rowHeight:o}=Y(),n=t.ref("0px"),l=t.ref("0px");t.watch(()=>i.bar,async()=>{var b;await t.nextTick();const k=((b=s==null?void 0:s.value)==null?void 0:b.ganttBarConfig.id)||"";if(!k)return;const E=document.getElementById(k),{top:u,left:B}=(E==null?void 0:E.getBoundingClientRect())||{top:0,left:0},r=Math.max(B,10);n.value=`${u+o.value-10}px`,l.value=`${r}px`},{deep:!0,immediate:!0});const m=t.computed(()=>{var k,E;return((E=(k=s==null?void 0:s.value)==null?void 0:k.ganttBarConfig.style)==null?void 0:E.background)||g}),{toDayjs:x}=A(),_=t.computed(()=>{var k;return(k=s.value)==null?void 0:k[h.value]}),c=t.computed(()=>{var k;return(k=s.value)==null?void 0:k[y.value]}),p=t.computed(()=>{if(!(s!=null&&s.value))return"";const k=a[d.value],E=x(_.value).format(k),u=x(c.value).format(k);return`${E} \u2013 ${u}`});return(k,E)=>(t.openBlock(),t.createBlock(t.Teleport,{to:"body"},[t.createVNode(t.Transition,{name:"g-fade",mode:"out-in"},{default:t.withCtx(()=>[e.modelValue?(t.openBlock(),t.createElementBlock("div",{key:0,class:"g-gantt-tooltip",style:t.normalizeStyle({top:n.value,left:l.value,fontFamily:t.unref(f)})},[t.createElementVNode("div",{class:"g-gantt-tooltip-color-dot",style:t.normalizeStyle({background:t.unref(m)})},null,4),t.renderSlot(k.$slots,"default",{bar:t.unref(s),barStart:t.unref(_),barEnd:t.unref(c)},()=>[t.createTextVNode(t.toDisplayString(t.unref(p)),1)])],4)):t.createCommentVNode("",!0)]),_:3})]))}}),Le="",pt={default:{primary:"#eeeeee",secondary:"#E0E0E0",ternary:"#F5F5F5",quartenary:"#ededed",hoverHighlight:"rgb(243 238 226)",text:"#404040",background:"white"},creamy:{primary:"#ffe8d9",secondary:"#fcdcc5",ternary:"#fff6f0",quartenary:"#f7ece6",hoverHighlight:"rgb(243 238 226)",text:"#542d05",background:"white"},crimson:{primary:"#a82039",secondary:"#c41238",ternary:"#db4f56",quartenary:"#ce5f64",hoverHighlight:"rgb(243 238 226)",text:"white",background:"white"},dark:{primary:"#404040",secondary:"#303030",ternary:"#353535",quartenary:"#383838",hoverHighlight:"rgb(243 238 226)",text:"white",background:"#525252",toast:"#1f1f1f"},flare:{primary:"#e08a38",secondary:"#e67912",ternary:"#5e5145",quartenary:"#665648",hoverHighlight:"rgb(243 238 226)",text:"white",background:"white"},fuchsia:{primary:"#de1d5a",secondary:"#b50b41",ternary:"#ff7da6",quartenary:"#f2799f",hoverHighlight:"rgb(243 238 226)",text:"white",background:"white"},grove:{primary:"#3d9960",secondary:"#288542",ternary:"#72b585",quartenary:"#65a577",hoverHighlight:"rgb(243 238 226)",text:"white",background:"white"},"material-blue":{primary:"#0D47A1",secondary:"#1565C0",ternary:"#42a5f5",quartenary:"#409fed",hoverHighlight:"rgb(243 238 226)",text:"white",background:"white"},sky:{primary:"#b5e3ff",secondary:"#a1d6f7",ternary:"#d6f7ff",quartenary:"#d0edf4",hoverHighlight:"rgb(243 238 226)",text:"#022c47",background:"white"},slumber:{primary:"#2a2f42",secondary:"#2f3447",ternary:"#35394d",quartenary:"#2c3044",hoverHighlight:"rgb(243 238 226)",text:"#ffe0b3",background:"#38383b",toast:"#1f1f1f"},vue:{primary:"#258a5d",secondary:"#41B883",ternary:"#35495E",quartenary:"#2a3d51",hoverHighlight:"rgb(243 238 226)",text:"white",background:"white"}};var ht;const F=typeof window<"u";F&&((ht=window==null?void 0:window.navigator)==null?void 0:ht.userAgent)&&/iP(ad|hone|od)/.test(window.navigator.userAgent);function Ft(e){return typeof e=="function"?e():t.unref(e)}function Pt(e){return e}function Ut(e){return t.getCurrentScope()?(t.onScopeDispose(e),!0):!1}function qt(e,i=!0){t.getCurrentInstance()?t.onMounted(e):i?e():t.nextTick(e)}function yt(e){var i;const a=Ft(e);return(i=a==null?void 0:a.$el)!=null?i:a}const Kt=F?window:void 0;F&&window.document,F&&window.navigator,F&&window.location;function Wt(e,i=!1){const a=t.ref(),g=()=>a.value=Boolean(e());return g(),qt(g,i),a}const Z=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},J="__vueuse_ssr_handlers__";Z[J]=Z[J]||{},Z[J];var bt=Object.getOwnPropertySymbols,Xt=Object.prototype.hasOwnProperty,Qt=Object.prototype.propertyIsEnumerable,Zt=(e,i)=>{var a={};for(var g in e)Xt.call(e,g)&&i.indexOf(g)<0&&(a[g]=e[g]);if(e!=null&&bt)for(var g of bt(e))i.indexOf(g)<0&&Qt.call(e,g)&&(a[g]=e[g]);return a};function Jt(e,i,a={}){const g=a,{window:s=Kt}=g,d=Zt(g,["window"]);let f;const h=Wt(()=>s&&"ResizeObserver"in s),y=()=>{f&&(f.disconnect(),f=void 0)},o=t.watch(()=>yt(e),l=>{y(),h.value&&s&&l&&(f=new ResizeObserver(i),f.observe(l,d))},{immediate:!0,flush:"post"}),n=()=>{y(),o()};return Ut(n),{isSupported:h,stop:n}}function te(e,i={width:0,height:0},a={}){const g=t.ref(i.width),s=t.ref(i.height);return Jt(e,([d])=>{g.value=d.contentRect.width,s.value=d.contentRect.height},a),t.watch(()=>yt(e),d=>{g.value=d?i.width:0,s.value=d?i.height:0}),{width:g,height:s}}var wt;(function(e){e.UP="UP",e.RIGHT="RIGHT",e.DOWN="DOWN",e.LEFT="LEFT",e.NONE="NONE"})(wt||(wt={}));var ee=Object.defineProperty,Bt=Object.getOwnPropertySymbols,ne=Object.prototype.hasOwnProperty,oe=Object.prototype.propertyIsEnumerable,xt=(e,i,a)=>i in e?ee(e,i,{enumerable:!0,configurable:!0,writable:!0,value:a}):e[i]=a,re=(e,i)=>{for(var a in i||(i={}))ne.call(i,a)&&xt(e,a,i[a]);if(Bt)for(var a of Bt(i))oe.call(i,a)&&xt(e,a,i[a]);return e};re({linear:Pt},{easeInSine:[.12,0,.39,0],easeOutSine:[.61,1,.88,1],easeInOutSine:[.37,0,.63,1],easeInQuad:[.11,0,.5,0],easeOutQuad:[.5,1,.89,1],easeInOutQuad:[.45,0,.55,1],easeInCubic:[.32,0,.67,0],easeOutCubic:[.33,1,.68,1],easeInOutCubic:[.65,0,.35,1],easeInQuart:[.5,0,.75,0],easeOutQuart:[.25,1,.5,1],easeInOutQuart:[.76,0,.24,1],easeInQuint:[.64,0,.78,0],easeOutQuint:[.22,1,.36,1],easeInOutQuint:[.83,0,.17,1],easeInExpo:[.7,0,.84,0],easeOutExpo:[.16,1,.3,1],easeInOutExpo:[.87,0,.13,1],easeInCirc:[.55,0,1,.45],easeOutCirc:[0,.55,.45,1],easeInOutCirc:[.85,0,.15,1],easeInBack:[.36,0,.66,-.56],easeOutBack:[.34,1.56,.64,1],easeInOutBack:[.68,-.6,.32,1.6]});const ae={key:0,class:"g-footer"},ie={class:"g-footer-container"},se=t.defineComponent({__name:"GGanttFooter",props:{labels:null},setup(e){const{precision:i,colors:a}=Y(),{timeaxisUnits:g}=q();return(s,d)=>e.labels?(t.openBlock(),t.createElementBlock("div",ae,[t.createElementVNode("div",ie,[(t.openBlock(!0),t.createElementBlock(t.Fragment,null,t.renderList(t.unref(g).lowerUnits,({label:f,value:h,date:y,width:o},n)=>(t.openBlock(),t.createElementBlock("div",{key:f,class:"g-timeunit",style:t.normalizeStyle({background:n%2===0?t.unref(a).ternary:t.unref(a).quartenary,color:t.unref(a).text,flexDirection:t.unref(i)==="hour"?"column":"row",alignItems:t.unref(i)==="hour"?"":"center",width:o})},[t.renderSlot(s.$slots,"timeunit",{label:f,value:h,date:y},()=>[t.createTextVNode(t.toDisplayString(e.labels[n]),1)],!0)],4))),128))])])):t.createCommentVNode("",!0)}}),$e="",le=((e,i)=>{const a=e.__vccOpts||e;for(const[g,s]of i)a[g]=s;return a})(se,[["__scopeId","data-v-400629df"]]),ce=t.defineComponent({__name:"GGanttDrawTodayLine",emits:["today-line-position-x"],setup(e,{emit:i}){const{mapTimeToPosition:a}=z(),g=t.computed(()=>(i("today-line-position-x",{xPosition:a(I.default().startOf("day").format("DD.MM.YYYY HH:mm"))}),a(I.default().startOf("day").format("DD.MM.YYYY HH:mm"))));return(s,d)=>(t.openBlock(),t.createElementBlock("div",{class:"vertical-line",style:t.normalizeStyle({left:t.unref(g)+"px",top:0})},null,4))}}),Re="",de=t.defineComponent({__name:"GGanttDrawVerticalLine",props:{date:null,color:null},setup(e){const i=e,{mapTimeToPosition:a}=z(),g=t.computed(()=>a(i.date.startOf("day").format("DD.MM.YYYY HH:mm")));return(s,d)=>(t.openBlock(),t.createElementBlock("div",{class:"vertical-line",style:t.normalizeStyle({left:t.unref(g)+"px",top:0,backgroundColor:e.color})},null,4))}}),Ne="",fe={class:"g-gantt-rows-container"},kt=t.defineComponent({__name:"GGanttChart",props:{chartStart:null,chartEnd:null,precision:{default:"day"},barStart:null,barEnd:null,dateFormat:{type:[String,Boolean],default:mt},width:{default:"100%"},hideTimeaxis:{type:Boolean,default:!1},colorScheme:{default:"default"},grid:{type:Boolean,default:!1},pushOnOverlap:{type:Boolean,default:!1},noOverlap:{type:Boolean,default:!1},rowHeight:{default:40},highlightedDates:{default:()=>[]},font:{default:"inherit"},footerLabels:null,sticky:{type:Boolean},displayTodayLine:{type:Boolean},mileStoneList:null,verticalLines:null},emits:["click-bar","mousedown-bar","mouseup-bar","dblclick-bar","mouseenter-bar","mouseleave-bar","dragstart-bar","drag-bar","dragend-bar","contextmenu-bar","today-line-position-x","onClickTimeUnit","onClickMilestone","bar-update"],setup(e,{emit:i}){const a=e,{width:g,font:s,colorScheme:d}=t.toRefs(a),f=t.useSlots(),h=t.computed(()=>typeof d.value!="string"?d.value:pt[d.value]||pt.default),y=()=>{var r;const u=(r=f.default)==null?void 0:r.call(f),B=[];return u&&u.forEach(b=>{var w;if((w=b.props)!=null&&w.bars){const C=b.props.bars;B.push(C)}else Array.isArray(b.children)&&b.children.forEach(C=>{var D;const v=C;if((D=v==null?void 0:v.props)!=null&&D.bars){const S=v.props.bars;B.push(S)}})}),B},o=t.ref(!1),n=t.ref(!1),l=t.ref(void 0);let m;const x=u=>{m&&clearTimeout(m),m=setTimeout(()=>{o.value=!0},800),l.value=u},_=()=>{clearTimeout(m),o.value=!1},c=(u,B,r,b,w)=>{if(typeof u=="string"){switch(u){case"bar-update":w!==void 0&&i("bar-update",{bar:B,newValue:w});break}return}switch(u.type){case"click":i("click-bar",{bar:B,e:u,datetime:r});break;case"mousedown":i("mousedown-bar",{bar:B,e:u,datetime:r});break;case"mouseup":i("mouseup-bar",{bar:B,e:u,datetime:r});break;case"dblclick":i("dblclick-bar",{bar:B,e:u,datetime:r});break;case"mouseenter":x(B),i("mouseenter-bar",{bar:B,e:u});break;case"mouseleave":_(),i("mouseleave-bar",{bar:B,e:u});break;case"dragstart":n.value=!0,i("dragstart-bar",{bar:B,e:u});break;case"drag":i("drag-bar",{bar:B,e:u});break;case"dragend":n.value=!1,i("dragend-bar",{bar:B,e:u});break;case"contextmenu":i("contextmenu-bar",{bar:B,e:u,datetime:r});break}},p=t.ref(null),k=t.ref(null),E=te(p);return t.provide(ft,y),t.provide(ut,{...t.toRefs(a),colors:h,chartSize:E}),t.provide(gt,c),(u,B)=>(t.openBlock(),t.createElementBlock(t.Fragment,null,[t.createElementVNode("div",{style:t.normalizeStyle([{display:"flex","flex-flow":"column"},e.sticky?"position: sticky; left:0;z-index:100; background: white;":""]),class:"g-gantt-wrapper",ref_key:"gGanttWrapperRef",ref:k},[t.renderSlot(u.$slots,"side-menu")],4),t.createElementVNode("div",{ref_key:"ganttChart",ref:p,class:"g-gantt-chart",style:t.normalizeStyle({width:t.unref(g),background:t.unref(h).background,fontFamily:t.unref(s)})},[e.hideTimeaxis?t.createCommentVNode("",!0):(t.openBlock(),t.createBlock(Ht,{key:0,"mile-stone-list":e.mileStoneList,onOnClickTimeUnit:B[0]||(B[0]=r=>u.$emit("onClickTimeUnit",r)),onOnClickMilestone:B[1]||(B[1]=r=>u.$emit("onClickMilestone",r))},{"upper-timeunit":t.withCtx(({label:r,value:b,date:w})=>[t.renderSlot(u.$slots,"upper-timeunit",{label:r,value:b,date:w})]),timeunit:t.withCtx(({label:r,value:b,date:w})=>[t.renderSlot(u.$slots,"timeunit",{label:r,value:b,date:w})]),_:3},8,["mile-stone-list"])),t.createElementVNode("div",fe,[e.grid?(t.openBlock(),t.createBlock(jt,{key:0,"highlighted-dates":e.highlightedDates},null,8,["highlighted-dates"])):t.createCommentVNode("",!0),e.displayTodayLine?(t.openBlock(),t.createBlock(ce,{key:1,onTodayLinePositionX:B[2]||(B[2]=r=>i("today-line-position-x",r))})):t.createCommentVNode("",!0),(t.openBlock(!0),t.createElementBlock(t.Fragment,null,t.renderList(e.verticalLines,r=>(t.openBlock(),t.createBlock(de,{date:r.date,color:r.color},null,8,["date","color"]))),256)),t.renderSlot(u.$slots,"default")]),e.hideTimeaxis?t.createCommentVNode("",!0):(t.openBlock(),t.createBlock(le,{key:1,labels:e.footerLabels},null,8,["labels"])),t.createVNode(At,{"model-value":o.value||n.value,bar:l.value},{default:t.withCtx(()=>[t.renderSlot(u.$slots,"bar-tooltip",{bar:l.value})]),_:3},8,["model-value","bar"])],4),t.createElementVNode("div",null,[t.renderSlot(u.$slots,"footer")])],64))}}),Ve="";function K(){const e=t.inject(gt);if(!e)throw Error("Failed to inject emitBarEvent!");return e}function _t(e,i=()=>null,a=()=>null,g=Y()){const{barStart:s,barEnd:d,pushOnOverlap:f}=g,h=t.ref(!1);let y=0,o;const{mapPositionToTime:n}=z(g),{toDayjs:l}=A(g),m=u=>{const B=document.getElementById(e.ganttBarConfig.id);if(!B)return;switch(y=u.clientX-(B.getBoundingClientRect().left||0),u.target.className){case"g-gantt-bar-handle-left":document.body.style.cursor="ew-resize",o=c;break;case"g-gantt-bar-handle-right":document.body.style.cursor="ew-resize",o=p;break;default:o=_}h.value=!0,window.addEventListener("mousemove",o),window.addEventListener("mouseup",E)},x=()=>{var r;const u=document.getElementById(e.ganttBarConfig.id),B=(r=u==null?void 0:u.closest(".g-gantt-row-bars-container"))==null?void 0:r.getBoundingClientRect();return{barElement:u,barContainer:B}},_=u=>{const{barElement:B,barContainer:r}=x();if(!B||!r)return;const b=B.getBoundingClientRect().width,w=u.clientX-r.left-y,C=w+b;if(!k(w,C)){if(e[s.value].substring(0,10)!=n(w).substring(0,10)){const v=l(e[s.value]),S=l(e[d.value]).diff(v,"minute"),T=n(w).substring(0,10)+" 00:00";e[s.value]=T,e[d.value]=l(T).add(S,"minute").format("DD.MM.YYYY HH:mm")}i(u,e)}},c=u=>{const{barElement:B,barContainer:r}=x();if(!B||!r)return;const b=u.clientX-r.left,w=n(b);if(!l(w).isSameOrAfter(l(e,"end"))){if(e[s.value].substring(0,10)!=n(b).substring(0,10)){const C=n(b).substring(0,10)+" 00:00";e[s.value]=C}i(u,e)}},p=u=>{const{barElement:B,barContainer:r}=x();if(!B||!r)return;const b=u.clientX-r.left,w=n(b);l(w).isSameOrBefore(l(e,"start"))||(e[d.value]=n(b).substring(0,10)+" 23:59",i(u,e))},k=(u,B)=>{if(!f.value)return!1;const r=e.ganttBarConfig.dragLimitLeft,b=e.ganttBarConfig.dragLimitRight;return u&&r!=null&&u<r||B&&b!=null&&B>b},E=u=>{h.value=!1,document.body.style.cursor="",window.removeEventListener("mousemove",o),window.removeEventListener("mouseup",E),a(u,e)};return{isDragging:h,initDrag:m}}function Et(){const e=t.inject(ft);if(!e)throw Error("Failed to inject getChartRows!");return e}function Ct(){const e=Y(),i=Et(),a=K(),{pushOnOverlap:g,barStart:s,barEnd:d,noOverlap:f,dateFormat:h}=e,y=new Map,{toDayjs:o,format:n}=A(),l=(r,b)=>{const{initDrag:w}=_t(r,x,E,e);a({...b,type:"dragstart"},r),w(b),u(r)},m=(r,b)=>{const w=r.ganttBarConfig.bundle;w!=null&&(i().forEach(C=>{C.forEach(v=>{if(v.ganttBarConfig.bundle===w){const D=v===r?E:()=>null,{initDrag:S}=_t(v,x,D,e);S(b),u(v)}})}),a({...b,type:"dragstart"},r))},x=(r,b)=>{a({...r,type:"drag"},b),_(b)},_=r=>{if(!(g!=null&&g.value))return;let b=r,{overlapBar:w,overlapType:C}=c(b);for(;w;){u(w);const v=o(b[s.value]),D=o(b[d.value]),S=o(w[s.value]),T=o(w[d.value]);let G;switch(C){case"left":G=T.diff(v,"minutes",!0),w[d.value]=n(b[s.value],h.value),w[s.value]=n(S.subtract(G,"minutes"),h.value);break;case"right":G=D.diff(S,"minutes",!0),w[s.value]=n(D,h.value),w[d.value]=n(T.add(G,"minutes"),h.value);break;default:console.warn("Vue-Ganttastic: One bar is inside of the other one! This should never occur while push-on-overlap is active!");return}w&&(C==="left"||C==="right")&&p(w,G,C),b=w,{overlapBar:w,overlapType:C}=c(w)}},c=r=>{let b,w,C;const v=i().find(M=>M.includes(r))||[],D=o(r[s.value]),S=o(r[d.value]);return{overlapBar:v.find(M=>{if(M===r)return!1;const R=o(M[s.value]),O=o(M[d.value]);return b=D.isBetween(R,O),w=S.isBetween(R,O),C=R.isBetween(D,S)||O.isBetween(D,S),b||w||C}),overlapType:b?"left":w?"right":C?"between":null}},p=(r,b,w)=>{console.log("######################################"),u(r),r.ganttBarConfig.bundle&&i().forEach(C=>{C.forEach(v=>{v.ganttBarConfig.bundle===r.ganttBarConfig.bundle&&v!==r&&(u(v),k(v,b,w))})})},k=(r,b,w)=>{switch(w){case"left":r[s.value]=n(o(r,"start").subtract(b,"minutes"),h.value),r[d.value]=n(o(r,"end").subtract(b,"minutes"),h.value);break;case"right":r[s.value]=n(o(r,"start").add(b,"minutes"),h.value),r[d.value]=n(o(r,"end").add(b,"minutes"),h.value)}_(r)},E=(r,b)=>{B();const w={...r,type:"dragend"};a(w,b,void 0,new Map(y)),y.clear()},u=r=>{if(!y.has(r)){const b=r[s.value],w=r[d.value];y.set(r,{oldStart:b,oldEnd:w})}},B=()=>{if(g.value||!f.value)return;let r=!1;y.forEach((b,w)=>{const{overlapBar:C}=c(w);C!=null&&(r=!0)}),r&&y.forEach(({oldStart:b,oldEnd:w},C)=>{C[s.value]=b,C[d.value]=w})};return{initDragOfBar:l,initDragOfBundle:m}}function vt(){const{pushOnOverlap:e}=Y(),i=Et(),a=f=>{const h=[];return f!=null&&i().forEach(y=>{y.forEach(o=>{o.ganttBarConfig.bundle===f&&h.push(o)})}),h},g=f=>{if(!e.value||f.ganttBarConfig.pushOnOverlap===!1)return;for(const y of["left","right"]){const o=y,{gapDistanceSoFar:n,bundleBarsAndGapDist:l}=s(f,0,o);let m=n;const x=l;if(!x)continue;for(let c=0;c<x.length;c++){const p=x[c].bar,k=x[c].gapDistance;a(p.ganttBarConfig.bundle).filter(u=>u!==p).forEach(u=>{const B=s(u,k,o),r=B.gapDistanceSoFar,b=B.bundleBarsAndGapDist;r!=null&&(!m||r<m)&&(m=r),b.forEach(w=>{x.find(C=>C.bar===w.bar)||x.push(w)})})}const _=document.getElementById(f.ganttBarConfig.id);m!=null&&o==="left"?f.ganttBarConfig.dragLimitLeft=_.offsetLeft-m:m!=null&&o==="right"&&(f.ganttBarConfig.dragLimitRight=_.offsetLeft+_.offsetWidth+m)}a(f.ganttBarConfig.bundle).forEach(y=>{y.ganttBarConfig.dragLimitLeft=f.ganttBarConfig.dragLimitLeft,y.ganttBarConfig.dragLimitRight=f.ganttBarConfig.dragLimitRight})},s=(f,h=0,y)=>{const o=f.ganttBarConfig.bundle?[{bar:f,gapDistance:h}]:[];let n=f,l=d(n,y);if(y==="left")for(;l;){const m=document.getElementById(n.ganttBarConfig.id),x=document.getElementById(l.ganttBarConfig.id),_=x.offsetLeft+x.offsetWidth;if(h+=m.offsetLeft-_,l.ganttBarConfig.immobile)return{gapDistanceSoFar:h,bundleBarsAndGapDist:o};l.ganttBarConfig.bundle&&o.push({bar:l,gapDistance:h}),n=l,l=d(l,"left")}if(y==="right")for(;l;){const m=document.getElementById(n.ganttBarConfig.id),x=document.getElementById(l.ganttBarConfig.id),_=m.offsetLeft+m.offsetWidth;if(h+=x.offsetLeft-_,l.ganttBarConfig.immobile)return{gapDistanceSoFar:h,bundleBarsAndGapDist:o};l.ganttBarConfig.bundle&&o.push({bar:l,gapDistance:h}),n=l,l=d(l,"right")}return{gapDistanceSoFar:null,bundleBarsAndGapDist:o}},d=(f,h)=>{const y=document.getElementById(f.ganttBarConfig.id),o=i().find(l=>l.includes(f))||[];let n=[];return h==="left"?n=o.filter(l=>{const m=document.getElementById(l.ganttBarConfig.id);return m&&m.offsetLeft<y.offsetLeft&&l.ganttBarConfig.pushOnOverlap!==!1}):n=o.filter(l=>{const m=document.getElementById(l.ganttBarConfig.id);return m&&m.offsetLeft>y.offsetLeft&&l.ganttBarConfig.pushOnOverlap!==!1}),n.length>0?n.reduce((l,m)=>{const x=document.getElementById(l.ganttBarConfig.id),_=document.getElementById(m.ganttBarConfig.id),c=Math.abs(x.offsetLeft-y.offsetLeft),p=Math.abs(_.offsetLeft-y.offsetLeft);return c<p?l:m},n[0]):null};return{setDragLimitsOfGanttBar:g}}const ue=["id"],ge={class:"g-gantt-bar-label"},me={style:{"z-index":"100"}},pe=t.createElementVNode("div",{class:"g-gantt-bar-handle-left"},null,-1),he=t.createElementVNode("div",{class:"g-gantt-bar-handle-right"},null,-1),ye=t.defineComponent({__name:"GGanttBar",props:{bar:null},setup(e){const i=e,a=K(),g=Y(),{rowHeight:s}=g,{bar:d}=t.toRefs(i),{mapTimeToPosition:f,mapPositionToTime:h}=z(),{initDragOfBar:y,initDragOfBundle:o}=Ct(),{setDragLimitsOfGanttBar:n}=vt(),l=t.ref(!1),m=t.computed(()=>d.value.ganttBarConfig);function x(v){m.value.bundle!=null?o(d.value,v):y(d.value,v),l.value=!0}const _=()=>{n(d.value),!m.value.immobile&&(window.addEventListener("mousemove",x,{once:!0}),window.addEventListener("mouseup",()=>{window.removeEventListener("mousemove",x),l.value=!1},{once:!0}))},c=t.inject(Q),p=v=>{var T;v.preventDefault(),v.type==="mousedown"&&_();const D=(T=c==null?void 0:c.value)==null?void 0:T.getBoundingClientRect();if(!D)return;const S=h(v.clientX-D.left);a(v,d.value,S)},{barStart:k,barEnd:E,width:u,chartStart:B,chartEnd:r,chartSize:b}=g,w=t.ref(0),C=t.ref(0);return t.onMounted(()=>{t.watch([d,u,B,r,b.width],()=>{w.value=f(d.value[k.value]),C.value=f(d.value[E.value])},{deep:!0,immediate:!0})}),(v,D)=>(t.openBlock(),t.createElementBlock("div",{id:t.unref(m).id,class:"g-gantt-bar",style:t.normalizeStyle({...t.unref(m).style,position:"absolute",top:`${t.unref(s)*.1}px`,left:`${w.value}px`,width:`${C.value-w.value}px`,height:`${t.unref(s)*.8}px`,zIndex:l.value?3:2}),onMousedown:p,onClick:p,onDblclick:p,onMouseenter:p,onMouseleave:p,onContextmenu:p},[t.createElementVNode("div",ge,[t.renderSlot(v.$slots,"default",{bar:t.unref(d)},()=>[t.createElementVNode("div",me,t.toDisplayString(t.unref(m).label||""),1),t.unref(m).progress?(t.openBlock(),t.createElementBlock("div",{key:0,style:t.normalizeStyle([{position:"absolute",height:"100%",left:"0"},{width:t.unref(m).progress+"%",backgroundColor:t.unref(m).progressColor}])},null,4)):t.createCommentVNode("",!0)])]),t.unref(m).hasHandles?(t.openBlock(),t.createElementBlock(t.Fragment,{key:0},[pe,he],64)):t.createCommentVNode("",!0)],44,ue))}}),Ie="",be=["id"],we={class:"g-gantt-bar-label"},Be={key:0,style:{"z-index":"100"}},xe=["onKeyup"],ke=t.createElementVNode("div",{class:"g-gantt-bar-handle-left"},null,-1),_e=t.createElementVNode("div",{class:"g-gantt-bar-handle-right"},null,-1),Ee=t.defineComponent({__name:"GGanttEditableBar",props:{bar:null},emits:["update"],setup(e,{emit:i}){const a=e,g=K(),s=Y(),{rowHeight:d}=s,{bar:f}=t.toRefs(a),{mapTimeToPosition:h,mapPositionToTime:y}=z(),{initDragOfBar:o,initDragOfBundle:n}=Ct(),{setDragLimitsOfGanttBar:l}=vt(),m=t.ref(!1),x=t.ref(!1),_=t.ref(""),c=t.ref(null),p=t.computed(()=>f.value.ganttBarConfig);function k(O){p.value.bundle!=null?n(f.value,O):o(f.value,O),m.value=!0}const E=()=>{l(f.value),!p.value.immobile&&(window.addEventListener("mousemove",k,{once:!0}),window.addEventListener("mouseup",()=>{window.removeEventListener("mousemove",k),m.value=!1},{once:!0}))},u=t.inject(Q),B=O=>{var N;O.preventDefault(),O.type==="mousedown"&&E();const L=(N=u==null?void 0:u.value)==null?void 0:N.getBoundingClientRect();if(!L)return;const V=y(O.clientX-L.left);g(O,f.value,V)},r=O=>{x.value||(O.stopPropagation(),x.value=!0,_.value=p.value.label||"",t.nextTick(()=>{c.value&&(c.value.focus(),c.value.select())}))},b=O=>{const L=["Backspace","Delete","ArrowLeft","ArrowRight","Tab"];!/^[0-9]$/.test(O.key)&&!L.includes(O.key)&&O.preventDefault()},w=()=>{if(!x.value)return;if(x.value=!1,_.value.trim()===""){p.value.label="",i("update",{bar:f.value,newValue:void 0});return}const O=parseInt(_.value),L=isNaN(O)?0:Math.max(0,O);p.value.label!==L.toString()&&(p.value.label=L.toString(),i("update",{bar:f.value,newValue:L}))},{barStart:C,barEnd:v,width:D,chartStart:S,chartEnd:T,chartSize:G}=s,M=t.ref(0),R=t.ref(0);return t.onMounted(()=>{t.watch([f,D,S,T,G.width],()=>{M.value=h(f.value[C.value]),R.value=h(f.value[v.value])},{deep:!0,immediate:!0})}),(O,L)=>(t.openBlock(),t.createElementBlock("div",{id:t.unref(p).id,class:"g-gantt-bar",style:t.normalizeStyle({...t.unref(p).style,position:"absolute",top:`${t.unref(d)*.1}px`,left:`${M.value}px`,width:`${R.value-M.value}px`,height:`${t.unref(d)*.8}px`,zIndex:m.value?3:2}),onMousedown:B,onClick:r,onDblclick:B,onMouseenter:B,onMouseleave:B,onContextmenu:B},[t.createElementVNode("div",we,[t.renderSlot(O.$slots,"default",{bar:t.unref(f)},()=>[x.value?t.withDirectives((t.openBlock(),t.createElementBlock("input",{key:1,ref_key:"inputRef",ref:c,"onUpdate:modelValue":L[0]||(L[0]=V=>_.value=V),type:"text",class:"g-gantt-bar-edit-input",onKeyup:t.withKeys(w,["enter"]),onBlur:w,onKeydown:b},null,40,xe)),[[t.vModelText,_.value]]):(t.openBlock(),t.createElementBlock("div",Be,t.toDisplayString(t.unref(p).label||""),1)),t.unref(p).progress?(t.openBlock(),t.createElementBlock("div",{key:2,style:t.normalizeStyle([{position:"absolute",height:"100%",left:"0"},{width:t.unref(p).progress+"%",backgroundColor:t.unref(p).progressColor}])},null,4)):t.createCommentVNode("",!0)])]),t.unref(p).hasHandles?(t.openBlock(),t.createElementBlock(t.Fragment,{key:0},[ke,_e],64)):t.createCommentVNode("",!0)],44,be))}}),He="",Dt=t.defineComponent({__name:"GGanttRow",props:{bars:null,highlightOnHover:{type:Boolean}},emits:["drop","bar-update"],setup(e,{emit:i}){const a=e,{rowHeight:g,colors:s}=Y(),{highlightOnHover:d}=t.toRefs(a),f=t.ref(!1),h=K(),y=t.computed(()=>({height:`${g.value}px`,background:(d==null?void 0:d.value)&&f.value?s.value.hoverHighlight:null})),{mapPositionToTime:o}=z(),n=t.ref(null);t.provide(Q,n);const l=x=>{var k;const _=(k=n.value)==null?void 0:k.getBoundingClientRect();if(!_){console.error("Vue-Ganttastic: failed to find bar container element for row.");return}const c=x.clientX-_.left,p=o(c);i("drop",{e:x,datetime:p})},m=x=>{i("bar-update",x),h("bar-update",x.bar,void 0,void 0,x.newValue)};return(x,_)=>(t.openBlock(),t.createElementBlock("div",{class:"g-gantt-row",style:t.normalizeStyle(t.unref(y)),onDragover:_[0]||(_[0]=t.withModifiers(c=>f.value=!0,["prevent"])),onDragleave:_[1]||(_[1]=c=>f.value=!1),onDrop:_[2]||(_[2]=c=>l(c)),onMouseover:_[3]||(_[3]=c=>f.value=!0),onMouseleave:_[4]||(_[4]=c=>f.value=!1)},[t.createCommentVNode("",!0),t.createElementVNode("div",t.mergeProps({ref_key:"barContainer",ref:n,class:"g-gantt-row-bars-container"},x.$attrs),[t.createVNode(t.TransitionGroup,{name:"bar-transition",tag:"div"},{default:t.withCtx(()=>[(t.openBlock(!0),t.createElementBlock(t.Fragment,null,t.renderList(e.bars,c=>(t.openBlock(),t.createElementBlock(t.Fragment,{key:c.ganttBarConfig.id},[c.editable?(t.openBlock(),t.createBlock(Ee,{key:0,bar:c,onUpdate:m},{default:t.withCtx(()=>[t.renderSlot(x.$slots,"bar-label",{bar:c})]),_:2},1032,["bar"])):(t.openBlock(),t.createBlock(ye,{key:1,bar:c},{default:t.withCtx(()=>[t.renderSlot(x.$slots,"bar-label",{bar:c})]),_:2},1032,["bar"]))],64))),128))]),_:3})],16)],36))}}),ze="",St=t.defineComponent({__name:"GGanttLabelRow",props:{labels:null,styles:null},setup(e){const{rowHeight:i,colors:a}=Y(),{timeaxisUnits:g}=q();return(s,d)=>(t.openBlock(),t.createElementBlock("div",{class:"g-gantt-row",style:t.normalizeStyle({height:t.unref(i)+"px"})},[t.createElementVNode("div",t.mergeProps({ref:"barContainer",class:"g-gantt-row-bars-container"},s.$attrs),[(t.openBlock(!0),t.createElementBlock(t.Fragment,null,t.renderList(t.unref(g).lowerUnits,({label:f,width:h,date:y},o)=>(t.openBlock(),t.createElementBlock("div",{key:y.getTime(),class:"g-timeunit",style:t.normalizeStyle({color:t.unref(a).text,textAlign:"center",width:h})},[t.createElementVNode("div",{class:"label",style:t.normalizeStyle(e.styles!=null?e.styles[o]:void 0)},t.toDisplayString(e.labels[o]),5)],4))),128))],16)],4))}}),je="";function Ot(){I.default.extend(Lt),I.default.extend(Gt),I.default.extend($t),I.default.extend(Yt)}const Tt={install(e,i){Ot(),e.component("GGanttChart",kt),e.component("GGanttRow",Dt),e.component("GGanttLabelRow",St)}};$.GGanttChart=kt,$.GGanttLabelRow=St,$.GGanttRow=Dt,$.default=Tt,$.extendDayjs=Ot,$.ganttastic=Tt,Object.defineProperties($,{__esModule:{value:!0},[Symbol.toStringTag]:{value:"Module"}})});function injectStyle($,H="top"){if(!$||typeof document>"u")return;const t=document.head,P=document.createElement("style");H==="top"&&t.firstChild?t.insertBefore(P,t.firstChild):t.appendChild(P),P.appendChild(document.createTextNode($))}injectStyle(`
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
.label {
  display: flex;
  width: 100%;
  height: 100%;
  justify-content: center;
  align-items: center;
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
  width: 0;
  white-space: nowrap;
}
.milestone-description > span {
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
.g-gantt-bar {
  display: flex;
  justify-content: center;
  align-items: center;
  background: cadetblue;
  overflow: hidden;
  cursor: pointer;
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
.g-gantt-bar-edit-input {
  width: 80%;
  height: 70%;
  text-align: center;
  background-color: white;
  border: 1px solid #ccc;
  border-radius: 3px;
  font-size: 0.9em;
  padding: 0 5px;
  box-sizing: border-box;
  z-index: 100;
}
.g-gantt-bar-edit-input:focus {
  outline: none;
  border-color: #4a90e2;
  box-shadow: 0 0 3px rgba(74, 144, 226, 0.5);
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
.vertical-line {
  width: 2px;
  height: 100%;
  background-color: red;
  position: absolute;
  z-index: 1;
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
