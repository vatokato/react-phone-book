(window["webpackJsonpreact-phone-book"]=window["webpackJsonpreact-phone-book"]||[]).push([[0],{45:function(e,t,n){e.exports=n(62)},61:function(e,t,n){},62:function(e,t,n){"use strict";n.r(t);var r=n(0),a=n.n(r),o=n(20),c=n.n(o),i=n(16),l=n(18),s=n(28),u=n(21),p=function(e){localStorage.phoneList=JSON.stringify(e)},m=function(e,t,n){var r=JSON.parse(localStorage.phoneList);e.name=e.name.trim(),e.phone=e.phone.trim();var a={};return r.find(function(t){return e.name===t.name||e.phone===t.phone})&&(a.form="\u0437\u0430\u043f\u0438\u0441\u044c \u0441 \u0442\u0430\u043a\u0438\u043c \u0438\u043c\u0435\u043d\u0435\u043c \u0438\u043b\u0438 \u043d\u043e\u043c\u0435\u0440\u043e\u043c \u0443\u0436\u0435 \u0441\u0443\u0449\u0435\u0441\u0442\u0432\u0443\u0435\u0442"),e.name||(a.name="\u043d\u0435 \u0437\u0430\u043f\u043e\u043b\u043d\u0435\u043d\u043e \u0438\u043c\u044f"),e.phone||(a.phone="\u043d\u0435 \u0437\u0430\u043f\u043e\u043b\u043d\u0435\u043d \u0442\u0435\u043b\u0435\u0444\u043e\u043d"),e.phone.match(/[^0-9-)(+]/i)&&(a.phone="\u0442\u043e\u043b\u044c\u043a\u043e \u0446\u0438\u0444\u0440\u044b",a.form="\u0442\u043e\u043b\u044c\u043a\u043e \u0446\u0438\u0444\u0440\u044b"),Object.keys(a).length>0?n(a):(localStorage.phoneList=JSON.stringify([].concat(Object(s.a)(r),[e])),t(e))};function f(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),n.push.apply(n,r)}return n}function h(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?f(n,!0).forEach(function(t){Object(u.a)(e,t,n[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):f(n).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))})}return e}var d={items:function(){return"undefined"===typeof localStorage.phoneList&&(localStorage.phoneList=JSON.stringify([{id:1,name:"ivan",phone:"+7(912)123-45-67"},{id:2,name:"petr",phone:"+7-912-333-333-33"},{id:3,name:"roman",phone:"8912123456"}])),JSON.parse(localStorage.phoneList)}(),filteredItems:[],errors:{}};function O(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),n.push.apply(n,r)}return n}function b(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?O(n,!0).forEach(function(t){Object(u.a)(e,t,n[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):O(n).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))})}return e}var y={query:""},j=Object(l.c)({list:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:d,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"ADD_ITEM_ERROR":return h({},e,{errors:t.payload,status:"error"});case"ADD_ITEM_SUCCESS":return h({},e,{items:[].concat(Object(s.a)(e.items),[t.payload]),errors:{},status:"success"});case"REMOVE_ITEM":return e.items.splice(e.items.findIndex(function(e){return e.id===parseInt(t.payload)}),1),p(e.items),h({},e,{items:e.items});default:return e}},search:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:y,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"SEARCH":return b({},e,{query:t.payload});default:return e}}}),v=n(41),E=Object(l.d)(j,Object(l.a)(v.a)),g=n(5),w=n(6),S=n(8),C=n(7),I=n(9),k=n(69),P=n(43),D=n(70),N=n(44),M=function(e){function t(){var e,n;Object(g.a)(this,t);for(var r=arguments.length,a=new Array(r),o=0;o<r;o++)a[o]=arguments[o];return(n=Object(S.a)(this,(e=Object(C.a)(t)).call.apply(e,[this].concat(a)))).onChange=function(e){n.props.setQuery(e.target.value.trim())},n}return Object(I.a)(t,e),Object(w.a)(t,[{key:"render",value:function(){return console.log("Search render"),a.a.createElement(k.a,{bg:"light",expand:"lg"},a.a.createElement(P.a,{sm:"auto"},a.a.createElement(k.a.Brand,{href:"/"},"\u0422\u0435\u043b\u0435\u0444\u043e\u043d\u043d\u044b\u0439 \u0441\u043f\u0440\u0430\u0432\u043e\u0447\u043d\u0438\u043a")),a.a.createElement(P.a,null,a.a.createElement(D.a,null,a.a.createElement(N.a,{type:"text",name:"query",placeholder:"\u041f\u043e\u0438\u0441\u043a \u043f\u043e \u0438\u043c\u0435\u043d\u0438 \u0438\u043b\u0438 \u043d\u043e\u043c\u0435\u0440\u0443",className:"",defaultValue:this.props.query,onChange:this.onChange}))))}}]),t}(a.a.Component),A=function(e){function t(){return Object(g.a)(this,t),Object(S.a)(this,Object(C.a)(t).apply(this,arguments))}return Object(I.a)(t,e),Object(w.a)(t,[{key:"render",value:function(){console.log("SearchContainer render",this.props);var e=this.props,t=e.search,n=e.setQuery;return a.a.createElement("div",{className:"phone-search-container"},a.a.createElement(M,{query:t.query,setQuery:n}))}}]),t}(a.a.Component),L=Object(i.b)(function(e){return{search:e.search}},function(e){return{setQuery:function(t){return e(function(e){return{type:"SEARCH",payload:e}}(t))}}})(A),_=n(64),R=function(e){function t(){var e,n;Object(g.a)(this,t);for(var r=arguments.length,a=new Array(r),o=0;o<r;o++)a[o]=arguments[o];return(n=Object(S.a)(this,(e=Object(C.a)(t)).call.apply(e,[this].concat(a)))).handleClick=function(e){n.props.removeItem(e)},n}return Object(I.a)(t,e),Object(w.a)(t,[{key:"createMarkup",value:function(e){return{__html:e}}},{key:"render",value:function(){var e=this;return console.log("list render",this.props),a.a.createElement(_.a,{responsive:!0},a.a.createElement("thead",null,a.a.createElement("tr",null,a.a.createElement("th",null,"\u0418\u043c\u044f"),a.a.createElement("th",null,"\u0422\u0435\u043b\u0435\u0444\u043e\u043d"),a.a.createElement("th",null,"#"))),a.a.createElement("tbody",null,this.props.filteredItems.map(function(t){return a.a.createElement("tr",{key:t.id},a.a.createElement("td",{dangerouslySetInnerHTML:e.createMarkup(t.name),className:"name"}),a.a.createElement("td",{dangerouslySetInnerHTML:e.createMarkup(t.phone),className:"phone"}),a.a.createElement("td",null,a.a.createElement("button",{type:"button",className:"close float-none","aria-label":"Close",onClick:function(){return e.handleClick(t.id)}},a.a.createElement("span",{"aria-hidden":"true"},"\xd7"))))})))}}]),t}(a.a.Component);function T(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),n.push.apply(n,r)}return n}var q=function(e){function t(){return Object(g.a)(this,t),Object(S.a)(this,Object(C.a)(t).apply(this,arguments))}return Object(I.a)(t,e),Object(w.a)(t,[{key:"render",value:function(){console.log("ListContainer render",this.props);var e=this.props,t=e.list,n=e.removeItem;return a.a.createElement("div",{className:"phone-list-container"},a.a.createElement(R,{filteredItems:t.filteredItems,removeItem:n,test:t.test}))}}]),t}(a.a.Component),J=Object(i.b)(function(e){console.log("mapStateToProps",e);var t=!1,n=e.search.query.trim();return n&&(console.time("filtered"),t=[],e.list.items.forEach(function(e){var r=e.name.toLowerCase().indexOf(n.toLowerCase());if(r>-1){var a=e.name.split("");a.splice(r,0,"<b>"),a.splice(r+n.length+1,0,"</b>"),t.push(function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?T(n,!0).forEach(function(t){Object(u.a)(e,t,n[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):T(n).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))})}return e}({},e,{name:a.join("")}))}(r=e.phone.toLowerCase().replace(/[^0-9]/gim,"").indexOf(n.toLowerCase()))>-1&&t.push(e)}),console.timeEnd("filtered")),e.list.filteredItems=t||e.list.items,{list:e.list,search:e.search}},function(e){return{removeItem:function(t){return e(function(e){return{type:"REMOVE_ITEM",payload:e}}(t))}}})(q),x=n(65),H=n(66),Q=n(67),B=n(68),V=n(71),U=function(e){function t(){var e,n;Object(g.a)(this,t);for(var r=arguments.length,a=new Array(r),o=0;o<r;o++)a[o]=arguments[o];return(n=Object(S.a)(this,(e=Object(C.a)(t)).call.apply(e,[this].concat(a)))).submit=function(e){e.preventDefault(),n.props.addItem({id:Date.now(),name:e.target.name.value,phone:e.target.phone.value}),e.target.name.value="",e.target.phone.value=""},n}return Object(I.a)(t,e),Object(w.a)(t,[{key:"render",value:function(){console.log("AddItem render");var e=this.props.errors;return a.a.createElement(x.a,{className:"mt-4 mb-4"},a.a.createElement(H.a,null,a.a.createElement(P.a,{md:{span:8,offset:2}},a.a.createElement("form",{action:"",onSubmit:this.submit},a.a.createElement(Q.a,null,a.a.createElement(N.a,{name:"name",autoComplete:"off",placeholder:"\u0418\u043c\u044f",isInvalid:e.name?"true":""}),a.a.createElement(N.a,{name:"phone",autoComplete:"off",placeholder:"\u0422\u0435\u043b\u0435\u0444\u043e\u043d",isInvalid:e.phone?"true":""}),a.a.createElement(Q.a.Append,null,a.a.createElement(B.a,{variant:"outline-success",type:"submit"},"\u0414\u043e\u0431\u0430\u0432\u0438\u0442\u044c")))),e.form?a.a.createElement(V.a,{variant:"danger",className:"mt-2"},e.form):"")))}}]),t}(a.a.Component),W=function(e){function t(){return Object(g.a)(this,t),Object(S.a)(this,Object(C.a)(t).apply(this,arguments))}return Object(I.a)(t,e),Object(w.a)(t,[{key:"render",value:function(){console.log("AddItemContainer render",this.props);var e=this.props,t=e.addItem,n=e.errors;return a.a.createElement("div",{className:"phone-actions-container"},a.a.createElement(U,{addItem:t,errors:n}))}}]),t}(a.a.Component),$=Object(i.b)(function(e){return{errors:e.list.errors}},function(e){return{addItem:function(t){return e(function(e){return function(t){m(e,function(e){t({type:"ADD_ITEM_SUCCESS",payload:e})},function(e){t({type:"ADD_ITEM_ERROR",payload:e})})}}(t))}}})(W),z=function(e){function t(){return Object(g.a)(this,t),Object(S.a)(this,Object(C.a)(t).apply(this,arguments))}return Object(I.a)(t,e),Object(w.a)(t,[{key:"componentDidMount",value:function(){document.title="\u0422\u0435\u043b\u0435\u0444\u043e\u043d\u043d\u044b\u0439 \u0441\u043f\u0440\u0430\u0432\u043e\u0447\u043d\u0438\u043a"}},{key:"render",value:function(){return a.a.createElement("div",{className:"App"},a.a.createElement(L,null),a.a.createElement($,null),a.a.createElement(J,null))}}]),t}(a.a.Component);n(61),Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(a.a.createElement(i.a,{store:E},a.a.createElement(z,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[45,1,2]]]);
//# sourceMappingURL=main.e04ae572.chunk.js.map