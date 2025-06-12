(function($,H){typeof exports=="object"&&typeof module<"u"?H(exports,require("dayjs"),require("vue")):typeof define=="function"&&define.amd?define(["exports","dayjs","vue"],H):($=typeof globalThis<"u"?globalThis:$||self,H($.VueGanttastic={},$.dayjs,$.Vue))})(this,function($,H,t){"use strict";const I=(e=>e&&typeof e=="object"&&"default"in e?e:{default:e})(H);var U=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},st={exports:{}};(function(e,i){(function(a,g){e.exports=g()})(U,function(){return function(a,g){g.prototype.isSameOrBefore=function(s,c){return this.isSame(s,c)||this.isBefore(s,c)}}})})(st);const Lt=st.exports;var lt={exports:{}};(function(e,i){(function(a,g){e.exports=g()})(U,function(){return function(a,g){g.prototype.isSameOrAfter=function(s,c){return this.isSame(s,c)||this.isAfter(s,c)}}})})(lt);const Gt=lt.exports;var ct={exports:{}};(function(e,i){(function(a,g){e.exports=g()})(U,function(){return function(a,g,s){g.prototype.isBetween=function(c,u,p,y){var o=s(c),n=s(u),l=(y=y||"()")[0]==="(",m=y[1]===")";return(l?this.isAfter(o,p):!this.isBefore(o,p))&&(m?this.isBefore(n,p):!this.isAfter(n,p))||(l?this.isBefore(o,p):!this.isAfter(o,p))&&(m?this.isAfter(n,p):!this.isBefore(n,p))}}})})(ct);const $t=ct.exports;var dt={exports:{}};(function(e,i){(function(a,g){e.exports=g()})(U,function(){var a={LTS:"h:mm:ss A",LT:"h:mm A",L:"MM/DD/YYYY",LL:"MMMM D, YYYY",LLL:"MMMM D, YYYY h:mm A",LLLL:"dddd, MMMM D, YYYY h:mm A"},g=/(\[[^[]*\])|([-_:/.,()\s]+)|(A|a|YYYY|YY?|MM?M?M?|Do|DD?|hh?|HH?|mm?|ss?|S{1,3}|z|ZZ?)/g,s=/\d\d/,c=/\d\d?/,u=/\d*[^-_:/,()\s\d]+/,p={},y=function(d){return(d=+d)+(d>68?1900:2e3)},o=function(d){return function(h){this[d]=+h}},n=[/[+-]\d\d:?(\d\d)?|Z/,function(d){(this.zone||(this.zone={})).offset=function(h){if(!h||h==="Z")return 0;var k=h.match(/([+-]|\d\d)/g),E=60*k[1]+(+k[2]||0);return E===0?0:k[0]==="+"?-E:E}(d)}],l=function(d){var h=p[d];return h&&(h.indexOf?h:h.s.concat(h.f))},m=function(d,h){var k,E=p.meridiem;if(E){for(var f=1;f<=24;f+=1)if(d.indexOf(E(f,0,h))>-1){k=f>12;break}}else k=d===(h?"pm":"PM");return k},x={A:[u,function(d){this.afternoon=m(d,!1)}],a:[u,function(d){this.afternoon=m(d,!0)}],S:[/\d/,function(d){this.milliseconds=100*+d}],SS:[s,function(d){this.milliseconds=10*+d}],SSS:[/\d{3}/,function(d){this.milliseconds=+d}],s:[c,o("seconds")],ss:[c,o("seconds")],m:[c,o("minutes")],mm:[c,o("minutes")],H:[c,o("hours")],h:[c,o("hours")],HH:[c,o("hours")],hh:[c,o("hours")],D:[c,o("day")],DD:[s,o("day")],Do:[u,function(d){var h=p.ordinal,k=d.match(/\d+/);if(this.day=k[0],h)for(var E=1;E<=31;E+=1)h(E).replace(/\[|\]/g,"")===d&&(this.day=E)}],M:[c,o("month")],MM:[s,o("month")],MMM:[u,function(d){var h=l("months"),k=(l("monthsShort")||h.map(function(E){return E.slice(0,3)})).indexOf(d)+1;if(k<1)throw new Error;this.month=k%12||k}],MMMM:[u,function(d){var h=l("months").indexOf(d)+1;if(h<1)throw new Error;this.month=h%12||h}],Y:[/[+-]?\d+/,o("year")],YY:[s,function(d){this.year=y(d)}],YYYY:[/\d{4}/,o("year")],Z:n,ZZ:n};function _(d){var h,k;h=d,k=p&&p.formats;for(var E=(d=h.replace(/(\[[^\]]+])|(LTS?|l{1,4}|L{1,4})/g,function(D,v,S){var T=S&&S.toUpperCase();return v||k[S]||a[S]||k[T].replace(/(\[[^\]]+])|(MMMM|MM|DD|dddd)/g,function(G,M,R){return M||R.slice(1)})})).match(g),f=E.length,B=0;B<f;B+=1){var r=E[B],b=x[r],w=b&&b[0],C=b&&b[1];E[B]=C?{regex:w,parser:C}:r.replace(/^\[|\]$/g,"")}return function(D){for(var v={},S=0,T=0;S<f;S+=1){var G=E[S];if(typeof G=="string")T+=G.length;else{var M=G.regex,R=G.parser,O=D.slice(T),L=M.exec(O)[0];R.call(v,L),D=D.replace(L,"")}}return function(V){var N=V.afternoon;if(N!==void 0){var j=V.hours;N?j<12&&(V.hours+=12):j===12&&(V.hours=0),delete V.afternoon}}(v),v}}return function(d,h,k){k.p.customParseFormat=!0,d&&d.parseTwoDigitYear&&(y=d.parseTwoDigitYear);var E=h.prototype,f=E.parse;E.parse=function(B){var r=B.date,b=B.utc,w=B.args;this.$u=b;var C=w[1];if(typeof C=="string"){var D=w[2]===!0,v=w[3]===!0,S=D||v,T=w[2];v&&(T=w[2]),p=this.$locale(),!D&&T&&(p=k.Ls[T]),this.$d=function(O,L,V){try{if(["x","X"].indexOf(L)>-1)return new Date((L==="X"?1e3:1)*O);var N=_(L)(O),j=N.year,W=N.month,Ce=N.day,De=N.hours,ve=N.minutes,Se=N.seconds,Oe=N.milliseconds,Mt=N.zone,tt=new Date,et=Ce||(j||W?1:tt.getDate()),nt=j||tt.getFullYear(),X=0;j&&!W||(X=W>0?W-1:tt.getMonth());var ot=De||0,rt=ve||0,at=Se||0,it=Oe||0;return Mt?new Date(Date.UTC(nt,X,et,ot,rt,at,it+60*Mt.offset*1e3)):V?new Date(Date.UTC(nt,X,et,ot,rt,at,it)):new Date(nt,X,et,ot,rt,at,it)}catch{return new Date("")}}(r,C,b),this.init(),T&&T!==!0&&(this.$L=this.locale(T).$L),S&&r!=this.format(C)&&(this.$d=new Date("")),p={}}else if(C instanceof Array)for(var G=C.length,M=1;M<=G;M+=1){w[1]=C[M-1];var R=k.apply(this,w);if(R.isValid()){this.$d=R.$d,this.$L=R.$L,this.init();break}M===G&&(this.$d=new Date(""))}else f.call(this,B)}}})})(dt);const Yt=dt.exports,ft=Symbol("CHART_ROWS_KEY"),ut=Symbol("CONFIG_KEY"),gt=Symbol("EMIT_BAR_EVENT_KEY"),Q=Symbol("BAR_CONTAINER_KEY");function Y(){const e=t.inject(ut);if(!e)throw Error("Failed to inject config!");return e}const mt="YYYY-MM-DD HH:mm";function A(e=Y()){const{chartStart:i,chartEnd:a,barStart:g,barEnd:s,dateFormat:c}=e,u=t.computed(()=>y(i.value)),p=t.computed(()=>y(a.value)),y=(n,l)=>{let m;if(l!==void 0&&typeof n!="string"&&!(n instanceof Date)&&(m=l==="start"?n[g.value]:n[s.value]),typeof n=="string")m=n;else if(n instanceof Date)return I.default(n);const x=c.value||mt;return I.default(m,x,!0)};return{chartStartDayjs:u,chartEndDayjs:p,toDayjs:y,format:(n,l)=>l===!1?n instanceof Date?n:I.default(n).toDate():(typeof n=="string"||n instanceof Date?y(n):n).format(l)}}function q(){const{precision:e}=Y(),{chartStartDayjs:i,chartEndDayjs:a}=A(),g=t.computed(()=>{switch(e==null?void 0:e.value){case"hour":return"day";case"day":return"month";case"week":return"month";case"month":return"year";default:throw new Error("Precision prop incorrect. Must be one of the following: 'hour', 'day', 'month'")}}),s={hour:"HH",date:"DD.MMM ",day:"DD",week:"DD",month:"MMMM YYYY",year:"YYYY"};return{timeaxisUnits:t.computed(()=>{const u=[],p=[],y=g.value==="day"?"date":g.value,o=e.value;let n=i.value.startOf(o);const l=a.value.diff(i.value,"minutes",!0);let m=0,x=n[y]();for(;n.isBefore(a.value)||n.isSame(a.value);){if(n[y]()!==x){let f=0;if(u.length===0)f=n.startOf(y).diff(i.value,"minutes",!0)/l*100;else if(n.isSameOrAfter(a.value))f=a.value.diff(n.subtract(1,y).startOf(y),"minutes",!0)/l*100;else{const r=n.startOf(y),b=n.subtract(1,y).startOf(y);f=r.diff(b,"minutes",!0)/l*100}const B=n.subtract(1,y);u.push({label:B.format(s[y]),value:String(x),date:B.toDate(),width:String(f)+"%"}),m=0,x=n[y]()}let h=0;p.length===0?h=n.endOf(o).diff(i.value,"minutes",!0)/l*100:n.add(1,o).isSameOrAfter(a.value)?h=a.value.diff(n.startOf(o),"minutes",!0)/l*100:h=n.endOf(o).diff(n.startOf(o),"minutes",!0)/l*100;let k;switch(o){case"week":k=n.startOf("week");break;default:k=n[o==="day"?"date":o]()}p.push({label:n.format(s[o]),value:String(k),date:n.toDate(),width:String(h)+"%"});const E=n;n=n.add(1,o),(n.isBefore(a.value)||n.isSame(a.value))&&(m+=n.diff(E,"minutes",!0))}const _=a.value.isSame(a.value.startOf(y))?a.value[y]()-1:a.value[y]();return u.some(h=>h.value===String(_))||(m+=a.value.diff(n.subtract(1,o),"minutes",!0),u.push({label:a.value.format(s[y]),value:String(x),date:a.value.toDate(),width:`${m/l*100}%`})),{upperUnits:u,lowerUnits:p}})}}function z(e=Y()){const{dateFormat:i,chartSize:a}=e,{chartStartDayjs:g,chartEndDayjs:s,toDayjs:c,format:u}=A(e),p=t.computed(()=>s.value.diff(g.value,"minutes"));return{mapTimeToPosition:n=>{const l=a.width.value||0,m=c(n).diff(g.value,"minutes",!0);return Math.ceil(m/p.value*l)},mapPositionToTime:n=>{const l=a.width.value||0,m=n/l*p.value,x=u(g.value.add(m,"minutes"),i.value);if(typeof x=="string")return x;throw Error}}}const Rt={class:"g-timeaxis"},Nt=["onClick"],Vt=["onClick"],It={class:"milestone-description milestone-description-mark"},Ht=t.defineComponent({__name:"GGanttTimeaxis",props:{mileStoneList:null},emits:["onClickTimeUnit","onClickMilestone"],setup(e,{emit:i}){const a=e,{precision:g,colors:s}=Y(),{timeaxisUnits:c}=q(),u=()=>{var o;return((o=a.mileStoneList)==null?void 0:o.length)>0?{minHeight:"33%"}:{height:"50%"}},{mapTimeToPosition:p}=z(),y=o=>p(I.default(o).startOf("day").format("DD.MM.YYYY HH:mm"));return(o,n)=>{var l;return t.openBlock(),t.createElementBlock("div",Rt,[t.createElementVNode("div",{class:"g-timeunits-container",style:u},[(t.openBlock(!0),t.createElementBlock(t.Fragment,null,t.renderList(t.unref(c).upperUnits,({label:m,value:x,date:_,width:d},h)=>(t.openBlock(),t.createElementBlock("div",{key:_.getTime(),class:"g-upper-timeunit",style:t.normalizeStyle({background:h%2===0?t.unref(s).primary:t.unref(s).secondary,color:t.unref(s).text,width:d})},[t.renderSlot(o.$slots,"upper-timeunit",{label:m,value:x,date:_},()=>[t.createTextVNode(t.toDisplayString(m),1)])],4))),128))]),t.createElementVNode("div",{class:"g-timeunits-container",style:u},[(t.openBlock(!0),t.createElementBlock(t.Fragment,null,t.renderList(t.unref(c).lowerUnits,({label:m,value:x,date:_,width:d},h)=>(t.openBlock(),t.createElementBlock("div",{key:_.getTime(),class:"g-timeunit",style:t.normalizeStyle({background:h%2===0?t.unref(s).ternary:t.unref(s).quartenary,color:t.unref(s).text,flexDirection:t.unref(g)==="hour"?"column":"row",alignItems:t.unref(g)==="hour"?"":"center",width:d}),onClick:k=>i("onClickTimeUnit",{date:_})},[t.renderSlot(o.$slots,"timeunit",{label:m,value:x,date:_},()=>[t.createTextVNode(t.toDisplayString(m),1)]),t.unref(g)==="hour"?(t.openBlock(),t.createElementBlock("div",{key:0,class:"g-timeaxis-hour-pin",style:t.normalizeStyle({background:t.unref(s).text})},null,4)):t.createCommentVNode("",!0)],12,Nt))),128))]),((l=e.mileStoneList)==null?void 0:l.length)>0?(t.openBlock(),t.createElementBlock("div",{key:0,class:"g-timeunits-container",style:t.normalizeStyle([u,{position:"relative"}])},[(t.openBlock(!0),t.createElementBlock(t.Fragment,null,t.renderList(e.mileStoneList,m=>(t.openBlock(),t.createElementBlock("div",{style:t.normalizeStyle({left:y(m.date)+"px",top:0,position:"absolute"}),onClick:x=>i("onClickMilestone",{milestone:m})},[t.createElementVNode("p",It,"\u25BC"+t.toDisplayString(m.description),1)],12,Vt))),256))])):t.createCommentVNode("",!0)])}}}),Te="",zt={class:"g-grid-container"},jt=t.defineComponent({__name:"GGanttGrid",props:{highlightedDates:null},setup(e){const i=e,a=t.computed(()=>{var c;return(c=i.highlightedDates)==null?void 0:c.map(u=>u.getTime())}),{colors:g}=Y(),{timeaxisUnits:s}=q();return(c,u)=>(t.openBlock(),t.createElementBlock("div",zt,[(t.openBlock(!0),t.createElementBlock(t.Fragment,null,t.renderList(t.unref(s).lowerUnits,({label:p,value:y,width:o,date:n})=>{var l;return t.openBlock(),t.createElementBlock("div",{key:n.getTime(),class:"g-grid-line",style:t.normalizeStyle({width:o,background:(l=t.unref(a))!=null&&l.includes(n.getTime())?t.unref(g).hoverHighlight:void 0})},null,4)}),128))]))}}),Me="",At=t.defineComponent({__name:"GGanttBarTooltip",props:{bar:null,modelValue:{type:Boolean}},setup(e){const i=e,a={hour:"HH:mm",day:"DD. MMM HH:mm",week:"DD. MMM HH:mm",month:"DD. MMMM YYYY"},g="cadetblue",{bar:s}=t.toRefs(i),{precision:c,font:u,barStart:p,barEnd:y,rowHeight:o}=Y(),n=t.ref("0px"),l=t.ref("0px");t.watch(()=>i.bar,async()=>{var b;await t.nextTick();const k=((b=s==null?void 0:s.value)==null?void 0:b.ganttBarConfig.id)||"";if(!k)return;const E=document.getElementById(k),{top:f,left:B}=(E==null?void 0:E.getBoundingClientRect())||{top:0,left:0},r=Math.max(B,10);n.value=`${f+o.value-10}px`,l.value=`${r}px`},{deep:!0,immediate:!0});const m=t.computed(()=>{var k,E;return((E=(k=s==null?void 0:s.value)==null?void 0:k.ganttBarConfig.style)==null?void 0:E.background)||g}),{toDayjs:x}=A(),_=t.computed(()=>{var k;return(k=s.value)==null?void 0:k[p.value]}),d=t.computed(()=>{var k;return(k=s.value)==null?void 0:k[y.value]}),h=t.computed(()=>{if(!(s!=null&&s.value))return"";const k=a[c.value],E=x(_.value).format(k),f=x(d.value).format(k);return`${E} \u2013 ${f}`});return(k,E)=>(t.openBlock(),t.createBlock(t.Teleport,{to:"body"},[t.createVNode(t.Transition,{name:"g-fade",mode:"out-in"},{default:t.withCtx(()=>[e.modelValue?(t.openBlock(),t.createElementBlock("div",{key:0,class:"g-gantt-tooltip",style:t.normalizeStyle({top:n.value,left:l.value,fontFamily:t.unref(u)})},[t.createElementVNode("div",{class:"g-gantt-tooltip-color-dot",style:t.normalizeStyle({background:t.unref(m)})},null,4),t.renderSlot(k.$slots,"default",{bar:t.unref(s),barStart:t.unref(_),barEnd:t.unref(d)},()=>[t.createTextVNode(t.toDisplayString(t.unref(h)),1)])],4)):t.createCommentVNode("",!0)]),_:3})]))}}),Le="",pt={default:{primary:"#eeeeee",secondary:"#E0E0E0",ternary:"#F5F5F5",quartenary:"#ededed",hoverHighlight:"rgb(243 238 226)",text:"#404040",background:"white"},creamy:{primary:"#ffe8d9",secondary:"#fcdcc5",ternary:"#fff6f0",quartenary:"#f7ece6",hoverHighlight:"rgb(243 238 226)",text:"#542d05",background:"white"},crimson:{primary:"#a82039",secondary:"#c41238",ternary:"#db4f56",quartenary:"#ce5f64",hoverHighlight:"rgb(243 238 226)",text:"white",background:"white"},dark:{primary:"#404040",secondary:"#303030",ternary:"#353535",quartenary:"#383838",hoverHighlight:"rgb(243 238 226)",text:"white",background:"#525252",toast:"#1f1f1f"},flare:{primary:"#e08a38",secondary:"#e67912",ternary:"#5e5145",quartenary:"#665648",hoverHighlight:"rgb(243 238 226)",text:"white",background:"white"},fuchsia:{primary:"#de1d5a",secondary:"#b50b41",ternary:"#ff7da6",quartenary:"#f2799f",hoverHighlight:"rgb(243 238 226)",text:"white",background:"white"},grove:{primary:"#3d9960",secondary:"#288542",ternary:"#72b585",quartenary:"#65a577",hoverHighlight:"rgb(243 238 226)",text:"white",background:"white"},"material-blue":{primary:"#0D47A1",secondary:"#1565C0",ternary:"#42a5f5",quartenary:"#409fed",hoverHighlight:"rgb(243 238 226)",text:"white",background:"white"},sky:{primary:"#b5e3ff",secondary:"#a1d6f7",ternary:"#d6f7ff",quartenary:"#d0edf4",hoverHighlight:"rgb(243 238 226)",text:"#022c47",background:"white"},slumber:{primary:"#2a2f42",secondary:"#2f3447",ternary:"#35394d",quartenary:"#2c3044",hoverHighlight:"rgb(243 238 226)",text:"#ffe0b3",background:"#38383b",toast:"#1f1f1f"},vue:{primary:"#258a5d",secondary:"#41B883",ternary:"#35495E",quartenary:"#2a3d51",hoverHighlight:"rgb(243 238 226)",text:"white",background:"white"}};var ht;const F=typeof window<"u";F&&((ht=window==null?void 0:window.navigator)==null?void 0:ht.userAgent)&&/iP(ad|hone|od)/.test(window.navigator.userAgent);function Ft(e){return typeof e=="function"?e():t.unref(e)}function Pt(e){return e}function Ut(e){return t.getCurrentScope()?(t.onScopeDispose(e),!0):!1}function qt(e,i=!0){t.getCurrentInstance()?t.onMounted(e):i?e():t.nextTick(e)}function yt(e){var i;const a=Ft(e);return(i=a==null?void 0:a.$el)!=null?i:a}const Kt=F?window:void 0;F&&window.document,F&&window.navigator,F&&window.location;function Wt(e,i=!1){const a=t.ref(),g=()=>a.value=Boolean(e());return g(),qt(g,i),a}const Z=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},J="__vueuse_ssr_handlers__";Z[J]=Z[J]||{},Z[J];var bt=Object.getOwnPropertySymbols,Xt=Object.prototype.hasOwnProperty,Qt=Object.prototype.propertyIsEnumerable,Zt=(e,i)=>{var a={};for(var g in e)Xt.call(e,g)&&i.indexOf(g)<0&&(a[g]=e[g]);if(e!=null&&bt)for(var g of bt(e))i.indexOf(g)<0&&Qt.call(e,g)&&(a[g]=e[g]);return a};function Jt(e,i,a={}){const g=a,{window:s=Kt}=g,c=Zt(g,["window"]);let u;const p=Wt(()=>s&&"ResizeObserver"in s),y=()=>{u&&(u.disconnect(),u=void 0)},o=t.watch(()=>yt(e),l=>{y(),p.value&&s&&l&&(u=new ResizeObserver(i),u.observe(l,c))},{immediate:!0,flush:"post"}),n=()=>{y(),o()};return Ut(n),{isSupported:p,stop:n}}function te(e,i={width:0,height:0},a={}){const g=t.ref(i.width),s=t.ref(i.height);return Jt(e,([c])=>{g.value=c.contentRect.width,s.value=c.contentRect.height},a),t.watch(()=>yt(e),c=>{g.value=c?i.width:0,s.value=c?i.height:0}),{width:g,height:s}}var wt;(function(e){e.UP="UP",e.RIGHT="RIGHT",e.DOWN="DOWN",e.LEFT="LEFT",e.NONE="NONE"})(wt||(wt={}));var ee=Object.defineProperty,Bt=Object.getOwnPropertySymbols,ne=Object.prototype.hasOwnProperty,oe=Object.prototype.propertyIsEnumerable,xt=(e,i,a)=>i in e?ee(e,i,{enumerable:!0,configurable:!0,writable:!0,value:a}):e[i]=a,re=(e,i)=>{for(var a in i||(i={}))ne.call(i,a)&&xt(e,a,i[a]);if(Bt)for(var a of Bt(i))oe.call(i,a)&&xt(e,a,i[a]);return e};re({linear:Pt},{easeInSine:[.12,0,.39,0],easeOutSine:[.61,1,.88,1],easeInOutSine:[.37,0,.63,1],easeInQuad:[.11,0,.5,0],easeOutQuad:[.5,1,.89,1],easeInOutQuad:[.45,0,.55,1],easeInCubic:[.32,0,.67,0],easeOutCubic:[.33,1,.68,1],easeInOutCubic:[.65,0,.35,1],easeInQuart:[.5,0,.75,0],easeOutQuart:[.25,1,.5,1],easeInOutQuart:[.76,0,.24,1],easeInQuint:[.64,0,.78,0],easeOutQuint:[.22,1,.36,1],easeInOutQuint:[.83,0,.17,1],easeInExpo:[.7,0,.84,0],easeOutExpo:[.16,1,.3,1],easeInOutExpo:[.87,0,.13,1],easeInCirc:[.55,0,1,.45],easeOutCirc:[0,.55,.45,1],easeInOutCirc:[.85,0,.15,1],easeInBack:[.36,0,.66,-.56],easeOutBack:[.34,1.56,.64,1],easeInOutBack:[.68,-.6,.32,1.6]});const ae={key:0,class:"g-footer"},ie={class:"g-footer-container"},se=t.defineComponent({__name:"GGanttFooter",props:{labels:null},setup(e){const{precision:i,colors:a}=Y(),{timeaxisUnits:g}=q();return(s,c)=>e.labels?(t.openBlock(),t.createElementBlock("div",ae,[t.createElementVNode("div",ie,[(t.openBlock(!0),t.createElementBlock(t.Fragment,null,t.renderList(t.unref(g).lowerUnits,({label:u,value:p,date:y,width:o},n)=>(t.openBlock(),t.createElementBlock("div",{key:u,class:"g-timeunit",style:t.normalizeStyle({background:n%2===0?t.unref(a).ternary:t.unref(a).quartenary,color:t.unref(a).text,flexDirection:t.unref(i)==="hour"?"column":"row",alignItems:t.unref(i)==="hour"?"":"center",width:o})},[t.renderSlot(s.$slots,"timeunit",{label:u,value:p,date:y},()=>[t.createTextVNode(t.toDisplayString(e.labels[n]),1)],!0)],4))),128))])])):t.createCommentVNode("",!0)}}),$e="",le=((e,i)=>{const a=e.__vccOpts||e;for(const[g,s]of i)a[g]=s;return a})(se,[["__scopeId","data-v-400629df"]]),ce=t.defineComponent({__name:"GGanttDrawTodayLine",emits:["today-line-position-x"],setup(e,{emit:i}){const{mapTimeToPosition:a}=z(),g=t.computed(()=>(i("today-line-position-x",{xPosition:a(I.default().startOf("day").format("DD.MM.YYYY HH:mm"))}),a(I.default().startOf("day").format("DD.MM.YYYY HH:mm"))));return(s,c)=>(t.openBlock(),t.createElementBlock("div",{class:"vertical-line",style:t.normalizeStyle({left:t.unref(g)+"px",top:0})},null,4))}}),Re="",de=t.defineComponent({__name:"GGanttDrawVerticalLine",props:{date:null,color:null},setup(e){const i=e,{mapTimeToPosition:a}=z(),g=t.computed(()=>a(i.date.startOf("day").format("DD.MM.YYYY HH:mm")));return(s,c)=>(t.openBlock(),t.createElementBlock("div",{class:"vertical-line",style:t.normalizeStyle({left:t.unref(g)+"px",top:0,backgroundColor:e.color})},null,4))}}),Ne="",fe={class:"g-gantt-rows-container"},kt=t.defineComponent({__name:"GGanttChart",props:{chartStart:null,chartEnd:null,precision:{default:"day"},barStart:null,barEnd:null,dateFormat:{type:[String,Boolean],default:mt},width:{default:"100%"},hideTimeaxis:{type:Boolean,default:!1},colorScheme:{default:"default"},grid:{type:Boolean,default:!1},pushOnOverlap:{type:Boolean,default:!1},noOverlap:{type:Boolean,default:!1},rowHeight:{default:40},highlightedDates:{default:()=>[]},font:{default:"inherit"},footerLabels:null,sticky:{type:Boolean},displayTodayLine:{type:Boolean},mileStoneList:null,verticalLines:null},emits:["click-bar","mousedown-bar","mouseup-bar","dblclick-bar","mouseenter-bar","mouseleave-bar","dragstart-bar","drag-bar","dragend-bar","contextmenu-bar","today-line-position-x","onClickTimeUnit","onClickMilestone","bar-update"],setup(e,{emit:i}){const a=e,{width:g,font:s,colorScheme:c}=t.toRefs(a),u=t.useSlots(),p=t.computed(()=>typeof c.value!="string"?c.value:pt[c.value]||pt.default),y=()=>{var r;const f=(r=u.default)==null?void 0:r.call(u),B=[];return f&&f.forEach(b=>{var w;if((w=b.props)!=null&&w.bars){const C=b.props.bars;B.push(C)}else Array.isArray(b.children)&&b.children.forEach(C=>{var v;const D=C;if((v=D==null?void 0:D.props)!=null&&v.bars){const S=D.props.bars;B.push(S)}})}),B},o=t.ref(!1),n=t.ref(!1),l=t.ref(void 0);let m;const x=f=>{m&&clearTimeout(m),m=setTimeout(()=>{o.value=!0},800),l.value=f},_=()=>{clearTimeout(m),o.value=!1},d=(f,B,r,b,w)=>{if(typeof f=="string"){switch(f){case"bar-update":w!==void 0&&i("bar-update",{bar:B,newValue:w});break}return}switch(f.type){case"click":i("click-bar",{bar:B,e:f,datetime:r});break;case"mousedown":i("mousedown-bar",{bar:B,e:f,datetime:r});break;case"mouseup":i("mouseup-bar",{bar:B,e:f,datetime:r});break;case"dblclick":i("dblclick-bar",{bar:B,e:f,datetime:r});break;case"mouseenter":x(B),i("mouseenter-bar",{bar:B,e:f});break;case"mouseleave":_(),i("mouseleave-bar",{bar:B,e:f});break;case"dragstart":n.value=!0,i("dragstart-bar",{bar:B,e:f});break;case"drag":i("drag-bar",{bar:B,e:f});break;case"dragend":n.value=!1,i("dragend-bar",{bar:B,e:f});break;case"contextmenu":i("contextmenu-bar",{bar:B,e:f,datetime:r});break}},h=t.ref(null),k=t.ref(null),E=te(h);return t.provide(ft,y),t.provide(ut,{...t.toRefs(a),colors:p,chartSize:E}),t.provide(gt,d),(f,B)=>(t.openBlock(),t.createElementBlock(t.Fragment,null,[t.createElementVNode("div",{style:t.normalizeStyle([{display:"flex","flex-flow":"column"},e.sticky?"position: sticky; left:0;z-index:100; background: white;":""]),class:"g-gantt-wrapper",ref_key:"gGanttWrapperRef",ref:k},[t.renderSlot(f.$slots,"side-menu")],4),t.createElementVNode("div",{ref_key:"ganttChart",ref:h,class:"g-gantt-chart",style:t.normalizeStyle({width:t.unref(g),background:t.unref(p).background,fontFamily:t.unref(s)})},[e.hideTimeaxis?t.createCommentVNode("",!0):(t.openBlock(),t.createBlock(Ht,{key:0,"mile-stone-list":e.mileStoneList,onOnClickTimeUnit:B[0]||(B[0]=r=>f.$emit("onClickTimeUnit",r)),onOnClickMilestone:B[1]||(B[1]=r=>f.$emit("onClickMilestone",r))},{"upper-timeunit":t.withCtx(({label:r,value:b,date:w})=>[t.renderSlot(f.$slots,"upper-timeunit",{label:r,value:b,date:w})]),timeunit:t.withCtx(({label:r,value:b,date:w})=>[t.renderSlot(f.$slots,"timeunit",{label:r,value:b,date:w})]),_:3},8,["mile-stone-list"])),t.createElementVNode("div",fe,[e.grid?(t.openBlock(),t.createBlock(jt,{key:0,"highlighted-dates":e.highlightedDates},null,8,["highlighted-dates"])):t.createCommentVNode("",!0),e.displayTodayLine?(t.openBlock(),t.createBlock(ce,{key:1,onTodayLinePositionX:B[2]||(B[2]=r=>i("today-line-position-x",r))})):t.createCommentVNode("",!0),(t.openBlock(!0),t.createElementBlock(t.Fragment,null,t.renderList(e.verticalLines,r=>(t.openBlock(),t.createBlock(de,{date:r.date,color:r.color},null,8,["date","color"]))),256)),t.renderSlot(f.$slots,"default")]),e.hideTimeaxis?t.createCommentVNode("",!0):(t.openBlock(),t.createBlock(le,{key:1,labels:e.footerLabels},null,8,["labels"])),t.createVNode(At,{"model-value":o.value||n.value,bar:l.value},{default:t.withCtx(()=>[t.renderSlot(f.$slots,"bar-tooltip",{bar:l.value})]),_:3},8,["model-value","bar"])],4),t.createElementVNode("div",null,[t.renderSlot(f.$slots,"footer")])],64))}}),Ve="";function K(){const e=t.inject(gt);if(!e)throw Error("Failed to inject emitBarEvent!");return e}function _t(e,i=()=>null,a=()=>null,g=Y()){const{barStart:s,barEnd:c,pushOnOverlap:u}=g,p=t.ref(!1);let y=0,o;const{mapPositionToTime:n}=z(g),{toDayjs:l}=A(g),m=f=>{const B=document.getElementById(e.ganttBarConfig.id);if(!B)return;switch(y=f.clientX-(B.getBoundingClientRect().left||0),f.target.className){case"g-gantt-bar-handle-left":document.body.style.cursor="ew-resize",o=d;break;case"g-gantt-bar-handle-right":document.body.style.cursor="ew-resize",o=h;break;default:o=_}p.value=!0,window.addEventListener("mousemove",o),window.addEventListener("mouseup",E)},x=()=>{var r;const f=document.getElementById(e.ganttBarConfig.id),B=(r=f==null?void 0:f.closest(".g-gantt-row-bars-container"))==null?void 0:r.getBoundingClientRect();return{barElement:f,barContainer:B}},_=f=>{const{barElement:B,barContainer:r}=x();if(!B||!r)return;const b=B.getBoundingClientRect().width,w=f.clientX-r.left-y,C=w+b;if(!k(w,C)){if(e[s.value].substring(0,10)!=n(w).substring(0,10)){const D=l(e[s.value]),S=l(e[c.value]).diff(D,"minute"),T=n(w).substring(0,10)+" 00:00";e[s.value]=T,e[c.value]=l(T).add(S,"minute").format("DD.MM.YYYY HH:mm")}i(f,e)}},d=f=>{const{barElement:B,barContainer:r}=x();if(!B||!r)return;const b=f.clientX-r.left,w=n(b);if(!l(w).isSameOrAfter(l(e,"end"))){if(e[s.value].substring(0,10)!=n(b).substring(0,10)){const C=n(b).substring(0,10)+" 00:00";e[s.value]=C}i(f,e)}},h=f=>{const{barElement:B,barContainer:r}=x();if(!B||!r)return;const b=f.clientX-r.left,w=n(b);l(w).isSameOrBefore(l(e,"start"))||(e[c.value]=n(b).substring(0,10)+" 23:59",i(f,e))},k=(f,B)=>{if(!u.value)return!1;const r=e.ganttBarConfig.dragLimitLeft,b=e.ganttBarConfig.dragLimitRight;return f&&r!=null&&f<r||B&&b!=null&&B>b},E=f=>{p.value=!1,document.body.style.cursor="",window.removeEventListener("mousemove",o),window.removeEventListener("mouseup",E),a(f,e)};return{isDragging:p,initDrag:m}}function Et(){const e=t.inject(ft);if(!e)throw Error("Failed to inject getChartRows!");return e}function Ct(){const e=Y(),i=Et(),a=K(),{pushOnOverlap:g,barStart:s,barEnd:c,noOverlap:u,dateFormat:p}=e,y=new Map,{toDayjs:o,format:n}=A(),l=(r,b)=>{const{initDrag:w}=_t(r,x,E,e);a({...b,type:"dragstart"},r),w(b),f(r)},m=(r,b)=>{const w=r.ganttBarConfig.bundle;w!=null&&(i().forEach(C=>{C.forEach(D=>{if(D.ganttBarConfig.bundle===w){const v=D===r?E:()=>null,{initDrag:S}=_t(D,x,v,e);S(b),f(D)}})}),a({...b,type:"dragstart"},r))},x=(r,b)=>{a({...r,type:"drag"},b),_(b)},_=r=>{if(!(g!=null&&g.value))return;let b=r,{overlapBar:w,overlapType:C}=d(b);for(;w;){f(w);const D=o(b[s.value]),v=o(b[c.value]),S=o(w[s.value]),T=o(w[c.value]);let G;switch(C){case"left":G=T.diff(D,"minutes",!0),w[c.value]=n(b[s.value],p.value),w[s.value]=n(S.subtract(G,"minutes"),p.value);break;case"right":G=v.diff(S,"minutes",!0),w[s.value]=n(v,p.value),w[c.value]=n(T.add(G,"minutes"),p.value);break;default:console.warn("Vue-Ganttastic: One bar is inside of the other one! This should never occur while push-on-overlap is active!");return}w&&(C==="left"||C==="right")&&h(w,G,C),b=w,{overlapBar:w,overlapType:C}=d(w)}},d=r=>{let b,w,C;const D=i().find(M=>M.includes(r))||[],v=o(r[s.value]),S=o(r[c.value]);return{overlapBar:D.find(M=>{if(M===r)return!1;const R=o(M[s.value]),O=o(M[c.value]);return b=v.isBetween(R,O),w=S.isBetween(R,O),C=R.isBetween(v,S)||O.isBetween(v,S),b||w||C}),overlapType:b?"left":w?"right":C?"between":null}},h=(r,b,w)=>{console.log("######################################"),f(r),r.ganttBarConfig.bundle&&i().forEach(C=>{C.forEach(D=>{D.ganttBarConfig.bundle===r.ganttBarConfig.bundle&&D!==r&&(f(D),k(D,b,w))})})},k=(r,b,w)=>{switch(w){case"left":r[s.value]=n(o(r,"start").subtract(b,"minutes"),p.value),r[c.value]=n(o(r,"end").subtract(b,"minutes"),p.value);break;case"right":r[s.value]=n(o(r,"start").add(b,"minutes"),p.value),r[c.value]=n(o(r,"end").add(b,"minutes"),p.value)}_(r)},E=(r,b)=>{B();const w={...r,type:"dragend"};a(w,b,void 0,new Map(y)),y.clear()},f=r=>{if(!y.has(r)){const b=r[s.value],w=r[c.value];y.set(r,{oldStart:b,oldEnd:w})}},B=()=>{if(g.value||!u.value)return;let r=!1;y.forEach((b,w)=>{const{overlapBar:C}=d(w);C!=null&&(r=!0)}),r&&y.forEach(({oldStart:b,oldEnd:w},C)=>{C[s.value]=b,C[c.value]=w})};return{initDragOfBar:l,initDragOfBundle:m}}function Dt(){const{pushOnOverlap:e}=Y(),i=Et(),a=u=>{const p=[];return u!=null&&i().forEach(y=>{y.forEach(o=>{o.ganttBarConfig.bundle===u&&p.push(o)})}),p},g=u=>{if(!e.value||u.ganttBarConfig.pushOnOverlap===!1)return;for(const y of["left","right"]){const o=y,{gapDistanceSoFar:n,bundleBarsAndGapDist:l}=s(u,0,o);let m=n;const x=l;if(!x)continue;for(let d=0;d<x.length;d++){const h=x[d].bar,k=x[d].gapDistance;a(h.ganttBarConfig.bundle).filter(f=>f!==h).forEach(f=>{const B=s(f,k,o),r=B.gapDistanceSoFar,b=B.bundleBarsAndGapDist;r!=null&&(!m||r<m)&&(m=r),b.forEach(w=>{x.find(C=>C.bar===w.bar)||x.push(w)})})}const _=document.getElementById(u.ganttBarConfig.id);m!=null&&o==="left"?u.ganttBarConfig.dragLimitLeft=_.offsetLeft-m:m!=null&&o==="right"&&(u.ganttBarConfig.dragLimitRight=_.offsetLeft+_.offsetWidth+m)}a(u.ganttBarConfig.bundle).forEach(y=>{y.ganttBarConfig.dragLimitLeft=u.ganttBarConfig.dragLimitLeft,y.ganttBarConfig.dragLimitRight=u.ganttBarConfig.dragLimitRight})},s=(u,p=0,y)=>{const o=u.ganttBarConfig.bundle?[{bar:u,gapDistance:p}]:[];let n=u,l=c(n,y);if(y==="left")for(;l;){const m=document.getElementById(n.ganttBarConfig.id),x=document.getElementById(l.ganttBarConfig.id),_=x.offsetLeft+x.offsetWidth;if(p+=m.offsetLeft-_,l.ganttBarConfig.immobile)return{gapDistanceSoFar:p,bundleBarsAndGapDist:o};l.ganttBarConfig.bundle&&o.push({bar:l,gapDistance:p}),n=l,l=c(l,"left")}if(y==="right")for(;l;){const m=document.getElementById(n.ganttBarConfig.id),x=document.getElementById(l.ganttBarConfig.id),_=m.offsetLeft+m.offsetWidth;if(p+=x.offsetLeft-_,l.ganttBarConfig.immobile)return{gapDistanceSoFar:p,bundleBarsAndGapDist:o};l.ganttBarConfig.bundle&&o.push({bar:l,gapDistance:p}),n=l,l=c(l,"right")}return{gapDistanceSoFar:null,bundleBarsAndGapDist:o}},c=(u,p)=>{const y=document.getElementById(u.ganttBarConfig.id),o=i().find(l=>l.includes(u))||[];let n=[];return p==="left"?n=o.filter(l=>{const m=document.getElementById(l.ganttBarConfig.id);return m&&m.offsetLeft<y.offsetLeft&&l.ganttBarConfig.pushOnOverlap!==!1}):n=o.filter(l=>{const m=document.getElementById(l.ganttBarConfig.id);return m&&m.offsetLeft>y.offsetLeft&&l.ganttBarConfig.pushOnOverlap!==!1}),n.length>0?n.reduce((l,m)=>{const x=document.getElementById(l.ganttBarConfig.id),_=document.getElementById(m.ganttBarConfig.id),d=Math.abs(x.offsetLeft-y.offsetLeft),h=Math.abs(_.offsetLeft-y.offsetLeft);return d<h?l:m},n[0]):null};return{setDragLimitsOfGanttBar:g}}const ue=["id"],ge={class:"g-gantt-bar-label"},me={style:{"z-index":"100"}},pe=t.createElementVNode("div",{class:"g-gantt-bar-handle-left"},null,-1),he=t.createElementVNode("div",{class:"g-gantt-bar-handle-right"},null,-1),ye=t.defineComponent({__name:"GGanttBar",props:{bar:null},setup(e){const i=e,a=K(),g=Y(),{rowHeight:s}=g,{bar:c}=t.toRefs(i),{mapTimeToPosition:u,mapPositionToTime:p}=z(),{initDragOfBar:y,initDragOfBundle:o}=Ct(),{setDragLimitsOfGanttBar:n}=Dt(),l=t.ref(!1),m=t.computed(()=>c.value.ganttBarConfig);function x(D){m.value.bundle!=null?o(c.value,D):y(c.value,D),l.value=!0}const _=()=>{n(c.value),!m.value.immobile&&(window.addEventListener("mousemove",x,{once:!0}),window.addEventListener("mouseup",()=>{window.removeEventListener("mousemove",x),l.value=!1},{once:!0}))},d=t.inject(Q),h=D=>{var T;D.preventDefault(),D.type==="mousedown"&&_();const v=(T=d==null?void 0:d.value)==null?void 0:T.getBoundingClientRect();if(!v)return;const S=p(D.clientX-v.left);a(D,c.value,S)},{barStart:k,barEnd:E,width:f,chartStart:B,chartEnd:r,chartSize:b}=g,w=t.ref(0),C=t.ref(0);return t.onMounted(()=>{t.watch([c,f,B,r,b.width],()=>{w.value=u(c.value[k.value]),C.value=u(c.value[E.value])},{deep:!0,immediate:!0})}),(D,v)=>(t.openBlock(),t.createElementBlock("div",{id:t.unref(m).id,class:"g-gantt-bar",style:t.normalizeStyle({...t.unref(m).style,position:"absolute",top:`${t.unref(s)*.1}px`,left:`${w.value}px`,width:`${C.value-w.value}px`,height:`${t.unref(s)*.8}px`,zIndex:l.value?3:2}),onMousedown:h,onClick:h,onDblclick:h,onMouseenter:h,onMouseleave:h,onContextmenu:h},[t.createElementVNode("div",ge,[t.renderSlot(D.$slots,"default",{bar:t.unref(c)},()=>[t.createElementVNode("div",me,t.toDisplayString(t.unref(m).label||""),1),t.unref(m).progress?(t.openBlock(),t.createElementBlock("div",{key:0,style:t.normalizeStyle([{position:"absolute",height:"100%",left:"0"},{width:t.unref(m).progress+"%",backgroundColor:t.unref(m).progressColor}])},null,4)):t.createCommentVNode("",!0)])]),t.unref(m).hasHandles?(t.openBlock(),t.createElementBlock(t.Fragment,{key:0},[pe,he],64)):t.createCommentVNode("",!0)],44,ue))}}),Ie="",be=["id"],we={class:"g-gantt-bar-label"},Be={key:0,style:{"z-index":"100"}},xe=["onKeyup"],ke=t.createElementVNode("div",{class:"g-gantt-bar-handle-left"},null,-1),_e=t.createElementVNode("div",{class:"g-gantt-bar-handle-right"},null,-1),Ee=t.defineComponent({__name:"GGanttEditableBar",props:{bar:null},emits:["update"],setup(e,{emit:i}){const a=e,g=K(),s=Y(),{rowHeight:c}=s,{bar:u}=t.toRefs(a),{mapTimeToPosition:p,mapPositionToTime:y}=z(),{initDragOfBar:o,initDragOfBundle:n}=Ct(),{setDragLimitsOfGanttBar:l}=Dt(),m=t.ref(!1),x=t.ref(!1),_=t.ref(""),d=t.ref(null),h=t.computed(()=>u.value.ganttBarConfig);function k(O){h.value.bundle!=null?n(u.value,O):o(u.value,O),m.value=!0}const E=()=>{l(u.value),!h.value.immobile&&(window.addEventListener("mousemove",k,{once:!0}),window.addEventListener("mouseup",()=>{window.removeEventListener("mousemove",k),m.value=!1},{once:!0}))},f=t.inject(Q),B=O=>{var N;O.preventDefault(),O.type==="mousedown"&&E();const L=(N=f==null?void 0:f.value)==null?void 0:N.getBoundingClientRect();if(!L)return;const V=y(O.clientX-L.left);g(O,u.value,V)},r=O=>{x.value||(O.stopPropagation(),x.value=!0,_.value=h.value.label||"",t.nextTick(()=>{d.value&&d.value.focus()}))},b=O=>{const L=["Backspace","Delete","ArrowLeft","ArrowRight","Tab"];!/^[0-9]$/.test(O.key)&&!L.includes(O.key)&&O.preventDefault()},w=()=>{if(!x.value)return;x.value=!1;const O=parseInt(_.value),L=isNaN(O)?0:Math.max(0,O);h.value.label!==L.toString()&&(h.value.label=L.toString(),i("update",{bar:u.value,newValue:L}))},{barStart:C,barEnd:D,width:v,chartStart:S,chartEnd:T,chartSize:G}=s,M=t.ref(0),R=t.ref(0);return t.onMounted(()=>{t.watch([u,v,S,T,G.width],()=>{M.value=p(u.value[C.value]),R.value=p(u.value[D.value])},{deep:!0,immediate:!0})}),(O,L)=>(t.openBlock(),t.createElementBlock("div",{id:t.unref(h).id,class:"g-gantt-bar",style:t.normalizeStyle({...t.unref(h).style,position:"absolute",top:`${t.unref(c)*.1}px`,left:`${M.value}px`,width:`${R.value-M.value}px`,height:`${t.unref(c)*.8}px`,zIndex:m.value?3:2}),onMousedown:B,onClick:r,onDblclick:B,onMouseenter:B,onMouseleave:B,onContextmenu:B},[t.createElementVNode("div",we,[t.renderSlot(O.$slots,"default",{bar:t.unref(u)},()=>[x.value?t.withDirectives((t.openBlock(),t.createElementBlock("input",{key:1,ref_key:"inputRef",ref:d,"onUpdate:modelValue":L[0]||(L[0]=V=>_.value=V),type:"text",class:"g-gantt-bar-edit-input",onKeyup:t.withKeys(w,["enter"]),onBlur:w,onKeydown:b},null,40,xe)),[[t.vModelText,_.value]]):(t.openBlock(),t.createElementBlock("div",Be,t.toDisplayString(t.unref(h).label||""),1)),t.unref(h).progress?(t.openBlock(),t.createElementBlock("div",{key:2,style:t.normalizeStyle([{position:"absolute",height:"100%",left:"0"},{width:t.unref(h).progress+"%",backgroundColor:t.unref(h).progressColor}])},null,4)):t.createCommentVNode("",!0)])]),t.unref(h).hasHandles?(t.openBlock(),t.createElementBlock(t.Fragment,{key:0},[ke,_e],64)):t.createCommentVNode("",!0)],44,be))}}),He="",vt=t.defineComponent({__name:"GGanttRow",props:{bars:null,highlightOnHover:{type:Boolean}},emits:["drop","bar-update"],setup(e,{emit:i}){const a=e,{rowHeight:g,colors:s}=Y(),{highlightOnHover:c}=t.toRefs(a),u=t.ref(!1),p=K(),y=t.computed(()=>({height:`${g.value}px`,background:(c==null?void 0:c.value)&&u.value?s.value.hoverHighlight:null})),{mapPositionToTime:o}=z(),n=t.ref(null);t.provide(Q,n);const l=x=>{var k;const _=(k=n.value)==null?void 0:k.getBoundingClientRect();if(!_){console.error("Vue-Ganttastic: failed to find bar container element for row.");return}const d=x.clientX-_.left,h=o(d);i("drop",{e:x,datetime:h})},m=x=>{i("bar-update",x),p("bar-update",x.bar,void 0,void 0,x.newValue)};return(x,_)=>(t.openBlock(),t.createElementBlock("div",{class:"g-gantt-row",style:t.normalizeStyle(t.unref(y)),onDragover:_[0]||(_[0]=t.withModifiers(d=>u.value=!0,["prevent"])),onDragleave:_[1]||(_[1]=d=>u.value=!1),onDrop:_[2]||(_[2]=d=>l(d)),onMouseover:_[3]||(_[3]=d=>u.value=!0),onMouseleave:_[4]||(_[4]=d=>u.value=!1)},[t.createCommentVNode("",!0),t.createElementVNode("div",t.mergeProps({ref_key:"barContainer",ref:n,class:"g-gantt-row-bars-container"},x.$attrs),[t.createVNode(t.TransitionGroup,{name:"bar-transition",tag:"div"},{default:t.withCtx(()=>[(t.openBlock(!0),t.createElementBlock(t.Fragment,null,t.renderList(e.bars,d=>(t.openBlock(),t.createElementBlock(t.Fragment,{key:d.ganttBarConfig.id},[d.editable?(t.openBlock(),t.createBlock(Ee,{key:0,bar:d,onUpdate:m},{default:t.withCtx(()=>[t.renderSlot(x.$slots,"bar-label",{bar:d})]),_:2},1032,["bar"])):(t.openBlock(),t.createBlock(ye,{key:1,bar:d},{default:t.withCtx(()=>[t.renderSlot(x.$slots,"bar-label",{bar:d})]),_:2},1032,["bar"]))],64))),128))]),_:3})],16)],36))}}),ze="",St=t.defineComponent({__name:"GGanttLabelRow",props:{labels:null,styles:null},setup(e){const{rowHeight:i,colors:a}=Y(),{timeaxisUnits:g}=q();return(s,c)=>(t.openBlock(),t.createElementBlock("div",{class:"g-gantt-row",style:t.normalizeStyle({height:t.unref(i)+"px"})},[t.createElementVNode("div",t.mergeProps({ref:"barContainer",class:"g-gantt-row-bars-container"},s.$attrs),[(t.openBlock(!0),t.createElementBlock(t.Fragment,null,t.renderList(t.unref(g).lowerUnits,({label:u,width:p,date:y},o)=>(t.openBlock(),t.createElementBlock("div",{key:y.getTime(),class:"g-timeunit",style:t.normalizeStyle({color:t.unref(a).text,textAlign:"center",width:p})},[t.createElementVNode("div",{class:"label",style:t.normalizeStyle(e.styles!=null?e.styles[o]:void 0)},t.toDisplayString(e.labels[o]),5)],4))),128))],16)],4))}}),je="";function Ot(){I.default.extend(Lt),I.default.extend(Gt),I.default.extend($t),I.default.extend(Yt)}const Tt={install(e,i){Ot(),e.component("GGanttChart",kt),e.component("GGanttRow",vt),e.component("GGanttLabelRow",St)}};$.GGanttChart=kt,$.GGanttLabelRow=St,$.GGanttRow=vt,$.default=Tt,$.extendDayjs=Ot,$.ganttastic=Tt,Object.defineProperties($,{__esModule:{value:!0},[Symbol.toStringTag]:{value:"Module"}})});function injectStyle($,H="top"){if(!$||typeof document>"u")return;const t=document.head,P=document.createElement("style");H==="top"&&t.firstChild?t.insertBefore(P,t.firstChild):t.appendChild(P),P.appendChild(document.createTextNode($))}injectStyle(`
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
.label {
  display: flex;
  width: 100%;
  height: 100%;
  justify-content: center;
  align-items: center;
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
`,"top");
