(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[1709],{56655:function(e,n,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/overview",function(){return t(86990)}])},81770:function(e,n,t){"use strict";t.d(n,{D:function(){return E},Z:function(){return k}});var r=t(85893),i=t(81341),o=t(70878),a=t(71369),l=t(91955),c=t(39306),s=t(34208),u=t(63067),d=t(98646),f=t(54515),m=t(41120),h=t(75154),p=t(29323),g=(t(67294),t(25587)),x=t(79246),y=t(78729),b=t(74705),j=t(63191),v=t(92430),C=t(56847),T=t(13724),O=t(23688);function S(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function w(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{},r=Object.keys(t);"function"===typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(t).filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable})))),r.forEach((function(n){S(e,n,t[n])}))}return e}var N=(0,m.Z)((function(e){return(0,h.Z)({tableIcon:{},tableContainer:{borderRadius:(0,f.Q)(12)},withIcon:{display:"flex",alignItems:"center","& $tableIcon":{top:-1,marginRight:(0,f.Q)(10)}},pagination:{marginTop:e.spacing(3),width:"100%",fontSize:(0,f.Q)(12),"& button":{padding:0,margin:"0 4px"}}})})),k=(0,p.Pi)((function(e){var n,t=null!==(n=e.pools)&&void 0!==n?n:[],u=N(),d=(0,c.H)(),f=(0,l.M)(),m=(0,l.K)(),h=function(e){return e.lpToken.symbol},p=(0,s.E)("totalLiquidity",m,"desc"),x=p.comparator,y=p.handleRequestSort,b=function(e){var n;return null===(n=e.poolVolume)||void 0===n?void 0:n.last24hVolume},S=function(e){var n;return null===(n=e.poolVolume)||void 0===n?void 0:n.last7dVolume},k=function(e){return null!==e&&void 0!==e?e:""},E=t.slice().sort(x),L=(0,v.h0)(E,e.perPage),I=e.perPage&&e.perPage<E.length;return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(C.Z,{className:u.tableContainer,children:(0,r.jsxs)(g.i,{children:[(0,r.jsx)(g.i.Head,{children:(0,r.jsxs)(g.i.Row,{children:[(0,r.jsx)(g.i.Header,{width:150,onClick:function(){return y(!1,h)},children:"Name"}),(0,r.jsx)(g.i.Header,{width:164,onClick:function(){return y("chainId",a.IB)},children:"Network"}),(0,r.jsx)(g.i.Header,{onClick:function(){return y("sponsoredBy",k)},children:"Supported"}),(0,r.jsx)(g.i.Header,{width:252,onClick:function(){return y("totalLiquidity",m)},children:"Liquidity"}),(0,r.jsx)(g.i.Header,{onClick:function(){return y(!1,b)},children:"Volume (24h)"}),(0,r.jsx)(g.i.Header,{onClick:function(){return y(!1,S)},children:"Volume (7d)"})]})}),(0,r.jsx)(g.i.Body,{children:L.pageItems.map((function(n,t){var a=n.poolVolume;return(0,r.jsxs)(g.i.Row,{onClick:function(){return function(n){e.nav?e.nav(n.id):d.toPoolAdd(n.id)}(n)},children:[(0,r.jsx)(g.i.Cell,{children:(0,r.jsxs)("div",{className:u.withIcon,children:[(0,r.jsx)(i.r,{currency:n.poolCurrency,size:24,className:u.tableIcon}),(0,T.K)(n.poolCurrency)]})}),(0,r.jsx)(g.i.Cell,{children:(0,r.jsx)(o.uc,{chainId:n.chainId})}),(0,r.jsx)(g.i.Cell,{children:n.sponsoredBy&&(0,r.jsx)(O.q,{title:n.sponsoredBy})}),(0,r.jsx)(g.i.Cell,{children:f(n.totalLiquidity)}),(0,r.jsx)(g.i.Cell,{align:"left",children:a?(0,j.M)(a.last24hVolume):"-"}),(0,r.jsx)(g.i.Cell,{align:"left",children:a?(0,j.M)(a.last7dVolume):"-"})]},t)}))})]})}),I&&(0,r.jsx)("div",{className:u.pagination,children:(0,r.jsx)(v.ZP,w({},L))})]})})),E=(0,p.Pi)((function(e){var n,t=null!==(n=e.pools)&&void 0!==n?n:[],f=N(),m=(0,d.l)((0,u.Yh)()),h=(0,l.K)(),p=(0,c.H)(),x=(0,l.M)(),v=function(e){return L(m.pickWalletBalance(e.lpToken))},C=function(e){return h(m.pickWalletBalance(e.lpToken))},O=function(e){return L((0,b.mm)(e,(0,b.gi)(e)))},S=function(e){return(0,y.b)((0,b.HJ)(e))},w=function(e){return e.lpToken.symbol},k=function(e){var n;return null===(n=e.poolVolume)||void 0===n?void 0:n.last24hVolume},E=(0,s.E)(!1,C,"desc"),I=E.comparator,R=E.handleRequestSort;return(0,r.jsxs)(g.i,{children:[(0,r.jsx)(g.i.Head,{children:(0,r.jsxs)(g.i.Row,{children:[(0,r.jsx)(g.i.Header,{onClick:function(){return R(!1,w)},children:"Name"}),(0,r.jsx)(g.i.Header,{onClick:function(){return R("chainId",a.IB)},children:"Network"}),(0,r.jsx)(g.i.Header,{align:"left",onClick:function(){return R(!1,S)},children:"Pool Share"}),(0,r.jsx)(g.i.Header,{align:"left",onClick:function(){return R("totalLiquidity",h)},children:"Liquidity"}),(0,r.jsx)(g.i.Header,{align:"left",onClick:function(){return R(!1,C)},children:"Your Pool Tokens"}),(0,r.jsx)(g.i.Header,{align:"left",onClick:function(){return R(!1,O)},children:"Pooled Tokens"}),(0,r.jsx)(g.i.Header,{align:"left",onClick:function(){return R(!1,k)},children:"Volume (24h)"})]})}),(0,r.jsx)(g.i.Body,{children:t.slice().sort(I).map((function(e,n){return(0,r.jsxs)(g.i.Row,{onClick:function(){return function(e){p.toPool(e.id)}(e)},children:[(0,r.jsx)(g.i.Cell,{children:(0,r.jsxs)("div",{className:f.withIcon,children:[(0,r.jsx)(i.r,{currency:e.poolCurrency,size:24,className:f.tableIcon}),(0,T.K)(e.poolCurrency)]})}),(0,r.jsx)(g.i.Cell,{children:(0,r.jsx)("div",{className:f.withIcon,children:(0,r.jsx)(o.uc,{chainId:e.chainId})})}),(0,r.jsx)(g.i.Cell,{align:"left",children:S(e)}),(0,r.jsx)(g.i.Cell,{align:"left",children:x(e.totalLiquidity)}),(0,r.jsx)(g.i.Cell,{align:"left",children:v(e)}),(0,r.jsx)(g.i.Cell,{align:"left",children:O(e)}),(0,r.jsx)(g.i.Cell,{align:"left",children:e.poolVolume?(0,j.M)(e.poolVolume.last24hVolume):"-"})]},n)}))})]})})),L=function(e){return e?x.d.nice(e):"-"}},13402:function(e,n,t){"use strict";var r=t(85893),i=(t(67294),t(41120)),o=t(75154),a=t(54515),l=t(19536);function c(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}var s=(0,i.Z)((function(e){return(0,o.Z)({container:c({width:"100%"},e.breakpoints.down("xs"),{maxWidth:"90%"}),header:c({fontWeight:500,fontSize:(0,a.Q)(36),lineHeight:(0,a.Q)(36),marginTop:e.spacing(3),fontFamily:l.b.ROC_GROTESK,marginBottom:(0,a.Q)(24),letterSpacing:"-0.02em"},e.breakpoints.up("md"),{fontSize:(0,a.Q)(46),lineHeight:(0,a.Q)(46),letterSpacing:"-0.03em"}),subHeader:c({color:e.palette.text.secondary,fontSize:(0,a.Q)(16),lineHeight:(0,a.Q)(24)},e.breakpoints.up("sm"),{marginRight:(0,a.Q)(200)}),accent:{color:e.palette.success.main}})}));function u(e){var n=e.sub,t=e.children,i=s();return(0,r.jsxs)("div",{className:i.container,children:[(0,r.jsx)("h1",{className:i.header,children:t}),n&&(0,r.jsx)("div",{className:i.subHeader,children:n})]})}u.Accent=function(e){var n=e.children,t=s();return(0,r.jsx)("span",{className:t.accent,children:n})},n.Z=u},23688:function(e,n,t){"use strict";t.d(n,{q:function(){return s}});var r=t(85893),i=t(54515),o=t(1591),a=t(87083),l=t(70878),c=(0,o.Z)({tooltip:{fontSize:(0,i.Q)(12),width:(0,i.Q)(201),maxWidth:(0,i.Q)(201),textAlign:"center",padding:(0,i.Q)(8)}})(a.ZP),s=function(e){var n=e.title,t=void 0===n?"Supported":n,i=e.sm;return(0,r.jsx)(c,{arrow:!0,title:"This liquidity pool is supported by an external team.",placement:"top",children:(0,r.jsx)("div",{children:(0,r.jsx)(l.__,{sm:i,color:"#fff",children:t})})})}},91955:function(e,n,t){"use strict";t.d(n,{K:function(){return l},M:function(){return a}});var r=t(63191),i=t(63067),o=t(67294);function a(){var e=(0,i.sS)();return function(n){var t=e.toFiatAmount(n);return t?(0,r.$y)(t):"-"}}function l(){var e=(0,i.sS)();return(0,o.useCallback)((function(n){var t;if(n)return null===(t=e.toFiatAmount(n))||void 0===t?void 0:t.value}),[e])}},34208:function(e,n,t){"use strict";t.d(n,{E:function(){return a}});var r=t(67294);function i(e,n){(null==n||n>e.length)&&(n=e.length);for(var t=0,r=new Array(n);t<n;t++)r[t]=e[t];return r}function o(e,n){return function(e){if(Array.isArray(e))return e}(e)||function(e,n){var t=null==e?null:"undefined"!==typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=t){var r,i,o=[],a=!0,l=!1;try{for(t=t.call(e);!(a=(r=t.next()).done)&&(o.push(r.value),!n||o.length!==n);a=!0);}catch(c){l=!0,i=c}finally{try{a||null==t.return||t.return()}finally{if(l)throw i}}return o}}(e,n)||function(e,n){if(!e)return;if("string"===typeof e)return i(e,n);var t=Object.prototype.toString.call(e).slice(8,-1);"Object"===t&&e.constructor&&(t=e.constructor.name);if("Map"===t||"Set"===t)return Array.from(t);if("Arguments"===t||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t))return i(e,n)}(e,n)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function a(){var e=arguments.length>0&&void 0!==arguments[0]&&arguments[0],n=arguments.length>1?arguments[1]:void 0,t=arguments.length>2?arguments[2]:void 0,i=function(e,n,t,r){var i=t?e[t]:e,o=t?n[t]:n,a=r?r(i):i,l=r?r(o):o;return l<a?-1:l>a?1:0},a=function(e,n,t){return"desc"===e?function(e,r){return i(e,r,n,t)}:function(e,r){return-i(e,r,n,t)}},l=o(r.useState(e),2),c=l[0],s=l[1],u=o(r.useState(null!==t&&void 0!==t?t:"asc"),2),d=u[0],f=u[1],m=o(r.useState((function(){return null!==n&&void 0!==n?n:function(){return e}})),2),h=m[0],p=m[1],g=function(e,n){p((function(){return n})),f(c===e&&"asc"===d?"desc":"asc"),s(e)},x=a(d,c,h);return{handleRequestSort:g,comparator:x}}},86990:function(e,n,t){"use strict";t.r(n),t.d(n,{default:function(){return de}});var r=t(74839),i=t(85893),o=t(282),a=t(62989),l=t(41120),c=t(75154),s=t(67294),u=t(989),d=t(54515),f=t(19536),m=t(86010),h=t(63191),p=t(38657),g=t(70722),x=t(3187);function y(e,n){(null==n||n>e.length)&&(n=e.length);for(var t=0,r=new Array(n);t<n;t++)r[t]=e[t];return r}function b(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function j(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{},r=Object.keys(t);"function"===typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(t).filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable})))),r.forEach((function(n){b(e,n,t[n])}))}return e}function v(e,n){return function(e){if(Array.isArray(e))return e}(e)||function(e,n){var t=null==e?null:"undefined"!==typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=t){var r,i,o=[],a=!0,l=!1;try{for(t=t.call(e);!(a=(r=t.next()).done)&&(o.push(r.value),!n||o.length!==n);a=!0);}catch(c){l=!0,i=c}finally{try{a||null==t.return||t.return()}finally{if(l)throw i}}return o}}(e,n)||T(e,n)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function C(e){return function(e){if(Array.isArray(e))return y(e)}(e)||function(e){if("undefined"!==typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}(e)||T(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function T(e,n){if(e){if("string"===typeof e)return y(e,n);var t=Object.prototype.toString.call(e).slice(8,-1);return"Object"===t&&e.constructor&&(t=e.constructor.name),"Map"===t||"Set"===t?Array.from(t):"Arguments"===t||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t)?y(e,n):void 0}}function O(e,n){var t=v(e.split("-"),2),r=t[0],i=t[1],o=v(n.split("-"),2),a=o[0],l=o[1];return r===a&&i===l}function S(e,n){return e.find((function(e){return O(e.dayDate,n.dayDate)}))?e.map((function(e){return O(e.dayDate,n.dayDate)?j({},e,{value:Number(e.value)+Number(n.value)}):e})):C(e).concat([n])}function w(e,n){return e.find((function(e){return e.weekDate===n.weekDate}))?e.map((function(e){return e.weekDate!==n.weekDate?e:j({},e,{value:Number(e.value)+Number(n.value)})})):C(e).concat([n])}function N(e,n){if(null==e)return{};var t,r,i=function(e,n){if(null==e)return{};var t,r,i={},o=Object.keys(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||(i[t]=e[t]);return i}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(i[t]=e[t])}return i}var k,E,L,I=(0,l.Z)((function(e){return(0,c.Z)({card:{borderRadius:(0,d.Q)(12),padding:e.spacing(3),paddingTop:(0,d.Q)(23),paddingBottom:e.spacing(2),height:(0,d.Q)(360),boxShadow:"none"},title:{fontSize:(0,d.Q)(12),letterSpacing:0,color:e.palette.text.secondary},subtitle:{fontSize:(0,d.Q)(12),letterSpacing:0,color:e.palette.text.secondary,marginTop:(0,d.Q)(2)},amount:{fontFamily:f.b.ROC_GROTESK,fontWeight:f.U.MEDIUM,fontSize:(0,d.Q)(24),lineHeight:(0,d.Q)(28),marginTop:(0,d.Q)(6)},info:{height:(0,d.Q)(82)},tgl:{border:"1px ".concat(e.palette.borders.default," solid"),color:e.palette.text.primary,"&:hover":{border:"1px ".concat(e.palette.primary.main," solid"),backgroundColor:"unset"}},tglBtn:{fontFamily:f.b.ROBOTO,fontWeight:f.U.REGULAR,fontSize:(0,d.Q)(12),minWidth:(0,d.Q)(35),padding:e.spacing(.5,1),borderRadius:(0,d.Q)(6),marginLeft:(0,d.Q)(4),marginBottom:(0,d.Q)(4)},active:{borderColor:e.palette.primary.main},buttonsContainer:{paddingTop:(0,d.Q)(3),display:"flex",maxWidth:(0,d.Q)(215),flexWrap:"wrap",justifyContent:"flex-end",height:(0,d.Q)(36)}})}));function R(e){var n,t=e.getTitle,r=e.data,l=e.isLoading,c=e.chart,d=e.buckets,f=null!==(n=N(e,["getTitle","data","isLoading","chart","buckets"]).formatValue)&&void 0!==n?n:h.M,y=I(),b=(0,s.useState)(k.DAY),j=b[0],v=b[1],C=r&&function(e,n){return n===k.DAY?e:n===k.WEEK?e.reduce(w,[]):n===k.MONTH?e.reduce(S,[]):e}(r,j),T=(0,x.Z)(C),O=T.hoveredTimestamp,L=T.setHoveredValue,R=T.setHoveredTimestamp,Q=T.displayedTimestamp,H=T.displayedValue,A=c===E.LINE?u.w:p.v,V=t(j);return(0,i.jsx)(a.Z,{className:y.card,children:(0,i.jsx)(A,{data:C,color:"#50BEAF",value:H,onSetValue:L,onSetTimestamp:R,hoveredTimestamp:O,isLoading:l,topLeft:(0,i.jsxs)("div",{className:y.info,children:[(0,i.jsx)("div",{className:y.title,children:V}),(0,i.jsx)("div",{className:y.amount,children:H?f(H):"-"}),(0,i.jsx)("div",{className:y.subtitle,children:Q?(0,i.jsxs)(i.Fragment,{children:[(0,g.formatInTimeZone)(1e3*Q,"UTC","LLL d, y, p")," (UTC)"]}):null})]}),topRight:d&&(0,i.jsx)("div",{className:y.buttonsContainer,children:d.map((function(e){return(0,i.jsx)(o.Z,{variant:"outlined",className:(0,m.default)(y.tglBtn,j===e&&y.active),onClick:function(){return v(e)},children:e[0]},e)}))})})})}!function(e){e.DAY="DAY",e.WEEK="WEEK",e.MONTH="MONTH"}(k||(k={})),function(e){e.LINE="LINE",e.BAR="BAR"}(E||(E={})),function(e){e.TRANSFER_VOLUME="TRANSFER_VOLUME",e.POOL_VOLUME="POOL_VOLUME",e.TOTAL_VOLUME="TOTAL_VOLUME",e.RECENT_TRANSACTIONS="RECENT_TRANSACTIONS",e.VOLUME_24H="VOLUME_24H",e.TVL="TVL",e.TVL_CURRENT="TVL_CURRENT",e.POOL_VOLUME_CURRENT="POOL_VOLUME_CURRENT"}(L||(L={}));var Q=t(39306),H=t(63067),A=t(48718),V=t(41749),P=t(81770),Z=t(13402),M=t(25587),_=t(26654),D=t(7482),U=t(92430),B=t(70878),F=t(56847),W=t(96486),K=t(31069),q=t(81390),z=t(3141),Y=t(74579),G=t(58365),X=t(98469),$=t(13724);function J(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function ee(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{},r=Object.keys(t);"function"===typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(t).filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable})))),r.forEach((function(n){J(e,n,t[n])}))}return e}function ne(e,n){if(null==e)return{};var t,r,i=function(e,n){if(null==e)return{};var t,r,i={},o=Object.keys(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||(i[t]=e[t]);return i}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(i[t]=e[t])}return i}var te=(0,l.Z)((function(e){return(0,c.Z)({table:{borderRadius:"".concat((0,d.Q)(12)," !important")},tabs:{marginTop:e.spacing(2),marginBottom:e.spacing(3)},link:{marginLeft:e.spacing(1),color:e.palette.text.primary},currencyInfo:{display:"flex",alignItems:"center"},icon:{marginLeft:e.spacing(.5),marginRight:e.spacing(.5)},tableWrapper:{borderRadius:(0,d.Q)(12),boxShadow:"none",marginBottom:e.spacing(3)},title:{fontSize:(0,d.Q)(16),padding:e.spacing(2,0),fontWeight:f.U.MEDIUM,fontFamily:f.b.ROC_GROTESK},filtersContainer:{display:"flex",alignItems:"center",justifyContent:"space-between",marginBottom:(0,d.Q)(12)},filter:J({},e.breakpoints.down("xs"),{width:"100%"}),column:{width:(0,d.Q)(175)},rightColumn:{width:(0,d.Q)(240)}})})),re=function(){var e,n,t,r=te(),o=(0,H.MN)(),a=(0,Y.k)(),l=(0,s.useMemo)(ie,[]),c=(0,s.useMemo)(oe,[]),u=(0,s.useMemo)((function(){return oe(4)}),[]),f=(0,s.useMemo)((function(){return oe(6)}),[]),m=A.S.transfers.useQuery({srcChainId:null===(e=a.srcNetwork)||void 0===e?void 0:e.chainId,dstChainId:null===(n=a.dstNetwork)||void 0===n?void 0:n.chainId,srcCurrencySymbol:(0,$.K)(a.srcToken),dstCurrencySymbol:(0,$.K)(a.dstToken)},{refetchInterval:15e3,retry:!1,select:function(e){return e.map((function(e){var n=e.amount,t=e.usdValue,r=e.srcCurrencySymbol;return ee({},ne(e,["amount","usdValue","srcCurrencySymbol"]),{srcCurrencySymbol:r,usdValue:l(t),amount:"BTC.b"===r?f(n):"ETH"===r?u(n):c(n)})}))}}),h=m.isLoading,p=m.data,g=(0,W.uniqBy)(o.currencies,$.K),x=(0,H.vF)().enabledNetworks,y=(0,U.h0)(p,20);return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)("div",{className:r.filtersContainer,children:(0,i.jsxs)(V.Z,{container:!0,justifyContent:"space-between",alignItems:"center",children:[(0,i.jsx)(V.Z,{xs:12,sm:2,item:!0,className:r.title,children:"Transfers"}),(0,i.jsx)(V.Z,{xs:12,sm:"auto",item:!0,children:(0,i.jsxs)(V.Z,{container:!0,spacing:2,justifyContent:"flex-end",children:[(0,i.jsx)(V.Z,{item:!0,xs:6,sm:"auto",children:(0,i.jsx)(q.k,{label:"Source Token",className:r.filter,tokenList:g,value:a.srcToken,onChange:a.setSrcToken})}),(0,i.jsx)(V.Z,{item:!0,xs:6,sm:"auto",children:(0,i.jsx)(z.k,{label:"Source Network",networkList:x,className:r.filter,value:a.srcNetwork,onChange:a.setSrcNetwork})}),(0,i.jsx)(V.Z,{item:!0,xs:6,sm:"auto",children:(0,i.jsx)(q.k,{label:"Destination Token",className:r.filter,tokenList:g,value:a.dstToken,onChange:a.setDstToken})}),(0,i.jsx)(V.Z,{item:!0,xs:6,sm:"auto",children:(0,i.jsx)(z.k,{label:"Destination Network",networkList:x,className:r.filter,value:a.dstNetwork,onChange:a.setDstNetwork})})]})})]})}),(0,i.jsx)(F.Z,{className:r.tableWrapper,children:(0,i.jsxs)(M.i,{children:[(0,i.jsx)(M.i.Head,{children:(0,i.jsxs)(M.i.Row,{children:[(0,i.jsx)(M.i.Header,{className:r.column,children:"Action"}),(0,i.jsx)(M.i.Header,{className:r.column,children:"From"}),(0,i.jsx)(M.i.Header,{className:r.column,children:"To"}),(0,i.jsx)(M.i.Header,{className:r.column,children:"Amount"}),(0,i.jsx)(M.i.Header,{className:r.column,children:"Value"}),(0,i.jsx)(M.i.Header,{children:"Account"}),(0,i.jsx)(M.i.Header,{align:"right",className:r.rightColumn,children:"Time"})]})}),(0,i.jsx)(M.i.Body,{children:!h&&(null===(t=y.pageItems)||void 0===t?void 0:t.map((function(e){var n,t=(0,_.getScanLink)(e.srcChainId,e.srcTxHash);return(0,i.jsxs)(M.i.Row,{onClick:function(){return window.open(t,"_blank")},children:[(0,i.jsx)(M.i.Cell,{children:(0,i.jsxs)("div",{className:r.currencyInfo,children:[e.srcCurrencySymbol,(0,i.jsx)(K.Z,{className:r.icon}),null!==(n=e.dstCurrencySymbol)&&void 0!==n?n:e.srcCurrencySymbol]})}),(0,i.jsx)(M.i.Cell,{children:(0,i.jsx)(B.uc,{chainId:e.srcChainId})}),(0,i.jsx)(M.i.Cell,{children:(0,i.jsx)(B.uc,{chainId:e.dstChainId})}),(0,i.jsx)(M.i.Cell,{children:e.amount}),(0,i.jsx)(M.i.Cell,{children:e.usdValue}),(0,i.jsx)(M.i.Cell,{children:e.srcAddress&&(0,D.X)(e.srcAddress)}),(0,i.jsx)(M.i.Cell,{align:"right",children:(0,X.Bb)(e.srcTxTimestamp)})]},e.srcTxHash)})))})]})}),h&&(0,i.jsxs)("div",{children:[(0,i.jsx)(G.Z,{height:(0,d.Q)(100)}),(0,i.jsx)(G.Z,{height:(0,d.Q)(100)}),(0,i.jsx)(G.Z,{height:(0,d.Q)(100)})]}),(0,i.jsx)(U.ZP,ee({},y))]})};function ie(){var e=new Intl.NumberFormat("en-US",{minimumFractionDigits:2,maximumFractionDigits:2,style:"currency",currency:"USD"});return function(n){return null==n?"-":e.format(n)}}function oe(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:2,n=new Intl.NumberFormat("en-US",{minimumFractionDigits:e,maximumFractionDigits:e});return function(e){return null==e?"-":n.format(e)}}function ae(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}var le,ce=(0,l.Z)((function(e){return(0,c.Z)({root:ae({marginTop:e.spacing(8)},e.breakpoints.up("md"),{marginBottom:e.spacing(20),maxWidth:(0,d.Q)(1104)}),header:{fontSize:(0,d.Q)(16),padding:e.spacing(2,0),fontWeight:f.U.MEDIUM,fontFamily:f.b.ROC_GROTESK},content:{marginTop:e.spacing(8),marginBottom:e.spacing(2)},pagination:{marginTop:e.spacing(3),width:"100%",fontSize:(0,d.Q)(12),"& button":{padding:0,margin:"0 4px"}},table:{width:"100%",marginTop:e.spacing(8)}})})),se=(ae(le={},k.DAY,"24H"),ae(le,k.WEEK,"7D"),ae(le,k.MONTH,"Monthly"),le);var ue=t(25327),de=(0,r.XC)(ue.E,(function(){var e=ce(),n=A.S.getDailyTotalTVL.useQuery(),t=A.S.getDailyTotalVolume.useQuery({}),r=A.S.dailyTransfers.useQuery({}),o=(0,H.Eu)().pools,a=(0,Q.H)();return(0,i.jsxs)("div",{className:e.root,children:[(0,i.jsx)(Z.Z,{sub:"Explore Stargate and gain insight to all of the liquidity transport protocol\u2019s activity across 8 chains",children:"Protocol Overview"}),(0,i.jsxs)(V.Z,{container:!0,spacing:2,className:e.content,children:[(0,i.jsx)(V.Z,{item:!0,xs:12,children:(0,i.jsx)(R,{data:n.data,isLoading:n.isLoading,getTitle:function(){return"TVL"},metric:L.TVL,chart:E.LINE})}),(0,i.jsx)(V.Z,{item:!0,xs:12,md:6,children:(0,i.jsx)(R,{data:r.data,isLoading:r.isLoading,getTitle:function(){return"Transactions"},metric:L.TRANSFER_VOLUME,chart:E.BAR,formatValue:function(e){return e.toLocaleString("en-US")},buckets:[k.DAY,k.WEEK,k.MONTH]})}),(0,i.jsx)(V.Z,{item:!0,xs:12,md:6,children:(0,i.jsx)(R,{data:t.data,isLoading:t.isLoading,getTitle:function(e){return"Volume ".concat(se[e])},metric:L.VOLUME_24H,chart:E.BAR,buckets:[k.DAY,k.WEEK,k.MONTH]})})]}),(0,i.jsx)("div",{className:e.table,children:(0,i.jsx)(re,{})}),(0,i.jsxs)("div",{className:e.table,children:[(0,i.jsx)("div",{className:e.header,children:"Pools"}),(0,i.jsx)(P.Z,{pools:o,nav:a.toPoolOverview,perPage:8})]})]})}))},78729:function(e,n,t){"use strict";function r(e){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:2;return void 0!==e&&Number.isFinite(e)?(100*e).toFixed(n)+"%":"-"}t.d(n,{b:function(){return r}})}},function(e){e.O(0,[296,7581,2425,3818,6924,6899,9774,2888,179],(function(){return n=56655,e(e.s=n);var n}));var n=e.O();_N_E=n}]);