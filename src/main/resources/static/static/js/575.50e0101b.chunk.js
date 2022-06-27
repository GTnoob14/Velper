"use strict";(self.webpackChunkconnectionreactfrontend=self.webpackChunkconnectionreactfrontend||[]).push([[575],{8326:function(t,e,o){var r=o(5318);e.Z=void 0;var n=r(o(5649)),i=o(184),a=(0,n.default)((0,i.jsx)("path",{d:"M20 2H4c-1.1 0-1.99.9-1.99 2L2 22l4-4h14c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zM6 9h12v2H6V9zm8 5H6v-2h8v2zm4-6H6V6h12v2z"}),"Chat");e.Z=a},501:function(t,e,o){var r=o(5318);e.Z=void 0;var n=r(o(5649)),i=o(184),a=(0,n.default)((0,i.jsx)("path",{d:"M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"}),"Person");e.Z=a},5403:function(t,e,o){var r=o(5318);e.Z=void 0;var n=r(o(5649)),i=o(184),a=(0,n.default)((0,i.jsx)("path",{d:"M15.5 14h-.79l-.28-.27C15.41 12.59 16 11.11 16 9.5 16 5.91 13.09 3 9.5 3S3 5.91 3 9.5 5.91 16 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z"}),"Search");e.Z=a},9646:function(t,e,o){o.d(e,{Z:function(){return b}});var r=o(4942),n=o(3366),i=o(7462),a=o(2791),l=o(8182),s=o(767),c=o(7630),d=o(1402),u=o(3701),v=o(5159);function f(t){return(0,v.Z)("MuiBottomNavigationAction",t)}var p=(0,o(208).Z)("MuiBottomNavigationAction",["root","iconOnly","selected","label"]),h=o(184),m=["className","icon","label","onChange","onClick","selected","showLabel","value"],g=(0,c.ZP)(u.Z,{name:"MuiBottomNavigationAction",slot:"Root",overridesResolver:function(t,e){var o=t.ownerState;return[e.root,!o.showLabel&&!o.selected&&e.iconOnly]}})((function(t){var e=t.theme,o=t.ownerState;return(0,i.Z)({transition:e.transitions.create(["color","padding-top"],{duration:e.transitions.duration.short}),padding:"0px 12px",minWidth:80,maxWidth:168,color:(e.vars||e).palette.text.secondary,flexDirection:"column",flex:"1"},!o.showLabel&&!o.selected&&{paddingTop:14},!o.showLabel&&!o.selected&&!o.label&&{paddingTop:0},(0,r.Z)({},"&.".concat(p.selected),{color:(e.vars||e).palette.primary.main}))})),Z=(0,c.ZP)("span",{name:"MuiBottomNavigationAction",slot:"Label",overridesResolver:function(t,e){return e.label}})((function(t){var e=t.theme,o=t.ownerState;return(0,i.Z)({fontFamily:e.typography.fontFamily,fontSize:e.typography.pxToRem(12),opacity:1,transition:"font-size 0.2s, opacity 0.2s",transitionDelay:"0.1s"},!o.showLabel&&!o.selected&&{opacity:0,transitionDelay:"0s"},(0,r.Z)({},"&.".concat(p.selected),{fontSize:e.typography.pxToRem(14)}))})),b=a.forwardRef((function(t,e){var o=(0,d.Z)({props:t,name:"MuiBottomNavigationAction"}),r=o.className,a=o.icon,c=o.label,u=o.onChange,v=o.onClick,p=o.value,b=(0,n.Z)(o,m),w=o,x=function(t){var e=t.classes,o=t.showLabel,r=t.selected,n={root:["root",!o&&!r&&"iconOnly",r&&"selected"],label:["label",!o&&!r&&"iconOnly",r&&"selected"]};return(0,s.Z)(n,f,e)}(w);return(0,h.jsxs)(g,(0,i.Z)({ref:e,className:(0,l.Z)(x.root,r),focusRipple:!0,onClick:function(t){u&&u(t,p),v&&v(t)},ownerState:w},b,{children:[a,(0,h.jsx)(Z,{className:x.label,ownerState:w,children:c})]}))}))},7849:function(t,e,o){o.d(e,{Z:function(){return h}});var r=o(7462),n=o(3366),i=o(2791),a=(o(8457),o(8182)),l=o(767),s=o(7630),c=o(1402),d=o(5159);function u(t){return(0,d.Z)("MuiBottomNavigation",t)}(0,o(208).Z)("MuiBottomNavigation",["root"]);var v=o(184),f=["children","className","component","onChange","showLabels","value"],p=(0,s.ZP)("div",{name:"MuiBottomNavigation",slot:"Root",overridesResolver:function(t,e){return e.root}})((function(t){var e=t.theme;return{display:"flex",justifyContent:"center",height:56,backgroundColor:(e.vars||e).palette.background.paper}})),h=i.forwardRef((function(t,e){var o=(0,c.Z)({props:t,name:"MuiBottomNavigation"}),s=o.children,d=o.className,h=o.component,m=void 0===h?"div":h,g=o.onChange,Z=o.showLabels,b=void 0!==Z&&Z,w=o.value,x=(0,n.Z)(o,f),C=(0,r.Z)({},o,{component:m,showLabels:b}),S=function(t){var e=t.classes;return(0,l.Z)({root:["root"]},u,e)}(C);return(0,v.jsx)(p,(0,r.Z)({as:m,className:(0,a.Z)(S.root,d),ref:e,ownerState:C},x,{children:i.Children.map(s,(function(t,e){if(!i.isValidElement(t))return null;var o=void 0===t.props.value?e:t.props.value;return i.cloneElement(t,{selected:o===w,showLabel:void 0!==t.props.showLabel?t.props.showLabel:b,value:o,onChange:g})}))}))}))},6647:function(t,e,o){o.d(e,{Z:function(){return b}});var r=o(4942),n=o(7462),i=o(3366),a=o(2791),l=o(8182),s=o(767),c=o(1402),d=o(7630),u=o(5159);function v(t){return(0,u.Z)("MuiCardActionArea",t)}var f=(0,o(208).Z)("MuiCardActionArea",["root","focusVisible","focusHighlight"]),p=o(3701),h=o(184),m=["children","className","focusVisibleClassName"],g=(0,d.ZP)(p.Z,{name:"MuiCardActionArea",slot:"Root",overridesResolver:function(t,e){return e.root}})((function(t){var e,o=t.theme;return e={display:"block",textAlign:"inherit",width:"100%"},(0,r.Z)(e,"&:hover .".concat(f.focusHighlight),{opacity:o.palette.action.hoverOpacity,"@media (hover: none)":{opacity:0}}),(0,r.Z)(e,"&.".concat(f.focusVisible," .").concat(f.focusHighlight),{opacity:o.palette.action.focusOpacity}),e})),Z=(0,d.ZP)("span",{name:"MuiCardActionArea",slot:"FocusHighlight",overridesResolver:function(t,e){return e.focusHighlight}})((function(t){var e=t.theme;return{overflow:"hidden",pointerEvents:"none",position:"absolute",top:0,right:0,bottom:0,left:0,borderRadius:"inherit",opacity:0,backgroundColor:"currentcolor",transition:e.transitions.create("opacity",{duration:e.transitions.duration.short})}})),b=a.forwardRef((function(t,e){var o=(0,c.Z)({props:t,name:"MuiCardActionArea"}),r=o.children,a=o.className,d=o.focusVisibleClassName,u=(0,i.Z)(o,m),f=o,p=function(t){var e=t.classes;return(0,s.Z)({root:["root"],focusHighlight:["focusHighlight"]},v,e)}(f);return(0,h.jsxs)(g,(0,n.Z)({className:(0,l.Z)(p.root,a),focusVisibleClassName:(0,l.Z)(d,p.focusVisible),ref:e,ownerState:f},u,{children:[r,(0,h.jsx)(Z,{className:p.focusHighlight,ownerState:f})]}))}))},2363:function(t,e,o){o.d(e,{Z:function(){return h}});var r=o(3366),n=o(7462),i=o(2791),a=o(8182),l=o(767),s=o(7630),c=o(1402),d=o(5159);function u(t){return(0,d.Z)("MuiCardActions",t)}(0,o(208).Z)("MuiCardActions",["root","spacing"]);var v=o(184),f=["disableSpacing","className"],p=(0,s.ZP)("div",{name:"MuiCardActions",slot:"Root",overridesResolver:function(t,e){var o=t.ownerState;return[e.root,!o.disableSpacing&&e.spacing]}})((function(t){var e=t.ownerState;return(0,n.Z)({display:"flex",alignItems:"center",padding:8},!e.disableSpacing&&{"& > :not(:first-of-type)":{marginLeft:8}})})),h=i.forwardRef((function(t,e){var o=(0,c.Z)({props:t,name:"MuiCardActions"}),i=o.disableSpacing,s=void 0!==i&&i,d=o.className,h=(0,r.Z)(o,f),m=(0,n.Z)({},o,{disableSpacing:s}),g=function(t){var e=t.classes,o={root:["root",!t.disableSpacing&&"spacing"]};return(0,l.Z)(o,u,e)}(m);return(0,v.jsx)(p,(0,n.Z)({className:(0,a.Z)(g.root,d),ownerState:m,ref:e},h))}))},9504:function(t,e,o){o.d(e,{Z:function(){return h}});var r=o(7462),n=o(3366),i=o(2791),a=o(8182),l=o(767),s=o(7630),c=o(1402),d=o(5159);function u(t){return(0,d.Z)("MuiCardContent",t)}(0,o(208).Z)("MuiCardContent",["root"]);var v=o(184),f=["className","component"],p=(0,s.ZP)("div",{name:"MuiCardContent",slot:"Root",overridesResolver:function(t,e){return e.root}})((function(){return{padding:16,"&:last-child":{paddingBottom:24}}})),h=i.forwardRef((function(t,e){var o=(0,c.Z)({props:t,name:"MuiCardContent"}),i=o.className,s=o.component,d=void 0===s?"div":s,h=(0,n.Z)(o,f),m=(0,r.Z)({},o,{component:d}),g=function(t){var e=t.classes;return(0,l.Z)({root:["root"]},u,e)}(m);return(0,v.jsx)(p,(0,r.Z)({as:d,className:(0,a.Z)(g.root,i),ownerState:m,ref:e},h))}))},7621:function(t,e,o){o.d(e,{Z:function(){return m}});var r=o(7462),n=o(3366),i=o(2791),a=o(8182),l=o(767),s=o(7630),c=o(1402),d=o(703),u=o(5159);function v(t){return(0,u.Z)("MuiCard",t)}(0,o(208).Z)("MuiCard",["root"]);var f=o(184),p=["className","raised"],h=(0,s.ZP)(d.Z,{name:"MuiCard",slot:"Root",overridesResolver:function(t,e){return e.root}})((function(){return{overflow:"hidden"}})),m=i.forwardRef((function(t,e){var o=(0,c.Z)({props:t,name:"MuiCard"}),i=o.className,s=o.raised,d=void 0!==s&&s,u=(0,n.Z)(o,p),m=(0,r.Z)({},o,{raised:d}),g=function(t){var e=t.classes;return(0,l.Z)({root:["root"]},v,e)}(m);return(0,f.jsx)(h,(0,r.Z)({className:(0,a.Z)(g.root,i),elevation:d?8:void 0,ref:e,ownerState:m},u))}))},4721:function(t,e,o){var r=o(3366),n=o(7462),i=o(2791),a=o(8182),l=o(767),s=o(2065),c=o(7630),d=o(1402),u=o(133),v=o(184),f=["absolute","children","className","component","flexItem","light","orientation","role","textAlign","variant"],p=(0,c.ZP)("div",{name:"MuiDivider",slot:"Root",overridesResolver:function(t,e){var o=t.ownerState;return[e.root,o.absolute&&e.absolute,e[o.variant],o.light&&e.light,"vertical"===o.orientation&&e.vertical,o.flexItem&&e.flexItem,o.children&&e.withChildren,o.children&&"vertical"===o.orientation&&e.withChildrenVertical,"right"===o.textAlign&&"vertical"!==o.orientation&&e.textAlignRight,"left"===o.textAlign&&"vertical"!==o.orientation&&e.textAlignLeft]}})((function(t){var e=t.theme,o=t.ownerState;return(0,n.Z)({margin:0,flexShrink:0,borderWidth:0,borderStyle:"solid",borderColor:e.palette.divider,borderBottomWidth:"thin"},o.absolute&&{position:"absolute",bottom:0,left:0,width:"100%"},o.light&&{borderColor:(0,s.Fq)(e.palette.divider,.08)},"inset"===o.variant&&{marginLeft:72},"middle"===o.variant&&"horizontal"===o.orientation&&{marginLeft:e.spacing(2),marginRight:e.spacing(2)},"middle"===o.variant&&"vertical"===o.orientation&&{marginTop:e.spacing(1),marginBottom:e.spacing(1)},"vertical"===o.orientation&&{height:"100%",borderBottomWidth:0,borderRightWidth:"thin"},o.flexItem&&{alignSelf:"stretch",height:"auto"})}),(function(t){var e=t.theme,o=t.ownerState;return(0,n.Z)({},o.children&&{display:"flex",whiteSpace:"nowrap",textAlign:"center",border:0,"&::before, &::after":{position:"relative",width:"100%",borderTop:"thin solid ".concat(e.palette.divider),top:"50%",content:'""',transform:"translateY(50%)"}})}),(function(t){var e=t.theme,o=t.ownerState;return(0,n.Z)({},o.children&&"vertical"===o.orientation&&{flexDirection:"column","&::before, &::after":{height:"100%",top:"0%",left:"50%",borderTop:0,borderLeft:"thin solid ".concat(e.palette.divider),transform:"translateX(0%)"}})}),(function(t){var e=t.ownerState;return(0,n.Z)({},"right"===e.textAlign&&"vertical"!==e.orientation&&{"&::before":{width:"90%"},"&::after":{width:"10%"}},"left"===e.textAlign&&"vertical"!==e.orientation&&{"&::before":{width:"10%"},"&::after":{width:"90%"}})})),h=(0,c.ZP)("span",{name:"MuiDivider",slot:"Wrapper",overridesResolver:function(t,e){var o=t.ownerState;return[e.wrapper,"vertical"===o.orientation&&e.wrapperVertical]}})((function(t){var e=t.theme,o=t.ownerState;return(0,n.Z)({display:"inline-block",paddingLeft:"calc(".concat(e.spacing(1)," * 1.2)"),paddingRight:"calc(".concat(e.spacing(1)," * 1.2)")},"vertical"===o.orientation&&{paddingTop:"calc(".concat(e.spacing(1)," * 1.2)"),paddingBottom:"calc(".concat(e.spacing(1)," * 1.2)")})})),m=i.forwardRef((function(t,e){var o=(0,d.Z)({props:t,name:"MuiDivider"}),i=o.absolute,s=void 0!==i&&i,c=o.children,m=o.className,g=o.component,Z=void 0===g?c?"div":"hr":g,b=o.flexItem,w=void 0!==b&&b,x=o.light,C=void 0!==x&&x,S=o.orientation,M=void 0===S?"horizontal":S,N=o.role,R=void 0===N?"hr"!==Z?"separator":void 0:N,y=o.textAlign,A=void 0===y?"center":y,L=o.variant,V=void 0===L?"fullWidth":L,j=(0,r.Z)(o,f),k=(0,n.Z)({},o,{absolute:s,component:Z,flexItem:w,light:C,orientation:M,role:R,textAlign:A,variant:V}),B=function(t){var e=t.absolute,o=t.children,r=t.classes,n=t.flexItem,i=t.light,a=t.orientation,s=t.textAlign,c={root:["root",e&&"absolute",t.variant,i&&"light","vertical"===a&&"vertical",n&&"flexItem",o&&"withChildren",o&&"vertical"===a&&"withChildrenVertical","right"===s&&"vertical"!==a&&"textAlignRight","left"===s&&"vertical"!==a&&"textAlignLeft"],wrapper:["wrapper","vertical"===a&&"wrapperVertical"]};return(0,l.Z)(c,u.V,r)}(k);return(0,v.jsx)(p,(0,n.Z)({as:Z,className:(0,a.Z)(B.root,m),role:R,ref:e,ownerState:k},j,{children:c?(0,v.jsx)(h,{className:B.wrapper,ownerState:k,children:c}):null}))}));e.Z=m},133:function(t,e,o){o.d(e,{V:function(){return n}});var r=o(5159);function n(t){return(0,r.Z)("MuiDivider",t)}var i=(0,o(208).Z)("MuiDivider",["root","absolute","fullWidth","inset","middle","flexItem","light","vertical","withChildren","withChildrenVertical","textAlignRight","textAlignLeft","wrapper","wrapperVertical"]);e.Z=i},4663:function(t,e,o){o.d(e,{Z:function(){return m}});var r=o(4942),n=o(3366),i=o(7462),a=o(2791),l=o(8182),s=o(767),c=o(1402),d=o(7630),u=o(5159);function v(t){return(0,u.Z)("MuiToolbar",t)}(0,o(208).Z)("MuiToolbar",["root","gutters","regular","dense"]);var f=o(184),p=["className","component","disableGutters","variant"],h=(0,d.ZP)("div",{name:"MuiToolbar",slot:"Root",overridesResolver:function(t,e){var o=t.ownerState;return[e.root,!o.disableGutters&&e.gutters,e[o.variant]]}})((function(t){var e=t.theme,o=t.ownerState;return(0,i.Z)({position:"relative",display:"flex",alignItems:"center"},!o.disableGutters&&(0,r.Z)({paddingLeft:e.spacing(2),paddingRight:e.spacing(2)},e.breakpoints.up("sm"),{paddingLeft:e.spacing(3),paddingRight:e.spacing(3)}),"dense"===o.variant&&{minHeight:48})}),(function(t){var e=t.theme;return"regular"===t.ownerState.variant&&e.mixins.toolbar})),m=a.forwardRef((function(t,e){var o=(0,c.Z)({props:t,name:"MuiToolbar"}),r=o.className,a=o.component,d=void 0===a?"div":a,u=o.disableGutters,m=void 0!==u&&u,g=o.variant,Z=void 0===g?"regular":g,b=(0,n.Z)(o,p),w=(0,i.Z)({},o,{component:d,disableGutters:m,variant:Z}),x=function(t){var e=t.classes,o={root:["root",!t.disableGutters&&"gutters",t.variant]};return(0,s.Z)(o,v,e)}(w);return(0,f.jsx)(h,(0,i.Z)({as:d,className:(0,l.Z)(x.root,r),ref:e,ownerState:w},b))}))}}]);
//# sourceMappingURL=575.50e0101b.chunk.js.map