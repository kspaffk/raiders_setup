(this.webpackJsonpraiders_setup=this.webpackJsonpraiders_setup||[]).push([[0],{14:function(r,e,n){},15:function(r,e,n){},16:function(r,e,n){"use strict";n.r(e);var a=n(0),l=n(1),t=n.n(l),o=n(8),c=n.n(o),u=(n(14),n(7)),d=n(2),s=(n(15),n(6));var p=function(){var r=Object(l.useState)(null),e=Object(d.a)(r,2),n=e[0],t=e[1],o=Object(l.useState)(null),c=Object(d.a)(o,2),p=c[0],i=c[1],j=Object(l.useState)(null),m=Object(d.a)(j,2),b=m[0],h=m[1],g=Object(l.useState)(null),v=Object(d.a)(g,2),O=v[0],f=v[1],w=Object(l.useState)(null),_=Object(d.a)(w,2),k=_[0],x=_[1],N=Object(l.useState)(null),S=Object(d.a)(N,2),C=S[0],y=S[1],J=Object(l.useCallback)((function(){var r,e=JSON.parse(JSON.stringify(s.startingLocations)),n=Object(u.a)(s.startingPlunderBag);e.forEach((function(r){for(var e=r.plunder;e>0;e--){var a=n.splice(B(1,n.length),1);r.plunder_arr.push(a[0])}})),t(Object(u.a)(e)),i((r=n).filter((function(r){return"cow"===r})).length),h(r.filter((function(r){return"ore"===r})).length),f(r.filter((function(r){return"gold"===r})).length),x(r.filter((function(r){return"valk"===r})).length),y(r.filter((function(r){return"jarl"===r})).length)}),[]);function B(r,e){var n=Math.random()*(e-r)+r;return Math.floor(n)}return Object(l.useEffect)((function(){return J()}),[J]),Object(a.jsxs)("div",{children:[Object(a.jsx)("header",{children:"Raiders of the North Sea Plunder Randomizer"}),Object(a.jsxs)("div",{className:"board",children:[n&&n.length>0&&n.map((function(r,e){return Object(a.jsxs)("div",{className:"plunderArea ".concat(r.name),children:[Object(a.jsxs)("div",{className:"location",children:[r.name.substring(0,1).toUpperCase()+r.name.substring(1,r.name.length-1),Object(a.jsx)("div",{className:"location-plunder-count",children:r.plunder},"plunder-count-".concat(e))]},r.name),r.plunder_arr&&r.plunder_arr.map((function(e,n){return Object(a.jsx)("img",{className:"plunder ".concat(e),alt:e,src:"/raiders_setup/img/".concat(e,".png")},r.name+"-"+n)}))]},r.name)})),Object(a.jsxs)("div",{className:"plunderBag",children:[Object(a.jsx)("div",{className:"plunderbag-title",children:"Plunder left in bag"}),Object(a.jsxs)("div",{className:"counts livestockCount",children:["Livestock: ",p]}),Object(a.jsxs)("div",{className:"counts oreCount",children:["Ore: ",b]}),Object(a.jsxs)("div",{className:"counts goldCount",children:["Gold: ",O]}),Object(a.jsxs)("div",{className:"counts valkCount",children:["Valkyrie: ",k]}),Object(a.jsxs)("div",{className:"counts jarlCount",children:["Jarl: ",C]}),Object(a.jsx)("button",{onClick:function(){return J()},children:"Randomize!"})]})]})]})};c.a.render(Object(a.jsx)(t.a.StrictMode,{children:Object(a.jsx)(p,{})}),document.getElementById("root"))},6:function(r){r.exports=JSON.parse('{"startingLocations":[{"name":"fortress1","plunder":2,"plunder_arr":[]},{"name":"fortress2","plunder":3,"plunder_arr":[]},{"name":"fortress3","plunder":2,"plunder_arr":[]},{"name":"fortress4","plunder":2,"plunder_arr":[]},{"name":"fortress5","plunder":2,"plunder_arr":[]},{"name":"fortress6","plunder":3,"plunder_arr":[]},{"name":"monastery1","plunder":3,"plunder_arr":[]},{"name":"monastery2","plunder":2,"plunder_arr":[]},{"name":"monastery3","plunder":2,"plunder_arr":[]},{"name":"monastery4","plunder":3,"plunder_arr":[]},{"name":"outpost1","plunder":3,"plunder_arr":[]},{"name":"outpost2","plunder":3,"plunder_arr":[]},{"name":"outpost3","plunder":4,"plunder_arr":[]},{"name":"outpost4","plunder":3,"plunder_arr":[]},{"name":"township1","plunder":4,"plunder_arr":[]},{"name":"township2","plunder":3,"plunder_arr":[]},{"name":"township3","plunder":4,"plunder_arr":[]},{"name":"harbor1","plunder":4,"plunder_arr":[]},{"name":"harbor2","plunder":3,"plunder_arr":[]},{"name":"harbor3","plunder":4,"plunder_arr":[]},{"name":"harbor4","plunder":3,"plunder_arr":[]},{"name":"harbor5","plunder":4,"plunder_arr":[]},{"name":"harbor6","plunder":4,"plunder_arr":[]},{"name":"harbor7","plunder":4,"plunder_arr":[]},{"name":"harbor8","plunder":3,"plunder_arr":[]},{"name":"harbor9","plunder":4,"plunder_arr":[]}],"startingPlunderBag":["cow","cow","cow","cow","cow","cow","cow","cow","cow","cow","cow","cow","cow","cow","cow","cow","cow","cow","cow","cow","cow","cow","cow","cow","cow","cow","ore","ore","ore","ore","ore","ore","ore","ore","ore","ore","ore","ore","ore","ore","ore","ore","ore","ore","gold","gold","gold","gold","gold","gold","gold","gold","gold","gold","gold","gold","gold","gold","gold","gold","gold","gold","valk","valk","valk","valk","valk","valk","valk","valk","valk","valk","valk","valk","valk","valk","valk","valk","valk","valk","jarl","jarl","jarl","jarl","jarl","jarl","jarl","jarl","jarl","jarl","jarl","jarl"]}')}},[[16,1,2]]]);
//# sourceMappingURL=main.ec7ca72a.chunk.js.map