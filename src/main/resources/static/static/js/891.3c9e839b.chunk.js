(self.webpackChunkconnectionreactfrontend=self.webpackChunkconnectionreactfrontend||[]).push([[891],{5318:function(e){e.exports=function(e){return e&&e.__esModule?e:{default:e}},e.exports.__esModule=!0,e.exports.default=e.exports},5649:function(e,o,t){"use strict";Object.defineProperty(o,"__esModule",{value:!0}),Object.defineProperty(o,"default",{enumerable:!0,get:function(){return a.createSvgIcon}});var a=t(4454)},8870:function(e,o,t){"use strict";var a=t(3814),n=t(7829),c=(0,t(7107).Z)(),r=(0,a.Z)({defaultTheme:c,defaultClassName:"MuiBox-root",generateClassName:n.Z.generate});o.Z=r},1918:function(e,o,t){"use strict";t.d(o,{Z:function(){return x}});var a=t(4942),n=t(3366),c=t(7462),r=t(2791),l=t(8182),i=t(767),u=t(2065),s=t(4223),d=t(184),p=(0,s.Z)((0,d.jsx)("path",{d:"M12 2C6.47 2 2 6.47 2 12s4.47 10 10 10 10-4.47 10-10S17.53 2 12 2zm5 13.59L15.59 17 12 13.41 8.41 17 7 15.59 10.59 12 7 8.41 8.41 7 12 10.59 15.59 7 17 8.41 13.41 12 17 15.59z"}),"Cancel"),m=t(2071),f=t(4036),Z=t(3701),b=t(1046),v=t(7630),g=t(5159);function h(e){return(0,g.Z)("MuiChip",e)}var C=(0,t(208).Z)("MuiChip",["root","sizeSmall","sizeMedium","colorPrimary","colorSecondary","disabled","clickable","clickableColorPrimary","clickableColorSecondary","deletable","deletableColorPrimary","deletableColorSecondary","outlined","filled","outlinedPrimary","outlinedSecondary","avatar","avatarSmall","avatarMedium","avatarColorPrimary","avatarColorSecondary","icon","iconSmall","iconMedium","iconColorPrimary","iconColorSecondary","label","labelSmall","labelMedium","deleteIcon","deleteIconSmall","deleteIconMedium","deleteIconColorPrimary","deleteIconColorSecondary","deleteIconOutlinedColorPrimary","deleteIconOutlinedColorSecondary","focusVisible"]),y=["avatar","className","clickable","color","component","deleteIcon","disabled","icon","label","onClick","onDelete","onKeyDown","onKeyUp","size","variant"],k=(0,v.ZP)("div",{name:"MuiChip",slot:"Root",overridesResolver:function(e,o){var t=e.ownerState,n=t.color,c=t.clickable,r=t.onDelete,l=t.size,i=t.variant;return[(0,a.Z)({},"& .".concat(C.avatar),o.avatar),(0,a.Z)({},"& .".concat(C.avatar),o["avatar".concat((0,f.Z)(l))]),(0,a.Z)({},"& .".concat(C.avatar),o["avatarColor".concat((0,f.Z)(n))]),(0,a.Z)({},"& .".concat(C.icon),o.icon),(0,a.Z)({},"& .".concat(C.icon),o["icon".concat((0,f.Z)(l))]),(0,a.Z)({},"& .".concat(C.icon),o["iconColor".concat((0,f.Z)(n))]),(0,a.Z)({},"& .".concat(C.deleteIcon),o.deleteIcon),(0,a.Z)({},"& .".concat(C.deleteIcon),o["deleteIcon".concat((0,f.Z)(l))]),(0,a.Z)({},"& .".concat(C.deleteIcon),o["deleteIconColor".concat((0,f.Z)(n))]),(0,a.Z)({},"& .".concat(C.deleteIcon),o["deleteIconOutlinedColor".concat((0,f.Z)(n))]),o.root,o["size".concat((0,f.Z)(l))],o["color".concat((0,f.Z)(n))],c&&o.clickable,c&&"default"!==n&&o["clickableColor".concat((0,f.Z)(n),")")],r&&o.deletable,r&&"default"!==n&&o["deletableColor".concat((0,f.Z)(n))],o[i],"outlined"===i&&o["outlined".concat((0,f.Z)(n))]]}})((function(e){var o,t=e.theme,n=e.ownerState,r=(0,u.Fq)(t.palette.text.primary,.26);return(0,c.Z)((o={maxWidth:"100%",fontFamily:t.typography.fontFamily,fontSize:t.typography.pxToRem(13),display:"inline-flex",alignItems:"center",justifyContent:"center",height:32,color:t.palette.text.primary,backgroundColor:t.palette.action.selected,borderRadius:16,whiteSpace:"nowrap",transition:t.transitions.create(["background-color","box-shadow"]),cursor:"default",outline:0,textDecoration:"none",border:0,padding:0,verticalAlign:"middle",boxSizing:"border-box"},(0,a.Z)(o,"&.".concat(C.disabled),{opacity:t.palette.action.disabledOpacity,pointerEvents:"none"}),(0,a.Z)(o,"& .".concat(C.avatar),{marginLeft:5,marginRight:-6,width:24,height:24,color:"light"===t.palette.mode?t.palette.grey[700]:t.palette.grey[300],fontSize:t.typography.pxToRem(12)}),(0,a.Z)(o,"& .".concat(C.avatarColorPrimary),{color:t.palette.primary.contrastText,backgroundColor:t.palette.primary.dark}),(0,a.Z)(o,"& .".concat(C.avatarColorSecondary),{color:t.palette.secondary.contrastText,backgroundColor:t.palette.secondary.dark}),(0,a.Z)(o,"& .".concat(C.avatarSmall),{marginLeft:4,marginRight:-4,width:18,height:18,fontSize:t.typography.pxToRem(10)}),(0,a.Z)(o,"& .".concat(C.icon),(0,c.Z)({color:"light"===t.palette.mode?t.palette.grey[700]:t.palette.grey[300],marginLeft:5,marginRight:-6},"small"===n.size&&{fontSize:18,marginLeft:4,marginRight:-4},"default"!==n.color&&{color:"inherit"})),(0,a.Z)(o,"& .".concat(C.deleteIcon),(0,c.Z)({WebkitTapHighlightColor:"transparent",color:r,fontSize:22,cursor:"pointer",margin:"0 5px 0 -6px","&:hover":{color:(0,u.Fq)(r,.4)}},"small"===n.size&&{fontSize:16,marginRight:4,marginLeft:-4},"default"!==n.color&&{color:(0,u.Fq)(t.palette[n.color].contrastText,.7),"&:hover, &:active":{color:t.palette[n.color].contrastText}})),o),"small"===n.size&&{height:24},"default"!==n.color&&{backgroundColor:t.palette[n.color].main,color:t.palette[n.color].contrastText},n.onDelete&&(0,a.Z)({},"&.".concat(C.focusVisible),{backgroundColor:(0,u.Fq)(t.palette.action.selected,t.palette.action.selectedOpacity+t.palette.action.focusOpacity)}),n.onDelete&&"default"!==n.color&&(0,a.Z)({},"&.".concat(C.focusVisible),{backgroundColor:t.palette[n.color].dark}))}),(function(e){var o,t=e.theme,n=e.ownerState;return(0,c.Z)({},n.clickable&&(o={userSelect:"none",WebkitTapHighlightColor:"transparent",cursor:"pointer","&:hover":{backgroundColor:(0,u.Fq)(t.palette.action.selected,t.palette.action.selectedOpacity+t.palette.action.hoverOpacity)}},(0,a.Z)(o,"&.".concat(C.focusVisible),{backgroundColor:(0,u.Fq)(t.palette.action.selected,t.palette.action.selectedOpacity+t.palette.action.focusOpacity)}),(0,a.Z)(o,"&:active",{boxShadow:t.shadows[1]}),o),n.clickable&&"default"!==n.color&&(0,a.Z)({},"&:hover, &.".concat(C.focusVisible),{backgroundColor:t.palette[n.color].dark}))}),(function(e){var o,t,n=e.theme,r=e.ownerState;return(0,c.Z)({},"outlined"===r.variant&&(o={backgroundColor:"transparent",border:"1px solid ".concat("light"===n.palette.mode?n.palette.grey[400]:n.palette.grey[700])},(0,a.Z)(o,"&.".concat(C.clickable,":hover"),{backgroundColor:n.palette.action.hover}),(0,a.Z)(o,"&.".concat(C.focusVisible),{backgroundColor:n.palette.action.focus}),(0,a.Z)(o,"& .".concat(C.avatar),{marginLeft:4}),(0,a.Z)(o,"& .".concat(C.avatarSmall),{marginLeft:2}),(0,a.Z)(o,"& .".concat(C.icon),{marginLeft:4}),(0,a.Z)(o,"& .".concat(C.iconSmall),{marginLeft:2}),(0,a.Z)(o,"& .".concat(C.deleteIcon),{marginRight:5}),(0,a.Z)(o,"& .".concat(C.deleteIconSmall),{marginRight:3}),o),"outlined"===r.variant&&"default"!==r.color&&(t={color:n.palette[r.color].main,border:"1px solid ".concat((0,u.Fq)(n.palette[r.color].main,.7))},(0,a.Z)(t,"&.".concat(C.clickable,":hover"),{backgroundColor:(0,u.Fq)(n.palette[r.color].main,n.palette.action.hoverOpacity)}),(0,a.Z)(t,"&.".concat(C.focusVisible),{backgroundColor:(0,u.Fq)(n.palette[r.color].main,n.palette.action.focusOpacity)}),(0,a.Z)(t,"& .".concat(C.deleteIcon),{color:(0,u.Fq)(n.palette[r.color].main,.7),"&:hover, &:active":{color:n.palette[r.color].main}}),t))})),S=(0,v.ZP)("span",{name:"MuiChip",slot:"Label",overridesResolver:function(e,o){var t=e.ownerState.size;return[o.label,o["label".concat((0,f.Z)(t))]]}})((function(e){var o=e.ownerState;return(0,c.Z)({overflow:"hidden",textOverflow:"ellipsis",paddingLeft:12,paddingRight:12,whiteSpace:"nowrap"},"small"===o.size&&{paddingLeft:8,paddingRight:8})}));function I(e){return"Backspace"===e.key||"Delete"===e.key}var x=r.forwardRef((function(e,o){var t=(0,b.Z)({props:e,name:"MuiChip"}),a=t.avatar,u=t.className,s=t.clickable,v=t.color,g=void 0===v?"default":v,C=t.component,x=t.deleteIcon,w=t.disabled,z=void 0!==w&&w,N=t.icon,R=t.label,M=t.onClick,P=t.onDelete,F=t.onKeyDown,O=t.onKeyUp,T=t.size,D=void 0===T?"medium":T,L=t.variant,V=void 0===L?"filled":L,E=(0,n.Z)(t,y),q=r.useRef(null),_=(0,m.Z)(q,o),j=function(e){e.stopPropagation(),P&&P(e)},K=!(!1===s||!M)||s,U="small"===D,W=K||P?Z.Z:C||"div",B=(0,c.Z)({},t,{component:W,disabled:z,size:D,color:g,onDelete:!!P,clickable:K,variant:V}),G=function(e){var o=e.classes,t=e.disabled,a=e.size,n=e.color,c=e.onDelete,r=e.clickable,l=e.variant,u={root:["root",l,t&&"disabled","size".concat((0,f.Z)(a)),"color".concat((0,f.Z)(n)),r&&"clickable",r&&"clickableColor".concat((0,f.Z)(n)),c&&"deletable",c&&"deletableColor".concat((0,f.Z)(n)),"".concat(l).concat((0,f.Z)(n))],label:["label","label".concat((0,f.Z)(a))],avatar:["avatar","avatar".concat((0,f.Z)(a)),"avatarColor".concat((0,f.Z)(n))],icon:["icon","icon".concat((0,f.Z)(a)),"iconColor".concat((0,f.Z)(n))],deleteIcon:["deleteIcon","deleteIcon".concat((0,f.Z)(a)),"deleteIconColor".concat((0,f.Z)(n)),"deleteIconOutlinedColor".concat((0,f.Z)(n))]};return(0,i.Z)(u,h,o)}(B),H=W===Z.Z?(0,c.Z)({component:C||"div",focusVisibleClassName:G.focusVisible},P&&{disableRipple:!0}):{},A=null;if(P){var Y=(0,l.Z)("default"!==g&&("outlined"===V?G["deleteIconOutlinedColor".concat((0,f.Z)(g))]:G["deleteIconColor".concat((0,f.Z)(g))]),U&&G.deleteIconSmall);A=x&&r.isValidElement(x)?r.cloneElement(x,{className:(0,l.Z)(x.props.className,G.deleteIcon,Y),onClick:j}):(0,d.jsx)(p,{className:(0,l.Z)(G.deleteIcon,Y),onClick:j})}var J=null;a&&r.isValidElement(a)&&(J=r.cloneElement(a,{className:(0,l.Z)(G.avatar,a.props.className)}));var Q=null;return N&&r.isValidElement(N)&&(Q=r.cloneElement(N,{className:(0,l.Z)(G.icon,N.props.className)})),(0,d.jsxs)(k,(0,c.Z)({as:W,className:(0,l.Z)(G.root,u),disabled:!(!K||!z)||void 0,onClick:M,onKeyDown:function(e){e.currentTarget===e.target&&I(e)&&e.preventDefault(),F&&F(e)},onKeyUp:function(e){e.currentTarget===e.target&&(P&&I(e)?P(e):"Escape"===e.key&&q.current&&q.current.blur()),O&&O(e)},ref:_,ownerState:B},H,E,{children:[J||Q,(0,d.jsx)(S,{className:(0,l.Z)(G.label),ownerState:B,children:R}),A]}))}))},4454:function(e,o,t){"use strict";t.r(o),t.d(o,{capitalize:function(){return n.Z},createChainedFunction:function(){return c},createSvgIcon:function(){return r.Z},debounce:function(){return l.Z},deprecatedPropType:function(){return i},isMuiElement:function(){return u.Z},ownerDocument:function(){return s.Z},ownerWindow:function(){return d.Z},requirePropFactory:function(){return p},setRef:function(){return m},unstable_ClassNameGenerator:function(){return y},unstable_useEnhancedEffect:function(){return f.Z},unstable_useId:function(){return Z},unsupportedProp:function(){return b},useControlled:function(){return v.Z},useEventCallback:function(){return g.Z},useForkRef:function(){return h.Z},useIsFocusVisible:function(){return C.Z}});var a=t(7829),n=t(4036),c=t(8949).Z,r=t(4223),l=t(3199);var i=function(e,o){return function(){return null}},u=t(9103),s=t(8301),d=t(7602);t(7462);var p=function(e,o){return function(){return null}},m=t(2971).Z,f=t(162),Z=t(6248).Z;var b=function(e,o,t,a,n){return null},v=t(8278),g=t(9683),h=t(2071),C=t(3031),y={configure:function(e){console.warn(["MUI: `ClassNameGenerator` import from `@mui/material/utils` is outdated and might cause unexpected issues.","","You should use `import { unstable_ClassNameGenerator } from '@mui/material/className'` instead","","The detail of the issue: https://github.com/mui/material-ui/issues/30011#issuecomment-1024993401","","The updated documentation: https://mui.com/guides/classname-generator/"].join("\n")),a.Z.configure(e)}}},3814:function(e,o,t){"use strict";t.d(o,{Z:function(){return m}});var a=t(7462),n=t(3366),c=t(2791),r=t(8182),l=t(594),i=t(104),u=t(8519),s=t(418),d=t(184),p=["className","component"];function m(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},o=e.defaultTheme,t=e.defaultClassName,m=void 0===t?"MuiBox-root":t,f=e.generateClassName,Z=e.styleFunctionSx,b=void 0===Z?i.Z:Z,v=(0,l.ZP)("div")(b),g=c.forwardRef((function(e,t){var c=(0,s.Z)(o),l=(0,u.Z)(e),i=l.className,Z=l.component,b=void 0===Z?"div":Z,g=(0,n.Z)(l,p);return(0,d.jsx)(v,(0,a.Z)({as:b,ref:t,className:(0,r.Z)(i,f?f(m):m),theme:c},g))}));return g}}}]);
//# sourceMappingURL=891.3c9e839b.chunk.js.map