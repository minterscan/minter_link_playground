(function(t){function e(e){for(var a,i,r=e[0],o=e[1],l=e[2],d=0,m=[];d<r.length;d++)i=r[d],Object.prototype.hasOwnProperty.call(s,i)&&s[i]&&m.push(s[i][0]),s[i]=0;for(a in o)Object.prototype.hasOwnProperty.call(o,a)&&(t[a]=o[a]);u&&u(e);while(m.length)m.shift()();return c.push.apply(c,l||[]),n()}function n(){for(var t,e=0;e<c.length;e++){for(var n=c[e],a=!0,r=1;r<n.length;r++){var o=n[r];0!==s[o]&&(a=!1)}a&&(c.splice(e--,1),t=i(i.s=n[0]))}return t}var a={},s={app:0},c=[];function i(e){if(a[e])return a[e].exports;var n=a[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,i),n.l=!0,n.exports}i.m=t,i.c=a,i.d=function(t,e,n){i.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},i.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},i.t=function(t,e){if(1&e&&(t=i(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(i.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var a in t)i.d(n,a,function(e){return t[e]}.bind(null,a));return n},i.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return i.d(e,"a",e),e},i.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},i.p="/minter_link_playground/";var r=window["webpackJsonp"]=window["webpackJsonp"]||[],o=r.push.bind(r);r.push=e,r=r.slice();for(var l=0;l<r.length;l++)e(r[l]);var u=o;c.push([0,"chunk-vendors"]),n()})({0:function(t,e,n){t.exports=n("56d7")},1:function(t,e){},2:function(t,e){},3:function(t,e){},4:function(t,e){},"56d7":function(t,e,n){"use strict";n.r(e);n("e260"),n("e6cf"),n("cca6"),n("a79d");var a=n("2b0e"),s=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"app"}},[n("Header"),n("Example"),n("Footer")],1)},c=[],i=n("5530"),r=n("2f62"),o=n("6bf2"),l=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"header"},[n("div",{staticClass:"container"},[n("div",{staticClass:"start"},[n("img",{staticClass:"logo",attrs:{src:t.publicPath+"/img/logo.svg"}})]),n("div",{staticClass:"end"},[t.isAuthenticated?n("span",{staticClass:"hidden"},[t._v(" 🦄 Hidden content, visible for logged-in users only ")]):t._e(),t.error?n("span",{staticClass:"error"},[t._v("Rejected")]):t._e(),!t.isAuthenticated&&t.wallet?n("button",{staticClass:"button auth",attrs:{disabled:t.loading},on:{click:function(e){return t.authRequest()}}},[t._v(" Sign In ")]):t._e(),t.isAuthenticated?n("button",{staticClass:"button active auth",on:{click:function(e){return t.signOut()}}},[t._v(" Sign out ")]):t._e()])])])},u=[],d=(n("d3b7"),{name:"Header",data:function(){return{publicPath:"/minter_link_playground/",loading:!1,error:!1}},computed:Object(i["a"])({},Object(r["c"])(["isAuthenticated","isUnlocked","wallet"])),methods:{authRequest:function(){var t=this;this.isUnlocked&&(this.error=!1,this.loading=!0,this.minterConnect.signRequest("Hello Minter").then((function(e){t.loading=!1,o["a"].verifySignature(t.wallet,e)&&(o["a"].set(t.wallet,!0),t.$store.commit("isAuthenticated",!0))})).catch((function(){t.error=!0})).finally((function(){t.loading=!1})))},signOut:function(){o["a"].clear(this.wallet),this.$store.commit("isAuthenticated",!1)}}}),m=d,p=n("2877"),f=Object(p["a"])(m,l,u,!1,null,null,null),h=f.exports,b=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},v=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"footer"},[n("div",{staticClass:"container"},[n("div",{staticClass:"start"},[n("span",[n("a",{attrs:{href:"https://github.com/minterscan/minter_link_playground",target:"_blank"}},[t._v("Source Code")])])])])])}],_={name:"Footer",computed:{year:function(){return(new Date).getFullYear()}}},g=_,y=Object(p["a"])(g,b,v,!1,null,null,null),C=y.exports,O=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"cp example"},[n("div",{staticClass:"container"},[n("welcome"),n("status"),n("div",{staticClass:"blocks"},[n("connect"),n("payment")],1)],1)])},k=[],j=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"status"},[t._v(" Browser extension "),t.isInstalled?[t._v(" v. "+t._s(t.version)+" ")]:t._e(),t._v(" is "),n("span",{staticClass:"dashed"},[t._v(" "+t._s(t.isInstalled?"installed":"not installed")+" ")]),t.isInstalled?[t._v(" and "),n("span",{staticClass:"dashed"},[t._v(" "+t._s(t.isUnlocked?"unlocked":"locked")+" ")])]:t._e()],2)},w=[],x={name:"Status",computed:Object(i["a"])({},Object(r["c"])(["isInstalled","isUnlocked","version"]))},P=x,E=Object(p["a"])(P,j,w,!1,null,null,null),I=E.exports,A=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"block"},[n("div",{staticClass:"title"},[t._v("Connect example")]),t.wallet?n("img",{attrs:{src:t.publicPath+"/img/charge.svg"}}):n("img",{attrs:{src:t.publicPath+"/img/plug.svg"}}),t.wallet?[n("div",{staticClass:"name"},[n("div",[t._v("Wallet connected")]),n("a",{attrs:{href:"https://minterscan.net/address/"+t.wallet,target:"_blank"}},[t._v(" "+t._s(t.wallet)+" ")])])]:[n("div",{staticClass:"name"},[t._v(" Not connected ")]),t.isInstalled&&t.isUnlocked?n("button",{staticClass:"button",class:t.wallet?"active":"",on:{click:function(e){return t.connectRequest()}}},[t._v(" Connect ")]):[t._v(" Unlock "+t._s(t.extensionName)+" to connect ")]],t.connectError?n("p",{staticClass:"error"},[t._v(" Connect was rejected ")]):t._e()],2)},$=[],S={name:"Connect",computed:Object(i["a"])({},Object(r["b"])(["publicPath"]),{},Object(r["c"])(["extensionName","isInstalled","isUnlocked","wallet"])),data:function(){return{connectError:!1}},watch:{wallet:function(){this.connectError=!1}},methods:{connectRequest:function(){var t=this;this.connectError=!1,this.minterConnect.connectRequest().then((function(e){t.$store.commit("wallet",e)})).catch((function(){t.connectError=!0}))}}},U=S,H=Object(p["a"])(U,A,$,!1,null,null,null),R=H.exports,M=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"block"},[n("div",{staticClass:"title"},[t._v("Payment example")]),n("img",{attrs:{alt:t.product.name,src:t.publicPath+"/img/"+t.product.icon+".svg"}}),n("div",{staticClass:"name"},[t._v(t._s(t.product.name))]),t.isInstalled&&t.isUnlocked?n("button",{staticClass:"button",on:{click:function(e){return t.paymentRequest()}}},[t._v(" Pay "),n("b",[t._v(t._s(t.product.price)+" "+t._s(t.product.coin))])]):[n("b",[t._v(t._s(t.product.price)+" "+t._s(t.product.coin))]),t._v(". Unlock "+t._s(t.extensionName)+" to pay ")],t.paymentError?n("p",{staticClass:"error"},[t._v(" Payment was rejected ")]):t._e(),t.paymentAccept?n("p",{staticClass:"success"},[n("a",{attrs:{href:"https://minterscan.net/tx/"+t.paymentHash,target:"_blank"}},[t._v("Payment accepted")])]):t._e()],2)},q=[],N={name:"Connect",computed:Object(i["a"])({},Object(r["b"])(["publicPath"]),{},Object(r["c"])(["extensionName","isInstalled","isUnlocked","wallet"])),data:function(){return{paymentHash:"",paymentAccept:!1,paymentError:!1,paymentAddress:"Mx1111efde6d4a7b0d32ca6905deaa52e465111111",orderId:"ORDER-1",product:{name:"Delicious Pizza",icon:"pizza",price:1,coin:"BIP"}}},methods:{paymentRequest:function(){var t=this;this.paymentHash="",this.paymentError=!1,this.paymentAccept=!1;var e={address:this.paymentAddress,amount:this.product.price,coin:this.product.coin,payload:this.orderId};this.minterConnect.paymentRequest(e).then((function(e){t.paymentHash=e,t.paymentAccept=!0})).catch((function(){t.paymentHash="",t.paymentError=!0}))}}},T=N,z=Object(p["a"])(T,M,q,!1,null,null,null),B=z.exports,F=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"welcome"},[t._v(" Welcome to "),n("a",{attrs:{href:t.extensionUrl,target:"_blank"}},[t._v(t._s(t.extensionName))]),t._v(" playground ")])},W=[],D={name:"Connect",computed:Object(i["a"])({},Object(r["c"])(["extensionName","extensionUrl"]))},J=D,L=Object(p["a"])(J,F,W,!1,null,null,null),V=L.exports,Y={name:"Example",components:{Connect:R,Payment:B,Status:I,Welcome:V}},G=Y,K=Object(p["a"])(G,O,k,!1,null,null,null),Q=K.exports,X=n("aa18"),Z={name:"App",components:{Header:h,Footer:C,Example:Q},computed:Object(i["a"])({},Object(r["c"])(["wallet"])),watch:{wallet:function(){this.authCheck()}},mounted:function(){this.subscribe(),this.authCheck()},methods:{authCheck:function(){this.$store.commit("isAuthenticated",!1),o["a"].get(this.wallet)&&this.$store.commit("isAuthenticated",!0)},subscribe:function(){var t=this;this.minterConnect.subscribe(X["a"].IsInstalled,(function(e){t.$store.commit("isInstalled",e)})),this.minterConnect.subscribe(X["a"].IsUnlocked,(function(e){t.$store.commit("isUnlocked",e),e||t.$store.commit("isAuthenticated",!1)})),this.minterConnect.subscribe(X["a"].Version,(function(e){t.$store.commit("version",e)})),this.minterConnect.subscribe(X["a"].Wallet,(function(e){t.$store.commit("wallet",e)}))}}},tt=Z,et=Object(p["a"])(tt,s,c,!1,null,null,null),nt=et.exports;n("fb98");a["a"].use(r["a"]);var at=new r["a"].Store({state:{extensionName:"Minter Link",extensionUrl:"https://github.com/minterscan/minter_link",isAuthenticated:!1,isInstalled:!1,isUnlocked:!1,version:"",wallet:""},getters:{publicPath:function(){return"/minter_link_playground/"}},mutations:{isAuthenticated:function(t,e){t.isAuthenticated=e},isInstalled:function(t,e){t.isInstalled=e},isUnlocked:function(t,e){t.isUnlocked=e},version:function(t,e){t.version=e},wallet:function(t,e){t.wallet=e}}}),st={install:function(t){t.prototype.minterConnect=new X["b"]("MinterLink Playground")}};a["a"].config.productionTip=!1,a["a"].use(st),new a["a"]({store:at,render:function(t){return t(nt)}}).$mount("#app")},"6bf2":function(t,e,n){"use strict";(function(t){n.d(e,"a",(function(){return l}));n("d3b7"),n("25f0");var a=n("d4ec"),s=n("bee2"),c=n("158a"),i=n("7001"),r=n("40c9"),o=n("b1ba"),l=function(){function e(){Object(a["a"])(this,e)}return Object(s["a"])(e,null,[{key:"set",value:function(t,e){localStorage.setItem(t,e)}},{key:"get",value:function(t){return localStorage.getItem(t)}},{key:"clear",value:function(t){localStorage.removeItem(t)}},{key:"verifySignature",value:function(e,n){var a="Hello Minter",s=Object(r["toBuffer"])(Object(r["addHexPrefix"])(t.from(a).toString("hex"))),l=Object(o["hashPersonalMessage"])(s),u=Object(o["fromRpcSig"])(n),d=Object(o["ecrecover"])(l,u.v,u.r,u.s),m=Object(i["pubToAddress"])(d);return Object(c["a"])(e)===Object(r["bufferToHex"])(m)}}]),e}()}).call(this,n("b639").Buffer)},fb98:function(t,e,n){}});
//# sourceMappingURL=app.3ace8320.js.map