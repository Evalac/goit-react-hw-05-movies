"use strict";(self.webpackChunkgoit_react_hw_05_movies=self.webpackChunkgoit_react_hw_05_movies||[]).push([[935],{923:function(t,e,r){r.r(e),r.d(e,{default:function(){return j}});var s=r(861),a=r(439),n=r(757),c=r.n(n),i=r(791),o=r(429),u={castList:"CastCard_castList__2X-a8",cast_List_Item:"CastCard_cast_List_Item__2ubeJ"},h=r.p+"static/media/depositphotos_134263580-stock-photo-man-holding-card-with-question.f63350cfe39a675c3fe4.jpg",l=r(184);var p=function(t){var e=t.casts;return(0,l.jsx)("ul",{className:u.castList,children:e.cast.map((function(t,e){return(0,l.jsxs)("li",{className:u.cast_List_Item,children:[(0,l.jsx)("img",{className:u.cast_List_Item_Img,src:t.profile_path?"https://image.tmdb.org/t/p/w200".concat(t.profile_path):h,alt:"pic"}),(0,l.jsxs)("div",{className:"",children:[(0,l.jsx)("p",{children:t.name}),(0,l.jsxs)("p",{children:["Character: ",t.character]})]})]},t.id)}))})},d=r(854),f=r(606),m="idle",_="pending",v="resolved",I="rejected";var j=function(){var t=(0,i.useState)(m),e=(0,a.Z)(t,2),r=e[0],n=e[1],u=(0,i.useState)([]),h=(0,a.Z)(u,2),j=h[0],x=h[1],g=(0,i.useState)(null),Z=(0,a.Z)(g,2),w=Z[0],N=Z[1],k=(0,o.UO)(),C={method:"GET",headers:{accept:"application/json",Authorization:"Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJkOWNhMTczNzkwZWQ5NzdkZGM3ZDgzYTA0NmQ3ZTIwMiIsIm5iZiI6MTczOTEyMTk4OS44NTIsInN1YiI6IjY3YThlNTQ1MDhkZmY5MDMxOGYxMTkwZCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.K59AU-jgWUYBFO064D_SN_0Dl_uXHhDAAsm48CRTA0c"}};function b(){return(b=(0,s.Z)(c().mark((function t(){var e,r;return c().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(""!==k.movieId){t.next=2;break}return t.abrupt("return");case 2:return t.prev=2,console.log("\u0412\u0438\u043a\u043e\u043d\u0443\u0454\u0442\u044c\u0441\u044f \u0444\u0435\u0442\u0447 \u0432 \u043a\u043e\u043c\u043f\u043e\u043d\u0435\u043d\u0442\u0456 Cast"),t.next=6,fetch("https://api.themoviedb.org/3/movie/".concat(k.movieId,"/credits"),C);case 6:return e=t.sent,t.next=9,e.json();case 9:return r=t.sent,t.abrupt("return",r);case 13:throw t.prev=13,t.t0=t.catch(2),new Error("\u0423\u043f\u0441 \u0449\u043e\u0441\u044c \u043f\u0456\u0448\u043b\u043e \u043d\u0435 \u0442\u0430\u043a");case 16:case"end":return t.stop()}}),t,null,[[2,13]])})))).apply(this,arguments)}return(0,i.useEffect)((function(){n(_),function(){return b.apply(this,arguments)}().then((function(t){x(t),n(v)})).catch((function(t){N(t),n(I)}))}),[]),r===v?(0,l.jsx)(p,{casts:j}):r===_?(0,l.jsx)(d.Z,{}):r===v?(0,l.jsx)(f.Z,{error:w}):void 0}},606:function(t,e,r){var s=r(184);e.Z=function(t){var e=t.error;return(0,s.jsx)("p",{children:e.message})}},854:function(t,e,r){var s=r(900),a=r(184);e.Z=function(t){return(0,a.jsx)(s.g4,{visible:!0,height:"80",width:"80",color:"#4fa94d",radius:"9",ariaLabel:"three-dots-loading",wrapperStyle:{},wrapperClass:""})}}}]);
//# sourceMappingURL=935.8de5b792.chunk.js.map