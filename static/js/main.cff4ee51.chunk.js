(this["webpackJsonpbeer-to-peer"]=this["webpackJsonpbeer-to-peer"]||[]).push([[0],{10:function(e,t,a){e.exports=a(17)},15:function(e,t,a){},16:function(e,t,a){},17:function(e,t,a){"use strict";a.r(t);var r=a(0),s=a.n(r),n=a(3),i=a.n(n),l=(a(15),a(7)),c=a(4),m=a(5),o=a(8),u=a(6),h=a(1),d=a(9),b=(a(16),function(e){function t(e){var a;return Object(c.a)(this,t),(a=Object(o.a)(this,Object(u.a)(t).call(this,e))).state={data:[],searchResults:{query:"",items:[]}},a.handleSearch=a.handleSearch.bind(Object(h.a)(a)),a}return Object(d.a)(t,e),Object(m.a)(t,[{key:"componentDidMount",value:function(){var e=this;fetch("./data.json").then((function(e){return e.json()})).then((function(t){t=t.reverse();var a=Object(l.a)({},e.state.searchResults,{items:t});e.setState({data:t,searchResults:a})}))}},{key:"handleSearch",value:function(e){var t=e.target.value;if(""===t)return this.setState({searchResults:{query:t,items:this.state.data}});var a=this.state.data.filter((function(e){return e.name.toLowerCase().indexOf(t.toLowerCase())>=0||e.brewery.toLowerCase().indexOf(t.toLowerCase())>=0||e.style.toLowerCase().indexOf(t.toLowerCase())>=0||Number(t)===e.rating}));this.setState({searchResults:{query:t,items:a}})}},{key:"render",value:function(){return s.a.createElement("div",{className:"wrapper"},s.a.createElement("div",{className:"logo"},s.a.createElement("p",null,"beer-to-peer ",s.a.createElement("span",null,this.state.data.length))),s.a.createElement("div",{className:"beer-search"},s.a.createElement("input",{type:"text",value:this.state.searchResults.query,placeholder:"\u041f\u043e\u0438\u0441\u043a \u043f\u0438\u0432\u0430\u0441\u0438\u043a\u0430 \ud83c\udf7a",onChange:this.handleSearch})),s.a.createElement("div",{className:"beer-list"},!this.state.searchResults.items.length&&s.a.createElement("div",{className:"beer-list-item"},s.a.createElement("div",{className:"beer-list-item-description"},s.a.createElement("p",{className:"beer-list-item-description-title"},"\u041d\u0438\u0447\u0435\u0433\u043e \u043d\u0435 \u043d\u0430\u0439\u0434\u0435\u043d\u043e"))),this.state.searchResults.items.map((function(e,t){return s.a.createElement("div",{key:t,className:"beer-list-item",style:{backgroundImage:"linear-gradient(to right, rgba(255, 200, 118, 0.2), rgba(255, 200, 118, 0.2) ".concat(10*e.rating,"%, #fff ").concat(10*e.rating,"%)")}},s.a.createElement("div",{className:"beer-list-item-description"},s.a.createElement("p",{className:"beer-list-item-description-title"},e.name,""===e.name&&e.brewery,e.isCrafted&&s.a.createElement("span",null,"craft")),s.a.createElement("p",{className:"beer-list-item-description-brewery"},""!==e.name&&e.brewery,""!==e.name&&e.brewery&&", ",e.country),s.a.createElement("p",{className:"beer-list-item-description-style"},e.style)),s.a.createElement("div",{className:"beer-list-item-rate"},s.a.createElement("p",{className:"beer-list-item-rate-r"},s.a.createElement("sup",null,e.rating),"\u2044",s.a.createElement("sub",null,"10"))))}))))}}]),t}(s.a.Component));i.a.render(s.a.createElement(b,null),document.getElementById("root"))}},[[10,1,2]]]);
//# sourceMappingURL=main.cff4ee51.chunk.js.map