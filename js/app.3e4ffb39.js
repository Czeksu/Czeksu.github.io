(function(t){function s(s){for(var a,n,c=s[0],i=s[1],l=s[2],u=0,p=[];u<c.length;u++)n=c[u],Object.prototype.hasOwnProperty.call(r,n)&&r[n]&&p.push(r[n][0]),r[n]=0;for(a in i)Object.prototype.hasOwnProperty.call(i,a)&&(t[a]=i[a]);d&&d(s);while(p.length)p.shift()();return o.push.apply(o,l||[]),e()}function e(){for(var t,s=0;s<o.length;s++){for(var e=o[s],a=!0,c=1;c<e.length;c++){var i=e[c];0!==r[i]&&(a=!1)}a&&(o.splice(s--,1),t=n(n.s=e[0]))}return t}var a={},r={app:0},o=[];function n(s){if(a[s])return a[s].exports;var e=a[s]={i:s,l:!1,exports:{}};return t[s].call(e.exports,e,e.exports,n),e.l=!0,e.exports}n.m=t,n.c=a,n.d=function(t,s,e){n.o(t,s)||Object.defineProperty(t,s,{enumerable:!0,get:e})},n.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},n.t=function(t,s){if(1&s&&(t=n(t)),8&s)return t;if(4&s&&"object"===typeof t&&t&&t.__esModule)return t;var e=Object.create(null);if(n.r(e),Object.defineProperty(e,"default",{enumerable:!0,value:t}),2&s&&"string"!=typeof t)for(var a in t)n.d(e,a,function(s){return t[s]}.bind(null,a));return e},n.n=function(t){var s=t&&t.__esModule?function(){return t["default"]}:function(){return t};return n.d(s,"a",s),s},n.o=function(t,s){return Object.prototype.hasOwnProperty.call(t,s)},n.p="/";var c=window["webpackJsonp"]=window["webpackJsonp"]||[],i=c.push.bind(c);c.push=s,c=c.slice();for(var l=0;l<c.length;l++)s(c[l]);var d=i;o.push([0,"chunk-vendors"]),e()})({0:function(t,s,e){t.exports=e("56d7")},4678:function(t,s,e){var a={"./af":"2bfb","./af.js":"2bfb","./ar":"8e73","./ar-dz":"a356","./ar-dz.js":"a356","./ar-kw":"423e","./ar-kw.js":"423e","./ar-ly":"1cfd","./ar-ly.js":"1cfd","./ar-ma":"0a84","./ar-ma.js":"0a84","./ar-sa":"8230","./ar-sa.js":"8230","./ar-tn":"6d83","./ar-tn.js":"6d83","./ar.js":"8e73","./az":"485c","./az.js":"485c","./be":"1fc1","./be.js":"1fc1","./bg":"84aa","./bg.js":"84aa","./bm":"a7fa","./bm.js":"a7fa","./bn":"9043","./bn.js":"9043","./bo":"d26a","./bo.js":"d26a","./br":"6887","./br.js":"6887","./bs":"2554","./bs.js":"2554","./ca":"d716","./ca.js":"d716","./cs":"3c0d","./cs.js":"3c0d","./cv":"03ec","./cv.js":"03ec","./cy":"9797","./cy.js":"9797","./da":"0f14","./da.js":"0f14","./de":"b469","./de-at":"b3eb","./de-at.js":"b3eb","./de-ch":"bb71","./de-ch.js":"bb71","./de.js":"b469","./dv":"598a","./dv.js":"598a","./el":"8d47","./el.js":"8d47","./en-au":"0e6b","./en-au.js":"0e6b","./en-ca":"3886","./en-ca.js":"3886","./en-gb":"39a6","./en-gb.js":"39a6","./en-ie":"e1d3","./en-ie.js":"e1d3","./en-il":"7333","./en-il.js":"7333","./en-in":"ec2e","./en-in.js":"ec2e","./en-nz":"6f50","./en-nz.js":"6f50","./en-sg":"b7e9","./en-sg.js":"b7e9","./eo":"65db","./eo.js":"65db","./es":"898b","./es-do":"0a3c","./es-do.js":"0a3c","./es-us":"55c9","./es-us.js":"55c9","./es.js":"898b","./et":"ec18","./et.js":"ec18","./eu":"0ff2","./eu.js":"0ff2","./fa":"8df4","./fa.js":"8df4","./fi":"81e9","./fi.js":"81e9","./fil":"d69a","./fil.js":"d69a","./fo":"0721","./fo.js":"0721","./fr":"9f26","./fr-ca":"d9f8","./fr-ca.js":"d9f8","./fr-ch":"0e49","./fr-ch.js":"0e49","./fr.js":"9f26","./fy":"7118","./fy.js":"7118","./ga":"5120","./ga.js":"5120","./gd":"f6b4","./gd.js":"f6b4","./gl":"8840","./gl.js":"8840","./gom-deva":"aaf2","./gom-deva.js":"aaf2","./gom-latn":"0caa","./gom-latn.js":"0caa","./gu":"e0c5","./gu.js":"e0c5","./he":"c7aa","./he.js":"c7aa","./hi":"dc4d","./hi.js":"dc4d","./hr":"4ba9","./hr.js":"4ba9","./hu":"5b14","./hu.js":"5b14","./hy-am":"d6b6","./hy-am.js":"d6b6","./id":"5038","./id.js":"5038","./is":"0558","./is.js":"0558","./it":"6e98","./it-ch":"6f12","./it-ch.js":"6f12","./it.js":"6e98","./ja":"079e","./ja.js":"079e","./jv":"b540","./jv.js":"b540","./ka":"201b","./ka.js":"201b","./kk":"6d79","./kk.js":"6d79","./km":"e81d","./km.js":"e81d","./kn":"3e92","./kn.js":"3e92","./ko":"22f8","./ko.js":"22f8","./ku":"2421","./ku.js":"2421","./ky":"9609","./ky.js":"9609","./lb":"440c","./lb.js":"440c","./lo":"b29d","./lo.js":"b29d","./lt":"26f9","./lt.js":"26f9","./lv":"b97c","./lv.js":"b97c","./me":"293c","./me.js":"293c","./mi":"688b","./mi.js":"688b","./mk":"6909","./mk.js":"6909","./ml":"02fb","./ml.js":"02fb","./mn":"958b","./mn.js":"958b","./mr":"39bd","./mr.js":"39bd","./ms":"ebe4","./ms-my":"6403","./ms-my.js":"6403","./ms.js":"ebe4","./mt":"1b45","./mt.js":"1b45","./my":"8689","./my.js":"8689","./nb":"6ce3","./nb.js":"6ce3","./ne":"3a39","./ne.js":"3a39","./nl":"facd","./nl-be":"db29","./nl-be.js":"db29","./nl.js":"facd","./nn":"b84c","./nn.js":"b84c","./oc-lnc":"167b","./oc-lnc.js":"167b","./pa-in":"f3ff","./pa-in.js":"f3ff","./pl":"8d57","./pl.js":"8d57","./pt":"f260","./pt-br":"d2d4","./pt-br.js":"d2d4","./pt.js":"f260","./ro":"972c","./ro.js":"972c","./ru":"957c","./ru.js":"957c","./sd":"6784","./sd.js":"6784","./se":"ffff","./se.js":"ffff","./si":"eda5","./si.js":"eda5","./sk":"7be6","./sk.js":"7be6","./sl":"8155","./sl.js":"8155","./sq":"c8f3","./sq.js":"c8f3","./sr":"cf1e","./sr-cyrl":"13e9","./sr-cyrl.js":"13e9","./sr.js":"cf1e","./ss":"52bd","./ss.js":"52bd","./sv":"5fbd","./sv.js":"5fbd","./sw":"74dc","./sw.js":"74dc","./ta":"3de5","./ta.js":"3de5","./te":"5cbb","./te.js":"5cbb","./tet":"576c","./tet.js":"576c","./tg":"3b1b","./tg.js":"3b1b","./th":"10e8","./th.js":"10e8","./tk":"5aff","./tk.js":"5aff","./tl-ph":"0f38","./tl-ph.js":"0f38","./tlh":"cf75","./tlh.js":"cf75","./tr":"0e81","./tr.js":"0e81","./tzl":"cf51","./tzl.js":"cf51","./tzm":"c109","./tzm-latn":"b53d","./tzm-latn.js":"b53d","./tzm.js":"c109","./ug-cn":"6117","./ug-cn.js":"6117","./uk":"ada2","./uk.js":"ada2","./ur":"5294","./ur.js":"5294","./uz":"2e8c","./uz-latn":"010e","./uz-latn.js":"010e","./uz.js":"2e8c","./vi":"2921","./vi.js":"2921","./x-pseudo":"fd7e","./x-pseudo.js":"fd7e","./yo":"7f33","./yo.js":"7f33","./zh-cn":"5c3a","./zh-cn.js":"5c3a","./zh-hk":"49ab","./zh-hk.js":"49ab","./zh-mo":"3a6c","./zh-mo.js":"3a6c","./zh-tw":"90ea","./zh-tw.js":"90ea"};function r(t){var s=o(t);return e(s)}function o(t){if(!e.o(a,t)){var s=new Error("Cannot find module '"+t+"'");throw s.code="MODULE_NOT_FOUND",s}return a[t]}r.keys=function(){return Object.keys(a)},r.resolve=o,t.exports=r,r.id="4678"},"56d7":function(t,s,e){"use strict";e.r(s);e("e260"),e("e6cf"),e("cca6"),e("a79d");var a,r,o=e("2b0e"),n=e("8c4f"),c=function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{staticClass:"container",staticStyle:{width:"100%"}},[e("header",{staticClass:"header"},[e("img",{staticClass:"img",attrs:{src:"https://img.icons8.com/nolan/64/coronavirus.png"},on:{click:function(s){t.$router.push("/").catch((function(t){}))}}}),e("input",{staticClass:"menu-btn",attrs:{type:"checkbox",id:"menu-btn"}}),t._m(0),e("ul",{staticClass:"menu"},[e("li",[e("a",{on:{click:function(s){t.$router.push("/").catch((function(t){}))}}},[t._v("Home")])]),e("li",[e("a",{on:{click:function(s){t.$router.push("/countries").catch((function(t){}))}}},[t._v("Countries")])])])]),e("router-view")],1)},i=[function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("label",{staticClass:"menu-icon",attrs:{for:"menu-btn"}},[e("span",{staticClass:"navicon"})])}],l=e("2877"),d={},u=Object(l["a"])(d,c,i,!1,null,null,null),p=u.exports,f=function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",[e("h1",{staticClass:"display-4",staticStyle:{"text-align":"center","font-size":"45px"}},[t._v("Current country data all around the world!")]),e("h2",{staticClass:"display-4",staticStyle:{"text-align":"center","font-size":"25px"}},[t._v("Click on country name to see specified data for each country.")]),e("br"),e("br"),e("table",{staticClass:"display",attrs:{id:"tab"}},[t._m(0),e("tbody",t._l(t.countries.Countries,(function(s,a){return e("tr",{key:a,attrs:{scope:"row"}},[e("td",{attrs:{scope:"col"}},[e("img",{staticClass:"img",attrs:{src:"https://www.countryflags.io/"+t.countries.Countries[a].CountryCode+"/flat/24.png"}}),e("router-link",{attrs:{to:"/CountryInfo/"+t.countries.Countries[a].CountryCode}},[t._v(t._s(t.countries.Countries[a].Country))])],1),e("td",{attrs:{scope:"col"}},[t._v(t._s(t.countries.Countries[a].TotalConfirmed))]),e("td",{attrs:{scope:"col"}},[t._v(t._s(t.countries.Countries[a].NewConfirmed))]),e("td",{attrs:{scope:"col"}},[t._v(t._s(t.countries.Countries[a].TotalDeaths))]),e("td",{attrs:{scope:"col"}},[t._v(t._s(t.countries.Countries[a].NewDeaths))]),e("td",{attrs:{scope:"col"}},[t._v(t._s(t.countries.Countries[a].TotalRecovered))]),e("td",{attrs:{scope:"col"}},[t._v(t._s(t.countries.Countries[a].NewRecovered))])])})),0)]),e("p")])},h=[function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("thead",[e("tr",{attrs:{scope:"row"}},[e("th",{attrs:{scope:"col"}},[t._v("Country")]),e("th",{attrs:{scope:"col"}},[t._v("Total confirmed")]),e("th",{attrs:{scope:"col"}},[t._v("New confirmed")]),e("th",{attrs:{scope:"col"}},[t._v("Total deaths")]),e("th",{attrs:{scope:"col"}},[t._v("New deaths")]),e("th",{attrs:{scope:"col"}},[t._v("Total recovered")]),e("th",{attrs:{scope:"col"}},[t._v("New recovered")])])])}],m=(e("d3b7"),e("96cf")),g=e.n(m),b=e("1da1"),C={data:function(){return{countries:[]}},created:function(){var t=this;return Object(b["a"])(g.a.mark((function s(){return g.a.wrap((function(s){while(1)switch(s.prev=s.next){case 0:fetch("https://api.covid19api.com/summary").then((function(t){return t.json()})).then((function(s){t.countries=s}));case 1:case"end":return s.stop()}}),s)})))()},updated:function(){return Object(b["a"])(g.a.mark((function t(){return g.a.wrap((function(t){while(1)switch(t.prev=t.next){case 0:$(document).ready((function(){$("#tab").DataTable({order:[[1,"desc"]],scrollX:!0,pageLength:25})}));case 1:case"end":return t.stop()}}),t)})))()}},v=C,j=Object(l["a"])(v,f,h,!1,null,null,null),w=j.exports,y=function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",[e("div",{staticClass:"row"},[e("div",{staticClass:"col-md-6",attrs:{id:"firstColumnHome"}},[e("h4",{staticClass:"dataText"},[t._v("Total confirmed:")]),e("p",{staticClass:"data"},[t._v(t._s(t.countries.Global.TotalConfirmed)+" "),e("img",{staticClass:"img",staticStyle:{"margin-bottom":"10px"},attrs:{src:"https://www.zovirax.pl/images/el1.png",width:"40px",height:"40px"}})]),e("h4",{staticClass:"dataText"},[t._v("Total deaths:")]),e("p",{staticClass:"data"},[t._v(t._s(t.countries.Global.TotalDeaths)+" "),e("img",{staticClass:"img",staticStyle:{"margin-bottom":"10px"},attrs:{src:"https://pngimage.net/wp-content/uploads/2018/05/christian-cross-png-6.png",width:"40px",height:"40px"}})]),e("h4",{staticClass:"dataText"},[t._v("Total recovered:")]),e("p",{staticClass:"data"},[t._v(t._s(t.countries.Global.TotalRecovered)+" "),e("img",{staticClass:"img",staticStyle:{"margin-bottom":"10px"},attrs:{src:"https://data3.cupsell.pl/upload/generator/183511/640x420/2915072_print_1.png?resize=max_sizes&key=55f9a22768eed085006592c1174c0235",width:"40px",height:"40px"}})])]),e("div",{staticClass:"col-md-6"},[e("h4",{staticClass:"dataText"},[t._v("New confirmed:")]),e("p",{staticClass:"data"},[t._v(t._s(t.countries.Global.NewConfirmed)+" "),e("img",{staticClass:"img",staticStyle:{"margin-bottom":"10px"},attrs:{src:"https://upload.wikimedia.org/wikipedia/commons/thumb/f/fe/Green-Up-Arrow.svg/807px-Green-Up-Arrow.svg.png",width:"40px",height:"35px"}})]),e("h4",{staticClass:"dataText"},[t._v("New deaths:")]),e("p",{staticClass:"data"},[t._v(t._s(t.countries.Global.NewDeaths)+" "),e("img",{staticClass:"img",staticStyle:{"margin-bottom":"10px"},attrs:{src:"https://cdn.pixabay.com/photo/2016/12/18/11/05/black-1915459_960_720.png",width:"40px",height:"35px"}})]),e("h4",{staticClass:"dataText"},[t._v("New recovered:")]),e("p",{staticClass:"data"},[t._v(t._s(t.countries.Global.NewRecovered)+" "),e("img",{staticClass:"img",staticStyle:{"margin-bottom":"10px"},attrs:{src:"https://upload.wikimedia.org/wikipedia/commons/thumb/a/a3/Recycling_symbol2.svg/1024px-Recycling_symbol2.svg.png",width:"40px",height:"40px"}})])])]),e("div",{staticClass:"row"},[e("div",{staticClass:"col-md-6",attrs:{id:"firstColumnHome"}},[e("h4",[t._v("European popular countries")]),e("p",[e("img",{staticClass:"img",attrs:{src:"https://www.countryflags.io/ES/flat/24.png"}}),e("router-link",{attrs:{to:"/CountryInfo/ES"}},[t._v("Spain")])],1),e("p",[e("img",{staticClass:"img",attrs:{src:"https://www.countryflags.io/GB/flat/24.png"}}),e("router-link",{attrs:{to:"/CountryInfo/GB"}},[t._v("United Kingdom")])],1),e("img",{staticClass:"img",attrs:{src:"https://www.countryflags.io/IT/flat/24.png"}}),e("router-link",{attrs:{to:"/CountryInfo/IT"}},[t._v("Italy")]),e("p"),e("img",{staticClass:"img",attrs:{src:"https://www.countryflags.io/DE/flat/24.png"}}),e("router-link",{attrs:{to:"/CountryInfo/DE"}},[t._v("Germany")]),e("p"),e("img",{staticClass:"img",attrs:{src:"https://www.countryflags.io/PL/flat/24.png"}}),e("router-link",{attrs:{to:"/CountryInfo/PL"}},[t._v("Poland")]),e("p")],1),e("div",{staticClass:"col-md-6",attrs:{id:"firstColumnHome"}},[e("h4",[t._v("Other popular countries")]),e("p",[e("img",{staticClass:"img",attrs:{src:"https://www.countryflags.io/US/flat/24.png"}}),e("router-link",{attrs:{to:"/CountryInfo/US"}},[t._v("United States")])],1),e("p",[e("img",{staticClass:"img",attrs:{src:"https://www.countryflags.io/BR/flat/24.png"}}),e("router-link",{attrs:{to:"/CountryInfo/BR"}},[t._v("Brazil")])],1),e("p",[e("img",{staticClass:"img",attrs:{src:"https://www.countryflags.io/IN/flat/24.png"}}),e("router-link",{attrs:{to:"/CountryInfo/IN"}},[t._v("India")])],1),e("p",[e("img",{staticClass:"img",attrs:{src:"https://www.countryflags.io/RU/flat/24.png"}}),e("router-link",{attrs:{to:"/CountryInfo/RU"}},[t._v("Russian Federation")])],1),e("p",[e("img",{staticClass:"img",attrs:{src:"https://www.countryflags.io/CN/flat/24.png"}}),e("router-link",{attrs:{to:"/CountryInfo/CN"}},[t._v("China")])],1)])])])},_=[],x={data:function(){return{countries:[]}},created:function(){var t=this;return Object(b["a"])(g.a.mark((function s(){return g.a.wrap((function(s){while(1)switch(s.prev=s.next){case 0:fetch("https://api.covid19api.com/summary").then((function(t){return t.json()})).then((function(s){t.countries=s}));case 1:case"end":return s.stop()}}),s)})))()}},k=x,z=Object(l["a"])(k,y,_,!1,null,null,null),D=z.exports,O=function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{staticClass:"container"},[e("div",{staticClass:"row mt-5",staticStyle:{"margin-top":"0 !important"}},[e("div",{staticClass:"col-md-6"},[e("h1",{staticClass:"text-center"},[t._v(t._s(t.countries[1].Country))]),e("img",{staticClass:"rounded mx-auto d-block",staticStyle:{"margin-bottom":"40px"},attrs:{src:"",id:"flag",width:"100px"}})]),e("div",{staticClass:"col-md-6"},[e("h4",{staticClass:"dataText"},[t._v("Total confirmed:")]),e("p",{staticClass:"data"},[t._v(t._s(t.countries[t.countries.length-1].Confirmed)+" "),e("img",{staticClass:"img",staticStyle:{"margin-bottom":"10px"},attrs:{src:"https://www.zovirax.pl/images/el1.png",width:"40px",height:"40px"}})]),e("h4",{staticClass:"dataText"},[t._v("Total deaths:")]),e("p",{staticClass:"data"},[t._v(t._s(t.countries[t.countries.length-1].Deaths)+" "),e("img",{staticClass:"img",staticStyle:{"margin-bottom":"10px"},attrs:{src:"https://pngimage.net/wp-content/uploads/2018/05/christian-cross-png-6.png",width:"40px",height:"40px"}})]),e("h4",{staticClass:"dataText"},[t._v("Total recovered:")]),e("p",{staticClass:"data"},[t._v(t._s(t.countries[t.countries.length-1].Recovered)+" "),e("img",{staticClass:"img",staticStyle:{"margin-bottom":"10px"},attrs:{src:"https://data3.cupsell.pl/upload/generator/183511/640x420/2915072_print_1.png?resize=max_sizes&key=55f9a22768eed085006592c1174c0235",width:"40px",height:"40px"}})])])]),t.arrConfirmed.length>0?e("div",{staticClass:"row mt-5"},[e("div",{staticClass:"col"},[e("h2",{staticClass:"text-center"},[t._v("Confirmed cases")]),e("line-chart",{attrs:{chartData:t.arrConfirmed,options:t.chartOptions,chartColors:t.confirmedChartColors,label:"Confirmed"}})],1)]):t._e(),t.arrDeaths.length>0?e("div",{staticClass:"row mt-5"},[e("div",{staticClass:"col"},[e("h2",{staticClass:"text-center"},[t._v("Deaths")]),e("line-chart",{attrs:{chartData:t.arrDeaths,options:t.chartOptions,chartColors:t.deathsChartColors,label:"Deaths"}})],1)]):t._e(),t.arrRecovered.length>0?e("div",{staticClass:"row mt-5"},[e("div",{staticClass:"col"},[e("h2",{staticClass:"text-center"},[t._v("Recovered")]),e("line-chart",{attrs:{chartData:t.arrRecovered,options:t.chartOptions,chartColors:t.recoveredChartColors,label:"Recovered"}})],1)]):t._e()])},T=[],E=(e("4160"),e("159b"),e("bc3a")),S=e.n(E),I=e("c1df"),N=e.n(I),R=(e("d81d"),e("1fca")),B={extends:R["a"],props:{label:{type:String},chartData:{type:Array},options:{type:Object},chartColors:{type:Object}},mounted:function(){var t=this.chartData.map((function(t){return t.Date})),s=this.chartData.map((function(t){return t.Country})),e=this.chartColors,a=e.borderColor,r=e.pointBorderColor,o=e.pointBackgroundColor,n=e.backgroundColor;this.renderChart({labels:t,datasets:[{label:this.label,data:s,borderColor:a,pointBorderColor:r,pointBackgroundColor:o,backgroundColor:n}]},this.options)}},A=B,G=Object(l["a"])(A,a,r,!1,null,null,null),P=G.exports,U={components:{LineChart:P},data:function(){return{cc:this.$route.params.CountryCode,countries:[],arrConfirmed:[],confirmedChartColors:{borderColor:"#077187",pointBorderColor:"#0E1428",pointBackgroundColor:"#AFD6AC",backgroundColor:"#74A57F"},arrRecovered:[],recoveredChartColors:{borderColor:"#4E5E66",pointBorderColor:"#4E5E66",pointBackgroundColor:"#31E981",backgroundColor:"#31E981"},arrDeaths:[],deathsChartColors:{borderColor:"#E06D06",pointBorderColor:"#E06D06",pointBackgroundColor:"#402A2C",backgroundColor:"#402A2C"},chartOptions:{responsive:!0,maintainAspectRatio:!1}}},created:function(){var t=this;return Object(b["a"])(g.a.mark((function s(){var e,a;return g.a.wrap((function(s){while(1)switch(s.prev=s.next){case 0:return s.next=2,S.a.get("https://api.covid19api.com/total/country/"+t.cc);case 2:e=s.sent,a=e.data,a.forEach((function(s){var e=N()(s.Date,"").format("MM/DD"),a=s.Confirmed,r=s.Deaths,o=s.Recovered;t.arrConfirmed.push({Date:e,Country:a}),t.arrRecovered.push({Date:e,Country:o}),t.arrDeaths.push({Date:e,Country:r})}));case 5:case"end":return s.stop()}}),s)})))()},mounted:function(){var t=this;fetch("https://api.covid19api.com/total/country/"+this.cc).then((function(t){return t.json()})).then((function(s){t.countries=s}))},updated:function(){document.getElementById("flag").src="https://www.countryflags.io/"+this.cc+"/flat/64.png",document.getElementById("signup").hidden=!0,document.getElementById("signin").hidden=!0}},M=U,F=Object(l["a"])(M,O,T,!1,null,null,null),L=F.exports,H=e("9483");Object(H["a"])("".concat("/","service-worker.js"),{ready:function(){console.log("App is being served from cache by a service worker.\nFor more details, visit https://goo.gl/AFskqB")},registered:function(){console.log("Service worker has been registered.")},cached:function(){console.log("Content has been cached for offline use.")},updatefound:function(){console.log("New content is downloading.")},updated:function(){console.log("New content is available; please refresh.")},offline:function(){console.log("No internet connection found. App is running in offline mode.")},error:function(t){console.error("Error during service worker registration:",t)}}),o["a"].prototype.$axios=S.a,o["a"].use(n["a"]);var q,J=[{path:"/",name:"home",component:D},{path:"/countries",name:"countries",component:w},{path:"/app",component:p},{path:"/CountryInfo/:CountryCode",component:L}],K=new n["a"]({routes:J,mode:"hash",base:"/"});s["default"]=K;q||(q=new o["a"]({el:"#app",router:K,render:function(t){return t(p)}}))}});
//# sourceMappingURL=app.3e4ffb39.js.map