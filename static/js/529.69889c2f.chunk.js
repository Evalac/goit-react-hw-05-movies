"use strict";(self.webpackChunkgoit_react_hw_05_movies=self.webpackChunkgoit_react_hw_05_movies||[]).push([[529],{606:function(e,t,i){var n=i(184);t.Z=function(e){var t=e.error;return(0,n.jsx)("p",{children:t.message})}},854:function(e,t,i){var n=i(900),s=i(184);t.Z=function(e){return(0,s.jsx)(n.g4,{visible:!0,height:"80",width:"80",color:"#4fa94d",radius:"9",ariaLabel:"three-dots-loading",wrapperStyle:{},wrapperClass:""})}},529:function(e,t,i){i.r(t),i.d(t,{default:function(){return x}});var n=i(861),s=i(439),r=i(757),o=i.n(r),a=i(791),c=i(318),_={movies_list:"MoveList_movies_list__eKADz",movies_list_item:"MoveList_movies_list_item__xlZeq",movie_list_item_link:"MoveList_movie_list_item_link__+E42x",movies_list_item_img:"MoveList_movies_list_item_img__Plo+0",movie_list_item_link_container:"MoveList_movie_list_item_link_container__+Hoky"},l=i(429),m=i(184);var u=function(e){var t=e.movieList,i=(0,l.TH)();return(0,m.jsx)("main",{children:(0,m.jsx)("ul",{className:_.movies_list,children:t.map((function(e){return(0,m.jsx)("li",{className:_.movies_list_item,children:(0,m.jsxs)(l.rU,{className:_.movie_list_item_link,to:"movies/".concat(e.id),state:{from:i},children:[(0,m.jsx)("img",{className:_.movies_list_item_img,src:"https://image.tmdb.org/t/p/w500".concat(e.poster_path),alt:""}),(0,m.jsx)("div",{className:_.movie_list_item_link_container,children:(0,m.jsx)("p",{className:_.movie_list_item_link_title,children:e.title})})]})},e.id)}))})})},v=i(854),h=i(606),d="idle",f="pending",p="resolved",k="rejected";var x=function(){var e=(0,a.useState)([]),t=(0,s.Z)(e,2),i=t[0],r=t[1],_=(0,a.useState)(d),l=(0,s.Z)(_,2),x=l[0],g=l[1],j=(0,a.useState)(null),w=(0,s.Z)(j,2),Z=w[0],N=w[1];function M(){return(M=(0,n.Z)(o().mark((function e(){var t,i;return o().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,console.log("\u0432\u0438\u043a\u043e\u043d\u0443\u0454\u0442\u044c\u0441\u044f \u0444\u0435\u0442\u0447 \u043d\u0430 \u0441\u0442\u043e\u0440\u0456\u043d\u0446\u0456 HOME"),e.next=4,fetch("".concat(c._,"/trending/movie/week?language=en-US"),c.Y);case 4:if((t=e.sent).ok){e.next=7;break}throw new Error("HTTP error! Status: ".concat(t.status));case 7:return e.next=9,t.json();case 9:return i=e.sent,e.abrupt("return",i);case 13:throw e.prev=13,e.t0=e.catch(0),new Error("\u0412\u0438\u0431\u0430\u0447\u0435 \u0449\u043e\u0441\u044c \u043f\u0456\u0448\u043b\u043e \u043d\u0435 \u0442\u0430\u043a");case 16:case"end":return e.stop()}}),e,null,[[0,13]])})))).apply(this,arguments)}return(0,a.useEffect)((function(){g(f),function(){return M.apply(this,arguments)}().then((function(e){r(e.results),g(p)})).catch((function(e){N(e),g(k)}))}),[]),x===f?(0,m.jsx)(v.Z,{}):x===k?(0,m.jsx)(h.Z,{error:Z}):x===p?(0,m.jsx)(u,{movieList:i}):void 0}},318:function(e,t,i){i.d(t,{Y:function(){return s},_:function(){return n}});var n="https://api.themoviedb.org/3",s={method:"GET",headers:{accept:"application/json",Authorization:"Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJkOWNhMTczNzkwZWQ5NzdkZGM3ZDgzYTA0NmQ3ZTIwMiIsIm5iZiI6MTczOTEyMTk4OS44NTIsInN1YiI6IjY3YThlNTQ1MDhkZmY5MDMxOGYxMTkwZCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.K59AU-jgWUYBFO064D_SN_0Dl_uXHhDAAsm48CRTA0c"}}}}]);
//# sourceMappingURL=529.69889c2f.chunk.js.map