"use strict";(self.webpackChunkgoit_react_hw_06_phonebook=self.webpackChunkgoit_react_hw_06_phonebook||[]).push([[486],{6361:function(n,t,e){e.d(t,{XD:function(){return g},kK:function(){return l},l2:function(){return p},sv:function(){return d},wW:function(){return i}});var r=e(4165),a=e(5861),u=e(4569),c=e.n(u);c().defaults.baseURL="https://api.themoviedb.org/3/";var s="cdd38ed2e1ff6ec8c3ec0bbc75d0e5fe";function i(){return o.apply(this,arguments)}function o(){return(o=(0,a.Z)((0,r.Z)().mark((function n(){var t;return(0,r.Z)().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,c().get("trending/movie/day?api_key=".concat(s));case 2:return t=n.sent,n.abrupt("return",t.data.results);case 4:case"end":return n.stop()}}),n)})))).apply(this,arguments)}function p(n){return f.apply(this,arguments)}function f(){return(f=(0,a.Z)((0,r.Z)().mark((function n(t){var e;return(0,r.Z)().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,c().get("movie/".concat(t,"?api_key=").concat(s,"&language=en-US"));case 2:return e=n.sent,n.abrupt("return",e.data);case 4:case"end":return n.stop()}}),n)})))).apply(this,arguments)}function l(n){return h.apply(this,arguments)}function h(){return(h=(0,a.Z)((0,r.Z)().mark((function n(t){var e;return(0,r.Z)().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,c().get("movie/".concat(t,"/credits?api_key=").concat(s,"&language=en-US"));case 2:return e=n.sent,n.abrupt("return",e.data.cast);case 4:case"end":return n.stop()}}),n)})))).apply(this,arguments)}function d(n){return v.apply(this,arguments)}function v(){return(v=(0,a.Z)((0,r.Z)().mark((function n(t){var e;return(0,r.Z)().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,c().get("movie/".concat(t,"/reviews?api_key=").concat(s,"&language=en-US"));case 2:return e=n.sent,n.abrupt("return",e.data.results);case 4:case"end":return n.stop()}}),n)})))).apply(this,arguments)}function g(n){return k.apply(this,arguments)}function k(){return(k=(0,a.Z)((0,r.Z)().mark((function n(t){var e;return(0,r.Z)().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,c().get("/search/movie?api_key=".concat(s,"&language=en-US&page=1&query=").concat(t,"&include_adult=false"));case 2:return e=n.sent,n.abrupt("return",e.data.results);case 4:case"end":return n.stop()}}),n)})))).apply(this,arguments)}},9368:function(n,t,e){e.r(t),e.d(t,{default:function(){return i}});var r=e(885),a=e(6871),u=e(6361),c=e(2791),s=e(184),i=function(){var n=function(){var n=(0,c.useState)(null),t=(0,r.Z)(n,2),e=t[0],s=t[1],i=(0,a.UO)().moviesId;return console.log(e),(0,c.useEffect)((function(){(0,u.sv)(i).then(s)}),[i]),e}();return(0,s.jsx)("ul",{children:n&&n.map((function(n){var t=n.author,e=n.content,r=n.id;return(0,s.jsxs)("li",{children:[(0,s.jsx)("h2",{children:t}),(0,s.jsx)("p",{children:e})]},r)}))})}}}]);
//# sourceMappingURL=revievs.73e7eafb.chunk.js.map