(this.webpackJsonpreduxproject=this.webpackJsonpreduxproject||[]).push([[0],{27:function(e,t,a){},34:function(e,t,a){},35:function(e,t,a){"use strict";a.r(t);var c=a(1),d=a(12),n=a.n(d),i=(a(27),a(21)),o=a(11),r=a(18),s=(a(36),{apiKey:"AIzaSyA0gVV0Bnf64q7NFHzjKbD6vCnJojbgh6c",authDomain:"todo-3d50e.firebaseapp.com",projectId:"todo-3d50e",storageBucket:"todo-3d50e.appspot.com",messagingSenderId:"130920220526",appId:"1:130920220526:web:5a9e745d6a0b794640e37f"});r.a.initializeApp(s);var j=r.a.firestore(),l=a(3),u=function(){var e=Object(c.useState)(""),t=Object(i.a)(e,2),a=t[0],d=t[1],n=Object(o.c)((function(e){return e.TodoReducer.list})),r=Object(o.b)();return Object(l.jsx)(l.Fragment,{children:Object(l.jsx)("div",{className:"main-div",children:Object(l.jsxs)("div",{className:"child-div",children:[Object(l.jsx)("figure",{children:Object(l.jsx)("figcaption",{children:"Add your list here"})}),Object(l.jsxs)("div",{className:"addItems",children:[Object(l.jsx)("input",{type:"text",placeholder:"Add items",value:a,onChange:function(e){return d(e.target.value)}}),Object(l.jsx)("i",{className:"fa fa-plus add_btn",onClick:function(){return r((e=a,j.collection("todos").add({todo:e}),{type:"addTodo",payload:{id:Math.random(),data:e}}),d(""));var e}})]}),Object(l.jsx)("div",{className:"showItems",children:n.map((function(e){return Object(l.jsx)(l.Fragment,{children:Object(l.jsxs)("div",{className:"eachItem",children:[Object(l.jsx)("h3",{children:e.data}),Object(l.jsx)("i",{className:"fa fa-trash-alt add_btn",style:{color:"black"},onClick:function(){return r({type:"remove",id:e.id})}})]},e.id)})}))})]})})})},b=(a(34),function(){return Object(l.jsx)(l.Fragment,{children:Object(l.jsx)(u,{})})}),O=a(14),h=a(22),p=a(9),f={list:[]},m=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:f,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"addTodo":var a=t.payload,c=a.id,d=a.data;return Object(p.a)(Object(p.a)({},e),{},{list:[].concat(Object(h.a)(e.list),[{id:c,data:d}])});case"showdata":return j.collection("todos").onSnapshot((function(e){e.docs.map((function(e){return{id:e.id,todo:e.data().todo}}))})),Object(p.a)({},e);case"remove":var n=e.list.filter((function(e){return e.id!==t.id}));return Object(p.a)(Object(p.a)({},e),{},{list:n});default:return e}},v=Object(O.a)({TodoReducer:m}),x=Object(O.b)(v,window.__REDUX_DEVTOOLS_EXTENSION__&&window.__REDUX_DEVTOOLS_EXTENSION__());n.a.render(Object(l.jsx)(o.a,{store:x,children:Object(l.jsx)(b,{})}),document.getElementById("root"))}},[[35,1,2]]]);
//# sourceMappingURL=main.d1ed83a6.chunk.js.map