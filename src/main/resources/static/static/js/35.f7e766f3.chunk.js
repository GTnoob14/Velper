(self.webpackChunkconnectionreactfrontend=self.webpackChunkconnectionreactfrontend||[]).push([[35],{105:function(e,t,n){"use strict";var r=n(3144),i=n(5671),a=(0,r.Z)((function e(t,n,r,a,o,c,s,l,u,d,p,h){(0,i.Z)(this,e),this.public_id=t,this.firstname=n,this.lastname=r,this.password=a,this.email=o,this.age=c,this.country=s,this.state=l,this.city=u,this.biography=d,this.interests=p,this.friendIdList=h}));t.Z=a},6429:function(e,t,n){"use strict";var r=n(4569),i=n.n(r);i().defaults.withCredentials=!0;var a=i().create({baseURL:"http://localhost:8081/api/v1/",withCredentials:!0,xsrfCookieName:"_csrf",xsrfHeaderName:"X-XSRF-TOKEN"});a.defaults.headers.common={"X-XSRF-TOKEN":(document.cookie.split(";").map((function(e){return e.trim()})).filter((function(e){return e.startsWith("XSRF-TOKEN=")}))[0]||"").replace("XSRF-TOKEN=","")},a.interceptors.response.use((function(e){return e}),(function(e){throw void 0!==e.response&&403!==e.response.status||(window.location.href="/login"),console.log(e),e})),t.Z=a},8862:function(e,t,n){"use strict";var r=n(5861),i=n(7757),a=n.n(i),o=n(6429),c=n(105),s=n(2808),l=n.n(s),u=n(4569),d=n.n(u);function p(e){return new c.Z(e.public_id,e.firstname,e.lastname,e.password,e.email,e.age,e.country,e.state,e.city,e.biography,e.interests,e.friendIdList)}function h(){return(h=(0,r.Z)(a().mark((function e(){var t;return a().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,o.Z.get("/user/all");case 2:return(t=e.sent.data).map((function(e){return p(e)})),e.abrupt("return",t);case 5:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function f(){return(f=(0,r.Z)(a().mark((function e(){var t;return a().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,o.Z.get("/user");case 2:return t=e.sent.data,e.abrupt("return",p(t));case 4:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function m(){return(m=(0,r.Z)(a().mark((function e(t){return a().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,o.Z.post("/user/add",t);case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function v(){return(v=(0,r.Z)(a().mark((function e(t,n,r){var i;return a().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return i={username:t,password:n,"remember-me":r},e.next=3,d().post("http://localhost:8081/login",l().stringify(i),{headers:{"Content-Type":"application/x-www-form-urlencoded"}});case 3:return e.abrupt("return",e.sent);case 4:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function g(){return(g=(0,r.Z)(a().mark((function e(){return a().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,d().post("http://localhost:8081/logout");case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function w(){return(w=(0,r.Z)(a().mark((function e(t){var n;return a().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,o.Z.put("/user",t);case 2:return n=e.sent.data,e.abrupt("return",p(n));case 4:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function b(){return(b=(0,r.Z)(a().mark((function e(){return a().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,o.Z.delete("/user");case 2:case"end":return e.stop()}}),e)})))).apply(this,arguments)}var x={getUsers:function(){return h.apply(this,arguments)},getUser:function(){return f.apply(this,arguments)},signUp:function(e){return m.apply(this,arguments)},login:function(e,t,n){return v.apply(this,arguments)},logout:function(){return g.apply(this,arguments)},updateUser:function(e){return w.apply(this,arguments)},deleteUser:function(){return b.apply(this,arguments)}};t.Z=x},7762:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return _}});var r=n(5671),i=n(3144),a=n(136),o=n(8347),c=n(4721),s=n(2791),l=n(8862),u=n(7391),d=n(4942),p=n(3366),h=n(7462),f=n(767),m=n(2065),v=n(7278),g=n(4223),w=n(184),b=(0,g.Z)((0,w.jsx)("path",{d:"M19 5v14H5V5h14m0-2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2z"}),"CheckBoxOutlineBlank"),x=(0,g.Z)((0,w.jsx)("path",{d:"M19 3H5c-1.11 0-2 .9-2 2v14c0 1.1.89 2 2 2h14c1.11 0 2-.9 2-2V5c0-1.1-.89-2-2-2zm-9 14l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"}),"CheckBox"),Z=(0,g.Z)((0,w.jsx)("path",{d:"M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-2 10H7v-2h10v2z"}),"IndeterminateCheckBox"),y=n(4036),k=n(1402),C=n(7630),S=n(5159);function R(e){return(0,S.Z)("MuiCheckbox",e)}var j=(0,n(208).Z)("MuiCheckbox",["root","checked","disabled","indeterminate","colorPrimary","colorSecondary"]),I=["checkedIcon","color","icon","indeterminate","indeterminateIcon","inputProps","size"],P=(0,C.ZP)(v.Z,{shouldForwardProp:function(e){return(0,C.FO)(e)||"classes"===e},name:"MuiCheckbox",slot:"Root",overridesResolver:function(e,t){var n=e.ownerState;return[t.root,n.indeterminate&&t.indeterminate,"default"!==n.color&&t["color".concat((0,y.Z)(n.color))]]}})((function(e){var t,n=e.theme,r=e.ownerState;return(0,h.Z)({color:n.palette.text.secondary},!r.disableRipple&&{"&:hover":{backgroundColor:(0,m.Fq)("default"===r.color?n.palette.action.active:n.palette[r.color].main,n.palette.action.hoverOpacity),"@media (hover: none)":{backgroundColor:"transparent"}}},"default"!==r.color&&(t={},(0,d.Z)(t,"&.".concat(j.checked,", &.").concat(j.indeterminate),{color:n.palette[r.color].main}),(0,d.Z)(t,"&.".concat(j.disabled),{color:n.palette.action.disabled}),t))})),F=(0,w.jsx)(x,{}),z=(0,w.jsx)(b,{}),B=(0,w.jsx)(Z,{}),M=s.forwardRef((function(e,t){var n,r,i=(0,k.Z)({props:e,name:"MuiCheckbox"}),a=i.checkedIcon,o=void 0===a?F:a,c=i.color,l=void 0===c?"primary":c,u=i.icon,d=void 0===u?z:u,m=i.indeterminate,v=void 0!==m&&m,g=i.indeterminateIcon,b=void 0===g?B:g,x=i.inputProps,Z=i.size,C=void 0===Z?"medium":Z,S=(0,p.Z)(i,I),j=v?b:d,M=v?b:o,A=(0,h.Z)({},i,{color:l,indeterminate:v,size:C}),L=function(e){var t=e.classes,n=e.indeterminate,r=e.color,i={root:["root",n&&"indeterminate","color".concat((0,y.Z)(r))]},a=(0,f.Z)(i,R,t);return(0,h.Z)({},t,a)}(A);return(0,w.jsx)(P,(0,h.Z)({type:"checkbox",inputProps:(0,h.Z)({"data-indeterminate":v},x),icon:s.cloneElement(j,{fontSize:null!=(n=j.props.fontSize)?n:C}),checkedIcon:s.cloneElement(M,{fontSize:null!=(r=M.props.fontSize)?r:C}),ownerState:A,ref:t},S,{classes:L}))})),A=n(6151),L=n(890),E={"":""},N={margin:"10px"};var V=function(e){return(0,w.jsxs)("div",{style:E,children:[(0,w.jsx)(u.Z,{label:"Email",variant:"filled",type:"email",required:!0,value:e.email,onChange:function(t){return e.updateEmail(t.target.value)},style:N}),(0,w.jsx)("br",{}),(0,w.jsx)(u.Z,{label:"Password",variant:"filled",type:"password",required:!0,value:e.password,onChange:function(t){return e.updatePassword(t.target.value)},style:N}),(0,w.jsx)("br",{}),(0,w.jsx)(M,{id:"remember_me",checked:e.remember_me,onChange:function(t){return e.updateRememberMe(t.target.checked)},inputProps:{"aria-label":"controlled"}}),(0,w.jsx)("label",{htmlFor:"remember_me",children:"Remember me for 30 Days"}),(0,w.jsxs)("div",{children:[(0,w.jsx)(A.Z,{variant:"contained",onClick:function(){return window.location.href="/"},style:N,children:"Cancel"}),(0,w.jsx)(A.Z,{type:"submit",variant:"contained",color:"primary",onClick:e.login,style:N,children:"Login"})]}),(0,w.jsx)(L.Z,{style:{opacity:"0.5",display:"inline-block"},children:"Don't have an account yet?"}),(0,w.jsx)(A.Z,{variant:"text",style:{textTransform:"none",display:"inline-block"},onClick:function(){window.location.href="/signup"},children:"Sign up"})]})},_=function(e){(0,a.Z)(n,e);var t=(0,o.Z)(n);function n(e){var i;return(0,r.Z)(this,n),(i=t.call(this,e)).updateEmail=function(e){i.setState({email:e})},i.updatePassword=function(e){i.setState({password:e})},i.updateRememberMe=function(e){i.setState({remember_me:e})},i.login=function(){l.Z.login(i.state.email,i.state.password,i.state.remember_me).then((function(e){l.Z.getUser().then((function(e){window.location.href="/"})).catch((function(e){alert("Email or Password are wrong")}))})).catch((function(e){alert("Something went wrong")}))},i.state={email:"",password:"",remember_me:!0},i}return(0,i.Z)(n,[{key:"render",value:function(){return(0,w.jsxs)(w.Fragment,{children:[(0,w.jsx)("h1",{children:"Login"}),(0,w.jsx)(c.Z,{}),(0,w.jsx)(V,{email:this.state.email,password:this.state.password,remember_me:this.state.remember_me,updateEmail:this.updateEmail,updatePassword:this.updatePassword,updateRememberMe:this.updateRememberMe,login:this.login})]})}}]),n}(s.Component)},4721:function(e,t,n){"use strict";var r=n(3366),i=n(7462),a=n(2791),o=n(8182),c=n(767),s=n(2065),l=n(7630),u=n(1402),d=n(133),p=n(184),h=["absolute","children","className","component","flexItem","light","orientation","role","textAlign","variant"],f=(0,l.ZP)("div",{name:"MuiDivider",slot:"Root",overridesResolver:function(e,t){var n=e.ownerState;return[t.root,n.absolute&&t.absolute,t[n.variant],n.light&&t.light,"vertical"===n.orientation&&t.vertical,n.flexItem&&t.flexItem,n.children&&t.withChildren,n.children&&"vertical"===n.orientation&&t.withChildrenVertical,"right"===n.textAlign&&"vertical"!==n.orientation&&t.textAlignRight,"left"===n.textAlign&&"vertical"!==n.orientation&&t.textAlignLeft]}})((function(e){var t=e.theme,n=e.ownerState;return(0,i.Z)({margin:0,flexShrink:0,borderWidth:0,borderStyle:"solid",borderColor:t.palette.divider,borderBottomWidth:"thin"},n.absolute&&{position:"absolute",bottom:0,left:0,width:"100%"},n.light&&{borderColor:(0,s.Fq)(t.palette.divider,.08)},"inset"===n.variant&&{marginLeft:72},"middle"===n.variant&&"horizontal"===n.orientation&&{marginLeft:t.spacing(2),marginRight:t.spacing(2)},"middle"===n.variant&&"vertical"===n.orientation&&{marginTop:t.spacing(1),marginBottom:t.spacing(1)},"vertical"===n.orientation&&{height:"100%",borderBottomWidth:0,borderRightWidth:"thin"},n.flexItem&&{alignSelf:"stretch",height:"auto"})}),(function(e){var t=e.theme,n=e.ownerState;return(0,i.Z)({},n.children&&{display:"flex",whiteSpace:"nowrap",textAlign:"center",border:0,"&::before, &::after":{position:"relative",width:"100%",borderTop:"thin solid ".concat(t.palette.divider),top:"50%",content:'""',transform:"translateY(50%)"}})}),(function(e){var t=e.theme,n=e.ownerState;return(0,i.Z)({},n.children&&"vertical"===n.orientation&&{flexDirection:"column","&::before, &::after":{height:"100%",top:"0%",left:"50%",borderTop:0,borderLeft:"thin solid ".concat(t.palette.divider),transform:"translateX(0%)"}})}),(function(e){var t=e.ownerState;return(0,i.Z)({},"right"===t.textAlign&&"vertical"!==t.orientation&&{"&::before":{width:"90%"},"&::after":{width:"10%"}},"left"===t.textAlign&&"vertical"!==t.orientation&&{"&::before":{width:"10%"},"&::after":{width:"90%"}})})),m=(0,l.ZP)("span",{name:"MuiDivider",slot:"Wrapper",overridesResolver:function(e,t){var n=e.ownerState;return[t.wrapper,"vertical"===n.orientation&&t.wrapperVertical]}})((function(e){var t=e.theme,n=e.ownerState;return(0,i.Z)({display:"inline-block",paddingLeft:"calc(".concat(t.spacing(1)," * 1.2)"),paddingRight:"calc(".concat(t.spacing(1)," * 1.2)")},"vertical"===n.orientation&&{paddingTop:"calc(".concat(t.spacing(1)," * 1.2)"),paddingBottom:"calc(".concat(t.spacing(1)," * 1.2)")})})),v=a.forwardRef((function(e,t){var n=(0,u.Z)({props:e,name:"MuiDivider"}),a=n.absolute,s=void 0!==a&&a,l=n.children,v=n.className,g=n.component,w=void 0===g?l?"div":"hr":g,b=n.flexItem,x=void 0!==b&&b,Z=n.light,y=void 0!==Z&&Z,k=n.orientation,C=void 0===k?"horizontal":k,S=n.role,R=void 0===S?"hr"!==w?"separator":void 0:S,j=n.textAlign,I=void 0===j?"center":j,P=n.variant,F=void 0===P?"fullWidth":P,z=(0,r.Z)(n,h),B=(0,i.Z)({},n,{absolute:s,component:w,flexItem:x,light:y,orientation:C,role:R,textAlign:I,variant:F}),M=function(e){var t=e.absolute,n=e.children,r=e.classes,i=e.flexItem,a=e.light,o=e.orientation,s=e.textAlign,l={root:["root",t&&"absolute",e.variant,a&&"light","vertical"===o&&"vertical",i&&"flexItem",n&&"withChildren",n&&"vertical"===o&&"withChildrenVertical","right"===s&&"vertical"!==o&&"textAlignRight","left"===s&&"vertical"!==o&&"textAlignLeft"],wrapper:["wrapper","vertical"===o&&"wrapperVertical"]};return(0,c.Z)(l,d.V,r)}(B);return(0,p.jsx)(f,(0,i.Z)({as:w,className:(0,o.Z)(M.root,v),role:R,ref:t,ownerState:B},z,{children:l?(0,p.jsx)(m,{className:M.wrapper,ownerState:B,children:l}):null}))}));t.Z=v},133:function(e,t,n){"use strict";n.d(t,{V:function(){return i}});var r=n(5159);function i(e){return(0,r.Z)("MuiDivider",e)}var a=(0,n(208).Z)("MuiDivider",["root","absolute","fullWidth","inset","middle","flexItem","light","vertical","withChildren","withChildrenVertical","textAlignRight","textAlignLeft","wrapper","wrapperVertical"]);t.Z=a},7278:function(e,t,n){"use strict";n.d(t,{Z:function(){return x}});var r=n(885),i=n(3366),a=n(7462),o=n(2791),c=n(8182),s=n(767),l=n(4036),u=n(7630),d=n(8278),p=n(2930),h=n(3701),f=n(5159);function m(e){return(0,f.Z)("PrivateSwitchBase",e)}(0,n(208).Z)("PrivateSwitchBase",["root","checked","disabled","input","edgeStart","edgeEnd"]);var v=n(184),g=["autoFocus","checked","checkedIcon","className","defaultChecked","disabled","disableFocusRipple","edge","icon","id","inputProps","inputRef","name","onBlur","onChange","onFocus","readOnly","required","tabIndex","type","value"],w=(0,u.ZP)(h.Z)((function(e){var t=e.ownerState;return(0,a.Z)({padding:9,borderRadius:"50%"},"start"===t.edge&&{marginLeft:"small"===t.size?-3:-12},"end"===t.edge&&{marginRight:"small"===t.size?-3:-12})})),b=(0,u.ZP)("input")({cursor:"inherit",position:"absolute",opacity:0,width:"100%",height:"100%",top:0,left:0,margin:0,padding:0,zIndex:1}),x=o.forwardRef((function(e,t){var n=e.autoFocus,o=e.checked,u=e.checkedIcon,h=e.className,f=e.defaultChecked,x=e.disabled,Z=e.disableFocusRipple,y=void 0!==Z&&Z,k=e.edge,C=void 0!==k&&k,S=e.icon,R=e.id,j=e.inputProps,I=e.inputRef,P=e.name,F=e.onBlur,z=e.onChange,B=e.onFocus,M=e.readOnly,A=e.required,L=e.tabIndex,E=e.type,N=e.value,V=(0,i.Z)(e,g),_=(0,d.Z)({controlled:o,default:Boolean(f),name:"SwitchBase",state:"checked"}),O=(0,r.Z)(_,2),T=O[0],D=O[1],W=(0,p.Z)(),q=x;W&&"undefined"===typeof q&&(q=W.disabled);var U="checkbox"===E||"radio"===E,X=(0,a.Z)({},e,{checked:T,disabled:q,disableFocusRipple:y,edge:C}),H=function(e){var t=e.classes,n=e.checked,r=e.disabled,i=e.edge,a={root:["root",n&&"checked",r&&"disabled",i&&"edge".concat((0,l.Z)(i))],input:["input"]};return(0,s.Z)(a,m,t)}(X);return(0,v.jsxs)(w,(0,a.Z)({component:"span",className:(0,c.Z)(H.root,h),centerRipple:!0,focusRipple:!y,disabled:q,tabIndex:null,role:void 0,onFocus:function(e){B&&B(e),W&&W.onFocus&&W.onFocus(e)},onBlur:function(e){F&&F(e),W&&W.onBlur&&W.onBlur(e)},ownerState:X,ref:t},V,{children:[(0,v.jsx)(b,(0,a.Z)({autoFocus:n,checked:o,defaultChecked:f,className:H.input,disabled:q,id:U&&R,name:P,onChange:function(e){if(!e.nativeEvent.defaultPrevented){var t=e.target.checked;D(t),z&&z(e,t)}},readOnly:M,ref:I,required:A,ownerState:X,tabIndex:L,type:E},"checkbox"===E&&void 0===N?{}:{value:N},j)),T?u:S]}))}))},4654:function(){}}]);
//# sourceMappingURL=35.f7e766f3.chunk.js.map