(this["webpackJsonpgoit-react-hw-05.1-movies"]=this["webpackJsonpgoit-react-hw-05.1-movies"]||[]).push([[3],{30:function(e,t,n){"use strict";n.d(t,"a",(function(){return o}));var a=n(44),c=n.n(a),i=n(35),r=n.n(i),s=n(3),o=function(){return Object(s.jsx)("div",{className:r.a.Loader,children:Object(s.jsx)(c.a,{type:"Circles",color:"tomato",height:100,width:100,timeout:3e3})})}},35:function(e,t,n){e.exports={Loader:"customLoader_Loader__2S1tD"}},83:function(e,t,n){e.exports={Films:"HomeView_Films__LN5A5",FilmsTitle:"HomeView_FilmsTitle__2Kxan",FilmsItem:"HomeView_FilmsItem__2s_Tc"}},88:function(e,t,n){"use strict";n.r(t);var a=n(31),c=n.n(a),i=n(32),r=n(34),s=n(0),o=n(1),u=n(9),l=n(33),m=n.n(l),d=n(30),j=n(83),b=n.n(j),h=n(3);t.default=function(){var e=Object(s.useState)(null),t=Object(r.a)(e,2),n=t[0],a=t[1],l=Object(s.useState)(!1),j=Object(r.a)(l,2),f=j[0],p=j[1],O=Object(o.h)();Object(s.useEffect)((function(){_()}),[]);var _=function(){var e=Object(i.a)(c.a.mark((function e(){var t;return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return p(!0),e.next=3,m.a.get("https://api.themoviedb.org/3/trending/all/day?api_key=f4d5ed62044715aa9c5e4de0663d29b2");case 3:return t=e.sent,a(t.data.results),p(!1),e.abrupt("return",t);case 7:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return Object(h.jsxs)("div",{children:[Object(h.jsx)("h1",{className:b.a.FilmsTitle,children:"Trending today"}),f&&Object(h.jsx)(d.a,{}),n&&Object(h.jsx)("ul",{className:b.a.Films,children:n.map((function(e){return Object(h.jsx)("li",{children:Object(h.jsx)(u.b,{className:b.a.FilmsItem,to:"".concat(O.url).concat(e.id),children:e.name?e.name:e.title})},e.id)}))})]})}}}]);
//# sourceMappingURL=HomeView.ba4d7979.chunk.js.map