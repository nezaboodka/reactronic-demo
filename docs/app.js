!function(e){function n(n){for(var r,i,l=n[0],c=n[1],s=n[2],m=0,d=[];m<l.length;m++)i=l[m],o[i]&&d.push(o[i][0]),o[i]=0;for(r in c)Object.prototype.hasOwnProperty.call(c,r)&&(e[r]=c[r]);for(u&&u(n);d.length;)d.shift()();return a.push.apply(a,s||[]),t()}function t(){for(var e,n=0;n<a.length;n++){for(var t=a[n],r=!0,l=1;l<t.length;l++){var c=t[l];0!==o[c]&&(r=!1)}r&&(a.splice(n--,1),e=i(i.s=t[0]))}return e}var r={},o={0:0},a=[];function i(n){if(r[n])return r[n].exports;var t=r[n]={i:n,l:!1,exports:{}};return e[n].call(t.exports,t,t.exports,i),t.l=!0,t.exports}i.m=e,i.c=r,i.d=function(e,n,t){i.o(e,n)||Object.defineProperty(e,n,{enumerable:!0,get:t})},i.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},i.t=function(e,n){if(1&n&&(e=i(e)),8&n)return e;if(4&n&&"object"==typeof e&&e&&e.__esModule)return e;var t=Object.create(null);if(i.r(t),Object.defineProperty(t,"default",{enumerable:!0,value:e}),2&n&&"string"!=typeof e)for(var r in e)i.d(t,r,function(n){return e[n]}.bind(null,r));return t},i.n=function(e){var n=e&&e.__esModule?function(){return e.default}:function(){return e};return i.d(n,"a",n),n},i.o=function(e,n){return Object.prototype.hasOwnProperty.call(e,n)},i.p="";var l=window.webpackJsonp=window.webpackJsonp||[],c=l.push.bind(l);l.push=n,l=l.slice();for(var s=0;s<l.length;s++)n(l[s]);var u=c;a.push([29,1]),t()}([,function(e,n,t){"use strict";var r=this&&this.__decorate||function(e,n,t,r){var o,a=arguments.length,i=a<3?n:null===r?r=Object.getOwnPropertyDescriptor(n,t):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)i=Reflect.decorate(e,n,t,r);else for(var l=e.length-1;l>=0;l--)(o=e[l])&&(i=(a<3?o(i):a>3?o(n,t,i):o(n,t))||i);return a>3&&i&&Object.defineProperty(n,t,i),i},o=this&&this.__metadata||function(e,n){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(e,n)},a=this&&this.__awaiter||function(e,n,t,r){return new(t||(t=Promise))(function(o,a){function i(e){try{c(r.next(e))}catch(e){a(e)}}function l(e){try{c(r.throw(e))}catch(e){a(e)}}function c(e){e.done?o(e.value):new t(function(n){n(e.value)}).then(i,l)}c((r=r.apply(e,n||[])).next())})},i=this&&this.__generator||function(e,n){var t,r,o,a,i={label:0,sent:function(){if(1&o[0])throw o[1];return o[1]},trys:[],ops:[]};return a={next:l(0),throw:l(1),return:l(2)},"function"==typeof Symbol&&(a[Symbol.iterator]=function(){return this}),a;function l(a){return function(l){return function(a){if(t)throw new TypeError("Generator is already executing.");for(;i;)try{if(t=1,r&&(o=2&a[0]?r.return:a[0]?r.throw||((o=r.return)&&o.call(r),0):r.next)&&!(o=o.call(r,a[1])).done)return o;switch(r=0,o&&(a=[2&a[0],o.value]),a[0]){case 0:case 1:o=a;break;case 4:return i.label++,{value:a[1],done:!1};case 5:i.label++,r=a[1],a=[0];continue;case 7:a=i.ops.pop(),i.trys.pop();continue;default:if(!(o=(o=i.trys).length>0&&o[o.length-1])&&(6===a[0]||2===a[0])){i=0;continue}if(3===a[0]&&(!o||a[1]>o[0]&&a[1]<o[3])){i.label=a[1];break}if(6===a[0]&&i.label<o[1]){i.label=o[1],o=a;break}if(o&&i.label<o[2]){i.label=o[2],i.ops.push(a);break}o[2]&&i.ops.pop(),i.trys.pop();continue}a=n.call(e,i)}catch(e){a=[6,e],r=0}finally{t=o=0}if(5&a[0])throw a[1];return{value:a[0]?a[1]:void 0,done:!0}}([a,l])}}};Object.defineProperty(n,"__esModule",{value:!0});var l=t(7),c=t(21),s=t(21);n.appMon=s.appMon;var u=t(22),m=function(){function e(){this.url="https://uinames.com/api/",this.data="Please, press FETCH button\nto get content from the given URL\nand you will see what is going on\nunder the hood.",this.fetched=new Date(0),this.debug=""}return e.prototype.fetch=function(){return a(this,void 0,void 0,function(){var e,n,t,r,o;return i(this,function(a){switch(a.label){case 0:return window.gtag("event","fetch"),[4,this.bp("fetch.0",0)];case 1:return a.sent(),e=new Date,[4,this.bp("fetch.1",d.break)];case 2:return a.sent(),[4,u.default(this.url)];case 3:return n=a.sent(),[4,this.bp("fetch.2",d.break)];case 4:return a.sent(),t=this,r=c.pretty,o=[n.headers.get("content-type")],[4,n.text()];case 5:return t.data=r.apply(void 0,o.concat([a.sent(),e])),[4,this.bp("fetch.3",d.break)];case 6:return a.sent(),this.fetched=e,[4,this.bp("fetch.4",d.break)];case 7:return a.sent(),[4,this.bp("",0)];case 8:return a.sent(),[2]}})})},e.prototype.setUrl=function(e){this.url=e},e.prototype.bp=function(e,n){return a(this,void 0,void 0,function(){var t=this;return i(this,function(r){switch(r.label){case 0:return l.Transaction.runAs("breakpoint",l.ApartFrom.Reaction|l.ApartFrom.Parent,0,function(){return t.debug=e}),[4,l.sleep(n)];case 1:return r.sent(),[2]}})})},r([l.transaction,l.monitor(c.appMon),o("design:type",Function),o("design:paramtypes",[]),o("design:returntype",Promise)],e.prototype,"fetch",null),r([l.transaction,o("design:type",Function),o("design:paramtypes",[String]),o("design:returntype",void 0)],e.prototype,"setUrl",null),e=r([l.stateful],e)}();n.App=m;var d=function(){function e(){}return e.ticking=1e3,e.break=2*e.ticking,e.duration=e.ticking/2/1e3,e.blink=.75,e}();n.Anim=d},,,function(e,n,t){"use strict";var r=this&&this.__decorate||function(e,n,t,r){var o,a=arguments.length,i=a<3?n:null===r?r=Object.getOwnPropertyDescriptor(n,t):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)i=Reflect.decorate(e,n,t,r);else for(var l=e.length-1;l>=0;l--)(o=e[l])&&(i=(a<3?o(i):a>3?o(n,t,i):o(n,t))||i);return a>3&&i&&Object.defineProperty(n,t,i),i},o=this&&this.__metadata||function(e,n){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(e,n)};Object.defineProperty(n,"__esModule",{value:!0});var a=t(0),i=t(7);n.reactiveRender=function(e,n,t){void 0===n&&(n=0);var r=a.useState(function(){return t?t.view(c,n):c(n)})[0],o=a.useState(0),l=o[0],s=o[1];return a.useEffect(function(e){return function(){return function(){i.ReactiveCache.unmount(e)}}}(r),[]),t?t.view(function(){return r.render(l,e,s)}):r.render(l,e,s)};var l=function(){function e(){}return e.prototype.render=function(e,n,t){var r=this.jsx(e,n);return this.trigger(e+1,t),r},e.prototype.jsx=function(e,n){return n(e)},e.prototype.trigger=function(e,n){this.jsx.rcache.isInvalidated&&n(e)},r([i.transaction,o("design:type",Function),o("design:paramtypes",[Number,Function,Function]),o("design:returntype",Object)],e.prototype,"render",null),r([i.cache(i.Renew.OnDemand),o("design:type",Function),o("design:paramtypes",[Number,Function]),o("design:returntype",Object)],e.prototype,"jsx",null),r([i.cache(i.Renew.Immediately),o("design:type",Function),o("design:paramtypes",[Number,Function]),o("design:returntype",void 0)],e.prototype,"trigger",null),e=r([i.stateful],e)}();function c(e){var n,t,r=0!==e||i.Debug.verbosity>=2,o=r?(n=((new Error).stack||"").split("\n"),t=n.findIndex(function(e){return e.indexOf(".autorender")>=0})||6,"<"+((n[t+1]||"").match(/^\s*at\s*(\S+)/)||[])[1]+">"):void 0;return i.Transaction.runAs(r?""+o:"new-jsx",i.ApartFrom.Reaction,0,function(){var n=new l;return r&&((n=i.ReactiveCache.named(n,o)).render.rcache.configure({tracing:e}),n.jsx.rcache.configure({tracing:e}),n.trigger.rcache.configure({tracing:e})),n})}},,,,,,,,,function(e,n,t){"use strict";var r=this&&this.__makeTemplateObject||function(e,n){return Object.defineProperty?Object.defineProperty(e,"raw",{value:n}):e.raw=n,e};Object.defineProperty(n,"__esModule",{value:!0});var o,a,i,l,c,s=t(9),u=t(1);n.code=s.css(o||(o=r(["\n  white-space: pre;\n  transition: filter 0.7s ease, opacity 0.7s ease, color 0.7s ease, background-color 0.7s ease;\n\n  strong {\n    color: #ffc0c0;\n    font-weight: normal;\n  }\n"],["\n  white-space: pre;\n  transition: filter 0.7s ease, opacity 0.7s ease, color 0.7s ease, background-color 0.7s ease;\n\n  strong {\n    color: #ffc0c0;\n    font-weight: normal;\n  }\n"]))),n.blink1=s.css(a||(a=r(["\n  animation: blink1 ","s ease-in 1;\n\n  @keyframes blink1 {\n    0% { background-color: transparent; }\n    1% { background-color: violet; }\n    100% { background-color: transparent; }\n  }\n"],["\n  animation: blink1 ","s ease-in 1;\n\n  @keyframes blink1 {\n    0% { background-color: transparent; }\n    1% { background-color: violet; }\n    100% { background-color: transparent; }\n  }\n"])),u.Anim.blink),n.blink2=s.css(i||(i=r(["\n  animation: blink2 ","s ease-in 1;\n\n  @keyframes blink2 {\n    0% { background-color: transparent; }\n    1% { background-color: violet; }\n    100% { background-color: transparent; }\n  }\n"],["\n  animation: blink2 ","s ease-in 1;\n\n  @keyframes blink2 {\n    0% { background-color: transparent; }\n    1% { background-color: violet; }\n    100% { background-color: transparent; }\n  }\n"])),u.Anim.blink),n.normal=s.css(l||(l=r(["\n"],["\n"]))),n.current=s.css(c||(c=r(["\n  background-color: #BF80B7;\n  animation: blink4 ","s ease-in 1;\n  text-shadow: 0.2px 0.2px 2px black;\n\n  @keyframes blink4 {\n    0% { background-color: transparent; }\n    10% { background-color: transparent; }\n    100% { background-color: #BF80B7; }\n  }\n"],["\n  background-color: #BF80B7;\n  animation: blink4 ","s ease-in 1;\n  text-shadow: 0.2px 0.2px 2px black;\n\n  @keyframes blink4 {\n    0% { background-color: transparent; }\n    10% { background-color: transparent; }\n    100% { background-color: #BF80B7; }\n  }\n"])),u.Anim.duration)},,,,,,,,function(e,n,t){"use strict";var r=this&&this.__decorate||function(e,n,t,r){var o,a=arguments.length,i=a<3?n:null===r?r=Object.getOwnPropertyDescriptor(n,t):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)i=Reflect.decorate(e,n,t,r);else for(var l=e.length-1;l>=0;l--)(o=e[l])&&(i=(a<3?o(i):a>3?o(n,t,i):o(n,t))||i);return a>3&&i&&Object.defineProperty(n,t,i),i},o=this&&this.__metadata||function(e,n){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(e,n)},a=this&&this.__awaiter||function(e,n,t,r){return new(t||(t=Promise))(function(o,a){function i(e){try{c(r.next(e))}catch(e){a(e)}}function l(e){try{c(r.throw(e))}catch(e){a(e)}}function c(e){e.done?o(e.value):new t(function(n){n(e.value)}).then(i,l)}c((r=r.apply(e,n||[])).next())})},i=this&&this.__generator||function(e,n){var t,r,o,a,i={label:0,sent:function(){if(1&o[0])throw o[1];return o[1]},trys:[],ops:[]};return a={next:l(0),throw:l(1),return:l(2)},"function"==typeof Symbol&&(a[Symbol.iterator]=function(){return this}),a;function l(a){return function(l){return function(a){if(t)throw new TypeError("Generator is already executing.");for(;i;)try{if(t=1,r&&(o=2&a[0]?r.return:a[0]?r.throw||((o=r.return)&&o.call(r),0):r.next)&&!(o=o.call(r,a[1])).done)return o;switch(r=0,o&&(a=[2&a[0],o.value]),a[0]){case 0:case 1:o=a;break;case 4:return i.label++,{value:a[1],done:!1};case 5:i.label++,r=a[1],a=[0];continue;case 7:a=i.ops.pop(),i.trys.pop();continue;default:if(!(o=(o=i.trys).length>0&&o[o.length-1])&&(6===a[0]||2===a[0])){i=0;continue}if(3===a[0]&&(!o||a[1]>o[0]&&a[1]<o[3])){i.label=a[1];break}if(6===a[0]&&i.label<o[1]){i.label=o[1],o=a;break}if(o&&i.label<o[2]){i.label=o[2],i.ops.push(a);break}o[2]&&i.ops.pop(),i.trys.pop();continue}a=n.call(e,i)}catch(e){a=[6,e],r=0}finally{t=o=0}if(5&a[0])throw a[1];return{value:a[0]?a[1]:void 0,done:!0}}([a,l])}}};Object.defineProperty(n,"__esModule",{value:!0});var l=t(7),c=t(22),s=function(){function e(){this.url="https://uinames.com/api/",this.data="Please, press FETCH button\nto get content from the given URL\nand you will see what is going on\nunder the hood.",this.fetched=new Date(0)}return e.prototype.fetch=function(){return a(this,void 0,void 0,function(){var e,n,t,r,o;return i(this,function(a){switch(a.label){case 0:return e=new Date,[4,c.default(this.url)];case 1:return n=a.sent(),t=this,r=u,o=[n.headers.get("content-type")],[4,n.text()];case 2:return t.data=r.apply(void 0,o.concat([a.sent(),e])),this.fetched=e,[2]}})})},e.prototype.setUrl=function(e){this.url=e},r([l.transaction,l.monitor(n.appMon),o("design:type",Function),o("design:paramtypes",[]),o("design:returntype",Promise)],e.prototype,"fetch",null),r([l.transaction,o("design:type",Function),o("design:paramtypes",[String]),o("design:returntype",void 0)],e.prototype,"setUrl",null),e=r([l.stateful],e)}();function u(e,n,t){return e&&0===e.indexOf("application/json")?n.replace(/,/g,",\n"):n}n.App=s,n.appMon=l.Transaction.run(function(){return new l.Monitor("fetching",!0)}),n.pretty=u},,function(e,n,t){"use strict";var r=this&&this.__makeTemplateObject||function(e,n){return Object.defineProperty?Object.defineProperty(e,"raw",{value:n}):e.raw=n,e};Object.defineProperty(n,"__esModule",{value:!0});var o,a=t(9);n.syntax=a.css(o||(o=r(["\n  b {\n    color: #86ccf6;\n    font-weight: normal;\n  }\n\n  u {\n    color: #5ef9c0;\n    text-decoration: none;\n  }\n\n  i {\n    color: rgba(255, 255, 255, .6);\n    font-style: italic;\n  }\n\n  em {\n    font-style: normal;\n    color: #ffffa0;\n  }\n"],["\n  b {\n    color: #86ccf6;\n    font-weight: normal;\n  }\n\n  u {\n    color: #5ef9c0;\n    text-decoration: none;\n  }\n\n  i {\n    color: rgba(255, 255, 255, .6);\n    font-style: italic;\n  }\n\n  em {\n    font-style: normal;\n    color: #ffffa0;\n  }\n"])))},function(e,n,t){"use strict";Object.defineProperty(n,"__esModule",{value:!0});var r=t(0),o=t(4),a=t(13);function i(e){return o.reactiveRender(function(n){var t=function(e,n){null==e&&(e="");var t;t=e instanceof Date?0===e.valueOf()?"":e.toISOString().slice(11,23)+"Z":e instanceof Function?"function {...}":e.toString();if(!n){var r=t.indexOf("\n");r>=0&&(t=t.slice(0,Math.min(r,19))+"...")}return t}(e.object[e.prop],e.multiline),o=a.normal;return e.blink&&(o=n%2?a.blink1:a.blink2),r.createElement("span",{className:o},t)},0,e.tran)}n.LiveProps=function(e){return o.reactiveRender(function(){var n=Object.getOwnPropertyNames(e.object);return n=n.filter(function(n){return e.except.indexOf(n)<0}),r.createElement("div",null,n.map(function(n,t){return r.createElement("div",{key:n}," "," ".repeat(e.margin||0),n,": ",r.createElement("i",null,"'",r.createElement(i,{object:e.object,prop:n,blink:e.blink,tran:e.tran}),"'"),",")}))},0,e.tran)},n.LiveProp=i},,,,,function(e,n,t){e.exports=t(30)},function(e,n,t){"use strict";Object.defineProperty(n,"__esModule",{value:!0});var r=t(0),o=t(15),a=t(31),i=t(1),l=t(7);l.Debug.verbosity=0;var c=l.Transaction.run(function(){return new i.App}),s=document.getElementById("root");o.render(r.createElement(a.Main,{app:c}),s)},function(e,n,t){"use strict";Object.defineProperty(n,"__esModule",{value:!0});var r=t(0),o=t(4),a=t(1),i=t(36),l=t(37),c=t(38),s=t(40);n.Main=function(e){return o.reactiveRender(function(){var n=Array.from(a.appMon.operations.values()),t=n.length>0?n[0].tran:void 0;return r.createElement("div",{className:s.app},r.createElement("div",{className:s.body},r.createElement("div",{className:s.summary},r.createElement("h1",null,"Reactronic Live Demo",r.createElement("a",{className:s.ribbon,href:"https://github.com/nezaboodka/reactronic-demo"},"@ GitHub")),r.createElement("a",{href:"https://github.com/Nezaboodka/reactronic#readme"},"Reactronic")," is a JavaScript library that provides ",r.createElement("a",{href:"https://blog.nezaboodka.com/post/2019/593-modern-database-should-natively-support-transactionally-reactive-programming"},"transactionally reactive state management")," in a Web application. Transactional reactivity means that state changes are being made in an isolated data snapshot and then, once atomically committed, are consistently propagated to corresponding visual components for (re)rendering. All that is done in automatic, seamless, and fine-grained way."),r.createElement("div",{className:s.demo},r.createElement(c.Demo,{app:e.app})),r.createElement("div",{className:s.state},r.createElement(l.LiveState,{app:e.app})),r.createElement("div",{className:s.modelCode},r.createElement(i.LiveCode,{app:e.app,tran:t}))))})}},,,,,function(e,n,t){"use strict";Object.defineProperty(n,"__esModule",{value:!0});var r=t(0),o=t(4),a=t(1),i=t(13),l=t(23);function c(e,n){return e===n?i.current:i.normal}n.LiveCode=function(e){return o.reactiveRender(function(){var n=e.app.debug;return r.createElement("div",null,r.createElement("pre",{className:i.code+" "+l.syntax},r.createElement("i",null,"// MODEL"),r.createElement("br",null),r.createElement("br",null),r.createElement("strong",null,"@stateful"),r.createElement("br",null),r.createElement("b",null,"class")," ",r.createElement("u",null,"App")," ","{",r.createElement("br",null),"  url: ",r.createElement("u",null,"string")," = ",r.createElement("i",null,"'https://uinames.com/api/'"),";",r.createElement("br",null),"  data: ",r.createElement("u",null,"string")," = ",r.createElement("i",null,"'Please, press FETCH...'"),";",r.createElement("br",null),"  fetched: ",r.createElement("u",null,"Date")," = ",r.createElement("b",null,"new")," ",r.createElement("u",null,"Date"),"(0);",r.createElement("br",null),r.createElement("br",null),r.createElement("div",{style:a.appMon.isIdle?{}:{backgroundColor:"rgba(255, 255, 255, 0.1)"}},"  ",r.createElement("strong",null,"@transaction")," ",r.createElement("strong",null,"@monitor"),"(appMon)",r.createElement("br",null),"  ",r.createElement("b",null,"async")," ",r.createElement("span",{className:c("fetch.0",n)},r.createElement("em",null,"fetch"),"()"),": ",r.createElement("u",null,"Promise","<","void",">")," ","{",r.createElement("br",null),"    ",r.createElement("span",{className:c("fetch.1",n)},r.createElement("b",null,"let")," r = ",r.createElement("b",null,"await")," http.",r.createElement("em",null,"fetch"),"(",r.createElement("b",null,"this"),".url);"),r.createElement("br",null),"    ",r.createElement("span",{className:c("fetch.2",n)},r.createElement("b",null,"this"),".data = ",r.createElement("b",null,"await")," r.",r.createElement("em",null,"text"),"();"),r.createElement("br",null),"    ",r.createElement("span",{className:c("fetch.3",n)},r.createElement("b",null,"this"),".fetched = ",r.createElement("b",null,"new")," ",r.createElement("u",null,"Date"),"();"),r.createElement("br",null),"  ",r.createElement("span",{className:c("fetch.4",n)},"}"," ",r.createElement("i",null,"// apply snapshot")),r.createElement("br",null)),"}",r.createElement("br",null),r.createElement("br",null),r.createElement("b",null,"const")," appMon = ",r.createElement("u",null,"Monitor"),".",r.createElement("em",null,"new"),"();",r.createElement("br",null),r.createElement("b",null,"const")," application = ",r.createElement("b",null,"new")," ",r.createElement("u",null,"App"),"();",r.createElement("br",null),r.createElement("br",null),r.createElement("i",null,"// VIEW"),r.createElement("br",null),r.createElement("br",null),r.createElement("b",null,"function")," ",r.createElement("u",null,"AppView"),"(p: ","{","app: ",r.createElement("u",null,"App"),"})"," ","{",r.createElement("br",null)," ",r.createElement("i",null,"// autorender = Reactronic + React Hooks"),r.createElement("br",null)," ",r.createElement("b",null,"return")," ",r.createElement("em",null,"autorender"),"(() => ","{",r.createElement("br",null),"  ",r.createElement("b",null,"return")," (",r.createElement("br",null),"   ",r.createElement("b",null,"<","div",">"),r.createElement("br",null),"    ",r.createElement("b",null,"<","input")," value=","{","p.app.url","}",r.createElement("br",null),"     ",r.createElement("em",null,"onChange"),"=","{","e => p.app.url = e.target.value","}",r.createElement("b",null,"/>"),r.createElement("br",null),"    ",r.createElement("b",null,"<","button")," disabled=","{","!appMon.isIdle","}",r.createElement("br",null),"     ",r.createElement("em",null,"onClick"),"=","{","e => p.app.",r.createElement("em",null,"fetch"),"()","}"," ",r.createElement("b",null,">"),"FETCH",r.createElement("b",null,"<","/button",">"),r.createElement("br",null),"    ",r.createElement("b",null,"<","pre",">"),r.createElement("br",null),"     ","{","p.app.data","}",r.createElement("br",null),"     ",r.createElement("b",null,"<","img")," src=",r.createElement("i",null,'"spin.svg"')," hidden=","{","appMon.isIdle","}",r.createElement("b",null,"/>"),r.createElement("br",null),"    ",r.createElement("b",null,"</","pre"),">",r.createElement("br",null),"   ",r.createElement("b",null,"<","/div",">"),r.createElement("br",null),"  );",r.createElement("br",null)," ","}",r.createElement("br",null),"}",r.createElement("br",null),r.createElement("br",null),"React.",r.createElement("em",null,"render"),"(","<",r.createElement("u",null,"AppView")," app=","{","application","}","/>)",r.createElement("br",null)))})}},function(e,n,t){"use strict";Object.defineProperty(n,"__esModule",{value:!0});var r=t(0),o=t(4),a=t(1),i=t(24),l=t(13),c=t(23);n.LiveState=function(e){return o.reactiveRender(function(){var n=["debug","fetch"],t=Array.from(a.appMon.operations.values());return r.createElement("pre",{className:l.code+" "+c.syntax,style:{backgroundColor:"transparent",boxShadow:"none",minHeight:"13.75em"}},r.createElement("i",null,"// STATE"),r.createElement("br",null),r.createElement("br",null),"application: ","{",r.createElement("br",null),r.createElement(i.LiveProps,{object:e.app,except:n,margin:0,blink:!0}),t.map(function(t,o){return r.createElement("div",{key:t.tran.id,style:{marginTop:"0.5em",overflow:"hidden",backgroundColor:"rgba(255, 255, 255, 0.1)",maxWidth:"100%"}}," .snapshot_",t.tran.id," = ","{",r.createElement("br",null),r.createElement(i.LiveProps,{object:e.app,except:n,margin:1,blink:!0,tran:t.tran})," ","}",r.createElement("br",null))}),"}")})}},function(e,n,t){"use strict";Object.defineProperty(n,"__esModule",{value:!0});var r=t(0),o=t(4),a=t(1),i=t(24),l=t(39);n.Demo=function(e){return o.reactiveRender(function(n){return r.createElement("div",{className:l.demo},r.createElement("input",{onChange:function(n){return e.app.setUrl(n.target.value)},value:e.app.url,autoFocus:!0,spellCheck:!1}),r.createElement("button",{onClick:function(n){return e.app.fetch()},disabled:!a.appMon.isIdle},"FETCH"),r.createElement("pre",null,r.createElement(i.LiveProp,{object:e.app,prop:"data",multiline:!0,blink:!0}),r.createElement("img",{hidden:a.appMon.isIdle,src:"assets/spinner.svg"})))})}},function(e,n,t){"use strict";var r=this&&this.__makeTemplateObject||function(e,n){return Object.defineProperty?Object.defineProperty(e,"raw",{value:n}):e.raw=n,e};Object.defineProperty(n,"__esModule",{value:!0});var o,a,i,l,c=t(9);n.demo=c.css(o||(o=r(["\n  overflow: hidden;\n  color: #14344f;\n  background-color: white;\n  box-shadow: 0.1em 0.1em 1em 0px rgba(0, 0, 0, 1);\n  display: grid;\n  grid-template-columns: 1fr auto auto;\n  grid-template-rows: auto 1fr;\n  padding: 1em;\n\n  input {\n    grid-row: 1;\n    grid-column: 1;\n    font-size: 75%;\n    box-sizing: border-box;\n    padding: 0.1em 8px;\n    border: 0.5px solid rgba(0, 0, 0, 0.1);\n    transition: color 0.7s ease, border-color 0.7s ease, filter 0.7s ease, opacity 0.7s ease;\n    flex-shrink: 1;\n    min-width: 0;\n  }\n\n  button {\n    grid-row: 1;\n    grid-column: 3;\n    font-size: inherit;\n    flex-grow: 0;\n    padding: 0.1em 0.5em;\n    background-color: #BF80B7;\n    color: white;\n    text-shadow: none;\n    transition: color 0.7s ease, background-color 0.7s ease, border-color 0.7s ease, filter 0.7s ease, opacity 0.7s ease, box-shadow 0.7s ease;\n    border: none;\n    min-width: 1em;\n    text-align: center;\n    white-space: nowrap;\n    animation: shake 3s infinite linear;\n  }\n\n  button:disabled {\n    color: rgba(255, 255, 255, 0.5);\n    background-color: silver;\n    box-shadow: none;\n    animation: none;\n  }\n\n  button:hover {\n    cursor: pointer;\n  }\n\n  @keyframes rotation {\n    from {\n      transform: rotate(0deg);\n    }\n    to {\n      transform: rotate(359deg);\n    }\n  }\n\n  @keyframes shake {\n    from { transform: scale3d(1, 1, 1); }\n    5%, 10% { transform: scale3d(0.9, 0.9, 0.9) rotate3d(0, 0, 1, -2deg); }\n    15%, 25%, 35%, 45% { transform: scale3d(1.1, 1.1, 1.1) rotate3d(0, 0, 1, 2deg); }\n    20%, 30%, 40% { transform: scale3d(1.1, 1.1, 1.1) rotate3d(0, 0, 1, -2deg); }\n    50% { transform: scale3d(1, 1, 1); }\n    to { transform: scale3d(1, 1, 1); }\n  }\n\n  img {\n    animation: rotation 2s infinite linear;\n    position: absolute;\n    top: 0.5em;\n    right: 0.5em;\n    width: 2em;\n    height: 2em;\n    margin: 0;\n    padding: 0;\n    transition: opacity 0.7s ease;\n    z-index: 1000;\n    opacity: 0.4;\n  }\n\n  .rotating {\n    animation: rotating 2s linear infinite;\n  }\n\n  @keyframes rotating {\n    from { transform: rotate(0deg); }\n    to { transform: rotate(360deg); }\n  }\n\n  code,\n  pre,\n  .pre {\n    grid-row: 2;\n    grid-column: 1 / span 3;\n    position: relative;\n    font-size: 75%;\n    max-width: 100%;\n    min-height: 6em;\n    padding: 0.1em 8px;\n    border: 0.5px solid rgba(0, 0, 0, 0.1);\n    background-color: white !important;\n    transition: color 0.7s ease, border-color 0.7s ease, filter 0.7s ease, opacity 0.7s ease;\n    box-shadow: none !important;\n    color: black !important;\n    text-shadow: none !important;\n    margin-top: 0.5em !important;\n  }\n"],["\n  overflow: hidden;\n  color: #14344f;\n  background-color: white;\n  box-shadow: 0.1em 0.1em 1em 0px rgba(0, 0, 0, 1);\n  display: grid;\n  grid-template-columns: 1fr auto auto;\n  grid-template-rows: auto 1fr;\n  padding: 1em;\n\n  input {\n    grid-row: 1;\n    grid-column: 1;\n    font-size: 75%;\n    box-sizing: border-box;\n    padding: 0.1em 8px;\n    border: 0.5px solid rgba(0, 0, 0, 0.1);\n    transition: color 0.7s ease, border-color 0.7s ease, filter 0.7s ease, opacity 0.7s ease;\n    flex-shrink: 1;\n    min-width: 0;\n  }\n\n  button {\n    grid-row: 1;\n    grid-column: 3;\n    font-size: inherit;\n    flex-grow: 0;\n    padding: 0.1em 0.5em;\n    background-color: #BF80B7;\n    color: white;\n    text-shadow: none;\n    transition: color 0.7s ease, background-color 0.7s ease, border-color 0.7s ease, filter 0.7s ease, opacity 0.7s ease, box-shadow 0.7s ease;\n    border: none;\n    min-width: 1em;\n    text-align: center;\n    white-space: nowrap;\n    animation: shake 3s infinite linear;\n  }\n\n  button:disabled {\n    color: rgba(255, 255, 255, 0.5);\n    background-color: silver;\n    box-shadow: none;\n    animation: none;\n  }\n\n  button:hover {\n    cursor: pointer;\n  }\n\n  @keyframes rotation {\n    from {\n      transform: rotate(0deg);\n    }\n    to {\n      transform: rotate(359deg);\n    }\n  }\n\n  @keyframes shake {\n    from { transform: scale3d(1, 1, 1); }\n    5%, 10% { transform: scale3d(0.9, 0.9, 0.9) rotate3d(0, 0, 1, -2deg); }\n    15%, 25%, 35%, 45% { transform: scale3d(1.1, 1.1, 1.1) rotate3d(0, 0, 1, 2deg); }\n    20%, 30%, 40% { transform: scale3d(1.1, 1.1, 1.1) rotate3d(0, 0, 1, -2deg); }\n    50% { transform: scale3d(1, 1, 1); }\n    to { transform: scale3d(1, 1, 1); }\n  }\n\n  img {\n    animation: rotation 2s infinite linear;\n    position: absolute;\n    top: 0.5em;\n    right: 0.5em;\n    width: 2em;\n    height: 2em;\n    margin: 0;\n    padding: 0;\n    transition: opacity 0.7s ease;\n    z-index: 1000;\n    opacity: 0.4;\n  }\n\n  .rotating {\n    animation: rotating 2s linear infinite;\n  }\n\n  @keyframes rotating {\n    from { transform: rotate(0deg); }\n    to { transform: rotate(360deg); }\n  }\n\n  code,\n  pre,\n  .pre {\n    grid-row: 2;\n    grid-column: 1 / span 3;\n    position: relative;\n    font-size: 75%;\n    max-width: 100%;\n    min-height: 6em;\n    padding: 0.1em 8px;\n    border: 0.5px solid rgba(0, 0, 0, 0.1);\n    background-color: white !important;\n    transition: color 0.7s ease, border-color 0.7s ease, filter 0.7s ease, opacity 0.7s ease;\n    box-shadow: none !important;\n    color: black !important;\n    text-shadow: none !important;\n    margin-top: 0.5em !important;\n  }\n"]))),n.body=c.css(a||(a=r(["\n  padding: 1em;\n"],["\n  padding: 1em;\n"]))),n.footer=c.css(i||(i=r(["\n  text-align: center;\n  font-size: smaller;\n  color: silver;\n"],["\n  text-align: center;\n  font-size: smaller;\n  color: silver;\n"]))),n.timestamp=c.css(l||(l=r(["\n  text-align: center;\n  color: rgba(255, 255, 255, 0.5);\n  font-size: smaller;\n"],["\n  text-align: center;\n  color: rgba(255, 255, 255, 0.5);\n  font-size: smaller;\n"])))},function(e,n,t){"use strict";var r=this&&this.__makeTemplateObject||function(e,n){return Object.defineProperty?Object.defineProperty(e,"raw",{value:n}):e.raw=n,e};Object.defineProperty(n,"__esModule",{value:!0});var o,a,i,l,c,s,u,m,d,p=t(9),f=t(1);n.app=p.css(o||(o=r(["\n  position: absolute;\n  top: 0;\n  left: 0;\n  bottom: 0;\n  right: 0;\n  overflow-y: scroll;\n  overflow-x: auto;\n  font-family: Calibri, Tahoma, Arial, monospace;\n  font-size: calc(16px + (24 - 16) * (100vw - 640px) / (1920 - 640));\n  font-weight: 300;\n  display: grid;\n\n  a {\n    text-decoration: underline;\n    outline: none;\n    color: inherit;\n  }\n\n  h1 {\n    font-size: 175%;\n    margin-bottom: 0.5em;\n    position: relative;\n    font-weight: normal;\n    padding-left: 1.5ch;\n    border-left: .2ch solid #00B3FF;\n\n    img {\n      height: 1.1em;\n      width: 1.1em;\n      vertical-align: bottom;\n    }\n  }\n\n  h2 {\n    margin-top: 1em;\n    color: #5DF586;\n  }\n\n  code,\n  pre,\n  .pre {\n    font-size: 75%;\n    box-sizing: border-box;\n    max-width: 100%;\n    font-family: monospace;\n    margin: 0;\n    padding: 0.5em 0.5em;\n    text-align: left;\n    overflow: auto;\n    white-space: pre;\n    background-color: #122f47;\n    color: #fff;\n    text-shadow: 0 0 1px black;\n    box-shadow: 0.01em 0.01em 0.2em 0px rgba(0, 0, 0, 0.5);\n\n    @media only screen and (max-width: 1025px) { /* mobile */\n      font-size: 100%;\n    }\n  }\n"],["\n  position: absolute;\n  top: 0;\n  left: 0;\n  bottom: 0;\n  right: 0;\n  overflow-y: scroll;\n  overflow-x: auto;\n  font-family: Calibri, Tahoma, Arial, monospace;\n  font-size: calc(16px + (24 - 16) * (100vw - 640px) / (1920 - 640));\n  font-weight: 300;\n  display: grid;\n\n  a {\n    text-decoration: underline;\n    outline: none;\n    color: inherit;\n  }\n\n  h1 {\n    font-size: 175%;\n    margin-bottom: 0.5em;\n    position: relative;\n    font-weight: normal;\n    padding-left: 1.5ch;\n    border-left: .2ch solid #00B3FF;\n\n    img {\n      height: 1.1em;\n      width: 1.1em;\n      vertical-align: bottom;\n    }\n  }\n\n  h2 {\n    margin-top: 1em;\n    color: #5DF586;\n  }\n\n  code,\n  pre,\n  .pre {\n    font-size: 75%;\n    box-sizing: border-box;\n    max-width: 100%;\n    font-family: monospace;\n    margin: 0;\n    padding: 0.5em 0.5em;\n    text-align: left;\n    overflow: auto;\n    white-space: pre;\n    background-color: #122f47;\n    color: #fff;\n    text-shadow: 0 0 1px black;\n    box-shadow: 0.01em 0.01em 0.2em 0px rgba(0, 0, 0, 0.5);\n\n    @media only screen and (max-width: 1025px) { /* mobile */\n      font-size: 100%;\n    }\n  }\n"]))),n.body=p.css(a||(a=r(["\n  display: grid;\n  grid-template-columns: 55% 10% 35%;\n  grid-template-rows: auto auto auto 0 1fr;\n  padding: 1em 1em;\n  margin: 0 auto;\n  min-width: 75ch;\n  max-width: 85ch;\n\n  @media only screen and (max-width: 1025px) { /* mobile */\n    min-width: unset;\n    max-width: 100vw;\n  }\n\n  code,\n  pre,\n  .pre {\n    background-color: #122f47;\n    color: #fff;\n    text-shadow: 0 0 1px black;\n    box-shadow: 0.02em 0.02em 0.5em 0px rgba(0, 0, 0, 0.5);\n    max-width: 100%;\n    overflow: auto;\n    max-width: 100%;\n    /* border: 1px solid rgba(255, 255, 255, 0.4); */\n  }\n\n  p {\n    margin-bottom: 0.5em;\n  }\n\n  a {\n    color: #5DF586;\n    font-weight: normal;\n  }\n"],["\n  display: grid;\n  grid-template-columns: 55% 10% 35%;\n  grid-template-rows: auto auto auto 0 1fr;\n  padding: 1em 1em;\n  margin: 0 auto;\n  min-width: 75ch;\n  max-width: 85ch;\n\n  @media only screen and (max-width: 1025px) { /* mobile */\n    min-width: unset;\n    max-width: 100vw;\n  }\n\n  code,\n  pre,\n  .pre {\n    background-color: #122f47;\n    color: #fff;\n    text-shadow: 0 0 1px black;\n    box-shadow: 0.02em 0.02em 0.5em 0px rgba(0, 0, 0, 0.5);\n    max-width: 100%;\n    overflow: auto;\n    max-width: 100%;\n    /* border: 1px solid rgba(255, 255, 255, 0.4); */\n  }\n\n  p {\n    margin-bottom: 0.5em;\n  }\n\n  a {\n    color: #5DF586;\n    font-weight: normal;\n  }\n"]))),n.summary=p.css(i||(i=r(["\n  grid-row: 1;\n  grid-column: 1 / span 3;\n  margin-bottom: 1.5em;\n"],["\n  grid-row: 1;\n  grid-column: 1 / span 3;\n  margin-bottom: 1.5em;\n"]))),n.modelCode=p.css(l||(l=r(["\n  grid-row: 2 / span 2;\n  grid-column: 1;\n  z-index: 100;\n  overflow: hidden;\n"],["\n  grid-row: 2 / span 2;\n  grid-column: 1;\n  z-index: 100;\n  overflow: hidden;\n"]))),n.renderCode=p.css(c||(c=r(["\n  grid-row: 4 / span 2;\n  grid-column: 1;\n  margin-top: 1em;\n  overflow: hidden;\n"],["\n  grid-row: 4 / span 2;\n  grid-column: 1;\n  margin-top: 1em;\n  overflow: hidden;\n"]))),n.demo=p.css(s||(s=r(["\n  grid-row: 2;\n  grid-column: 2 / span 2;\n  margin-left: 1em;\n"],["\n  grid-row: 2;\n  grid-column: 2 / span 2;\n  margin-left: 1em;\n"]))),n.state=p.css(u||(u=r(["\n  grid-row: 3 / span 3;\n  grid-column: 2 / span 2;\n  margin-left: 1em;\n  margin-top: 1em;\n  position: relative;\n"],["\n  grid-row: 3 / span 3;\n  grid-column: 2 / span 2;\n  margin-left: 1em;\n  margin-top: 1em;\n  position: relative;\n"]))),n.ribbon=p.css(m||(m=r(["\n  position: absolute;\n  top: 0;\n  right: 0;\n  font-size: inherit;\n  padding: 0 .5em;\n  text-decoration: none !important;\n  color: rgba(255, 255, 255, .75) !important;\n  background-color: rgba(255, 255, 255, .1);\n\n  img {\n    height: 1em;\n    width: 1em;\n    vertical-align: top;\n  }\n"],["\n  position: absolute;\n  top: 0;\n  right: 0;\n  font-size: inherit;\n  padding: 0 .5em;\n  text-decoration: none !important;\n  color: rgba(255, 255, 255, .75) !important;\n  background-color: rgba(255, 255, 255, .1);\n\n  img {\n    height: 1em;\n    width: 1em;\n    vertical-align: top;\n  }\n"]))),n.code=p.css(d||(d=r(["\n  white-space: pre;\n\n  .blink {\n  \tanimation: blink2 ","s ease 1;\n  }\n\n  @keyframes blink2 {\n    0% { background-color: unset; }\n    10% { background-color: violet; }\n    100% { background-color: unset; }\n  }\n"],["\n  white-space: pre;\n\n  .blink {\n  \tanimation: blink2 ","s ease 1;\n  }\n\n  @keyframes blink2 {\n    0% { background-color: unset; }\n    10% { background-color: violet; }\n    100% { background-color: unset; }\n  }\n"])),f.Anim.duration)}]);
//# sourceMappingURL=app.js.map