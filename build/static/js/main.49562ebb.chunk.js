(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{11:function(e,t,n){e.exports=n(25)},20:function(e,t,n){},25:function(e,t,n){"use strict";n.r(t);var a=n(2),u=n.n(a),c=n(10),r=n.n(c),o=(n(20),n(3)),l=n(27),i=function(){return l.a.get("/api/persons").then(function(e){return e.data})},s=function(e){return l.a.post("/api/persons",e).then(function(e){return e.data})},f=function(){var e=Object(a.useState)([]),t=Object(o.a)(e,2),n=t[0],c=t[1],r=Object(a.useState)(""),l=Object(o.a)(r,2),f=l[0],m=l[1],p=Object(a.useState)(""),b=Object(o.a)(p,2),E=b[0],d=b[1],g=Object(a.useState)(""),h=Object(o.a)(g,2),v=h[0],j=h[1];Object(a.useEffect)(function(){i().then(function(e){c(e)})},[]);return u.a.createElement("div",null,u.a.createElement("h1",null,"Persons"),v,u.a.createElement("ul",null,u.a.createElement("ul",null,n.map(function(e){return u.a.createElement("li",{className:"person"},e.name,e.number)}))),u.a.createElement("form",{onSubmit:function(e){e.preventDefault(),s({name:f,number:E}).then(function(e){c(n.concat(e)),m(""),d("")}).catch(function(e){j(e.response.data.error),setTimeout(function(){j(null)},5e3)})}},u.a.createElement("input",{value:f,onChange:function(e){m(e.target.value)}}),u.a.createElement("input",{value:E,onChange:function(e){d(e.target.value)}}),u.a.createElement("button",{type:"submit"},"save")))},m=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,28)).then(function(t){var n=t.getCLS,a=t.getFID,u=t.getFCP,c=t.getLCP,r=t.getTTFB;n(e),a(e),u(e),c(e),r(e)})};r.a.createRoot(document.getElementById("root")).render(u.a.createElement(u.a.StrictMode,null,u.a.createElement(f,null))),m()}},[[11,1,2]]]);
//# sourceMappingURL=main.49562ebb.chunk.js.map