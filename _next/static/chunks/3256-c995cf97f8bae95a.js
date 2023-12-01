"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[3256],{3256:function(e,r,n){n.d(r,{oM:function(){return w},xu:function(){return _},M5:function(){return k},Cd:function(){return C},W2:function(){return W},iz:function(){return j},kC:function(){return T},P4:function(){return B},Ug:function(){return re},rU:function(){return M},HC:function(){return U},MI:function(){return K},LZ:function(){return Q},Kq:function(){return ee},xv:function(){return ae},QI:function(){return P},gC:function(){return ne},Eq:function(){return le},Uc:function(){return se}});var t=n(5630),a=n(9485);n(8554),n(1706);function i(e){return"number"===typeof e}function o(e){return Array.isArray(e)}function c(e){var r=typeof e;return null!=e&&("object"===r||"function"===r)&&!o(e)}function l(e){return null==e}var s=!1;!function(e){var r=new WeakMap}((function(e,r,n,t){var a="string"===typeof r?r.split("."):[r];for(t=0;t<a.length&&e;t+=1)e=e[a[t]];return void 0===e?n:e}));var u=function(e){return function(e,r){var n={};return Object.keys(e).forEach((function(t){var a=e[t];r(a,t,e)&&(n[t]=a)})),n}(e,(function(e){return null!==e&&void 0!==e}))};"undefined"===typeof window||!window.document||window.document.createElement;var d=function(){for(var e=arguments.length,r=new Array(e),n=0;n<e;n++)r[n]=arguments[n];return r.filter(Boolean).join(" ")};["input:not([disabled])","select:not([disabled])","textarea:not([disabled])","embed","iframe","object","a[href]","area[href]","button:not([disabled])","[tabindex]","audio[controls]","video[controls]","*[tabindex]:not([aria-disabled])","*[contenteditable]"].join();function m(e){var r;return function(){if(e){for(var n=arguments.length,t=new Array(n),a=0;a<n;a++)t[a]=arguments[a];r=e.apply(this,t),e=null}return r}}m((function(e){return function(){e.condition,e.message}})),m((function(e){return function(){e.condition,e.message}}));Number.MIN_SAFE_INTEGER,Number.MAX_SAFE_INTEGER;Object.freeze(["base","sm","md","lg","xl","2xl"]);function f(e,r){return o(e)?e.map((function(e){return null===e?null:r(e)})):c(e)?(n=e,Object.keys(n)).reduce((function(n,t){return n[t]=r(e[t]),n}),{}):null!=e?r(e):null;var n}var p=n(7294),g=(n(3703),n(8922));function v(){return v=Object.assign?Object.assign.bind():function(e){for(var r=1;r<arguments.length;r++){var n=arguments[r];for(var t in n)Object.prototype.hasOwnProperty.call(n,t)&&(e[t]=n[t])}return e},v.apply(this,arguments)}function h(e,r){if(null==e)return{};var n,t,a={},i=Object.keys(e);for(t=0;t<i.length;t++)n=i[t],r.indexOf(n)>=0||(a[n]=e[n]);return a}var y=["ratio","children","className"],w=(0,t.Gp)((function(e,r){var n=e.ratio,a=void 0===n?4/3:n,i=e.children,o=e.className,c=h(e,y),l=p.Children.only(i),s=d("chakra-aspect-ratio",o);return p.createElement(t.m$.div,v({ref:r,position:"relative",className:s,_before:{height:0,content:'""',display:"block",paddingBottom:f(a,(function(e){return 1/e*100+"%"}))},__css:{"& > *:not(style)":{overflow:"hidden",position:"absolute",top:"0",right:"0",bottom:"0",left:"0",display:"flex",justifyContent:"center",alignItems:"center",width:"100%",height:"100%"},"& > img, & > video":{objectFit:"cover"}}},c),l)}));var b=["size","centerContent"],x=["size"],_=(0,t.m$)("div");var E=(0,t.Gp)((function(e,r){var n=e.size,t=e.centerContent,a=void 0===t||t,i=h(e,b),o=a?{display:"flex",alignItems:"center",justifyContent:"center"}:{};return p.createElement(_,v({ref:r,boxSize:n,__css:v({},o,{flexShrink:0,flexGrow:0})},i))}));var C=(0,t.Gp)((function(e,r){var n=e.size,t=h(e,x);return p.createElement(E,v({size:n,ref:r,borderRadius:"9999px"},t))}));var k=(0,t.m$)("div",{baseStyle:{display:"flex",alignItems:"center",justifyContent:"center"}});var N=["className","centerContent"],W=(0,t.Gp)((function(e,r){var n=(0,t.Lr)(e),a=n.className,i=n.centerContent,o=h(n,N),c=(0,t.mq)("Container",e);return p.createElement(t.m$.div,v({ref:r,className:d("chakra-container",a)},o,{__css:v({},c,i&&{display:"flex",flexDirection:"column",alignItems:"center"})}))}));var G=["borderLeftWidth","borderBottomWidth","borderTopWidth","borderRightWidth","borderWidth","borderStyle","borderColor"],S=["className","orientation","__css"],j=(0,t.Gp)((function(e,r){var n=(0,t.mq)("Divider",e),a=n.borderLeftWidth,i=n.borderBottomWidth,o=n.borderTopWidth,c=n.borderRightWidth,l=n.borderWidth,s=n.borderStyle,u=n.borderColor,m=h(n,G),f=(0,t.Lr)(e),g=f.className,y=f.orientation,w=void 0===y?"horizontal":y,b=f.__css,x=h(f,S),_={vertical:{borderLeftWidth:a||c||l||"1px",height:"100%"},horizontal:{borderBottomWidth:i||o||l||"1px",width:"100%"}};return p.createElement(t.m$.hr,v({ref:r,"aria-orientation":w},x,{__css:v({},m,{border:"0",borderColor:u,borderStyle:s},_[w],b),className:d("chakra-divider",g)}))}));var R=["direction","align","justify","wrap","basis","grow","shrink"],T=(0,t.Gp)((function(e,r){var n=e.direction,a=e.align,i=e.justify,o=e.wrap,c=e.basis,l=e.grow,s=e.shrink,u=h(e,R),d={display:"flex",flexDirection:n,alignItems:a,justifyContent:i,flexWrap:o,flexBasis:c,flexGrow:l,flexShrink:s};return p.createElement(t.m$.div,v({ref:r,__css:d},u))}));var $=["templateAreas","gap","rowGap","columnGap","column","row","autoFlow","autoRows","templateRows","autoColumns","templateColumns"],L=["area","colSpan","colStart","colEnd","rowEnd","rowSpan","rowStart"],A=(0,t.Gp)((function(e,r){var n=e.templateAreas,a=e.gap,i=e.rowGap,o=e.columnGap,c=e.column,l=e.row,s=e.autoFlow,u=e.autoRows,d=e.templateRows,m=e.autoColumns,f=e.templateColumns,g=h(e,$),y={display:"grid",gridTemplateAreas:n,gridGap:a,gridRowGap:i,gridColumnGap:o,gridAutoColumns:m,gridColumn:c,gridRow:l,gridAutoFlow:s,gridAutoRows:u,gridTemplateRows:d,gridTemplateColumns:f};return p.createElement(t.m$.div,v({ref:r,__css:y},g))}));function I(e){return f(e,(function(e){return"auto"===e?"auto":"span "+e+"/span "+e}))}var B=(0,t.Gp)((function(e,r){var n=e.area,a=e.colSpan,i=e.colStart,o=e.colEnd,c=e.rowEnd,l=e.rowSpan,s=e.rowStart,d=h(e,L),m=u({gridArea:n,gridColumn:I(a),gridRow:I(l),gridColumnStart:i,gridColumnEnd:o,gridRowStart:s,gridRowEnd:c});return p.createElement(t.m$.div,v({ref:r,__css:m},d))}));var z=["className","isExternal"],M=(0,t.Gp)((function(e,r){var n=(0,t.mq)("Link",e),a=(0,t.Lr)(e),i=a.className,o=a.isExternal,c=h(a,z);return p.createElement(t.m$.a,v({target:o?"_blank":void 0,rel:o?"noopener":void 0,ref:r,className:d("chakra-link",i)},c,{__css:n}))}));var O=["children","styleType","stylePosition","spacing"],D=["as"],F=(0,t.eC)("List"),X=F[0],q=F[1],Y=(0,t.Gp)((function(e,r){var n,a=(0,t.jC)("List",e),i=(0,t.Lr)(e),o=i.children,c=i.styleType,l=void 0===c?"none":c,s=i.stylePosition,u=i.spacing,d=h(i,O),m=(0,g.WR)(o),f=u?((n={})["& > *:not(style) ~ *:not(style)"]={mt:u},n):{};return p.createElement(X,{value:a},p.createElement(t.m$.ul,v({ref:r,listStyleType:l,listStylePosition:s,role:"list",__css:v({},a.container,f)},d),m))}));var P=(0,t.Gp)((function(e,r){e.as;var n=h(e,D);return p.createElement(Y,v({ref:r,as:"ul",styleType:"initial",marginStart:"1em"},n))}));var U=(0,t.Gp)((function(e,r){var n=q();return p.createElement(t.m$.li,v({ref:r},e,{__css:n.item}))}));var H=["columns","spacingX","spacingY","spacing","minChildWidth"],K=(0,t.Gp)((function(e,r){var n=e.columns,t=e.spacingX,a=e.spacingY,o=e.spacing,c=e.minChildWidth,s=h(e,H),u=c?f(c,(function(e){return l(e)?null:"repeat(auto-fit, minmax("+(i(r=e)?r+"px":r)+", 1fr))";var r})):f(n,(function(e){return l(e)?null:"repeat("+e+", minmax(0, 1fr))"}));return p.createElement(A,v({ref:r,gap:o,columnGap:t,rowGap:a,templateColumns:u},s))}));var Q=(0,t.m$)("div",{baseStyle:{flex:1,justifySelf:"stretch",alignSelf:"stretch"}});var Z="& > *:not(style) ~ *:not(style)";var J=["isInline","direction","align","justify","spacing","wrap","children","divider","className","shouldWrapChildren"],V=function(e){return p.createElement(t.m$.div,v({className:"chakra-stack__item"},e,{__css:v({display:"inline-block",flex:"0 0 auto",minWidth:0},e.__css)}))},ee=(0,t.Gp)((function(e,r){var n,a=e.isInline,i=e.direction,o=e.align,c=e.justify,l=e.spacing,s=void 0===l?"0.5rem":l,u=e.wrap,m=e.children,y=e.divider,w=e.className,b=e.shouldWrapChildren,x=h(e,J),_=a?"row":null!=i?i:"column",E=p.useMemo((function(){return function(e){var r,n=e.spacing,t=e.direction,a={column:{marginTop:n,marginEnd:0,marginBottom:0,marginStart:0},row:{marginTop:0,marginEnd:0,marginBottom:0,marginStart:n},"column-reverse":{marginTop:0,marginEnd:0,marginBottom:n,marginStart:0},"row-reverse":{marginTop:0,marginEnd:n,marginBottom:0,marginStart:0}};return(r={flexDirection:t})[Z]=f(t,(function(e){return a[e]})),r}({direction:_,spacing:s})}),[_,s]),C=p.useMemo((function(){return function(e){var r=e.spacing,n=e.direction,t={column:{my:r,mx:0,borderLeftWidth:0,borderBottomWidth:"1px"},"column-reverse":{my:r,mx:0,borderLeftWidth:0,borderBottomWidth:"1px"},row:{mx:r,my:0,borderLeftWidth:"1px",borderBottomWidth:0},"row-reverse":{mx:r,my:0,borderLeftWidth:"1px",borderBottomWidth:0}};return{"&":f(n,(function(e){return t[e]}))}}({spacing:s,direction:_})}),[s,_]),k=!!y,N=!b&&!k,W=(0,g.WR)(m),G=N?W:W.map((function(e,r){var n="undefined"!==typeof e.key?e.key:r,t=r+1===W.length,a=b?p.createElement(V,{key:n},e):e;if(!k)return a;var i=t?null:p.cloneElement(y,{__css:C});return p.createElement(p.Fragment,{key:n},a,i)})),S=d("chakra-stack",w);return p.createElement(t.m$.div,v({ref:r,display:"flex",alignItems:o,justifyContent:c,flexDirection:E.flexDirection,flexWrap:u,className:S,__css:k?{}:(n={},n[Z]=E[Z],n)},x),G)}));var re=(0,t.Gp)((function(e,r){return p.createElement(ee,v({align:"center"},e,{direction:"row",ref:r}))}));var ne=(0,t.Gp)((function(e,r){return p.createElement(ee,v({align:"center"},e,{direction:"column",ref:r}))}));var te=["className","align","decoration","casing"],ae=(0,t.Gp)((function(e,r){var n=(0,t.mq)("Text",e),a=(0,t.Lr)(e);a.className,a.align,a.decoration,a.casing;var i=h(a,te),o=u({textAlign:e.align,textDecoration:e.decoration,textTransform:e.casing});return p.createElement(t.m$.p,v({ref:r,className:d("chakra-text",e.className)},o,i,{__css:n}))}));var ie=["spacing","spacingX","spacingY","children","justify","direction","align","className","shouldWrapChildren"],oe=["className"];function ce(e){return"number"===typeof e?e+"px":e}var le=(0,t.Gp)((function(e,r){var n=e.spacing,i=void 0===n?"0.5rem":n,o=e.spacingX,c=e.spacingY,l=e.children,s=e.justify,u=e.direction,m=e.align,g=e.className,y=e.shouldWrapChildren,w=h(e,ie),b=p.useMemo((function(){var e={spacingX:o,spacingY:c},r=e.spacingX,n=void 0===r?i:r,t=e.spacingY,l=void 0===t?i:t;return{"--chakra-wrap-x-spacing":function(e){return f(n,(function(r){return ce((0,a.fr)("space",r)(e))}))},"--chakra-wrap-y-spacing":function(e){return f(l,(function(r){return ce((0,a.fr)("space",r)(e))}))},"--wrap-x-spacing":"calc(var(--chakra-wrap-x-spacing) / 2)","--wrap-y-spacing":"calc(var(--chakra-wrap-y-spacing) / 2)",display:"flex",flexWrap:"wrap",justifyContent:s,alignItems:m,flexDirection:u,listStyleType:"none",padding:"0",margin:"calc(var(--wrap-y-spacing) * -1) calc(var(--wrap-x-spacing) * -1)","& > *:not(style)":{margin:"var(--wrap-y-spacing) var(--wrap-x-spacing)"}}}),[i,o,c,s,m,u]),x=y?p.Children.map(l,(function(e,r){return p.createElement(se,{key:r},e)})):l;return p.createElement(t.m$.div,v({ref:r,className:d("chakra-wrap",g),overflow:"hidden"},w),p.createElement(t.m$.ul,{className:"chakra-wrap__list",__css:b},x))}));var se=(0,t.Gp)((function(e,r){var n=e.className,a=h(e,oe);return p.createElement(t.m$.li,v({ref:r,__css:{display:"flex",alignItems:"flex-start"},className:d("chakra-wrap__listitem",n)},a))}))}}]);