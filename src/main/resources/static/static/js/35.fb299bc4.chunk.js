(self.webpackChunkconnectionreactfrontend=self.webpackChunkconnectionreactfrontend||[]).push([[35],{105:function(e,t,n){"use strict";var r=n(3144),i=n(5671),a=(0,r.Z)((function e(t,n,r,a,o,c,s,l,d,u,p,h,f){(0,i.Z)(this,e),this.public_id=t,this.firstname=n,this.lastname=r,this.password=a,this.email=o,this.age=c,this.country=s,this.state=l,this.city=d,this.gender=u,this.biography=p,this.interests=h,this.friendIdList=f}));t.Z=a},6429:function(e,t,n){"use strict";var r=n(4569),i=n.n(r);i().defaults.withCredentials=!0;var a=i().create({baseURL:"http://localhost:8081/api/v1/",withCredentials:!0,xsrfCookieName:"_csrf",xsrfHeaderName:"X-XSRF-TOKEN"});a.defaults.headers.common={"X-XSRF-TOKEN":(document.cookie.split(";").map((function(e){return e.trim()})).filter((function(e){return e.startsWith("XSRF-TOKEN=")}))[0]||"").replace("XSRF-TOKEN=","")},a.interceptors.response.use((function(e){return e}),(function(e){throw void 0!==e.response&&403!==e.response.status||(window.location.href="/login"),console.log(e),e})),t.Z=a},8862:function(e,t,n){"use strict";var r=n(5861),i=n(7757),a=n.n(i),o=n(6429),c=n(105),s=n(2808),l=n.n(s),d=n(4569),u=n.n(d);function p(e){return new c.Z(e.public_id,e.firstname,e.lastname,e.password,e.email,e.age,e.country,e.state,e.city,e.gender,e.biography,e.interests,e.friendIdList)}function h(){return(h=(0,r.Z)(a().mark((function e(){var t;return a().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,o.Z.get("/user/all");case 2:return(t=e.sent.data).map((function(e){return p(e)})),e.abrupt("return",t);case 5:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function f(){return(f=(0,r.Z)(a().mark((function e(){var t;return a().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,o.Z.get("/user");case 2:return t=e.sent.data,e.abrupt("return",p(t));case 4:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function m(){return(m=(0,r.Z)(a().mark((function e(t){return a().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,o.Z.post("/user/add",t);case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function v(){return(v=(0,r.Z)(a().mark((function e(t,n,r){var i;return a().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return i={username:t,password:n,"remember-me":r},e.next=3,u().post("http://localhost:8081/login",l().stringify(i),{headers:{"Content-Type":"application/x-www-form-urlencoded"}});case 3:return e.abrupt("return",e.sent);case 4:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function g(){return(g=(0,r.Z)(a().mark((function e(){return a().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,u().post("http://localhost:8081/logout");case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function b(){return(b=(0,r.Z)(a().mark((function e(t){var n;return a().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,o.Z.put("/user",t);case 2:return n=e.sent.data,e.abrupt("return",p(n));case 4:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function w(){return(w=(0,r.Z)(a().mark((function e(){return a().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,o.Z.delete("/user");case 2:case"end":return e.stop()}}),e)})))).apply(this,arguments)}var x={getUsers:function(){return h.apply(this,arguments)},getUser:function(){return f.apply(this,arguments)},signUp:function(e){return m.apply(this,arguments)},login:function(e,t,n){return v.apply(this,arguments)},logout:function(){return g.apply(this,arguments)},updateUser:function(e){return b.apply(this,arguments)},deleteUser:function(){return w.apply(this,arguments)}};t.Z=x},7762:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return O}});var r=n(5671),i=n(3144),a=n(136),o=n(8347),c=n(4721),s=n(2791),l=n(8862),d=n(7391),u=n(4942),p=n(3366),h=n(7462),f=n(767),m=n(2065),v=n(7278),g=n(4223),b=n(184),w=(0,g.Z)((0,b.jsx)("path",{d:"M19 5v14H5V5h14m0-2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2z"}),"CheckBoxOutlineBlank"),x=(0,g.Z)((0,b.jsx)("path",{d:"M19 3H5c-1.11 0-2 .9-2 2v14c0 1.1.89 2 2 2h14c1.11 0 2-.9 2-2V5c0-1.1-.89-2-2-2zm-9 14l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"}),"CheckBox"),Z=(0,g.Z)((0,b.jsx)("path",{d:"M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-2 10H7v-2h10v2z"}),"IndeterminateCheckBox"),y=n(4036),k=n(1402),S=n(7630),C=n(5159);function R(e){return(0,C.Z)("MuiCheckbox",e)}var j=(0,n(208).Z)("MuiCheckbox",["root","checked","disabled","indeterminate","colorPrimary","colorSecondary"]),I=["checkedIcon","color","icon","indeterminate","indeterminateIcon","inputProps","size"],P=(0,S.ZP)(v.Z,{shouldForwardProp:function(e){return(0,S.FO)(e)||"classes"===e},name:"MuiCheckbox",slot:"Root",overridesResolver:function(e,t){var n=e.ownerState;return[t.root,n.indeterminate&&t.indeterminate,"default"!==n.color&&t["color".concat((0,y.Z)(n.color))]]}})((function(e){var t,n=e.theme,r=e.ownerState;return(0,h.Z)({color:n.palette.text.secondary},!r.disableRipple&&{"&:hover":{backgroundColor:(0,m.Fq)("default"===r.color?n.palette.action.active:n.palette[r.color].main,n.palette.action.hoverOpacity),"@media (hover: none)":{backgroundColor:"transparent"}}},"default"!==r.color&&(t={},(0,u.Z)(t,"&.".concat(j.checked,", &.").concat(j.indeterminate),{color:n.palette[r.color].main}),(0,u.Z)(t,"&.".concat(j.disabled),{color:n.palette.action.disabled}),t))})),F=(0,b.jsx)(x,{}),z=(0,b.jsx)(w,{}),B=(0,b.jsx)(Z,{}),E=s.forwardRef((function(e,t){var n,r,i=(0,k.Z)({props:e,name:"MuiCheckbox"}),a=i.checkedIcon,o=void 0===a?F:a,c=i.color,l=void 0===c?"primary":c,d=i.icon,u=void 0===d?z:d,m=i.indeterminate,v=void 0!==m&&m,g=i.indeterminateIcon,w=void 0===g?B:g,x=i.inputProps,Z=i.size,S=void 0===Z?"medium":Z,C=(0,p.Z)(i,I),j=v?w:u,E=v?w:o,L=(0,h.Z)({},i,{color:l,indeterminate:v,size:S}),M=function(e){var t=e.classes,n=e.indeterminate,r=e.color,i={root:["root",n&&"indeterminate","color".concat((0,y.Z)(r))]},a=(0,f.Z)(i,R,t);return(0,h.Z)({},t,a)}(L);return(0,b.jsx)(P,(0,h.Z)({type:"checkbox",inputProps:(0,h.Z)({"data-indeterminate":v},x),icon:s.cloneElement(j,{fontSize:null!=(n=j.props.fontSize)?n:S}),checkedIcon:s.cloneElement(E,{fontSize:null!=(r=E.props.fontSize)?r:S}),ownerState:L,ref:t},C,{classes:M}))})),L=n(6151),M=n(890),N={"":""},A={margin:"10px"};var _=function(e){return(0,b.jsxs)("div",{style:N,children:[(0,b.jsx)(d.Z,{label:"Email",variant:"filled",type:"email",required:!0,value:e.email,onChange:function(t){return e.updateEmail(t.target.value)},style:A}),(0,b.jsx)("br",{}),(0,b.jsx)(d.Z,{label:"Password",variant:"filled",type:"password",required:!0,value:e.password,onChange:function(t){return e.updatePassword(t.target.value)},style:A}),(0,b.jsx)("br",{}),(0,b.jsx)(E,{id:"remember_me",checked:e.remember_me,onChange:function(t){return e.updateRememberMe(t.target.checked)},inputProps:{"aria-label":"controlled"}}),(0,b.jsx)("label",{htmlFor:"remember_me",children:"Remember me for 30 Days"}),(0,b.jsxs)("div",{children:[(0,b.jsx)(L.Z,{variant:"contained",onClick:function(){return window.location.href="/"},style:A,children:"Cancel"}),(0,b.jsx)(L.Z,{type:"submit",variant:"contained",color:"primary",onClick:e.login,style:A,children:"Login"})]}),(0,b.jsx)(M.Z,{style:{opacity:"0.5",display:"inline-block"},children:"Don't have an account yet?"}),(0,b.jsx)(L.Z,{variant:"text",style:{textTransform:"none",display:"inline-block"},onClick:function(){window.location.href="/signup"},children:"Sign up"})]})},O=function(e){(0,a.Z)(n,e);var t=(0,o.Z)(n);function n(e){var i;return(0,r.Z)(this,n),(i=t.call(this,e)).updateEmail=function(e){i.setState({email:e})},i.updatePassword=function(e){i.setState({password:e})},i.updateRememberMe=function(e){i.setState({remember_me:e})},i.login=function(){l.Z.login(i.state.email,i.state.password,i.state.remember_me).then((function(e){l.Z.getUser().then((function(e){window.location.href="/"})).catch((function(e){alert("Email or Password are wrong")}))})).catch((function(e){alert("Something went wrong")}))},i.state={email:"",password:"",remember_me:!0},i}return(0,i.Z)(n,[{key:"render",value:function(){return(0,b.jsxs)(b.Fragment,{children:[(0,b.jsx)("h1",{children:"Login"}),(0,b.jsx)(c.Z,{}),(0,b.jsx)(_,{email:this.state.email,password:this.state.password,remember_me:this.state.remember_me,updateEmail:this.updateEmail,updatePassword:this.updatePassword,updateRememberMe:this.updateRememberMe,login:this.login})]})}}]),n}(s.Component)},4721:function(e,t,n){"use strict";var r=n(3366),i=n(7462),a=n(2791),o=n(8182),c=n(767),s=n(2065),l=n(7630),d=n(1402),u=n(133),p=n(184),h=["absolute","children","className","component","flexItem","light","orientation","role","textAlign","variant"],f=(0,l.ZP)("div",{name:"MuiDivider",slot:"Root",overridesResolver:function(e,t){var n=e.ownerState;return[t.root,n.absolute&&t.absolute,t[n.variant],n.light&&t.light,"vertical"===n.orientation&&t.vertical,n.flexItem&&t.flexItem,n.children&&t.withChildren,n.children&&"vertical"===n.orientation&&t.withChildrenVertical,"right"===n.textAlign&&"vertical"!==n.orientation&&t.textAlignRight,"left"===n.textAlign&&"vertical"!==n.orientation&&t.textAlignLeft]}})((function(e){var t=e.theme,n=e.ownerState;return(0,i.Z)({margin:0,flexShrink:0,borderWidth:0,borderStyle:"solid",borderColor:t.palette.divider,borderBottomWidth:"thin"},n.absolute&&{position:"absolute",bottom:0,left:0,width:"100%"},n.light&&{borderColor:(0,s.Fq)(t.palette.divider,.08)},"inset"===n.variant&&{marginLeft:72},"middle"===n.variant&&"horizontal"===n.orientation&&{marginLeft:t.spacing(2),marginRight:t.spacing(2)},"middle"===n.variant&&"vertical"===n.orientation&&{marginTop:t.spacing(1),marginBottom:t.spacing(1)},"vertical"===n.orientation&&{height:"100%",borderBottomWidth:0,borderRightWidth:"thin"},n.flexItem&&{alignSelf:"stretch",height:"auto"})}),(function(e){var t=e.theme,n=e.ownerState;return(0,i.Z)({},n.children&&{display:"flex",whiteSpace:"nowrap",textAlign:"center",border:0,"&::before, &::after":{position:"relative",width:"100%",borderTop:"thin solid ".concat(t.palette.divider),top:"50%",content:'""',transform:"translateY(50%)"}})}),(function(e){var t=e.theme,n=e.ownerState;return(0,i.Z)({},n.children&&"vertical"===n.orientation&&{flexDirection:"column","&::before, &::after":{height:"100%",top:"0%",left:"50%",borderTop:0,borderLeft:"thin solid ".concat(t.palette.divider),transform:"translateX(0%)"}})}),(function(e){var t=e.ownerState;return(0,i.Z)({},"right"===t.textAlign&&"vertical"!==t.orientation&&{"&::before":{width:"90%"},"&::after":{width:"10%"}},"left"===t.textAlign&&"vertical"!==t.orientation&&{"&::before":{width:"10%"},"&::after":{width:"90%"}})})),m=(0,l.ZP)("span",{name:"MuiDivider",slot:"Wrapper",overridesResolver:function(e,t){var n=e.ownerState;return[t.wrapper,"vertical"===n.orientation&&t.wrapperVertical]}})((function(e){var t=e.theme,n=e.ownerState;return(0,i.Z)({display:"inline-block",paddingLeft:"calc(".concat(t.spacing(1)," * 1.2)"),paddingRight:"calc(".concat(t.spacing(1)," * 1.2)")},"vertical"===n.orientation&&{paddingTop:"calc(".concat(t.spacing(1)," * 1.2)"),paddingBottom:"calc(".concat(t.spacing(1)," * 1.2)")})})),v=a.forwardRef((function(e,t){var n=(0,d.Z)({props:e,name:"MuiDivider"}),a=n.absolute,s=void 0!==a&&a,l=n.children,v=n.className,g=n.component,b=void 0===g?l?"div":"hr":g,w=n.flexItem,x=void 0!==w&&w,Z=n.light,y=void 0!==Z&&Z,k=n.orientation,S=void 0===k?"horizontal":k,C=n.role,R=void 0===C?"hr"!==b?"separator":void 0:C,j=n.textAlign,I=void 0===j?"center":j,P=n.variant,F=void 0===P?"fullWidth":P,z=(0,r.Z)(n,h),B=(0,i.Z)({},n,{absolute:s,component:b,flexItem:x,light:y,orientation:S,role:R,textAlign:I,variant:F}),E=function(e){var t=e.absolute,n=e.children,r=e.classes,i=e.flexItem,a=e.light,o=e.orientation,s=e.textAlign,l={root:["root",t&&"absolute",e.variant,a&&"light","vertical"===o&&"vertical",i&&"flexItem",n&&"withChildren",n&&"vertical"===o&&"withChildrenVertical","right"===s&&"vertical"!==o&&"textAlignRight","left"===s&&"vertical"!==o&&"textAlignLeft"],wrapper:["wrapper","vertical"===o&&"wrapperVertical"]};return(0,c.Z)(l,u.V,r)}(B);return(0,p.jsx)(f,(0,i.Z)({as:b,className:(0,o.Z)(E.root,v),role:R,ref:t,ownerState:B},z,{children:l?(0,p.jsx)(m,{className:E.wrapper,ownerState:B,children:l}):null}))}));t.Z=v},7278:function(e,t,n){"use strict";n.d(t,{Z:function(){return x}});var r=n(885),i=n(3366),a=n(7462),o=n(2791),c=n(8182),s=n(767),l=n(4036),d=n(7630),u=n(8278),p=n(2930),h=n(3701),f=n(5159);function m(e){return(0,f.Z)("PrivateSwitchBase",e)}(0,n(208).Z)("PrivateSwitchBase",["root","checked","disabled","input","edgeStart","edgeEnd"]);var v=n(184),g=["autoFocus","checked","checkedIcon","className","defaultChecked","disabled","disableFocusRipple","edge","icon","id","inputProps","inputRef","name","onBlur","onChange","onFocus","readOnly","required","tabIndex","type","value"],b=(0,d.ZP)(h.Z)((function(e){var t=e.ownerState;return(0,a.Z)({padding:9,borderRadius:"50%"},"start"===t.edge&&{marginLeft:"small"===t.size?-3:-12},"end"===t.edge&&{marginRight:"small"===t.size?-3:-12})})),w=(0,d.ZP)("input")({cursor:"inherit",position:"absolute",opacity:0,width:"100%",height:"100%",top:0,left:0,margin:0,padding:0,zIndex:1}),x=o.forwardRef((function(e,t){var n=e.autoFocus,o=e.checked,d=e.checkedIcon,h=e.className,f=e.defaultChecked,x=e.disabled,Z=e.disableFocusRipple,y=void 0!==Z&&Z,k=e.edge,S=void 0!==k&&k,C=e.icon,R=e.id,j=e.inputProps,I=e.inputRef,P=e.name,F=e.onBlur,z=e.onChange,B=e.onFocus,E=e.readOnly,L=e.required,M=e.tabIndex,N=e.type,A=e.value,_=(0,i.Z)(e,g),O=(0,u.Z)({controlled:o,default:Boolean(f),name:"SwitchBase",state:"checked"}),T=(0,r.Z)(O,2),V=T[0],q=T[1],U=(0,p.Z)(),W=x;U&&"undefined"===typeof W&&(W=U.disabled);var X="checkbox"===N||"radio"===N,D=(0,a.Z)({},e,{checked:V,disabled:W,disableFocusRipple:y,edge:S}),H=function(e){var t=e.classes,n=e.checked,r=e.disabled,i=e.edge,a={root:["root",n&&"checked",r&&"disabled",i&&"edge".concat((0,l.Z)(i))],input:["input"]};return(0,s.Z)(a,m,t)}(D);return(0,v.jsxs)(b,(0,a.Z)({component:"span",className:(0,c.Z)(H.root,h),centerRipple:!0,focusRipple:!y,disabled:W,tabIndex:null,role:void 0,onFocus:function(e){B&&B(e),U&&U.onFocus&&U.onFocus(e)},onBlur:function(e){F&&F(e),U&&U.onBlur&&U.onBlur(e)},ownerState:D,ref:t},_,{children:[(0,v.jsx)(w,(0,a.Z)({autoFocus:n,checked:o,defaultChecked:f,className:H.input,disabled:W,id:X&&R,name:P,onChange:function(e){if(!e.nativeEvent.defaultPrevented){var t=e.target.checked;q(t),z&&z(e,t)}},readOnly:E,ref:I,required:L,ownerState:D,tabIndex:M,type:N},"checkbox"===N&&void 0===A?{}:{value:A},j)),V?d:C]}))}))},4654:function(){}}]);
//# sourceMappingURL=35.fb299bc4.chunk.js.map