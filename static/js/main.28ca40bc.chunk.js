(this["webpackJsonpgoit-react-hw-02-phonebook"]=this["webpackJsonpgoit-react-hw-02-phonebook"]||[]).push([[0],{12:function(e,t,n){e.exports={labelFilter:"Filter_labelFilter__2ewlw",input:"Filter_input__1E0vC"}},19:function(e,t,n){},23:function(e,t,n){"use strict";n.r(t);var a=n(2),r=n.n(a),c=n(13),i=n.n(c),s=(n(19),n(14)),o=n(6),l=n(7),u=n(8),m=n(10),b=n(9),d=n(3),h=n.n(d),j=n(0),p=function(e){Object(m.a)(n,e);var t=Object(b.a)(n);function n(){var e;Object(l.a)(this,n);for(var a=arguments.length,r=new Array(a),c=0;c<a;c++)r[c]=arguments[c];return(e=t.call.apply(t,[this].concat(r))).state={name:"",number:""},e.hendleOnchange=function(t){var n=t.currentTarget,a=n.name,r=n.value;e.setState(Object(o.a)({},a,r))},e.onSubmitContacts=function(t){t.preventDefault(),e.props.onSubmitForm(e.state.name,e.state.number),e.setState({name:"",number:""})},e}return Object(u.a)(n,[{key:"render",value:function(){return Object(j.jsxs)("form",{className:h.a.formContact,onSubmit:this.onSubmitContacts,children:[Object(j.jsxs)("label",{className:h.a.label,children:["Name",Object(j.jsx)("input",{className:h.a.input,type:"text",name:"name",value:this.state.name,onChange:this.hendleOnchange,pattern:"^[a-zA-Z\u0430-\u044f\u0410-\u042f]+(([' -][a-zA-Z\u0430-\u044f\u0410-\u042f ])?[a-zA-Z\u0430-\u044f\u0410-\u042f]*)*$",title:"\u0418\u043c\u044f \u043c\u043e\u0436\u0435\u0442 \u0441\u043e\u0441\u0442\u043e\u044f\u0442\u044c \u0442\u043e\u043b\u044c\u043a\u043e \u0438\u0437 \u0431\u0443\u043a\u0432, \u0430\u043f\u043e\u0441\u0442\u0440\u043e\u0444\u0430, \u0442\u0438\u0440\u0435 \u0438 \u043f\u0440\u043e\u0431\u0435\u043b\u043e\u0432. \u041d\u0430\u043f\u0440\u0438\u043c\u0435\u0440 Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan \u0438 \u0442. \u043f.",required:!0})]}),Object(j.jsxs)("label",{className:h.a.label,children:["Number",Object(j.jsx)("input",{className:h.a.input,type:"tel",name:"number",value:this.state.number,onChange:this.hendleOnchange,pattern:"\\+?\\d{1,4}?[-.\\s]?\\(?\\d{1,3}?\\)?[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,9}",title:"\u041d\u043e\u043c\u0435\u0440 \u0442\u0435\u043b\u0435\u0444\u043e\u043d\u0430 \u0434\u043e\u043b\u0436\u0435\u043d \u0441\u043e\u0441\u0442\u043e\u044f\u0442\u044c \u0446\u0438\u0444\u0440 \u0438 \u043c\u043e\u0436\u0435\u0442 \u0441\u043e\u0434\u0435\u0440\u0436\u0430\u0442\u044c \u043f\u0440\u043e\u0431\u0435\u043b\u044b, \u0442\u0438\u0440\u0435, \u043a\u0440\u0443\u0433\u043b\u044b\u0435 \u0441\u043a\u043e\u0431\u043a\u0438 \u0438 \u043c\u043e\u0436\u0435\u0442 \u043d\u0430\u0447\u0438\u043d\u0430\u0442\u044c\u0441\u044f \u0441 +",required:!0})]}),Object(j.jsx)("button",{className:h.a.itemBtn,type:"submit",children:"Add Contact"})]})}}]),n}(a.Component),f=p,O=n(5),_=n.n(O),x=n(1),C=n.n(x),v=function(e){var t=e.contItems,n=e.filteredValue,a=e.deleteHandler,r=t.filter((function(e){return e.name.toLowerCase().includes(n.toLowerCase())}));return(""!==n?r:t).map((function(e){var t="tel:"+e.number;return Object(j.jsxs)("li",{className:_.a.items,id:e.id,children:[Object(j.jsxs)("div",{className:_.a.contItemsWrapper,children:[Object(j.jsx)("span",{children:e.name}),Object(j.jsx)("span",{children:Object(j.jsxs)("a",{href:t,children:[Object(j.jsx)("svg",{className:_.a.icon,viewBox:"0 0 32 32",children:Object(j.jsx)("path",{d:"M27.419 20.852l-4.201-0.48c-1.009-0.116-2.002 0.232-2.713 0.943l-3.044 3.044c-4.681-2.382-8.519-6.203-10.901-10.901l3.060-3.060c0.711-0.711 1.059-1.704 0.943-2.713l-0.48-4.168c-0.198-1.671-1.604-2.928-3.292-2.928h-2.862c-1.869 0-3.424 1.555-3.308 3.424 0.877 14.126 12.174 25.407 26.284 26.284 1.869 0.116 3.424-1.439 3.424-3.308v-2.861c0.016-1.671-1.241-3.077-2.911-3.275z"})}),e.number]})})]}),Object(j.jsx)("button",{className:_.a.itemBtn,type:"button",onClick:a,children:"Delete"})]},e.id)}))},g=v;v.prototype={contItems:C.a.array,filterValue:C.a.string,deleteHandler:C.a.func,filteredValue:C.a.array};var N=n(12),y=n.n(N),F=function(e){var t=e.filterValue,n=e.onFilterChange;return Object(j.jsxs)("label",{className:y.a.labelFilter,children:["Find contacts by name",Object(j.jsx)("input",{className:y.a.input,type:"text",name:"filter",value:t,onChange:n})]})},S=F;F.prototype={input:C.a.oneOfType([C.a.string,C.a.number]),filterValue:C.a.string,onFilterChange:C.a.func};var k=n(25),A=n(4),w=n.n(A),B=function(e){Object(m.a)(n,e);var t=Object(b.a)(n);function n(){var e;Object(l.a)(this,n);for(var a=arguments.length,r=new Array(a),c=0;c<a;c++)r[c]=arguments[c];return(e=t.call.apply(t,[this].concat(r))).state={contacts:[{id:"id-1",name:"Rosie Simpson",number:"459-12-56"},{id:"id-2",name:"Hermione Kline",number:"443-89-12"},{id:"id-3",name:"Eden Clements",number:"645-17-79"},{id:"id-4",name:"Annie Copeland",number:"227-91-26"}],filter:""},e.hendleOnchange=function(t){var n=t.currentTarget,a=n.name,r=n.value;e.setState(Object(o.a)({},a,r))},e.onSubmitForm=function(t,n){e.state.contacts.find((function(e){return e.name===t}))?alert(t+" is already in contacts"):e.setState((function(e){return{contacts:[].concat(Object(s.a)(e.contacts),[{name:t,id:Object(k.a)(),number:n}])}}))},e.deleteHandler=function(t){console.dir(t.currentTarget.parentElement.id),e.setState({contacts:e.state.contacts.filter((function(e){return e.id!==t.currentTarget.parentElement.id}))})},e}return Object(u.a)(n,[{key:"render",value:function(){return Object(j.jsx)("div",{className:w.a.section,children:Object(j.jsxs)(j.Fragment,{children:[Object(j.jsxs)("div",{className:w.a.phonebook,children:[Object(j.jsx)("h2",{className:w.a.title,children:"Phonebook"}),Object(j.jsx)(f,{onSubmitForm:this.onSubmitForm})]}),Object(j.jsx)("h2",{className:w.a.title,children:"Contacts"}),Object(j.jsx)(S,{filterValue:this.state.filter,onFilterChange:this.hendleOnchange}),Object(j.jsx)("ul",{className:w.a.itemList,children:Object(j.jsx)(g,{contItems:this.state.contacts,filteredValue:this.state.filter,deleteHandler:this.deleteHandler})})]})})}}]),n}(a.Component),H=B;i.a.render(Object(j.jsx)(r.a.StrictMode,{children:Object(j.jsx)(H,{})}),document.getElementById("root"))},3:function(e,t,n){e.exports={formContact:"ContactForm_formContact__1j82D",itemBtn:"ContactForm_itemBtn__31skf",input:"ContactForm_input__aNitP",label:"ContactForm_label__1PYhT"}},4:function(e,t,n){e.exports={section:"App_section__cSdK7",phonebook:"App_phonebook__1KDe5",title:"App_title__3j1Kn"}},5:function(e,t,n){e.exports={items:"Contacts_items__2GNFh",itemBtn:"Contacts_itemBtn__1YHRU",contItemsWrapper:"Contacts_contItemsWrapper__kxH9d",icon:"Contacts_icon__3m4yp"}}},[[23,1,2]]]);
//# sourceMappingURL=main.28ca40bc.chunk.js.map