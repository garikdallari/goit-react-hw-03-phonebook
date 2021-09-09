(this["webpackJsonpgoit-react-hw-02-phonebook"]=this["webpackJsonpgoit-react-hw-02-phonebook"]||[]).push([[0],{21:function(t,e,n){},26:function(t,e,n){"use strict";n.r(e);var a,r,c=n(1),i=n.n(c),o=n(11),s=n.n(o),l=(n(20),n(21),n(14)),u=n(4),d=n(5),b=n(6),j=n(9),m=n(7),h=n(2),f=n(3),p=f.a.form(a||(a=Object(h.a)(["\n  display: flex;\n"]))),x=n(8),g=f.a.button(r||(r=Object(h.a)(["\n  border: none;\n  background-color: transparent;\n  cursor: pointer;\n"]))),O=n(0);var v,C=function(t){var e=t.text,n=t.onClick,a=t.title;return Object(O.jsx)(g,{title:a,onClick:n,children:e})},y=f.a.h2(v||(v=Object(h.a)(["\n  font-size: ","px;\n  color: ",";\n  margin-right: ","px;\n  margin-left: ","px;\n  margin-top: ","px;\n"])),(function(t){return t.size}),(function(t){return t.color}),(function(t){return t.marginR}),(function(t){return t.marginL}),(function(t){return t.marginT}));var z,w=function(t){var e=t.marginT,n=t.marginR,a=t.marginL,r=t.text,c=t.size,i=t.color;return Object(O.jsx)(y,{marginT:e,marginR:n,marginL:a,color:i,size:c,children:r})},S=f.a.input(z||(z=Object(h.a)(["\n  width: 300px;\n  border: none;\n  border-bottom: 1px solid gray;\n  background-color: transparent;\n\n  &:hover {\n    border-bottom: 1px solid #000d59;\n  }\n"])));var k,A,L=function(t){var e=t.value,n=t.type,a=t.name,r=t.onChange,c=t.placeholder;return Object(O.jsx)(S,{placeholder:c,value:e,type:n,name:a,onChange:r})},R=function(t){Object(j.a)(n,t);var e=Object(m.a)(n);function n(){var t;Object(d.a)(this,n);for(var a=arguments.length,r=new Array(a),c=0;c<a;c++)r[c]=arguments[c];return(t=e.call.apply(e,[this].concat(r))).state={name:"",number:""},t.handleChange=function(e){var n=e.currentTarget.value,a=e.currentTarget.name;t.setState(Object(u.a)({},a,n))},t.handleSubmit=function(e){e.preventDefault(),t.props.onSubmit(t.state),t.setState({name:"",number:""})},t}return Object(b.a)(n,[{key:"render",value:function(){var t=this.state,e=t.name,n=t.number;return Object(O.jsxs)(p,{onSubmit:this.handleSubmit,children:[Object(O.jsx)(w,{marginR:15,size:18,text:"Name"}),Object(O.jsx)(L,{placeholder:"type name...",value:e,type:"text",name:"name",pattern:"^[a-zA-Z\u0430-\u044f\u0410-\u042f]+(([' -][a-zA-Z\u0430-\u044f\u0410-\u042f ])?[a-zA-Z\u0430-\u044f\u0410-\u042f]*)*$",title:"\u0418\u043c\u044f \u043c\u043e\u0436\u0435\u0442 \u0441\u043e\u0441\u0442\u043e\u044f\u0442\u044c \u0442\u043e\u043b\u044c\u043a\u043e \u0438\u0437 \u0431\u0443\u043a\u0432, \u0430\u043f\u043e\u0441\u0442\u0440\u043e\u0444\u0430, \u0442\u0438\u0440\u0435 \u0438 \u043f\u0440\u043e\u0431\u0435\u043b\u043e\u0432. \u041d\u0430\u043f\u0440\u0438\u043c\u0435\u0440 Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan \u0438 \u0442. \u043f.",required:!0,onChange:this.handleChange}),Object(O.jsx)(w,{marginR:15,marginL:30,size:18,text:"Number"}),Object(O.jsx)(L,{placeholder:"type number...",value:n,type:"tel",name:"number",pattern:"\\+?\\d{1,4}?[-.\\s]?\\(?\\d{1,3}?\\)?[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,9}",title:"\u041d\u043e\u043c\u0435\u0440 \u0442\u0435\u043b\u0435\u0444\u043e\u043d\u0430 \u0434\u043e\u043b\u0436\u0435\u043d \u0441\u043e\u0441\u0442\u043e\u044f\u0442\u044c \u0446\u0438\u0444\u0440 \u0438 \u043c\u043e\u0436\u0435\u0442 \u0441\u043e\u0434\u0435\u0440\u0436\u0430\u0442\u044c \u043f\u0440\u043e\u0431\u0435\u043b\u044b, \u0442\u0438\u0440\u0435, \u043a\u0440\u0443\u0433\u043b\u044b\u0435 \u0441\u043a\u043e\u0431\u043a\u0438 \u0438 \u043c\u043e\u0436\u0435\u0442 \u043d\u0430\u0447\u0438\u043d\u0430\u0442\u044c\u0441\u044f \u0441 +",required:!0,onChange:this.handleChange}),Object(O.jsx)(C,{title:"Add to contacts",text:Object(O.jsx)(x.b,{size:50,color:"#187bcd"}),size:20,type:"submit"})]})}}]),n}(c.Component),F=f.a.p(k||(k=Object(h.a)(["\n  font-size: 18px;\n"]))),T=f.a.p(A||(A=Object(h.a)([""])));var B,N,D=function(t){var e=t.contact;return Object(O.jsxs)(O.Fragment,{children:[Object(O.jsx)(F,{children:e.name}),Object(O.jsx)(T,{children:e.number})]})},J=f.a.ul(B||(B=Object(h.a)(["\n  list-style: none;\n  display: flex;\n"]))),Z=f.a.li(N||(N=Object(h.a)(["\n  padding: 5px;\n  margin-right: 40px;\n"])));var q=function(t){var e=t.contacts,n=t.onDeleteContact;return Object(O.jsx)(O.Fragment,{children:Object(O.jsx)(J,{children:e.map((function(t){return Object(O.jsxs)(Z,{children:[Object(O.jsx)(D,{contact:t}),Object(O.jsx)(C,{title:"Remove from contacts",text:Object(O.jsx)(x.a,{color:"#ff4f4f",size:30}),type:"button",onClick:function(){return n(t.id)}})]},t.id)}))})})};var E,M=function(t){t.placeholder;var e=t.value,n=t.onChange;return Object(O.jsxs)(O.Fragment,{children:[Object(O.jsx)(w,{size:18,text:"Find Contacts by name"}),Object(O.jsx)(L,{placeholder:"type to find contacts...",type:"text",name:"filter",value:e,onChange:n})]})},P=n(13),H=n.n(P),I=f.a.div(E||(E=Object(h.a)(["\n  width: 100%;\n  height: 100vh;\n  padding: 15px;\n  margin-left: auto;\n  margin-right: auto;\n"])));var K=function(t){var e=t.children;return Object(O.jsx)(I,{children:e})},$=function(t){Object(j.a)(n,t);var e=Object(m.a)(n);function n(){var t;Object(d.a)(this,n);for(var a=arguments.length,r=new Array(a),c=0;c<a;c++)r[c]=arguments[c];return(t=e.call.apply(e,[this].concat(r))).state={contacts:[{id:"id-1",name:"Rosie Simpson",number:"459-12-56"},{id:"id-2",name:"Hermione Kline",number:"443-89-12"},{id:"id-3",name:"Eden Clements",number:"645-17-79"},{id:"id-4",name:"Annie Copeland",number:"227-91-26"}],filter:""},t.handleChange=function(e){var n=e.target.value,a=e.target.name;t.setState(Object(u.a)({},a,n))},t.addContact=function(e){var n=e.name,a=e.number,r=t.state.contacts,c={name:n,id:H()(),number:a};r.find((function(t){return t.name.toLowerCase()===c.name.toLowerCase()}))&&alert("".concat(c.name," is already in contacts")),""===n&&""===a||(""!==n&&""!==a?t.setState((function(t){return{contacts:[].concat(Object(l.a)(t.contacts),[c])}})):alert("Pleasy fill empty fields"))},t.deleteContact=function(e){t.setState((function(t){return{contacts:t.contacts.filter((function(t){return e!==t.id}))}}))},t.handleFilterChange=function(e){var n=e.target.value;t.setState({filter:n})},t.filterByName=function(){var e=t.state,n=e.contacts,a=e.filter;return n.filter((function(t){return t.name.toLowerCase().includes(a.toLowerCase())}))},t}return Object(b.a)(n,[{key:"render",value:function(){var t=this.state,e=t.contacts,n=t.filter,a=this.filterByName();return Object(O.jsxs)(K,{children:[Object(O.jsx)(w,{color:"#424242",size:30,text:"Phonebook"}),Object(O.jsx)("div",{style:{border:"1px solid gray",width:"fit-content",padding:"20px"},children:Object(O.jsx)(R,{onSubmit:this.addContact,contacts:e})}),Object(O.jsx)(M,{value:n,onChange:this.handleFilterChange}),Object(O.jsx)(w,{marginT:40,size:20,text:"Contacts"}),Object(O.jsx)(q,{onDeleteContact:this.deleteContact,contacts:a})]})}}]),n}(c.Component);s.a.render(Object(O.jsx)(i.a.StrictMode,{children:Object(O.jsx)($,{})}),document.getElementById("root"))}},[[26,1,2]]]);
//# sourceMappingURL=main.ae83e70d.chunk.js.map