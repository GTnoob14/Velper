"use strict";(self.webpackChunkconnectionreactfrontend=self.webpackChunkconnectionreactfrontend||[]).push([[383],{105:function(e,t,n){var r=n(3144),i=n(5671),s=(0,r.Z)((function e(t,n,r,s,a,o,c,l,u,d,h,f){(0,i.Z)(this,e),this.public_id=t,this.firstname=n,this.lastname=r,this.password=s,this.email=a,this.age=o,this.country=c,this.state=l,this.city=u,this.biography=d,this.interests=h,this.friendIdList=f}));t.Z=s},6429:function(e,t,n){var r=n(4569),i=n.n(r);i().defaults.withCredentials=!0;var s=i().create({baseURL:"http://localhost:8081/api/v1/",withCredentials:!0,xsrfCookieName:"_csrf",xsrfHeaderName:"X-XSRF-TOKEN"});s.defaults.headers.common={"X-XSRF-TOKEN":(document.cookie.split(";").map((function(e){return e.trim()})).filter((function(e){return e.startsWith("XSRF-TOKEN=")}))[0]||"").replace("XSRF-TOKEN=","")},s.interceptors.response.use((function(e){return e}),(function(e){throw void 0!==e.response&&403!==e.response.status||(window.location.href="/login"),console.log(e),e})),t.Z=s},4466:function(e,t,n){var r=n(5861),i=n(7757),s=n.n(i),a=n(6429),o=n(105);function c(e){return e.data.map((function(e){return new o.Z(e.public_id,e.firstname,e.lastname,null,e.email,e.age,e.country,e.state,e.city,e.biography,e.interests,null)}))}function l(){return(l=(0,r.Z)(s().mark((function e(t,n,r){var i,o;return s().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,a.Z.get("/user/friends/find",{params:{scope:t.enum,mutualFriends:n,similarInterests:r}});case 2:return i=e.sent,o=c(i),e.abrupt("return",o);case 5:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function u(){return(u=(0,r.Z)(s().mark((function e(){var t,n;return s().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,a.Z.get("/user/friends/find");case 2:return t=e.sent,n=c(t),e.abrupt("return",n);case 5:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function d(){return(d=(0,r.Z)(s().mark((function e(){var t,n;return s().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,a.Z.get("/user/friends");case 2:return t=e.sent,n=c(t),e.abrupt("return",n);case 5:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function h(){return(h=(0,r.Z)(s().mark((function e(t){return s().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,a.Z.post("/user/friends/".concat(t));case 2:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function f(){return(f=(0,r.Z)(s().mark((function e(t){return s().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,a.Z.delete("/user/friends/".concat(t));case 2:case"end":return e.stop()}}),e)})))).apply(this,arguments)}var p={findFriends:function(){return u.apply(this,arguments)},findFriendsWithSettings:function(e,t,n){return l.apply(this,arguments)},getFriends:function(){return d.apply(this,arguments)},addFriend:function(e){return h.apply(this,arguments)},removeFriend:function(e){return f.apply(this,arguments)}};t.Z=p},5383:function(e,t,n){n.r(t),n.d(t,{default:function(){return _}});var r=n(5861),i=n(5671),s=n(3144),a=n(136),o=n(8347),c=n(7757),l=n.n(c),u=n(2791),d=n(4466),h=n(9775),f=n(2731),p={CITY:{enum:0,name:"City"},STATE:{enum:1,name:"State"},COUNTRY:{enum:2,name:"Country"},GLOBAL:{enum:3,name:"Global"}},x=n(4721),m=n(8870),Z=n(3400),g=n(4663),j=n(7122),v=n(7630),y=n(5519),b=n(890),C=n(7112),k=n(8096),w=n(4925),S=n(4377),F=n(5022),O=n(5523),T=n(9955),I=n(6151),R=n(184),L=function(e){(0,a.Z)(n,e);var t=(0,o.Z)(n);function n(e){var r;return(0,i.Z)(this,n),(r=t.call(this,e)).mfChange=function(){r.setState({mfChecked:!r.state.mfChecked})},r.siChange=function(){r.setState({siChecked:!r.state.siChecked})},r.scopeChange=function(e){r.setState({scope:e})},r.state={mfChecked:!0,siChecked:!0,scope:p.CITY},r}return(0,s.Z)(n,[{key:"render",value:function(){var e=this;return(0,R.jsxs)("div",{style:{textAlign:"center"},children:[(0,R.jsx)("h1",{children:"Search Settings"}),(0,R.jsx)(x.Z,{}),(0,R.jsxs)(k.Z,{style:{margin:"20px"},children:[(0,R.jsx)(w.Z,{id:"scope-search-options",children:"Scope"}),(0,R.jsx)(S.Z,{labelId:"scope-search-options",value:this.state.scope,label:"Scope",onChange:function(t){return e.scopeChange(t.target.value)},children:Object.values(p).map((function(e){return(0,R.jsx)(F.Z,{value:e,children:e.name},e.enum)}))}),(0,R.jsx)(O.Z,{control:(0,R.jsx)(T.Z,{checked:this.state.mfChecked,onChange:this.mfChange}),label:"Prioritize Mutual Friends",labelPlacement:"start"}),(0,R.jsx)(O.Z,{control:(0,R.jsx)(T.Z,{checked:this.state.siChecked,onChange:this.siChange}),label:"Look for similar Interests",labelPlacement:"start"}),(0,R.jsx)(I.Z,{variant:"contained",onClick:function(){return e.props.submit(e.state.scope,e.state.mfChecked,e.state.siChecked)},children:"Submit"})]})]})}}]),n}(u.Component),N=(0,v.ZP)(m.Z)((function(e){return{backgroundColor:"light"===e.theme.palette.mode?"#fff":y.Z[800]}})),P=(0,v.ZP)(m.Z)((function(e){return{width:30,height:6,backgroundColor:"light"===e.theme.palette.mode?y.Z[300]:y.Z[900],borderRadius:3,position:"absolute",top:8,left:"calc(50% - 15px)"}}));var G=function(e){return(0,R.jsxs)(C.Z,{anchor:"bottom",open:e.open,onClose:function(){return e.toggleDrawer(!1)},onOpen:function(){return e.toggleDrawer(!0)},ModalProps:{keepMounted:!0},children:[(0,R.jsxs)(N,{sx:{position:"absolute",top:-56,borderTopLeftRadius:8,borderTopRightRadius:8,visibility:"visible",right:0,left:0},children:[(0,R.jsx)(P,{}),(0,R.jsx)(b.Z,{sx:{p:2,color:"text.secondary"},children:"Search Options"})]}),(0,R.jsx)(N,{sx:{px:2,pb:2,height:"100%",overflow:"auto"},children:(0,R.jsx)(L,{submit:e.changeSearchOptions})})]})},X=function(e){(0,a.Z)(n,e);var t=(0,o.Z)(n);function n(e){var r;return(0,i.Z)(this,n),(r=t.call(this,e)).toggleOpen=function(e){r.setState({open:e})},r.next=function(){r.setState({index:r.state.index+1})},r.addToFriends=function(e){d.Z.addFriend(e).then((function(t){console.log("Added friend ".concat(e," ").concat(t))}))},r.changeSearchOptions=function(e,t,n){r.setState({scope:e,mutualFriends:t,similarInterests:n},r.findFriends),r.toggleOpen(!1)},r.state={friends:[],index:0,scope:p.CITY,mutualFriends:!0,similarInterests:!0,open:!1},r}return(0,s.Z)(n,[{key:"findFriends",value:function(){var e=(0,r.Z)(l().mark((function e(){var t=this;return l().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:d.Z.findFriendsWithSettings(this.state.scope,this.state.mutualFriends,this.state.similarInterests).then((function(e){console.log(e),t.setState({friends:e})})).catch((function(e){return console.log(e)}));case 1:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"componentDidMount",value:function(){this.findFriends()}},{key:"render",value:function(){if(0===this.state.friends.length||this.state.index>=this.state.friends.length)return(0,R.jsxs)("div",{children:[(0,R.jsx)(m.Z,{sx:{flexGrow:1},children:(0,R.jsxs)(g.Z,{children:[(0,R.jsx)("h1",{style:{flexGrow:1},children:"Find"}),(0,R.jsx)(Z.Z,{edge:"end",onClick:this.toggleOpen,children:(0,R.jsx)(j.Z,{})})]})}),(0,R.jsx)(x.Z,{}),(0,R.jsx)("h1",{children:"We can't find any new friends for you right now. Sorry :/"}),(0,R.jsx)(G,{open:this.state.open,toggleDrawer:this.toggleOpen,changeSearchOptions:this.changeSearchOptions}),(0,R.jsx)(h.Z,{value:"find"})]});var e=this.state.friends[this.state.index];return console.log(e),(0,R.jsxs)(R.Fragment,{children:[(0,R.jsx)(m.Z,{sx:{flexGrow:1},children:(0,R.jsxs)(g.Z,{children:[(0,R.jsx)("h1",{style:{flexGrow:1},children:"Find"}),(0,R.jsx)(Z.Z,{edge:"end",onClick:this.toggleOpen,children:(0,R.jsx)(j.Z,{})})]})}),(0,R.jsx)(x.Z,{}),(0,R.jsxs)("div",{align:"center",style:{margin:"20px"},children:[(0,R.jsx)(f.Z,{public_id:e.public_id,firstname:e.firstname,lastname:e.lastname,age:e.age,email:e.email,country:e.country,state:e.state,city:e.city,biography:e.biography,interests:e.interests,addToFriends:this.addToFriends,next:this.next,friend:!0}),(0,R.jsx)(G,{open:this.state.open,toggleDrawer:this.toggleOpen,changeSearchOptions:this.changeSearchOptions}),(0,R.jsx)(h.Z,{value:"find"})]})]})}}]),n}(u.Component),_=X},2731:function(e,t,n){var r=n(2982),i=(n(2791),n(7621)),s=n(9504),a=n(890),o=n(6647),c=n(8870),l=n(1918),u=n(2363),d=n(6151),h=n(184);t.Z=function(e){return(0,h.jsxs)(i.Z,{sx:{maxWidth:345},children:[(0,h.jsx)(o.Z,{children:(0,h.jsxs)(s.Z,{children:[(0,h.jsx)(a.Z,{gutterBottom:!0,variant:"h5",component:"div",children:"".concat(e.firstname," ").concat(e.lastname," (").concat(e.age,")")}),(0,h.jsx)(a.Z,{variant:"body2",color:"text.secondary",children:"".concat(e.city,", ").concat(e.country," (").concat(e.state,")")}),(0,h.jsx)(a.Z,{variant:"body1",color:"text.primary",style:{textJustify:"inter-character"},children:e.biography}),(0,h.jsx)(c.Z,{children:(0,r.Z)(e.interests).map((function(e){return(0,h.jsx)(l.Z,{style:{margin:"5px"},label:e.interest,variant:"outlined"},e.id)}))})]})}),e.friend?(0,h.jsxs)(u.Z,{style:{justifyContent:"center"},children:[(0,h.jsx)(d.Z,{size:"small",color:"primary",variant:"contained",onClick:function(){e.addToFriends(e.public_id),e.next()},children:"Add"}),(0,h.jsx)(d.Z,{size:"small",color:"error",variant:"contained",onClick:e.next,children:"Skip"})]}):(0,h.jsx)(u.Z,{style:{justifyContent:"center",marginBottom:"15px"},children:(0,h.jsx)(d.Z,{size:"small",color:e.close?"warning":"primary",variant:"contained",onClick:e.updateUser,children:e.close?"Close":"Update"})})]})}},9775:function(e,t,n){var r=n(885),i=n(2791),s=n(8870),a=n(703),o=n(7849),c=n(9646),l=n(5403),u=n(8326),d=n(501),h=n(6871),f=n(184);t.Z=function(e){var t=i.useState(e.value||0),n=(0,r.Z)(t,2),p=n[0],x=n[1],m=(0,h.s0)();return(0,f.jsx)(s.Z,{children:(0,f.jsx)(a.Z,{sx:{position:"fixed",bottom:0,left:0,right:0},elevation:3,children:(0,f.jsxs)(o.Z,{showLabels:!0,value:p,onChange:function(e,t){m("/".concat(t)),x(t)},children:[(0,f.jsx)(c.Z,{value:"find",label:"Find",icon:(0,f.jsx)(l.Z,{})}),(0,f.jsx)(c.Z,{value:"chat",label:"Chat",icon:(0,f.jsx)(u.Z,{})}),(0,f.jsx)(c.Z,{value:"profile",label:"Profile",icon:(0,f.jsx)(d.Z,{})})]})})})}}}]);
//# sourceMappingURL=383.0daa8c4d.chunk.js.map