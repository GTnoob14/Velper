(self.webpackChunkconnectionreactfrontend=self.webpackChunkconnectionreactfrontend||[]).push([[286],{5318:function(e){e.exports=function(e){return e&&e.__esModule?e:{default:e}},e.exports.__esModule=!0,e.exports.default=e.exports},5649:function(e,o,t){"use strict";Object.defineProperty(o,"__esModule",{value:!0}),Object.defineProperty(o,"default",{enumerable:!0,get:function(){return a.createSvgIcon}});var a=t(4454)},8870:function(e,o,t){"use strict";var a=t(3814),n=t(7829),r=(0,t(5547).Z)(),c=(0,a.Z)({defaultTheme:r,defaultClassName:"MuiBox-root",generateClassName:n.Z.generate});o.Z=c},1918:function(e,o,t){"use strict";t.d(o,{Z:function(){return x}});var a=t(4942),n=t(3366),r=t(7462),c=t(2791),l=t(8182),i=t(767),d=t(2065),s=t(4223),u=t(184),p=(0,s.Z)((0,u.jsx)("path",{d:"M12 2C6.47 2 2 6.47 2 12s4.47 10 10 10 10-4.47 10-10S17.53 2 12 2zm5 13.59L15.59 17 12 13.41 8.41 17 7 15.59 10.59 12 7 8.41 8.41 7 12 10.59 15.59 7 17 8.41 13.41 12 17 15.59z"}),"Cancel"),m=t(2071),f=t(4036),Z=t(3701),g=t(1402),v=t(7630),b=t(5159);function h(e){return(0,b.Z)("MuiChip",e)}var y=(0,t(208).Z)("MuiChip",["root","sizeSmall","sizeMedium","colorPrimary","colorSecondary","disabled","clickable","clickableColorPrimary","clickableColorSecondary","deletable","deletableColorPrimary","deletableColorSecondary","outlined","filled","outlinedPrimary","outlinedSecondary","avatar","avatarSmall","avatarMedium","avatarColorPrimary","avatarColorSecondary","icon","iconSmall","iconMedium","iconColorPrimary","iconColorSecondary","label","labelSmall","labelMedium","deleteIcon","deleteIconSmall","deleteIconMedium","deleteIconColorPrimary","deleteIconColorSecondary","deleteIconOutlinedColorPrimary","deleteIconOutlinedColorSecondary","focusVisible"]),C=["avatar","className","clickable","color","component","deleteIcon","disabled","icon","label","onClick","onDelete","onKeyDown","onKeyUp","size","variant"],k=(0,v.ZP)("div",{name:"MuiChip",slot:"Root",overridesResolver:function(e,o){var t=e.ownerState,n=t.color,r=t.clickable,c=t.onDelete,l=t.size,i=t.variant;return[(0,a.Z)({},"& .".concat(y.avatar),o.avatar),(0,a.Z)({},"& .".concat(y.avatar),o["avatar".concat((0,f.Z)(l))]),(0,a.Z)({},"& .".concat(y.avatar),o["avatarColor".concat((0,f.Z)(n))]),(0,a.Z)({},"& .".concat(y.icon),o.icon),(0,a.Z)({},"& .".concat(y.icon),o["icon".concat((0,f.Z)(l))]),(0,a.Z)({},"& .".concat(y.icon),o["iconColor".concat((0,f.Z)(n))]),(0,a.Z)({},"& .".concat(y.deleteIcon),o.deleteIcon),(0,a.Z)({},"& .".concat(y.deleteIcon),o["deleteIcon".concat((0,f.Z)(l))]),(0,a.Z)({},"& .".concat(y.deleteIcon),o["deleteIconColor".concat((0,f.Z)(n))]),(0,a.Z)({},"& .".concat(y.deleteIcon),o["deleteIconOutlinedColor".concat((0,f.Z)(n))]),o.root,o["size".concat((0,f.Z)(l))],o["color".concat((0,f.Z)(n))],r&&o.clickable,r&&"default"!==n&&o["clickableColor".concat((0,f.Z)(n),")")],c&&o.deletable,c&&"default"!==n&&o["deletableColor".concat((0,f.Z)(n))],o[i],"outlined"===i&&o["outlined".concat((0,f.Z)(n))]]}})((function(e){var o,t=e.theme,n=e.ownerState,c=(0,d.Fq)(t.palette.text.primary,.26);return(0,r.Z)((o={maxWidth:"100%",fontFamily:t.typography.fontFamily,fontSize:t.typography.pxToRem(13),display:"inline-flex",alignItems:"center",justifyContent:"center",height:32,color:t.palette.text.primary,backgroundColor:t.palette.action.selected,borderRadius:16,whiteSpace:"nowrap",transition:t.transitions.create(["background-color","box-shadow"]),cursor:"default",outline:0,textDecoration:"none",border:0,padding:0,verticalAlign:"middle",boxSizing:"border-box"},(0,a.Z)(o,"&.".concat(y.disabled),{opacity:t.palette.action.disabledOpacity,pointerEvents:"none"}),(0,a.Z)(o,"& .".concat(y.avatar),{marginLeft:5,marginRight:-6,width:24,height:24,color:"light"===t.palette.mode?t.palette.grey[700]:t.palette.grey[300],fontSize:t.typography.pxToRem(12)}),(0,a.Z)(o,"& .".concat(y.avatarColorPrimary),{color:t.palette.primary.contrastText,backgroundColor:t.palette.primary.dark}),(0,a.Z)(o,"& .".concat(y.avatarColorSecondary),{color:t.palette.secondary.contrastText,backgroundColor:t.palette.secondary.dark}),(0,a.Z)(o,"& .".concat(y.avatarSmall),{marginLeft:4,marginRight:-4,width:18,height:18,fontSize:t.typography.pxToRem(10)}),(0,a.Z)(o,"& .".concat(y.icon),(0,r.Z)({color:"light"===t.palette.mode?t.palette.grey[700]:t.palette.grey[300],marginLeft:5,marginRight:-6},"small"===n.size&&{fontSize:18,marginLeft:4,marginRight:-4},"default"!==n.color&&{color:"inherit"})),(0,a.Z)(o,"& .".concat(y.deleteIcon),(0,r.Z)({WebkitTapHighlightColor:"transparent",color:c,fontSize:22,cursor:"pointer",margin:"0 5px 0 -6px","&:hover":{color:(0,d.Fq)(c,.4)}},"small"===n.size&&{fontSize:16,marginRight:4,marginLeft:-4},"default"!==n.color&&{color:(0,d.Fq)(t.palette[n.color].contrastText,.7),"&:hover, &:active":{color:t.palette[n.color].contrastText}})),o),"small"===n.size&&{height:24},"default"!==n.color&&{backgroundColor:t.palette[n.color].main,color:t.palette[n.color].contrastText},n.onDelete&&(0,a.Z)({},"&.".concat(y.focusVisible),{backgroundColor:(0,d.Fq)(t.palette.action.selected,t.palette.action.selectedOpacity+t.palette.action.focusOpacity)}),n.onDelete&&"default"!==n.color&&(0,a.Z)({},"&.".concat(y.focusVisible),{backgroundColor:t.palette[n.color].dark}))}),(function(e){var o,t=e.theme,n=e.ownerState;return(0,r.Z)({},n.clickable&&(o={userSelect:"none",WebkitTapHighlightColor:"transparent",cursor:"pointer","&:hover":{backgroundColor:(0,d.Fq)(t.palette.action.selected,t.palette.action.selectedOpacity+t.palette.action.hoverOpacity)}},(0,a.Z)(o,"&.".concat(y.focusVisible),{backgroundColor:(0,d.Fq)(t.palette.action.selected,t.palette.action.selectedOpacity+t.palette.action.focusOpacity)}),(0,a.Z)(o,"&:active",{boxShadow:t.shadows[1]}),o),n.clickable&&"default"!==n.color&&(0,a.Z)({},"&:hover, &.".concat(y.focusVisible),{backgroundColor:t.palette[n.color].dark}))}),(function(e){var o,t,n=e.theme,c=e.ownerState;return(0,r.Z)({},"outlined"===c.variant&&(o={backgroundColor:"transparent",border:"1px solid ".concat("light"===n.palette.mode?n.palette.grey[400]:n.palette.grey[700])},(0,a.Z)(o,"&.".concat(y.clickable,":hover"),{backgroundColor:n.palette.action.hover}),(0,a.Z)(o,"&.".concat(y.focusVisible),{backgroundColor:n.palette.action.focus}),(0,a.Z)(o,"& .".concat(y.avatar),{marginLeft:4}),(0,a.Z)(o,"& .".concat(y.avatarSmall),{marginLeft:2}),(0,a.Z)(o,"& .".concat(y.icon),{marginLeft:4}),(0,a.Z)(o,"& .".concat(y.iconSmall),{marginLeft:2}),(0,a.Z)(o,"& .".concat(y.deleteIcon),{marginRight:5}),(0,a.Z)(o,"& .".concat(y.deleteIconSmall),{marginRight:3}),o),"outlined"===c.variant&&"default"!==c.color&&(t={color:n.palette[c.color].main,border:"1px solid ".concat((0,d.Fq)(n.palette[c.color].main,.7))},(0,a.Z)(t,"&.".concat(y.clickable,":hover"),{backgroundColor:(0,d.Fq)(n.palette[c.color].main,n.palette.action.hoverOpacity)}),(0,a.Z)(t,"&.".concat(y.focusVisible),{backgroundColor:(0,d.Fq)(n.palette[c.color].main,n.palette.action.focusOpacity)}),(0,a.Z)(t,"& .".concat(y.deleteIcon),{color:(0,d.Fq)(n.palette[c.color].main,.7),"&:hover, &:active":{color:n.palette[c.color].main}}),t))})),S=(0,v.ZP)("span",{name:"MuiChip",slot:"Label",overridesResolver:function(e,o){var t=e.ownerState.size;return[o.label,o["label".concat((0,f.Z)(t))]]}})((function(e){var o=e.ownerState;return(0,r.Z)({overflow:"hidden",textOverflow:"ellipsis",paddingLeft:12,paddingRight:12,whiteSpace:"nowrap"},"small"===o.size&&{paddingLeft:8,paddingRight:8})}));function I(e){return"Backspace"===e.key||"Delete"===e.key}var x=c.forwardRef((function(e,o){var t=(0,g.Z)({props:e,name:"MuiChip"}),a=t.avatar,d=t.className,s=t.clickable,v=t.color,b=void 0===v?"default":v,y=t.component,x=t.deleteIcon,z=t.disabled,R=void 0!==z&&z,w=t.icon,N=t.label,M=t.onClick,F=t.onDelete,P=t.onKeyDown,T=t.onKeyUp,O=t.size,L=void 0===O?"medium":O,D=t.variant,q=void 0===D?"filled":D,E=(0,n.Z)(t,C),V=c.useRef(null),j=(0,m.Z)(V,o),_=function(e){e.stopPropagation(),F&&F(e)},B=!(!1===s||!M)||s,K="small"===L,U=B||F?Z.Z:y||"div",W=(0,r.Z)({},t,{component:U,disabled:R,size:L,color:b,onDelete:!!F,clickable:B,variant:q}),G=function(e){var o=e.classes,t=e.disabled,a=e.size,n=e.color,r=e.onDelete,c=e.clickable,l=e.variant,d={root:["root",l,t&&"disabled","size".concat((0,f.Z)(a)),"color".concat((0,f.Z)(n)),c&&"clickable",c&&"clickableColor".concat((0,f.Z)(n)),r&&"deletable",r&&"deletableColor".concat((0,f.Z)(n)),"".concat(l).concat((0,f.Z)(n))],label:["label","label".concat((0,f.Z)(a))],avatar:["avatar","avatar".concat((0,f.Z)(a)),"avatarColor".concat((0,f.Z)(n))],icon:["icon","icon".concat((0,f.Z)(a)),"iconColor".concat((0,f.Z)(n))],deleteIcon:["deleteIcon","deleteIcon".concat((0,f.Z)(a)),"deleteIconColor".concat((0,f.Z)(n)),"deleteIconOutlinedColor".concat((0,f.Z)(n))]};return(0,i.Z)(d,h,o)}(W),A=U===Z.Z?(0,r.Z)({component:y||"div",focusVisibleClassName:G.focusVisible},F&&{disableRipple:!0}):{},H=null;if(F){var Y=(0,l.Z)("default"!==b&&("outlined"===q?G["deleteIconOutlinedColor".concat((0,f.Z)(b))]:G["deleteIconColor".concat((0,f.Z)(b))]),K&&G.deleteIconSmall);H=x&&c.isValidElement(x)?c.cloneElement(x,{className:(0,l.Z)(x.props.className,G.deleteIcon,Y),onClick:_}):(0,u.jsx)(p,{className:(0,l.Z)(G.deleteIcon,Y),onClick:_})}var J=null;a&&c.isValidElement(a)&&(J=c.cloneElement(a,{className:(0,l.Z)(G.avatar,a.props.className)}));var Q=null;return w&&c.isValidElement(w)&&(Q=c.cloneElement(w,{className:(0,l.Z)(G.icon,w.props.className)})),(0,u.jsxs)(k,(0,r.Z)({as:U,className:(0,l.Z)(G.root,d),disabled:!(!B||!R)||void 0,onClick:M,onKeyDown:function(e){e.currentTarget===e.target&&I(e)&&e.preventDefault(),P&&P(e)},onKeyUp:function(e){e.currentTarget===e.target&&(F&&I(e)?F(e):"Escape"===e.key&&V.current&&V.current.blur()),T&&T(e)},ref:j,ownerState:W},A,E,{children:[J||Q,(0,u.jsx)(S,{className:(0,l.Z)(G.label),ownerState:W,children:N}),H]}))}))},3400:function(e,o,t){"use strict";t.d(o,{Z:function(){return y}});var a=t(4942),n=t(3366),r=t(7462),c=t(2791),l=t(8182),i=t(767),d=t(2065),s=t(7630),u=t(1402),p=t(3701),m=t(4036),f=t(5159);function Z(e){return(0,f.Z)("MuiIconButton",e)}var g=(0,t(208).Z)("MuiIconButton",["root","disabled","colorInherit","colorPrimary","colorSecondary","edgeStart","edgeEnd","sizeSmall","sizeMedium","sizeLarge"]),v=t(184),b=["edge","children","className","color","disabled","disableFocusRipple","size"],h=(0,s.ZP)(p.Z,{name:"MuiIconButton",slot:"Root",overridesResolver:function(e,o){var t=e.ownerState;return[o.root,"default"!==t.color&&o["color".concat((0,m.Z)(t.color))],t.edge&&o["edge".concat((0,m.Z)(t.edge))],o["size".concat((0,m.Z)(t.size))]]}})((function(e){var o=e.theme,t=e.ownerState;return(0,r.Z)({textAlign:"center",flex:"0 0 auto",fontSize:o.typography.pxToRem(24),padding:8,borderRadius:"50%",overflow:"visible",color:o.palette.action.active,transition:o.transitions.create("background-color",{duration:o.transitions.duration.shortest})},!t.disableRipple&&{"&:hover":{backgroundColor:(0,d.Fq)(o.palette.action.active,o.palette.action.hoverOpacity),"@media (hover: none)":{backgroundColor:"transparent"}}},"start"===t.edge&&{marginLeft:"small"===t.size?-3:-12},"end"===t.edge&&{marginRight:"small"===t.size?-3:-12})}),(function(e){var o=e.theme,t=e.ownerState;return(0,r.Z)({},"inherit"===t.color&&{color:"inherit"},"inherit"!==t.color&&"default"!==t.color&&(0,r.Z)({color:o.palette[t.color].main},!t.disableRipple&&{"&:hover":{backgroundColor:(0,d.Fq)(o.palette[t.color].main,o.palette.action.hoverOpacity),"@media (hover: none)":{backgroundColor:"transparent"}}}),"small"===t.size&&{padding:5,fontSize:o.typography.pxToRem(18)},"large"===t.size&&{padding:12,fontSize:o.typography.pxToRem(28)},(0,a.Z)({},"&.".concat(g.disabled),{backgroundColor:"transparent",color:o.palette.action.disabled}))})),y=c.forwardRef((function(e,o){var t=(0,u.Z)({props:e,name:"MuiIconButton"}),a=t.edge,c=void 0!==a&&a,d=t.children,s=t.className,p=t.color,f=void 0===p?"default":p,g=t.disabled,y=void 0!==g&&g,C=t.disableFocusRipple,k=void 0!==C&&C,S=t.size,I=void 0===S?"medium":S,x=(0,n.Z)(t,b),z=(0,r.Z)({},t,{edge:c,color:f,disabled:y,disableFocusRipple:k,size:I}),R=function(e){var o=e.classes,t=e.disabled,a=e.color,n=e.edge,r=e.size,c={root:["root",t&&"disabled","default"!==a&&"color".concat((0,m.Z)(a)),n&&"edge".concat((0,m.Z)(n)),"size".concat((0,m.Z)(r))]};return(0,i.Z)(c,Z,o)}(z);return(0,v.jsx)(h,(0,r.Z)({className:(0,l.Z)(R.root,s),centerRipple:!0,focusRipple:!k,disabled:y,ref:o,ownerState:z},x,{children:d}))}))},4454:function(e,o,t){"use strict";t.r(o),t.d(o,{capitalize:function(){return n.Z},createChainedFunction:function(){return r},createSvgIcon:function(){return c.Z},debounce:function(){return l.Z},deprecatedPropType:function(){return i},isMuiElement:function(){return d.Z},ownerDocument:function(){return s.Z},ownerWindow:function(){return u.Z},requirePropFactory:function(){return p},setRef:function(){return m},unstable_ClassNameGenerator:function(){return C},unstable_useEnhancedEffect:function(){return f.Z},unstable_useId:function(){return Z},unsupportedProp:function(){return g},useControlled:function(){return v.Z},useEventCallback:function(){return b.Z},useForkRef:function(){return h.Z},useIsFocusVisible:function(){return y.Z}});var a=t(7829),n=t(4036),r=t(8949).Z,c=t(4223),l=t(3199);var i=function(e,o){return function(){return null}},d=t(9103),s=t(8301),u=t(7602);t(7462);var p=function(e,o){return function(){return null}},m=t(2971).Z,f=t(162),Z=t(6248).Z;var g=function(e,o,t,a,n){return null},v=t(8278),b=t(9683),h=t(2071),y=t(3031),C={configure:function(e){console.warn(["MUI: `ClassNameGenerator` import from `@mui/material/utils` is outdated and might cause unexpected issues.","","You should use `import { unstable_ClassNameGenerator } from '@mui/material/className'` instead","","The detail of the issue: https://github.com/mui/material-ui/issues/30011#issuecomment-1024993401","","The updated documentation: https://mui.com/guides/classname-generator/"].join("\n")),a.Z.configure(e)}}},3814:function(e,o,t){"use strict";t.d(o,{Z:function(){return m}});var a=t(7462),n=t(3366),r=t(2791),c=t(8182),l=t(594),i=t(104),d=t(8519),s=t(418),u=t(184),p=["className","component"];function m(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},o=e.defaultTheme,t=e.defaultClassName,m=void 0===t?"MuiBox-root":t,f=e.generateClassName,Z=e.styleFunctionSx,g=void 0===Z?i.Z:Z,v=(0,l.ZP)("div")(g),b=r.forwardRef((function(e,t){var r=(0,s.Z)(o),l=(0,d.Z)(e),i=l.className,Z=l.component,g=void 0===Z?"div":Z,b=(0,n.Z)(l,p);return(0,u.jsx)(v,(0,a.Z)({as:g,ref:t,className:(0,c.Z)(i,f?f(m):m),theme:r},b))}));return b}}}]);
//# sourceMappingURL=286.6d380f25.chunk.js.map