(this["webpackJsonpreact_dynamic-list-of-goods"]=this["webpackJsonpreact_dynamic-list-of-goods"]||[]).push([[0],{12:function(t,n,e){},13:function(t,n,e){"use strict";e.r(n);var o=e(0),r=e.n(o),a=e(2),c=e.n(a),u=e(3),i=e(4),l=e(6),s=e(5);e(12);function d(){return fetch("https://mate-academy.github.io/react_dynamic-list-of-goods/goods.json").then((function(t){return t.json()}))}var f=function(){return d().then((function(t){return t.sort((function(t,n){return t.name.localeCompare(n.name)})).splice(0,5)}))},m=function(){return d().then((function(t){return t.filter((function(t){return"red"===t.color}))}))},h=function(t){Object(l.a)(e,t);var n=Object(s.a)(e);function e(){var t;Object(u.a)(this,e);for(var o=arguments.length,r=new Array(o),a=0;a<o;a++)r[a]=arguments[a];return(t=n.call.apply(n,[this].concat(r))).state={goods:[]},t.loadGoods=function(n){n().then((function(n){return t.setState({goods:n})}))},t}return Object(i.a)(e,[{key:"render",value:function(){var t=this,n=this.state.goods;return r.a.createElement(r.a.Fragment,null,r.a.createElement("h1",null,"Dynamic list of goods"),r.a.createElement("button",{type:"button",onClick:function(){return t.loadGoods(d)}},"Load all"),r.a.createElement("button",{type:"button",onClick:function(){return t.loadGoods(f)}},"Load five first"),r.a.createElement("button",{type:"button",onClick:function(){return t.loadGoods(m)}},"Load only red"),r.a.createElement("ul",null,n.map((function(t){return r.a.createElement("li",{key:t.id,style:{color:t.color}},t.name)}))))}}]),e}(r.a.Component);c.a.render(r.a.createElement(h,null),document.getElementById("root"))},7:function(t,n,e){t.exports=e(13)}},[[7,1,2]]]);
//# sourceMappingURL=main.37909d0a.chunk.js.map