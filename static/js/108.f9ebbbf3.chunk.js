"use strict";(self.webpackChunkgoit_react_hw_05_movies=self.webpackChunkgoit_react_hw_05_movies||[]).push([[108],{108:function(e,t,i){i.r(t),i.d(t,{default:function(){return f}});var r=i(861),s=i(439),n=i(757),a=i.n(n),o=i(791),c=i(65),_=i(318),l={form_query:"SearchMovieForm_form_query__OFPqi",search_query_input:"SearchMovieForm_search_query_input__-dz79",search_query_button:"SearchMovieForm_search_query_button__GxPTe"},m=i(184);var u=function(e){var t,i=e.searchParams,r=e.fetchSearchMovie,s=e.setMovies,n=e.setSearchParams;return(0,m.jsx)(m.Fragment,{children:(0,m.jsxs)("form",{className:l.form_query,onSubmit:function(e){e.preventDefault(),""===i.get("query")&&alert("Please enter movie name"),r().then((function(e){s(e)})).catch((function(e){return console.log(e)}))},children:[(0,m.jsx)("label",{htmlFor:"query",className:l.search_query_label,children:(0,m.jsx)("input",{className:l.search_query_input,value:null!==(t=i.get("query"))&&void 0!==t?t:"",onChange:function(e){n({query:e.target.value})},type:"text",name:"query",id:"query"})}),(0,m.jsx)("button",{className:l.search_query_button,type:"submit",children:"Search"})]})})},h=i(329),v={movies_list:"MoveList_movies_list__9V12V",movies_list_item:"MoveList_movies_list_item__h2BB2",movie_list_item_link:"MoveList_movie_list_item_link__fVZ1F",movies_list_item_img:"MoveList_movies_list_item_img__ZspJp",movie_list_item_link_container:"MoveList_movie_list_item_link_container__H-2K1"};var p=function(e){var t=e.location,i=e.movies;return(0,m.jsx)("main",{children:(0,m.jsx)("ul",{className:v.movies_list,children:i.results.map((function(e){return(0,m.jsx)("li",{className:v.movies_list_item,children:(0,m.jsxs)(c.rU,{className:v.movie_list_item_link,to:"".concat(e.id),state:{from:t},children:[(0,m.jsx)("img",{className:v.movies_list_item_img,src:e.poster_path?"https://image.tmdb.org/t/p/w500".concat(e.poster_path):h,alt:"pic"}),(0,m.jsx)("div",{className:v.movie_list_item_link_container,children:(0,m.jsx)("p",{className:v.movie_list_item_link_title,children:e.title})})]})},e.id)}))})})};var f=function(){var e,t=(0,o.useState)({results:[]}),i=(0,s.Z)(t,2),n=i[0],l=i[1],h=(0,c.lr)(""),v=(0,s.Z)(h,2),f=v[0],d=v[1],y=null!==(e=f.get("query"))&&void 0!==e?e:"",x=(0,c.TH)();function g(){return(g=(0,r.Z)(a().mark((function e(){var t,i;return a().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,console.log("\u0412\u0438\u043a\u043e\u043d\u0443\u0454\u0442\u044c\u0441\u044f \u0444\u0435\u0442\u0447 \u043f\u043e\u0448\u0443\u043a\u0443 \u0444\u0456\u043b\u044c\u043c\u0443"),e.next=4,fetch("".concat(_._,"/search/movie?query=").concat(y),_.Y);case 4:return t=e.sent,e.next=7,t.json();case 7:return i=e.sent,e.abrupt("return",i);case 11:throw e.prev=11,e.t0=e.catch(0),new Error("\u0423\u043f\u0441 \u0449\u043e\u0441\u044c \u043f\u0456\u0448\u043b\u043e \u043d\u0435 \u0442\u0430\u043a");case 14:case"end":return e.stop()}}),e,null,[[0,11]])})))).apply(this,arguments)}return(0,m.jsxs)(m.Fragment,{children:[(0,m.jsx)(u,{searchParams:f,fetchSearchMovie:function(){return g.apply(this,arguments)},setMovies:l,setSearchParams:d}),(0,m.jsx)(p,{location:x,movies:n})]})}},318:function(e,t,i){i.d(t,{Y:function(){return s},_:function(){return r}});var r="https://api.themoviedb.org/3",s={method:"GET",headers:{accept:"application/json",Authorization:"Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJkOWNhMTczNzkwZWQ5NzdkZGM3ZDgzYTA0NmQ3ZTIwMiIsIm5iZiI6MTczOTEyMTk4OS44NTIsInN1YiI6IjY3YThlNTQ1MDhkZmY5MDMxOGYxMTkwZCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.K59AU-jgWUYBFO064D_SN_0Dl_uXHhDAAsm48CRTA0c"}}},329:function(e,t,i){e.exports=i.p+"static/media/depositphotos_134263580-stock-photo-man-holding-card-with-question.f63350cfe39a675c3fe4.jpg"}}]);
//# sourceMappingURL=108.f9ebbbf3.chunk.js.map