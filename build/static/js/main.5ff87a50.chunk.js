(this["webpackJsonpgoit-react-hw-05-phonebook"]=this["webpackJsonpgoit-react-hw-05-phonebook"]||[]).push([[0],{16:function(t,e,n){t.exports={buttonDelete:"contactList_buttonDelete__1KIRp",item:"contactList_item__1Zfmy",number:"contactList_number__PxfHE"}},20:function(t,e,n){t.exports={enter:"addTransition_enter__3Z_LA",enterActive:"addTransition_enterActive__3A6JT",exit:"addTransition_exit__2pRWX",exitActive:"addTransition_exitActive__sk3MZ"}},21:function(t,e,n){t.exports={filter:"filter_filter__1EaBe",input:"filter_input__1g0Wd"}},28:function(t,e,n){t.exports={title:"app_title__2fbQI"}},29:function(t,e,n){t.exports={container:"container_container__3TiUU"}},30:function(t,e,n){t.exports={appear:"logoTransition_appear__3AKSh",appearActive:"logoTransition_appearActive__2IOna"}},31:function(t,e,n){t.exports={box:"error_box__2AiIf"}},32:function(t,e,n){t.exports={enter:"errorTransition_enter__2_wav",enterActive:"errorTransition_enterActive__2qmF0",exit:"errorTransition_exit__3P-rp",exitActive:"errorTransition_exitActive__3bF8k"}},40:function(t,e,n){},41:function(t,e,n){},56:function(t,e,n){"use strict";n.r(e);var a=n(0),r=n.n(a),c=n(6),o=n.n(c),i=(n(40),n(9)),s=n(10),u=n(12),l=n(11),b=(n(41),n(14)),m=n(19),j=n.n(m),d=n(8),h=n.n(d),p=n(5),f=n(7),_={addContact:Object(f.a)("contacts/add",(function(t,e){return{payload:{id:j.a.generate(),name:t,number:e}}})),deleteContact:Object(f.a)("contacts/delete"),changeFilter:Object(f.a)("contacts/changeFilter")},O=n(1),x=function(t){Object(u.a)(n,t);var e=Object(l.a)(n);function n(){var t;Object(i.a)(this,n);for(var a=arguments.length,r=new Array(a),c=0;c<a;c++)r[c]=arguments[c];return(t=e.call.apply(e,[this].concat(r))).loginInputId=j.a.generate(),t.state={name:"",number:""},t.handleNameChange=function(e){t.setState(Object(b.a)({},e.currentTarget.name,e.currentTarget.value))},t.handleSubmit=function(e){e.preventDefault(),t.props.onSubmit(t.state),t.reset()},t.reset=function(){t.setState({name:"",number:""})},t}return Object(s.a)(n,[{key:"render",value:function(){return Object(O.jsxs)("form",{className:h.a.contactForm,onSubmit:this.handleSubmit,children:[Object(O.jsx)("label",{className:h.a.labelForm,htmlFor:this.loginInputId,children:"Name"}),Object(O.jsx)("input",{className:h.a.inputForm,type:"text",name:"name",id:this.loginInputId,value:this.state.name,onChange:this.handleNameChange}),Object(O.jsx)("label",{className:h.a.labelForm,htmlFor:this.loginInputId,children:"Number"}),Object(O.jsx)("input",{className:h.a.inputForm,type:"tel",name:"number",id:this.loginInputId,value:this.state.number,onChange:this.handleNameChange}),Object(O.jsx)("button",{className:h.a.buttonContactForm,type:"submit",children:"Add contact"})]})}}]),n}(a.Component),v=Object(p.b)(null,(function(t){return{onSubmit:function(e,n){return t(_.addContact(e,n))}}}))(x),g=n(16),F=n.n(g),C=n(58),N=n(57),y=n(20),w=n.n(y),A=function(){return Object(O.jsxs)("svg",{"data-name":"Layer 2",fill:"white",width:"60",height:"60",id:"bcc87848-35d3-4b8c-bef5-f50bbd1dee72",viewBox:"0 0 38 38",xmlns:"http://www.w3.org/2000/svg",children:[Object(O.jsx)("rect",{height:"2.5",rx:"1.25",transform:"translate(19 45.87) rotate(-135)",width:"15.435",x:"11.282",y:"17.75"}),Object(O.jsx)("rect",{height:"2.5",rx:"1.25",transform:"translate(-7.87 19) rotate(-45)",width:"15.435",x:"11.282",y:"17.75"})]})},I=function(t){Object(u.a)(n,t);var e=Object(l.a)(n);function n(){return Object(i.a)(this,n),e.apply(this,arguments)}return Object(s.a)(n,[{key:"render",value:function(){var t=this.props,e=t.contacts,n=t.onDeleteContact;return console.log("props",this.props),Object(O.jsx)(C.a,{component:"ul",className:F.a.list,children:e.map((function(t){var e=t.id,a=t.name,r=t.number;return Object(O.jsx)(N.a,{timeout:250,classNames:w.a,appear:!0,unmountOnExit:!0,children:Object(O.jsxs)("li",{className:F.a.item,children:[Object(O.jsx)("div",{children:a}),Object(O.jsx)("div",{className:F.a.number,children:r}),Object(O.jsx)("button",{className:F.a.buttonDelete,type:"button",onClick:function(){return n(e)},children:Object(O.jsx)(A,{})})]})},e)}))})}}]),n}(a.Component),T=function(t,e){var n=e.toLowerCase();return t.filter((function(t){return t.name.toLowerCase().includes(n)}))},S=Object(p.b)((function(t){var e=t.contacts,n=e.items,a=e.filter;return{contacts:T(n,a)}}),(function(t){return{onDeleteContact:function(e){return t(_.deleteContact(e))}}}))(I),k=n(21),L=n.n(k);var D=Object(p.b)((function(t){return{value:t.contacts.filter}}),(function(t){return{onChange:function(e){return t(_.changeFilter(e.target.value))}}}))((function(t){var e=t.value,n=t.onChangeFilter;return Object(O.jsx)(N.a,{timeout:250,classNames:w.a,appear:!0,children:Object(O.jsxs)("form",{className:L.a.filter,children:[Object(O.jsx)("label",{className:L.a.label,children:"Find contacts by name"}),Object(O.jsx)("input",{className:L.a.input,type:"name",value:e,onChange:n})]})})})),E=n(28),P=n.n(E),R=n(29),B=n.n(R);var J,W=function(t){var e=t.children;return Object(O.jsx)("div",{className:B.a.container,children:e})},Z=n(30),K=n.n(Z),M=n(31),U=n.n(M),q=n(32),H=n.n(q),Q=function(){return Object(O.jsx)(N.a,{in:!0,timeout:250,classNames:H.a,unmountOnExit:!0,children:Object(O.jsx)("div",{className:U.a.box,children:"Contact is already exists!"})})},X=function(t){Object(u.a)(n,t);var e=Object(l.a)(n);function n(){var t;Object(i.a)(this,n);for(var a=arguments.length,r=new Array(a),c=0;c<a;c++)r[c]=arguments[c];return(t=e.call.apply(e,[this].concat(r))).state={error:!1},t}return Object(s.a)(n,[{key:"render",value:function(){var t=this.state.error;this.props;return Object(O.jsxs)(W,{children:[Object(O.jsx)(N.a,{in:!0,appear:!0,timeout:500,classNames:K.a,unmountOnExit:!0,children:Object(O.jsx)("h1",{className:P.a.title,children:"Phonebook"})}),Object(O.jsx)(v,{}),Object(O.jsx)(D,{}),Object(O.jsx)(S,{}),t&&Object(O.jsx)(Q,{})]})}}]),n}(a.Component),z=function(t){t&&t instanceof Function&&n.e(3).then(n.bind(null,59)).then((function(e){var n=e.getCLS,a=e.getFID,r=e.getFCP,c=e.getLCP,o=e.getTTFB;n(t),a(t),r(t),c(t),o(t)}))},G=n(2),V=n(33),Y=n(34),$=localStorage.getItem("saveContacts")||"[]",tt=JSON.parse($),et=Object(f.b)(tt,(J={},Object(b.a)(J,_.addContact,(function(t,e){var n=e.payload;return[].concat(Object(Y.a)(t),[n])})),Object(b.a)(J,_.deleteContact,(function(t,e){var n=e.payload;return t.filter((function(t){return t.id!==n}))})),J)),nt=Object(f.b)("",Object(b.a)({},_.changeFilter,(function(t,e){return e.payload}))),at=Object(G.combineReducers)({items:et,filter:nt}),rt=Object(G.combineReducers)({contacts:at}),ct=Object(G.createStore)(rt,Object(V.composeWithDevTools)());o.a.render(Object(O.jsx)(r.a.StrictMode,{children:Object(O.jsx)(p.a,{store:ct,children:Object(O.jsx)(X,{})})}),document.getElementById("root")),z()},8:function(t,e,n){t.exports={contactForm:"contactForm_contactForm__2leNd",labelForm:"contactForm_labelForm__108mt",inputForm:"contactForm_inputForm__2N457",buttonContactForm:"contactForm_buttonContactForm__2b9Ri"}}},[[56,1,2]]]);
//# sourceMappingURL=main.5ff87a50.chunk.js.map