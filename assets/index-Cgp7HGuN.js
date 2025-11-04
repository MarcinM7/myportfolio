(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const l of document.querySelectorAll('link[rel="modulepreload"]'))r(l);new MutationObserver(l=>{for(const c of l)if(c.type==="childList")for(const f of c.addedNodes)f.tagName==="LINK"&&f.rel==="modulepreload"&&r(f)}).observe(document,{childList:!0,subtree:!0});function i(l){const c={};return l.integrity&&(c.integrity=l.integrity),l.referrerPolicy&&(c.referrerPolicy=l.referrerPolicy),l.crossOrigin==="use-credentials"?c.credentials="include":l.crossOrigin==="anonymous"?c.credentials="omit":c.credentials="same-origin",c}function r(l){if(l.ep)return;l.ep=!0;const c=i(l);fetch(l.href,c)}})();function by(s){return s&&s.__esModule&&Object.prototype.hasOwnProperty.call(s,"default")?s.default:s}var Zf={exports:{}},Ro={};/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var __;function Ay(){if(__)return Ro;__=1;var s=Symbol.for("react.transitional.element"),t=Symbol.for("react.fragment");function i(r,l,c){var f=null;if(c!==void 0&&(f=""+c),l.key!==void 0&&(f=""+l.key),"key"in l){c={};for(var d in l)d!=="key"&&(c[d]=l[d])}else c=l;return l=c.ref,{$$typeof:s,type:r,key:f,ref:l!==void 0?l:null,props:c}}return Ro.Fragment=t,Ro.jsx=i,Ro.jsxs=i,Ro}var v_;function Ry(){return v_||(v_=1,Zf.exports=Ay()),Zf.exports}var N=Ry(),Kf={exports:{}},re={};/**
 * @license React
 * react.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var x_;function wy(){if(x_)return re;x_=1;var s=Symbol.for("react.transitional.element"),t=Symbol.for("react.portal"),i=Symbol.for("react.fragment"),r=Symbol.for("react.strict_mode"),l=Symbol.for("react.profiler"),c=Symbol.for("react.consumer"),f=Symbol.for("react.context"),d=Symbol.for("react.forward_ref"),m=Symbol.for("react.suspense"),p=Symbol.for("react.memo"),g=Symbol.for("react.lazy"),x=Symbol.iterator;function v(P){return P===null||typeof P!="object"?null:(P=x&&P[x]||P["@@iterator"],typeof P=="function"?P:null)}var y={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},E=Object.assign,A={};function S(P,tt,yt){this.props=P,this.context=tt,this.refs=A,this.updater=yt||y}S.prototype.isReactComponent={},S.prototype.setState=function(P,tt){if(typeof P!="object"&&typeof P!="function"&&P!=null)throw Error("takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,P,tt,"setState")},S.prototype.forceUpdate=function(P){this.updater.enqueueForceUpdate(this,P,"forceUpdate")};function _(){}_.prototype=S.prototype;function L(P,tt,yt){this.props=P,this.context=tt,this.refs=A,this.updater=yt||y}var D=L.prototype=new _;D.constructor=L,E(D,S.prototype),D.isPureReactComponent=!0;var C=Array.isArray,F={H:null,A:null,T:null,S:null,V:null},H=Object.prototype.hasOwnProperty;function B(P,tt,yt,Mt,J,mt){return yt=mt.ref,{$$typeof:s,type:P,key:tt,ref:yt!==void 0?yt:null,props:mt}}function k(P,tt){return B(P.type,tt,void 0,void 0,void 0,P.props)}function U(P){return typeof P=="object"&&P!==null&&P.$$typeof===s}function R(P){var tt={"=":"=0",":":"=2"};return"$"+P.replace(/[=:]/g,function(yt){return tt[yt]})}var V=/\/+/g;function lt(P,tt){return typeof P=="object"&&P!==null&&P.key!=null?R(""+P.key):tt.toString(36)}function ot(){}function xt(P){switch(P.status){case"fulfilled":return P.value;case"rejected":throw P.reason;default:switch(typeof P.status=="string"?P.then(ot,ot):(P.status="pending",P.then(function(tt){P.status==="pending"&&(P.status="fulfilled",P.value=tt)},function(tt){P.status==="pending"&&(P.status="rejected",P.reason=tt)})),P.status){case"fulfilled":return P.value;case"rejected":throw P.reason}}throw P}function dt(P,tt,yt,Mt,J){var mt=typeof P;(mt==="undefined"||mt==="boolean")&&(P=null);var St=!1;if(P===null)St=!0;else switch(mt){case"bigint":case"string":case"number":St=!0;break;case"object":switch(P.$$typeof){case s:case t:St=!0;break;case g:return St=P._init,dt(St(P._payload),tt,yt,Mt,J)}}if(St)return J=J(P),St=Mt===""?"."+lt(P,0):Mt,C(J)?(yt="",St!=null&&(yt=St.replace(V,"$&/")+"/"),dt(J,tt,yt,"",function(oe){return oe})):J!=null&&(U(J)&&(J=k(J,yt+(J.key==null||P&&P.key===J.key?"":(""+J.key).replace(V,"$&/")+"/")+St)),tt.push(J)),1;St=0;var Rt=Mt===""?".":Mt+":";if(C(P))for(var Lt=0;Lt<P.length;Lt++)Mt=P[Lt],mt=Rt+lt(Mt,Lt),St+=dt(Mt,tt,yt,mt,J);else if(Lt=v(P),typeof Lt=="function")for(P=Lt.call(P),Lt=0;!(Mt=P.next()).done;)Mt=Mt.value,mt=Rt+lt(Mt,Lt++),St+=dt(Mt,tt,yt,mt,J);else if(mt==="object"){if(typeof P.then=="function")return dt(xt(P),tt,yt,Mt,J);throw tt=String(P),Error("Objects are not valid as a React child (found: "+(tt==="[object Object]"?"object with keys {"+Object.keys(P).join(", ")+"}":tt)+"). If you meant to render a collection of children, use an array instead.")}return St}function I(P,tt,yt){if(P==null)return P;var Mt=[],J=0;return dt(P,Mt,"","",function(mt){return tt.call(yt,mt,J++)}),Mt}function K(P){if(P._status===-1){var tt=P._result;tt=tt(),tt.then(function(yt){(P._status===0||P._status===-1)&&(P._status=1,P._result=yt)},function(yt){(P._status===0||P._status===-1)&&(P._status=2,P._result=yt)}),P._status===-1&&(P._status=0,P._result=tt)}if(P._status===1)return P._result.default;throw P._result}var Y=typeof reportError=="function"?reportError:function(P){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var tt=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof P=="object"&&P!==null&&typeof P.message=="string"?String(P.message):String(P),error:P});if(!window.dispatchEvent(tt))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",P);return}console.error(P)};function Et(){}return re.Children={map:I,forEach:function(P,tt,yt){I(P,function(){tt.apply(this,arguments)},yt)},count:function(P){var tt=0;return I(P,function(){tt++}),tt},toArray:function(P){return I(P,function(tt){return tt})||[]},only:function(P){if(!U(P))throw Error("React.Children.only expected to receive a single React element child.");return P}},re.Component=S,re.Fragment=i,re.Profiler=l,re.PureComponent=L,re.StrictMode=r,re.Suspense=m,re.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=F,re.__COMPILER_RUNTIME={__proto__:null,c:function(P){return F.H.useMemoCache(P)}},re.cache=function(P){return function(){return P.apply(null,arguments)}},re.cloneElement=function(P,tt,yt){if(P==null)throw Error("The argument must be a React element, but you passed "+P+".");var Mt=E({},P.props),J=P.key,mt=void 0;if(tt!=null)for(St in tt.ref!==void 0&&(mt=void 0),tt.key!==void 0&&(J=""+tt.key),tt)!H.call(tt,St)||St==="key"||St==="__self"||St==="__source"||St==="ref"&&tt.ref===void 0||(Mt[St]=tt[St]);var St=arguments.length-2;if(St===1)Mt.children=yt;else if(1<St){for(var Rt=Array(St),Lt=0;Lt<St;Lt++)Rt[Lt]=arguments[Lt+2];Mt.children=Rt}return B(P.type,J,void 0,void 0,mt,Mt)},re.createContext=function(P){return P={$$typeof:f,_currentValue:P,_currentValue2:P,_threadCount:0,Provider:null,Consumer:null},P.Provider=P,P.Consumer={$$typeof:c,_context:P},P},re.createElement=function(P,tt,yt){var Mt,J={},mt=null;if(tt!=null)for(Mt in tt.key!==void 0&&(mt=""+tt.key),tt)H.call(tt,Mt)&&Mt!=="key"&&Mt!=="__self"&&Mt!=="__source"&&(J[Mt]=tt[Mt]);var St=arguments.length-2;if(St===1)J.children=yt;else if(1<St){for(var Rt=Array(St),Lt=0;Lt<St;Lt++)Rt[Lt]=arguments[Lt+2];J.children=Rt}if(P&&P.defaultProps)for(Mt in St=P.defaultProps,St)J[Mt]===void 0&&(J[Mt]=St[Mt]);return B(P,mt,void 0,void 0,null,J)},re.createRef=function(){return{current:null}},re.forwardRef=function(P){return{$$typeof:d,render:P}},re.isValidElement=U,re.lazy=function(P){return{$$typeof:g,_payload:{_status:-1,_result:P},_init:K}},re.memo=function(P,tt){return{$$typeof:p,type:P,compare:tt===void 0?null:tt}},re.startTransition=function(P){var tt=F.T,yt={};F.T=yt;try{var Mt=P(),J=F.S;J!==null&&J(yt,Mt),typeof Mt=="object"&&Mt!==null&&typeof Mt.then=="function"&&Mt.then(Et,Y)}catch(mt){Y(mt)}finally{F.T=tt}},re.unstable_useCacheRefresh=function(){return F.H.useCacheRefresh()},re.use=function(P){return F.H.use(P)},re.useActionState=function(P,tt,yt){return F.H.useActionState(P,tt,yt)},re.useCallback=function(P,tt){return F.H.useCallback(P,tt)},re.useContext=function(P){return F.H.useContext(P)},re.useDebugValue=function(){},re.useDeferredValue=function(P,tt){return F.H.useDeferredValue(P,tt)},re.useEffect=function(P,tt,yt){var Mt=F.H;if(typeof yt=="function")throw Error("useEffect CRUD overload is not enabled in this build of React.");return Mt.useEffect(P,tt)},re.useId=function(){return F.H.useId()},re.useImperativeHandle=function(P,tt,yt){return F.H.useImperativeHandle(P,tt,yt)},re.useInsertionEffect=function(P,tt){return F.H.useInsertionEffect(P,tt)},re.useLayoutEffect=function(P,tt){return F.H.useLayoutEffect(P,tt)},re.useMemo=function(P,tt){return F.H.useMemo(P,tt)},re.useOptimistic=function(P,tt){return F.H.useOptimistic(P,tt)},re.useReducer=function(P,tt,yt){return F.H.useReducer(P,tt,yt)},re.useRef=function(P){return F.H.useRef(P)},re.useState=function(P){return F.H.useState(P)},re.useSyncExternalStore=function(P,tt,yt){return F.H.useSyncExternalStore(P,tt,yt)},re.useTransition=function(){return F.H.useTransition()},re.version="19.1.0",re}var y_;function Ed(){return y_||(y_=1,Kf.exports=wy()),Kf.exports}var pt=Ed(),Qf={exports:{}},wo={},Jf={exports:{}},$f={};/**
 * @license React
 * scheduler.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var S_;function Cy(){return S_||(S_=1,function(s){function t(I,K){var Y=I.length;I.push(K);t:for(;0<Y;){var Et=Y-1>>>1,P=I[Et];if(0<l(P,K))I[Et]=K,I[Y]=P,Y=Et;else break t}}function i(I){return I.length===0?null:I[0]}function r(I){if(I.length===0)return null;var K=I[0],Y=I.pop();if(Y!==K){I[0]=Y;t:for(var Et=0,P=I.length,tt=P>>>1;Et<tt;){var yt=2*(Et+1)-1,Mt=I[yt],J=yt+1,mt=I[J];if(0>l(Mt,Y))J<P&&0>l(mt,Mt)?(I[Et]=mt,I[J]=Y,Et=J):(I[Et]=Mt,I[yt]=Y,Et=yt);else if(J<P&&0>l(mt,Y))I[Et]=mt,I[J]=Y,Et=J;else break t}}return K}function l(I,K){var Y=I.sortIndex-K.sortIndex;return Y!==0?Y:I.id-K.id}if(s.unstable_now=void 0,typeof performance=="object"&&typeof performance.now=="function"){var c=performance;s.unstable_now=function(){return c.now()}}else{var f=Date,d=f.now();s.unstable_now=function(){return f.now()-d}}var m=[],p=[],g=1,x=null,v=3,y=!1,E=!1,A=!1,S=!1,_=typeof setTimeout=="function"?setTimeout:null,L=typeof clearTimeout=="function"?clearTimeout:null,D=typeof setImmediate<"u"?setImmediate:null;function C(I){for(var K=i(p);K!==null;){if(K.callback===null)r(p);else if(K.startTime<=I)r(p),K.sortIndex=K.expirationTime,t(m,K);else break;K=i(p)}}function F(I){if(A=!1,C(I),!E)if(i(m)!==null)E=!0,H||(H=!0,lt());else{var K=i(p);K!==null&&dt(F,K.startTime-I)}}var H=!1,B=-1,k=5,U=-1;function R(){return S?!0:!(s.unstable_now()-U<k)}function V(){if(S=!1,H){var I=s.unstable_now();U=I;var K=!0;try{t:{E=!1,A&&(A=!1,L(B),B=-1),y=!0;var Y=v;try{e:{for(C(I),x=i(m);x!==null&&!(x.expirationTime>I&&R());){var Et=x.callback;if(typeof Et=="function"){x.callback=null,v=x.priorityLevel;var P=Et(x.expirationTime<=I);if(I=s.unstable_now(),typeof P=="function"){x.callback=P,C(I),K=!0;break e}x===i(m)&&r(m),C(I)}else r(m);x=i(m)}if(x!==null)K=!0;else{var tt=i(p);tt!==null&&dt(F,tt.startTime-I),K=!1}}break t}finally{x=null,v=Y,y=!1}K=void 0}}finally{K?lt():H=!1}}}var lt;if(typeof D=="function")lt=function(){D(V)};else if(typeof MessageChannel<"u"){var ot=new MessageChannel,xt=ot.port2;ot.port1.onmessage=V,lt=function(){xt.postMessage(null)}}else lt=function(){_(V,0)};function dt(I,K){B=_(function(){I(s.unstable_now())},K)}s.unstable_IdlePriority=5,s.unstable_ImmediatePriority=1,s.unstable_LowPriority=4,s.unstable_NormalPriority=3,s.unstable_Profiling=null,s.unstable_UserBlockingPriority=2,s.unstable_cancelCallback=function(I){I.callback=null},s.unstable_forceFrameRate=function(I){0>I||125<I?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):k=0<I?Math.floor(1e3/I):5},s.unstable_getCurrentPriorityLevel=function(){return v},s.unstable_next=function(I){switch(v){case 1:case 2:case 3:var K=3;break;default:K=v}var Y=v;v=K;try{return I()}finally{v=Y}},s.unstable_requestPaint=function(){S=!0},s.unstable_runWithPriority=function(I,K){switch(I){case 1:case 2:case 3:case 4:case 5:break;default:I=3}var Y=v;v=I;try{return K()}finally{v=Y}},s.unstable_scheduleCallback=function(I,K,Y){var Et=s.unstable_now();switch(typeof Y=="object"&&Y!==null?(Y=Y.delay,Y=typeof Y=="number"&&0<Y?Et+Y:Et):Y=Et,I){case 1:var P=-1;break;case 2:P=250;break;case 5:P=1073741823;break;case 4:P=1e4;break;default:P=5e3}return P=Y+P,I={id:g++,callback:K,priorityLevel:I,startTime:Y,expirationTime:P,sortIndex:-1},Y>Et?(I.sortIndex=Y,t(p,I),i(m)===null&&I===i(p)&&(A?(L(B),B=-1):A=!0,dt(F,Y-Et))):(I.sortIndex=P,t(m,I),E||y||(E=!0,H||(H=!0,lt()))),I},s.unstable_shouldYield=R,s.unstable_wrapCallback=function(I){var K=v;return function(){var Y=v;v=K;try{return I.apply(this,arguments)}finally{v=Y}}}}($f)),$f}var M_;function Dy(){return M_||(M_=1,Jf.exports=Cy()),Jf.exports}var th={exports:{}},Rn={};/**
 * @license React
 * react-dom.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var E_;function Uy(){if(E_)return Rn;E_=1;var s=Ed();function t(m){var p="https://react.dev/errors/"+m;if(1<arguments.length){p+="?args[]="+encodeURIComponent(arguments[1]);for(var g=2;g<arguments.length;g++)p+="&args[]="+encodeURIComponent(arguments[g])}return"Minified React error #"+m+"; visit "+p+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function i(){}var r={d:{f:i,r:function(){throw Error(t(522))},D:i,C:i,L:i,m:i,X:i,S:i,M:i},p:0,findDOMNode:null},l=Symbol.for("react.portal");function c(m,p,g){var x=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:l,key:x==null?null:""+x,children:m,containerInfo:p,implementation:g}}var f=s.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;function d(m,p){if(m==="font")return"";if(typeof p=="string")return p==="use-credentials"?p:""}return Rn.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=r,Rn.createPortal=function(m,p){var g=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!p||p.nodeType!==1&&p.nodeType!==9&&p.nodeType!==11)throw Error(t(299));return c(m,p,null,g)},Rn.flushSync=function(m){var p=f.T,g=r.p;try{if(f.T=null,r.p=2,m)return m()}finally{f.T=p,r.p=g,r.d.f()}},Rn.preconnect=function(m,p){typeof m=="string"&&(p?(p=p.crossOrigin,p=typeof p=="string"?p==="use-credentials"?p:"":void 0):p=null,r.d.C(m,p))},Rn.prefetchDNS=function(m){typeof m=="string"&&r.d.D(m)},Rn.preinit=function(m,p){if(typeof m=="string"&&p&&typeof p.as=="string"){var g=p.as,x=d(g,p.crossOrigin),v=typeof p.integrity=="string"?p.integrity:void 0,y=typeof p.fetchPriority=="string"?p.fetchPriority:void 0;g==="style"?r.d.S(m,typeof p.precedence=="string"?p.precedence:void 0,{crossOrigin:x,integrity:v,fetchPriority:y}):g==="script"&&r.d.X(m,{crossOrigin:x,integrity:v,fetchPriority:y,nonce:typeof p.nonce=="string"?p.nonce:void 0})}},Rn.preinitModule=function(m,p){if(typeof m=="string")if(typeof p=="object"&&p!==null){if(p.as==null||p.as==="script"){var g=d(p.as,p.crossOrigin);r.d.M(m,{crossOrigin:g,integrity:typeof p.integrity=="string"?p.integrity:void 0,nonce:typeof p.nonce=="string"?p.nonce:void 0})}}else p==null&&r.d.M(m)},Rn.preload=function(m,p){if(typeof m=="string"&&typeof p=="object"&&p!==null&&typeof p.as=="string"){var g=p.as,x=d(g,p.crossOrigin);r.d.L(m,g,{crossOrigin:x,integrity:typeof p.integrity=="string"?p.integrity:void 0,nonce:typeof p.nonce=="string"?p.nonce:void 0,type:typeof p.type=="string"?p.type:void 0,fetchPriority:typeof p.fetchPriority=="string"?p.fetchPriority:void 0,referrerPolicy:typeof p.referrerPolicy=="string"?p.referrerPolicy:void 0,imageSrcSet:typeof p.imageSrcSet=="string"?p.imageSrcSet:void 0,imageSizes:typeof p.imageSizes=="string"?p.imageSizes:void 0,media:typeof p.media=="string"?p.media:void 0})}},Rn.preloadModule=function(m,p){if(typeof m=="string")if(p){var g=d(p.as,p.crossOrigin);r.d.m(m,{as:typeof p.as=="string"&&p.as!=="script"?p.as:void 0,crossOrigin:g,integrity:typeof p.integrity=="string"?p.integrity:void 0})}else r.d.m(m)},Rn.requestFormReset=function(m){r.d.r(m)},Rn.unstable_batchedUpdates=function(m,p){return m(p)},Rn.useFormState=function(m,p,g){return f.H.useFormState(m,p,g)},Rn.useFormStatus=function(){return f.H.useHostTransitionStatus()},Rn.version="19.1.0",Rn}var T_;function Ly(){if(T_)return th.exports;T_=1;function s(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(s)}catch(t){console.error(t)}}return s(),th.exports=Uy(),th.exports}/**
 * @license React
 * react-dom-client.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var b_;function Ny(){if(b_)return wo;b_=1;var s=Dy(),t=Ed(),i=Ly();function r(e){var n="https://react.dev/errors/"+e;if(1<arguments.length){n+="?args[]="+encodeURIComponent(arguments[1]);for(var a=2;a<arguments.length;a++)n+="&args[]="+encodeURIComponent(arguments[a])}return"Minified React error #"+e+"; visit "+n+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function l(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function c(e){var n=e,a=e;if(e.alternate)for(;n.return;)n=n.return;else{e=n;do n=e,(n.flags&4098)!==0&&(a=n.return),e=n.return;while(e)}return n.tag===3?a:null}function f(e){if(e.tag===13){var n=e.memoizedState;if(n===null&&(e=e.alternate,e!==null&&(n=e.memoizedState)),n!==null)return n.dehydrated}return null}function d(e){if(c(e)!==e)throw Error(r(188))}function m(e){var n=e.alternate;if(!n){if(n=c(e),n===null)throw Error(r(188));return n!==e?null:e}for(var a=e,o=n;;){var u=a.return;if(u===null)break;var h=u.alternate;if(h===null){if(o=u.return,o!==null){a=o;continue}break}if(u.child===h.child){for(h=u.child;h;){if(h===a)return d(u),e;if(h===o)return d(u),n;h=h.sibling}throw Error(r(188))}if(a.return!==o.return)a=u,o=h;else{for(var M=!1,T=u.child;T;){if(T===a){M=!0,a=u,o=h;break}if(T===o){M=!0,o=u,a=h;break}T=T.sibling}if(!M){for(T=h.child;T;){if(T===a){M=!0,a=h,o=u;break}if(T===o){M=!0,o=h,a=u;break}T=T.sibling}if(!M)throw Error(r(189))}}if(a.alternate!==o)throw Error(r(190))}if(a.tag!==3)throw Error(r(188));return a.stateNode.current===a?e:n}function p(e){var n=e.tag;if(n===5||n===26||n===27||n===6)return e;for(e=e.child;e!==null;){if(n=p(e),n!==null)return n;e=e.sibling}return null}var g=Object.assign,x=Symbol.for("react.element"),v=Symbol.for("react.transitional.element"),y=Symbol.for("react.portal"),E=Symbol.for("react.fragment"),A=Symbol.for("react.strict_mode"),S=Symbol.for("react.profiler"),_=Symbol.for("react.provider"),L=Symbol.for("react.consumer"),D=Symbol.for("react.context"),C=Symbol.for("react.forward_ref"),F=Symbol.for("react.suspense"),H=Symbol.for("react.suspense_list"),B=Symbol.for("react.memo"),k=Symbol.for("react.lazy"),U=Symbol.for("react.activity"),R=Symbol.for("react.memo_cache_sentinel"),V=Symbol.iterator;function lt(e){return e===null||typeof e!="object"?null:(e=V&&e[V]||e["@@iterator"],typeof e=="function"?e:null)}var ot=Symbol.for("react.client.reference");function xt(e){if(e==null)return null;if(typeof e=="function")return e.$$typeof===ot?null:e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case E:return"Fragment";case S:return"Profiler";case A:return"StrictMode";case F:return"Suspense";case H:return"SuspenseList";case U:return"Activity"}if(typeof e=="object")switch(e.$$typeof){case y:return"Portal";case D:return(e.displayName||"Context")+".Provider";case L:return(e._context.displayName||"Context")+".Consumer";case C:var n=e.render;return e=e.displayName,e||(e=n.displayName||n.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case B:return n=e.displayName||null,n!==null?n:xt(e.type)||"Memo";case k:n=e._payload,e=e._init;try{return xt(e(n))}catch{}}return null}var dt=Array.isArray,I=t.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,K=i.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,Y={pending:!1,data:null,method:null,action:null},Et=[],P=-1;function tt(e){return{current:e}}function yt(e){0>P||(e.current=Et[P],Et[P]=null,P--)}function Mt(e,n){P++,Et[P]=e.current,e.current=n}var J=tt(null),mt=tt(null),St=tt(null),Rt=tt(null);function Lt(e,n){switch(Mt(St,n),Mt(mt,e),Mt(J,null),n.nodeType){case 9:case 11:e=(e=n.documentElement)&&(e=e.namespaceURI)?Xg(e):0;break;default:if(e=n.tagName,n=n.namespaceURI)n=Xg(n),e=Wg(n,e);else switch(e){case"svg":e=1;break;case"math":e=2;break;default:e=0}}yt(J),Mt(J,e)}function oe(){yt(J),yt(mt),yt(St)}function Kt(e){e.memoizedState!==null&&Mt(Rt,e);var n=J.current,a=Wg(n,e.type);n!==a&&(Mt(mt,e),Mt(J,a))}function He(e){mt.current===e&&(yt(J),yt(mt)),Rt.current===e&&(yt(Rt),Mo._currentValue=Y)}var Be=Object.prototype.hasOwnProperty,fe=s.unstable_scheduleCallback,G=s.unstable_cancelCallback,On=s.unstable_shouldYield,ge=s.unstable_requestPaint,ie=s.unstable_now,Xt=s.unstable_getCurrentPriorityLevel,Ue=s.unstable_ImmediatePriority,Vt=s.unstable_UserBlockingPriority,O=s.unstable_NormalPriority,b=s.unstable_LowPriority,nt=s.unstable_IdlePriority,gt=s.log,Tt=s.unstable_setDisableYieldValue,ft=null,Pt=null;function wt(e){if(typeof gt=="function"&&Tt(e),Pt&&typeof Pt.setStrictMode=="function")try{Pt.setStrictMode(ft,e)}catch{}}var Gt=Math.clz32?Math.clz32:Ft,$t=Math.log,At=Math.LN2;function Ft(e){return e>>>=0,e===0?32:31-($t(e)/At|0)|0}var Yt=256,Qt=4194304;function zt(e){var n=e&42;if(n!==0)return n;switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:return 64;case 128:return 128;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e&4194048;case 4194304:case 8388608:case 16777216:case 33554432:return e&62914560;case 67108864:return 67108864;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 0;default:return e}}function ce(e,n,a){var o=e.pendingLanes;if(o===0)return 0;var u=0,h=e.suspendedLanes,M=e.pingedLanes;e=e.warmLanes;var T=o&134217727;return T!==0?(o=T&~h,o!==0?u=zt(o):(M&=T,M!==0?u=zt(M):a||(a=T&~e,a!==0&&(u=zt(a))))):(T=o&~h,T!==0?u=zt(T):M!==0?u=zt(M):a||(a=o&~e,a!==0&&(u=zt(a)))),u===0?0:n!==0&&n!==u&&(n&h)===0&&(h=u&-u,a=n&-n,h>=a||h===32&&(a&4194048)!==0)?n:u}function ne(e,n){return(e.pendingLanes&~(e.suspendedLanes&~e.pingedLanes)&n)===0}function Le(e,n){switch(e){case 1:case 2:case 4:case 8:case 64:return n+250;case 16:case 32:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return n+5e3;case 4194304:case 8388608:case 16777216:case 33554432:return-1;case 67108864:case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function X(){var e=Yt;return Yt<<=1,(Yt&4194048)===0&&(Yt=256),e}function Nt(){var e=Qt;return Qt<<=1,(Qt&62914560)===0&&(Qt=4194304),e}function ct(e){for(var n=[],a=0;31>a;a++)n.push(e);return n}function _t(e,n){e.pendingLanes|=n,n!==268435456&&(e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0)}function Bt(e,n,a,o,u,h){var M=e.pendingLanes;e.pendingLanes=a,e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0,e.expiredLanes&=a,e.entangledLanes&=a,e.errorRecoveryDisabledLanes&=a,e.shellSuspendCounter=0;var T=e.entanglements,z=e.expirationTimes,$=e.hiddenUpdates;for(a=M&~a;0<a;){var ut=31-Gt(a),vt=1<<ut;T[ut]=0,z[ut]=-1;var it=$[ut];if(it!==null)for($[ut]=null,ut=0;ut<it.length;ut++){var at=it[ut];at!==null&&(at.lane&=-536870913)}a&=~vt}o!==0&&Ot(e,o,0),h!==0&&u===0&&e.tag!==0&&(e.suspendedLanes|=h&~(M&~n))}function Ot(e,n,a){e.pendingLanes|=n,e.suspendedLanes&=~n;var o=31-Gt(n);e.entangledLanes|=n,e.entanglements[o]=e.entanglements[o]|1073741824|a&4194090}function ae(e,n){var a=e.entangledLanes|=n;for(e=e.entanglements;a;){var o=31-Gt(a),u=1<<o;u&n|e[o]&n&&(e[o]|=n),a&=~u}}function Ge(e){switch(e){case 2:e=1;break;case 8:e=4;break;case 32:e=16;break;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:e=128;break;case 268435456:e=134217728;break;default:e=0}return e}function en(e){return e&=-e,2<e?8<e?(e&134217727)!==0?32:268435456:8:2}function Ee(){var e=K.p;return e!==0?e:(e=window.event,e===void 0?32:f_(e.type))}function kn(e,n){var a=K.p;try{return K.p=e,n()}finally{K.p=a}}var dn=Math.random().toString(36).slice(2),on="__reactFiber$"+dn,xn="__reactProps$"+dn,Pn="__reactContainer$"+dn,Za="__reactEvents$"+dn,Ko="__reactListeners$"+dn,Qo="__reactHandles$"+dn,Ka="__reactResources$"+dn,fa="__reactMarker$"+dn;function ha(e){delete e[on],delete e[xn],delete e[Za],delete e[Ko],delete e[Qo]}function Ni(e){var n=e[on];if(n)return n;for(var a=e.parentNode;a;){if(n=a[Pn]||a[on]){if(a=n.alternate,n.child!==null||a!==null&&a.child!==null)for(e=Kg(e);e!==null;){if(a=e[on])return a;e=Kg(e)}return n}e=a,a=e.parentNode}return null}function Oi(e){if(e=e[on]||e[Pn]){var n=e.tag;if(n===5||n===6||n===13||n===26||n===27||n===3)return e}return null}function Qa(e){var n=e.tag;if(n===5||n===26||n===27||n===6)return e.stateNode;throw Error(r(33))}function da(e){var n=e[Ka];return n||(n=e[Ka]={hoistableStyles:new Map,hoistableScripts:new Map}),n}function nn(e){e[fa]=!0}var Jo=new Set,$o={};function Pi(e,n){w(e,n),w(e+"Capture",n)}function w(e,n){for($o[e]=n,e=0;e<n.length;e++)Jo.add(n[e])}var q=RegExp("^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"),rt={},st={};function Z(e){return Be.call(st,e)?!0:Be.call(rt,e)?!1:q.test(e)?st[e]=!0:(rt[e]=!0,!1)}function bt(e,n,a){if(Z(n))if(a===null)e.removeAttribute(n);else{switch(typeof a){case"undefined":case"function":case"symbol":e.removeAttribute(n);return;case"boolean":var o=n.toLowerCase().slice(0,5);if(o!=="data-"&&o!=="aria-"){e.removeAttribute(n);return}}e.setAttribute(n,""+a)}}function Ct(e,n,a){if(a===null)e.removeAttribute(n);else{switch(typeof a){case"undefined":case"function":case"symbol":case"boolean":e.removeAttribute(n);return}e.setAttribute(n,""+a)}}function Dt(e,n,a,o){if(o===null)e.removeAttribute(a);else{switch(typeof o){case"undefined":case"function":case"symbol":case"boolean":e.removeAttribute(a);return}e.setAttributeNS(n,a,""+o)}}var It,te;function Wt(e){if(It===void 0)try{throw Error()}catch(a){var n=a.stack.trim().match(/\n( *(at )?)/);It=n&&n[1]||"",te=-1<a.stack.indexOf(`
    at`)?" (<anonymous>)":-1<a.stack.indexOf("@")?"@unknown:0:0":""}return`
`+It+e+te}var jt=!1;function de(e,n){if(!e||jt)return"";jt=!0;var a=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{var o={DetermineComponentFrameRoot:function(){try{if(n){var vt=function(){throw Error()};if(Object.defineProperty(vt.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(vt,[])}catch(at){var it=at}Reflect.construct(e,[],vt)}else{try{vt.call()}catch(at){it=at}e.call(vt.prototype)}}else{try{throw Error()}catch(at){it=at}(vt=e())&&typeof vt.catch=="function"&&vt.catch(function(){})}}catch(at){if(at&&it&&typeof at.stack=="string")return[at.stack,it.stack]}return[null,null]}};o.DetermineComponentFrameRoot.displayName="DetermineComponentFrameRoot";var u=Object.getOwnPropertyDescriptor(o.DetermineComponentFrameRoot,"name");u&&u.configurable&&Object.defineProperty(o.DetermineComponentFrameRoot,"name",{value:"DetermineComponentFrameRoot"});var h=o.DetermineComponentFrameRoot(),M=h[0],T=h[1];if(M&&T){var z=M.split(`
`),$=T.split(`
`);for(u=o=0;o<z.length&&!z[o].includes("DetermineComponentFrameRoot");)o++;for(;u<$.length&&!$[u].includes("DetermineComponentFrameRoot");)u++;if(o===z.length||u===$.length)for(o=z.length-1,u=$.length-1;1<=o&&0<=u&&z[o]!==$[u];)u--;for(;1<=o&&0<=u;o--,u--)if(z[o]!==$[u]){if(o!==1||u!==1)do if(o--,u--,0>u||z[o]!==$[u]){var ut=`
`+z[o].replace(" at new "," at ");return e.displayName&&ut.includes("<anonymous>")&&(ut=ut.replace("<anonymous>",e.displayName)),ut}while(1<=o&&0<=u);break}}}finally{jt=!1,Error.prepareStackTrace=a}return(a=e?e.displayName||e.name:"")?Wt(a):""}function Te(e){switch(e.tag){case 26:case 27:case 5:return Wt(e.type);case 16:return Wt("Lazy");case 13:return Wt("Suspense");case 19:return Wt("SuspenseList");case 0:case 15:return de(e.type,!1);case 11:return de(e.type.render,!1);case 1:return de(e.type,!0);case 31:return Wt("Activity");default:return""}}function Xe(e){try{var n="";do n+=Te(e),e=e.return;while(e);return n}catch(a){return`
Error generating stack: `+a.message+`
`+a.stack}}function _e(e){switch(typeof e){case"bigint":case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function ve(e){var n=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(n==="checkbox"||n==="radio")}function qt(e){var n=ve(e)?"checked":"value",a=Object.getOwnPropertyDescriptor(e.constructor.prototype,n),o=""+e[n];if(!e.hasOwnProperty(n)&&typeof a<"u"&&typeof a.get=="function"&&typeof a.set=="function"){var u=a.get,h=a.set;return Object.defineProperty(e,n,{configurable:!0,get:function(){return u.call(this)},set:function(M){o=""+M,h.call(this,M)}}),Object.defineProperty(e,n,{enumerable:a.enumerable}),{getValue:function(){return o},setValue:function(M){o=""+M},stopTracking:function(){e._valueTracker=null,delete e[n]}}}}function Ye(e){e._valueTracker||(e._valueTracker=qt(e))}function Se(e){if(!e)return!1;var n=e._valueTracker;if(!n)return!0;var a=n.getValue(),o="";return e&&(o=ve(e)?e.checked?"true":"false":e.value),e=o,e!==a?(n.setValue(e),!0):!1}function Tn(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}var pa=/[\n"\\]/g;function Ve(e){return e.replace(pa,function(n){return"\\"+n.charCodeAt(0).toString(16)+" "})}function zi(e,n,a,o,u,h,M,T){e.name="",M!=null&&typeof M!="function"&&typeof M!="symbol"&&typeof M!="boolean"?e.type=M:e.removeAttribute("type"),n!=null?M==="number"?(n===0&&e.value===""||e.value!=n)&&(e.value=""+_e(n)):e.value!==""+_e(n)&&(e.value=""+_e(n)):M!=="submit"&&M!=="reset"||e.removeAttribute("value"),n!=null?bn(e,M,_e(n)):a!=null?bn(e,M,_e(a)):o!=null&&e.removeAttribute("value"),u==null&&h!=null&&(e.defaultChecked=!!h),u!=null&&(e.checked=u&&typeof u!="function"&&typeof u!="symbol"),T!=null&&typeof T!="function"&&typeof T!="symbol"&&typeof T!="boolean"?e.name=""+_e(T):e.removeAttribute("name")}function Ie(e,n,a,o,u,h,M,T){if(h!=null&&typeof h!="function"&&typeof h!="symbol"&&typeof h!="boolean"&&(e.type=h),n!=null||a!=null){if(!(h!=="submit"&&h!=="reset"||n!=null))return;a=a!=null?""+_e(a):"",n=n!=null?""+_e(n):a,T||n===e.value||(e.value=n),e.defaultValue=n}o=o??u,o=typeof o!="function"&&typeof o!="symbol"&&!!o,e.checked=T?e.checked:!!o,e.defaultChecked=!!o,M!=null&&typeof M!="function"&&typeof M!="symbol"&&typeof M!="boolean"&&(e.name=M)}function bn(e,n,a){n==="number"&&Tn(e.ownerDocument)===e||e.defaultValue===""+a||(e.defaultValue=""+a)}function ln(e,n,a,o){if(e=e.options,n){n={};for(var u=0;u<a.length;u++)n["$"+a[u]]=!0;for(a=0;a<e.length;a++)u=n.hasOwnProperty("$"+e[a].value),e[a].selected!==u&&(e[a].selected=u),u&&o&&(e[a].defaultSelected=!0)}else{for(a=""+_e(a),n=null,u=0;u<e.length;u++){if(e[u].value===a){e[u].selected=!0,o&&(e[u].defaultSelected=!0);return}n!==null||e[u].disabled||(n=e[u])}n!==null&&(n.selected=!0)}}function pn(e,n,a){if(n!=null&&(n=""+_e(n),n!==e.value&&(e.value=n),a==null)){e.defaultValue!==n&&(e.defaultValue=n);return}e.defaultValue=a!=null?""+_e(a):""}function yn(e,n,a,o){if(n==null){if(o!=null){if(a!=null)throw Error(r(92));if(dt(o)){if(1<o.length)throw Error(r(93));o=o[0]}a=o}a==null&&(a=""),n=a}a=_e(n),e.defaultValue=a,o=e.textContent,o===a&&o!==""&&o!==null&&(e.value=o)}function vi(e,n){if(n){var a=e.firstChild;if(a&&a===e.lastChild&&a.nodeType===3){a.nodeValue=n;return}}e.textContent=n}var Bi=new Set("animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(" "));function Xd(e,n,a){var o=n.indexOf("--")===0;a==null||typeof a=="boolean"||a===""?o?e.setProperty(n,""):n==="float"?e.cssFloat="":e[n]="":o?e.setProperty(n,a):typeof a!="number"||a===0||Bi.has(n)?n==="float"?e.cssFloat=a:e[n]=(""+a).trim():e[n]=a+"px"}function Wd(e,n,a){if(n!=null&&typeof n!="object")throw Error(r(62));if(e=e.style,a!=null){for(var o in a)!a.hasOwnProperty(o)||n!=null&&n.hasOwnProperty(o)||(o.indexOf("--")===0?e.setProperty(o,""):o==="float"?e.cssFloat="":e[o]="");for(var u in n)o=n[u],n.hasOwnProperty(u)&&a[u]!==o&&Xd(e,u,o)}else for(var h in n)n.hasOwnProperty(h)&&Xd(e,h,n[h])}function qc(e){if(e.indexOf("-")===-1)return!1;switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var E0=new Map([["acceptCharset","accept-charset"],["htmlFor","for"],["httpEquiv","http-equiv"],["crossOrigin","crossorigin"],["accentHeight","accent-height"],["alignmentBaseline","alignment-baseline"],["arabicForm","arabic-form"],["baselineShift","baseline-shift"],["capHeight","cap-height"],["clipPath","clip-path"],["clipRule","clip-rule"],["colorInterpolation","color-interpolation"],["colorInterpolationFilters","color-interpolation-filters"],["colorProfile","color-profile"],["colorRendering","color-rendering"],["dominantBaseline","dominant-baseline"],["enableBackground","enable-background"],["fillOpacity","fill-opacity"],["fillRule","fill-rule"],["floodColor","flood-color"],["floodOpacity","flood-opacity"],["fontFamily","font-family"],["fontSize","font-size"],["fontSizeAdjust","font-size-adjust"],["fontStretch","font-stretch"],["fontStyle","font-style"],["fontVariant","font-variant"],["fontWeight","font-weight"],["glyphName","glyph-name"],["glyphOrientationHorizontal","glyph-orientation-horizontal"],["glyphOrientationVertical","glyph-orientation-vertical"],["horizAdvX","horiz-adv-x"],["horizOriginX","horiz-origin-x"],["imageRendering","image-rendering"],["letterSpacing","letter-spacing"],["lightingColor","lighting-color"],["markerEnd","marker-end"],["markerMid","marker-mid"],["markerStart","marker-start"],["overlinePosition","overline-position"],["overlineThickness","overline-thickness"],["paintOrder","paint-order"],["panose-1","panose-1"],["pointerEvents","pointer-events"],["renderingIntent","rendering-intent"],["shapeRendering","shape-rendering"],["stopColor","stop-color"],["stopOpacity","stop-opacity"],["strikethroughPosition","strikethrough-position"],["strikethroughThickness","strikethrough-thickness"],["strokeDasharray","stroke-dasharray"],["strokeDashoffset","stroke-dashoffset"],["strokeLinecap","stroke-linecap"],["strokeLinejoin","stroke-linejoin"],["strokeMiterlimit","stroke-miterlimit"],["strokeOpacity","stroke-opacity"],["strokeWidth","stroke-width"],["textAnchor","text-anchor"],["textDecoration","text-decoration"],["textRendering","text-rendering"],["transformOrigin","transform-origin"],["underlinePosition","underline-position"],["underlineThickness","underline-thickness"],["unicodeBidi","unicode-bidi"],["unicodeRange","unicode-range"],["unitsPerEm","units-per-em"],["vAlphabetic","v-alphabetic"],["vHanging","v-hanging"],["vIdeographic","v-ideographic"],["vMathematical","v-mathematical"],["vectorEffect","vector-effect"],["vertAdvY","vert-adv-y"],["vertOriginX","vert-origin-x"],["vertOriginY","vert-origin-y"],["wordSpacing","word-spacing"],["writingMode","writing-mode"],["xmlnsXlink","xmlns:xlink"],["xHeight","x-height"]]),T0=/^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;function tl(e){return T0.test(""+e)?"javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')":e}var Yc=null;function Zc(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var Dr=null,Ur=null;function qd(e){var n=Oi(e);if(n&&(e=n.stateNode)){var a=e[xn]||null;t:switch(e=n.stateNode,n.type){case"input":if(zi(e,a.value,a.defaultValue,a.defaultValue,a.checked,a.defaultChecked,a.type,a.name),n=a.name,a.type==="radio"&&n!=null){for(a=e;a.parentNode;)a=a.parentNode;for(a=a.querySelectorAll('input[name="'+Ve(""+n)+'"][type="radio"]'),n=0;n<a.length;n++){var o=a[n];if(o!==e&&o.form===e.form){var u=o[xn]||null;if(!u)throw Error(r(90));zi(o,u.value,u.defaultValue,u.defaultValue,u.checked,u.defaultChecked,u.type,u.name)}}for(n=0;n<a.length;n++)o=a[n],o.form===e.form&&Se(o)}break t;case"textarea":pn(e,a.value,a.defaultValue);break t;case"select":n=a.value,n!=null&&ln(e,!!a.multiple,n,!1)}}}var Kc=!1;function Yd(e,n,a){if(Kc)return e(n,a);Kc=!0;try{var o=e(n);return o}finally{if(Kc=!1,(Dr!==null||Ur!==null)&&(Fl(),Dr&&(n=Dr,e=Ur,Ur=Dr=null,qd(n),e)))for(n=0;n<e.length;n++)qd(e[n])}}function Os(e,n){var a=e.stateNode;if(a===null)return null;var o=a[xn]||null;if(o===null)return null;a=o[n];t:switch(n){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(o=!o.disabled)||(e=e.type,o=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!o;break t;default:e=!1}if(e)return null;if(a&&typeof a!="function")throw Error(r(231,n,typeof a));return a}var Ii=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),Qc=!1;if(Ii)try{var Ps={};Object.defineProperty(Ps,"passive",{get:function(){Qc=!0}}),window.addEventListener("test",Ps,Ps),window.removeEventListener("test",Ps,Ps)}catch{Qc=!1}var ma=null,Jc=null,el=null;function Zd(){if(el)return el;var e,n=Jc,a=n.length,o,u="value"in ma?ma.value:ma.textContent,h=u.length;for(e=0;e<a&&n[e]===u[e];e++);var M=a-e;for(o=1;o<=M&&n[a-o]===u[h-o];o++);return el=u.slice(e,1<o?1-o:void 0)}function nl(e){var n=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&n===13&&(e=13)):e=n,e===10&&(e=13),32<=e||e===13?e:0}function il(){return!0}function Kd(){return!1}function zn(e){function n(a,o,u,h,M){this._reactName=a,this._targetInst=u,this.type=o,this.nativeEvent=h,this.target=M,this.currentTarget=null;for(var T in e)e.hasOwnProperty(T)&&(a=e[T],this[T]=a?a(h):h[T]);return this.isDefaultPrevented=(h.defaultPrevented!=null?h.defaultPrevented:h.returnValue===!1)?il:Kd,this.isPropagationStopped=Kd,this}return g(n.prototype,{preventDefault:function(){this.defaultPrevented=!0;var a=this.nativeEvent;a&&(a.preventDefault?a.preventDefault():typeof a.returnValue!="unknown"&&(a.returnValue=!1),this.isDefaultPrevented=il)},stopPropagation:function(){var a=this.nativeEvent;a&&(a.stopPropagation?a.stopPropagation():typeof a.cancelBubble!="unknown"&&(a.cancelBubble=!0),this.isPropagationStopped=il)},persist:function(){},isPersistent:il}),n}var Ja={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},al=zn(Ja),zs=g({},Ja,{view:0,detail:0}),b0=zn(zs),$c,tu,Bs,rl=g({},zs,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:nu,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==Bs&&(Bs&&e.type==="mousemove"?($c=e.screenX-Bs.screenX,tu=e.screenY-Bs.screenY):tu=$c=0,Bs=e),$c)},movementY:function(e){return"movementY"in e?e.movementY:tu}}),Qd=zn(rl),A0=g({},rl,{dataTransfer:0}),R0=zn(A0),w0=g({},zs,{relatedTarget:0}),eu=zn(w0),C0=g({},Ja,{animationName:0,elapsedTime:0,pseudoElement:0}),D0=zn(C0),U0=g({},Ja,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),L0=zn(U0),N0=g({},Ja,{data:0}),Jd=zn(N0),O0={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},P0={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},z0={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function B0(e){var n=this.nativeEvent;return n.getModifierState?n.getModifierState(e):(e=z0[e])?!!n[e]:!1}function nu(){return B0}var I0=g({},zs,{key:function(e){if(e.key){var n=O0[e.key]||e.key;if(n!=="Unidentified")return n}return e.type==="keypress"?(e=nl(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?P0[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:nu,charCode:function(e){return e.type==="keypress"?nl(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?nl(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),F0=zn(I0),H0=g({},rl,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),$d=zn(H0),G0=g({},zs,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:nu}),V0=zn(G0),k0=g({},Ja,{propertyName:0,elapsedTime:0,pseudoElement:0}),j0=zn(k0),X0=g({},rl,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),W0=zn(X0),q0=g({},Ja,{newState:0,oldState:0}),Y0=zn(q0),Z0=[9,13,27,32],iu=Ii&&"CompositionEvent"in window,Is=null;Ii&&"documentMode"in document&&(Is=document.documentMode);var K0=Ii&&"TextEvent"in window&&!Is,tp=Ii&&(!iu||Is&&8<Is&&11>=Is),ep=" ",np=!1;function ip(e,n){switch(e){case"keyup":return Z0.indexOf(n.keyCode)!==-1;case"keydown":return n.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function ap(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var Lr=!1;function Q0(e,n){switch(e){case"compositionend":return ap(n);case"keypress":return n.which!==32?null:(np=!0,ep);case"textInput":return e=n.data,e===ep&&np?null:e;default:return null}}function J0(e,n){if(Lr)return e==="compositionend"||!iu&&ip(e,n)?(e=Zd(),el=Jc=ma=null,Lr=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(n.ctrlKey||n.altKey||n.metaKey)||n.ctrlKey&&n.altKey){if(n.char&&1<n.char.length)return n.char;if(n.which)return String.fromCharCode(n.which)}return null;case"compositionend":return tp&&n.locale!=="ko"?null:n.data;default:return null}}var $0={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function rp(e){var n=e&&e.nodeName&&e.nodeName.toLowerCase();return n==="input"?!!$0[e.type]:n==="textarea"}function sp(e,n,a,o){Dr?Ur?Ur.push(o):Ur=[o]:Dr=o,n=Xl(n,"onChange"),0<n.length&&(a=new al("onChange","change",null,a,o),e.push({event:a,listeners:n}))}var Fs=null,Hs=null;function tx(e){Hg(e,0)}function sl(e){var n=Qa(e);if(Se(n))return e}function op(e,n){if(e==="change")return n}var lp=!1;if(Ii){var au;if(Ii){var ru="oninput"in document;if(!ru){var cp=document.createElement("div");cp.setAttribute("oninput","return;"),ru=typeof cp.oninput=="function"}au=ru}else au=!1;lp=au&&(!document.documentMode||9<document.documentMode)}function up(){Fs&&(Fs.detachEvent("onpropertychange",fp),Hs=Fs=null)}function fp(e){if(e.propertyName==="value"&&sl(Hs)){var n=[];sp(n,Hs,e,Zc(e)),Yd(tx,n)}}function ex(e,n,a){e==="focusin"?(up(),Fs=n,Hs=a,Fs.attachEvent("onpropertychange",fp)):e==="focusout"&&up()}function nx(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return sl(Hs)}function ix(e,n){if(e==="click")return sl(n)}function ax(e,n){if(e==="input"||e==="change")return sl(n)}function rx(e,n){return e===n&&(e!==0||1/e===1/n)||e!==e&&n!==n}var jn=typeof Object.is=="function"?Object.is:rx;function Gs(e,n){if(jn(e,n))return!0;if(typeof e!="object"||e===null||typeof n!="object"||n===null)return!1;var a=Object.keys(e),o=Object.keys(n);if(a.length!==o.length)return!1;for(o=0;o<a.length;o++){var u=a[o];if(!Be.call(n,u)||!jn(e[u],n[u]))return!1}return!0}function hp(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function dp(e,n){var a=hp(e);e=0;for(var o;a;){if(a.nodeType===3){if(o=e+a.textContent.length,e<=n&&o>=n)return{node:a,offset:n-e};e=o}t:{for(;a;){if(a.nextSibling){a=a.nextSibling;break t}a=a.parentNode}a=void 0}a=hp(a)}}function pp(e,n){return e&&n?e===n?!0:e&&e.nodeType===3?!1:n&&n.nodeType===3?pp(e,n.parentNode):"contains"in e?e.contains(n):e.compareDocumentPosition?!!(e.compareDocumentPosition(n)&16):!1:!1}function mp(e){e=e!=null&&e.ownerDocument!=null&&e.ownerDocument.defaultView!=null?e.ownerDocument.defaultView:window;for(var n=Tn(e.document);n instanceof e.HTMLIFrameElement;){try{var a=typeof n.contentWindow.location.href=="string"}catch{a=!1}if(a)e=n.contentWindow;else break;n=Tn(e.document)}return n}function su(e){var n=e&&e.nodeName&&e.nodeName.toLowerCase();return n&&(n==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||n==="textarea"||e.contentEditable==="true")}var sx=Ii&&"documentMode"in document&&11>=document.documentMode,Nr=null,ou=null,Vs=null,lu=!1;function gp(e,n,a){var o=a.window===a?a.document:a.nodeType===9?a:a.ownerDocument;lu||Nr==null||Nr!==Tn(o)||(o=Nr,"selectionStart"in o&&su(o)?o={start:o.selectionStart,end:o.selectionEnd}:(o=(o.ownerDocument&&o.ownerDocument.defaultView||window).getSelection(),o={anchorNode:o.anchorNode,anchorOffset:o.anchorOffset,focusNode:o.focusNode,focusOffset:o.focusOffset}),Vs&&Gs(Vs,o)||(Vs=o,o=Xl(ou,"onSelect"),0<o.length&&(n=new al("onSelect","select",null,n,a),e.push({event:n,listeners:o}),n.target=Nr)))}function $a(e,n){var a={};return a[e.toLowerCase()]=n.toLowerCase(),a["Webkit"+e]="webkit"+n,a["Moz"+e]="moz"+n,a}var Or={animationend:$a("Animation","AnimationEnd"),animationiteration:$a("Animation","AnimationIteration"),animationstart:$a("Animation","AnimationStart"),transitionrun:$a("Transition","TransitionRun"),transitionstart:$a("Transition","TransitionStart"),transitioncancel:$a("Transition","TransitionCancel"),transitionend:$a("Transition","TransitionEnd")},cu={},_p={};Ii&&(_p=document.createElement("div").style,"AnimationEvent"in window||(delete Or.animationend.animation,delete Or.animationiteration.animation,delete Or.animationstart.animation),"TransitionEvent"in window||delete Or.transitionend.transition);function tr(e){if(cu[e])return cu[e];if(!Or[e])return e;var n=Or[e],a;for(a in n)if(n.hasOwnProperty(a)&&a in _p)return cu[e]=n[a];return e}var vp=tr("animationend"),xp=tr("animationiteration"),yp=tr("animationstart"),ox=tr("transitionrun"),lx=tr("transitionstart"),cx=tr("transitioncancel"),Sp=tr("transitionend"),Mp=new Map,uu="abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");uu.push("scrollEnd");function ci(e,n){Mp.set(e,n),Pi(n,[e])}var Ep=new WeakMap;function $n(e,n){if(typeof e=="object"&&e!==null){var a=Ep.get(e);return a!==void 0?a:(n={value:e,source:n,stack:Xe(n)},Ep.set(e,n),n)}return{value:e,source:n,stack:Xe(n)}}var ti=[],Pr=0,fu=0;function ol(){for(var e=Pr,n=fu=Pr=0;n<e;){var a=ti[n];ti[n++]=null;var o=ti[n];ti[n++]=null;var u=ti[n];ti[n++]=null;var h=ti[n];if(ti[n++]=null,o!==null&&u!==null){var M=o.pending;M===null?u.next=u:(u.next=M.next,M.next=u),o.pending=u}h!==0&&Tp(a,u,h)}}function ll(e,n,a,o){ti[Pr++]=e,ti[Pr++]=n,ti[Pr++]=a,ti[Pr++]=o,fu|=o,e.lanes|=o,e=e.alternate,e!==null&&(e.lanes|=o)}function hu(e,n,a,o){return ll(e,n,a,o),cl(e)}function zr(e,n){return ll(e,null,null,n),cl(e)}function Tp(e,n,a){e.lanes|=a;var o=e.alternate;o!==null&&(o.lanes|=a);for(var u=!1,h=e.return;h!==null;)h.childLanes|=a,o=h.alternate,o!==null&&(o.childLanes|=a),h.tag===22&&(e=h.stateNode,e===null||e._visibility&1||(u=!0)),e=h,h=h.return;return e.tag===3?(h=e.stateNode,u&&n!==null&&(u=31-Gt(a),e=h.hiddenUpdates,o=e[u],o===null?e[u]=[n]:o.push(n),n.lane=a|536870912),h):null}function cl(e){if(50<po)throw po=0,xf=null,Error(r(185));for(var n=e.return;n!==null;)e=n,n=e.return;return e.tag===3?e.stateNode:null}var Br={};function ux(e,n,a,o){this.tag=e,this.key=a,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.refCleanup=this.ref=null,this.pendingProps=n,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=o,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Xn(e,n,a,o){return new ux(e,n,a,o)}function du(e){return e=e.prototype,!(!e||!e.isReactComponent)}function Fi(e,n){var a=e.alternate;return a===null?(a=Xn(e.tag,n,e.key,e.mode),a.elementType=e.elementType,a.type=e.type,a.stateNode=e.stateNode,a.alternate=e,e.alternate=a):(a.pendingProps=n,a.type=e.type,a.flags=0,a.subtreeFlags=0,a.deletions=null),a.flags=e.flags&65011712,a.childLanes=e.childLanes,a.lanes=e.lanes,a.child=e.child,a.memoizedProps=e.memoizedProps,a.memoizedState=e.memoizedState,a.updateQueue=e.updateQueue,n=e.dependencies,a.dependencies=n===null?null:{lanes:n.lanes,firstContext:n.firstContext},a.sibling=e.sibling,a.index=e.index,a.ref=e.ref,a.refCleanup=e.refCleanup,a}function bp(e,n){e.flags&=65011714;var a=e.alternate;return a===null?(e.childLanes=0,e.lanes=n,e.child=null,e.subtreeFlags=0,e.memoizedProps=null,e.memoizedState=null,e.updateQueue=null,e.dependencies=null,e.stateNode=null):(e.childLanes=a.childLanes,e.lanes=a.lanes,e.child=a.child,e.subtreeFlags=0,e.deletions=null,e.memoizedProps=a.memoizedProps,e.memoizedState=a.memoizedState,e.updateQueue=a.updateQueue,e.type=a.type,n=a.dependencies,e.dependencies=n===null?null:{lanes:n.lanes,firstContext:n.firstContext}),e}function ul(e,n,a,o,u,h){var M=0;if(o=e,typeof e=="function")du(e)&&(M=1);else if(typeof e=="string")M=hy(e,a,J.current)?26:e==="html"||e==="head"||e==="body"?27:5;else t:switch(e){case U:return e=Xn(31,a,n,u),e.elementType=U,e.lanes=h,e;case E:return er(a.children,u,h,n);case A:M=8,u|=24;break;case S:return e=Xn(12,a,n,u|2),e.elementType=S,e.lanes=h,e;case F:return e=Xn(13,a,n,u),e.elementType=F,e.lanes=h,e;case H:return e=Xn(19,a,n,u),e.elementType=H,e.lanes=h,e;default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case _:case D:M=10;break t;case L:M=9;break t;case C:M=11;break t;case B:M=14;break t;case k:M=16,o=null;break t}M=29,a=Error(r(130,e===null?"null":typeof e,"")),o=null}return n=Xn(M,a,n,u),n.elementType=e,n.type=o,n.lanes=h,n}function er(e,n,a,o){return e=Xn(7,e,o,n),e.lanes=a,e}function pu(e,n,a){return e=Xn(6,e,null,n),e.lanes=a,e}function mu(e,n,a){return n=Xn(4,e.children!==null?e.children:[],e.key,n),n.lanes=a,n.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},n}var Ir=[],Fr=0,fl=null,hl=0,ei=[],ni=0,nr=null,Hi=1,Gi="";function ir(e,n){Ir[Fr++]=hl,Ir[Fr++]=fl,fl=e,hl=n}function Ap(e,n,a){ei[ni++]=Hi,ei[ni++]=Gi,ei[ni++]=nr,nr=e;var o=Hi;e=Gi;var u=32-Gt(o)-1;o&=~(1<<u),a+=1;var h=32-Gt(n)+u;if(30<h){var M=u-u%5;h=(o&(1<<M)-1).toString(32),o>>=M,u-=M,Hi=1<<32-Gt(n)+u|a<<u|o,Gi=h+e}else Hi=1<<h|a<<u|o,Gi=e}function gu(e){e.return!==null&&(ir(e,1),Ap(e,1,0))}function _u(e){for(;e===fl;)fl=Ir[--Fr],Ir[Fr]=null,hl=Ir[--Fr],Ir[Fr]=null;for(;e===nr;)nr=ei[--ni],ei[ni]=null,Gi=ei[--ni],ei[ni]=null,Hi=ei[--ni],ei[ni]=null}var Ln=null,Ze=null,we=!1,ar=null,xi=!1,vu=Error(r(519));function rr(e){var n=Error(r(418,""));throw Xs($n(n,e)),vu}function Rp(e){var n=e.stateNode,a=e.type,o=e.memoizedProps;switch(n[on]=e,n[xn]=o,a){case"dialog":me("cancel",n),me("close",n);break;case"iframe":case"object":case"embed":me("load",n);break;case"video":case"audio":for(a=0;a<go.length;a++)me(go[a],n);break;case"source":me("error",n);break;case"img":case"image":case"link":me("error",n),me("load",n);break;case"details":me("toggle",n);break;case"input":me("invalid",n),Ie(n,o.value,o.defaultValue,o.checked,o.defaultChecked,o.type,o.name,!0),Ye(n);break;case"select":me("invalid",n);break;case"textarea":me("invalid",n),yn(n,o.value,o.defaultValue,o.children),Ye(n)}a=o.children,typeof a!="string"&&typeof a!="number"&&typeof a!="bigint"||n.textContent===""+a||o.suppressHydrationWarning===!0||jg(n.textContent,a)?(o.popover!=null&&(me("beforetoggle",n),me("toggle",n)),o.onScroll!=null&&me("scroll",n),o.onScrollEnd!=null&&me("scrollend",n),o.onClick!=null&&(n.onclick=Wl),n=!0):n=!1,n||rr(e)}function wp(e){for(Ln=e.return;Ln;)switch(Ln.tag){case 5:case 13:xi=!1;return;case 27:case 3:xi=!0;return;default:Ln=Ln.return}}function ks(e){if(e!==Ln)return!1;if(!we)return wp(e),we=!0,!1;var n=e.tag,a;if((a=n!==3&&n!==27)&&((a=n===5)&&(a=e.type,a=!(a!=="form"&&a!=="button")||Pf(e.type,e.memoizedProps)),a=!a),a&&Ze&&rr(e),wp(e),n===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(r(317));t:{for(e=e.nextSibling,n=0;e;){if(e.nodeType===8)if(a=e.data,a==="/$"){if(n===0){Ze=fi(e.nextSibling);break t}n--}else a!=="$"&&a!=="$!"&&a!=="$?"||n++;e=e.nextSibling}Ze=null}}else n===27?(n=Ze,Ua(e.type)?(e=Ff,Ff=null,Ze=e):Ze=n):Ze=Ln?fi(e.stateNode.nextSibling):null;return!0}function js(){Ze=Ln=null,we=!1}function Cp(){var e=ar;return e!==null&&(Fn===null?Fn=e:Fn.push.apply(Fn,e),ar=null),e}function Xs(e){ar===null?ar=[e]:ar.push(e)}var xu=tt(null),sr=null,Vi=null;function ga(e,n,a){Mt(xu,n._currentValue),n._currentValue=a}function ki(e){e._currentValue=xu.current,yt(xu)}function yu(e,n,a){for(;e!==null;){var o=e.alternate;if((e.childLanes&n)!==n?(e.childLanes|=n,o!==null&&(o.childLanes|=n)):o!==null&&(o.childLanes&n)!==n&&(o.childLanes|=n),e===a)break;e=e.return}}function Su(e,n,a,o){var u=e.child;for(u!==null&&(u.return=e);u!==null;){var h=u.dependencies;if(h!==null){var M=u.child;h=h.firstContext;t:for(;h!==null;){var T=h;h=u;for(var z=0;z<n.length;z++)if(T.context===n[z]){h.lanes|=a,T=h.alternate,T!==null&&(T.lanes|=a),yu(h.return,a,e),o||(M=null);break t}h=T.next}}else if(u.tag===18){if(M=u.return,M===null)throw Error(r(341));M.lanes|=a,h=M.alternate,h!==null&&(h.lanes|=a),yu(M,a,e),M=null}else M=u.child;if(M!==null)M.return=u;else for(M=u;M!==null;){if(M===e){M=null;break}if(u=M.sibling,u!==null){u.return=M.return,M=u;break}M=M.return}u=M}}function Ws(e,n,a,o){e=null;for(var u=n,h=!1;u!==null;){if(!h){if((u.flags&524288)!==0)h=!0;else if((u.flags&262144)!==0)break}if(u.tag===10){var M=u.alternate;if(M===null)throw Error(r(387));if(M=M.memoizedProps,M!==null){var T=u.type;jn(u.pendingProps.value,M.value)||(e!==null?e.push(T):e=[T])}}else if(u===Rt.current){if(M=u.alternate,M===null)throw Error(r(387));M.memoizedState.memoizedState!==u.memoizedState.memoizedState&&(e!==null?e.push(Mo):e=[Mo])}u=u.return}e!==null&&Su(n,e,a,o),n.flags|=262144}function dl(e){for(e=e.firstContext;e!==null;){if(!jn(e.context._currentValue,e.memoizedValue))return!0;e=e.next}return!1}function or(e){sr=e,Vi=null,e=e.dependencies,e!==null&&(e.firstContext=null)}function An(e){return Dp(sr,e)}function pl(e,n){return sr===null&&or(e),Dp(e,n)}function Dp(e,n){var a=n._currentValue;if(n={context:n,memoizedValue:a,next:null},Vi===null){if(e===null)throw Error(r(308));Vi=n,e.dependencies={lanes:0,firstContext:n},e.flags|=524288}else Vi=Vi.next=n;return a}var fx=typeof AbortController<"u"?AbortController:function(){var e=[],n=this.signal={aborted:!1,addEventListener:function(a,o){e.push(o)}};this.abort=function(){n.aborted=!0,e.forEach(function(a){return a()})}},hx=s.unstable_scheduleCallback,dx=s.unstable_NormalPriority,cn={$$typeof:D,Consumer:null,Provider:null,_currentValue:null,_currentValue2:null,_threadCount:0};function Mu(){return{controller:new fx,data:new Map,refCount:0}}function qs(e){e.refCount--,e.refCount===0&&hx(dx,function(){e.controller.abort()})}var Ys=null,Eu=0,Hr=0,Gr=null;function px(e,n){if(Ys===null){var a=Ys=[];Eu=0,Hr=Af(),Gr={status:"pending",value:void 0,then:function(o){a.push(o)}}}return Eu++,n.then(Up,Up),n}function Up(){if(--Eu===0&&Ys!==null){Gr!==null&&(Gr.status="fulfilled");var e=Ys;Ys=null,Hr=0,Gr=null;for(var n=0;n<e.length;n++)(0,e[n])()}}function mx(e,n){var a=[],o={status:"pending",value:null,reason:null,then:function(u){a.push(u)}};return e.then(function(){o.status="fulfilled",o.value=n;for(var u=0;u<a.length;u++)(0,a[u])(n)},function(u){for(o.status="rejected",o.reason=u,u=0;u<a.length;u++)(0,a[u])(void 0)}),o}var Lp=I.S;I.S=function(e,n){typeof n=="object"&&n!==null&&typeof n.then=="function"&&px(e,n),Lp!==null&&Lp(e,n)};var lr=tt(null);function Tu(){var e=lr.current;return e!==null?e:ke.pooledCache}function ml(e,n){n===null?Mt(lr,lr.current):Mt(lr,n.pool)}function Np(){var e=Tu();return e===null?null:{parent:cn._currentValue,pool:e}}var Zs=Error(r(460)),Op=Error(r(474)),gl=Error(r(542)),bu={then:function(){}};function Pp(e){return e=e.status,e==="fulfilled"||e==="rejected"}function _l(){}function zp(e,n,a){switch(a=e[a],a===void 0?e.push(n):a!==n&&(n.then(_l,_l),n=a),n.status){case"fulfilled":return n.value;case"rejected":throw e=n.reason,Ip(e),e;default:if(typeof n.status=="string")n.then(_l,_l);else{if(e=ke,e!==null&&100<e.shellSuspendCounter)throw Error(r(482));e=n,e.status="pending",e.then(function(o){if(n.status==="pending"){var u=n;u.status="fulfilled",u.value=o}},function(o){if(n.status==="pending"){var u=n;u.status="rejected",u.reason=o}})}switch(n.status){case"fulfilled":return n.value;case"rejected":throw e=n.reason,Ip(e),e}throw Ks=n,Zs}}var Ks=null;function Bp(){if(Ks===null)throw Error(r(459));var e=Ks;return Ks=null,e}function Ip(e){if(e===Zs||e===gl)throw Error(r(483))}var _a=!1;function Au(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,lanes:0,hiddenCallbacks:null},callbacks:null}}function Ru(e,n){e=e.updateQueue,n.updateQueue===e&&(n.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,callbacks:null})}function va(e){return{lane:e,tag:0,payload:null,callback:null,next:null}}function xa(e,n,a){var o=e.updateQueue;if(o===null)return null;if(o=o.shared,(Ce&2)!==0){var u=o.pending;return u===null?n.next=n:(n.next=u.next,u.next=n),o.pending=n,n=cl(e),Tp(e,null,a),n}return ll(e,o,n,a),cl(e)}function Qs(e,n,a){if(n=n.updateQueue,n!==null&&(n=n.shared,(a&4194048)!==0)){var o=n.lanes;o&=e.pendingLanes,a|=o,n.lanes=a,ae(e,a)}}function wu(e,n){var a=e.updateQueue,o=e.alternate;if(o!==null&&(o=o.updateQueue,a===o)){var u=null,h=null;if(a=a.firstBaseUpdate,a!==null){do{var M={lane:a.lane,tag:a.tag,payload:a.payload,callback:null,next:null};h===null?u=h=M:h=h.next=M,a=a.next}while(a!==null);h===null?u=h=n:h=h.next=n}else u=h=n;a={baseState:o.baseState,firstBaseUpdate:u,lastBaseUpdate:h,shared:o.shared,callbacks:o.callbacks},e.updateQueue=a;return}e=a.lastBaseUpdate,e===null?a.firstBaseUpdate=n:e.next=n,a.lastBaseUpdate=n}var Cu=!1;function Js(){if(Cu){var e=Gr;if(e!==null)throw e}}function $s(e,n,a,o){Cu=!1;var u=e.updateQueue;_a=!1;var h=u.firstBaseUpdate,M=u.lastBaseUpdate,T=u.shared.pending;if(T!==null){u.shared.pending=null;var z=T,$=z.next;z.next=null,M===null?h=$:M.next=$,M=z;var ut=e.alternate;ut!==null&&(ut=ut.updateQueue,T=ut.lastBaseUpdate,T!==M&&(T===null?ut.firstBaseUpdate=$:T.next=$,ut.lastBaseUpdate=z))}if(h!==null){var vt=u.baseState;M=0,ut=$=z=null,T=h;do{var it=T.lane&-536870913,at=it!==T.lane;if(at?(ye&it)===it:(o&it)===it){it!==0&&it===Hr&&(Cu=!0),ut!==null&&(ut=ut.next={lane:0,tag:T.tag,payload:T.payload,callback:null,next:null});t:{var ee=e,Zt=T;it=n;var Pe=a;switch(Zt.tag){case 1:if(ee=Zt.payload,typeof ee=="function"){vt=ee.call(Pe,vt,it);break t}vt=ee;break t;case 3:ee.flags=ee.flags&-65537|128;case 0:if(ee=Zt.payload,it=typeof ee=="function"?ee.call(Pe,vt,it):ee,it==null)break t;vt=g({},vt,it);break t;case 2:_a=!0}}it=T.callback,it!==null&&(e.flags|=64,at&&(e.flags|=8192),at=u.callbacks,at===null?u.callbacks=[it]:at.push(it))}else at={lane:it,tag:T.tag,payload:T.payload,callback:T.callback,next:null},ut===null?($=ut=at,z=vt):ut=ut.next=at,M|=it;if(T=T.next,T===null){if(T=u.shared.pending,T===null)break;at=T,T=at.next,at.next=null,u.lastBaseUpdate=at,u.shared.pending=null}}while(!0);ut===null&&(z=vt),u.baseState=z,u.firstBaseUpdate=$,u.lastBaseUpdate=ut,h===null&&(u.shared.lanes=0),Ra|=M,e.lanes=M,e.memoizedState=vt}}function Fp(e,n){if(typeof e!="function")throw Error(r(191,e));e.call(n)}function Hp(e,n){var a=e.callbacks;if(a!==null)for(e.callbacks=null,e=0;e<a.length;e++)Fp(a[e],n)}var Vr=tt(null),vl=tt(0);function Gp(e,n){e=Ki,Mt(vl,e),Mt(Vr,n),Ki=e|n.baseLanes}function Du(){Mt(vl,Ki),Mt(Vr,Vr.current)}function Uu(){Ki=vl.current,yt(Vr),yt(vl)}var ya=0,ue=null,Ne=null,an=null,xl=!1,kr=!1,cr=!1,yl=0,to=0,jr=null,gx=0;function $e(){throw Error(r(321))}function Lu(e,n){if(n===null)return!1;for(var a=0;a<n.length&&a<e.length;a++)if(!jn(e[a],n[a]))return!1;return!0}function Nu(e,n,a,o,u,h){return ya=h,ue=n,n.memoizedState=null,n.updateQueue=null,n.lanes=0,I.H=e===null||e.memoizedState===null?Tm:bm,cr=!1,h=a(o,u),cr=!1,kr&&(h=kp(n,a,o,u)),Vp(e),h}function Vp(e){I.H=Al;var n=Ne!==null&&Ne.next!==null;if(ya=0,an=Ne=ue=null,xl=!1,to=0,jr=null,n)throw Error(r(300));e===null||mn||(e=e.dependencies,e!==null&&dl(e)&&(mn=!0))}function kp(e,n,a,o){ue=e;var u=0;do{if(kr&&(jr=null),to=0,kr=!1,25<=u)throw Error(r(301));if(u+=1,an=Ne=null,e.updateQueue!=null){var h=e.updateQueue;h.lastEffect=null,h.events=null,h.stores=null,h.memoCache!=null&&(h.memoCache.index=0)}I.H=Ex,h=n(a,o)}while(kr);return h}function _x(){var e=I.H,n=e.useState()[0];return n=typeof n.then=="function"?eo(n):n,e=e.useState()[0],(Ne!==null?Ne.memoizedState:null)!==e&&(ue.flags|=1024),n}function Ou(){var e=yl!==0;return yl=0,e}function Pu(e,n,a){n.updateQueue=e.updateQueue,n.flags&=-2053,e.lanes&=~a}function zu(e){if(xl){for(e=e.memoizedState;e!==null;){var n=e.queue;n!==null&&(n.pending=null),e=e.next}xl=!1}ya=0,an=Ne=ue=null,kr=!1,to=yl=0,jr=null}function Bn(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return an===null?ue.memoizedState=an=e:an=an.next=e,an}function rn(){if(Ne===null){var e=ue.alternate;e=e!==null?e.memoizedState:null}else e=Ne.next;var n=an===null?ue.memoizedState:an.next;if(n!==null)an=n,Ne=e;else{if(e===null)throw ue.alternate===null?Error(r(467)):Error(r(310));Ne=e,e={memoizedState:Ne.memoizedState,baseState:Ne.baseState,baseQueue:Ne.baseQueue,queue:Ne.queue,next:null},an===null?ue.memoizedState=an=e:an=an.next=e}return an}function Bu(){return{lastEffect:null,events:null,stores:null,memoCache:null}}function eo(e){var n=to;return to+=1,jr===null&&(jr=[]),e=zp(jr,e,n),n=ue,(an===null?n.memoizedState:an.next)===null&&(n=n.alternate,I.H=n===null||n.memoizedState===null?Tm:bm),e}function Sl(e){if(e!==null&&typeof e=="object"){if(typeof e.then=="function")return eo(e);if(e.$$typeof===D)return An(e)}throw Error(r(438,String(e)))}function Iu(e){var n=null,a=ue.updateQueue;if(a!==null&&(n=a.memoCache),n==null){var o=ue.alternate;o!==null&&(o=o.updateQueue,o!==null&&(o=o.memoCache,o!=null&&(n={data:o.data.map(function(u){return u.slice()}),index:0})))}if(n==null&&(n={data:[],index:0}),a===null&&(a=Bu(),ue.updateQueue=a),a.memoCache=n,a=n.data[n.index],a===void 0)for(a=n.data[n.index]=Array(e),o=0;o<e;o++)a[o]=R;return n.index++,a}function ji(e,n){return typeof n=="function"?n(e):n}function Ml(e){var n=rn();return Fu(n,Ne,e)}function Fu(e,n,a){var o=e.queue;if(o===null)throw Error(r(311));o.lastRenderedReducer=a;var u=e.baseQueue,h=o.pending;if(h!==null){if(u!==null){var M=u.next;u.next=h.next,h.next=M}n.baseQueue=u=h,o.pending=null}if(h=e.baseState,u===null)e.memoizedState=h;else{n=u.next;var T=M=null,z=null,$=n,ut=!1;do{var vt=$.lane&-536870913;if(vt!==$.lane?(ye&vt)===vt:(ya&vt)===vt){var it=$.revertLane;if(it===0)z!==null&&(z=z.next={lane:0,revertLane:0,action:$.action,hasEagerState:$.hasEagerState,eagerState:$.eagerState,next:null}),vt===Hr&&(ut=!0);else if((ya&it)===it){$=$.next,it===Hr&&(ut=!0);continue}else vt={lane:0,revertLane:$.revertLane,action:$.action,hasEagerState:$.hasEagerState,eagerState:$.eagerState,next:null},z===null?(T=z=vt,M=h):z=z.next=vt,ue.lanes|=it,Ra|=it;vt=$.action,cr&&a(h,vt),h=$.hasEagerState?$.eagerState:a(h,vt)}else it={lane:vt,revertLane:$.revertLane,action:$.action,hasEagerState:$.hasEagerState,eagerState:$.eagerState,next:null},z===null?(T=z=it,M=h):z=z.next=it,ue.lanes|=vt,Ra|=vt;$=$.next}while($!==null&&$!==n);if(z===null?M=h:z.next=T,!jn(h,e.memoizedState)&&(mn=!0,ut&&(a=Gr,a!==null)))throw a;e.memoizedState=h,e.baseState=M,e.baseQueue=z,o.lastRenderedState=h}return u===null&&(o.lanes=0),[e.memoizedState,o.dispatch]}function Hu(e){var n=rn(),a=n.queue;if(a===null)throw Error(r(311));a.lastRenderedReducer=e;var o=a.dispatch,u=a.pending,h=n.memoizedState;if(u!==null){a.pending=null;var M=u=u.next;do h=e(h,M.action),M=M.next;while(M!==u);jn(h,n.memoizedState)||(mn=!0),n.memoizedState=h,n.baseQueue===null&&(n.baseState=h),a.lastRenderedState=h}return[h,o]}function jp(e,n,a){var o=ue,u=rn(),h=we;if(h){if(a===void 0)throw Error(r(407));a=a()}else a=n();var M=!jn((Ne||u).memoizedState,a);M&&(u.memoizedState=a,mn=!0),u=u.queue;var T=qp.bind(null,o,u,e);if(no(2048,8,T,[e]),u.getSnapshot!==n||M||an!==null&&an.memoizedState.tag&1){if(o.flags|=2048,Xr(9,El(),Wp.bind(null,o,u,a,n),null),ke===null)throw Error(r(349));h||(ya&124)!==0||Xp(o,n,a)}return a}function Xp(e,n,a){e.flags|=16384,e={getSnapshot:n,value:a},n=ue.updateQueue,n===null?(n=Bu(),ue.updateQueue=n,n.stores=[e]):(a=n.stores,a===null?n.stores=[e]:a.push(e))}function Wp(e,n,a,o){n.value=a,n.getSnapshot=o,Yp(n)&&Zp(e)}function qp(e,n,a){return a(function(){Yp(n)&&Zp(e)})}function Yp(e){var n=e.getSnapshot;e=e.value;try{var a=n();return!jn(e,a)}catch{return!0}}function Zp(e){var n=zr(e,2);n!==null&&Kn(n,e,2)}function Gu(e){var n=Bn();if(typeof e=="function"){var a=e;if(e=a(),cr){wt(!0);try{a()}finally{wt(!1)}}}return n.memoizedState=n.baseState=e,n.queue={pending:null,lanes:0,dispatch:null,lastRenderedReducer:ji,lastRenderedState:e},n}function Kp(e,n,a,o){return e.baseState=a,Fu(e,Ne,typeof o=="function"?o:ji)}function vx(e,n,a,o,u){if(bl(e))throw Error(r(485));if(e=n.action,e!==null){var h={payload:u,action:e,next:null,isTransition:!0,status:"pending",value:null,reason:null,listeners:[],then:function(M){h.listeners.push(M)}};I.T!==null?a(!0):h.isTransition=!1,o(h),a=n.pending,a===null?(h.next=n.pending=h,Qp(n,h)):(h.next=a.next,n.pending=a.next=h)}}function Qp(e,n){var a=n.action,o=n.payload,u=e.state;if(n.isTransition){var h=I.T,M={};I.T=M;try{var T=a(u,o),z=I.S;z!==null&&z(M,T),Jp(e,n,T)}catch($){Vu(e,n,$)}finally{I.T=h}}else try{h=a(u,o),Jp(e,n,h)}catch($){Vu(e,n,$)}}function Jp(e,n,a){a!==null&&typeof a=="object"&&typeof a.then=="function"?a.then(function(o){$p(e,n,o)},function(o){return Vu(e,n,o)}):$p(e,n,a)}function $p(e,n,a){n.status="fulfilled",n.value=a,tm(n),e.state=a,n=e.pending,n!==null&&(a=n.next,a===n?e.pending=null:(a=a.next,n.next=a,Qp(e,a)))}function Vu(e,n,a){var o=e.pending;if(e.pending=null,o!==null){o=o.next;do n.status="rejected",n.reason=a,tm(n),n=n.next;while(n!==o)}e.action=null}function tm(e){e=e.listeners;for(var n=0;n<e.length;n++)(0,e[n])()}function em(e,n){return n}function nm(e,n){if(we){var a=ke.formState;if(a!==null){t:{var o=ue;if(we){if(Ze){e:{for(var u=Ze,h=xi;u.nodeType!==8;){if(!h){u=null;break e}if(u=fi(u.nextSibling),u===null){u=null;break e}}h=u.data,u=h==="F!"||h==="F"?u:null}if(u){Ze=fi(u.nextSibling),o=u.data==="F!";break t}}rr(o)}o=!1}o&&(n=a[0])}}return a=Bn(),a.memoizedState=a.baseState=n,o={pending:null,lanes:0,dispatch:null,lastRenderedReducer:em,lastRenderedState:n},a.queue=o,a=Sm.bind(null,ue,o),o.dispatch=a,o=Gu(!1),h=qu.bind(null,ue,!1,o.queue),o=Bn(),u={state:n,dispatch:null,action:e,pending:null},o.queue=u,a=vx.bind(null,ue,u,h,a),u.dispatch=a,o.memoizedState=e,[n,a,!1]}function im(e){var n=rn();return am(n,Ne,e)}function am(e,n,a){if(n=Fu(e,n,em)[0],e=Ml(ji)[0],typeof n=="object"&&n!==null&&typeof n.then=="function")try{var o=eo(n)}catch(M){throw M===Zs?gl:M}else o=n;n=rn();var u=n.queue,h=u.dispatch;return a!==n.memoizedState&&(ue.flags|=2048,Xr(9,El(),xx.bind(null,u,a),null)),[o,h,e]}function xx(e,n){e.action=n}function rm(e){var n=rn(),a=Ne;if(a!==null)return am(n,a,e);rn(),n=n.memoizedState,a=rn();var o=a.queue.dispatch;return a.memoizedState=e,[n,o,!1]}function Xr(e,n,a,o){return e={tag:e,create:a,deps:o,inst:n,next:null},n=ue.updateQueue,n===null&&(n=Bu(),ue.updateQueue=n),a=n.lastEffect,a===null?n.lastEffect=e.next=e:(o=a.next,a.next=e,e.next=o,n.lastEffect=e),e}function El(){return{destroy:void 0,resource:void 0}}function sm(){return rn().memoizedState}function Tl(e,n,a,o){var u=Bn();o=o===void 0?null:o,ue.flags|=e,u.memoizedState=Xr(1|n,El(),a,o)}function no(e,n,a,o){var u=rn();o=o===void 0?null:o;var h=u.memoizedState.inst;Ne!==null&&o!==null&&Lu(o,Ne.memoizedState.deps)?u.memoizedState=Xr(n,h,a,o):(ue.flags|=e,u.memoizedState=Xr(1|n,h,a,o))}function om(e,n){Tl(8390656,8,e,n)}function lm(e,n){no(2048,8,e,n)}function cm(e,n){return no(4,2,e,n)}function um(e,n){return no(4,4,e,n)}function fm(e,n){if(typeof n=="function"){e=e();var a=n(e);return function(){typeof a=="function"?a():n(null)}}if(n!=null)return e=e(),n.current=e,function(){n.current=null}}function hm(e,n,a){a=a!=null?a.concat([e]):null,no(4,4,fm.bind(null,n,e),a)}function ku(){}function dm(e,n){var a=rn();n=n===void 0?null:n;var o=a.memoizedState;return n!==null&&Lu(n,o[1])?o[0]:(a.memoizedState=[e,n],e)}function pm(e,n){var a=rn();n=n===void 0?null:n;var o=a.memoizedState;if(n!==null&&Lu(n,o[1]))return o[0];if(o=e(),cr){wt(!0);try{e()}finally{wt(!1)}}return a.memoizedState=[o,n],o}function ju(e,n,a){return a===void 0||(ya&1073741824)!==0?e.memoizedState=n:(e.memoizedState=a,e=_g(),ue.lanes|=e,Ra|=e,a)}function mm(e,n,a,o){return jn(a,n)?a:Vr.current!==null?(e=ju(e,a,o),jn(e,n)||(mn=!0),e):(ya&42)===0?(mn=!0,e.memoizedState=a):(e=_g(),ue.lanes|=e,Ra|=e,n)}function gm(e,n,a,o,u){var h=K.p;K.p=h!==0&&8>h?h:8;var M=I.T,T={};I.T=T,qu(e,!1,n,a);try{var z=u(),$=I.S;if($!==null&&$(T,z),z!==null&&typeof z=="object"&&typeof z.then=="function"){var ut=mx(z,o);io(e,n,ut,Zn(e))}else io(e,n,o,Zn(e))}catch(vt){io(e,n,{then:function(){},status:"rejected",reason:vt},Zn())}finally{K.p=h,I.T=M}}function yx(){}function Xu(e,n,a,o){if(e.tag!==5)throw Error(r(476));var u=_m(e).queue;gm(e,u,n,Y,a===null?yx:function(){return vm(e),a(o)})}function _m(e){var n=e.memoizedState;if(n!==null)return n;n={memoizedState:Y,baseState:Y,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:ji,lastRenderedState:Y},next:null};var a={};return n.next={memoizedState:a,baseState:a,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:ji,lastRenderedState:a},next:null},e.memoizedState=n,e=e.alternate,e!==null&&(e.memoizedState=n),n}function vm(e){var n=_m(e).next.queue;io(e,n,{},Zn())}function Wu(){return An(Mo)}function xm(){return rn().memoizedState}function ym(){return rn().memoizedState}function Sx(e){for(var n=e.return;n!==null;){switch(n.tag){case 24:case 3:var a=Zn();e=va(a);var o=xa(n,e,a);o!==null&&(Kn(o,n,a),Qs(o,n,a)),n={cache:Mu()},e.payload=n;return}n=n.return}}function Mx(e,n,a){var o=Zn();a={lane:o,revertLane:0,action:a,hasEagerState:!1,eagerState:null,next:null},bl(e)?Mm(n,a):(a=hu(e,n,a,o),a!==null&&(Kn(a,e,o),Em(a,n,o)))}function Sm(e,n,a){var o=Zn();io(e,n,a,o)}function io(e,n,a,o){var u={lane:o,revertLane:0,action:a,hasEagerState:!1,eagerState:null,next:null};if(bl(e))Mm(n,u);else{var h=e.alternate;if(e.lanes===0&&(h===null||h.lanes===0)&&(h=n.lastRenderedReducer,h!==null))try{var M=n.lastRenderedState,T=h(M,a);if(u.hasEagerState=!0,u.eagerState=T,jn(T,M))return ll(e,n,u,0),ke===null&&ol(),!1}catch{}finally{}if(a=hu(e,n,u,o),a!==null)return Kn(a,e,o),Em(a,n,o),!0}return!1}function qu(e,n,a,o){if(o={lane:2,revertLane:Af(),action:o,hasEagerState:!1,eagerState:null,next:null},bl(e)){if(n)throw Error(r(479))}else n=hu(e,a,o,2),n!==null&&Kn(n,e,2)}function bl(e){var n=e.alternate;return e===ue||n!==null&&n===ue}function Mm(e,n){kr=xl=!0;var a=e.pending;a===null?n.next=n:(n.next=a.next,a.next=n),e.pending=n}function Em(e,n,a){if((a&4194048)!==0){var o=n.lanes;o&=e.pendingLanes,a|=o,n.lanes=a,ae(e,a)}}var Al={readContext:An,use:Sl,useCallback:$e,useContext:$e,useEffect:$e,useImperativeHandle:$e,useLayoutEffect:$e,useInsertionEffect:$e,useMemo:$e,useReducer:$e,useRef:$e,useState:$e,useDebugValue:$e,useDeferredValue:$e,useTransition:$e,useSyncExternalStore:$e,useId:$e,useHostTransitionStatus:$e,useFormState:$e,useActionState:$e,useOptimistic:$e,useMemoCache:$e,useCacheRefresh:$e},Tm={readContext:An,use:Sl,useCallback:function(e,n){return Bn().memoizedState=[e,n===void 0?null:n],e},useContext:An,useEffect:om,useImperativeHandle:function(e,n,a){a=a!=null?a.concat([e]):null,Tl(4194308,4,fm.bind(null,n,e),a)},useLayoutEffect:function(e,n){return Tl(4194308,4,e,n)},useInsertionEffect:function(e,n){Tl(4,2,e,n)},useMemo:function(e,n){var a=Bn();n=n===void 0?null:n;var o=e();if(cr){wt(!0);try{e()}finally{wt(!1)}}return a.memoizedState=[o,n],o},useReducer:function(e,n,a){var o=Bn();if(a!==void 0){var u=a(n);if(cr){wt(!0);try{a(n)}finally{wt(!1)}}}else u=n;return o.memoizedState=o.baseState=u,e={pending:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:u},o.queue=e,e=e.dispatch=Mx.bind(null,ue,e),[o.memoizedState,e]},useRef:function(e){var n=Bn();return e={current:e},n.memoizedState=e},useState:function(e){e=Gu(e);var n=e.queue,a=Sm.bind(null,ue,n);return n.dispatch=a,[e.memoizedState,a]},useDebugValue:ku,useDeferredValue:function(e,n){var a=Bn();return ju(a,e,n)},useTransition:function(){var e=Gu(!1);return e=gm.bind(null,ue,e.queue,!0,!1),Bn().memoizedState=e,[!1,e]},useSyncExternalStore:function(e,n,a){var o=ue,u=Bn();if(we){if(a===void 0)throw Error(r(407));a=a()}else{if(a=n(),ke===null)throw Error(r(349));(ye&124)!==0||Xp(o,n,a)}u.memoizedState=a;var h={value:a,getSnapshot:n};return u.queue=h,om(qp.bind(null,o,h,e),[e]),o.flags|=2048,Xr(9,El(),Wp.bind(null,o,h,a,n),null),a},useId:function(){var e=Bn(),n=ke.identifierPrefix;if(we){var a=Gi,o=Hi;a=(o&~(1<<32-Gt(o)-1)).toString(32)+a,n="«"+n+"R"+a,a=yl++,0<a&&(n+="H"+a.toString(32)),n+="»"}else a=gx++,n="«"+n+"r"+a.toString(32)+"»";return e.memoizedState=n},useHostTransitionStatus:Wu,useFormState:nm,useActionState:nm,useOptimistic:function(e){var n=Bn();n.memoizedState=n.baseState=e;var a={pending:null,lanes:0,dispatch:null,lastRenderedReducer:null,lastRenderedState:null};return n.queue=a,n=qu.bind(null,ue,!0,a),a.dispatch=n,[e,n]},useMemoCache:Iu,useCacheRefresh:function(){return Bn().memoizedState=Sx.bind(null,ue)}},bm={readContext:An,use:Sl,useCallback:dm,useContext:An,useEffect:lm,useImperativeHandle:hm,useInsertionEffect:cm,useLayoutEffect:um,useMemo:pm,useReducer:Ml,useRef:sm,useState:function(){return Ml(ji)},useDebugValue:ku,useDeferredValue:function(e,n){var a=rn();return mm(a,Ne.memoizedState,e,n)},useTransition:function(){var e=Ml(ji)[0],n=rn().memoizedState;return[typeof e=="boolean"?e:eo(e),n]},useSyncExternalStore:jp,useId:xm,useHostTransitionStatus:Wu,useFormState:im,useActionState:im,useOptimistic:function(e,n){var a=rn();return Kp(a,Ne,e,n)},useMemoCache:Iu,useCacheRefresh:ym},Ex={readContext:An,use:Sl,useCallback:dm,useContext:An,useEffect:lm,useImperativeHandle:hm,useInsertionEffect:cm,useLayoutEffect:um,useMemo:pm,useReducer:Hu,useRef:sm,useState:function(){return Hu(ji)},useDebugValue:ku,useDeferredValue:function(e,n){var a=rn();return Ne===null?ju(a,e,n):mm(a,Ne.memoizedState,e,n)},useTransition:function(){var e=Hu(ji)[0],n=rn().memoizedState;return[typeof e=="boolean"?e:eo(e),n]},useSyncExternalStore:jp,useId:xm,useHostTransitionStatus:Wu,useFormState:rm,useActionState:rm,useOptimistic:function(e,n){var a=rn();return Ne!==null?Kp(a,Ne,e,n):(a.baseState=e,[e,a.queue.dispatch])},useMemoCache:Iu,useCacheRefresh:ym},Wr=null,ao=0;function Rl(e){var n=ao;return ao+=1,Wr===null&&(Wr=[]),zp(Wr,e,n)}function ro(e,n){n=n.props.ref,e.ref=n!==void 0?n:null}function wl(e,n){throw n.$$typeof===x?Error(r(525)):(e=Object.prototype.toString.call(n),Error(r(31,e==="[object Object]"?"object with keys {"+Object.keys(n).join(", ")+"}":e)))}function Am(e){var n=e._init;return n(e._payload)}function Rm(e){function n(W,j){if(e){var Q=W.deletions;Q===null?(W.deletions=[j],W.flags|=16):Q.push(j)}}function a(W,j){if(!e)return null;for(;j!==null;)n(W,j),j=j.sibling;return null}function o(W){for(var j=new Map;W!==null;)W.key!==null?j.set(W.key,W):j.set(W.index,W),W=W.sibling;return j}function u(W,j){return W=Fi(W,j),W.index=0,W.sibling=null,W}function h(W,j,Q){return W.index=Q,e?(Q=W.alternate,Q!==null?(Q=Q.index,Q<j?(W.flags|=67108866,j):Q):(W.flags|=67108866,j)):(W.flags|=1048576,j)}function M(W){return e&&W.alternate===null&&(W.flags|=67108866),W}function T(W,j,Q,ht){return j===null||j.tag!==6?(j=pu(Q,W.mode,ht),j.return=W,j):(j=u(j,Q),j.return=W,j)}function z(W,j,Q,ht){var Ht=Q.type;return Ht===E?ut(W,j,Q.props.children,ht,Q.key):j!==null&&(j.elementType===Ht||typeof Ht=="object"&&Ht!==null&&Ht.$$typeof===k&&Am(Ht)===j.type)?(j=u(j,Q.props),ro(j,Q),j.return=W,j):(j=ul(Q.type,Q.key,Q.props,null,W.mode,ht),ro(j,Q),j.return=W,j)}function $(W,j,Q,ht){return j===null||j.tag!==4||j.stateNode.containerInfo!==Q.containerInfo||j.stateNode.implementation!==Q.implementation?(j=mu(Q,W.mode,ht),j.return=W,j):(j=u(j,Q.children||[]),j.return=W,j)}function ut(W,j,Q,ht,Ht){return j===null||j.tag!==7?(j=er(Q,W.mode,ht,Ht),j.return=W,j):(j=u(j,Q),j.return=W,j)}function vt(W,j,Q){if(typeof j=="string"&&j!==""||typeof j=="number"||typeof j=="bigint")return j=pu(""+j,W.mode,Q),j.return=W,j;if(typeof j=="object"&&j!==null){switch(j.$$typeof){case v:return Q=ul(j.type,j.key,j.props,null,W.mode,Q),ro(Q,j),Q.return=W,Q;case y:return j=mu(j,W.mode,Q),j.return=W,j;case k:var ht=j._init;return j=ht(j._payload),vt(W,j,Q)}if(dt(j)||lt(j))return j=er(j,W.mode,Q,null),j.return=W,j;if(typeof j.then=="function")return vt(W,Rl(j),Q);if(j.$$typeof===D)return vt(W,pl(W,j),Q);wl(W,j)}return null}function it(W,j,Q,ht){var Ht=j!==null?j.key:null;if(typeof Q=="string"&&Q!==""||typeof Q=="number"||typeof Q=="bigint")return Ht!==null?null:T(W,j,""+Q,ht);if(typeof Q=="object"&&Q!==null){switch(Q.$$typeof){case v:return Q.key===Ht?z(W,j,Q,ht):null;case y:return Q.key===Ht?$(W,j,Q,ht):null;case k:return Ht=Q._init,Q=Ht(Q._payload),it(W,j,Q,ht)}if(dt(Q)||lt(Q))return Ht!==null?null:ut(W,j,Q,ht,null);if(typeof Q.then=="function")return it(W,j,Rl(Q),ht);if(Q.$$typeof===D)return it(W,j,pl(W,Q),ht);wl(W,Q)}return null}function at(W,j,Q,ht,Ht){if(typeof ht=="string"&&ht!==""||typeof ht=="number"||typeof ht=="bigint")return W=W.get(Q)||null,T(j,W,""+ht,Ht);if(typeof ht=="object"&&ht!==null){switch(ht.$$typeof){case v:return W=W.get(ht.key===null?Q:ht.key)||null,z(j,W,ht,Ht);case y:return W=W.get(ht.key===null?Q:ht.key)||null,$(j,W,ht,Ht);case k:var he=ht._init;return ht=he(ht._payload),at(W,j,Q,ht,Ht)}if(dt(ht)||lt(ht))return W=W.get(Q)||null,ut(j,W,ht,Ht,null);if(typeof ht.then=="function")return at(W,j,Q,Rl(ht),Ht);if(ht.$$typeof===D)return at(W,j,Q,pl(j,ht),Ht);wl(j,ht)}return null}function ee(W,j,Q,ht){for(var Ht=null,he=null,kt=j,Jt=j=0,_n=null;kt!==null&&Jt<Q.length;Jt++){kt.index>Jt?(_n=kt,kt=null):_n=kt.sibling;var be=it(W,kt,Q[Jt],ht);if(be===null){kt===null&&(kt=_n);break}e&&kt&&be.alternate===null&&n(W,kt),j=h(be,j,Jt),he===null?Ht=be:he.sibling=be,he=be,kt=_n}if(Jt===Q.length)return a(W,kt),we&&ir(W,Jt),Ht;if(kt===null){for(;Jt<Q.length;Jt++)kt=vt(W,Q[Jt],ht),kt!==null&&(j=h(kt,j,Jt),he===null?Ht=kt:he.sibling=kt,he=kt);return we&&ir(W,Jt),Ht}for(kt=o(kt);Jt<Q.length;Jt++)_n=at(kt,W,Jt,Q[Jt],ht),_n!==null&&(e&&_n.alternate!==null&&kt.delete(_n.key===null?Jt:_n.key),j=h(_n,j,Jt),he===null?Ht=_n:he.sibling=_n,he=_n);return e&&kt.forEach(function(za){return n(W,za)}),we&&ir(W,Jt),Ht}function Zt(W,j,Q,ht){if(Q==null)throw Error(r(151));for(var Ht=null,he=null,kt=j,Jt=j=0,_n=null,be=Q.next();kt!==null&&!be.done;Jt++,be=Q.next()){kt.index>Jt?(_n=kt,kt=null):_n=kt.sibling;var za=it(W,kt,be.value,ht);if(za===null){kt===null&&(kt=_n);break}e&&kt&&za.alternate===null&&n(W,kt),j=h(za,j,Jt),he===null?Ht=za:he.sibling=za,he=za,kt=_n}if(be.done)return a(W,kt),we&&ir(W,Jt),Ht;if(kt===null){for(;!be.done;Jt++,be=Q.next())be=vt(W,be.value,ht),be!==null&&(j=h(be,j,Jt),he===null?Ht=be:he.sibling=be,he=be);return we&&ir(W,Jt),Ht}for(kt=o(kt);!be.done;Jt++,be=Q.next())be=at(kt,W,Jt,be.value,ht),be!==null&&(e&&be.alternate!==null&&kt.delete(be.key===null?Jt:be.key),j=h(be,j,Jt),he===null?Ht=be:he.sibling=be,he=be);return e&&kt.forEach(function(Ty){return n(W,Ty)}),we&&ir(W,Jt),Ht}function Pe(W,j,Q,ht){if(typeof Q=="object"&&Q!==null&&Q.type===E&&Q.key===null&&(Q=Q.props.children),typeof Q=="object"&&Q!==null){switch(Q.$$typeof){case v:t:{for(var Ht=Q.key;j!==null;){if(j.key===Ht){if(Ht=Q.type,Ht===E){if(j.tag===7){a(W,j.sibling),ht=u(j,Q.props.children),ht.return=W,W=ht;break t}}else if(j.elementType===Ht||typeof Ht=="object"&&Ht!==null&&Ht.$$typeof===k&&Am(Ht)===j.type){a(W,j.sibling),ht=u(j,Q.props),ro(ht,Q),ht.return=W,W=ht;break t}a(W,j);break}else n(W,j);j=j.sibling}Q.type===E?(ht=er(Q.props.children,W.mode,ht,Q.key),ht.return=W,W=ht):(ht=ul(Q.type,Q.key,Q.props,null,W.mode,ht),ro(ht,Q),ht.return=W,W=ht)}return M(W);case y:t:{for(Ht=Q.key;j!==null;){if(j.key===Ht)if(j.tag===4&&j.stateNode.containerInfo===Q.containerInfo&&j.stateNode.implementation===Q.implementation){a(W,j.sibling),ht=u(j,Q.children||[]),ht.return=W,W=ht;break t}else{a(W,j);break}else n(W,j);j=j.sibling}ht=mu(Q,W.mode,ht),ht.return=W,W=ht}return M(W);case k:return Ht=Q._init,Q=Ht(Q._payload),Pe(W,j,Q,ht)}if(dt(Q))return ee(W,j,Q,ht);if(lt(Q)){if(Ht=lt(Q),typeof Ht!="function")throw Error(r(150));return Q=Ht.call(Q),Zt(W,j,Q,ht)}if(typeof Q.then=="function")return Pe(W,j,Rl(Q),ht);if(Q.$$typeof===D)return Pe(W,j,pl(W,Q),ht);wl(W,Q)}return typeof Q=="string"&&Q!==""||typeof Q=="number"||typeof Q=="bigint"?(Q=""+Q,j!==null&&j.tag===6?(a(W,j.sibling),ht=u(j,Q),ht.return=W,W=ht):(a(W,j),ht=pu(Q,W.mode,ht),ht.return=W,W=ht),M(W)):a(W,j)}return function(W,j,Q,ht){try{ao=0;var Ht=Pe(W,j,Q,ht);return Wr=null,Ht}catch(kt){if(kt===Zs||kt===gl)throw kt;var he=Xn(29,kt,null,W.mode);return he.lanes=ht,he.return=W,he}finally{}}}var qr=Rm(!0),wm=Rm(!1),ii=tt(null),yi=null;function Sa(e){var n=e.alternate;Mt(un,un.current&1),Mt(ii,e),yi===null&&(n===null||Vr.current!==null||n.memoizedState!==null)&&(yi=e)}function Cm(e){if(e.tag===22){if(Mt(un,un.current),Mt(ii,e),yi===null){var n=e.alternate;n!==null&&n.memoizedState!==null&&(yi=e)}}else Ma()}function Ma(){Mt(un,un.current),Mt(ii,ii.current)}function Xi(e){yt(ii),yi===e&&(yi=null),yt(un)}var un=tt(0);function Cl(e){for(var n=e;n!==null;){if(n.tag===13){var a=n.memoizedState;if(a!==null&&(a=a.dehydrated,a===null||a.data==="$?"||If(a)))return n}else if(n.tag===19&&n.memoizedProps.revealOrder!==void 0){if((n.flags&128)!==0)return n}else if(n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return null;n=n.return}n.sibling.return=n.return,n=n.sibling}return null}function Yu(e,n,a,o){n=e.memoizedState,a=a(o,n),a=a==null?n:g({},n,a),e.memoizedState=a,e.lanes===0&&(e.updateQueue.baseState=a)}var Zu={enqueueSetState:function(e,n,a){e=e._reactInternals;var o=Zn(),u=va(o);u.payload=n,a!=null&&(u.callback=a),n=xa(e,u,o),n!==null&&(Kn(n,e,o),Qs(n,e,o))},enqueueReplaceState:function(e,n,a){e=e._reactInternals;var o=Zn(),u=va(o);u.tag=1,u.payload=n,a!=null&&(u.callback=a),n=xa(e,u,o),n!==null&&(Kn(n,e,o),Qs(n,e,o))},enqueueForceUpdate:function(e,n){e=e._reactInternals;var a=Zn(),o=va(a);o.tag=2,n!=null&&(o.callback=n),n=xa(e,o,a),n!==null&&(Kn(n,e,a),Qs(n,e,a))}};function Dm(e,n,a,o,u,h,M){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(o,h,M):n.prototype&&n.prototype.isPureReactComponent?!Gs(a,o)||!Gs(u,h):!0}function Um(e,n,a,o){e=n.state,typeof n.componentWillReceiveProps=="function"&&n.componentWillReceiveProps(a,o),typeof n.UNSAFE_componentWillReceiveProps=="function"&&n.UNSAFE_componentWillReceiveProps(a,o),n.state!==e&&Zu.enqueueReplaceState(n,n.state,null)}function ur(e,n){var a=n;if("ref"in n){a={};for(var o in n)o!=="ref"&&(a[o]=n[o])}if(e=e.defaultProps){a===n&&(a=g({},a));for(var u in e)a[u]===void 0&&(a[u]=e[u])}return a}var Dl=typeof reportError=="function"?reportError:function(e){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var n=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof e=="object"&&e!==null&&typeof e.message=="string"?String(e.message):String(e),error:e});if(!window.dispatchEvent(n))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",e);return}console.error(e)};function Lm(e){Dl(e)}function Nm(e){console.error(e)}function Om(e){Dl(e)}function Ul(e,n){try{var a=e.onUncaughtError;a(n.value,{componentStack:n.stack})}catch(o){setTimeout(function(){throw o})}}function Pm(e,n,a){try{var o=e.onCaughtError;o(a.value,{componentStack:a.stack,errorBoundary:n.tag===1?n.stateNode:null})}catch(u){setTimeout(function(){throw u})}}function Ku(e,n,a){return a=va(a),a.tag=3,a.payload={element:null},a.callback=function(){Ul(e,n)},a}function zm(e){return e=va(e),e.tag=3,e}function Bm(e,n,a,o){var u=a.type.getDerivedStateFromError;if(typeof u=="function"){var h=o.value;e.payload=function(){return u(h)},e.callback=function(){Pm(n,a,o)}}var M=a.stateNode;M!==null&&typeof M.componentDidCatch=="function"&&(e.callback=function(){Pm(n,a,o),typeof u!="function"&&(wa===null?wa=new Set([this]):wa.add(this));var T=o.stack;this.componentDidCatch(o.value,{componentStack:T!==null?T:""})})}function Tx(e,n,a,o,u){if(a.flags|=32768,o!==null&&typeof o=="object"&&typeof o.then=="function"){if(n=a.alternate,n!==null&&Ws(n,a,u,!0),a=ii.current,a!==null){switch(a.tag){case 13:return yi===null?Sf():a.alternate===null&&Ke===0&&(Ke=3),a.flags&=-257,a.flags|=65536,a.lanes=u,o===bu?a.flags|=16384:(n=a.updateQueue,n===null?a.updateQueue=new Set([o]):n.add(o),Ef(e,o,u)),!1;case 22:return a.flags|=65536,o===bu?a.flags|=16384:(n=a.updateQueue,n===null?(n={transitions:null,markerInstances:null,retryQueue:new Set([o])},a.updateQueue=n):(a=n.retryQueue,a===null?n.retryQueue=new Set([o]):a.add(o)),Ef(e,o,u)),!1}throw Error(r(435,a.tag))}return Ef(e,o,u),Sf(),!1}if(we)return n=ii.current,n!==null?((n.flags&65536)===0&&(n.flags|=256),n.flags|=65536,n.lanes=u,o!==vu&&(e=Error(r(422),{cause:o}),Xs($n(e,a)))):(o!==vu&&(n=Error(r(423),{cause:o}),Xs($n(n,a))),e=e.current.alternate,e.flags|=65536,u&=-u,e.lanes|=u,o=$n(o,a),u=Ku(e.stateNode,o,u),wu(e,u),Ke!==4&&(Ke=2)),!1;var h=Error(r(520),{cause:o});if(h=$n(h,a),ho===null?ho=[h]:ho.push(h),Ke!==4&&(Ke=2),n===null)return!0;o=$n(o,a),a=n;do{switch(a.tag){case 3:return a.flags|=65536,e=u&-u,a.lanes|=e,e=Ku(a.stateNode,o,e),wu(a,e),!1;case 1:if(n=a.type,h=a.stateNode,(a.flags&128)===0&&(typeof n.getDerivedStateFromError=="function"||h!==null&&typeof h.componentDidCatch=="function"&&(wa===null||!wa.has(h))))return a.flags|=65536,u&=-u,a.lanes|=u,u=zm(u),Bm(u,e,a,o),wu(a,u),!1}a=a.return}while(a!==null);return!1}var Im=Error(r(461)),mn=!1;function Sn(e,n,a,o){n.child=e===null?wm(n,null,a,o):qr(n,e.child,a,o)}function Fm(e,n,a,o,u){a=a.render;var h=n.ref;if("ref"in o){var M={};for(var T in o)T!=="ref"&&(M[T]=o[T])}else M=o;return or(n),o=Nu(e,n,a,M,h,u),T=Ou(),e!==null&&!mn?(Pu(e,n,u),Wi(e,n,u)):(we&&T&&gu(n),n.flags|=1,Sn(e,n,o,u),n.child)}function Hm(e,n,a,o,u){if(e===null){var h=a.type;return typeof h=="function"&&!du(h)&&h.defaultProps===void 0&&a.compare===null?(n.tag=15,n.type=h,Gm(e,n,h,o,u)):(e=ul(a.type,null,o,n,n.mode,u),e.ref=n.ref,e.return=n,n.child=e)}if(h=e.child,!rf(e,u)){var M=h.memoizedProps;if(a=a.compare,a=a!==null?a:Gs,a(M,o)&&e.ref===n.ref)return Wi(e,n,u)}return n.flags|=1,e=Fi(h,o),e.ref=n.ref,e.return=n,n.child=e}function Gm(e,n,a,o,u){if(e!==null){var h=e.memoizedProps;if(Gs(h,o)&&e.ref===n.ref)if(mn=!1,n.pendingProps=o=h,rf(e,u))(e.flags&131072)!==0&&(mn=!0);else return n.lanes=e.lanes,Wi(e,n,u)}return Qu(e,n,a,o,u)}function Vm(e,n,a){var o=n.pendingProps,u=o.children,h=e!==null?e.memoizedState:null;if(o.mode==="hidden"){if((n.flags&128)!==0){if(o=h!==null?h.baseLanes|a:a,e!==null){for(u=n.child=e.child,h=0;u!==null;)h=h|u.lanes|u.childLanes,u=u.sibling;n.childLanes=h&~o}else n.childLanes=0,n.child=null;return km(e,n,o,a)}if((a&536870912)!==0)n.memoizedState={baseLanes:0,cachePool:null},e!==null&&ml(n,h!==null?h.cachePool:null),h!==null?Gp(n,h):Du(),Cm(n);else return n.lanes=n.childLanes=536870912,km(e,n,h!==null?h.baseLanes|a:a,a)}else h!==null?(ml(n,h.cachePool),Gp(n,h),Ma(),n.memoizedState=null):(e!==null&&ml(n,null),Du(),Ma());return Sn(e,n,u,a),n.child}function km(e,n,a,o){var u=Tu();return u=u===null?null:{parent:cn._currentValue,pool:u},n.memoizedState={baseLanes:a,cachePool:u},e!==null&&ml(n,null),Du(),Cm(n),e!==null&&Ws(e,n,o,!0),null}function Ll(e,n){var a=n.ref;if(a===null)e!==null&&e.ref!==null&&(n.flags|=4194816);else{if(typeof a!="function"&&typeof a!="object")throw Error(r(284));(e===null||e.ref!==a)&&(n.flags|=4194816)}}function Qu(e,n,a,o,u){return or(n),a=Nu(e,n,a,o,void 0,u),o=Ou(),e!==null&&!mn?(Pu(e,n,u),Wi(e,n,u)):(we&&o&&gu(n),n.flags|=1,Sn(e,n,a,u),n.child)}function jm(e,n,a,o,u,h){return or(n),n.updateQueue=null,a=kp(n,o,a,u),Vp(e),o=Ou(),e!==null&&!mn?(Pu(e,n,h),Wi(e,n,h)):(we&&o&&gu(n),n.flags|=1,Sn(e,n,a,h),n.child)}function Xm(e,n,a,o,u){if(or(n),n.stateNode===null){var h=Br,M=a.contextType;typeof M=="object"&&M!==null&&(h=An(M)),h=new a(o,h),n.memoizedState=h.state!==null&&h.state!==void 0?h.state:null,h.updater=Zu,n.stateNode=h,h._reactInternals=n,h=n.stateNode,h.props=o,h.state=n.memoizedState,h.refs={},Au(n),M=a.contextType,h.context=typeof M=="object"&&M!==null?An(M):Br,h.state=n.memoizedState,M=a.getDerivedStateFromProps,typeof M=="function"&&(Yu(n,a,M,o),h.state=n.memoizedState),typeof a.getDerivedStateFromProps=="function"||typeof h.getSnapshotBeforeUpdate=="function"||typeof h.UNSAFE_componentWillMount!="function"&&typeof h.componentWillMount!="function"||(M=h.state,typeof h.componentWillMount=="function"&&h.componentWillMount(),typeof h.UNSAFE_componentWillMount=="function"&&h.UNSAFE_componentWillMount(),M!==h.state&&Zu.enqueueReplaceState(h,h.state,null),$s(n,o,h,u),Js(),h.state=n.memoizedState),typeof h.componentDidMount=="function"&&(n.flags|=4194308),o=!0}else if(e===null){h=n.stateNode;var T=n.memoizedProps,z=ur(a,T);h.props=z;var $=h.context,ut=a.contextType;M=Br,typeof ut=="object"&&ut!==null&&(M=An(ut));var vt=a.getDerivedStateFromProps;ut=typeof vt=="function"||typeof h.getSnapshotBeforeUpdate=="function",T=n.pendingProps!==T,ut||typeof h.UNSAFE_componentWillReceiveProps!="function"&&typeof h.componentWillReceiveProps!="function"||(T||$!==M)&&Um(n,h,o,M),_a=!1;var it=n.memoizedState;h.state=it,$s(n,o,h,u),Js(),$=n.memoizedState,T||it!==$||_a?(typeof vt=="function"&&(Yu(n,a,vt,o),$=n.memoizedState),(z=_a||Dm(n,a,z,o,it,$,M))?(ut||typeof h.UNSAFE_componentWillMount!="function"&&typeof h.componentWillMount!="function"||(typeof h.componentWillMount=="function"&&h.componentWillMount(),typeof h.UNSAFE_componentWillMount=="function"&&h.UNSAFE_componentWillMount()),typeof h.componentDidMount=="function"&&(n.flags|=4194308)):(typeof h.componentDidMount=="function"&&(n.flags|=4194308),n.memoizedProps=o,n.memoizedState=$),h.props=o,h.state=$,h.context=M,o=z):(typeof h.componentDidMount=="function"&&(n.flags|=4194308),o=!1)}else{h=n.stateNode,Ru(e,n),M=n.memoizedProps,ut=ur(a,M),h.props=ut,vt=n.pendingProps,it=h.context,$=a.contextType,z=Br,typeof $=="object"&&$!==null&&(z=An($)),T=a.getDerivedStateFromProps,($=typeof T=="function"||typeof h.getSnapshotBeforeUpdate=="function")||typeof h.UNSAFE_componentWillReceiveProps!="function"&&typeof h.componentWillReceiveProps!="function"||(M!==vt||it!==z)&&Um(n,h,o,z),_a=!1,it=n.memoizedState,h.state=it,$s(n,o,h,u),Js();var at=n.memoizedState;M!==vt||it!==at||_a||e!==null&&e.dependencies!==null&&dl(e.dependencies)?(typeof T=="function"&&(Yu(n,a,T,o),at=n.memoizedState),(ut=_a||Dm(n,a,ut,o,it,at,z)||e!==null&&e.dependencies!==null&&dl(e.dependencies))?($||typeof h.UNSAFE_componentWillUpdate!="function"&&typeof h.componentWillUpdate!="function"||(typeof h.componentWillUpdate=="function"&&h.componentWillUpdate(o,at,z),typeof h.UNSAFE_componentWillUpdate=="function"&&h.UNSAFE_componentWillUpdate(o,at,z)),typeof h.componentDidUpdate=="function"&&(n.flags|=4),typeof h.getSnapshotBeforeUpdate=="function"&&(n.flags|=1024)):(typeof h.componentDidUpdate!="function"||M===e.memoizedProps&&it===e.memoizedState||(n.flags|=4),typeof h.getSnapshotBeforeUpdate!="function"||M===e.memoizedProps&&it===e.memoizedState||(n.flags|=1024),n.memoizedProps=o,n.memoizedState=at),h.props=o,h.state=at,h.context=z,o=ut):(typeof h.componentDidUpdate!="function"||M===e.memoizedProps&&it===e.memoizedState||(n.flags|=4),typeof h.getSnapshotBeforeUpdate!="function"||M===e.memoizedProps&&it===e.memoizedState||(n.flags|=1024),o=!1)}return h=o,Ll(e,n),o=(n.flags&128)!==0,h||o?(h=n.stateNode,a=o&&typeof a.getDerivedStateFromError!="function"?null:h.render(),n.flags|=1,e!==null&&o?(n.child=qr(n,e.child,null,u),n.child=qr(n,null,a,u)):Sn(e,n,a,u),n.memoizedState=h.state,e=n.child):e=Wi(e,n,u),e}function Wm(e,n,a,o){return js(),n.flags|=256,Sn(e,n,a,o),n.child}var Ju={dehydrated:null,treeContext:null,retryLane:0,hydrationErrors:null};function $u(e){return{baseLanes:e,cachePool:Np()}}function tf(e,n,a){return e=e!==null?e.childLanes&~a:0,n&&(e|=ai),e}function qm(e,n,a){var o=n.pendingProps,u=!1,h=(n.flags&128)!==0,M;if((M=h)||(M=e!==null&&e.memoizedState===null?!1:(un.current&2)!==0),M&&(u=!0,n.flags&=-129),M=(n.flags&32)!==0,n.flags&=-33,e===null){if(we){if(u?Sa(n):Ma(),we){var T=Ze,z;if(z=T){t:{for(z=T,T=xi;z.nodeType!==8;){if(!T){T=null;break t}if(z=fi(z.nextSibling),z===null){T=null;break t}}T=z}T!==null?(n.memoizedState={dehydrated:T,treeContext:nr!==null?{id:Hi,overflow:Gi}:null,retryLane:536870912,hydrationErrors:null},z=Xn(18,null,null,0),z.stateNode=T,z.return=n,n.child=z,Ln=n,Ze=null,z=!0):z=!1}z||rr(n)}if(T=n.memoizedState,T!==null&&(T=T.dehydrated,T!==null))return If(T)?n.lanes=32:n.lanes=536870912,null;Xi(n)}return T=o.children,o=o.fallback,u?(Ma(),u=n.mode,T=Nl({mode:"hidden",children:T},u),o=er(o,u,a,null),T.return=n,o.return=n,T.sibling=o,n.child=T,u=n.child,u.memoizedState=$u(a),u.childLanes=tf(e,M,a),n.memoizedState=Ju,o):(Sa(n),ef(n,T))}if(z=e.memoizedState,z!==null&&(T=z.dehydrated,T!==null)){if(h)n.flags&256?(Sa(n),n.flags&=-257,n=nf(e,n,a)):n.memoizedState!==null?(Ma(),n.child=e.child,n.flags|=128,n=null):(Ma(),u=o.fallback,T=n.mode,o=Nl({mode:"visible",children:o.children},T),u=er(u,T,a,null),u.flags|=2,o.return=n,u.return=n,o.sibling=u,n.child=o,qr(n,e.child,null,a),o=n.child,o.memoizedState=$u(a),o.childLanes=tf(e,M,a),n.memoizedState=Ju,n=u);else if(Sa(n),If(T)){if(M=T.nextSibling&&T.nextSibling.dataset,M)var $=M.dgst;M=$,o=Error(r(419)),o.stack="",o.digest=M,Xs({value:o,source:null,stack:null}),n=nf(e,n,a)}else if(mn||Ws(e,n,a,!1),M=(a&e.childLanes)!==0,mn||M){if(M=ke,M!==null&&(o=a&-a,o=(o&42)!==0?1:Ge(o),o=(o&(M.suspendedLanes|a))!==0?0:o,o!==0&&o!==z.retryLane))throw z.retryLane=o,zr(e,o),Kn(M,e,o),Im;T.data==="$?"||Sf(),n=nf(e,n,a)}else T.data==="$?"?(n.flags|=192,n.child=e.child,n=null):(e=z.treeContext,Ze=fi(T.nextSibling),Ln=n,we=!0,ar=null,xi=!1,e!==null&&(ei[ni++]=Hi,ei[ni++]=Gi,ei[ni++]=nr,Hi=e.id,Gi=e.overflow,nr=n),n=ef(n,o.children),n.flags|=4096);return n}return u?(Ma(),u=o.fallback,T=n.mode,z=e.child,$=z.sibling,o=Fi(z,{mode:"hidden",children:o.children}),o.subtreeFlags=z.subtreeFlags&65011712,$!==null?u=Fi($,u):(u=er(u,T,a,null),u.flags|=2),u.return=n,o.return=n,o.sibling=u,n.child=o,o=u,u=n.child,T=e.child.memoizedState,T===null?T=$u(a):(z=T.cachePool,z!==null?($=cn._currentValue,z=z.parent!==$?{parent:$,pool:$}:z):z=Np(),T={baseLanes:T.baseLanes|a,cachePool:z}),u.memoizedState=T,u.childLanes=tf(e,M,a),n.memoizedState=Ju,o):(Sa(n),a=e.child,e=a.sibling,a=Fi(a,{mode:"visible",children:o.children}),a.return=n,a.sibling=null,e!==null&&(M=n.deletions,M===null?(n.deletions=[e],n.flags|=16):M.push(e)),n.child=a,n.memoizedState=null,a)}function ef(e,n){return n=Nl({mode:"visible",children:n},e.mode),n.return=e,e.child=n}function Nl(e,n){return e=Xn(22,e,null,n),e.lanes=0,e.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null},e}function nf(e,n,a){return qr(n,e.child,null,a),e=ef(n,n.pendingProps.children),e.flags|=2,n.memoizedState=null,e}function Ym(e,n,a){e.lanes|=n;var o=e.alternate;o!==null&&(o.lanes|=n),yu(e.return,n,a)}function af(e,n,a,o,u){var h=e.memoizedState;h===null?e.memoizedState={isBackwards:n,rendering:null,renderingStartTime:0,last:o,tail:a,tailMode:u}:(h.isBackwards=n,h.rendering=null,h.renderingStartTime=0,h.last=o,h.tail=a,h.tailMode=u)}function Zm(e,n,a){var o=n.pendingProps,u=o.revealOrder,h=o.tail;if(Sn(e,n,o.children,a),o=un.current,(o&2)!==0)o=o&1|2,n.flags|=128;else{if(e!==null&&(e.flags&128)!==0)t:for(e=n.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&Ym(e,a,n);else if(e.tag===19)Ym(e,a,n);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===n)break t;for(;e.sibling===null;){if(e.return===null||e.return===n)break t;e=e.return}e.sibling.return=e.return,e=e.sibling}o&=1}switch(Mt(un,o),u){case"forwards":for(a=n.child,u=null;a!==null;)e=a.alternate,e!==null&&Cl(e)===null&&(u=a),a=a.sibling;a=u,a===null?(u=n.child,n.child=null):(u=a.sibling,a.sibling=null),af(n,!1,u,a,h);break;case"backwards":for(a=null,u=n.child,n.child=null;u!==null;){if(e=u.alternate,e!==null&&Cl(e)===null){n.child=u;break}e=u.sibling,u.sibling=a,a=u,u=e}af(n,!0,a,null,h);break;case"together":af(n,!1,null,null,void 0);break;default:n.memoizedState=null}return n.child}function Wi(e,n,a){if(e!==null&&(n.dependencies=e.dependencies),Ra|=n.lanes,(a&n.childLanes)===0)if(e!==null){if(Ws(e,n,a,!1),(a&n.childLanes)===0)return null}else return null;if(e!==null&&n.child!==e.child)throw Error(r(153));if(n.child!==null){for(e=n.child,a=Fi(e,e.pendingProps),n.child=a,a.return=n;e.sibling!==null;)e=e.sibling,a=a.sibling=Fi(e,e.pendingProps),a.return=n;a.sibling=null}return n.child}function rf(e,n){return(e.lanes&n)!==0?!0:(e=e.dependencies,!!(e!==null&&dl(e)))}function bx(e,n,a){switch(n.tag){case 3:Lt(n,n.stateNode.containerInfo),ga(n,cn,e.memoizedState.cache),js();break;case 27:case 5:Kt(n);break;case 4:Lt(n,n.stateNode.containerInfo);break;case 10:ga(n,n.type,n.memoizedProps.value);break;case 13:var o=n.memoizedState;if(o!==null)return o.dehydrated!==null?(Sa(n),n.flags|=128,null):(a&n.child.childLanes)!==0?qm(e,n,a):(Sa(n),e=Wi(e,n,a),e!==null?e.sibling:null);Sa(n);break;case 19:var u=(e.flags&128)!==0;if(o=(a&n.childLanes)!==0,o||(Ws(e,n,a,!1),o=(a&n.childLanes)!==0),u){if(o)return Zm(e,n,a);n.flags|=128}if(u=n.memoizedState,u!==null&&(u.rendering=null,u.tail=null,u.lastEffect=null),Mt(un,un.current),o)break;return null;case 22:case 23:return n.lanes=0,Vm(e,n,a);case 24:ga(n,cn,e.memoizedState.cache)}return Wi(e,n,a)}function Km(e,n,a){if(e!==null)if(e.memoizedProps!==n.pendingProps)mn=!0;else{if(!rf(e,a)&&(n.flags&128)===0)return mn=!1,bx(e,n,a);mn=(e.flags&131072)!==0}else mn=!1,we&&(n.flags&1048576)!==0&&Ap(n,hl,n.index);switch(n.lanes=0,n.tag){case 16:t:{e=n.pendingProps;var o=n.elementType,u=o._init;if(o=u(o._payload),n.type=o,typeof o=="function")du(o)?(e=ur(o,e),n.tag=1,n=Xm(null,n,o,e,a)):(n.tag=0,n=Qu(null,n,o,e,a));else{if(o!=null){if(u=o.$$typeof,u===C){n.tag=11,n=Fm(null,n,o,e,a);break t}else if(u===B){n.tag=14,n=Hm(null,n,o,e,a);break t}}throw n=xt(o)||o,Error(r(306,n,""))}}return n;case 0:return Qu(e,n,n.type,n.pendingProps,a);case 1:return o=n.type,u=ur(o,n.pendingProps),Xm(e,n,o,u,a);case 3:t:{if(Lt(n,n.stateNode.containerInfo),e===null)throw Error(r(387));o=n.pendingProps;var h=n.memoizedState;u=h.element,Ru(e,n),$s(n,o,null,a);var M=n.memoizedState;if(o=M.cache,ga(n,cn,o),o!==h.cache&&Su(n,[cn],a,!0),Js(),o=M.element,h.isDehydrated)if(h={element:o,isDehydrated:!1,cache:M.cache},n.updateQueue.baseState=h,n.memoizedState=h,n.flags&256){n=Wm(e,n,o,a);break t}else if(o!==u){u=$n(Error(r(424)),n),Xs(u),n=Wm(e,n,o,a);break t}else{switch(e=n.stateNode.containerInfo,e.nodeType){case 9:e=e.body;break;default:e=e.nodeName==="HTML"?e.ownerDocument.body:e}for(Ze=fi(e.firstChild),Ln=n,we=!0,ar=null,xi=!0,a=wm(n,null,o,a),n.child=a;a;)a.flags=a.flags&-3|4096,a=a.sibling}else{if(js(),o===u){n=Wi(e,n,a);break t}Sn(e,n,o,a)}n=n.child}return n;case 26:return Ll(e,n),e===null?(a=t_(n.type,null,n.pendingProps,null))?n.memoizedState=a:we||(a=n.type,e=n.pendingProps,o=ql(St.current).createElement(a),o[on]=n,o[xn]=e,En(o,a,e),nn(o),n.stateNode=o):n.memoizedState=t_(n.type,e.memoizedProps,n.pendingProps,e.memoizedState),null;case 27:return Kt(n),e===null&&we&&(o=n.stateNode=Qg(n.type,n.pendingProps,St.current),Ln=n,xi=!0,u=Ze,Ua(n.type)?(Ff=u,Ze=fi(o.firstChild)):Ze=u),Sn(e,n,n.pendingProps.children,a),Ll(e,n),e===null&&(n.flags|=4194304),n.child;case 5:return e===null&&we&&((u=o=Ze)&&(o=$x(o,n.type,n.pendingProps,xi),o!==null?(n.stateNode=o,Ln=n,Ze=fi(o.firstChild),xi=!1,u=!0):u=!1),u||rr(n)),Kt(n),u=n.type,h=n.pendingProps,M=e!==null?e.memoizedProps:null,o=h.children,Pf(u,h)?o=null:M!==null&&Pf(u,M)&&(n.flags|=32),n.memoizedState!==null&&(u=Nu(e,n,_x,null,null,a),Mo._currentValue=u),Ll(e,n),Sn(e,n,o,a),n.child;case 6:return e===null&&we&&((e=a=Ze)&&(a=ty(a,n.pendingProps,xi),a!==null?(n.stateNode=a,Ln=n,Ze=null,e=!0):e=!1),e||rr(n)),null;case 13:return qm(e,n,a);case 4:return Lt(n,n.stateNode.containerInfo),o=n.pendingProps,e===null?n.child=qr(n,null,o,a):Sn(e,n,o,a),n.child;case 11:return Fm(e,n,n.type,n.pendingProps,a);case 7:return Sn(e,n,n.pendingProps,a),n.child;case 8:return Sn(e,n,n.pendingProps.children,a),n.child;case 12:return Sn(e,n,n.pendingProps.children,a),n.child;case 10:return o=n.pendingProps,ga(n,n.type,o.value),Sn(e,n,o.children,a),n.child;case 9:return u=n.type._context,o=n.pendingProps.children,or(n),u=An(u),o=o(u),n.flags|=1,Sn(e,n,o,a),n.child;case 14:return Hm(e,n,n.type,n.pendingProps,a);case 15:return Gm(e,n,n.type,n.pendingProps,a);case 19:return Zm(e,n,a);case 31:return o=n.pendingProps,a=n.mode,o={mode:o.mode,children:o.children},e===null?(a=Nl(o,a),a.ref=n.ref,n.child=a,a.return=n,n=a):(a=Fi(e.child,o),a.ref=n.ref,n.child=a,a.return=n,n=a),n;case 22:return Vm(e,n,a);case 24:return or(n),o=An(cn),e===null?(u=Tu(),u===null&&(u=ke,h=Mu(),u.pooledCache=h,h.refCount++,h!==null&&(u.pooledCacheLanes|=a),u=h),n.memoizedState={parent:o,cache:u},Au(n),ga(n,cn,u)):((e.lanes&a)!==0&&(Ru(e,n),$s(n,null,null,a),Js()),u=e.memoizedState,h=n.memoizedState,u.parent!==o?(u={parent:o,cache:o},n.memoizedState=u,n.lanes===0&&(n.memoizedState=n.updateQueue.baseState=u),ga(n,cn,o)):(o=h.cache,ga(n,cn,o),o!==u.cache&&Su(n,[cn],a,!0))),Sn(e,n,n.pendingProps.children,a),n.child;case 29:throw n.pendingProps}throw Error(r(156,n.tag))}function qi(e){e.flags|=4}function Qm(e,n){if(n.type!=="stylesheet"||(n.state.loading&4)!==0)e.flags&=-16777217;else if(e.flags|=16777216,!r_(n)){if(n=ii.current,n!==null&&((ye&4194048)===ye?yi!==null:(ye&62914560)!==ye&&(ye&536870912)===0||n!==yi))throw Ks=bu,Op;e.flags|=8192}}function Ol(e,n){n!==null&&(e.flags|=4),e.flags&16384&&(n=e.tag!==22?Nt():536870912,e.lanes|=n,Qr|=n)}function so(e,n){if(!we)switch(e.tailMode){case"hidden":n=e.tail;for(var a=null;n!==null;)n.alternate!==null&&(a=n),n=n.sibling;a===null?e.tail=null:a.sibling=null;break;case"collapsed":a=e.tail;for(var o=null;a!==null;)a.alternate!==null&&(o=a),a=a.sibling;o===null?n||e.tail===null?e.tail=null:e.tail.sibling=null:o.sibling=null}}function We(e){var n=e.alternate!==null&&e.alternate.child===e.child,a=0,o=0;if(n)for(var u=e.child;u!==null;)a|=u.lanes|u.childLanes,o|=u.subtreeFlags&65011712,o|=u.flags&65011712,u.return=e,u=u.sibling;else for(u=e.child;u!==null;)a|=u.lanes|u.childLanes,o|=u.subtreeFlags,o|=u.flags,u.return=e,u=u.sibling;return e.subtreeFlags|=o,e.childLanes=a,n}function Ax(e,n,a){var o=n.pendingProps;switch(_u(n),n.tag){case 31:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return We(n),null;case 1:return We(n),null;case 3:return a=n.stateNode,o=null,e!==null&&(o=e.memoizedState.cache),n.memoizedState.cache!==o&&(n.flags|=2048),ki(cn),oe(),a.pendingContext&&(a.context=a.pendingContext,a.pendingContext=null),(e===null||e.child===null)&&(ks(n)?qi(n):e===null||e.memoizedState.isDehydrated&&(n.flags&256)===0||(n.flags|=1024,Cp())),We(n),null;case 26:return a=n.memoizedState,e===null?(qi(n),a!==null?(We(n),Qm(n,a)):(We(n),n.flags&=-16777217)):a?a!==e.memoizedState?(qi(n),We(n),Qm(n,a)):(We(n),n.flags&=-16777217):(e.memoizedProps!==o&&qi(n),We(n),n.flags&=-16777217),null;case 27:He(n),a=St.current;var u=n.type;if(e!==null&&n.stateNode!=null)e.memoizedProps!==o&&qi(n);else{if(!o){if(n.stateNode===null)throw Error(r(166));return We(n),null}e=J.current,ks(n)?Rp(n):(e=Qg(u,o,a),n.stateNode=e,qi(n))}return We(n),null;case 5:if(He(n),a=n.type,e!==null&&n.stateNode!=null)e.memoizedProps!==o&&qi(n);else{if(!o){if(n.stateNode===null)throw Error(r(166));return We(n),null}if(e=J.current,ks(n))Rp(n);else{switch(u=ql(St.current),e){case 1:e=u.createElementNS("http://www.w3.org/2000/svg",a);break;case 2:e=u.createElementNS("http://www.w3.org/1998/Math/MathML",a);break;default:switch(a){case"svg":e=u.createElementNS("http://www.w3.org/2000/svg",a);break;case"math":e=u.createElementNS("http://www.w3.org/1998/Math/MathML",a);break;case"script":e=u.createElement("div"),e.innerHTML="<script><\/script>",e=e.removeChild(e.firstChild);break;case"select":e=typeof o.is=="string"?u.createElement("select",{is:o.is}):u.createElement("select"),o.multiple?e.multiple=!0:o.size&&(e.size=o.size);break;default:e=typeof o.is=="string"?u.createElement(a,{is:o.is}):u.createElement(a)}}e[on]=n,e[xn]=o;t:for(u=n.child;u!==null;){if(u.tag===5||u.tag===6)e.appendChild(u.stateNode);else if(u.tag!==4&&u.tag!==27&&u.child!==null){u.child.return=u,u=u.child;continue}if(u===n)break t;for(;u.sibling===null;){if(u.return===null||u.return===n)break t;u=u.return}u.sibling.return=u.return,u=u.sibling}n.stateNode=e;t:switch(En(e,a,o),a){case"button":case"input":case"select":case"textarea":e=!!o.autoFocus;break t;case"img":e=!0;break t;default:e=!1}e&&qi(n)}}return We(n),n.flags&=-16777217,null;case 6:if(e&&n.stateNode!=null)e.memoizedProps!==o&&qi(n);else{if(typeof o!="string"&&n.stateNode===null)throw Error(r(166));if(e=St.current,ks(n)){if(e=n.stateNode,a=n.memoizedProps,o=null,u=Ln,u!==null)switch(u.tag){case 27:case 5:o=u.memoizedProps}e[on]=n,e=!!(e.nodeValue===a||o!==null&&o.suppressHydrationWarning===!0||jg(e.nodeValue,a)),e||rr(n)}else e=ql(e).createTextNode(o),e[on]=n,n.stateNode=e}return We(n),null;case 13:if(o=n.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(u=ks(n),o!==null&&o.dehydrated!==null){if(e===null){if(!u)throw Error(r(318));if(u=n.memoizedState,u=u!==null?u.dehydrated:null,!u)throw Error(r(317));u[on]=n}else js(),(n.flags&128)===0&&(n.memoizedState=null),n.flags|=4;We(n),u=!1}else u=Cp(),e!==null&&e.memoizedState!==null&&(e.memoizedState.hydrationErrors=u),u=!0;if(!u)return n.flags&256?(Xi(n),n):(Xi(n),null)}if(Xi(n),(n.flags&128)!==0)return n.lanes=a,n;if(a=o!==null,e=e!==null&&e.memoizedState!==null,a){o=n.child,u=null,o.alternate!==null&&o.alternate.memoizedState!==null&&o.alternate.memoizedState.cachePool!==null&&(u=o.alternate.memoizedState.cachePool.pool);var h=null;o.memoizedState!==null&&o.memoizedState.cachePool!==null&&(h=o.memoizedState.cachePool.pool),h!==u&&(o.flags|=2048)}return a!==e&&a&&(n.child.flags|=8192),Ol(n,n.updateQueue),We(n),null;case 4:return oe(),e===null&&Df(n.stateNode.containerInfo),We(n),null;case 10:return ki(n.type),We(n),null;case 19:if(yt(un),u=n.memoizedState,u===null)return We(n),null;if(o=(n.flags&128)!==0,h=u.rendering,h===null)if(o)so(u,!1);else{if(Ke!==0||e!==null&&(e.flags&128)!==0)for(e=n.child;e!==null;){if(h=Cl(e),h!==null){for(n.flags|=128,so(u,!1),e=h.updateQueue,n.updateQueue=e,Ol(n,e),n.subtreeFlags=0,e=a,a=n.child;a!==null;)bp(a,e),a=a.sibling;return Mt(un,un.current&1|2),n.child}e=e.sibling}u.tail!==null&&ie()>Bl&&(n.flags|=128,o=!0,so(u,!1),n.lanes=4194304)}else{if(!o)if(e=Cl(h),e!==null){if(n.flags|=128,o=!0,e=e.updateQueue,n.updateQueue=e,Ol(n,e),so(u,!0),u.tail===null&&u.tailMode==="hidden"&&!h.alternate&&!we)return We(n),null}else 2*ie()-u.renderingStartTime>Bl&&a!==536870912&&(n.flags|=128,o=!0,so(u,!1),n.lanes=4194304);u.isBackwards?(h.sibling=n.child,n.child=h):(e=u.last,e!==null?e.sibling=h:n.child=h,u.last=h)}return u.tail!==null?(n=u.tail,u.rendering=n,u.tail=n.sibling,u.renderingStartTime=ie(),n.sibling=null,e=un.current,Mt(un,o?e&1|2:e&1),n):(We(n),null);case 22:case 23:return Xi(n),Uu(),o=n.memoizedState!==null,e!==null?e.memoizedState!==null!==o&&(n.flags|=8192):o&&(n.flags|=8192),o?(a&536870912)!==0&&(n.flags&128)===0&&(We(n),n.subtreeFlags&6&&(n.flags|=8192)):We(n),a=n.updateQueue,a!==null&&Ol(n,a.retryQueue),a=null,e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(a=e.memoizedState.cachePool.pool),o=null,n.memoizedState!==null&&n.memoizedState.cachePool!==null&&(o=n.memoizedState.cachePool.pool),o!==a&&(n.flags|=2048),e!==null&&yt(lr),null;case 24:return a=null,e!==null&&(a=e.memoizedState.cache),n.memoizedState.cache!==a&&(n.flags|=2048),ki(cn),We(n),null;case 25:return null;case 30:return null}throw Error(r(156,n.tag))}function Rx(e,n){switch(_u(n),n.tag){case 1:return e=n.flags,e&65536?(n.flags=e&-65537|128,n):null;case 3:return ki(cn),oe(),e=n.flags,(e&65536)!==0&&(e&128)===0?(n.flags=e&-65537|128,n):null;case 26:case 27:case 5:return He(n),null;case 13:if(Xi(n),e=n.memoizedState,e!==null&&e.dehydrated!==null){if(n.alternate===null)throw Error(r(340));js()}return e=n.flags,e&65536?(n.flags=e&-65537|128,n):null;case 19:return yt(un),null;case 4:return oe(),null;case 10:return ki(n.type),null;case 22:case 23:return Xi(n),Uu(),e!==null&&yt(lr),e=n.flags,e&65536?(n.flags=e&-65537|128,n):null;case 24:return ki(cn),null;case 25:return null;default:return null}}function Jm(e,n){switch(_u(n),n.tag){case 3:ki(cn),oe();break;case 26:case 27:case 5:He(n);break;case 4:oe();break;case 13:Xi(n);break;case 19:yt(un);break;case 10:ki(n.type);break;case 22:case 23:Xi(n),Uu(),e!==null&&yt(lr);break;case 24:ki(cn)}}function oo(e,n){try{var a=n.updateQueue,o=a!==null?a.lastEffect:null;if(o!==null){var u=o.next;a=u;do{if((a.tag&e)===e){o=void 0;var h=a.create,M=a.inst;o=h(),M.destroy=o}a=a.next}while(a!==u)}}catch(T){Fe(n,n.return,T)}}function Ea(e,n,a){try{var o=n.updateQueue,u=o!==null?o.lastEffect:null;if(u!==null){var h=u.next;o=h;do{if((o.tag&e)===e){var M=o.inst,T=M.destroy;if(T!==void 0){M.destroy=void 0,u=n;var z=a,$=T;try{$()}catch(ut){Fe(u,z,ut)}}}o=o.next}while(o!==h)}}catch(ut){Fe(n,n.return,ut)}}function $m(e){var n=e.updateQueue;if(n!==null){var a=e.stateNode;try{Hp(n,a)}catch(o){Fe(e,e.return,o)}}}function tg(e,n,a){a.props=ur(e.type,e.memoizedProps),a.state=e.memoizedState;try{a.componentWillUnmount()}catch(o){Fe(e,n,o)}}function lo(e,n){try{var a=e.ref;if(a!==null){switch(e.tag){case 26:case 27:case 5:var o=e.stateNode;break;case 30:o=e.stateNode;break;default:o=e.stateNode}typeof a=="function"?e.refCleanup=a(o):a.current=o}}catch(u){Fe(e,n,u)}}function Si(e,n){var a=e.ref,o=e.refCleanup;if(a!==null)if(typeof o=="function")try{o()}catch(u){Fe(e,n,u)}finally{e.refCleanup=null,e=e.alternate,e!=null&&(e.refCleanup=null)}else if(typeof a=="function")try{a(null)}catch(u){Fe(e,n,u)}else a.current=null}function eg(e){var n=e.type,a=e.memoizedProps,o=e.stateNode;try{t:switch(n){case"button":case"input":case"select":case"textarea":a.autoFocus&&o.focus();break t;case"img":a.src?o.src=a.src:a.srcSet&&(o.srcset=a.srcSet)}}catch(u){Fe(e,e.return,u)}}function sf(e,n,a){try{var o=e.stateNode;Yx(o,e.type,a,n),o[xn]=n}catch(u){Fe(e,e.return,u)}}function ng(e){return e.tag===5||e.tag===3||e.tag===26||e.tag===27&&Ua(e.type)||e.tag===4}function of(e){t:for(;;){for(;e.sibling===null;){if(e.return===null||ng(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.tag===27&&Ua(e.type)||e.flags&2||e.child===null||e.tag===4)continue t;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function lf(e,n,a){var o=e.tag;if(o===5||o===6)e=e.stateNode,n?(a.nodeType===9?a.body:a.nodeName==="HTML"?a.ownerDocument.body:a).insertBefore(e,n):(n=a.nodeType===9?a.body:a.nodeName==="HTML"?a.ownerDocument.body:a,n.appendChild(e),a=a._reactRootContainer,a!=null||n.onclick!==null||(n.onclick=Wl));else if(o!==4&&(o===27&&Ua(e.type)&&(a=e.stateNode,n=null),e=e.child,e!==null))for(lf(e,n,a),e=e.sibling;e!==null;)lf(e,n,a),e=e.sibling}function Pl(e,n,a){var o=e.tag;if(o===5||o===6)e=e.stateNode,n?a.insertBefore(e,n):a.appendChild(e);else if(o!==4&&(o===27&&Ua(e.type)&&(a=e.stateNode),e=e.child,e!==null))for(Pl(e,n,a),e=e.sibling;e!==null;)Pl(e,n,a),e=e.sibling}function ig(e){var n=e.stateNode,a=e.memoizedProps;try{for(var o=e.type,u=n.attributes;u.length;)n.removeAttributeNode(u[0]);En(n,o,a),n[on]=e,n[xn]=a}catch(h){Fe(e,e.return,h)}}var Yi=!1,tn=!1,cf=!1,ag=typeof WeakSet=="function"?WeakSet:Set,gn=null;function wx(e,n){if(e=e.containerInfo,Nf=$l,e=mp(e),su(e)){if("selectionStart"in e)var a={start:e.selectionStart,end:e.selectionEnd};else t:{a=(a=e.ownerDocument)&&a.defaultView||window;var o=a.getSelection&&a.getSelection();if(o&&o.rangeCount!==0){a=o.anchorNode;var u=o.anchorOffset,h=o.focusNode;o=o.focusOffset;try{a.nodeType,h.nodeType}catch{a=null;break t}var M=0,T=-1,z=-1,$=0,ut=0,vt=e,it=null;e:for(;;){for(var at;vt!==a||u!==0&&vt.nodeType!==3||(T=M+u),vt!==h||o!==0&&vt.nodeType!==3||(z=M+o),vt.nodeType===3&&(M+=vt.nodeValue.length),(at=vt.firstChild)!==null;)it=vt,vt=at;for(;;){if(vt===e)break e;if(it===a&&++$===u&&(T=M),it===h&&++ut===o&&(z=M),(at=vt.nextSibling)!==null)break;vt=it,it=vt.parentNode}vt=at}a=T===-1||z===-1?null:{start:T,end:z}}else a=null}a=a||{start:0,end:0}}else a=null;for(Of={focusedElem:e,selectionRange:a},$l=!1,gn=n;gn!==null;)if(n=gn,e=n.child,(n.subtreeFlags&1024)!==0&&e!==null)e.return=n,gn=e;else for(;gn!==null;){switch(n=gn,h=n.alternate,e=n.flags,n.tag){case 0:break;case 11:case 15:break;case 1:if((e&1024)!==0&&h!==null){e=void 0,a=n,u=h.memoizedProps,h=h.memoizedState,o=a.stateNode;try{var ee=ur(a.type,u,a.elementType===a.type);e=o.getSnapshotBeforeUpdate(ee,h),o.__reactInternalSnapshotBeforeUpdate=e}catch(Zt){Fe(a,a.return,Zt)}}break;case 3:if((e&1024)!==0){if(e=n.stateNode.containerInfo,a=e.nodeType,a===9)Bf(e);else if(a===1)switch(e.nodeName){case"HEAD":case"HTML":case"BODY":Bf(e);break;default:e.textContent=""}}break;case 5:case 26:case 27:case 6:case 4:case 17:break;default:if((e&1024)!==0)throw Error(r(163))}if(e=n.sibling,e!==null){e.return=n.return,gn=e;break}gn=n.return}}function rg(e,n,a){var o=a.flags;switch(a.tag){case 0:case 11:case 15:Ta(e,a),o&4&&oo(5,a);break;case 1:if(Ta(e,a),o&4)if(e=a.stateNode,n===null)try{e.componentDidMount()}catch(M){Fe(a,a.return,M)}else{var u=ur(a.type,n.memoizedProps);n=n.memoizedState;try{e.componentDidUpdate(u,n,e.__reactInternalSnapshotBeforeUpdate)}catch(M){Fe(a,a.return,M)}}o&64&&$m(a),o&512&&lo(a,a.return);break;case 3:if(Ta(e,a),o&64&&(e=a.updateQueue,e!==null)){if(n=null,a.child!==null)switch(a.child.tag){case 27:case 5:n=a.child.stateNode;break;case 1:n=a.child.stateNode}try{Hp(e,n)}catch(M){Fe(a,a.return,M)}}break;case 27:n===null&&o&4&&ig(a);case 26:case 5:Ta(e,a),n===null&&o&4&&eg(a),o&512&&lo(a,a.return);break;case 12:Ta(e,a);break;case 13:Ta(e,a),o&4&&lg(e,a),o&64&&(e=a.memoizedState,e!==null&&(e=e.dehydrated,e!==null&&(a=Bx.bind(null,a),ey(e,a))));break;case 22:if(o=a.memoizedState!==null||Yi,!o){n=n!==null&&n.memoizedState!==null||tn,u=Yi;var h=tn;Yi=o,(tn=n)&&!h?ba(e,a,(a.subtreeFlags&8772)!==0):Ta(e,a),Yi=u,tn=h}break;case 30:break;default:Ta(e,a)}}function sg(e){var n=e.alternate;n!==null&&(e.alternate=null,sg(n)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(n=e.stateNode,n!==null&&ha(n)),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}var je=null,In=!1;function Zi(e,n,a){for(a=a.child;a!==null;)og(e,n,a),a=a.sibling}function og(e,n,a){if(Pt&&typeof Pt.onCommitFiberUnmount=="function")try{Pt.onCommitFiberUnmount(ft,a)}catch{}switch(a.tag){case 26:tn||Si(a,n),Zi(e,n,a),a.memoizedState?a.memoizedState.count--:a.stateNode&&(a=a.stateNode,a.parentNode.removeChild(a));break;case 27:tn||Si(a,n);var o=je,u=In;Ua(a.type)&&(je=a.stateNode,In=!1),Zi(e,n,a),vo(a.stateNode),je=o,In=u;break;case 5:tn||Si(a,n);case 6:if(o=je,u=In,je=null,Zi(e,n,a),je=o,In=u,je!==null)if(In)try{(je.nodeType===9?je.body:je.nodeName==="HTML"?je.ownerDocument.body:je).removeChild(a.stateNode)}catch(h){Fe(a,n,h)}else try{je.removeChild(a.stateNode)}catch(h){Fe(a,n,h)}break;case 18:je!==null&&(In?(e=je,Zg(e.nodeType===9?e.body:e.nodeName==="HTML"?e.ownerDocument.body:e,a.stateNode),Ao(e)):Zg(je,a.stateNode));break;case 4:o=je,u=In,je=a.stateNode.containerInfo,In=!0,Zi(e,n,a),je=o,In=u;break;case 0:case 11:case 14:case 15:tn||Ea(2,a,n),tn||Ea(4,a,n),Zi(e,n,a);break;case 1:tn||(Si(a,n),o=a.stateNode,typeof o.componentWillUnmount=="function"&&tg(a,n,o)),Zi(e,n,a);break;case 21:Zi(e,n,a);break;case 22:tn=(o=tn)||a.memoizedState!==null,Zi(e,n,a),tn=o;break;default:Zi(e,n,a)}}function lg(e,n){if(n.memoizedState===null&&(e=n.alternate,e!==null&&(e=e.memoizedState,e!==null&&(e=e.dehydrated,e!==null))))try{Ao(e)}catch(a){Fe(n,n.return,a)}}function Cx(e){switch(e.tag){case 13:case 19:var n=e.stateNode;return n===null&&(n=e.stateNode=new ag),n;case 22:return e=e.stateNode,n=e._retryCache,n===null&&(n=e._retryCache=new ag),n;default:throw Error(r(435,e.tag))}}function uf(e,n){var a=Cx(e);n.forEach(function(o){var u=Ix.bind(null,e,o);a.has(o)||(a.add(o),o.then(u,u))})}function Wn(e,n){var a=n.deletions;if(a!==null)for(var o=0;o<a.length;o++){var u=a[o],h=e,M=n,T=M;t:for(;T!==null;){switch(T.tag){case 27:if(Ua(T.type)){je=T.stateNode,In=!1;break t}break;case 5:je=T.stateNode,In=!1;break t;case 3:case 4:je=T.stateNode.containerInfo,In=!0;break t}T=T.return}if(je===null)throw Error(r(160));og(h,M,u),je=null,In=!1,h=u.alternate,h!==null&&(h.return=null),u.return=null}if(n.subtreeFlags&13878)for(n=n.child;n!==null;)cg(n,e),n=n.sibling}var ui=null;function cg(e,n){var a=e.alternate,o=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:Wn(n,e),qn(e),o&4&&(Ea(3,e,e.return),oo(3,e),Ea(5,e,e.return));break;case 1:Wn(n,e),qn(e),o&512&&(tn||a===null||Si(a,a.return)),o&64&&Yi&&(e=e.updateQueue,e!==null&&(o=e.callbacks,o!==null&&(a=e.shared.hiddenCallbacks,e.shared.hiddenCallbacks=a===null?o:a.concat(o))));break;case 26:var u=ui;if(Wn(n,e),qn(e),o&512&&(tn||a===null||Si(a,a.return)),o&4){var h=a!==null?a.memoizedState:null;if(o=e.memoizedState,a===null)if(o===null)if(e.stateNode===null){t:{o=e.type,a=e.memoizedProps,u=u.ownerDocument||u;e:switch(o){case"title":h=u.getElementsByTagName("title")[0],(!h||h[fa]||h[on]||h.namespaceURI==="http://www.w3.org/2000/svg"||h.hasAttribute("itemprop"))&&(h=u.createElement(o),u.head.insertBefore(h,u.querySelector("head > title"))),En(h,o,a),h[on]=e,nn(h),o=h;break t;case"link":var M=i_("link","href",u).get(o+(a.href||""));if(M){for(var T=0;T<M.length;T++)if(h=M[T],h.getAttribute("href")===(a.href==null||a.href===""?null:a.href)&&h.getAttribute("rel")===(a.rel==null?null:a.rel)&&h.getAttribute("title")===(a.title==null?null:a.title)&&h.getAttribute("crossorigin")===(a.crossOrigin==null?null:a.crossOrigin)){M.splice(T,1);break e}}h=u.createElement(o),En(h,o,a),u.head.appendChild(h);break;case"meta":if(M=i_("meta","content",u).get(o+(a.content||""))){for(T=0;T<M.length;T++)if(h=M[T],h.getAttribute("content")===(a.content==null?null:""+a.content)&&h.getAttribute("name")===(a.name==null?null:a.name)&&h.getAttribute("property")===(a.property==null?null:a.property)&&h.getAttribute("http-equiv")===(a.httpEquiv==null?null:a.httpEquiv)&&h.getAttribute("charset")===(a.charSet==null?null:a.charSet)){M.splice(T,1);break e}}h=u.createElement(o),En(h,o,a),u.head.appendChild(h);break;default:throw Error(r(468,o))}h[on]=e,nn(h),o=h}e.stateNode=o}else a_(u,e.type,e.stateNode);else e.stateNode=n_(u,o,e.memoizedProps);else h!==o?(h===null?a.stateNode!==null&&(a=a.stateNode,a.parentNode.removeChild(a)):h.count--,o===null?a_(u,e.type,e.stateNode):n_(u,o,e.memoizedProps)):o===null&&e.stateNode!==null&&sf(e,e.memoizedProps,a.memoizedProps)}break;case 27:Wn(n,e),qn(e),o&512&&(tn||a===null||Si(a,a.return)),a!==null&&o&4&&sf(e,e.memoizedProps,a.memoizedProps);break;case 5:if(Wn(n,e),qn(e),o&512&&(tn||a===null||Si(a,a.return)),e.flags&32){u=e.stateNode;try{vi(u,"")}catch(at){Fe(e,e.return,at)}}o&4&&e.stateNode!=null&&(u=e.memoizedProps,sf(e,u,a!==null?a.memoizedProps:u)),o&1024&&(cf=!0);break;case 6:if(Wn(n,e),qn(e),o&4){if(e.stateNode===null)throw Error(r(162));o=e.memoizedProps,a=e.stateNode;try{a.nodeValue=o}catch(at){Fe(e,e.return,at)}}break;case 3:if(Kl=null,u=ui,ui=Yl(n.containerInfo),Wn(n,e),ui=u,qn(e),o&4&&a!==null&&a.memoizedState.isDehydrated)try{Ao(n.containerInfo)}catch(at){Fe(e,e.return,at)}cf&&(cf=!1,ug(e));break;case 4:o=ui,ui=Yl(e.stateNode.containerInfo),Wn(n,e),qn(e),ui=o;break;case 12:Wn(n,e),qn(e);break;case 13:Wn(n,e),qn(e),e.child.flags&8192&&e.memoizedState!==null!=(a!==null&&a.memoizedState!==null)&&(gf=ie()),o&4&&(o=e.updateQueue,o!==null&&(e.updateQueue=null,uf(e,o)));break;case 22:u=e.memoizedState!==null;var z=a!==null&&a.memoizedState!==null,$=Yi,ut=tn;if(Yi=$||u,tn=ut||z,Wn(n,e),tn=ut,Yi=$,qn(e),o&8192)t:for(n=e.stateNode,n._visibility=u?n._visibility&-2:n._visibility|1,u&&(a===null||z||Yi||tn||fr(e)),a=null,n=e;;){if(n.tag===5||n.tag===26){if(a===null){z=a=n;try{if(h=z.stateNode,u)M=h.style,typeof M.setProperty=="function"?M.setProperty("display","none","important"):M.display="none";else{T=z.stateNode;var vt=z.memoizedProps.style,it=vt!=null&&vt.hasOwnProperty("display")?vt.display:null;T.style.display=it==null||typeof it=="boolean"?"":(""+it).trim()}}catch(at){Fe(z,z.return,at)}}}else if(n.tag===6){if(a===null){z=n;try{z.stateNode.nodeValue=u?"":z.memoizedProps}catch(at){Fe(z,z.return,at)}}}else if((n.tag!==22&&n.tag!==23||n.memoizedState===null||n===e)&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break t;for(;n.sibling===null;){if(n.return===null||n.return===e)break t;a===n&&(a=null),n=n.return}a===n&&(a=null),n.sibling.return=n.return,n=n.sibling}o&4&&(o=e.updateQueue,o!==null&&(a=o.retryQueue,a!==null&&(o.retryQueue=null,uf(e,a))));break;case 19:Wn(n,e),qn(e),o&4&&(o=e.updateQueue,o!==null&&(e.updateQueue=null,uf(e,o)));break;case 30:break;case 21:break;default:Wn(n,e),qn(e)}}function qn(e){var n=e.flags;if(n&2){try{for(var a,o=e.return;o!==null;){if(ng(o)){a=o;break}o=o.return}if(a==null)throw Error(r(160));switch(a.tag){case 27:var u=a.stateNode,h=of(e);Pl(e,h,u);break;case 5:var M=a.stateNode;a.flags&32&&(vi(M,""),a.flags&=-33);var T=of(e);Pl(e,T,M);break;case 3:case 4:var z=a.stateNode.containerInfo,$=of(e);lf(e,$,z);break;default:throw Error(r(161))}}catch(ut){Fe(e,e.return,ut)}e.flags&=-3}n&4096&&(e.flags&=-4097)}function ug(e){if(e.subtreeFlags&1024)for(e=e.child;e!==null;){var n=e;ug(n),n.tag===5&&n.flags&1024&&n.stateNode.reset(),e=e.sibling}}function Ta(e,n){if(n.subtreeFlags&8772)for(n=n.child;n!==null;)rg(e,n.alternate,n),n=n.sibling}function fr(e){for(e=e.child;e!==null;){var n=e;switch(n.tag){case 0:case 11:case 14:case 15:Ea(4,n,n.return),fr(n);break;case 1:Si(n,n.return);var a=n.stateNode;typeof a.componentWillUnmount=="function"&&tg(n,n.return,a),fr(n);break;case 27:vo(n.stateNode);case 26:case 5:Si(n,n.return),fr(n);break;case 22:n.memoizedState===null&&fr(n);break;case 30:fr(n);break;default:fr(n)}e=e.sibling}}function ba(e,n,a){for(a=a&&(n.subtreeFlags&8772)!==0,n=n.child;n!==null;){var o=n.alternate,u=e,h=n,M=h.flags;switch(h.tag){case 0:case 11:case 15:ba(u,h,a),oo(4,h);break;case 1:if(ba(u,h,a),o=h,u=o.stateNode,typeof u.componentDidMount=="function")try{u.componentDidMount()}catch($){Fe(o,o.return,$)}if(o=h,u=o.updateQueue,u!==null){var T=o.stateNode;try{var z=u.shared.hiddenCallbacks;if(z!==null)for(u.shared.hiddenCallbacks=null,u=0;u<z.length;u++)Fp(z[u],T)}catch($){Fe(o,o.return,$)}}a&&M&64&&$m(h),lo(h,h.return);break;case 27:ig(h);case 26:case 5:ba(u,h,a),a&&o===null&&M&4&&eg(h),lo(h,h.return);break;case 12:ba(u,h,a);break;case 13:ba(u,h,a),a&&M&4&&lg(u,h);break;case 22:h.memoizedState===null&&ba(u,h,a),lo(h,h.return);break;case 30:break;default:ba(u,h,a)}n=n.sibling}}function ff(e,n){var a=null;e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(a=e.memoizedState.cachePool.pool),e=null,n.memoizedState!==null&&n.memoizedState.cachePool!==null&&(e=n.memoizedState.cachePool.pool),e!==a&&(e!=null&&e.refCount++,a!=null&&qs(a))}function hf(e,n){e=null,n.alternate!==null&&(e=n.alternate.memoizedState.cache),n=n.memoizedState.cache,n!==e&&(n.refCount++,e!=null&&qs(e))}function Mi(e,n,a,o){if(n.subtreeFlags&10256)for(n=n.child;n!==null;)fg(e,n,a,o),n=n.sibling}function fg(e,n,a,o){var u=n.flags;switch(n.tag){case 0:case 11:case 15:Mi(e,n,a,o),u&2048&&oo(9,n);break;case 1:Mi(e,n,a,o);break;case 3:Mi(e,n,a,o),u&2048&&(e=null,n.alternate!==null&&(e=n.alternate.memoizedState.cache),n=n.memoizedState.cache,n!==e&&(n.refCount++,e!=null&&qs(e)));break;case 12:if(u&2048){Mi(e,n,a,o),e=n.stateNode;try{var h=n.memoizedProps,M=h.id,T=h.onPostCommit;typeof T=="function"&&T(M,n.alternate===null?"mount":"update",e.passiveEffectDuration,-0)}catch(z){Fe(n,n.return,z)}}else Mi(e,n,a,o);break;case 13:Mi(e,n,a,o);break;case 23:break;case 22:h=n.stateNode,M=n.alternate,n.memoizedState!==null?h._visibility&2?Mi(e,n,a,o):co(e,n):h._visibility&2?Mi(e,n,a,o):(h._visibility|=2,Yr(e,n,a,o,(n.subtreeFlags&10256)!==0)),u&2048&&ff(M,n);break;case 24:Mi(e,n,a,o),u&2048&&hf(n.alternate,n);break;default:Mi(e,n,a,o)}}function Yr(e,n,a,o,u){for(u=u&&(n.subtreeFlags&10256)!==0,n=n.child;n!==null;){var h=e,M=n,T=a,z=o,$=M.flags;switch(M.tag){case 0:case 11:case 15:Yr(h,M,T,z,u),oo(8,M);break;case 23:break;case 22:var ut=M.stateNode;M.memoizedState!==null?ut._visibility&2?Yr(h,M,T,z,u):co(h,M):(ut._visibility|=2,Yr(h,M,T,z,u)),u&&$&2048&&ff(M.alternate,M);break;case 24:Yr(h,M,T,z,u),u&&$&2048&&hf(M.alternate,M);break;default:Yr(h,M,T,z,u)}n=n.sibling}}function co(e,n){if(n.subtreeFlags&10256)for(n=n.child;n!==null;){var a=e,o=n,u=o.flags;switch(o.tag){case 22:co(a,o),u&2048&&ff(o.alternate,o);break;case 24:co(a,o),u&2048&&hf(o.alternate,o);break;default:co(a,o)}n=n.sibling}}var uo=8192;function Zr(e){if(e.subtreeFlags&uo)for(e=e.child;e!==null;)hg(e),e=e.sibling}function hg(e){switch(e.tag){case 26:Zr(e),e.flags&uo&&e.memoizedState!==null&&py(ui,e.memoizedState,e.memoizedProps);break;case 5:Zr(e);break;case 3:case 4:var n=ui;ui=Yl(e.stateNode.containerInfo),Zr(e),ui=n;break;case 22:e.memoizedState===null&&(n=e.alternate,n!==null&&n.memoizedState!==null?(n=uo,uo=16777216,Zr(e),uo=n):Zr(e));break;default:Zr(e)}}function dg(e){var n=e.alternate;if(n!==null&&(e=n.child,e!==null)){n.child=null;do n=e.sibling,e.sibling=null,e=n;while(e!==null)}}function fo(e){var n=e.deletions;if((e.flags&16)!==0){if(n!==null)for(var a=0;a<n.length;a++){var o=n[a];gn=o,mg(o,e)}dg(e)}if(e.subtreeFlags&10256)for(e=e.child;e!==null;)pg(e),e=e.sibling}function pg(e){switch(e.tag){case 0:case 11:case 15:fo(e),e.flags&2048&&Ea(9,e,e.return);break;case 3:fo(e);break;case 12:fo(e);break;case 22:var n=e.stateNode;e.memoizedState!==null&&n._visibility&2&&(e.return===null||e.return.tag!==13)?(n._visibility&=-3,zl(e)):fo(e);break;default:fo(e)}}function zl(e){var n=e.deletions;if((e.flags&16)!==0){if(n!==null)for(var a=0;a<n.length;a++){var o=n[a];gn=o,mg(o,e)}dg(e)}for(e=e.child;e!==null;){switch(n=e,n.tag){case 0:case 11:case 15:Ea(8,n,n.return),zl(n);break;case 22:a=n.stateNode,a._visibility&2&&(a._visibility&=-3,zl(n));break;default:zl(n)}e=e.sibling}}function mg(e,n){for(;gn!==null;){var a=gn;switch(a.tag){case 0:case 11:case 15:Ea(8,a,n);break;case 23:case 22:if(a.memoizedState!==null&&a.memoizedState.cachePool!==null){var o=a.memoizedState.cachePool.pool;o!=null&&o.refCount++}break;case 24:qs(a.memoizedState.cache)}if(o=a.child,o!==null)o.return=a,gn=o;else t:for(a=e;gn!==null;){o=gn;var u=o.sibling,h=o.return;if(sg(o),o===a){gn=null;break t}if(u!==null){u.return=h,gn=u;break t}gn=h}}}var Dx={getCacheForType:function(e){var n=An(cn),a=n.data.get(e);return a===void 0&&(a=e(),n.data.set(e,a)),a}},Ux=typeof WeakMap=="function"?WeakMap:Map,Ce=0,ke=null,pe=null,ye=0,De=0,Yn=null,Aa=!1,Kr=!1,df=!1,Ki=0,Ke=0,Ra=0,hr=0,pf=0,ai=0,Qr=0,ho=null,Fn=null,mf=!1,gf=0,Bl=1/0,Il=null,wa=null,Mn=0,Ca=null,Jr=null,$r=0,_f=0,vf=null,gg=null,po=0,xf=null;function Zn(){if((Ce&2)!==0&&ye!==0)return ye&-ye;if(I.T!==null){var e=Hr;return e!==0?e:Af()}return Ee()}function _g(){ai===0&&(ai=(ye&536870912)===0||we?X():536870912);var e=ii.current;return e!==null&&(e.flags|=32),ai}function Kn(e,n,a){(e===ke&&(De===2||De===9)||e.cancelPendingCommit!==null)&&(ts(e,0),Da(e,ye,ai,!1)),_t(e,a),((Ce&2)===0||e!==ke)&&(e===ke&&((Ce&2)===0&&(hr|=a),Ke===4&&Da(e,ye,ai,!1)),Ei(e))}function vg(e,n,a){if((Ce&6)!==0)throw Error(r(327));var o=!a&&(n&124)===0&&(n&e.expiredLanes)===0||ne(e,n),u=o?Ox(e,n):Mf(e,n,!0),h=o;do{if(u===0){Kr&&!o&&Da(e,n,0,!1);break}else{if(a=e.current.alternate,h&&!Lx(a)){u=Mf(e,n,!1),h=!1;continue}if(u===2){if(h=n,e.errorRecoveryDisabledLanes&h)var M=0;else M=e.pendingLanes&-536870913,M=M!==0?M:M&536870912?536870912:0;if(M!==0){n=M;t:{var T=e;u=ho;var z=T.current.memoizedState.isDehydrated;if(z&&(ts(T,M).flags|=256),M=Mf(T,M,!1),M!==2){if(df&&!z){T.errorRecoveryDisabledLanes|=h,hr|=h,u=4;break t}h=Fn,Fn=u,h!==null&&(Fn===null?Fn=h:Fn.push.apply(Fn,h))}u=M}if(h=!1,u!==2)continue}}if(u===1){ts(e,0),Da(e,n,0,!0);break}t:{switch(o=e,h=u,h){case 0:case 1:throw Error(r(345));case 4:if((n&4194048)!==n)break;case 6:Da(o,n,ai,!Aa);break t;case 2:Fn=null;break;case 3:case 5:break;default:throw Error(r(329))}if((n&62914560)===n&&(u=gf+300-ie(),10<u)){if(Da(o,n,ai,!Aa),ce(o,0,!0)!==0)break t;o.timeoutHandle=qg(xg.bind(null,o,a,Fn,Il,mf,n,ai,hr,Qr,Aa,h,2,-0,0),u);break t}xg(o,a,Fn,Il,mf,n,ai,hr,Qr,Aa,h,0,-0,0)}}break}while(!0);Ei(e)}function xg(e,n,a,o,u,h,M,T,z,$,ut,vt,it,at){if(e.timeoutHandle=-1,vt=n.subtreeFlags,(vt&8192||(vt&16785408)===16785408)&&(So={stylesheets:null,count:0,unsuspend:dy},hg(n),vt=my(),vt!==null)){e.cancelPendingCommit=vt(Ag.bind(null,e,n,h,a,o,u,M,T,z,ut,1,it,at)),Da(e,h,M,!$);return}Ag(e,n,h,a,o,u,M,T,z)}function Lx(e){for(var n=e;;){var a=n.tag;if((a===0||a===11||a===15)&&n.flags&16384&&(a=n.updateQueue,a!==null&&(a=a.stores,a!==null)))for(var o=0;o<a.length;o++){var u=a[o],h=u.getSnapshot;u=u.value;try{if(!jn(h(),u))return!1}catch{return!1}}if(a=n.child,n.subtreeFlags&16384&&a!==null)a.return=n,n=a;else{if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return!0;n=n.return}n.sibling.return=n.return,n=n.sibling}}return!0}function Da(e,n,a,o){n&=~pf,n&=~hr,e.suspendedLanes|=n,e.pingedLanes&=~n,o&&(e.warmLanes|=n),o=e.expirationTimes;for(var u=n;0<u;){var h=31-Gt(u),M=1<<h;o[h]=-1,u&=~M}a!==0&&Ot(e,a,n)}function Fl(){return(Ce&6)===0?(mo(0),!1):!0}function yf(){if(pe!==null){if(De===0)var e=pe.return;else e=pe,Vi=sr=null,zu(e),Wr=null,ao=0,e=pe;for(;e!==null;)Jm(e.alternate,e),e=e.return;pe=null}}function ts(e,n){var a=e.timeoutHandle;a!==-1&&(e.timeoutHandle=-1,Kx(a)),a=e.cancelPendingCommit,a!==null&&(e.cancelPendingCommit=null,a()),yf(),ke=e,pe=a=Fi(e.current,null),ye=n,De=0,Yn=null,Aa=!1,Kr=ne(e,n),df=!1,Qr=ai=pf=hr=Ra=Ke=0,Fn=ho=null,mf=!1,(n&8)!==0&&(n|=n&32);var o=e.entangledLanes;if(o!==0)for(e=e.entanglements,o&=n;0<o;){var u=31-Gt(o),h=1<<u;n|=e[u],o&=~h}return Ki=n,ol(),a}function yg(e,n){ue=null,I.H=Al,n===Zs||n===gl?(n=Bp(),De=3):n===Op?(n=Bp(),De=4):De=n===Im?8:n!==null&&typeof n=="object"&&typeof n.then=="function"?6:1,Yn=n,pe===null&&(Ke=1,Ul(e,$n(n,e.current)))}function Sg(){var e=I.H;return I.H=Al,e===null?Al:e}function Mg(){var e=I.A;return I.A=Dx,e}function Sf(){Ke=4,Aa||(ye&4194048)!==ye&&ii.current!==null||(Kr=!0),(Ra&134217727)===0&&(hr&134217727)===0||ke===null||Da(ke,ye,ai,!1)}function Mf(e,n,a){var o=Ce;Ce|=2;var u=Sg(),h=Mg();(ke!==e||ye!==n)&&(Il=null,ts(e,n)),n=!1;var M=Ke;t:do try{if(De!==0&&pe!==null){var T=pe,z=Yn;switch(De){case 8:yf(),M=6;break t;case 3:case 2:case 9:case 6:ii.current===null&&(n=!0);var $=De;if(De=0,Yn=null,es(e,T,z,$),a&&Kr){M=0;break t}break;default:$=De,De=0,Yn=null,es(e,T,z,$)}}Nx(),M=Ke;break}catch(ut){yg(e,ut)}while(!0);return n&&e.shellSuspendCounter++,Vi=sr=null,Ce=o,I.H=u,I.A=h,pe===null&&(ke=null,ye=0,ol()),M}function Nx(){for(;pe!==null;)Eg(pe)}function Ox(e,n){var a=Ce;Ce|=2;var o=Sg(),u=Mg();ke!==e||ye!==n?(Il=null,Bl=ie()+500,ts(e,n)):Kr=ne(e,n);t:do try{if(De!==0&&pe!==null){n=pe;var h=Yn;e:switch(De){case 1:De=0,Yn=null,es(e,n,h,1);break;case 2:case 9:if(Pp(h)){De=0,Yn=null,Tg(n);break}n=function(){De!==2&&De!==9||ke!==e||(De=7),Ei(e)},h.then(n,n);break t;case 3:De=7;break t;case 4:De=5;break t;case 7:Pp(h)?(De=0,Yn=null,Tg(n)):(De=0,Yn=null,es(e,n,h,7));break;case 5:var M=null;switch(pe.tag){case 26:M=pe.memoizedState;case 5:case 27:var T=pe;if(!M||r_(M)){De=0,Yn=null;var z=T.sibling;if(z!==null)pe=z;else{var $=T.return;$!==null?(pe=$,Hl($)):pe=null}break e}}De=0,Yn=null,es(e,n,h,5);break;case 6:De=0,Yn=null,es(e,n,h,6);break;case 8:yf(),Ke=6;break t;default:throw Error(r(462))}}Px();break}catch(ut){yg(e,ut)}while(!0);return Vi=sr=null,I.H=o,I.A=u,Ce=a,pe!==null?0:(ke=null,ye=0,ol(),Ke)}function Px(){for(;pe!==null&&!On();)Eg(pe)}function Eg(e){var n=Km(e.alternate,e,Ki);e.memoizedProps=e.pendingProps,n===null?Hl(e):pe=n}function Tg(e){var n=e,a=n.alternate;switch(n.tag){case 15:case 0:n=jm(a,n,n.pendingProps,n.type,void 0,ye);break;case 11:n=jm(a,n,n.pendingProps,n.type.render,n.ref,ye);break;case 5:zu(n);default:Jm(a,n),n=pe=bp(n,Ki),n=Km(a,n,Ki)}e.memoizedProps=e.pendingProps,n===null?Hl(e):pe=n}function es(e,n,a,o){Vi=sr=null,zu(n),Wr=null,ao=0;var u=n.return;try{if(Tx(e,u,n,a,ye)){Ke=1,Ul(e,$n(a,e.current)),pe=null;return}}catch(h){if(u!==null)throw pe=u,h;Ke=1,Ul(e,$n(a,e.current)),pe=null;return}n.flags&32768?(we||o===1?e=!0:Kr||(ye&536870912)!==0?e=!1:(Aa=e=!0,(o===2||o===9||o===3||o===6)&&(o=ii.current,o!==null&&o.tag===13&&(o.flags|=16384))),bg(n,e)):Hl(n)}function Hl(e){var n=e;do{if((n.flags&32768)!==0){bg(n,Aa);return}e=n.return;var a=Ax(n.alternate,n,Ki);if(a!==null){pe=a;return}if(n=n.sibling,n!==null){pe=n;return}pe=n=e}while(n!==null);Ke===0&&(Ke=5)}function bg(e,n){do{var a=Rx(e.alternate,e);if(a!==null){a.flags&=32767,pe=a;return}if(a=e.return,a!==null&&(a.flags|=32768,a.subtreeFlags=0,a.deletions=null),!n&&(e=e.sibling,e!==null)){pe=e;return}pe=e=a}while(e!==null);Ke=6,pe=null}function Ag(e,n,a,o,u,h,M,T,z){e.cancelPendingCommit=null;do Gl();while(Mn!==0);if((Ce&6)!==0)throw Error(r(327));if(n!==null){if(n===e.current)throw Error(r(177));if(h=n.lanes|n.childLanes,h|=fu,Bt(e,a,h,M,T,z),e===ke&&(pe=ke=null,ye=0),Jr=n,Ca=e,$r=a,_f=h,vf=u,gg=o,(n.subtreeFlags&10256)!==0||(n.flags&10256)!==0?(e.callbackNode=null,e.callbackPriority=0,Fx(O,function(){return Ug(),null})):(e.callbackNode=null,e.callbackPriority=0),o=(n.flags&13878)!==0,(n.subtreeFlags&13878)!==0||o){o=I.T,I.T=null,u=K.p,K.p=2,M=Ce,Ce|=4;try{wx(e,n,a)}finally{Ce=M,K.p=u,I.T=o}}Mn=1,Rg(),wg(),Cg()}}function Rg(){if(Mn===1){Mn=0;var e=Ca,n=Jr,a=(n.flags&13878)!==0;if((n.subtreeFlags&13878)!==0||a){a=I.T,I.T=null;var o=K.p;K.p=2;var u=Ce;Ce|=4;try{cg(n,e);var h=Of,M=mp(e.containerInfo),T=h.focusedElem,z=h.selectionRange;if(M!==T&&T&&T.ownerDocument&&pp(T.ownerDocument.documentElement,T)){if(z!==null&&su(T)){var $=z.start,ut=z.end;if(ut===void 0&&(ut=$),"selectionStart"in T)T.selectionStart=$,T.selectionEnd=Math.min(ut,T.value.length);else{var vt=T.ownerDocument||document,it=vt&&vt.defaultView||window;if(it.getSelection){var at=it.getSelection(),ee=T.textContent.length,Zt=Math.min(z.start,ee),Pe=z.end===void 0?Zt:Math.min(z.end,ee);!at.extend&&Zt>Pe&&(M=Pe,Pe=Zt,Zt=M);var W=dp(T,Zt),j=dp(T,Pe);if(W&&j&&(at.rangeCount!==1||at.anchorNode!==W.node||at.anchorOffset!==W.offset||at.focusNode!==j.node||at.focusOffset!==j.offset)){var Q=vt.createRange();Q.setStart(W.node,W.offset),at.removeAllRanges(),Zt>Pe?(at.addRange(Q),at.extend(j.node,j.offset)):(Q.setEnd(j.node,j.offset),at.addRange(Q))}}}}for(vt=[],at=T;at=at.parentNode;)at.nodeType===1&&vt.push({element:at,left:at.scrollLeft,top:at.scrollTop});for(typeof T.focus=="function"&&T.focus(),T=0;T<vt.length;T++){var ht=vt[T];ht.element.scrollLeft=ht.left,ht.element.scrollTop=ht.top}}$l=!!Nf,Of=Nf=null}finally{Ce=u,K.p=o,I.T=a}}e.current=n,Mn=2}}function wg(){if(Mn===2){Mn=0;var e=Ca,n=Jr,a=(n.flags&8772)!==0;if((n.subtreeFlags&8772)!==0||a){a=I.T,I.T=null;var o=K.p;K.p=2;var u=Ce;Ce|=4;try{rg(e,n.alternate,n)}finally{Ce=u,K.p=o,I.T=a}}Mn=3}}function Cg(){if(Mn===4||Mn===3){Mn=0,ge();var e=Ca,n=Jr,a=$r,o=gg;(n.subtreeFlags&10256)!==0||(n.flags&10256)!==0?Mn=5:(Mn=0,Jr=Ca=null,Dg(e,e.pendingLanes));var u=e.pendingLanes;if(u===0&&(wa=null),en(a),n=n.stateNode,Pt&&typeof Pt.onCommitFiberRoot=="function")try{Pt.onCommitFiberRoot(ft,n,void 0,(n.current.flags&128)===128)}catch{}if(o!==null){n=I.T,u=K.p,K.p=2,I.T=null;try{for(var h=e.onRecoverableError,M=0;M<o.length;M++){var T=o[M];h(T.value,{componentStack:T.stack})}}finally{I.T=n,K.p=u}}($r&3)!==0&&Gl(),Ei(e),u=e.pendingLanes,(a&4194090)!==0&&(u&42)!==0?e===xf?po++:(po=0,xf=e):po=0,mo(0)}}function Dg(e,n){(e.pooledCacheLanes&=n)===0&&(n=e.pooledCache,n!=null&&(e.pooledCache=null,qs(n)))}function Gl(e){return Rg(),wg(),Cg(),Ug()}function Ug(){if(Mn!==5)return!1;var e=Ca,n=_f;_f=0;var a=en($r),o=I.T,u=K.p;try{K.p=32>a?32:a,I.T=null,a=vf,vf=null;var h=Ca,M=$r;if(Mn=0,Jr=Ca=null,$r=0,(Ce&6)!==0)throw Error(r(331));var T=Ce;if(Ce|=4,pg(h.current),fg(h,h.current,M,a),Ce=T,mo(0,!1),Pt&&typeof Pt.onPostCommitFiberRoot=="function")try{Pt.onPostCommitFiberRoot(ft,h)}catch{}return!0}finally{K.p=u,I.T=o,Dg(e,n)}}function Lg(e,n,a){n=$n(a,n),n=Ku(e.stateNode,n,2),e=xa(e,n,2),e!==null&&(_t(e,2),Ei(e))}function Fe(e,n,a){if(e.tag===3)Lg(e,e,a);else for(;n!==null;){if(n.tag===3){Lg(n,e,a);break}else if(n.tag===1){var o=n.stateNode;if(typeof n.type.getDerivedStateFromError=="function"||typeof o.componentDidCatch=="function"&&(wa===null||!wa.has(o))){e=$n(a,e),a=zm(2),o=xa(n,a,2),o!==null&&(Bm(a,o,n,e),_t(o,2),Ei(o));break}}n=n.return}}function Ef(e,n,a){var o=e.pingCache;if(o===null){o=e.pingCache=new Ux;var u=new Set;o.set(n,u)}else u=o.get(n),u===void 0&&(u=new Set,o.set(n,u));u.has(a)||(df=!0,u.add(a),e=zx.bind(null,e,n,a),n.then(e,e))}function zx(e,n,a){var o=e.pingCache;o!==null&&o.delete(n),e.pingedLanes|=e.suspendedLanes&a,e.warmLanes&=~a,ke===e&&(ye&a)===a&&(Ke===4||Ke===3&&(ye&62914560)===ye&&300>ie()-gf?(Ce&2)===0&&ts(e,0):pf|=a,Qr===ye&&(Qr=0)),Ei(e)}function Ng(e,n){n===0&&(n=Nt()),e=zr(e,n),e!==null&&(_t(e,n),Ei(e))}function Bx(e){var n=e.memoizedState,a=0;n!==null&&(a=n.retryLane),Ng(e,a)}function Ix(e,n){var a=0;switch(e.tag){case 13:var o=e.stateNode,u=e.memoizedState;u!==null&&(a=u.retryLane);break;case 19:o=e.stateNode;break;case 22:o=e.stateNode._retryCache;break;default:throw Error(r(314))}o!==null&&o.delete(n),Ng(e,a)}function Fx(e,n){return fe(e,n)}var Vl=null,ns=null,Tf=!1,kl=!1,bf=!1,dr=0;function Ei(e){e!==ns&&e.next===null&&(ns===null?Vl=ns=e:ns=ns.next=e),kl=!0,Tf||(Tf=!0,Gx())}function mo(e,n){if(!bf&&kl){bf=!0;do for(var a=!1,o=Vl;o!==null;){if(e!==0){var u=o.pendingLanes;if(u===0)var h=0;else{var M=o.suspendedLanes,T=o.pingedLanes;h=(1<<31-Gt(42|e)+1)-1,h&=u&~(M&~T),h=h&201326741?h&201326741|1:h?h|2:0}h!==0&&(a=!0,Bg(o,h))}else h=ye,h=ce(o,o===ke?h:0,o.cancelPendingCommit!==null||o.timeoutHandle!==-1),(h&3)===0||ne(o,h)||(a=!0,Bg(o,h));o=o.next}while(a);bf=!1}}function Hx(){Og()}function Og(){kl=Tf=!1;var e=0;dr!==0&&(Zx()&&(e=dr),dr=0);for(var n=ie(),a=null,o=Vl;o!==null;){var u=o.next,h=Pg(o,n);h===0?(o.next=null,a===null?Vl=u:a.next=u,u===null&&(ns=a)):(a=o,(e!==0||(h&3)!==0)&&(kl=!0)),o=u}mo(e)}function Pg(e,n){for(var a=e.suspendedLanes,o=e.pingedLanes,u=e.expirationTimes,h=e.pendingLanes&-62914561;0<h;){var M=31-Gt(h),T=1<<M,z=u[M];z===-1?((T&a)===0||(T&o)!==0)&&(u[M]=Le(T,n)):z<=n&&(e.expiredLanes|=T),h&=~T}if(n=ke,a=ye,a=ce(e,e===n?a:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),o=e.callbackNode,a===0||e===n&&(De===2||De===9)||e.cancelPendingCommit!==null)return o!==null&&o!==null&&G(o),e.callbackNode=null,e.callbackPriority=0;if((a&3)===0||ne(e,a)){if(n=a&-a,n===e.callbackPriority)return n;switch(o!==null&&G(o),en(a)){case 2:case 8:a=Vt;break;case 32:a=O;break;case 268435456:a=nt;break;default:a=O}return o=zg.bind(null,e),a=fe(a,o),e.callbackPriority=n,e.callbackNode=a,n}return o!==null&&o!==null&&G(o),e.callbackPriority=2,e.callbackNode=null,2}function zg(e,n){if(Mn!==0&&Mn!==5)return e.callbackNode=null,e.callbackPriority=0,null;var a=e.callbackNode;if(Gl()&&e.callbackNode!==a)return null;var o=ye;return o=ce(e,e===ke?o:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),o===0?null:(vg(e,o,n),Pg(e,ie()),e.callbackNode!=null&&e.callbackNode===a?zg.bind(null,e):null)}function Bg(e,n){if(Gl())return null;vg(e,n,!0)}function Gx(){Qx(function(){(Ce&6)!==0?fe(Ue,Hx):Og()})}function Af(){return dr===0&&(dr=X()),dr}function Ig(e){return e==null||typeof e=="symbol"||typeof e=="boolean"?null:typeof e=="function"?e:tl(""+e)}function Fg(e,n){var a=n.ownerDocument.createElement("input");return a.name=n.name,a.value=n.value,e.id&&a.setAttribute("form",e.id),n.parentNode.insertBefore(a,n),e=new FormData(e),a.parentNode.removeChild(a),e}function Vx(e,n,a,o,u){if(n==="submit"&&a&&a.stateNode===u){var h=Ig((u[xn]||null).action),M=o.submitter;M&&(n=(n=M[xn]||null)?Ig(n.formAction):M.getAttribute("formAction"),n!==null&&(h=n,M=null));var T=new al("action","action",null,o,u);e.push({event:T,listeners:[{instance:null,listener:function(){if(o.defaultPrevented){if(dr!==0){var z=M?Fg(u,M):new FormData(u);Xu(a,{pending:!0,data:z,method:u.method,action:h},null,z)}}else typeof h=="function"&&(T.preventDefault(),z=M?Fg(u,M):new FormData(u),Xu(a,{pending:!0,data:z,method:u.method,action:h},h,z))},currentTarget:u}]})}}for(var Rf=0;Rf<uu.length;Rf++){var wf=uu[Rf],kx=wf.toLowerCase(),jx=wf[0].toUpperCase()+wf.slice(1);ci(kx,"on"+jx)}ci(vp,"onAnimationEnd"),ci(xp,"onAnimationIteration"),ci(yp,"onAnimationStart"),ci("dblclick","onDoubleClick"),ci("focusin","onFocus"),ci("focusout","onBlur"),ci(ox,"onTransitionRun"),ci(lx,"onTransitionStart"),ci(cx,"onTransitionCancel"),ci(Sp,"onTransitionEnd"),w("onMouseEnter",["mouseout","mouseover"]),w("onMouseLeave",["mouseout","mouseover"]),w("onPointerEnter",["pointerout","pointerover"]),w("onPointerLeave",["pointerout","pointerover"]),Pi("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),Pi("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),Pi("onBeforeInput",["compositionend","keypress","textInput","paste"]),Pi("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),Pi("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),Pi("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var go="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),Xx=new Set("beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(go));function Hg(e,n){n=(n&4)!==0;for(var a=0;a<e.length;a++){var o=e[a],u=o.event;o=o.listeners;t:{var h=void 0;if(n)for(var M=o.length-1;0<=M;M--){var T=o[M],z=T.instance,$=T.currentTarget;if(T=T.listener,z!==h&&u.isPropagationStopped())break t;h=T,u.currentTarget=$;try{h(u)}catch(ut){Dl(ut)}u.currentTarget=null,h=z}else for(M=0;M<o.length;M++){if(T=o[M],z=T.instance,$=T.currentTarget,T=T.listener,z!==h&&u.isPropagationStopped())break t;h=T,u.currentTarget=$;try{h(u)}catch(ut){Dl(ut)}u.currentTarget=null,h=z}}}}function me(e,n){var a=n[Za];a===void 0&&(a=n[Za]=new Set);var o=e+"__bubble";a.has(o)||(Gg(n,e,2,!1),a.add(o))}function Cf(e,n,a){var o=0;n&&(o|=4),Gg(a,e,o,n)}var jl="_reactListening"+Math.random().toString(36).slice(2);function Df(e){if(!e[jl]){e[jl]=!0,Jo.forEach(function(a){a!=="selectionchange"&&(Xx.has(a)||Cf(a,!1,e),Cf(a,!0,e))});var n=e.nodeType===9?e:e.ownerDocument;n===null||n[jl]||(n[jl]=!0,Cf("selectionchange",!1,n))}}function Gg(e,n,a,o){switch(f_(n)){case 2:var u=vy;break;case 8:u=xy;break;default:u=jf}a=u.bind(null,n,a,e),u=void 0,!Qc||n!=="touchstart"&&n!=="touchmove"&&n!=="wheel"||(u=!0),o?u!==void 0?e.addEventListener(n,a,{capture:!0,passive:u}):e.addEventListener(n,a,!0):u!==void 0?e.addEventListener(n,a,{passive:u}):e.addEventListener(n,a,!1)}function Uf(e,n,a,o,u){var h=o;if((n&1)===0&&(n&2)===0&&o!==null)t:for(;;){if(o===null)return;var M=o.tag;if(M===3||M===4){var T=o.stateNode.containerInfo;if(T===u)break;if(M===4)for(M=o.return;M!==null;){var z=M.tag;if((z===3||z===4)&&M.stateNode.containerInfo===u)return;M=M.return}for(;T!==null;){if(M=Ni(T),M===null)return;if(z=M.tag,z===5||z===6||z===26||z===27){o=h=M;continue t}T=T.parentNode}}o=o.return}Yd(function(){var $=h,ut=Zc(a),vt=[];t:{var it=Mp.get(e);if(it!==void 0){var at=al,ee=e;switch(e){case"keypress":if(nl(a)===0)break t;case"keydown":case"keyup":at=F0;break;case"focusin":ee="focus",at=eu;break;case"focusout":ee="blur",at=eu;break;case"beforeblur":case"afterblur":at=eu;break;case"click":if(a.button===2)break t;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":at=Qd;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":at=R0;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":at=V0;break;case vp:case xp:case yp:at=D0;break;case Sp:at=j0;break;case"scroll":case"scrollend":at=b0;break;case"wheel":at=W0;break;case"copy":case"cut":case"paste":at=L0;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":at=$d;break;case"toggle":case"beforetoggle":at=Y0}var Zt=(n&4)!==0,Pe=!Zt&&(e==="scroll"||e==="scrollend"),W=Zt?it!==null?it+"Capture":null:it;Zt=[];for(var j=$,Q;j!==null;){var ht=j;if(Q=ht.stateNode,ht=ht.tag,ht!==5&&ht!==26&&ht!==27||Q===null||W===null||(ht=Os(j,W),ht!=null&&Zt.push(_o(j,ht,Q))),Pe)break;j=j.return}0<Zt.length&&(it=new at(it,ee,null,a,ut),vt.push({event:it,listeners:Zt}))}}if((n&7)===0){t:{if(it=e==="mouseover"||e==="pointerover",at=e==="mouseout"||e==="pointerout",it&&a!==Yc&&(ee=a.relatedTarget||a.fromElement)&&(Ni(ee)||ee[Pn]))break t;if((at||it)&&(it=ut.window===ut?ut:(it=ut.ownerDocument)?it.defaultView||it.parentWindow:window,at?(ee=a.relatedTarget||a.toElement,at=$,ee=ee?Ni(ee):null,ee!==null&&(Pe=c(ee),Zt=ee.tag,ee!==Pe||Zt!==5&&Zt!==27&&Zt!==6)&&(ee=null)):(at=null,ee=$),at!==ee)){if(Zt=Qd,ht="onMouseLeave",W="onMouseEnter",j="mouse",(e==="pointerout"||e==="pointerover")&&(Zt=$d,ht="onPointerLeave",W="onPointerEnter",j="pointer"),Pe=at==null?it:Qa(at),Q=ee==null?it:Qa(ee),it=new Zt(ht,j+"leave",at,a,ut),it.target=Pe,it.relatedTarget=Q,ht=null,Ni(ut)===$&&(Zt=new Zt(W,j+"enter",ee,a,ut),Zt.target=Q,Zt.relatedTarget=Pe,ht=Zt),Pe=ht,at&&ee)e:{for(Zt=at,W=ee,j=0,Q=Zt;Q;Q=is(Q))j++;for(Q=0,ht=W;ht;ht=is(ht))Q++;for(;0<j-Q;)Zt=is(Zt),j--;for(;0<Q-j;)W=is(W),Q--;for(;j--;){if(Zt===W||W!==null&&Zt===W.alternate)break e;Zt=is(Zt),W=is(W)}Zt=null}else Zt=null;at!==null&&Vg(vt,it,at,Zt,!1),ee!==null&&Pe!==null&&Vg(vt,Pe,ee,Zt,!0)}}t:{if(it=$?Qa($):window,at=it.nodeName&&it.nodeName.toLowerCase(),at==="select"||at==="input"&&it.type==="file")var Ht=op;else if(rp(it))if(lp)Ht=ax;else{Ht=nx;var he=ex}else at=it.nodeName,!at||at.toLowerCase()!=="input"||it.type!=="checkbox"&&it.type!=="radio"?$&&qc($.elementType)&&(Ht=op):Ht=ix;if(Ht&&(Ht=Ht(e,$))){sp(vt,Ht,a,ut);break t}he&&he(e,it,$),e==="focusout"&&$&&it.type==="number"&&$.memoizedProps.value!=null&&bn(it,"number",it.value)}switch(he=$?Qa($):window,e){case"focusin":(rp(he)||he.contentEditable==="true")&&(Nr=he,ou=$,Vs=null);break;case"focusout":Vs=ou=Nr=null;break;case"mousedown":lu=!0;break;case"contextmenu":case"mouseup":case"dragend":lu=!1,gp(vt,a,ut);break;case"selectionchange":if(sx)break;case"keydown":case"keyup":gp(vt,a,ut)}var kt;if(iu)t:{switch(e){case"compositionstart":var Jt="onCompositionStart";break t;case"compositionend":Jt="onCompositionEnd";break t;case"compositionupdate":Jt="onCompositionUpdate";break t}Jt=void 0}else Lr?ip(e,a)&&(Jt="onCompositionEnd"):e==="keydown"&&a.keyCode===229&&(Jt="onCompositionStart");Jt&&(tp&&a.locale!=="ko"&&(Lr||Jt!=="onCompositionStart"?Jt==="onCompositionEnd"&&Lr&&(kt=Zd()):(ma=ut,Jc="value"in ma?ma.value:ma.textContent,Lr=!0)),he=Xl($,Jt),0<he.length&&(Jt=new Jd(Jt,e,null,a,ut),vt.push({event:Jt,listeners:he}),kt?Jt.data=kt:(kt=ap(a),kt!==null&&(Jt.data=kt)))),(kt=K0?Q0(e,a):J0(e,a))&&(Jt=Xl($,"onBeforeInput"),0<Jt.length&&(he=new Jd("onBeforeInput","beforeinput",null,a,ut),vt.push({event:he,listeners:Jt}),he.data=kt)),Vx(vt,e,$,a,ut)}Hg(vt,n)})}function _o(e,n,a){return{instance:e,listener:n,currentTarget:a}}function Xl(e,n){for(var a=n+"Capture",o=[];e!==null;){var u=e,h=u.stateNode;if(u=u.tag,u!==5&&u!==26&&u!==27||h===null||(u=Os(e,a),u!=null&&o.unshift(_o(e,u,h)),u=Os(e,n),u!=null&&o.push(_o(e,u,h))),e.tag===3)return o;e=e.return}return[]}function is(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5&&e.tag!==27);return e||null}function Vg(e,n,a,o,u){for(var h=n._reactName,M=[];a!==null&&a!==o;){var T=a,z=T.alternate,$=T.stateNode;if(T=T.tag,z!==null&&z===o)break;T!==5&&T!==26&&T!==27||$===null||(z=$,u?($=Os(a,h),$!=null&&M.unshift(_o(a,$,z))):u||($=Os(a,h),$!=null&&M.push(_o(a,$,z)))),a=a.return}M.length!==0&&e.push({event:n,listeners:M})}var Wx=/\r\n?/g,qx=/\u0000|\uFFFD/g;function kg(e){return(typeof e=="string"?e:""+e).replace(Wx,`
`).replace(qx,"")}function jg(e,n){return n=kg(n),kg(e)===n}function Wl(){}function Oe(e,n,a,o,u,h){switch(a){case"children":typeof o=="string"?n==="body"||n==="textarea"&&o===""||vi(e,o):(typeof o=="number"||typeof o=="bigint")&&n!=="body"&&vi(e,""+o);break;case"className":Ct(e,"class",o);break;case"tabIndex":Ct(e,"tabindex",o);break;case"dir":case"role":case"viewBox":case"width":case"height":Ct(e,a,o);break;case"style":Wd(e,o,h);break;case"data":if(n!=="object"){Ct(e,"data",o);break}case"src":case"href":if(o===""&&(n!=="a"||a!=="href")){e.removeAttribute(a);break}if(o==null||typeof o=="function"||typeof o=="symbol"||typeof o=="boolean"){e.removeAttribute(a);break}o=tl(""+o),e.setAttribute(a,o);break;case"action":case"formAction":if(typeof o=="function"){e.setAttribute(a,"javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')");break}else typeof h=="function"&&(a==="formAction"?(n!=="input"&&Oe(e,n,"name",u.name,u,null),Oe(e,n,"formEncType",u.formEncType,u,null),Oe(e,n,"formMethod",u.formMethod,u,null),Oe(e,n,"formTarget",u.formTarget,u,null)):(Oe(e,n,"encType",u.encType,u,null),Oe(e,n,"method",u.method,u,null),Oe(e,n,"target",u.target,u,null)));if(o==null||typeof o=="symbol"||typeof o=="boolean"){e.removeAttribute(a);break}o=tl(""+o),e.setAttribute(a,o);break;case"onClick":o!=null&&(e.onclick=Wl);break;case"onScroll":o!=null&&me("scroll",e);break;case"onScrollEnd":o!=null&&me("scrollend",e);break;case"dangerouslySetInnerHTML":if(o!=null){if(typeof o!="object"||!("__html"in o))throw Error(r(61));if(a=o.__html,a!=null){if(u.children!=null)throw Error(r(60));e.innerHTML=a}}break;case"multiple":e.multiple=o&&typeof o!="function"&&typeof o!="symbol";break;case"muted":e.muted=o&&typeof o!="function"&&typeof o!="symbol";break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"defaultValue":case"defaultChecked":case"innerHTML":case"ref":break;case"autoFocus":break;case"xlinkHref":if(o==null||typeof o=="function"||typeof o=="boolean"||typeof o=="symbol"){e.removeAttribute("xlink:href");break}a=tl(""+o),e.setAttributeNS("http://www.w3.org/1999/xlink","xlink:href",a);break;case"contentEditable":case"spellCheck":case"draggable":case"value":case"autoReverse":case"externalResourcesRequired":case"focusable":case"preserveAlpha":o!=null&&typeof o!="function"&&typeof o!="symbol"?e.setAttribute(a,""+o):e.removeAttribute(a);break;case"inert":case"allowFullScreen":case"async":case"autoPlay":case"controls":case"default":case"defer":case"disabled":case"disablePictureInPicture":case"disableRemotePlayback":case"formNoValidate":case"hidden":case"loop":case"noModule":case"noValidate":case"open":case"playsInline":case"readOnly":case"required":case"reversed":case"scoped":case"seamless":case"itemScope":o&&typeof o!="function"&&typeof o!="symbol"?e.setAttribute(a,""):e.removeAttribute(a);break;case"capture":case"download":o===!0?e.setAttribute(a,""):o!==!1&&o!=null&&typeof o!="function"&&typeof o!="symbol"?e.setAttribute(a,o):e.removeAttribute(a);break;case"cols":case"rows":case"size":case"span":o!=null&&typeof o!="function"&&typeof o!="symbol"&&!isNaN(o)&&1<=o?e.setAttribute(a,o):e.removeAttribute(a);break;case"rowSpan":case"start":o==null||typeof o=="function"||typeof o=="symbol"||isNaN(o)?e.removeAttribute(a):e.setAttribute(a,o);break;case"popover":me("beforetoggle",e),me("toggle",e),bt(e,"popover",o);break;case"xlinkActuate":Dt(e,"http://www.w3.org/1999/xlink","xlink:actuate",o);break;case"xlinkArcrole":Dt(e,"http://www.w3.org/1999/xlink","xlink:arcrole",o);break;case"xlinkRole":Dt(e,"http://www.w3.org/1999/xlink","xlink:role",o);break;case"xlinkShow":Dt(e,"http://www.w3.org/1999/xlink","xlink:show",o);break;case"xlinkTitle":Dt(e,"http://www.w3.org/1999/xlink","xlink:title",o);break;case"xlinkType":Dt(e,"http://www.w3.org/1999/xlink","xlink:type",o);break;case"xmlBase":Dt(e,"http://www.w3.org/XML/1998/namespace","xml:base",o);break;case"xmlLang":Dt(e,"http://www.w3.org/XML/1998/namespace","xml:lang",o);break;case"xmlSpace":Dt(e,"http://www.w3.org/XML/1998/namespace","xml:space",o);break;case"is":bt(e,"is",o);break;case"innerText":case"textContent":break;default:(!(2<a.length)||a[0]!=="o"&&a[0]!=="O"||a[1]!=="n"&&a[1]!=="N")&&(a=E0.get(a)||a,bt(e,a,o))}}function Lf(e,n,a,o,u,h){switch(a){case"style":Wd(e,o,h);break;case"dangerouslySetInnerHTML":if(o!=null){if(typeof o!="object"||!("__html"in o))throw Error(r(61));if(a=o.__html,a!=null){if(u.children!=null)throw Error(r(60));e.innerHTML=a}}break;case"children":typeof o=="string"?vi(e,o):(typeof o=="number"||typeof o=="bigint")&&vi(e,""+o);break;case"onScroll":o!=null&&me("scroll",e);break;case"onScrollEnd":o!=null&&me("scrollend",e);break;case"onClick":o!=null&&(e.onclick=Wl);break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"innerHTML":case"ref":break;case"innerText":case"textContent":break;default:if(!$o.hasOwnProperty(a))t:{if(a[0]==="o"&&a[1]==="n"&&(u=a.endsWith("Capture"),n=a.slice(2,u?a.length-7:void 0),h=e[xn]||null,h=h!=null?h[a]:null,typeof h=="function"&&e.removeEventListener(n,h,u),typeof o=="function")){typeof h!="function"&&h!==null&&(a in e?e[a]=null:e.hasAttribute(a)&&e.removeAttribute(a)),e.addEventListener(n,o,u);break t}a in e?e[a]=o:o===!0?e.setAttribute(a,""):bt(e,a,o)}}}function En(e,n,a){switch(n){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"img":me("error",e),me("load",e);var o=!1,u=!1,h;for(h in a)if(a.hasOwnProperty(h)){var M=a[h];if(M!=null)switch(h){case"src":o=!0;break;case"srcSet":u=!0;break;case"children":case"dangerouslySetInnerHTML":throw Error(r(137,n));default:Oe(e,n,h,M,a,null)}}u&&Oe(e,n,"srcSet",a.srcSet,a,null),o&&Oe(e,n,"src",a.src,a,null);return;case"input":me("invalid",e);var T=h=M=u=null,z=null,$=null;for(o in a)if(a.hasOwnProperty(o)){var ut=a[o];if(ut!=null)switch(o){case"name":u=ut;break;case"type":M=ut;break;case"checked":z=ut;break;case"defaultChecked":$=ut;break;case"value":h=ut;break;case"defaultValue":T=ut;break;case"children":case"dangerouslySetInnerHTML":if(ut!=null)throw Error(r(137,n));break;default:Oe(e,n,o,ut,a,null)}}Ie(e,h,T,z,$,M,u,!1),Ye(e);return;case"select":me("invalid",e),o=M=h=null;for(u in a)if(a.hasOwnProperty(u)&&(T=a[u],T!=null))switch(u){case"value":h=T;break;case"defaultValue":M=T;break;case"multiple":o=T;default:Oe(e,n,u,T,a,null)}n=h,a=M,e.multiple=!!o,n!=null?ln(e,!!o,n,!1):a!=null&&ln(e,!!o,a,!0);return;case"textarea":me("invalid",e),h=u=o=null;for(M in a)if(a.hasOwnProperty(M)&&(T=a[M],T!=null))switch(M){case"value":o=T;break;case"defaultValue":u=T;break;case"children":h=T;break;case"dangerouslySetInnerHTML":if(T!=null)throw Error(r(91));break;default:Oe(e,n,M,T,a,null)}yn(e,o,u,h),Ye(e);return;case"option":for(z in a)if(a.hasOwnProperty(z)&&(o=a[z],o!=null))switch(z){case"selected":e.selected=o&&typeof o!="function"&&typeof o!="symbol";break;default:Oe(e,n,z,o,a,null)}return;case"dialog":me("beforetoggle",e),me("toggle",e),me("cancel",e),me("close",e);break;case"iframe":case"object":me("load",e);break;case"video":case"audio":for(o=0;o<go.length;o++)me(go[o],e);break;case"image":me("error",e),me("load",e);break;case"details":me("toggle",e);break;case"embed":case"source":case"link":me("error",e),me("load",e);case"area":case"base":case"br":case"col":case"hr":case"keygen":case"meta":case"param":case"track":case"wbr":case"menuitem":for($ in a)if(a.hasOwnProperty($)&&(o=a[$],o!=null))switch($){case"children":case"dangerouslySetInnerHTML":throw Error(r(137,n));default:Oe(e,n,$,o,a,null)}return;default:if(qc(n)){for(ut in a)a.hasOwnProperty(ut)&&(o=a[ut],o!==void 0&&Lf(e,n,ut,o,a,void 0));return}}for(T in a)a.hasOwnProperty(T)&&(o=a[T],o!=null&&Oe(e,n,T,o,a,null))}function Yx(e,n,a,o){switch(n){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"input":var u=null,h=null,M=null,T=null,z=null,$=null,ut=null;for(at in a){var vt=a[at];if(a.hasOwnProperty(at)&&vt!=null)switch(at){case"checked":break;case"value":break;case"defaultValue":z=vt;default:o.hasOwnProperty(at)||Oe(e,n,at,null,o,vt)}}for(var it in o){var at=o[it];if(vt=a[it],o.hasOwnProperty(it)&&(at!=null||vt!=null))switch(it){case"type":h=at;break;case"name":u=at;break;case"checked":$=at;break;case"defaultChecked":ut=at;break;case"value":M=at;break;case"defaultValue":T=at;break;case"children":case"dangerouslySetInnerHTML":if(at!=null)throw Error(r(137,n));break;default:at!==vt&&Oe(e,n,it,at,o,vt)}}zi(e,M,T,z,$,ut,h,u);return;case"select":at=M=T=it=null;for(h in a)if(z=a[h],a.hasOwnProperty(h)&&z!=null)switch(h){case"value":break;case"multiple":at=z;default:o.hasOwnProperty(h)||Oe(e,n,h,null,o,z)}for(u in o)if(h=o[u],z=a[u],o.hasOwnProperty(u)&&(h!=null||z!=null))switch(u){case"value":it=h;break;case"defaultValue":T=h;break;case"multiple":M=h;default:h!==z&&Oe(e,n,u,h,o,z)}n=T,a=M,o=at,it!=null?ln(e,!!a,it,!1):!!o!=!!a&&(n!=null?ln(e,!!a,n,!0):ln(e,!!a,a?[]:"",!1));return;case"textarea":at=it=null;for(T in a)if(u=a[T],a.hasOwnProperty(T)&&u!=null&&!o.hasOwnProperty(T))switch(T){case"value":break;case"children":break;default:Oe(e,n,T,null,o,u)}for(M in o)if(u=o[M],h=a[M],o.hasOwnProperty(M)&&(u!=null||h!=null))switch(M){case"value":it=u;break;case"defaultValue":at=u;break;case"children":break;case"dangerouslySetInnerHTML":if(u!=null)throw Error(r(91));break;default:u!==h&&Oe(e,n,M,u,o,h)}pn(e,it,at);return;case"option":for(var ee in a)if(it=a[ee],a.hasOwnProperty(ee)&&it!=null&&!o.hasOwnProperty(ee))switch(ee){case"selected":e.selected=!1;break;default:Oe(e,n,ee,null,o,it)}for(z in o)if(it=o[z],at=a[z],o.hasOwnProperty(z)&&it!==at&&(it!=null||at!=null))switch(z){case"selected":e.selected=it&&typeof it!="function"&&typeof it!="symbol";break;default:Oe(e,n,z,it,o,at)}return;case"img":case"link":case"area":case"base":case"br":case"col":case"embed":case"hr":case"keygen":case"meta":case"param":case"source":case"track":case"wbr":case"menuitem":for(var Zt in a)it=a[Zt],a.hasOwnProperty(Zt)&&it!=null&&!o.hasOwnProperty(Zt)&&Oe(e,n,Zt,null,o,it);for($ in o)if(it=o[$],at=a[$],o.hasOwnProperty($)&&it!==at&&(it!=null||at!=null))switch($){case"children":case"dangerouslySetInnerHTML":if(it!=null)throw Error(r(137,n));break;default:Oe(e,n,$,it,o,at)}return;default:if(qc(n)){for(var Pe in a)it=a[Pe],a.hasOwnProperty(Pe)&&it!==void 0&&!o.hasOwnProperty(Pe)&&Lf(e,n,Pe,void 0,o,it);for(ut in o)it=o[ut],at=a[ut],!o.hasOwnProperty(ut)||it===at||it===void 0&&at===void 0||Lf(e,n,ut,it,o,at);return}}for(var W in a)it=a[W],a.hasOwnProperty(W)&&it!=null&&!o.hasOwnProperty(W)&&Oe(e,n,W,null,o,it);for(vt in o)it=o[vt],at=a[vt],!o.hasOwnProperty(vt)||it===at||it==null&&at==null||Oe(e,n,vt,it,o,at)}var Nf=null,Of=null;function ql(e){return e.nodeType===9?e:e.ownerDocument}function Xg(e){switch(e){case"http://www.w3.org/2000/svg":return 1;case"http://www.w3.org/1998/Math/MathML":return 2;default:return 0}}function Wg(e,n){if(e===0)switch(n){case"svg":return 1;case"math":return 2;default:return 0}return e===1&&n==="foreignObject"?0:e}function Pf(e,n){return e==="textarea"||e==="noscript"||typeof n.children=="string"||typeof n.children=="number"||typeof n.children=="bigint"||typeof n.dangerouslySetInnerHTML=="object"&&n.dangerouslySetInnerHTML!==null&&n.dangerouslySetInnerHTML.__html!=null}var zf=null;function Zx(){var e=window.event;return e&&e.type==="popstate"?e===zf?!1:(zf=e,!0):(zf=null,!1)}var qg=typeof setTimeout=="function"?setTimeout:void 0,Kx=typeof clearTimeout=="function"?clearTimeout:void 0,Yg=typeof Promise=="function"?Promise:void 0,Qx=typeof queueMicrotask=="function"?queueMicrotask:typeof Yg<"u"?function(e){return Yg.resolve(null).then(e).catch(Jx)}:qg;function Jx(e){setTimeout(function(){throw e})}function Ua(e){return e==="head"}function Zg(e,n){var a=n,o=0,u=0;do{var h=a.nextSibling;if(e.removeChild(a),h&&h.nodeType===8)if(a=h.data,a==="/$"){if(0<o&&8>o){a=o;var M=e.ownerDocument;if(a&1&&vo(M.documentElement),a&2&&vo(M.body),a&4)for(a=M.head,vo(a),M=a.firstChild;M;){var T=M.nextSibling,z=M.nodeName;M[fa]||z==="SCRIPT"||z==="STYLE"||z==="LINK"&&M.rel.toLowerCase()==="stylesheet"||a.removeChild(M),M=T}}if(u===0){e.removeChild(h),Ao(n);return}u--}else a==="$"||a==="$?"||a==="$!"?u++:o=a.charCodeAt(0)-48;else o=0;a=h}while(a);Ao(n)}function Bf(e){var n=e.firstChild;for(n&&n.nodeType===10&&(n=n.nextSibling);n;){var a=n;switch(n=n.nextSibling,a.nodeName){case"HTML":case"HEAD":case"BODY":Bf(a),ha(a);continue;case"SCRIPT":case"STYLE":continue;case"LINK":if(a.rel.toLowerCase()==="stylesheet")continue}e.removeChild(a)}}function $x(e,n,a,o){for(;e.nodeType===1;){var u=a;if(e.nodeName.toLowerCase()!==n.toLowerCase()){if(!o&&(e.nodeName!=="INPUT"||e.type!=="hidden"))break}else if(o){if(!e[fa])switch(n){case"meta":if(!e.hasAttribute("itemprop"))break;return e;case"link":if(h=e.getAttribute("rel"),h==="stylesheet"&&e.hasAttribute("data-precedence"))break;if(h!==u.rel||e.getAttribute("href")!==(u.href==null||u.href===""?null:u.href)||e.getAttribute("crossorigin")!==(u.crossOrigin==null?null:u.crossOrigin)||e.getAttribute("title")!==(u.title==null?null:u.title))break;return e;case"style":if(e.hasAttribute("data-precedence"))break;return e;case"script":if(h=e.getAttribute("src"),(h!==(u.src==null?null:u.src)||e.getAttribute("type")!==(u.type==null?null:u.type)||e.getAttribute("crossorigin")!==(u.crossOrigin==null?null:u.crossOrigin))&&h&&e.hasAttribute("async")&&!e.hasAttribute("itemprop"))break;return e;default:return e}}else if(n==="input"&&e.type==="hidden"){var h=u.name==null?null:""+u.name;if(u.type==="hidden"&&e.getAttribute("name")===h)return e}else return e;if(e=fi(e.nextSibling),e===null)break}return null}function ty(e,n,a){if(n==="")return null;for(;e.nodeType!==3;)if((e.nodeType!==1||e.nodeName!=="INPUT"||e.type!=="hidden")&&!a||(e=fi(e.nextSibling),e===null))return null;return e}function If(e){return e.data==="$!"||e.data==="$?"&&e.ownerDocument.readyState==="complete"}function ey(e,n){var a=e.ownerDocument;if(e.data!=="$?"||a.readyState==="complete")n();else{var o=function(){n(),a.removeEventListener("DOMContentLoaded",o)};a.addEventListener("DOMContentLoaded",o),e._reactRetry=o}}function fi(e){for(;e!=null;e=e.nextSibling){var n=e.nodeType;if(n===1||n===3)break;if(n===8){if(n=e.data,n==="$"||n==="$!"||n==="$?"||n==="F!"||n==="F")break;if(n==="/$")return null}}return e}var Ff=null;function Kg(e){e=e.previousSibling;for(var n=0;e;){if(e.nodeType===8){var a=e.data;if(a==="$"||a==="$!"||a==="$?"){if(n===0)return e;n--}else a==="/$"&&n++}e=e.previousSibling}return null}function Qg(e,n,a){switch(n=ql(a),e){case"html":if(e=n.documentElement,!e)throw Error(r(452));return e;case"head":if(e=n.head,!e)throw Error(r(453));return e;case"body":if(e=n.body,!e)throw Error(r(454));return e;default:throw Error(r(451))}}function vo(e){for(var n=e.attributes;n.length;)e.removeAttributeNode(n[0]);ha(e)}var ri=new Map,Jg=new Set;function Yl(e){return typeof e.getRootNode=="function"?e.getRootNode():e.nodeType===9?e:e.ownerDocument}var Qi=K.d;K.d={f:ny,r:iy,D:ay,C:ry,L:sy,m:oy,X:cy,S:ly,M:uy};function ny(){var e=Qi.f(),n=Fl();return e||n}function iy(e){var n=Oi(e);n!==null&&n.tag===5&&n.type==="form"?vm(n):Qi.r(e)}var as=typeof document>"u"?null:document;function $g(e,n,a){var o=as;if(o&&typeof n=="string"&&n){var u=Ve(n);u='link[rel="'+e+'"][href="'+u+'"]',typeof a=="string"&&(u+='[crossorigin="'+a+'"]'),Jg.has(u)||(Jg.add(u),e={rel:e,crossOrigin:a,href:n},o.querySelector(u)===null&&(n=o.createElement("link"),En(n,"link",e),nn(n),o.head.appendChild(n)))}}function ay(e){Qi.D(e),$g("dns-prefetch",e,null)}function ry(e,n){Qi.C(e,n),$g("preconnect",e,n)}function sy(e,n,a){Qi.L(e,n,a);var o=as;if(o&&e&&n){var u='link[rel="preload"][as="'+Ve(n)+'"]';n==="image"&&a&&a.imageSrcSet?(u+='[imagesrcset="'+Ve(a.imageSrcSet)+'"]',typeof a.imageSizes=="string"&&(u+='[imagesizes="'+Ve(a.imageSizes)+'"]')):u+='[href="'+Ve(e)+'"]';var h=u;switch(n){case"style":h=rs(e);break;case"script":h=ss(e)}ri.has(h)||(e=g({rel:"preload",href:n==="image"&&a&&a.imageSrcSet?void 0:e,as:n},a),ri.set(h,e),o.querySelector(u)!==null||n==="style"&&o.querySelector(xo(h))||n==="script"&&o.querySelector(yo(h))||(n=o.createElement("link"),En(n,"link",e),nn(n),o.head.appendChild(n)))}}function oy(e,n){Qi.m(e,n);var a=as;if(a&&e){var o=n&&typeof n.as=="string"?n.as:"script",u='link[rel="modulepreload"][as="'+Ve(o)+'"][href="'+Ve(e)+'"]',h=u;switch(o){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":h=ss(e)}if(!ri.has(h)&&(e=g({rel:"modulepreload",href:e},n),ri.set(h,e),a.querySelector(u)===null)){switch(o){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":if(a.querySelector(yo(h)))return}o=a.createElement("link"),En(o,"link",e),nn(o),a.head.appendChild(o)}}}function ly(e,n,a){Qi.S(e,n,a);var o=as;if(o&&e){var u=da(o).hoistableStyles,h=rs(e);n=n||"default";var M=u.get(h);if(!M){var T={loading:0,preload:null};if(M=o.querySelector(xo(h)))T.loading=5;else{e=g({rel:"stylesheet",href:e,"data-precedence":n},a),(a=ri.get(h))&&Hf(e,a);var z=M=o.createElement("link");nn(z),En(z,"link",e),z._p=new Promise(function($,ut){z.onload=$,z.onerror=ut}),z.addEventListener("load",function(){T.loading|=1}),z.addEventListener("error",function(){T.loading|=2}),T.loading|=4,Zl(M,n,o)}M={type:"stylesheet",instance:M,count:1,state:T},u.set(h,M)}}}function cy(e,n){Qi.X(e,n);var a=as;if(a&&e){var o=da(a).hoistableScripts,u=ss(e),h=o.get(u);h||(h=a.querySelector(yo(u)),h||(e=g({src:e,async:!0},n),(n=ri.get(u))&&Gf(e,n),h=a.createElement("script"),nn(h),En(h,"link",e),a.head.appendChild(h)),h={type:"script",instance:h,count:1,state:null},o.set(u,h))}}function uy(e,n){Qi.M(e,n);var a=as;if(a&&e){var o=da(a).hoistableScripts,u=ss(e),h=o.get(u);h||(h=a.querySelector(yo(u)),h||(e=g({src:e,async:!0,type:"module"},n),(n=ri.get(u))&&Gf(e,n),h=a.createElement("script"),nn(h),En(h,"link",e),a.head.appendChild(h)),h={type:"script",instance:h,count:1,state:null},o.set(u,h))}}function t_(e,n,a,o){var u=(u=St.current)?Yl(u):null;if(!u)throw Error(r(446));switch(e){case"meta":case"title":return null;case"style":return typeof a.precedence=="string"&&typeof a.href=="string"?(n=rs(a.href),a=da(u).hoistableStyles,o=a.get(n),o||(o={type:"style",instance:null,count:0,state:null},a.set(n,o)),o):{type:"void",instance:null,count:0,state:null};case"link":if(a.rel==="stylesheet"&&typeof a.href=="string"&&typeof a.precedence=="string"){e=rs(a.href);var h=da(u).hoistableStyles,M=h.get(e);if(M||(u=u.ownerDocument||u,M={type:"stylesheet",instance:null,count:0,state:{loading:0,preload:null}},h.set(e,M),(h=u.querySelector(xo(e)))&&!h._p&&(M.instance=h,M.state.loading=5),ri.has(e)||(a={rel:"preload",as:"style",href:a.href,crossOrigin:a.crossOrigin,integrity:a.integrity,media:a.media,hrefLang:a.hrefLang,referrerPolicy:a.referrerPolicy},ri.set(e,a),h||fy(u,e,a,M.state))),n&&o===null)throw Error(r(528,""));return M}if(n&&o!==null)throw Error(r(529,""));return null;case"script":return n=a.async,a=a.src,typeof a=="string"&&n&&typeof n!="function"&&typeof n!="symbol"?(n=ss(a),a=da(u).hoistableScripts,o=a.get(n),o||(o={type:"script",instance:null,count:0,state:null},a.set(n,o)),o):{type:"void",instance:null,count:0,state:null};default:throw Error(r(444,e))}}function rs(e){return'href="'+Ve(e)+'"'}function xo(e){return'link[rel="stylesheet"]['+e+"]"}function e_(e){return g({},e,{"data-precedence":e.precedence,precedence:null})}function fy(e,n,a,o){e.querySelector('link[rel="preload"][as="style"]['+n+"]")?o.loading=1:(n=e.createElement("link"),o.preload=n,n.addEventListener("load",function(){return o.loading|=1}),n.addEventListener("error",function(){return o.loading|=2}),En(n,"link",a),nn(n),e.head.appendChild(n))}function ss(e){return'[src="'+Ve(e)+'"]'}function yo(e){return"script[async]"+e}function n_(e,n,a){if(n.count++,n.instance===null)switch(n.type){case"style":var o=e.querySelector('style[data-href~="'+Ve(a.href)+'"]');if(o)return n.instance=o,nn(o),o;var u=g({},a,{"data-href":a.href,"data-precedence":a.precedence,href:null,precedence:null});return o=(e.ownerDocument||e).createElement("style"),nn(o),En(o,"style",u),Zl(o,a.precedence,e),n.instance=o;case"stylesheet":u=rs(a.href);var h=e.querySelector(xo(u));if(h)return n.state.loading|=4,n.instance=h,nn(h),h;o=e_(a),(u=ri.get(u))&&Hf(o,u),h=(e.ownerDocument||e).createElement("link"),nn(h);var M=h;return M._p=new Promise(function(T,z){M.onload=T,M.onerror=z}),En(h,"link",o),n.state.loading|=4,Zl(h,a.precedence,e),n.instance=h;case"script":return h=ss(a.src),(u=e.querySelector(yo(h)))?(n.instance=u,nn(u),u):(o=a,(u=ri.get(h))&&(o=g({},a),Gf(o,u)),e=e.ownerDocument||e,u=e.createElement("script"),nn(u),En(u,"link",o),e.head.appendChild(u),n.instance=u);case"void":return null;default:throw Error(r(443,n.type))}else n.type==="stylesheet"&&(n.state.loading&4)===0&&(o=n.instance,n.state.loading|=4,Zl(o,a.precedence,e));return n.instance}function Zl(e,n,a){for(var o=a.querySelectorAll('link[rel="stylesheet"][data-precedence],style[data-precedence]'),u=o.length?o[o.length-1]:null,h=u,M=0;M<o.length;M++){var T=o[M];if(T.dataset.precedence===n)h=T;else if(h!==u)break}h?h.parentNode.insertBefore(e,h.nextSibling):(n=a.nodeType===9?a.head:a,n.insertBefore(e,n.firstChild))}function Hf(e,n){e.crossOrigin==null&&(e.crossOrigin=n.crossOrigin),e.referrerPolicy==null&&(e.referrerPolicy=n.referrerPolicy),e.title==null&&(e.title=n.title)}function Gf(e,n){e.crossOrigin==null&&(e.crossOrigin=n.crossOrigin),e.referrerPolicy==null&&(e.referrerPolicy=n.referrerPolicy),e.integrity==null&&(e.integrity=n.integrity)}var Kl=null;function i_(e,n,a){if(Kl===null){var o=new Map,u=Kl=new Map;u.set(a,o)}else u=Kl,o=u.get(a),o||(o=new Map,u.set(a,o));if(o.has(e))return o;for(o.set(e,null),a=a.getElementsByTagName(e),u=0;u<a.length;u++){var h=a[u];if(!(h[fa]||h[on]||e==="link"&&h.getAttribute("rel")==="stylesheet")&&h.namespaceURI!=="http://www.w3.org/2000/svg"){var M=h.getAttribute(n)||"";M=e+M;var T=o.get(M);T?T.push(h):o.set(M,[h])}}return o}function a_(e,n,a){e=e.ownerDocument||e,e.head.insertBefore(a,n==="title"?e.querySelector("head > title"):null)}function hy(e,n,a){if(a===1||n.itemProp!=null)return!1;switch(e){case"meta":case"title":return!0;case"style":if(typeof n.precedence!="string"||typeof n.href!="string"||n.href==="")break;return!0;case"link":if(typeof n.rel!="string"||typeof n.href!="string"||n.href===""||n.onLoad||n.onError)break;switch(n.rel){case"stylesheet":return e=n.disabled,typeof n.precedence=="string"&&e==null;default:return!0}case"script":if(n.async&&typeof n.async!="function"&&typeof n.async!="symbol"&&!n.onLoad&&!n.onError&&n.src&&typeof n.src=="string")return!0}return!1}function r_(e){return!(e.type==="stylesheet"&&(e.state.loading&3)===0)}var So=null;function dy(){}function py(e,n,a){if(So===null)throw Error(r(475));var o=So;if(n.type==="stylesheet"&&(typeof a.media!="string"||matchMedia(a.media).matches!==!1)&&(n.state.loading&4)===0){if(n.instance===null){var u=rs(a.href),h=e.querySelector(xo(u));if(h){e=h._p,e!==null&&typeof e=="object"&&typeof e.then=="function"&&(o.count++,o=Ql.bind(o),e.then(o,o)),n.state.loading|=4,n.instance=h,nn(h);return}h=e.ownerDocument||e,a=e_(a),(u=ri.get(u))&&Hf(a,u),h=h.createElement("link"),nn(h);var M=h;M._p=new Promise(function(T,z){M.onload=T,M.onerror=z}),En(h,"link",a),n.instance=h}o.stylesheets===null&&(o.stylesheets=new Map),o.stylesheets.set(n,e),(e=n.state.preload)&&(n.state.loading&3)===0&&(o.count++,n=Ql.bind(o),e.addEventListener("load",n),e.addEventListener("error",n))}}function my(){if(So===null)throw Error(r(475));var e=So;return e.stylesheets&&e.count===0&&Vf(e,e.stylesheets),0<e.count?function(n){var a=setTimeout(function(){if(e.stylesheets&&Vf(e,e.stylesheets),e.unsuspend){var o=e.unsuspend;e.unsuspend=null,o()}},6e4);return e.unsuspend=n,function(){e.unsuspend=null,clearTimeout(a)}}:null}function Ql(){if(this.count--,this.count===0){if(this.stylesheets)Vf(this,this.stylesheets);else if(this.unsuspend){var e=this.unsuspend;this.unsuspend=null,e()}}}var Jl=null;function Vf(e,n){e.stylesheets=null,e.unsuspend!==null&&(e.count++,Jl=new Map,n.forEach(gy,e),Jl=null,Ql.call(e))}function gy(e,n){if(!(n.state.loading&4)){var a=Jl.get(e);if(a)var o=a.get(null);else{a=new Map,Jl.set(e,a);for(var u=e.querySelectorAll("link[data-precedence],style[data-precedence]"),h=0;h<u.length;h++){var M=u[h];(M.nodeName==="LINK"||M.getAttribute("media")!=="not all")&&(a.set(M.dataset.precedence,M),o=M)}o&&a.set(null,o)}u=n.instance,M=u.getAttribute("data-precedence"),h=a.get(M)||o,h===o&&a.set(null,u),a.set(M,u),this.count++,o=Ql.bind(this),u.addEventListener("load",o),u.addEventListener("error",o),h?h.parentNode.insertBefore(u,h.nextSibling):(e=e.nodeType===9?e.head:e,e.insertBefore(u,e.firstChild)),n.state.loading|=4}}var Mo={$$typeof:D,Provider:null,Consumer:null,_currentValue:Y,_currentValue2:Y,_threadCount:0};function _y(e,n,a,o,u,h,M,T){this.tag=1,this.containerInfo=e,this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.next=this.pendingContext=this.context=this.cancelPendingCommit=null,this.callbackPriority=0,this.expirationTimes=ct(-1),this.entangledLanes=this.shellSuspendCounter=this.errorRecoveryDisabledLanes=this.expiredLanes=this.warmLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=ct(0),this.hiddenUpdates=ct(null),this.identifierPrefix=o,this.onUncaughtError=u,this.onCaughtError=h,this.onRecoverableError=M,this.pooledCache=null,this.pooledCacheLanes=0,this.formState=T,this.incompleteTransitions=new Map}function s_(e,n,a,o,u,h,M,T,z,$,ut,vt){return e=new _y(e,n,a,M,T,z,$,vt),n=1,h===!0&&(n|=24),h=Xn(3,null,null,n),e.current=h,h.stateNode=e,n=Mu(),n.refCount++,e.pooledCache=n,n.refCount++,h.memoizedState={element:o,isDehydrated:a,cache:n},Au(h),e}function o_(e){return e?(e=Br,e):Br}function l_(e,n,a,o,u,h){u=o_(u),o.context===null?o.context=u:o.pendingContext=u,o=va(n),o.payload={element:a},h=h===void 0?null:h,h!==null&&(o.callback=h),a=xa(e,o,n),a!==null&&(Kn(a,e,n),Qs(a,e,n))}function c_(e,n){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var a=e.retryLane;e.retryLane=a!==0&&a<n?a:n}}function kf(e,n){c_(e,n),(e=e.alternate)&&c_(e,n)}function u_(e){if(e.tag===13){var n=zr(e,67108864);n!==null&&Kn(n,e,67108864),kf(e,67108864)}}var $l=!0;function vy(e,n,a,o){var u=I.T;I.T=null;var h=K.p;try{K.p=2,jf(e,n,a,o)}finally{K.p=h,I.T=u}}function xy(e,n,a,o){var u=I.T;I.T=null;var h=K.p;try{K.p=8,jf(e,n,a,o)}finally{K.p=h,I.T=u}}function jf(e,n,a,o){if($l){var u=Xf(o);if(u===null)Uf(e,n,o,tc,a),h_(e,o);else if(Sy(u,e,n,a,o))o.stopPropagation();else if(h_(e,o),n&4&&-1<yy.indexOf(e)){for(;u!==null;){var h=Oi(u);if(h!==null)switch(h.tag){case 3:if(h=h.stateNode,h.current.memoizedState.isDehydrated){var M=zt(h.pendingLanes);if(M!==0){var T=h;for(T.pendingLanes|=2,T.entangledLanes|=2;M;){var z=1<<31-Gt(M);T.entanglements[1]|=z,M&=~z}Ei(h),(Ce&6)===0&&(Bl=ie()+500,mo(0))}}break;case 13:T=zr(h,2),T!==null&&Kn(T,h,2),Fl(),kf(h,2)}if(h=Xf(o),h===null&&Uf(e,n,o,tc,a),h===u)break;u=h}u!==null&&o.stopPropagation()}else Uf(e,n,o,null,a)}}function Xf(e){return e=Zc(e),Wf(e)}var tc=null;function Wf(e){if(tc=null,e=Ni(e),e!==null){var n=c(e);if(n===null)e=null;else{var a=n.tag;if(a===13){if(e=f(n),e!==null)return e;e=null}else if(a===3){if(n.stateNode.current.memoizedState.isDehydrated)return n.tag===3?n.stateNode.containerInfo:null;e=null}else n!==e&&(e=null)}}return tc=e,null}function f_(e){switch(e){case"beforetoggle":case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"toggle":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 2;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 8;case"message":switch(Xt()){case Ue:return 2;case Vt:return 8;case O:case b:return 32;case nt:return 268435456;default:return 32}default:return 32}}var qf=!1,La=null,Na=null,Oa=null,Eo=new Map,To=new Map,Pa=[],yy="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(" ");function h_(e,n){switch(e){case"focusin":case"focusout":La=null;break;case"dragenter":case"dragleave":Na=null;break;case"mouseover":case"mouseout":Oa=null;break;case"pointerover":case"pointerout":Eo.delete(n.pointerId);break;case"gotpointercapture":case"lostpointercapture":To.delete(n.pointerId)}}function bo(e,n,a,o,u,h){return e===null||e.nativeEvent!==h?(e={blockedOn:n,domEventName:a,eventSystemFlags:o,nativeEvent:h,targetContainers:[u]},n!==null&&(n=Oi(n),n!==null&&u_(n)),e):(e.eventSystemFlags|=o,n=e.targetContainers,u!==null&&n.indexOf(u)===-1&&n.push(u),e)}function Sy(e,n,a,o,u){switch(n){case"focusin":return La=bo(La,e,n,a,o,u),!0;case"dragenter":return Na=bo(Na,e,n,a,o,u),!0;case"mouseover":return Oa=bo(Oa,e,n,a,o,u),!0;case"pointerover":var h=u.pointerId;return Eo.set(h,bo(Eo.get(h)||null,e,n,a,o,u)),!0;case"gotpointercapture":return h=u.pointerId,To.set(h,bo(To.get(h)||null,e,n,a,o,u)),!0}return!1}function d_(e){var n=Ni(e.target);if(n!==null){var a=c(n);if(a!==null){if(n=a.tag,n===13){if(n=f(a),n!==null){e.blockedOn=n,kn(e.priority,function(){if(a.tag===13){var o=Zn();o=Ge(o);var u=zr(a,o);u!==null&&Kn(u,a,o),kf(a,o)}});return}}else if(n===3&&a.stateNode.current.memoizedState.isDehydrated){e.blockedOn=a.tag===3?a.stateNode.containerInfo:null;return}}}e.blockedOn=null}function ec(e){if(e.blockedOn!==null)return!1;for(var n=e.targetContainers;0<n.length;){var a=Xf(e.nativeEvent);if(a===null){a=e.nativeEvent;var o=new a.constructor(a.type,a);Yc=o,a.target.dispatchEvent(o),Yc=null}else return n=Oi(a),n!==null&&u_(n),e.blockedOn=a,!1;n.shift()}return!0}function p_(e,n,a){ec(e)&&a.delete(n)}function My(){qf=!1,La!==null&&ec(La)&&(La=null),Na!==null&&ec(Na)&&(Na=null),Oa!==null&&ec(Oa)&&(Oa=null),Eo.forEach(p_),To.forEach(p_)}function nc(e,n){e.blockedOn===n&&(e.blockedOn=null,qf||(qf=!0,s.unstable_scheduleCallback(s.unstable_NormalPriority,My)))}var ic=null;function m_(e){ic!==e&&(ic=e,s.unstable_scheduleCallback(s.unstable_NormalPriority,function(){ic===e&&(ic=null);for(var n=0;n<e.length;n+=3){var a=e[n],o=e[n+1],u=e[n+2];if(typeof o!="function"){if(Wf(o||a)===null)continue;break}var h=Oi(a);h!==null&&(e.splice(n,3),n-=3,Xu(h,{pending:!0,data:u,method:a.method,action:o},o,u))}}))}function Ao(e){function n(z){return nc(z,e)}La!==null&&nc(La,e),Na!==null&&nc(Na,e),Oa!==null&&nc(Oa,e),Eo.forEach(n),To.forEach(n);for(var a=0;a<Pa.length;a++){var o=Pa[a];o.blockedOn===e&&(o.blockedOn=null)}for(;0<Pa.length&&(a=Pa[0],a.blockedOn===null);)d_(a),a.blockedOn===null&&Pa.shift();if(a=(e.ownerDocument||e).$$reactFormReplay,a!=null)for(o=0;o<a.length;o+=3){var u=a[o],h=a[o+1],M=u[xn]||null;if(typeof h=="function")M||m_(a);else if(M){var T=null;if(h&&h.hasAttribute("formAction")){if(u=h,M=h[xn]||null)T=M.formAction;else if(Wf(u)!==null)continue}else T=M.action;typeof T=="function"?a[o+1]=T:(a.splice(o,3),o-=3),m_(a)}}}function Yf(e){this._internalRoot=e}ac.prototype.render=Yf.prototype.render=function(e){var n=this._internalRoot;if(n===null)throw Error(r(409));var a=n.current,o=Zn();l_(a,o,e,n,null,null)},ac.prototype.unmount=Yf.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var n=e.containerInfo;l_(e.current,2,null,e,null,null),Fl(),n[Pn]=null}};function ac(e){this._internalRoot=e}ac.prototype.unstable_scheduleHydration=function(e){if(e){var n=Ee();e={blockedOn:null,target:e,priority:n};for(var a=0;a<Pa.length&&n!==0&&n<Pa[a].priority;a++);Pa.splice(a,0,e),a===0&&d_(e)}};var g_=t.version;if(g_!=="19.1.0")throw Error(r(527,g_,"19.1.0"));K.findDOMNode=function(e){var n=e._reactInternals;if(n===void 0)throw typeof e.render=="function"?Error(r(188)):(e=Object.keys(e).join(","),Error(r(268,e)));return e=m(n),e=e!==null?p(e):null,e=e===null?null:e.stateNode,e};var Ey={bundleType:0,version:"19.1.0",rendererPackageName:"react-dom",currentDispatcherRef:I,reconcilerVersion:"19.1.0"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var rc=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!rc.isDisabled&&rc.supportsFiber)try{ft=rc.inject(Ey),Pt=rc}catch{}}return wo.createRoot=function(e,n){if(!l(e))throw Error(r(299));var a=!1,o="",u=Lm,h=Nm,M=Om,T=null;return n!=null&&(n.unstable_strictMode===!0&&(a=!0),n.identifierPrefix!==void 0&&(o=n.identifierPrefix),n.onUncaughtError!==void 0&&(u=n.onUncaughtError),n.onCaughtError!==void 0&&(h=n.onCaughtError),n.onRecoverableError!==void 0&&(M=n.onRecoverableError),n.unstable_transitionCallbacks!==void 0&&(T=n.unstable_transitionCallbacks)),n=s_(e,1,!1,null,null,a,o,u,h,M,T,null),e[Pn]=n.current,Df(e),new Yf(n)},wo.hydrateRoot=function(e,n,a){if(!l(e))throw Error(r(299));var o=!1,u="",h=Lm,M=Nm,T=Om,z=null,$=null;return a!=null&&(a.unstable_strictMode===!0&&(o=!0),a.identifierPrefix!==void 0&&(u=a.identifierPrefix),a.onUncaughtError!==void 0&&(h=a.onUncaughtError),a.onCaughtError!==void 0&&(M=a.onCaughtError),a.onRecoverableError!==void 0&&(T=a.onRecoverableError),a.unstable_transitionCallbacks!==void 0&&(z=a.unstable_transitionCallbacks),a.formState!==void 0&&($=a.formState)),n=s_(e,1,!0,n,a??null,o,u,h,M,T,z,$),n.context=o_(null),a=n.current,o=Zn(),o=Ge(o),u=va(o),u.callback=null,xa(a,u,o),a=o,n.current.lanes=a,_t(n,a),Ei(n),e[Pn]=n.current,Df(e),new ac(n)},wo.version="19.1.0",wo}var A_;function Oy(){if(A_)return Qf.exports;A_=1;function s(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(s)}catch(t){console.error(t)}}return s(),Qf.exports=Ny(),Qf.exports}var Py=Oy();const zy=by(Py);var Co={},R_;function By(){if(R_)return Co;R_=1,Object.defineProperty(Co,"__esModule",{value:!0}),Co.parse=f,Co.serialize=p;const s=/^[\u0021-\u003A\u003C\u003E-\u007E]+$/,t=/^[\u0021-\u003A\u003C-\u007E]*$/,i=/^([.]?[a-z0-9]([a-z0-9-]{0,61}[a-z0-9])?)([.][a-z0-9]([a-z0-9-]{0,61}[a-z0-9])?)*$/i,r=/^[\u0020-\u003A\u003D-\u007E]*$/,l=Object.prototype.toString,c=(()=>{const v=function(){};return v.prototype=Object.create(null),v})();function f(v,y){const E=new c,A=v.length;if(A<2)return E;const S=(y==null?void 0:y.decode)||g;let _=0;do{const L=v.indexOf("=",_);if(L===-1)break;const D=v.indexOf(";",_),C=D===-1?A:D;if(L>C){_=v.lastIndexOf(";",L-1)+1;continue}const F=d(v,_,L),H=m(v,L,F),B=v.slice(F,H);if(E[B]===void 0){let k=d(v,L+1,C),U=m(v,C,k);const R=S(v.slice(k,U));E[B]=R}_=C+1}while(_<A);return E}function d(v,y,E){do{const A=v.charCodeAt(y);if(A!==32&&A!==9)return y}while(++y<E);return E}function m(v,y,E){for(;y>E;){const A=v.charCodeAt(--y);if(A!==32&&A!==9)return y+1}return E}function p(v,y,E){const A=(E==null?void 0:E.encode)||encodeURIComponent;if(!s.test(v))throw new TypeError(`argument name is invalid: ${v}`);const S=A(y);if(!t.test(S))throw new TypeError(`argument val is invalid: ${y}`);let _=v+"="+S;if(!E)return _;if(E.maxAge!==void 0){if(!Number.isInteger(E.maxAge))throw new TypeError(`option maxAge is invalid: ${E.maxAge}`);_+="; Max-Age="+E.maxAge}if(E.domain){if(!i.test(E.domain))throw new TypeError(`option domain is invalid: ${E.domain}`);_+="; Domain="+E.domain}if(E.path){if(!r.test(E.path))throw new TypeError(`option path is invalid: ${E.path}`);_+="; Path="+E.path}if(E.expires){if(!x(E.expires)||!Number.isFinite(E.expires.valueOf()))throw new TypeError(`option expires is invalid: ${E.expires}`);_+="; Expires="+E.expires.toUTCString()}if(E.httpOnly&&(_+="; HttpOnly"),E.secure&&(_+="; Secure"),E.partitioned&&(_+="; Partitioned"),E.priority)switch(typeof E.priority=="string"?E.priority.toLowerCase():void 0){case"low":_+="; Priority=Low";break;case"medium":_+="; Priority=Medium";break;case"high":_+="; Priority=High";break;default:throw new TypeError(`option priority is invalid: ${E.priority}`)}if(E.sameSite)switch(typeof E.sameSite=="string"?E.sameSite.toLowerCase():E.sameSite){case!0:case"strict":_+="; SameSite=Strict";break;case"lax":_+="; SameSite=Lax";break;case"none":_+="; SameSite=None";break;default:throw new TypeError(`option sameSite is invalid: ${E.sameSite}`)}return _}function g(v){if(v.indexOf("%")===-1)return v;try{return decodeURIComponent(v)}catch{return v}}function x(v){return l.call(v)==="[object Date]"}return Co}By();var w_="popstate";function Iy(s={}){function t(r,l){let{pathname:c,search:f,hash:d}=r.location;return Oh("",{pathname:c,search:f,hash:d},l.state&&l.state.usr||null,l.state&&l.state.key||"default")}function i(r,l){return typeof l=="string"?l:Bo(l)}return Hy(t,i,null,s)}function qe(s,t){if(s===!1||s===null||typeof s>"u")throw new Error(t)}function wi(s,t){if(!s){typeof console<"u"&&console.warn(t);try{throw new Error(t)}catch{}}}function Fy(){return Math.random().toString(36).substring(2,10)}function C_(s,t){return{usr:s.state,key:s.key,idx:t}}function Oh(s,t,i=null,r){return{pathname:typeof s=="string"?s:s.pathname,search:"",hash:"",...typeof t=="string"?Cs(t):t,state:i,key:t&&t.key||r||Fy()}}function Bo({pathname:s="/",search:t="",hash:i=""}){return t&&t!=="?"&&(s+=t.charAt(0)==="?"?t:"?"+t),i&&i!=="#"&&(s+=i.charAt(0)==="#"?i:"#"+i),s}function Cs(s){let t={};if(s){let i=s.indexOf("#");i>=0&&(t.hash=s.substring(i),s=s.substring(0,i));let r=s.indexOf("?");r>=0&&(t.search=s.substring(r),s=s.substring(0,r)),s&&(t.pathname=s)}return t}function Hy(s,t,i,r={}){let{window:l=document.defaultView,v5Compat:c=!1}=r,f=l.history,d="POP",m=null,p=g();p==null&&(p=0,f.replaceState({...f.state,idx:p},""));function g(){return(f.state||{idx:null}).idx}function x(){d="POP";let S=g(),_=S==null?null:S-p;p=S,m&&m({action:d,location:A.location,delta:_})}function v(S,_){d="PUSH";let L=Oh(A.location,S,_);p=g()+1;let D=C_(L,p),C=A.createHref(L);try{f.pushState(D,"",C)}catch(F){if(F instanceof DOMException&&F.name==="DataCloneError")throw F;l.location.assign(C)}c&&m&&m({action:d,location:A.location,delta:1})}function y(S,_){d="REPLACE";let L=Oh(A.location,S,_);p=g();let D=C_(L,p),C=A.createHref(L);f.replaceState(D,"",C),c&&m&&m({action:d,location:A.location,delta:0})}function E(S){let _=l.location.origin!=="null"?l.location.origin:l.location.href,L=typeof S=="string"?S:Bo(S);return L=L.replace(/ $/,"%20"),qe(_,`No window.location.(origin|href) available to create URL for href: ${L}`),new URL(L,_)}let A={get action(){return d},get location(){return s(l,f)},listen(S){if(m)throw new Error("A history only accepts one active listener");return l.addEventListener(w_,x),m=S,()=>{l.removeEventListener(w_,x),m=null}},createHref(S){return t(l,S)},createURL:E,encodeLocation(S){let _=E(S);return{pathname:_.pathname,search:_.search,hash:_.hash}},push:v,replace:y,go(S){return f.go(S)}};return A}function Dv(s,t,i="/"){return Gy(s,t,i,!1)}function Gy(s,t,i,r){let l=typeof t=="string"?Cs(t):t,c=ca(l.pathname||"/",i);if(c==null)return null;let f=Uv(s);Vy(f);let d=null;for(let m=0;d==null&&m<f.length;++m){let p=$y(c);d=Qy(f[m],p,r)}return d}function Uv(s,t=[],i=[],r=""){let l=(c,f,d)=>{let m={relativePath:d===void 0?c.path||"":d,caseSensitive:c.caseSensitive===!0,childrenIndex:f,route:c};m.relativePath.startsWith("/")&&(qe(m.relativePath.startsWith(r),`Absolute route path "${m.relativePath}" nested under path "${r}" is not valid. An absolute child route path must start with the combined path of all its parent routes.`),m.relativePath=m.relativePath.slice(r.length));let p=oa([r,m.relativePath]),g=i.concat(m);c.children&&c.children.length>0&&(qe(c.index!==!0,`Index routes must not have child routes. Please remove all child routes from route path "${p}".`),Uv(c.children,t,g,p)),!(c.path==null&&!c.index)&&t.push({path:p,score:Zy(p,c.index),routesMeta:g})};return s.forEach((c,f)=>{var d;if(c.path===""||!((d=c.path)!=null&&d.includes("?")))l(c,f);else for(let m of Lv(c.path))l(c,f,m)}),t}function Lv(s){let t=s.split("/");if(t.length===0)return[];let[i,...r]=t,l=i.endsWith("?"),c=i.replace(/\?$/,"");if(r.length===0)return l?[c,""]:[c];let f=Lv(r.join("/")),d=[];return d.push(...f.map(m=>m===""?c:[c,m].join("/"))),l&&d.push(...f),d.map(m=>s.startsWith("/")&&m===""?"/":m)}function Vy(s){s.sort((t,i)=>t.score!==i.score?i.score-t.score:Ky(t.routesMeta.map(r=>r.childrenIndex),i.routesMeta.map(r=>r.childrenIndex)))}var ky=/^:[\w-]+$/,jy=3,Xy=2,Wy=1,qy=10,Yy=-2,D_=s=>s==="*";function Zy(s,t){let i=s.split("/"),r=i.length;return i.some(D_)&&(r+=Yy),t&&(r+=Xy),i.filter(l=>!D_(l)).reduce((l,c)=>l+(ky.test(c)?jy:c===""?Wy:qy),r)}function Ky(s,t){return s.length===t.length&&s.slice(0,-1).every((r,l)=>r===t[l])?s[s.length-1]-t[t.length-1]:0}function Qy(s,t,i=!1){let{routesMeta:r}=s,l={},c="/",f=[];for(let d=0;d<r.length;++d){let m=r[d],p=d===r.length-1,g=c==="/"?t:t.slice(c.length)||"/",x=Ic({path:m.relativePath,caseSensitive:m.caseSensitive,end:p},g),v=m.route;if(!x&&p&&i&&!r[r.length-1].route.index&&(x=Ic({path:m.relativePath,caseSensitive:m.caseSensitive,end:!1},g)),!x)return null;Object.assign(l,x.params),f.push({params:l,pathname:oa([c,x.pathname]),pathnameBase:iS(oa([c,x.pathnameBase])),route:v}),x.pathnameBase!=="/"&&(c=oa([c,x.pathnameBase]))}return f}function Ic(s,t){typeof s=="string"&&(s={path:s,caseSensitive:!1,end:!0});let[i,r]=Jy(s.path,s.caseSensitive,s.end),l=t.match(i);if(!l)return null;let c=l[0],f=c.replace(/(.)\/+$/,"$1"),d=l.slice(1);return{params:r.reduce((p,{paramName:g,isOptional:x},v)=>{if(g==="*"){let E=d[v]||"";f=c.slice(0,c.length-E.length).replace(/(.)\/+$/,"$1")}const y=d[v];return x&&!y?p[g]=void 0:p[g]=(y||"").replace(/%2F/g,"/"),p},{}),pathname:c,pathnameBase:f,pattern:s}}function Jy(s,t=!1,i=!0){wi(s==="*"||!s.endsWith("*")||s.endsWith("/*"),`Route path "${s}" will be treated as if it were "${s.replace(/\*$/,"/*")}" because the \`*\` character must always follow a \`/\` in the pattern. To get rid of this warning, please change the route path to "${s.replace(/\*$/,"/*")}".`);let r=[],l="^"+s.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^${}|()[\]]/g,"\\$&").replace(/\/:([\w-]+)(\?)?/g,(f,d,m)=>(r.push({paramName:d,isOptional:m!=null}),m?"/?([^\\/]+)?":"/([^\\/]+)"));return s.endsWith("*")?(r.push({paramName:"*"}),l+=s==="*"||s==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):i?l+="\\/*$":s!==""&&s!=="/"&&(l+="(?:(?=\\/|$))"),[new RegExp(l,t?void 0:"i"),r]}function $y(s){try{return s.split("/").map(t=>decodeURIComponent(t).replace(/\//g,"%2F")).join("/")}catch(t){return wi(!1,`The URL path "${s}" could not be decoded because it is a malformed URL segment. This is probably due to a bad percent encoding (${t}).`),s}}function ca(s,t){if(t==="/")return s;if(!s.toLowerCase().startsWith(t.toLowerCase()))return null;let i=t.endsWith("/")?t.length-1:t.length,r=s.charAt(i);return r&&r!=="/"?null:s.slice(i)||"/"}function tS(s,t="/"){let{pathname:i,search:r="",hash:l=""}=typeof s=="string"?Cs(s):s;return{pathname:i?i.startsWith("/")?i:eS(i,t):t,search:aS(r),hash:rS(l)}}function eS(s,t){let i=t.replace(/\/+$/,"").split("/");return s.split("/").forEach(l=>{l===".."?i.length>1&&i.pop():l!=="."&&i.push(l)}),i.length>1?i.join("/"):"/"}function eh(s,t,i,r){return`Cannot include a '${s}' character in a manually specified \`to.${t}\` field [${JSON.stringify(r)}].  Please separate it out to the \`to.${i}\` field. Alternatively you may provide the full path as a string in <Link to="..."> and the router will parse it for you.`}function nS(s){return s.filter((t,i)=>i===0||t.route.path&&t.route.path.length>0)}function Nv(s){let t=nS(s);return t.map((i,r)=>r===t.length-1?i.pathname:i.pathnameBase)}function Ov(s,t,i,r=!1){let l;typeof s=="string"?l=Cs(s):(l={...s},qe(!l.pathname||!l.pathname.includes("?"),eh("?","pathname","search",l)),qe(!l.pathname||!l.pathname.includes("#"),eh("#","pathname","hash",l)),qe(!l.search||!l.search.includes("#"),eh("#","search","hash",l)));let c=s===""||l.pathname==="",f=c?"/":l.pathname,d;if(f==null)d=i;else{let x=t.length-1;if(!r&&f.startsWith("..")){let v=f.split("/");for(;v[0]==="..";)v.shift(),x-=1;l.pathname=v.join("/")}d=x>=0?t[x]:"/"}let m=tS(l,d),p=f&&f!=="/"&&f.endsWith("/"),g=(c||f===".")&&i.endsWith("/");return!m.pathname.endsWith("/")&&(p||g)&&(m.pathname+="/"),m}var oa=s=>s.join("/").replace(/\/\/+/g,"/"),iS=s=>s.replace(/\/+$/,"").replace(/^\/*/,"/"),aS=s=>!s||s==="?"?"":s.startsWith("?")?s:"?"+s,rS=s=>!s||s==="#"?"":s.startsWith("#")?s:"#"+s;function sS(s){return s!=null&&typeof s.status=="number"&&typeof s.statusText=="string"&&typeof s.internal=="boolean"&&"data"in s}var Pv=["POST","PUT","PATCH","DELETE"];new Set(Pv);var oS=["GET",...Pv];new Set(oS);var Ds=pt.createContext(null);Ds.displayName="DataRouter";var Vc=pt.createContext(null);Vc.displayName="DataRouterState";var zv=pt.createContext({isTransitioning:!1});zv.displayName="ViewTransition";var lS=pt.createContext(new Map);lS.displayName="Fetchers";var cS=pt.createContext(null);cS.displayName="Await";var Ui=pt.createContext(null);Ui.displayName="Navigation";var Vo=pt.createContext(null);Vo.displayName="Location";var ua=pt.createContext({outlet:null,matches:[],isDataRoute:!1});ua.displayName="Route";var Td=pt.createContext(null);Td.displayName="RouteError";function uS(s,{relative:t}={}){qe(ko(),"useHref() may be used only in the context of a <Router> component.");let{basename:i,navigator:r}=pt.useContext(Ui),{hash:l,pathname:c,search:f}=jo(s,{relative:t}),d=c;return i!=="/"&&(d=c==="/"?i:oa([i,c])),r.createHref({pathname:d,search:f,hash:l})}function ko(){return pt.useContext(Vo)!=null}function Cr(){return qe(ko(),"useLocation() may be used only in the context of a <Router> component."),pt.useContext(Vo).location}var Bv="You should call navigate() in a React.useEffect(), not when your component is first rendered.";function Iv(s){pt.useContext(Ui).static||pt.useLayoutEffect(s)}function Fv(){let{isDataRoute:s}=pt.useContext(ua);return s?ES():fS()}function fS(){qe(ko(),"useNavigate() may be used only in the context of a <Router> component.");let s=pt.useContext(Ds),{basename:t,navigator:i}=pt.useContext(Ui),{matches:r}=pt.useContext(ua),{pathname:l}=Cr(),c=JSON.stringify(Nv(r)),f=pt.useRef(!1);return Iv(()=>{f.current=!0}),pt.useCallback((m,p={})=>{if(wi(f.current,Bv),!f.current)return;if(typeof m=="number"){i.go(m);return}let g=Ov(m,JSON.parse(c),l,p.relative==="path");s==null&&t!=="/"&&(g.pathname=g.pathname==="/"?t:oa([t,g.pathname])),(p.replace?i.replace:i.push)(g,p.state,p)},[t,i,c,l,s])}pt.createContext(null);function jo(s,{relative:t}={}){let{matches:i}=pt.useContext(ua),{pathname:r}=Cr(),l=JSON.stringify(Nv(i));return pt.useMemo(()=>Ov(s,JSON.parse(l),r,t==="path"),[s,l,r,t])}function hS(s,t){return Hv(s,t)}function Hv(s,t,i,r){var L;qe(ko(),"useRoutes() may be used only in the context of a <Router> component.");let{navigator:l,static:c}=pt.useContext(Ui),{matches:f}=pt.useContext(ua),d=f[f.length-1],m=d?d.params:{},p=d?d.pathname:"/",g=d?d.pathnameBase:"/",x=d&&d.route;{let D=x&&x.path||"";Gv(p,!x||D.endsWith("*")||D.endsWith("*?"),`You rendered descendant <Routes> (or called \`useRoutes()\`) at "${p}" (under <Route path="${D}">) but the parent route path has no trailing "*". This means if you navigate deeper, the parent won't match anymore and therefore the child routes will never render.

Please change the parent <Route path="${D}"> to <Route path="${D==="/"?"*":`${D}/*`}">.`)}let v=Cr(),y;if(t){let D=typeof t=="string"?Cs(t):t;qe(g==="/"||((L=D.pathname)==null?void 0:L.startsWith(g)),`When overriding the location using \`<Routes location>\` or \`useRoutes(routes, location)\`, the location pathname must begin with the portion of the URL pathname that was matched by all parent routes. The current pathname base is "${g}" but pathname "${D.pathname}" was given in the \`location\` prop.`),y=D}else y=v;let E=y.pathname||"/",A=E;if(g!=="/"){let D=g.replace(/^\//,"").split("/");A="/"+E.replace(/^\//,"").split("/").slice(D.length).join("/")}let S=!c&&i&&i.matches&&i.matches.length>0?i.matches:Dv(s,{pathname:A});wi(x||S!=null,`No routes matched location "${y.pathname}${y.search}${y.hash}" `),wi(S==null||S[S.length-1].route.element!==void 0||S[S.length-1].route.Component!==void 0||S[S.length-1].route.lazy!==void 0,`Matched leaf route at location "${y.pathname}${y.search}${y.hash}" does not have an element or Component. This means it will render an <Outlet /> with a null value by default resulting in an "empty" page.`);let _=_S(S&&S.map(D=>Object.assign({},D,{params:Object.assign({},m,D.params),pathname:oa([g,l.encodeLocation?l.encodeLocation(D.pathname).pathname:D.pathname]),pathnameBase:D.pathnameBase==="/"?g:oa([g,l.encodeLocation?l.encodeLocation(D.pathnameBase).pathname:D.pathnameBase])})),f,i,r);return t&&_?pt.createElement(Vo.Provider,{value:{location:{pathname:"/",search:"",hash:"",state:null,key:"default",...y},navigationType:"POP"}},_):_}function dS(){let s=MS(),t=sS(s)?`${s.status} ${s.statusText}`:s instanceof Error?s.message:JSON.stringify(s),i=s instanceof Error?s.stack:null,r="rgba(200,200,200, 0.5)",l={padding:"0.5rem",backgroundColor:r},c={padding:"2px 4px",backgroundColor:r},f=null;return console.error("Error handled by React Router default ErrorBoundary:",s),f=pt.createElement(pt.Fragment,null,pt.createElement("p",null,"💿 Hey developer 👋"),pt.createElement("p",null,"You can provide a way better UX than this when your app throws errors by providing your own ",pt.createElement("code",{style:c},"ErrorBoundary")," or"," ",pt.createElement("code",{style:c},"errorElement")," prop on your route.")),pt.createElement(pt.Fragment,null,pt.createElement("h2",null,"Unexpected Application Error!"),pt.createElement("h3",{style:{fontStyle:"italic"}},t),i?pt.createElement("pre",{style:l},i):null,f)}var pS=pt.createElement(dS,null),mS=class extends pt.Component{constructor(s){super(s),this.state={location:s.location,revalidation:s.revalidation,error:s.error}}static getDerivedStateFromError(s){return{error:s}}static getDerivedStateFromProps(s,t){return t.location!==s.location||t.revalidation!=="idle"&&s.revalidation==="idle"?{error:s.error,location:s.location,revalidation:s.revalidation}:{error:s.error!==void 0?s.error:t.error,location:t.location,revalidation:s.revalidation||t.revalidation}}componentDidCatch(s,t){console.error("React Router caught the following error during render",s,t)}render(){return this.state.error!==void 0?pt.createElement(ua.Provider,{value:this.props.routeContext},pt.createElement(Td.Provider,{value:this.state.error,children:this.props.component})):this.props.children}};function gS({routeContext:s,match:t,children:i}){let r=pt.useContext(Ds);return r&&r.static&&r.staticContext&&(t.route.errorElement||t.route.ErrorBoundary)&&(r.staticContext._deepestRenderedBoundaryId=t.route.id),pt.createElement(ua.Provider,{value:s},i)}function _S(s,t=[],i=null,r=null){if(s==null){if(!i)return null;if(i.errors)s=i.matches;else if(t.length===0&&!i.initialized&&i.matches.length>0)s=i.matches;else return null}let l=s,c=i==null?void 0:i.errors;if(c!=null){let m=l.findIndex(p=>p.route.id&&(c==null?void 0:c[p.route.id])!==void 0);qe(m>=0,`Could not find a matching route for errors on route IDs: ${Object.keys(c).join(",")}`),l=l.slice(0,Math.min(l.length,m+1))}let f=!1,d=-1;if(i)for(let m=0;m<l.length;m++){let p=l[m];if((p.route.HydrateFallback||p.route.hydrateFallbackElement)&&(d=m),p.route.id){let{loaderData:g,errors:x}=i,v=p.route.loader&&!g.hasOwnProperty(p.route.id)&&(!x||x[p.route.id]===void 0);if(p.route.lazy||v){f=!0,d>=0?l=l.slice(0,d+1):l=[l[0]];break}}}return l.reduceRight((m,p,g)=>{let x,v=!1,y=null,E=null;i&&(x=c&&p.route.id?c[p.route.id]:void 0,y=p.route.errorElement||pS,f&&(d<0&&g===0?(Gv("route-fallback",!1,"No `HydrateFallback` element provided to render during initial hydration"),v=!0,E=null):d===g&&(v=!0,E=p.route.hydrateFallbackElement||null)));let A=t.concat(l.slice(0,g+1)),S=()=>{let _;return x?_=y:v?_=E:p.route.Component?_=pt.createElement(p.route.Component,null):p.route.element?_=p.route.element:_=m,pt.createElement(gS,{match:p,routeContext:{outlet:m,matches:A,isDataRoute:i!=null},children:_})};return i&&(p.route.ErrorBoundary||p.route.errorElement||g===0)?pt.createElement(mS,{location:i.location,revalidation:i.revalidation,component:y,error:x,children:S(),routeContext:{outlet:null,matches:A,isDataRoute:!0}}):S()},null)}function bd(s){return`${s} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`}function vS(s){let t=pt.useContext(Ds);return qe(t,bd(s)),t}function xS(s){let t=pt.useContext(Vc);return qe(t,bd(s)),t}function yS(s){let t=pt.useContext(ua);return qe(t,bd(s)),t}function Ad(s){let t=yS(s),i=t.matches[t.matches.length-1];return qe(i.route.id,`${s} can only be used on routes that contain a unique "id"`),i.route.id}function SS(){return Ad("useRouteId")}function MS(){var r;let s=pt.useContext(Td),t=xS("useRouteError"),i=Ad("useRouteError");return s!==void 0?s:(r=t.errors)==null?void 0:r[i]}function ES(){let{router:s}=vS("useNavigate"),t=Ad("useNavigate"),i=pt.useRef(!1);return Iv(()=>{i.current=!0}),pt.useCallback(async(l,c={})=>{wi(i.current,Bv),i.current&&(typeof l=="number"?s.navigate(l):await s.navigate(l,{fromRouteId:t,...c}))},[s,t])}var U_={};function Gv(s,t,i){!t&&!U_[s]&&(U_[s]=!0,wi(!1,i))}pt.memo(TS);function TS({routes:s,future:t,state:i}){return Hv(s,void 0,i,t)}function ka(s){qe(!1,"A <Route> is only ever to be used as the child of <Routes> element, never rendered directly. Please wrap your <Route> in a <Routes>.")}function bS({basename:s="/",children:t=null,location:i,navigationType:r="POP",navigator:l,static:c=!1}){qe(!ko(),"You cannot render a <Router> inside another <Router>. You should never have more than one in your app.");let f=s.replace(/^\/*/,"/"),d=pt.useMemo(()=>({basename:f,navigator:l,static:c,future:{}}),[f,l,c]);typeof i=="string"&&(i=Cs(i));let{pathname:m="/",search:p="",hash:g="",state:x=null,key:v="default"}=i,y=pt.useMemo(()=>{let E=ca(m,f);return E==null?null:{location:{pathname:E,search:p,hash:g,state:x,key:v},navigationType:r}},[f,m,p,g,x,v,r]);return wi(y!=null,`<Router basename="${f}"> is not able to match the URL "${m}${p}${g}" because it does not start with the basename, so the <Router> won't render anything.`),y==null?null:pt.createElement(Ui.Provider,{value:d},pt.createElement(Vo.Provider,{children:t,value:y}))}function AS({children:s,location:t}){return hS(Ph(s),t)}function Ph(s,t=[]){let i=[];return pt.Children.forEach(s,(r,l)=>{if(!pt.isValidElement(r))return;let c=[...t,l];if(r.type===pt.Fragment){i.push.apply(i,Ph(r.props.children,c));return}qe(r.type===ka,`[${typeof r.type=="string"?r.type:r.type.name}] is not a <Route> component. All component children of <Routes> must be a <Route> or <React.Fragment>`),qe(!r.props.index||!r.props.children,"An index route cannot have child routes.");let f={id:r.props.id||c.join("-"),caseSensitive:r.props.caseSensitive,element:r.props.element,Component:r.props.Component,index:r.props.index,path:r.props.path,loader:r.props.loader,action:r.props.action,hydrateFallbackElement:r.props.hydrateFallbackElement,HydrateFallback:r.props.HydrateFallback,errorElement:r.props.errorElement,ErrorBoundary:r.props.ErrorBoundary,hasErrorBoundary:r.props.hasErrorBoundary===!0||r.props.ErrorBoundary!=null||r.props.errorElement!=null,shouldRevalidate:r.props.shouldRevalidate,handle:r.props.handle,lazy:r.props.lazy};r.props.children&&(f.children=Ph(r.props.children,c)),i.push(f)}),i}var Cc="get",Dc="application/x-www-form-urlencoded";function kc(s){return s!=null&&typeof s.tagName=="string"}function RS(s){return kc(s)&&s.tagName.toLowerCase()==="button"}function wS(s){return kc(s)&&s.tagName.toLowerCase()==="form"}function CS(s){return kc(s)&&s.tagName.toLowerCase()==="input"}function DS(s){return!!(s.metaKey||s.altKey||s.ctrlKey||s.shiftKey)}function US(s,t){return s.button===0&&(!t||t==="_self")&&!DS(s)}var sc=null;function LS(){if(sc===null)try{new FormData(document.createElement("form"),0),sc=!1}catch{sc=!0}return sc}var NS=new Set(["application/x-www-form-urlencoded","multipart/form-data","text/plain"]);function nh(s){return s!=null&&!NS.has(s)?(wi(!1,`"${s}" is not a valid \`encType\` for \`<Form>\`/\`<fetcher.Form>\` and will default to "${Dc}"`),null):s}function OS(s,t){let i,r,l,c,f;if(wS(s)){let d=s.getAttribute("action");r=d?ca(d,t):null,i=s.getAttribute("method")||Cc,l=nh(s.getAttribute("enctype"))||Dc,c=new FormData(s)}else if(RS(s)||CS(s)&&(s.type==="submit"||s.type==="image")){let d=s.form;if(d==null)throw new Error('Cannot submit a <button> or <input type="submit"> without a <form>');let m=s.getAttribute("formaction")||d.getAttribute("action");if(r=m?ca(m,t):null,i=s.getAttribute("formmethod")||d.getAttribute("method")||Cc,l=nh(s.getAttribute("formenctype"))||nh(d.getAttribute("enctype"))||Dc,c=new FormData(d,s),!LS()){let{name:p,type:g,value:x}=s;if(g==="image"){let v=p?`${p}.`:"";c.append(`${v}x`,"0"),c.append(`${v}y`,"0")}else p&&c.append(p,x)}}else{if(kc(s))throw new Error('Cannot submit element that is not <form>, <button>, or <input type="submit|image">');i=Cc,r=null,l=Dc,f=s}return c&&l==="text/plain"&&(f=c,c=void 0),{action:r,method:i.toLowerCase(),encType:l,formData:c,body:f}}function Rd(s,t){if(s===!1||s===null||typeof s>"u")throw new Error(t)}async function PS(s,t){if(s.id in t)return t[s.id];try{let i=await import(s.module);return t[s.id]=i,i}catch(i){return console.error(`Error loading route module \`${s.module}\`, reloading page...`),console.error(i),window.__reactRouterContext&&window.__reactRouterContext.isSpaMode,window.location.reload(),new Promise(()=>{})}}function zS(s){return s==null?!1:s.href==null?s.rel==="preload"&&typeof s.imageSrcSet=="string"&&typeof s.imageSizes=="string":typeof s.rel=="string"&&typeof s.href=="string"}async function BS(s,t,i){let r=await Promise.all(s.map(async l=>{let c=t.routes[l.route.id];if(c){let f=await PS(c,i);return f.links?f.links():[]}return[]}));return GS(r.flat(1).filter(zS).filter(l=>l.rel==="stylesheet"||l.rel==="preload").map(l=>l.rel==="stylesheet"?{...l,rel:"prefetch",as:"style"}:{...l,rel:"prefetch"}))}function L_(s,t,i,r,l,c){let f=(m,p)=>i[p]?m.route.id!==i[p].route.id:!0,d=(m,p)=>{var g;return i[p].pathname!==m.pathname||((g=i[p].route.path)==null?void 0:g.endsWith("*"))&&i[p].params["*"]!==m.params["*"]};return c==="assets"?t.filter((m,p)=>f(m,p)||d(m,p)):c==="data"?t.filter((m,p)=>{var x;let g=r.routes[m.route.id];if(!g||!g.hasLoader)return!1;if(f(m,p)||d(m,p))return!0;if(m.route.shouldRevalidate){let v=m.route.shouldRevalidate({currentUrl:new URL(l.pathname+l.search+l.hash,window.origin),currentParams:((x=i[0])==null?void 0:x.params)||{},nextUrl:new URL(s,window.origin),nextParams:m.params,defaultShouldRevalidate:!0});if(typeof v=="boolean")return v}return!0}):[]}function IS(s,t,{includeHydrateFallback:i}={}){return FS(s.map(r=>{let l=t.routes[r.route.id];if(!l)return[];let c=[l.module];return l.clientActionModule&&(c=c.concat(l.clientActionModule)),l.clientLoaderModule&&(c=c.concat(l.clientLoaderModule)),i&&l.hydrateFallbackModule&&(c=c.concat(l.hydrateFallbackModule)),l.imports&&(c=c.concat(l.imports)),c}).flat(1))}function FS(s){return[...new Set(s)]}function HS(s){let t={},i=Object.keys(s).sort();for(let r of i)t[r]=s[r];return t}function GS(s,t){let i=new Set;return new Set(t),s.reduce((r,l)=>{let c=JSON.stringify(HS(l));return i.has(c)||(i.add(c),r.push({key:c,link:l})),r},[])}var VS=new Set([100,101,204,205]);function kS(s,t){let i=typeof s=="string"?new URL(s,typeof window>"u"?"server://singlefetch/":window.location.origin):s;return i.pathname==="/"?i.pathname="_root.data":t&&ca(i.pathname,t)==="/"?i.pathname=`${t.replace(/\/$/,"")}/_root.data`:i.pathname=`${i.pathname.replace(/\/$/,"")}.data`,i}function Vv(){let s=pt.useContext(Ds);return Rd(s,"You must render this element inside a <DataRouterContext.Provider> element"),s}function jS(){let s=pt.useContext(Vc);return Rd(s,"You must render this element inside a <DataRouterStateContext.Provider> element"),s}var wd=pt.createContext(void 0);wd.displayName="FrameworkContext";function kv(){let s=pt.useContext(wd);return Rd(s,"You must render this element inside a <HydratedRouter> element"),s}function XS(s,t){let i=pt.useContext(wd),[r,l]=pt.useState(!1),[c,f]=pt.useState(!1),{onFocus:d,onBlur:m,onMouseEnter:p,onMouseLeave:g,onTouchStart:x}=t,v=pt.useRef(null);pt.useEffect(()=>{if(s==="render"&&f(!0),s==="viewport"){let A=_=>{_.forEach(L=>{f(L.isIntersecting)})},S=new IntersectionObserver(A,{threshold:.5});return v.current&&S.observe(v.current),()=>{S.disconnect()}}},[s]),pt.useEffect(()=>{if(r){let A=setTimeout(()=>{f(!0)},100);return()=>{clearTimeout(A)}}},[r]);let y=()=>{l(!0)},E=()=>{l(!1),f(!1)};return i?s!=="intent"?[c,v,{}]:[c,v,{onFocus:Do(d,y),onBlur:Do(m,E),onMouseEnter:Do(p,y),onMouseLeave:Do(g,E),onTouchStart:Do(x,y)}]:[!1,v,{}]}function Do(s,t){return i=>{s&&s(i),i.defaultPrevented||t(i)}}function WS({page:s,...t}){let{router:i}=Vv(),r=pt.useMemo(()=>Dv(i.routes,s,i.basename),[i.routes,s,i.basename]);return r?pt.createElement(YS,{page:s,matches:r,...t}):null}function qS(s){let{manifest:t,routeModules:i}=kv(),[r,l]=pt.useState([]);return pt.useEffect(()=>{let c=!1;return BS(s,t,i).then(f=>{c||l(f)}),()=>{c=!0}},[s,t,i]),r}function YS({page:s,matches:t,...i}){let r=Cr(),{manifest:l,routeModules:c}=kv(),{basename:f}=Vv(),{loaderData:d,matches:m}=jS(),p=pt.useMemo(()=>L_(s,t,m,l,r,"data"),[s,t,m,l,r]),g=pt.useMemo(()=>L_(s,t,m,l,r,"assets"),[s,t,m,l,r]),x=pt.useMemo(()=>{if(s===r.pathname+r.search+r.hash)return[];let E=new Set,A=!1;if(t.forEach(_=>{var D;let L=l.routes[_.route.id];!L||!L.hasLoader||(!p.some(C=>C.route.id===_.route.id)&&_.route.id in d&&((D=c[_.route.id])!=null&&D.shouldRevalidate)||L.hasClientLoader?A=!0:E.add(_.route.id))}),E.size===0)return[];let S=kS(s,f);return A&&E.size>0&&S.searchParams.set("_routes",t.filter(_=>E.has(_.route.id)).map(_=>_.route.id).join(",")),[S.pathname+S.search]},[f,d,r,l,p,t,s,c]),v=pt.useMemo(()=>IS(g,l),[g,l]),y=qS(g);return pt.createElement(pt.Fragment,null,x.map(E=>pt.createElement("link",{key:E,rel:"prefetch",as:"fetch",href:E,...i})),v.map(E=>pt.createElement("link",{key:E,rel:"modulepreload",href:E,...i})),y.map(({key:E,link:A})=>pt.createElement("link",{key:E,...A})))}function ZS(...s){return t=>{s.forEach(i=>{typeof i=="function"?i(t):i!=null&&(i.current=t)})}}var jv=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u";try{jv&&(window.__reactRouterVersion="7.5.3")}catch{}function KS({basename:s,children:t,window:i}){let r=pt.useRef();r.current==null&&(r.current=Iy({window:i,v5Compat:!0}));let l=r.current,[c,f]=pt.useState({action:l.action,location:l.location}),d=pt.useCallback(m=>{pt.startTransition(()=>f(m))},[f]);return pt.useLayoutEffect(()=>l.listen(d),[l,d]),pt.createElement(bS,{basename:s,children:t,location:c.location,navigationType:c.action,navigator:l})}var Xv=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,Mr=pt.forwardRef(function({onClick:t,discover:i="render",prefetch:r="none",relative:l,reloadDocument:c,replace:f,state:d,target:m,to:p,preventScrollReset:g,viewTransition:x,...v},y){let{basename:E}=pt.useContext(Ui),A=typeof p=="string"&&Xv.test(p),S,_=!1;if(typeof p=="string"&&A&&(S=p,jv))try{let U=new URL(window.location.href),R=p.startsWith("//")?new URL(U.protocol+p):new URL(p),V=ca(R.pathname,E);R.origin===U.origin&&V!=null?p=V+R.search+R.hash:_=!0}catch{wi(!1,`<Link to="${p}"> contains an invalid URL which will probably break when clicked - please update to a valid URL path.`)}let L=uS(p,{relative:l}),[D,C,F]=XS(r,v),H=tM(p,{replace:f,state:d,target:m,preventScrollReset:g,relative:l,viewTransition:x});function B(U){t&&t(U),U.defaultPrevented||H(U)}let k=pt.createElement("a",{...v,...F,href:S||L,onClick:_||c?t:B,ref:ZS(y,C),target:m,"data-discover":!A&&i==="render"?"true":void 0});return D&&!A?pt.createElement(pt.Fragment,null,k,pt.createElement(WS,{page:L})):k});Mr.displayName="Link";var QS=pt.forwardRef(function({"aria-current":t="page",caseSensitive:i=!1,className:r="",end:l=!1,style:c,to:f,viewTransition:d,children:m,...p},g){let x=jo(f,{relative:p.relative}),v=Cr(),y=pt.useContext(Vc),{navigator:E,basename:A}=pt.useContext(Ui),S=y!=null&&rM(x)&&d===!0,_=E.encodeLocation?E.encodeLocation(x).pathname:x.pathname,L=v.pathname,D=y&&y.navigation&&y.navigation.location?y.navigation.location.pathname:null;i||(L=L.toLowerCase(),D=D?D.toLowerCase():null,_=_.toLowerCase()),D&&A&&(D=ca(D,A)||D);const C=_!=="/"&&_.endsWith("/")?_.length-1:_.length;let F=L===_||!l&&L.startsWith(_)&&L.charAt(C)==="/",H=D!=null&&(D===_||!l&&D.startsWith(_)&&D.charAt(_.length)==="/"),B={isActive:F,isPending:H,isTransitioning:S},k=F?t:void 0,U;typeof r=="function"?U=r(B):U=[r,F?"active":null,H?"pending":null,S?"transitioning":null].filter(Boolean).join(" ");let R=typeof c=="function"?c(B):c;return pt.createElement(Mr,{...p,"aria-current":k,className:U,ref:g,style:R,to:f,viewTransition:d},typeof m=="function"?m(B):m)});QS.displayName="NavLink";var JS=pt.forwardRef(({discover:s="render",fetcherKey:t,navigate:i,reloadDocument:r,replace:l,state:c,method:f=Cc,action:d,onSubmit:m,relative:p,preventScrollReset:g,viewTransition:x,...v},y)=>{let E=iM(),A=aM(d,{relative:p}),S=f.toLowerCase()==="get"?"get":"post",_=typeof d=="string"&&Xv.test(d),L=D=>{if(m&&m(D),D.defaultPrevented)return;D.preventDefault();let C=D.nativeEvent.submitter,F=(C==null?void 0:C.getAttribute("formmethod"))||f;E(C||D.currentTarget,{fetcherKey:t,method:F,navigate:i,replace:l,state:c,relative:p,preventScrollReset:g,viewTransition:x})};return pt.createElement("form",{ref:y,method:S,action:A,onSubmit:r?m:L,...v,"data-discover":!_&&s==="render"?"true":void 0})});JS.displayName="Form";function $S(s){return`${s} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`}function Wv(s){let t=pt.useContext(Ds);return qe(t,$S(s)),t}function tM(s,{target:t,replace:i,state:r,preventScrollReset:l,relative:c,viewTransition:f}={}){let d=Fv(),m=Cr(),p=jo(s,{relative:c});return pt.useCallback(g=>{if(US(g,t)){g.preventDefault();let x=i!==void 0?i:Bo(m)===Bo(p);d(s,{replace:x,state:r,preventScrollReset:l,relative:c,viewTransition:f})}},[m,d,p,i,r,t,s,l,c,f])}var eM=0,nM=()=>`__${String(++eM)}__`;function iM(){let{router:s}=Wv("useSubmit"),{basename:t}=pt.useContext(Ui),i=SS();return pt.useCallback(async(r,l={})=>{let{action:c,method:f,encType:d,formData:m,body:p}=OS(r,t);if(l.navigate===!1){let g=l.fetcherKey||nM();await s.fetch(g,i,l.action||c,{preventScrollReset:l.preventScrollReset,formData:m,body:p,formMethod:l.method||f,formEncType:l.encType||d,flushSync:l.flushSync})}else await s.navigate(l.action||c,{preventScrollReset:l.preventScrollReset,formData:m,body:p,formMethod:l.method||f,formEncType:l.encType||d,replace:l.replace,state:l.state,fromRouteId:i,flushSync:l.flushSync,viewTransition:l.viewTransition})},[s,t,i])}function aM(s,{relative:t}={}){let{basename:i}=pt.useContext(Ui),r=pt.useContext(ua);qe(r,"useFormAction must be used inside a RouteContext");let[l]=r.matches.slice(-1),c={...jo(s||".",{relative:t})},f=Cr();if(s==null){c.search=f.search;let d=new URLSearchParams(c.search),m=d.getAll("index");if(m.some(g=>g==="")){d.delete("index"),m.filter(x=>x).forEach(x=>d.append("index",x));let g=d.toString();c.search=g?`?${g}`:""}}return(!s||s===".")&&l.route.index&&(c.search=c.search?c.search.replace(/^\?/,"?index&"):"?index"),i!=="/"&&(c.pathname=c.pathname==="/"?i:oa([i,c.pathname])),Bo(c)}function rM(s,t={}){let i=pt.useContext(zv);qe(i!=null,"`useViewTransitionState` must be used within `react-router-dom`'s `RouterProvider`.  Did you accidentally import `RouterProvider` from `react-router`?");let{basename:r}=Wv("useViewTransitionState"),l=jo(s,{relative:t.relative});if(!i.isTransitioning)return!1;let c=ca(i.currentLocation.pathname,r)||i.currentLocation.pathname,f=ca(i.nextLocation.pathname,r)||i.nextLocation.pathname;return Ic(l.pathname,f)!=null||Ic(l.pathname,c)!=null}new TextEncoder;[...VS];function sM(){return N.jsx("h1",{})}function oM(){return N.jsxs(N.Fragment,{children:[N.jsx("h1",{children:"O nas"}),";",N.jsx("div",{className:"Abot-Wrapper",children:N.jsxs("div",{className:"AboutGlass",children:[N.jsx("p",{children:"Cześć! Nazywam się Marcin Muszyński, jestem początkującym front-end developerem z pasją do tworzenia nowoczesnych, responsywnych interfejsów użytkownika. Właśnie ukończyłem intensywny kurs programowania obejmujący HTML, CSS, JavaScript oraz React, co dało mi solidne podstawy do dalszego rozwoju w świecie technologii webowych. Podczas kursu zrealizowałem szereg projektów, które pozwoliły mi nie tylko poznać teorię, ale przede wszystkim zdobyć praktyczne umiejętności w budowie dynamicznych aplikacji internetowych. Stawiam na ciągły rozwój, czysty kod i dobre praktyki programistyczne. Aktualnie poszukuję możliwości do współpracy przy realnych projektach, które pozwolą mi rozwijać swoje umiejętności i zdobywać doświadczenie w pracy zespołowej."}),";"]})})]})}function lM(){return N.jsxs(N.Fragment,{children:[N.jsx("h1",{children:"Kontakt"}),N.jsx("div",{className:"Abot-Wrapper",children:N.jsxs("div",{className:"Grid-Contact",children:[N.jsx("a",{href:"https://github.com/MarcinM7",target:"_blank",rel:"noopener noreferrer",children:N.jsxs("svg",{className:"Contact-img",xmlns:"http://www.w3.org/2000/svg",width:"100",height:"100",viewBox:"0 0 100 100",children:[N.jsx("circle",{cx:"50",cy:"50",r:"45",fill:"#333333"}),N.jsx("path",{d:"M50 20a30 30 0 0 0-9.5 58.5c1.5 0.3 2-0.6 2-1.4 0-0.7 0-2.5 0-4.9-8.2 1.8-9.9-3.9-9.9-3.9-1.3-3.4-3.3-4.3-3.3-4.3-2.7-1.8 0.2-1.8 0.2-1.8 3 0.2 4.5 3 4.5 3 2.7 4.5 7 3.2 8.7 2.4 0.3-1.9 1-3.2 1.9-4-6.5-0.7-13.4-3.3-13.4-14.5 0-3.2 1.1-5.8 3-7.9-0.3-0.7-1.3-3.6 0.3-7.5 0 0 2.4-0.8 8 3 2.3-0.6 4.8-1 7.3-1 2.5 0 5 0.3 7.3 1 5.6-3.8 8-3 8-3 1.6 3.9 0.6 6.8 0.3 7.5 1.9 2 3 4.7 3 7.9 0 11.3-6.9 13.8-13.4 14.5 1 0.9 2 2.6 2 5.2 0 3.8 0 6.8 0 7.7 0 0.8 0.5 1.6 2 1.4A30 30 0 0 0 50 20z",fill:"white"})]})}),N.jsx("a",{href:"https://www.linkedin.com/in/marcin-muszy%C5%84ski-1b6234191/",target:"_blank",rel:"noopener noreferrer",children:N.jsxs("svg",{className:"Contact-img",xmlns:"http://www.w3.org/2000/svg",width:"100",height:"100",viewBox:"0 0 100 100",children:[N.jsx("circle",{cx:"50",cy:"50",r:"45",fill:"#0077B5"}),N.jsx("rect",{x:"32",y:"32",width:"12",height:"36",fill:"white"}),N.jsx("circle",{cx:"38",cy:"23",r:"6",fill:"white"}),N.jsx("path",{d:"M53 32v6c2.5-3 6.3-6 12-6 13 0 15 9 15 18v18H68V51c0-5-2-8-6.5-8-5.5 0-8.5 4-8.5 8v17H41V32h12z",fill:"white"})]})}),N.jsx("a",{href:"mailto:marcin_muszynski@icloud.com",children:N.jsxs("svg",{className:"Contact-img",xmlns:"http://www.w3.org/2000/svg",width:"100",height:"100",viewBox:"0 0 100 100",children:[N.jsx("circle",{cx:"50",cy:"50",r:"45",fill:"#EA4335"}),N.jsx("rect",{x:"25",y:"35",width:"50",height:"30",rx:"3",ry:"3",fill:"white"}),N.jsx("path",{d:"M25 35l25 15 25-15",stroke:"#EA4335",strokeWidth:"2",fill:"none"})]})}),N.jsx("a",{href:"https://www.youtube.com/@T3chDocRepair",target:"_blank",rel:"noopener noreferrer",children:N.jsxs("svg",{className:"Contact-img",xmlns:"http://www.w3.org/2000/svg",width:"100",height:"100",viewBox:"0 0 100 100",children:[N.jsx("circle",{cx:"50",cy:"50",r:"45",fill:"#FF0000"}),N.jsx("path",{d:"M70 42.5c0-3.7-3-6.7-6.7-6.7H36.7c-3.7 0-6.7 3-6.7 6.7v15c0 3.7 3 6.7 6.7 6.7h26.6c3.7 0 6.7-3 6.7-6.7v-15z",fill:"white"}),N.jsx("polygon",{points:"45,58 59,50 45,42",fill:"#FF0000"})]})}),N.jsx("a",{href:"https://wa.me/794975775",target:"_blank",rel:"noopener noreferrer",children:N.jsxs("svg",{className:"Contact-img",xmlns:"http://www.w3.org/2000/svg",width:"100",height:"100",viewBox:"0 0 100 100",children:[N.jsx("circle",{cx:"50",cy:"50",r:"45",fill:"#25D366"}),N.jsx("path",{d:"M50 27c-12.7 0-23 10.3-23 23 0 4.4 1.2 8.5 3.4 12l-3.6 13 13.4-3.5c3.3 1.8 7.1 2.8 11.1 2.8 12.7 0 23-10.3 23-23S62.7 27 50 27z",fill:"white"}),N.jsx("path",{d:"M50 31c-10.5 0-19 8.5-19 19 0 4.1 1.3 7.9 3.5 11l-2.3 8.3 8.6-2.2c2.9 1.6 6.3 2.5 9.8 2.5 10.5 0 19-8.5 19-19S60.5 31 50 31z",fill:"#25D366"}),N.jsx("path",{d:"M61.5 54.2c-.4-.2-2.3-1.1-2.7-1.3-.4-.1-.6-.2-1 .2-.3.4-1.2 1.3-1.5 1.5-.3.2-.5.3-.9.1-2.4-1.2-4-2.1-5.6-4.8-.4-.7.4-.7 1.2-2.3.1-.3.1-.5 0-.7-.1-.2-.9-2.1-1.2-2.9-.3-.8-.6-.7-.9-.7h-.8c-.3 0-.7.1-1.1.5-.4.4-1.5 1.5-1.5 3.6s1.6 4.2 1.8 4.5c.2.3 3.1 4.8 7.7 6.5 4.3 1.5 4.3 1 5.1.9.8-.1 2.5-1 2.8-2 .3-1 .3-1.8.2-2-.1-.1-.4-.3-.8-.5z",fill:"white"})]})}),N.jsx("a",{href:"https://www.facebook.com/marcin.muszynski.5439",target:"_blank",rel:"noopener noreferrer",children:N.jsxs("svg",{className:"Contact-img",xmlns:"http://www.w3.org/2000/svg",width:"100",height:"100",viewBox:"0 0 100 100",children:[N.jsx("circle",{cx:"50",cy:"50",r:"45",fill:"#1877F2"}),N.jsx("path",{d:"M58 75V65h10l2-12H58v-8c0-3 1-5 6-5h6V29c-1 0-5-1-9-1-9 0-15 5-15 15v10H36v12h10v25h12z",fill:"white"})]})})]})})]})}function cM(){const s=Fv();return N.jsxs(N.Fragment,{children:[N.jsx("h1",{children:"Projekty"}),N.jsxs("div",{className:"Section-wrapper",children:[N.jsxs("section",{className:"project-section",onClick:()=>s("/js-projects"),children:[N.jsx("div",{children:N.jsx("img",{src:"./src/assets/JavaScript-logo.png"})}),N.jsx("article",{children:"Poznaj moc czystego JavaScriptu! W tej sekcji prezentuję projekty zbudowane bez żadnych frameworków tylko solidny, ręcznie napisany kod JS. Od interaktywnych aplikacji po zaawansowane rozwiązania webowe, każdy projekt demonstruje możliwości natywnego języka skryptowego, który napędza współczesną sieć."})]}),N.jsxs("section",{className:"project-section",onClick:()=>s("/VueView"),children:[N.jsx("div",{children:N.jsx("img",{src:"./src/assets/vue-logo.png"})}),N.jsx("article",{children:"Odkryj elegancję Vue.js! Ta kolekcja projektów pokazuje, jak wykorzystuję ten intuicyjny framework do tworzenia responsywnych, wydajnych i pięknych interfejsów użytkownika. Dzięki reaktywnemu podejściu i komponentowej architekturze Vue.js, aplikacje te łączą nowoczesne praktyki programistyczne z płynnym doświadczeniem użytkownika."})]}),N.jsxs("section",{className:"project-section",onClick:()=>s("/ReactView"),children:[N.jsx("div",{children:N.jsx("img",{src:"./src/assets/react-logo.png"})}),N.jsx("article",{children:"Zanurz się w ekosystemie React! Tutaj znajdziesz moje najbardziej dynamiczne projekty wykorzystujące najpopularniejszy framework frontendowy. Od zaawansowanych aplikacji SPA po progresywne aplikacje webowe – każda implementacja demonstruje potencjał komponentowego podejścia React do budowania interaktywnych interfejsów przyszłości."})]})]})]})}function uM(){return N.jsx("footer",{className:"footer",children:N.jsxs("p",{children:["© ",new Date().getFullYear()," Marcin Muszyński Wszelkie prawa zastrzeżone."]})})}function fM(){const[s,t]=pt.useState(!1),[i,r]=pt.useState(window.innerWidth<=768);pt.useEffect(()=>{const f=()=>{r(window.innerWidth<=768),window.innerWidth>768&&t(!1)};return window.addEventListener("resize",f),()=>{window.removeEventListener("resize",f)}},[]);const l=()=>{i&&t(!1)},c=()=>{t(!s)};return N.jsx("header",{className:"header",children:N.jsxs("div",{className:"header-container",children:[N.jsx("div",{className:"logo",children:N.jsx(Mr,{to:"/",children:"Marcin Muszyński"})}),i&&N.jsxs("button",{className:`hamburger-menu ${s?"open":""}`,onClick:c,"aria-label":"Menu",children:[N.jsx("span",{}),N.jsx("span",{}),N.jsx("span",{})]}),N.jsx("nav",{className:`navigation ${i?"mobile":"desktop"} ${s?"open":""}`,children:N.jsxs("ul",{children:[N.jsx("li",{children:N.jsx(Mr,{to:"/",onClick:l,children:"Home"})}),N.jsx("li",{children:N.jsx(Mr,{to:"/about",onClick:l,children:"O mnie"})}),N.jsx("li",{children:N.jsx(Mr,{to:"/project",onClick:l,children:"Projekty"})}),N.jsx("li",{children:N.jsx(Mr,{to:"/contact",onClick:l,children:"Kontakt"})})]})})]})})}function hM(){return N.jsx(N.Fragment,{children:N.jsxs("div",{className:"DivProject-Wrapper",children:[N.jsxs("div",{className:"ProjecyCard-wapper",children:[N.jsxs("section",{className:"ProjecrCard",children:[N.jsx("div",{children:N.jsx("img",{src:"./src/assets/Comming_Soon.png",width:120})}),N.jsx("article",{children:N.jsx("h1",{className:"inner-title",children:"Comming Soon !!!"})})]}),N.jsxs("div",{className:"button-container",children:[N.jsx("img",{src:"./src/assets/github-logo.png",height:20}),N.jsx("button",{className:"buttonCard",children:N.jsx("a",{href:"#",children:"dasdasdsdasd"})})]})]}),N.jsxs("div",{className:"ProjecyCard-wapper",children:[N.jsxs("section",{className:"ProjecrCard",children:[N.jsx("div",{children:N.jsx("img",{src:"./src/assets/Comming_Soon.png",width:120})}),N.jsx("article",{children:N.jsx("h1",{className:"inner-title",children:"Comming Soon !!!"})})]}),N.jsxs("div",{className:"button-container",children:[N.jsx("img",{src:"./src/assets/github-logo.png",height:20}),N.jsx("button",{className:"buttonCard",children:N.jsx("a",{href:"#",children:"dasdasdsdasd"})})]})]}),N.jsxs("div",{className:"ProjecyCard-wapper",children:[N.jsxs("section",{className:"ProjecrCard",children:[N.jsx("div",{children:N.jsx("img",{src:"./src/assets/Comming_Soon.png",width:120})}),N.jsx("article",{children:N.jsx("h1",{className:"inner-title",children:"Comming Soon !!!"})})]}),N.jsxs("div",{className:"button-container",children:[N.jsx("img",{src:"./src/assets/github-logo.png",height:20}),N.jsx("button",{className:"buttonCard",children:N.jsx("a",{href:"#",children:"dasdasdsdasd"})})]})]}),N.jsxs("div",{className:"ProjecyCard-wapper",children:[N.jsxs("section",{className:"ProjecrCard",children:[N.jsx("div",{children:N.jsx("img",{src:"./src/assets/Comming_Soon.png",width:120})}),N.jsx("article",{children:N.jsx("h1",{className:"inner-title",children:"Comming Soon !!!"})})]}),N.jsxs("div",{className:"button-container",children:[N.jsx("img",{src:"./src/assets/github-logo.png",height:20}),N.jsx("button",{className:"buttonCard",children:N.jsx("a",{href:"#",children:"dasdasdsdasd"})})]})]}),N.jsxs("div",{className:"ProjecyCard-wapper",children:[N.jsxs("section",{className:"ProjecrCard",children:[N.jsx("div",{children:N.jsx("img",{src:"./src/assets/Comming_Soon.png",width:120})}),N.jsx("article",{children:N.jsx("h1",{className:"inner-title",children:"Comming Soon !!!"})})]}),N.jsxs("div",{className:"button-container",children:[N.jsx("img",{src:"./src/assets/github-logo.png",height:20}),N.jsx("button",{className:"buttonCard",children:N.jsx("a",{href:"#",children:"dasdasdsdasd"})})]})]}),N.jsxs("div",{className:"ProjecyCard-wapper",children:[N.jsxs("section",{className:"ProjecrCard",children:[N.jsx("div",{children:N.jsx("img",{src:"./src/assets/Comming_Soon.png",width:120})}),N.jsx("article",{children:N.jsx("h1",{className:"inner-title",children:"Comming Soon !!!"})})]}),N.jsxs("div",{className:"button-container",children:[N.jsx("img",{src:"./src/assets/github-logo.png",height:20}),N.jsx("button",{className:"buttonCard",children:N.jsx("a",{href:"#",children:"dasdasdsdasd"})})]})]})]})})}function dM(){return N.jsx(N.Fragment,{children:N.jsxs("div",{className:"DivProject-Wrapper",children:[N.jsxs("div",{className:"ProjecyCard-wapper",children:[N.jsxs("section",{className:"ProjecrCard",children:[N.jsx("div",{children:N.jsx("img",{src:"./src/assets/Comming_Soon.png",width:120})}),N.jsx("article",{children:N.jsx("h1",{className:"inner-title",children:"Comming Soon !!!"})})]}),N.jsxs("div",{className:"button-container",children:[N.jsx("img",{src:"./src/assets/github-logo.png",height:20}),N.jsx("button",{className:"buttonCard",children:N.jsx("a",{href:"#",children:"bbbbbbbbbbbbbbbb"})})]})]}),N.jsxs("div",{className:"ProjecyCard-wapper",children:[N.jsxs("section",{className:"ProjecrCard",children:[N.jsx("div",{children:N.jsx("img",{src:"./src/assets/Comming_Soon.png",width:120})}),N.jsx("article",{children:N.jsx("h1",{className:"inner-title",children:"Comming Soon !!!"})})]}),N.jsxs("div",{className:"button-container",children:[N.jsx("img",{src:"./src/assets/github-logo.png",height:20}),N.jsx("button",{className:"buttonCard",children:N.jsx("a",{href:"#",children:"dasdasdsdasd"})})]})]}),N.jsxs("div",{className:"ProjecyCard-wapper",children:[N.jsxs("section",{className:"ProjecrCard",children:[N.jsx("div",{children:N.jsx("img",{src:"./src/assets/Comming_Soon.png",width:120})}),N.jsx("article",{children:N.jsx("h1",{className:"inner-title",children:"Comming Soon !!!"})})]}),N.jsxs("div",{className:"button-container",children:[N.jsx("img",{src:"./src/assets/github-logo.png",height:20}),N.jsx("button",{className:"buttonCard",children:N.jsx("a",{href:"#",children:"dasdasdsdasd"})})]})]}),N.jsxs("div",{className:"ProjecyCard-wapper",children:[N.jsxs("section",{className:"ProjecrCard",children:[N.jsx("div",{children:N.jsx("img",{src:"./src/assets/Comming_Soon.png",width:120})}),N.jsx("article",{children:N.jsx("h1",{className:"inner-title",children:"Comming Soon !!!"})})]}),N.jsxs("div",{className:"button-container",children:[N.jsx("img",{src:"./src/assets/github-logo.png",height:20}),N.jsx("button",{className:"buttonCard",children:N.jsx("a",{href:"#",children:"dasdasdsdasd"})})]})]}),N.jsxs("div",{className:"ProjecyCard-wapper",children:[N.jsxs("section",{className:"ProjecrCard",children:[N.jsx("div",{children:N.jsx("img",{src:"./src/assets/Comming_Soon.png",width:120})}),N.jsx("article",{children:N.jsx("h1",{className:"inner-title",children:"Comming Soon !!!"})})]}),N.jsxs("div",{className:"button-container",children:[N.jsx("img",{src:"./src/assets/github-logo.png",height:20}),N.jsx("button",{className:"buttonCard",children:N.jsx("a",{href:"#",children:"dasdasdsdasd"})})]})]}),N.jsxs("div",{className:"ProjecyCard-wapper",children:[N.jsxs("section",{className:"ProjecrCard",children:[N.jsx("div",{children:N.jsx("img",{src:"./src/assets/Comming_Soon.png",width:120})}),N.jsx("article",{children:N.jsx("h1",{className:"inner-title",children:"Comming Soon !!!"})})]}),N.jsxs("div",{className:"button-container",children:[N.jsx("img",{src:"./src/assets/github-logo.png",height:20}),N.jsx("button",{className:"buttonCard",children:N.jsx("a",{href:"#",children:"dasdasdsdasd"})})]})]})]})})}function pM(){return N.jsx(N.Fragment,{children:N.jsxs("div",{className:"DivProject-Wrapper",children:[N.jsxs("div",{className:"ProjecyCard-wapper",children:[N.jsxs("section",{className:"ProjecrCard",children:[N.jsx("div",{children:N.jsx("img",{src:"./src/assets/Comming_Soon.png",width:120})}),N.jsx("article",{children:N.jsx("h1",{className:"inner-title",children:"Comming Soon !!!"})})]}),N.jsxs("div",{className:"button-container",children:[N.jsx("img",{src:"./src/assets/github-logo.png",height:20}),N.jsx("button",{className:"buttonCard",children:N.jsx("a",{href:"#",children:"aaaaaaaaaaaaaa"})})]})]}),N.jsxs("div",{className:"ProjecyCard-wapper",children:[N.jsxs("section",{className:"ProjecrCard",children:[N.jsx("div",{children:N.jsx("img",{src:"./src/assets/Comming_Soon.png",width:120})}),N.jsx("article",{children:N.jsx("h1",{className:"inner-title",children:"Comming Soon !!!"})})]}),N.jsxs("div",{className:"button-container",children:[N.jsx("img",{src:"./src/assets/github-logo.png",height:20}),N.jsx("button",{className:"buttonCard",children:N.jsx("a",{href:"#",children:"dasdasdsdasd"})})]})]}),N.jsxs("div",{className:"ProjecyCard-wapper",children:[N.jsxs("section",{className:"ProjecrCard",children:[N.jsx("div",{children:N.jsx("img",{src:"./src/assets/Comming_Soon.png",width:120})}),N.jsx("article",{children:N.jsx("h1",{className:"inner-title",children:"Comming Soon !!!"})})]}),N.jsxs("div",{className:"button-container",children:[N.jsx("img",{src:"./src/assets/github-logo.png",height:20}),N.jsx("button",{className:"buttonCard",children:N.jsx("a",{href:"#",children:"dasdasdsdasd"})})]})]}),N.jsxs("div",{className:"ProjecyCard-wapper",children:[N.jsxs("section",{className:"ProjecrCard",children:[N.jsx("div",{children:N.jsx("img",{src:"./src/assets/Comming_Soon.png",width:120})}),N.jsx("article",{children:N.jsx("h1",{className:"inner-title",children:"Comming Soon !!!"})})]}),N.jsxs("div",{className:"button-container",children:[N.jsx("img",{src:"./src/assets/github-logo.png",height:20}),N.jsx("button",{className:"buttonCard",children:N.jsx("a",{href:"#",children:"dasdasdsdasd"})})]})]}),N.jsxs("div",{className:"ProjecyCard-wapper",children:[N.jsxs("section",{className:"ProjecrCard",children:[N.jsx("div",{children:N.jsx("img",{src:"./src/assets/Comming_Soon.png",width:120})}),N.jsx("article",{children:N.jsx("h1",{className:"inner-title",children:"Comming Soon !!!"})})]}),N.jsxs("div",{className:"button-container",children:[N.jsx("img",{src:"./src/assets/github-logo.png",height:20}),N.jsx("button",{className:"buttonCard",children:N.jsx("a",{href:"#",children:"dasdasdsdasd"})})]})]}),N.jsxs("div",{className:"ProjecyCard-wapper",children:[N.jsxs("section",{className:"ProjecrCard",children:[N.jsx("div",{children:N.jsx("img",{src:"./src/assets/Comming_Soon.png",width:120})}),N.jsx("article",{children:N.jsx("h1",{className:"inner-title",children:"Comming Soon !!!"})})]}),N.jsxs("div",{className:"button-container",children:[N.jsx("img",{src:"./src/assets/github-logo.png",height:20}),N.jsx("button",{className:"buttonCard",children:N.jsx("a",{href:"#",children:"dasdasdsdasd"})})]})]})]})})}/**
 * @license
 * Copyright 2010-2025 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const Cd="176",mM=0,N_=1,gM=2,qv=1,_M=2,ia=3,qa=0,Gn=1,aa=2,Xa=0,Ms=1,O_=2,P_=3,z_=4,vM=5,Er=100,xM=101,yM=102,SM=103,MM=104,EM=200,TM=201,bM=202,AM=203,zh=204,Bh=205,RM=206,wM=207,CM=208,DM=209,UM=210,LM=211,NM=212,OM=213,PM=214,Ih=0,Fh=1,Hh=2,Ts=3,Gh=4,Vh=5,kh=6,jh=7,Dd=0,zM=1,BM=2,Wa=0,IM=1,FM=2,HM=3,GM=4,VM=5,kM=6,jM=7,Yv=300,bs=301,As=302,Xh=303,Wh=304,jc=306,qh=1e3,br=1001,Yh=1002,_i=1003,XM=1004,oc=1005,bi=1006,ih=1007,Ar=1008,Ci=1009,Zv=1010,Kv=1011,Io=1012,Ud=1013,Rr=1014,ra=1015,Xo=1016,Ld=1017,Nd=1018,Fo=1020,Qv=35902,Jv=1021,$v=1022,gi=1023,Ho=1026,Go=1027,t0=1028,Od=1029,e0=1030,Pd=1031,zd=1033,Uc=33776,Lc=33777,Nc=33778,Oc=33779,Zh=35840,Kh=35841,Qh=35842,Jh=35843,$h=36196,td=37492,ed=37496,nd=37808,id=37809,ad=37810,rd=37811,sd=37812,od=37813,ld=37814,cd=37815,ud=37816,fd=37817,hd=37818,dd=37819,pd=37820,md=37821,Pc=36492,gd=36494,_d=36495,n0=36283,vd=36284,xd=36285,yd=36286,WM=3200,qM=3201,i0=0,YM=1,ja="",oi="srgb",Rs="srgb-linear",Fc="linear",ze="srgb",os=7680,B_=519,ZM=512,KM=513,QM=514,a0=515,JM=516,$M=517,tE=518,eE=519,I_=35044,F_="300 es",sa=2e3,Hc=2001;class Us{addEventListener(t,i){this._listeners===void 0&&(this._listeners={});const r=this._listeners;r[t]===void 0&&(r[t]=[]),r[t].indexOf(i)===-1&&r[t].push(i)}hasEventListener(t,i){const r=this._listeners;return r===void 0?!1:r[t]!==void 0&&r[t].indexOf(i)!==-1}removeEventListener(t,i){const r=this._listeners;if(r===void 0)return;const l=r[t];if(l!==void 0){const c=l.indexOf(i);c!==-1&&l.splice(c,1)}}dispatchEvent(t){const i=this._listeners;if(i===void 0)return;const r=i[t.type];if(r!==void 0){t.target=this;const l=r.slice(0);for(let c=0,f=l.length;c<f;c++)l[c].call(this,t);t.target=null}}}const wn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],ah=Math.PI/180,Sd=180/Math.PI;function Wo(){const s=Math.random()*4294967295|0,t=Math.random()*4294967295|0,i=Math.random()*4294967295|0,r=Math.random()*4294967295|0;return(wn[s&255]+wn[s>>8&255]+wn[s>>16&255]+wn[s>>24&255]+"-"+wn[t&255]+wn[t>>8&255]+"-"+wn[t>>16&15|64]+wn[t>>24&255]+"-"+wn[i&63|128]+wn[i>>8&255]+"-"+wn[i>>16&255]+wn[i>>24&255]+wn[r&255]+wn[r>>8&255]+wn[r>>16&255]+wn[r>>24&255]).toLowerCase()}function xe(s,t,i){return Math.max(t,Math.min(i,s))}function nE(s,t){return(s%t+t)%t}function rh(s,t,i){return(1-i)*s+i*t}function Uo(s,t){switch(t.constructor){case Float32Array:return s;case Uint32Array:return s/4294967295;case Uint16Array:return s/65535;case Uint8Array:return s/255;case Int32Array:return Math.max(s/2147483647,-1);case Int16Array:return Math.max(s/32767,-1);case Int8Array:return Math.max(s/127,-1);default:throw new Error("Invalid component type.")}}function Hn(s,t){switch(t.constructor){case Float32Array:return s;case Uint32Array:return Math.round(s*4294967295);case Uint16Array:return Math.round(s*65535);case Uint8Array:return Math.round(s*255);case Int32Array:return Math.round(s*2147483647);case Int16Array:return Math.round(s*32767);case Int8Array:return Math.round(s*127);default:throw new Error("Invalid component type.")}}class Me{constructor(t=0,i=0){Me.prototype.isVector2=!0,this.x=t,this.y=i}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,i){return this.x=t,this.y=i,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,i){switch(t){case 0:this.x=i;break;case 1:this.y=i;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,i){return this.x=t.x+i.x,this.y=t.y+i.y,this}addScaledVector(t,i){return this.x+=t.x*i,this.y+=t.y*i,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,i){return this.x=t.x-i.x,this.y=t.y-i.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){const i=this.x,r=this.y,l=t.elements;return this.x=l[0]*i+l[3]*r+l[6],this.y=l[1]*i+l[4]*r+l[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,i){return this.x=xe(this.x,t.x,i.x),this.y=xe(this.y,t.y,i.y),this}clampScalar(t,i){return this.x=xe(this.x,t,i),this.y=xe(this.y,t,i),this}clampLength(t,i){const r=this.length();return this.divideScalar(r||1).multiplyScalar(xe(r,t,i))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){const i=Math.sqrt(this.lengthSq()*t.lengthSq());if(i===0)return Math.PI/2;const r=this.dot(t)/i;return Math.acos(xe(r,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const i=this.x-t.x,r=this.y-t.y;return i*i+r*r}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,i){return this.x+=(t.x-this.x)*i,this.y+=(t.y-this.y)*i,this}lerpVectors(t,i,r){return this.x=t.x+(i.x-t.x)*r,this.y=t.y+(i.y-t.y)*r,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,i=0){return this.x=t[i],this.y=t[i+1],this}toArray(t=[],i=0){return t[i]=this.x,t[i+1]=this.y,t}fromBufferAttribute(t,i){return this.x=t.getX(i),this.y=t.getY(i),this}rotateAround(t,i){const r=Math.cos(i),l=Math.sin(i),c=this.x-t.x,f=this.y-t.y;return this.x=c*r-f*l+t.x,this.y=c*l+f*r+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class se{constructor(t,i,r,l,c,f,d,m,p){se.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,i,r,l,c,f,d,m,p)}set(t,i,r,l,c,f,d,m,p){const g=this.elements;return g[0]=t,g[1]=l,g[2]=d,g[3]=i,g[4]=c,g[5]=m,g[6]=r,g[7]=f,g[8]=p,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){const i=this.elements,r=t.elements;return i[0]=r[0],i[1]=r[1],i[2]=r[2],i[3]=r[3],i[4]=r[4],i[5]=r[5],i[6]=r[6],i[7]=r[7],i[8]=r[8],this}extractBasis(t,i,r){return t.setFromMatrix3Column(this,0),i.setFromMatrix3Column(this,1),r.setFromMatrix3Column(this,2),this}setFromMatrix4(t){const i=t.elements;return this.set(i[0],i[4],i[8],i[1],i[5],i[9],i[2],i[6],i[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,i){const r=t.elements,l=i.elements,c=this.elements,f=r[0],d=r[3],m=r[6],p=r[1],g=r[4],x=r[7],v=r[2],y=r[5],E=r[8],A=l[0],S=l[3],_=l[6],L=l[1],D=l[4],C=l[7],F=l[2],H=l[5],B=l[8];return c[0]=f*A+d*L+m*F,c[3]=f*S+d*D+m*H,c[6]=f*_+d*C+m*B,c[1]=p*A+g*L+x*F,c[4]=p*S+g*D+x*H,c[7]=p*_+g*C+x*B,c[2]=v*A+y*L+E*F,c[5]=v*S+y*D+E*H,c[8]=v*_+y*C+E*B,this}multiplyScalar(t){const i=this.elements;return i[0]*=t,i[3]*=t,i[6]*=t,i[1]*=t,i[4]*=t,i[7]*=t,i[2]*=t,i[5]*=t,i[8]*=t,this}determinant(){const t=this.elements,i=t[0],r=t[1],l=t[2],c=t[3],f=t[4],d=t[5],m=t[6],p=t[7],g=t[8];return i*f*g-i*d*p-r*c*g+r*d*m+l*c*p-l*f*m}invert(){const t=this.elements,i=t[0],r=t[1],l=t[2],c=t[3],f=t[4],d=t[5],m=t[6],p=t[7],g=t[8],x=g*f-d*p,v=d*m-g*c,y=p*c-f*m,E=i*x+r*v+l*y;if(E===0)return this.set(0,0,0,0,0,0,0,0,0);const A=1/E;return t[0]=x*A,t[1]=(l*p-g*r)*A,t[2]=(d*r-l*f)*A,t[3]=v*A,t[4]=(g*i-l*m)*A,t[5]=(l*c-d*i)*A,t[6]=y*A,t[7]=(r*m-p*i)*A,t[8]=(f*i-r*c)*A,this}transpose(){let t;const i=this.elements;return t=i[1],i[1]=i[3],i[3]=t,t=i[2],i[2]=i[6],i[6]=t,t=i[5],i[5]=i[7],i[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){const i=this.elements;return t[0]=i[0],t[1]=i[3],t[2]=i[6],t[3]=i[1],t[4]=i[4],t[5]=i[7],t[6]=i[2],t[7]=i[5],t[8]=i[8],this}setUvTransform(t,i,r,l,c,f,d){const m=Math.cos(c),p=Math.sin(c);return this.set(r*m,r*p,-r*(m*f+p*d)+f+t,-l*p,l*m,-l*(-p*f+m*d)+d+i,0,0,1),this}scale(t,i){return this.premultiply(sh.makeScale(t,i)),this}rotate(t){return this.premultiply(sh.makeRotation(-t)),this}translate(t,i){return this.premultiply(sh.makeTranslation(t,i)),this}makeTranslation(t,i){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,i,0,0,1),this}makeRotation(t){const i=Math.cos(t),r=Math.sin(t);return this.set(i,-r,0,r,i,0,0,0,1),this}makeScale(t,i){return this.set(t,0,0,0,i,0,0,0,1),this}equals(t){const i=this.elements,r=t.elements;for(let l=0;l<9;l++)if(i[l]!==r[l])return!1;return!0}fromArray(t,i=0){for(let r=0;r<9;r++)this.elements[r]=t[r+i];return this}toArray(t=[],i=0){const r=this.elements;return t[i]=r[0],t[i+1]=r[1],t[i+2]=r[2],t[i+3]=r[3],t[i+4]=r[4],t[i+5]=r[5],t[i+6]=r[6],t[i+7]=r[7],t[i+8]=r[8],t}clone(){return new this.constructor().fromArray(this.elements)}}const sh=new se;function r0(s){for(let t=s.length-1;t>=0;--t)if(s[t]>=65535)return!0;return!1}function Gc(s){return document.createElementNS("http://www.w3.org/1999/xhtml",s)}function iE(){const s=Gc("canvas");return s.style.display="block",s}const H_={};function zc(s){s in H_||(H_[s]=!0,console.warn(s))}function aE(s,t,i){return new Promise(function(r,l){function c(){switch(s.clientWaitSync(t,s.SYNC_FLUSH_COMMANDS_BIT,0)){case s.WAIT_FAILED:l();break;case s.TIMEOUT_EXPIRED:setTimeout(c,i);break;default:r()}}setTimeout(c,i)})}function rE(s){const t=s.elements;t[2]=.5*t[2]+.5*t[3],t[6]=.5*t[6]+.5*t[7],t[10]=.5*t[10]+.5*t[11],t[14]=.5*t[14]+.5*t[15]}function sE(s){const t=s.elements;t[11]===-1?(t[10]=-t[10]-1,t[14]=-t[14]):(t[10]=-t[10],t[14]=-t[14]+1)}const G_=new se().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),V_=new se().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function oE(){const s={enabled:!0,workingColorSpace:Rs,spaces:{},convert:function(l,c,f){return this.enabled===!1||c===f||!c||!f||(this.spaces[c].transfer===ze&&(l.r=la(l.r),l.g=la(l.g),l.b=la(l.b)),this.spaces[c].primaries!==this.spaces[f].primaries&&(l.applyMatrix3(this.spaces[c].toXYZ),l.applyMatrix3(this.spaces[f].fromXYZ)),this.spaces[f].transfer===ze&&(l.r=Es(l.r),l.g=Es(l.g),l.b=Es(l.b))),l},fromWorkingColorSpace:function(l,c){return this.convert(l,this.workingColorSpace,c)},toWorkingColorSpace:function(l,c){return this.convert(l,c,this.workingColorSpace)},getPrimaries:function(l){return this.spaces[l].primaries},getTransfer:function(l){return l===ja?Fc:this.spaces[l].transfer},getLuminanceCoefficients:function(l,c=this.workingColorSpace){return l.fromArray(this.spaces[c].luminanceCoefficients)},define:function(l){Object.assign(this.spaces,l)},_getMatrix:function(l,c,f){return l.copy(this.spaces[c].toXYZ).multiply(this.spaces[f].fromXYZ)},_getDrawingBufferColorSpace:function(l){return this.spaces[l].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(l=this.workingColorSpace){return this.spaces[l].workingColorSpaceConfig.unpackColorSpace}},t=[.64,.33,.3,.6,.15,.06],i=[.2126,.7152,.0722],r=[.3127,.329];return s.define({[Rs]:{primaries:t,whitePoint:r,transfer:Fc,toXYZ:G_,fromXYZ:V_,luminanceCoefficients:i,workingColorSpaceConfig:{unpackColorSpace:oi},outputColorSpaceConfig:{drawingBufferColorSpace:oi}},[oi]:{primaries:t,whitePoint:r,transfer:ze,toXYZ:G_,fromXYZ:V_,luminanceCoefficients:i,outputColorSpaceConfig:{drawingBufferColorSpace:oi}}}),s}const Ae=oE();function la(s){return s<.04045?s*.0773993808:Math.pow(s*.9478672986+.0521327014,2.4)}function Es(s){return s<.0031308?s*12.92:1.055*Math.pow(s,.41666)-.055}let ls;class lE{static getDataURL(t,i="image/png"){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let r;if(t instanceof HTMLCanvasElement)r=t;else{ls===void 0&&(ls=Gc("canvas")),ls.width=t.width,ls.height=t.height;const l=ls.getContext("2d");t instanceof ImageData?l.putImageData(t,0,0):l.drawImage(t,0,0,t.width,t.height),r=ls}return r.toDataURL(i)}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){const i=Gc("canvas");i.width=t.width,i.height=t.height;const r=i.getContext("2d");r.drawImage(t,0,0,t.width,t.height);const l=r.getImageData(0,0,t.width,t.height),c=l.data;for(let f=0;f<c.length;f++)c[f]=la(c[f]/255)*255;return r.putImageData(l,0,0),i}else if(t.data){const i=t.data.slice(0);for(let r=0;r<i.length;r++)i instanceof Uint8Array||i instanceof Uint8ClampedArray?i[r]=Math.floor(la(i[r]/255)*255):i[r]=la(i[r]);return{data:i,width:t.width,height:t.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}}let cE=0;class Bd{constructor(t=null){this.isSource=!0,Object.defineProperty(this,"id",{value:cE++}),this.uuid=Wo(),this.data=t,this.dataReady=!0,this.version=0}set needsUpdate(t){t===!0&&this.version++}toJSON(t){const i=t===void 0||typeof t=="string";if(!i&&t.images[this.uuid]!==void 0)return t.images[this.uuid];const r={uuid:this.uuid,url:""},l=this.data;if(l!==null){let c;if(Array.isArray(l)){c=[];for(let f=0,d=l.length;f<d;f++)l[f].isDataTexture?c.push(oh(l[f].image)):c.push(oh(l[f]))}else c=oh(l);r.url=c}return i||(t.images[this.uuid]=r),r}}function oh(s){return typeof HTMLImageElement<"u"&&s instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&s instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&s instanceof ImageBitmap?lE.getDataURL(s):s.data?{data:Array.from(s.data),width:s.width,height:s.height,type:s.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let uE=0;class Vn extends Us{constructor(t=Vn.DEFAULT_IMAGE,i=Vn.DEFAULT_MAPPING,r=br,l=br,c=bi,f=Ar,d=gi,m=Ci,p=Vn.DEFAULT_ANISOTROPY,g=ja){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:uE++}),this.uuid=Wo(),this.name="",this.source=new Bd(t),this.mipmaps=[],this.mapping=i,this.channel=0,this.wrapS=r,this.wrapT=l,this.magFilter=c,this.minFilter=f,this.anisotropy=p,this.format=d,this.internalFormat=null,this.type=m,this.offset=new Me(0,0),this.repeat=new Me(1,1),this.center=new Me(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new se,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=g,this.userData={},this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isTextureArray=!1,this.pmremVersion=0}get image(){return this.source.data}set image(t=null){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.renderTarget=t.renderTarget,this.isRenderTargetTexture=t.isRenderTargetTexture,this.isTextureArray=t.isTextureArray,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}toJSON(t){const i=t===void 0||typeof t=="string";if(!i&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];const r={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(r.userData=this.userData),i||(t.textures[this.uuid]=r),r}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==Yv)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case qh:t.x=t.x-Math.floor(t.x);break;case br:t.x=t.x<0?0:1;break;case Yh:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case qh:t.y=t.y-Math.floor(t.y);break;case br:t.y=t.y<0?0:1;break;case Yh:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}}Vn.DEFAULT_IMAGE=null;Vn.DEFAULT_MAPPING=Yv;Vn.DEFAULT_ANISOTROPY=1;class Qe{constructor(t=0,i=0,r=0,l=1){Qe.prototype.isVector4=!0,this.x=t,this.y=i,this.z=r,this.w=l}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,i,r,l){return this.x=t,this.y=i,this.z=r,this.w=l,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,i){switch(t){case 0:this.x=i;break;case 1:this.y=i;break;case 2:this.z=i;break;case 3:this.w=i;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,i){return this.x=t.x+i.x,this.y=t.y+i.y,this.z=t.z+i.z,this.w=t.w+i.w,this}addScaledVector(t,i){return this.x+=t.x*i,this.y+=t.y*i,this.z+=t.z*i,this.w+=t.w*i,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,i){return this.x=t.x-i.x,this.y=t.y-i.y,this.z=t.z-i.z,this.w=t.w-i.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){const i=this.x,r=this.y,l=this.z,c=this.w,f=t.elements;return this.x=f[0]*i+f[4]*r+f[8]*l+f[12]*c,this.y=f[1]*i+f[5]*r+f[9]*l+f[13]*c,this.z=f[2]*i+f[6]*r+f[10]*l+f[14]*c,this.w=f[3]*i+f[7]*r+f[11]*l+f[15]*c,this}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this.w/=t.w,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);const i=Math.sqrt(1-t.w*t.w);return i<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/i,this.y=t.y/i,this.z=t.z/i),this}setAxisAngleFromRotationMatrix(t){let i,r,l,c;const m=t.elements,p=m[0],g=m[4],x=m[8],v=m[1],y=m[5],E=m[9],A=m[2],S=m[6],_=m[10];if(Math.abs(g-v)<.01&&Math.abs(x-A)<.01&&Math.abs(E-S)<.01){if(Math.abs(g+v)<.1&&Math.abs(x+A)<.1&&Math.abs(E+S)<.1&&Math.abs(p+y+_-3)<.1)return this.set(1,0,0,0),this;i=Math.PI;const D=(p+1)/2,C=(y+1)/2,F=(_+1)/2,H=(g+v)/4,B=(x+A)/4,k=(E+S)/4;return D>C&&D>F?D<.01?(r=0,l=.707106781,c=.707106781):(r=Math.sqrt(D),l=H/r,c=B/r):C>F?C<.01?(r=.707106781,l=0,c=.707106781):(l=Math.sqrt(C),r=H/l,c=k/l):F<.01?(r=.707106781,l=.707106781,c=0):(c=Math.sqrt(F),r=B/c,l=k/c),this.set(r,l,c,i),this}let L=Math.sqrt((S-E)*(S-E)+(x-A)*(x-A)+(v-g)*(v-g));return Math.abs(L)<.001&&(L=1),this.x=(S-E)/L,this.y=(x-A)/L,this.z=(v-g)/L,this.w=Math.acos((p+y+_-1)/2),this}setFromMatrixPosition(t){const i=t.elements;return this.x=i[12],this.y=i[13],this.z=i[14],this.w=i[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,i){return this.x=xe(this.x,t.x,i.x),this.y=xe(this.y,t.y,i.y),this.z=xe(this.z,t.z,i.z),this.w=xe(this.w,t.w,i.w),this}clampScalar(t,i){return this.x=xe(this.x,t,i),this.y=xe(this.y,t,i),this.z=xe(this.z,t,i),this.w=xe(this.w,t,i),this}clampLength(t,i){const r=this.length();return this.divideScalar(r||1).multiplyScalar(xe(r,t,i))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,i){return this.x+=(t.x-this.x)*i,this.y+=(t.y-this.y)*i,this.z+=(t.z-this.z)*i,this.w+=(t.w-this.w)*i,this}lerpVectors(t,i,r){return this.x=t.x+(i.x-t.x)*r,this.y=t.y+(i.y-t.y)*r,this.z=t.z+(i.z-t.z)*r,this.w=t.w+(i.w-t.w)*r,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,i=0){return this.x=t[i],this.y=t[i+1],this.z=t[i+2],this.w=t[i+3],this}toArray(t=[],i=0){return t[i]=this.x,t[i+1]=this.y,t[i+2]=this.z,t[i+3]=this.w,t}fromBufferAttribute(t,i){return this.x=t.getX(i),this.y=t.getY(i),this.z=t.getZ(i),this.w=t.getW(i),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class fE extends Us{constructor(t=1,i=1,r={}){super(),this.isRenderTarget=!0,this.width=t,this.height=i,this.depth=r.depth?r.depth:1,this.scissor=new Qe(0,0,t,i),this.scissorTest=!1,this.viewport=new Qe(0,0,t,i);const l={width:t,height:i,depth:this.depth};r=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:bi,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,multiview:!1},r);const c=new Vn(l,r.mapping,r.wrapS,r.wrapT,r.magFilter,r.minFilter,r.format,r.type,r.anisotropy,r.colorSpace);c.flipY=!1,c.generateMipmaps=r.generateMipmaps,c.internalFormat=r.internalFormat,this.textures=[];const f=r.count;for(let d=0;d<f;d++)this.textures[d]=c.clone(),this.textures[d].isRenderTargetTexture=!0,this.textures[d].renderTarget=this;this.depthBuffer=r.depthBuffer,this.stencilBuffer=r.stencilBuffer,this.resolveDepthBuffer=r.resolveDepthBuffer,this.resolveStencilBuffer=r.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=r.depthTexture,this.samples=r.samples,this.multiview=r.multiview}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}set depthTexture(t){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),t!==null&&(t.renderTarget=this),this._depthTexture=t}get depthTexture(){return this._depthTexture}setSize(t,i,r=1){if(this.width!==t||this.height!==i||this.depth!==r){this.width=t,this.height=i,this.depth=r;for(let l=0,c=this.textures.length;l<c;l++)this.textures[l].image.width=t,this.textures[l].image.height=i,this.textures[l].image.depth=r;this.dispose()}this.viewport.set(0,0,t,i),this.scissor.set(0,0,t,i)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let i=0,r=t.textures.length;i<r;i++){this.textures[i]=t.textures[i].clone(),this.textures[i].isRenderTargetTexture=!0,this.textures[i].renderTarget=this;const l=Object.assign({},t.textures[i].image);this.textures[i].source=new Bd(l)}return this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,t.depthTexture!==null&&(this.depthTexture=t.depthTexture.clone()),this.samples=t.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class wr extends fE{constructor(t=1,i=1,r={}){super(t,i,r),this.isWebGLRenderTarget=!0}}class s0 extends Vn{constructor(t=null,i=1,r=1,l=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:i,height:r,depth:l},this.magFilter=_i,this.minFilter=_i,this.wrapR=br,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}}class hE extends Vn{constructor(t=null,i=1,r=1,l=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:i,height:r,depth:l},this.magFilter=_i,this.minFilter=_i,this.wrapR=br,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class qo{constructor(t=0,i=0,r=0,l=1){this.isQuaternion=!0,this._x=t,this._y=i,this._z=r,this._w=l}static slerpFlat(t,i,r,l,c,f,d){let m=r[l+0],p=r[l+1],g=r[l+2],x=r[l+3];const v=c[f+0],y=c[f+1],E=c[f+2],A=c[f+3];if(d===0){t[i+0]=m,t[i+1]=p,t[i+2]=g,t[i+3]=x;return}if(d===1){t[i+0]=v,t[i+1]=y,t[i+2]=E,t[i+3]=A;return}if(x!==A||m!==v||p!==y||g!==E){let S=1-d;const _=m*v+p*y+g*E+x*A,L=_>=0?1:-1,D=1-_*_;if(D>Number.EPSILON){const F=Math.sqrt(D),H=Math.atan2(F,_*L);S=Math.sin(S*H)/F,d=Math.sin(d*H)/F}const C=d*L;if(m=m*S+v*C,p=p*S+y*C,g=g*S+E*C,x=x*S+A*C,S===1-d){const F=1/Math.sqrt(m*m+p*p+g*g+x*x);m*=F,p*=F,g*=F,x*=F}}t[i]=m,t[i+1]=p,t[i+2]=g,t[i+3]=x}static multiplyQuaternionsFlat(t,i,r,l,c,f){const d=r[l],m=r[l+1],p=r[l+2],g=r[l+3],x=c[f],v=c[f+1],y=c[f+2],E=c[f+3];return t[i]=d*E+g*x+m*y-p*v,t[i+1]=m*E+g*v+p*x-d*y,t[i+2]=p*E+g*y+d*v-m*x,t[i+3]=g*E-d*x-m*v-p*y,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,i,r,l){return this._x=t,this._y=i,this._z=r,this._w=l,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,i=!0){const r=t._x,l=t._y,c=t._z,f=t._order,d=Math.cos,m=Math.sin,p=d(r/2),g=d(l/2),x=d(c/2),v=m(r/2),y=m(l/2),E=m(c/2);switch(f){case"XYZ":this._x=v*g*x+p*y*E,this._y=p*y*x-v*g*E,this._z=p*g*E+v*y*x,this._w=p*g*x-v*y*E;break;case"YXZ":this._x=v*g*x+p*y*E,this._y=p*y*x-v*g*E,this._z=p*g*E-v*y*x,this._w=p*g*x+v*y*E;break;case"ZXY":this._x=v*g*x-p*y*E,this._y=p*y*x+v*g*E,this._z=p*g*E+v*y*x,this._w=p*g*x-v*y*E;break;case"ZYX":this._x=v*g*x-p*y*E,this._y=p*y*x+v*g*E,this._z=p*g*E-v*y*x,this._w=p*g*x+v*y*E;break;case"YZX":this._x=v*g*x+p*y*E,this._y=p*y*x+v*g*E,this._z=p*g*E-v*y*x,this._w=p*g*x-v*y*E;break;case"XZY":this._x=v*g*x-p*y*E,this._y=p*y*x-v*g*E,this._z=p*g*E+v*y*x,this._w=p*g*x+v*y*E;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+f)}return i===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,i){const r=i/2,l=Math.sin(r);return this._x=t.x*l,this._y=t.y*l,this._z=t.z*l,this._w=Math.cos(r),this._onChangeCallback(),this}setFromRotationMatrix(t){const i=t.elements,r=i[0],l=i[4],c=i[8],f=i[1],d=i[5],m=i[9],p=i[2],g=i[6],x=i[10],v=r+d+x;if(v>0){const y=.5/Math.sqrt(v+1);this._w=.25/y,this._x=(g-m)*y,this._y=(c-p)*y,this._z=(f-l)*y}else if(r>d&&r>x){const y=2*Math.sqrt(1+r-d-x);this._w=(g-m)/y,this._x=.25*y,this._y=(l+f)/y,this._z=(c+p)/y}else if(d>x){const y=2*Math.sqrt(1+d-r-x);this._w=(c-p)/y,this._x=(l+f)/y,this._y=.25*y,this._z=(m+g)/y}else{const y=2*Math.sqrt(1+x-r-d);this._w=(f-l)/y,this._x=(c+p)/y,this._y=(m+g)/y,this._z=.25*y}return this._onChangeCallback(),this}setFromUnitVectors(t,i){let r=t.dot(i)+1;return r<Number.EPSILON?(r=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=r):(this._x=0,this._y=-t.z,this._z=t.y,this._w=r)):(this._x=t.y*i.z-t.z*i.y,this._y=t.z*i.x-t.x*i.z,this._z=t.x*i.y-t.y*i.x,this._w=r),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(xe(this.dot(t),-1,1)))}rotateTowards(t,i){const r=this.angleTo(t);if(r===0)return this;const l=Math.min(1,i/r);return this.slerp(t,l),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,i){const r=t._x,l=t._y,c=t._z,f=t._w,d=i._x,m=i._y,p=i._z,g=i._w;return this._x=r*g+f*d+l*p-c*m,this._y=l*g+f*m+c*d-r*p,this._z=c*g+f*p+r*m-l*d,this._w=f*g-r*d-l*m-c*p,this._onChangeCallback(),this}slerp(t,i){if(i===0)return this;if(i===1)return this.copy(t);const r=this._x,l=this._y,c=this._z,f=this._w;let d=f*t._w+r*t._x+l*t._y+c*t._z;if(d<0?(this._w=-t._w,this._x=-t._x,this._y=-t._y,this._z=-t._z,d=-d):this.copy(t),d>=1)return this._w=f,this._x=r,this._y=l,this._z=c,this;const m=1-d*d;if(m<=Number.EPSILON){const y=1-i;return this._w=y*f+i*this._w,this._x=y*r+i*this._x,this._y=y*l+i*this._y,this._z=y*c+i*this._z,this.normalize(),this}const p=Math.sqrt(m),g=Math.atan2(p,d),x=Math.sin((1-i)*g)/p,v=Math.sin(i*g)/p;return this._w=f*x+this._w*v,this._x=r*x+this._x*v,this._y=l*x+this._y*v,this._z=c*x+this._z*v,this._onChangeCallback(),this}slerpQuaternions(t,i,r){return this.copy(t).slerp(i,r)}random(){const t=2*Math.PI*Math.random(),i=2*Math.PI*Math.random(),r=Math.random(),l=Math.sqrt(1-r),c=Math.sqrt(r);return this.set(l*Math.sin(t),l*Math.cos(t),c*Math.sin(i),c*Math.cos(i))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,i=0){return this._x=t[i],this._y=t[i+1],this._z=t[i+2],this._w=t[i+3],this._onChangeCallback(),this}toArray(t=[],i=0){return t[i]=this._x,t[i+1]=this._y,t[i+2]=this._z,t[i+3]=this._w,t}fromBufferAttribute(t,i){return this._x=t.getX(i),this._y=t.getY(i),this._z=t.getZ(i),this._w=t.getW(i),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class et{constructor(t=0,i=0,r=0){et.prototype.isVector3=!0,this.x=t,this.y=i,this.z=r}set(t,i,r){return r===void 0&&(r=this.z),this.x=t,this.y=i,this.z=r,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,i){switch(t){case 0:this.x=i;break;case 1:this.y=i;break;case 2:this.z=i;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,i){return this.x=t.x+i.x,this.y=t.y+i.y,this.z=t.z+i.z,this}addScaledVector(t,i){return this.x+=t.x*i,this.y+=t.y*i,this.z+=t.z*i,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,i){return this.x=t.x-i.x,this.y=t.y-i.y,this.z=t.z-i.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,i){return this.x=t.x*i.x,this.y=t.y*i.y,this.z=t.z*i.z,this}applyEuler(t){return this.applyQuaternion(k_.setFromEuler(t))}applyAxisAngle(t,i){return this.applyQuaternion(k_.setFromAxisAngle(t,i))}applyMatrix3(t){const i=this.x,r=this.y,l=this.z,c=t.elements;return this.x=c[0]*i+c[3]*r+c[6]*l,this.y=c[1]*i+c[4]*r+c[7]*l,this.z=c[2]*i+c[5]*r+c[8]*l,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){const i=this.x,r=this.y,l=this.z,c=t.elements,f=1/(c[3]*i+c[7]*r+c[11]*l+c[15]);return this.x=(c[0]*i+c[4]*r+c[8]*l+c[12])*f,this.y=(c[1]*i+c[5]*r+c[9]*l+c[13])*f,this.z=(c[2]*i+c[6]*r+c[10]*l+c[14])*f,this}applyQuaternion(t){const i=this.x,r=this.y,l=this.z,c=t.x,f=t.y,d=t.z,m=t.w,p=2*(f*l-d*r),g=2*(d*i-c*l),x=2*(c*r-f*i);return this.x=i+m*p+f*x-d*g,this.y=r+m*g+d*p-c*x,this.z=l+m*x+c*g-f*p,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){const i=this.x,r=this.y,l=this.z,c=t.elements;return this.x=c[0]*i+c[4]*r+c[8]*l,this.y=c[1]*i+c[5]*r+c[9]*l,this.z=c[2]*i+c[6]*r+c[10]*l,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,i){return this.x=xe(this.x,t.x,i.x),this.y=xe(this.y,t.y,i.y),this.z=xe(this.z,t.z,i.z),this}clampScalar(t,i){return this.x=xe(this.x,t,i),this.y=xe(this.y,t,i),this.z=xe(this.z,t,i),this}clampLength(t,i){const r=this.length();return this.divideScalar(r||1).multiplyScalar(xe(r,t,i))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,i){return this.x+=(t.x-this.x)*i,this.y+=(t.y-this.y)*i,this.z+=(t.z-this.z)*i,this}lerpVectors(t,i,r){return this.x=t.x+(i.x-t.x)*r,this.y=t.y+(i.y-t.y)*r,this.z=t.z+(i.z-t.z)*r,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,i){const r=t.x,l=t.y,c=t.z,f=i.x,d=i.y,m=i.z;return this.x=l*m-c*d,this.y=c*f-r*m,this.z=r*d-l*f,this}projectOnVector(t){const i=t.lengthSq();if(i===0)return this.set(0,0,0);const r=t.dot(this)/i;return this.copy(t).multiplyScalar(r)}projectOnPlane(t){return lh.copy(this).projectOnVector(t),this.sub(lh)}reflect(t){return this.sub(lh.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){const i=Math.sqrt(this.lengthSq()*t.lengthSq());if(i===0)return Math.PI/2;const r=this.dot(t)/i;return Math.acos(xe(r,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const i=this.x-t.x,r=this.y-t.y,l=this.z-t.z;return i*i+r*r+l*l}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,i,r){const l=Math.sin(i)*t;return this.x=l*Math.sin(r),this.y=Math.cos(i)*t,this.z=l*Math.cos(r),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,i,r){return this.x=t*Math.sin(i),this.y=r,this.z=t*Math.cos(i),this}setFromMatrixPosition(t){const i=t.elements;return this.x=i[12],this.y=i[13],this.z=i[14],this}setFromMatrixScale(t){const i=this.setFromMatrixColumn(t,0).length(),r=this.setFromMatrixColumn(t,1).length(),l=this.setFromMatrixColumn(t,2).length();return this.x=i,this.y=r,this.z=l,this}setFromMatrixColumn(t,i){return this.fromArray(t.elements,i*4)}setFromMatrix3Column(t,i){return this.fromArray(t.elements,i*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,i=0){return this.x=t[i],this.y=t[i+1],this.z=t[i+2],this}toArray(t=[],i=0){return t[i]=this.x,t[i+1]=this.y,t[i+2]=this.z,t}fromBufferAttribute(t,i){return this.x=t.getX(i),this.y=t.getY(i),this.z=t.getZ(i),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const t=Math.random()*Math.PI*2,i=Math.random()*2-1,r=Math.sqrt(1-i*i);return this.x=r*Math.cos(t),this.y=i,this.z=r*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const lh=new et,k_=new qo;class Yo{constructor(t=new et(1/0,1/0,1/0),i=new et(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=i}set(t,i){return this.min.copy(t),this.max.copy(i),this}setFromArray(t){this.makeEmpty();for(let i=0,r=t.length;i<r;i+=3)this.expandByPoint(hi.fromArray(t,i));return this}setFromBufferAttribute(t){this.makeEmpty();for(let i=0,r=t.count;i<r;i++)this.expandByPoint(hi.fromBufferAttribute(t,i));return this}setFromPoints(t){this.makeEmpty();for(let i=0,r=t.length;i<r;i++)this.expandByPoint(t[i]);return this}setFromCenterAndSize(t,i){const r=hi.copy(i).multiplyScalar(.5);return this.min.copy(t).sub(r),this.max.copy(t).add(r),this}setFromObject(t,i=!1){return this.makeEmpty(),this.expandByObject(t,i)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,i=!1){t.updateWorldMatrix(!1,!1);const r=t.geometry;if(r!==void 0){const c=r.getAttribute("position");if(i===!0&&c!==void 0&&t.isInstancedMesh!==!0)for(let f=0,d=c.count;f<d;f++)t.isMesh===!0?t.getVertexPosition(f,hi):hi.fromBufferAttribute(c,f),hi.applyMatrix4(t.matrixWorld),this.expandByPoint(hi);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),lc.copy(t.boundingBox)):(r.boundingBox===null&&r.computeBoundingBox(),lc.copy(r.boundingBox)),lc.applyMatrix4(t.matrixWorld),this.union(lc)}const l=t.children;for(let c=0,f=l.length;c<f;c++)this.expandByObject(l[c],i);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,i){return i.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,hi),hi.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let i,r;return t.normal.x>0?(i=t.normal.x*this.min.x,r=t.normal.x*this.max.x):(i=t.normal.x*this.max.x,r=t.normal.x*this.min.x),t.normal.y>0?(i+=t.normal.y*this.min.y,r+=t.normal.y*this.max.y):(i+=t.normal.y*this.max.y,r+=t.normal.y*this.min.y),t.normal.z>0?(i+=t.normal.z*this.min.z,r+=t.normal.z*this.max.z):(i+=t.normal.z*this.max.z,r+=t.normal.z*this.min.z),i<=-t.constant&&r>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(Lo),cc.subVectors(this.max,Lo),cs.subVectors(t.a,Lo),us.subVectors(t.b,Lo),fs.subVectors(t.c,Lo),Ba.subVectors(us,cs),Ia.subVectors(fs,us),pr.subVectors(cs,fs);let i=[0,-Ba.z,Ba.y,0,-Ia.z,Ia.y,0,-pr.z,pr.y,Ba.z,0,-Ba.x,Ia.z,0,-Ia.x,pr.z,0,-pr.x,-Ba.y,Ba.x,0,-Ia.y,Ia.x,0,-pr.y,pr.x,0];return!ch(i,cs,us,fs,cc)||(i=[1,0,0,0,1,0,0,0,1],!ch(i,cs,us,fs,cc))?!1:(uc.crossVectors(Ba,Ia),i=[uc.x,uc.y,uc.z],ch(i,cs,us,fs,cc))}clampPoint(t,i){return i.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,hi).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(hi).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(Ji[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),Ji[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),Ji[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),Ji[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),Ji[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),Ji[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),Ji[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),Ji[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(Ji),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}}const Ji=[new et,new et,new et,new et,new et,new et,new et,new et],hi=new et,lc=new Yo,cs=new et,us=new et,fs=new et,Ba=new et,Ia=new et,pr=new et,Lo=new et,cc=new et,uc=new et,mr=new et;function ch(s,t,i,r,l){for(let c=0,f=s.length-3;c<=f;c+=3){mr.fromArray(s,c);const d=l.x*Math.abs(mr.x)+l.y*Math.abs(mr.y)+l.z*Math.abs(mr.z),m=t.dot(mr),p=i.dot(mr),g=r.dot(mr);if(Math.max(-Math.max(m,p,g),Math.min(m,p,g))>d)return!1}return!0}const dE=new Yo,No=new et,uh=new et;class Id{constructor(t=new et,i=-1){this.isSphere=!0,this.center=t,this.radius=i}set(t,i){return this.center.copy(t),this.radius=i,this}setFromPoints(t,i){const r=this.center;i!==void 0?r.copy(i):dE.setFromPoints(t).getCenter(r);let l=0;for(let c=0,f=t.length;c<f;c++)l=Math.max(l,r.distanceToSquared(t[c]));return this.radius=Math.sqrt(l),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){const i=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=i*i}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,i){const r=this.center.distanceToSquared(t);return i.copy(t),r>this.radius*this.radius&&(i.sub(this.center).normalize(),i.multiplyScalar(this.radius).add(this.center)),i}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;No.subVectors(t,this.center);const i=No.lengthSq();if(i>this.radius*this.radius){const r=Math.sqrt(i),l=(r-this.radius)*.5;this.center.addScaledVector(No,l/r),this.radius+=l}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(uh.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(No.copy(t.center).add(uh)),this.expandByPoint(No.copy(t.center).sub(uh))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}}const $i=new et,fh=new et,fc=new et,Fa=new et,hh=new et,hc=new et,dh=new et;class pE{constructor(t=new et,i=new et(0,0,-1)){this.origin=t,this.direction=i}set(t,i){return this.origin.copy(t),this.direction.copy(i),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,i){return i.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,$i)),this}closestPointToPoint(t,i){i.subVectors(t,this.origin);const r=i.dot(this.direction);return r<0?i.copy(this.origin):i.copy(this.origin).addScaledVector(this.direction,r)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){const i=$i.subVectors(t,this.origin).dot(this.direction);return i<0?this.origin.distanceToSquared(t):($i.copy(this.origin).addScaledVector(this.direction,i),$i.distanceToSquared(t))}distanceSqToSegment(t,i,r,l){fh.copy(t).add(i).multiplyScalar(.5),fc.copy(i).sub(t).normalize(),Fa.copy(this.origin).sub(fh);const c=t.distanceTo(i)*.5,f=-this.direction.dot(fc),d=Fa.dot(this.direction),m=-Fa.dot(fc),p=Fa.lengthSq(),g=Math.abs(1-f*f);let x,v,y,E;if(g>0)if(x=f*m-d,v=f*d-m,E=c*g,x>=0)if(v>=-E)if(v<=E){const A=1/g;x*=A,v*=A,y=x*(x+f*v+2*d)+v*(f*x+v+2*m)+p}else v=c,x=Math.max(0,-(f*v+d)),y=-x*x+v*(v+2*m)+p;else v=-c,x=Math.max(0,-(f*v+d)),y=-x*x+v*(v+2*m)+p;else v<=-E?(x=Math.max(0,-(-f*c+d)),v=x>0?-c:Math.min(Math.max(-c,-m),c),y=-x*x+v*(v+2*m)+p):v<=E?(x=0,v=Math.min(Math.max(-c,-m),c),y=v*(v+2*m)+p):(x=Math.max(0,-(f*c+d)),v=x>0?c:Math.min(Math.max(-c,-m),c),y=-x*x+v*(v+2*m)+p);else v=f>0?-c:c,x=Math.max(0,-(f*v+d)),y=-x*x+v*(v+2*m)+p;return r&&r.copy(this.origin).addScaledVector(this.direction,x),l&&l.copy(fh).addScaledVector(fc,v),y}intersectSphere(t,i){$i.subVectors(t.center,this.origin);const r=$i.dot(this.direction),l=$i.dot($i)-r*r,c=t.radius*t.radius;if(l>c)return null;const f=Math.sqrt(c-l),d=r-f,m=r+f;return m<0?null:d<0?this.at(m,i):this.at(d,i)}intersectsSphere(t){return this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){const i=t.normal.dot(this.direction);if(i===0)return t.distanceToPoint(this.origin)===0?0:null;const r=-(this.origin.dot(t.normal)+t.constant)/i;return r>=0?r:null}intersectPlane(t,i){const r=this.distanceToPlane(t);return r===null?null:this.at(r,i)}intersectsPlane(t){const i=t.distanceToPoint(this.origin);return i===0||t.normal.dot(this.direction)*i<0}intersectBox(t,i){let r,l,c,f,d,m;const p=1/this.direction.x,g=1/this.direction.y,x=1/this.direction.z,v=this.origin;return p>=0?(r=(t.min.x-v.x)*p,l=(t.max.x-v.x)*p):(r=(t.max.x-v.x)*p,l=(t.min.x-v.x)*p),g>=0?(c=(t.min.y-v.y)*g,f=(t.max.y-v.y)*g):(c=(t.max.y-v.y)*g,f=(t.min.y-v.y)*g),r>f||c>l||((c>r||isNaN(r))&&(r=c),(f<l||isNaN(l))&&(l=f),x>=0?(d=(t.min.z-v.z)*x,m=(t.max.z-v.z)*x):(d=(t.max.z-v.z)*x,m=(t.min.z-v.z)*x),r>m||d>l)||((d>r||r!==r)&&(r=d),(m<l||l!==l)&&(l=m),l<0)?null:this.at(r>=0?r:l,i)}intersectsBox(t){return this.intersectBox(t,$i)!==null}intersectTriangle(t,i,r,l,c){hh.subVectors(i,t),hc.subVectors(r,t),dh.crossVectors(hh,hc);let f=this.direction.dot(dh),d;if(f>0){if(l)return null;d=1}else if(f<0)d=-1,f=-f;else return null;Fa.subVectors(this.origin,t);const m=d*this.direction.dot(hc.crossVectors(Fa,hc));if(m<0)return null;const p=d*this.direction.dot(hh.cross(Fa));if(p<0||m+p>f)return null;const g=-d*Fa.dot(dh);return g<0?null:this.at(g/f,c)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class Je{constructor(t,i,r,l,c,f,d,m,p,g,x,v,y,E,A,S){Je.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,i,r,l,c,f,d,m,p,g,x,v,y,E,A,S)}set(t,i,r,l,c,f,d,m,p,g,x,v,y,E,A,S){const _=this.elements;return _[0]=t,_[4]=i,_[8]=r,_[12]=l,_[1]=c,_[5]=f,_[9]=d,_[13]=m,_[2]=p,_[6]=g,_[10]=x,_[14]=v,_[3]=y,_[7]=E,_[11]=A,_[15]=S,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Je().fromArray(this.elements)}copy(t){const i=this.elements,r=t.elements;return i[0]=r[0],i[1]=r[1],i[2]=r[2],i[3]=r[3],i[4]=r[4],i[5]=r[5],i[6]=r[6],i[7]=r[7],i[8]=r[8],i[9]=r[9],i[10]=r[10],i[11]=r[11],i[12]=r[12],i[13]=r[13],i[14]=r[14],i[15]=r[15],this}copyPosition(t){const i=this.elements,r=t.elements;return i[12]=r[12],i[13]=r[13],i[14]=r[14],this}setFromMatrix3(t){const i=t.elements;return this.set(i[0],i[3],i[6],0,i[1],i[4],i[7],0,i[2],i[5],i[8],0,0,0,0,1),this}extractBasis(t,i,r){return t.setFromMatrixColumn(this,0),i.setFromMatrixColumn(this,1),r.setFromMatrixColumn(this,2),this}makeBasis(t,i,r){return this.set(t.x,i.x,r.x,0,t.y,i.y,r.y,0,t.z,i.z,r.z,0,0,0,0,1),this}extractRotation(t){const i=this.elements,r=t.elements,l=1/hs.setFromMatrixColumn(t,0).length(),c=1/hs.setFromMatrixColumn(t,1).length(),f=1/hs.setFromMatrixColumn(t,2).length();return i[0]=r[0]*l,i[1]=r[1]*l,i[2]=r[2]*l,i[3]=0,i[4]=r[4]*c,i[5]=r[5]*c,i[6]=r[6]*c,i[7]=0,i[8]=r[8]*f,i[9]=r[9]*f,i[10]=r[10]*f,i[11]=0,i[12]=0,i[13]=0,i[14]=0,i[15]=1,this}makeRotationFromEuler(t){const i=this.elements,r=t.x,l=t.y,c=t.z,f=Math.cos(r),d=Math.sin(r),m=Math.cos(l),p=Math.sin(l),g=Math.cos(c),x=Math.sin(c);if(t.order==="XYZ"){const v=f*g,y=f*x,E=d*g,A=d*x;i[0]=m*g,i[4]=-m*x,i[8]=p,i[1]=y+E*p,i[5]=v-A*p,i[9]=-d*m,i[2]=A-v*p,i[6]=E+y*p,i[10]=f*m}else if(t.order==="YXZ"){const v=m*g,y=m*x,E=p*g,A=p*x;i[0]=v+A*d,i[4]=E*d-y,i[8]=f*p,i[1]=f*x,i[5]=f*g,i[9]=-d,i[2]=y*d-E,i[6]=A+v*d,i[10]=f*m}else if(t.order==="ZXY"){const v=m*g,y=m*x,E=p*g,A=p*x;i[0]=v-A*d,i[4]=-f*x,i[8]=E+y*d,i[1]=y+E*d,i[5]=f*g,i[9]=A-v*d,i[2]=-f*p,i[6]=d,i[10]=f*m}else if(t.order==="ZYX"){const v=f*g,y=f*x,E=d*g,A=d*x;i[0]=m*g,i[4]=E*p-y,i[8]=v*p+A,i[1]=m*x,i[5]=A*p+v,i[9]=y*p-E,i[2]=-p,i[6]=d*m,i[10]=f*m}else if(t.order==="YZX"){const v=f*m,y=f*p,E=d*m,A=d*p;i[0]=m*g,i[4]=A-v*x,i[8]=E*x+y,i[1]=x,i[5]=f*g,i[9]=-d*g,i[2]=-p*g,i[6]=y*x+E,i[10]=v-A*x}else if(t.order==="XZY"){const v=f*m,y=f*p,E=d*m,A=d*p;i[0]=m*g,i[4]=-x,i[8]=p*g,i[1]=v*x+A,i[5]=f*g,i[9]=y*x-E,i[2]=E*x-y,i[6]=d*g,i[10]=A*x+v}return i[3]=0,i[7]=0,i[11]=0,i[12]=0,i[13]=0,i[14]=0,i[15]=1,this}makeRotationFromQuaternion(t){return this.compose(mE,t,gE)}lookAt(t,i,r){const l=this.elements;return Qn.subVectors(t,i),Qn.lengthSq()===0&&(Qn.z=1),Qn.normalize(),Ha.crossVectors(r,Qn),Ha.lengthSq()===0&&(Math.abs(r.z)===1?Qn.x+=1e-4:Qn.z+=1e-4,Qn.normalize(),Ha.crossVectors(r,Qn)),Ha.normalize(),dc.crossVectors(Qn,Ha),l[0]=Ha.x,l[4]=dc.x,l[8]=Qn.x,l[1]=Ha.y,l[5]=dc.y,l[9]=Qn.y,l[2]=Ha.z,l[6]=dc.z,l[10]=Qn.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,i){const r=t.elements,l=i.elements,c=this.elements,f=r[0],d=r[4],m=r[8],p=r[12],g=r[1],x=r[5],v=r[9],y=r[13],E=r[2],A=r[6],S=r[10],_=r[14],L=r[3],D=r[7],C=r[11],F=r[15],H=l[0],B=l[4],k=l[8],U=l[12],R=l[1],V=l[5],lt=l[9],ot=l[13],xt=l[2],dt=l[6],I=l[10],K=l[14],Y=l[3],Et=l[7],P=l[11],tt=l[15];return c[0]=f*H+d*R+m*xt+p*Y,c[4]=f*B+d*V+m*dt+p*Et,c[8]=f*k+d*lt+m*I+p*P,c[12]=f*U+d*ot+m*K+p*tt,c[1]=g*H+x*R+v*xt+y*Y,c[5]=g*B+x*V+v*dt+y*Et,c[9]=g*k+x*lt+v*I+y*P,c[13]=g*U+x*ot+v*K+y*tt,c[2]=E*H+A*R+S*xt+_*Y,c[6]=E*B+A*V+S*dt+_*Et,c[10]=E*k+A*lt+S*I+_*P,c[14]=E*U+A*ot+S*K+_*tt,c[3]=L*H+D*R+C*xt+F*Y,c[7]=L*B+D*V+C*dt+F*Et,c[11]=L*k+D*lt+C*I+F*P,c[15]=L*U+D*ot+C*K+F*tt,this}multiplyScalar(t){const i=this.elements;return i[0]*=t,i[4]*=t,i[8]*=t,i[12]*=t,i[1]*=t,i[5]*=t,i[9]*=t,i[13]*=t,i[2]*=t,i[6]*=t,i[10]*=t,i[14]*=t,i[3]*=t,i[7]*=t,i[11]*=t,i[15]*=t,this}determinant(){const t=this.elements,i=t[0],r=t[4],l=t[8],c=t[12],f=t[1],d=t[5],m=t[9],p=t[13],g=t[2],x=t[6],v=t[10],y=t[14],E=t[3],A=t[7],S=t[11],_=t[15];return E*(+c*m*x-l*p*x-c*d*v+r*p*v+l*d*y-r*m*y)+A*(+i*m*y-i*p*v+c*f*v-l*f*y+l*p*g-c*m*g)+S*(+i*p*x-i*d*y-c*f*x+r*f*y+c*d*g-r*p*g)+_*(-l*d*g-i*m*x+i*d*v+l*f*x-r*f*v+r*m*g)}transpose(){const t=this.elements;let i;return i=t[1],t[1]=t[4],t[4]=i,i=t[2],t[2]=t[8],t[8]=i,i=t[6],t[6]=t[9],t[9]=i,i=t[3],t[3]=t[12],t[12]=i,i=t[7],t[7]=t[13],t[13]=i,i=t[11],t[11]=t[14],t[14]=i,this}setPosition(t,i,r){const l=this.elements;return t.isVector3?(l[12]=t.x,l[13]=t.y,l[14]=t.z):(l[12]=t,l[13]=i,l[14]=r),this}invert(){const t=this.elements,i=t[0],r=t[1],l=t[2],c=t[3],f=t[4],d=t[5],m=t[6],p=t[7],g=t[8],x=t[9],v=t[10],y=t[11],E=t[12],A=t[13],S=t[14],_=t[15],L=x*S*p-A*v*p+A*m*y-d*S*y-x*m*_+d*v*_,D=E*v*p-g*S*p-E*m*y+f*S*y+g*m*_-f*v*_,C=g*A*p-E*x*p+E*d*y-f*A*y-g*d*_+f*x*_,F=E*x*m-g*A*m-E*d*v+f*A*v+g*d*S-f*x*S,H=i*L+r*D+l*C+c*F;if(H===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const B=1/H;return t[0]=L*B,t[1]=(A*v*c-x*S*c-A*l*y+r*S*y+x*l*_-r*v*_)*B,t[2]=(d*S*c-A*m*c+A*l*p-r*S*p-d*l*_+r*m*_)*B,t[3]=(x*m*c-d*v*c-x*l*p+r*v*p+d*l*y-r*m*y)*B,t[4]=D*B,t[5]=(g*S*c-E*v*c+E*l*y-i*S*y-g*l*_+i*v*_)*B,t[6]=(E*m*c-f*S*c-E*l*p+i*S*p+f*l*_-i*m*_)*B,t[7]=(f*v*c-g*m*c+g*l*p-i*v*p-f*l*y+i*m*y)*B,t[8]=C*B,t[9]=(E*x*c-g*A*c-E*r*y+i*A*y+g*r*_-i*x*_)*B,t[10]=(f*A*c-E*d*c+E*r*p-i*A*p-f*r*_+i*d*_)*B,t[11]=(g*d*c-f*x*c-g*r*p+i*x*p+f*r*y-i*d*y)*B,t[12]=F*B,t[13]=(g*A*l-E*x*l+E*r*v-i*A*v-g*r*S+i*x*S)*B,t[14]=(E*d*l-f*A*l-E*r*m+i*A*m+f*r*S-i*d*S)*B,t[15]=(f*x*l-g*d*l+g*r*m-i*x*m-f*r*v+i*d*v)*B,this}scale(t){const i=this.elements,r=t.x,l=t.y,c=t.z;return i[0]*=r,i[4]*=l,i[8]*=c,i[1]*=r,i[5]*=l,i[9]*=c,i[2]*=r,i[6]*=l,i[10]*=c,i[3]*=r,i[7]*=l,i[11]*=c,this}getMaxScaleOnAxis(){const t=this.elements,i=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],r=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],l=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(i,r,l))}makeTranslation(t,i,r){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,i,0,0,1,r,0,0,0,1),this}makeRotationX(t){const i=Math.cos(t),r=Math.sin(t);return this.set(1,0,0,0,0,i,-r,0,0,r,i,0,0,0,0,1),this}makeRotationY(t){const i=Math.cos(t),r=Math.sin(t);return this.set(i,0,r,0,0,1,0,0,-r,0,i,0,0,0,0,1),this}makeRotationZ(t){const i=Math.cos(t),r=Math.sin(t);return this.set(i,-r,0,0,r,i,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,i){const r=Math.cos(i),l=Math.sin(i),c=1-r,f=t.x,d=t.y,m=t.z,p=c*f,g=c*d;return this.set(p*f+r,p*d-l*m,p*m+l*d,0,p*d+l*m,g*d+r,g*m-l*f,0,p*m-l*d,g*m+l*f,c*m*m+r,0,0,0,0,1),this}makeScale(t,i,r){return this.set(t,0,0,0,0,i,0,0,0,0,r,0,0,0,0,1),this}makeShear(t,i,r,l,c,f){return this.set(1,r,c,0,t,1,f,0,i,l,1,0,0,0,0,1),this}compose(t,i,r){const l=this.elements,c=i._x,f=i._y,d=i._z,m=i._w,p=c+c,g=f+f,x=d+d,v=c*p,y=c*g,E=c*x,A=f*g,S=f*x,_=d*x,L=m*p,D=m*g,C=m*x,F=r.x,H=r.y,B=r.z;return l[0]=(1-(A+_))*F,l[1]=(y+C)*F,l[2]=(E-D)*F,l[3]=0,l[4]=(y-C)*H,l[5]=(1-(v+_))*H,l[6]=(S+L)*H,l[7]=0,l[8]=(E+D)*B,l[9]=(S-L)*B,l[10]=(1-(v+A))*B,l[11]=0,l[12]=t.x,l[13]=t.y,l[14]=t.z,l[15]=1,this}decompose(t,i,r){const l=this.elements;let c=hs.set(l[0],l[1],l[2]).length();const f=hs.set(l[4],l[5],l[6]).length(),d=hs.set(l[8],l[9],l[10]).length();this.determinant()<0&&(c=-c),t.x=l[12],t.y=l[13],t.z=l[14],di.copy(this);const p=1/c,g=1/f,x=1/d;return di.elements[0]*=p,di.elements[1]*=p,di.elements[2]*=p,di.elements[4]*=g,di.elements[5]*=g,di.elements[6]*=g,di.elements[8]*=x,di.elements[9]*=x,di.elements[10]*=x,i.setFromRotationMatrix(di),r.x=c,r.y=f,r.z=d,this}makePerspective(t,i,r,l,c,f,d=sa){const m=this.elements,p=2*c/(i-t),g=2*c/(r-l),x=(i+t)/(i-t),v=(r+l)/(r-l);let y,E;if(d===sa)y=-(f+c)/(f-c),E=-2*f*c/(f-c);else if(d===Hc)y=-f/(f-c),E=-f*c/(f-c);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+d);return m[0]=p,m[4]=0,m[8]=x,m[12]=0,m[1]=0,m[5]=g,m[9]=v,m[13]=0,m[2]=0,m[6]=0,m[10]=y,m[14]=E,m[3]=0,m[7]=0,m[11]=-1,m[15]=0,this}makeOrthographic(t,i,r,l,c,f,d=sa){const m=this.elements,p=1/(i-t),g=1/(r-l),x=1/(f-c),v=(i+t)*p,y=(r+l)*g;let E,A;if(d===sa)E=(f+c)*x,A=-2*x;else if(d===Hc)E=c*x,A=-1*x;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+d);return m[0]=2*p,m[4]=0,m[8]=0,m[12]=-v,m[1]=0,m[5]=2*g,m[9]=0,m[13]=-y,m[2]=0,m[6]=0,m[10]=A,m[14]=-E,m[3]=0,m[7]=0,m[11]=0,m[15]=1,this}equals(t){const i=this.elements,r=t.elements;for(let l=0;l<16;l++)if(i[l]!==r[l])return!1;return!0}fromArray(t,i=0){for(let r=0;r<16;r++)this.elements[r]=t[r+i];return this}toArray(t=[],i=0){const r=this.elements;return t[i]=r[0],t[i+1]=r[1],t[i+2]=r[2],t[i+3]=r[3],t[i+4]=r[4],t[i+5]=r[5],t[i+6]=r[6],t[i+7]=r[7],t[i+8]=r[8],t[i+9]=r[9],t[i+10]=r[10],t[i+11]=r[11],t[i+12]=r[12],t[i+13]=r[13],t[i+14]=r[14],t[i+15]=r[15],t}}const hs=new et,di=new Je,mE=new et(0,0,0),gE=new et(1,1,1),Ha=new et,dc=new et,Qn=new et,j_=new Je,X_=new qo;class Di{constructor(t=0,i=0,r=0,l=Di.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=i,this._z=r,this._order=l}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,i,r,l=this._order){return this._x=t,this._y=i,this._z=r,this._order=l,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,i=this._order,r=!0){const l=t.elements,c=l[0],f=l[4],d=l[8],m=l[1],p=l[5],g=l[9],x=l[2],v=l[6],y=l[10];switch(i){case"XYZ":this._y=Math.asin(xe(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(-g,y),this._z=Math.atan2(-f,c)):(this._x=Math.atan2(v,p),this._z=0);break;case"YXZ":this._x=Math.asin(-xe(g,-1,1)),Math.abs(g)<.9999999?(this._y=Math.atan2(d,y),this._z=Math.atan2(m,p)):(this._y=Math.atan2(-x,c),this._z=0);break;case"ZXY":this._x=Math.asin(xe(v,-1,1)),Math.abs(v)<.9999999?(this._y=Math.atan2(-x,y),this._z=Math.atan2(-f,p)):(this._y=0,this._z=Math.atan2(m,c));break;case"ZYX":this._y=Math.asin(-xe(x,-1,1)),Math.abs(x)<.9999999?(this._x=Math.atan2(v,y),this._z=Math.atan2(m,c)):(this._x=0,this._z=Math.atan2(-f,p));break;case"YZX":this._z=Math.asin(xe(m,-1,1)),Math.abs(m)<.9999999?(this._x=Math.atan2(-g,p),this._y=Math.atan2(-x,c)):(this._x=0,this._y=Math.atan2(d,y));break;case"XZY":this._z=Math.asin(-xe(f,-1,1)),Math.abs(f)<.9999999?(this._x=Math.atan2(v,p),this._y=Math.atan2(d,c)):(this._x=Math.atan2(-g,y),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+i)}return this._order=i,r===!0&&this._onChangeCallback(),this}setFromQuaternion(t,i,r){return j_.makeRotationFromQuaternion(t),this.setFromRotationMatrix(j_,i,r)}setFromVector3(t,i=this._order){return this.set(t.x,t.y,t.z,i)}reorder(t){return X_.setFromEuler(this),this.setFromQuaternion(X_,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],i=0){return t[i]=this._x,t[i+1]=this._y,t[i+2]=this._z,t[i+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Di.DEFAULT_ORDER="XYZ";class o0{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}}let _E=0;const W_=new et,ds=new qo,ta=new Je,pc=new et,Oo=new et,vE=new et,xE=new qo,q_=new et(1,0,0),Y_=new et(0,1,0),Z_=new et(0,0,1),K_={type:"added"},yE={type:"removed"},ps={type:"childadded",child:null},ph={type:"childremoved",child:null};class Dn extends Us{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:_E++}),this.uuid=Wo(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Dn.DEFAULT_UP.clone();const t=new et,i=new Di,r=new qo,l=new et(1,1,1);function c(){r.setFromEuler(i,!1)}function f(){i.setFromQuaternion(r,void 0,!1)}i._onChange(c),r._onChange(f),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:i},quaternion:{configurable:!0,enumerable:!0,value:r},scale:{configurable:!0,enumerable:!0,value:l},modelViewMatrix:{value:new Je},normalMatrix:{value:new se}}),this.matrix=new Je,this.matrixWorld=new Je,this.matrixAutoUpdate=Dn.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=Dn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new o0,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,i){this.quaternion.setFromAxisAngle(t,i)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,i){return ds.setFromAxisAngle(t,i),this.quaternion.multiply(ds),this}rotateOnWorldAxis(t,i){return ds.setFromAxisAngle(t,i),this.quaternion.premultiply(ds),this}rotateX(t){return this.rotateOnAxis(q_,t)}rotateY(t){return this.rotateOnAxis(Y_,t)}rotateZ(t){return this.rotateOnAxis(Z_,t)}translateOnAxis(t,i){return W_.copy(t).applyQuaternion(this.quaternion),this.position.add(W_.multiplyScalar(i)),this}translateX(t){return this.translateOnAxis(q_,t)}translateY(t){return this.translateOnAxis(Y_,t)}translateZ(t){return this.translateOnAxis(Z_,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(ta.copy(this.matrixWorld).invert())}lookAt(t,i,r){t.isVector3?pc.copy(t):pc.set(t,i,r);const l=this.parent;this.updateWorldMatrix(!0,!1),Oo.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?ta.lookAt(Oo,pc,this.up):ta.lookAt(pc,Oo,this.up),this.quaternion.setFromRotationMatrix(ta),l&&(ta.extractRotation(l.matrixWorld),ds.setFromRotationMatrix(ta),this.quaternion.premultiply(ds.invert()))}add(t){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.add(arguments[i]);return this}return t===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(K_),ps.child=t,this.dispatchEvent(ps),ps.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let r=0;r<arguments.length;r++)this.remove(arguments[r]);return this}const i=this.children.indexOf(t);return i!==-1&&(t.parent=null,this.children.splice(i,1),t.dispatchEvent(yE),ph.child=t,this.dispatchEvent(ph),ph.child=null),this}removeFromParent(){const t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),ta.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),ta.multiply(t.parent.matrixWorld)),t.applyMatrix4(ta),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(K_),ps.child=t,this.dispatchEvent(ps),ps.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,i){if(this[t]===i)return this;for(let r=0,l=this.children.length;r<l;r++){const f=this.children[r].getObjectByProperty(t,i);if(f!==void 0)return f}}getObjectsByProperty(t,i,r=[]){this[t]===i&&r.push(this);const l=this.children;for(let c=0,f=l.length;c<f;c++)l[c].getObjectsByProperty(t,i,r);return r}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Oo,t,vE),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Oo,xE,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);const i=this.matrixWorld.elements;return t.set(i[8],i[9],i[10]).normalize()}raycast(){}traverse(t){t(this);const i=this.children;for(let r=0,l=i.length;r<l;r++)i[r].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);const i=this.children;for(let r=0,l=i.length;r<l;r++)i[r].traverseVisible(t)}traverseAncestors(t){const i=this.parent;i!==null&&(t(i),i.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);const i=this.children;for(let r=0,l=i.length;r<l;r++)i[r].updateMatrixWorld(t)}updateWorldMatrix(t,i){const r=this.parent;if(t===!0&&r!==null&&r.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),i===!0){const l=this.children;for(let c=0,f=l.length;c<f;c++)l[c].updateWorldMatrix(!1,!0)}}toJSON(t){const i=t===void 0||typeof t=="string",r={};i&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},r.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const l={};l.uuid=this.uuid,l.type=this.type,this.name!==""&&(l.name=this.name),this.castShadow===!0&&(l.castShadow=!0),this.receiveShadow===!0&&(l.receiveShadow=!0),this.visible===!1&&(l.visible=!1),this.frustumCulled===!1&&(l.frustumCulled=!1),this.renderOrder!==0&&(l.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(l.userData=this.userData),l.layers=this.layers.mask,l.matrix=this.matrix.toArray(),l.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(l.matrixAutoUpdate=!1),this.isInstancedMesh&&(l.type="InstancedMesh",l.count=this.count,l.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(l.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(l.type="BatchedMesh",l.perObjectFrustumCulled=this.perObjectFrustumCulled,l.sortObjects=this.sortObjects,l.drawRanges=this._drawRanges,l.reservedRanges=this._reservedRanges,l.geometryInfo=this._geometryInfo.map(d=>({...d,boundingBox:d.boundingBox?{min:d.boundingBox.min.toArray(),max:d.boundingBox.max.toArray()}:void 0,boundingSphere:d.boundingSphere?{radius:d.boundingSphere.radius,center:d.boundingSphere.center.toArray()}:void 0})),l.instanceInfo=this._instanceInfo.map(d=>({...d})),l.availableInstanceIds=this._availableInstanceIds.slice(),l.availableGeometryIds=this._availableGeometryIds.slice(),l.nextIndexStart=this._nextIndexStart,l.nextVertexStart=this._nextVertexStart,l.geometryCount=this._geometryCount,l.maxInstanceCount=this._maxInstanceCount,l.maxVertexCount=this._maxVertexCount,l.maxIndexCount=this._maxIndexCount,l.geometryInitialized=this._geometryInitialized,l.matricesTexture=this._matricesTexture.toJSON(t),l.indirectTexture=this._indirectTexture.toJSON(t),this._colorsTexture!==null&&(l.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(l.boundingSphere={center:this.boundingSphere.center.toArray(),radius:this.boundingSphere.radius}),this.boundingBox!==null&&(l.boundingBox={min:this.boundingBox.min.toArray(),max:this.boundingBox.max.toArray()}));function c(d,m){return d[m.uuid]===void 0&&(d[m.uuid]=m.toJSON(t)),m.uuid}if(this.isScene)this.background&&(this.background.isColor?l.background=this.background.toJSON():this.background.isTexture&&(l.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(l.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){l.geometry=c(t.geometries,this.geometry);const d=this.geometry.parameters;if(d!==void 0&&d.shapes!==void 0){const m=d.shapes;if(Array.isArray(m))for(let p=0,g=m.length;p<g;p++){const x=m[p];c(t.shapes,x)}else c(t.shapes,m)}}if(this.isSkinnedMesh&&(l.bindMode=this.bindMode,l.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(c(t.skeletons,this.skeleton),l.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const d=[];for(let m=0,p=this.material.length;m<p;m++)d.push(c(t.materials,this.material[m]));l.material=d}else l.material=c(t.materials,this.material);if(this.children.length>0){l.children=[];for(let d=0;d<this.children.length;d++)l.children.push(this.children[d].toJSON(t).object)}if(this.animations.length>0){l.animations=[];for(let d=0;d<this.animations.length;d++){const m=this.animations[d];l.animations.push(c(t.animations,m))}}if(i){const d=f(t.geometries),m=f(t.materials),p=f(t.textures),g=f(t.images),x=f(t.shapes),v=f(t.skeletons),y=f(t.animations),E=f(t.nodes);d.length>0&&(r.geometries=d),m.length>0&&(r.materials=m),p.length>0&&(r.textures=p),g.length>0&&(r.images=g),x.length>0&&(r.shapes=x),v.length>0&&(r.skeletons=v),y.length>0&&(r.animations=y),E.length>0&&(r.nodes=E)}return r.object=l,r;function f(d){const m=[];for(const p in d){const g=d[p];delete g.metadata,m.push(g)}return m}}clone(t){return new this.constructor().copy(this,t)}copy(t,i=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),i===!0)for(let r=0;r<t.children.length;r++){const l=t.children[r];this.add(l.clone())}return this}}Dn.DEFAULT_UP=new et(0,1,0);Dn.DEFAULT_MATRIX_AUTO_UPDATE=!0;Dn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const pi=new et,ea=new et,mh=new et,na=new et,ms=new et,gs=new et,Q_=new et,gh=new et,_h=new et,vh=new et,xh=new Qe,yh=new Qe,Sh=new Qe;class mi{constructor(t=new et,i=new et,r=new et){this.a=t,this.b=i,this.c=r}static getNormal(t,i,r,l){l.subVectors(r,i),pi.subVectors(t,i),l.cross(pi);const c=l.lengthSq();return c>0?l.multiplyScalar(1/Math.sqrt(c)):l.set(0,0,0)}static getBarycoord(t,i,r,l,c){pi.subVectors(l,i),ea.subVectors(r,i),mh.subVectors(t,i);const f=pi.dot(pi),d=pi.dot(ea),m=pi.dot(mh),p=ea.dot(ea),g=ea.dot(mh),x=f*p-d*d;if(x===0)return c.set(0,0,0),null;const v=1/x,y=(p*m-d*g)*v,E=(f*g-d*m)*v;return c.set(1-y-E,E,y)}static containsPoint(t,i,r,l){return this.getBarycoord(t,i,r,l,na)===null?!1:na.x>=0&&na.y>=0&&na.x+na.y<=1}static getInterpolation(t,i,r,l,c,f,d,m){return this.getBarycoord(t,i,r,l,na)===null?(m.x=0,m.y=0,"z"in m&&(m.z=0),"w"in m&&(m.w=0),null):(m.setScalar(0),m.addScaledVector(c,na.x),m.addScaledVector(f,na.y),m.addScaledVector(d,na.z),m)}static getInterpolatedAttribute(t,i,r,l,c,f){return xh.setScalar(0),yh.setScalar(0),Sh.setScalar(0),xh.fromBufferAttribute(t,i),yh.fromBufferAttribute(t,r),Sh.fromBufferAttribute(t,l),f.setScalar(0),f.addScaledVector(xh,c.x),f.addScaledVector(yh,c.y),f.addScaledVector(Sh,c.z),f}static isFrontFacing(t,i,r,l){return pi.subVectors(r,i),ea.subVectors(t,i),pi.cross(ea).dot(l)<0}set(t,i,r){return this.a.copy(t),this.b.copy(i),this.c.copy(r),this}setFromPointsAndIndices(t,i,r,l){return this.a.copy(t[i]),this.b.copy(t[r]),this.c.copy(t[l]),this}setFromAttributeAndIndices(t,i,r,l){return this.a.fromBufferAttribute(t,i),this.b.fromBufferAttribute(t,r),this.c.fromBufferAttribute(t,l),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return pi.subVectors(this.c,this.b),ea.subVectors(this.a,this.b),pi.cross(ea).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return mi.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,i){return mi.getBarycoord(t,this.a,this.b,this.c,i)}getInterpolation(t,i,r,l,c){return mi.getInterpolation(t,this.a,this.b,this.c,i,r,l,c)}containsPoint(t){return mi.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return mi.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,i){const r=this.a,l=this.b,c=this.c;let f,d;ms.subVectors(l,r),gs.subVectors(c,r),gh.subVectors(t,r);const m=ms.dot(gh),p=gs.dot(gh);if(m<=0&&p<=0)return i.copy(r);_h.subVectors(t,l);const g=ms.dot(_h),x=gs.dot(_h);if(g>=0&&x<=g)return i.copy(l);const v=m*x-g*p;if(v<=0&&m>=0&&g<=0)return f=m/(m-g),i.copy(r).addScaledVector(ms,f);vh.subVectors(t,c);const y=ms.dot(vh),E=gs.dot(vh);if(E>=0&&y<=E)return i.copy(c);const A=y*p-m*E;if(A<=0&&p>=0&&E<=0)return d=p/(p-E),i.copy(r).addScaledVector(gs,d);const S=g*E-y*x;if(S<=0&&x-g>=0&&y-E>=0)return Q_.subVectors(c,l),d=(x-g)/(x-g+(y-E)),i.copy(l).addScaledVector(Q_,d);const _=1/(S+A+v);return f=A*_,d=v*_,i.copy(r).addScaledVector(ms,f).addScaledVector(gs,d)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}}const l0={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Ga={h:0,s:0,l:0},mc={h:0,s:0,l:0};function Mh(s,t,i){return i<0&&(i+=1),i>1&&(i-=1),i<1/6?s+(t-s)*6*i:i<1/2?t:i<2/3?s+(t-s)*6*(2/3-i):s}class Re{constructor(t,i,r){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,i,r)}set(t,i,r){if(i===void 0&&r===void 0){const l=t;l&&l.isColor?this.copy(l):typeof l=="number"?this.setHex(l):typeof l=="string"&&this.setStyle(l)}else this.setRGB(t,i,r);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,i=oi){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,Ae.toWorkingColorSpace(this,i),this}setRGB(t,i,r,l=Ae.workingColorSpace){return this.r=t,this.g=i,this.b=r,Ae.toWorkingColorSpace(this,l),this}setHSL(t,i,r,l=Ae.workingColorSpace){if(t=nE(t,1),i=xe(i,0,1),r=xe(r,0,1),i===0)this.r=this.g=this.b=r;else{const c=r<=.5?r*(1+i):r+i-r*i,f=2*r-c;this.r=Mh(f,c,t+1/3),this.g=Mh(f,c,t),this.b=Mh(f,c,t-1/3)}return Ae.toWorkingColorSpace(this,l),this}setStyle(t,i=oi){function r(c){c!==void 0&&parseFloat(c)<1&&console.warn("THREE.Color: Alpha component of "+t+" will be ignored.")}let l;if(l=/^(\w+)\(([^\)]*)\)/.exec(t)){let c;const f=l[1],d=l[2];switch(f){case"rgb":case"rgba":if(c=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(d))return r(c[4]),this.setRGB(Math.min(255,parseInt(c[1],10))/255,Math.min(255,parseInt(c[2],10))/255,Math.min(255,parseInt(c[3],10))/255,i);if(c=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(d))return r(c[4]),this.setRGB(Math.min(100,parseInt(c[1],10))/100,Math.min(100,parseInt(c[2],10))/100,Math.min(100,parseInt(c[3],10))/100,i);break;case"hsl":case"hsla":if(c=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(d))return r(c[4]),this.setHSL(parseFloat(c[1])/360,parseFloat(c[2])/100,parseFloat(c[3])/100,i);break;default:console.warn("THREE.Color: Unknown color model "+t)}}else if(l=/^\#([A-Fa-f\d]+)$/.exec(t)){const c=l[1],f=c.length;if(f===3)return this.setRGB(parseInt(c.charAt(0),16)/15,parseInt(c.charAt(1),16)/15,parseInt(c.charAt(2),16)/15,i);if(f===6)return this.setHex(parseInt(c,16),i);console.warn("THREE.Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,i);return this}setColorName(t,i=oi){const r=l0[t.toLowerCase()];return r!==void 0?this.setHex(r,i):console.warn("THREE.Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=la(t.r),this.g=la(t.g),this.b=la(t.b),this}copyLinearToSRGB(t){return this.r=Es(t.r),this.g=Es(t.g),this.b=Es(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=oi){return Ae.fromWorkingColorSpace(Cn.copy(this),t),Math.round(xe(Cn.r*255,0,255))*65536+Math.round(xe(Cn.g*255,0,255))*256+Math.round(xe(Cn.b*255,0,255))}getHexString(t=oi){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,i=Ae.workingColorSpace){Ae.fromWorkingColorSpace(Cn.copy(this),i);const r=Cn.r,l=Cn.g,c=Cn.b,f=Math.max(r,l,c),d=Math.min(r,l,c);let m,p;const g=(d+f)/2;if(d===f)m=0,p=0;else{const x=f-d;switch(p=g<=.5?x/(f+d):x/(2-f-d),f){case r:m=(l-c)/x+(l<c?6:0);break;case l:m=(c-r)/x+2;break;case c:m=(r-l)/x+4;break}m/=6}return t.h=m,t.s=p,t.l=g,t}getRGB(t,i=Ae.workingColorSpace){return Ae.fromWorkingColorSpace(Cn.copy(this),i),t.r=Cn.r,t.g=Cn.g,t.b=Cn.b,t}getStyle(t=oi){Ae.fromWorkingColorSpace(Cn.copy(this),t);const i=Cn.r,r=Cn.g,l=Cn.b;return t!==oi?`color(${t} ${i.toFixed(3)} ${r.toFixed(3)} ${l.toFixed(3)})`:`rgb(${Math.round(i*255)},${Math.round(r*255)},${Math.round(l*255)})`}offsetHSL(t,i,r){return this.getHSL(Ga),this.setHSL(Ga.h+t,Ga.s+i,Ga.l+r)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,i){return this.r=t.r+i.r,this.g=t.g+i.g,this.b=t.b+i.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,i){return this.r+=(t.r-this.r)*i,this.g+=(t.g-this.g)*i,this.b+=(t.b-this.b)*i,this}lerpColors(t,i,r){return this.r=t.r+(i.r-t.r)*r,this.g=t.g+(i.g-t.g)*r,this.b=t.b+(i.b-t.b)*r,this}lerpHSL(t,i){this.getHSL(Ga),t.getHSL(mc);const r=rh(Ga.h,mc.h,i),l=rh(Ga.s,mc.s,i),c=rh(Ga.l,mc.l,i);return this.setHSL(r,l,c),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){const i=this.r,r=this.g,l=this.b,c=t.elements;return this.r=c[0]*i+c[3]*r+c[6]*l,this.g=c[1]*i+c[4]*r+c[7]*l,this.b=c[2]*i+c[5]*r+c[8]*l,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,i=0){return this.r=t[i],this.g=t[i+1],this.b=t[i+2],this}toArray(t=[],i=0){return t[i]=this.r,t[i+1]=this.g,t[i+2]=this.b,t}fromBufferAttribute(t,i){return this.r=t.getX(i),this.g=t.getY(i),this.b=t.getZ(i),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Cn=new Re;Re.NAMES=l0;let SE=0;class Zo extends Us{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:SE++}),this.uuid=Wo(),this.name="",this.type="Material",this.blending=Ms,this.side=qa,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=zh,this.blendDst=Bh,this.blendEquation=Er,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Re(0,0,0),this.blendAlpha=0,this.depthFunc=Ts,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=B_,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=os,this.stencilZFail=os,this.stencilZPass=os,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(const i in t){const r=t[i];if(r===void 0){console.warn(`THREE.Material: parameter '${i}' has value of undefined.`);continue}const l=this[i];if(l===void 0){console.warn(`THREE.Material: '${i}' is not a property of THREE.${this.type}.`);continue}l&&l.isColor?l.set(r):l&&l.isVector3&&r&&r.isVector3?l.copy(r):this[i]=r}}toJSON(t){const i=t===void 0||typeof t=="string";i&&(t={textures:{},images:{}});const r={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.color&&this.color.isColor&&(r.color=this.color.getHex()),this.roughness!==void 0&&(r.roughness=this.roughness),this.metalness!==void 0&&(r.metalness=this.metalness),this.sheen!==void 0&&(r.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(r.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(r.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(r.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(r.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(r.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(r.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(r.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(r.shininess=this.shininess),this.clearcoat!==void 0&&(r.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(r.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(r.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(r.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(r.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,r.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(r.dispersion=this.dispersion),this.iridescence!==void 0&&(r.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(r.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(r.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(r.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(r.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(r.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(r.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(r.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(r.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(r.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(r.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(r.lightMap=this.lightMap.toJSON(t).uuid,r.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(r.aoMap=this.aoMap.toJSON(t).uuid,r.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(r.bumpMap=this.bumpMap.toJSON(t).uuid,r.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(r.normalMap=this.normalMap.toJSON(t).uuid,r.normalMapType=this.normalMapType,r.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(r.displacementMap=this.displacementMap.toJSON(t).uuid,r.displacementScale=this.displacementScale,r.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(r.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(r.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(r.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(r.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(r.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(r.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(r.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(r.combine=this.combine)),this.envMapRotation!==void 0&&(r.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(r.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(r.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(r.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(r.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(r.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(r.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(r.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(r.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(r.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(r.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(r.size=this.size),this.shadowSide!==null&&(r.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(r.sizeAttenuation=this.sizeAttenuation),this.blending!==Ms&&(r.blending=this.blending),this.side!==qa&&(r.side=this.side),this.vertexColors===!0&&(r.vertexColors=!0),this.opacity<1&&(r.opacity=this.opacity),this.transparent===!0&&(r.transparent=!0),this.blendSrc!==zh&&(r.blendSrc=this.blendSrc),this.blendDst!==Bh&&(r.blendDst=this.blendDst),this.blendEquation!==Er&&(r.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(r.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(r.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(r.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(r.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(r.blendAlpha=this.blendAlpha),this.depthFunc!==Ts&&(r.depthFunc=this.depthFunc),this.depthTest===!1&&(r.depthTest=this.depthTest),this.depthWrite===!1&&(r.depthWrite=this.depthWrite),this.colorWrite===!1&&(r.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(r.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==B_&&(r.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(r.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(r.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==os&&(r.stencilFail=this.stencilFail),this.stencilZFail!==os&&(r.stencilZFail=this.stencilZFail),this.stencilZPass!==os&&(r.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(r.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(r.rotation=this.rotation),this.polygonOffset===!0&&(r.polygonOffset=!0),this.polygonOffsetFactor!==0&&(r.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(r.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(r.linewidth=this.linewidth),this.dashSize!==void 0&&(r.dashSize=this.dashSize),this.gapSize!==void 0&&(r.gapSize=this.gapSize),this.scale!==void 0&&(r.scale=this.scale),this.dithering===!0&&(r.dithering=!0),this.alphaTest>0&&(r.alphaTest=this.alphaTest),this.alphaHash===!0&&(r.alphaHash=!0),this.alphaToCoverage===!0&&(r.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(r.premultipliedAlpha=!0),this.forceSinglePass===!0&&(r.forceSinglePass=!0),this.wireframe===!0&&(r.wireframe=!0),this.wireframeLinewidth>1&&(r.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(r.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(r.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(r.flatShading=!0),this.visible===!1&&(r.visible=!1),this.toneMapped===!1&&(r.toneMapped=!1),this.fog===!1&&(r.fog=!1),Object.keys(this.userData).length>0&&(r.userData=this.userData);function l(c){const f=[];for(const d in c){const m=c[d];delete m.metadata,f.push(m)}return f}if(i){const c=l(t.textures),f=l(t.images);c.length>0&&(r.textures=c),f.length>0&&(r.images=f)}return r}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;const i=t.clippingPlanes;let r=null;if(i!==null){const l=i.length;r=new Array(l);for(let c=0;c!==l;++c)r[c]=i[c].clone()}return this.clippingPlanes=r,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}}class c0 extends Zo{constructor(t){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Re(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Di,this.combine=Dd,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}}const sn=new et,gc=new Me;let ME=0;class Ri{constructor(t,i,r=!1){if(Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:ME++}),this.name="",this.array=t,this.itemSize=i,this.count=t!==void 0?t.length/i:0,this.normalized=r,this.usage=I_,this.updateRanges=[],this.gpuType=ra,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,i){this.updateRanges.push({start:t,count:i})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,i,r){t*=this.itemSize,r*=i.itemSize;for(let l=0,c=this.itemSize;l<c;l++)this.array[t+l]=i.array[r+l];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let i=0,r=this.count;i<r;i++)gc.fromBufferAttribute(this,i),gc.applyMatrix3(t),this.setXY(i,gc.x,gc.y);else if(this.itemSize===3)for(let i=0,r=this.count;i<r;i++)sn.fromBufferAttribute(this,i),sn.applyMatrix3(t),this.setXYZ(i,sn.x,sn.y,sn.z);return this}applyMatrix4(t){for(let i=0,r=this.count;i<r;i++)sn.fromBufferAttribute(this,i),sn.applyMatrix4(t),this.setXYZ(i,sn.x,sn.y,sn.z);return this}applyNormalMatrix(t){for(let i=0,r=this.count;i<r;i++)sn.fromBufferAttribute(this,i),sn.applyNormalMatrix(t),this.setXYZ(i,sn.x,sn.y,sn.z);return this}transformDirection(t){for(let i=0,r=this.count;i<r;i++)sn.fromBufferAttribute(this,i),sn.transformDirection(t),this.setXYZ(i,sn.x,sn.y,sn.z);return this}set(t,i=0){return this.array.set(t,i),this}getComponent(t,i){let r=this.array[t*this.itemSize+i];return this.normalized&&(r=Uo(r,this.array)),r}setComponent(t,i,r){return this.normalized&&(r=Hn(r,this.array)),this.array[t*this.itemSize+i]=r,this}getX(t){let i=this.array[t*this.itemSize];return this.normalized&&(i=Uo(i,this.array)),i}setX(t,i){return this.normalized&&(i=Hn(i,this.array)),this.array[t*this.itemSize]=i,this}getY(t){let i=this.array[t*this.itemSize+1];return this.normalized&&(i=Uo(i,this.array)),i}setY(t,i){return this.normalized&&(i=Hn(i,this.array)),this.array[t*this.itemSize+1]=i,this}getZ(t){let i=this.array[t*this.itemSize+2];return this.normalized&&(i=Uo(i,this.array)),i}setZ(t,i){return this.normalized&&(i=Hn(i,this.array)),this.array[t*this.itemSize+2]=i,this}getW(t){let i=this.array[t*this.itemSize+3];return this.normalized&&(i=Uo(i,this.array)),i}setW(t,i){return this.normalized&&(i=Hn(i,this.array)),this.array[t*this.itemSize+3]=i,this}setXY(t,i,r){return t*=this.itemSize,this.normalized&&(i=Hn(i,this.array),r=Hn(r,this.array)),this.array[t+0]=i,this.array[t+1]=r,this}setXYZ(t,i,r,l){return t*=this.itemSize,this.normalized&&(i=Hn(i,this.array),r=Hn(r,this.array),l=Hn(l,this.array)),this.array[t+0]=i,this.array[t+1]=r,this.array[t+2]=l,this}setXYZW(t,i,r,l,c){return t*=this.itemSize,this.normalized&&(i=Hn(i,this.array),r=Hn(r,this.array),l=Hn(l,this.array),c=Hn(c,this.array)),this.array[t+0]=i,this.array[t+1]=r,this.array[t+2]=l,this.array[t+3]=c,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(t.name=this.name),this.usage!==I_&&(t.usage=this.usage),t}}class u0 extends Ri{constructor(t,i,r){super(new Uint16Array(t),i,r)}}class f0 extends Ri{constructor(t,i,r){super(new Uint32Array(t),i,r)}}class Un extends Ri{constructor(t,i,r){super(new Float32Array(t),i,r)}}let EE=0;const si=new Je,Eh=new Dn,_s=new et,Jn=new Yo,Po=new Yo,vn=new et;class Li extends Us{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:EE++}),this.uuid=Wo(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(r0(t)?f0:u0)(t,1):this.index=t,this}setIndirect(t){return this.indirect=t,this}getIndirect(){return this.indirect}getAttribute(t){return this.attributes[t]}setAttribute(t,i){return this.attributes[t]=i,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,i,r=0){this.groups.push({start:t,count:i,materialIndex:r})}clearGroups(){this.groups=[]}setDrawRange(t,i){this.drawRange.start=t,this.drawRange.count=i}applyMatrix4(t){const i=this.attributes.position;i!==void 0&&(i.applyMatrix4(t),i.needsUpdate=!0);const r=this.attributes.normal;if(r!==void 0){const c=new se().getNormalMatrix(t);r.applyNormalMatrix(c),r.needsUpdate=!0}const l=this.attributes.tangent;return l!==void 0&&(l.transformDirection(t),l.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(t){return si.makeRotationFromQuaternion(t),this.applyMatrix4(si),this}rotateX(t){return si.makeRotationX(t),this.applyMatrix4(si),this}rotateY(t){return si.makeRotationY(t),this.applyMatrix4(si),this}rotateZ(t){return si.makeRotationZ(t),this.applyMatrix4(si),this}translate(t,i,r){return si.makeTranslation(t,i,r),this.applyMatrix4(si),this}scale(t,i,r){return si.makeScale(t,i,r),this.applyMatrix4(si),this}lookAt(t){return Eh.lookAt(t),Eh.updateMatrix(),this.applyMatrix4(Eh.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(_s).negate(),this.translate(_s.x,_s.y,_s.z),this}setFromPoints(t){const i=this.getAttribute("position");if(i===void 0){const r=[];for(let l=0,c=t.length;l<c;l++){const f=t[l];r.push(f.x,f.y,f.z||0)}this.setAttribute("position",new Un(r,3))}else{const r=Math.min(t.length,i.count);for(let l=0;l<r;l++){const c=t[l];i.setXYZ(l,c.x,c.y,c.z||0)}t.length>i.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),i.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Yo);const t=this.attributes.position,i=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new et(-1/0,-1/0,-1/0),new et(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),i)for(let r=0,l=i.length;r<l;r++){const c=i[r];Jn.setFromBufferAttribute(c),this.morphTargetsRelative?(vn.addVectors(this.boundingBox.min,Jn.min),this.boundingBox.expandByPoint(vn),vn.addVectors(this.boundingBox.max,Jn.max),this.boundingBox.expandByPoint(vn)):(this.boundingBox.expandByPoint(Jn.min),this.boundingBox.expandByPoint(Jn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Id);const t=this.attributes.position,i=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new et,1/0);return}if(t){const r=this.boundingSphere.center;if(Jn.setFromBufferAttribute(t),i)for(let c=0,f=i.length;c<f;c++){const d=i[c];Po.setFromBufferAttribute(d),this.morphTargetsRelative?(vn.addVectors(Jn.min,Po.min),Jn.expandByPoint(vn),vn.addVectors(Jn.max,Po.max),Jn.expandByPoint(vn)):(Jn.expandByPoint(Po.min),Jn.expandByPoint(Po.max))}Jn.getCenter(r);let l=0;for(let c=0,f=t.count;c<f;c++)vn.fromBufferAttribute(t,c),l=Math.max(l,r.distanceToSquared(vn));if(i)for(let c=0,f=i.length;c<f;c++){const d=i[c],m=this.morphTargetsRelative;for(let p=0,g=d.count;p<g;p++)vn.fromBufferAttribute(d,p),m&&(_s.fromBufferAttribute(t,p),vn.add(_s)),l=Math.max(l,r.distanceToSquared(vn))}this.boundingSphere.radius=Math.sqrt(l),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const t=this.index,i=this.attributes;if(t===null||i.position===void 0||i.normal===void 0||i.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const r=i.position,l=i.normal,c=i.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Ri(new Float32Array(4*r.count),4));const f=this.getAttribute("tangent"),d=[],m=[];for(let k=0;k<r.count;k++)d[k]=new et,m[k]=new et;const p=new et,g=new et,x=new et,v=new Me,y=new Me,E=new Me,A=new et,S=new et;function _(k,U,R){p.fromBufferAttribute(r,k),g.fromBufferAttribute(r,U),x.fromBufferAttribute(r,R),v.fromBufferAttribute(c,k),y.fromBufferAttribute(c,U),E.fromBufferAttribute(c,R),g.sub(p),x.sub(p),y.sub(v),E.sub(v);const V=1/(y.x*E.y-E.x*y.y);isFinite(V)&&(A.copy(g).multiplyScalar(E.y).addScaledVector(x,-y.y).multiplyScalar(V),S.copy(x).multiplyScalar(y.x).addScaledVector(g,-E.x).multiplyScalar(V),d[k].add(A),d[U].add(A),d[R].add(A),m[k].add(S),m[U].add(S),m[R].add(S))}let L=this.groups;L.length===0&&(L=[{start:0,count:t.count}]);for(let k=0,U=L.length;k<U;++k){const R=L[k],V=R.start,lt=R.count;for(let ot=V,xt=V+lt;ot<xt;ot+=3)_(t.getX(ot+0),t.getX(ot+1),t.getX(ot+2))}const D=new et,C=new et,F=new et,H=new et;function B(k){F.fromBufferAttribute(l,k),H.copy(F);const U=d[k];D.copy(U),D.sub(F.multiplyScalar(F.dot(U))).normalize(),C.crossVectors(H,U);const V=C.dot(m[k])<0?-1:1;f.setXYZW(k,D.x,D.y,D.z,V)}for(let k=0,U=L.length;k<U;++k){const R=L[k],V=R.start,lt=R.count;for(let ot=V,xt=V+lt;ot<xt;ot+=3)B(t.getX(ot+0)),B(t.getX(ot+1)),B(t.getX(ot+2))}}computeVertexNormals(){const t=this.index,i=this.getAttribute("position");if(i!==void 0){let r=this.getAttribute("normal");if(r===void 0)r=new Ri(new Float32Array(i.count*3),3),this.setAttribute("normal",r);else for(let v=0,y=r.count;v<y;v++)r.setXYZ(v,0,0,0);const l=new et,c=new et,f=new et,d=new et,m=new et,p=new et,g=new et,x=new et;if(t)for(let v=0,y=t.count;v<y;v+=3){const E=t.getX(v+0),A=t.getX(v+1),S=t.getX(v+2);l.fromBufferAttribute(i,E),c.fromBufferAttribute(i,A),f.fromBufferAttribute(i,S),g.subVectors(f,c),x.subVectors(l,c),g.cross(x),d.fromBufferAttribute(r,E),m.fromBufferAttribute(r,A),p.fromBufferAttribute(r,S),d.add(g),m.add(g),p.add(g),r.setXYZ(E,d.x,d.y,d.z),r.setXYZ(A,m.x,m.y,m.z),r.setXYZ(S,p.x,p.y,p.z)}else for(let v=0,y=i.count;v<y;v+=3)l.fromBufferAttribute(i,v+0),c.fromBufferAttribute(i,v+1),f.fromBufferAttribute(i,v+2),g.subVectors(f,c),x.subVectors(l,c),g.cross(x),r.setXYZ(v+0,g.x,g.y,g.z),r.setXYZ(v+1,g.x,g.y,g.z),r.setXYZ(v+2,g.x,g.y,g.z);this.normalizeNormals(),r.needsUpdate=!0}}normalizeNormals(){const t=this.attributes.normal;for(let i=0,r=t.count;i<r;i++)vn.fromBufferAttribute(t,i),vn.normalize(),t.setXYZ(i,vn.x,vn.y,vn.z)}toNonIndexed(){function t(d,m){const p=d.array,g=d.itemSize,x=d.normalized,v=new p.constructor(m.length*g);let y=0,E=0;for(let A=0,S=m.length;A<S;A++){d.isInterleavedBufferAttribute?y=m[A]*d.data.stride+d.offset:y=m[A]*g;for(let _=0;_<g;_++)v[E++]=p[y++]}return new Ri(v,g,x)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const i=new Li,r=this.index.array,l=this.attributes;for(const d in l){const m=l[d],p=t(m,r);i.setAttribute(d,p)}const c=this.morphAttributes;for(const d in c){const m=[],p=c[d];for(let g=0,x=p.length;g<x;g++){const v=p[g],y=t(v,r);m.push(y)}i.morphAttributes[d]=m}i.morphTargetsRelative=this.morphTargetsRelative;const f=this.groups;for(let d=0,m=f.length;d<m;d++){const p=f[d];i.addGroup(p.start,p.count,p.materialIndex)}return i}toJSON(){const t={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.type,this.name!==""&&(t.name=this.name),Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0){const m=this.parameters;for(const p in m)m[p]!==void 0&&(t[p]=m[p]);return t}t.data={attributes:{}};const i=this.index;i!==null&&(t.data.index={type:i.array.constructor.name,array:Array.prototype.slice.call(i.array)});const r=this.attributes;for(const m in r){const p=r[m];t.data.attributes[m]=p.toJSON(t.data)}const l={};let c=!1;for(const m in this.morphAttributes){const p=this.morphAttributes[m],g=[];for(let x=0,v=p.length;x<v;x++){const y=p[x];g.push(y.toJSON(t.data))}g.length>0&&(l[m]=g,c=!0)}c&&(t.data.morphAttributes=l,t.data.morphTargetsRelative=this.morphTargetsRelative);const f=this.groups;f.length>0&&(t.data.groups=JSON.parse(JSON.stringify(f)));const d=this.boundingSphere;return d!==null&&(t.data.boundingSphere={center:d.center.toArray(),radius:d.radius}),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const i={};this.name=t.name;const r=t.index;r!==null&&this.setIndex(r.clone());const l=t.attributes;for(const p in l){const g=l[p];this.setAttribute(p,g.clone(i))}const c=t.morphAttributes;for(const p in c){const g=[],x=c[p];for(let v=0,y=x.length;v<y;v++)g.push(x[v].clone(i));this.morphAttributes[p]=g}this.morphTargetsRelative=t.morphTargetsRelative;const f=t.groups;for(let p=0,g=f.length;p<g;p++){const x=f[p];this.addGroup(x.start,x.count,x.materialIndex)}const d=t.boundingBox;d!==null&&(this.boundingBox=d.clone());const m=t.boundingSphere;return m!==null&&(this.boundingSphere=m.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const J_=new Je,gr=new pE,_c=new Id,$_=new et,vc=new et,xc=new et,yc=new et,Th=new et,Sc=new et,tv=new et,Mc=new et;class Ai extends Dn{constructor(t=new Li,i=new c0){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=i,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(t,i){return super.copy(t,i),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){const i=this.geometry.morphAttributes,r=Object.keys(i);if(r.length>0){const l=i[r[0]];if(l!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let c=0,f=l.length;c<f;c++){const d=l[c].name||String(c);this.morphTargetInfluences.push(0),this.morphTargetDictionary[d]=c}}}}getVertexPosition(t,i){const r=this.geometry,l=r.attributes.position,c=r.morphAttributes.position,f=r.morphTargetsRelative;i.fromBufferAttribute(l,t);const d=this.morphTargetInfluences;if(c&&d){Sc.set(0,0,0);for(let m=0,p=c.length;m<p;m++){const g=d[m],x=c[m];g!==0&&(Th.fromBufferAttribute(x,t),f?Sc.addScaledVector(Th,g):Sc.addScaledVector(Th.sub(i),g))}i.add(Sc)}return i}raycast(t,i){const r=this.geometry,l=this.material,c=this.matrixWorld;l!==void 0&&(r.boundingSphere===null&&r.computeBoundingSphere(),_c.copy(r.boundingSphere),_c.applyMatrix4(c),gr.copy(t.ray).recast(t.near),!(_c.containsPoint(gr.origin)===!1&&(gr.intersectSphere(_c,$_)===null||gr.origin.distanceToSquared($_)>(t.far-t.near)**2))&&(J_.copy(c).invert(),gr.copy(t.ray).applyMatrix4(J_),!(r.boundingBox!==null&&gr.intersectsBox(r.boundingBox)===!1)&&this._computeIntersections(t,i,gr)))}_computeIntersections(t,i,r){let l;const c=this.geometry,f=this.material,d=c.index,m=c.attributes.position,p=c.attributes.uv,g=c.attributes.uv1,x=c.attributes.normal,v=c.groups,y=c.drawRange;if(d!==null)if(Array.isArray(f))for(let E=0,A=v.length;E<A;E++){const S=v[E],_=f[S.materialIndex],L=Math.max(S.start,y.start),D=Math.min(d.count,Math.min(S.start+S.count,y.start+y.count));for(let C=L,F=D;C<F;C+=3){const H=d.getX(C),B=d.getX(C+1),k=d.getX(C+2);l=Ec(this,_,t,r,p,g,x,H,B,k),l&&(l.faceIndex=Math.floor(C/3),l.face.materialIndex=S.materialIndex,i.push(l))}}else{const E=Math.max(0,y.start),A=Math.min(d.count,y.start+y.count);for(let S=E,_=A;S<_;S+=3){const L=d.getX(S),D=d.getX(S+1),C=d.getX(S+2);l=Ec(this,f,t,r,p,g,x,L,D,C),l&&(l.faceIndex=Math.floor(S/3),i.push(l))}}else if(m!==void 0)if(Array.isArray(f))for(let E=0,A=v.length;E<A;E++){const S=v[E],_=f[S.materialIndex],L=Math.max(S.start,y.start),D=Math.min(m.count,Math.min(S.start+S.count,y.start+y.count));for(let C=L,F=D;C<F;C+=3){const H=C,B=C+1,k=C+2;l=Ec(this,_,t,r,p,g,x,H,B,k),l&&(l.faceIndex=Math.floor(C/3),l.face.materialIndex=S.materialIndex,i.push(l))}}else{const E=Math.max(0,y.start),A=Math.min(m.count,y.start+y.count);for(let S=E,_=A;S<_;S+=3){const L=S,D=S+1,C=S+2;l=Ec(this,f,t,r,p,g,x,L,D,C),l&&(l.faceIndex=Math.floor(S/3),i.push(l))}}}}function TE(s,t,i,r,l,c,f,d){let m;if(t.side===Gn?m=r.intersectTriangle(f,c,l,!0,d):m=r.intersectTriangle(l,c,f,t.side===qa,d),m===null)return null;Mc.copy(d),Mc.applyMatrix4(s.matrixWorld);const p=i.ray.origin.distanceTo(Mc);return p<i.near||p>i.far?null:{distance:p,point:Mc.clone(),object:s}}function Ec(s,t,i,r,l,c,f,d,m,p){s.getVertexPosition(d,vc),s.getVertexPosition(m,xc),s.getVertexPosition(p,yc);const g=TE(s,t,i,r,vc,xc,yc,tv);if(g){const x=new et;mi.getBarycoord(tv,vc,xc,yc,x),l&&(g.uv=mi.getInterpolatedAttribute(l,d,m,p,x,new Me)),c&&(g.uv1=mi.getInterpolatedAttribute(c,d,m,p,x,new Me)),f&&(g.normal=mi.getInterpolatedAttribute(f,d,m,p,x,new et),g.normal.dot(r.direction)>0&&g.normal.multiplyScalar(-1));const v={a:d,b:m,c:p,normal:new et,materialIndex:0};mi.getNormal(vc,xc,yc,v.normal),g.face=v,g.barycoord=x}return g}class Ls extends Li{constructor(t=1,i=1,r=1,l=1,c=1,f=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:i,depth:r,widthSegments:l,heightSegments:c,depthSegments:f};const d=this;l=Math.floor(l),c=Math.floor(c),f=Math.floor(f);const m=[],p=[],g=[],x=[];let v=0,y=0;E("z","y","x",-1,-1,r,i,t,f,c,0),E("z","y","x",1,-1,r,i,-t,f,c,1),E("x","z","y",1,1,t,r,i,l,f,2),E("x","z","y",1,-1,t,r,-i,l,f,3),E("x","y","z",1,-1,t,i,r,l,c,4),E("x","y","z",-1,-1,t,i,-r,l,c,5),this.setIndex(m),this.setAttribute("position",new Un(p,3)),this.setAttribute("normal",new Un(g,3)),this.setAttribute("uv",new Un(x,2));function E(A,S,_,L,D,C,F,H,B,k,U){const R=C/B,V=F/k,lt=C/2,ot=F/2,xt=H/2,dt=B+1,I=k+1;let K=0,Y=0;const Et=new et;for(let P=0;P<I;P++){const tt=P*V-ot;for(let yt=0;yt<dt;yt++){const Mt=yt*R-lt;Et[A]=Mt*L,Et[S]=tt*D,Et[_]=xt,p.push(Et.x,Et.y,Et.z),Et[A]=0,Et[S]=0,Et[_]=H>0?1:-1,g.push(Et.x,Et.y,Et.z),x.push(yt/B),x.push(1-P/k),K+=1}}for(let P=0;P<k;P++)for(let tt=0;tt<B;tt++){const yt=v+tt+dt*P,Mt=v+tt+dt*(P+1),J=v+(tt+1)+dt*(P+1),mt=v+(tt+1)+dt*P;m.push(yt,Mt,mt),m.push(Mt,J,mt),Y+=6}d.addGroup(y,Y,U),y+=Y,v+=K}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Ls(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}}function ws(s){const t={};for(const i in s){t[i]={};for(const r in s[i]){const l=s[i][r];l&&(l.isColor||l.isMatrix3||l.isMatrix4||l.isVector2||l.isVector3||l.isVector4||l.isTexture||l.isQuaternion)?l.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[i][r]=null):t[i][r]=l.clone():Array.isArray(l)?t[i][r]=l.slice():t[i][r]=l}}return t}function Nn(s){const t={};for(let i=0;i<s.length;i++){const r=ws(s[i]);for(const l in r)t[l]=r[l]}return t}function bE(s){const t=[];for(let i=0;i<s.length;i++)t.push(s[i].clone());return t}function h0(s){const t=s.getRenderTarget();return t===null?s.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:Ae.workingColorSpace}const AE={clone:ws,merge:Nn};var RE=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,wE=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Ya extends Zo{constructor(t){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=RE,this.fragmentShader=wE,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=ws(t.uniforms),this.uniformsGroups=bE(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this}toJSON(t){const i=super.toJSON(t);i.glslVersion=this.glslVersion,i.uniforms={};for(const l in this.uniforms){const f=this.uniforms[l].value;f&&f.isTexture?i.uniforms[l]={type:"t",value:f.toJSON(t).uuid}:f&&f.isColor?i.uniforms[l]={type:"c",value:f.getHex()}:f&&f.isVector2?i.uniforms[l]={type:"v2",value:f.toArray()}:f&&f.isVector3?i.uniforms[l]={type:"v3",value:f.toArray()}:f&&f.isVector4?i.uniforms[l]={type:"v4",value:f.toArray()}:f&&f.isMatrix3?i.uniforms[l]={type:"m3",value:f.toArray()}:f&&f.isMatrix4?i.uniforms[l]={type:"m4",value:f.toArray()}:i.uniforms[l]={value:f}}Object.keys(this.defines).length>0&&(i.defines=this.defines),i.vertexShader=this.vertexShader,i.fragmentShader=this.fragmentShader,i.lights=this.lights,i.clipping=this.clipping;const r={};for(const l in this.extensions)this.extensions[l]===!0&&(r[l]=!0);return Object.keys(r).length>0&&(i.extensions=r),i}}class d0 extends Dn{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Je,this.projectionMatrix=new Je,this.projectionMatrixInverse=new Je,this.coordinateSystem=sa}copy(t,i){return super.copy(t,i),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(t,i){super.updateWorldMatrix(t,i),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const Va=new et,ev=new Me,nv=new Me;class li extends d0{constructor(t=50,i=1,r=.1,l=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=r,this.far=l,this.focus=10,this.aspect=i,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,i){return super.copy(t,i),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){const i=.5*this.getFilmHeight()/t;this.fov=Sd*2*Math.atan(i),this.updateProjectionMatrix()}getFocalLength(){const t=Math.tan(ah*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return Sd*2*Math.atan(Math.tan(ah*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,i,r){Va.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(Va.x,Va.y).multiplyScalar(-t/Va.z),Va.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),r.set(Va.x,Va.y).multiplyScalar(-t/Va.z)}getViewSize(t,i){return this.getViewBounds(t,ev,nv),i.subVectors(nv,ev)}setViewOffset(t,i,r,l,c,f){this.aspect=t/i,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=i,this.view.offsetX=r,this.view.offsetY=l,this.view.width=c,this.view.height=f,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=this.near;let i=t*Math.tan(ah*.5*this.fov)/this.zoom,r=2*i,l=this.aspect*r,c=-.5*l;const f=this.view;if(this.view!==null&&this.view.enabled){const m=f.fullWidth,p=f.fullHeight;c+=f.offsetX*l/m,i-=f.offsetY*r/p,l*=f.width/m,r*=f.height/p}const d=this.filmOffset;d!==0&&(c+=t*d/this.getFilmWidth()),this.projectionMatrix.makePerspective(c,c+l,i,i-r,t,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const i=super.toJSON(t);return i.object.fov=this.fov,i.object.zoom=this.zoom,i.object.near=this.near,i.object.far=this.far,i.object.focus=this.focus,i.object.aspect=this.aspect,this.view!==null&&(i.object.view=Object.assign({},this.view)),i.object.filmGauge=this.filmGauge,i.object.filmOffset=this.filmOffset,i}}const vs=-90,xs=1;class CE extends Dn{constructor(t,i,r){super(),this.type="CubeCamera",this.renderTarget=r,this.coordinateSystem=null,this.activeMipmapLevel=0;const l=new li(vs,xs,t,i);l.layers=this.layers,this.add(l);const c=new li(vs,xs,t,i);c.layers=this.layers,this.add(c);const f=new li(vs,xs,t,i);f.layers=this.layers,this.add(f);const d=new li(vs,xs,t,i);d.layers=this.layers,this.add(d);const m=new li(vs,xs,t,i);m.layers=this.layers,this.add(m);const p=new li(vs,xs,t,i);p.layers=this.layers,this.add(p)}updateCoordinateSystem(){const t=this.coordinateSystem,i=this.children.concat(),[r,l,c,f,d,m]=i;for(const p of i)this.remove(p);if(t===sa)r.up.set(0,1,0),r.lookAt(1,0,0),l.up.set(0,1,0),l.lookAt(-1,0,0),c.up.set(0,0,-1),c.lookAt(0,1,0),f.up.set(0,0,1),f.lookAt(0,-1,0),d.up.set(0,1,0),d.lookAt(0,0,1),m.up.set(0,1,0),m.lookAt(0,0,-1);else if(t===Hc)r.up.set(0,-1,0),r.lookAt(-1,0,0),l.up.set(0,-1,0),l.lookAt(1,0,0),c.up.set(0,0,1),c.lookAt(0,1,0),f.up.set(0,0,-1),f.lookAt(0,-1,0),d.up.set(0,-1,0),d.lookAt(0,0,1),m.up.set(0,-1,0),m.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(const p of i)this.add(p),p.updateMatrixWorld()}update(t,i){this.parent===null&&this.updateMatrixWorld();const{renderTarget:r,activeMipmapLevel:l}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());const[c,f,d,m,p,g]=this.children,x=t.getRenderTarget(),v=t.getActiveCubeFace(),y=t.getActiveMipmapLevel(),E=t.xr.enabled;t.xr.enabled=!1;const A=r.texture.generateMipmaps;r.texture.generateMipmaps=!1,t.setRenderTarget(r,0,l),t.render(i,c),t.setRenderTarget(r,1,l),t.render(i,f),t.setRenderTarget(r,2,l),t.render(i,d),t.setRenderTarget(r,3,l),t.render(i,m),t.setRenderTarget(r,4,l),t.render(i,p),r.texture.generateMipmaps=A,t.setRenderTarget(r,5,l),t.render(i,g),t.setRenderTarget(x,v,y),t.xr.enabled=E,r.texture.needsPMREMUpdate=!0}}class p0 extends Vn{constructor(t=[],i=bs,r,l,c,f,d,m,p,g){super(t,i,r,l,c,f,d,m,p,g),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}}class DE extends wr{constructor(t=1,i={}){super(t,t,i),this.isWebGLCubeRenderTarget=!0;const r={width:t,height:t,depth:1},l=[r,r,r,r,r,r];this.texture=new p0(l,i.mapping,i.wrapS,i.wrapT,i.magFilter,i.minFilter,i.format,i.type,i.anisotropy,i.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=i.generateMipmaps!==void 0?i.generateMipmaps:!1,this.texture.minFilter=i.minFilter!==void 0?i.minFilter:bi}fromEquirectangularTexture(t,i){this.texture.type=i.type,this.texture.colorSpace=i.colorSpace,this.texture.generateMipmaps=i.generateMipmaps,this.texture.minFilter=i.minFilter,this.texture.magFilter=i.magFilter;const r={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},l=new Ls(5,5,5),c=new Ya({name:"CubemapFromEquirect",uniforms:ws(r.uniforms),vertexShader:r.vertexShader,fragmentShader:r.fragmentShader,side:Gn,blending:Xa});c.uniforms.tEquirect.value=i;const f=new Ai(l,c),d=i.minFilter;return i.minFilter===Ar&&(i.minFilter=bi),new CE(1,10,this).update(t,f),i.minFilter=d,f.geometry.dispose(),f.material.dispose(),this}clear(t,i=!0,r=!0,l=!0){const c=t.getRenderTarget();for(let f=0;f<6;f++)t.setRenderTarget(this,f),t.clear(i,r,l);t.setRenderTarget(c)}}class Tc extends Dn{constructor(){super(),this.isGroup=!0,this.type="Group"}}const UE={type:"move"};class bh{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Tc,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Tc,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new et,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new et),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Tc,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new et,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new et),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){const i=this._hand;if(i)for(const r of t.hand.values())this._getHandJoint(i,r)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,i,r){let l=null,c=null,f=null;const d=this._targetRay,m=this._grip,p=this._hand;if(t&&i.session.visibilityState!=="visible-blurred"){if(p&&t.hand){f=!0;for(const A of t.hand.values()){const S=i.getJointPose(A,r),_=this._getHandJoint(p,A);S!==null&&(_.matrix.fromArray(S.transform.matrix),_.matrix.decompose(_.position,_.rotation,_.scale),_.matrixWorldNeedsUpdate=!0,_.jointRadius=S.radius),_.visible=S!==null}const g=p.joints["index-finger-tip"],x=p.joints["thumb-tip"],v=g.position.distanceTo(x.position),y=.02,E=.005;p.inputState.pinching&&v>y+E?(p.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!p.inputState.pinching&&v<=y-E&&(p.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else m!==null&&t.gripSpace&&(c=i.getPose(t.gripSpace,r),c!==null&&(m.matrix.fromArray(c.transform.matrix),m.matrix.decompose(m.position,m.rotation,m.scale),m.matrixWorldNeedsUpdate=!0,c.linearVelocity?(m.hasLinearVelocity=!0,m.linearVelocity.copy(c.linearVelocity)):m.hasLinearVelocity=!1,c.angularVelocity?(m.hasAngularVelocity=!0,m.angularVelocity.copy(c.angularVelocity)):m.hasAngularVelocity=!1));d!==null&&(l=i.getPose(t.targetRaySpace,r),l===null&&c!==null&&(l=c),l!==null&&(d.matrix.fromArray(l.transform.matrix),d.matrix.decompose(d.position,d.rotation,d.scale),d.matrixWorldNeedsUpdate=!0,l.linearVelocity?(d.hasLinearVelocity=!0,d.linearVelocity.copy(l.linearVelocity)):d.hasLinearVelocity=!1,l.angularVelocity?(d.hasAngularVelocity=!0,d.angularVelocity.copy(l.angularVelocity)):d.hasAngularVelocity=!1,this.dispatchEvent(UE)))}return d!==null&&(d.visible=l!==null),m!==null&&(m.visible=c!==null),p!==null&&(p.visible=f!==null),this}_getHandJoint(t,i){if(t.joints[i.jointName]===void 0){const r=new Tc;r.matrixAutoUpdate=!1,r.visible=!1,t.joints[i.jointName]=r,t.add(r)}return t.joints[i.jointName]}}class LE extends Dn{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Di,this.environmentIntensity=1,this.environmentRotation=new Di,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,i){return super.copy(t,i),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){const i=super.toJSON(t);return this.fog!==null&&(i.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(i.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(i.object.backgroundIntensity=this.backgroundIntensity),i.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(i.object.environmentIntensity=this.environmentIntensity),i.object.environmentRotation=this.environmentRotation.toArray(),i}}const Ah=new et,NE=new et,OE=new se;class yr{constructor(t=new et(1,0,0),i=0){this.isPlane=!0,this.normal=t,this.constant=i}set(t,i){return this.normal.copy(t),this.constant=i,this}setComponents(t,i,r,l){return this.normal.set(t,i,r),this.constant=l,this}setFromNormalAndCoplanarPoint(t,i){return this.normal.copy(t),this.constant=-i.dot(this.normal),this}setFromCoplanarPoints(t,i,r){const l=Ah.subVectors(r,i).cross(NE.subVectors(t,i)).normalize();return this.setFromNormalAndCoplanarPoint(l,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){const t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,i){return i.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,i){const r=t.delta(Ah),l=this.normal.dot(r);if(l===0)return this.distanceToPoint(t.start)===0?i.copy(t.start):null;const c=-(t.start.dot(this.normal)+this.constant)/l;return c<0||c>1?null:i.copy(t.start).addScaledVector(r,c)}intersectsLine(t){const i=this.distanceToPoint(t.start),r=this.distanceToPoint(t.end);return i<0&&r>0||r<0&&i>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,i){const r=i||OE.getNormalMatrix(t),l=this.coplanarPoint(Ah).applyMatrix4(t),c=this.normal.applyMatrix3(r).normalize();return this.constant=-l.dot(c),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}}const _r=new Id,bc=new et;class Fd{constructor(t=new yr,i=new yr,r=new yr,l=new yr,c=new yr,f=new yr){this.planes=[t,i,r,l,c,f]}set(t,i,r,l,c,f){const d=this.planes;return d[0].copy(t),d[1].copy(i),d[2].copy(r),d[3].copy(l),d[4].copy(c),d[5].copy(f),this}copy(t){const i=this.planes;for(let r=0;r<6;r++)i[r].copy(t.planes[r]);return this}setFromProjectionMatrix(t,i=sa){const r=this.planes,l=t.elements,c=l[0],f=l[1],d=l[2],m=l[3],p=l[4],g=l[5],x=l[6],v=l[7],y=l[8],E=l[9],A=l[10],S=l[11],_=l[12],L=l[13],D=l[14],C=l[15];if(r[0].setComponents(m-c,v-p,S-y,C-_).normalize(),r[1].setComponents(m+c,v+p,S+y,C+_).normalize(),r[2].setComponents(m+f,v+g,S+E,C+L).normalize(),r[3].setComponents(m-f,v-g,S-E,C-L).normalize(),r[4].setComponents(m-d,v-x,S-A,C-D).normalize(),i===sa)r[5].setComponents(m+d,v+x,S+A,C+D).normalize();else if(i===Hc)r[5].setComponents(d,x,A,D).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+i);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),_r.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{const i=t.geometry;i.boundingSphere===null&&i.computeBoundingSphere(),_r.copy(i.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(_r)}intersectsSprite(t){return _r.center.set(0,0,0),_r.radius=.7071067811865476,_r.applyMatrix4(t.matrixWorld),this.intersectsSphere(_r)}intersectsSphere(t){const i=this.planes,r=t.center,l=-t.radius;for(let c=0;c<6;c++)if(i[c].distanceToPoint(r)<l)return!1;return!0}intersectsBox(t){const i=this.planes;for(let r=0;r<6;r++){const l=i[r];if(bc.x=l.normal.x>0?t.max.x:t.min.x,bc.y=l.normal.y>0?t.max.y:t.min.y,bc.z=l.normal.z>0?t.max.z:t.min.z,l.distanceToPoint(bc)<0)return!1}return!0}containsPoint(t){const i=this.planes;for(let r=0;r<6;r++)if(i[r].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class m0 extends Vn{constructor(t,i,r=Rr,l,c,f,d=_i,m=_i,p,g=Ho){if(g!==Ho&&g!==Go)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");super(null,l,c,f,d,m,g,r,p),this.isDepthTexture=!0,this.image={width:t,height:i},this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.source=new Bd(Object.assign({},t.image)),this.compareFunction=t.compareFunction,this}toJSON(t){const i=super.toJSON(t);return this.compareFunction!==null&&(i.compareFunction=this.compareFunction),i}}class Hd extends Li{constructor(t=[],i=[],r=1,l=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:t,indices:i,radius:r,detail:l};const c=[],f=[];d(l),p(r),g(),this.setAttribute("position",new Un(c,3)),this.setAttribute("normal",new Un(c.slice(),3)),this.setAttribute("uv",new Un(f,2)),l===0?this.computeVertexNormals():this.normalizeNormals();function d(L){const D=new et,C=new et,F=new et;for(let H=0;H<i.length;H+=3)y(i[H+0],D),y(i[H+1],C),y(i[H+2],F),m(D,C,F,L)}function m(L,D,C,F){const H=F+1,B=[];for(let k=0;k<=H;k++){B[k]=[];const U=L.clone().lerp(C,k/H),R=D.clone().lerp(C,k/H),V=H-k;for(let lt=0;lt<=V;lt++)lt===0&&k===H?B[k][lt]=U:B[k][lt]=U.clone().lerp(R,lt/V)}for(let k=0;k<H;k++)for(let U=0;U<2*(H-k)-1;U++){const R=Math.floor(U/2);U%2===0?(v(B[k][R+1]),v(B[k+1][R]),v(B[k][R])):(v(B[k][R+1]),v(B[k+1][R+1]),v(B[k+1][R]))}}function p(L){const D=new et;for(let C=0;C<c.length;C+=3)D.x=c[C+0],D.y=c[C+1],D.z=c[C+2],D.normalize().multiplyScalar(L),c[C+0]=D.x,c[C+1]=D.y,c[C+2]=D.z}function g(){const L=new et;for(let D=0;D<c.length;D+=3){L.x=c[D+0],L.y=c[D+1],L.z=c[D+2];const C=S(L)/2/Math.PI+.5,F=_(L)/Math.PI+.5;f.push(C,1-F)}E(),x()}function x(){for(let L=0;L<f.length;L+=6){const D=f[L+0],C=f[L+2],F=f[L+4],H=Math.max(D,C,F),B=Math.min(D,C,F);H>.9&&B<.1&&(D<.2&&(f[L+0]+=1),C<.2&&(f[L+2]+=1),F<.2&&(f[L+4]+=1))}}function v(L){c.push(L.x,L.y,L.z)}function y(L,D){const C=L*3;D.x=t[C+0],D.y=t[C+1],D.z=t[C+2]}function E(){const L=new et,D=new et,C=new et,F=new et,H=new Me,B=new Me,k=new Me;for(let U=0,R=0;U<c.length;U+=9,R+=6){L.set(c[U+0],c[U+1],c[U+2]),D.set(c[U+3],c[U+4],c[U+5]),C.set(c[U+6],c[U+7],c[U+8]),H.set(f[R+0],f[R+1]),B.set(f[R+2],f[R+3]),k.set(f[R+4],f[R+5]),F.copy(L).add(D).add(C).divideScalar(3);const V=S(F);A(H,R+0,L,V),A(B,R+2,D,V),A(k,R+4,C,V)}}function A(L,D,C,F){F<0&&L.x===1&&(f[D]=L.x-1),C.x===0&&C.z===0&&(f[D]=F/2/Math.PI+.5)}function S(L){return Math.atan2(L.z,-L.x)}function _(L){return Math.atan2(-L.y,Math.sqrt(L.x*L.x+L.z*L.z))}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Hd(t.vertices,t.indices,t.radius,t.details)}}class Xc extends Li{constructor(t=1,i=1,r=1,l=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:i,widthSegments:r,heightSegments:l};const c=t/2,f=i/2,d=Math.floor(r),m=Math.floor(l),p=d+1,g=m+1,x=t/d,v=i/m,y=[],E=[],A=[],S=[];for(let _=0;_<g;_++){const L=_*v-f;for(let D=0;D<p;D++){const C=D*x-c;E.push(C,-L,0),A.push(0,0,1),S.push(D/d),S.push(1-_/m)}}for(let _=0;_<m;_++)for(let L=0;L<d;L++){const D=L+p*_,C=L+p*(_+1),F=L+1+p*(_+1),H=L+1+p*_;y.push(D,C,H),y.push(C,F,H)}this.setIndex(y),this.setAttribute("position",new Un(E,3)),this.setAttribute("normal",new Un(A,3)),this.setAttribute("uv",new Un(S,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Xc(t.width,t.height,t.widthSegments,t.heightSegments)}}class Gd extends Li{constructor(t=1,i=32,r=16,l=0,c=Math.PI*2,f=0,d=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:t,widthSegments:i,heightSegments:r,phiStart:l,phiLength:c,thetaStart:f,thetaLength:d},i=Math.max(3,Math.floor(i)),r=Math.max(2,Math.floor(r));const m=Math.min(f+d,Math.PI);let p=0;const g=[],x=new et,v=new et,y=[],E=[],A=[],S=[];for(let _=0;_<=r;_++){const L=[],D=_/r;let C=0;_===0&&f===0?C=.5/i:_===r&&m===Math.PI&&(C=-.5/i);for(let F=0;F<=i;F++){const H=F/i;x.x=-t*Math.cos(l+H*c)*Math.sin(f+D*d),x.y=t*Math.cos(f+D*d),x.z=t*Math.sin(l+H*c)*Math.sin(f+D*d),E.push(x.x,x.y,x.z),v.copy(x).normalize(),A.push(v.x,v.y,v.z),S.push(H+C,1-D),L.push(p++)}g.push(L)}for(let _=0;_<r;_++)for(let L=0;L<i;L++){const D=g[_][L+1],C=g[_][L],F=g[_+1][L],H=g[_+1][L+1];(_!==0||f>0)&&y.push(D,C,H),(_!==r-1||m<Math.PI)&&y.push(C,F,H)}this.setIndex(y),this.setAttribute("position",new Un(E,3)),this.setAttribute("normal",new Un(A,3)),this.setAttribute("uv",new Un(S,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Gd(t.radius,t.widthSegments,t.heightSegments,t.phiStart,t.phiLength,t.thetaStart,t.thetaLength)}}class Vd extends Hd{constructor(t=1,i=0){const r=[1,1,1,-1,-1,1,-1,1,-1,1,-1,-1],l=[2,1,0,0,3,2,1,3,0,2,3,1];super(r,l,t,i),this.type="TetrahedronGeometry",this.parameters={radius:t,detail:i}}static fromJSON(t){return new Vd(t.radius,t.detail)}}class kd extends Li{constructor(t=1,i=.4,r=12,l=48,c=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:t,tube:i,radialSegments:r,tubularSegments:l,arc:c},r=Math.floor(r),l=Math.floor(l);const f=[],d=[],m=[],p=[],g=new et,x=new et,v=new et;for(let y=0;y<=r;y++)for(let E=0;E<=l;E++){const A=E/l*c,S=y/r*Math.PI*2;x.x=(t+i*Math.cos(S))*Math.cos(A),x.y=(t+i*Math.cos(S))*Math.sin(A),x.z=i*Math.sin(S),d.push(x.x,x.y,x.z),g.x=t*Math.cos(A),g.y=t*Math.sin(A),v.subVectors(x,g).normalize(),m.push(v.x,v.y,v.z),p.push(E/l),p.push(y/r)}for(let y=1;y<=r;y++)for(let E=1;E<=l;E++){const A=(l+1)*y+E-1,S=(l+1)*(y-1)+E-1,_=(l+1)*(y-1)+E,L=(l+1)*y+E;f.push(A,S,L),f.push(S,_,L)}this.setIndex(f),this.setAttribute("position",new Un(d,3)),this.setAttribute("normal",new Un(m,3)),this.setAttribute("uv",new Un(p,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new kd(t.radius,t.tube,t.radialSegments,t.tubularSegments,t.arc)}}class PE extends Zo{constructor(t){super(),this.isMeshPhongMaterial=!0,this.type="MeshPhongMaterial",this.color=new Re(16777215),this.specular=new Re(1118481),this.shininess=30,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Re(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=i0,this.normalScale=new Me(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Di,this.combine=Dd,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.specular.copy(t.specular),this.shininess=t.shininess,this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}}class zE extends Zo{constructor(t){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=WM,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}}class BE extends Zo{constructor(t){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}}class g0 extends Dn{constructor(t,i=1){super(),this.isLight=!0,this.type="Light",this.color=new Re(t),this.intensity=i}dispose(){}copy(t,i){return super.copy(t,i),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){const i=super.toJSON(t);return i.object.color=this.color.getHex(),i.object.intensity=this.intensity,this.groundColor!==void 0&&(i.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(i.object.distance=this.distance),this.angle!==void 0&&(i.object.angle=this.angle),this.decay!==void 0&&(i.object.decay=this.decay),this.penumbra!==void 0&&(i.object.penumbra=this.penumbra),this.shadow!==void 0&&(i.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(i.object.target=this.target.uuid),i}}const Rh=new Je,iv=new et,av=new et;class IE{constructor(t){this.camera=t,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new Me(512,512),this.mapType=Ci,this.map=null,this.mapPass=null,this.matrix=new Je,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Fd,this._frameExtents=new Me(1,1),this._viewportCount=1,this._viewports=[new Qe(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(t){const i=this.camera,r=this.matrix;iv.setFromMatrixPosition(t.matrixWorld),i.position.copy(iv),av.setFromMatrixPosition(t.target.matrixWorld),i.lookAt(av),i.updateMatrixWorld(),Rh.multiplyMatrices(i.projectionMatrix,i.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Rh),r.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),r.multiply(Rh)}getViewport(t){return this._viewports[t]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(t){return this.camera=t.camera.clone(),this.intensity=t.intensity,this.bias=t.bias,this.radius=t.radius,this.autoUpdate=t.autoUpdate,this.needsUpdate=t.needsUpdate,this.normalBias=t.normalBias,this.blurSamples=t.blurSamples,this.mapSize.copy(t.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const t={};return this.intensity!==1&&(t.intensity=this.intensity),this.bias!==0&&(t.bias=this.bias),this.normalBias!==0&&(t.normalBias=this.normalBias),this.radius!==1&&(t.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(t.mapSize=this.mapSize.toArray()),t.camera=this.camera.toJSON(!1).object,delete t.camera.matrix,t}}class _0 extends d0{constructor(t=-1,i=1,r=1,l=-1,c=.1,f=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=i,this.top=r,this.bottom=l,this.near=c,this.far=f,this.updateProjectionMatrix()}copy(t,i){return super.copy(t,i),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,i,r,l,c,f){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=i,this.view.offsetX=r,this.view.offsetY=l,this.view.width=c,this.view.height=f,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=(this.right-this.left)/(2*this.zoom),i=(this.top-this.bottom)/(2*this.zoom),r=(this.right+this.left)/2,l=(this.top+this.bottom)/2;let c=r-t,f=r+t,d=l+i,m=l-i;if(this.view!==null&&this.view.enabled){const p=(this.right-this.left)/this.view.fullWidth/this.zoom,g=(this.top-this.bottom)/this.view.fullHeight/this.zoom;c+=p*this.view.offsetX,f=c+p*this.view.width,d-=g*this.view.offsetY,m=d-g*this.view.height}this.projectionMatrix.makeOrthographic(c,f,d,m,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const i=super.toJSON(t);return i.object.zoom=this.zoom,i.object.left=this.left,i.object.right=this.right,i.object.top=this.top,i.object.bottom=this.bottom,i.object.near=this.near,i.object.far=this.far,this.view!==null&&(i.object.view=Object.assign({},this.view)),i}}class FE extends IE{constructor(){super(new _0(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class HE extends g0{constructor(t,i){super(t,i),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Dn.DEFAULT_UP),this.updateMatrix(),this.target=new Dn,this.shadow=new FE}dispose(){this.shadow.dispose()}copy(t){return super.copy(t),this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}}class GE extends g0{constructor(t,i){super(t,i),this.isAmbientLight=!0,this.type="AmbientLight"}}class VE extends li{constructor(t=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=t}}function rv(s,t,i,r){const l=kE(r);switch(i){case Jv:return s*t;case t0:return s*t/l.components*l.byteLength;case Od:return s*t/l.components*l.byteLength;case e0:return s*t*2/l.components*l.byteLength;case Pd:return s*t*2/l.components*l.byteLength;case $v:return s*t*3/l.components*l.byteLength;case gi:return s*t*4/l.components*l.byteLength;case zd:return s*t*4/l.components*l.byteLength;case Uc:case Lc:return Math.floor((s+3)/4)*Math.floor((t+3)/4)*8;case Nc:case Oc:return Math.floor((s+3)/4)*Math.floor((t+3)/4)*16;case Kh:case Jh:return Math.max(s,16)*Math.max(t,8)/4;case Zh:case Qh:return Math.max(s,8)*Math.max(t,8)/2;case $h:case td:return Math.floor((s+3)/4)*Math.floor((t+3)/4)*8;case ed:return Math.floor((s+3)/4)*Math.floor((t+3)/4)*16;case nd:return Math.floor((s+3)/4)*Math.floor((t+3)/4)*16;case id:return Math.floor((s+4)/5)*Math.floor((t+3)/4)*16;case ad:return Math.floor((s+4)/5)*Math.floor((t+4)/5)*16;case rd:return Math.floor((s+5)/6)*Math.floor((t+4)/5)*16;case sd:return Math.floor((s+5)/6)*Math.floor((t+5)/6)*16;case od:return Math.floor((s+7)/8)*Math.floor((t+4)/5)*16;case ld:return Math.floor((s+7)/8)*Math.floor((t+5)/6)*16;case cd:return Math.floor((s+7)/8)*Math.floor((t+7)/8)*16;case ud:return Math.floor((s+9)/10)*Math.floor((t+4)/5)*16;case fd:return Math.floor((s+9)/10)*Math.floor((t+5)/6)*16;case hd:return Math.floor((s+9)/10)*Math.floor((t+7)/8)*16;case dd:return Math.floor((s+9)/10)*Math.floor((t+9)/10)*16;case pd:return Math.floor((s+11)/12)*Math.floor((t+9)/10)*16;case md:return Math.floor((s+11)/12)*Math.floor((t+11)/12)*16;case Pc:case gd:case _d:return Math.ceil(s/4)*Math.ceil(t/4)*16;case n0:case vd:return Math.ceil(s/4)*Math.ceil(t/4)*8;case xd:case yd:return Math.ceil(s/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${i} format.`)}function kE(s){switch(s){case Ci:case Zv:return{byteLength:1,components:1};case Io:case Kv:case Xo:return{byteLength:2,components:1};case Ld:case Nd:return{byteLength:2,components:4};case Rr:case Ud:case ra:return{byteLength:4,components:1};case Qv:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${s}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Cd}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Cd);/**
 * @license
 * Copyright 2010-2025 Three.js Authors
 * SPDX-License-Identifier: MIT
 */function v0(){let s=null,t=!1,i=null,r=null;function l(c,f){i(c,f),r=s.requestAnimationFrame(l)}return{start:function(){t!==!0&&i!==null&&(r=s.requestAnimationFrame(l),t=!0)},stop:function(){s.cancelAnimationFrame(r),t=!1},setAnimationLoop:function(c){i=c},setContext:function(c){s=c}}}function jE(s){const t=new WeakMap;function i(d,m){const p=d.array,g=d.usage,x=p.byteLength,v=s.createBuffer();s.bindBuffer(m,v),s.bufferData(m,p,g),d.onUploadCallback();let y;if(p instanceof Float32Array)y=s.FLOAT;else if(p instanceof Uint16Array)d.isFloat16BufferAttribute?y=s.HALF_FLOAT:y=s.UNSIGNED_SHORT;else if(p instanceof Int16Array)y=s.SHORT;else if(p instanceof Uint32Array)y=s.UNSIGNED_INT;else if(p instanceof Int32Array)y=s.INT;else if(p instanceof Int8Array)y=s.BYTE;else if(p instanceof Uint8Array)y=s.UNSIGNED_BYTE;else if(p instanceof Uint8ClampedArray)y=s.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+p);return{buffer:v,type:y,bytesPerElement:p.BYTES_PER_ELEMENT,version:d.version,size:x}}function r(d,m,p){const g=m.array,x=m.updateRanges;if(s.bindBuffer(p,d),x.length===0)s.bufferSubData(p,0,g);else{x.sort((y,E)=>y.start-E.start);let v=0;for(let y=1;y<x.length;y++){const E=x[v],A=x[y];A.start<=E.start+E.count+1?E.count=Math.max(E.count,A.start+A.count-E.start):(++v,x[v]=A)}x.length=v+1;for(let y=0,E=x.length;y<E;y++){const A=x[y];s.bufferSubData(p,A.start*g.BYTES_PER_ELEMENT,g,A.start,A.count)}m.clearUpdateRanges()}m.onUploadCallback()}function l(d){return d.isInterleavedBufferAttribute&&(d=d.data),t.get(d)}function c(d){d.isInterleavedBufferAttribute&&(d=d.data);const m=t.get(d);m&&(s.deleteBuffer(m.buffer),t.delete(d))}function f(d,m){if(d.isInterleavedBufferAttribute&&(d=d.data),d.isGLBufferAttribute){const g=t.get(d);(!g||g.version<d.version)&&t.set(d,{buffer:d.buffer,type:d.type,bytesPerElement:d.elementSize,version:d.version});return}const p=t.get(d);if(p===void 0)t.set(d,i(d,m));else if(p.version<d.version){if(p.size!==d.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");r(p.buffer,d,m),p.version=d.version}}return{get:l,remove:c,update:f}}var XE=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,WE=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,qE=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,YE=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,ZE=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,KE=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,QE=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,JE=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,$E=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec3 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 ).rgb;
	}
#endif`,tT=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,eT=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,nT=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,iT=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,aT=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,rT=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,sT=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,oT=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,lT=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,cT=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,uT=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,fT=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,hT=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,dT=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif
#ifdef USE_BATCHING_COLOR
	vec3 batchingColor = getBatchingColor( getIndirectIndex( gl_DrawID ) );
	vColor.xyz *= batchingColor.xyz;
#endif`,pT=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,mT=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,gT=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,_T=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,vT=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,xT=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,yT=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,ST="gl_FragColor = linearToOutputTexel( gl_FragColor );",MT=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,ET=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,TT=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,bT=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,AT=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,RT=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,wT=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,CT=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,DT=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,UT=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,LT=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,NT=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,OT=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,PT=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,zT=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,BT=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,IT=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,FT=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,HT=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,GT=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,VT=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,kT=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	float dispersion;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		float v = 0.5 / ( gv + gl );
		return saturate(v);
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColor;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,jT=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,XT=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometryNormal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,WT=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,qT=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,YT=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,ZT=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,KT=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,QT=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,JT=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,$T=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,tb=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,eb=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,nb=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,ib=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,ab=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,rb=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,sb=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,ob=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,lb=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,cb=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,ub=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,fb=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,hb=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,db=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,pb=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,mb=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,gb=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,_b=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,vb=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,xb=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`,yb=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,Sb=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,Mb=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,Eb=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,Tb=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,bb=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,Ab=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		return step( compare, unpackRGBAToDepth( texture2D( depths, uv ) ) );
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow (sampler2D shadow, vec2 uv, float compare ){
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		float hard_shadow = step( compare , distribution.x );
		if (hard_shadow != 1.0 ) {
			float distance = compare - distribution.x ;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		
		float lightToPositionLength = length( lightToPosition );
		if ( lightToPositionLength - shadowCameraFar <= 0.0 && lightToPositionLength - shadowCameraNear >= 0.0 ) {
			float dp = ( lightToPositionLength - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
			#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
				vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
				shadow = (
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
				) * ( 1.0 / 9.0 );
			#else
				shadow = texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
			#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
#endif`,Rb=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,wb=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,Cb=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,Db=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,Ub=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,Lb=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,Nb=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,Ob=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,Pb=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,zb=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,Bb=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,Ib=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,Fb=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		#else
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,Hb=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,Gb=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,Vb=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,kb=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const jb=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,Xb=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Wb=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,qb=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Yb=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Zb=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Kb=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,Qb=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,Jb=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,$b=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,t1=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,e1=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,n1=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,i1=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,a1=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,r1=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,s1=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,o1=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,l1=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,c1=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,u1=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,f1=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <packing>
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,h1=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,d1=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,p1=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,m1=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecularDirect + sheenSpecularIndirect;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,g1=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,_1=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,v1=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,x1=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,y1=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,S1=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,M1=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,E1=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,le={alphahash_fragment:XE,alphahash_pars_fragment:WE,alphamap_fragment:qE,alphamap_pars_fragment:YE,alphatest_fragment:ZE,alphatest_pars_fragment:KE,aomap_fragment:QE,aomap_pars_fragment:JE,batching_pars_vertex:$E,batching_vertex:tT,begin_vertex:eT,beginnormal_vertex:nT,bsdfs:iT,iridescence_fragment:aT,bumpmap_pars_fragment:rT,clipping_planes_fragment:sT,clipping_planes_pars_fragment:oT,clipping_planes_pars_vertex:lT,clipping_planes_vertex:cT,color_fragment:uT,color_pars_fragment:fT,color_pars_vertex:hT,color_vertex:dT,common:pT,cube_uv_reflection_fragment:mT,defaultnormal_vertex:gT,displacementmap_pars_vertex:_T,displacementmap_vertex:vT,emissivemap_fragment:xT,emissivemap_pars_fragment:yT,colorspace_fragment:ST,colorspace_pars_fragment:MT,envmap_fragment:ET,envmap_common_pars_fragment:TT,envmap_pars_fragment:bT,envmap_pars_vertex:AT,envmap_physical_pars_fragment:BT,envmap_vertex:RT,fog_vertex:wT,fog_pars_vertex:CT,fog_fragment:DT,fog_pars_fragment:UT,gradientmap_pars_fragment:LT,lightmap_pars_fragment:NT,lights_lambert_fragment:OT,lights_lambert_pars_fragment:PT,lights_pars_begin:zT,lights_toon_fragment:IT,lights_toon_pars_fragment:FT,lights_phong_fragment:HT,lights_phong_pars_fragment:GT,lights_physical_fragment:VT,lights_physical_pars_fragment:kT,lights_fragment_begin:jT,lights_fragment_maps:XT,lights_fragment_end:WT,logdepthbuf_fragment:qT,logdepthbuf_pars_fragment:YT,logdepthbuf_pars_vertex:ZT,logdepthbuf_vertex:KT,map_fragment:QT,map_pars_fragment:JT,map_particle_fragment:$T,map_particle_pars_fragment:tb,metalnessmap_fragment:eb,metalnessmap_pars_fragment:nb,morphinstance_vertex:ib,morphcolor_vertex:ab,morphnormal_vertex:rb,morphtarget_pars_vertex:sb,morphtarget_vertex:ob,normal_fragment_begin:lb,normal_fragment_maps:cb,normal_pars_fragment:ub,normal_pars_vertex:fb,normal_vertex:hb,normalmap_pars_fragment:db,clearcoat_normal_fragment_begin:pb,clearcoat_normal_fragment_maps:mb,clearcoat_pars_fragment:gb,iridescence_pars_fragment:_b,opaque_fragment:vb,packing:xb,premultiplied_alpha_fragment:yb,project_vertex:Sb,dithering_fragment:Mb,dithering_pars_fragment:Eb,roughnessmap_fragment:Tb,roughnessmap_pars_fragment:bb,shadowmap_pars_fragment:Ab,shadowmap_pars_vertex:Rb,shadowmap_vertex:wb,shadowmask_pars_fragment:Cb,skinbase_vertex:Db,skinning_pars_vertex:Ub,skinning_vertex:Lb,skinnormal_vertex:Nb,specularmap_fragment:Ob,specularmap_pars_fragment:Pb,tonemapping_fragment:zb,tonemapping_pars_fragment:Bb,transmission_fragment:Ib,transmission_pars_fragment:Fb,uv_pars_fragment:Hb,uv_pars_vertex:Gb,uv_vertex:Vb,worldpos_vertex:kb,background_vert:jb,background_frag:Xb,backgroundCube_vert:Wb,backgroundCube_frag:qb,cube_vert:Yb,cube_frag:Zb,depth_vert:Kb,depth_frag:Qb,distanceRGBA_vert:Jb,distanceRGBA_frag:$b,equirect_vert:t1,equirect_frag:e1,linedashed_vert:n1,linedashed_frag:i1,meshbasic_vert:a1,meshbasic_frag:r1,meshlambert_vert:s1,meshlambert_frag:o1,meshmatcap_vert:l1,meshmatcap_frag:c1,meshnormal_vert:u1,meshnormal_frag:f1,meshphong_vert:h1,meshphong_frag:d1,meshphysical_vert:p1,meshphysical_frag:m1,meshtoon_vert:g1,meshtoon_frag:_1,points_vert:v1,points_frag:x1,shadow_vert:y1,shadow_frag:S1,sprite_vert:M1,sprite_frag:E1},Ut={common:{diffuse:{value:new Re(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new se},alphaMap:{value:null},alphaMapTransform:{value:new se},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new se}},envmap:{envMap:{value:null},envMapRotation:{value:new se},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new se}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new se}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new se},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new se},normalScale:{value:new Me(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new se},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new se}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new se}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new se}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Re(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Re(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new se},alphaTest:{value:0},uvTransform:{value:new se}},sprite:{diffuse:{value:new Re(16777215)},opacity:{value:1},center:{value:new Me(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new se},alphaMap:{value:null},alphaMapTransform:{value:new se},alphaTest:{value:0}}},Ti={basic:{uniforms:Nn([Ut.common,Ut.specularmap,Ut.envmap,Ut.aomap,Ut.lightmap,Ut.fog]),vertexShader:le.meshbasic_vert,fragmentShader:le.meshbasic_frag},lambert:{uniforms:Nn([Ut.common,Ut.specularmap,Ut.envmap,Ut.aomap,Ut.lightmap,Ut.emissivemap,Ut.bumpmap,Ut.normalmap,Ut.displacementmap,Ut.fog,Ut.lights,{emissive:{value:new Re(0)}}]),vertexShader:le.meshlambert_vert,fragmentShader:le.meshlambert_frag},phong:{uniforms:Nn([Ut.common,Ut.specularmap,Ut.envmap,Ut.aomap,Ut.lightmap,Ut.emissivemap,Ut.bumpmap,Ut.normalmap,Ut.displacementmap,Ut.fog,Ut.lights,{emissive:{value:new Re(0)},specular:{value:new Re(1118481)},shininess:{value:30}}]),vertexShader:le.meshphong_vert,fragmentShader:le.meshphong_frag},standard:{uniforms:Nn([Ut.common,Ut.envmap,Ut.aomap,Ut.lightmap,Ut.emissivemap,Ut.bumpmap,Ut.normalmap,Ut.displacementmap,Ut.roughnessmap,Ut.metalnessmap,Ut.fog,Ut.lights,{emissive:{value:new Re(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:le.meshphysical_vert,fragmentShader:le.meshphysical_frag},toon:{uniforms:Nn([Ut.common,Ut.aomap,Ut.lightmap,Ut.emissivemap,Ut.bumpmap,Ut.normalmap,Ut.displacementmap,Ut.gradientmap,Ut.fog,Ut.lights,{emissive:{value:new Re(0)}}]),vertexShader:le.meshtoon_vert,fragmentShader:le.meshtoon_frag},matcap:{uniforms:Nn([Ut.common,Ut.bumpmap,Ut.normalmap,Ut.displacementmap,Ut.fog,{matcap:{value:null}}]),vertexShader:le.meshmatcap_vert,fragmentShader:le.meshmatcap_frag},points:{uniforms:Nn([Ut.points,Ut.fog]),vertexShader:le.points_vert,fragmentShader:le.points_frag},dashed:{uniforms:Nn([Ut.common,Ut.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:le.linedashed_vert,fragmentShader:le.linedashed_frag},depth:{uniforms:Nn([Ut.common,Ut.displacementmap]),vertexShader:le.depth_vert,fragmentShader:le.depth_frag},normal:{uniforms:Nn([Ut.common,Ut.bumpmap,Ut.normalmap,Ut.displacementmap,{opacity:{value:1}}]),vertexShader:le.meshnormal_vert,fragmentShader:le.meshnormal_frag},sprite:{uniforms:Nn([Ut.sprite,Ut.fog]),vertexShader:le.sprite_vert,fragmentShader:le.sprite_frag},background:{uniforms:{uvTransform:{value:new se},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:le.background_vert,fragmentShader:le.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new se}},vertexShader:le.backgroundCube_vert,fragmentShader:le.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:le.cube_vert,fragmentShader:le.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:le.equirect_vert,fragmentShader:le.equirect_frag},distanceRGBA:{uniforms:Nn([Ut.common,Ut.displacementmap,{referencePosition:{value:new et},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:le.distanceRGBA_vert,fragmentShader:le.distanceRGBA_frag},shadow:{uniforms:Nn([Ut.lights,Ut.fog,{color:{value:new Re(0)},opacity:{value:1}}]),vertexShader:le.shadow_vert,fragmentShader:le.shadow_frag}};Ti.physical={uniforms:Nn([Ti.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new se},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new se},clearcoatNormalScale:{value:new Me(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new se},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new se},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new se},sheen:{value:0},sheenColor:{value:new Re(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new se},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new se},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new se},transmissionSamplerSize:{value:new Me},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new se},attenuationDistance:{value:0},attenuationColor:{value:new Re(0)},specularColor:{value:new Re(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new se},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new se},anisotropyVector:{value:new Me},anisotropyMap:{value:null},anisotropyMapTransform:{value:new se}}]),vertexShader:le.meshphysical_vert,fragmentShader:le.meshphysical_frag};const Ac={r:0,b:0,g:0},vr=new Di,T1=new Je;function b1(s,t,i,r,l,c,f){const d=new Re(0);let m=c===!0?0:1,p,g,x=null,v=0,y=null;function E(D){let C=D.isScene===!0?D.background:null;return C&&C.isTexture&&(C=(D.backgroundBlurriness>0?i:t).get(C)),C}function A(D){let C=!1;const F=E(D);F===null?_(d,m):F&&F.isColor&&(_(F,1),C=!0);const H=s.xr.getEnvironmentBlendMode();H==="additive"?r.buffers.color.setClear(0,0,0,1,f):H==="alpha-blend"&&r.buffers.color.setClear(0,0,0,0,f),(s.autoClear||C)&&(r.buffers.depth.setTest(!0),r.buffers.depth.setMask(!0),r.buffers.color.setMask(!0),s.clear(s.autoClearColor,s.autoClearDepth,s.autoClearStencil))}function S(D,C){const F=E(C);F&&(F.isCubeTexture||F.mapping===jc)?(g===void 0&&(g=new Ai(new Ls(1,1,1),new Ya({name:"BackgroundCubeMaterial",uniforms:ws(Ti.backgroundCube.uniforms),vertexShader:Ti.backgroundCube.vertexShader,fragmentShader:Ti.backgroundCube.fragmentShader,side:Gn,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),g.geometry.deleteAttribute("normal"),g.geometry.deleteAttribute("uv"),g.onBeforeRender=function(H,B,k){this.matrixWorld.copyPosition(k.matrixWorld)},Object.defineProperty(g.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),l.update(g)),vr.copy(C.backgroundRotation),vr.x*=-1,vr.y*=-1,vr.z*=-1,F.isCubeTexture&&F.isRenderTargetTexture===!1&&(vr.y*=-1,vr.z*=-1),g.material.uniforms.envMap.value=F,g.material.uniforms.flipEnvMap.value=F.isCubeTexture&&F.isRenderTargetTexture===!1?-1:1,g.material.uniforms.backgroundBlurriness.value=C.backgroundBlurriness,g.material.uniforms.backgroundIntensity.value=C.backgroundIntensity,g.material.uniforms.backgroundRotation.value.setFromMatrix4(T1.makeRotationFromEuler(vr)),g.material.toneMapped=Ae.getTransfer(F.colorSpace)!==ze,(x!==F||v!==F.version||y!==s.toneMapping)&&(g.material.needsUpdate=!0,x=F,v=F.version,y=s.toneMapping),g.layers.enableAll(),D.unshift(g,g.geometry,g.material,0,0,null)):F&&F.isTexture&&(p===void 0&&(p=new Ai(new Xc(2,2),new Ya({name:"BackgroundMaterial",uniforms:ws(Ti.background.uniforms),vertexShader:Ti.background.vertexShader,fragmentShader:Ti.background.fragmentShader,side:qa,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),p.geometry.deleteAttribute("normal"),Object.defineProperty(p.material,"map",{get:function(){return this.uniforms.t2D.value}}),l.update(p)),p.material.uniforms.t2D.value=F,p.material.uniforms.backgroundIntensity.value=C.backgroundIntensity,p.material.toneMapped=Ae.getTransfer(F.colorSpace)!==ze,F.matrixAutoUpdate===!0&&F.updateMatrix(),p.material.uniforms.uvTransform.value.copy(F.matrix),(x!==F||v!==F.version||y!==s.toneMapping)&&(p.material.needsUpdate=!0,x=F,v=F.version,y=s.toneMapping),p.layers.enableAll(),D.unshift(p,p.geometry,p.material,0,0,null))}function _(D,C){D.getRGB(Ac,h0(s)),r.buffers.color.setClear(Ac.r,Ac.g,Ac.b,C,f)}function L(){g!==void 0&&(g.geometry.dispose(),g.material.dispose(),g=void 0),p!==void 0&&(p.geometry.dispose(),p.material.dispose(),p=void 0)}return{getClearColor:function(){return d},setClearColor:function(D,C=1){d.set(D),m=C,_(d,m)},getClearAlpha:function(){return m},setClearAlpha:function(D){m=D,_(d,m)},render:A,addToRenderList:S,dispose:L}}function A1(s,t){const i=s.getParameter(s.MAX_VERTEX_ATTRIBS),r={},l=v(null);let c=l,f=!1;function d(R,V,lt,ot,xt){let dt=!1;const I=x(ot,lt,V);c!==I&&(c=I,p(c.object)),dt=y(R,ot,lt,xt),dt&&E(R,ot,lt,xt),xt!==null&&t.update(xt,s.ELEMENT_ARRAY_BUFFER),(dt||f)&&(f=!1,C(R,V,lt,ot),xt!==null&&s.bindBuffer(s.ELEMENT_ARRAY_BUFFER,t.get(xt).buffer))}function m(){return s.createVertexArray()}function p(R){return s.bindVertexArray(R)}function g(R){return s.deleteVertexArray(R)}function x(R,V,lt){const ot=lt.wireframe===!0;let xt=r[R.id];xt===void 0&&(xt={},r[R.id]=xt);let dt=xt[V.id];dt===void 0&&(dt={},xt[V.id]=dt);let I=dt[ot];return I===void 0&&(I=v(m()),dt[ot]=I),I}function v(R){const V=[],lt=[],ot=[];for(let xt=0;xt<i;xt++)V[xt]=0,lt[xt]=0,ot[xt]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:V,enabledAttributes:lt,attributeDivisors:ot,object:R,attributes:{},index:null}}function y(R,V,lt,ot){const xt=c.attributes,dt=V.attributes;let I=0;const K=lt.getAttributes();for(const Y in K)if(K[Y].location>=0){const P=xt[Y];let tt=dt[Y];if(tt===void 0&&(Y==="instanceMatrix"&&R.instanceMatrix&&(tt=R.instanceMatrix),Y==="instanceColor"&&R.instanceColor&&(tt=R.instanceColor)),P===void 0||P.attribute!==tt||tt&&P.data!==tt.data)return!0;I++}return c.attributesNum!==I||c.index!==ot}function E(R,V,lt,ot){const xt={},dt=V.attributes;let I=0;const K=lt.getAttributes();for(const Y in K)if(K[Y].location>=0){let P=dt[Y];P===void 0&&(Y==="instanceMatrix"&&R.instanceMatrix&&(P=R.instanceMatrix),Y==="instanceColor"&&R.instanceColor&&(P=R.instanceColor));const tt={};tt.attribute=P,P&&P.data&&(tt.data=P.data),xt[Y]=tt,I++}c.attributes=xt,c.attributesNum=I,c.index=ot}function A(){const R=c.newAttributes;for(let V=0,lt=R.length;V<lt;V++)R[V]=0}function S(R){_(R,0)}function _(R,V){const lt=c.newAttributes,ot=c.enabledAttributes,xt=c.attributeDivisors;lt[R]=1,ot[R]===0&&(s.enableVertexAttribArray(R),ot[R]=1),xt[R]!==V&&(s.vertexAttribDivisor(R,V),xt[R]=V)}function L(){const R=c.newAttributes,V=c.enabledAttributes;for(let lt=0,ot=V.length;lt<ot;lt++)V[lt]!==R[lt]&&(s.disableVertexAttribArray(lt),V[lt]=0)}function D(R,V,lt,ot,xt,dt,I){I===!0?s.vertexAttribIPointer(R,V,lt,xt,dt):s.vertexAttribPointer(R,V,lt,ot,xt,dt)}function C(R,V,lt,ot){A();const xt=ot.attributes,dt=lt.getAttributes(),I=V.defaultAttributeValues;for(const K in dt){const Y=dt[K];if(Y.location>=0){let Et=xt[K];if(Et===void 0&&(K==="instanceMatrix"&&R.instanceMatrix&&(Et=R.instanceMatrix),K==="instanceColor"&&R.instanceColor&&(Et=R.instanceColor)),Et!==void 0){const P=Et.normalized,tt=Et.itemSize,yt=t.get(Et);if(yt===void 0)continue;const Mt=yt.buffer,J=yt.type,mt=yt.bytesPerElement,St=J===s.INT||J===s.UNSIGNED_INT||Et.gpuType===Ud;if(Et.isInterleavedBufferAttribute){const Rt=Et.data,Lt=Rt.stride,oe=Et.offset;if(Rt.isInstancedInterleavedBuffer){for(let Kt=0;Kt<Y.locationSize;Kt++)_(Y.location+Kt,Rt.meshPerAttribute);R.isInstancedMesh!==!0&&ot._maxInstanceCount===void 0&&(ot._maxInstanceCount=Rt.meshPerAttribute*Rt.count)}else for(let Kt=0;Kt<Y.locationSize;Kt++)S(Y.location+Kt);s.bindBuffer(s.ARRAY_BUFFER,Mt);for(let Kt=0;Kt<Y.locationSize;Kt++)D(Y.location+Kt,tt/Y.locationSize,J,P,Lt*mt,(oe+tt/Y.locationSize*Kt)*mt,St)}else{if(Et.isInstancedBufferAttribute){for(let Rt=0;Rt<Y.locationSize;Rt++)_(Y.location+Rt,Et.meshPerAttribute);R.isInstancedMesh!==!0&&ot._maxInstanceCount===void 0&&(ot._maxInstanceCount=Et.meshPerAttribute*Et.count)}else for(let Rt=0;Rt<Y.locationSize;Rt++)S(Y.location+Rt);s.bindBuffer(s.ARRAY_BUFFER,Mt);for(let Rt=0;Rt<Y.locationSize;Rt++)D(Y.location+Rt,tt/Y.locationSize,J,P,tt*mt,tt/Y.locationSize*Rt*mt,St)}}else if(I!==void 0){const P=I[K];if(P!==void 0)switch(P.length){case 2:s.vertexAttrib2fv(Y.location,P);break;case 3:s.vertexAttrib3fv(Y.location,P);break;case 4:s.vertexAttrib4fv(Y.location,P);break;default:s.vertexAttrib1fv(Y.location,P)}}}}L()}function F(){k();for(const R in r){const V=r[R];for(const lt in V){const ot=V[lt];for(const xt in ot)g(ot[xt].object),delete ot[xt];delete V[lt]}delete r[R]}}function H(R){if(r[R.id]===void 0)return;const V=r[R.id];for(const lt in V){const ot=V[lt];for(const xt in ot)g(ot[xt].object),delete ot[xt];delete V[lt]}delete r[R.id]}function B(R){for(const V in r){const lt=r[V];if(lt[R.id]===void 0)continue;const ot=lt[R.id];for(const xt in ot)g(ot[xt].object),delete ot[xt];delete lt[R.id]}}function k(){U(),f=!0,c!==l&&(c=l,p(c.object))}function U(){l.geometry=null,l.program=null,l.wireframe=!1}return{setup:d,reset:k,resetDefaultState:U,dispose:F,releaseStatesOfGeometry:H,releaseStatesOfProgram:B,initAttributes:A,enableAttribute:S,disableUnusedAttributes:L}}function R1(s,t,i){let r;function l(p){r=p}function c(p,g){s.drawArrays(r,p,g),i.update(g,r,1)}function f(p,g,x){x!==0&&(s.drawArraysInstanced(r,p,g,x),i.update(g,r,x))}function d(p,g,x){if(x===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(r,p,0,g,0,x);let y=0;for(let E=0;E<x;E++)y+=g[E];i.update(y,r,1)}function m(p,g,x,v){if(x===0)return;const y=t.get("WEBGL_multi_draw");if(y===null)for(let E=0;E<p.length;E++)f(p[E],g[E],v[E]);else{y.multiDrawArraysInstancedWEBGL(r,p,0,g,0,v,0,x);let E=0;for(let A=0;A<x;A++)E+=g[A]*v[A];i.update(E,r,1)}}this.setMode=l,this.render=c,this.renderInstances=f,this.renderMultiDraw=d,this.renderMultiDrawInstances=m}function w1(s,t,i,r){let l;function c(){if(l!==void 0)return l;if(t.has("EXT_texture_filter_anisotropic")===!0){const B=t.get("EXT_texture_filter_anisotropic");l=s.getParameter(B.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else l=0;return l}function f(B){return!(B!==gi&&r.convert(B)!==s.getParameter(s.IMPLEMENTATION_COLOR_READ_FORMAT))}function d(B){const k=B===Xo&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(B!==Ci&&r.convert(B)!==s.getParameter(s.IMPLEMENTATION_COLOR_READ_TYPE)&&B!==ra&&!k)}function m(B){if(B==="highp"){if(s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.HIGH_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.HIGH_FLOAT).precision>0)return"highp";B="mediump"}return B==="mediump"&&s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.MEDIUM_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let p=i.precision!==void 0?i.precision:"highp";const g=m(p);g!==p&&(console.warn("THREE.WebGLRenderer:",p,"not supported, using",g,"instead."),p=g);const x=i.logarithmicDepthBuffer===!0,v=i.reverseDepthBuffer===!0&&t.has("EXT_clip_control"),y=s.getParameter(s.MAX_TEXTURE_IMAGE_UNITS),E=s.getParameter(s.MAX_VERTEX_TEXTURE_IMAGE_UNITS),A=s.getParameter(s.MAX_TEXTURE_SIZE),S=s.getParameter(s.MAX_CUBE_MAP_TEXTURE_SIZE),_=s.getParameter(s.MAX_VERTEX_ATTRIBS),L=s.getParameter(s.MAX_VERTEX_UNIFORM_VECTORS),D=s.getParameter(s.MAX_VARYING_VECTORS),C=s.getParameter(s.MAX_FRAGMENT_UNIFORM_VECTORS),F=E>0,H=s.getParameter(s.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:c,getMaxPrecision:m,textureFormatReadable:f,textureTypeReadable:d,precision:p,logarithmicDepthBuffer:x,reverseDepthBuffer:v,maxTextures:y,maxVertexTextures:E,maxTextureSize:A,maxCubemapSize:S,maxAttributes:_,maxVertexUniforms:L,maxVaryings:D,maxFragmentUniforms:C,vertexTextures:F,maxSamples:H}}function C1(s){const t=this;let i=null,r=0,l=!1,c=!1;const f=new yr,d=new se,m={value:null,needsUpdate:!1};this.uniform=m,this.numPlanes=0,this.numIntersection=0,this.init=function(x,v){const y=x.length!==0||v||r!==0||l;return l=v,r=x.length,y},this.beginShadows=function(){c=!0,g(null)},this.endShadows=function(){c=!1},this.setGlobalState=function(x,v){i=g(x,v,0)},this.setState=function(x,v,y){const E=x.clippingPlanes,A=x.clipIntersection,S=x.clipShadows,_=s.get(x);if(!l||E===null||E.length===0||c&&!S)c?g(null):p();else{const L=c?0:r,D=L*4;let C=_.clippingState||null;m.value=C,C=g(E,v,D,y);for(let F=0;F!==D;++F)C[F]=i[F];_.clippingState=C,this.numIntersection=A?this.numPlanes:0,this.numPlanes+=L}};function p(){m.value!==i&&(m.value=i,m.needsUpdate=r>0),t.numPlanes=r,t.numIntersection=0}function g(x,v,y,E){const A=x!==null?x.length:0;let S=null;if(A!==0){if(S=m.value,E!==!0||S===null){const _=y+A*4,L=v.matrixWorldInverse;d.getNormalMatrix(L),(S===null||S.length<_)&&(S=new Float32Array(_));for(let D=0,C=y;D!==A;++D,C+=4)f.copy(x[D]).applyMatrix4(L,d),f.normal.toArray(S,C),S[C+3]=f.constant}m.value=S,m.needsUpdate=!0}return t.numPlanes=A,t.numIntersection=0,S}}function D1(s){let t=new WeakMap;function i(f,d){return d===Xh?f.mapping=bs:d===Wh&&(f.mapping=As),f}function r(f){if(f&&f.isTexture){const d=f.mapping;if(d===Xh||d===Wh)if(t.has(f)){const m=t.get(f).texture;return i(m,f.mapping)}else{const m=f.image;if(m&&m.height>0){const p=new DE(m.height);return p.fromEquirectangularTexture(s,f),t.set(f,p),f.addEventListener("dispose",l),i(p.texture,f.mapping)}else return null}}return f}function l(f){const d=f.target;d.removeEventListener("dispose",l);const m=t.get(d);m!==void 0&&(t.delete(d),m.dispose())}function c(){t=new WeakMap}return{get:r,dispose:c}}const Ss=4,sv=[.125,.215,.35,.446,.526,.582],Tr=20,wh=new _0,ov=new Re;let Ch=null,Dh=0,Uh=0,Lh=!1;const Sr=(1+Math.sqrt(5))/2,ys=1/Sr,lv=[new et(-Sr,ys,0),new et(Sr,ys,0),new et(-ys,0,Sr),new et(ys,0,Sr),new et(0,Sr,-ys),new et(0,Sr,ys),new et(-1,1,-1),new et(1,1,-1),new et(-1,1,1),new et(1,1,1)],U1=new et;class cv{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(t,i=0,r=.1,l=100,c={}){const{size:f=256,position:d=U1}=c;Ch=this._renderer.getRenderTarget(),Dh=this._renderer.getActiveCubeFace(),Uh=this._renderer.getActiveMipmapLevel(),Lh=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(f);const m=this._allocateTargets();return m.depthBuffer=!0,this._sceneToCubeUV(t,r,l,m,d),i>0&&this._blur(m,0,0,i),this._applyPMREM(m),this._cleanup(m),m}fromEquirectangular(t,i=null){return this._fromTexture(t,i)}fromCubemap(t,i=null){return this._fromTexture(t,i)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=hv(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=fv(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodPlanes.length;t++)this._lodPlanes[t].dispose()}_cleanup(t){this._renderer.setRenderTarget(Ch,Dh,Uh),this._renderer.xr.enabled=Lh,t.scissorTest=!1,Rc(t,0,0,t.width,t.height)}_fromTexture(t,i){t.mapping===bs||t.mapping===As?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),Ch=this._renderer.getRenderTarget(),Dh=this._renderer.getActiveCubeFace(),Uh=this._renderer.getActiveMipmapLevel(),Lh=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const r=i||this._allocateTargets();return this._textureToCubeUV(t,r),this._applyPMREM(r),this._cleanup(r),r}_allocateTargets(){const t=3*Math.max(this._cubeSize,112),i=4*this._cubeSize,r={magFilter:bi,minFilter:bi,generateMipmaps:!1,type:Xo,format:gi,colorSpace:Rs,depthBuffer:!1},l=uv(t,i,r);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==i){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=uv(t,i,r);const{_lodMax:c}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=L1(c)),this._blurMaterial=N1(c,t,i)}return l}_compileMaterial(t){const i=new Ai(this._lodPlanes[0],t);this._renderer.compile(i,wh)}_sceneToCubeUV(t,i,r,l,c){const m=new li(90,1,i,r),p=[1,-1,1,1,1,1],g=[1,1,1,-1,-1,-1],x=this._renderer,v=x.autoClear,y=x.toneMapping;x.getClearColor(ov),x.toneMapping=Wa,x.autoClear=!1;const E=new c0({name:"PMREM.Background",side:Gn,depthWrite:!1,depthTest:!1}),A=new Ai(new Ls,E);let S=!1;const _=t.background;_?_.isColor&&(E.color.copy(_),t.background=null,S=!0):(E.color.copy(ov),S=!0);for(let L=0;L<6;L++){const D=L%3;D===0?(m.up.set(0,p[L],0),m.position.set(c.x,c.y,c.z),m.lookAt(c.x+g[L],c.y,c.z)):D===1?(m.up.set(0,0,p[L]),m.position.set(c.x,c.y,c.z),m.lookAt(c.x,c.y+g[L],c.z)):(m.up.set(0,p[L],0),m.position.set(c.x,c.y,c.z),m.lookAt(c.x,c.y,c.z+g[L]));const C=this._cubeSize;Rc(l,D*C,L>2?C:0,C,C),x.setRenderTarget(l),S&&x.render(A,m),x.render(t,m)}A.geometry.dispose(),A.material.dispose(),x.toneMapping=y,x.autoClear=v,t.background=_}_textureToCubeUV(t,i){const r=this._renderer,l=t.mapping===bs||t.mapping===As;l?(this._cubemapMaterial===null&&(this._cubemapMaterial=hv()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=fv());const c=l?this._cubemapMaterial:this._equirectMaterial,f=new Ai(this._lodPlanes[0],c),d=c.uniforms;d.envMap.value=t;const m=this._cubeSize;Rc(i,0,0,3*m,2*m),r.setRenderTarget(i),r.render(f,wh)}_applyPMREM(t){const i=this._renderer,r=i.autoClear;i.autoClear=!1;const l=this._lodPlanes.length;for(let c=1;c<l;c++){const f=Math.sqrt(this._sigmas[c]*this._sigmas[c]-this._sigmas[c-1]*this._sigmas[c-1]),d=lv[(l-c-1)%lv.length];this._blur(t,c-1,c,f,d)}i.autoClear=r}_blur(t,i,r,l,c){const f=this._pingPongRenderTarget;this._halfBlur(t,f,i,r,l,"latitudinal",c),this._halfBlur(f,t,r,r,l,"longitudinal",c)}_halfBlur(t,i,r,l,c,f,d){const m=this._renderer,p=this._blurMaterial;f!=="latitudinal"&&f!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const g=3,x=new Ai(this._lodPlanes[l],p),v=p.uniforms,y=this._sizeLods[r]-1,E=isFinite(c)?Math.PI/(2*y):2*Math.PI/(2*Tr-1),A=c/E,S=isFinite(c)?1+Math.floor(g*A):Tr;S>Tr&&console.warn(`sigmaRadians, ${c}, is too large and will clip, as it requested ${S} samples when the maximum is set to ${Tr}`);const _=[];let L=0;for(let B=0;B<Tr;++B){const k=B/A,U=Math.exp(-k*k/2);_.push(U),B===0?L+=U:B<S&&(L+=2*U)}for(let B=0;B<_.length;B++)_[B]=_[B]/L;v.envMap.value=t.texture,v.samples.value=S,v.weights.value=_,v.latitudinal.value=f==="latitudinal",d&&(v.poleAxis.value=d);const{_lodMax:D}=this;v.dTheta.value=E,v.mipInt.value=D-r;const C=this._sizeLods[l],F=3*C*(l>D-Ss?l-D+Ss:0),H=4*(this._cubeSize-C);Rc(i,F,H,3*C,2*C),m.setRenderTarget(i),m.render(x,wh)}}function L1(s){const t=[],i=[],r=[];let l=s;const c=s-Ss+1+sv.length;for(let f=0;f<c;f++){const d=Math.pow(2,l);i.push(d);let m=1/d;f>s-Ss?m=sv[f-s+Ss-1]:f===0&&(m=0),r.push(m);const p=1/(d-2),g=-p,x=1+p,v=[g,g,x,g,x,x,g,g,x,x,g,x],y=6,E=6,A=3,S=2,_=1,L=new Float32Array(A*E*y),D=new Float32Array(S*E*y),C=new Float32Array(_*E*y);for(let H=0;H<y;H++){const B=H%3*2/3-1,k=H>2?0:-1,U=[B,k,0,B+2/3,k,0,B+2/3,k+1,0,B,k,0,B+2/3,k+1,0,B,k+1,0];L.set(U,A*E*H),D.set(v,S*E*H);const R=[H,H,H,H,H,H];C.set(R,_*E*H)}const F=new Li;F.setAttribute("position",new Ri(L,A)),F.setAttribute("uv",new Ri(D,S)),F.setAttribute("faceIndex",new Ri(C,_)),t.push(F),l>Ss&&l--}return{lodPlanes:t,sizeLods:i,sigmas:r}}function uv(s,t,i){const r=new wr(s,t,i);return r.texture.mapping=jc,r.texture.name="PMREM.cubeUv",r.scissorTest=!0,r}function Rc(s,t,i,r,l){s.viewport.set(t,i,r,l),s.scissor.set(t,i,r,l)}function N1(s,t,i){const r=new Float32Array(Tr),l=new et(0,1,0);return new Ya({name:"SphericalGaussianBlur",defines:{n:Tr,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/i,CUBEUV_MAX_MIP:`${s}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:r},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:l}},vertexShader:jd(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:Xa,depthTest:!1,depthWrite:!1})}function fv(){return new Ya({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:jd(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:Xa,depthTest:!1,depthWrite:!1})}function hv(){return new Ya({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:jd(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Xa,depthTest:!1,depthWrite:!1})}function jd(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function O1(s){let t=new WeakMap,i=null;function r(d){if(d&&d.isTexture){const m=d.mapping,p=m===Xh||m===Wh,g=m===bs||m===As;if(p||g){let x=t.get(d);const v=x!==void 0?x.texture.pmremVersion:0;if(d.isRenderTargetTexture&&d.pmremVersion!==v)return i===null&&(i=new cv(s)),x=p?i.fromEquirectangular(d,x):i.fromCubemap(d,x),x.texture.pmremVersion=d.pmremVersion,t.set(d,x),x.texture;if(x!==void 0)return x.texture;{const y=d.image;return p&&y&&y.height>0||g&&y&&l(y)?(i===null&&(i=new cv(s)),x=p?i.fromEquirectangular(d):i.fromCubemap(d),x.texture.pmremVersion=d.pmremVersion,t.set(d,x),d.addEventListener("dispose",c),x.texture):null}}}return d}function l(d){let m=0;const p=6;for(let g=0;g<p;g++)d[g]!==void 0&&m++;return m===p}function c(d){const m=d.target;m.removeEventListener("dispose",c);const p=t.get(m);p!==void 0&&(t.delete(m),p.dispose())}function f(){t=new WeakMap,i!==null&&(i.dispose(),i=null)}return{get:r,dispose:f}}function P1(s){const t={};function i(r){if(t[r]!==void 0)return t[r];let l;switch(r){case"WEBGL_depth_texture":l=s.getExtension("WEBGL_depth_texture")||s.getExtension("MOZ_WEBGL_depth_texture")||s.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":l=s.getExtension("EXT_texture_filter_anisotropic")||s.getExtension("MOZ_EXT_texture_filter_anisotropic")||s.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":l=s.getExtension("WEBGL_compressed_texture_s3tc")||s.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||s.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":l=s.getExtension("WEBGL_compressed_texture_pvrtc")||s.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:l=s.getExtension(r)}return t[r]=l,l}return{has:function(r){return i(r)!==null},init:function(){i("EXT_color_buffer_float"),i("WEBGL_clip_cull_distance"),i("OES_texture_float_linear"),i("EXT_color_buffer_half_float"),i("WEBGL_multisampled_render_to_texture"),i("WEBGL_render_shared_exponent")},get:function(r){const l=i(r);return l===null&&zc("THREE.WebGLRenderer: "+r+" extension not supported."),l}}}function z1(s,t,i,r){const l={},c=new WeakMap;function f(x){const v=x.target;v.index!==null&&t.remove(v.index);for(const E in v.attributes)t.remove(v.attributes[E]);v.removeEventListener("dispose",f),delete l[v.id];const y=c.get(v);y&&(t.remove(y),c.delete(v)),r.releaseStatesOfGeometry(v),v.isInstancedBufferGeometry===!0&&delete v._maxInstanceCount,i.memory.geometries--}function d(x,v){return l[v.id]===!0||(v.addEventListener("dispose",f),l[v.id]=!0,i.memory.geometries++),v}function m(x){const v=x.attributes;for(const y in v)t.update(v[y],s.ARRAY_BUFFER)}function p(x){const v=[],y=x.index,E=x.attributes.position;let A=0;if(y!==null){const L=y.array;A=y.version;for(let D=0,C=L.length;D<C;D+=3){const F=L[D+0],H=L[D+1],B=L[D+2];v.push(F,H,H,B,B,F)}}else if(E!==void 0){const L=E.array;A=E.version;for(let D=0,C=L.length/3-1;D<C;D+=3){const F=D+0,H=D+1,B=D+2;v.push(F,H,H,B,B,F)}}else return;const S=new(r0(v)?f0:u0)(v,1);S.version=A;const _=c.get(x);_&&t.remove(_),c.set(x,S)}function g(x){const v=c.get(x);if(v){const y=x.index;y!==null&&v.version<y.version&&p(x)}else p(x);return c.get(x)}return{get:d,update:m,getWireframeAttribute:g}}function B1(s,t,i){let r;function l(v){r=v}let c,f;function d(v){c=v.type,f=v.bytesPerElement}function m(v,y){s.drawElements(r,y,c,v*f),i.update(y,r,1)}function p(v,y,E){E!==0&&(s.drawElementsInstanced(r,y,c,v*f,E),i.update(y,r,E))}function g(v,y,E){if(E===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(r,y,0,c,v,0,E);let S=0;for(let _=0;_<E;_++)S+=y[_];i.update(S,r,1)}function x(v,y,E,A){if(E===0)return;const S=t.get("WEBGL_multi_draw");if(S===null)for(let _=0;_<v.length;_++)p(v[_]/f,y[_],A[_]);else{S.multiDrawElementsInstancedWEBGL(r,y,0,c,v,0,A,0,E);let _=0;for(let L=0;L<E;L++)_+=y[L]*A[L];i.update(_,r,1)}}this.setMode=l,this.setIndex=d,this.render=m,this.renderInstances=p,this.renderMultiDraw=g,this.renderMultiDrawInstances=x}function I1(s){const t={geometries:0,textures:0},i={frame:0,calls:0,triangles:0,points:0,lines:0};function r(c,f,d){switch(i.calls++,f){case s.TRIANGLES:i.triangles+=d*(c/3);break;case s.LINES:i.lines+=d*(c/2);break;case s.LINE_STRIP:i.lines+=d*(c-1);break;case s.LINE_LOOP:i.lines+=d*c;break;case s.POINTS:i.points+=d*c;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",f);break}}function l(){i.calls=0,i.triangles=0,i.points=0,i.lines=0}return{memory:t,render:i,programs:null,autoReset:!0,reset:l,update:r}}function F1(s,t,i){const r=new WeakMap,l=new Qe;function c(f,d,m){const p=f.morphTargetInfluences,g=d.morphAttributes.position||d.morphAttributes.normal||d.morphAttributes.color,x=g!==void 0?g.length:0;let v=r.get(d);if(v===void 0||v.count!==x){let R=function(){k.dispose(),r.delete(d),d.removeEventListener("dispose",R)};var y=R;v!==void 0&&v.texture.dispose();const E=d.morphAttributes.position!==void 0,A=d.morphAttributes.normal!==void 0,S=d.morphAttributes.color!==void 0,_=d.morphAttributes.position||[],L=d.morphAttributes.normal||[],D=d.morphAttributes.color||[];let C=0;E===!0&&(C=1),A===!0&&(C=2),S===!0&&(C=3);let F=d.attributes.position.count*C,H=1;F>t.maxTextureSize&&(H=Math.ceil(F/t.maxTextureSize),F=t.maxTextureSize);const B=new Float32Array(F*H*4*x),k=new s0(B,F,H,x);k.type=ra,k.needsUpdate=!0;const U=C*4;for(let V=0;V<x;V++){const lt=_[V],ot=L[V],xt=D[V],dt=F*H*4*V;for(let I=0;I<lt.count;I++){const K=I*U;E===!0&&(l.fromBufferAttribute(lt,I),B[dt+K+0]=l.x,B[dt+K+1]=l.y,B[dt+K+2]=l.z,B[dt+K+3]=0),A===!0&&(l.fromBufferAttribute(ot,I),B[dt+K+4]=l.x,B[dt+K+5]=l.y,B[dt+K+6]=l.z,B[dt+K+7]=0),S===!0&&(l.fromBufferAttribute(xt,I),B[dt+K+8]=l.x,B[dt+K+9]=l.y,B[dt+K+10]=l.z,B[dt+K+11]=xt.itemSize===4?l.w:1)}}v={count:x,texture:k,size:new Me(F,H)},r.set(d,v),d.addEventListener("dispose",R)}if(f.isInstancedMesh===!0&&f.morphTexture!==null)m.getUniforms().setValue(s,"morphTexture",f.morphTexture,i);else{let E=0;for(let S=0;S<p.length;S++)E+=p[S];const A=d.morphTargetsRelative?1:1-E;m.getUniforms().setValue(s,"morphTargetBaseInfluence",A),m.getUniforms().setValue(s,"morphTargetInfluences",p)}m.getUniforms().setValue(s,"morphTargetsTexture",v.texture,i),m.getUniforms().setValue(s,"morphTargetsTextureSize",v.size)}return{update:c}}function H1(s,t,i,r){let l=new WeakMap;function c(m){const p=r.render.frame,g=m.geometry,x=t.get(m,g);if(l.get(x)!==p&&(t.update(x),l.set(x,p)),m.isInstancedMesh&&(m.hasEventListener("dispose",d)===!1&&m.addEventListener("dispose",d),l.get(m)!==p&&(i.update(m.instanceMatrix,s.ARRAY_BUFFER),m.instanceColor!==null&&i.update(m.instanceColor,s.ARRAY_BUFFER),l.set(m,p))),m.isSkinnedMesh){const v=m.skeleton;l.get(v)!==p&&(v.update(),l.set(v,p))}return x}function f(){l=new WeakMap}function d(m){const p=m.target;p.removeEventListener("dispose",d),i.remove(p.instanceMatrix),p.instanceColor!==null&&i.remove(p.instanceColor)}return{update:c,dispose:f}}const x0=new Vn,dv=new m0(1,1),y0=new s0,S0=new hE,M0=new p0,pv=[],mv=[],gv=new Float32Array(16),_v=new Float32Array(9),vv=new Float32Array(4);function Ns(s,t,i){const r=s[0];if(r<=0||r>0)return s;const l=t*i;let c=pv[l];if(c===void 0&&(c=new Float32Array(l),pv[l]=c),t!==0){r.toArray(c,0);for(let f=1,d=0;f!==t;++f)d+=i,s[f].toArray(c,d)}return c}function fn(s,t){if(s.length!==t.length)return!1;for(let i=0,r=s.length;i<r;i++)if(s[i]!==t[i])return!1;return!0}function hn(s,t){for(let i=0,r=t.length;i<r;i++)s[i]=t[i]}function Wc(s,t){let i=mv[t];i===void 0&&(i=new Int32Array(t),mv[t]=i);for(let r=0;r!==t;++r)i[r]=s.allocateTextureUnit();return i}function G1(s,t){const i=this.cache;i[0]!==t&&(s.uniform1f(this.addr,t),i[0]=t)}function V1(s,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y)&&(s.uniform2f(this.addr,t.x,t.y),i[0]=t.x,i[1]=t.y);else{if(fn(i,t))return;s.uniform2fv(this.addr,t),hn(i,t)}}function k1(s,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y||i[2]!==t.z)&&(s.uniform3f(this.addr,t.x,t.y,t.z),i[0]=t.x,i[1]=t.y,i[2]=t.z);else if(t.r!==void 0)(i[0]!==t.r||i[1]!==t.g||i[2]!==t.b)&&(s.uniform3f(this.addr,t.r,t.g,t.b),i[0]=t.r,i[1]=t.g,i[2]=t.b);else{if(fn(i,t))return;s.uniform3fv(this.addr,t),hn(i,t)}}function j1(s,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y||i[2]!==t.z||i[3]!==t.w)&&(s.uniform4f(this.addr,t.x,t.y,t.z,t.w),i[0]=t.x,i[1]=t.y,i[2]=t.z,i[3]=t.w);else{if(fn(i,t))return;s.uniform4fv(this.addr,t),hn(i,t)}}function X1(s,t){const i=this.cache,r=t.elements;if(r===void 0){if(fn(i,t))return;s.uniformMatrix2fv(this.addr,!1,t),hn(i,t)}else{if(fn(i,r))return;vv.set(r),s.uniformMatrix2fv(this.addr,!1,vv),hn(i,r)}}function W1(s,t){const i=this.cache,r=t.elements;if(r===void 0){if(fn(i,t))return;s.uniformMatrix3fv(this.addr,!1,t),hn(i,t)}else{if(fn(i,r))return;_v.set(r),s.uniformMatrix3fv(this.addr,!1,_v),hn(i,r)}}function q1(s,t){const i=this.cache,r=t.elements;if(r===void 0){if(fn(i,t))return;s.uniformMatrix4fv(this.addr,!1,t),hn(i,t)}else{if(fn(i,r))return;gv.set(r),s.uniformMatrix4fv(this.addr,!1,gv),hn(i,r)}}function Y1(s,t){const i=this.cache;i[0]!==t&&(s.uniform1i(this.addr,t),i[0]=t)}function Z1(s,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y)&&(s.uniform2i(this.addr,t.x,t.y),i[0]=t.x,i[1]=t.y);else{if(fn(i,t))return;s.uniform2iv(this.addr,t),hn(i,t)}}function K1(s,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y||i[2]!==t.z)&&(s.uniform3i(this.addr,t.x,t.y,t.z),i[0]=t.x,i[1]=t.y,i[2]=t.z);else{if(fn(i,t))return;s.uniform3iv(this.addr,t),hn(i,t)}}function Q1(s,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y||i[2]!==t.z||i[3]!==t.w)&&(s.uniform4i(this.addr,t.x,t.y,t.z,t.w),i[0]=t.x,i[1]=t.y,i[2]=t.z,i[3]=t.w);else{if(fn(i,t))return;s.uniform4iv(this.addr,t),hn(i,t)}}function J1(s,t){const i=this.cache;i[0]!==t&&(s.uniform1ui(this.addr,t),i[0]=t)}function $1(s,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y)&&(s.uniform2ui(this.addr,t.x,t.y),i[0]=t.x,i[1]=t.y);else{if(fn(i,t))return;s.uniform2uiv(this.addr,t),hn(i,t)}}function tA(s,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y||i[2]!==t.z)&&(s.uniform3ui(this.addr,t.x,t.y,t.z),i[0]=t.x,i[1]=t.y,i[2]=t.z);else{if(fn(i,t))return;s.uniform3uiv(this.addr,t),hn(i,t)}}function eA(s,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y||i[2]!==t.z||i[3]!==t.w)&&(s.uniform4ui(this.addr,t.x,t.y,t.z,t.w),i[0]=t.x,i[1]=t.y,i[2]=t.z,i[3]=t.w);else{if(fn(i,t))return;s.uniform4uiv(this.addr,t),hn(i,t)}}function nA(s,t,i){const r=this.cache,l=i.allocateTextureUnit();r[0]!==l&&(s.uniform1i(this.addr,l),r[0]=l);let c;this.type===s.SAMPLER_2D_SHADOW?(dv.compareFunction=a0,c=dv):c=x0,i.setTexture2D(t||c,l)}function iA(s,t,i){const r=this.cache,l=i.allocateTextureUnit();r[0]!==l&&(s.uniform1i(this.addr,l),r[0]=l),i.setTexture3D(t||S0,l)}function aA(s,t,i){const r=this.cache,l=i.allocateTextureUnit();r[0]!==l&&(s.uniform1i(this.addr,l),r[0]=l),i.setTextureCube(t||M0,l)}function rA(s,t,i){const r=this.cache,l=i.allocateTextureUnit();r[0]!==l&&(s.uniform1i(this.addr,l),r[0]=l),i.setTexture2DArray(t||y0,l)}function sA(s){switch(s){case 5126:return G1;case 35664:return V1;case 35665:return k1;case 35666:return j1;case 35674:return X1;case 35675:return W1;case 35676:return q1;case 5124:case 35670:return Y1;case 35667:case 35671:return Z1;case 35668:case 35672:return K1;case 35669:case 35673:return Q1;case 5125:return J1;case 36294:return $1;case 36295:return tA;case 36296:return eA;case 35678:case 36198:case 36298:case 36306:case 35682:return nA;case 35679:case 36299:case 36307:return iA;case 35680:case 36300:case 36308:case 36293:return aA;case 36289:case 36303:case 36311:case 36292:return rA}}function oA(s,t){s.uniform1fv(this.addr,t)}function lA(s,t){const i=Ns(t,this.size,2);s.uniform2fv(this.addr,i)}function cA(s,t){const i=Ns(t,this.size,3);s.uniform3fv(this.addr,i)}function uA(s,t){const i=Ns(t,this.size,4);s.uniform4fv(this.addr,i)}function fA(s,t){const i=Ns(t,this.size,4);s.uniformMatrix2fv(this.addr,!1,i)}function hA(s,t){const i=Ns(t,this.size,9);s.uniformMatrix3fv(this.addr,!1,i)}function dA(s,t){const i=Ns(t,this.size,16);s.uniformMatrix4fv(this.addr,!1,i)}function pA(s,t){s.uniform1iv(this.addr,t)}function mA(s,t){s.uniform2iv(this.addr,t)}function gA(s,t){s.uniform3iv(this.addr,t)}function _A(s,t){s.uniform4iv(this.addr,t)}function vA(s,t){s.uniform1uiv(this.addr,t)}function xA(s,t){s.uniform2uiv(this.addr,t)}function yA(s,t){s.uniform3uiv(this.addr,t)}function SA(s,t){s.uniform4uiv(this.addr,t)}function MA(s,t,i){const r=this.cache,l=t.length,c=Wc(i,l);fn(r,c)||(s.uniform1iv(this.addr,c),hn(r,c));for(let f=0;f!==l;++f)i.setTexture2D(t[f]||x0,c[f])}function EA(s,t,i){const r=this.cache,l=t.length,c=Wc(i,l);fn(r,c)||(s.uniform1iv(this.addr,c),hn(r,c));for(let f=0;f!==l;++f)i.setTexture3D(t[f]||S0,c[f])}function TA(s,t,i){const r=this.cache,l=t.length,c=Wc(i,l);fn(r,c)||(s.uniform1iv(this.addr,c),hn(r,c));for(let f=0;f!==l;++f)i.setTextureCube(t[f]||M0,c[f])}function bA(s,t,i){const r=this.cache,l=t.length,c=Wc(i,l);fn(r,c)||(s.uniform1iv(this.addr,c),hn(r,c));for(let f=0;f!==l;++f)i.setTexture2DArray(t[f]||y0,c[f])}function AA(s){switch(s){case 5126:return oA;case 35664:return lA;case 35665:return cA;case 35666:return uA;case 35674:return fA;case 35675:return hA;case 35676:return dA;case 5124:case 35670:return pA;case 35667:case 35671:return mA;case 35668:case 35672:return gA;case 35669:case 35673:return _A;case 5125:return vA;case 36294:return xA;case 36295:return yA;case 36296:return SA;case 35678:case 36198:case 36298:case 36306:case 35682:return MA;case 35679:case 36299:case 36307:return EA;case 35680:case 36300:case 36308:case 36293:return TA;case 36289:case 36303:case 36311:case 36292:return bA}}class RA{constructor(t,i,r){this.id=t,this.addr=r,this.cache=[],this.type=i.type,this.setValue=sA(i.type)}}class wA{constructor(t,i,r){this.id=t,this.addr=r,this.cache=[],this.type=i.type,this.size=i.size,this.setValue=AA(i.type)}}class CA{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,i,r){const l=this.seq;for(let c=0,f=l.length;c!==f;++c){const d=l[c];d.setValue(t,i[d.id],r)}}}const Nh=/(\w+)(\])?(\[|\.)?/g;function xv(s,t){s.seq.push(t),s.map[t.id]=t}function DA(s,t,i){const r=s.name,l=r.length;for(Nh.lastIndex=0;;){const c=Nh.exec(r),f=Nh.lastIndex;let d=c[1];const m=c[2]==="]",p=c[3];if(m&&(d=d|0),p===void 0||p==="["&&f+2===l){xv(i,p===void 0?new RA(d,s,t):new wA(d,s,t));break}else{let x=i.map[d];x===void 0&&(x=new CA(d),xv(i,x)),i=x}}}class Bc{constructor(t,i){this.seq=[],this.map={};const r=t.getProgramParameter(i,t.ACTIVE_UNIFORMS);for(let l=0;l<r;++l){const c=t.getActiveUniform(i,l),f=t.getUniformLocation(i,c.name);DA(c,f,this)}}setValue(t,i,r,l){const c=this.map[i];c!==void 0&&c.setValue(t,r,l)}setOptional(t,i,r){const l=i[r];l!==void 0&&this.setValue(t,r,l)}static upload(t,i,r,l){for(let c=0,f=i.length;c!==f;++c){const d=i[c],m=r[d.id];m.needsUpdate!==!1&&d.setValue(t,m.value,l)}}static seqWithValue(t,i){const r=[];for(let l=0,c=t.length;l!==c;++l){const f=t[l];f.id in i&&r.push(f)}return r}}function yv(s,t,i){const r=s.createShader(t);return s.shaderSource(r,i),s.compileShader(r),r}const UA=37297;let LA=0;function NA(s,t){const i=s.split(`
`),r=[],l=Math.max(t-6,0),c=Math.min(t+6,i.length);for(let f=l;f<c;f++){const d=f+1;r.push(`${d===t?">":" "} ${d}: ${i[f]}`)}return r.join(`
`)}const Sv=new se;function OA(s){Ae._getMatrix(Sv,Ae.workingColorSpace,s);const t=`mat3( ${Sv.elements.map(i=>i.toFixed(4))} )`;switch(Ae.getTransfer(s)){case Fc:return[t,"LinearTransferOETF"];case ze:return[t,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",s),[t,"LinearTransferOETF"]}}function Mv(s,t,i){const r=s.getShaderParameter(t,s.COMPILE_STATUS),l=s.getShaderInfoLog(t).trim();if(r&&l==="")return"";const c=/ERROR: 0:(\d+)/.exec(l);if(c){const f=parseInt(c[1]);return i.toUpperCase()+`

`+l+`

`+NA(s.getShaderSource(t),f)}else return l}function PA(s,t){const i=OA(t);return[`vec4 ${s}( vec4 value ) {`,`	return ${i[1]}( vec4( value.rgb * ${i[0]}, value.a ) );`,"}"].join(`
`)}function zA(s,t){let i;switch(t){case IM:i="Linear";break;case FM:i="Reinhard";break;case HM:i="Cineon";break;case GM:i="ACESFilmic";break;case kM:i="AgX";break;case jM:i="Neutral";break;case VM:i="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",t),i="Linear"}return"vec3 "+s+"( vec3 color ) { return "+i+"ToneMapping( color ); }"}const wc=new et;function BA(){Ae.getLuminanceCoefficients(wc);const s=wc.x.toFixed(4),t=wc.y.toFixed(4),i=wc.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${s}, ${t}, ${i} );`,"	return dot( weights, rgb );","}"].join(`
`)}function IA(s){return[s.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",s.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(zo).join(`
`)}function FA(s){const t=[];for(const i in s){const r=s[i];r!==!1&&t.push("#define "+i+" "+r)}return t.join(`
`)}function HA(s,t){const i={},r=s.getProgramParameter(t,s.ACTIVE_ATTRIBUTES);for(let l=0;l<r;l++){const c=s.getActiveAttrib(t,l),f=c.name;let d=1;c.type===s.FLOAT_MAT2&&(d=2),c.type===s.FLOAT_MAT3&&(d=3),c.type===s.FLOAT_MAT4&&(d=4),i[f]={type:c.type,location:s.getAttribLocation(t,f),locationSize:d}}return i}function zo(s){return s!==""}function Ev(s,t){const i=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return s.replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,i).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function Tv(s,t){return s.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}const GA=/^[ \t]*#include +<([\w\d./]+)>/gm;function Md(s){return s.replace(GA,kA)}const VA=new Map;function kA(s,t){let i=le[t];if(i===void 0){const r=VA.get(t);if(r!==void 0)i=le[r],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,r);else throw new Error("Can not resolve #include <"+t+">")}return Md(i)}const jA=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function bv(s){return s.replace(jA,XA)}function XA(s,t,i,r){let l="";for(let c=parseInt(t);c<parseInt(i);c++)l+=r.replace(/\[\s*i\s*\]/g,"[ "+c+" ]").replace(/UNROLLED_LOOP_INDEX/g,c);return l}function Av(s){let t=`precision ${s.precision} float;
	precision ${s.precision} int;
	precision ${s.precision} sampler2D;
	precision ${s.precision} samplerCube;
	precision ${s.precision} sampler3D;
	precision ${s.precision} sampler2DArray;
	precision ${s.precision} sampler2DShadow;
	precision ${s.precision} samplerCubeShadow;
	precision ${s.precision} sampler2DArrayShadow;
	precision ${s.precision} isampler2D;
	precision ${s.precision} isampler3D;
	precision ${s.precision} isamplerCube;
	precision ${s.precision} isampler2DArray;
	precision ${s.precision} usampler2D;
	precision ${s.precision} usampler3D;
	precision ${s.precision} usamplerCube;
	precision ${s.precision} usampler2DArray;
	`;return s.precision==="highp"?t+=`
#define HIGH_PRECISION`:s.precision==="mediump"?t+=`
#define MEDIUM_PRECISION`:s.precision==="lowp"&&(t+=`
#define LOW_PRECISION`),t}function WA(s){let t="SHADOWMAP_TYPE_BASIC";return s.shadowMapType===qv?t="SHADOWMAP_TYPE_PCF":s.shadowMapType===_M?t="SHADOWMAP_TYPE_PCF_SOFT":s.shadowMapType===ia&&(t="SHADOWMAP_TYPE_VSM"),t}function qA(s){let t="ENVMAP_TYPE_CUBE";if(s.envMap)switch(s.envMapMode){case bs:case As:t="ENVMAP_TYPE_CUBE";break;case jc:t="ENVMAP_TYPE_CUBE_UV";break}return t}function YA(s){let t="ENVMAP_MODE_REFLECTION";if(s.envMap)switch(s.envMapMode){case As:t="ENVMAP_MODE_REFRACTION";break}return t}function ZA(s){let t="ENVMAP_BLENDING_NONE";if(s.envMap)switch(s.combine){case Dd:t="ENVMAP_BLENDING_MULTIPLY";break;case zM:t="ENVMAP_BLENDING_MIX";break;case BM:t="ENVMAP_BLENDING_ADD";break}return t}function KA(s){const t=s.envMapCubeUVHeight;if(t===null)return null;const i=Math.log2(t)-2,r=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,i),7*16)),texelHeight:r,maxMip:i}}function QA(s,t,i,r){const l=s.getContext(),c=i.defines;let f=i.vertexShader,d=i.fragmentShader;const m=WA(i),p=qA(i),g=YA(i),x=ZA(i),v=KA(i),y=IA(i),E=FA(c),A=l.createProgram();let S,_,L=i.glslVersion?"#version "+i.glslVersion+`
`:"";i.isRawShaderMaterial?(S=["#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,E].filter(zo).join(`
`),S.length>0&&(S+=`
`),_=["#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,E].filter(zo).join(`
`),_.length>0&&(_+=`
`)):(S=[Av(i),"#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,E,i.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",i.batching?"#define USE_BATCHING":"",i.batchingColor?"#define USE_BATCHING_COLOR":"",i.instancing?"#define USE_INSTANCING":"",i.instancingColor?"#define USE_INSTANCING_COLOR":"",i.instancingMorph?"#define USE_INSTANCING_MORPH":"",i.useFog&&i.fog?"#define USE_FOG":"",i.useFog&&i.fogExp2?"#define FOG_EXP2":"",i.map?"#define USE_MAP":"",i.envMap?"#define USE_ENVMAP":"",i.envMap?"#define "+g:"",i.lightMap?"#define USE_LIGHTMAP":"",i.aoMap?"#define USE_AOMAP":"",i.bumpMap?"#define USE_BUMPMAP":"",i.normalMap?"#define USE_NORMALMAP":"",i.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",i.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",i.displacementMap?"#define USE_DISPLACEMENTMAP":"",i.emissiveMap?"#define USE_EMISSIVEMAP":"",i.anisotropy?"#define USE_ANISOTROPY":"",i.anisotropyMap?"#define USE_ANISOTROPYMAP":"",i.clearcoatMap?"#define USE_CLEARCOATMAP":"",i.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",i.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",i.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",i.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",i.specularMap?"#define USE_SPECULARMAP":"",i.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",i.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",i.roughnessMap?"#define USE_ROUGHNESSMAP":"",i.metalnessMap?"#define USE_METALNESSMAP":"",i.alphaMap?"#define USE_ALPHAMAP":"",i.alphaHash?"#define USE_ALPHAHASH":"",i.transmission?"#define USE_TRANSMISSION":"",i.transmissionMap?"#define USE_TRANSMISSIONMAP":"",i.thicknessMap?"#define USE_THICKNESSMAP":"",i.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",i.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",i.mapUv?"#define MAP_UV "+i.mapUv:"",i.alphaMapUv?"#define ALPHAMAP_UV "+i.alphaMapUv:"",i.lightMapUv?"#define LIGHTMAP_UV "+i.lightMapUv:"",i.aoMapUv?"#define AOMAP_UV "+i.aoMapUv:"",i.emissiveMapUv?"#define EMISSIVEMAP_UV "+i.emissiveMapUv:"",i.bumpMapUv?"#define BUMPMAP_UV "+i.bumpMapUv:"",i.normalMapUv?"#define NORMALMAP_UV "+i.normalMapUv:"",i.displacementMapUv?"#define DISPLACEMENTMAP_UV "+i.displacementMapUv:"",i.metalnessMapUv?"#define METALNESSMAP_UV "+i.metalnessMapUv:"",i.roughnessMapUv?"#define ROUGHNESSMAP_UV "+i.roughnessMapUv:"",i.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+i.anisotropyMapUv:"",i.clearcoatMapUv?"#define CLEARCOATMAP_UV "+i.clearcoatMapUv:"",i.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+i.clearcoatNormalMapUv:"",i.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+i.clearcoatRoughnessMapUv:"",i.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+i.iridescenceMapUv:"",i.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+i.iridescenceThicknessMapUv:"",i.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+i.sheenColorMapUv:"",i.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+i.sheenRoughnessMapUv:"",i.specularMapUv?"#define SPECULARMAP_UV "+i.specularMapUv:"",i.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+i.specularColorMapUv:"",i.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+i.specularIntensityMapUv:"",i.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+i.transmissionMapUv:"",i.thicknessMapUv?"#define THICKNESSMAP_UV "+i.thicknessMapUv:"",i.vertexTangents&&i.flatShading===!1?"#define USE_TANGENT":"",i.vertexColors?"#define USE_COLOR":"",i.vertexAlphas?"#define USE_COLOR_ALPHA":"",i.vertexUv1s?"#define USE_UV1":"",i.vertexUv2s?"#define USE_UV2":"",i.vertexUv3s?"#define USE_UV3":"",i.pointsUvs?"#define USE_POINTS_UV":"",i.flatShading?"#define FLAT_SHADED":"",i.skinning?"#define USE_SKINNING":"",i.morphTargets?"#define USE_MORPHTARGETS":"",i.morphNormals&&i.flatShading===!1?"#define USE_MORPHNORMALS":"",i.morphColors?"#define USE_MORPHCOLORS":"",i.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+i.morphTextureStride:"",i.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+i.morphTargetsCount:"",i.doubleSided?"#define DOUBLE_SIDED":"",i.flipSided?"#define FLIP_SIDED":"",i.shadowMapEnabled?"#define USE_SHADOWMAP":"",i.shadowMapEnabled?"#define "+m:"",i.sizeAttenuation?"#define USE_SIZEATTENUATION":"",i.numLightProbes>0?"#define USE_LIGHT_PROBES":"",i.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",i.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(zo).join(`
`),_=[Av(i),"#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,E,i.useFog&&i.fog?"#define USE_FOG":"",i.useFog&&i.fogExp2?"#define FOG_EXP2":"",i.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",i.map?"#define USE_MAP":"",i.matcap?"#define USE_MATCAP":"",i.envMap?"#define USE_ENVMAP":"",i.envMap?"#define "+p:"",i.envMap?"#define "+g:"",i.envMap?"#define "+x:"",v?"#define CUBEUV_TEXEL_WIDTH "+v.texelWidth:"",v?"#define CUBEUV_TEXEL_HEIGHT "+v.texelHeight:"",v?"#define CUBEUV_MAX_MIP "+v.maxMip+".0":"",i.lightMap?"#define USE_LIGHTMAP":"",i.aoMap?"#define USE_AOMAP":"",i.bumpMap?"#define USE_BUMPMAP":"",i.normalMap?"#define USE_NORMALMAP":"",i.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",i.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",i.emissiveMap?"#define USE_EMISSIVEMAP":"",i.anisotropy?"#define USE_ANISOTROPY":"",i.anisotropyMap?"#define USE_ANISOTROPYMAP":"",i.clearcoat?"#define USE_CLEARCOAT":"",i.clearcoatMap?"#define USE_CLEARCOATMAP":"",i.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",i.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",i.dispersion?"#define USE_DISPERSION":"",i.iridescence?"#define USE_IRIDESCENCE":"",i.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",i.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",i.specularMap?"#define USE_SPECULARMAP":"",i.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",i.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",i.roughnessMap?"#define USE_ROUGHNESSMAP":"",i.metalnessMap?"#define USE_METALNESSMAP":"",i.alphaMap?"#define USE_ALPHAMAP":"",i.alphaTest?"#define USE_ALPHATEST":"",i.alphaHash?"#define USE_ALPHAHASH":"",i.sheen?"#define USE_SHEEN":"",i.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",i.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",i.transmission?"#define USE_TRANSMISSION":"",i.transmissionMap?"#define USE_TRANSMISSIONMAP":"",i.thicknessMap?"#define USE_THICKNESSMAP":"",i.vertexTangents&&i.flatShading===!1?"#define USE_TANGENT":"",i.vertexColors||i.instancingColor||i.batchingColor?"#define USE_COLOR":"",i.vertexAlphas?"#define USE_COLOR_ALPHA":"",i.vertexUv1s?"#define USE_UV1":"",i.vertexUv2s?"#define USE_UV2":"",i.vertexUv3s?"#define USE_UV3":"",i.pointsUvs?"#define USE_POINTS_UV":"",i.gradientMap?"#define USE_GRADIENTMAP":"",i.flatShading?"#define FLAT_SHADED":"",i.doubleSided?"#define DOUBLE_SIDED":"",i.flipSided?"#define FLIP_SIDED":"",i.shadowMapEnabled?"#define USE_SHADOWMAP":"",i.shadowMapEnabled?"#define "+m:"",i.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",i.numLightProbes>0?"#define USE_LIGHT_PROBES":"",i.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",i.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",i.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",i.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",i.toneMapping!==Wa?"#define TONE_MAPPING":"",i.toneMapping!==Wa?le.tonemapping_pars_fragment:"",i.toneMapping!==Wa?zA("toneMapping",i.toneMapping):"",i.dithering?"#define DITHERING":"",i.opaque?"#define OPAQUE":"",le.colorspace_pars_fragment,PA("linearToOutputTexel",i.outputColorSpace),BA(),i.useDepthPacking?"#define DEPTH_PACKING "+i.depthPacking:"",`
`].filter(zo).join(`
`)),f=Md(f),f=Ev(f,i),f=Tv(f,i),d=Md(d),d=Ev(d,i),d=Tv(d,i),f=bv(f),d=bv(d),i.isRawShaderMaterial!==!0&&(L=`#version 300 es
`,S=[y,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+S,_=["#define varying in",i.glslVersion===F_?"":"layout(location = 0) out highp vec4 pc_fragColor;",i.glslVersion===F_?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+_);const D=L+S+f,C=L+_+d,F=yv(l,l.VERTEX_SHADER,D),H=yv(l,l.FRAGMENT_SHADER,C);l.attachShader(A,F),l.attachShader(A,H),i.index0AttributeName!==void 0?l.bindAttribLocation(A,0,i.index0AttributeName):i.morphTargets===!0&&l.bindAttribLocation(A,0,"position"),l.linkProgram(A);function B(V){if(s.debug.checkShaderErrors){const lt=l.getProgramInfoLog(A).trim(),ot=l.getShaderInfoLog(F).trim(),xt=l.getShaderInfoLog(H).trim();let dt=!0,I=!0;if(l.getProgramParameter(A,l.LINK_STATUS)===!1)if(dt=!1,typeof s.debug.onShaderError=="function")s.debug.onShaderError(l,A,F,H);else{const K=Mv(l,F,"vertex"),Y=Mv(l,H,"fragment");console.error("THREE.WebGLProgram: Shader Error "+l.getError()+" - VALIDATE_STATUS "+l.getProgramParameter(A,l.VALIDATE_STATUS)+`

Material Name: `+V.name+`
Material Type: `+V.type+`

Program Info Log: `+lt+`
`+K+`
`+Y)}else lt!==""?console.warn("THREE.WebGLProgram: Program Info Log:",lt):(ot===""||xt==="")&&(I=!1);I&&(V.diagnostics={runnable:dt,programLog:lt,vertexShader:{log:ot,prefix:S},fragmentShader:{log:xt,prefix:_}})}l.deleteShader(F),l.deleteShader(H),k=new Bc(l,A),U=HA(l,A)}let k;this.getUniforms=function(){return k===void 0&&B(this),k};let U;this.getAttributes=function(){return U===void 0&&B(this),U};let R=i.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return R===!1&&(R=l.getProgramParameter(A,UA)),R},this.destroy=function(){r.releaseStatesOfProgram(this),l.deleteProgram(A),this.program=void 0},this.type=i.shaderType,this.name=i.shaderName,this.id=LA++,this.cacheKey=t,this.usedTimes=1,this.program=A,this.vertexShader=F,this.fragmentShader=H,this}let JA=0;class $A{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t){const i=t.vertexShader,r=t.fragmentShader,l=this._getShaderStage(i),c=this._getShaderStage(r),f=this._getShaderCacheForMaterial(t);return f.has(l)===!1&&(f.add(l),l.usedTimes++),f.has(c)===!1&&(f.add(c),c.usedTimes++),this}remove(t){const i=this.materialCache.get(t);for(const r of i)r.usedTimes--,r.usedTimes===0&&this.shaderCache.delete(r.code);return this.materialCache.delete(t),this}getVertexShaderID(t){return this._getShaderStage(t.vertexShader).id}getFragmentShaderID(t){return this._getShaderStage(t.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){const i=this.materialCache;let r=i.get(t);return r===void 0&&(r=new Set,i.set(t,r)),r}_getShaderStage(t){const i=this.shaderCache;let r=i.get(t);return r===void 0&&(r=new tR(t),i.set(t,r)),r}}class tR{constructor(t){this.id=JA++,this.code=t,this.usedTimes=0}}function eR(s,t,i,r,l,c,f){const d=new o0,m=new $A,p=new Set,g=[],x=l.logarithmicDepthBuffer,v=l.vertexTextures;let y=l.precision;const E={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function A(U){return p.add(U),U===0?"uv":`uv${U}`}function S(U,R,V,lt,ot){const xt=lt.fog,dt=ot.geometry,I=U.isMeshStandardMaterial?lt.environment:null,K=(U.isMeshStandardMaterial?i:t).get(U.envMap||I),Y=K&&K.mapping===jc?K.image.height:null,Et=E[U.type];U.precision!==null&&(y=l.getMaxPrecision(U.precision),y!==U.precision&&console.warn("THREE.WebGLProgram.getParameters:",U.precision,"not supported, using",y,"instead."));const P=dt.morphAttributes.position||dt.morphAttributes.normal||dt.morphAttributes.color,tt=P!==void 0?P.length:0;let yt=0;dt.morphAttributes.position!==void 0&&(yt=1),dt.morphAttributes.normal!==void 0&&(yt=2),dt.morphAttributes.color!==void 0&&(yt=3);let Mt,J,mt,St;if(Et){const Ee=Ti[Et];Mt=Ee.vertexShader,J=Ee.fragmentShader}else Mt=U.vertexShader,J=U.fragmentShader,m.update(U),mt=m.getVertexShaderID(U),St=m.getFragmentShaderID(U);const Rt=s.getRenderTarget(),Lt=s.state.buffers.depth.getReversed(),oe=ot.isInstancedMesh===!0,Kt=ot.isBatchedMesh===!0,He=!!U.map,Be=!!U.matcap,fe=!!K,G=!!U.aoMap,On=!!U.lightMap,ge=!!U.bumpMap,ie=!!U.normalMap,Xt=!!U.displacementMap,Ue=!!U.emissiveMap,Vt=!!U.metalnessMap,O=!!U.roughnessMap,b=U.anisotropy>0,nt=U.clearcoat>0,gt=U.dispersion>0,Tt=U.iridescence>0,ft=U.sheen>0,Pt=U.transmission>0,wt=b&&!!U.anisotropyMap,Gt=nt&&!!U.clearcoatMap,$t=nt&&!!U.clearcoatNormalMap,At=nt&&!!U.clearcoatRoughnessMap,Ft=Tt&&!!U.iridescenceMap,Yt=Tt&&!!U.iridescenceThicknessMap,Qt=ft&&!!U.sheenColorMap,zt=ft&&!!U.sheenRoughnessMap,ce=!!U.specularMap,ne=!!U.specularColorMap,Le=!!U.specularIntensityMap,X=Pt&&!!U.transmissionMap,Nt=Pt&&!!U.thicknessMap,ct=!!U.gradientMap,_t=!!U.alphaMap,Bt=U.alphaTest>0,Ot=!!U.alphaHash,ae=!!U.extensions;let Ge=Wa;U.toneMapped&&(Rt===null||Rt.isXRRenderTarget===!0)&&(Ge=s.toneMapping);const en={shaderID:Et,shaderType:U.type,shaderName:U.name,vertexShader:Mt,fragmentShader:J,defines:U.defines,customVertexShaderID:mt,customFragmentShaderID:St,isRawShaderMaterial:U.isRawShaderMaterial===!0,glslVersion:U.glslVersion,precision:y,batching:Kt,batchingColor:Kt&&ot._colorsTexture!==null,instancing:oe,instancingColor:oe&&ot.instanceColor!==null,instancingMorph:oe&&ot.morphTexture!==null,supportsVertexTextures:v,outputColorSpace:Rt===null?s.outputColorSpace:Rt.isXRRenderTarget===!0?Rt.texture.colorSpace:Rs,alphaToCoverage:!!U.alphaToCoverage,map:He,matcap:Be,envMap:fe,envMapMode:fe&&K.mapping,envMapCubeUVHeight:Y,aoMap:G,lightMap:On,bumpMap:ge,normalMap:ie,displacementMap:v&&Xt,emissiveMap:Ue,normalMapObjectSpace:ie&&U.normalMapType===YM,normalMapTangentSpace:ie&&U.normalMapType===i0,metalnessMap:Vt,roughnessMap:O,anisotropy:b,anisotropyMap:wt,clearcoat:nt,clearcoatMap:Gt,clearcoatNormalMap:$t,clearcoatRoughnessMap:At,dispersion:gt,iridescence:Tt,iridescenceMap:Ft,iridescenceThicknessMap:Yt,sheen:ft,sheenColorMap:Qt,sheenRoughnessMap:zt,specularMap:ce,specularColorMap:ne,specularIntensityMap:Le,transmission:Pt,transmissionMap:X,thicknessMap:Nt,gradientMap:ct,opaque:U.transparent===!1&&U.blending===Ms&&U.alphaToCoverage===!1,alphaMap:_t,alphaTest:Bt,alphaHash:Ot,combine:U.combine,mapUv:He&&A(U.map.channel),aoMapUv:G&&A(U.aoMap.channel),lightMapUv:On&&A(U.lightMap.channel),bumpMapUv:ge&&A(U.bumpMap.channel),normalMapUv:ie&&A(U.normalMap.channel),displacementMapUv:Xt&&A(U.displacementMap.channel),emissiveMapUv:Ue&&A(U.emissiveMap.channel),metalnessMapUv:Vt&&A(U.metalnessMap.channel),roughnessMapUv:O&&A(U.roughnessMap.channel),anisotropyMapUv:wt&&A(U.anisotropyMap.channel),clearcoatMapUv:Gt&&A(U.clearcoatMap.channel),clearcoatNormalMapUv:$t&&A(U.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:At&&A(U.clearcoatRoughnessMap.channel),iridescenceMapUv:Ft&&A(U.iridescenceMap.channel),iridescenceThicknessMapUv:Yt&&A(U.iridescenceThicknessMap.channel),sheenColorMapUv:Qt&&A(U.sheenColorMap.channel),sheenRoughnessMapUv:zt&&A(U.sheenRoughnessMap.channel),specularMapUv:ce&&A(U.specularMap.channel),specularColorMapUv:ne&&A(U.specularColorMap.channel),specularIntensityMapUv:Le&&A(U.specularIntensityMap.channel),transmissionMapUv:X&&A(U.transmissionMap.channel),thicknessMapUv:Nt&&A(U.thicknessMap.channel),alphaMapUv:_t&&A(U.alphaMap.channel),vertexTangents:!!dt.attributes.tangent&&(ie||b),vertexColors:U.vertexColors,vertexAlphas:U.vertexColors===!0&&!!dt.attributes.color&&dt.attributes.color.itemSize===4,pointsUvs:ot.isPoints===!0&&!!dt.attributes.uv&&(He||_t),fog:!!xt,useFog:U.fog===!0,fogExp2:!!xt&&xt.isFogExp2,flatShading:U.flatShading===!0,sizeAttenuation:U.sizeAttenuation===!0,logarithmicDepthBuffer:x,reverseDepthBuffer:Lt,skinning:ot.isSkinnedMesh===!0,morphTargets:dt.morphAttributes.position!==void 0,morphNormals:dt.morphAttributes.normal!==void 0,morphColors:dt.morphAttributes.color!==void 0,morphTargetsCount:tt,morphTextureStride:yt,numDirLights:R.directional.length,numPointLights:R.point.length,numSpotLights:R.spot.length,numSpotLightMaps:R.spotLightMap.length,numRectAreaLights:R.rectArea.length,numHemiLights:R.hemi.length,numDirLightShadows:R.directionalShadowMap.length,numPointLightShadows:R.pointShadowMap.length,numSpotLightShadows:R.spotShadowMap.length,numSpotLightShadowsWithMaps:R.numSpotLightShadowsWithMaps,numLightProbes:R.numLightProbes,numClippingPlanes:f.numPlanes,numClipIntersection:f.numIntersection,dithering:U.dithering,shadowMapEnabled:s.shadowMap.enabled&&V.length>0,shadowMapType:s.shadowMap.type,toneMapping:Ge,decodeVideoTexture:He&&U.map.isVideoTexture===!0&&Ae.getTransfer(U.map.colorSpace)===ze,decodeVideoTextureEmissive:Ue&&U.emissiveMap.isVideoTexture===!0&&Ae.getTransfer(U.emissiveMap.colorSpace)===ze,premultipliedAlpha:U.premultipliedAlpha,doubleSided:U.side===aa,flipSided:U.side===Gn,useDepthPacking:U.depthPacking>=0,depthPacking:U.depthPacking||0,index0AttributeName:U.index0AttributeName,extensionClipCullDistance:ae&&U.extensions.clipCullDistance===!0&&r.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(ae&&U.extensions.multiDraw===!0||Kt)&&r.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:r.has("KHR_parallel_shader_compile"),customProgramCacheKey:U.customProgramCacheKey()};return en.vertexUv1s=p.has(1),en.vertexUv2s=p.has(2),en.vertexUv3s=p.has(3),p.clear(),en}function _(U){const R=[];if(U.shaderID?R.push(U.shaderID):(R.push(U.customVertexShaderID),R.push(U.customFragmentShaderID)),U.defines!==void 0)for(const V in U.defines)R.push(V),R.push(U.defines[V]);return U.isRawShaderMaterial===!1&&(L(R,U),D(R,U),R.push(s.outputColorSpace)),R.push(U.customProgramCacheKey),R.join()}function L(U,R){U.push(R.precision),U.push(R.outputColorSpace),U.push(R.envMapMode),U.push(R.envMapCubeUVHeight),U.push(R.mapUv),U.push(R.alphaMapUv),U.push(R.lightMapUv),U.push(R.aoMapUv),U.push(R.bumpMapUv),U.push(R.normalMapUv),U.push(R.displacementMapUv),U.push(R.emissiveMapUv),U.push(R.metalnessMapUv),U.push(R.roughnessMapUv),U.push(R.anisotropyMapUv),U.push(R.clearcoatMapUv),U.push(R.clearcoatNormalMapUv),U.push(R.clearcoatRoughnessMapUv),U.push(R.iridescenceMapUv),U.push(R.iridescenceThicknessMapUv),U.push(R.sheenColorMapUv),U.push(R.sheenRoughnessMapUv),U.push(R.specularMapUv),U.push(R.specularColorMapUv),U.push(R.specularIntensityMapUv),U.push(R.transmissionMapUv),U.push(R.thicknessMapUv),U.push(R.combine),U.push(R.fogExp2),U.push(R.sizeAttenuation),U.push(R.morphTargetsCount),U.push(R.morphAttributeCount),U.push(R.numDirLights),U.push(R.numPointLights),U.push(R.numSpotLights),U.push(R.numSpotLightMaps),U.push(R.numHemiLights),U.push(R.numRectAreaLights),U.push(R.numDirLightShadows),U.push(R.numPointLightShadows),U.push(R.numSpotLightShadows),U.push(R.numSpotLightShadowsWithMaps),U.push(R.numLightProbes),U.push(R.shadowMapType),U.push(R.toneMapping),U.push(R.numClippingPlanes),U.push(R.numClipIntersection),U.push(R.depthPacking)}function D(U,R){d.disableAll(),R.supportsVertexTextures&&d.enable(0),R.instancing&&d.enable(1),R.instancingColor&&d.enable(2),R.instancingMorph&&d.enable(3),R.matcap&&d.enable(4),R.envMap&&d.enable(5),R.normalMapObjectSpace&&d.enable(6),R.normalMapTangentSpace&&d.enable(7),R.clearcoat&&d.enable(8),R.iridescence&&d.enable(9),R.alphaTest&&d.enable(10),R.vertexColors&&d.enable(11),R.vertexAlphas&&d.enable(12),R.vertexUv1s&&d.enable(13),R.vertexUv2s&&d.enable(14),R.vertexUv3s&&d.enable(15),R.vertexTangents&&d.enable(16),R.anisotropy&&d.enable(17),R.alphaHash&&d.enable(18),R.batching&&d.enable(19),R.dispersion&&d.enable(20),R.batchingColor&&d.enable(21),U.push(d.mask),d.disableAll(),R.fog&&d.enable(0),R.useFog&&d.enable(1),R.flatShading&&d.enable(2),R.logarithmicDepthBuffer&&d.enable(3),R.reverseDepthBuffer&&d.enable(4),R.skinning&&d.enable(5),R.morphTargets&&d.enable(6),R.morphNormals&&d.enable(7),R.morphColors&&d.enable(8),R.premultipliedAlpha&&d.enable(9),R.shadowMapEnabled&&d.enable(10),R.doubleSided&&d.enable(11),R.flipSided&&d.enable(12),R.useDepthPacking&&d.enable(13),R.dithering&&d.enable(14),R.transmission&&d.enable(15),R.sheen&&d.enable(16),R.opaque&&d.enable(17),R.pointsUvs&&d.enable(18),R.decodeVideoTexture&&d.enable(19),R.decodeVideoTextureEmissive&&d.enable(20),R.alphaToCoverage&&d.enable(21),U.push(d.mask)}function C(U){const R=E[U.type];let V;if(R){const lt=Ti[R];V=AE.clone(lt.uniforms)}else V=U.uniforms;return V}function F(U,R){let V;for(let lt=0,ot=g.length;lt<ot;lt++){const xt=g[lt];if(xt.cacheKey===R){V=xt,++V.usedTimes;break}}return V===void 0&&(V=new QA(s,R,U,c),g.push(V)),V}function H(U){if(--U.usedTimes===0){const R=g.indexOf(U);g[R]=g[g.length-1],g.pop(),U.destroy()}}function B(U){m.remove(U)}function k(){m.dispose()}return{getParameters:S,getProgramCacheKey:_,getUniforms:C,acquireProgram:F,releaseProgram:H,releaseShaderCache:B,programs:g,dispose:k}}function nR(){let s=new WeakMap;function t(f){return s.has(f)}function i(f){let d=s.get(f);return d===void 0&&(d={},s.set(f,d)),d}function r(f){s.delete(f)}function l(f,d,m){s.get(f)[d]=m}function c(){s=new WeakMap}return{has:t,get:i,remove:r,update:l,dispose:c}}function iR(s,t){return s.groupOrder!==t.groupOrder?s.groupOrder-t.groupOrder:s.renderOrder!==t.renderOrder?s.renderOrder-t.renderOrder:s.material.id!==t.material.id?s.material.id-t.material.id:s.z!==t.z?s.z-t.z:s.id-t.id}function Rv(s,t){return s.groupOrder!==t.groupOrder?s.groupOrder-t.groupOrder:s.renderOrder!==t.renderOrder?s.renderOrder-t.renderOrder:s.z!==t.z?t.z-s.z:s.id-t.id}function wv(){const s=[];let t=0;const i=[],r=[],l=[];function c(){t=0,i.length=0,r.length=0,l.length=0}function f(x,v,y,E,A,S){let _=s[t];return _===void 0?(_={id:x.id,object:x,geometry:v,material:y,groupOrder:E,renderOrder:x.renderOrder,z:A,group:S},s[t]=_):(_.id=x.id,_.object=x,_.geometry=v,_.material=y,_.groupOrder=E,_.renderOrder=x.renderOrder,_.z=A,_.group=S),t++,_}function d(x,v,y,E,A,S){const _=f(x,v,y,E,A,S);y.transmission>0?r.push(_):y.transparent===!0?l.push(_):i.push(_)}function m(x,v,y,E,A,S){const _=f(x,v,y,E,A,S);y.transmission>0?r.unshift(_):y.transparent===!0?l.unshift(_):i.unshift(_)}function p(x,v){i.length>1&&i.sort(x||iR),r.length>1&&r.sort(v||Rv),l.length>1&&l.sort(v||Rv)}function g(){for(let x=t,v=s.length;x<v;x++){const y=s[x];if(y.id===null)break;y.id=null,y.object=null,y.geometry=null,y.material=null,y.group=null}}return{opaque:i,transmissive:r,transparent:l,init:c,push:d,unshift:m,finish:g,sort:p}}function aR(){let s=new WeakMap;function t(r,l){const c=s.get(r);let f;return c===void 0?(f=new wv,s.set(r,[f])):l>=c.length?(f=new wv,c.push(f)):f=c[l],f}function i(){s=new WeakMap}return{get:t,dispose:i}}function rR(){const s={};return{get:function(t){if(s[t.id]!==void 0)return s[t.id];let i;switch(t.type){case"DirectionalLight":i={direction:new et,color:new Re};break;case"SpotLight":i={position:new et,direction:new et,color:new Re,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":i={position:new et,color:new Re,distance:0,decay:0};break;case"HemisphereLight":i={direction:new et,skyColor:new Re,groundColor:new Re};break;case"RectAreaLight":i={color:new Re,position:new et,halfWidth:new et,halfHeight:new et};break}return s[t.id]=i,i}}}function sR(){const s={};return{get:function(t){if(s[t.id]!==void 0)return s[t.id];let i;switch(t.type){case"DirectionalLight":i={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Me};break;case"SpotLight":i={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Me};break;case"PointLight":i={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Me,shadowCameraNear:1,shadowCameraFar:1e3};break}return s[t.id]=i,i}}}let oR=0;function lR(s,t){return(t.castShadow?2:0)-(s.castShadow?2:0)+(t.map?1:0)-(s.map?1:0)}function cR(s){const t=new rR,i=sR(),r={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let p=0;p<9;p++)r.probe.push(new et);const l=new et,c=new Je,f=new Je;function d(p){let g=0,x=0,v=0;for(let U=0;U<9;U++)r.probe[U].set(0,0,0);let y=0,E=0,A=0,S=0,_=0,L=0,D=0,C=0,F=0,H=0,B=0;p.sort(lR);for(let U=0,R=p.length;U<R;U++){const V=p[U],lt=V.color,ot=V.intensity,xt=V.distance,dt=V.shadow&&V.shadow.map?V.shadow.map.texture:null;if(V.isAmbientLight)g+=lt.r*ot,x+=lt.g*ot,v+=lt.b*ot;else if(V.isLightProbe){for(let I=0;I<9;I++)r.probe[I].addScaledVector(V.sh.coefficients[I],ot);B++}else if(V.isDirectionalLight){const I=t.get(V);if(I.color.copy(V.color).multiplyScalar(V.intensity),V.castShadow){const K=V.shadow,Y=i.get(V);Y.shadowIntensity=K.intensity,Y.shadowBias=K.bias,Y.shadowNormalBias=K.normalBias,Y.shadowRadius=K.radius,Y.shadowMapSize=K.mapSize,r.directionalShadow[y]=Y,r.directionalShadowMap[y]=dt,r.directionalShadowMatrix[y]=V.shadow.matrix,L++}r.directional[y]=I,y++}else if(V.isSpotLight){const I=t.get(V);I.position.setFromMatrixPosition(V.matrixWorld),I.color.copy(lt).multiplyScalar(ot),I.distance=xt,I.coneCos=Math.cos(V.angle),I.penumbraCos=Math.cos(V.angle*(1-V.penumbra)),I.decay=V.decay,r.spot[A]=I;const K=V.shadow;if(V.map&&(r.spotLightMap[F]=V.map,F++,K.updateMatrices(V),V.castShadow&&H++),r.spotLightMatrix[A]=K.matrix,V.castShadow){const Y=i.get(V);Y.shadowIntensity=K.intensity,Y.shadowBias=K.bias,Y.shadowNormalBias=K.normalBias,Y.shadowRadius=K.radius,Y.shadowMapSize=K.mapSize,r.spotShadow[A]=Y,r.spotShadowMap[A]=dt,C++}A++}else if(V.isRectAreaLight){const I=t.get(V);I.color.copy(lt).multiplyScalar(ot),I.halfWidth.set(V.width*.5,0,0),I.halfHeight.set(0,V.height*.5,0),r.rectArea[S]=I,S++}else if(V.isPointLight){const I=t.get(V);if(I.color.copy(V.color).multiplyScalar(V.intensity),I.distance=V.distance,I.decay=V.decay,V.castShadow){const K=V.shadow,Y=i.get(V);Y.shadowIntensity=K.intensity,Y.shadowBias=K.bias,Y.shadowNormalBias=K.normalBias,Y.shadowRadius=K.radius,Y.shadowMapSize=K.mapSize,Y.shadowCameraNear=K.camera.near,Y.shadowCameraFar=K.camera.far,r.pointShadow[E]=Y,r.pointShadowMap[E]=dt,r.pointShadowMatrix[E]=V.shadow.matrix,D++}r.point[E]=I,E++}else if(V.isHemisphereLight){const I=t.get(V);I.skyColor.copy(V.color).multiplyScalar(ot),I.groundColor.copy(V.groundColor).multiplyScalar(ot),r.hemi[_]=I,_++}}S>0&&(s.has("OES_texture_float_linear")===!0?(r.rectAreaLTC1=Ut.LTC_FLOAT_1,r.rectAreaLTC2=Ut.LTC_FLOAT_2):(r.rectAreaLTC1=Ut.LTC_HALF_1,r.rectAreaLTC2=Ut.LTC_HALF_2)),r.ambient[0]=g,r.ambient[1]=x,r.ambient[2]=v;const k=r.hash;(k.directionalLength!==y||k.pointLength!==E||k.spotLength!==A||k.rectAreaLength!==S||k.hemiLength!==_||k.numDirectionalShadows!==L||k.numPointShadows!==D||k.numSpotShadows!==C||k.numSpotMaps!==F||k.numLightProbes!==B)&&(r.directional.length=y,r.spot.length=A,r.rectArea.length=S,r.point.length=E,r.hemi.length=_,r.directionalShadow.length=L,r.directionalShadowMap.length=L,r.pointShadow.length=D,r.pointShadowMap.length=D,r.spotShadow.length=C,r.spotShadowMap.length=C,r.directionalShadowMatrix.length=L,r.pointShadowMatrix.length=D,r.spotLightMatrix.length=C+F-H,r.spotLightMap.length=F,r.numSpotLightShadowsWithMaps=H,r.numLightProbes=B,k.directionalLength=y,k.pointLength=E,k.spotLength=A,k.rectAreaLength=S,k.hemiLength=_,k.numDirectionalShadows=L,k.numPointShadows=D,k.numSpotShadows=C,k.numSpotMaps=F,k.numLightProbes=B,r.version=oR++)}function m(p,g){let x=0,v=0,y=0,E=0,A=0;const S=g.matrixWorldInverse;for(let _=0,L=p.length;_<L;_++){const D=p[_];if(D.isDirectionalLight){const C=r.directional[x];C.direction.setFromMatrixPosition(D.matrixWorld),l.setFromMatrixPosition(D.target.matrixWorld),C.direction.sub(l),C.direction.transformDirection(S),x++}else if(D.isSpotLight){const C=r.spot[y];C.position.setFromMatrixPosition(D.matrixWorld),C.position.applyMatrix4(S),C.direction.setFromMatrixPosition(D.matrixWorld),l.setFromMatrixPosition(D.target.matrixWorld),C.direction.sub(l),C.direction.transformDirection(S),y++}else if(D.isRectAreaLight){const C=r.rectArea[E];C.position.setFromMatrixPosition(D.matrixWorld),C.position.applyMatrix4(S),f.identity(),c.copy(D.matrixWorld),c.premultiply(S),f.extractRotation(c),C.halfWidth.set(D.width*.5,0,0),C.halfHeight.set(0,D.height*.5,0),C.halfWidth.applyMatrix4(f),C.halfHeight.applyMatrix4(f),E++}else if(D.isPointLight){const C=r.point[v];C.position.setFromMatrixPosition(D.matrixWorld),C.position.applyMatrix4(S),v++}else if(D.isHemisphereLight){const C=r.hemi[A];C.direction.setFromMatrixPosition(D.matrixWorld),C.direction.transformDirection(S),A++}}}return{setup:d,setupView:m,state:r}}function Cv(s){const t=new cR(s),i=[],r=[];function l(g){p.camera=g,i.length=0,r.length=0}function c(g){i.push(g)}function f(g){r.push(g)}function d(){t.setup(i)}function m(g){t.setupView(i,g)}const p={lightsArray:i,shadowsArray:r,camera:null,lights:t,transmissionRenderTarget:{}};return{init:l,state:p,setupLights:d,setupLightsView:m,pushLight:c,pushShadow:f}}function uR(s){let t=new WeakMap;function i(l,c=0){const f=t.get(l);let d;return f===void 0?(d=new Cv(s),t.set(l,[d])):c>=f.length?(d=new Cv(s),f.push(d)):d=f[c],d}function r(){t=new WeakMap}return{get:i,dispose:r}}const fR=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,hR=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;function dR(s,t,i){let r=new Fd;const l=new Me,c=new Me,f=new Qe,d=new zE({depthPacking:qM}),m=new BE,p={},g=i.maxTextureSize,x={[qa]:Gn,[Gn]:qa,[aa]:aa},v=new Ya({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Me},radius:{value:4}},vertexShader:fR,fragmentShader:hR}),y=v.clone();y.defines.HORIZONTAL_PASS=1;const E=new Li;E.setAttribute("position",new Ri(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const A=new Ai(E,v),S=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=qv;let _=this.type;this.render=function(H,B,k){if(S.enabled===!1||S.autoUpdate===!1&&S.needsUpdate===!1||H.length===0)return;const U=s.getRenderTarget(),R=s.getActiveCubeFace(),V=s.getActiveMipmapLevel(),lt=s.state;lt.setBlending(Xa),lt.buffers.color.setClear(1,1,1,1),lt.buffers.depth.setTest(!0),lt.setScissorTest(!1);const ot=_!==ia&&this.type===ia,xt=_===ia&&this.type!==ia;for(let dt=0,I=H.length;dt<I;dt++){const K=H[dt],Y=K.shadow;if(Y===void 0){console.warn("THREE.WebGLShadowMap:",K,"has no shadow.");continue}if(Y.autoUpdate===!1&&Y.needsUpdate===!1)continue;l.copy(Y.mapSize);const Et=Y.getFrameExtents();if(l.multiply(Et),c.copy(Y.mapSize),(l.x>g||l.y>g)&&(l.x>g&&(c.x=Math.floor(g/Et.x),l.x=c.x*Et.x,Y.mapSize.x=c.x),l.y>g&&(c.y=Math.floor(g/Et.y),l.y=c.y*Et.y,Y.mapSize.y=c.y)),Y.map===null||ot===!0||xt===!0){const tt=this.type!==ia?{minFilter:_i,magFilter:_i}:{};Y.map!==null&&Y.map.dispose(),Y.map=new wr(l.x,l.y,tt),Y.map.texture.name=K.name+".shadowMap",Y.camera.updateProjectionMatrix()}s.setRenderTarget(Y.map),s.clear();const P=Y.getViewportCount();for(let tt=0;tt<P;tt++){const yt=Y.getViewport(tt);f.set(c.x*yt.x,c.y*yt.y,c.x*yt.z,c.y*yt.w),lt.viewport(f),Y.updateMatrices(K,tt),r=Y.getFrustum(),C(B,k,Y.camera,K,this.type)}Y.isPointLightShadow!==!0&&this.type===ia&&L(Y,k),Y.needsUpdate=!1}_=this.type,S.needsUpdate=!1,s.setRenderTarget(U,R,V)};function L(H,B){const k=t.update(A);v.defines.VSM_SAMPLES!==H.blurSamples&&(v.defines.VSM_SAMPLES=H.blurSamples,y.defines.VSM_SAMPLES=H.blurSamples,v.needsUpdate=!0,y.needsUpdate=!0),H.mapPass===null&&(H.mapPass=new wr(l.x,l.y)),v.uniforms.shadow_pass.value=H.map.texture,v.uniforms.resolution.value=H.mapSize,v.uniforms.radius.value=H.radius,s.setRenderTarget(H.mapPass),s.clear(),s.renderBufferDirect(B,null,k,v,A,null),y.uniforms.shadow_pass.value=H.mapPass.texture,y.uniforms.resolution.value=H.mapSize,y.uniforms.radius.value=H.radius,s.setRenderTarget(H.map),s.clear(),s.renderBufferDirect(B,null,k,y,A,null)}function D(H,B,k,U){let R=null;const V=k.isPointLight===!0?H.customDistanceMaterial:H.customDepthMaterial;if(V!==void 0)R=V;else if(R=k.isPointLight===!0?m:d,s.localClippingEnabled&&B.clipShadows===!0&&Array.isArray(B.clippingPlanes)&&B.clippingPlanes.length!==0||B.displacementMap&&B.displacementScale!==0||B.alphaMap&&B.alphaTest>0||B.map&&B.alphaTest>0||B.alphaToCoverage===!0){const lt=R.uuid,ot=B.uuid;let xt=p[lt];xt===void 0&&(xt={},p[lt]=xt);let dt=xt[ot];dt===void 0&&(dt=R.clone(),xt[ot]=dt,B.addEventListener("dispose",F)),R=dt}if(R.visible=B.visible,R.wireframe=B.wireframe,U===ia?R.side=B.shadowSide!==null?B.shadowSide:B.side:R.side=B.shadowSide!==null?B.shadowSide:x[B.side],R.alphaMap=B.alphaMap,R.alphaTest=B.alphaToCoverage===!0?.5:B.alphaTest,R.map=B.map,R.clipShadows=B.clipShadows,R.clippingPlanes=B.clippingPlanes,R.clipIntersection=B.clipIntersection,R.displacementMap=B.displacementMap,R.displacementScale=B.displacementScale,R.displacementBias=B.displacementBias,R.wireframeLinewidth=B.wireframeLinewidth,R.linewidth=B.linewidth,k.isPointLight===!0&&R.isMeshDistanceMaterial===!0){const lt=s.properties.get(R);lt.light=k}return R}function C(H,B,k,U,R){if(H.visible===!1)return;if(H.layers.test(B.layers)&&(H.isMesh||H.isLine||H.isPoints)&&(H.castShadow||H.receiveShadow&&R===ia)&&(!H.frustumCulled||r.intersectsObject(H))){H.modelViewMatrix.multiplyMatrices(k.matrixWorldInverse,H.matrixWorld);const ot=t.update(H),xt=H.material;if(Array.isArray(xt)){const dt=ot.groups;for(let I=0,K=dt.length;I<K;I++){const Y=dt[I],Et=xt[Y.materialIndex];if(Et&&Et.visible){const P=D(H,Et,U,R);H.onBeforeShadow(s,H,B,k,ot,P,Y),s.renderBufferDirect(k,null,ot,P,H,Y),H.onAfterShadow(s,H,B,k,ot,P,Y)}}}else if(xt.visible){const dt=D(H,xt,U,R);H.onBeforeShadow(s,H,B,k,ot,dt,null),s.renderBufferDirect(k,null,ot,dt,H,null),H.onAfterShadow(s,H,B,k,ot,dt,null)}}const lt=H.children;for(let ot=0,xt=lt.length;ot<xt;ot++)C(lt[ot],B,k,U,R)}function F(H){H.target.removeEventListener("dispose",F);for(const k in p){const U=p[k],R=H.target.uuid;R in U&&(U[R].dispose(),delete U[R])}}}const pR={[Ih]:Fh,[Hh]:kh,[Gh]:jh,[Ts]:Vh,[Fh]:Ih,[kh]:Hh,[jh]:Gh,[Vh]:Ts};function mR(s,t){function i(){let X=!1;const Nt=new Qe;let ct=null;const _t=new Qe(0,0,0,0);return{setMask:function(Bt){ct!==Bt&&!X&&(s.colorMask(Bt,Bt,Bt,Bt),ct=Bt)},setLocked:function(Bt){X=Bt},setClear:function(Bt,Ot,ae,Ge,en){en===!0&&(Bt*=Ge,Ot*=Ge,ae*=Ge),Nt.set(Bt,Ot,ae,Ge),_t.equals(Nt)===!1&&(s.clearColor(Bt,Ot,ae,Ge),_t.copy(Nt))},reset:function(){X=!1,ct=null,_t.set(-1,0,0,0)}}}function r(){let X=!1,Nt=!1,ct=null,_t=null,Bt=null;return{setReversed:function(Ot){if(Nt!==Ot){const ae=t.get("EXT_clip_control");Ot?ae.clipControlEXT(ae.LOWER_LEFT_EXT,ae.ZERO_TO_ONE_EXT):ae.clipControlEXT(ae.LOWER_LEFT_EXT,ae.NEGATIVE_ONE_TO_ONE_EXT),Nt=Ot;const Ge=Bt;Bt=null,this.setClear(Ge)}},getReversed:function(){return Nt},setTest:function(Ot){Ot?Rt(s.DEPTH_TEST):Lt(s.DEPTH_TEST)},setMask:function(Ot){ct!==Ot&&!X&&(s.depthMask(Ot),ct=Ot)},setFunc:function(Ot){if(Nt&&(Ot=pR[Ot]),_t!==Ot){switch(Ot){case Ih:s.depthFunc(s.NEVER);break;case Fh:s.depthFunc(s.ALWAYS);break;case Hh:s.depthFunc(s.LESS);break;case Ts:s.depthFunc(s.LEQUAL);break;case Gh:s.depthFunc(s.EQUAL);break;case Vh:s.depthFunc(s.GEQUAL);break;case kh:s.depthFunc(s.GREATER);break;case jh:s.depthFunc(s.NOTEQUAL);break;default:s.depthFunc(s.LEQUAL)}_t=Ot}},setLocked:function(Ot){X=Ot},setClear:function(Ot){Bt!==Ot&&(Nt&&(Ot=1-Ot),s.clearDepth(Ot),Bt=Ot)},reset:function(){X=!1,ct=null,_t=null,Bt=null,Nt=!1}}}function l(){let X=!1,Nt=null,ct=null,_t=null,Bt=null,Ot=null,ae=null,Ge=null,en=null;return{setTest:function(Ee){X||(Ee?Rt(s.STENCIL_TEST):Lt(s.STENCIL_TEST))},setMask:function(Ee){Nt!==Ee&&!X&&(s.stencilMask(Ee),Nt=Ee)},setFunc:function(Ee,kn,dn){(ct!==Ee||_t!==kn||Bt!==dn)&&(s.stencilFunc(Ee,kn,dn),ct=Ee,_t=kn,Bt=dn)},setOp:function(Ee,kn,dn){(Ot!==Ee||ae!==kn||Ge!==dn)&&(s.stencilOp(Ee,kn,dn),Ot=Ee,ae=kn,Ge=dn)},setLocked:function(Ee){X=Ee},setClear:function(Ee){en!==Ee&&(s.clearStencil(Ee),en=Ee)},reset:function(){X=!1,Nt=null,ct=null,_t=null,Bt=null,Ot=null,ae=null,Ge=null,en=null}}}const c=new i,f=new r,d=new l,m=new WeakMap,p=new WeakMap;let g={},x={},v=new WeakMap,y=[],E=null,A=!1,S=null,_=null,L=null,D=null,C=null,F=null,H=null,B=new Re(0,0,0),k=0,U=!1,R=null,V=null,lt=null,ot=null,xt=null;const dt=s.getParameter(s.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let I=!1,K=0;const Y=s.getParameter(s.VERSION);Y.indexOf("WebGL")!==-1?(K=parseFloat(/^WebGL (\d)/.exec(Y)[1]),I=K>=1):Y.indexOf("OpenGL ES")!==-1&&(K=parseFloat(/^OpenGL ES (\d)/.exec(Y)[1]),I=K>=2);let Et=null,P={};const tt=s.getParameter(s.SCISSOR_BOX),yt=s.getParameter(s.VIEWPORT),Mt=new Qe().fromArray(tt),J=new Qe().fromArray(yt);function mt(X,Nt,ct,_t){const Bt=new Uint8Array(4),Ot=s.createTexture();s.bindTexture(X,Ot),s.texParameteri(X,s.TEXTURE_MIN_FILTER,s.NEAREST),s.texParameteri(X,s.TEXTURE_MAG_FILTER,s.NEAREST);for(let ae=0;ae<ct;ae++)X===s.TEXTURE_3D||X===s.TEXTURE_2D_ARRAY?s.texImage3D(Nt,0,s.RGBA,1,1,_t,0,s.RGBA,s.UNSIGNED_BYTE,Bt):s.texImage2D(Nt+ae,0,s.RGBA,1,1,0,s.RGBA,s.UNSIGNED_BYTE,Bt);return Ot}const St={};St[s.TEXTURE_2D]=mt(s.TEXTURE_2D,s.TEXTURE_2D,1),St[s.TEXTURE_CUBE_MAP]=mt(s.TEXTURE_CUBE_MAP,s.TEXTURE_CUBE_MAP_POSITIVE_X,6),St[s.TEXTURE_2D_ARRAY]=mt(s.TEXTURE_2D_ARRAY,s.TEXTURE_2D_ARRAY,1,1),St[s.TEXTURE_3D]=mt(s.TEXTURE_3D,s.TEXTURE_3D,1,1),c.setClear(0,0,0,1),f.setClear(1),d.setClear(0),Rt(s.DEPTH_TEST),f.setFunc(Ts),ge(!1),ie(N_),Rt(s.CULL_FACE),G(Xa);function Rt(X){g[X]!==!0&&(s.enable(X),g[X]=!0)}function Lt(X){g[X]!==!1&&(s.disable(X),g[X]=!1)}function oe(X,Nt){return x[X]!==Nt?(s.bindFramebuffer(X,Nt),x[X]=Nt,X===s.DRAW_FRAMEBUFFER&&(x[s.FRAMEBUFFER]=Nt),X===s.FRAMEBUFFER&&(x[s.DRAW_FRAMEBUFFER]=Nt),!0):!1}function Kt(X,Nt){let ct=y,_t=!1;if(X){ct=v.get(Nt),ct===void 0&&(ct=[],v.set(Nt,ct));const Bt=X.textures;if(ct.length!==Bt.length||ct[0]!==s.COLOR_ATTACHMENT0){for(let Ot=0,ae=Bt.length;Ot<ae;Ot++)ct[Ot]=s.COLOR_ATTACHMENT0+Ot;ct.length=Bt.length,_t=!0}}else ct[0]!==s.BACK&&(ct[0]=s.BACK,_t=!0);_t&&s.drawBuffers(ct)}function He(X){return E!==X?(s.useProgram(X),E=X,!0):!1}const Be={[Er]:s.FUNC_ADD,[xM]:s.FUNC_SUBTRACT,[yM]:s.FUNC_REVERSE_SUBTRACT};Be[SM]=s.MIN,Be[MM]=s.MAX;const fe={[EM]:s.ZERO,[TM]:s.ONE,[bM]:s.SRC_COLOR,[zh]:s.SRC_ALPHA,[UM]:s.SRC_ALPHA_SATURATE,[CM]:s.DST_COLOR,[RM]:s.DST_ALPHA,[AM]:s.ONE_MINUS_SRC_COLOR,[Bh]:s.ONE_MINUS_SRC_ALPHA,[DM]:s.ONE_MINUS_DST_COLOR,[wM]:s.ONE_MINUS_DST_ALPHA,[LM]:s.CONSTANT_COLOR,[NM]:s.ONE_MINUS_CONSTANT_COLOR,[OM]:s.CONSTANT_ALPHA,[PM]:s.ONE_MINUS_CONSTANT_ALPHA};function G(X,Nt,ct,_t,Bt,Ot,ae,Ge,en,Ee){if(X===Xa){A===!0&&(Lt(s.BLEND),A=!1);return}if(A===!1&&(Rt(s.BLEND),A=!0),X!==vM){if(X!==S||Ee!==U){if((_!==Er||C!==Er)&&(s.blendEquation(s.FUNC_ADD),_=Er,C=Er),Ee)switch(X){case Ms:s.blendFuncSeparate(s.ONE,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case O_:s.blendFunc(s.ONE,s.ONE);break;case P_:s.blendFuncSeparate(s.ZERO,s.ONE_MINUS_SRC_COLOR,s.ZERO,s.ONE);break;case z_:s.blendFuncSeparate(s.ZERO,s.SRC_COLOR,s.ZERO,s.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",X);break}else switch(X){case Ms:s.blendFuncSeparate(s.SRC_ALPHA,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case O_:s.blendFunc(s.SRC_ALPHA,s.ONE);break;case P_:s.blendFuncSeparate(s.ZERO,s.ONE_MINUS_SRC_COLOR,s.ZERO,s.ONE);break;case z_:s.blendFunc(s.ZERO,s.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",X);break}L=null,D=null,F=null,H=null,B.set(0,0,0),k=0,S=X,U=Ee}return}Bt=Bt||Nt,Ot=Ot||ct,ae=ae||_t,(Nt!==_||Bt!==C)&&(s.blendEquationSeparate(Be[Nt],Be[Bt]),_=Nt,C=Bt),(ct!==L||_t!==D||Ot!==F||ae!==H)&&(s.blendFuncSeparate(fe[ct],fe[_t],fe[Ot],fe[ae]),L=ct,D=_t,F=Ot,H=ae),(Ge.equals(B)===!1||en!==k)&&(s.blendColor(Ge.r,Ge.g,Ge.b,en),B.copy(Ge),k=en),S=X,U=!1}function On(X,Nt){X.side===aa?Lt(s.CULL_FACE):Rt(s.CULL_FACE);let ct=X.side===Gn;Nt&&(ct=!ct),ge(ct),X.blending===Ms&&X.transparent===!1?G(Xa):G(X.blending,X.blendEquation,X.blendSrc,X.blendDst,X.blendEquationAlpha,X.blendSrcAlpha,X.blendDstAlpha,X.blendColor,X.blendAlpha,X.premultipliedAlpha),f.setFunc(X.depthFunc),f.setTest(X.depthTest),f.setMask(X.depthWrite),c.setMask(X.colorWrite);const _t=X.stencilWrite;d.setTest(_t),_t&&(d.setMask(X.stencilWriteMask),d.setFunc(X.stencilFunc,X.stencilRef,X.stencilFuncMask),d.setOp(X.stencilFail,X.stencilZFail,X.stencilZPass)),Ue(X.polygonOffset,X.polygonOffsetFactor,X.polygonOffsetUnits),X.alphaToCoverage===!0?Rt(s.SAMPLE_ALPHA_TO_COVERAGE):Lt(s.SAMPLE_ALPHA_TO_COVERAGE)}function ge(X){R!==X&&(X?s.frontFace(s.CW):s.frontFace(s.CCW),R=X)}function ie(X){X!==mM?(Rt(s.CULL_FACE),X!==V&&(X===N_?s.cullFace(s.BACK):X===gM?s.cullFace(s.FRONT):s.cullFace(s.FRONT_AND_BACK))):Lt(s.CULL_FACE),V=X}function Xt(X){X!==lt&&(I&&s.lineWidth(X),lt=X)}function Ue(X,Nt,ct){X?(Rt(s.POLYGON_OFFSET_FILL),(ot!==Nt||xt!==ct)&&(s.polygonOffset(Nt,ct),ot=Nt,xt=ct)):Lt(s.POLYGON_OFFSET_FILL)}function Vt(X){X?Rt(s.SCISSOR_TEST):Lt(s.SCISSOR_TEST)}function O(X){X===void 0&&(X=s.TEXTURE0+dt-1),Et!==X&&(s.activeTexture(X),Et=X)}function b(X,Nt,ct){ct===void 0&&(Et===null?ct=s.TEXTURE0+dt-1:ct=Et);let _t=P[ct];_t===void 0&&(_t={type:void 0,texture:void 0},P[ct]=_t),(_t.type!==X||_t.texture!==Nt)&&(Et!==ct&&(s.activeTexture(ct),Et=ct),s.bindTexture(X,Nt||St[X]),_t.type=X,_t.texture=Nt)}function nt(){const X=P[Et];X!==void 0&&X.type!==void 0&&(s.bindTexture(X.type,null),X.type=void 0,X.texture=void 0)}function gt(){try{s.compressedTexImage2D(...arguments)}catch(X){console.error("THREE.WebGLState:",X)}}function Tt(){try{s.compressedTexImage3D(...arguments)}catch(X){console.error("THREE.WebGLState:",X)}}function ft(){try{s.texSubImage2D(...arguments)}catch(X){console.error("THREE.WebGLState:",X)}}function Pt(){try{s.texSubImage3D(...arguments)}catch(X){console.error("THREE.WebGLState:",X)}}function wt(){try{s.compressedTexSubImage2D(...arguments)}catch(X){console.error("THREE.WebGLState:",X)}}function Gt(){try{s.compressedTexSubImage3D(...arguments)}catch(X){console.error("THREE.WebGLState:",X)}}function $t(){try{s.texStorage2D(...arguments)}catch(X){console.error("THREE.WebGLState:",X)}}function At(){try{s.texStorage3D(...arguments)}catch(X){console.error("THREE.WebGLState:",X)}}function Ft(){try{s.texImage2D(...arguments)}catch(X){console.error("THREE.WebGLState:",X)}}function Yt(){try{s.texImage3D(...arguments)}catch(X){console.error("THREE.WebGLState:",X)}}function Qt(X){Mt.equals(X)===!1&&(s.scissor(X.x,X.y,X.z,X.w),Mt.copy(X))}function zt(X){J.equals(X)===!1&&(s.viewport(X.x,X.y,X.z,X.w),J.copy(X))}function ce(X,Nt){let ct=p.get(Nt);ct===void 0&&(ct=new WeakMap,p.set(Nt,ct));let _t=ct.get(X);_t===void 0&&(_t=s.getUniformBlockIndex(Nt,X.name),ct.set(X,_t))}function ne(X,Nt){const _t=p.get(Nt).get(X);m.get(Nt)!==_t&&(s.uniformBlockBinding(Nt,_t,X.__bindingPointIndex),m.set(Nt,_t))}function Le(){s.disable(s.BLEND),s.disable(s.CULL_FACE),s.disable(s.DEPTH_TEST),s.disable(s.POLYGON_OFFSET_FILL),s.disable(s.SCISSOR_TEST),s.disable(s.STENCIL_TEST),s.disable(s.SAMPLE_ALPHA_TO_COVERAGE),s.blendEquation(s.FUNC_ADD),s.blendFunc(s.ONE,s.ZERO),s.blendFuncSeparate(s.ONE,s.ZERO,s.ONE,s.ZERO),s.blendColor(0,0,0,0),s.colorMask(!0,!0,!0,!0),s.clearColor(0,0,0,0),s.depthMask(!0),s.depthFunc(s.LESS),f.setReversed(!1),s.clearDepth(1),s.stencilMask(4294967295),s.stencilFunc(s.ALWAYS,0,4294967295),s.stencilOp(s.KEEP,s.KEEP,s.KEEP),s.clearStencil(0),s.cullFace(s.BACK),s.frontFace(s.CCW),s.polygonOffset(0,0),s.activeTexture(s.TEXTURE0),s.bindFramebuffer(s.FRAMEBUFFER,null),s.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),s.bindFramebuffer(s.READ_FRAMEBUFFER,null),s.useProgram(null),s.lineWidth(1),s.scissor(0,0,s.canvas.width,s.canvas.height),s.viewport(0,0,s.canvas.width,s.canvas.height),g={},Et=null,P={},x={},v=new WeakMap,y=[],E=null,A=!1,S=null,_=null,L=null,D=null,C=null,F=null,H=null,B=new Re(0,0,0),k=0,U=!1,R=null,V=null,lt=null,ot=null,xt=null,Mt.set(0,0,s.canvas.width,s.canvas.height),J.set(0,0,s.canvas.width,s.canvas.height),c.reset(),f.reset(),d.reset()}return{buffers:{color:c,depth:f,stencil:d},enable:Rt,disable:Lt,bindFramebuffer:oe,drawBuffers:Kt,useProgram:He,setBlending:G,setMaterial:On,setFlipSided:ge,setCullFace:ie,setLineWidth:Xt,setPolygonOffset:Ue,setScissorTest:Vt,activeTexture:O,bindTexture:b,unbindTexture:nt,compressedTexImage2D:gt,compressedTexImage3D:Tt,texImage2D:Ft,texImage3D:Yt,updateUBOMapping:ce,uniformBlockBinding:ne,texStorage2D:$t,texStorage3D:At,texSubImage2D:ft,texSubImage3D:Pt,compressedTexSubImage2D:wt,compressedTexSubImage3D:Gt,scissor:Qt,viewport:zt,reset:Le}}function gR(s,t,i,r,l,c,f){const d=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,m=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),p=new Me,g=new WeakMap;let x;const v=new WeakMap;let y=!1;try{y=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function E(O,b){return y?new OffscreenCanvas(O,b):Gc("canvas")}function A(O,b,nt){let gt=1;const Tt=Vt(O);if((Tt.width>nt||Tt.height>nt)&&(gt=nt/Math.max(Tt.width,Tt.height)),gt<1)if(typeof HTMLImageElement<"u"&&O instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&O instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&O instanceof ImageBitmap||typeof VideoFrame<"u"&&O instanceof VideoFrame){const ft=Math.floor(gt*Tt.width),Pt=Math.floor(gt*Tt.height);x===void 0&&(x=E(ft,Pt));const wt=b?E(ft,Pt):x;return wt.width=ft,wt.height=Pt,wt.getContext("2d").drawImage(O,0,0,ft,Pt),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+Tt.width+"x"+Tt.height+") to ("+ft+"x"+Pt+")."),wt}else return"data"in O&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+Tt.width+"x"+Tt.height+")."),O;return O}function S(O){return O.generateMipmaps}function _(O){s.generateMipmap(O)}function L(O){return O.isWebGLCubeRenderTarget?s.TEXTURE_CUBE_MAP:O.isWebGL3DRenderTarget?s.TEXTURE_3D:O.isWebGLArrayRenderTarget||O.isCompressedArrayTexture?s.TEXTURE_2D_ARRAY:s.TEXTURE_2D}function D(O,b,nt,gt,Tt=!1){if(O!==null){if(s[O]!==void 0)return s[O];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+O+"'")}let ft=b;if(b===s.RED&&(nt===s.FLOAT&&(ft=s.R32F),nt===s.HALF_FLOAT&&(ft=s.R16F),nt===s.UNSIGNED_BYTE&&(ft=s.R8)),b===s.RED_INTEGER&&(nt===s.UNSIGNED_BYTE&&(ft=s.R8UI),nt===s.UNSIGNED_SHORT&&(ft=s.R16UI),nt===s.UNSIGNED_INT&&(ft=s.R32UI),nt===s.BYTE&&(ft=s.R8I),nt===s.SHORT&&(ft=s.R16I),nt===s.INT&&(ft=s.R32I)),b===s.RG&&(nt===s.FLOAT&&(ft=s.RG32F),nt===s.HALF_FLOAT&&(ft=s.RG16F),nt===s.UNSIGNED_BYTE&&(ft=s.RG8)),b===s.RG_INTEGER&&(nt===s.UNSIGNED_BYTE&&(ft=s.RG8UI),nt===s.UNSIGNED_SHORT&&(ft=s.RG16UI),nt===s.UNSIGNED_INT&&(ft=s.RG32UI),nt===s.BYTE&&(ft=s.RG8I),nt===s.SHORT&&(ft=s.RG16I),nt===s.INT&&(ft=s.RG32I)),b===s.RGB_INTEGER&&(nt===s.UNSIGNED_BYTE&&(ft=s.RGB8UI),nt===s.UNSIGNED_SHORT&&(ft=s.RGB16UI),nt===s.UNSIGNED_INT&&(ft=s.RGB32UI),nt===s.BYTE&&(ft=s.RGB8I),nt===s.SHORT&&(ft=s.RGB16I),nt===s.INT&&(ft=s.RGB32I)),b===s.RGBA_INTEGER&&(nt===s.UNSIGNED_BYTE&&(ft=s.RGBA8UI),nt===s.UNSIGNED_SHORT&&(ft=s.RGBA16UI),nt===s.UNSIGNED_INT&&(ft=s.RGBA32UI),nt===s.BYTE&&(ft=s.RGBA8I),nt===s.SHORT&&(ft=s.RGBA16I),nt===s.INT&&(ft=s.RGBA32I)),b===s.RGB&&nt===s.UNSIGNED_INT_5_9_9_9_REV&&(ft=s.RGB9_E5),b===s.RGBA){const Pt=Tt?Fc:Ae.getTransfer(gt);nt===s.FLOAT&&(ft=s.RGBA32F),nt===s.HALF_FLOAT&&(ft=s.RGBA16F),nt===s.UNSIGNED_BYTE&&(ft=Pt===ze?s.SRGB8_ALPHA8:s.RGBA8),nt===s.UNSIGNED_SHORT_4_4_4_4&&(ft=s.RGBA4),nt===s.UNSIGNED_SHORT_5_5_5_1&&(ft=s.RGB5_A1)}return(ft===s.R16F||ft===s.R32F||ft===s.RG16F||ft===s.RG32F||ft===s.RGBA16F||ft===s.RGBA32F)&&t.get("EXT_color_buffer_float"),ft}function C(O,b){let nt;return O?b===null||b===Rr||b===Fo?nt=s.DEPTH24_STENCIL8:b===ra?nt=s.DEPTH32F_STENCIL8:b===Io&&(nt=s.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):b===null||b===Rr||b===Fo?nt=s.DEPTH_COMPONENT24:b===ra?nt=s.DEPTH_COMPONENT32F:b===Io&&(nt=s.DEPTH_COMPONENT16),nt}function F(O,b){return S(O)===!0||O.isFramebufferTexture&&O.minFilter!==_i&&O.minFilter!==bi?Math.log2(Math.max(b.width,b.height))+1:O.mipmaps!==void 0&&O.mipmaps.length>0?O.mipmaps.length:O.isCompressedTexture&&Array.isArray(O.image)?b.mipmaps.length:1}function H(O){const b=O.target;b.removeEventListener("dispose",H),k(b),b.isVideoTexture&&g.delete(b)}function B(O){const b=O.target;b.removeEventListener("dispose",B),R(b)}function k(O){const b=r.get(O);if(b.__webglInit===void 0)return;const nt=O.source,gt=v.get(nt);if(gt){const Tt=gt[b.__cacheKey];Tt.usedTimes--,Tt.usedTimes===0&&U(O),Object.keys(gt).length===0&&v.delete(nt)}r.remove(O)}function U(O){const b=r.get(O);s.deleteTexture(b.__webglTexture);const nt=O.source,gt=v.get(nt);delete gt[b.__cacheKey],f.memory.textures--}function R(O){const b=r.get(O);if(O.depthTexture&&(O.depthTexture.dispose(),r.remove(O.depthTexture)),O.isWebGLCubeRenderTarget)for(let gt=0;gt<6;gt++){if(Array.isArray(b.__webglFramebuffer[gt]))for(let Tt=0;Tt<b.__webglFramebuffer[gt].length;Tt++)s.deleteFramebuffer(b.__webglFramebuffer[gt][Tt]);else s.deleteFramebuffer(b.__webglFramebuffer[gt]);b.__webglDepthbuffer&&s.deleteRenderbuffer(b.__webglDepthbuffer[gt])}else{if(Array.isArray(b.__webglFramebuffer))for(let gt=0;gt<b.__webglFramebuffer.length;gt++)s.deleteFramebuffer(b.__webglFramebuffer[gt]);else s.deleteFramebuffer(b.__webglFramebuffer);if(b.__webglDepthbuffer&&s.deleteRenderbuffer(b.__webglDepthbuffer),b.__webglMultisampledFramebuffer&&s.deleteFramebuffer(b.__webglMultisampledFramebuffer),b.__webglColorRenderbuffer)for(let gt=0;gt<b.__webglColorRenderbuffer.length;gt++)b.__webglColorRenderbuffer[gt]&&s.deleteRenderbuffer(b.__webglColorRenderbuffer[gt]);b.__webglDepthRenderbuffer&&s.deleteRenderbuffer(b.__webglDepthRenderbuffer)}const nt=O.textures;for(let gt=0,Tt=nt.length;gt<Tt;gt++){const ft=r.get(nt[gt]);ft.__webglTexture&&(s.deleteTexture(ft.__webglTexture),f.memory.textures--),r.remove(nt[gt])}r.remove(O)}let V=0;function lt(){V=0}function ot(){const O=V;return O>=l.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+O+" texture units while this GPU supports only "+l.maxTextures),V+=1,O}function xt(O){const b=[];return b.push(O.wrapS),b.push(O.wrapT),b.push(O.wrapR||0),b.push(O.magFilter),b.push(O.minFilter),b.push(O.anisotropy),b.push(O.internalFormat),b.push(O.format),b.push(O.type),b.push(O.generateMipmaps),b.push(O.premultiplyAlpha),b.push(O.flipY),b.push(O.unpackAlignment),b.push(O.colorSpace),b.join()}function dt(O,b){const nt=r.get(O);if(O.isVideoTexture&&Xt(O),O.isRenderTargetTexture===!1&&O.version>0&&nt.__version!==O.version){const gt=O.image;if(gt===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(gt.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{J(nt,O,b);return}}i.bindTexture(s.TEXTURE_2D,nt.__webglTexture,s.TEXTURE0+b)}function I(O,b){const nt=r.get(O);if(O.version>0&&nt.__version!==O.version){J(nt,O,b);return}i.bindTexture(s.TEXTURE_2D_ARRAY,nt.__webglTexture,s.TEXTURE0+b)}function K(O,b){const nt=r.get(O);if(O.version>0&&nt.__version!==O.version){J(nt,O,b);return}i.bindTexture(s.TEXTURE_3D,nt.__webglTexture,s.TEXTURE0+b)}function Y(O,b){const nt=r.get(O);if(O.version>0&&nt.__version!==O.version){mt(nt,O,b);return}i.bindTexture(s.TEXTURE_CUBE_MAP,nt.__webglTexture,s.TEXTURE0+b)}const Et={[qh]:s.REPEAT,[br]:s.CLAMP_TO_EDGE,[Yh]:s.MIRRORED_REPEAT},P={[_i]:s.NEAREST,[XM]:s.NEAREST_MIPMAP_NEAREST,[oc]:s.NEAREST_MIPMAP_LINEAR,[bi]:s.LINEAR,[ih]:s.LINEAR_MIPMAP_NEAREST,[Ar]:s.LINEAR_MIPMAP_LINEAR},tt={[ZM]:s.NEVER,[eE]:s.ALWAYS,[KM]:s.LESS,[a0]:s.LEQUAL,[QM]:s.EQUAL,[tE]:s.GEQUAL,[JM]:s.GREATER,[$M]:s.NOTEQUAL};function yt(O,b){if(b.type===ra&&t.has("OES_texture_float_linear")===!1&&(b.magFilter===bi||b.magFilter===ih||b.magFilter===oc||b.magFilter===Ar||b.minFilter===bi||b.minFilter===ih||b.minFilter===oc||b.minFilter===Ar)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),s.texParameteri(O,s.TEXTURE_WRAP_S,Et[b.wrapS]),s.texParameteri(O,s.TEXTURE_WRAP_T,Et[b.wrapT]),(O===s.TEXTURE_3D||O===s.TEXTURE_2D_ARRAY)&&s.texParameteri(O,s.TEXTURE_WRAP_R,Et[b.wrapR]),s.texParameteri(O,s.TEXTURE_MAG_FILTER,P[b.magFilter]),s.texParameteri(O,s.TEXTURE_MIN_FILTER,P[b.minFilter]),b.compareFunction&&(s.texParameteri(O,s.TEXTURE_COMPARE_MODE,s.COMPARE_REF_TO_TEXTURE),s.texParameteri(O,s.TEXTURE_COMPARE_FUNC,tt[b.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(b.magFilter===_i||b.minFilter!==oc&&b.minFilter!==Ar||b.type===ra&&t.has("OES_texture_float_linear")===!1)return;if(b.anisotropy>1||r.get(b).__currentAnisotropy){const nt=t.get("EXT_texture_filter_anisotropic");s.texParameterf(O,nt.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(b.anisotropy,l.getMaxAnisotropy())),r.get(b).__currentAnisotropy=b.anisotropy}}}function Mt(O,b){let nt=!1;O.__webglInit===void 0&&(O.__webglInit=!0,b.addEventListener("dispose",H));const gt=b.source;let Tt=v.get(gt);Tt===void 0&&(Tt={},v.set(gt,Tt));const ft=xt(b);if(ft!==O.__cacheKey){Tt[ft]===void 0&&(Tt[ft]={texture:s.createTexture(),usedTimes:0},f.memory.textures++,nt=!0),Tt[ft].usedTimes++;const Pt=Tt[O.__cacheKey];Pt!==void 0&&(Tt[O.__cacheKey].usedTimes--,Pt.usedTimes===0&&U(b)),O.__cacheKey=ft,O.__webglTexture=Tt[ft].texture}return nt}function J(O,b,nt){let gt=s.TEXTURE_2D;(b.isDataArrayTexture||b.isCompressedArrayTexture)&&(gt=s.TEXTURE_2D_ARRAY),b.isData3DTexture&&(gt=s.TEXTURE_3D);const Tt=Mt(O,b),ft=b.source;i.bindTexture(gt,O.__webglTexture,s.TEXTURE0+nt);const Pt=r.get(ft);if(ft.version!==Pt.__version||Tt===!0){i.activeTexture(s.TEXTURE0+nt);const wt=Ae.getPrimaries(Ae.workingColorSpace),Gt=b.colorSpace===ja?null:Ae.getPrimaries(b.colorSpace),$t=b.colorSpace===ja||wt===Gt?s.NONE:s.BROWSER_DEFAULT_WEBGL;s.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,b.flipY),s.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,b.premultiplyAlpha),s.pixelStorei(s.UNPACK_ALIGNMENT,b.unpackAlignment),s.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,$t);let At=A(b.image,!1,l.maxTextureSize);At=Ue(b,At);const Ft=c.convert(b.format,b.colorSpace),Yt=c.convert(b.type);let Qt=D(b.internalFormat,Ft,Yt,b.colorSpace,b.isVideoTexture);yt(gt,b);let zt;const ce=b.mipmaps,ne=b.isVideoTexture!==!0,Le=Pt.__version===void 0||Tt===!0,X=ft.dataReady,Nt=F(b,At);if(b.isDepthTexture)Qt=C(b.format===Go,b.type),Le&&(ne?i.texStorage2D(s.TEXTURE_2D,1,Qt,At.width,At.height):i.texImage2D(s.TEXTURE_2D,0,Qt,At.width,At.height,0,Ft,Yt,null));else if(b.isDataTexture)if(ce.length>0){ne&&Le&&i.texStorage2D(s.TEXTURE_2D,Nt,Qt,ce[0].width,ce[0].height);for(let ct=0,_t=ce.length;ct<_t;ct++)zt=ce[ct],ne?X&&i.texSubImage2D(s.TEXTURE_2D,ct,0,0,zt.width,zt.height,Ft,Yt,zt.data):i.texImage2D(s.TEXTURE_2D,ct,Qt,zt.width,zt.height,0,Ft,Yt,zt.data);b.generateMipmaps=!1}else ne?(Le&&i.texStorage2D(s.TEXTURE_2D,Nt,Qt,At.width,At.height),X&&i.texSubImage2D(s.TEXTURE_2D,0,0,0,At.width,At.height,Ft,Yt,At.data)):i.texImage2D(s.TEXTURE_2D,0,Qt,At.width,At.height,0,Ft,Yt,At.data);else if(b.isCompressedTexture)if(b.isCompressedArrayTexture){ne&&Le&&i.texStorage3D(s.TEXTURE_2D_ARRAY,Nt,Qt,ce[0].width,ce[0].height,At.depth);for(let ct=0,_t=ce.length;ct<_t;ct++)if(zt=ce[ct],b.format!==gi)if(Ft!==null)if(ne){if(X)if(b.layerUpdates.size>0){const Bt=rv(zt.width,zt.height,b.format,b.type);for(const Ot of b.layerUpdates){const ae=zt.data.subarray(Ot*Bt/zt.data.BYTES_PER_ELEMENT,(Ot+1)*Bt/zt.data.BYTES_PER_ELEMENT);i.compressedTexSubImage3D(s.TEXTURE_2D_ARRAY,ct,0,0,Ot,zt.width,zt.height,1,Ft,ae)}b.clearLayerUpdates()}else i.compressedTexSubImage3D(s.TEXTURE_2D_ARRAY,ct,0,0,0,zt.width,zt.height,At.depth,Ft,zt.data)}else i.compressedTexImage3D(s.TEXTURE_2D_ARRAY,ct,Qt,zt.width,zt.height,At.depth,0,zt.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else ne?X&&i.texSubImage3D(s.TEXTURE_2D_ARRAY,ct,0,0,0,zt.width,zt.height,At.depth,Ft,Yt,zt.data):i.texImage3D(s.TEXTURE_2D_ARRAY,ct,Qt,zt.width,zt.height,At.depth,0,Ft,Yt,zt.data)}else{ne&&Le&&i.texStorage2D(s.TEXTURE_2D,Nt,Qt,ce[0].width,ce[0].height);for(let ct=0,_t=ce.length;ct<_t;ct++)zt=ce[ct],b.format!==gi?Ft!==null?ne?X&&i.compressedTexSubImage2D(s.TEXTURE_2D,ct,0,0,zt.width,zt.height,Ft,zt.data):i.compressedTexImage2D(s.TEXTURE_2D,ct,Qt,zt.width,zt.height,0,zt.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):ne?X&&i.texSubImage2D(s.TEXTURE_2D,ct,0,0,zt.width,zt.height,Ft,Yt,zt.data):i.texImage2D(s.TEXTURE_2D,ct,Qt,zt.width,zt.height,0,Ft,Yt,zt.data)}else if(b.isDataArrayTexture)if(ne){if(Le&&i.texStorage3D(s.TEXTURE_2D_ARRAY,Nt,Qt,At.width,At.height,At.depth),X)if(b.layerUpdates.size>0){const ct=rv(At.width,At.height,b.format,b.type);for(const _t of b.layerUpdates){const Bt=At.data.subarray(_t*ct/At.data.BYTES_PER_ELEMENT,(_t+1)*ct/At.data.BYTES_PER_ELEMENT);i.texSubImage3D(s.TEXTURE_2D_ARRAY,0,0,0,_t,At.width,At.height,1,Ft,Yt,Bt)}b.clearLayerUpdates()}else i.texSubImage3D(s.TEXTURE_2D_ARRAY,0,0,0,0,At.width,At.height,At.depth,Ft,Yt,At.data)}else i.texImage3D(s.TEXTURE_2D_ARRAY,0,Qt,At.width,At.height,At.depth,0,Ft,Yt,At.data);else if(b.isData3DTexture)ne?(Le&&i.texStorage3D(s.TEXTURE_3D,Nt,Qt,At.width,At.height,At.depth),X&&i.texSubImage3D(s.TEXTURE_3D,0,0,0,0,At.width,At.height,At.depth,Ft,Yt,At.data)):i.texImage3D(s.TEXTURE_3D,0,Qt,At.width,At.height,At.depth,0,Ft,Yt,At.data);else if(b.isFramebufferTexture){if(Le)if(ne)i.texStorage2D(s.TEXTURE_2D,Nt,Qt,At.width,At.height);else{let ct=At.width,_t=At.height;for(let Bt=0;Bt<Nt;Bt++)i.texImage2D(s.TEXTURE_2D,Bt,Qt,ct,_t,0,Ft,Yt,null),ct>>=1,_t>>=1}}else if(ce.length>0){if(ne&&Le){const ct=Vt(ce[0]);i.texStorage2D(s.TEXTURE_2D,Nt,Qt,ct.width,ct.height)}for(let ct=0,_t=ce.length;ct<_t;ct++)zt=ce[ct],ne?X&&i.texSubImage2D(s.TEXTURE_2D,ct,0,0,Ft,Yt,zt):i.texImage2D(s.TEXTURE_2D,ct,Qt,Ft,Yt,zt);b.generateMipmaps=!1}else if(ne){if(Le){const ct=Vt(At);i.texStorage2D(s.TEXTURE_2D,Nt,Qt,ct.width,ct.height)}X&&i.texSubImage2D(s.TEXTURE_2D,0,0,0,Ft,Yt,At)}else i.texImage2D(s.TEXTURE_2D,0,Qt,Ft,Yt,At);S(b)&&_(gt),Pt.__version=ft.version,b.onUpdate&&b.onUpdate(b)}O.__version=b.version}function mt(O,b,nt){if(b.image.length!==6)return;const gt=Mt(O,b),Tt=b.source;i.bindTexture(s.TEXTURE_CUBE_MAP,O.__webglTexture,s.TEXTURE0+nt);const ft=r.get(Tt);if(Tt.version!==ft.__version||gt===!0){i.activeTexture(s.TEXTURE0+nt);const Pt=Ae.getPrimaries(Ae.workingColorSpace),wt=b.colorSpace===ja?null:Ae.getPrimaries(b.colorSpace),Gt=b.colorSpace===ja||Pt===wt?s.NONE:s.BROWSER_DEFAULT_WEBGL;s.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,b.flipY),s.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,b.premultiplyAlpha),s.pixelStorei(s.UNPACK_ALIGNMENT,b.unpackAlignment),s.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,Gt);const $t=b.isCompressedTexture||b.image[0].isCompressedTexture,At=b.image[0]&&b.image[0].isDataTexture,Ft=[];for(let _t=0;_t<6;_t++)!$t&&!At?Ft[_t]=A(b.image[_t],!0,l.maxCubemapSize):Ft[_t]=At?b.image[_t].image:b.image[_t],Ft[_t]=Ue(b,Ft[_t]);const Yt=Ft[0],Qt=c.convert(b.format,b.colorSpace),zt=c.convert(b.type),ce=D(b.internalFormat,Qt,zt,b.colorSpace),ne=b.isVideoTexture!==!0,Le=ft.__version===void 0||gt===!0,X=Tt.dataReady;let Nt=F(b,Yt);yt(s.TEXTURE_CUBE_MAP,b);let ct;if($t){ne&&Le&&i.texStorage2D(s.TEXTURE_CUBE_MAP,Nt,ce,Yt.width,Yt.height);for(let _t=0;_t<6;_t++){ct=Ft[_t].mipmaps;for(let Bt=0;Bt<ct.length;Bt++){const Ot=ct[Bt];b.format!==gi?Qt!==null?ne?X&&i.compressedTexSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+_t,Bt,0,0,Ot.width,Ot.height,Qt,Ot.data):i.compressedTexImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+_t,Bt,ce,Ot.width,Ot.height,0,Ot.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):ne?X&&i.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+_t,Bt,0,0,Ot.width,Ot.height,Qt,zt,Ot.data):i.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+_t,Bt,ce,Ot.width,Ot.height,0,Qt,zt,Ot.data)}}}else{if(ct=b.mipmaps,ne&&Le){ct.length>0&&Nt++;const _t=Vt(Ft[0]);i.texStorage2D(s.TEXTURE_CUBE_MAP,Nt,ce,_t.width,_t.height)}for(let _t=0;_t<6;_t++)if(At){ne?X&&i.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+_t,0,0,0,Ft[_t].width,Ft[_t].height,Qt,zt,Ft[_t].data):i.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+_t,0,ce,Ft[_t].width,Ft[_t].height,0,Qt,zt,Ft[_t].data);for(let Bt=0;Bt<ct.length;Bt++){const ae=ct[Bt].image[_t].image;ne?X&&i.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+_t,Bt+1,0,0,ae.width,ae.height,Qt,zt,ae.data):i.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+_t,Bt+1,ce,ae.width,ae.height,0,Qt,zt,ae.data)}}else{ne?X&&i.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+_t,0,0,0,Qt,zt,Ft[_t]):i.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+_t,0,ce,Qt,zt,Ft[_t]);for(let Bt=0;Bt<ct.length;Bt++){const Ot=ct[Bt];ne?X&&i.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+_t,Bt+1,0,0,Qt,zt,Ot.image[_t]):i.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+_t,Bt+1,ce,Qt,zt,Ot.image[_t])}}}S(b)&&_(s.TEXTURE_CUBE_MAP),ft.__version=Tt.version,b.onUpdate&&b.onUpdate(b)}O.__version=b.version}function St(O,b,nt,gt,Tt,ft){const Pt=c.convert(nt.format,nt.colorSpace),wt=c.convert(nt.type),Gt=D(nt.internalFormat,Pt,wt,nt.colorSpace),$t=r.get(b),At=r.get(nt);if(At.__renderTarget=b,!$t.__hasExternalTextures){const Ft=Math.max(1,b.width>>ft),Yt=Math.max(1,b.height>>ft);Tt===s.TEXTURE_3D||Tt===s.TEXTURE_2D_ARRAY?i.texImage3D(Tt,ft,Gt,Ft,Yt,b.depth,0,Pt,wt,null):i.texImage2D(Tt,ft,Gt,Ft,Yt,0,Pt,wt,null)}i.bindFramebuffer(s.FRAMEBUFFER,O),ie(b)?d.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,gt,Tt,At.__webglTexture,0,ge(b)):(Tt===s.TEXTURE_2D||Tt>=s.TEXTURE_CUBE_MAP_POSITIVE_X&&Tt<=s.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&s.framebufferTexture2D(s.FRAMEBUFFER,gt,Tt,At.__webglTexture,ft),i.bindFramebuffer(s.FRAMEBUFFER,null)}function Rt(O,b,nt){if(s.bindRenderbuffer(s.RENDERBUFFER,O),b.depthBuffer){const gt=b.depthTexture,Tt=gt&&gt.isDepthTexture?gt.type:null,ft=C(b.stencilBuffer,Tt),Pt=b.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,wt=ge(b);ie(b)?d.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,wt,ft,b.width,b.height):nt?s.renderbufferStorageMultisample(s.RENDERBUFFER,wt,ft,b.width,b.height):s.renderbufferStorage(s.RENDERBUFFER,ft,b.width,b.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,Pt,s.RENDERBUFFER,O)}else{const gt=b.textures;for(let Tt=0;Tt<gt.length;Tt++){const ft=gt[Tt],Pt=c.convert(ft.format,ft.colorSpace),wt=c.convert(ft.type),Gt=D(ft.internalFormat,Pt,wt,ft.colorSpace),$t=ge(b);nt&&ie(b)===!1?s.renderbufferStorageMultisample(s.RENDERBUFFER,$t,Gt,b.width,b.height):ie(b)?d.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,$t,Gt,b.width,b.height):s.renderbufferStorage(s.RENDERBUFFER,Gt,b.width,b.height)}}s.bindRenderbuffer(s.RENDERBUFFER,null)}function Lt(O,b){if(b&&b.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(i.bindFramebuffer(s.FRAMEBUFFER,O),!(b.depthTexture&&b.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const gt=r.get(b.depthTexture);gt.__renderTarget=b,(!gt.__webglTexture||b.depthTexture.image.width!==b.width||b.depthTexture.image.height!==b.height)&&(b.depthTexture.image.width=b.width,b.depthTexture.image.height=b.height,b.depthTexture.needsUpdate=!0),dt(b.depthTexture,0);const Tt=gt.__webglTexture,ft=ge(b);if(b.depthTexture.format===Ho)ie(b)?d.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,s.DEPTH_ATTACHMENT,s.TEXTURE_2D,Tt,0,ft):s.framebufferTexture2D(s.FRAMEBUFFER,s.DEPTH_ATTACHMENT,s.TEXTURE_2D,Tt,0);else if(b.depthTexture.format===Go)ie(b)?d.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,s.DEPTH_STENCIL_ATTACHMENT,s.TEXTURE_2D,Tt,0,ft):s.framebufferTexture2D(s.FRAMEBUFFER,s.DEPTH_STENCIL_ATTACHMENT,s.TEXTURE_2D,Tt,0);else throw new Error("Unknown depthTexture format")}function oe(O){const b=r.get(O),nt=O.isWebGLCubeRenderTarget===!0;if(b.__boundDepthTexture!==O.depthTexture){const gt=O.depthTexture;if(b.__depthDisposeCallback&&b.__depthDisposeCallback(),gt){const Tt=()=>{delete b.__boundDepthTexture,delete b.__depthDisposeCallback,gt.removeEventListener("dispose",Tt)};gt.addEventListener("dispose",Tt),b.__depthDisposeCallback=Tt}b.__boundDepthTexture=gt}if(O.depthTexture&&!b.__autoAllocateDepthBuffer){if(nt)throw new Error("target.depthTexture not supported in Cube render targets");const gt=O.texture.mipmaps;gt&&gt.length>0?Lt(b.__webglFramebuffer[0],O):Lt(b.__webglFramebuffer,O)}else if(nt){b.__webglDepthbuffer=[];for(let gt=0;gt<6;gt++)if(i.bindFramebuffer(s.FRAMEBUFFER,b.__webglFramebuffer[gt]),b.__webglDepthbuffer[gt]===void 0)b.__webglDepthbuffer[gt]=s.createRenderbuffer(),Rt(b.__webglDepthbuffer[gt],O,!1);else{const Tt=O.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,ft=b.__webglDepthbuffer[gt];s.bindRenderbuffer(s.RENDERBUFFER,ft),s.framebufferRenderbuffer(s.FRAMEBUFFER,Tt,s.RENDERBUFFER,ft)}}else{const gt=O.texture.mipmaps;if(gt&&gt.length>0?i.bindFramebuffer(s.FRAMEBUFFER,b.__webglFramebuffer[0]):i.bindFramebuffer(s.FRAMEBUFFER,b.__webglFramebuffer),b.__webglDepthbuffer===void 0)b.__webglDepthbuffer=s.createRenderbuffer(),Rt(b.__webglDepthbuffer,O,!1);else{const Tt=O.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,ft=b.__webglDepthbuffer;s.bindRenderbuffer(s.RENDERBUFFER,ft),s.framebufferRenderbuffer(s.FRAMEBUFFER,Tt,s.RENDERBUFFER,ft)}}i.bindFramebuffer(s.FRAMEBUFFER,null)}function Kt(O,b,nt){const gt=r.get(O);b!==void 0&&St(gt.__webglFramebuffer,O,O.texture,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,0),nt!==void 0&&oe(O)}function He(O){const b=O.texture,nt=r.get(O),gt=r.get(b);O.addEventListener("dispose",B);const Tt=O.textures,ft=O.isWebGLCubeRenderTarget===!0,Pt=Tt.length>1;if(Pt||(gt.__webglTexture===void 0&&(gt.__webglTexture=s.createTexture()),gt.__version=b.version,f.memory.textures++),ft){nt.__webglFramebuffer=[];for(let wt=0;wt<6;wt++)if(b.mipmaps&&b.mipmaps.length>0){nt.__webglFramebuffer[wt]=[];for(let Gt=0;Gt<b.mipmaps.length;Gt++)nt.__webglFramebuffer[wt][Gt]=s.createFramebuffer()}else nt.__webglFramebuffer[wt]=s.createFramebuffer()}else{if(b.mipmaps&&b.mipmaps.length>0){nt.__webglFramebuffer=[];for(let wt=0;wt<b.mipmaps.length;wt++)nt.__webglFramebuffer[wt]=s.createFramebuffer()}else nt.__webglFramebuffer=s.createFramebuffer();if(Pt)for(let wt=0,Gt=Tt.length;wt<Gt;wt++){const $t=r.get(Tt[wt]);$t.__webglTexture===void 0&&($t.__webglTexture=s.createTexture(),f.memory.textures++)}if(O.samples>0&&ie(O)===!1){nt.__webglMultisampledFramebuffer=s.createFramebuffer(),nt.__webglColorRenderbuffer=[],i.bindFramebuffer(s.FRAMEBUFFER,nt.__webglMultisampledFramebuffer);for(let wt=0;wt<Tt.length;wt++){const Gt=Tt[wt];nt.__webglColorRenderbuffer[wt]=s.createRenderbuffer(),s.bindRenderbuffer(s.RENDERBUFFER,nt.__webglColorRenderbuffer[wt]);const $t=c.convert(Gt.format,Gt.colorSpace),At=c.convert(Gt.type),Ft=D(Gt.internalFormat,$t,At,Gt.colorSpace,O.isXRRenderTarget===!0),Yt=ge(O);s.renderbufferStorageMultisample(s.RENDERBUFFER,Yt,Ft,O.width,O.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+wt,s.RENDERBUFFER,nt.__webglColorRenderbuffer[wt])}s.bindRenderbuffer(s.RENDERBUFFER,null),O.depthBuffer&&(nt.__webglDepthRenderbuffer=s.createRenderbuffer(),Rt(nt.__webglDepthRenderbuffer,O,!0)),i.bindFramebuffer(s.FRAMEBUFFER,null)}}if(ft){i.bindTexture(s.TEXTURE_CUBE_MAP,gt.__webglTexture),yt(s.TEXTURE_CUBE_MAP,b);for(let wt=0;wt<6;wt++)if(b.mipmaps&&b.mipmaps.length>0)for(let Gt=0;Gt<b.mipmaps.length;Gt++)St(nt.__webglFramebuffer[wt][Gt],O,b,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+wt,Gt);else St(nt.__webglFramebuffer[wt],O,b,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+wt,0);S(b)&&_(s.TEXTURE_CUBE_MAP),i.unbindTexture()}else if(Pt){for(let wt=0,Gt=Tt.length;wt<Gt;wt++){const $t=Tt[wt],At=r.get($t);i.bindTexture(s.TEXTURE_2D,At.__webglTexture),yt(s.TEXTURE_2D,$t),St(nt.__webglFramebuffer,O,$t,s.COLOR_ATTACHMENT0+wt,s.TEXTURE_2D,0),S($t)&&_(s.TEXTURE_2D)}i.unbindTexture()}else{let wt=s.TEXTURE_2D;if((O.isWebGL3DRenderTarget||O.isWebGLArrayRenderTarget)&&(wt=O.isWebGL3DRenderTarget?s.TEXTURE_3D:s.TEXTURE_2D_ARRAY),i.bindTexture(wt,gt.__webglTexture),yt(wt,b),b.mipmaps&&b.mipmaps.length>0)for(let Gt=0;Gt<b.mipmaps.length;Gt++)St(nt.__webglFramebuffer[Gt],O,b,s.COLOR_ATTACHMENT0,wt,Gt);else St(nt.__webglFramebuffer,O,b,s.COLOR_ATTACHMENT0,wt,0);S(b)&&_(wt),i.unbindTexture()}O.depthBuffer&&oe(O)}function Be(O){const b=O.textures;for(let nt=0,gt=b.length;nt<gt;nt++){const Tt=b[nt];if(S(Tt)){const ft=L(O),Pt=r.get(Tt).__webglTexture;i.bindTexture(ft,Pt),_(ft),i.unbindTexture()}}}const fe=[],G=[];function On(O){if(O.samples>0){if(ie(O)===!1){const b=O.textures,nt=O.width,gt=O.height;let Tt=s.COLOR_BUFFER_BIT;const ft=O.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,Pt=r.get(O),wt=b.length>1;if(wt)for(let $t=0;$t<b.length;$t++)i.bindFramebuffer(s.FRAMEBUFFER,Pt.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+$t,s.RENDERBUFFER,null),i.bindFramebuffer(s.FRAMEBUFFER,Pt.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+$t,s.TEXTURE_2D,null,0);i.bindFramebuffer(s.READ_FRAMEBUFFER,Pt.__webglMultisampledFramebuffer);const Gt=O.texture.mipmaps;Gt&&Gt.length>0?i.bindFramebuffer(s.DRAW_FRAMEBUFFER,Pt.__webglFramebuffer[0]):i.bindFramebuffer(s.DRAW_FRAMEBUFFER,Pt.__webglFramebuffer);for(let $t=0;$t<b.length;$t++){if(O.resolveDepthBuffer&&(O.depthBuffer&&(Tt|=s.DEPTH_BUFFER_BIT),O.stencilBuffer&&O.resolveStencilBuffer&&(Tt|=s.STENCIL_BUFFER_BIT)),wt){s.framebufferRenderbuffer(s.READ_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.RENDERBUFFER,Pt.__webglColorRenderbuffer[$t]);const At=r.get(b[$t]).__webglTexture;s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,At,0)}s.blitFramebuffer(0,0,nt,gt,0,0,nt,gt,Tt,s.NEAREST),m===!0&&(fe.length=0,G.length=0,fe.push(s.COLOR_ATTACHMENT0+$t),O.depthBuffer&&O.resolveDepthBuffer===!1&&(fe.push(ft),G.push(ft),s.invalidateFramebuffer(s.DRAW_FRAMEBUFFER,G)),s.invalidateFramebuffer(s.READ_FRAMEBUFFER,fe))}if(i.bindFramebuffer(s.READ_FRAMEBUFFER,null),i.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),wt)for(let $t=0;$t<b.length;$t++){i.bindFramebuffer(s.FRAMEBUFFER,Pt.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+$t,s.RENDERBUFFER,Pt.__webglColorRenderbuffer[$t]);const At=r.get(b[$t]).__webglTexture;i.bindFramebuffer(s.FRAMEBUFFER,Pt.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+$t,s.TEXTURE_2D,At,0)}i.bindFramebuffer(s.DRAW_FRAMEBUFFER,Pt.__webglMultisampledFramebuffer)}else if(O.depthBuffer&&O.resolveDepthBuffer===!1&&m){const b=O.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT;s.invalidateFramebuffer(s.DRAW_FRAMEBUFFER,[b])}}}function ge(O){return Math.min(l.maxSamples,O.samples)}function ie(O){const b=r.get(O);return O.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&b.__useRenderToTexture!==!1}function Xt(O){const b=f.render.frame;g.get(O)!==b&&(g.set(O,b),O.update())}function Ue(O,b){const nt=O.colorSpace,gt=O.format,Tt=O.type;return O.isCompressedTexture===!0||O.isVideoTexture===!0||nt!==Rs&&nt!==ja&&(Ae.getTransfer(nt)===ze?(gt!==gi||Tt!==Ci)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",nt)),b}function Vt(O){return typeof HTMLImageElement<"u"&&O instanceof HTMLImageElement?(p.width=O.naturalWidth||O.width,p.height=O.naturalHeight||O.height):typeof VideoFrame<"u"&&O instanceof VideoFrame?(p.width=O.displayWidth,p.height=O.displayHeight):(p.width=O.width,p.height=O.height),p}this.allocateTextureUnit=ot,this.resetTextureUnits=lt,this.setTexture2D=dt,this.setTexture2DArray=I,this.setTexture3D=K,this.setTextureCube=Y,this.rebindTextures=Kt,this.setupRenderTarget=He,this.updateRenderTargetMipmap=Be,this.updateMultisampleRenderTarget=On,this.setupDepthRenderbuffer=oe,this.setupFrameBufferTexture=St,this.useMultisampledRTT=ie}function _R(s,t){function i(r,l=ja){let c;const f=Ae.getTransfer(l);if(r===Ci)return s.UNSIGNED_BYTE;if(r===Ld)return s.UNSIGNED_SHORT_4_4_4_4;if(r===Nd)return s.UNSIGNED_SHORT_5_5_5_1;if(r===Qv)return s.UNSIGNED_INT_5_9_9_9_REV;if(r===Zv)return s.BYTE;if(r===Kv)return s.SHORT;if(r===Io)return s.UNSIGNED_SHORT;if(r===Ud)return s.INT;if(r===Rr)return s.UNSIGNED_INT;if(r===ra)return s.FLOAT;if(r===Xo)return s.HALF_FLOAT;if(r===Jv)return s.ALPHA;if(r===$v)return s.RGB;if(r===gi)return s.RGBA;if(r===Ho)return s.DEPTH_COMPONENT;if(r===Go)return s.DEPTH_STENCIL;if(r===t0)return s.RED;if(r===Od)return s.RED_INTEGER;if(r===e0)return s.RG;if(r===Pd)return s.RG_INTEGER;if(r===zd)return s.RGBA_INTEGER;if(r===Uc||r===Lc||r===Nc||r===Oc)if(f===ze)if(c=t.get("WEBGL_compressed_texture_s3tc_srgb"),c!==null){if(r===Uc)return c.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(r===Lc)return c.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(r===Nc)return c.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(r===Oc)return c.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(c=t.get("WEBGL_compressed_texture_s3tc"),c!==null){if(r===Uc)return c.COMPRESSED_RGB_S3TC_DXT1_EXT;if(r===Lc)return c.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(r===Nc)return c.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(r===Oc)return c.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(r===Zh||r===Kh||r===Qh||r===Jh)if(c=t.get("WEBGL_compressed_texture_pvrtc"),c!==null){if(r===Zh)return c.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(r===Kh)return c.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(r===Qh)return c.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(r===Jh)return c.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(r===$h||r===td||r===ed)if(c=t.get("WEBGL_compressed_texture_etc"),c!==null){if(r===$h||r===td)return f===ze?c.COMPRESSED_SRGB8_ETC2:c.COMPRESSED_RGB8_ETC2;if(r===ed)return f===ze?c.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:c.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(r===nd||r===id||r===ad||r===rd||r===sd||r===od||r===ld||r===cd||r===ud||r===fd||r===hd||r===dd||r===pd||r===md)if(c=t.get("WEBGL_compressed_texture_astc"),c!==null){if(r===nd)return f===ze?c.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:c.COMPRESSED_RGBA_ASTC_4x4_KHR;if(r===id)return f===ze?c.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:c.COMPRESSED_RGBA_ASTC_5x4_KHR;if(r===ad)return f===ze?c.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:c.COMPRESSED_RGBA_ASTC_5x5_KHR;if(r===rd)return f===ze?c.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:c.COMPRESSED_RGBA_ASTC_6x5_KHR;if(r===sd)return f===ze?c.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:c.COMPRESSED_RGBA_ASTC_6x6_KHR;if(r===od)return f===ze?c.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:c.COMPRESSED_RGBA_ASTC_8x5_KHR;if(r===ld)return f===ze?c.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:c.COMPRESSED_RGBA_ASTC_8x6_KHR;if(r===cd)return f===ze?c.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:c.COMPRESSED_RGBA_ASTC_8x8_KHR;if(r===ud)return f===ze?c.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:c.COMPRESSED_RGBA_ASTC_10x5_KHR;if(r===fd)return f===ze?c.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:c.COMPRESSED_RGBA_ASTC_10x6_KHR;if(r===hd)return f===ze?c.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:c.COMPRESSED_RGBA_ASTC_10x8_KHR;if(r===dd)return f===ze?c.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:c.COMPRESSED_RGBA_ASTC_10x10_KHR;if(r===pd)return f===ze?c.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:c.COMPRESSED_RGBA_ASTC_12x10_KHR;if(r===md)return f===ze?c.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:c.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(r===Pc||r===gd||r===_d)if(c=t.get("EXT_texture_compression_bptc"),c!==null){if(r===Pc)return f===ze?c.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:c.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(r===gd)return c.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(r===_d)return c.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(r===n0||r===vd||r===xd||r===yd)if(c=t.get("EXT_texture_compression_rgtc"),c!==null){if(r===Pc)return c.COMPRESSED_RED_RGTC1_EXT;if(r===vd)return c.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(r===xd)return c.COMPRESSED_RED_GREEN_RGTC2_EXT;if(r===yd)return c.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return r===Fo?s.UNSIGNED_INT_24_8:s[r]!==void 0?s[r]:null}return{convert:i}}const vR=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,xR=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`;class yR{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,i,r){if(this.texture===null){const l=new Vn,c=t.properties.get(l);c.__webglTexture=i.texture,(i.depthNear!==r.depthNear||i.depthFar!==r.depthFar)&&(this.depthNear=i.depthNear,this.depthFar=i.depthFar),this.texture=l}}getMesh(t){if(this.texture!==null&&this.mesh===null){const i=t.cameras[0].viewport,r=new Ya({vertexShader:vR,fragmentShader:xR,uniforms:{depthColor:{value:this.texture},depthWidth:{value:i.z},depthHeight:{value:i.w}}});this.mesh=new Ai(new Xc(20,20),r)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class SR extends Us{constructor(t,i){super();const r=this;let l=null,c=1,f=null,d="local-floor",m=1,p=null,g=null,x=null,v=null,y=null,E=null;const A=new yR,S=i.getContextAttributes();let _=null,L=null;const D=[],C=[],F=new Me;let H=null;const B=new li;B.viewport=new Qe;const k=new li;k.viewport=new Qe;const U=[B,k],R=new VE;let V=null,lt=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(J){let mt=D[J];return mt===void 0&&(mt=new bh,D[J]=mt),mt.getTargetRaySpace()},this.getControllerGrip=function(J){let mt=D[J];return mt===void 0&&(mt=new bh,D[J]=mt),mt.getGripSpace()},this.getHand=function(J){let mt=D[J];return mt===void 0&&(mt=new bh,D[J]=mt),mt.getHandSpace()};function ot(J){const mt=C.indexOf(J.inputSource);if(mt===-1)return;const St=D[mt];St!==void 0&&(St.update(J.inputSource,J.frame,p||f),St.dispatchEvent({type:J.type,data:J.inputSource}))}function xt(){l.removeEventListener("select",ot),l.removeEventListener("selectstart",ot),l.removeEventListener("selectend",ot),l.removeEventListener("squeeze",ot),l.removeEventListener("squeezestart",ot),l.removeEventListener("squeezeend",ot),l.removeEventListener("end",xt),l.removeEventListener("inputsourceschange",dt);for(let J=0;J<D.length;J++){const mt=C[J];mt!==null&&(C[J]=null,D[J].disconnect(mt))}V=null,lt=null,A.reset(),t.setRenderTarget(_),y=null,v=null,x=null,l=null,L=null,Mt.stop(),r.isPresenting=!1,t.setPixelRatio(H),t.setSize(F.width,F.height,!1),r.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(J){c=J,r.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(J){d=J,r.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return p||f},this.setReferenceSpace=function(J){p=J},this.getBaseLayer=function(){return v!==null?v:y},this.getBinding=function(){return x},this.getFrame=function(){return E},this.getSession=function(){return l},this.setSession=async function(J){if(l=J,l!==null){if(_=t.getRenderTarget(),l.addEventListener("select",ot),l.addEventListener("selectstart",ot),l.addEventListener("selectend",ot),l.addEventListener("squeeze",ot),l.addEventListener("squeezestart",ot),l.addEventListener("squeezeend",ot),l.addEventListener("end",xt),l.addEventListener("inputsourceschange",dt),S.xrCompatible!==!0&&await i.makeXRCompatible(),H=t.getPixelRatio(),t.getSize(F),typeof XRWebGLBinding<"u"&&"createProjectionLayer"in XRWebGLBinding.prototype){let St=null,Rt=null,Lt=null;S.depth&&(Lt=S.stencil?i.DEPTH24_STENCIL8:i.DEPTH_COMPONENT24,St=S.stencil?Go:Ho,Rt=S.stencil?Fo:Rr);const oe={colorFormat:i.RGBA8,depthFormat:Lt,scaleFactor:c};x=new XRWebGLBinding(l,i),v=x.createProjectionLayer(oe),l.updateRenderState({layers:[v]}),t.setPixelRatio(1),t.setSize(v.textureWidth,v.textureHeight,!1),L=new wr(v.textureWidth,v.textureHeight,{format:gi,type:Ci,depthTexture:new m0(v.textureWidth,v.textureHeight,Rt,void 0,void 0,void 0,void 0,void 0,void 0,St),stencilBuffer:S.stencil,colorSpace:t.outputColorSpace,samples:S.antialias?4:0,resolveDepthBuffer:v.ignoreDepthValues===!1,resolveStencilBuffer:v.ignoreDepthValues===!1})}else{const St={antialias:S.antialias,alpha:!0,depth:S.depth,stencil:S.stencil,framebufferScaleFactor:c};y=new XRWebGLLayer(l,i,St),l.updateRenderState({baseLayer:y}),t.setPixelRatio(1),t.setSize(y.framebufferWidth,y.framebufferHeight,!1),L=new wr(y.framebufferWidth,y.framebufferHeight,{format:gi,type:Ci,colorSpace:t.outputColorSpace,stencilBuffer:S.stencil,resolveDepthBuffer:y.ignoreDepthValues===!1,resolveStencilBuffer:y.ignoreDepthValues===!1})}L.isXRRenderTarget=!0,this.setFoveation(m),p=null,f=await l.requestReferenceSpace(d),Mt.setContext(l),Mt.start(),r.isPresenting=!0,r.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(l!==null)return l.environmentBlendMode},this.getDepthTexture=function(){return A.getDepthTexture()};function dt(J){for(let mt=0;mt<J.removed.length;mt++){const St=J.removed[mt],Rt=C.indexOf(St);Rt>=0&&(C[Rt]=null,D[Rt].disconnect(St))}for(let mt=0;mt<J.added.length;mt++){const St=J.added[mt];let Rt=C.indexOf(St);if(Rt===-1){for(let oe=0;oe<D.length;oe++)if(oe>=C.length){C.push(St),Rt=oe;break}else if(C[oe]===null){C[oe]=St,Rt=oe;break}if(Rt===-1)break}const Lt=D[Rt];Lt&&Lt.connect(St)}}const I=new et,K=new et;function Y(J,mt,St){I.setFromMatrixPosition(mt.matrixWorld),K.setFromMatrixPosition(St.matrixWorld);const Rt=I.distanceTo(K),Lt=mt.projectionMatrix.elements,oe=St.projectionMatrix.elements,Kt=Lt[14]/(Lt[10]-1),He=Lt[14]/(Lt[10]+1),Be=(Lt[9]+1)/Lt[5],fe=(Lt[9]-1)/Lt[5],G=(Lt[8]-1)/Lt[0],On=(oe[8]+1)/oe[0],ge=Kt*G,ie=Kt*On,Xt=Rt/(-G+On),Ue=Xt*-G;if(mt.matrixWorld.decompose(J.position,J.quaternion,J.scale),J.translateX(Ue),J.translateZ(Xt),J.matrixWorld.compose(J.position,J.quaternion,J.scale),J.matrixWorldInverse.copy(J.matrixWorld).invert(),Lt[10]===-1)J.projectionMatrix.copy(mt.projectionMatrix),J.projectionMatrixInverse.copy(mt.projectionMatrixInverse);else{const Vt=Kt+Xt,O=He+Xt,b=ge-Ue,nt=ie+(Rt-Ue),gt=Be*He/O*Vt,Tt=fe*He/O*Vt;J.projectionMatrix.makePerspective(b,nt,gt,Tt,Vt,O),J.projectionMatrixInverse.copy(J.projectionMatrix).invert()}}function Et(J,mt){mt===null?J.matrixWorld.copy(J.matrix):J.matrixWorld.multiplyMatrices(mt.matrixWorld,J.matrix),J.matrixWorldInverse.copy(J.matrixWorld).invert()}this.updateCamera=function(J){if(l===null)return;let mt=J.near,St=J.far;A.texture!==null&&(A.depthNear>0&&(mt=A.depthNear),A.depthFar>0&&(St=A.depthFar)),R.near=k.near=B.near=mt,R.far=k.far=B.far=St,(V!==R.near||lt!==R.far)&&(l.updateRenderState({depthNear:R.near,depthFar:R.far}),V=R.near,lt=R.far),B.layers.mask=J.layers.mask|2,k.layers.mask=J.layers.mask|4,R.layers.mask=B.layers.mask|k.layers.mask;const Rt=J.parent,Lt=R.cameras;Et(R,Rt);for(let oe=0;oe<Lt.length;oe++)Et(Lt[oe],Rt);Lt.length===2?Y(R,B,k):R.projectionMatrix.copy(B.projectionMatrix),P(J,R,Rt)};function P(J,mt,St){St===null?J.matrix.copy(mt.matrixWorld):(J.matrix.copy(St.matrixWorld),J.matrix.invert(),J.matrix.multiply(mt.matrixWorld)),J.matrix.decompose(J.position,J.quaternion,J.scale),J.updateMatrixWorld(!0),J.projectionMatrix.copy(mt.projectionMatrix),J.projectionMatrixInverse.copy(mt.projectionMatrixInverse),J.isPerspectiveCamera&&(J.fov=Sd*2*Math.atan(1/J.projectionMatrix.elements[5]),J.zoom=1)}this.getCamera=function(){return R},this.getFoveation=function(){if(!(v===null&&y===null))return m},this.setFoveation=function(J){m=J,v!==null&&(v.fixedFoveation=J),y!==null&&y.fixedFoveation!==void 0&&(y.fixedFoveation=J)},this.hasDepthSensing=function(){return A.texture!==null},this.getDepthSensingMesh=function(){return A.getMesh(R)};let tt=null;function yt(J,mt){if(g=mt.getViewerPose(p||f),E=mt,g!==null){const St=g.views;y!==null&&(t.setRenderTargetFramebuffer(L,y.framebuffer),t.setRenderTarget(L));let Rt=!1;St.length!==R.cameras.length&&(R.cameras.length=0,Rt=!0);for(let Kt=0;Kt<St.length;Kt++){const He=St[Kt];let Be=null;if(y!==null)Be=y.getViewport(He);else{const G=x.getViewSubImage(v,He);Be=G.viewport,Kt===0&&(t.setRenderTargetTextures(L,G.colorTexture,G.depthStencilTexture),t.setRenderTarget(L))}let fe=U[Kt];fe===void 0&&(fe=new li,fe.layers.enable(Kt),fe.viewport=new Qe,U[Kt]=fe),fe.matrix.fromArray(He.transform.matrix),fe.matrix.decompose(fe.position,fe.quaternion,fe.scale),fe.projectionMatrix.fromArray(He.projectionMatrix),fe.projectionMatrixInverse.copy(fe.projectionMatrix).invert(),fe.viewport.set(Be.x,Be.y,Be.width,Be.height),Kt===0&&(R.matrix.copy(fe.matrix),R.matrix.decompose(R.position,R.quaternion,R.scale)),Rt===!0&&R.cameras.push(fe)}const Lt=l.enabledFeatures;if(Lt&&Lt.includes("depth-sensing")&&l.depthUsage=="gpu-optimized"&&x){const Kt=x.getDepthInformation(St[0]);Kt&&Kt.isValid&&Kt.texture&&A.init(t,Kt,l.renderState)}}for(let St=0;St<D.length;St++){const Rt=C[St],Lt=D[St];Rt!==null&&Lt!==void 0&&Lt.update(Rt,mt,p||f)}tt&&tt(J,mt),mt.detectedPlanes&&r.dispatchEvent({type:"planesdetected",data:mt}),E=null}const Mt=new v0;Mt.setAnimationLoop(yt),this.setAnimationLoop=function(J){tt=J},this.dispose=function(){}}}const xr=new Di,MR=new Je;function ER(s,t){function i(S,_){S.matrixAutoUpdate===!0&&S.updateMatrix(),_.value.copy(S.matrix)}function r(S,_){_.color.getRGB(S.fogColor.value,h0(s)),_.isFog?(S.fogNear.value=_.near,S.fogFar.value=_.far):_.isFogExp2&&(S.fogDensity.value=_.density)}function l(S,_,L,D,C){_.isMeshBasicMaterial||_.isMeshLambertMaterial?c(S,_):_.isMeshToonMaterial?(c(S,_),x(S,_)):_.isMeshPhongMaterial?(c(S,_),g(S,_)):_.isMeshStandardMaterial?(c(S,_),v(S,_),_.isMeshPhysicalMaterial&&y(S,_,C)):_.isMeshMatcapMaterial?(c(S,_),E(S,_)):_.isMeshDepthMaterial?c(S,_):_.isMeshDistanceMaterial?(c(S,_),A(S,_)):_.isMeshNormalMaterial?c(S,_):_.isLineBasicMaterial?(f(S,_),_.isLineDashedMaterial&&d(S,_)):_.isPointsMaterial?m(S,_,L,D):_.isSpriteMaterial?p(S,_):_.isShadowMaterial?(S.color.value.copy(_.color),S.opacity.value=_.opacity):_.isShaderMaterial&&(_.uniformsNeedUpdate=!1)}function c(S,_){S.opacity.value=_.opacity,_.color&&S.diffuse.value.copy(_.color),_.emissive&&S.emissive.value.copy(_.emissive).multiplyScalar(_.emissiveIntensity),_.map&&(S.map.value=_.map,i(_.map,S.mapTransform)),_.alphaMap&&(S.alphaMap.value=_.alphaMap,i(_.alphaMap,S.alphaMapTransform)),_.bumpMap&&(S.bumpMap.value=_.bumpMap,i(_.bumpMap,S.bumpMapTransform),S.bumpScale.value=_.bumpScale,_.side===Gn&&(S.bumpScale.value*=-1)),_.normalMap&&(S.normalMap.value=_.normalMap,i(_.normalMap,S.normalMapTransform),S.normalScale.value.copy(_.normalScale),_.side===Gn&&S.normalScale.value.negate()),_.displacementMap&&(S.displacementMap.value=_.displacementMap,i(_.displacementMap,S.displacementMapTransform),S.displacementScale.value=_.displacementScale,S.displacementBias.value=_.displacementBias),_.emissiveMap&&(S.emissiveMap.value=_.emissiveMap,i(_.emissiveMap,S.emissiveMapTransform)),_.specularMap&&(S.specularMap.value=_.specularMap,i(_.specularMap,S.specularMapTransform)),_.alphaTest>0&&(S.alphaTest.value=_.alphaTest);const L=t.get(_),D=L.envMap,C=L.envMapRotation;D&&(S.envMap.value=D,xr.copy(C),xr.x*=-1,xr.y*=-1,xr.z*=-1,D.isCubeTexture&&D.isRenderTargetTexture===!1&&(xr.y*=-1,xr.z*=-1),S.envMapRotation.value.setFromMatrix4(MR.makeRotationFromEuler(xr)),S.flipEnvMap.value=D.isCubeTexture&&D.isRenderTargetTexture===!1?-1:1,S.reflectivity.value=_.reflectivity,S.ior.value=_.ior,S.refractionRatio.value=_.refractionRatio),_.lightMap&&(S.lightMap.value=_.lightMap,S.lightMapIntensity.value=_.lightMapIntensity,i(_.lightMap,S.lightMapTransform)),_.aoMap&&(S.aoMap.value=_.aoMap,S.aoMapIntensity.value=_.aoMapIntensity,i(_.aoMap,S.aoMapTransform))}function f(S,_){S.diffuse.value.copy(_.color),S.opacity.value=_.opacity,_.map&&(S.map.value=_.map,i(_.map,S.mapTransform))}function d(S,_){S.dashSize.value=_.dashSize,S.totalSize.value=_.dashSize+_.gapSize,S.scale.value=_.scale}function m(S,_,L,D){S.diffuse.value.copy(_.color),S.opacity.value=_.opacity,S.size.value=_.size*L,S.scale.value=D*.5,_.map&&(S.map.value=_.map,i(_.map,S.uvTransform)),_.alphaMap&&(S.alphaMap.value=_.alphaMap,i(_.alphaMap,S.alphaMapTransform)),_.alphaTest>0&&(S.alphaTest.value=_.alphaTest)}function p(S,_){S.diffuse.value.copy(_.color),S.opacity.value=_.opacity,S.rotation.value=_.rotation,_.map&&(S.map.value=_.map,i(_.map,S.mapTransform)),_.alphaMap&&(S.alphaMap.value=_.alphaMap,i(_.alphaMap,S.alphaMapTransform)),_.alphaTest>0&&(S.alphaTest.value=_.alphaTest)}function g(S,_){S.specular.value.copy(_.specular),S.shininess.value=Math.max(_.shininess,1e-4)}function x(S,_){_.gradientMap&&(S.gradientMap.value=_.gradientMap)}function v(S,_){S.metalness.value=_.metalness,_.metalnessMap&&(S.metalnessMap.value=_.metalnessMap,i(_.metalnessMap,S.metalnessMapTransform)),S.roughness.value=_.roughness,_.roughnessMap&&(S.roughnessMap.value=_.roughnessMap,i(_.roughnessMap,S.roughnessMapTransform)),_.envMap&&(S.envMapIntensity.value=_.envMapIntensity)}function y(S,_,L){S.ior.value=_.ior,_.sheen>0&&(S.sheenColor.value.copy(_.sheenColor).multiplyScalar(_.sheen),S.sheenRoughness.value=_.sheenRoughness,_.sheenColorMap&&(S.sheenColorMap.value=_.sheenColorMap,i(_.sheenColorMap,S.sheenColorMapTransform)),_.sheenRoughnessMap&&(S.sheenRoughnessMap.value=_.sheenRoughnessMap,i(_.sheenRoughnessMap,S.sheenRoughnessMapTransform))),_.clearcoat>0&&(S.clearcoat.value=_.clearcoat,S.clearcoatRoughness.value=_.clearcoatRoughness,_.clearcoatMap&&(S.clearcoatMap.value=_.clearcoatMap,i(_.clearcoatMap,S.clearcoatMapTransform)),_.clearcoatRoughnessMap&&(S.clearcoatRoughnessMap.value=_.clearcoatRoughnessMap,i(_.clearcoatRoughnessMap,S.clearcoatRoughnessMapTransform)),_.clearcoatNormalMap&&(S.clearcoatNormalMap.value=_.clearcoatNormalMap,i(_.clearcoatNormalMap,S.clearcoatNormalMapTransform),S.clearcoatNormalScale.value.copy(_.clearcoatNormalScale),_.side===Gn&&S.clearcoatNormalScale.value.negate())),_.dispersion>0&&(S.dispersion.value=_.dispersion),_.iridescence>0&&(S.iridescence.value=_.iridescence,S.iridescenceIOR.value=_.iridescenceIOR,S.iridescenceThicknessMinimum.value=_.iridescenceThicknessRange[0],S.iridescenceThicknessMaximum.value=_.iridescenceThicknessRange[1],_.iridescenceMap&&(S.iridescenceMap.value=_.iridescenceMap,i(_.iridescenceMap,S.iridescenceMapTransform)),_.iridescenceThicknessMap&&(S.iridescenceThicknessMap.value=_.iridescenceThicknessMap,i(_.iridescenceThicknessMap,S.iridescenceThicknessMapTransform))),_.transmission>0&&(S.transmission.value=_.transmission,S.transmissionSamplerMap.value=L.texture,S.transmissionSamplerSize.value.set(L.width,L.height),_.transmissionMap&&(S.transmissionMap.value=_.transmissionMap,i(_.transmissionMap,S.transmissionMapTransform)),S.thickness.value=_.thickness,_.thicknessMap&&(S.thicknessMap.value=_.thicknessMap,i(_.thicknessMap,S.thicknessMapTransform)),S.attenuationDistance.value=_.attenuationDistance,S.attenuationColor.value.copy(_.attenuationColor)),_.anisotropy>0&&(S.anisotropyVector.value.set(_.anisotropy*Math.cos(_.anisotropyRotation),_.anisotropy*Math.sin(_.anisotropyRotation)),_.anisotropyMap&&(S.anisotropyMap.value=_.anisotropyMap,i(_.anisotropyMap,S.anisotropyMapTransform))),S.specularIntensity.value=_.specularIntensity,S.specularColor.value.copy(_.specularColor),_.specularColorMap&&(S.specularColorMap.value=_.specularColorMap,i(_.specularColorMap,S.specularColorMapTransform)),_.specularIntensityMap&&(S.specularIntensityMap.value=_.specularIntensityMap,i(_.specularIntensityMap,S.specularIntensityMapTransform))}function E(S,_){_.matcap&&(S.matcap.value=_.matcap)}function A(S,_){const L=t.get(_).light;S.referencePosition.value.setFromMatrixPosition(L.matrixWorld),S.nearDistance.value=L.shadow.camera.near,S.farDistance.value=L.shadow.camera.far}return{refreshFogUniforms:r,refreshMaterialUniforms:l}}function TR(s,t,i,r){let l={},c={},f=[];const d=s.getParameter(s.MAX_UNIFORM_BUFFER_BINDINGS);function m(L,D){const C=D.program;r.uniformBlockBinding(L,C)}function p(L,D){let C=l[L.id];C===void 0&&(E(L),C=g(L),l[L.id]=C,L.addEventListener("dispose",S));const F=D.program;r.updateUBOMapping(L,F);const H=t.render.frame;c[L.id]!==H&&(v(L),c[L.id]=H)}function g(L){const D=x();L.__bindingPointIndex=D;const C=s.createBuffer(),F=L.__size,H=L.usage;return s.bindBuffer(s.UNIFORM_BUFFER,C),s.bufferData(s.UNIFORM_BUFFER,F,H),s.bindBuffer(s.UNIFORM_BUFFER,null),s.bindBufferBase(s.UNIFORM_BUFFER,D,C),C}function x(){for(let L=0;L<d;L++)if(f.indexOf(L)===-1)return f.push(L),L;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function v(L){const D=l[L.id],C=L.uniforms,F=L.__cache;s.bindBuffer(s.UNIFORM_BUFFER,D);for(let H=0,B=C.length;H<B;H++){const k=Array.isArray(C[H])?C[H]:[C[H]];for(let U=0,R=k.length;U<R;U++){const V=k[U];if(y(V,H,U,F)===!0){const lt=V.__offset,ot=Array.isArray(V.value)?V.value:[V.value];let xt=0;for(let dt=0;dt<ot.length;dt++){const I=ot[dt],K=A(I);typeof I=="number"||typeof I=="boolean"?(V.__data[0]=I,s.bufferSubData(s.UNIFORM_BUFFER,lt+xt,V.__data)):I.isMatrix3?(V.__data[0]=I.elements[0],V.__data[1]=I.elements[1],V.__data[2]=I.elements[2],V.__data[3]=0,V.__data[4]=I.elements[3],V.__data[5]=I.elements[4],V.__data[6]=I.elements[5],V.__data[7]=0,V.__data[8]=I.elements[6],V.__data[9]=I.elements[7],V.__data[10]=I.elements[8],V.__data[11]=0):(I.toArray(V.__data,xt),xt+=K.storage/Float32Array.BYTES_PER_ELEMENT)}s.bufferSubData(s.UNIFORM_BUFFER,lt,V.__data)}}}s.bindBuffer(s.UNIFORM_BUFFER,null)}function y(L,D,C,F){const H=L.value,B=D+"_"+C;if(F[B]===void 0)return typeof H=="number"||typeof H=="boolean"?F[B]=H:F[B]=H.clone(),!0;{const k=F[B];if(typeof H=="number"||typeof H=="boolean"){if(k!==H)return F[B]=H,!0}else if(k.equals(H)===!1)return k.copy(H),!0}return!1}function E(L){const D=L.uniforms;let C=0;const F=16;for(let B=0,k=D.length;B<k;B++){const U=Array.isArray(D[B])?D[B]:[D[B]];for(let R=0,V=U.length;R<V;R++){const lt=U[R],ot=Array.isArray(lt.value)?lt.value:[lt.value];for(let xt=0,dt=ot.length;xt<dt;xt++){const I=ot[xt],K=A(I),Y=C%F,Et=Y%K.boundary,P=Y+Et;C+=Et,P!==0&&F-P<K.storage&&(C+=F-P),lt.__data=new Float32Array(K.storage/Float32Array.BYTES_PER_ELEMENT),lt.__offset=C,C+=K.storage}}}const H=C%F;return H>0&&(C+=F-H),L.__size=C,L.__cache={},this}function A(L){const D={boundary:0,storage:0};return typeof L=="number"||typeof L=="boolean"?(D.boundary=4,D.storage=4):L.isVector2?(D.boundary=8,D.storage=8):L.isVector3||L.isColor?(D.boundary=16,D.storage=12):L.isVector4?(D.boundary=16,D.storage=16):L.isMatrix3?(D.boundary=48,D.storage=48):L.isMatrix4?(D.boundary=64,D.storage=64):L.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",L),D}function S(L){const D=L.target;D.removeEventListener("dispose",S);const C=f.indexOf(D.__bindingPointIndex);f.splice(C,1),s.deleteBuffer(l[D.id]),delete l[D.id],delete c[D.id]}function _(){for(const L in l)s.deleteBuffer(l[L]);f=[],l={},c={}}return{bind:m,update:p,dispose:_}}class bR{constructor(t={}){const{canvas:i=iE(),context:r=null,depth:l=!0,stencil:c=!1,alpha:f=!1,antialias:d=!1,premultipliedAlpha:m=!0,preserveDrawingBuffer:p=!1,powerPreference:g="default",failIfMajorPerformanceCaveat:x=!1,reverseDepthBuffer:v=!1}=t;this.isWebGLRenderer=!0;let y;if(r!==null){if(typeof WebGLRenderingContext<"u"&&r instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");y=r.getContextAttributes().alpha}else y=f;const E=new Uint32Array(4),A=new Int32Array(4);let S=null,_=null;const L=[],D=[];this.domElement=i,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=Wa,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const C=this;let F=!1;this._outputColorSpace=oi;let H=0,B=0,k=null,U=-1,R=null;const V=new Qe,lt=new Qe;let ot=null;const xt=new Re(0);let dt=0,I=i.width,K=i.height,Y=1,Et=null,P=null;const tt=new Qe(0,0,I,K),yt=new Qe(0,0,I,K);let Mt=!1;const J=new Fd;let mt=!1,St=!1;const Rt=new Je,Lt=new Je,oe=new et,Kt=new Qe,He={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let Be=!1;function fe(){return k===null?Y:1}let G=r;function On(w,q){return i.getContext(w,q)}try{const w={alpha:!0,depth:l,stencil:c,antialias:d,premultipliedAlpha:m,preserveDrawingBuffer:p,powerPreference:g,failIfMajorPerformanceCaveat:x};if("setAttribute"in i&&i.setAttribute("data-engine",`three.js r${Cd}`),i.addEventListener("webglcontextlost",_t,!1),i.addEventListener("webglcontextrestored",Bt,!1),i.addEventListener("webglcontextcreationerror",Ot,!1),G===null){const q="webgl2";if(G=On(q,w),G===null)throw On(q)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(w){throw console.error("THREE.WebGLRenderer: "+w.message),w}let ge,ie,Xt,Ue,Vt,O,b,nt,gt,Tt,ft,Pt,wt,Gt,$t,At,Ft,Yt,Qt,zt,ce,ne,Le,X;function Nt(){ge=new P1(G),ge.init(),ne=new _R(G,ge),ie=new w1(G,ge,t,ne),Xt=new mR(G,ge),ie.reverseDepthBuffer&&v&&Xt.buffers.depth.setReversed(!0),Ue=new I1(G),Vt=new nR,O=new gR(G,ge,Xt,Vt,ie,ne,Ue),b=new D1(C),nt=new O1(C),gt=new jE(G),Le=new A1(G,gt),Tt=new z1(G,gt,Ue,Le),ft=new H1(G,Tt,gt,Ue),Qt=new F1(G,ie,O),At=new C1(Vt),Pt=new eR(C,b,nt,ge,ie,Le,At),wt=new ER(C,Vt),Gt=new aR,$t=new uR(ge),Yt=new b1(C,b,nt,Xt,ft,y,m),Ft=new dR(C,ft,ie),X=new TR(G,Ue,ie,Xt),zt=new R1(G,ge,Ue),ce=new B1(G,ge,Ue),Ue.programs=Pt.programs,C.capabilities=ie,C.extensions=ge,C.properties=Vt,C.renderLists=Gt,C.shadowMap=Ft,C.state=Xt,C.info=Ue}Nt();const ct=new SR(C,G);this.xr=ct,this.getContext=function(){return G},this.getContextAttributes=function(){return G.getContextAttributes()},this.forceContextLoss=function(){const w=ge.get("WEBGL_lose_context");w&&w.loseContext()},this.forceContextRestore=function(){const w=ge.get("WEBGL_lose_context");w&&w.restoreContext()},this.getPixelRatio=function(){return Y},this.setPixelRatio=function(w){w!==void 0&&(Y=w,this.setSize(I,K,!1))},this.getSize=function(w){return w.set(I,K)},this.setSize=function(w,q,rt=!0){if(ct.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}I=w,K=q,i.width=Math.floor(w*Y),i.height=Math.floor(q*Y),rt===!0&&(i.style.width=w+"px",i.style.height=q+"px"),this.setViewport(0,0,w,q)},this.getDrawingBufferSize=function(w){return w.set(I*Y,K*Y).floor()},this.setDrawingBufferSize=function(w,q,rt){I=w,K=q,Y=rt,i.width=Math.floor(w*rt),i.height=Math.floor(q*rt),this.setViewport(0,0,w,q)},this.getCurrentViewport=function(w){return w.copy(V)},this.getViewport=function(w){return w.copy(tt)},this.setViewport=function(w,q,rt,st){w.isVector4?tt.set(w.x,w.y,w.z,w.w):tt.set(w,q,rt,st),Xt.viewport(V.copy(tt).multiplyScalar(Y).round())},this.getScissor=function(w){return w.copy(yt)},this.setScissor=function(w,q,rt,st){w.isVector4?yt.set(w.x,w.y,w.z,w.w):yt.set(w,q,rt,st),Xt.scissor(lt.copy(yt).multiplyScalar(Y).round())},this.getScissorTest=function(){return Mt},this.setScissorTest=function(w){Xt.setScissorTest(Mt=w)},this.setOpaqueSort=function(w){Et=w},this.setTransparentSort=function(w){P=w},this.getClearColor=function(w){return w.copy(Yt.getClearColor())},this.setClearColor=function(){Yt.setClearColor(...arguments)},this.getClearAlpha=function(){return Yt.getClearAlpha()},this.setClearAlpha=function(){Yt.setClearAlpha(...arguments)},this.clear=function(w=!0,q=!0,rt=!0){let st=0;if(w){let Z=!1;if(k!==null){const bt=k.texture.format;Z=bt===zd||bt===Pd||bt===Od}if(Z){const bt=k.texture.type,Ct=bt===Ci||bt===Rr||bt===Io||bt===Fo||bt===Ld||bt===Nd,Dt=Yt.getClearColor(),It=Yt.getClearAlpha(),te=Dt.r,Wt=Dt.g,jt=Dt.b;Ct?(E[0]=te,E[1]=Wt,E[2]=jt,E[3]=It,G.clearBufferuiv(G.COLOR,0,E)):(A[0]=te,A[1]=Wt,A[2]=jt,A[3]=It,G.clearBufferiv(G.COLOR,0,A))}else st|=G.COLOR_BUFFER_BIT}q&&(st|=G.DEPTH_BUFFER_BIT),rt&&(st|=G.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),G.clear(st)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){i.removeEventListener("webglcontextlost",_t,!1),i.removeEventListener("webglcontextrestored",Bt,!1),i.removeEventListener("webglcontextcreationerror",Ot,!1),Yt.dispose(),Gt.dispose(),$t.dispose(),Vt.dispose(),b.dispose(),nt.dispose(),ft.dispose(),Le.dispose(),X.dispose(),Pt.dispose(),ct.dispose(),ct.removeEventListener("sessionstart",on),ct.removeEventListener("sessionend",xn),Pn.stop()};function _t(w){w.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),F=!0}function Bt(){console.log("THREE.WebGLRenderer: Context Restored."),F=!1;const w=Ue.autoReset,q=Ft.enabled,rt=Ft.autoUpdate,st=Ft.needsUpdate,Z=Ft.type;Nt(),Ue.autoReset=w,Ft.enabled=q,Ft.autoUpdate=rt,Ft.needsUpdate=st,Ft.type=Z}function Ot(w){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",w.statusMessage)}function ae(w){const q=w.target;q.removeEventListener("dispose",ae),Ge(q)}function Ge(w){en(w),Vt.remove(w)}function en(w){const q=Vt.get(w).programs;q!==void 0&&(q.forEach(function(rt){Pt.releaseProgram(rt)}),w.isShaderMaterial&&Pt.releaseShaderCache(w))}this.renderBufferDirect=function(w,q,rt,st,Z,bt){q===null&&(q=He);const Ct=Z.isMesh&&Z.matrixWorld.determinant()<0,Dt=Qa(w,q,rt,st,Z);Xt.setMaterial(st,Ct);let It=rt.index,te=1;if(st.wireframe===!0){if(It=Tt.getWireframeAttribute(rt),It===void 0)return;te=2}const Wt=rt.drawRange,jt=rt.attributes.position;let de=Wt.start*te,Te=(Wt.start+Wt.count)*te;bt!==null&&(de=Math.max(de,bt.start*te),Te=Math.min(Te,(bt.start+bt.count)*te)),It!==null?(de=Math.max(de,0),Te=Math.min(Te,It.count)):jt!=null&&(de=Math.max(de,0),Te=Math.min(Te,jt.count));const Xe=Te-de;if(Xe<0||Xe===1/0)return;Le.setup(Z,st,Dt,rt,It);let _e,ve=zt;if(It!==null&&(_e=gt.get(It),ve=ce,ve.setIndex(_e)),Z.isMesh)st.wireframe===!0?(Xt.setLineWidth(st.wireframeLinewidth*fe()),ve.setMode(G.LINES)):ve.setMode(G.TRIANGLES);else if(Z.isLine){let qt=st.linewidth;qt===void 0&&(qt=1),Xt.setLineWidth(qt*fe()),Z.isLineSegments?ve.setMode(G.LINES):Z.isLineLoop?ve.setMode(G.LINE_LOOP):ve.setMode(G.LINE_STRIP)}else Z.isPoints?ve.setMode(G.POINTS):Z.isSprite&&ve.setMode(G.TRIANGLES);if(Z.isBatchedMesh)if(Z._multiDrawInstances!==null)zc("THREE.WebGLRenderer: renderMultiDrawInstances has been deprecated and will be removed in r184. Append to renderMultiDraw arguments and use indirection."),ve.renderMultiDrawInstances(Z._multiDrawStarts,Z._multiDrawCounts,Z._multiDrawCount,Z._multiDrawInstances);else if(ge.get("WEBGL_multi_draw"))ve.renderMultiDraw(Z._multiDrawStarts,Z._multiDrawCounts,Z._multiDrawCount);else{const qt=Z._multiDrawStarts,Ye=Z._multiDrawCounts,Se=Z._multiDrawCount,Tn=It?gt.get(It).bytesPerElement:1,pa=Vt.get(st).currentProgram.getUniforms();for(let Ve=0;Ve<Se;Ve++)pa.setValue(G,"_gl_DrawID",Ve),ve.render(qt[Ve]/Tn,Ye[Ve])}else if(Z.isInstancedMesh)ve.renderInstances(de,Xe,Z.count);else if(rt.isInstancedBufferGeometry){const qt=rt._maxInstanceCount!==void 0?rt._maxInstanceCount:1/0,Ye=Math.min(rt.instanceCount,qt);ve.renderInstances(de,Xe,Ye)}else ve.render(de,Xe)};function Ee(w,q,rt){w.transparent===!0&&w.side===aa&&w.forceSinglePass===!1?(w.side=Gn,w.needsUpdate=!0,ha(w,q,rt),w.side=qa,w.needsUpdate=!0,ha(w,q,rt),w.side=aa):ha(w,q,rt)}this.compile=function(w,q,rt=null){rt===null&&(rt=w),_=$t.get(rt),_.init(q),D.push(_),rt.traverseVisible(function(Z){Z.isLight&&Z.layers.test(q.layers)&&(_.pushLight(Z),Z.castShadow&&_.pushShadow(Z))}),w!==rt&&w.traverseVisible(function(Z){Z.isLight&&Z.layers.test(q.layers)&&(_.pushLight(Z),Z.castShadow&&_.pushShadow(Z))}),_.setupLights();const st=new Set;return w.traverse(function(Z){if(!(Z.isMesh||Z.isPoints||Z.isLine||Z.isSprite))return;const bt=Z.material;if(bt)if(Array.isArray(bt))for(let Ct=0;Ct<bt.length;Ct++){const Dt=bt[Ct];Ee(Dt,rt,Z),st.add(Dt)}else Ee(bt,rt,Z),st.add(bt)}),_=D.pop(),st},this.compileAsync=function(w,q,rt=null){const st=this.compile(w,q,rt);return new Promise(Z=>{function bt(){if(st.forEach(function(Ct){Vt.get(Ct).currentProgram.isReady()&&st.delete(Ct)}),st.size===0){Z(w);return}setTimeout(bt,10)}ge.get("KHR_parallel_shader_compile")!==null?bt():setTimeout(bt,10)})};let kn=null;function dn(w){kn&&kn(w)}function on(){Pn.stop()}function xn(){Pn.start()}const Pn=new v0;Pn.setAnimationLoop(dn),typeof self<"u"&&Pn.setContext(self),this.setAnimationLoop=function(w){kn=w,ct.setAnimationLoop(w),w===null?Pn.stop():Pn.start()},ct.addEventListener("sessionstart",on),ct.addEventListener("sessionend",xn),this.render=function(w,q){if(q!==void 0&&q.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(F===!0)return;if(w.matrixWorldAutoUpdate===!0&&w.updateMatrixWorld(),q.parent===null&&q.matrixWorldAutoUpdate===!0&&q.updateMatrixWorld(),ct.enabled===!0&&ct.isPresenting===!0&&(ct.cameraAutoUpdate===!0&&ct.updateCamera(q),q=ct.getCamera()),w.isScene===!0&&w.onBeforeRender(C,w,q,k),_=$t.get(w,D.length),_.init(q),D.push(_),Lt.multiplyMatrices(q.projectionMatrix,q.matrixWorldInverse),J.setFromProjectionMatrix(Lt),St=this.localClippingEnabled,mt=At.init(this.clippingPlanes,St),S=Gt.get(w,L.length),S.init(),L.push(S),ct.enabled===!0&&ct.isPresenting===!0){const bt=C.xr.getDepthSensingMesh();bt!==null&&Za(bt,q,-1/0,C.sortObjects)}Za(w,q,0,C.sortObjects),S.finish(),C.sortObjects===!0&&S.sort(Et,P),Be=ct.enabled===!1||ct.isPresenting===!1||ct.hasDepthSensing()===!1,Be&&Yt.addToRenderList(S,w),this.info.render.frame++,mt===!0&&At.beginShadows();const rt=_.state.shadowsArray;Ft.render(rt,w,q),mt===!0&&At.endShadows(),this.info.autoReset===!0&&this.info.reset();const st=S.opaque,Z=S.transmissive;if(_.setupLights(),q.isArrayCamera){const bt=q.cameras;if(Z.length>0)for(let Ct=0,Dt=bt.length;Ct<Dt;Ct++){const It=bt[Ct];Qo(st,Z,w,It)}Be&&Yt.render(w);for(let Ct=0,Dt=bt.length;Ct<Dt;Ct++){const It=bt[Ct];Ko(S,w,It,It.viewport)}}else Z.length>0&&Qo(st,Z,w,q),Be&&Yt.render(w),Ko(S,w,q);k!==null&&B===0&&(O.updateMultisampleRenderTarget(k),O.updateRenderTargetMipmap(k)),w.isScene===!0&&w.onAfterRender(C,w,q),Le.resetDefaultState(),U=-1,R=null,D.pop(),D.length>0?(_=D[D.length-1],mt===!0&&At.setGlobalState(C.clippingPlanes,_.state.camera)):_=null,L.pop(),L.length>0?S=L[L.length-1]:S=null};function Za(w,q,rt,st){if(w.visible===!1)return;if(w.layers.test(q.layers)){if(w.isGroup)rt=w.renderOrder;else if(w.isLOD)w.autoUpdate===!0&&w.update(q);else if(w.isLight)_.pushLight(w),w.castShadow&&_.pushShadow(w);else if(w.isSprite){if(!w.frustumCulled||J.intersectsSprite(w)){st&&Kt.setFromMatrixPosition(w.matrixWorld).applyMatrix4(Lt);const Ct=ft.update(w),Dt=w.material;Dt.visible&&S.push(w,Ct,Dt,rt,Kt.z,null)}}else if((w.isMesh||w.isLine||w.isPoints)&&(!w.frustumCulled||J.intersectsObject(w))){const Ct=ft.update(w),Dt=w.material;if(st&&(w.boundingSphere!==void 0?(w.boundingSphere===null&&w.computeBoundingSphere(),Kt.copy(w.boundingSphere.center)):(Ct.boundingSphere===null&&Ct.computeBoundingSphere(),Kt.copy(Ct.boundingSphere.center)),Kt.applyMatrix4(w.matrixWorld).applyMatrix4(Lt)),Array.isArray(Dt)){const It=Ct.groups;for(let te=0,Wt=It.length;te<Wt;te++){const jt=It[te],de=Dt[jt.materialIndex];de&&de.visible&&S.push(w,Ct,de,rt,Kt.z,jt)}}else Dt.visible&&S.push(w,Ct,Dt,rt,Kt.z,null)}}const bt=w.children;for(let Ct=0,Dt=bt.length;Ct<Dt;Ct++)Za(bt[Ct],q,rt,st)}function Ko(w,q,rt,st){const Z=w.opaque,bt=w.transmissive,Ct=w.transparent;_.setupLightsView(rt),mt===!0&&At.setGlobalState(C.clippingPlanes,rt),st&&Xt.viewport(V.copy(st)),Z.length>0&&Ka(Z,q,rt),bt.length>0&&Ka(bt,q,rt),Ct.length>0&&Ka(Ct,q,rt),Xt.buffers.depth.setTest(!0),Xt.buffers.depth.setMask(!0),Xt.buffers.color.setMask(!0),Xt.setPolygonOffset(!1)}function Qo(w,q,rt,st){if((rt.isScene===!0?rt.overrideMaterial:null)!==null)return;_.state.transmissionRenderTarget[st.id]===void 0&&(_.state.transmissionRenderTarget[st.id]=new wr(1,1,{generateMipmaps:!0,type:ge.has("EXT_color_buffer_half_float")||ge.has("EXT_color_buffer_float")?Xo:Ci,minFilter:Ar,samples:4,stencilBuffer:c,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:Ae.workingColorSpace}));const bt=_.state.transmissionRenderTarget[st.id],Ct=st.viewport||V;bt.setSize(Ct.z*C.transmissionResolutionScale,Ct.w*C.transmissionResolutionScale);const Dt=C.getRenderTarget();C.setRenderTarget(bt),C.getClearColor(xt),dt=C.getClearAlpha(),dt<1&&C.setClearColor(16777215,.5),C.clear(),Be&&Yt.render(rt);const It=C.toneMapping;C.toneMapping=Wa;const te=st.viewport;if(st.viewport!==void 0&&(st.viewport=void 0),_.setupLightsView(st),mt===!0&&At.setGlobalState(C.clippingPlanes,st),Ka(w,rt,st),O.updateMultisampleRenderTarget(bt),O.updateRenderTargetMipmap(bt),ge.has("WEBGL_multisampled_render_to_texture")===!1){let Wt=!1;for(let jt=0,de=q.length;jt<de;jt++){const Te=q[jt],Xe=Te.object,_e=Te.geometry,ve=Te.material,qt=Te.group;if(ve.side===aa&&Xe.layers.test(st.layers)){const Ye=ve.side;ve.side=Gn,ve.needsUpdate=!0,fa(Xe,rt,st,_e,ve,qt),ve.side=Ye,ve.needsUpdate=!0,Wt=!0}}Wt===!0&&(O.updateMultisampleRenderTarget(bt),O.updateRenderTargetMipmap(bt))}C.setRenderTarget(Dt),C.setClearColor(xt,dt),te!==void 0&&(st.viewport=te),C.toneMapping=It}function Ka(w,q,rt){const st=q.isScene===!0?q.overrideMaterial:null;for(let Z=0,bt=w.length;Z<bt;Z++){const Ct=w[Z],Dt=Ct.object,It=Ct.geometry,te=Ct.group;let Wt=Ct.material;Wt.allowOverride===!0&&st!==null&&(Wt=st),Dt.layers.test(rt.layers)&&fa(Dt,q,rt,It,Wt,te)}}function fa(w,q,rt,st,Z,bt){w.onBeforeRender(C,q,rt,st,Z,bt),w.modelViewMatrix.multiplyMatrices(rt.matrixWorldInverse,w.matrixWorld),w.normalMatrix.getNormalMatrix(w.modelViewMatrix),Z.onBeforeRender(C,q,rt,st,w,bt),Z.transparent===!0&&Z.side===aa&&Z.forceSinglePass===!1?(Z.side=Gn,Z.needsUpdate=!0,C.renderBufferDirect(rt,q,st,Z,w,bt),Z.side=qa,Z.needsUpdate=!0,C.renderBufferDirect(rt,q,st,Z,w,bt),Z.side=aa):C.renderBufferDirect(rt,q,st,Z,w,bt),w.onAfterRender(C,q,rt,st,Z,bt)}function ha(w,q,rt){q.isScene!==!0&&(q=He);const st=Vt.get(w),Z=_.state.lights,bt=_.state.shadowsArray,Ct=Z.state.version,Dt=Pt.getParameters(w,Z.state,bt,q,rt),It=Pt.getProgramCacheKey(Dt);let te=st.programs;st.environment=w.isMeshStandardMaterial?q.environment:null,st.fog=q.fog,st.envMap=(w.isMeshStandardMaterial?nt:b).get(w.envMap||st.environment),st.envMapRotation=st.environment!==null&&w.envMap===null?q.environmentRotation:w.envMapRotation,te===void 0&&(w.addEventListener("dispose",ae),te=new Map,st.programs=te);let Wt=te.get(It);if(Wt!==void 0){if(st.currentProgram===Wt&&st.lightsStateVersion===Ct)return Oi(w,Dt),Wt}else Dt.uniforms=Pt.getUniforms(w),w.onBeforeCompile(Dt,C),Wt=Pt.acquireProgram(Dt,It),te.set(It,Wt),st.uniforms=Dt.uniforms;const jt=st.uniforms;return(!w.isShaderMaterial&&!w.isRawShaderMaterial||w.clipping===!0)&&(jt.clippingPlanes=At.uniform),Oi(w,Dt),st.needsLights=nn(w),st.lightsStateVersion=Ct,st.needsLights&&(jt.ambientLightColor.value=Z.state.ambient,jt.lightProbe.value=Z.state.probe,jt.directionalLights.value=Z.state.directional,jt.directionalLightShadows.value=Z.state.directionalShadow,jt.spotLights.value=Z.state.spot,jt.spotLightShadows.value=Z.state.spotShadow,jt.rectAreaLights.value=Z.state.rectArea,jt.ltc_1.value=Z.state.rectAreaLTC1,jt.ltc_2.value=Z.state.rectAreaLTC2,jt.pointLights.value=Z.state.point,jt.pointLightShadows.value=Z.state.pointShadow,jt.hemisphereLights.value=Z.state.hemi,jt.directionalShadowMap.value=Z.state.directionalShadowMap,jt.directionalShadowMatrix.value=Z.state.directionalShadowMatrix,jt.spotShadowMap.value=Z.state.spotShadowMap,jt.spotLightMatrix.value=Z.state.spotLightMatrix,jt.spotLightMap.value=Z.state.spotLightMap,jt.pointShadowMap.value=Z.state.pointShadowMap,jt.pointShadowMatrix.value=Z.state.pointShadowMatrix),st.currentProgram=Wt,st.uniformsList=null,Wt}function Ni(w){if(w.uniformsList===null){const q=w.currentProgram.getUniforms();w.uniformsList=Bc.seqWithValue(q.seq,w.uniforms)}return w.uniformsList}function Oi(w,q){const rt=Vt.get(w);rt.outputColorSpace=q.outputColorSpace,rt.batching=q.batching,rt.batchingColor=q.batchingColor,rt.instancing=q.instancing,rt.instancingColor=q.instancingColor,rt.instancingMorph=q.instancingMorph,rt.skinning=q.skinning,rt.morphTargets=q.morphTargets,rt.morphNormals=q.morphNormals,rt.morphColors=q.morphColors,rt.morphTargetsCount=q.morphTargetsCount,rt.numClippingPlanes=q.numClippingPlanes,rt.numIntersection=q.numClipIntersection,rt.vertexAlphas=q.vertexAlphas,rt.vertexTangents=q.vertexTangents,rt.toneMapping=q.toneMapping}function Qa(w,q,rt,st,Z){q.isScene!==!0&&(q=He),O.resetTextureUnits();const bt=q.fog,Ct=st.isMeshStandardMaterial?q.environment:null,Dt=k===null?C.outputColorSpace:k.isXRRenderTarget===!0?k.texture.colorSpace:Rs,It=(st.isMeshStandardMaterial?nt:b).get(st.envMap||Ct),te=st.vertexColors===!0&&!!rt.attributes.color&&rt.attributes.color.itemSize===4,Wt=!!rt.attributes.tangent&&(!!st.normalMap||st.anisotropy>0),jt=!!rt.morphAttributes.position,de=!!rt.morphAttributes.normal,Te=!!rt.morphAttributes.color;let Xe=Wa;st.toneMapped&&(k===null||k.isXRRenderTarget===!0)&&(Xe=C.toneMapping);const _e=rt.morphAttributes.position||rt.morphAttributes.normal||rt.morphAttributes.color,ve=_e!==void 0?_e.length:0,qt=Vt.get(st),Ye=_.state.lights;if(mt===!0&&(St===!0||w!==R)){const pn=w===R&&st.id===U;At.setState(st,w,pn)}let Se=!1;st.version===qt.__version?(qt.needsLights&&qt.lightsStateVersion!==Ye.state.version||qt.outputColorSpace!==Dt||Z.isBatchedMesh&&qt.batching===!1||!Z.isBatchedMesh&&qt.batching===!0||Z.isBatchedMesh&&qt.batchingColor===!0&&Z.colorTexture===null||Z.isBatchedMesh&&qt.batchingColor===!1&&Z.colorTexture!==null||Z.isInstancedMesh&&qt.instancing===!1||!Z.isInstancedMesh&&qt.instancing===!0||Z.isSkinnedMesh&&qt.skinning===!1||!Z.isSkinnedMesh&&qt.skinning===!0||Z.isInstancedMesh&&qt.instancingColor===!0&&Z.instanceColor===null||Z.isInstancedMesh&&qt.instancingColor===!1&&Z.instanceColor!==null||Z.isInstancedMesh&&qt.instancingMorph===!0&&Z.morphTexture===null||Z.isInstancedMesh&&qt.instancingMorph===!1&&Z.morphTexture!==null||qt.envMap!==It||st.fog===!0&&qt.fog!==bt||qt.numClippingPlanes!==void 0&&(qt.numClippingPlanes!==At.numPlanes||qt.numIntersection!==At.numIntersection)||qt.vertexAlphas!==te||qt.vertexTangents!==Wt||qt.morphTargets!==jt||qt.morphNormals!==de||qt.morphColors!==Te||qt.toneMapping!==Xe||qt.morphTargetsCount!==ve)&&(Se=!0):(Se=!0,qt.__version=st.version);let Tn=qt.currentProgram;Se===!0&&(Tn=ha(st,q,Z));let pa=!1,Ve=!1,zi=!1;const Ie=Tn.getUniforms(),bn=qt.uniforms;if(Xt.useProgram(Tn.program)&&(pa=!0,Ve=!0,zi=!0),st.id!==U&&(U=st.id,Ve=!0),pa||R!==w){Xt.buffers.depth.getReversed()?(Rt.copy(w.projectionMatrix),rE(Rt),sE(Rt),Ie.setValue(G,"projectionMatrix",Rt)):Ie.setValue(G,"projectionMatrix",w.projectionMatrix),Ie.setValue(G,"viewMatrix",w.matrixWorldInverse);const yn=Ie.map.cameraPosition;yn!==void 0&&yn.setValue(G,oe.setFromMatrixPosition(w.matrixWorld)),ie.logarithmicDepthBuffer&&Ie.setValue(G,"logDepthBufFC",2/(Math.log(w.far+1)/Math.LN2)),(st.isMeshPhongMaterial||st.isMeshToonMaterial||st.isMeshLambertMaterial||st.isMeshBasicMaterial||st.isMeshStandardMaterial||st.isShaderMaterial)&&Ie.setValue(G,"isOrthographic",w.isOrthographicCamera===!0),R!==w&&(R=w,Ve=!0,zi=!0)}if(Z.isSkinnedMesh){Ie.setOptional(G,Z,"bindMatrix"),Ie.setOptional(G,Z,"bindMatrixInverse");const pn=Z.skeleton;pn&&(pn.boneTexture===null&&pn.computeBoneTexture(),Ie.setValue(G,"boneTexture",pn.boneTexture,O))}Z.isBatchedMesh&&(Ie.setOptional(G,Z,"batchingTexture"),Ie.setValue(G,"batchingTexture",Z._matricesTexture,O),Ie.setOptional(G,Z,"batchingIdTexture"),Ie.setValue(G,"batchingIdTexture",Z._indirectTexture,O),Ie.setOptional(G,Z,"batchingColorTexture"),Z._colorsTexture!==null&&Ie.setValue(G,"batchingColorTexture",Z._colorsTexture,O));const ln=rt.morphAttributes;if((ln.position!==void 0||ln.normal!==void 0||ln.color!==void 0)&&Qt.update(Z,rt,Tn),(Ve||qt.receiveShadow!==Z.receiveShadow)&&(qt.receiveShadow=Z.receiveShadow,Ie.setValue(G,"receiveShadow",Z.receiveShadow)),st.isMeshGouraudMaterial&&st.envMap!==null&&(bn.envMap.value=It,bn.flipEnvMap.value=It.isCubeTexture&&It.isRenderTargetTexture===!1?-1:1),st.isMeshStandardMaterial&&st.envMap===null&&q.environment!==null&&(bn.envMapIntensity.value=q.environmentIntensity),Ve&&(Ie.setValue(G,"toneMappingExposure",C.toneMappingExposure),qt.needsLights&&da(bn,zi),bt&&st.fog===!0&&wt.refreshFogUniforms(bn,bt),wt.refreshMaterialUniforms(bn,st,Y,K,_.state.transmissionRenderTarget[w.id]),Bc.upload(G,Ni(qt),bn,O)),st.isShaderMaterial&&st.uniformsNeedUpdate===!0&&(Bc.upload(G,Ni(qt),bn,O),st.uniformsNeedUpdate=!1),st.isSpriteMaterial&&Ie.setValue(G,"center",Z.center),Ie.setValue(G,"modelViewMatrix",Z.modelViewMatrix),Ie.setValue(G,"normalMatrix",Z.normalMatrix),Ie.setValue(G,"modelMatrix",Z.matrixWorld),st.isShaderMaterial||st.isRawShaderMaterial){const pn=st.uniformsGroups;for(let yn=0,vi=pn.length;yn<vi;yn++){const Bi=pn[yn];X.update(Bi,Tn),X.bind(Bi,Tn)}}return Tn}function da(w,q){w.ambientLightColor.needsUpdate=q,w.lightProbe.needsUpdate=q,w.directionalLights.needsUpdate=q,w.directionalLightShadows.needsUpdate=q,w.pointLights.needsUpdate=q,w.pointLightShadows.needsUpdate=q,w.spotLights.needsUpdate=q,w.spotLightShadows.needsUpdate=q,w.rectAreaLights.needsUpdate=q,w.hemisphereLights.needsUpdate=q}function nn(w){return w.isMeshLambertMaterial||w.isMeshToonMaterial||w.isMeshPhongMaterial||w.isMeshStandardMaterial||w.isShadowMaterial||w.isShaderMaterial&&w.lights===!0}this.getActiveCubeFace=function(){return H},this.getActiveMipmapLevel=function(){return B},this.getRenderTarget=function(){return k},this.setRenderTargetTextures=function(w,q,rt){const st=Vt.get(w);st.__autoAllocateDepthBuffer=w.resolveDepthBuffer===!1,st.__autoAllocateDepthBuffer===!1&&(st.__useRenderToTexture=!1),Vt.get(w.texture).__webglTexture=q,Vt.get(w.depthTexture).__webglTexture=st.__autoAllocateDepthBuffer?void 0:rt,st.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(w,q){const rt=Vt.get(w);rt.__webglFramebuffer=q,rt.__useDefaultFramebuffer=q===void 0};const Jo=G.createFramebuffer();this.setRenderTarget=function(w,q=0,rt=0){k=w,H=q,B=rt;let st=!0,Z=null,bt=!1,Ct=!1;if(w){const It=Vt.get(w);if(It.__useDefaultFramebuffer!==void 0)Xt.bindFramebuffer(G.FRAMEBUFFER,null),st=!1;else if(It.__webglFramebuffer===void 0)O.setupRenderTarget(w);else if(It.__hasExternalTextures)O.rebindTextures(w,Vt.get(w.texture).__webglTexture,Vt.get(w.depthTexture).__webglTexture);else if(w.depthBuffer){const jt=w.depthTexture;if(It.__boundDepthTexture!==jt){if(jt!==null&&Vt.has(jt)&&(w.width!==jt.image.width||w.height!==jt.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");O.setupDepthRenderbuffer(w)}}const te=w.texture;(te.isData3DTexture||te.isDataArrayTexture||te.isCompressedArrayTexture)&&(Ct=!0);const Wt=Vt.get(w).__webglFramebuffer;w.isWebGLCubeRenderTarget?(Array.isArray(Wt[q])?Z=Wt[q][rt]:Z=Wt[q],bt=!0):w.samples>0&&O.useMultisampledRTT(w)===!1?Z=Vt.get(w).__webglMultisampledFramebuffer:Array.isArray(Wt)?Z=Wt[rt]:Z=Wt,V.copy(w.viewport),lt.copy(w.scissor),ot=w.scissorTest}else V.copy(tt).multiplyScalar(Y).floor(),lt.copy(yt).multiplyScalar(Y).floor(),ot=Mt;if(rt!==0&&(Z=Jo),Xt.bindFramebuffer(G.FRAMEBUFFER,Z)&&st&&Xt.drawBuffers(w,Z),Xt.viewport(V),Xt.scissor(lt),Xt.setScissorTest(ot),bt){const It=Vt.get(w.texture);G.framebufferTexture2D(G.FRAMEBUFFER,G.COLOR_ATTACHMENT0,G.TEXTURE_CUBE_MAP_POSITIVE_X+q,It.__webglTexture,rt)}else if(Ct){const It=Vt.get(w.texture),te=q;G.framebufferTextureLayer(G.FRAMEBUFFER,G.COLOR_ATTACHMENT0,It.__webglTexture,rt,te)}else if(w!==null&&rt!==0){const It=Vt.get(w.texture);G.framebufferTexture2D(G.FRAMEBUFFER,G.COLOR_ATTACHMENT0,G.TEXTURE_2D,It.__webglTexture,rt)}U=-1},this.readRenderTargetPixels=function(w,q,rt,st,Z,bt,Ct){if(!(w&&w.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Dt=Vt.get(w).__webglFramebuffer;if(w.isWebGLCubeRenderTarget&&Ct!==void 0&&(Dt=Dt[Ct]),Dt){Xt.bindFramebuffer(G.FRAMEBUFFER,Dt);try{const It=w.texture,te=It.format,Wt=It.type;if(!ie.textureFormatReadable(te)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!ie.textureTypeReadable(Wt)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}q>=0&&q<=w.width-st&&rt>=0&&rt<=w.height-Z&&G.readPixels(q,rt,st,Z,ne.convert(te),ne.convert(Wt),bt)}finally{const It=k!==null?Vt.get(k).__webglFramebuffer:null;Xt.bindFramebuffer(G.FRAMEBUFFER,It)}}},this.readRenderTargetPixelsAsync=async function(w,q,rt,st,Z,bt,Ct){if(!(w&&w.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Dt=Vt.get(w).__webglFramebuffer;if(w.isWebGLCubeRenderTarget&&Ct!==void 0&&(Dt=Dt[Ct]),Dt)if(q>=0&&q<=w.width-st&&rt>=0&&rt<=w.height-Z){Xt.bindFramebuffer(G.FRAMEBUFFER,Dt);const It=w.texture,te=It.format,Wt=It.type;if(!ie.textureFormatReadable(te))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!ie.textureTypeReadable(Wt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const jt=G.createBuffer();G.bindBuffer(G.PIXEL_PACK_BUFFER,jt),G.bufferData(G.PIXEL_PACK_BUFFER,bt.byteLength,G.STREAM_READ),G.readPixels(q,rt,st,Z,ne.convert(te),ne.convert(Wt),0);const de=k!==null?Vt.get(k).__webglFramebuffer:null;Xt.bindFramebuffer(G.FRAMEBUFFER,de);const Te=G.fenceSync(G.SYNC_GPU_COMMANDS_COMPLETE,0);return G.flush(),await aE(G,Te,4),G.bindBuffer(G.PIXEL_PACK_BUFFER,jt),G.getBufferSubData(G.PIXEL_PACK_BUFFER,0,bt),G.deleteBuffer(jt),G.deleteSync(Te),bt}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(w,q=null,rt=0){const st=Math.pow(2,-rt),Z=Math.floor(w.image.width*st),bt=Math.floor(w.image.height*st),Ct=q!==null?q.x:0,Dt=q!==null?q.y:0;O.setTexture2D(w,0),G.copyTexSubImage2D(G.TEXTURE_2D,rt,0,0,Ct,Dt,Z,bt),Xt.unbindTexture()};const $o=G.createFramebuffer(),Pi=G.createFramebuffer();this.copyTextureToTexture=function(w,q,rt=null,st=null,Z=0,bt=null){bt===null&&(Z!==0?(zc("WebGLRenderer: copyTextureToTexture function signature has changed to support src and dst mipmap levels."),bt=Z,Z=0):bt=0);let Ct,Dt,It,te,Wt,jt,de,Te,Xe;const _e=w.isCompressedTexture?w.mipmaps[bt]:w.image;if(rt!==null)Ct=rt.max.x-rt.min.x,Dt=rt.max.y-rt.min.y,It=rt.isBox3?rt.max.z-rt.min.z:1,te=rt.min.x,Wt=rt.min.y,jt=rt.isBox3?rt.min.z:0;else{const ln=Math.pow(2,-Z);Ct=Math.floor(_e.width*ln),Dt=Math.floor(_e.height*ln),w.isDataArrayTexture?It=_e.depth:w.isData3DTexture?It=Math.floor(_e.depth*ln):It=1,te=0,Wt=0,jt=0}st!==null?(de=st.x,Te=st.y,Xe=st.z):(de=0,Te=0,Xe=0);const ve=ne.convert(q.format),qt=ne.convert(q.type);let Ye;q.isData3DTexture?(O.setTexture3D(q,0),Ye=G.TEXTURE_3D):q.isDataArrayTexture||q.isCompressedArrayTexture?(O.setTexture2DArray(q,0),Ye=G.TEXTURE_2D_ARRAY):(O.setTexture2D(q,0),Ye=G.TEXTURE_2D),G.pixelStorei(G.UNPACK_FLIP_Y_WEBGL,q.flipY),G.pixelStorei(G.UNPACK_PREMULTIPLY_ALPHA_WEBGL,q.premultiplyAlpha),G.pixelStorei(G.UNPACK_ALIGNMENT,q.unpackAlignment);const Se=G.getParameter(G.UNPACK_ROW_LENGTH),Tn=G.getParameter(G.UNPACK_IMAGE_HEIGHT),pa=G.getParameter(G.UNPACK_SKIP_PIXELS),Ve=G.getParameter(G.UNPACK_SKIP_ROWS),zi=G.getParameter(G.UNPACK_SKIP_IMAGES);G.pixelStorei(G.UNPACK_ROW_LENGTH,_e.width),G.pixelStorei(G.UNPACK_IMAGE_HEIGHT,_e.height),G.pixelStorei(G.UNPACK_SKIP_PIXELS,te),G.pixelStorei(G.UNPACK_SKIP_ROWS,Wt),G.pixelStorei(G.UNPACK_SKIP_IMAGES,jt);const Ie=w.isDataArrayTexture||w.isData3DTexture,bn=q.isDataArrayTexture||q.isData3DTexture;if(w.isDepthTexture){const ln=Vt.get(w),pn=Vt.get(q),yn=Vt.get(ln.__renderTarget),vi=Vt.get(pn.__renderTarget);Xt.bindFramebuffer(G.READ_FRAMEBUFFER,yn.__webglFramebuffer),Xt.bindFramebuffer(G.DRAW_FRAMEBUFFER,vi.__webglFramebuffer);for(let Bi=0;Bi<It;Bi++)Ie&&(G.framebufferTextureLayer(G.READ_FRAMEBUFFER,G.COLOR_ATTACHMENT0,Vt.get(w).__webglTexture,Z,jt+Bi),G.framebufferTextureLayer(G.DRAW_FRAMEBUFFER,G.COLOR_ATTACHMENT0,Vt.get(q).__webglTexture,bt,Xe+Bi)),G.blitFramebuffer(te,Wt,Ct,Dt,de,Te,Ct,Dt,G.DEPTH_BUFFER_BIT,G.NEAREST);Xt.bindFramebuffer(G.READ_FRAMEBUFFER,null),Xt.bindFramebuffer(G.DRAW_FRAMEBUFFER,null)}else if(Z!==0||w.isRenderTargetTexture||Vt.has(w)){const ln=Vt.get(w),pn=Vt.get(q);Xt.bindFramebuffer(G.READ_FRAMEBUFFER,$o),Xt.bindFramebuffer(G.DRAW_FRAMEBUFFER,Pi);for(let yn=0;yn<It;yn++)Ie?G.framebufferTextureLayer(G.READ_FRAMEBUFFER,G.COLOR_ATTACHMENT0,ln.__webglTexture,Z,jt+yn):G.framebufferTexture2D(G.READ_FRAMEBUFFER,G.COLOR_ATTACHMENT0,G.TEXTURE_2D,ln.__webglTexture,Z),bn?G.framebufferTextureLayer(G.DRAW_FRAMEBUFFER,G.COLOR_ATTACHMENT0,pn.__webglTexture,bt,Xe+yn):G.framebufferTexture2D(G.DRAW_FRAMEBUFFER,G.COLOR_ATTACHMENT0,G.TEXTURE_2D,pn.__webglTexture,bt),Z!==0?G.blitFramebuffer(te,Wt,Ct,Dt,de,Te,Ct,Dt,G.COLOR_BUFFER_BIT,G.NEAREST):bn?G.copyTexSubImage3D(Ye,bt,de,Te,Xe+yn,te,Wt,Ct,Dt):G.copyTexSubImage2D(Ye,bt,de,Te,te,Wt,Ct,Dt);Xt.bindFramebuffer(G.READ_FRAMEBUFFER,null),Xt.bindFramebuffer(G.DRAW_FRAMEBUFFER,null)}else bn?w.isDataTexture||w.isData3DTexture?G.texSubImage3D(Ye,bt,de,Te,Xe,Ct,Dt,It,ve,qt,_e.data):q.isCompressedArrayTexture?G.compressedTexSubImage3D(Ye,bt,de,Te,Xe,Ct,Dt,It,ve,_e.data):G.texSubImage3D(Ye,bt,de,Te,Xe,Ct,Dt,It,ve,qt,_e):w.isDataTexture?G.texSubImage2D(G.TEXTURE_2D,bt,de,Te,Ct,Dt,ve,qt,_e.data):w.isCompressedTexture?G.compressedTexSubImage2D(G.TEXTURE_2D,bt,de,Te,_e.width,_e.height,ve,_e.data):G.texSubImage2D(G.TEXTURE_2D,bt,de,Te,Ct,Dt,ve,qt,_e);G.pixelStorei(G.UNPACK_ROW_LENGTH,Se),G.pixelStorei(G.UNPACK_IMAGE_HEIGHT,Tn),G.pixelStorei(G.UNPACK_SKIP_PIXELS,pa),G.pixelStorei(G.UNPACK_SKIP_ROWS,Ve),G.pixelStorei(G.UNPACK_SKIP_IMAGES,zi),bt===0&&q.generateMipmaps&&G.generateMipmap(Ye),Xt.unbindTexture()},this.copyTextureToTexture3D=function(w,q,rt=null,st=null,Z=0){return zc('WebGLRenderer: copyTextureToTexture3D function has been deprecated. Use "copyTextureToTexture" instead.'),this.copyTextureToTexture(w,q,rt,st,Z)},this.initRenderTarget=function(w){Vt.get(w).__webglFramebuffer===void 0&&O.setupRenderTarget(w)},this.initTexture=function(w){w.isCubeTexture?O.setTextureCube(w,0):w.isData3DTexture?O.setTexture3D(w,0):w.isDataArrayTexture||w.isCompressedArrayTexture?O.setTexture2DArray(w,0):O.setTexture2D(w,0),Xt.unbindTexture()},this.resetState=function(){H=0,B=0,k=null,Xt.reset(),Le.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return sa}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;const i=this.getContext();i.drawingBufferColorSpace=Ae._getDrawingBufferColorSpace(t),i.unpackColorSpace=Ae._getUnpackColorSpace()}}function AR(){const s=pt.useRef(null);return pt.useEffect(()=>{const t=new LE,i=new li(75,window.innerWidth/window.innerHeight,.1,1e3),r=new bR({antialias:!0,alpha:!0}),l=s.current;r.setSize(l.clientWidth,l.clientHeight),r.setClearColor(0,0),l.appendChild(r.domElement);const c=new GE(16777215,.5);t.add(c);const f=new HE(16777215,1);f.position.set(5,5,5),t.add(f);const d=[],m=[4359668,3450963,16497669,15352629,8598763];for(let v=0;v<15;v++){let y;switch(Math.floor(Math.random()*3)){case 0:y=new Ls(1,1,1);break;case 1:y=new Gd(.6,24,24);break;case 2:y=new kd(.5,.2,16,32);break;default:y=new Vd(.8)}const A=m[Math.floor(Math.random()*m.length)],S=new PE({color:A,shininess:100,transparent:!0,opacity:.8}),_=new Ai(y,S);_.position.x=(Math.random()-.5)*15,_.position.y=(Math.random()-.5)*15,_.position.z=(Math.random()-.5)*10-5,_.rotation.x=Math.random()*Math.PI,_.rotation.y=Math.random()*Math.PI,_.userData={rotationSpeed:{x:(Math.random()-.5)*.02,y:(Math.random()-.5)*.02,z:(Math.random()-.5)*.02},movementSpeed:{x:(Math.random()-.5)*.01,y:(Math.random()-.5)*.01}},t.add(_),d.push(_)}i.position.z=15;const p=()=>{const v=l.clientWidth,y=l.clientHeight;r.setSize(v,y),i.aspect=v/y,i.updateProjectionMatrix()};window.addEventListener("resize",p),p();let g;const x=()=>{g=requestAnimationFrame(x),d.forEach(y=>{y.rotation.x+=y.userData.rotationSpeed.x,y.rotation.y+=y.userData.rotationSpeed.y,y.rotation.z+=y.userData.rotationSpeed.z,y.position.x+=y.userData.movementSpeed.x,y.position.y+=y.userData.movementSpeed.y,Math.abs(y.position.x)>10&&(y.userData.movementSpeed.x*=-1),Math.abs(y.position.y)>10&&(y.userData.movementSpeed.y*=-1)});const v=Date.now()*5e-4;i.position.x=Math.sin(v)*3,i.position.y=Math.cos(v)*2,i.lookAt(t.position),r.render(t,i)};return x(),()=>{cancelAnimationFrame(g),window.removeEventListener("resize",p),l.removeChild(r.domElement),d.forEach(v=>{v.geometry.dispose(),v.material.dispose()})}},[]),N.jsx("div",{ref:s,className:"animation-container"})}function RR(){return pt.useEffect(()=>{const s=t=>{const i=document.querySelector(".navigation.mobile"),r=document.querySelector(".hamburger-menu");i&&i.classList.contains("open")&&!i.contains(t.target)&&r&&!r.contains(t.target)&&(i.classList.remove("open"),r&&r.classList.remove("open"),document.body.classList.remove("menu-open"))};return document.addEventListener("mousedown",s),()=>{document.removeEventListener("mousedown",s)}},[]),N.jsxs("div",{className:"app-container",children:[N.jsx(fM,{}),N.jsx("div",{className:"animation-wrapper",children:N.jsx(AR,{})}),N.jsx("main",{className:"main-content",children:N.jsxs(AS,{children:[N.jsx(ka,{path:"/",element:N.jsx(sM,{})}),N.jsx(ka,{path:"/about",element:N.jsx(oM,{})}),N.jsx(ka,{path:"/contact",element:N.jsx(lM,{})}),N.jsx(ka,{path:"/project",element:N.jsx(cM,{})}),N.jsx(ka,{path:"/js-projects",element:N.jsx(hM,{})}),N.jsx(ka,{path:"/VueView",element:N.jsx(dM,{})}),N.jsx(ka,{path:"/ReactView",element:N.jsx(pM,{})})]})}),N.jsx(uM,{})]})}zy.createRoot(document.getElementById("root")).render(N.jsx(pt.StrictMode,{children:N.jsx(KS,{children:N.jsx(RR,{})})}));
