(this.webpackJsonpreact_carousel=this.webpackJsonpreact_carousel||[]).push([[0],{12:function(t,e,n){},13:function(t,e,n){},14:function(t,e,n){"use strict";n.r(e);var a=n(0),i=n.n(a),s=n(6),o=n.n(s),r=n(1),c=n(2),l=n(4),p=n(3),u=(n(12),n(13),function(t){Object(l.a)(n,t);var e=Object(p.a)(n);function n(t){var a;return Object(r.a)(this,n),(a=e.call(this,t)).handleNextClick=function(){a.state.position>=1050||(900===a.state.position?a.setState((function(t){return{position:t.position+150}})):a.setState((function(t){return{position:t.position+450}})))},a.handlePrevClick=function(){0!==a.state.position&&(150===a.state.position?a.setState((function(t){return{position:t.position-150}})):a.setState((function(t){return{position:t.position-450}})))},a.state={position:0},a}return Object(c.a)(n,[{key:"render",value:function(){var t=this.props.images,e={transform:"translate(0, -".concat(this.state.position,"px)")};return i.a.createElement("div",{className:"Carousel"},i.a.createElement("div",{className:"wrapper"},i.a.createElement("button",{className:0===this.state.position?"btn btn_prev disabled":"btn btn_prev",onClick:this.handlePrevClick,type:"button"},0===this.state.position?"X":"<"),i.a.createElement("ul",{style:e,className:"Carousel__list"},t.map((function(t,e){return i.a.createElement("li",{className:"Carusel__item"},i.a.createElement("img",{src:t,alt:e}))}))),i.a.createElement("button",{className:this.state.position>=1050?"btn btn_next disabled":"btn btn_next",onClick:this.handleNextClick,type:"button"},this.state.position>=1050?"X":">")))}}]),n}(i.a.Component)),m=function(t){Object(l.a)(n,t);var e=Object(p.a)(n);function n(){var t;Object(r.a)(this,n);for(var a=arguments.length,i=new Array(a),s=0;s<a;s++)i[s]=arguments[s];return(t=e.call.apply(e,[this].concat(i))).state={images:["./img/1.png","./img/2.png","./img/3.png","./img/4.png","./img/5.png","./img/6.png","./img/7.png","./img/8.png","./img/9.png","./img/10.png"]},t}return Object(c.a)(n,[{key:"render",value:function(){var t=this.state.images;return i.a.createElement("div",{className:"App"},i.a.createElement("h1",null,"Carousel with ",t.length," images"),i.a.createElement(u,{images:this.state.images}))}}]),n}(i.a.Component);o.a.render(i.a.createElement(m,null),document.getElementById("root"))},7:function(t,e,n){t.exports=n(14)}},[[7,1,2]]]);
//# sourceMappingURL=main.426eef03.chunk.js.map