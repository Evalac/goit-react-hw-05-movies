"use strict";(self.webpackChunkgoit_react_hw_05_movies=self.webpackChunkgoit_react_hw_05_movies||[]).push([[646],{646:function(t,e,r){r.r(e),r.d(e,{default:function(){return j}});var a=r(861),n=r(439),s=r(757),c=r.n(s),i=r(791),o=r(65),u=r(318),h={castList:"CastCard_castList__2X-a8",cast_List_Item:"CastCard_cast_List_Item__2ubeJ"},p=r(329),l=r(184);var d=function(t){var e=t.casts;return(0,l.jsx)("ul",{className:h.castList,children:e.cast.map((function(t,e){return(0,l.jsxs)("li",{className:h.cast_List_Item,children:[(0,l.jsx)("img",{className:h.cast_List_Item_Img,src:t.profile_path?"https://image.tmdb.org/t/p/w200".concat(t.profile_path):p,alt:"pic"}),(0,l.jsxs)("div",{className:"",children:[(0,l.jsx)("p",{children:t.name}),(0,l.jsxs)("p",{children:["Character: ",t.character]})]})]},t.id)}))})},f=r(854),_=r(606),m="idle",v="pending",I="resolved",x="rejected";var j=function(){var t=(0,i.useState)(m),e=(0,n.Z)(t,2),r=e[0],s=e[1],h=(0,i.useState)([]),p=(0,n.Z)(h,2),j=p[0],w=p[1],g=(0,i.useState)(null),Z=(0,n.Z)(g,2),k=Z[0],N=Z[1],T=(0,o.UO)();function b(){return(b=(0,a.Z)(c().mark((function t(){var e,r;return c().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(""!==T.movieId){t.next=2;break}return t.abrupt("return");case 2:return t.prev=2,console.log("\u0412\u0438\u043a\u043e\u043d\u0443\u0454\u0442\u044c\u0441\u044f \u0444\u0435\u0442\u0447 \u0432 \u043a\u043e\u043c\u043f\u043e\u043d\u0435\u043d\u0442\u0456 Cast"),t.next=6,fetch("".concat(u._,"/movie/").concat(T.movieId,"/credits"),u.Y);case 6:if((e=t.sent).ok){t.next=9;break}throw new Error("HTTP error! Status: ".concat(e.status));case 9:return t.next=11,e.json();case 11:return r=t.sent,t.abrupt("return",r);case 15:throw t.prev=15,t.t0=t.catch(2),new Error("\u0412\u0438\u0431\u0430\u0447\u0435 \u0449\u043e\u0441\u044c \u043f\u0456\u0448\u043b\u043e \u043d\u0435 \u0442\u0430\u043a");case 18:case"end":return t.stop()}}),t,null,[[2,15]])})))).apply(this,arguments)}return(0,i.useEffect)((function(){s(v),function(){return b.apply(this,arguments)}().then((function(t){w(t),s(I)})).catch((function(t){N(t),s(x)}))}),[]),r===I?(0,l.jsx)(d,{casts:j}):r===v?(0,l.jsx)(f.Z,{}):r===x?(0,l.jsx)(_.Z,{error:k}):void 0}},606:function(t,e,r){var a=r(184);e.Z=function(t){var e=t.error;return(0,a.jsx)("p",{children:e.message})}},854:function(t,e,r){var a=r(900),n=r(184);e.Z=function(t){return(0,n.jsx)(a.g4,{visible:!0,height:"80",width:"80",color:"#4fa94d",radius:"9",ariaLabel:"three-dots-loading",wrapperStyle:{},wrapperClass:""})}},318:function(t,e,r){r.d(e,{Y:function(){return n},_:function(){return a}});var a="https://api.themoviedb.org/3",n={method:"GET",headers:{accept:"application/json",Authorization:"Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJkOWNhMTczNzkwZWQ5NzdkZGM3ZDgzYTA0NmQ3ZTIwMiIsIm5iZiI6MTczOTEyMTk4OS44NTIsInN1YiI6IjY3YThlNTQ1MDhkZmY5MDMxOGYxMTkwZCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.K59AU-jgWUYBFO064D_SN_0Dl_uXHhDAAsm48CRTA0c"}}},329:function(t,e,r){t.exports=r.p+"static/media/depositphotos_134263580-stock-photo-man-holding-card-with-question.f63350cfe39a675c3fe4.jpg"}}]);
//# sourceMappingURL=646.838a928b.chunk.js.map