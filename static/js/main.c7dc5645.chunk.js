(this.webpackJsonpphonebook=this.webpackJsonpphonebook||[]).push([[0],{12:function(e,t,n){e.exports={container:"App_container__1MQN3"}},14:function(e,t,n){e.exports=n(21)},21:function(e,t,n){"use strict";n.r(t);var a=n(0),c=n.n(a),r=n(9),o=n.n(r),l=n(13),u=n(1),i=n(2),m=n(4),s=n(3),h=n(5),b=n(10),p=n(11),d=function(e){function t(){var e,n;Object(u.a)(this,t);for(var a=arguments.length,c=new Array(a),r=0;r<a;r++)c[r]=arguments[r];return(n=Object(m.a)(this,(e=Object(s.a)(t)).call.apply(e,[this].concat(c)))).state={name:"",number:""},n.handleChangeInput=function(e){n.setState(Object(b.a)({},e.target.name,e.target.value))},n}return Object(h.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){var e=this,t=this.state,n=t.name,a=t.number;return c.a.createElement(c.a.Fragment,null,c.a.createElement("form",{onSubmit:function(t){e.props.handelSubmitForm(t,{name:n,number:a,id:Object(p.v4)()}),e.setState({name:"",number:""})}},c.a.createElement("h2",null,"Name"),c.a.createElement("input",{type:"text",name:"name",value:n,onChange:this.handleChangeInput}),c.a.createElement("h2",null,"Number"),c.a.createElement("input",{type:"phone",name:"number",value:a,onChange:this.handleChangeInput}),c.a.createElement("button",{type:"submit"},"Add contact")))}}]),t}(a.Component),f=function(e){var t=e.contact,n=t.id,a=t.name,r=t.number,o=e.deleteContact;return c.a.createElement("li",null,c.a.createElement("span",null,a),c.a.createElement("br",null),c.a.createElement("span",null,r),c.a.createElement("button",{type:"button",id:n,onClick:o},"Delete"))},E=function(e){var t=e.contact,n=e.deleteContact;return c.a.createElement("ul",null,t.map((function(e){return c.a.createElement(f,{contact:e,key:e.id,deleteContact:n})})))},v=function(e){var t=e.checkName;return c.a.createElement(c.a.Fragment,null,c.a.createElement("h3",null,"Find contacts by name"),c.a.createElement("input",{type:"text",onChange:t}))},C=n(12),g=n.n(C),y=function(e){function t(){var e,n;Object(u.a)(this,t);for(var a=arguments.length,c=new Array(a),r=0;r<a;r++)c[r]=arguments[r];return(n=Object(m.a)(this,(e=Object(s.a)(t)).call.apply(e,[this].concat(c)))).state={contacts:[{id:"id-1",name:"Rosie Simpson",number:"459-12-56"},{id:"id-2",name:"Hermione Kline",number:"443-89-12"}],filter:""},n.handelSubmitForm=function(e,t){e.preventDefault(),n.state.contacts.some((function(e){return e.name===t.name}))?alert("You can not add this contact!"):n.setState((function(e){return{contacts:[].concat(Object(l.a)(e.contacts),[t])}}))},n.deleteContact=function(e){var t=e.target.id;n.setState((function(e){return{contacts:e.contacts.filter((function(e){return e.id!==t}))}}))},n.checkName=function(e){n.setState({filter:e.target.value})},n.filterContacts=function(){return n.state.contacts.filter((function(e){return e.name.toLocaleLowerCase().includes(n.state.filter)}))},n}return Object(h.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){return c.a.createElement(c.a.Fragment,null,c.a.createElement("div",{className:g.a.container},c.a.createElement("h1",null,"Phonebook"),c.a.createElement(d,{handelSubmitForm:this.handelSubmitForm}),c.a.createElement("h2",null,"Contacts"),this.state.contacts.length>2&&c.a.createElement(v,{checkName:this.checkName}),c.a.createElement(E,{contact:this.filterContacts(),deleteContact:this.deleteContact})))}}]),t}(c.a.Component);o.a.render(c.a.createElement(y,null),document.getElementById("root"))}},[[14,1,2]]]);
//# sourceMappingURL=main.c7dc5645.chunk.js.map