(function(t){function e(e){for(var r,a,s=e[0],c=e[1],u=e[2],l=0,d=[];l<s.length;l++)a=s[l],Object.prototype.hasOwnProperty.call(i,a)&&i[a]&&d.push(i[a][0]),i[a]=0;for(r in c)Object.prototype.hasOwnProperty.call(c,r)&&(t[r]=c[r]);f&&f(e);while(d.length)d.shift()();return o.push.apply(o,u||[]),n()}function n(){for(var t,e=0;e<o.length;e++){for(var n=o[e],r=!0,a=1;a<n.length;a++){var c=n[a];0!==i[c]&&(r=!1)}r&&(o.splice(e--,1),t=s(s.s=n[0]))}return t}var r={},i={app:0},o=[];function a(t){return s.p+"js/"+({list:"list",notfound:"notfound",settings:"settings"}[t]||t)+"."+{list:"926562dd",notfound:"ffc44c44",settings:"8453a36b"}[t]+".js"}function s(e){if(r[e])return r[e].exports;var n=r[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,s),n.l=!0,n.exports}s.e=function(t){var e=[],n=i[t];if(0!==n)if(n)e.push(n[2]);else{var r=new Promise((function(e,r){n=i[t]=[e,r]}));e.push(n[2]=r);var o,c=document.createElement("script");c.charset="utf-8",c.timeout=120,s.nc&&c.setAttribute("nonce",s.nc),c.src=a(t);var u=new Error;o=function(e){c.onerror=c.onload=null,clearTimeout(l);var n=i[t];if(0!==n){if(n){var r=e&&("load"===e.type?"missing":e.type),o=e&&e.target&&e.target.src;u.message="Loading chunk "+t+" failed.\n("+r+": "+o+")",u.name="ChunkLoadError",u.type=r,u.request=o,n[1](u)}i[t]=void 0}};var l=setTimeout((function(){o({type:"timeout",target:c})}),12e4);c.onerror=c.onload=o,document.head.appendChild(c)}return Promise.all(e)},s.m=t,s.c=r,s.d=function(t,e,n){s.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},s.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},s.t=function(t,e){if(1&e&&(t=s(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(s.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var r in t)s.d(n,r,function(e){return t[e]}.bind(null,r));return n},s.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return s.d(e,"a",e),e},s.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},s.p="",s.oe=function(t){throw console.error(t),t};var c=window["webpackJsonp"]=window["webpackJsonp"]||[],u=c.push.bind(c);c.push=e,c=c.slice();for(var l=0;l<c.length;l++)e(c[l]);var f=u;o.push([0,"chunk-vendors"]),n()})({0:function(t,e,n){t.exports=n("56d7")},1771:function(t,e,n){var r={"./alarm.mp3":"a362","./yay.mp3":"c7a5"};function i(t){var e=o(t);return n(e)}function o(t){if(!n.o(r,t)){var e=new Error("Cannot find module '"+t+"'");throw e.code="MODULE_NOT_FOUND",e}return r[t]}i.keys=function(){return Object.keys(r)},i.resolve=o,t.exports=i,i.id="1771"},"3e8e":function(t,e,n){},"56d7":function(t,e,n){"use strict";n.r(e);n("e260"),n("e6cf"),n("cca6"),n("a79d"),n("e792"),n("0cdd");var r=n("2b0e"),i=n("5f5b"),o=n("b1e0");n("ab8b"),n("2dd8");r["default"].use(i["a"]),r["default"].use(o["a"]);var a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"app"}},[n("b-navbar",{staticClass:"bg-warning",attrs:{toggleable:"lg",type:"dark",variant:"info"}},[n("b-container",[n("b-navbar-brand",{attrs:{to:"/"}},[t._v("番茄鐘")]),n("b-navbar-toggle",{attrs:{target:"nav-collapse"}}),n("b-collapse",{attrs:{id:"nav-collapse","is-nav":""}},[n("b-navbar-nav",[n("b-nav-item",{attrs:{to:"/list"}},[t._v("事項")]),n("b-nav-item",{attrs:{to:"/settings"}},[t._v("設定")])],1)],1)],1)],1),n("keep-alive",[t.$route.meta.keepAlive?n("router-view"):t._e()],1),t.$route.meta.keepAlive?t._e():n("router-view")],1)},s=[],c=n("2877"),u={},l=Object(c["a"])(u,a,s,!1,null,null,null),f=l.exports,d=n("9483");Object(d["a"])("".concat("","service-worker.js"),{ready:function(){console.log("App is being served from cache by a service worker.\nFor more details, visit https://goo.gl/AFskqB")},registered:function(){console.log("Service worker has been registered.")},cached:function(){console.log("Content has been cached for offline use.")},updatefound:function(){console.log("New content is downloading.")},updated:function(){console.log("New content is available; please refresh.")},offline:function(){console.log("No internet connection found. App is running in offline mode.")},error:function(t){console.error("Error during service worker registration:",t)}});n("d3b7"),n("3ca3"),n("ddb0");var m=n("8c4f"),p=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"home"}},[n("b-container",[n("b-row",[n("b-col",{attrs:{cols:"12"}},[n("h1",[t._v(t._s(t.currentText))]),n("h2",[t._v(t._s(t.timeText))]),1!==t.status?n("b-btn",{staticClass:"mx-1",attrs:{variant:"primary"},on:{click:t.start}},[n("b-icon",{attrs:{icon:"play-fill"}})],1):n("b-btn",{staticClass:"mx-1",attrs:{variant:"primary"},on:{click:t.pause}},[n("b-icon",{attrs:{icon:"pause-fill"}})],1),t.current.length>0?n("b-btn",{staticClass:"mx-1",attrs:{variant:"primary"},on:{click:function(e){return t.finish(!0)}}},[n("b-icon",{attrs:{icon:"skip-end-fill"}})],1):t._e()],1)],1)],1)],1)},h=[],b=(n("4d90"),n("25f0"),n("99af"),{data:function(){return{status:0,timer:0}},computed:{current:function(){return this.$store.state.current},items:function(){return this.$store.state.items},currentText:function(){return this.current.length>0?this.current:this.items.length>0?"點擊開始":"沒有事項"},timeleft:function(){return this.$store.state.timeleft},timeText:function(){var t=Math.floor(this.timeleft/60).toString().padStart(2,"0"),e=Math.floor(this.timeleft%60).toString().padStart(2,"0");return"".concat(t," : ").concat(e)}},methods:{start:function(){var t=this;0===this.status&&this.items.length>0&&this.$store.commit("start"),this.current.length&&(this.status=1,this.timer=setInterval((function(){t.$store.commit("countdown"),t.timeleft<=-1&&t.finish(!1)}),1e3))},pause:function(){this.status=2,clearInterval(this.timer)},finish:function(t){if(clearInterval(this.timer),this.status=0,this.$store.commit("finish"),!t){var e=new Audio;e.src=n("1771")("./"+this.$store.state.sound),e.play()}this.items.length>0&&this.start()}}}),v=b,g=Object(c["a"])(v,p,h,!1,null,null,null),y=g.exports;r["default"].use(m["a"]);var w=[{path:"/",name:"Home",component:y,meta:{title:"番茄鐘",keepAlive:!0}},{path:"/settings",name:"Settings",component:function(){return n.e("settings").then(n.bind(null,"26d3"))},meta:{title:"番茄鐘 | 設定"}},{path:"/list",name:"List",component:function(){return n.e("list").then(n.bind(null,"1a33"))},meta:{title:"番茄鐘 | 事項"}},{path:"/404",name:"NotFound",component:function(){return n.e("notfound").then(n.bind(null,"9703"))},meta:{title:"番茄鐘 | 404"}},{path:"*",redirect:"/404"}],k=new m["a"]({routes:w});k.afterEach((function(t){document.title=t.meta.title}));var _=k,O=(n("a434"),n("b0c0"),n("2f62")),x=n("0e44");r["default"].use(O["a"]);var j=parseInt("1500"),S=parseInt("300"),$=new O["a"].Store({state:{sound:"alarm.mp3",items:[],current:"",finished:[],timeleft:j,break:!1},mutations:{selectSound:function(t,e){t.sound=e},additem:function(t,e){t.items.push({name:e,edit:!1,model:e})},edititem:function(t,e){t.items[e].edit=!0},delitem:function(t,e){t.items.splice(e,1)},submitedit:function(t,e){t.items[e].name=t.items[e].model,t.items[e].edit=!1},canceledit:function(t,e){t.items[e].model=t.items[e].name,t.items[e].edit=!1},start:function(t){t.current=t.break?"休息一下":t.items.shift().name},countdown:function(t){t.timeleft--},finish:function(t){t.break||t.finished.push(t.current),t.current="",t.items.length>0&&(t.break=!t.break),t.timeleft=t.break?S:j},delfinish:function(t,e){t.finished.splice(e,1)}},actions:{},modules:{},plugins:[Object(x["a"])({key:"pomodoro"})]});n("3e8e");r["default"].config.productionTip=!1,new r["default"]({router:_,store:$,render:function(t){return t(f)}}).$mount("#app")},a362:function(t,e,n){t.exports=n.p+"media/alarm.965b614d.mp3"},c7a5:function(t,e,n){t.exports=n.p+"media/yay.46c744f5.mp3"}});
//# sourceMappingURL=app.f8dafa2e.js.map