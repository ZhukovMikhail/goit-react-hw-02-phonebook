(this["webpackJsonpgoit-react-hw-02-phonebook"]=this["webpackJsonpgoit-react-hw-02-phonebook"]||[]).push([[0],{14:function(e,t,n){},15:function(e,t,n){},17:function(e,t,n){"use strict";n.r(t);var a=n(1),r=n.n(a),c=n(3),i=n.n(c),s=(n(14),n(7)),l=n(4),o=n(5),d=n(6),u=n(9),b=n(8),m=(n(15),n(0)),h=function(e){var t=e.contItems,n=e.filteredValue,a=e.deleteHandler,r=t.filter((function(e){return e.name.toLowerCase().includes(n.toLowerCase())}));return(""!==n?r:t).map((function(e){return Object(m.jsx)("ul",{children:Object(m.jsxs)("li",{id:e.id,children:[Object(m.jsx)("span",{children:e.name}),Object(m.jsx)("span",{children:e.number}),Object(m.jsx)("button",{onClick:a,children:"delete"})]})})}))},j=n(19),O=function(e){Object(u.a)(n,e);var t=Object(b.a)(n);function n(){var e;Object(o.a)(this,n);for(var a=arguments.length,r=new Array(a),c=0;c<a;c++)r[c]=arguments[c];return(e=t.call.apply(t,[this].concat(r))).state={contacts:[{id:"id-1",name:"Rosie Simpson",number:"459-12-56"},{id:"id-2",name:"Hermione Kline",number:"443-89-12"},{id:"id-3",name:"Eden Clements",number:"645-17-79"},{id:"id-4",name:"Annie Copeland",number:"227-91-26"}],filter:"",name:"",number:""},e.hendleOnchange=function(t){var n=t.target,a=n.name,r=n.value;e.setState(Object(l.a)({},a,r))},e.onSubmitForm=function(t){t.preventDefault(),e.setState((function(t){return{contacts:[].concat(Object(s.a)(t.contacts),[{name:e.state.name,id:Object(j.a)(),number:e.state.number}])}})),e.setState({name:"",number:""})},e.deleteHandler=function(t){console.dir(t.currentTarget.parentElement.id),e.setState({contacts:e.state.contacts.filter((function(e){return e.id!==t.currentTarget.parentElement.id}))})},e}return Object(d.a)(n,[{key:"render",value:function(){return Object(m.jsxs)("div",{className:"section",children:[Object(m.jsxs)("form",{onSubmit:this.onSubmitForm,children:[Object(m.jsxs)("label",{children:["Name",Object(m.jsx)("input",{type:"text",name:"name",value:this.state.name,onChange:this.hendleOnchange,pattern:"^[a-zA-Z\u0430-\u044f\u0410-\u042f]+(([' -][a-zA-Z\u0430-\u044f\u0410-\u042f ])?[a-zA-Z\u0430-\u044f\u0410-\u042f]*)*$",title:"\u0418\u043c\u044f \u043c\u043e\u0436\u0435\u0442 \u0441\u043e\u0441\u0442\u043e\u044f\u0442\u044c \u0442\u043e\u043b\u044c\u043a\u043e \u0438\u0437 \u0431\u0443\u043a\u0432, \u0430\u043f\u043e\u0441\u0442\u0440\u043e\u0444\u0430, \u0442\u0438\u0440\u0435 \u0438 \u043f\u0440\u043e\u0431\u0435\u043b\u043e\u0432. \u041d\u0430\u043f\u0440\u0438\u043c\u0435\u0440 Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan \u0438 \u0442. \u043f.",required:!0})]}),Object(m.jsxs)("label",{children:["Number",Object(m.jsx)("input",{type:"tel",name:"number",value:this.state.number,onChange:this.hendleOnchange,pattern:"\\+?\\d{1,4}?[-.\\s]?\\(?\\d{1,3}?\\)?[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,9}",title:"\u041d\u043e\u043c\u0435\u0440 \u0442\u0435\u043b\u0435\u0444\u043e\u043d\u0430 \u0434\u043e\u043b\u0436\u0435\u043d \u0441\u043e\u0441\u0442\u043e\u044f\u0442\u044c \u0446\u0438\u0444\u0440 \u0438 \u043c\u043e\u0436\u0435\u0442 \u0441\u043e\u0434\u0435\u0440\u0436\u0430\u0442\u044c \u043f\u0440\u043e\u0431\u0435\u043b\u044b, \u0442\u0438\u0440\u0435, \u043a\u0440\u0443\u0433\u043b\u044b\u0435 \u0441\u043a\u043e\u0431\u043a\u0438 \u0438 \u043c\u043e\u0436\u0435\u0442 \u043d\u0430\u0447\u0438\u043d\u0430\u0442\u044c\u0441\u044f \u0441 +",required:!0})]}),Object(m.jsx)("button",{type:"submit",children:"Add Contact"})]}),Object(m.jsx)("h2",{children:"Contatts"}),Object(m.jsxs)("label",{children:["Find contacts by name",Object(m.jsx)("input",{type:"text",name:"filter",value:this.state.filter,onChange:this.hendleOnchange})]}),Object(m.jsx)(h,{contItems:this.state.contacts,filteredValue:this.state.filter,deleteHandler:this.deleteHandler})]})}}]),n}(a.Component),p=O;i.a.render(Object(m.jsx)(r.a.StrictMode,{children:Object(m.jsx)(p,{})}),document.getElementById("root"))}},[[17,1,2]]]);
//# sourceMappingURL=main.eac6c2c0.chunk.js.map