(this.webpackJsonpfrontend=this.webpackJsonpfrontend||[]).push([[0],{249:function(e,t,a){},273:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),l=a(52),o=a.n(l),s=a(4),c=a(19),m=(a(61),a(249),a(18)),i=a.n(m),u=a(21),d=a(22),h=a(5),g=a(6),E=a(9),b=a(8),v=a(7),p=a(23),f=a.n(p),j=function(e){Object(b.a)(a,e);var t=Object(v.a)(a);function a(){var e;Object(h.a)(this,a),e=t.call(this);var n=!1;return localStorage.getItem("token")&&(n=!0),e.state={username:"",password:"",loggedIn:n,remember_me:"",error:""},e.onChange=e.onChange.bind(Object(E.a)(e)),e.formSubmit=e.formSubmit.bind(Object(E.a)(e)),e}return Object(g.a)(a,[{key:"onChange",value:function(e){this.setState(Object(d.a)({},e.target.name,e.target.value))}},{key:"formSubmit",value:function(){var e=Object(u.a)(i.a.mark((function e(t){var a,n,r,l;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.preventDefault(),a=this.state,n=a.username,r=a.password,e.prev=2,e.next=5,f.a.post("/login",{username:n,password:r});case 5:200===(l=e.sent).data.status?(localStorage.setItem("token",l.data.token),this.setState({loggedIn:!0,error:l.data.message})):this.setState({error:l.data.message}),e.next=12;break;case 9:e.prev=9,e.t0=e.catch(2),this.setState({error:e.t0.message});case 12:case"end":return e.stop()}}),e,this,[[2,9]])})));return function(t){return e.apply(this,arguments)}}()},{key:"render",value:function(){return!0===this.state.loggedIn?r.a.createElement(c.a,{to:"/dashboard"}):r.a.createElement("div",{className:"container"},r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col-sm-8"}),r.a.createElement("div",{className:"col-sm-4"},r.a.createElement("form",{onSubmit:this.formSubmit},r.a.createElement("div",{className:"form-group"},r.a.createElement("label",null,"Username ",r.a.createElement("span",null,"(*)")),r.a.createElement("input",{type:"text",placeholder:"Enter Username",value:this.state.username,onChange:this.onChange,name:"username",className:"form-control"})),r.a.createElement("div",{className:"form-group"},r.a.createElement("label",null,"Password ",r.a.createElement("span",null,"(*)")),r.a.createElement("input",{type:"password",placeholder:"Enter Password",value:this.state.password,onChange:this.onChange,name:"password",className:"form-control"})),r.a.createElement("div",{className:"form-group error"},this.state.error),r.a.createElement("div",{className:"form-group"},r.a.createElement("button",{type:"submit",className:"btn btn-primary"},"Login")),r.a.createElement("div",{className:"form-group"},r.a.createElement("div",{className:"checkbox checkbox-primary"},r.a.createElement("input",{name:"remember_me",value:!0,onChange:this.onChange,id:"checkbox1",type:"checkbox"}),r.a.createElement("label",{htmlFor:"checkbox1"},"Remember Me"))),r.a.createElement("div",{className:"form-group"},r.a.createElement(s.b,{to:"forgot-password"},"Forgot Password"))))))}}]),a}(r.a.Component),N=a(55),k=a.n(N),O=function(e){Object(b.a)(a,e);var t=Object(v.a)(a);function a(){return Object(h.a)(this,a),t.apply(this,arguments)}return Object(g.a)(a,[{key:"render",value:function(){return r.a.createElement("header",{className:"header"},r.a.createElement("nav",{className:"navbar navbar-expand-lg container"},r.a.createElement("img",{src:k.a,alt:"Logo"}),r.a.createElement("button",{className:"navbar-toggler",type:"button","data-toggle":"collapse","data-target":"#navbarText","aria-controls":"navbarText","aria-expanded":"false","aria-label":"Toggle navigation"},r.a.createElement("span",{className:"navbar-toggler-icon"})),r.a.createElement("div",{className:"collapse navbar-collapse",id:"navbarText"},r.a.createElement("ul",{className:"navbar-nav custom-nav pull-right"},r.a.createElement("li",{className:"nav-item active"},r.a.createElement(s.b,{className:"nav-link",to:"/dashboard"},"Dashboard")),r.a.createElement("li",{className:"nav-item"},r.a.createElement(s.b,{className:"nav-link",to:"/user"},"User")),r.a.createElement("li",{className:"nav-item"},r.a.createElement(s.b,{className:"nav-link",to:"/ajeet"},"Ajeet")),r.a.createElement("li",{className:"nav-item"},r.a.createElement(s.b,{className:"nav-link",to:"/logout"},"Logout"))))))}}]),a}(r.a.Component),y=function(e){Object(b.a)(a,e);var t=Object(v.a)(a);function a(){var e;Object(h.a)(this,a),e=t.call(this);var n=!1;return localStorage.getItem("token")&&(n=!0),e.logout=e.logout.bind(Object(E.a)(e)),e.state={loggedIn:n},e}return Object(g.a)(a,[{key:"logout",value:function(){this.setState({loggedIn:!1})}},{key:"render",value:function(){return!1===this.state.loggedIn?r.a.createElement(c.a,{to:"/logout"}):r.a.createElement("div",null,r.a.createElement(O,null),r.a.createElement("div",{className:"container"},r.a.createElement("h1",null,"View Dashboard Details")))}}]),a}(r.a.Component),S=function(e){Object(b.a)(a,e);var t=Object(v.a)(a);function a(e){var n;Object(h.a)(this,a),n=t.call(this,e);var r=!1;return localStorage.getItem("token")&&(r=!0),n.logout=n.logout.bind(Object(E.a)(n)),n.state={loggedIn:r},n.state={error:null,isLoaded:!1,items:[]},n}return Object(g.a)(a,[{key:"componentDidMount",value:function(){this.fetchData()}},{key:"fetchData",value:function(){var e=this,t=this.props.match.params.id;return fetch("/user/"+t).then((function(e){return e.json()})).then((function(t){e.setState({isLoaded:!0,items:t.data})}),(function(t){e.setState({isLoaded:!0,error:t})}))}},{key:"logout",value:function(){this.setState({loggedIn:!1})}},{key:"render",value:function(e){if(!1===this.state.loggedIn)return r.a.createElement(c.a,{to:"/logout"});var t=this.state,a=t.error,n=t.isLoaded,l=t.items;return r.a.createElement("div",null,r.a.createElement(O,null),r.a.createElement("div",{className:"container"},r.a.createElement("h1",null,"View User Details"),a?r.a.createElement("div",null,"Error: ",a.message):null,n?null:r.a.createElement("div",null,"Loading..."),r.a.createElement("table",{className:"table table-borderd"},r.a.createElement("thead",null,r.a.createElement("tr",null,r.a.createElement("th",null,"id"),r.a.createElement("th",null,"Username"),r.a.createElement("th",null,"Password"),r.a.createElement("th",null,"Action"))),r.a.createElement("tbody",null,r.a.createElement("tr",null,r.a.createElement("td",null,l.id),r.a.createElement("td",null,l.username),r.a.createElement("td",null,l.pass),r.a.createElement("td",null,r.a.createElement(s.b,{to:"".concat(this.props.match.path,"/2"),className:"nav-link"},"Edit")))))))}}]),a}(r.a.Component),w=function(e){Object(b.a)(a,e);var t=Object(v.a)(a);function a(e){var n;Object(h.a)(this,a),n=t.call(this,e);var r=!1;return localStorage.getItem("token")&&(r=!0),n.logout=n.logout.bind(Object(E.a)(n)),n.state={loggedIn:r},n.state={error:null,isLoaded:!1,items:[]},n}return Object(g.a)(a,[{key:"componentDidMount",value:function(){var e=this;fetch("/users").then((function(e){return e.json()})).then((function(t){console.log(t),e.setState({isLoaded:!0,items:t})}),(function(t){e.setState({isLoaded:!0,error:t})}))}},{key:"logout",value:function(){this.setState({loggedIn:!1})}},{key:"render",value:function(){if(!1===this.state.loggedIn)return r.a.createElement(c.a,{to:"/logout"});var e=this.state,t=e.error,a=e.isLoaded,n=e.items;return r.a.createElement("div",null,r.a.createElement(O,null),r.a.createElement("div",{className:"container"},r.a.createElement("h1",null,"View User Details"),t?r.a.createElement("div",null,"Error: ",t.message):null,a?null:r.a.createElement("div",null,"Loading..."),r.a.createElement("table",{className:"table table-borderd"},r.a.createElement("thead",null,r.a.createElement("tr",null,r.a.createElement("th",null,"id"),r.a.createElement("th",null,"Username"),r.a.createElement("th",null,"Password"),r.a.createElement("th",null,"Email"),r.a.createElement("th",null,"Mobile"),r.a.createElement("th",null,"Address"),r.a.createElement("th",null,"Action "))),r.a.createElement("tbody",null,n.map((function(e){return r.a.createElement("tr",{key:e.id},r.a.createElement("td",null,e.id),r.a.createElement("td",null,e.username),r.a.createElement("td",null,e.password),r.a.createElement("td",null,e.email),r.a.createElement("td",null,e.mobile),r.a.createElement("td",null,e.address),r.a.createElement("td",null,r.a.createElement(s.c,{to:"/users/"+e.id},"Edit")))}))))))}}]),a}(r.a.Component),I=function(e){Object(b.a)(a,e);var t=Object(v.a)(a);function a(e){var n;Object(h.a)(this,a),n=t.call(this,e);var r=!1;return localStorage.getItem("token")&&(r=!0),n.logout=n.logout.bind(Object(E.a)(n)),n.state={loggedIn:r},n.state={error:null,isLoaded:!1,items:[]},n.state={username:"",password:"",mobile:"",email:"",loggedIn:r,error:""},n.onChange=n.onChange.bind(Object(E.a)(n)),n.formSubmit=n.formSubmit.bind(Object(E.a)(n)),n}return Object(g.a)(a,[{key:"componentDidMount",value:function(){this.props.match.params.id&&this.fetchData()}},{key:"fetchData",value:function(){var e=this,t=this.props.match.params.id;return console.log(t),fetch("/user/"+t).then((function(e){return e.json()})).then((function(t){e.setState({isLoaded:!0,items:t.data})}),(function(t){e.setState({isLoaded:!0,error:t})}))}},{key:"logout",value:function(){this.setState({loggedIn:!1})}},{key:"onChange",value:function(e){this.setState(Object(d.a)({},e.target.name,e.target.value))}},{key:"formSubmit",value:function(){var e=Object(u.a)(i.a.mark((function e(t){var a,n,r,l,o,s;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.preventDefault(),a=this.state,n=a.username,r=a.password,l=a.mobile,o=a.email,e.prev=2,e.next=5,f.a.post("/user-register",{username:n,password:r,mobile:l,email:o});case 5:s=e.sent,console.log("register success",s),e.next=12;break;case 9:e.prev=9,e.t0=e.catch(2),this.setState({error:e.t0.message});case 12:case"end":return e.stop()}}),e,this,[[2,9]])})));return function(t){return e.apply(this,arguments)}}()},{key:"render",value:function(e){if(!1===this.state.loggedIn)return r.a.createElement(c.a,{to:"/logout"});var t=this.state;t.error,t.isLoaded,t.items;return r.a.createElement("div",null,r.a.createElement(O,null),r.a.createElement("div",{className:"container"},r.a.createElement("h1",null,"Add New User"),r.a.createElement("form",{onSubmit:this.formSubmit},r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col-sm-6"},r.a.createElement("div",{className:"form-group"},r.a.createElement("label",null,"Username"),r.a.createElement("input",{type:"text",name:"username",placeholder:"Enter Your Username",value:this.state.username,className:"form-control",onChange:this.onChange}))),r.a.createElement("div",{className:"col-sm-6"},r.a.createElement("div",{className:"form-group"},r.a.createElement("label",null,"Email"),r.a.createElement("input",{type:"text",name:"email",placeholder:"Enter Your Email",value:this.state.email,className:"form-control",onChange:this.onChange}))),r.a.createElement("div",{className:"col-sm-6"},r.a.createElement("div",{className:"form-group"},r.a.createElement("label",null,"Mobile"),r.a.createElement("input",{type:"text",name:"mobile",placeholder:"Enter Your Mobile Number",value:this.state.mobile,className:"form-control",onChange:this.onChange}))),r.a.createElement("div",{className:"col-sm-6"},r.a.createElement("div",{className:"form-group"},r.a.createElement("label",null,"Password"),r.a.createElement("input",{type:"text",name:"password",placeholder:"Enter Your Password",value:this.state.password,className:"form-control",onChange:this.onChange}))),r.a.createElement("div",{className:"col-sm-6"},r.a.createElement("div",{className:"form-group"},r.a.createElement("button",{type:"submit",className:"btn btn-primary"},"Submit")))))))}}]),a}(r.a.Component),C=function(e){Object(b.a)(a,e);var t=Object(v.a)(a);function a(){var e;Object(h.a)(this,a),e=t.call(this);var n=!1;return localStorage.getItem("token")&&(n=!0),e.state={loggedIn:n},e}return Object(g.a)(a,[{key:"render",value:function(){return!1===this.state.loggedIn?r.a.createElement(c.a,{to:"/"}):r.a.createElement("div",null,r.a.createElement(O,null),r.a.createElement("div",{className:"container"},r.a.createElement("h1",null,"View Ajeet Panwar Details"),r.a.createElement(s.b,{to:"dashboard"},"afdafda")))}}]),a}(r.a.Component),x=function(e){Object(b.a)(a,e);var t=Object(v.a)(a);function a(e){var n;Object(h.a)(this,a),n=t.call(this,e);var r=!1;return localStorage.getItem("token")&&(r=!0),n.logout=n.logout.bind(Object(E.a)(n)),n.state={loggedIn:r},n.state={error:null,isLoaded:!1,items:[]},n}return Object(g.a)(a,[{key:"componentDidMount",value:function(){this.fetchData()}},{key:"fetchData",value:function(){var e=this;return fetch("/user/2").then((function(e){return e.json()})).then((function(t){e.setState({isLoaded:!0,items:t.data})}),(function(t){e.setState({isLoaded:!0,error:t})}))}},{key:"logout",value:function(){this.setState({loggedIn:!1})}},{key:"render",value:function(e){if(!1===this.state.loggedIn)return r.a.createElement(c.a,{to:"/logout"});var t=this.state,a=(t.error,t.isLoaded,t.items);return r.a.createElement("div",null,r.a.createElement(O,null),r.a.createElement("div",{className:"container"},r.a.createElement("h1",null,"View User Details"),r.a.createElement("table",{className:"table table-borderd"},r.a.createElement("thead",null,r.a.createElement("tr",null,r.a.createElement("th",null,"id"),r.a.createElement("th",null,"Username"),r.a.createElement("th",null,"Password"),r.a.createElement("th",null,"Action"))),r.a.createElement("tbody",null,r.a.createElement("tr",null,r.a.createElement("td",null,a.id),r.a.createElement("td",null,a.username),r.a.createElement("td",null,a.pass),r.a.createElement("td",null,"fdsafd"))))))}}]),a}(r.a.Component),L=function(e){Object(b.a)(a,e);var t=Object(v.a)(a);function a(){var e;return Object(h.a)(this,a),e=t.call(this),localStorage.removeItem("token"),e}return Object(g.a)(a,[{key:"render",value:function(){return r.a.createElement(c.a,{to:"/"})}}]),a}(r.a.Component),D=function(e){Object(b.a)(a,e);var t=Object(v.a)(a);function a(){var e;Object(h.a)(this,a),e=t.call(this);var n=!1;return localStorage.getItem("token")&&(n=!0),e.state={username:"",loggedIn:n,error:""},e.onChange=e.onChange.bind(Object(E.a)(e)),e.formSubmit=e.formSubmit.bind(Object(E.a)(e)),e}return Object(g.a)(a,[{key:"onChange",value:function(e){this.setState(Object(d.a)({},e.target.name,e.target.value))}},{key:"formSubmit",value:function(){var e=Object(u.a)(i.a.mark((function e(t){var a,n;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.preventDefault(),a=this.state.username,e.prev=2,e.next=5,f.a.post("/forgot-password",{username:a});case 5:200===(n=e.sent).data.status?(localStorage.setItem("token",n.data.token),this.setState({loggedIn:!0,error:n.data.error,message:n.data.message})):this.setState({error:n.data.error,message:n.data.message}),e.next=12;break;case 9:e.prev=9,e.t0=e.catch(2),this.setState({error:e.t0.error,message:e.t0.message});case 12:case"end":return e.stop()}}),e,this,[[2,9]])})));return function(t){return e.apply(this,arguments)}}()},{key:"render",value:function(){return!0===this.state.loggedIn?r.a.createElement(c.a,{to:"/dashboard"}):r.a.createElement("div",{className:"container"},r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col-sm-3"}),r.a.createElement("div",{className:"col-sm-6"},r.a.createElement("form",{onSubmit:this.formSubmit},r.a.createElement("div",{className:"form-group"},r.a.createElement("label",null,"Enter Registered Email Address ",r.a.createElement("span",null,"(*)")),r.a.createElement("input",{type:"text",placeholder:"Enter Registered Email Address",value:this.state.username,onChange:this.onChange,name:"username",className:"form-control"})),r.a.createElement("div",{className:"form-group error"},this.state.message),r.a.createElement("div",{className:"form-group"},r.a.createElement("button",{type:"submit",className:"btn btn-primary"},"Forgot Password"))))))}}]),a}(r.a.Component),U=function(e){Object(b.a)(a,e);var t=Object(v.a)(a);function a(){var e;Object(h.a)(this,a),e=t.call(this);var n=!1;return localStorage.getItem("token")&&(n=!0),e.state={loggedIn:n},e}return Object(g.a)(a,[{key:"render",value:function(){return!1===this.state.loggedIn?r.a.createElement(c.a,{to:"/"}):r.a.createElement("div",null,r.a.createElement(O,null),r.a.createElement("div",{className:"container"},r.a.createElement("h1",null,"404 page Nomatch ")))}}]),a}(r.a.Component);var P=function(){return r.a.createElement(s.a,null,r.a.createElement(c.d,null,r.a.createElement(c.b,{exact:!0,path:"/forgot-password",component:D}),r.a.createElement(c.b,{exact:!0,path:"/",component:j}),r.a.createElement(c.b,{exact:!0,path:"/user",component:w}),r.a.createElement(c.b,{path:"/users/:id",component:S}),r.a.createElement(c.b,{path:"/user/add/",component:I}),r.a.createElement(c.b,{path:"/dashboard",component:y}),r.a.createElement(c.b,{path:"/ajeet",component:C}),r.a.createElement(c.b,{path:"/panwar",component:x}),r.a.createElement(c.b,{path:"/logout",component:L}),r.a.createElement(c.b,{component:U})))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(r.a.createElement(P,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))},55:function(e,t,a){e.exports=a.p+"static/media/logo.7ee17852.png"},56:function(e,t,a){e.exports=a(273)}},[[56,1,2]]]);
//# sourceMappingURL=main.726b160b.chunk.js.map