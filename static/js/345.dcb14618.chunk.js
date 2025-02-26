"use strict";(self.webpackChunkgoit_react_hw_05_movies=self.webpackChunkgoit_react_hw_05_movies||[]).push([[345],{606:function(e,i,t){var r=t(184);i.Z=function(e){var i=e.error;return(0,r.jsx)("p",{children:i.message})}},854:function(e,i,t){var r=t(900),s=t(184);i.Z=function(e){return(0,s.jsx)(r.g4,{visible:!0,height:"80",width:"80",color:"#4fa94d",radius:"9",ariaLabel:"three-dots-loading",wrapperStyle:{},wrapperClass:""})}},345:function(e,i,t){t.r(i),t.d(i,{default:function(){return k}});var r=t(861),s=t(439),n=t(757),a=t.n(n),c="Pages_backLink__m2oQZ",l=t(65),o=t(791),d=t(318),_=t(854),u=t(606),h=t(433),m={movie_deatils_card:"MovieDetailsCard_movie_deatils_card__FnOJb",card_content_items:"MovieDetailsCard_card_content_items__dMF1U",img_poster:"MovieDetailsCard_img_poster__iGVNU",card_list_item:"MovieDetailsCard_card_list_item__zlY4C",card_geners_list:"MovieDetailsCard_card_geners_list__9k3Uw",additional_info_block:"MovieDetailsCard_additional_info_block__VYevi",card_geners_list_item:"MovieDetailsCard_card_geners_list_item__G6KYp",card_link:"MovieDetailsCard_card_link__AswU7"},v=t(184);var f=function(e){var i,t=e.movieDetails,r=[],n=(0,o.useState)(null!==(i=JSON.parse(localStorage.getItem("watchlist")))&&void 0!==i?i:[]),a=(0,s.Z)(n,2),c=a[0],d=a[1],_=c.some((function(e){return e.id===t.id}));return(0,o.useEffect)((function(){localStorage.setItem("watchlist",JSON.stringify(c))}),[c]),(0,v.jsx)(v.Fragment,{children:(0,v.jsxs)("section",{className:m.movie_deatils_card,children:[(0,v.jsx)("div",{children:(0,v.jsx)("img",{src:"https://image.tmdb.org/t/p/w500".concat(t.poster_path),className:m.img_poster,alt:"..."})}),(0,v.jsxs)("div",{className:m.card_content_items,children:[(0,v.jsxs)("ul",{className:m.card_list,children:[(0,v.jsxs)("li",{className:m.card_list_item,children:[(0,v.jsx)("h2",{className:m.title,children:t.title}),(0,v.jsx)("p",{children:t.overview})]}),(0,v.jsx)("li",{children:(0,v.jsxs)("p",{children:[" Release: ",t.release_date]})}),(0,v.jsx)("li",{children:(0,v.jsxs)("p",{children:[" User score: ",t.vote_average]})}),(0,v.jsxs)("li",{children:["Runtime: ",t.runtime," min"]})]}),(0,v.jsx)("ul",{className:m.card_geners_list,children:(0,v.jsx)("li",{className:m.card_geners_list_item,children:(0,v.jsxs)("p",{children:["Genres:"," ",t.genres.map((function(e){return e.name})).join(", "),"."]})})}),(0,v.jsxs)("div",{className:m.additional_info_block,children:[(0,v.jsx)("p",{children:"Additional information:"}),(0,v.jsx)(l.rU,{to:"cast",className:m.card_link,children:"Cast"}),(0,v.jsx)(l.rU,{to:"reviews",className:m.card_link,children:"Reviews"}),(0,v.jsx)("button",{onClick:function(){_?alert("\u0422\u0430\u043a\u0438\u0439 \u0444\u0456\u043b\u044c\u043c \u0432\u0436\u0435 \u0454 \u0432 \u0441\u043f\u0438\u0441\u043a\u0443"):(r.push(t),d((function(e){return[].concat((0,h.Z)(e),r)})))},disabled:_,children:"Add to watchlist"}),(0,v.jsx)("button",{onClick:function(){console.log("click");var e=c.filter((function(e){return e.id!==t.id}));d(e),localStorage.setItem("watchlist",JSON.stringify(e))},disabled:!_,children:"Remove"})]})]})]})})},p="idle",j="pending",x="resolved",g="rejected";var k=function(){var e,i,t=(0,o.useState)(p),n=(0,s.Z)(t,2),h=n[0],m=n[1],k=(0,o.useState)([]),N=(0,s.Z)(k,2),w=N[0],b=N[1],Z=(0,o.useState)(null),C=(0,s.Z)(Z,2),I=C[0],M=C[1],D=(0,l.UO)(),S=(0,l.TH)(),J=(0,o.useRef)(null!==(e=null===(i=S.state)||void 0===i?void 0:i.from)&&void 0!==e?e:"/");function O(){return(O=(0,r.Z)(a().mark((function e(){var i,t;return a().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(""!==D.movieId){e.next=2;break}return e.abrupt("return");case 2:return e.prev=2,console.log("\u0412\u0438\u043a\u043e\u043d\u0443\u0454\u0442\u044c\u0441\u044f \u0444\u0435\u0442\u0447 \u0432 \u043a\u043e\u043c\u043f\u043e\u043d\u0435\u043d\u0442\u0456 movieDetails"),e.next=6,fetch("".concat(d._,"/movie/").concat(D.movieId,"?language=en-US"),d.Y);case 6:return i=e.sent,e.next=9,i.json();case 9:return t=e.sent,e.abrupt("return",t);case 13:throw e.prev=13,e.t0=e.catch(2),new Error("\u0423\u043f\u0441, \u0449\u043e\u0441\u044c \u043f\u0456\u0448\u043b\u043e\u0442 \u043d\u0435 \u0442\u0430\u043a...");case 16:case"end":return e.stop()}}),e,null,[[2,13]])})))).apply(this,arguments)}return(0,o.useEffect)((function(){m(j),function(){return O.apply(this,arguments)}().then((function(e){b(e),m(x)})).catch((function(e){M(e),m(g)}))}),[]),h===j?(0,v.jsx)(_.Z,{}):h===x?(0,v.jsxs)(v.Fragment,{children:[(0,v.jsx)(l.OL,{className:c,to:J.current,children:"Back to movie list"}),(0,v.jsx)(f,{movieDetails:w}),(0,v.jsx)(l.j3,{})]}):h===g?(0,v.jsx)(u.Z,{error:I}):void 0}},318:function(e,i,t){t.d(i,{Y:function(){return s},_:function(){return r}});var r="https://api.themoviedb.org/3",s={method:"GET",headers:{accept:"application/json",Authorization:"Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJkOWNhMTczNzkwZWQ5NzdkZGM3ZDgzYTA0NmQ3ZTIwMiIsIm5iZiI6MTczOTEyMTk4OS44NTIsInN1YiI6IjY3YThlNTQ1MDhkZmY5MDMxOGYxMTkwZCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.K59AU-jgWUYBFO064D_SN_0Dl_uXHhDAAsm48CRTA0c"}}}}]);
//# sourceMappingURL=345.dcb14618.chunk.js.map